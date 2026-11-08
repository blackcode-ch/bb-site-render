// Keep the photo for first paint; request the shared player only when visible and idle.
const box = document.querySelector('#hero-box');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
let visible = false, queued = false, loaded = false;
function schedule() {
  if (!visible || reduced.matches || queued || loaded || document.readyState !== 'complete') return;
  queued = true;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    const start = async () => {
      queued = false;
      if (!visible || reduced.matches || loaded) return;
      loaded = true;
      try { await import('./player.mjs'); }
      catch { /* The photo remains usable if the player cannot load. */ }
    };
    if ('requestIdleCallback' in window) requestIdleCallback(start, {timeout: 1500});
    else setTimeout(start, 200);
  }));
}
new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; schedule(); }, {threshold: .01}).observe(box);
window.addEventListener('load', schedule, {once: true});
reduced.addEventListener('change', schedule);
