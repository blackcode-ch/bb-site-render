(function (root) {
  'use strict';
  const demo = 'https://calendar.app.google/pys8io6CMSMPFDck9';
  const investor = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3C4TXnnuO5LZjrhoRvE4Twv7zlPop4I9YK0rj-sKF-icaJclUum4TmnT_FVSdiCnk8mfWxuzqw';
  const address = () => ['contact', ['blackcode', 'ch'].join('.')].join('@');
  const addressFor = user => [user, ['blackcode', 'ch'].join('.')].join('@');
  const andreaWhatsApp = ['41', '79', '768', '67', '26'];
  const accessCodeWhatsApp = () => 'https://wa.me/' + andreaWhatsApp.join('') + '?text=' + encodeURIComponent(copy[language()].accessCodeMessage);
  const copy = {
    fr: { copy: "Copier l’adresse", copied: 'Copié ✓', select: 'Texte sélectionné : copiez-le avec votre appareil.', summary: 'Copier mon résumé', demo: 'Réserver une démo', investor: 'Réserver un appel investisseurs (1 h)', investorShort: 'Appel investisseurs', dossier: 'Le dossier complet vous est envoyé après la prise de rendez-vous', summaryLabel: 'Votre résumé à copier', accessCode: 'Demander le code d’accès', accessCodeMessage: 'Bonjour, je souhaite recevoir le code d’accès investisseurs de Brigitte.' },
    de: { copy: 'Adresse kopieren', copied: 'Kopiert ✓', select: 'Text ausgewählt: Kopieren Sie ihn mit Ihrem Gerät.', summary: 'Meine Zusammenfassung kopieren', demo: 'Demo vereinbaren', investor: 'Investorengespräch buchen (1 Std.)', investorShort: 'Investorengespräch', dossier: 'Das vollständige Dossier wird Ihnen nach der Terminbuchung zugesandt', summaryLabel: 'Ihre Zusammenfassung zum Kopieren', accessCode: 'Zugangscode anfordern', accessCodeMessage: 'Guten Tag, ich möchte den Investoren-Zugangscode für Brigitte erhalten.' },
    en: { copy: 'Copy address', copied: 'Copied ✓', select: 'Text selected: copy it using your device.', summary: 'Copy my summary', demo: 'Book a demo', investor: 'Book an investor call (1 h)', investorShort: 'Investor call', dossier: 'The full dossier will be sent to you after you book an appointment', summaryLabel: 'Your summary to copy', accessCode: 'Request the access code', accessCodeMessage: 'Hello, I would like to receive the investor access code for Brigitte.' },
    it: { copy: 'Copia l’indirizzo', copied: 'Copiato ✓', select: 'Testo selezionato: copiatelo con il vostro dispositivo.', summary: 'Copia il mio riepilogo', demo: 'Prenota una demo', investor: 'Prenota una chiamata per investitori (1 h)', investorShort: 'Chiamata per investitori', dossier: 'Il dossier completo vi viene inviato dopo la prenotazione dell’appuntamento', summaryLabel: 'Il vostro riepilogo da copiare', accessCode: 'Richiedi il codice di accesso', accessCodeMessage: 'Buongiorno, desidero ricevere il codice di accesso per investitori di Brigitte.' },
    es: { copy: 'Copiar la dirección', copied: 'Copiado ✓', select: 'Texto seleccionado: cópielo con su dispositivo.', summary: 'Copiar mi resumen', demo: 'Reservar una demo', investor: 'Reservar una llamada para inversores (1 h)', investorShort: 'Llamada para inversores', dossier: 'El dossier completo se le envía tras reservar la cita', summaryLabel: 'Su resumen para copiar', accessCode: 'Solicitar el código de acceso', accessCodeMessage: 'Buenos días, desearía recibir el código de acceso para inversores de Brigitte.' }
  };
  const language = () => Object.hasOwn(copy, root.document?.documentElement.lang) ? root.document.documentElement.lang : 'fr';
  async function copyText(text, selectable, status) {
    try {
      await root.navigator.clipboard.writeText(text);
      status.textContent = copy[language()].copied;
      return true;
    } catch {
      if (typeof selectable.select === 'function') { selectable.focus(); selectable.select(); }
      else {
        selectable.tabIndex = -1; selectable.focus();
        const range = root.document.createRange(); range.selectNodeContents(selectable);
        const selection = root.getSelection(); selection.removeAllRanges(); selection.addRange(range);
      }
      status.textContent = copy[language()].select;
      return false;
    }
  }
  function boot() {
    const doc = root.document;
    if (doc.querySelector('[data-investor-booking]')) {
      const requested = new URLSearchParams(root.location.search).get('lang');
      if (Object.hasOwn(copy, requested)) doc.documentElement.lang = requested;
      doc.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
        doc.documentElement.lang = button.dataset.lang;
        doc.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      }));
    }
    function render() {
      const t = copy[language()];
      doc.querySelectorAll('[data-contact-address]').forEach(host => {
        const emailAddress = host.dataset.contactAddressFor ? addressFor(host.dataset.contactAddressFor) : address();
        if (!host.querySelector('[data-address-text]')) {
          const text = doc.createElement('span'); text.dataset.addressText = ''; text.textContent = emailAddress;
          const button = doc.createElement('button'); button.type = 'button'; button.dataset.addressCopy = '';
          const status = doc.createElement('span'); status.className = 'contact-copy-status'; status.setAttribute('role', 'status');
          button.addEventListener('click', () => copyText(emailAddress, text, status));
          host.append(text, doc.createTextNode(' '), button, status);
        }
        host.querySelector('[data-address-copy]').textContent = t.copy;
      });
      doc.querySelectorAll('[data-investor-booking]').forEach(a => { a.href = investor; a.target = '_blank'; a.rel = 'noopener'; a.textContent = t.investor; });
      doc.querySelectorAll('[data-nav-booking], [data-mail]').forEach(a => {
        const isInvestor = /\/(investisseurs|teaser)(\/|\.|$)/.test(root.location.pathname);
        a.href = isInvestor ? investor : demo; a.target = '_blank'; a.rel = 'noopener';
        const label = a.querySelector('[data-i="cta"]');
        (label || a).textContent = isInvestor ? t.investorShort : t.demo;
      });
      doc.querySelectorAll('[data-investor-dossier]').forEach(n => { n.textContent = t.dossier; });
      doc.querySelectorAll('[data-investor-access-code]').forEach(a => { a.href = accessCodeWhatsApp(); a.target = '_blank'; a.rel = 'noopener'; a.textContent = t.accessCode; });
    }
    render();
    new MutationObserver(render).observe(doc.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }
  const api = { demo, investor, address, accessCodeWhatsApp, copy, language, copyText };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else { root.BrigitteContact = api; boot(); }
})(globalThis);
