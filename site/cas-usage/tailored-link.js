(() => {
  const labels = {fr: 'Composer votre Brigitte sur mesure', de: 'Ihre Brigitte nach Mass zusammenstellen', en: 'Build your tailored Brigitte', es: 'Componga su Brigitte a medida', it: 'Componi la tua Brigitte su misura'};
  let saved = 'fr';
  try { saved = localStorage.getItem('bb-lang') || 'fr'; } catch {}
  const requested = new URLSearchParams(location.search).get('lang') || saved;
  function apply(lang) {
    lang = Object.hasOwn(labels, lang) ? lang : 'fr';
    const link = document.getElementById('tailored-link');
    link.textContent = labels[lang];
    link.href = '../sur-mesure/?lang=' + lang;
  }
  document.addEventListener('DOMContentLoaded', () => {
    apply(requested);
    document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => apply(button.dataset.lang)));
  });
})();
