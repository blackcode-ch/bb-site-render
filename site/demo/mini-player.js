/* Single-turn scripted chat prop for one function (sur-mesure's catalogue). No input, model,
   file access or network. Reuses the same visual language and CSS as /demo/'s chat-player.js,
   including its table/list/email document kinds. */
import { createNarration, narrationToggle } from './narration.mjs';
(() => {
  'use strict';
  const params = new URLSearchParams(location.search);
  const requested = params.get('lang') || document.documentElement.lang || 'fr';
  const lang = ['fr', 'en', 'de', 'es', 'it'].includes(requested) ? requested : 'fr';
  const fn = params.get('fn');
  const d = globalThis.BrigitteMiniDemo[lang];
  const turn = d.functions[fn];
  const host = document.getElementById('demo-experience');
  const narration = createNarration({ lang, slugs: [`demo-mini-${fn}`] });
  const narrationLabels = {
    fr: { turnOn: 'Écouter', turnOff: 'Couper le son' },
    de: { turnOn: 'Anhören', turnOff: 'Ton aus' },
    en: { turnOn: 'Listen', turnOff: 'Mute' },
    es: { turnOn: 'Escuchar', turnOff: 'Silenciar' },
    it: { turnOn: 'Ascolta', turnOff: 'Disattiva l’audio' },
  }[lang];

  globalThis.applyDemoLanguage(lang);
  // Mini-demos have their own intro copy (one per function would be excessive; the chat
  // content itself names the task), overriding the generic /demo/ intro applyDemoLanguage set.
  const setText = (selector, value) => { const el = document.querySelector(selector); if (el) el.textContent = value; };
  setText('.demo-intro .tag', d.tag); setText('.demo-intro h1', d.heading); setText('.demo-intro .intro-text', d.intro); setText('.demo-caveat', d.caveat);
  // Contextual back link: only point back to sur-mesure when that's really where the visitor
  // came from; otherwise offer the full demo rather than a dead end.
  const fromSurMesure = /\/sur-mesure\/?(\?|$)/.test(new URL(document.referrer || '', location.href).pathname);
  const backLink = host?.closest('main')?.querySelector('.demo-bottom .text-link');
  if (backLink) {
    if (fromSurMesure) { backLink.textContent = d.backLink; backLink.href = '../../sur-mesure/'; }
    else { backLink.textContent = d.fullDemoLink; backLink.href = '../'; }
  }

  if (!host) return;
  if (!turn) { host.innerHTML = ''; return; } // unknown fn: no chat content, rest of the page (nav/footer) still works
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  host.lang = lang;

  function renderBody(doc) {
    if (doc.kind === 'table') {
      return `<table class="chat-table"><thead><tr>${doc.columns.map(c => `<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${doc.rows.map((r, i) => `<tr class="chat-table-row revealed" data-block="${i}">${r.cells.map((c, j) => `<td>${esc(c)}${r.flagged && j === r.cells.length - 1 ? ` · <strong>${esc(d.flag)}</strong>` : ''}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
    }
    if (doc.kind === 'checklist') {
      return `<ul class="chat-list">${doc.items.map((it, i) => `<li class="chat-list-row revealed" data-block="${i}"><span>${esc(it.label)}</span><span${it.flagged ? ' style="color:var(--red)"' : ''}>${esc(it.status)}</span></li>`).join('')}</ul>`;
    }
    if (doc.kind === 'list') {
      return `<ul class="chat-list">${doc.items.map((it, i) => `<li class="chat-list-row revealed" data-block="${i}"><span>${esc(it.label)}</span><span${it.flagged ? ' style="color:var(--red)"' : ''}>${esc(it.value)}${it.flagged ? ` · <strong>${esc(d.flag)}</strong>` : ''}</span></li>`).join('')}</ul>`;
    }
    // email
    return (doc.meta ? `<p class="email-meta">${esc(doc.meta)}</p>` : '') +
      doc.blocks.map((b, i) => `<p class="email-block revealed" data-block="${i}">${b}</p>`).join('');
  }

  host.innerHTML = `
    <div class="chat-frame" style="height:auto;min-height:0;max-height:none">
      <div class="chat-frame-header">
        <strong class="simulation-label">${esc(d.banner)}</strong>
        <div class="chat-frame-controls"><span class="narration-toggle-slot"></span><button type="button" class="replay-all" aria-label="${esc(d.replay)}"><span aria-hidden="true">↻</span> ${esc(d.replay)}</button></div>
      </div>
      <div class="chat-thread" style="overflow:visible">
        <section class="chat-turn" data-turn="0">
          <div class="chat-bubble chat-question" aria-label="${esc(d.lawyer)}"><p>${esc(turn.question)}</p></div>
          <div class="chat-typing" aria-hidden="true"><span></span><span></span><span></span></div>
          <div class="chat-bubble chat-answer" aria-label="${esc(d.assistant)}"><span class="brigitte-box" aria-hidden="true"></span><p>${turn.answer}</p></div>
          <div class="chat-working" aria-hidden="true"><span class="brigitte-box" aria-hidden="true"></span><span>${esc(d.working)}</span></div>
          <article class="chat-document" data-document="0" data-kind="${turn.document.kind}"><h3>${esc(turn.document.title)}</h3><div class="doc-body">${renderBody(turn.document)}</div></article>
        </section>
      </div>
    </div>
    <p class="chat-footer">${esc(d.footer)}</p>
  `;

  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const turnEl = host.querySelector('.chat-turn');
  const TYPING = 1000, WORKING = 1200;
  let timer = null;

  function revealFully() {
    turnEl.classList.add('shown');
    turnEl.querySelector('.chat-question').classList.add('revealed');
    turnEl.querySelector('.chat-answer').classList.add('revealed');
    turnEl.querySelector('.chat-document').classList.add('revealed');
  }
  function play() {
    clearTimeout(timer);
    turnEl.classList.remove('shown', 'typing', 'working');
    turnEl.querySelector('.chat-question').classList.remove('revealed');
    turnEl.querySelector('.chat-answer').classList.remove('revealed');
    turnEl.querySelector('.chat-document').classList.remove('revealed');
    narration.playTurn(0);
    if (motion.matches) { revealFully(); return; }
    turnEl.classList.add('shown', 'typing');
    turnEl.querySelector('.chat-question').classList.add('revealed');
    timer = setTimeout(() => {
      turnEl.classList.remove('typing');
      turnEl.querySelector('.chat-answer').classList.add('revealed');
      turnEl.classList.add('working');
      timer = setTimeout(() => {
        turnEl.classList.remove('working');
        turnEl.querySelector('.chat-document').classList.add('revealed');
      }, WORKING);
    }, TYPING);
  }

  host.querySelector('.narration-toggle-slot').append(narrationToggle(narration, narrationLabels));
  host.querySelector('.replay-all').addEventListener('click', play);
  motion.addEventListener('change', play);
  play();
})();
