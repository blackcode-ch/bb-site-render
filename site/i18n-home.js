/* Home page DE / IT / ES copy for the redesigned home (main.c-home).
   MACHINE TRANSLATIONS of the French text, pending human review. French stays the HTML fallback.
   Exact-text table: no figures or claims added. English lives in i18n-en.js. */
(() => {
  'use strict';
  const rows = `
Pour les études d’avocats|Für Anwaltskanzleien|Per gli studi legali|Para los despachos de abogados
Votre IA.|Ihre KI.|La vostra IA.|Su IA.
Dans votre étude.|In Ihrer Kanzlei.|Nel vostro studio.|En su despacho.
Brigitte prépare le travail à partir de vos dossiers, sur le matériel installé dans vos locaux. Vous relisez et décidez.|Brigitte bereitet die Arbeit anhand Ihrer Akten vor, auf der in Ihren Räumen installierten Hardware. Sie prüfen und entscheiden.|Brigitte prepara il lavoro a partire dai vostri fascicoli, sull’hardware installato nei vostri locali. Voi rileggete e decidete.|Brigitte prepara el trabajo a partir de sus expedientes, en el equipo instalado en sus instalaciones. Usted revisa y decide.
Réserver une démo|Demo buchen|Prenotare una demo|Reservar una demo
Vue illustrative|Illustrative Ansicht|Vista illustrativa|Vista ilustrativa
Voir un exemple →|Ein Beispiel ansehen →|Vedere un esempio →|Ver un ejemplo →
blackcode SA est membre du programme NVIDIA Inception.|blackcode SA ist Mitglied des NVIDIA-Inception-Programms.|blackcode SA è membro del programma NVIDIA Inception.|blackcode SA es miembro del programa NVIDIA Inception.
01 / Le travail de l’étude|01 / Die Arbeit der Kanzlei|01 / Il lavoro dello studio|01 / El trabajo del despacho
Retrouver le fil.|Den Faden wiederfinden.|Ritrovare il filo.|Retomar el hilo.
Préparer la suite.|Das Weitere vorbereiten.|Preparare il seguito.|Preparar lo que sigue.
Une clause déjà négociée. Une pièce source. L’historique d’une affaire repris par un collègue.|Eine bereits ausgehandelte Klausel. Ein Quelldokument. Der Verlauf eines Falls, den ein Kollege übernimmt.|Una clausola già negoziata. Un documento di partenza. La storia di una pratica ripresa da un collega.|Una cláusula ya negociada. Un documento de origen. El historial de un asunto retomado por un colega.
Retrouver|Wiederfinden|Ritrovare|Recuperar
Posez une question aux dossiers que vous confiez à Brigitte. Elle prépare une réponse et montre les documents sur lesquels elle s’appuie. Les points incertains restent à vérifier.|Stellen Sie den Akten, die Sie Brigitte anvertrauen, eine Frage. Sie bereitet eine Antwort vor und zeigt die Dokumente, auf die sie sich stützt. Unsichere Punkte bleiben zu prüfen.|Ponete una domanda ai fascicoli che affidate a Brigitte. Prepara una risposta e mostra i documenti su cui si basa. I punti incerti restano da verificare.|Haga una pregunta a los expedientes que confía a Brigitte. Prepara una respuesta y muestra los documentos en los que se apoya. Los puntos inciertos quedan por verificar.
Préparer|Vorbereiten|Preparare|Preparar
Une chronologie, une synthèse, un projet de courrier ou une relecture de contrat : les fonctions sont définies avec votre étude, selon vos documents et vos accès.|Eine Chronologie, eine Zusammenfassung, ein Briefentwurf oder eine Vertragsprüfung: Die Funktionen werden mit Ihrer Kanzlei festgelegt, nach Ihren Dokumenten und Zugängen.|Una cronologia, una sintesi, una bozza di lettera o la revisione di un contratto: le funzioni sono definite con il vostro studio, in base ai vostri documenti e ai vostri accessi.|Una cronología, una síntesis, un borrador de carta o la revisión de un contrato: las funciones se definen con su despacho, según sus documentos y sus accesos.
Vérifier et décider|Prüfen und entscheiden|Verificare e decidere|Verificar y decidir
Chaque résultat reste à relire. L’avocat valide le travail préparé ; les connexions et les sources externes dépendent de vos droits et des intégrations convenues.|Jedes Ergebnis ist noch zu prüfen. Der Anwalt validiert die vorbereitete Arbeit; Verbindungen und externe Quellen hängen von Ihren Rechten und den vereinbarten Integrationen ab.|Ogni risultato resta da rileggere. L’avvocato convalida il lavoro preparato; i collegamenti e le fonti esterne dipendono dai vostri diritti e dalle integrazioni concordate.|Cada resultado debe revisarse. El abogado valida el trabajo preparado; las conexiones y las fuentes externas dependen de sus derechos y de las integraciones acordadas.
Explorer les cas d’usage →|Anwendungsfälle entdecken →|Esplorare i casi d’uso →|Explorar los casos de uso →
02 / Le cadre|02 / Der Rahmen|02 / Il quadro|02 / El marco
Le calcul sur place.|Die Berechnung vor Ort.|Il calcolo in sede.|El cálculo in situ.
Les accès définis avec vous.|Zugänge, die mit Ihnen festgelegt werden.|Gli accessi definiti con voi.|Los accesos definidos con usted.
Vos documents sont traités sur la box, dans votre étude. Les interventions de support et les connexions autorisées sont définies avec vous.|Ihre Dokumente werden auf der Box in Ihrer Kanzlei verarbeitet. Support-Einsätze und zugelassene Verbindungen werden mit Ihnen festgelegt.|I vostri documenti sono elaborati sulla box, nel vostro studio. Gli interventi di supporto e i collegamenti autorizzati sono definiti con voi.|Sus documentos se procesan en la caja, en su despacho. Las intervenciones de soporte y las conexiones autorizadas se definen con usted.
L’installation locale ne certifie pas la conformité. Votre étude conserve la responsabilité de ses choix, des accès et de la vérification des résultats.|Die lokale Installation bescheinigt keine Konformität. Ihre Kanzlei bleibt verantwortlich für ihre Entscheidungen, die Zugänge und die Prüfung der Ergebnisse.|L’installazione locale non certifica la conformità. Il vostro studio conserva la responsabilità delle proprie scelte, degli accessi e della verifica dei risultati.|La instalación local no certifica el cumplimiento normativo. Su despacho conserva la responsabilidad de sus decisiones, de los accesos y de la verificación de los resultados.
Comprendre le fonctionnement →|Die Funktionsweise verstehen →|Capire il funzionamento →|Entender el funcionamiento →
03 / La mise en route|03 / Der Einstieg|03 / L’avvio|03 / La puesta en marcha
Préparée avec vous.|Mit Ihnen vorbereitet.|Preparata con voi.|Preparada con usted.
Installée chez vous.|Bei Ihnen installiert.|Installata da voi.|Instalada en su despacho.
Un premier périmètre, adapté à vos habitudes de travail.|Ein erster Umfang, angepasst an Ihre Arbeitsgewohnheiten.|Un primo perimetro, adattato alle vostre abitudini di lavoro.|Un primer alcance, adaptado a sus hábitos de trabajo.
Définir les usages|Anwendungen festlegen|Definire gli usi|Definir los usos
Un rendez-vous, un récapitulatif, puis un atelier pour préciser les documents, les outils et les fonctions à préparer.|Ein Termin, eine Zusammenfassung, dann ein Workshop, um die Dokumente, Werkzeuge und vorzubereitenden Funktionen zu präzisieren.|Un appuntamento, un riepilogo, poi un workshop per precisare i documenti, gli strumenti e le funzioni da preparare.|Una reunión, un resumen y después un taller para precisar los documentos, las herramientas y las funciones que preparar.
Installer et former|Installieren und schulen|Installare e formare|Instalar y formar
Notre équipe vient dans votre étude pour l’installation et la prise en main avec vos collaborateurs.|Unser Team kommt in Ihre Kanzlei für die Installation und die Einführung mit Ihren Mitarbeitenden.|Il nostro team viene nel vostro studio per l’installazione e l’avvio con i vostri collaboratori.|Nuestro equipo acude a su despacho para la instalación y la puesta en práctica con sus colaboradores.
Accompagner|Begleiten|Accompagnare|Acompañar
Un accompagnement pendant les premières semaines. Les modalités de support sont convenues avec votre étude.|Eine Begleitung in den ersten Wochen. Die Support-Modalitäten werden mit Ihrer Kanzlei vereinbart.|Un accompagnamento nelle prime settimane. Le modalità di supporto sono concordate con il vostro studio.|Un acompañamiento durante las primeras semanas. Las modalidades de soporte se acuerdan con su despacho.
Un premier échange|Ein erstes Gespräch|Un primo scambio|Un primer intercambio
Voyez Brigitte sur|Sehen Sie Brigitte an|Vedete Brigitte su|Vea a Brigitte en
un exemple concret.|einem konkreten Beispiel.|un esempio concreto.|un ejemplo concreto.
Vos usages. Vos dossiers. Votre cadre.|Ihre Anwendungen. Ihre Akten. Ihr Rahmen.|I vostri usi. I vostri fascicoli. Il vostro quadro.|Sus usos. Sus expedientes. Su marco.
Une démonstration en 20 minutes.|Eine Demonstration in 20 Minuten.|Una dimostrazione in 20 minuti.|Una demostración en 20 minutos.
La Brigitte Box ouverte, avec son boîtier et ses composants|Die geöffnete Brigitte Box mit Gehäuse und Komponenten|La Brigitte Box aperta, con il suo involucro e i suoi componenti|La Brigitte Box abierta, con su carcasa y sus componentes
Illustration de la box dans un bureau de l’étude|Illustration der Box in einem Büro der Kanzlei|Illustrazione della box in un ufficio dello studio|Ilustración de la caja en una oficina del despacho
Illustration d’un rendez-vous dans une étude avec la box|Illustration eines Termins in einer Kanzlei mit der Box|Illustrazione di un appuntamento in uno studio con la box|Ilustración de una reunión en un despacho con la caja
`;
  const idx = { de: 1, it: 2, es: 3 };
  const norm = v => v.replace(/\s+/g, ' ').trim();
  const table = { de: new Map(), it: new Map(), es: new Map() };
  rows.trim().split('\n').forEach(line => {
    const p = line.split('|');
    for (const l of Object.keys(idx)) table[l].set(norm(p[0]), p[idx[l]]);
  });
  const lang = () => new URLSearchParams(location.search).get('lang') || document.documentElement.lang;
  function run() {
    const l = lang(); if (!table[l]) return;
    const main = document.querySelector('main.c-home'); if (!main) return;
    const t = table[l];
    const w = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) { const n = w.currentNode, k = norm(n.nodeValue); if (t.has(k)) n.nodeValue = n.nodeValue.replace(n.nodeValue.trim(), t.get(k)); }
    main.querySelectorAll('[alt],[aria-label]').forEach(e => { for (const a of ['alt', 'aria-label']) { const v = e.getAttribute(a); if (v && t.has(norm(v))) e.setAttribute(a, t.get(norm(v))); } });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
