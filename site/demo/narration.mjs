/* Demo narration: one audio clip per turn (assets/listen/<slug>-<lang>.m4a, same convention and
   availability-check as the hero/mise-en-route "listen" component). A single ON/OFF toggle
   drives it -- OFF by default, never autoplays on its own. When ON, a turn's clip starts the
   moment that turn appears; the caller is expected to gate its own advance-to-next-turn timing
   on the Promise playTurn() returns. A turn with no clip for the current language plays silently
   (no error, no visible gap in behaviour). Language is fixed for the page's lifetime (switching
   language here reloads the page), so availability and sources are resolved once at creation. */
const CACHE_V = '8d91d06'; // stamped by tools/cache-bust.mjs -- keeps regenerated same-name audio from serving a stale cached copy
export function createNarration({ lang, slugs }) {
  const entries = slugs.map(slug => {
    const audio = new Audio();
    audio.preload = 'none';
    audio.src = `${new URL(`../assets/listen/${slug}-${lang}.m4a`, import.meta.url).href}?v=${CACHE_V}`;
    return { slug, audio, available: true };
  });
  let enabled = false;
  let current = null; // { entry, release } for the clip currently playing or being waited on

  const availabilityChecked = Promise.all(entries.map(async entry => {
    try { const res = await fetch(entry.audio.src, { method: 'HEAD' }); await res.arrayBuffer(); entry.available = res.ok; }
    catch { entry.available = false; }
  }));

  // Stops whatever's current AND releases anyone awaiting its Promise -- callers (disabling
  // narration mid-clip, starting the next turn's clip, a language switch) must never leave a
  // caller's "wait for this clip to end" Promise pending forever with nothing left to resolve it.
  function stopCurrent() {
    if (!current) return;
    const { entry, release } = current;
    current = null;
    entry.audio.pause();
    entry.audio.currentTime = 0;
    release();
  }

  function setEnabled(next) {
    enabled = next;
    if (!enabled) stopCurrent();
  }

  // Starts the clip for this turn (if enabled and available) and returns a Promise that
  // resolves when that clip ends OR is stopped early -- or resolves immediately if there's
  // nothing to wait for.
  function playTurn(index) {
    stopCurrent();
    const entry = entries[index];
    if (!enabled || !entry || !entry.available) return Promise.resolve();
    entry.audio.currentTime = 0;
    entry.audio.play().catch(() => {});
    return new Promise(resolve => {
      const done = () => { entry.audio.removeEventListener('ended', done); if (current?.entry === entry) current = null; resolve(); };
      current = { entry, release: done };
      entry.audio.addEventListener('ended', done, { once: true });
    });
  }

  function pause() { current?.entry.audio.pause(); }
  function resume() { if (enabled) current?.entry.audio.play().catch(() => {}); }
  function anyAvailable() { return availabilityChecked.then(() => entries.some(e => e.available)); }

  return { playTurn, pause, resume, setEnabled, stopCurrent, anyAvailable, get enabled() { return enabled; } };
}

const ICON_ON = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"><path d="M4 9.5v5h3.2l4.8 4V5.5l-4.8 4H4Z" fill="currentColor"/><path d="M15.8 9a4.2 4.2 0 0 1 0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M18 6.7a7.6 7.6 0 0 1 0 10.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
const ICON_OFF = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"><path d="M4 9.5v5h3.2l4.8 4V5.5l-4.8 4H4Z" fill="currentColor"/><path d="m15.5 9 4 6M19.5 9l-4 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Builds the toggle button and wires it to the narration handle. Hides itself if no clip for
// this page/language is available at all. Caller inserts the returned button wherever it wants.
// labels: { turnOn, turnOff } -- short visible text, e.g. "Écouter" / "Couper le son".
export function narrationToggle(narration, labels) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'narration-toggle';
  button.hidden = true;
  function render() {
    const text = narration.enabled ? labels.turnOff : labels.turnOn;
    button.innerHTML = `${narration.enabled ? ICON_ON : ICON_OFF}<span>${esc(text)}</span>`;
    button.setAttribute('aria-pressed', String(narration.enabled));
    button.setAttribute('aria-label', text);
    button.title = text;
  }
  button.addEventListener('click', () => { narration.setEnabled(!narration.enabled); render(); });
  narration.anyAvailable().then(available => { button.hidden = !available; render(); });
  render();
  return button;
}
