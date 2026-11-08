/* Per-function mini-demos: one scripted turn each, same visual language as /demo/, with a real
   miniature document (table/checklist/email), not a one-line description.
   Source: DEMO_SCENARIOS_BY_FUNCTION.md (module 0, "Accueillir et organiser") + bb-director's
   13.10 18:35 document specs. Keys match sur-mesure/catalogue.js item ids. Fictitious names. */
globalThis.BrigitteMiniDemo = {
  fr: {
    tag: 'Démonstration', heading: 'Une fonction, en situation.', intro: 'Un aperçu ciblé de ce que Brigitte prépare pour cette tâche.', backLink: 'Retour à sur-mesure →', fullDemoLink: 'Voir la démo complète →', caveat: 'Maquette animée sur des pièces inventées. Les résultats restent soumis à la revue de l’avocat.',
    banner: 'Simulation — dossier fictif',
    field: 'Demandez quelque chose à Brigitte…',
    openDocument: 'Ouvrir le document',
    replay: 'Revoir',
    flag: 'à vérifier',
    footer: 'Brigitte prépare. L’avocat vérifie et décide.',
    working: 'Brigitte travaille…',
    lawyer: 'Avocat',
    assistant: 'Brigitte',
    functions: {
      conflicts: {
        question: 'Nouveau mandat : Valmont Immobilier SA contre Garage Duvoisin Sàrl. Y a-t-il un conflit ?',
        answer: 'Deux rapprochements à examiner : Valmont Immobilier est partie adverse dans le dossier Rochat SA (en cours) ; un associé de Garage Duvoisin apparaît dans un dossier clos en 2021. <strong>À vérifier</strong> avant d’accepter le mandat.',
        document: {
          kind: 'table', title: 'Fiche de contrôle', columns: ['Nom', 'Dossier', 'Statut', 'Source'],
          rows: [
            { cells: ['Valmont Immobilier SA', 'Rochat SA', 'Partie adverse', 'Dossier en cours'] },
            { cells: ['Associé, Garage Duvoisin Sàrl', 'Dossier clos 2021', 'À vérifier', 'Dossier archivé'], flagged: true },
          ],
        },
      },
      identity: {
        question: 'Pour le nouveau client Léman Holding SA, qu’est-ce qui manque au dossier d’identification ?',
        answer: 'Reçus : extrait du registre du commerce, pièce d’identité de l’administrateur. Manquent selon votre liste : déclaration de l’ayant droit économique, procuration signée. <strong>À vérifier.</strong>',
        document: {
          kind: 'checklist', title: 'Liste de contrôle',
          items: [
            { label: 'Extrait du registre du commerce', status: 'Reçu' },
            { label: 'Pièce d’identité de l’administrateur', status: 'Reçu' },
            { label: 'Déclaration de l’ayant droit économique', status: 'Manquant', flagged: true },
            { label: 'Procuration signée', status: 'Manquant', flagged: true },
          ],
        },
      },
      engagement: {
        question: 'Prépare la lettre d’engagement pour Léman Holding : litige contractuel, honoraires au temps passé.',
        answer: 'Projet préparé sur votre modèle « Contentieux ». Les éléments du mandat sont repris ; le tarif reste à compléter par vous. <strong>À relire.</strong>',
        document: {
          kind: 'email', title: 'Projet de lettre d’engagement',
          meta: 'Objet : Mandat Léman Holding SA — litige contractuel',
          blocks: [
            'Madame, Monsieur, nous vous remercions de nous confier la défense de vos intérêts dans le litige qui vous oppose à la partie adverse.',
            'Nos honoraires sont calculés au temps consacré au dossier.',
            'Tarif horaire : <strong>____</strong>',
          ],
        },
      },
      email: {
        question: 'Classe les courriels reçus ce matin.',
        answer: 'Sept courriels : cinq rattachés à un dossier (proposition), deux sans dossier évident, à classer par vous. Rien n’est déplacé sans votre validation.',
        document: {
          kind: 'table', title: 'Proposition de classement', columns: ['Courriel', 'Dossier proposé', 'Motif'],
          rows: [
            { cells: ['Relance paiement — M. Dubois', 'Dubois c. Assurance X', 'Référence citée'] },
            { cells: ['Pièce jointe — contrat de bail', 'Clientis SA — bail commercial', 'Nom et objet correspondent'] },
            { cells: ['Question délai d’appel', 'Rochat SA', 'Dossier actif, sujet correspondant'] },
            { cells: ['Confirmation rendez-vous', 'Favre — report d’audience', 'Nom cité dans l’objet'] },
            { cells: ['Transmission pièce signée', 'Léman Holding SA', 'Dossier en cours d’ouverture'] },
            { cells: ['Newsletter juridique', '— à classer par vous —', 'Aucun dossier évident'], flagged: true },
            { cells: ['Question générale assurance', '— à classer par vous —', 'Aucun dossier évident'], flagged: true },
          ],
        },
      },
      deadlines: {
        question: 'Le jugement Rochat SA a été notifié le 9.10.2026. Quel délai d’appel ?',
        answer: 'Selon la règle de 30 jours que vous avez fixée : le 8.11.2026 tombe un dimanche, date proposée lundi 9.11.2026. <strong>À vérifier</strong> (mode de notification, féries).',
        document: {
          kind: 'list', title: 'Fiche délai',
          items: [
            { label: 'Date de départ', value: '9.10.2026 (notification du jugement)' },
            { label: 'Règle appliquée', value: 'Délai de 30 jours' },
            { label: 'Date proposée', value: 'Lundi 9.11.2026', flagged: true },
            { label: 'Source', value: 'Jugement Rochat SA, art. 311 CPC' },
          ],
        },
      },
      style: {
        question: 'Réponds à Me Favre, qui demande un report d’audience, dans le style de l’étude.',
        answer: 'Projet rédigé selon vos formulations habituelles (formule d’appel, ton, signature). <strong>À relire</strong> avant envoi.',
        document: {
          kind: 'email', title: 'Projet de réponse',
          blocks: [
            'Cher Confrère,',
            'Je vous remercie de votre message concernant l’audience à venir.',
            'Je suis en mesure d’accepter le report que vous sollicitez.',
            'Je me tiens à votre disposition pour convenir d’une nouvelle date.',
            'Dans l’attente de vous lire,',
            'Bien confraternellement,<br>Me A. Fontanaz',
          ],
        },
      },
    },
  },
  de: {
    tag: 'Demonstration', heading: 'Eine Funktion, in der Praxis.', intro: 'Ein gezielter Einblick, was Brigitte für diese Aufgabe vorbereitet.', backLink: 'Zurück zu Sur mesure →', fullDemoLink: 'Zur vollständigen Demo →', caveat: 'Animierter Entwurf mit erfundenen Unterlagen. Die Ergebnisse bleiben der anwaltlichen Prüfung vorbehalten.',
    banner: 'Simulation – fiktives Dossier',
    field: 'Fragen Sie Brigitte etwas…',
    openDocument: 'Dokument öffnen',
    replay: 'Erneut abspielen',
    flag: 'zu prüfen',
    footer: 'Brigitte bereitet vor. Der Anwalt prüft und entscheidet.',
    working: 'Brigitte arbeitet…',
    lawyer: 'Anwalt',
    assistant: 'Brigitte',
    functions: {
      conflicts: {
        question: 'Neues Mandat: Valmont Immobilier SA gegen Garage Duvoisin Sàrl. Gibt es einen Konflikt?',
        answer: 'Zwei Treffer zur Prüfung: Valmont Immobilier ist Gegenpartei im Dossier Rochat SA (laufend); ein Gesellschafter der Garage Duvoisin erscheint in einem 2021 abgeschlossenen Dossier. <strong>Zu prüfen</strong>, bevor Sie das Mandat annehmen.',
        document: {
          kind: 'table', title: 'Prüfblatt', columns: ['Name', 'Dossier', 'Status', 'Quelle'],
          rows: [
            { cells: ['Valmont Immobilier SA', 'Rochat SA', 'Gegenpartei', 'Laufendes Dossier'] },
            { cells: ['Gesellschafter, Garage Duvoisin Sàrl', 'Abgeschlossenes Dossier 2021', 'Zu prüfen', 'Archiviertes Dossier'], flagged: true },
          ],
        },
      },
      identity: {
        question: 'Was fehlt im Identifikationsdossier des neuen Mandanten Léman Holding SA?',
        answer: 'Erhalten: Handelsregisterauszug, Ausweis des Verwaltungsrats. Fehlen gemäss Ihrer Liste: Erklärung zur wirtschaftlich berechtigten Person, unterzeichnete Vollmacht. <strong>Zu prüfen.</strong>',
        document: {
          kind: 'checklist', title: 'Checkliste',
          items: [
            { label: 'Handelsregisterauszug', status: 'Erhalten' },
            { label: 'Ausweis des Verwaltungsrats', status: 'Erhalten' },
            { label: 'Erklärung zur wirtschaftlich berechtigten Person', status: 'Fehlend', flagged: true },
            { label: 'Unterzeichnete Vollmacht', status: 'Fehlend', flagged: true },
          ],
        },
      },
      engagement: {
        question: 'Bereite das Mandatsschreiben für Léman Holding vor: Vertragsstreit, Honorar nach Aufwand.',
        answer: 'Entwurf auf Ihrer Vorlage «Prozess» erstellt. Die Angaben zum Mandat sind übernommen; den Tarif ergänzen Sie selbst. <strong>Zu prüfen.</strong>',
        document: {
          kind: 'email', title: 'Entwurf Mandatsschreiben',
          meta: 'Betreff: Mandat Léman Holding SA — Vertragsstreit',
          blocks: [
            'Sehr geehrte Damen und Herren, wir danken Ihnen für das Mandat zur Vertretung Ihrer Interessen im Streitfall mit der Gegenpartei.',
            'Unser Honorar wird nach dem für das Dossier aufgewendeten Zeitaufwand berechnet.',
            'Stundensatz: <strong>____</strong>',
          ],
        },
      },
      email: {
        question: 'Ordne die heute Morgen eingegangenen E-Mails zu.',
        answer: 'Sieben E-Mails: fünf einem Dossier zugeordnet (Vorschlag), zwei ohne klares Dossier, von Ihnen zuzuordnen. Nichts wird ohne Ihre Freigabe verschoben.',
        document: {
          kind: 'table', title: 'Zuordnungsvorschlag', columns: ['E-Mail', 'Vorgeschlagenes Dossier', 'Grund'],
          rows: [
            { cells: ['Zahlungserinnerung — Hr. Dubois', 'Dubois gg. Versicherung X', 'Dossiernummer genannt'] },
            { cells: ['Anhang — Mietvertrag', 'Clientis AG — Gewerbemiete', 'Name und Betreff stimmen überein'] },
            { cells: ['Frage zur Berufungsfrist', 'Rochat SA', 'Laufendes Dossier, passendes Thema'] },
            { cells: ['Terminbestätigung', 'Favre — Verschiebung der Verhandlung', 'Name im Betreff genannt'] },
            { cells: ['Übermittlung unterzeichnetes Dokument', 'Léman Holding SA', 'Dossier wird eröffnet'] },
            { cells: ['Juristischer Newsletter', '— von Ihnen zuzuordnen —', 'Kein klares Dossier'], flagged: true },
            { cells: ['Allgemeine Versicherungsfrage', '— von Ihnen zuzuordnen —', 'Kein klares Dossier'], flagged: true },
          ],
        },
      },
      deadlines: {
        question: 'Das Urteil Rochat SA wurde am 9.10.2026 zugestellt. Welche Berufungsfrist?',
        answer: 'Nach der von Ihnen festgelegten 30-Tage-Regel: Der 8.11.2026 fällt auf einen Sonntag, vorgeschlagenes Datum Montag, 9.11.2026. <strong>Zu prüfen</strong> (Zustellungsart, Gerichtsferien).',
        document: {
          kind: 'list', title: 'Fristenblatt',
          items: [
            { label: 'Fristbeginn', value: '9.10.2026 (Urteilszustellung)' },
            { label: 'Angewandte Regel', value: '30-Tage-Frist' },
            { label: 'Vorgeschlagenes Datum', value: 'Montag, 9.11.2026', flagged: true },
            { label: 'Quelle', value: 'Urteil Rochat SA, Art. 311 ZPO' },
          ],
        },
      },
      style: {
        question: 'Antworte Rechtsanwalt Favre, der eine Verschiebung der Verhandlung beantragt, im Stil der Kanzlei.',
        answer: 'Entwurf nach Ihren üblichen Formulierungen (Anrede, Ton, Signatur). <strong>Vor dem Versand zu prüfen.</strong>',
        document: {
          kind: 'email', title: 'Antwortentwurf',
          blocks: [
            'Sehr geehrter Herr Kollege,',
            'Besten Dank für Ihr Schreiben betreffend die bevorstehende Verhandlung.',
            'Ich bin in der Lage, die von Ihnen beantragte Verschiebung zu akzeptieren.',
            'Gerne stehe ich für die Vereinbarung eines neuen Termins zur Verfügung.',
            'Mit freundlichen kollegialen Grüssen,',
            'RA A. Fontanaz',
          ],
        },
      },
    },
  },
  en: {
    tag: 'Demonstration', heading: 'One function, in context.', intro: 'A focused look at what Brigitte prepares for this task.', backLink: 'Back to Sur mesure →', fullDemoLink: 'See the full demo →', caveat: 'Animated mockup using invented documents. Results remain subject to a lawyer’s review.',
    banner: 'Simulation — fictitious file',
    field: 'Ask Brigitte something…',
    openDocument: 'Open the document',
    replay: 'Replay',
    flag: 'to be checked',
    footer: 'Brigitte prepares. The lawyer checks and decides.',
    working: 'Brigitte is working…',
    lawyer: 'Lawyer',
    assistant: 'Brigitte',
    functions: {
      conflicts: {
        question: 'New matter: Valmont Immobilier SA v. Garage Duvoisin Sàrl. Is there a conflict?',
        answer: 'Two matches to review: Valmont Immobilier is the opposing party in the Rochat SA file (ongoing); a partner of Garage Duvoisin appears in a file closed in 2021. <strong>To be checked</strong> before accepting the matter.',
        document: {
          kind: 'table', title: 'Check sheet', columns: ['Name', 'File', 'Status', 'Source'],
          rows: [
            { cells: ['Valmont Immobilier SA', 'Rochat SA', 'Opposing party', 'Ongoing file'] },
            { cells: ['Partner, Garage Duvoisin Sàrl', 'File closed 2021', 'To be checked', 'Archived file'], flagged: true },
          ],
        },
      },
      identity: {
        question: 'For the new client Léman Holding SA, what is missing from the identification file?',
        answer: 'Received: commercial register extract, director’s ID. Missing according to your checklist: beneficial owner declaration, signed power of attorney. <strong>To be checked.</strong>',
        document: {
          kind: 'checklist', title: 'Checklist',
          items: [
            { label: 'Commercial register extract', status: 'Received' },
            { label: 'Director’s ID', status: 'Received' },
            { label: 'Beneficial owner declaration', status: 'Missing', flagged: true },
            { label: 'Signed power of attorney', status: 'Missing', flagged: true },
          ],
        },
      },
      engagement: {
        question: 'Prepare the engagement letter for Léman Holding: contract dispute, fees on a time basis.',
        answer: 'Draft prepared on your "Litigation" template. The matter details are filled in; the rate is left for you to complete. <strong>To be reviewed.</strong>',
        document: {
          kind: 'email', title: 'Engagement letter draft',
          meta: 'Subject: Léman Holding SA engagement — contract dispute',
          blocks: [
            'Dear Sir or Madam, thank you for entrusting us with the defence of your interests in the dispute with the opposing party.',
            'Our fees are calculated based on time spent on the file.',
            'Hourly rate: <strong>____</strong>',
          ],
        },
      },
      email: {
        question: 'Sort the emails received this morning.',
        answer: 'Seven emails: five matched to a file (proposed), two with no obvious file, for you to sort. Nothing is moved without your approval.',
        document: {
          kind: 'table', title: 'Sorting proposal', columns: ['Email', 'Proposed file', 'Reason'],
          rows: [
            { cells: ['Payment reminder — Mr Dubois', 'Dubois v. Insurance X', 'File reference cited'] },
            { cells: ['Attachment — lease agreement', 'Clientis SA — commercial lease', 'Client name and subject match'] },
            { cells: ['Question on appeal deadline', 'Rochat SA', 'Active file, matching subject'] },
            { cells: ['Appointment confirmation', 'Favre — hearing postponement', 'Name cited in subject'] },
            { cells: ['Signed document transmission', 'Léman Holding SA', 'File being opened'] },
            { cells: ['Legal newsletter', '— for you to sort —', 'No obvious file'], flagged: true },
            { cells: ['General insurance question', '— for you to sort —', 'No obvious file'], flagged: true },
          ],
        },
      },
      deadlines: {
        question: 'The Rochat SA judgment was served on 9.10.2026. What is the appeal deadline?',
        answer: 'Under the 30-day rule you set: 8.11.2026 falls on a Sunday, proposed date Monday 9.11.2026. <strong>To be checked</strong> (method of service, court holidays).',
        document: {
          kind: 'list', title: 'Deadline sheet',
          items: [
            { label: 'Start date', value: '9.10.2026 (judgment served)' },
            { label: 'Rule applied', value: '30-day deadline' },
            { label: 'Proposed date', value: 'Monday 9.11.2026', flagged: true },
            { label: 'Source', value: 'Rochat SA judgment, Art. 311 CPC' },
          ],
        },
      },
      style: {
        question: 'Reply to Mr Favre, opposing counsel, who is asking to postpone the hearing, in the firm’s style.',
        answer: 'Draft written in your usual phrasing (salutation, tone, signature). <strong>To be reviewed</strong> before sending.',
        document: {
          kind: 'email', title: 'Reply draft',
          blocks: [
            'Dear Colleague,',
            'Thank you for your letter concerning the upcoming hearing.',
            'I am able to accept the postponement you have requested.',
            'I remain available to agree on a new date.',
            'Kind regards,',
            'A. Fontanaz, attorney',
          ],
        },
      },
    },
  },
};
globalThis.BrigitteMiniDemo.es = {
 "tag": "Demostración",
 "heading": "Una función, en situación.",
 "intro": "Una vista concreta de lo que Brigitte prepara para esta tarea.",
 "backLink": "Volver a «a medida» →",
 "fullDemoLink": "Ver la demo completa →",
 "caveat": "Maqueta animada con documentos inventados. Los resultados quedan sujetos a la revisión del abogado.",
 "banner": "Simulación — expediente ficticio",
 "field": "Pídale algo a Brigitte…",
 "openDocument": "Abrir el documento",
 "replay": "Volver a ver",
 "flag": "por verificar",
 "footer": "Brigitte prepara. El abogado verifica y decide.",
 "working": "Brigitte está trabajando…",
 "lawyer": "Abogado",
 "assistant": "Brigitte",
 "functions": {
  "conflicts": {
   "question": "Nuevo mandato: Valmont Immobilier SA contra Garage Duvoisin Sàrl. ¿Hay conflicto?",
   "answer": "Dos coincidencias que examinar: Valmont Immobilier es parte contraria en el expediente Rochat SA (en curso); un socio de Garage Duvoisin aparece en un expediente cerrado en 2021. <strong>Por verificar</strong> antes de aceptar el mandato.",
   "document": {
    "kind": "table",
    "title": "Ficha de control",
    "columns": [
     "Nombre",
     "Expediente",
     "Estado",
     "Fuente"
    ],
    "rows": [
     {
      "cells": [
       "Valmont Immobilier SA",
       "Rochat SA",
       "Parte contraria",
       "Expediente en curso"
      ]
     },
     {
      "cells": [
       "Socio, Garage Duvoisin Sàrl",
       "Expediente cerrado 2021",
       "Por verificar",
       "Expediente archivado"
      ],
      "flagged": true
     }
    ]
   }
  },
  "identity": {
   "question": "Para el nuevo cliente Léman Holding SA, ¿qué falta en el expediente de identificación?",
   "answer": "Recibidos: extracto del registro mercantil, documento de identidad del administrador. Faltan según su lista: declaración del beneficiario efectivo, poder firmado. <strong>Por verificar.</strong>",
   "document": {
    "kind": "checklist",
    "title": "Lista de control",
    "items": [
     {
      "label": "Extracto del registro mercantil",
      "status": "Recibido"
     },
     {
      "label": "Documento de identidad del administrador",
      "status": "Recibido"
     },
     {
      "label": "Declaración del beneficiario efectivo",
      "status": "Falta",
      "flagged": true
     },
     {
      "label": "Poder firmado",
      "status": "Falta",
      "flagged": true
     }
    ]
   }
  },
  "engagement": {
   "question": "Prepara la carta de encargo para Léman Holding: litigio contractual, honorarios por tiempo dedicado.",
   "answer": "Borrador preparado sobre su modelo «Contencioso». Se retoman los elementos del mandato; la tarifa queda por completar por usted. <strong>Por revisar.</strong>",
   "document": {
    "kind": "email",
    "title": "Borrador de carta de encargo",
    "meta": "Asunto: Mandato Léman Holding SA — litigio contractual",
    "blocks": [
     "Estimados señores: les agradecemos que nos confíen la defensa de sus intereses en el litigio que les enfrenta a la parte contraria.",
     "Nuestros honorarios se calculan según el tiempo dedicado al expediente.",
     "Tarifa horaria: <strong>____</strong>"
    ]
   }
  },
  "email": {
   "question": "Clasifica los correos recibidos esta mañana.",
   "answer": "Siete correos: cinco vinculados a un expediente (propuesta), dos sin expediente evidente, que usted debe clasificar. No se mueve nada sin su validación.",
   "document": {
    "kind": "table",
    "title": "Propuesta de clasificación",
    "columns": [
     "Correo",
     "Expediente propuesto",
     "Motivo"
    ],
    "rows": [
     {
      "cells": [
       "Recordatorio de pago — Sr. Dubois",
       "Dubois c. Assurance X",
       "Referencia citada"
      ]
     },
     {
      "cells": [
       "Documento adjunto — contrato de arrendamiento",
       "Clientis SA — arrendamiento comercial",
       "El nombre y el objeto coinciden"
      ]
     },
     {
      "cells": [
       "Pregunta sobre el plazo de apelación",
       "Rochat SA",
       "Expediente activo, tema coincidente"
      ]
     },
     {
      "cells": [
       "Confirmación de cita",
       "Favre — aplazamiento de audiencia",
       "Nombre citado en el asunto"
      ]
     },
     {
      "cells": [
       "Envío de documento firmado",
       "Léman Holding SA",
       "Expediente en apertura"
      ]
     },
     {
      "cells": [
       "Boletín jurídico",
       "— para clasificar por usted —",
       "Ningún expediente evidente"
      ],
      "flagged": true
     },
     {
      "cells": [
       "Pregunta general sobre seguros",
       "— para clasificar por usted —",
       "Ningún expediente evidente"
      ],
      "flagged": true
     }
    ]
   }
  },
  "deadlines": {
   "question": "La sentencia Rochat SA se notificó el 9.10.2026. ¿Qué plazo de apelación?",
   "answer": "Según la regla de 30 días que usted ha fijado: el 8.11.2026 cae en domingo; fecha propuesta: lunes 9.11.2026. <strong>Por verificar</strong> (forma de notificación, feriados).",
   "document": {
    "kind": "list",
    "title": "Ficha de plazo",
    "items": [
     {
      "label": "Fecha de inicio",
      "value": "9.10.2026 (notificación de la sentencia)"
     },
     {
      "label": "Regla aplicada",
      "value": "Plazo de 30 días"
     },
     {
      "label": "Fecha propuesta",
      "value": "Lunes 9.11.2026",
      "flagged": true
     },
     {
      "label": "Fuente",
      "value": "Sentencia Rochat SA, art. 311 CPC"
     }
    ]
   }
  },
  "style": {
   "question": "Responde al Dr. Favre, que pide aplazar una audiencia, con el estilo del despacho.",
   "answer": "Borrador redactado según sus fórmulas habituales (saludo, tono, firma). <strong>Por revisar</strong> antes de enviar.",
   "document": {
    "kind": "email",
    "title": "Borrador de respuesta",
    "blocks": [
     "Estimado colega:",
     "Le agradezco su mensaje sobre la próxima audiencia.",
     "Puedo aceptar el aplazamiento que solicita.",
     "Quedo a su disposición para acordar una nueva fecha.",
     "A la espera de sus noticias,",
     "Con un cordial saludo entre colegas,<br>Abg. A. Fontanaz"
    ]
   }
  }
 }
};
globalThis.BrigitteMiniDemo.it = {
  tag: 'Dimostrazione', heading: 'Una funzione, in situazione.', intro: 'Un’anteprima mirata di ciò che Brigitte prepara per questo compito.', backLink: 'Torna a su misura →', fullDemoLink: 'Vedi la demo completa →', caveat: 'Bozza animata su documenti inventati. I risultati restano soggetti alla revisione dell’avvocato.',
  banner: 'Simulazione — pratica fittizia',
  field: 'Chiedete qualcosa a Brigitte…',
  openDocument: 'Apri il documento',
  replay: 'Rivedi',
  flag: 'da verificare',
  footer: 'Brigitte prepara. L’avvocato verifica e decide.',
  working: 'Brigitte sta lavorando…',
  lawyer: 'Avvocato',
  assistant: 'Brigitte',
  functions: {
    conflicts: {
      question: 'Nuovo mandato: Valmont Immobilier SA contro Garage Duvoisin Sàrl. C’è un conflitto?',
      answer: 'Due riscontri da esaminare: Valmont Immobilier è controparte nella pratica Rochat SA (in corso); un socio di Garage Duvoisin compare in una pratica chiusa nel 2021. <strong>Da verificare</strong> prima di accettare il mandato.',
      document: {
        kind: 'table', title: 'Scheda di controllo', columns: ['Nome', 'Pratica', 'Stato', 'Fonte'],
        rows: [
          { cells: ['Valmont Immobilier SA', 'Rochat SA', 'Controparte', 'Pratica in corso'] },
          { cells: ['Socio, Garage Duvoisin Sàrl', 'Pratica chiusa 2021', 'Da verificare', 'Pratica archiviata'], flagged: true },
        ],
      },
    },
    identity: {
      question: 'Per il nuovo cliente Léman Holding SA, cosa manca nella pratica di identificazione?',
      answer: 'Ricevuti: estratto del registro di commercio, documento d’identità dell’amministratore. Mancano secondo la vostra lista: dichiarazione dell’avente diritto economico, procura firmata. <strong>Da verificare.</strong>',
      document: {
        kind: 'checklist', title: 'Lista di controllo',
        items: [
          { label: 'Estratto del registro di commercio', status: 'Ricevuto' },
          { label: 'Documento d’identità dell’amministratore', status: 'Ricevuto' },
          { label: 'Dichiarazione dell’avente diritto economico', status: 'Mancante', flagged: true },
          { label: 'Procura firmata', status: 'Mancante', flagged: true },
        ],
      },
    },
    engagement: {
      question: 'Prepara la lettera d’incarico per Léman Holding: controversia contrattuale, onorari a tempo.',
      answer: 'Bozza preparata sul vostro modello « Contenzioso ». Gli elementi del mandato sono ripresi; la tariffa resta da completare da parte vostra. <strong>Da rileggere.</strong>',
      document: {
        kind: 'email', title: 'Bozza di lettera d’incarico',
        meta: 'Oggetto: Mandato Léman Holding SA — controversia contrattuale',
        blocks: [
          'Gentili Signore e Signori, vi ringraziamo di affidarci la difesa dei vostri interessi nella controversia che vi oppone alla controparte.',
          'I nostri onorari sono calcolati in base al tempo dedicato alla pratica.',
          'Tariffa oraria: <strong>____</strong>',
        ],
      },
    },
    email: {
      question: 'Classifica le e-mail ricevute questa mattina.',
      answer: 'Sette e-mail: cinque collegate a una pratica (proposta), due senza pratica evidente, da classificare da parte vostra. Nulla viene spostato senza la vostra convalida.',
      document: {
        kind: 'table', title: 'Proposta di classificazione', columns: ['E-mail', 'Pratica proposta', 'Motivo'],
        rows: [
          { cells: ['Sollecito di pagamento — sig. Dubois', 'Dubois c. Assicurazione X', 'Riferimento citato'] },
          { cells: ['Allegato — contratto di locazione', 'Clientis SA — locazione commerciale', 'Nome e oggetto corrispondono'] },
          { cells: ['Domanda sul termine d’appello', 'Rochat SA', 'Pratica attiva, argomento corrispondente'] },
          { cells: ['Conferma appuntamento', 'Favre — rinvio dell’udienza', 'Nome citato nell’oggetto'] },
          { cells: ['Trasmissione documento firmato', 'Léman Holding SA', 'Pratica in corso di apertura'] },
          { cells: ['Newsletter giuridica', '— da classificare da voi —', 'Nessuna pratica evidente'], flagged: true },
          { cells: ['Domanda generale sull’assicurazione', '— da classificare da voi —', 'Nessuna pratica evidente'], flagged: true },
        ],
      },
    },
    deadlines: {
      question: 'La sentenza Rochat SA è stata notificata il 9.10.2026. Quale termine d’appello?',
      answer: 'Secondo la regola dei 30 giorni che avete fissato: l’8.11.2026 cade di domenica, data proposta lunedì 9.11.2026. <strong>Da verificare</strong> (modalità di notificazione, giorni festivi).',
      document: {
        kind: 'list', title: 'Scheda del termine',
        items: [
          { label: 'Data di partenza', value: '9.10.2026 (notificazione della sentenza)' },
          { label: 'Regola applicata', value: 'Termine di 30 giorni' },
          { label: 'Data proposta', value: 'Lunedì 9.11.2026', flagged: true },
          { label: 'Fonte', value: 'Sentenza Rochat SA, art. 311 CPC' },
        ],
      },
    },
    style: {
      question: 'Rispondi all’avv. Favre, che chiede un rinvio dell’udienza, nello stile dello studio.',
      answer: 'Bozza redatta secondo le vostre formulazioni abituali (formula di apertura, tono, firma). <strong>Da rileggere</strong> prima dell’invio.',
      document: {
        kind: 'email', title: 'Bozza di risposta',
        blocks: [
          'Caro Collega,',
          'Vi ringrazio per il vostro messaggio riguardante l’udienza in programma.',
          'Sono in grado di accettare il rinvio che sollecitate.',
          'Resto a vostra disposizione per concordare una nuova data.',
          'In attesa di un vostro riscontro,',
          'Con i migliori saluti collegiali,<br>Avv. A. Fontanaz',
        ],
      },
    },
  },
};
