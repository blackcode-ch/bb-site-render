(() => {
 const engine=BrigitteTailor,catalogue=BrigitteCatalogue,copy=BrigitteTailorCopy;
 const requested=new URLSearchParams(location.search).get('lang');
 let lang=Object.hasOwn(copy,requested)?requested:'fr',answers=engine.normalise({}),submitted=false;
 const fields=Object.keys(engine.choices),host=document.getElementById('tailor');
 const el=(tag,text,cls)=>{const node=document.createElement(tag);if(text!==undefined)node.textContent=text;if(cls)node.className=cls;return node};
 function reason(match){const u=copy[lang],r=match.reason;return u.reasons[r.field]+(r.value?u.options[r.field][engine.choices[r.field].indexOf(r.value)]: '');}
 function hookLine(u){
  const sizeLabel=u.options.size[engine.choices.size.indexOf(answers.size[0])];
  const areaLabels=answers.areas.map(value=>u.options.areas[engine.choices.areas.indexOf(value)]).filter(Boolean);
  const areas=areaLabels.length>1?areaLabels.slice(0,-1).join(', ')+' '+u.and+' '+areaLabels[areaLabels.length-1]:areaLabels[0];
  const parts=[];
  if(sizeLabel)parts.push(u.hookSize.replace('{size}',sizeLabel));
  if(areas)parts.push(u.hookAreas.replace('{areas}',areas));
  return parts.length?u.hookIntro+parts.join(u.hookJoin)+'.':'';
 }
 const MINI_DEMO_FUNCTIONS=['conflicts','identity','engagement','email','deadlines','style'];
 function demoNode(u,item){
  const a=el('a',u.noDemo);
  a.href=item&&MINI_DEMO_FUNCTIONS.includes(item.id)?'../demo/mini/?fn='+item.id+'&lang='+lang:'../demo/?lang='+lang;
  a.className='no-demo';return a;
 }
 function renderResult(){
  const section=document.getElementById('selection');section.replaceChildren();section.hidden=!submitted;
  if(!submitted)return;
  const u=copy[lang],selected=engine.recommend(answers,catalogue);
  const heading=el('h2',u.result);heading.tabIndex=-1;heading.id='selection-heading';section.append(heading);
  const hook=hookLine(u);if(hook)section.append(el('p',hook,'hook'));
  const reasonTexts=selected.map(match=>reason(match));
  const sharedReason=reasonTexts.length&&reasonTexts.every(r=>r===reasonTexts[0])?reasonTexts[0]:null;
  if(sharedReason)section.append(el('p',u.why+' — '+sharedReason,'shared-why'));
  section.append(el('p',u.resultIntro),el('p',answers.privacy[0]==='high'?u.high:u.standard,'privacy-choice'));
  const selectedIndexes=new Set(selected.map(match=>match.index));
  const groups=new Map();for(const match of selected){const item=catalogue[match.index];if(!groups.has(item.module))groups.set(item.module,[]);groups.get(item.module).push({match,item});}
  for(const [module,items] of groups){const group=el('section',undefined,'module');group.append(el('h3',u.modules[module]));const grid=el('div',undefined,'recommendations');
   for(const {match,item} of items){const card=el('article',undefined,'recommendation');card.dataset.function=item.id;const parts=[el('h4',item.title[lang]),el('p',item.description[lang])];if(!sharedReason)parts.push(el('p',u.why+' — '+reason(match),'why'));parts.push(demoNode(u,item));card.append(...parts);grid.append(card);}group.append(grid);section.append(group);}
  const other=catalogue.filter((item,index)=>!selectedIndexes.has(index));
  const details=el('details',undefined,'other-functions');const summary=el('summary',u.otherFunctions);details.append(summary);
  const otherGroups=new Map();for(const item of other){if(!otherGroups.has(item.module))otherGroups.set(item.module,[]);otherGroups.get(item.module).push(item);}
  for(const [module,items] of otherGroups){const group=el('section',undefined,'module');group.append(el('h3',u.modules[module]));const list=el('ul',undefined,'catalogue-list');
   for(const item of items){const row=el('li');row.dataset.function=item.id;row.append(el('span',item.title[lang],'catalogue-name'),el('span',item.description[lang],'catalogue-desc'),demoNode(u,item));list.append(row);}group.append(list);details.append(group);}
  section.append(details);
  const body=[u.greeting,'',u.answers,...fields.map((key,i)=>u.questions[i]+' '+answers[key].map(value=>u.options[key][engine.choices[key].indexOf(value)]).join(', ')),'',u.recommended,...selected.map(match=>catalogue[match.index].title[lang]+' — '+reason(match)),'',answers.privacy[0]==='high'?u.high:u.standard,'',u.request].join('\r\n');
  const contact=BrigitteContact,t=contact.copy[lang];
  const action=el('div',undefined,'proposal'),book=el('a',t.demo,'cta');book.id='proposal-link';book.href=contact.demo;book.target='_blank';book.rel='noopener';action.append(book);
  const printBtn=el('button',u.print,'secondary print-button');printBtn.type='button';printBtn.addEventListener('click',()=>window.print());action.append(printBtn);
  const label=el('label',t.summaryLabel);label.htmlFor='email-body';const textarea=el('textarea');textarea.id='email-body';textarea.readOnly=true;textarea.value=body;textarea.rows=12;
  const button=el('button',t.summary,'summary-copy');button.type='button';const status=el('p');status.setAttribute('role','status');button.addEventListener('click',()=>contact.copyText(body,textarea,status));
  action.append(label,textarea,button,status);section.append(action);
  const team=el('div');team.dataset.contactTeam='';team.dataset.context='sur-mesure';team.contactSummary=body;section.append(team);BrigitteContactTeam.render();
  const humans=el('section',undefined,'humans');humans.append(el('h3',u.humansTitle),el('p',u.humansBody));section.append(humans);
 }
 function render(){
  const u=copy[lang];document.documentElement.lang=lang;document.title=u.title+' · Brigitte';document.querySelector('meta[name="description"]').content=u.intro;
  for(const [selector,text] of [['.skip',u.skip],['.menu-toggle span:last-child',u.menu],['footer [data-i="pub"]',u.publisher],['footer [data-i="ch"]',u.country],['footer [data-i="ide"]',u.uid],['footer [data-i="vat"]',u.tax],['footer [data-i="vatNumber"]','CHE-114.555.500 '+u.tax],['footer [data-i="since2008"]',u.since2008]])document.querySelector(selector).textContent=text;
  const creator=document.querySelector('.creator-links > span');creator.firstChild.textContent=u.created;
  document.querySelectorAll('.primary-nav,.footer-nav').forEach(nav=>{nav.setAttribute('aria-label',nav.classList.contains('primary-nav')?u.navigation:u.footerNavigation);nav.querySelectorAll('a').forEach((a,i)=>{if(a.hasAttribute("data-nav-booking")||a.hasAttribute("data-footer-tailored")||a.hasAttribute("data-footer-film"))return;const label=u.nav[Number(a.dataset.navIndex??i)];if(label)a.textContent=label;});});
  document.querySelector('.tools').setAttribute('aria-label',u.language);document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
  const theme=document.getElementById('theme');theme.title=u.theme;theme.setAttribute('aria-label',u.theme);
  host.replaceChildren();host.append(el('p',u.title,'tag'),el('h1',u.heading),el('p',u.intro,'intro'),el('p',u.privacyLine,'privacy-note'),el('p',u.transient,'help'));
  const form=el('form');form.id='questionnaire';form.autocomplete='off';form.noValidate=true;
  fields.forEach((key,index)=>{const group=el('fieldset');group.id='question-'+key;group.append(el('legend',String(index+1).padStart(2,'0')+' · '+u.questions[index]));const single=['size','privacy'].includes(key);const hint=el('p',single?u.single:u.multiple,'help');hint.id='hint-'+key;group.append(hint);const options=el('div',undefined,'choices');
   engine.choices[key].forEach((value,i)=>{const label=el('label',undefined,'choice');const input=el('input');input.type=single?'radio':'checkbox';input.name=key;input.value=value;input.checked=answers[key].includes(value);input.setAttribute('aria-describedby',hint.id);label.append(input,el('span',u.options[key][i]));options.append(label);});group.append(options);form.append(group);
  });
  const alert=el('p');alert.id='form-error';alert.setAttribute('role','alert');form.append(alert);const actions=el('div',undefined,'form-actions'),submit=el('button',u.submit,'cta'),reset=el('button',u.reset,'secondary');submit.type='submit';reset.type='button';reset.id='clear-answers';actions.append(submit,reset);form.append(actions);
  form.addEventListener('submit',event=>{event.preventDefault();const missing=fields.find(key=>!answers[key].length);if(missing){alert.textContent=u.missing;form.querySelector('[name="'+missing+'"]').focus();return;}alert.textContent='';submitted=true;renderResult();document.getElementById('selection-heading').focus();});
  form.addEventListener('change',()=>{answers=engine.normalise(Object.fromEntries(fields.map(key=>[key,[...form.querySelectorAll('[name="'+key+'"]:checked')].map(input=>input.value)])));submitted=false;renderResult();alert.textContent='';});
  reset.addEventListener('click',()=>{answers=engine.normalise({});submitted=false;render();document.querySelector('#questionnaire input').focus();});
  host.append(form);const section=el('section');section.id='selection';section.setAttribute('aria-labelledby','selection-heading');section.hidden=true;host.append(section);renderResult();
 }
 document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);render()}));
 try{const saved=localStorage.getItem('bb-theme-v2');if(saved)document.documentElement.dataset.theme=saved;}catch{}
 document.getElementById('theme').addEventListener('click',()=>{const current=document.documentElement.dataset.theme||'light';const next=current==='dark'?'light':'dark';document.documentElement.dataset.theme=next;try{localStorage.setItem('bb-theme-v2',next);}catch{}});
 const header=document.querySelector('.site-header'),toggle=document.querySelector('.menu-toggle');document.documentElement.dataset.navReady='';
 const close=()=>{header.removeAttribute('data-menu-open');toggle.setAttribute('aria-expanded','false')};
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';header.toggleAttribute('data-menu-open',open);toggle.setAttribute('aria-expanded',String(open));});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&header.hasAttribute('data-menu-open')){close();toggle.focus();}});
 document.addEventListener('click',e=>{if(!header.contains(e.target))close()});header.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',close));
 // Browser back/forward cache must not retain answers after leaving this page.
 window.addEventListener('pagehide',()=>{answers=engine.normalise({});submitted=false;render()});
 render();
})();
