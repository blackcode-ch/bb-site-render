'use strict';
const form = document.querySelector('form');
const status = document.querySelector('#status');
const submit = form.querySelector('button[type=submit]');
form.addEventListener('submit', async event => {
  event.preventDefault();
  if (submit.disabled) return;
  submit.disabled = true;
  status.dataset.error = 'false';
  status.textContent = 'Enregistrement en cours…';
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(form.action, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form))), signal: controller.signal });
    const result = await response.json();
    if (!response.ok || result.ok !== true) throw new Error('signup');
    status.textContent = 'Merci ! Votre inscription d’intérêt est enregistrée. Nous vous recontacterons pour confirmer la date et le lieu.';
    form.reset();
    submit.textContent = 'Intérêt enregistré';
  } catch {
    status.dataset.error = 'true';
    status.textContent = 'Votre inscription n’a pas pu être confirmée. Vérifiez les champs ou réessayez dans une minute. En cas de doute, contactez la personne qui vous a invité.';
    submit.disabled = false;
  } finally {
    clearTimeout(timeout);
    status.focus();
  }
});
