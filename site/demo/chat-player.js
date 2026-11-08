/* Scripted chat prop: no editable input, model, file access or network. */
import { createNarration, narrationToggle } from './narration.mjs';
(async () => {
  'use strict';
  const requested = new URLSearchParams(location.search).get('lang') || document.documentElement.lang || 'fr';
  const lang = ['fr', 'en', 'de', 'es', 'it'].includes(requested) ? requested : 'fr';
  const d = globalThis.BrigitteChatDemo[lang];
  globalThis.applyDemoLanguage(lang);
  const host = document.getElementById('demo-experience');
  if (!host) return;
  const narration = createNarration({ lang, slugs: ['demo-main-turn1', 'demo-main-turn2', 'demo-main-turn3'] });
  const narrationLabels = {
    fr: { turnOn: 'Écouter', turnOff: 'Couper le son' },
    de: { turnOn: 'Anhören', turnOff: 'Ton aus' },
    en: { turnOn: 'Listen', turnOff: 'Mute' },
    es: { turnOn: 'Escuchar', turnOff: 'Silenciar' },
    it: { turnOn: 'Ascolta', turnOff: 'Disattiva l’audio' },
  }[lang];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Each document kind renders the SAME real content inline (building block by block) and in
  // the "open document" sheet (shown in full, at once) -- never a separate summary.
  function blockCount(doc) {
    return doc.kind === 'email' ? doc.blocks.length : doc.kind === 'table' ? doc.rows.length : doc.items.length;
  }
  function renderBody(doc, revealUpTo) {
    const shown = i => revealUpTo == null || i <= revealUpTo;
    if (doc.kind === 'email') {
      // The to/subject header shows as soon as the card does; only the body paragraphs build block by block.
      return `<p class="email-meta"><strong>${esc(lang === 'en' ? 'To' : lang === 'de' ? 'An' : 'À')}:</strong> ${esc(doc.to)} · <strong>${esc(lang === 'en' ? 'Subject' : lang === 'de' ? 'Betreff' : 'Objet')}:</strong> ${esc(doc.subject)}</p>` +
        doc.blocks.map((b, i) => `<p class="email-block${shown(i) ? ' revealed' : ''}" data-block="${i}">${b}</p>`).join('');
    }
    if (doc.kind === 'table') {
      return `<table class="chat-table"><thead><tr>${doc.columns.map(c => `<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${doc.rows.map((r, i) => `<tr class="chat-table-row${shown(i) ? ' revealed' : ''}" data-block="${i}"><td>${esc(r.date)}</td><td>${esc(r.fact)}${r.flagged ? ` · <strong>${esc(d.flag)}</strong>` : ''}</td><td>${esc(r.src)}</td></tr>`).join('')}</tbody></table>`;
    }
    return `<ul class="chat-list">${doc.items.map((it, i) => `<li class="chat-list-row${shown(i) ? ' revealed' : ''}" data-block="${i}"><span>${esc(it.label)}</span><span>${esc(it.duration)}</span></li>`).join('')}</ul>`;
  }
  function docCard(doc, i) {
    const actions = `<div class="document-actions">${doc.sendable ? `<button type="button" class="validate-send" data-send="${i}">${esc(d.validateSend)}</button><span class="sent-state" hidden>${esc(d.sent)}</span>` : ''}<button type="button" class="open-document" data-open="${i}">${esc(d.openDocument)} →</button></div>`;
    return `<article class="chat-document" data-document="${i}" data-kind="${doc.kind}"><h3>${esc(doc.title)}</h3><div class="doc-body">${renderBody(doc, null)}</div>${actions}</article>`;
  }

  host.innerHTML = `
    <div class="chat-frame">
      <div class="chat-frame-header">
        <strong class="simulation-label">${esc(d.banner)}</strong>
        <div class="chat-frame-controls">
          <span class="narration-toggle-slot"></span>
          <button type="button" class="pause-toggle">${esc(d.pause)}</button>
          <button type="button" class="next-step">${esc(d.next)} →</button>
          <button type="button" class="replay-all" aria-label="${esc(d.replay)}"><span aria-hidden="true">↻</span> ${esc(d.replay)}</button>
        </div>
      </div>
      <div class="chat-thread">
        ${d.turns.map((turn, i) => `
          <section class="chat-turn" data-turn="${i}">
            <div class="chat-bubble chat-question" aria-label="${esc(d.lawyer)}"><p>${esc(turn.question)}</p></div>
            <div class="chat-typing" aria-hidden="true"><span></span><span></span><span></span></div>
            <div class="chat-bubble chat-answer" aria-label="${esc(d.assistant)}"><span class="brigitte-box" aria-hidden="true"></span><p>${turn.answer}</p></div>
            <div class="chat-working" aria-hidden="true"><span class="brigitte-box" aria-hidden="true"></span><span>${esc(d.working)}</span></div>
            ${docCard(turn.document, i)}
          </section>`).join('')}
      </div>
      <div class="chat-composer-row">
        <div class="chat-composer" aria-hidden="true"><span>${esc(d.field)}</span></div>
        <div class="replay-chips" role="group" aria-label="${esc(d.replay)}">
          ${d.chips.map((chip, i) => `<button type="button" data-replay="${i}">${esc(chip)}</button>`).join('')}
        </div>
      </div>
    </div>
    <p class="chat-footer">${esc(d.footer)}</p>
    <div class="document-sheet" hidden><div class="document-sheet-inner"><button type="button" class="document-sheet-close" aria-label="×">×</button><div class="document-sheet-body"></div></div></div>
  `;

  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const thread = host.querySelector('.chat-thread');
  const turns = [...host.querySelectorAll('.chat-turn')];
  const scrollToEnd = () => thread.scrollTo({ top: thread.scrollHeight, behavior: motion.matches ? 'auto' : 'smooth' });

  // Human-paced playback: a flat queue of steps across every turn, each with its own wait
  // before the NEXT step fires. Pause halts the queue; Next skips the current wait.
  const TYPING = 1000, WORKING = 1200, GAP = 1800;
  const BLOCK_INTERVAL = { email: 550, table: 650, list: 550 };
  function buildQueue(fromTurn) {
    const q = [];
    for (let i = fromTurn; i < turns.length; i++) {
      const doc = d.turns[i].document, blocks = blockCount(doc), interval = BLOCK_INTERVAL[doc.kind];
      q.push({ turn: i, type: 'question', wait: motion.matches ? 0 : TYPING });
      q.push({ turn: i, type: 'answer', wait: motion.matches ? 0 : WORKING });
      for (let b = 0; b < blocks; b++) q.push({ turn: i, type: 'block', index: b, wait: motion.matches ? 0 : (b < blocks - 1 ? interval : doc.sendable ? interval : GAP) });
      if (doc.sendable) q.push({ turn: i, type: 'send', wait: motion.matches ? 0 : GAP }); // the lawyer's simulated click: Brigitte never sends on her own
    }
    return q;
  }
  let queue = buildQueue(0), cursor = -1, paused = false, timer = null;
  // Narration pacing: a turn's clip (if any) starts the moment that turn "appears" (its
  // 'question' step). pendingAudio is awaited only at that turn's LAST step, so the chat still
  // builds its own blocks at normal speed but never starts the NEXT turn before the clip ends.
  // genId guards against a stale wait (superseded by pause/resume/skip) firing a double-advance.
  let pendingAudio = null, genId = 0;

  function apply(step) {
    const turn = turns[step.turn];
    if (step.type === 'question') {
      turn.classList.add('shown', 'typing');
      turn.querySelector('.chat-question').classList.add('revealed');
    } else if (step.type === 'answer') {
      turn.classList.remove('typing');
      turn.querySelector('.chat-answer').classList.add('revealed');
      if (!motion.matches) turn.classList.add('working');
    } else if (step.type === 'block') {
      turn.classList.remove('working');
      const card = turn.querySelector('.chat-document');
      card.classList.add('revealed');
      card.querySelector(`[data-block="${step.index}"]`)?.classList.add('revealed');
    } else if (step.type === 'send') {
      const card = turn.querySelector('.chat-document');
      const btn = card.querySelector('[data-send]');
      if (btn && !btn.hidden) { btn.hidden = true; card.querySelector('.sent-state').hidden = false; }
    }
    scrollToEnd();
  }

  function scheduleNext(wait) {
    const myGen = ++genId;
    const atTurnEnd = cursor >= 0 && (cursor >= queue.length - 1 || queue[cursor + 1].turn !== queue[cursor].turn);
    if (atTurnEnd && pendingAudio) {
      const audioPromise = pendingAudio;
      pendingAudio = null;
      const timerDone = new Promise(resolve => { timer = setTimeout(resolve, wait); });
      Promise.all([timerDone, audioPromise]).then(() => { if (!paused && genId === myGen) advance(); });
    } else {
      timer = setTimeout(advance, wait);
    }
  }

  function advance() {
    clearTimeout(timer);
    cursor++;
    if (cursor >= queue.length) return;
    const step = queue[cursor];
    apply(step);
    if (step.type === 'question') pendingAudio = narration.playTurn(step.turn);
    if (paused) return;
    scheduleNext(step.wait);
  }

  function setPaused(next) {
    paused = next;
    host.querySelector('.pause-toggle').textContent = paused ? d.resume : d.pause;
    if (paused) { clearTimeout(timer); narration.pause(); }
    else { narration.resume(); if (cursor < queue.length - 1) scheduleNext(queue[cursor]?.wait ?? 0); }
  }

  function resetTurn(turn) {
    turn.classList.remove('typing', 'working');
    turn.querySelector('.chat-question').classList.remove('revealed');
    turn.querySelector('.chat-answer').classList.remove('revealed');
    const card = turn.querySelector('.chat-document');
    card.classList.remove('revealed');
    card.querySelectorAll('[data-block]').forEach(el => el.classList.remove('revealed'));
    const sent = turn.querySelector('.sent-state'), send = turn.querySelector('.validate-send');
    if (sent) { sent.hidden = true; if (send) send.hidden = false; }
  }
  function revealTurnFully(turn) {
    turn.classList.add('shown');
    turn.querySelector('.chat-question').classList.add('revealed');
    turn.querySelector('.chat-answer').classList.add('revealed');
    const card = turn.querySelector('.chat-document');
    card.classList.add('revealed');
    card.querySelectorAll('[data-block]').forEach(el => el.classList.add('revealed'));
    const btn = card.querySelector('[data-send]');
    if (btn) { btn.hidden = true; card.querySelector('.sent-state').hidden = false; }
  }

  function playFrom(index) {
    clearTimeout(timer);
    narration.stopCurrent();
    pendingAudio = null;
    turns.forEach((turn, i) => {
      resetTurn(turn);
      if (i < index) { revealTurnFully(turn); }
      else turn.classList.remove('shown');
    });
    thread.scrollTo({ top: 0 });
    queue = buildQueue(index);
    cursor = -1;
    paused = false;
    host.querySelector('.pause-toggle').textContent = d.pause;
    if (motion.matches) { queue.forEach(apply); return; }
    advance();
  }

  function playOne(index) {
    const turn = turns[index];
    resetTurn(turn);
    turn.classList.add('shown');
    turn.querySelector('.chat-question').classList.add('revealed');
    turn.scrollIntoView({ behavior: motion.matches ? 'auto' : 'smooth', block: 'start' });
    narration.playTurn(index);
    if (motion.matches) { revealTurnFully(turn); return; }
    clearTimeout(timer);
    paused = false;
    host.querySelector('.pause-toggle').textContent = d.pause;
    turn.classList.add('typing');
    const doc = d.turns[index].document, blocks = blockCount(doc), interval = BLOCK_INTERVAL[doc.kind];
    timer = setTimeout(() => {
      turn.classList.remove('typing');
      turn.querySelector('.chat-answer').classList.add('revealed');
      turn.classList.add('working');
      scrollToEnd();
      let b = -1;
      const card = turn.querySelector('.chat-document');
      const step = () => {
        turn.classList.remove('working');
        b++;
        card.classList.add('revealed');
        card.querySelector(`[data-block="${b}"]`)?.classList.add('revealed');
        scrollToEnd();
        if (b < blocks - 1) timer = setTimeout(step, interval);
        else if (doc.sendable) timer = setTimeout(() => {
          const sendBtn = card.querySelector('[data-send]');
          if (sendBtn) { sendBtn.hidden = true; card.querySelector('.sent-state').hidden = false; }
        }, GAP);
      };
      timer = setTimeout(step, 0);
    }, TYPING);
  }

  host.querySelector('.narration-toggle-slot').append(narrationToggle(narration, narrationLabels));
  host.querySelector('.replay-all').addEventListener('click', () => playFrom(0));
  host.querySelector('.pause-toggle').addEventListener('click', () => setPaused(!paused));
  host.querySelector('.next-step').addEventListener('click', () => { if (paused) setPaused(false); advance(); });
  host.querySelectorAll('[data-replay]').forEach(button => button.addEventListener('click', () => playOne(Number(button.dataset.replay))));
  host.querySelectorAll('[data-send]').forEach(button => button.addEventListener('click', e => {
    e.currentTarget.hidden = true;
    e.currentTarget.parentElement.querySelector('.sent-state').hidden = false;
  }));

  const sheet = host.querySelector('.document-sheet'), sheetBody = sheet.querySelector('.document-sheet-body');
  let lastFocused = null;
  host.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => {
    const doc = d.turns[Number(button.dataset.open)].document;
    sheetBody.innerHTML = `<h3>${esc(doc.title)}</h3><div class="doc-body">${renderBody(doc, Infinity)}</div>`;
    sheetBody.querySelectorAll('[data-block]').forEach(el => el.classList.add('revealed'));
    lastFocused = button;
    sheet.hidden = false;
    sheet.querySelector('.document-sheet-close').focus();
  }));
  function closeSheet() { sheet.hidden = true; lastFocused?.focus(); }
  sheet.querySelector('.document-sheet-close').addEventListener('click', closeSheet);
  sheet.addEventListener('click', e => { if (e.target === sheet) closeSheet(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !sheet.hidden) closeSheet(); });

  motion.addEventListener('change', () => playFrom(0));
  playFrom(0);
})();
