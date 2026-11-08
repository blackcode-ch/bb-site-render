const assets = {installation:'installation.svg', training:'training.svg', support:'support.svg'};
const slots = [...document.querySelectorAll('.setup-animation[data-setup-scene]')]
  .filter(slot => assets[slot.dataset.setupScene]);
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const copy = {
  fr: {pause:'Mettre les trois animations en pause', resume:'Reprendre les trois animations'},
  de: {pause:'Die drei Animationen pausieren', resume:'Die drei Animationen fortsetzen'},
  en: {pause:'Pause the three animations', resume:'Resume the three animations'},
  es: {pause:'Pausar las tres animaciones', resume:'Reanudar las tres animaciones'},
  it: {pause:'Metti in pausa le tre animazioni', resume:'Riprendi le tre animazioni'}
};
let userPaused = false;
const entries = slots.map((slot, index) => {
  const poster = new Image(320, 200);
  poster.className = 'route-poster';
  poster.alt = '';
  poster.loading = 'lazy';
  poster.decoding = 'async';
  poster.src = new URL(assets[slot.dataset.setupScene], import.meta.url).href;
  slot.replaceChildren(poster);
  slot.style.setProperty('--route-phase', `-${index * 1.8}s`);
  slot.dataset.running = 'false';
  return {slot, poster, art:null, visible:false, loading:false, failed:false};
});
const button = document.createElement('button');
button.type = 'button';
button.className = 'route-motion-control';
button.hidden = true;
if (slots.length) (slots[0].closest('.setup-cards') || slots.at(-1)).after(button);

function control() {
  const text = copy[document.documentElement.lang] || copy.fr;
  button.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="'+(userPaused?'M8 5L19 12L8 19Z':'M8 5V19M16 5V19')+'" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  button.setAttribute('aria-label', userPaused ? text.resume : text.pause);
  button.setAttribute('aria-pressed', String(userPaused));
  button.title = button.getAttribute('aria-label');
  button.hidden = reduced.matches || !entries.some(entry => entry.art);
}
function sync() {
  for (const entry of entries) {
    const still = reduced.matches || !entry.art;
    entry.poster.hidden = !still;
    if (entry.art) entry.art.toggleAttribute('hidden', still);
    entry.slot.dataset.running = String(!still && entry.visible && !document.hidden && !userPaused);
    if (!reduced.matches && entry.visible) load(entry);
  }
  control();
}
async function load(entry) {
  if (entry.art || entry.loading || entry.failed) return;
  entry.loading = true;
  try {
    const response = await fetch(entry.poster.src);
    if (!response.ok) throw new Error('Scene unavailable');
    const documentSVG = new DOMParser().parseFromString(await response.text(), 'image/svg+xml');
    if (documentSVG.querySelector('parsererror')) throw new Error('Invalid scene');
    const art = documentSVG.documentElement;
    art.classList.add('route-art');
    art.setAttribute('aria-hidden', 'true');
    art.setAttribute('focusable', 'false');
    entry.art = art;
    entry.slot.append(art);
  } catch {
    entry.failed = true; // The poster remains available without animation.
  } finally {
    entry.loading = false;
    sync();
  }
}
const observer = new IntersectionObserver(changes => {
  for (const change of changes) {
    const entry = entries.find(item => item.slot === change.target);
    entry.visible = change.isIntersecting && change.intersectionRatio >= .2;
  }
  sync();
}, {threshold:[0,.2]});
entries.forEach(entry => observer.observe(entry.slot));
button.addEventListener('click', () => {userPaused = !userPaused; sync();});
document.addEventListener('visibilitychange', sync);
reduced.addEventListener('change', sync);
new MutationObserver(control).observe(document.documentElement, {attributes:true, attributeFilter:['lang']});
sync();
