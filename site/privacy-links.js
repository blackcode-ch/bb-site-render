(() => {
  const labels = {fr: ['Confidentialité', 'Investisseurs', 'Sécurité'], de: ['Datenschutz', 'Investoren', 'Sicherheit'], en: ['Privacy', 'Investors', 'Security'], it: ['Riservatezza', 'Investitori', 'Sicurezza'], es: ['Privacidad', 'Inversores', 'Seguridad']};
  const navKeys = ['#probleme','#fonctions','/cas-usage/','/demo/','/technologie/','#la-box','/investisseurs/','#contact'];
  const navLabels = {
    fr: ['Le problème','Ce que fait Brigitte','Exemples','Démo','Technologie','La box','Investisseurs','Contact'],
    de: ['Die Herausforderung','Was Brigitte leistet','Beispiele','Demos','Technologie','Die Box','Investoren','Kontakt'],
    en: ['The problem','What Brigitte does','Examples','Demo','Technology','The box','Investors','Contact'],
    it: ['Il problema','Cosa fa Brigitte','Esempi','Demo','Tecnologia','Il box','Investitori','Contatto'],
    es: ['El problema','Lo que hace Brigitte','Ejemplos','Demo','Tecnología','La caja','Inversores','Contacto']
  };
  function apply() {
    const lang = Object.hasOwn(labels, document.documentElement.lang) ? document.documentElement.lang : 'fr';
    const text = labels[lang];
    const booking = {fr:'Réserver une démo',de:'Demo vereinbaren',en:'Book a demo',it:'Prenota una demo',es:'Reservar una demo'};
    const tailored = {fr:'Sur mesure',de:'Nach Mass',en:'Tailored to you',it:'Su misura',es:'A medida'};
    document.querySelectorAll('[data-nav-booking]').forEach(a => a.textContent = booking[lang]);
    document.querySelectorAll('[data-footer-tailored]').forEach(a => {a.textContent = tailored[lang];a.href='/sur-mesure/?lang='+lang;});
    document.querySelectorAll('[data-footer-videos]').forEach(a => {a.textContent = {fr:'En images',de:'In Bildern',en:'In pictures',it:'In immagini',es:'En imágenes'}[lang];a.href='/videos/?lang='+lang;});
    document.querySelectorAll('[data-privacy-link]').forEach(a => { a.textContent = text[0]; a.href = '/confidentialite/?lang=' + lang; });
    document.querySelectorAll('.primary-nav a,.footer-nav a').forEach(a => { const url = new URL(a.href, location.href); const index = navKeys.indexOf(url.hash || url.pathname); if (index >= 0) a.textContent = navLabels[lang][index]; if(url.pathname === "/demo/")a.href="/demo/?lang="+lang; if(url.pathname === "/" && url.hash)a.href="/?lang="+lang+url.hash; });
  }
  new MutationObserver(apply).observe(document.documentElement, {attributes:true, attributeFilter:['lang']});
  apply();
})();
