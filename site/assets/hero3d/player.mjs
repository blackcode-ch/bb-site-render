import {words} from './motion.mjs';
const canvas=document.querySelector('.box-canvas'),poster=document.querySelector('.box-still'),button=document.querySelector('.motion-toggle'),container=canvas.parentElement;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let hero=null,loading=false,inView=false,failed=false,lastLabel=null,userPaused=false;
const hint=document.createElement('span');hint.className='box-hint';
const illustrative=container.parentElement?.querySelector('.illustrative');
if(illustrative)illustrative.insertAdjacentElement('afterend',hint);else container.append(hint);
const layer=document.createElement('div');layer.className='box-callout';layer.hidden=true;layer.setAttribute('aria-hidden','true');
layer.innerHTML='<svg class="box-leader"><polyline/><circle r="3"/></svg><span class="box-label"></span>';container.append(layer);
const legend=document.createElement('span');legend.className='box-sr';legend.id='box-components';container.append(legend);
const staticLegend=document.createElement('ul');staticLegend.className='box-static-legend';staticLegend.hidden=true;container.after(staticLegend);
button.removeAttribute('data-i');button.classList.add('box-pause');
const lang=()=>words[document.documentElement.lang]||words.fr;
function control(){
 const text=lang(),state=hero?.state||'playing';button.dataset.state=state;
 button.innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="'+(userPaused?'M8 5L19 12L8 19Z':'M8 5V19M16 5V19')+'" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
 button.setAttribute('aria-label',userPaused?text.resume:text.pause);button.title=userPaused?text.resume:text.pause;button.setAttribute('aria-pressed',String(userPaused));hint.textContent=text.hint;container.setAttribute('aria-label',text.keyboard);legend.textContent=text.labels.join(' · ');staticLegend.replaceChildren(...text.labels.map(value=>{const item=document.createElement('li');item.textContent=value;return item;}));if(lastLabel)label(lastLabel);
}
function label(value){
 lastLabel=value;layer.hidden=value.index<0||!hero;layer.style.opacity=String(value.opacity||0);if(layer.hidden)return;
 const text=layer.querySelector('.box-label');text.textContent=lang().labels[value.index];
 const preferredWidth=Math.min(148,value.width*.31);
 const x=value.x,left=Math.max(x+12,Math.min(value.width-preferredWidth-3,x+value.width*.24));
 const labelWidth=Math.max(50,value.width-left-3);
 const y=Math.max(24,Math.min(value.height-55,value.y)),top=y-9;
 text.style.width=labelWidth+'px';text.style.transform=`translate(${left}px,${top}px)`;
 layer.querySelector('svg').setAttribute('viewBox',`0 0 ${value.width} ${value.height}`);
 layer.querySelector('polyline').setAttribute('points',`${x},${y} ${left-4},${y}`);
 layer.querySelector('circle').setAttribute('cx',x);layer.querySelector('circle').setAttribute('cy',y);
}
function fallback(){hero?.dispose();hero=null;canvas.hidden=true;poster.hidden=false;staticLegend.hidden=false;button.hidden=true;hint.hidden=true;layer.hidden=true;container.removeAttribute('tabindex');container.removeAttribute('role');container.removeAttribute('aria-label');container.removeAttribute('aria-describedby');}
async function sync(){if(reduced.matches||failed){fallback();return;}if(hero||loading||!inView)return;loading=true;try{const {mountHero}=await import('./hero3d.mjs?v=loop-1');if(reduced.matches||!inView)return;canvas.hidden=false;hero=mountHero(canvas,{onStateChange:control,onLabel:label,zoom:Number(canvas.dataset.zoom)||1.8});if(!hero){failed=true;fallback();return;}poster.hidden=true;staticLegend.hidden=true;button.hidden=false;hint.hidden=false;container.tabIndex=0;container.setAttribute('role','group');container.setAttribute('aria-describedby','box-components');if(userPaused)hero.pause();control();}catch(error){console.warn('Hero still image:',error.message);failed=true;fallback();}finally{loading=false;}}
button.addEventListener('click',()=>{if(!hero)return;userPaused=!userPaused;if(userPaused)hero.pause();else hero.play();control();});
new MutationObserver(control).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
new IntersectionObserver(([entry])=>{inView=entry.isIntersecting;if(inView)sync();},{rootMargin:'0px',threshold:.01}).observe(container);
reduced.addEventListener('change',sync);canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();failed=true;fallback();});
if(new URLSearchParams(location.search).has('box-review'))window.brigitteHero={inspect:()=>hero?.inspect()||{static:true},seek:ms=>hero?.seek(ms)};
control();if(reduced.matches)fallback();
