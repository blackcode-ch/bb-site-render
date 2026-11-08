/* Shared language control. Stores only a display preference, never questionnaire answers. */
(() => {
  const allowed = ['fr','de','en','it','es'];
  const url = new URL(location.href);
  let selected = url.searchParams.get('lang');
  if (!allowed.includes(selected)) { try { selected = localStorage.getItem('bb-lang'); } catch {} }
  if (!allowed.includes(selected)) selected = 'fr';
  url.searchParams.set('lang', selected);
  history.replaceState(null, '', url.pathname + url.search + url.hash);
  try { localStorage.setItem('bb-lang', selected); } catch {}
  window.addEventListener('load', () => { if(!location.hash)return;requestAnimationFrame(()=>{const target=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(!target)return;const header=document.querySelector('.site-header');window.scrollTo({top:window.scrollY+target.getBoundingClientRect().top-(header?.getBoundingClientRect().height||0)-16,behavior:'instant'});}); }, {once:true});
  document.addEventListener('DOMContentLoaded', () => {
    const tools = document.querySelector('.tools');
    if (!tools) return;
    tools.querySelectorAll('[data-lang],.demo-languages,.language-switcher').forEach(n => n.remove());
    const group = document.createElement('span'); group.className = 'language-switcher'; group.setAttribute('role','group'); group.setAttribute('aria-label','Langue / Sprache / Language / Lingua / Idioma');
    allowed.forEach(lang => { const b=document.createElement('button');b.type='button';b.dataset.lang=lang;b.lang=lang;b.textContent=lang.toUpperCase();b.setAttribute('aria-pressed',String(lang===selected));group.append(b); });
    tools.prepend(group);
    tools.addEventListener('click', event => { const b=event.target.closest('[data-lang]');if(!b)return;event.preventDefault();event.stopImmediatePropagation();const next=new URL(location.href);next.searchParams.set('lang',b.dataset.lang);try{localStorage.setItem('bb-lang',b.dataset.lang)}catch{}location.assign(next.href); },true);
    const route=location.pathname.replace(/index\.html$/,'');
    const supported = allowed;
    if (!supported.includes(selected)) { const note=document.createElement('p');note.className='language-fallback';note.lang='fr';note.textContent={de:'Version allemande en préparation',en:'Version anglaise en préparation',it:'Version italienne en préparation',es:'Version espagnole en préparation'}[selected];const main=document.querySelector('main');main?.prepend(note);main?.setAttribute('lang','fr'); }
    document.documentElement.lang=selected;
    if(selected==='en'){const me=document.querySelector('script[src*="language.js"]');if(me){const en=document.createElement('script');en.src=me.getAttribute('src').replace(/language\.js.*$/,'i18n-en.js');document.body.append(en);}}
    if(selected==='de'&&route.includes('/investisseurs/')){const me=document.querySelector('script[src*="language.js"]');if(me){const de=document.createElement('script');de.src=me.getAttribute('src').replace(/language\.js.*$/,'i18n-de-investors.js');document.body.append(de);}}
    if(selected==='it'&&route.includes('/investisseurs/')){const me=document.querySelector('script[src*="language.js"]');if(me){const it=document.createElement('script');it.src=me.getAttribute('src').replace(/language\.js.*$/,'i18n-it-investors.js');document.body.append(it);}}
    if(selected==='es'&&route.includes('/investisseurs/')){const me=document.querySelector('script[src*="language.js"]');if(me){const es=document.createElement('script');es.src=me.getAttribute('src').replace(/language\.js.*$/,'i18n-es-investors.js');document.body.append(es);}}
    if(selected==='it'){const de=document.querySelector('script[src*="pages-v4-de.js"]');if(de){const it=document.createElement('script');it.src=de.getAttribute('src').replace('pages-v4-de.js','pages-v4-it.js');document.body.append(it);}}
    try { localStorage.setItem('bb-lang',selected); } catch {}
    document.querySelectorAll("[data-education-copy]").forEach(el => el.lang = selected === "en" ? "en" : "fr");
    document.querySelectorAll("[data-education-link]").forEach(a => { a.href = selected === "en" ? "/en/understanding-ai/" : "/comprendre-ia/"; });
    function links() { document.querySelectorAll('a[href]').forEach(a=>{const link=new URL(a.getAttribute('href'),location.href);if(link.origin!==location.origin||/^\/(comprendre-ia|en\/understanding-ai)\//.test(link.pathname)||!/\/$|\.html$/.test(link.pathname)||a.hasAttribute('download'))return;link.searchParams.set('lang',selected);a.href=link.pathname+link.search+link.hash;}); }
    links(); document.addEventListener('click',event=>{const a=event.target.closest('a[href]');if(!a)return;const link=new URL(a.href,location.href);if(link.origin===location.origin&&!/^\/(comprendre-ia|en\/understanding-ai)\//.test(link.pathname)&&(/\/$|\.html$/.test(link.pathname))){link.searchParams.set('lang',selected);a.href=link.pathname+link.search+link.hash;}},true);
  });
})();
