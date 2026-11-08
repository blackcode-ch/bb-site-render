/* Single scripted conversation: a fictional file, in three turns. No real document.
   V3 (Andrea, 13.10): e-mail -> validate & send, chronology table built row by row,
   optional time record. Fictitious lawyer: Me A. Fontanaz (she/her). */
globalThis.BrigitteChatDemo = {
  fr: {
    banner: 'Simulation — dossier fictif',
    field: 'Demandez quelque chose à Brigitte…',
    chips: ['Un e-mail', 'La chronologie', 'Le relevé de temps'],
    openDocument: 'Ouvrir le document',
    replay: 'Revoir la conversation',
    flag: 'à vérifier',
    footer: 'Brigitte prépare. L’avocate vérifie et décide.',
    working: 'Brigitte travaille…',
    validateSend: 'Valider et envoyer',
    sent: 'Envoyé ✓',
    pause: 'Pause',
    next: 'Suivant',
    resume: 'Reprendre',
    lawyer: 'Avocate',
    assistant: 'Brigitte',
    turns: [
      {
        question: 'Écris un e-mail à Mme Rochat pour lui demander la facture des travaux et le procès-verbal de réception.',
        answer: 'Voici un projet. Relisez-le, je ne l’envoie qu’après votre validation.',
        document: {
          kind: 'email', title: 'Projet d’e-mail', sendable: true,
          to: 'Mme L. Rochat', subject: 'Dossier Rochat SA : deux pièces à nous transmettre',
          blocks: [
            'Madame,',
            'Afin de préparer la suite de la procédure, nous vous remercions de nous transmettre la facture des travaux de mars 2024 ainsi que le procès-verbal de réception signé.',
            'Nous restons à votre disposition.',
            'Avec nos meilleures salutations,<br>Me A. Fontanaz',
          ],
        },
      },
      {
        question: 'Donne-moi la chronologie du dossier.',
        answer: 'La voici, chaque date renvoie à sa pièce. Un point <strong>à vérifier</strong> : deux dates de fin des travaux.',
        document: {
          kind: 'table', title: 'Chronologie du dossier', columns: ['Date', 'Fait', 'Source'],
          rows: [
            { date: '12.3.2019', fact: 'Contrat d’entreprise signé avec Valmont Immobilier', src: 'P01' },
            { date: '30.11.2023', fact: 'Fin des travaux selon Valmont', src: 'P05' },
            { date: '15.1.2024', fact: 'Fin des travaux selon le PV de chantier', src: 'P06', flagged: true },
            { date: '20.3.2024', fact: 'Décompte final adressé à Rochat SA', src: 'P07' },
            { date: '3.9.2026', fact: 'Audience de conciliation, échec', src: 'P09' },
          ],
        },
      },
      {
        question: 'Et prépare le relevé de temps du mois.',
        answer: 'Trois saisies proposées, durées <strong>à vérifier</strong>.',
        document: {
          kind: 'list', title: 'Relevé de temps',
          items: [
            { label: 'Chronologie du dossier', duration: '0 h 40' },
            { label: 'E-mail à la cliente', duration: '0 h 15' },
            { label: 'Reprise du dossier', duration: '1 h 10' },
          ],
        },
      },
    ],
  },
  de: {
    banner: 'Simulation – fiktives Dossier',
    field: 'Fragen Sie Brigitte etwas…',
    chips: ['Eine E-Mail', 'Die Chronologie', 'Die Zeiterfassung'],
    openDocument: 'Dokument öffnen',
    replay: 'Gespräch erneut abspielen',
    flag: 'zu prüfen',
    footer: 'Brigitte bereitet vor. Die Anwältin prüft und entscheidet.',
    working: 'Brigitte arbeitet…',
    validateSend: 'Freigeben und senden',
    sent: 'Gesendet ✓',
    pause: 'Pause',
    next: 'Weiter',
    resume: 'Fortsetzen',
    lawyer: 'Anwältin',
    assistant: 'Brigitte',
    turns: [
      {
        question: 'Schreib eine E-Mail an Frau Rochat und bitte um die Bauabrechnung und das Abnahmeprotokoll.',
        answer: 'Hier ein Entwurf. Bitte prüfen Sie ihn, ich sende ihn erst nach Ihrer Freigabe.',
        document: {
          kind: 'email', title: 'E-Mail-Entwurf', sendable: true,
          to: 'Frau L. Rochat', subject: 'Dossier Rochat SA: zwei Unterlagen benötigt',
          blocks: [
            'Sehr geehrte Frau Rochat,',
            'für das weitere Verfahren bitten wir Sie, uns die Bauabrechnung vom März 2024 sowie das unterzeichnete Abnahmeprotokoll zuzustellen.',
            'Für Fragen stehen wir gerne zur Verfügung.',
            'Freundliche Grüsse,<br>RA A. Fontanaz',
          ],
        },
      },
      {
        question: 'Gib mir die Chronologie des Dossiers.',
        answer: 'Hier ist sie, jedes Datum verweist auf sein Dokument. Ein Punkt <strong>zu prüfen</strong>: zwei Daten für das Bauende.',
        document: {
          kind: 'table', title: 'Chronologie des Dossiers', columns: ['Datum', 'Sachverhalt', 'Quelle'],
          rows: [
            { date: '12.3.2019', fact: 'Werkvertrag mit Valmont Immobilier unterzeichnet', src: 'P01' },
            { date: '30.11.2023', fact: 'Bauende laut Valmont', src: 'P05' },
            { date: '15.1.2024', fact: 'Bauende laut Bauprotokoll', src: 'P06', flagged: true },
            { date: '20.3.2024', fact: 'Schlussabrechnung an Rochat SA', src: 'P07' },
            { date: '3.9.2026', fact: 'Schlichtungsverhandlung, keine Einigung', src: 'P09' },
          ],
        },
      },
      {
        question: 'Und bereite die Zeiterfassung des Monats vor.',
        answer: 'Drei vorgeschlagene Einträge, Dauer <strong>zu prüfen</strong>.',
        document: {
          kind: 'list', title: 'Zeiterfassung',
          items: [
            { label: 'Chronologie des Dossiers', duration: '0.40 h' },
            { label: 'E-Mail an Mandantin', duration: '0.15 h' },
            { label: 'Übernahme des Dossiers', duration: '1.10 h' },
          ],
        },
      },
    ],
  },
  en: {
    banner: 'Simulation — fictitious file',
    field: 'Ask Brigitte something…',
    chips: ['An email', 'The chronology', 'The time record'],
    openDocument: 'Open the document',
    replay: 'Replay the conversation',
    flag: 'to be checked',
    footer: 'Brigitte prepares. The lawyer checks and decides.',
    working: 'Brigitte is working…',
    validateSend: 'Approve and send',
    sent: 'Sent ✓',
    pause: 'Pause',
    next: 'Next',
    resume: 'Resume',
    lawyer: 'Lawyer',
    assistant: 'Brigitte',
    turns: [
      {
        question: 'Write an email to Ms Rochat asking for the construction invoice and the acceptance report.',
        answer: 'Here is a draft. Please review it; it is only sent once you approve it.',
        document: {
          kind: 'email', title: 'Email draft', sendable: true,
          to: 'Ms L. Rochat', subject: 'Rochat SA file: two documents needed',
          blocks: [
            'Dear Ms Rochat,',
            'To prepare the next steps in the proceedings, please send us the March 2024 construction invoice and the signed acceptance report.',
            'Please let us know if you have any questions.',
            'Kind regards,<br>A. Fontanaz, attorney',
          ],
        },
      },
      {
        question: 'Give me the chronology of the file.',
        answer: 'Here it is; each date points to its document. One point <strong>to be checked</strong>: two different end-of-works dates.',
        document: {
          kind: 'table', title: 'File chronology', columns: ['Date', 'Fact', 'Source'],
          rows: [
            { date: '12.3.2019', fact: 'Works contract signed with Valmont Immobilier', src: 'P01' },
            { date: '30.11.2023', fact: 'End of works according to Valmont', src: 'P05' },
            { date: '15.1.2024', fact: 'End of works according to the site report', src: 'P06', flagged: true },
            { date: '20.3.2024', fact: 'Final invoice sent to Rochat SA', src: 'P07' },
            { date: '3.9.2026', fact: 'Conciliation hearing, no settlement', src: 'P09' },
          ],
        },
      },
      {
        question: 'And prepare this month’s time record.',
        answer: 'Three proposed entries, durations <strong>to be checked</strong>.',
        document: {
          kind: 'list', title: 'Time record',
          items: [
            { label: 'File chronology', duration: '0:40' },
            { label: 'Email to client', duration: '0:15' },
            { label: 'File takeover', duration: '1:10' },
          ],
        },
      },
    ],
  },
};
globalThis.BrigitteChatDemo.es = {
 "banner": "Simulación — expediente ficticio",
 "field": "Pídale algo a Brigitte…",
 "chips": [
  "Un correo",
  "La cronología",
  "El registro de tiempo"
 ],
 "openDocument": "Abrir el documento",
 "replay": "Volver a ver la conversación",
 "flag": "por verificar",
 "footer": "Brigitte prepara. La abogada verifica y decide.",
 "working": "Brigitte está trabajando…",
 "validateSend": "Validar y enviar",
 "sent": "Enviado ✓",
 "pause": "Pausa",
 "next": "Siguiente",
 "resume": "Reanudar",
 "lawyer": "Abogada",
 "assistant": "Brigitte",
 "turns": [
  {
   "question": "Escribe un correo a la Sra. Rochat pidiéndole la factura de las obras y el acta de recepción.",
   "answer": "Aquí tiene un borrador. Revíselo; solo lo envío tras su validación.",
   "document": {
    "kind": "email",
    "title": "Borrador de correo",
    "sendable": true,
    "to": "Sra. L. Rochat",
    "subject": "Expediente Rochat SA: dos documentos que debe remitirnos",
    "blocks": [
     "Estimada señora:",
     "Para preparar la continuación del procedimiento, le agradecemos que nos remita la factura de las obras de marzo de 2024, así como el acta de recepción firmada.",
     "Quedamos a su disposición.",
     "Reciba un cordial saludo,<br>Abg. A. Fontanaz"
    ]
   }
  },
  {
   "question": "Dame la cronología del expediente.",
   "answer": "Aquí está; cada fecha remite a su documento. Un punto <strong>por verificar</strong>: dos fechas de fin de las obras.",
   "document": {
    "kind": "table",
    "title": "Cronología del expediente",
    "columns": [
     "Fecha",
     "Hecho",
     "Fuente"
    ],
    "rows": [
     {
      "date": "12.3.2019",
      "fact": "Contrato de obra firmado con Valmont Immobilier",
      "src": "P01"
     },
     {
      "date": "30.11.2023",
      "fact": "Fin de las obras según Valmont",
      "src": "P05"
     },
     {
      "date": "15.1.2024",
      "fact": "Fin de las obras según el acta de obra",
      "src": "P06",
      "flagged": true
     },
     {
      "date": "20.3.2024",
      "fact": "Liquidación final dirigida a Rochat SA",
      "src": "P07"
     },
     {
      "date": "3.9.2026",
      "fact": "Audiencia de conciliación, sin acuerdo",
      "src": "P09"
     }
    ]
   }
  },
  {
   "question": "Y prepara el registro de tiempo del mes.",
   "answer": "Tres anotaciones propuestas, duraciones <strong>por verificar</strong>.",
   "document": {
    "kind": "list",
    "title": "Registro de tiempo",
    "items": [
     {
      "label": "Cronología del expediente",
      "duration": "0 h 40"
     },
     {
      "label": "Correo a la clienta",
      "duration": "0 h 15"
     },
     {
      "label": "Estudio del expediente",
      "duration": "1 h 10"
     }
    ]
   }
  }
 ]
};
globalThis.BrigitteChatDemo.it = {
    banner: 'Simulazione — pratica fittizia',
    field: 'Chiedete qualcosa a Brigitte…',
    chips: ['Un’e-mail', 'La cronologia', 'Il rendiconto del tempo'],
    openDocument: 'Apri il documento',
    replay: 'Rivedi la conversazione',
    flag: 'da verificare',
    footer: 'Brigitte prepara. L’avvocata verifica e decide.',
    working: 'Brigitte sta lavorando…',
    validateSend: 'Convalida e invia',
    sent: 'Inviato ✓',
    pause: 'Pausa',
    next: 'Avanti',
    resume: 'Riprendi',
    lawyer: 'Avvocata',
    assistant: 'Brigitte',
    turns: [
      {
        question: 'Scrivi un’e-mail alla sig.ra Rochat per chiederle la fattura dei lavori e il verbale di collaudo.',
        answer: 'Ecco una bozza. Rileggetela: la invio solo dopo la vostra convalida.',
        document: {
          kind: 'email', title: 'Bozza di e-mail', sendable: true,
          to: 'Sig.ra L. Rochat', subject: 'Pratica Rochat SA: due documenti da trasmetterci',
          blocks: [
            'Gentile Signora,',
            'Per preparare il seguito della procedura, vi ringraziamo di trasmetterci la fattura dei lavori di marzo 2024 nonché il verbale di collaudo firmato.',
            'Restiamo a vostra disposizione.',
            'Con i migliori saluti,<br>Avv. A. Fontanaz',
          ],
        },
      },
      {
        question: 'Dammi la cronologia della pratica.',
        answer: 'Eccola, ogni data rinvia al suo documento. Un punto <strong>da verificare</strong>: due date di fine lavori.',
        document: {
          kind: 'table', title: 'Cronologia della pratica', columns: ['Data', 'Fatto', 'Fonte'],
          rows: [
            { date: '12.3.2019', fact: 'Contratto d’appalto firmato con Valmont Immobilier', src: 'P01' },
            { date: '30.11.2023', fact: 'Fine dei lavori secondo Valmont', src: 'P05' },
            { date: '15.1.2024', fact: 'Fine dei lavori secondo il verbale di cantiere', src: 'P06', flagged: true },
            { date: '20.3.2024', fact: 'Conteggio finale inviato a Rochat SA', src: 'P07' },
            { date: '3.9.2026', fact: 'Udienza di conciliazione, esito negativo', src: 'P09' },
          ],
        },
      },
      {
        question: 'E prepara il rendiconto del tempo del mese.',
        answer: 'Tre voci proposte, durate <strong>da verificare</strong>.',
        document: {
          kind: 'list', title: 'Rendiconto del tempo',
          items: [
            { label: 'Cronologia della pratica', duration: '0 h 40' },
            { label: 'E-mail alla cliente', duration: '0 h 15' },
            { label: 'Ripresa della pratica', duration: '1 h 10' },
          ],
        },
      },
    ],
  };
