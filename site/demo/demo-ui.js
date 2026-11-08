/* Local page copy. No browser storage, remote resources or model calls. */
globalThis.BrigitteDemoUI = {
  fr: {
    pageTitle:'Travailler avec Brigitte · Démonstration',tag:'Démonstration',heading:'Du dossier au travail utile.',intro:'Une avocate demande un e-mail, une chronologie, puis un relevé de temps.',caveat:'Maquette animée sur des pièces inventées. Les résultats restent soumis à la revue de l’avocate.',explore:'Explorer les cas d’usage',nav:['Le problème','Ce que fait Brigitte','Exemples','Démo','Technologie & mise en route','La box','Investisseurs','Contact','Justitia'],skip:'Aller au contenu',menu:'Menu',navigation:'Navigation principale',footerNavigation:'Navigation de pied de page',language:'Langue',theme:'Clair / sombre',created:'Créé par ',publisher:'Éditeur',country:'Suisse',tax:'TVA',since2008:'depuis 2008'
  },
  en: {
    pageTitle:'Working with Brigitte · Demonstration',tag:'Demonstration',heading:'From documents to useful work.',intro:'A lawyer asks for an email, a chronology, then a time record.',caveat:'Animated mockup using invented documents. Results remain subject to the lawyer’s review.',explore:'Explore the use cases',nav:['The problem','What Brigitte does','Examples','Demo','Technology & setup','The box','Investors','Contact','Justitia'],skip:'Skip to content',menu:'Menu',navigation:'Main navigation',footerNavigation:'Footer navigation',language:'Language',theme:'Light / dark',created:'Created by ',publisher:'Publisher',country:'Switzerland',tax:'VAT',since2008:'since 2008'
  },
  de: {
    pageTitle:'Mit Brigitte arbeiten · Demonstration',tag:'Demonstration',heading:'Von Unterlagen zu nützlicher Arbeit.',intro:'Eine Anwältin bittet um eine E-Mail, eine Chronologie, dann eine Zeiterfassung.',caveat:'Animierter Entwurf mit erfundenen Unterlagen. Die Ergebnisse bleiben der anwaltlichen Prüfung vorbehalten.',explore:'Anwendungsfälle entdecken',nav:['Das Problem','Was Brigitte leistet','Beispiele','Demo','Technologie & Einrichtung','Die Box','Investoren','Kontakt','Justitia'],skip:'Zum Inhalt',menu:'Menü',navigation:'Hauptnavigation',footerNavigation:'Fussnavigation',language:'Sprache',theme:'Hell / dunkel',created:'Erstellt von ',publisher:'Herausgeber',country:'Schweiz',tax:'MWST',since2008:'seit 2008'
  }
};
globalThis.BrigitteDemoUI.es = {
 "pageTitle": "Trabajar con Brigitte · Demostración",
 "tag": "Demostración",
 "heading": "Del expediente al trabajo útil.",
 "intro": "Una abogada pide un correo, una cronología y después un registro de tiempo.",
 "caveat": "Maqueta animada con documentos inventados. Los resultados quedan sujetos a la revisión de la abogada.",
 "explore": "Explorar los casos de uso",
 "nav": [
  "El problema",
  "Lo que hace Brigitte",
  "Ejemplos",
  "Demo",
  "Tecnología y puesta en marcha",
  "La caja",
  "Inversores",
  "Contacto",
  "Justitia"
 ],
 "skip": "Ir al contenido",
 "menu": "Menú",
 "navigation": "Navegación principal",
 "footerNavigation": "Navegación del pie de página",
 "language": "Idioma",
 "theme": "Claro / oscuro",
 "created": "Creado por ",
 "publisher": "Editor",
 "country": "Suiza",
 "tax": "IVA",
 "since2008": "desde 2008"
};
globalThis.BrigitteDemoUI.it = {
  pageTitle: 'Lavorare con Brigitte · Dimostrazione', tag: 'Dimostrazione', heading: 'Dalla pratica al lavoro utile.', intro: 'Un’avvocata chiede un’e-mail, una cronologia, poi un rendiconto del tempo.', caveat: 'Bozza animata su documenti inventati. I risultati restano soggetti alla revisione dell’avvocata.', explore: 'Esplora i casi d’uso',
  nav: ['Il problema', 'Cosa fa Brigitte', 'Esempi', 'Demo', 'Tecnologia e messa in servizio', 'Il box', 'Investitori', 'Contatto', 'Justitia'],
  skip: 'Vai al contenuto', menu: 'Menu', navigation: 'Navigazione principale', footerNavigation: 'Navigazione a piè di pagina', language: 'Lingua', theme: 'Chiaro / scuro', created: 'Creato da ', publisher: 'Editore', country: 'Svizzera', tax: 'IVA', since2008: 'dal 2008'
};
globalThis.applyDemoLanguage = lang => {
  const u=globalThis.BrigitteDemoUI[lang],set=(selector,value)=>{const el=document.querySelector(selector);if(el)el.textContent=value;};
  document.documentElement.lang=lang;document.title=u.pageTitle;
  const host=document.getElementById('demo-experience');if(host)host.lang=lang;
  document.querySelector('meta[name="description"]')?.setAttribute('content',u.intro);
  set('.demo-intro .tag',u.tag);set('.demo-intro h1',u.heading);set('.demo-intro .intro-text',u.intro);
  set('.demo-caveat',u.caveat);
  set('.demo-bottom .text-link',u.explore+' →');set('.skip',u.skip);set('.menu-toggle span:last-child',u.menu);
  for(const selector of ['.primary-nav','.footer-nav'])document.querySelectorAll(selector+' a').forEach((el,i)=>{if(el.hasAttribute("data-nav-booking")||el.hasAttribute("data-footer-tailored")||el.hasAttribute("data-footer-film"))return;const label=u.nav[Number(el.dataset.navIndex??i)];if(label)el.textContent=label;});
  document.querySelector('.primary-nav')?.setAttribute('aria-label',u.navigation);document.querySelector('.footer-nav')?.setAttribute('aria-label',u.footerNavigation);
  const theme=document.getElementById('theme');if(theme){theme.setAttribute('aria-label',u.theme);theme.title=u.theme;}
  set('footer [data-i="pub"]',u.publisher);set('footer [data-i="ch"]',u.country);set('footer [data-i="vat"]',u.tax);set('footer [data-i="since2008"]',u.since2008);
  const creator=document.querySelector('.creator-links > span');if(creator?.firstChild?.nodeType===3)creator.firstChild.textContent=u.created;
  // Local selector, independent of any home-page translation handler; hash is preserved.
  const old=document.querySelector('.tools [data-lang]');
  if(old){const group=document.createElement('span');group.className='demo-languages';group.setAttribute('role','group');group.setAttribute('aria-label',u.language);for(const code of ['fr','en','de']){const button=document.createElement('button');button.type='button';button.textContent=code.toUpperCase();button.lang=code;button.setAttribute('aria-pressed',String(lang===code));button.addEventListener('click',()=>{if(code===lang)return;const url=new URL(location.href);url.searchParams.set('lang',code);location.assign(url.href);});group.append(button);}old.replaceWith(group);}
};
