/* Mounts the same live hero-box scene used on the homepage, lazily (only once visible) and
   with the same reduced-motion/no-WebGL static fallback. No recorded video involved. */
const canvas = document.querySelector('.box-canvas'), poster = document.querySelector('.box-still'), button = document.querySelector('.motion-toggle');
if (canvas && poster && button) {
  const container = canvas.parentElement;
  container.appendChild(button); /* overlay the icon on the scene itself, like the film's, instead of the caption row below */
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const labels = { fr: { pause: 'Mettre en pause', resume: 'Reprendre' }, de: { pause: 'Pausieren', resume: 'Fortsetzen' }, en: { pause: 'Pause', resume: 'Resume' }, es: { pause: 'Pausar', resume: 'Reanudar' }, it: { pause: 'Metti in pausa', resume: 'Riprendi' } };
  const lang = () => labels[document.documentElement.lang] || labels.fr;
  let hero = null, loading = false, inView = false, failed = false, userPaused = false;
  function control() {
    const t = lang();
    button.textContent = userPaused ? '▶' : '⏸';
    button.setAttribute('aria-label', userPaused ? t.resume : t.pause);
    button.setAttribute('aria-pressed', String(!userPaused));
  }
  function fallback() { hero?.dispose(); hero = null; canvas.hidden = true; poster.hidden = false; button.hidden = true; }
  async function sync() {
    if (reduced.matches || failed) { fallback(); return; }
    if (hero || loading || !inView) return;
    loading = true;
    try {
      const { mountHero } = await import('../assets/hero3d/hero3d.mjs?v=loop-1');
      if (reduced.matches || !inView) return;
      canvas.hidden = false;
      hero = mountHero(canvas, {});
      if (!hero) { failed = true; fallback(); return; }
      poster.hidden = true; button.hidden = false;
      if (userPaused) hero.pause();
      control();
    } catch (error) { console.warn('Hero still image:', error.message); failed = true; fallback(); }
    finally { loading = false; }
  }
  button.addEventListener('click', () => { if (!hero) return; userPaused = !userPaused; if (userPaused) hero.pause(); else hero.play(); control(); });
  new MutationObserver(control).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    if (inView) { sync(); if (hero && !userPaused) hero.play(); }
    else if (hero) hero.pause();
  }, { threshold: .1 }).observe(container);
  reduced.addEventListener('change', sync);
  canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); failed = true; fallback(); });
  control();
  if (reduced.matches) fallback();
}

/* Film embed: matches language.js's own lang resolution (its DOMContentLoaded handler hasn't
   necessarily run yet when this module executes), sets the initial size, and syncs height. */
const film = document.getElementById('installation-film');
if (film) {
  const allowed = ['fr', 'de', 'en', 'es', 'it'];
  let lang = new URLSearchParams(location.search).get('lang');
  if (!allowed.includes(lang)) { try { lang = localStorage.getItem('bb-lang'); } catch {} }
  if (!allowed.includes(lang)) lang = 'fr';
  film.style.cssText = 'display:block;width:100%;height:700px;border:0';
  film.src = `../film/?lang=${lang}&chrome=0`;
}
/* player.mjs (loaded before this module, so it has already run) auto-creates a single
   pause control for the 3 mise-en-route scenes and inserts it as a sibling of the last
   scene's own card, where the card's overflow:hidden clips it out of view. Relocate it to
   sit, visibly, right after the whole video grid as one page-wide control. */
const motionControl = document.querySelector('.route-motion-control');
const grid = document.querySelector('.video-grid');
if (motionControl && grid) grid.after(motionControl);

addEventListener('message', event => {
  if (event.origin !== location.origin) return;
  const film = document.getElementById('installation-film');
  if (!film || event.source !== film.contentWindow || !event.data || event.data.type !== 'brigitte-film-height') return;
  const h = Number(event.data.height);
  if (Number.isFinite(h) && h >= 300 && h <= 1500) film.style.height = Math.ceil(h) + 'px';
});
