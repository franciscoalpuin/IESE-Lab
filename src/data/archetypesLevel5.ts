import { ArchetypeExerciseData } from './daily120PlanData';

export const LEVEL_5_ARCHETYPES: ArchetypeExerciseData[] = [
  // L5-1: Briefing Operativo de Estado Mayor (Staff Briefings) & Inversión Estilística
  {
    title: 'Briefing Operativo de Estado Mayor (Staff Briefing) & Inversión Estilística',
    theme: 'Presentaciones Doctrinales a Comandantes Generales e Inversión Estilística Formal',
    objective: 'Presentar una actualización de batalla (Battle Update Briefing) estructurada según las secciones del Estado Mayor (G1 Personal, G2 Inteligencia, G3 Operaciones, G4 Logística) y utilizar inversión sintáctica para énfasis.',
    vocabulary: [
      { term: 'Battle Update Brief (BUB)', translation: 'Actualización operativa de batalla', ipa: '/ˈbæt.əl ˈʌp.deɪt briːf/', spanishPhonetic: 'bá-tol áp-deit briif', example: 'The Chief of Staff convened the evening BUB at 1800 hours.' },
      { term: 'Center of Gravity (CoG)', translation: 'Centro de Gravedad operacional', ipa: '/ˈsen.tər əv ˈɡræv.ə.ti/', spanishPhonetic: 'sén-ter ov grá-vi-ti', example: 'Neutralizing the adversary integrated air defense is the operational CoG.' },
      { term: 'Course of Action (COA)', translation: 'Curso de Acción táctico', ipa: '/kɔːs əv ˈæk.ʃən/', spanishPhonetic: 'kors ov ák-shon', example: 'Staff war-gamed three distinct Courses of Action.' },
      { term: 'Collateral damage estimation', translation: 'Estimación de daño colateral', ipa: '/kəˈlæt.ər.əl ˈdæm.ɪdʒ/', spanishPhonetic: 'ko-lá-te-ral dá-midsh', example: 'Strict collateral damage estimation prohibited precision strikes near the hospital.' },
      { term: 'Under no circumstances', translation: 'Bajo ninguna circunstancia (Inversión)', ipa: '/ˈʌn.dər nəʊ ˈsɜː.kəm.stɑːn.sɪz/', spanishPhonetic: 'án-der nou sér-kom-stan-siz', example: 'Under no circumstances will units advance without verified artillery clearance.' }
    ],
    grammar: {
      title: 'Stylistic Inversion with Negative/Restrictive Adverbs & Passive Impersonal',
      formula: 'Negative Adverb + Auxiliary + Subject + Main Verb (e.g., Never have I seen... / Under no circumstances shall...)',
      rule: 'Para impartir órdenes perentorias o enfatizar directivas solemnes de Estado Mayor: "Under no circumstances shall ground units cross Phase Line Red without visual air cover", "Not only did the reconnaissance platoon locate the radar site, but they also captured the encryption ledger". Construcción pasiva impersonal: "It is widely recognized that...", "It has been determined by Division Staff that...".',
      tacticalTip: 'La inversión invierte el orden sujeto-auxiliar: "Under no circumstances will friendly forces..." (¡nunca "Under no circumstances friendly forces will..."!).'
    },
    phonetics: {
      targetSound: 'Vocálico /ɜː/ en Circumstances, Gravity, Course',
      articulatoryTip: 'En "circumstances" la vocal inicial es neutra, firme y tónica: /ˈsɜː.kəm.stɑːn.sɪz/.',
      spanishPhonetic: 'sér-kom-stan-siz',
      practiceWords: [
        { word: 'Circumstances', spanishPhonetic: 'sér-kom-stan-siz', translation: 'circunstancias' },
        { word: 'Gravity', spanishPhonetic: 'grá-vi-ti', translation: 'gravedad' },
        { word: 'Course', spanishPhonetic: 'kors', translation: 'curso' }
      ]
    },
    usefulPhrase: {
      phrase: 'General, ladies and gentlemen: Under no circumstances should we commit the brigade reserve until the adversary mechanized vanguard has been canalized into the designated kill zone.',
      translation: 'Mi General, señoras y señores: Bajo ninguna circunstancia deberíamos empeñar la reserva de la brigada hasta que la vanguardia mecanizada adversaria haya sido canalizada hacia la zona de aniquilamiento designada.',
      spanishPhonetic: 'Dshé-ne-ral, léi-diz and dshén-tol-men: Án-der nou sér-kom-stan-siz shud ui ko-mít de bri-géid ri-zérv an-tíl de ad-ver-sá-ri me-ka-náizd van-gard jaz biin ka-na-láizd ín-tu de dé-sig-nei-ted kil zoun.',
      tacticalUsage: 'Intervención de Estado Mayor (G3 Operaciones) en deliberaciones de planeamiento operativo.'
    },
    listening: {
      title: 'Presentación del Oficial de Inteligencia (G2) en Briefing Divisional',
      script: 'Good morning, Commander, members of the General Staff. I will provide the G2 Intelligence update. Over the past twenty-four hours, imagery intelligence confirmed that the enemy 4th Tank Division completed their river crossing north of Sector Bravo. Under no circumstances can we assume their motorized regiments remain at their previous assembly areas. Electronic warfare sensors intercepted high-volume encrypted tactical traffic indicating an imminent assault along Highway Six within the next six hours. The weather forecast predicts low cloud cover and continuous rainfall, severely degrading our close air support capabilities. Recommended action: transition all defensive sectors to condition Red immediately.',
      question: {
        question: 'What weather factor will degrade friendly close air support according to the G2 brief?',
        options: [
          'Low cloud cover and continuous rainfall',
          'Severe desert sandstorms',
          'Heavy freezing blizzards',
          'Intense solar radiation jamming satellite telemetry'
        ],
        correctIndex: 0,
        explanation: 'The G2 explicitly briefs: "The weather forecast predicts low cloud cover and continuous rainfall, severely degrading our close air support capabilities".'
      }
    },
    reading: {
      title: 'Doctrina de Estado Mayor: Procedimientos de Juicio de Cursos de Acción (Wargaming)',
      snippet: 'Course of Action (COA) analysis, commonly known as wargaming, is the core intellectual discipline of military staff planning. It enables the Commander and Staff to synchronize combat power against the adversary operational center of gravity. Each friendly course of action must meet four mandatory criteria: suitability, feasibility, acceptability, and distinguishability. Under no circumstances should a staff recommend a course of action that violates the principle of military necessity or inflicts disproportionate civilian casualties.',
      question: {
        question: 'What are the four mandatory criteria every Course of Action must fulfill?',
        options: [
          'Suitability, feasibility, acceptability, and distinguishability',
          'Speed, secrecy, lethality, and destruction',
          'Low cost, minimal paperwork, civilian popularity, and speed',
          'Simplicity, brevity, unilateral authority, and improvisation'
        ],
        correctIndex: 0,
        explanation: 'The doctrinal text mandates: "Each friendly course of action must meet four mandatory criteria: suitability, feasibility, acceptability, and distinguishability".'
      }
    },
    useOfLanguage: {
      title: 'Inversión Estilística en Directivas de Comando',
      prompt: 'Elige la construcción sintáctica correcta para aplicar inversión enfática formal:',
      question: {
        question: '"Not only ______ (the reconnaissance drone / identify) the hostile command post, but it also transmitted live coordinates to the artillery battery."',
        options: [
          'did the reconnaissance drone identify',
          'the reconnaissance drone identified',
          'identified the reconnaissance drone',
          'was the reconnaissance drone identifying'
        ],
        correctIndex: 0,
        explanation: 'After negative/restrictive correlatives like "Not only", inverted word order requires auxiliary "did" + subject + bare infinitive.'
      }
    },
    writing: {
      title: 'Síntesis Ejecutiva de Briefing Operacional para el Comandante',
      scenario: 'Redacta un resumen ejecutivo de 50 palabras para la carpeta del Comandante recomendando adoptar el Curso de Acción 2 (maniobra envolvente) por sobre el Curso de Acción 1 (ataque frontal).',
      targetWordCount: '45-60 palabras',
      requiredElements: ['Recomendación explícita (COA 2)', 'Justificación comparativa (menores bajas)', 'Uso de una inversión sintáctica formal', 'Firma y cargo de Estado Mayor'],
      modelAnswer: 'EXECUTIVE STAFF MEMORANDUM: To: Division Commander. From: G3 Operations. Recommendation: Adopt Course of Action 2 (Enveloping Maneuver). COA 2 bypasses fortified enemy strongpoints, significantly preserving combat power. Not only does this option secure the strategic airfield, but it also halves projected friendly casualties. Respectfully submitted, Lieutenant Colonel Davies, G3.'
    },
    speaking: {
      title: 'Presentación Oral de Recomendación Táctica en Briefing',
      scenario: 'Expón oralmente ante el Estado Mayor la justificación de tu propuesta con compostura diplomática y dicción de nivel oficial superior.',
      recommendedDuration: '30 segundos',
      pronunciationTips: ['Voz firme, templada y sin titubeos.', 'Enfatiza las palabras "Not only" y "Under no circumstances".'],
      modelResponse: 'Commander, Staff: In summary, Course of Action Two presents the most decisive operational advantage. Under no circumstances should we attempt a frontal assault when the adversary flank remains vulnerable. I strongly recommend immediate approval of COA Two.'
    }
  },

  // L5-2: Derecho Internacional de los Conflictos Armados (LOAC) & Tercer Condicional
  {
    title: 'Derecho Internacional de los Conflictos Armados (LOAC) & Lecciones Aprendidas',
    theme: 'Convenios de Ginebra, Proporcionalidad, Distinción y Tercer Condicional (Third Conditional)',
    objective: 'Evaluar objetivos militares bajo el Derecho de la Guerra (LOAC / DIH), analizar daños colaterales y formular análisis retrospectivos en lecciones aprendidas empleando el Tercer Condicional.',
    vocabulary: [
      { term: 'Law of Armed Conflict (LOAC)', translation: 'Derecho de los Conflictos Armados / DIH', ipa: '/lɔː əv ɑːmd ˈkɒn.flɪkt/', spanishPhonetic: 'lo ov armd kón-flikt', example: 'All targeting decisions must strictly comply with the Law of Armed Conflict.' },
      { term: 'Proportionality', translation: 'Principio de proporcionalidad', ipa: '/prəˌpɔː.ʃənˈæl.ə.ti/', spanishPhonetic: 'pro-por-sho-ná-li-ti', example: 'Incidental civilian damage must not be excessive in relation to the concrete military advantage.' },
      { term: 'Distinction', translation: 'Principio de distinción (combatiente vs civil)', ipa: '/dɪˈstɪŋk.ʃən/', spanishPhonetic: 'dis-tíngk-shon', example: 'Combatants must distinguish at all times between military objectives and civilian objects.' },
      { term: 'Third Conditional', translation: 'Tercer condicional (Hipótesis pasadas irreales)', ipa: '/θɜːd kənˈdɪʃ.ən.əl/', spanishPhonetic: 'terd kon-dí-sho-nal', example: 'If we had verified the target visually, the tragic strike would not have occurred.' },
      { term: 'Dual-use facility', translation: 'Instalación de doble uso (civil y militar)', ipa: '/ˌdʒuː.əl ˈjuːs fəˈsɪl.ə.ti/', spanishPhonetic: 'diú-al ius fa-sí-li-ti', example: 'A commercial radio tower used for military radar communications is a dual-use facility.' }
    ],
    grammar: {
      title: 'Third Conditional & Mixed Conditionals en Debriefing Táctico',
      formula: 'Third Conditional: If + had + Past Participle, would have + Past Participle | Mixed: If had + PP, would + Base Verb (past condition with present result)',
      rule: 'Para evaluar lecciones aprendidas y analizar hechos que pudieron haber cambiado el desenlace de una batalla: "If the forward observers had checked the cultural heritage map, they would not have cleared artillery fire on the historical shrine", "If the reconnaissance detachment had identified the anti-tank ditch, our vanguard would not be stranded today".',
      tacticalTip: 'Usa "could have" para posibilidad pasada y "would have" para certeza condicional: "If air support had arrived earlier, we could have pursued the retreating armor".'
    },
    phonetics: {
      targetSound: 'Sonido /θ/ en Third, Thought y /ʃ/ en Distinction, Proportionality',
      articulatoryTip: 'En "third" coloca la punta de la lengua entre los dientes sin morder. En "proportionality" pronuncia claramente cada una de sus seis sílabas.',
      spanishPhonetic: 'terd, pro-por-sho-ná-li-ti',
      practiceWords: [
        { word: 'Proportionality', spanishPhonetic: 'pro-por-sho-ná-li-ti', translation: 'proporcionalidad' },
        { word: 'Distinction', spanishPhonetic: 'dis-tíngk-shon', translation: 'distinción' },
        { word: 'Necessity', spanishPhonetic: 'ne-sé-si-ti', translation: 'necesidad' }
      ]
    },
    usefulPhrase: {
      phrase: 'Legal Advisor to Battle Watch Captain: The proposed airstrike on the relay tower does not violate the principle of proportionality, provided that precision-guided munitions are employed to mitigate collateral damage to neighboring residential dwellings.',
      translation: 'Asesor Jurídico a Capitán de Guardia de Combate: El ataque aéreo propuesto sobre la torre de retransmisión no viola el principio de proporcionalidad, siempre que se empleen municiones guiadas de precisión para mitigar el daño colateral en viviendas residenciales aledañas.',
      spanishPhonetic: 'Lí-gal Ad-vái-sor tu Bá-tol Uotch Káp-tin: De pro-póusd ér-straik on de rí-lei táu-er daz not vái-o-leit de prín-si-pol ov pro-por-sho-ná-li-ti, pro-vái-ded dat pre-sí-shon-gái-ded miu-ní-shonz ar em-plóid tu mí-ti-geit ko-lá-te-ral dá-midsh tu néi-bo-ring re-si-dén-shal dué-lings.',
      tacticalUsage: 'Dictamen de asesor jurídico operacional (LEGAD) en salas de operaciones conjuntas.'
    },
    listening: {
      title: 'Dictamen Jurídico Operacional del Asesor Legal (LEGAD) ante Ataque Aéreo',
      script: 'Commander, as your Legal Advisor under the Geneva Conventions, I have reviewed the target folder for Objective Falcon. The target is an adversary electronic jamming station located on the roof of a three-story municipal office. Under the principle of distinction, the jamming gear constitutes a legitimate military objective. However, under the principle of proportionality, attacking the entire building with unguided gravity bombs would generate excessive civilian collateral casualties. If the air component had allocated precision-guided munitions with delayed fuzing, the strike would have satisfied all LOAC requirements. My legal advice: abort the unguided strike; re-task with satellite-guided precision ordnance or execute a special forces direct action raid.',
      question: {
        question: 'Why does the Legal Advisor recommend against using unguided gravity bombs against the target?',
        options: [
          'Because it would cause excessive civilian collateral casualties, violating proportionality',
          'Because the aircraft does not have enough fuel',
          'Because the municipal building is completely abandoned',
          'Because the weather over the target is sunny'
        ],
        correctIndex: 0,
        explanation: 'The LEGAD explicitly states: "attacking the entire building with unguided gravity bombs would generate excessive civilian collateral casualties", breaching proportionality.'
      }
    },
    reading: {
      title: 'Tratados Internacionales: Los Cuatro Principios Fundamentales del DIH',
      snippet: 'The Law of Armed Conflict rests upon four core customary principles: Military Necessity, Distinction, Proportionality, and the Prohibition of Unnecessary Suffering. Military necessity authorizes only that measure of force required to accomplish the legitimate purpose of subduing the adversary in the shortest time with the least expenditure of life and resources. Crucially, military necessity can never justify conduct that is explicitly forbidden by treaty law, such as the targeting of medical personnel or the execution of prisoners of war.',
      question: {
        question: 'Can military necessity justify actions explicitly forbidden by treaty law (e.g., targeting medical staff)?',
        options: [
          'No, military necessity can never justify conduct explicitly prohibited by treaty law',
          'Yes, if the commander declares an operational emergency',
          'Only during night operations',
          'Yes, provided approval is granted by a battalion sergeant'
        ],
        correctIndex: 0,
        explanation: 'The text states firmly: "Crucially, military necessity can never justify conduct that is explicitly forbidden by treaty law".'
      }
    },
    useOfLanguage: {
      title: 'Third Conditional en Evaluaciones Operacionales',
      prompt: 'Completa la hipótesis retrospectiva en el informe de lecciones aprendidas:',
      question: {
        question: '"If the strike coordinator ______ (conduct) a collateral damage estimate, the mission ______ (avoid) damaging the civilian water filtration plant."',
        options: [
          'had conducted / would have avoided',
          'conducted / would avoid',
          'has conducted / would have avoided',
          'had been conducted / avoided'
        ],
        correctIndex: 0,
        explanation: 'The Third Conditional structure requires: If + had + past participle (had conducted), would have + past participle (would have avoided).'
      }
    },
    writing: {
      title: 'Dictamen Legal Preliminar sobre Neutralización de Objetivo Dual',
      scenario: 'Redacta un párrafo legal de 45 palabras certificando que el corte del suministro eléctrico a un cuartel militar mediante municiones de precisión cumple con el DIH.',
      targetWordCount: '40-55 palabras',
      requiredElements: ['Principio de distinción', 'Principio de proporcionalidad', 'Condición impuesta (munición guiada)', 'Firma como Asesor Jurídico Operacional'],
      modelAnswer: 'LEGAL ASSESSMENT: Engagement of the electrical substation powering the military garrison complies with LOAC principles of distinction and military necessity. Proportionality is satisfied because precision munitions will disable transformers feeding the command bunker exclusively, preserving civilian hospital power grids. Strike is legally approved. Major Sterling, Operational Legal Advisor.'
    },
    speaking: {
      title: 'Exposición Oral sobre Lecciones Aprendidas de un Ejercicio Táctico',
      scenario: 'Resume oralmente ante el comité de doctrina una lección aprendida clave formulando una reflexión en Tercer Condicional.',
      recommendedDuration: '30 segundos',
      pronunciationTips: ['Articula con precisión "would have been achieved".', 'Cadencia analítica profesional.'],
      modelResponse: 'Members of the committee: If our forward observers had verified target coordinates using redundant laser rangefinders, the collateral damage would have been completely avoided. We must institutionalize dual-sensor verification in our tactical SOP immediately.'
    }
  }
];
