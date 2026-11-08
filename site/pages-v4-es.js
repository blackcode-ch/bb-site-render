/* Spanish translation of the supplied French page copy. Loaded after pages-v4-de.js; French remains the HTML fallback. */
(() => {
  const lang = new URLSearchParams(location.search).get('lang');
  if (lang !== 'es') return;
  const pairs = `
Aller au contenu|Ir al contenido
Menu|Menú
Clair / sombre|Claro / oscuro
Navigation principale|Navegación principal
Navigation de pied de page|Navegación del pie de página
Thèmes des exemples|Temas de los ejemplos
Le problème|El problema
Ce que fait Brigitte|Lo que hace Brigitte
Exemples|Ejemplos
Démo|Demo
Technologie & mise en route|Tecnología y puesta en marcha
La box|La caja
Investisseurs|Inversores
Contact|Contacto
Sécurité|Seguridad
Gestion de fortune|Gestión patrimonial
Créé par|Creado por
Éditeur|Editor
Suisse|Suiza
IDE|IDE
TVA|IVA
IDE/TVA CHE-114.555.500 TVA|IDE/TVA CHE-114.555.500 TVA
Retour à l’accueil|Volver al inicio
Pour la sécurité|Para la seguridad
Pour la gestion de fortune|Para la gestión patrimonial
Du travail préparé. Des décisions qui restent les vôtres.|Trabajo preparado. Decisiones que siguen siendo suyas.
Voici les usages à construire avec votre étude, selon vos documents, vos accès et les fonctions convenues. Chaque résultat reste à relire ; les connexions et les sources externes dépendent de vos droits et des intégrations validées.|Estos son los usos que se pueden construir con su despacho, según sus documentos, sus accesos y las funciones acordadas. Cada resultado debe ser revisado; las conexiones y las fuentes externas dependen de sus derechos y de las integraciones validadas.
Accueillir et organiser|Acoger y organizar
Rédiger et relire|Redactar y revisar
Préparer le contentieux|Preparar el contencioso
Accompagner les sociétés|Acompañar a las sociedades
Suivre les dossiers du quotidien|Seguir los asuntos cotidianos
Transmettre et administrer|Transmitir y administrar
Conflits d'intérêts|Conflictos de intereses
Rapprocher les noms et les relations connus de l'étude pour préparer votre contrôle.|Cotejar los nombres y las relaciones conocidos del despacho para preparar su control.
Dossier d'identification|Expediente de identificación
Rassembler les pièces reçues et signaler celles qui manquent selon votre liste de contrôle.|Reunir los documentos recibidos y señalar los que faltan según su lista de control.
Lettre d'engagement|Carta de encargo
Préparer un projet à partir de vos modèles et des éléments du mandat.|Preparar un borrador a partir de sus modelos y de los elementos del mandato.
Courriels et dossiers|Correos y expedientes
Proposer un classement des échanges dans le bon dossier, à valider.|Proponer una clasificación de los intercambios en el expediente correspondiente, para su validación.
Dates et délais|Fechas y plazos
Relever les dates utiles et préparer les données d'un calcul dont vous validez les règles.|Extraer las fechas útiles y preparar los datos de un cálculo cuyas reglas usted valida.
Le style de votre étude|El estilo de su despacho
Préparer une réponse en suivant vos formulations et vos usages rédactionnels.|Preparar una respuesta siguiendo sus formulaciones y sus usos de redacción.
Traduction de travail|Traducción de trabajo
Préparer une version française, allemande, italienne ou anglaise pour votre relecture.|Preparar una versión en francés, alemán, italiano o inglés para su revisión.
Relecture de contrat|Revisión de contratos
Repérer les écarts par rapport aux clauses et aux consignes de votre étude.|Detectar las diferencias respecto de las cláusulas y de las instrucciones de su despacho.
Banque de clauses|Banco de cláusulas
Retrouver une formulation déjà utilisée et la pièce dont elle provient.|Recuperar una formulación ya utilizada y el documento del que procede.
Actes et modèles|Actos y modelos
Préparer un premier projet à partir du modèle que vous avez choisi.|Preparar un primer borrador a partir del modelo que haya elegido.
Accords de confidentialité|Acuerdos de confidencialidad
Faire ressortir les clauses à examiner avant de vous engager.|Destacar las cláusulas que deben examinarse antes de comprometerse.
Caviardage|Anonimización
Proposer les passages à masquer avant votre contrôle et votre validation.|Proponer los pasajes que deben ocultarse antes de su control y su validación.
Chronologie|Cronología
Réunir les événements avec leurs dates, leurs phrases sources et les doutes à vérifier.|Reunir los hechos con sus fechas, sus frases de origen y las dudas por verificar.
Bordereau de pièces|Índice de documentos
Préparer une liste ordonnée à partir des documents du dossier.|Preparar una lista ordenada a partir de los documentos del expediente.
Témoignages et divergences|Testimonios y divergencias
Rapprocher les versions d'un même fait et montrer les passages concernés.|Cotejar las versiones de un mismo hecho y mostrar los pasajes afectados.
Jurisprudence|Jurisprudencia
Préparer une recherche dans les sources autorisées, avec des références à vérifier.|Preparar una búsqueda en las fuentes autorizadas, con referencias por verificar.
Projet de mémoire|Borrador de escrito
Organiser un premier texte à partir des faits et de l'argumentation que vous retenez.|Organizar un primer texto a partir de los hechos y de la argumentación que usted elija.
Préparation d'audience|Preparación de la audiencia
Rassembler les pièces et les points à revoir dans un dossier de travail.|Reunir los documentos y los puntos por revisar en un expediente de trabajo.
Revue documentaire|Revisión documental
Trier les documents d'une opération et préparer les questions restées ouvertes.|Clasificar los documentos de una operación y preparar las cuestiones que siguen abiertas.
Organigramme|Organigrama
Rapprocher les extraits disponibles et les liens entre sociétés à vérifier.|Cotejar los extractos disponibles y los vínculos entre sociedades por verificar.
Statuts et pactes|Estatutos y pactos
Faire ressortir les écarts entre statuts, pacte d'actionnaires et répartition du capital.|Destacar las diferencias entre los estatutos, el pacto de accionistas y la distribución del capital.
Procès-verbaux|Actas
Préparer un projet selon vos modèles et les décisions qui vous ont été communiquées.|Preparar un borrador según sus modelos y las decisiones que se le hayan comunicado.
Relevés bancaires|Extractos bancarios
Rapprocher les opérations fournies et signaler les écarts à examiner.|Cotejar las operaciones facilitadas y señalar las diferencias por examinar.
Inventaire de succession|Inventario de sucesión
Préparer la liste des éléments documentés et des pièces encore nécessaires.|Preparar la lista de los elementos documentados y de los documentos que aún se necesitan.
Pièces fiscales|Documentos fiscales
Classer les documents reçus et préparer les éléments pour votre revue.|Clasificar los documentos recibidos y preparar los elementos para su revisión.
Baux|Arrendamientos
Repérer les clauses de loyer, d'indexation et de résiliation à examiner.|Detectar las cláusulas de alquiler, de indexación y de resolución que deben examinarse.
Contrats de travail|Contratos de trabajo
Comparer un projet à vos modèles et préparer les points de contrôle.|Comparar un borrador con sus modelos y preparar los puntos de control.
Dossiers immobiliers|Expedientes inmobiliarios
Réunir les actes, extraits autorisés et échanges utiles à votre analyse.|Reunir las escrituras, los extractos autorizados y los intercambios útiles para su análisis.
Mémoire de l'étude|Memoria del despacho
Retrouver un dossier antérieur ou un document pertinent auquel vous avez accès.|Recuperar un expediente anterior o un documento pertinente al que usted tenga acceso.
Point du matin|Resumen de la mañana
Préparer une synthèse des dossiers et des actions que vous souhaitez suivre.|Preparar una síntesis de los expedientes y de las acciones que desee seguir.
Formation des collaborateurs|Formación de los colaboradores
Retrouver les exemples et méthodes que l'étude a autorisés pour la formation.|Recuperar los ejemplos y los métodos que el despacho ha autorizado para la formación.
Temps de travail|Tiempo de trabajo
Préparer un relevé à partir des traces disponibles, à vérifier avant facturation.|Preparar un registro a partir de los rastros disponibles, que debe verificarse antes de facturar.
Libellés de facture|Conceptos de factura
Proposer des descriptions claires à partir des prestations que vous avez validées.|Proponer descripciones claras a partir de los servicios que usted ha validado.
Suivi des impayés|Seguimiento de impagados
Préparer une liste de relances et des projets de message, sans envoi automatique.|Preparar una lista de recordatorios y borradores de mensajes, sin envío automático.
Demande d'accès aux données|Solicitud de acceso a los datos
Aider à rassembler les éléments d'une réponse, sous votre contrôle.|Ayudar a reunir los elementos de una respuesta, bajo su control.
Archivage|Archivo
Proposer un tri selon les règles de conservation que votre étude a définies.|Proponer una clasificación según las reglas de conservación que su despacho ha definido.
Choisir un premier exemple|Elegir un primer ejemplo
Installée chez vous. Préparée avec vous.|Instalada en sus locales. Preparada con usted.
Brigitte associe une box dans vos locaux, les documents que vous choisissez et des fonctions adaptées au travail de votre étude. Notre équipe vient sur place pour l'installation et la prise en main.|Brigitte combina una caja en sus locales, los documentos que usted elige y funciones adaptadas al trabajo de su despacho. Nuestro equipo acude al lugar para la instalación y la puesta en marcha.
Le cadre qui convient à votre étude|El marco que conviene a su despacho
Standard — support par connexion chiffrée.|Estándar: soporte mediante conexión cifrada.
Pour chaque intervention de support, l'étude ouvre une connexion chiffrée, pour une tâche précise, puis la referme.|Para cada intervención de soporte, el despacho abre una conexión cifrada, para una tarea concreta, y luego la cierra.
Renforcé — sous votre propre sécurité.|Reforzado: bajo su propia seguridad.
Les documents et les données de travail sont conservés sur votre disque et traités localement, dans le cadre de sécurité de votre étude. Les interventions et les connexions sont définies avec votre responsable informatique.|Los documentos y los datos de trabajo se conservan en su disco y se tratan localmente, dentro del marco de seguridad de su despacho. Las intervenciones y las conexiones se definen con su responsable informático.
Sans connexion externe — à confirmer.|Sin conexión externa: por confirmar.
Cette configuration doit être étudiée et validée avant engagement, notamment pour les fonctions disponibles, la maintenance et les mises à jour.|Esta configuración debe estudiarse y validarse antes de asumir ningún compromiso, en particular en cuanto a las funciones disponibles, el mantenimiento y las actualizaciones.
Une box, ou deux selon votre besoin|Una caja, o dos según su necesidad
Une box accueille le travail convenu. Une seconde peut être prévue pour organiser la redondance, selon une configuration et une procédure de reprise à valider. La capacité sera confirmée par les essais sur le matériel livré et vos usages.|Una caja acoge el trabajo acordado. Puede preverse una segunda para organizar la redundancia, según una configuración y un procedimiento de recuperación por validar. La capacidad se confirmará mediante pruebas en el equipo entregado y con sus usos.
De la signature à la prise en main|De la firma a la puesta en marcha
Convenir du travail.|Acordar el trabajo.
Un premier cas d'usage, les accès et les critères d'acceptation sont définis au devis.|En el presupuesto se definen un primer caso de uso, los accesos y los criterios de aceptación.
Préparer la livraison.|Preparar la entrega.
Après signature et encaissement de l'acompte, nous confirmons le matériel et organisons l'intervention selon sa disponibilité.|Tras la firma y el cobro del anticipo, confirmamos el equipo y organizamos la intervención según su disponibilidad.
Installer sur place.|Instalar en el lugar.
Notre équipe prépare la box, les droits d'accès et les connexions convenues avec votre informaticien.|Nuestro equipo prepara la caja, los derechos de acceso y las conexiones acordadas con su informático.
Essayer et valider.|Probar y validar.
Un premier processus est vérifié sur les documents autorisés. Vous examinez les résultats et les points à corriger.|Se verifica un primer proceso con los documentos autorizados. Usted examina los resultados y los puntos por corregir.
Former et accompagner.|Formar y acompañar.
Votre équipe prend en main les fonctions retenues. Le support et les prochaines évolutions sont organisés avec vous.|Su equipo se familiariza con las funciones elegidas. El soporte y las próximas evoluciones se organizan con usted.
Préparer la mise en route|Preparar la puesta en marcha
Les faits, les pièces, le fil d'un dossier.|Los hechos, los documentos, el hilo de un expediente.
Pour les services de police, les équipes de sécurité et les institutions, retrouver une information peut demander de relire des échanges, des rapports et des annexes dispersés.|Para los servicios de policía, los equipos de seguridad y las instituciones, encontrar una información puede exigir releer intercambios, informes y anexos dispersos.
Brigitte prépare ce travail dans vos locaux, sur votre matériel, à partir des documents et des accès que vous autorisez.|Brigitte prepara este trabajo en sus locales, en su equipo, a partir de los documentos y de los accesos que usted autoriza.
Préparer l'analyse|Preparar el análisis
Reconstituer une chronologie.|Reconstruir una cronología.
Rassembler les événements avec leurs phrases sources et les points à vérifier.|Reunir los hechos con sus frases de origen y los puntos por verificar.
Rapprocher les versions.|Cotejar las versiones.
Faire apparaître les différences entre plusieurs comptes rendus, sans décider de leur crédibilité.|Mostrar las diferencias entre varias actas o informes, sin pronunciarse sobre su credibilidad.
Préparer une synthèse.|Preparar una síntesis.
Réunir les éléments documentés et les questions ouvertes pour la personne responsable du dossier.|Reunir los elementos documentados y las cuestiones abiertas para la persona responsable del expediente.
Le contrôle reste à votre institution|El control sigue en manos de su institución
Vous définissez les accès, les connexions et les règles de traitement. Les agents responsables relisent, vérifient et décident. Brigitte ne qualifie pas une personne ni ne prend une décision à leur place.|Usted define los accesos, las conexiones y las reglas de tratamiento. Los agentes responsables releen, verifican y deciden. Brigitte no califica a ninguna persona ni toma una decisión en su lugar.
Commencer par un périmètre limité|Empezar con un alcance limitado
Nous choisissons avec vous un premier travail documentaire, les documents autorisés et les critères de validation. Notre équipe prépare l'installation, la prise en main et l'accompagnement, selon vos exigences.|Elegimos con usted un primer trabajo documental, los documentos autorizados y los criterios de validación. Nuestro equipo prepara la instalación, la puesta en marcha y el acompañamiento, según sus exigencias.
Définir un premier cas d'usage|Definir un primer caso de uso
Préparer le dossier. Garder la relation.|Preparar el expediente. Cuidar la relación.
Un dossier client réunit des pièces d'identification, des contrats, des échanges et un historique à comprendre. Votre équipe doit retrouver les éléments utiles avant de répondre ou de décider.|Un expediente de cliente reúne documentos de identificación, contratos, intercambios y un historial que hay que comprender. Su equipo debe encontrar los elementos útiles antes de responder o de decidir.
Brigitte prépare ce travail dans vos locaux, sur votre matériel, dans le cadre d'accès défini par votre entreprise.|Brigitte prepara este trabajo en sus locales, en su equipo, dentro del marco de acceso definido por su empresa.
Retrouver ce qui compte|Encontrar lo que importa
Préparer un dossier client.|Preparar un expediente de cliente.
Rassembler les pièces reçues et signaler les éléments manquants selon vos procédures.|Reunir los documentos recibidos y señalar los elementos que faltan según sus procedimientos.
Reprendre l'historique.|Retomar el historial.
Préparer une synthèse des échanges et des faits, avec les documents dont ils proviennent.|Preparar una síntesis de los intercambios y de los hechos, con los documentos de los que proceden.
Relire et rapprocher.|Releer y cotejar.
Comparer les versions d'un contrat ou rapprocher les opérations fournies pour préparer votre contrôle.|Comparar las versiones de un contrato o cotejar las operaciones facilitadas para preparar su control.
Votre équipe vérifie et décide|Su equipo verifica y decide
Brigitte montre les sources et signale les doutes. Elle ne prend pas de décision d'investissement et ne remplace ni le conseil au client ni vos contrôles internes.|Brigitte muestra las fuentes y señala las dudas. No toma ninguna decisión de inversión y no sustituye ni el asesoramiento al cliente ni sus controles internos.
Les connexions aux outils de votre entreprise sont définies et autorisées avec vous. Le traitement local ne dispense pas d'examiner les accès, les prestataires et les règles applicables à vos dossiers.|Las conexiones con las herramientas de su empresa se definen y se autorizan con usted. El tratamiento local no exime de examinar los accesos, los proveedores y las normas aplicables a sus expedientes.
Commencer sur un travail concret|Empezar con un trabajo concreto
Nous définissons un premier cas d'usage, les documents autorisés et les résultats à vérifier. Notre équipe prépare l'installation, la formation et le suivi selon vos besoins.|Definimos un primer caso de uso, los documentos autorizados y los resultados por verificar. Nuestro equipo prepara la instalación, la formación y el seguimiento según sus necesidades.
Préparer un premier dossier|Preparar un primer expediente
De la box à votre étude.|De la caja a su despacho.
blackcode SA est membre du programme NVIDIA Inception.|blackcode SA es miembro del programa NVIDIA Inception.
Membre du programme NVIDIA Inception|Miembro del programa NVIDIA Inception
Pilote|Piloto
Essayez-la sur une vraie journée de travail|Pruébela en una jornada de trabajo real
Un pilote de six mois avec une petite équipe de votre étude, sur un périmètre défini ensemble, avec vos propres dossiers.|Un piloto de seis meses con un pequeño equipo de su despacho, con un alcance acordado juntos, sobre sus propios expedientes.
Discuter du pilote|Hablar sobre el piloto
Un appel client, une acquisition à préparer|Una videollamada, una adquisición por preparar
Trois clients souhaitent racheter une entreprise et envoient trois bilans pendant un appel vidéo. Avant la fin de la réunion, l'objectif est que Brigitte ait préparé l'analyse des bilans et les questions pour le vendeur, un projet de lettre de mission pour la due diligence et le contrat de cession (SPA), et qu'elle prépare le planning de signature ; l'avocat relit et valide. Avant tout enregistrement, l'étude informe tous les participants de sa finalité et recueille leur consentement. La réunion peut se tenir sans enregistrement.|Tres clientes quieren comprar una empresa y envían tres balances durante una videollamada. Antes de que termine la reunión, el objetivo es que Brigitte haya preparado el análisis de los balances y las preguntas para el vendedor, un borrador de la carta de encargo para la due diligence y el contrato de compraventa (SPA), y haya preparado el calendario de firma; el abogado revisa y valida. Antes de cualquier grabación, el despacho informa a todos los participantes de su finalidad y recaba su consentimiento. La reunión también puede celebrarse sin grabación.
Exemple phare|Ejemplo destacado
Simulation|Simulación
Les premiers pas d'un dossier : vérifications, pièces reçues, premiers courriers.|Los primeros pasos de un expediente: verificaciones, documentos recibidos, primeras cartas.
Les textes qui sortent de l'étude : relus, comparés, dans votre style.|Los textos que salen del despacho: revisados, comparados, en su estilo.
Les pièces et les faits d'un dossier contentieux, prêts pour l'audience.|Los documentos y los hechos de un expediente contencioso, listos para la audiencia.
Les dossiers de sociétés et d'opérations, de la revue documentaire à la signature.|Los expedientes de sociedades y operaciones, desde la revisión documental hasta la firma.
Les dossiers courants de l'étude, classés et prêts pour votre revue.|Los expedientes corrientes del despacho, clasificados y listos para su revisión.
La vie administrative de l'étude : formation, facturation, archivage.|La vida administrativa del despacho: formación, facturación, archivo.
Délai de procédure (CPC/CPP)|Plazo procesal (CPC/CPP)
Préparer un calcul indicatif selon la procédure applicable, la notification et les règles que vous validez : point de départ, échéance, report du dernier jour et éventuelles suspensions. La procédure pénale ne connaît pas de féries judiciaires. L'avocat vérifie le calcul.|Preparar un cálculo indicativo según el procedimiento aplicable, la notificación y las reglas que usted confirme: punto de partida, vencimiento, aplazamiento del último día y eventuales suspensiones. El procedimiento penal no conoce ferias judiciales. El abogado verifica el cálculo.
Dossier d'appel|Expediente de apelación
Réunir les pièces et les points du jugement de première instance pour préparer un dossier d'appel, que vous complétez.|Reunir los documentos y los puntos de la sentencia de primera instancia para preparar un expediente de apelación, que usted completa.
Secret professionnel et nLPD|Secreto profesional y nLPD
Le secret professionnel couvre les informations protégées reçues dans l'exercice de l'activité d'avocat et perdure après la fin du mandat (art. 13 LLCA ; art. 321 CP). La loi sur la protection des données (nLPD) s'applique directement à l'intelligence artificielle.|El secreto profesional cubre la información protegida recibida en el ejercicio de la actividad de abogado y continúa tras la finalización del mandato (art. 13 LLCA; art. 321 CP). La ley de protección de datos (nLPD) se aplica directamente a la inteligencia artificial.
Conçue pour respecter, pas pour certifier|Concebida para respetarlo, no para certificarlo
Brigitte est conçue pour respecter le secret professionnel et la nLPD. Aucun outil ne garantit à lui seul la conformité : c'est votre étude qui décide et qui reste responsable.|Brigitte está concebida para respetar el secreto profesional y la nLPD. Ninguna herramienta puede garantizar por sí sola el cumplimiento: su despacho decide y sigue siendo responsable.
Traité dans votre étude|Procesado en su despacho
Par défaut, vos documents sont traités sur la box, dans votre étude.|Por defecto, sus documentos se procesan en la caja, en su despacho.
Comment on travaille|Cómo trabajamos
Un premier rendez-vous, sans chiffres.|Una primera reunión, sin cifras.
On écoute vos besoins et vos habitudes de travail, sans parler de prix.|Escuchamos sus necesidades y hábitos de trabajo, sin hablar de precios.
L'analyse des besoins et des outils.|El análisis de las necesidades y las herramientas.
Vos outils restent ; on étudie ensemble comment les relier à Brigitte.|Sus herramientas permanecen; estudiamos juntos cómo conectarlas con Brigitte.
On vient à l'étude.|Vamos a su despacho.
Installation, formation, et un accompagnement pendant les premières semaines.|Instalación, formación y acompañamiento durante las primeras semanas.
On commence petit.|Empezamos poco a poco.
Puis on ajoute des modules, au fil du temps, selon vos besoins.|Luego añadimos módulos con el tiempo, según sus necesidades.
Vous posez les questions|Usted hace las preguntas
Quel outil, sur quel dossier, dans quelles conditions ? Votre étude choisit ce qu'elle dépose et à quoi Brigitte se connecte.|¿Qué herramienta, en qué expediente, en qué condiciones? Su despacho decide qué sube y a qué se conecta Brigitte.
Vos outils restent|Sus herramientas permanecen
Brigitte s'ajoute aux outils de votre étude ; elle ne les remplace pas. Vous déposez vos documents, puis des connexions en lecture seule vers votre messagerie, votre partage de fichiers ou votre logiciel de gestion peuvent être activées, si vous le souhaitez.|Brigitte se añade a las herramientas de su despacho; no las sustituye. Usted sube sus documentos, y después pueden activarse, si lo desea, conexiones de solo lectura a su correo, su almacenamiento compartido o su software de gestión.
L'envoi, la signature et la facturation restent faits par une personne de votre étude.|El envío, la firma y la facturación siguen a cargo de una persona de su despacho.
Prêt pour Justitia.Swiss|Preparados para Justitia.Swiss
Selon le calendrier annoncé par l'Office fédéral de la justice, l'entrée en vigueur complète de la LPCJ (la loi sur les plateformes de communication électronique dans le domaine judiciaire) est prévue le 1er juillet 2027, sous réserve des conditions de mise en œuvre. Les dépôts volontaires sur la plateforme centrale justitia.swiss précéderont l'obligation, introduite progressivement selon les autorités et les procédures concernées. Votre étude peut anticiper dès maintenant : les accès, la formation et le classement des envois reçus.|Según el calendario anunciado por la Oficina Federal de Justicia, la entrada en vigor completa de la ley federal sobre las plataformas de comunicación electrónica en el ámbito judicial (LPCJ) está prevista para el 1 de julio de 2027, sujeta a las condiciones de implementación. Las presentaciones voluntarias en la plataforma central justitia.swiss precederán a la obligación, introducida progresivamente según la autoridad y el procedimiento. Su despacho puede anticiparse desde ahora: los accesos, la formación y la clasificación de los envíos recibidos.
Brigitte reste en dehors de cette plateforme : elle n'y est pas connectée et ne dépose rien à votre place. Elle vous aide à préparer et à relire vos pièces, dans l'étude.|Brigitte permanece fuera de esta plataforma: no está conectada a ella y no presenta nada en su lugar. Le ayuda a preparar y revisar sus documentos, en el despacho.
Votre étude est-elle prête ?|¿Está preparado su despacho?
Sept questions, pour vous situer. Rien n'est envoyé ni conservé : ce test reste dans votre navigateur.|Siete preguntas, para situarse. No se envía ni se guarda nada: este test permanece en su navegador.
Une personne de l'étude est-elle déjà chargée de suivre ce dossier ?|¿Hay ya una persona del despacho encargada de seguir este tema?
Oui|Sí
Non|No
Vos dossiers sont-ils classés et facilement retrouvables sous forme électronique ?|¿Están sus expedientes clasificados y son fáciles de encontrar en formato electrónico?
Savez-vous qui, chez vous, recevra et traitera les notifications des autorités ?|¿Sabe quién, en su despacho, recibirá y tratará las notificaciones de las autoridades?
Votre équipe a-t-elle déjà utilisé une identité électronique reconnue ?|¿Su equipo ha utilizado ya una identidad electrónica reconocida?
Avez-vous une règle claire sur où sont traités les documents de vos clients ?|¿Tiene una regla clara sobre dónde se tratan los documentos de sus clientes?
Un temps de formation de l'équipe est-il déjà prévu ?|¿Ya está previsto un tiempo de formación para el equipo?
Savez-vous quels dossiers resteront soumis aux anciennes règles pendant la transition ?|¿Sabe qué expedientes seguirán sujetos a las reglas antiguas durante la transición?
Voir le résultat|Ver el resultado
Ce test ne porte pas sur le fond de vos dossiers et ne remplace pas un avis juridique.|Este test no trata sobre el fondo de sus expedientes y no sustituye un asesoramiento jurídico.
Ce test ne permet pas de conclure que votre étude est prête, ni de vérifier sa conformité : il vous aide seulement à repérer les points à organiser.|Este test no permite concluir que su despacho esté preparado, ni verificar su cumplimiento: solo le ayuda a identificar los puntos por organizar.
Local, concrètement|Local, en términos sencillos
« Local » veut dire une chose simple : la box reste chez vous, branchée sur le réseau de votre étude, dans vos locaux. Par défaut, les documents confiés à Brigitte sont stockés et analysés sur la box. Les éventuels accès de support et flux vers des services externes sont définis avec votre étude, selon la configuration convenue.|«Local» quiere decir algo simple: la caja permanece con usted, conectada a la red de su despacho, en sus locales. Por defecto, los documentos confiados a Brigitte se almacenan y analizan en la caja. Los posibles accesos de soporte y los flujos hacia servicios externos se definen con su despacho, según la configuración acordada.
Une méthode, pas un outil de plus|Un método, no una herramienta más
Brigitte ne vous demande pas de changer vos habitudes. C'est une méthode qui s'adapte à vous : elle s'installe autour de ce que vous faites déjà, et se connecte à vos outils à votre rythme, selon ce que vous choisissez d'activer.|Brigitte no le pide que cambie sus hábitos. Es un método que se adapta a usted: se instala alrededor de lo que ya hace, y se conecta a sus herramientas a su ritmo, según lo que decida activar.
Messagerie|Correo
Documents|Documentos
Agenda|Agenda
Logiciel de gestion|Software de gestión
Recherche juridique|Búsqueda jurídica
Avant et après le passage par la plateforme officielle, Brigitte reste utile : elle prépare vos écritures et votre bordereau de pièces en amont, puis range ce qui en revient dans la mémoire de votre étude. Elle s'intègre aux nouveaux usages, sans jamais s'y substituer : le dépôt et la décision restent les vôtres.|Antes y después de pasar por la plataforma oficial, Brigitte sigue siendo útil: prepara sus escritos y su índice de documentos con antelación, y después archiva lo que vuelve en la memoria de su despacho. Se integra en los nuevos usos, sin sustituirlos nunca: la presentación y la decisión siguen siendo suyas.
Des documents épars s’alignent le long d’une chronologie, un point rouge marquant une date clé.|Documentos dispersos se alinean a lo largo de una cronología, un punto rojo marca una fecha clave.
Trois portes, l’une ouverte, l’autre fermée à clé : plusieurs cadres possibles selon votre étude.|Tres puertas, una abierta, otra cerrada con llave: varios marcos posibles según su despacho.
La box Brigitte reliée à vos outils : messagerie, agenda, documents, gestion et recherche juridique.|La caja Brigitte conectada a sus herramientas: correo, agenda, documentos, software de gestión y búsqueda jurídica.
`;
  const table = Object.fromEntries(pairs.trim().split('\n').map(line => { const [fr, es] = line.split('|'); return [fr, es]; }));
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script,style')) continue;
    const key = node.textContent.trim();
    if (table[key]) nodes.push([node, node.textContent.replace(key, table[key])]);
  }
  nodes.forEach(([node, text]) => { node.textContent = text; });
  document.querySelectorAll('[aria-label],[title],[alt],meta[name="description"]').forEach(node => {
    for (const attr of ['aria-label', 'title', 'alt', 'content']) {
      const fr = node.getAttribute(attr);
      if (table[fr]) node.setAttribute(attr, table[fr]);
    }
  });
  const bare = document.title.replace(' · Brigitte', '');
  document.title = (table[bare] || bare) + ' · Brigitte';
  document.documentElement.lang = 'es';
})();