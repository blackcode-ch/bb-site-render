(function (root) {
  'use strict';
  const people = [
    { name: 'Andrea Edelman', short: 'Andrea', role: 'CEO', parts: ['41', '79', '768', '67', '26'], emailUser: 'andrea' },
    { name: 'Clara Le Gall', short: 'Clara', role: 'sales', parts: ['41', '77', '208', '18', '93'], emailUser: 'clara' },
    { name: 'Enzo', short: 'Enzo', role: 'sales', parts: [] }
  ];
  const buildEmail = user => [user, ['blackcode', 'ch'].join('.')].join('@');
  const copy = {
    fr: { heading: 'Parlez-nous directement', sales: 'Ventes', client: 'Bonjour, je suis intéressé(e) par Brigitte pour mon étude.', investor: "Bonjour, je suis intéressé(e) en tant qu'investisseur par Brigitte.", label: name => `Écrire à ${name} sur WhatsApp`, emailCopy: 'Copier', emailCopied: 'Copié ✓', emailSelect: 'Texte sélectionné : copiez-le avec votre appareil.' },
    de: { heading: 'Sprechen Sie direkt mit uns', sales: 'Verkauf', client: 'Guten Tag, ich interessiere mich für Brigitte für meine Kanzlei.', investor: 'Guten Tag, ich interessiere mich als Investor bzw. Investorin für Brigitte.', label: name => `${name} auf WhatsApp schreiben`, emailCopy: 'Kopieren', emailCopied: 'Kopiert ✓', emailSelect: 'Text ausgewählt: Kopieren Sie ihn mit Ihrem Gerät.' },
    en: { heading: 'Talk to us directly', sales: 'Sales', client: 'Hello, I am interested in Brigitte for my firm.', investor: 'Hello, I am interested in Brigitte as an investor.', label: name => `Message ${name} on WhatsApp`, emailCopy: 'Copy', emailCopied: 'Copied ✓', emailSelect: 'Text selected: copy it using your device.' },
    it: { heading: 'Parlate direttamente con noi', sales: 'Vendite', client: 'Buongiorno, sono interessato/a a Brigitte per il mio studio.', investor: 'Buongiorno, sono interessato/a a Brigitte in qualità di investitore.', label: name => `Scrivere a ${name} su WhatsApp`, emailCopy: 'Copia', emailCopied: 'Copiato ✓', emailSelect: 'Testo selezionato: copiatelo con il vostro dispositivo.' },
    es: { heading: 'Hable directamente con nosotros', sales: 'Ventas', client: 'Buenos días, me interesa Brigitte para mi despacho.', investor: 'Buenos días, me interesa Brigitte como inversor/a.', label: name => `Escribir a ${name} por WhatsApp`, emailCopy: 'Copiar', emailCopied: 'Copiado ✓', emailSelect: 'Texto seleccionado: cópielo con su dispositivo.' }
  };
  function contextFor(explicit, path = '') {
    if (['investor', 'client', 'sur-mesure'].includes(explicit)) return explicit;
    if (/\/(investisseurs|teaser)(\/|\.|$)/.test(path)) return 'investor';
    return /\/sur-mesure(\/|$)/.test(path) ? 'sur-mesure' : 'client';
  }
  function message(lang, context, summary = '') {
    const full = copy[lang][context === 'investor' ? 'investor' : 'client'] + (context === 'sur-mesure' && summary ? '\n' + summary : '');
    if (full.length <= 1500) return full;
    let cut = full.slice(0, 1499);
    const boundary = cut.search(/\s+\S*$/u);
    if (boundary > 1300) cut = cut.slice(0, boundary);
    // Do not split a UTF-16 surrogate pair when a long word has no boundary.
    cut = cut.replace(/[\uD800-\uDBFF]$/u, '').trimEnd();
    return cut + '…';
  }
  const cards = (lang, context = 'client', summary = '') => people.filter(p => p.parts.length).map(p => ({ name: p.name, role: p.role === 'sales' ? copy[lang].sales : p.role, label: copy[lang].label(p.short), href: 'https://wa.me/' + p.parts.join('') + '?text=' + encodeURIComponent(message(lang, context, summary)), email: p.emailUser ? buildEmail(p.emailUser) : '' }));
  async function copyEmail(text, holder, status, t) {
    try {
      await root.navigator.clipboard.writeText(text);
      status.textContent = t.emailCopied;
    } catch {
      holder.tabIndex = -1; holder.focus();
      const range = root.document.createRange(); range.selectNodeContents(holder);
      const selection = root.getSelection(); selection.removeAllRanges(); selection.addRange(range);
      status.textContent = t.emailSelect;
    }
  }
  function render() {
    const doc = root.document, lang = Object.hasOwn(copy, doc.documentElement.lang) ? doc.documentElement.lang : 'fr';
    const t = copy[lang];
    doc.querySelectorAll('[data-contact-team]').forEach(host => {
      host.replaceChildren(); host.classList.add('contact-team');
      const heading = doc.createElement('h3'); heading.textContent = t.heading; host.append(heading);
      const grid = doc.createElement('div'); grid.className = 'contact-team-grid';
      const context = contextFor(host.dataset.context, root.location.pathname);
      for (const person of cards(lang, context, host.contactSummary || '')) {
        const card = doc.createElement('article'), title = doc.createElement('h4'), role = doc.createElement('p'), link = doc.createElement('a');
        title.textContent = person.name; role.textContent = person.role; link.textContent = 'WhatsApp';
        link.href = person.href; link.target = '_blank'; link.rel = 'noopener'; link.className = 'cta'; link.setAttribute('aria-label', person.label);
        card.append(title, role, link);
        if (person.email) {
          const row = doc.createElement('p'); row.className = 'contact-email';
          const text = doc.createElement('span'); text.textContent = person.email;
          const button = doc.createElement('button'); button.type = 'button'; button.textContent = t.emailCopy;
          const status = doc.createElement('span'); status.className = 'contact-copy-status'; status.setAttribute('role', 'status');
          button.addEventListener('click', () => copyEmail(person.email, text, status, t));
          row.append(text, doc.createTextNode(' '), button, status);
          card.append(row);
        }
        grid.append(card);
      }
      host.append(grid);
    });
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { cards, copy, contextFor, message };
  else { root.BrigitteContactTeam = { render }; render(); new MutationObserver(render).observe(root.document.documentElement, { attributes: true, attributeFilter: ['lang'] }); }
})(globalThis);
