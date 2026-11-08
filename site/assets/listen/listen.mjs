/* Reusable "listen" voice-over button: scans every [data-listen] host, fills it with a small
   speaker button + a hidden <audio>, and wires play/pause. One audio file per (slug, language),
   resolved at assets/listen/<slug>-<lang>.m4a relative to this module. Never autoplays -- the
   <audio> only gets a real src assigned and only ever plays in response to a click. */
const CACHE_V = '8d91d06'; // stamped by tools/cache-bust.mjs -- keeps regenerated same-name audio from serving a stale cached copy
const LABELS = {
  fr: { play: 'Écouter cette section', pause: 'Mettre la lecture en pause' },
  de: { play: 'Diesen Abschnitt anhören', pause: 'Wiedergabe pausieren' },
  en: { play: 'Listen to this section', pause: 'Pause playback' },
  es: { play: 'Escuchar esta sección', pause: 'Pausar la reproducción' },
  it: { play: 'Ascolta questa sezione', pause: 'Metti in pausa la riproduzione' },
};
const ICON_PLAY = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"><path d="M4 9.5v5h3.2l4.8 4V5.5l-4.8 4H4Z" fill="currentColor"/><path d="M15.8 9a4.2 4.2 0 0 1 0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M18 6.7a7.6 7.6 0 0 1 0 10.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
const ICON_PAUSE = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"><path d="M6.5 5h3.4v14H6.5zM14.1 5h3.4v14h-3.4z" fill="currentColor"/></svg>';

const hosts = [...document.querySelectorAll('[data-listen]')];
if (hosts.length) {
  const lang = () => (LABELS[document.documentElement.lang] ? document.documentElement.lang : 'fr');

  const entries = hosts.map(host => {
    const slug = host.dataset.listen;
    const audio = document.createElement('audio');
    audio.className = 'listen-audio';
    audio.preload = 'none';
    audio.setAttribute('aria-hidden', 'true');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'listen-toggle';
    host.append(button, audio);
    const entry = { slug, audio, button };
    audio.addEventListener('play', () => render(entry, true));
    audio.addEventListener('pause', () => render(entry, false));
    audio.addEventListener('ended', () => render(entry, false));
    audio.addEventListener('error', () => { button.hidden = true; });
    button.addEventListener('click', () => toggle(entry));
    return entry;
  });

  function syncSrc(entry) {
    const l = lang();
    if (entry.audio.dataset.lang === l) return;
    const resume = !entry.audio.paused;
    entry.audio.src = `${new URL(`${entry.slug}-${l}.m4a`, import.meta.url).href}?v=${CACHE_V}`;
    entry.audio.dataset.lang = l;
    if (resume) entry.audio.play().catch(() => {});
  }

  // Hide the button for a (slug, lang) with no recording yet -- a HEAD request checks
  // existence without downloading audio, so this still never preloads content.
  async function checkAvailability(entry) {
    const l = lang();
    const url = `${new URL(`${entry.slug}-${l}.m4a`, import.meta.url).href}?v=${CACHE_V}`;
    let available = true;
    try { const res = await fetch(url, { method: 'HEAD' }); available = res.ok; }
    catch { available = false; }
    entry.button.hidden = !available;
  }

  function render(entry, playing) {
    const t = LABELS[lang()];
    entry.button.innerHTML = playing ? ICON_PAUSE : ICON_PLAY;
    entry.button.setAttribute('aria-label', playing ? t.pause : t.play);
    entry.button.setAttribute('aria-pressed', String(playing));
  }

  function toggle(entry) {
    syncSrc(entry);
    if (!entry.audio.paused) { entry.audio.pause(); return; }
    for (const other of entries) if (other !== entry && !other.audio.paused) other.audio.pause();
    entry.audio.play().catch(() => {});
  }

  entries.forEach(entry => { render(entry, false); checkAvailability(entry); });
  new MutationObserver(() => entries.forEach(entry => { syncSrc(entry); render(entry, !entry.audio.paused); checkAvailability(entry); }))
    .observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
}
