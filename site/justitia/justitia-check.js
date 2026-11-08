/* "Votre étude est-elle prête ?" self-check — purely client-side.
   No network call, no storage, no data sent anywhere: the result is computed
   in the browser from the radio buttons and forgotten on reload. */
(() => {
  const form = document.getElementById('jc-form');
  if (!form) return;
  const result = document.getElementById('jc-result');
  const message = document.getElementById('jc-message');
  const book20 = document.getElementById('jc-book-20');
  const copy = {
    fr: {
      high: "Vous avez identifié plusieurs éléments de préparation. Ces réponses ne permettent pas de conclure que votre étude est prête ni de vérifier sa conformité. Chaque point manquant reste à examiner.",
      mid: "Quelques points restent à organiser. Un appel de 20 minutes suffit généralement pour en discuter.",
      low: "Plusieurs points restent à organiser. Priorisez-les selon vos obligations actuelles et le calendrier applicable à votre étude ; ce questionnaire ne permet pas d'en évaluer l'urgence. Nous pouvons en discuter ensemble, point par point.",
      book20: "Réserver un appel de 20 minutes"
    },
    de: {
      high: "Sie haben mehrere Vorbereitungsschritte benannt. Daraus lässt sich keine Einsatzbereitschaft oder Rechtskonformität ableiten. Jeder noch fehlende Punkt bleibt zu prüfen.",
      mid: "Einige Punkte sind noch zu organisieren. Ein 20-minütiges Gespräch reicht in der Regel aus, um darüber zu sprechen.",
      low: "Mehrere Punkte sind noch zu organisieren. Setzen Sie Prioritäten anhand Ihrer aktuellen Pflichten und des für Ihre Kanzlei geltenden Zeitplans; dieser Fragebogen erlaubt keine Einschätzung der Dringlichkeit. Wir können das gemeinsam, Punkt für Punkt, besprechen.",
      book20: "20-minütiges Gespräch vereinbaren"
    },
    en: {
      high: "You have identified several preparation steps. These answers do not establish that your firm is ready, or verify its compliance. Each missing point remains to be examined.",
      mid: "A few points still need organising. A 20-minute call is usually enough to talk it through.",
      low: "Several points still need organising. Prioritise them according to your current obligations and the timetable that applies to your firm; this questionnaire cannot assess how urgent they are. We can talk it through together, point by point.",
      book20: "Book a 20-minute call"
    },
    it: {
      high: "Avete individuato diversi elementi di preparazione. Queste risposte non permettono di concludere che il vostro studio sia pronto, né di verificarne la conformità. Ogni punto mancante resta da esaminare.",
      mid: "Restano alcuni punti da organizzare. Una chiamata di 20 minuti è generalmente sufficiente per parlarne.",
      low: "Restano diversi punti da organizzare. Datevi delle priorità in base ai vostri obblighi attuali e al calendario applicabile al vostro studio; questo questionario non permette di valutarne l'urgenza. Possiamo parlarne insieme, punto per punto.",
      book20: "Prenota una chiamata di 20 minuti"
    },
    es: {
      high: "Ha identificado varios elementos de preparación. Estas respuestas no permiten concluir que su despacho esté preparado, ni verificar su cumplimiento. Cada punto pendiente sigue por examinar.",
      mid: "Quedan algunos puntos por organizar. Una llamada de 20 minutos suele bastar para hablar de ello.",
      low: "Quedan varios puntos por organizar. Priorícelos según sus obligaciones actuales y el calendario aplicable a su despacho; este cuestionario no permite evaluar su urgencia. Podemos hablarlo juntos, punto por punto.",
      book20: "Reservar una llamada de 20 minutos"
    }
  };
  const names = ['jc-q1', 'jc-q2', 'jc-q3', 'jc-q4', 'jc-q5', 'jc-q6', 'jc-q7'];
  function lang() {
    const l = document.documentElement.lang;
    return copy[l] ? l : 'fr';
  }
  function render() {
    const t = copy[lang()] || copy.fr;
    let yes = 0;
    names.forEach(n => {
      const checked = form.querySelector('input[name="' + n + '"]:checked');
      if (checked && checked.value === 'oui') yes++;
    });
    const tier = yes >= 6 ? 'high' : (yes >= 3 ? 'mid' : 'low');
    message.textContent = t[tier];
    if (book20) book20.textContent = t.book20;
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    render();
    result.hidden = false;
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
  // Keep the result (if already shown) in step with a language change,
  // without sending or storing anything.
  new MutationObserver(() => { if (!result.hidden) render(); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();
