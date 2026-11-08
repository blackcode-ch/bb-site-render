/* Italian translation of the supplied French page copy. French remains the HTML fallback. Loaded by language.js when lang=it. */
(() => {
  const pairs = `
Aller au contenu|Vai al contenuto
Menu|Menu
Clair / sombre|Chiaro / scuro
Navigation principale|Navigazione principale
Navigation de pied de page|Navigazione a piè di pagina
Thèmes des exemples|Temi degli esempi
Le problème|Il problema
Ce que fait Brigitte|Cosa fa Brigitte
Exemples|Esempi
Démo|Demo
Technologie & mise en route|Tecnologia e messa in servizio
La box|Il box
Investisseurs|Investitori
Contact|Contatto
Sécurité|Sicurezza
Gestion de fortune|Gestione patrimoniale
Créé par|Creato da
Éditeur|Editore
Suisse|Svizzera
IDE|IDI
TVA|IVA
CHE-114.555.500 TVA|CHE-114.555.500 IVA
Retour à l’accueil|Torna alla home
Pour la sécurité|Per la sicurezza
Pour la gestion de fortune|Per la gestione patrimoniale
Du travail préparé. Des décisions qui restent les vôtres.|Lavoro preparato. Decisioni che restano vostre.
Voici les usages à construire avec votre étude, selon vos documents, vos accès et les fonctions convenues. Chaque résultat reste à relire ; les connexions et les sources externes dépendent de vos droits et des intégrations validées.|Ecco gli usi da costruire con il vostro studio, in base ai vostri documenti, ai vostri accessi e alle funzioni concordate. Ogni risultato resta da rileggere; i collegamenti e le fonti esterne dipendono dai vostri diritti e dalle integrazioni convalidate.
Accueillir et organiser|Accogliere e organizzare
Rédiger et relire|Redigere e rileggere
Préparer le contentieux|Preparare il contenzioso
Accompagner les sociétés|Accompagnare le società
Suivre les dossiers du quotidien|Seguire le pratiche quotidiane
Transmettre et administrer|Trasmettere e amministrare
Conflits d'intérêts|Conflitti di interesse
Rapprocher les noms et les relations connus de l'étude pour préparer votre contrôle.|Confrontare i nomi e le relazioni noti allo studio per preparare il vostro controllo.
Dossier d'identification|Pratica di identificazione
Rassembler les pièces reçues et signaler celles qui manquent selon votre liste de contrôle.|Raccogliere i documenti ricevuti e segnalare quelli mancanti secondo la vostra lista di controllo.
Lettre d'engagement|Lettera d’incarico
Préparer un projet à partir de vos modèles et des éléments du mandat.|Preparare una bozza a partire dai vostri modelli e dagli elementi del mandato.
Courriels et dossiers|E-mail e pratiche
Proposer un classement des échanges dans le bon dossier, à valider.|Proporre una classificazione degli scambi nella pratica corretta, da convalidare.
Dates et délais|Date e termini
Relever les dates utiles et préparer les données d'un calcul dont vous validez les règles.|Rilevare le date utili e preparare i dati di un calcolo di cui convalidate le regole.
Le style de votre étude|Lo stile del vostro studio
Préparer une réponse en suivant vos formulations et vos usages rédactionnels.|Preparare una risposta seguendo le vostre formulazioni e le vostre consuetudini redazionali.
Traduction de travail|Traduzione di lavoro
Préparer une version française, allemande, italienne ou anglaise pour votre relecture.|Preparare una versione francese, tedesca, italiana o inglese per la vostra rilettura.
Relecture de contrat|Revisione di contratti
Repérer les écarts par rapport aux clauses et aux consignes de votre étude.|Individuare gli scostamenti rispetto alle clausole e alle istruzioni del vostro studio.
Banque de clauses|Banca di clausole
Retrouver une formulation déjà utilisée et la pièce dont elle provient.|Ritrovare una formulazione già utilizzata e il documento da cui proviene.
Actes et modèles|Atti e modelli
Préparer un premier projet à partir du modèle que vous avez choisi.|Preparare una prima bozza a partire dal modello che avete scelto.
Accords de confidentialité|Accordi di riservatezza
Faire ressortir les clauses à examiner avant de vous engager.|Evidenziare le clausole da esaminare prima di impegnarvi.
Caviardage|Oscuramento
Proposer les passages à masquer avant votre contrôle et votre validation.|Proporre i passaggi da oscurare prima del vostro controllo e della vostra convalida.
Chronologie|Cronologia
Réunir les événements avec leurs dates, leurs phrases sources et les doutes à vérifier.|Riunire gli eventi con le loro date, le frasi di origine e i dubbi da verificare.
Bordereau de pièces|Elenco dei documenti
Préparer une liste ordonnée à partir des documents du dossier.|Preparare un elenco ordinato a partire dai documenti della pratica.
Témoignages et divergences|Testimonianze e divergenze
Rapprocher les versions d'un même fait et montrer les passages concernés.|Confrontare le versioni di uno stesso fatto e mostrare i passaggi interessati.
Jurisprudence|Giurisprudenza
Préparer une recherche dans les sources autorisées, avec des références à vérifier.|Preparare una ricerca nelle fonti autorizzate, con riferimenti da verificare.
Projet de mémoire|Bozza di memoria
Organiser un premier texte à partir des faits et de l'argumentation que vous retenez.|Organizzare un primo testo a partire dai fatti e dall’argomentazione che scegliete.
Préparation d'audience|Preparazione dell’udienza
Rassembler les pièces et les points à revoir dans un dossier de travail.|Riunire i documenti e i punti da rivedere in un fascicolo di lavoro.
Revue documentaire|Revisione documentale
Trier les documents d'une opération et préparer les questions restées ouvertes.|Selezionare i documenti di un’operazione e preparare le questioni rimaste aperte.
Organigramme|Organigramma
Rapprocher les extraits disponibles et les liens entre sociétés à vérifier.|Confrontare gli estratti disponibili e i legami tra società da verificare.
Statuts et pactes|Statuti e patti
Faire ressortir les écarts entre statuts, pacte d'actionnaires et répartition du capital.|Evidenziare gli scostamenti tra statuti, patto parasociale e ripartizione del capitale.
Procès-verbaux|Verbali
Préparer un projet selon vos modèles et les décisions qui vous ont été communiquées.|Preparare una bozza secondo i vostri modelli e le decisioni che vi sono state comunicate.
Relevés bancaires|Estratti conto bancari
Rapprocher les opérations fournies et signaler les écarts à examiner.|Confrontare le operazioni fornite e segnalare gli scostamenti da esaminare.
Inventaire de succession|Inventario ereditario
Préparer la liste des éléments documentés et des pièces encore nécessaires.|Preparare l’elenco degli elementi documentati e dei documenti ancora necessari.
Pièces fiscales|Documenti fiscali
Classer les documents reçus et préparer les éléments pour votre revue.|Classificare i documenti ricevuti e preparare gli elementi per la vostra revisione.
Baux|Contratti di locazione
Repérer les clauses de loyer, d'indexation et de résiliation à examiner.|Individuare le clausole su canone, indicizzazione e disdetta da esaminare.
Contrats de travail|Contratti di lavoro
Comparer un projet à vos modèles et préparer les points de contrôle.|Confrontare una bozza con i vostri modelli e preparare i punti di controllo.
Dossiers immobiliers|Pratiche immobiliari
Réunir les actes, extraits autorisés et échanges utiles à votre analyse.|Riunire gli atti, gli estratti autorizzati e gli scambi utili alla vostra analisi.
Mémoire de l'étude|Memoria dello studio
Retrouver un dossier antérieur ou un document pertinent auquel vous avez accès.|Ritrovare una pratica precedente o un documento pertinente a cui avete accesso.
Point du matin|Punto del mattino
Préparer une synthèse des dossiers et des actions que vous souhaitez suivre.|Preparare una sintesi delle pratiche e delle azioni che desiderate seguire.
Formation des collaborateurs|Formazione dei collaboratori
Retrouver les exemples et méthodes que l'étude a autorisés pour la formation.|Ritrovare gli esempi e i metodi che lo studio ha autorizzato per la formazione.
Temps de travail|Tempo di lavoro
Préparer un relevé à partir des traces disponibles, à vérifier avant facturation.|Preparare un rendiconto a partire dalle tracce disponibili, da verificare prima della fatturazione.
Libellés de facture|Descrizioni di fattura
Proposer des descriptions claires à partir des prestations que vous avez validées.|Proporre descrizioni chiare a partire dalle prestazioni che avete convalidato.
Suivi des impayés|Monitoraggio dei crediti scoperti
Préparer une liste de relances et des projets de message, sans envoi automatique.|Preparare un elenco di solleciti e bozze di messaggio, senza invio automatico.
Demande d'accès aux données|Richiesta di accesso ai dati
Aider à rassembler les éléments d'une réponse, sous votre contrôle.|Aiutare a raccogliere gli elementi di una risposta, sotto il vostro controllo.
Archivage|Archiviazione
Proposer un tri selon les règles de conservation que votre étude a définies.|Proporre una selezione secondo le regole di conservazione definite dal vostro studio.
Choisir un premier exemple|Scegliere un primo esempio
Installée chez vous. Préparée avec vous.|Installata da voi. Preparata con voi.
Brigitte associe une box dans vos locaux, les documents que vous choisissez et des fonctions adaptées au travail de votre étude. Notre équipe vient sur place pour l'installation et la prise en main.|Brigitte abbina un box nei vostri locali, i documenti che scegliete e funzioni adatte al lavoro del vostro studio. Il nostro team viene in sede per l’installazione e l’avvio.
Le cadre qui convient à votre étude|Il quadro adatto al vostro studio
Standard — support par connexion chiffrée.|Standard — supporto tramite connessione cifrata.
Pour chaque intervention de support, l'étude ouvre une connexion chiffrée, pour une tâche précise, puis la referme.|Per ogni intervento di supporto, lo studio apre una connessione cifrata, per un compito preciso, e poi la richiude.
Renforcé — sous votre propre sécurité.|Rafforzato — sotto la vostra sicurezza.
Les documents et les données de travail sont conservés sur votre disque et traités localement, dans le cadre de sécurité de votre étude. Les interventions et les connexions sont définies avec votre responsable informatique.|I documenti e i dati di lavoro sono conservati sul vostro disco e trattati localmente, nel quadro di sicurezza del vostro studio. Gli interventi e le connessioni sono definiti con il vostro responsabile informatico.
Sans connexion externe — à confirmer.|Senza connessione esterna — da confermare.
Cette configuration doit être étudiée et validée avant engagement, notamment pour les fonctions disponibles, la maintenance et les mises à jour.|Questa configurazione deve essere esaminata e convalidata prima dell’impegno, in particolare per le funzioni disponibili, la manutenzione e gli aggiornamenti.
Une box, ou deux selon votre besoin|Un box, o due secondo le vostre esigenze
Une box accueille le travail convenu. Une seconde peut être prévue pour organiser la redondance, selon une configuration et une procédure de reprise à valider. La capacité sera confirmée par les essais sur le matériel livré et vos usages.|Un box accoglie il lavoro concordato. Un secondo può essere previsto per organizzare la ridondanza, secondo una configurazione e una procedura di ripristino da convalidare. La capacità sarà confermata dalle prove sull’hardware consegnato e dai vostri usi.
De la signature à la prise en main|Dalla firma all’avvio
Convenir du travail.|Concordare il lavoro.
Un premier cas d'usage, les accès et les critères d'acceptation sont définis au devis.|Un primo caso d’uso, gli accessi e i criteri di accettazione sono definiti nell’offerta.
Préparer la livraison.|Preparare la consegna.
Après signature et encaissement de l'acompte, nous confirmons le matériel et organisons l'intervention selon sa disponibilité.|Dopo la firma e l’incasso dell’acconto, confermiamo l’hardware e organizziamo l’intervento in base alla sua disponibilità.
Installer sur place.|Installare in sede.
Notre équipe prépare la box, les droits d'accès et les connexions convenues avec votre informaticien.|Il nostro team prepara il box, i diritti di accesso e i collegamenti concordati con il vostro informatico.
Essayer et valider.|Provare e convalidare.
Un premier processus est vérifié sur les documents autorisés. Vous examinez les résultats et les points à corriger.|Un primo processo viene verificato sui documenti autorizzati. Voi esaminate i risultati e i punti da correggere.
Former et accompagner.|Formare e accompagnare.
Votre équipe prend en main les fonctions retenues. Le support et les prochaines évolutions sont organisés avec vous.|Il vostro team prende in mano le funzioni scelte. Il supporto e le prossime evoluzioni sono organizzati con voi.
Préparer la mise en route|Preparare l’avvio
Les faits, les pièces, le fil d'un dossier.|I fatti, i documenti, il filo di una pratica.
Pour les services de police, les équipes de sécurité et les institutions, retrouver une information peut demander de relire des échanges, des rapports et des annexes dispersés.|Per i servizi di polizia, i team di sicurezza e le istituzioni, ritrovare un’informazione può richiedere di rileggere scambi, rapporti e allegati dispersi.
Brigitte prépare ce travail dans vos locaux, sur votre matériel, à partir des documents et des accès que vous autorisez.|Brigitte prepara questo lavoro nei vostri locali, sul vostro hardware, a partire dai documenti e dagli accessi che autorizzate.
Préparer l'analyse|Preparare l’analisi
Reconstituer une chronologie.|Ricostruire una cronologia.
Rassembler les événements avec leurs phrases sources et les points à vérifier.|Riunire gli eventi con le loro frasi di origine e i punti da verificare.
Rapprocher les versions.|Confrontare le versioni.
Faire apparaître les différences entre plusieurs comptes rendus, sans décider de leur crédibilité.|Far emergere le differenze tra più resoconti, senza decidere sulla loro credibilità.
Préparer une synthèse.|Preparare una sintesi.
Réunir les éléments documentés et les questions ouvertes pour la personne responsable du dossier.|Riunire gli elementi documentati e le questioni aperte per la persona responsabile della pratica.
Le contrôle reste à votre institution|Il controllo resta alla vostra istituzione
Vous définissez les accès, les connexions et les règles de traitement. Les agents responsables relisent, vérifient et décident. Brigitte ne qualifie pas une personne ni ne prend une décision à leur place.|Voi definite gli accessi, le connessioni e le regole di trattamento. Gli agenti responsabili rileggono, verificano e decidono. Brigitte non qualifica una persona né prende una decisione al loro posto.
Commencer par un périmètre limité|Iniziare con un perimetro limitato
Nous choisissons avec vous un premier travail documentaire, les documents autorisés et les critères de validation. Notre équipe prépare l'installation, la prise en main et l'accompagnement, selon vos exigences.|Scegliamo con voi un primo lavoro documentale, i documenti autorizzati e i criteri di convalida. Il nostro team prepara l’installazione, l’avvio e l’accompagnamento, secondo le vostre esigenze.
Définir un premier cas d'usage|Definire un primo caso d’uso
Préparer le dossier. Garder la relation.|Preparare la pratica. Mantenere il rapporto.
Un dossier client réunit des pièces d'identification, des contrats, des échanges et un historique à comprendre. Votre équipe doit retrouver les éléments utiles avant de répondre ou de décider.|Una pratica cliente riunisce documenti di identificazione, contratti, scambi e una storia da comprendere. Il vostro team deve ritrovare gli elementi utili prima di rispondere o decidere.
Brigitte prépare ce travail dans vos locaux, sur votre matériel, dans le cadre d'accès défini par votre entreprise.|Brigitte prepara questo lavoro nei vostri locali, sul vostro hardware, nel quadro di accesso definito dalla vostra azienda.
Retrouver ce qui compte|Ritrovare ciò che conta
Préparer un dossier client.|Preparare una pratica cliente.
Rassembler les pièces reçues et signaler les éléments manquants selon vos procédures.|Riunire i documenti ricevuti e segnalare gli elementi mancanti secondo le vostre procedure.
Reprendre l'historique.|Riprendere la storia.
Préparer une synthèse des échanges et des faits, avec les documents dont ils proviennent.|Preparare una sintesi degli scambi e dei fatti, con i documenti da cui provengono.
Relire et rapprocher.|Rileggere e confrontare.
Comparer les versions d'un contrat ou rapprocher les opérations fournies pour préparer votre contrôle.|Confrontare le versioni di un contratto o riconciliare le operazioni fornite per preparare il vostro controllo.
Votre équipe vérifie et décide|Il vostro team verifica e decide
Brigitte montre les sources et signale les doutes. Elle ne prend pas de décision d'investissement et ne remplace ni le conseil au client ni vos contrôles internes.|Brigitte mostra le fonti e segnala i dubbi. Non prende decisioni di investimento e non sostituisce né la consulenza al cliente né i vostri controlli interni.
Les connexions aux outils de votre entreprise sont définies et autorisées avec vous. Le traitement local ne dispense pas d'examiner les accès, les prestataires et les règles applicables à vos dossiers.|I collegamenti agli strumenti della vostra azienda sono definiti e autorizzati con voi. L’elaborazione locale non dispensa dall’esaminare gli accessi, i fornitori e le regole applicabili alle vostre pratiche.
Commencer sur un travail concret|Iniziare da un lavoro concreto
Nous définissons un premier cas d'usage, les documents autorisés et les résultats à vérifier. Notre équipe prépare l'installation, la formation et le suivi selon vos besoins.|Definiamo un primo caso d’uso, i documenti autorizzati e i risultati da verificare. Il nostro team prepara l’installazione, la formazione e il monitoraggio secondo le vostre esigenze.
Préparer un premier dossier|Preparare una prima pratica
De la box à votre étude.|Dal box al vostro studio.
blackcode SA est membre du programme NVIDIA Inception.|blackcode SA è membro del programma NVIDIA Inception.
Membre du programme NVIDIA Inception|Membro del programma NVIDIA Inception
Pilote|Progetto pilota
Essayez-la sur une vraie journée de travail|Provatela in una vera giornata di lavoro
Un pilote de six mois avec une petite équipe de votre étude, sur un périmètre défini ensemble, avec vos propres dossiers.|Un progetto pilota di sei mesi con un piccolo team del vostro studio, su un perimetro definito insieme, con i vostri stessi fascicoli.
Discuter du pilote|Parliamo del progetto pilota
Un appel client, une acquisition à préparer|Una videochiamata, un'acquisizione da preparare
Trois clients souhaitent racheter une entreprise et envoient trois bilans pendant un appel vidéo. Avant la fin de la réunion, l'objectif est que Brigitte ait préparé l'analyse des bilans et les questions pour le vendeur, un projet de lettre de mission pour la due diligence et le contrat de cession (SPA), et qu'elle prépare le planning de signature ; l'avocat relit et valide. Avant tout enregistrement, l'étude informe tous les participants de sa finalité et recueille leur consentement. La réunion peut se tenir sans enregistrement.|Tre clienti vogliono acquisire un'azienda e inviano tre bilanci durante una videochiamata. Prima della fine dell'incontro, l'obiettivo è che Brigitte abbia preparato l'analisi dei bilanci e le domande per il venditore, una bozza della lettera di mandato per la due diligence e il contratto di acquisizione (SPA), e preparato il calendario per la firma; l'avvocato rivede e valida. Prima di ogni registrazione, lo studio informa tutti i partecipanti della sua finalità e raccoglie il loro consenso. L'incontro può svolgersi anche senza registrazione.
Exemple phare|Esempio in evidenza
Simulation|Simulazione
Les premiers pas d'un dossier : vérifications, pièces reçues, premiers courriers.|I primi passi di una pratica: verifiche, documenti ricevuti, prime lettere.
Les textes qui sortent de l'étude : relus, comparés, dans votre style.|I testi che escono dallo studio: rivisti, confrontati, nel vostro stile.
Les pièces et les faits d'un dossier contentieux, prêts pour l'audience.|I documenti e i fatti di una pratica contenziosa, pronti per l'udienza.
Les dossiers de sociétés et d'opérations, de la revue documentaire à la signature.|Le pratiche di società e operazioni, dalla revisione documentale alla firma.
Les dossiers courants de l'étude, classés et prêts pour votre revue.|Le pratiche correnti dello studio, classificate e pronte per la vostra revisione.
La vie administrative de l'étude : formation, facturation, archivage.|La vita amministrativa dello studio: formazione, fatturazione, archiviazione.
Délai de procédure (CPC/CPP)|Termine di procedura (CPC/CPP)
Préparer un calcul indicatif selon la procédure applicable, la notification et les règles que vous validez : point de départ, échéance, report du dernier jour et éventuelles suspensions. La procédure pénale ne connaît pas de féries judiciaires. L'avocat vérifie le calcul.|Preparare un calcolo indicativo secondo la procedura applicabile, la notifica e le regole che confermate: dies a quo, scadenza, rinvio dell'ultimo giorno ed eventuali sospensioni. La procedura penale non conosce ferie giudiziarie. L'avvocato verifica il calcolo.
Dossier d'appel|Fascicolo d'appello
Réunir les pièces et les points du jugement de première instance pour préparer un dossier d'appel, que vous complétez.|Raccogliere i documenti e i punti della sentenza di primo grado per preparare un fascicolo d'appello, che voi completate.
Secret professionnel et nLPD|Segreto professionale e nLPD
Le secret professionnel couvre les informations protégées reçues dans l'exercice de l'activité d'avocat et perdure après la fin du mandat (art. 13 LLCA ; art. 321 CP). La loi sur la protection des données (nLPD) s'applique directement à l'intelligence artificielle.|Il segreto professionale copre le informazioni protette ricevute nell'esercizio dell'attività di avvocato e permane dopo la fine del mandato (art. 13 LLCA; art. 321 CP). La legge sulla protezione dei dati (nLPD) si applica direttamente all'intelligenza artificiale.
Conçue pour respecter, pas pour certifier|Concepita per rispettarlo, non per certificarlo
Brigitte est conçue pour respecter le secret professionnel et la nLPD. Aucun outil ne garantit à lui seul la conformité : c'est votre étude qui décide et qui reste responsable.|Brigitte è concepita per rispettare il segreto professionale e la nLPD. Nessuno strumento può garantire da solo la conformità: è il vostro studio che decide e che resta responsabile.
Traité dans votre étude|Elaborato nel vostro studio
Par défaut, vos documents sont traités sur la box, dans votre étude.|Per impostazione predefinita, i vostri documenti vengono elaborati sul box, nel vostro studio.
Comment on travaille|Come lavoriamo
Un premier rendez-vous, sans chiffres.|Un primo incontro, senza cifre.
On écoute vos besoins et vos habitudes de travail, sans parler de prix.|Ascoltiamo le vostre esigenze e abitudini di lavoro, senza parlare di prezzi.
L'analyse des besoins et des outils.|L'analisi dei bisogni e degli strumenti.
Vos outils restent ; on étudie ensemble comment les relier à Brigitte.|I vostri strumenti restano; studiamo insieme come collegarli a Brigitte.
On vient à l'étude.|Veniamo nel vostro studio.
Installation, formation, et un accompagnement pendant les premières semaines.|Installazione, formazione e accompagnamento durante le prime settimane.
On commence petit.|Iniziamo in piccolo.
Puis on ajoute des modules, au fil du temps, selon vos besoins.|Poi aggiungiamo moduli nel tempo, secondo le vostre esigenze.
Vous posez les questions|Siete voi a porre le domande
Quel outil, sur quel dossier, dans quelles conditions ? Votre étude choisit ce qu'elle dépose et à quoi Brigitte se connecte.|Quale strumento, su quale pratica, a quali condizioni? Il vostro studio decide cosa deposita e a cosa si collega Brigitte.
Vos outils restent|I vostri strumenti restano
Brigitte s'ajoute aux outils de votre étude ; elle ne les remplace pas. Vous déposez vos documents, puis des connexions en lecture seule vers votre messagerie, votre partage de fichiers ou votre logiciel de gestion peuvent être activées, si vous le souhaitez.|Brigitte si aggiunge agli strumenti del vostro studio; non li sostituisce. Caricate i vostri documenti, poi connessioni in sola lettura verso la vostra posta elettronica, la condivisione dei file o il vostro software di gestione possono essere attivate, se lo desiderate.
L'envoi, la signature et la facturation restent faits par une personne de votre étude.|L'invio, la firma e la fatturazione restano compiuti da una persona del vostro studio.
Prêt pour Justitia.Swiss|Pronti per Justitia.Swiss
Selon le calendrier annoncé par l'Office fédéral de la justice, l'entrée en vigueur complète de la LPCJ (la loi sur les plateformes de communication électronique dans le domaine judiciaire) est prévue le 1er juillet 2027, sous réserve des conditions de mise en œuvre. Les dépôts volontaires sur la plateforme centrale justitia.swiss précéderont l'obligation, introduite progressivement selon les autorités et les procédures concernées. Votre étude peut anticiper dès maintenant : les accès, la formation et le classement des envois reçus.|Secondo il calendario annunciato dall'Ufficio federale di giustizia, l'entrata in vigore completa della legge federale sulle piattaforme di comunicazione elettronica nella giustizia (LPCJ) è prevista per il 1° luglio 2027, con riserva delle condizioni di attuazione. I depositi volontari sulla piattaforma centrale justitia.swiss precederanno l'obbligo, introdotto progressivamente secondo le autorità e le procedure interessate. Il vostro studio può anticipare già da ora: gli accessi, la formazione e la classificazione degli invii ricevuti.
Brigitte reste en dehors de cette plateforme : elle n'y est pas connectée et ne dépose rien à votre place. Elle vous aide à préparer et à relire vos pièces, dans l'étude.|Brigitte resta al di fuori di questa piattaforma: non vi è collegata e non deposita nulla al posto vostro. Vi aiuta a preparare e a rileggere i vostri documenti, nello studio.
Votre étude est-elle prête ?|Il vostro studio è pronto?
Sept questions, pour vous situer. Rien n'est envoyé ni conservé : ce test reste dans votre navigateur.|Sette domande, per capire a che punto siete. Nulla viene inviato né conservato: questo test resta nel vostro browser.
Une personne de l'étude est-elle déjà chargée de suivre ce dossier ?|Una persona dello studio è già responsabile di seguire questo tema?
Oui|Sì
Non|No
Vos dossiers sont-ils classés et facilement retrouvables sous forme électronique ?|Le vostre pratiche sono classificate e facilmente reperibili in forma elettronica?
Savez-vous qui, chez vous, recevra et traitera les notifications des autorités ?|Sapete chi, nel vostro studio, riceverà e tratterà le notifiche delle autorità?
Votre équipe a-t-elle déjà utilisé une identité électronique reconnue ?|Il vostro team ha già utilizzato un'identità elettronica riconosciuta?
Avez-vous une règle claire sur où sont traités les documents de vos clients ?|Avete una regola chiara su dove vengono trattati i documenti dei vostri clienti?
Un temps de formation de l'équipe est-il déjà prévu ?|È già previsto un tempo di formazione per il team?
Savez-vous quels dossiers resteront soumis aux anciennes règles pendant la transition ?|Sapete quali pratiche resteranno soggette alle vecchie regole durante la transizione?
Voir le résultat|Vedi il risultato
Ce test ne porte pas sur le fond de vos dossiers et ne remplace pas un avis juridique.|Questo test non riguarda il contenuto delle vostre pratiche e non sostituisce un parere legale.
Ce test ne permet pas de conclure que votre étude est prête, ni de vérifier sa conformité : il vous aide seulement à repérer les points à organiser.|Questo test non permette di concludere che il vostro studio sia pronto, né di verificarne la conformità: vi aiuta solo a individuare i punti da organizzare.
La première des trois voies de la FSA|La prima delle tre vie della FSA
La Fédération suisse des avocats décrit trois façons d'utiliser l'IA avec des données de clients. Brigitte correspond à la première voie décrite par la FSA : un logiciel installé dans l'étude.|La Federazione Svizzera degli Avvocati descrive tre modi di utilizzare l'IA con dati dei clienti. Brigitte corrisponde al primo modo descritto dalla FSA: un software installato nello studio.
Local, concrètement|Locale, in parole semplici
« Local » veut dire une chose simple : la box reste chez vous, branchée sur le réseau de votre étude, dans vos locaux. Par défaut, les documents confiés à Brigitte sont stockés et analysés sur la box. Les éventuels accès de support et flux vers des services externes sont définis avec votre étude, selon la configuration convenue.|«Locale» vuol dire una cosa semplice: il box resta da voi, collegato alla rete del vostro studio, nei vostri locali. Per impostazione predefinita, i documenti affidati a Brigitte sono conservati e analizzati sul box. Gli eventuali accessi di supporto e i flussi verso servizi esterni sono definiti con il vostro studio, secondo la configurazione concordata.
Une méthode, pas un outil de plus|Un metodo, non uno strumento in più
Brigitte ne vous demande pas de changer vos habitudes. C'est une méthode qui s'adapte à vous : elle s'installe autour de ce que vous faites déjà, et se connecte à vos outils à votre rythme, selon ce que vous choisissez d'activer.|Brigitte non vi chiede di cambiare le vostre abitudini. È un metodo che si adatta a voi: si inserisce attorno a ciò che fate già, e si collega ai vostri strumenti al vostro ritmo, secondo ciò che scegliete di attivare.
Messagerie|Posta elettronica
Documents|Documenti
Agenda|Agenda
Logiciel de gestion|Software di gestione
Recherche juridique|Ricerca giuridica
Avant et après le passage par la plateforme officielle, Brigitte reste utile : elle prépare vos écritures et votre bordereau de pièces en amont, puis range ce qui en revient dans la mémoire de votre étude. Elle s'intègre aux nouveaux usages, sans jamais s'y substituer : le dépôt et la décision restent les vôtres.|Prima e dopo il passaggio dalla piattaforma ufficiale, Brigitte resta utile: prepara i vostri atti e il vostro elenco dei documenti a monte, poi archivia ciò che ne ritorna nella memoria del vostro studio. Si integra nei nuovi utilizzi, senza mai sostituirli: il deposito e la decisione restano vostri.
Des documents épars s’alignent le long d’une chronologie, un point rouge marquant une date clé.|Documenti sparsi si allineano lungo una cronologia, un punto rosso segna una data chiave.
Trois portes, l’une ouverte, l’autre fermée à clé : plusieurs cadres possibles selon votre étude.|Tre porte, una aperta, una chiusa a chiave: più cornici possibili secondo il vostro studio.
La box Brigitte reliée à vos outils : messagerie, agenda, documents, gestion et recherche juridique.|Il box Brigitte collegato ai vostri strumenti: posta elettronica, agenda, documenti, software di gestione e ricerca giuridica.
`;
  const table = Object.fromEntries(pairs.trim().split('\n').map(line => { const [fr, it] = line.split('|'); return [fr, it]; }));
  const nodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script,style')) continue;
    const key = node.textContent.trim();
    if (table[key]) nodes.push({ node, it: node.textContent.replace(key, table[key]) });
  }
  const attrs = [];
  document.querySelectorAll('[aria-label],[title],[alt],meta[name="description"]').forEach(node => {
    for (const attr of ['aria-label', 'title', 'alt', 'content']) {
      const fr = node.getAttribute(attr);
      if (table[fr]) attrs.push({ node, attr, it: table[fr] });
    }
  });
  const bareTitle = document.title.replace(' · Brigitte', '');
  nodes.forEach(item => { item.node.textContent = item.it; });
  attrs.forEach(item => item.node.setAttribute(item.attr, item.it));
  document.documentElement.lang = 'it';
  document.title = (table[bareTitle] || bareTitle) + ' · Brigitte';
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === 'it')));
  try { localStorage.setItem('bb-lang', 'it'); } catch {}
})();