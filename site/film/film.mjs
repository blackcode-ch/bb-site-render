import {copy,duration,chapters} from './copy.mjs';
const $=id=>document.getElementById(id), params=new URLSearchParams(location.search);
const minimalChrome=params.get('chrome')==='0'; // embedded contexts (e.g. the homepage): just the scene + a discreet pause icon
if(minimalChrome)document.querySelector('main').dataset.chrome='minimal';
let lang=copy[params.get('lang')]?params.get('lang'):'fr', engine, initializing, time=0, playing=true, visible=true, staticReason='', last=0, frame=0;
const reduced=matchMedia('(prefers-reduced-motion: reduce)'), colorScheme=matchMedia('(prefers-color-scheme: dark)');
if(['light','dark'].includes(params.get('theme')))document.documentElement.dataset.theme=params.get('theme');
function currentChapter(){return chapters.reduce((active,start,i)=>time>=start?i:active,0);}
function text(){const t=copy[lang], index=staticReason?3:currentChapter();document.documentElement.lang=lang;$('language').value=lang;$('eyebrow').textContent=t.title;$('illustrative').textContent=t.illustrative;$('caption').textContent=t.scenes[index][0];$('caption').style.whiteSpace='pre-line';$('detail').textContent=t.scenes[index][1];$('scene-note').textContent=t.note;$('hint').textContent=staticReason?t[staticReason]:t.hint;$('poster').alt=t.alt;$('description').textContent=t.description;$('chapters').setAttribute('aria-label',t.stepNav);document.querySelector('main').setAttribute('aria-label',t.title);$('timeline-label').textContent=t.timeline;$('restart').title=t.restart;$('restart').setAttribute('aria-label',t.restart);const playLabel=time>=duration?t.replay:playing?t.pause:t.play;$('play').textContent=minimalChrome?(time>=duration?'↻':playing?'⏸':'▶'):playLabel;$('play').setAttribute('aria-label',playLabel);$('play').setAttribute('aria-pressed',String(playing));$('timeline').value=time;$('timeline').setAttribute('aria-valuetext',`${Math.floor(time)} / ${duration}`);$('clock').textContent=`0:${String(Math.floor(time)).padStart(2,'0')} / 0:36`;document.querySelectorAll('[data-chapter]').forEach((b,i)=>{b.querySelector('b').textContent=t.chapters[i];b.disabled=!!staticReason;if(i===index)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');});document.body.dataset.state=staticReason?'still':time>=duration?'finished':playing?'playing':'paused';}
function poster(){const dark=getComputedStyle(document.documentElement).colorScheme==='dark';$('poster').src=`./poster${innerWidth<=600?'-mobile':''}${dark?'-dark':''}.png`;}
function stopFrame(){cancelAnimationFrame(frame);frame=0;last=0;}
function draw(){if(engine&&!staticReason)engine.render(time);text();}
function loop(now){frame=0;if(!playing||!visible||document.hidden||staticReason)return;time=Math.min(duration,time+(last?(now-last)/1000:0));last=now;if(time>=duration)playing=false;draw();if(playing)frame=requestAnimationFrame(loop);else last=0;}
function schedule(){if(engine&&playing&&visible&&!document.hidden&&!staticReason&&!frame)frame=requestAnimationFrame(loop);}
function pause(){playing=false;stopFrame();text();}
function seek(value){pause();time=Math.max(0,Math.min(duration,Number(value)||0));engine?.resetView();draw();}
function still(reason){staticReason=reason;poster();stopFrame();engine?.dispose();engine=null;document.body.dataset.static='';$('scene').hidden=true;$('poster').hidden=false;$('transport').hidden=true;text();}
async function initialize(){if(reduced.matches){still('static');return;}if(engine||initializing)return;staticReason='';delete document.body.dataset.static;initializing=true;
 try{const {createFilm}=await import('./scene.mjs');if(reduced.matches)return;engine=createFilm($('scene'),{pause,dark:getComputedStyle(document.documentElement).colorScheme==='dark'});$('scene').hidden=false;$('poster').hidden=true;$('transport').hidden=false;engine.resize();draw();schedule();}
 catch(error){console.warn('Film fallback:',error.message);still('unavailable');}
 finally{initializing=false;}
}
$('play').addEventListener('click',()=>{if(playing)pause();else{if(time>=duration)time=0;engine?.resetView();playing=true;text();schedule();}});
$('restart').addEventListener('click',()=>{seek(0);playing=true;text();schedule();});$('timeline').addEventListener('input',e=>seek(e.target.value));
document.querySelectorAll('[data-chapter]').forEach(b=>b.addEventListener('click',()=>seek(chapters[Number(b.dataset.chapter)])));
$('language').addEventListener('change',e=>{lang=e.target.value;text();});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopFrame();else schedule();});
new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible){initialize();schedule();}else stopFrame();},{threshold:.1}).observe($('stage'));
reduced.addEventListener('change',()=>{if(reduced.matches)still('static');else{time=0;playing=false;initialize();}});
colorScheme.addEventListener('change',()=>{poster();if(!params.has('theme')){engine?.setDark(getComputedStyle(document.documentElement).colorScheme==='dark');draw();}});
$('scene').addEventListener('webglcontextlost',e=>{e.preventDefault();still('unavailable');});
// A static, same-origin parent can use these documented messages; reject other origins/sources.
addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==parent||!e.data||e.data.type!=='brigitte-film')return;if(copy[e.data.lang]){lang=e.data.lang;text();}if(['light','dark'].includes(e.data.theme)){document.documentElement.dataset.theme=e.data.theme;engine?.setDark(e.data.theme==='dark');poster();draw();}if(e.data.action==='pause')pause();});
// Deterministic local review/export interface, enabled only by an explicit query parameter.
if(params.has('review'))window.brigitteFilm={seek,state:()=>({time,playing,staticReason,ready:!!engine,chapter:currentChapter(),duration}),bounds:()=>engine?.networkBounds()};
addEventListener('resize',poster);new ResizeObserver(()=>{if(parent!==window)parent.postMessage({type:'brigitte-film-height',height:document.body.scrollHeight},location.origin);}).observe(document.querySelector('main'));
poster();text();if(reduced.matches)still('static');
