(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  if (header && toggle) {
    document.documentElement.dataset.navReady = '';
    const close = () => { header.removeAttribute('data-menu-open'); toggle.setAttribute('aria-expanded', 'false'); };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      header.toggleAttribute('data-menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    header.querySelectorAll('nav a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && header.hasAttribute('data-menu-open')) { close(); toggle.focus(); } });
    document.addEventListener('click', e => { if (!header.contains(e.target)) close(); });
  }
  // Home retains its existing translation and theme handlers.
  if (typeof setLang === 'undefined') {
    try { const saved = localStorage.getItem('bb-theme-v2'); if (saved) document.documentElement.dataset.theme = saved; } catch {}
    document.getElementById('theme')?.addEventListener('click', () => {
      const current = document.documentElement.dataset.theme || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('bb-theme-v2', next); } catch {}
    });
    // Shared legal footer + creator credit: pages without their own translation object
    // (confidentialite, investisseurs, videos, ...) still carry this common markup.
    const FOOTER_I18N = {
      de: { pub: 'Herausgeber', ch: 'Schweiz', ide: 'UID', vat: 'MWST', created: 'Entwickelt von ', since2008: 'seit 2008' },
      en: { pub: 'Publisher', ch: 'Switzerland', ide: 'UID', vat: 'VAT', created: 'Created by ', since2008: 'since 2008' },
      it: { pub: 'Editore', ch: 'Svizzera', ide: 'IDI', vat: 'IVA', created: 'Creato da ', since2008: 'dal 2008' },
      es: { pub: 'Editor', ch: 'Suiza', ide: 'IDE', vat: 'IVA', created: 'Creado por ', since2008: 'desde 2008' },
    };
    document.addEventListener('DOMContentLoaded', () => {
      const dict = FOOTER_I18N[document.documentElement.lang];
      if (!dict) return;
      document.querySelectorAll('[data-i="pub"]').forEach(e => e.textContent = dict.pub);
      document.querySelectorAll('[data-i="ch"]').forEach(e => e.textContent = dict.ch);
      document.querySelectorAll('[data-i="ide"]').forEach(e => e.textContent = dict.ide);
      document.querySelectorAll('[data-i="vat"]').forEach(e => e.textContent = dict.vat);
      document.querySelectorAll('[data-i="vatNumber"]').forEach(e => e.textContent = 'CHE-114.555.500 ' + dict.vat);
      document.querySelectorAll('[data-i="created"]').forEach(e => e.textContent = dict.created);
      document.querySelectorAll('[data-i="since2008"]').forEach(e => e.textContent = dict.since2008);
    });
  }
})();
