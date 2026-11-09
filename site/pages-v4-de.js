/* German and English translations of the supplied French page copy. French remains the HTML fallback. */
(() => {
  const pairs = `
Aller au contenu|Zum Inhalt|Skip to content
Menu|Menü|Menu
Clair / sombre|Hell / Dunkel|Light / dark
Navigation principale|Hauptnavigation|Main navigation
Navigation de pied de page|Fussnavigation|Footer navigation
Thèmes des exemples|Themen der Beispiele|Example themes
Le problème|Die Herausforderung|The problem
Ce que fait Brigitte|Was Brigitte leistet|What Brigitte does
Exemples|Beispiele|Examples
Démo|Demo|Demo
Technologie & mise en route|Technologie & Einrichtung|Technology & setup
La box|Die Box|The box
Investisseurs|Investoren|Investors
Contact|Kontakt|Contact
Sécurité|Sicherheit|Security
Gestion de fortune|Vermögensverwaltung|Wealth management
Créé par|Entwickelt von|Created by
Éditeur|Herausgeber|Publisher
Suisse|Schweiz|Switzerland
IDE|UID|UID
TVA|MWST|VAT
IDE/TVA CHE-114.555.500 TVA|IDE/TVA CHE-114.555.500 TVA|IDE/TVA CHE-114.555.500 TVA
Retour à l’accueil|Zur Startseite|Back to home
Pour la sécurité|Für Sicherheitsbehörden|For security
Pour la gestion de fortune|Für die Vermögensverwaltung|For wealth management
Du travail préparé. Des décisions qui restent les vôtres.|Die Arbeit ist vorbereitet. Sie entscheiden.|Work prepared. Decisions that remain yours.
Voici les usages à construire avec votre étude, selon vos documents, vos accès et les fonctions convenues. Chaque résultat reste à relire ; les connexions et les sources externes dépendent de vos droits et des intégrations validées.|Diese Anwendungen entwickeln wir mit Ihrer Kanzlei anhand Ihrer Dokumente, Zugriffsrechte und der vereinbarten Funktionen. Jedes Ergebnis muss geprüft werden. Verbindungen und externe Quellen hängen von Ihren Berechtigungen und den freigegebenen Integrationen ab.|Here are the uses to build with your firm, based on your documents, your access rights and the agreed functions. Every result remains to be reviewed; connections and external sources depend on your rights and the approved integrations.
Accueillir et organiser|Aufnehmen und organisieren|Intake and organisation
Rédiger et relire|Entwerfen und prüfen|Drafting and review
Préparer le contentieux|Prozesse vorbereiten|Litigation preparation
Accompagner les sociétés|Unternehmen begleiten|Corporate support
Suivre les dossiers du quotidien|Laufende Mandate betreuen|Day-to-day matters
Transmettre et administrer|Wissen weitergeben und verwalten|Handover and administration
Conflits d'intérêts|Interessenkonflikte|Conflicts of interest
Rapprocher les noms et les relations connus de l'étude pour préparer votre contrôle.|Der Kanzlei bekannte Namen und Beziehungen abgleichen, um Ihre Prüfung vorzubereiten.|Match the names and relationships known to the firm to prepare your check.
Dossier d'identification|Identifikationsdossier|Identification file
Rassembler les pièces reçues et signaler celles qui manquent selon votre liste de contrôle.|Eingegangene Unterlagen zusammenstellen und fehlende Dokumente anhand Ihrer Checkliste kennzeichnen.|Gather the documents received and flag those missing according to your checklist.
Lettre d'engagement|Mandatsvereinbarung|Engagement letter
Préparer un projet à partir de vos modèles et des éléments du mandat.|Einen Entwurf anhand Ihrer Vorlagen und der Angaben zum Mandat vorbereiten.|Prepare a draft from your templates and the details of the matter.
Courriels et dossiers|E-Mails und Dossiers|Emails and files
Proposer un classement des échanges dans le bon dossier, à valider.|Die Zuordnung der Korrespondenz zum passenden Dossier zur Freigabe vorschlagen.|Propose filing correspondence into the right file, for your approval.
Dates et délais|Termine und Fristen|Dates and deadlines
Relever les dates utiles et préparer les données d'un calcul dont vous validez les règles.|Relevante Daten erfassen und eine Berechnung vorbereiten, deren Regeln Sie bestätigen.|Pick out the relevant dates and prepare the data for a calculation whose rules you approve.
Le style de votre étude|Der Stil Ihrer Kanzlei|Your firm's style
Préparer une réponse en suivant vos formulations et vos usages rédactionnels.|Eine Antwort mit Ihren Formulierungen und nach Ihren Schreibkonventionen vorbereiten.|Prepare a reply following your firm's wording and drafting conventions.
Traduction de travail|Arbeitsübersetzung|Working translation
Préparer une version française, allemande, italienne ou anglaise pour votre relecture.|Eine französische, deutsche, italienische oder englische Fassung zur Prüfung vorbereiten.|Prepare a French, German, Italian or English version for your review.
Relecture de contrat|Vertragsprüfung|Contract review
Repérer les écarts par rapport aux clauses et aux consignes de votre étude.|Abweichungen von den Klauseln und Vorgaben Ihrer Kanzlei aufzeigen.|Spot deviations from your firm's clauses and instructions.
Banque de clauses|Klauselsammlung|Clause library
Retrouver une formulation déjà utilisée et la pièce dont elle provient.|Eine bereits verwendete Formulierung und das zugehörige Dokument wiederfinden.|Find wording already used and the document it comes from.
Actes et modèles|Urkunden und Vorlagen|Deeds and templates
Préparer un premier projet à partir du modèle que vous avez choisi.|Einen ersten Entwurf anhand der von Ihnen gewählten Vorlage vorbereiten.|Prepare a first draft from the template you have chosen.
Accords de confidentialité|Geheimhaltungsvereinbarungen|Non-disclosure agreements
Faire ressortir les clauses à examiner avant de vous engager.|Klauseln hervorheben, die vor einer Verpflichtung zu prüfen sind.|Bring out the clauses to examine before you commit.
Caviardage|Schwärzung|Redaction
Proposer les passages à masquer avant votre contrôle et votre validation.|Zu schwärzende Passagen für Ihre Prüfung und Freigabe vorschlagen.|Propose the passages to redact before your check and approval.
Chronologie|Chronologie|Chronology
Réunir les événements avec leurs dates, leurs phrases sources et les doutes à vérifier.|Ereignisse mit Datum, den zugehörigen Quellensätzen und zu prüfenden Unklarheiten zusammenstellen.|Bring together events with their dates, their source sentences and the doubts to check.
Bordereau de pièces|Beilagenverzeichnis|Index of exhibits
Préparer une liste ordonnée à partir des documents du dossier.|Ein geordnetes Verzeichnis aus den Dokumenten des Dossiers vorbereiten.|Prepare an ordered list from the documents in the file.
Témoignages et divergences|Aussagen und Abweichungen|Testimony and discrepancies
Rapprocher les versions d'un même fait et montrer les passages concernés.|Darstellungen desselben Sachverhalts vergleichen und die betreffenden Passagen zeigen.|Bring together the versions of the same fact and show the passages concerned.
Jurisprudence|Rechtsprechung|Case law
Préparer une recherche dans les sources autorisées, avec des références à vérifier.|Eine Recherche in freigegebenen Quellen mit überprüfbaren Fundstellen vorbereiten.|Prepare research in the authorised sources, with references to check.
Projet de mémoire|Entwurf einer Rechtsschrift|Draft brief
Organiser un premier texte à partir des faits et de l'argumentation que vous retenez.|Einen ersten Text anhand der von Ihnen ausgewählten Fakten und Argumente strukturieren.|Organise a first text from the facts and arguments you retain.
Préparation d'audience|Verhandlungsvorbereitung|Hearing preparation
Rassembler les pièces et les points à revoir dans un dossier de travail.|Unterlagen und zu prüfende Punkte in einem Arbeitsdossier zusammenstellen.|Gather the documents and points to review in a working file.
Revue documentaire|Dokumentenprüfung|Document review
Trier les documents d'une opération et préparer les questions restées ouvertes.|Unterlagen einer Transaktion ordnen und offene Fragen vorbereiten.|Sort the documents of a transaction and prepare the questions still open.
Organigramme|Organigramm|Organisation chart
Rapprocher les extraits disponibles et les liens entre sociétés à vérifier.|Vorliegende Auszüge abgleichen und zu prüfende Verbindungen zwischen Gesellschaften zusammenstellen.|Match the available extracts and the links between companies, to be checked.
Statuts et pactes|Statuten und Vereinbarungen|Articles and agreements
Faire ressortir les écarts entre statuts, pacte d'actionnaires et répartition du capital.|Abweichungen zwischen Statuten, Aktionärbindungsvertrag und Kapitalverteilung hervorheben.|Bring out the differences between articles of association, shareholders' agreement and capital allocation.
Procès-verbaux|Protokolle|Minutes
Préparer un projet selon vos modèles et les décisions qui vous ont été communiquées.|Einen Entwurf nach Ihren Vorlagen und den mitgeteilten Beschlüssen vorbereiten.|Prepare a draft following your templates and the decisions communicated to you.
Relevés bancaires|Kontoauszüge|Bank statements
Rapprocher les opérations fournies et signaler les écarts à examiner.|Die vorgelegten Transaktionen abgleichen und zu prüfende Abweichungen kennzeichnen.|Match the transactions provided and flag the discrepancies to examine.
Inventaire de succession|Nachlassinventar|Estate inventory
Préparer la liste des éléments documentés et des pièces encore nécessaires.|Eine Liste der dokumentierten Vermögenswerte und der noch benötigten Unterlagen vorbereiten.|Prepare the list of documented items and the documents still needed.
Pièces fiscales|Steuerunterlagen|Tax documents
Classer les documents reçus et préparer les éléments pour votre revue.|Eingegangene Dokumente ordnen und die Unterlagen für Ihre Prüfung vorbereiten.|Sort the documents received and prepare the items for your review.
Baux|Mietverträge|Leases
Repérer les clauses de loyer, d'indexation et de résiliation à examiner.|Zu prüfende Klauseln zu Mietzins, Indexierung und Kündigung hervorheben.|Spot the rent, indexation and termination clauses to examine.
Contrats de travail|Arbeitsverträge|Employment contracts
Comparer un projet à vos modèles et préparer les points de contrôle.|Einen Entwurf mit Ihren Vorlagen vergleichen und Prüfpunkte vorbereiten.|Compare a draft with your templates and prepare the check points.
Dossiers immobiliers|Immobiliendossiers|Real estate files
Réunir les actes, extraits autorisés et échanges utiles à votre analyse.|Urkunden, freigegebene Auszüge und relevante Korrespondenz für Ihre Analyse zusammenstellen.|Gather the deeds, authorised extracts and correspondence useful to your analysis.
Mémoire de l'étude|Wissen der Kanzlei|Firm memory
Retrouver un dossier antérieur ou un document pertinent auquel vous avez accès.|Ein früheres Dossier oder ein relevantes Dokument wiederfinden, auf das Sie Zugriff haben.|Find an earlier file or a relevant document you have access to.
Point du matin|Morgenübersicht|Morning briefing
Préparer une synthèse des dossiers et des actions que vous souhaitez suivre.|Eine Übersicht der Dossiers und Aufgaben vorbereiten, die Sie verfolgen möchten.|Prepare a summary of the files and actions you want to follow.
Formation des collaborateurs|Schulung der Mitarbeitenden|Staff training
Retrouver les exemples et méthodes que l'étude a autorisés pour la formation.|Von der Kanzlei für Schulungen freigegebene Beispiele und Methoden wiederfinden.|Find the examples and methods the firm has approved for training.
Temps de travail|Arbeitszeit|Working time
Préparer un relevé à partir des traces disponibles, à vérifier avant facturation.|Anhand vorhandener Aufzeichnungen eine Übersicht vorbereiten, die vor der Rechnungsstellung geprüft wird.|Prepare a time record from the available traces, to check before billing.
Libellés de facture|Rechnungstexte|Invoice descriptions
Proposer des descriptions claires à partir des prestations que vous avez validées.|Klare Beschreibungen anhand der von Ihnen bestätigten Leistungen vorschlagen.|Propose clear descriptions based on the services you have approved.
Suivi des impayés|Offene Rechnungen|Unpaid invoices
Préparer une liste de relances et des projets de message, sans envoi automatique.|Eine Mahnliste und Nachrichtenentwürfe vorbereiten, ohne automatischen Versand.|Prepare a list of reminders and draft messages, without automatic sending.
Demande d'accès aux données|Datenauskunftsgesuch|Data access request
Aider à rassembler les éléments d'une réponse, sous votre contrôle.|Unter Ihrer Kontrolle die Unterlagen für eine Antwort zusammenstellen helfen.|Help gather the elements of a reply, under your control.
Archivage|Archivierung|Archiving
Proposer un tri selon les règles de conservation que votre étude a définies.|Eine Sortierung nach den Aufbewahrungsregeln Ihrer Kanzlei vorschlagen.|Propose sorting according to the retention rules your firm has set.
Choisir un premier exemple|Ein erstes Beispiel auswählen|Choose a first example
Installée chez vous. Préparée avec vous.|Bei Ihnen installiert. Mit Ihnen eingerichtet.|Installed at your premises. Prepared with you.
Brigitte associe une box dans vos locaux, les documents que vous choisissez et des fonctions adaptées au travail de votre étude. Notre équipe vient sur place pour l'installation et la prise en main.|Brigitte verbindet eine Box in Ihren Räumen mit den von Ihnen ausgewählten Dokumenten und Funktionen für die Arbeit Ihrer Kanzlei. Unser Team kommt für die Installation und Einführung zu Ihnen.|Brigitte combines a box in your offices, the documents you choose and functions adapted to your firm's work. Our team comes on site for installation and onboarding.
Le cadre qui convient à votre étude|Der passende Rahmen für Ihre Kanzlei|The right framework for your firm
Standard — support par connexion chiffrée.|Standard — Support über eine verschlüsselte Verbindung.|Standard — support via an encrypted connection.
Pour chaque intervention de support, l'étude ouvre une connexion chiffrée, pour une tâche précise, puis la referme.|Für jeden Support-Einsatz öffnet die Kanzlei eine verschlüsselte Verbindung für eine bestimmte Aufgabe und schliesst sie danach wieder.|For each support intervention, the firm opens an encrypted connection for a specific task, then closes it.
Renforcé — sous votre propre sécurité.|Erweitert — innerhalb Ihrer Sicherheitsumgebung.|Enhanced — under your own security.
Les documents et les données de travail sont conservés sur votre disque et traités localement, dans le cadre de sécurité de votre étude. Les interventions et les connexions sont définies avec votre responsable informatique.|Dokumente und Arbeitsdaten werden auf Ihrem Laufwerk gespeichert und lokal innerhalb der Sicherheitsumgebung Ihrer Kanzlei verarbeitet. Einsätze und Verbindungen stimmen wir mit Ihrer IT-Verantwortung ab.|Documents and working data are kept on your drive and processed locally, within your firm's security framework. Interventions and connections are defined with your IT manager.
Sans connexion externe — à confirmer.|Ohne externe Verbindung — noch zu bestätigen.|No external connection — to be confirmed.
Cette configuration doit être étudiée et validée avant engagement, notamment pour les fonctions disponibles, la maintenance et les mises à jour.|Diese Konfiguration muss vor einer Zusage geprüft und bestätigt werden, insbesondere hinsichtlich verfügbarer Funktionen, Wartung und Aktualisierungen.|This configuration must be studied and validated before any commitment, in particular regarding available functions, maintenance and updates.
Une box, ou deux selon votre besoin|Eine oder zwei Boxen, je nach Bedarf|One box, or two depending on your needs
Une box accueille le travail convenu. Une seconde peut être prévue pour organiser la redondance, selon une configuration et une procédure de reprise à valider. La capacité sera confirmée par les essais sur le matériel livré et vos usages.|Eine Box übernimmt die vereinbarten Aufgaben. Eine zweite kann für Redundanz vorgesehen werden; Konfiguration und Wiederanlaufverfahren müssen bestätigt werden. Die Kapazität wird durch Tests mit der gelieferten Hardware und Ihren Anwendungen bestätigt.|One box handles the agreed work. A second one can be planned for redundancy, according to a configuration and recovery procedure to be validated. Capacity will be confirmed by tests on the delivered hardware and your uses.
De la signature à la prise en main|Von der Unterschrift bis zur Einführung|From signature to onboarding
Convenir du travail.|Den Umfang vereinbaren.|Agree on the work.
Un premier cas d'usage, les accès et les critères d'acceptation sont définis au devis.|Ein erster Anwendungsfall, Zugriffsrechte und Abnahmekriterien werden in der Offerte festgelegt.|A first use case, the access rights and the acceptance criteria are defined in the quote.
Préparer la livraison.|Die Lieferung vorbereiten.|Prepare the delivery.
Après signature et encaissement de l'acompte, nous confirmons le matériel et organisons l'intervention selon sa disponibilité.|Nach Unterzeichnung und Eingang der Anzahlung bestätigen wir die Hardware und planen den Einsatz entsprechend ihrer Verfügbarkeit.|After signature and receipt of the deposit, we confirm the hardware and schedule the intervention according to its availability.
Installer sur place.|Vor Ort installieren.|Install on site.
Notre équipe prépare la box, les droits d'accès et les connexions convenues avec votre informaticien.|Unser Team richtet die Box, Zugriffsrechte und die mit Ihrer IT-Fachperson vereinbarten Verbindungen ein.|Our team prepares the box, the access rights and the connections agreed with your IT contact.
Essayer et valider.|Testen und bestätigen.|Try and validate.
Un premier processus est vérifié sur les documents autorisés. Vous examinez les résultats et les points à corriger.|Ein erster Prozess wird anhand freigegebener Dokumente geprüft. Sie beurteilen die Ergebnisse und die zu korrigierenden Punkte.|A first process is checked on the authorised documents. You review the results and the points to correct.
Former et accompagner.|Schulen und begleiten.|Train and support.
Votre équipe prend en main les fonctions retenues. Le support et les prochaines évolutions sont organisés avec vous.|Ihr Team lernt die ausgewählten Funktionen kennen. Support und weitere Entwicklungen planen wir mit Ihnen.|Your team gets to grips with the selected functions. Support and future developments are organised with you.
Préparer la mise en route|Die Einführung vorbereiten|Prepare the setup
Les faits, les pièces, le fil d'un dossier.|Die Fakten, die Belege, der Verlauf eines Dossiers.|The facts, the documents, the thread of a file.
Pour les services de police, les équipes de sécurité et les institutions, retrouver une information peut demander de relire des échanges, des rapports et des annexes dispersés.|Polizeidienste, Sicherheitsteams und Institutionen müssen oft verstreute Korrespondenz, Berichte und Anhänge erneut lesen, um eine Information zu finden.|For police services, security teams and institutions, finding a piece of information can mean rereading scattered exchanges, reports and annexes.
Brigitte prépare ce travail dans vos locaux, sur votre matériel, à partir des documents et des accès que vous autorisez.|Brigitte bereitet diese Arbeit in Ihren Räumen auf Ihrer Hardware vor, anhand der von Ihnen freigegebenen Dokumente und Zugriffe.|Brigitte prepares this work in your premises, on your hardware, from the documents and access rights you authorise.
Préparer l'analyse|Die Analyse vorbereiten|Prepare the analysis
Reconstituer une chronologie.|Eine Chronologie rekonstruieren.|Reconstruct a chronology.
Rassembler les événements avec leurs phrases sources et les points à vérifier.|Ereignisse mit ihren Quellensätzen und zu prüfenden Punkten zusammenstellen.|Gather the events with their source sentences and the points to check.
Rapprocher les versions.|Darstellungen vergleichen.|Compare the versions.
Faire apparaître les différences entre plusieurs comptes rendus, sans décider de leur crédibilité.|Unterschiede zwischen mehreren Berichten aufzeigen, ohne über deren Glaubwürdigkeit zu entscheiden.|Bring out the differences between several reports, without deciding on their credibility.
Préparer une synthèse.|Eine Zusammenfassung vorbereiten.|Prepare a summary.
Réunir les éléments documentés et les questions ouvertes pour la personne responsable du dossier.|Dokumentierte Sachverhalte und offene Fragen für die dossierverantwortliche Person zusammenstellen.|Gather the documented elements and open questions for the person responsible for the file.
Le contrôle reste à votre institution|Ihre Institution behält die Kontrolle|Control remains with your institution
Vous définissez les accès, les connexions et les règles de traitement. Les agents responsables relisent, vérifient et décident. Brigitte ne qualifie pas une personne ni ne prend une décision à leur place.|Sie legen Zugriffe, Verbindungen und Verarbeitungsregeln fest. Die zuständigen Mitarbeitenden lesen nach, prüfen und entscheiden. Brigitte bewertet keine Person und entscheidet nicht an ihrer Stelle.|You define the access rights, connections and processing rules. The officers in charge review, check and decide. Brigitte does not assess a person or take a decision in their place.
Commencer par un périmètre limité|Mit einem begrenzten Umfang beginnen|Begin with a limited scope
Nous choisissons avec vous un premier travail documentaire, les documents autorisés et les critères de validation. Notre équipe prépare l'installation, la prise en main et l'accompagnement, selon vos exigences.|Gemeinsam wählen wir eine erste Dokumentenaufgabe, die freigegebenen Unterlagen und die Prüfkriterien. Unser Team bereitet Installation, Einführung und Begleitung nach Ihren Anforderungen vor.|Together we choose a first documentary task, the authorised documents and the validation criteria. Our team prepares installation, onboarding and support according to your requirements.
Définir un premier cas d'usage|Einen ersten Anwendungsfall festlegen|Define a first use case
Préparer le dossier. Garder la relation.|Das Dossier vorbereiten. Die Kundenbeziehung pflegen.|Prepare the file. Keep the relationship.
Un dossier client réunit des pièces d'identification, des contrats, des échanges et un historique à comprendre. Votre équipe doit retrouver les éléments utiles avant de répondre ou de décider.|Ein Kundendossier umfasst Identifikationsunterlagen, Verträge, Korrespondenz und eine Vorgeschichte, die es zu verstehen gilt. Ihr Team muss die relevanten Informationen finden, bevor es antwortet oder entscheidet.|A client file brings together identification documents, contracts, correspondence and a history to understand. Your team must find the relevant elements before answering or deciding.
Brigitte prépare ce travail dans vos locaux, sur votre matériel, dans le cadre d'accès défini par votre entreprise.|Brigitte bereitet diese Arbeit in Ihren Räumen auf Ihrer Hardware vor, innerhalb der von Ihrem Unternehmen festgelegten Zugriffsrechte.|Brigitte prepares this work in your premises, on your hardware, within the access framework defined by your company.
Retrouver ce qui compte|Das Wesentliche wiederfinden|Find what matters
Préparer un dossier client.|Ein Kundendossier vorbereiten.|Prepare a client file.
Rassembler les pièces reçues et signaler les éléments manquants selon vos procédures.|Eingegangene Unterlagen zusammenstellen und fehlende Elemente nach Ihren Verfahren kennzeichnen.|Gather the documents received and flag missing items according to your procedures.
Reprendre l'historique.|Die Vorgeschichte aufarbeiten.|Pick up the history.
Préparer une synthèse des échanges et des faits, avec les documents dont ils proviennent.|Korrespondenz und Fakten mit den zugehörigen Quelldokumenten zusammenfassen.|Prepare a summary of the exchanges and facts, with the documents they come from.
Relire et rapprocher.|Prüfen und abgleichen.|Review and compare.
Comparer les versions d'un contrat ou rapprocher les opérations fournies pour préparer votre contrôle.|Vertragsfassungen vergleichen oder vorgelegte Transaktionen abgleichen, um Ihre Kontrolle vorzubereiten.|Compare versions of a contract or match the transactions provided to prepare your check.
Votre équipe vérifie et décide|Ihr Team prüft und entscheidet|Your team checks and decides
Brigitte montre les sources et signale les doutes. Elle ne prend pas de décision d'investissement et ne remplace ni le conseil au client ni vos contrôles internes.|Brigitte zeigt Quellen und weist auf Unklarheiten hin. Sie trifft keine Anlageentscheidungen und ersetzt weder die Kundenberatung noch Ihre internen Kontrollen.|Brigitte shows the sources and flags doubts. She does not make investment decisions and replaces neither client advice nor your internal controls.
Les connexions aux outils de votre entreprise sont définies et autorisées avec vous. Le traitement local ne dispense pas d'examiner les accès, les prestataires et les règles applicables à vos dossiers.|Verbindungen zu Ihren Unternehmenswerkzeugen werden mit Ihnen festgelegt und freigegeben. Auch bei lokaler Verarbeitung müssen Zugriffe, Dienstleister und die für Ihre Dossiers geltenden Regeln geprüft werden.|Connections to your company's tools are defined and authorised with you. Local processing does not remove the need to examine access rights, service providers and the rules applicable to your files.
Commencer sur un travail concret|Mit einer konkreten Aufgabe beginnen|Begin with concrete work
Nous définissons un premier cas d'usage, les documents autorisés et les résultats à vérifier. Notre équipe prépare l'installation, la formation et le suivi selon vos besoins.|Wir legen einen ersten Anwendungsfall, die freigegebenen Dokumente und die zu prüfenden Ergebnisse fest. Unser Team bereitet Installation, Schulung und Betreuung nach Ihren Bedürfnissen vor.|We define a first use case, the authorised documents and the results to check. Our team prepares installation, training and follow-up according to your needs.
Préparer un premier dossier|Ein erstes Dossier vorbereiten|Prepare a first file
De la box à votre étude.|Von der Box zu Ihrer Kanzlei.|From the box to your firm.
blackcode SA est membre du programme NVIDIA Inception.|blackcode SA ist Mitglied des NVIDIA-Inception-Programms.|blackcode SA is a member of the NVIDIA Inception program.
Membre du programme NVIDIA Inception|Mitglied des NVIDIA-Inception-Programms|Member of the NVIDIA Inception program
Pilote|Pilotprojekt|Pilot
Essayez-la sur une vraie journée de travail|Testen Sie Brigitte an einem echten Arbeitstag|Try it on a real workday
Un pilote de six mois avec une petite équipe de votre étude, sur un périmètre défini ensemble, avec vos propres dossiers.|Ein sechsmonatiges Pilotprojekt mit einem kleinen Team Ihrer Kanzlei, mit gemeinsam festgelegtem Umfang, anhand Ihrer eigenen Dossiers.|A six-month pilot with a small team in your firm, on a scope agreed together, using your own files.
Discuter du pilote|Über das Pilotprojekt sprechen|Talk about the pilot
Un appel client, une acquisition à préparer|Ein Videoanruf, eine Übernahme in Vorbereitung|A client call, an acquisition to prepare
Trois clients souhaitent racheter une entreprise et envoient trois bilans pendant un appel vidéo. Avant la fin de la réunion, l'objectif est que Brigitte ait préparé l'analyse des bilans et les questions pour le vendeur, un projet de lettre de mission pour la due diligence et le contrat de cession (SPA), et qu'elle prépare le planning de signature ; l'avocat relit et valide. Avant tout enregistrement, l'étude informe tous les participants de sa finalité et recueille leur consentement. La réunion peut se tenir sans enregistrement.|Drei Mandanten möchten ein Unternehmen übernehmen und schicken während eines Videoanrufs drei Bilanzen. Noch bevor das Gespräch endet, soll Brigitte im Idealfall die Bilanzanalyse und die Fragen an den Verkäufer vorbereitet, einen Entwurf der Mandatsvereinbarung für die Due Diligence und den Unternehmenskaufvertrag (SPA) erstellt und den Zeitplan für die Unterzeichnung vorbereitet haben; die zuständige Anwältin oder der zuständige Anwalt prüft und bestätigt. Vor jeder Aufzeichnung informiert die Kanzlei alle Teilnehmenden über deren Zweck und holt ihre Einwilligung ein. Das Gespräch kann auch ohne Aufzeichnung stattfinden.|Three clients want to buy a company and send three balance sheets during a video call. Before the meeting ends, the aim is that Brigitte has prepared the balance-sheet analysis and questions for the seller, drafted the engagement letter for the due diligence and the SPA, and prepared the signing schedule; the lawyer reviews and validates. Before any recording, the firm informs all participants of its purpose and obtains their consent. The meeting can also take place without being recorded.
Exemple phare|Beispiel im Fokus|Featured example
Simulation|Simulation|Simulation
Les premiers pas d'un dossier : vérifications, pièces reçues, premiers courriers.|Die ersten Schritte eines Dossiers: Prüfungen, eingegangene Unterlagen, erste Schreiben.|The first steps of a file: checks, documents received, first letters.
Les textes qui sortent de l'étude : relus, comparés, dans votre style.|Die Texte, die die Kanzlei verlassen: geprüft, verglichen, in Ihrem Stil.|The texts that leave the firm: reviewed, compared, in your style.
Les pièces et les faits d'un dossier contentieux, prêts pour l'audience.|Die Unterlagen und Fakten eines Streitfalls, bereit für die Verhandlung.|The documents and facts of a litigation file, ready for the hearing.
Les dossiers de sociétés et d'opérations, de la revue documentaire à la signature.|Die Dossiers von Gesellschaften und Transaktionen, von der Dokumentenprüfung bis zur Unterzeichnung.|Corporate and deal files, from document review to signing.
Les dossiers courants de l'étude, classés et prêts pour votre revue.|Die laufenden Mandate der Kanzlei, geordnet und bereit für Ihre Prüfung.|The firm's day-to-day matters, filed and ready for your review.
La vie administrative de l'étude : formation, facturation, archivage.|Das Verwaltungsleben der Kanzlei: Ausbildung, Abrechnung, Archivierung.|The firm's administrative life: training, billing, archiving.
Délai de procédure (CPC/CPP)|Verfahrensfrist (ZPO/StPO)|Procedural deadline (CPC/CrimPC)
Préparer un calcul indicatif selon la procédure applicable, la notification et les règles que vous validez : point de départ, échéance, report du dernier jour et éventuelles suspensions. La procédure pénale ne connaît pas de féries judiciaires. L'avocat vérifie le calcul.|Eine indikative Berechnung vorbereiten, je nach anwendbarem Verfahren, Zustellung und den von Ihnen bestätigten Regeln: Fristbeginn, Fälligkeit, Verschiebung des letzten Tages und gegebenenfalls Fristenstillstand nach den anwendbaren Verfahrensregeln. Das Strafverfahren kennt keine Gerichtsferien. Die Anwältin oder der Anwalt prüft die Berechnung.|Prepare an indicative calculation based on the applicable procedure, the notification and the rules you confirm: starting point, due date, postponement of the final day and any suspension of time limits. Criminal procedure has no judicial recess. The lawyer checks the calculation.
Dossier d'appel|Berufungsdossier|Appeal file
Réunir les pièces et les points du jugement de première instance pour préparer un dossier d'appel, que vous complétez.|Die Unterlagen und Punkte des erstinstanzlichen Urteils zusammenstellen, um ein Berufungsdossier vorzubereiten, das Sie vervollständigen.|Gather the documents and points from the first-instance judgment to prepare an appeal file, which you complete.
Secret professionnel et nLPD|Berufsgeheimnis und nDSG|Professional secrecy and the nFADP
Le secret professionnel couvre les informations protégées reçues dans l'exercice de l'activité d'avocat et perdure après la fin du mandat (art. 13 LLCA ; art. 321 CP). La loi sur la protection des données (nLPD) s'applique directement à l'intelligence artificielle.|Das Berufsgeheimnis erfasst die geschützten Informationen, die im Rahmen der anwaltlichen Tätigkeit empfangen werden, und gilt auch nach Beendigung des Mandats fort (Art. 13 BGFA; Art. 321 StGB). Das Datenschutzgesetz (nDSG) ist direkt auf künstliche Intelligenz anwendbar.|Professional secrecy covers protected information received in the course of a lawyer's professional activity, and continues after the engagement ends (Art. 13 LLCA; Art. 321 of the Swiss Criminal Code). The Federal Act on Data Protection (nFADP) applies directly to artificial intelligence.
Conçue pour respecter, pas pour certifier|Darauf ausgelegt, es zu wahren – nicht, es zu zertifizieren|Designed to respect it, not to certify it
Brigitte est conçue pour respecter le secret professionnel et la nLPD. Aucun outil ne garantit à lui seul la conformité : c'est votre étude qui décide et qui reste responsable.|Brigitte ist darauf ausgelegt, das Berufsgeheimnis und das nDSG zu wahren. Kein Werkzeug kann die Einhaltung allein garantieren: Ihre Kanzlei entscheidet und bleibt verantwortlich.|Brigitte is designed to respect professional secrecy and the nFADP. No tool can guarantee compliance on its own: your firm decides and remains responsible.
Traité dans votre étude|In Ihrer Kanzlei verarbeitet|Processed in your firm
Par défaut, vos documents sont traités sur la box, dans votre étude.|Standardmässig werden Ihre Dokumente auf der Box, in Ihrer Kanzlei, verarbeitet.|By default, your documents are processed on the box, in your firm.
Comment on travaille|Wie wir arbeiten|How we work
Un premier rendez-vous, sans chiffres.|Ein erstes Treffen, ohne Zahlen.|A first meeting, without figures.
On écoute vos besoins et vos habitudes de travail, sans parler de prix.|Wir hören uns Ihre Bedürfnisse und Arbeitsgewohnheiten an, ohne über Preise zu sprechen.|We listen to your needs and working habits, without discussing price.
L'analyse des besoins et des outils.|Die Analyse der Bedürfnisse und Werkzeuge.|Analysis of needs and tools.
Vos outils restent ; on étudie ensemble comment les relier à Brigitte.|Ihre Werkzeuge bleiben; wir prüfen gemeinsam, wie wir sie mit Brigitte verbinden.|Your tools stay; we work out together how to connect them to Brigitte.
On vient à l'étude.|Wir kommen in Ihre Kanzlei.|We come to your firm.
Installation, formation, et un accompagnement pendant les premières semaines.|Installation, Schulung und Begleitung während der ersten Wochen.|Installation, training, and support during the first weeks.
On commence petit.|Wir fangen klein an.|We start small.
Puis on ajoute des modules, au fil du temps, selon vos besoins.|Dann fügen wir mit der Zeit Module hinzu, je nach Ihren Bedürfnissen.|Then we add modules over time, according to your needs.
Vous posez les questions|Sie stellen die Fragen|You ask the questions
Quel outil, sur quel dossier, dans quelles conditions ? Votre étude choisit les PDF texte et fichiers texte qu’elle dépose ; les connexions aux outils sont prévues, à une date à fixer.|Welches Werkzeug, für welches Dossier, unter welchen Bedingungen? Ihre Kanzlei wählt die textbasierten PDFs und Textdateien, die sie hochlädt; Verbindungen zu Werkzeugen sind geplant, der Termin steht noch nicht fest.|Which tool, on which matter, under what conditions? Your firm chooses the text-based PDFs and plain text files it uploads; tool connections are planned, with a date to be set.
Vos outils restent|Ihre Werkzeuge bleiben|Your tools stay
Aujourd’hui, vous déposez vos documents (PDF texte et fichiers texte uniquement). La lecture des PDF scannés (OCR) et les connexions en lecture seule à votre messagerie, votre partage de fichiers ou votre logiciel de gestion sont prévues, à une date à fixer.|Heute laden Sie Ihre Dokumente hoch (nur textbasierte PDFs und reine Textdateien). Das Lesen gescannter PDFs (OCR) und lesende Verbindungen zu E-Mail, Dateiablage oder Kanzleisoftware sind geplant; der Termin steht noch nicht fest.|Today, you upload your documents (text-based PDFs and plain text files only). Reading scanned PDFs (OCR) and read-only connections to your email, file share or practice-management software are planned, with a date to be set.
L'envoi, la signature et la facturation restent faits par une personne de votre étude.|Versand, Unterschrift und Rechnungsstellung bleiben Aufgabe einer Person Ihrer Kanzlei.|Sending, signing and billing remain done by a person in your firm.
Prêt pour Justitia.Swiss|Bereit für Justitia.Swiss|Ready for Justitia.Swiss
Selon le calendrier annoncé par l'Office fédéral de la justice, l'entrée en vigueur complète de la LPCJ (la loi sur les plateformes de communication électronique dans le domaine judiciaire) est prévue le 1er juillet 2027, sous réserve des conditions de mise en œuvre. Les dépôts volontaires sur la plateforme centrale justitia.swiss précéderont l'obligation, introduite progressivement selon les autorités et les procédures concernées. Votre étude peut anticiper dès maintenant : les accès, la formation et le classement des envois reçus.|Gemäss dem vom Bundesamt für Justiz angekündigten Zeitplan ist das vollständige Inkrafttreten des Gesetzes über die elektronischen Plattformen der Justiz (LPCJ) für den 1. Juli 2027 vorgesehen, vorbehältlich der Umsetzungsbedingungen. Freiwillige Eingaben auf der zentralen Plattform justitia.swiss gehen der Pflicht voraus, die je nach Behörde und Verfahren schrittweise eingeführt wird. Ihre Kanzlei kann sich schon jetzt vorbereiten: Zugänge, Schulung und die Ablage eingehender Sendungen.|According to the timetable announced by the Federal Office of Justice, the federal law on electronic judicial communication platforms (LPCJ) is expected to fully enter into force on 1 July 2027, subject to the implementation conditions being met. Voluntary filings on the central justitia.swiss platform come before the obligation, which will be introduced progressively, depending on the authority and the procedure concerned. Your firm can prepare now: access rights, training and filing the submissions you receive.
Brigitte reste en dehors de cette plateforme : elle n'y est pas connectée et ne dépose rien à votre place. Elle vous aide à préparer et à relire vos pièces, dans l'étude.|Brigitte bleibt ausserhalb dieser Plattform: Sie ist nicht daran angeschlossen und reicht nichts an Ihrer Stelle ein. Sie hilft Ihnen, Ihre Unterlagen in der Kanzlei vorzubereiten und durchzusehen.|Brigitte stays outside this platform: it is not connected to it and files nothing on your behalf. It helps you prepare and review your documents, inside your firm.
Votre étude est-elle prête ?|Ist Ihre Kanzlei bereit?|Is your firm ready?
Sept questions, pour vous situer. Rien n'est envoyé ni conservé : ce test reste dans votre navigateur.|Sieben Fragen, um sich einzuschätzen. Es wird nichts gesendet oder gespeichert: Dieser Test bleibt in Ihrem Browser.|Seven questions, to see where you stand. Nothing is sent or stored: this check stays in your browser.
Une personne de l'étude est-elle déjà chargée de suivre ce dossier ?|Ist bereits eine Person Ihrer Kanzlei für dieses Thema verantwortlich?|Has someone at your firm already been put in charge of this topic?
Oui|Ja|Yes
Non|Nein|No
Vos dossiers sont-ils classés et facilement retrouvables sous forme électronique ?|Sind Ihre Dossiers in elektronischer Form geordnet und leicht wiederzufinden?|Are your files organised and easy to find in electronic form?
Savez-vous qui, chez vous, recevra et traitera les notifications des autorités ?|Wissen Sie, wer bei Ihnen die Mitteilungen der Behörden empfangen und bearbeiten wird?|Do you know who, at your firm, will receive and handle notifications from the authorities?
Votre équipe a-t-elle déjà utilisé une identité électronique reconnue ?|Hat Ihr Team schon einmal eine anerkannte elektronische Identität verwendet?|Has your team already used a recognised electronic identity?
Avez-vous une règle claire sur où sont traités les documents de vos clients ?|Haben Sie eine klare Regel dazu, wo die Dokumente Ihrer Mandantschaft verarbeitet werden?|Do you have a clear rule on where your clients' documents are processed?
Un temps de formation de l'équipe est-il déjà prévu ?|Ist bereits eine Schulungszeit für das Team vorgesehen?|Is training time for the team already planned?
Savez-vous quels dossiers resteront soumis aux anciennes règles pendant la transition ?|Wissen Sie, welche Dossiers während der Übergangszeit den bisherigen Regeln unterliegen?|Do you know which files will remain subject to the old rules during the transition?
Voir le résultat|Ergebnis anzeigen|See the result
Ce test ne porte pas sur le fond de vos dossiers et ne remplace pas un avis juridique.|Dieser Test betrifft nicht den Inhalt Ihrer Dossiers und ersetzt keine Rechtsberatung.|This check does not cover the substance of your files and does not replace legal advice.
Ce test ne permet pas de conclure que votre étude est prête, ni de vérifier sa conformité : il vous aide seulement à repérer les points à organiser.|Dieser Test erlaubt keinen Schluss auf die Einsatzbereitschaft Ihrer Kanzlei und auch keine Prüfung der Rechtskonformität: Er hilft Ihnen lediglich, die zu organisierenden Punkte zu erkennen.|This check cannot conclude that your firm is ready, nor verify compliance: it only helps you spot the points to organise.
La première des trois voies de la FSA|Der erste der drei Wege des SAV|The first of the FSA's three ways
La Fédération suisse des avocats décrit trois façons d'utiliser l'IA avec des données de clients. Brigitte correspond à la première voie décrite par la FSA : un logiciel installé dans l'étude.|Der Schweizerische Anwaltsverband (SAV) beschreibt drei Wege, KI mit Klientendaten zu nutzen. Brigitte entspricht dem ersten vom SAV beschriebenen Weg: einer in der Kanzlei installierten Software.|The Swiss Bar Association describes three ways to use AI with client data. Brigitte corresponds to the first way the FSA describes: software installed within the firm.
Local, concrètement|Lokal, ganz konkret|Local, in plain terms
« Local » veut dire une chose simple : la box reste chez vous, branchée sur le réseau de votre étude, dans vos locaux. Par défaut, les documents confiés à Brigitte sont stockés et analysés sur la box. Les éventuels accès de support et flux vers des services externes sont définis avec votre étude, selon la configuration convenue.|«Lokal» heisst ganz einfach: Die Box bleibt bei Ihnen, angeschlossen an das Netzwerk Ihrer Kanzlei, in Ihren Räumen. Die Brigitte anvertrauten Dokumente werden standardmässig auf der Box gespeichert und ausgewertet. Allfällige Support-Zugriffe und Datenflüsse zu externen Diensten werden mit Ihrer Kanzlei festgelegt, gemäss der vereinbarten Konfiguration.|"Local" means something simple: the box stays with you, connected to your firm's network, in your offices. By default, the documents entrusted to Brigitte are stored and analysed on the box. Any support access and flows to external services are defined with your firm, according to the agreed configuration.
Une méthode, pas un outil de plus|Eine Methode, kein weiteres Werkzeug|A method, not one more tool
Brigitte ne vous demande pas de changer vos habitudes. C’est une méthode qui s’adapte à vous. Les connexions à vos outils sont prévues, à une date à fixer ; l’illustration présente ces connexions prévues.|Brigitte verlangt nicht, dass Sie Ihre Gewohnheiten ändern. Die Methode passt sich Ihnen an. Verbindungen zu Ihren Werkzeugen sind geplant; der Termin steht noch nicht fest. Die Abbildung zeigt diese geplanten Verbindungen.|Brigitte does not ask you to change your habits. The method adapts to you. Connections to your tools are planned, with a date to be set; the illustration shows these planned connections.
Messagerie|Mailbox|Mailbox
Documents|Dokumente|Documents
Agenda|Agenda|Calendar
Logiciel de gestion|Kanzleisoftware|Practice-management software
Recherche juridique|Rechtsrecherche|Legal research
Avant et après le passage par la plateforme officielle, Brigitte reste utile : elle prépare vos écritures et votre bordereau de pièces en amont, puis range ce qui en revient dans la mémoire de votre étude. Elle s'intègre aux nouveaux usages, sans jamais s'y substituer : le dépôt et la décision restent les vôtres.|Vor und nach dem Gang über die offizielle Plattform bleibt Brigitte nützlich: Sie bereitet Ihre Schriftsätze und Ihr Beilagenverzeichnis im Vorfeld vor und ordnet anschliessend ein, was zurückkommt, im Wissen Ihrer Kanzlei. Sie fügt sich in die neuen Abläufe ein, ohne sie je zu ersetzen: Die Einreichung und die Entscheidung bleiben bei Ihnen.|Before and after going through the official platform, Brigitte stays useful: it prepares your pleadings and your index of exhibits beforehand, then files what comes back into your firm's memory. It fits into the new ways of working, without ever replacing them: filing and deciding remain yours.
Des documents épars s’alignent le long d’une chronologie, un point rouge marquant une date clé.|Verstreute Dokumente reihen sich entlang einer Chronologie ein, ein roter Punkt markiert ein wichtiges Datum.|Scattered documents line up along a timeline, a red dot marking a key date.
Trois portes, l’une ouverte, l’autre fermée à clé : plusieurs cadres possibles selon votre étude.|Drei Türen, eine offen, eine verschlossen: mehrere mögliche Rahmen je nach Ihrer Kanzlei.|Three doors, one open, one locked: several possible frameworks depending on your firm.
La box Brigitte reliée à vos outils : messagerie, agenda, documents, gestion et recherche juridique.|Die Brigitte Box verbunden mit Ihren Werkzeugen: E-Mail, Agenda, Dokumente, Verwaltungssoftware und juristische Recherche.|The Brigitte box connected to your tools: email, calendar, documents, management software and legal research.
`;
  const table = Object.fromEntries(pairs.trim().split('\n').map(line => {
    const [fr, de, en] = line.split('|');
    return [fr, { de, en }];
  }));
  const nodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script,style')) continue;
    const key = node.textContent.trim();
    if (table[key]) nodes.push({ node, fr: node.textContent, de: node.textContent.replace(key, table[key].de), en: node.textContent.replace(key, table[key].en) });
  }
  const attrs = [];
  document.querySelectorAll('[aria-label],[title],[alt],meta[name="description"]').forEach(node => {
    for (const attr of ['aria-label', 'title', 'alt', 'content']) {
      const fr = node.getAttribute(attr);
      if (table[fr]) attrs.push({ node, attr, fr, de: table[fr].de, en: table[fr].en });
    }
  });
  const title = document.title;
  const bareTitle = title.replace(' · Brigitte', '');
  const deTitle = (table[bareTitle]?.de || bareTitle) + ' · Brigitte';
  const enTitle = (table[bareTitle]?.en || bareTitle) + ' · Brigitte';
  function apply(lang) {
    lang = ['de', 'en'].includes(lang) ? lang : 'fr';
    nodes.forEach(item => { item.node.textContent = item[lang]; });
    attrs.forEach(item => item.node.setAttribute(item.attr, item[lang]));
    document.documentElement.lang = lang;
    document.title = lang === 'de' ? deTitle : lang === 'en' ? enTitle : title;
    document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
    try { localStorage.setItem('bb-lang', lang); } catch {}
  }
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => apply(button.dataset.lang)));
  let lang = new URLSearchParams(location.search).get('lang'); if (!['fr', 'de', 'en'].includes(lang)) { try { lang = localStorage.getItem('bb-lang') || 'fr'; } catch { lang = 'fr'; } }
  apply(lang);
})();