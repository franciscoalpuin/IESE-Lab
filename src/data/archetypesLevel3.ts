import { ArchetypeExerciseData } from './daily120PlanData';

export const LEVEL_3_ARCHETYPES: ArchetypeExerciseData[] = [
  // L3-1: Misiones de Paz de la ONU, Mandatos y Cascos Azules
  {
    title: 'Misiones de Paz de la ONU, Mandatos & Puestos de Observación',
    theme: 'Operaciones de Paz de Naciones Unidas (UN Peacekeeping) & Protocolos de Cascos Azules',
    objective: 'Interpretar mandatos del Consejo de Seguridad de la ONU, patrullar la zona de amortiguación (Buffer Zone), redactar reportes de cese al fuego y emplear el Presente Perfecto con "already, yet, just".',
    vocabulary: [
      { term: 'Peacekeeping mission', translation: 'Misión de paz / Mantenimiento de la paz', ipa: '/ˈpiːsˌkiː.pɪŋ ˈmɪʃ.ən/', spanishPhonetic: 'piis-kí-ping mí-shon', example: 'The Argentine battalion has served in UNFICYP for six months.' },
      { term: 'Buffer zone', translation: 'Zona de amortiguación / Zona desmilitarizada', ipa: '/ˈbʌf.ər zəʊn/', spanishPhonetic: 'bá-fer zoun', example: 'Both belligerent forces are prohibited from entering the buffer zone.' },
      { term: 'Ceasefire violation', translation: 'Violación del cese del fuego', ipa: '/ˈsiːs.faɪər ˌvaɪ.əˈleɪ.ʃən/', spanishPhonetic: 'siis-fáier vai-o-léi-shon', example: 'The military observer reported an unprovoked ceasefire violation.' },
      { term: 'Blue Helmets', translation: 'Cascos Azules (Fuerzas de la ONU)', ipa: '/bluː ˈhel.mɪts/', spanishPhonetic: 'bluu jél-mets', example: 'The Blue Helmets manned the observation post on the demarcation line.' },
      { term: 'Mandate', translation: 'Mandato de la ONU', ipa: '/ˈmæn.deɪt/', spanishPhonetic: 'mán-deit', example: 'The Security Council renewed the peacekeeping mandate.' }
    ],
    grammar: {
      title: 'Present Perfect Simple con Already, Yet & Just',
      formula: 'Affirmative: Subject + have/has + already/just + Past Participle | Negative/Question: ... + yet?',
      rule: 'Para acciones recientes o estados que conectan el pasado con el presente operacional: "The patrol has just returned to Base Camp", "Have you inspected Observation Post Echo yet? — No, we haven\'t inspected it yet, but we have already fueled the patrol vehicles".',
      tacticalTip: '"Already" se ubica entre el auxiliar have/has y el participio en afirmativo. "Yet" va al final de preguntas y oraciones negativas.'
    },
    phonetics: {
      targetSound: 'Vocálico /iː/ largo en Peace, Ceasefire y /ʌ/ en Buffer, Just',
      articulatoryTip: 'En "peace" y "cease" sonríe tensando los labios para emitir una /iː/ prolongada. En "buffer" relaja la boca como en una "a" breve.',
      spanishPhonetic: 'piis, siis-fáier, bá-fer',
      practiceWords: [
        { word: 'Peacekeeping', spanishPhonetic: 'piis-kí-ping', translation: 'mantenimiento de la paz' },
        { word: 'Ceasefire', spanishPhonetic: 'siis-fáier', translation: 'alto el fuego' },
        { word: 'Buffer', spanishPhonetic: 'bá-fer', translation: 'amortiguación' }
      ]
    },
    usefulPhrase: {
      phrase: 'Observation Post Six to Sector Control: We have just observed two armed combatants entering the buffer zone near Grid 452 781. No shots fired yet. Over.',
      translation: 'Puesto de Observación Seis a Control de Sector: Acabamos de observar a dos combatientes armados ingresando a la zona de amortiguación cerca de la Cuadrícula 452 781. Ningún disparo realizado aún. Cambio.',
      spanishPhonetic: 'Ob-ser-véi-shon Poust Siks tu Sék-tor Kon-tróul: Ui jav dshast ob-zérvd tu armd kom-bá-tants én-te-ring de bá-fer zoun nir Grid for-faiv-tu sé-ven-eit-uán. Nou shots fái-erd iet. Óu-ver.',
      tacticalUsage: 'Transmisión inmediata de novedades de violación de armisticio en puestos de observación de la ONU.'
    },
    listening: {
      title: 'Briefing Operacional para Cascos Azules en Sector de Amortiguación',
      script: 'Welcome to Sector West, officers. Our primary mission under the United Nations mandate is to monitor the ceasefire along the forty-kilometer demarcation line. During your six-month rotation, you will man four observation posts and conduct motorized patrols daily. Remember: we are impartial peacekeepers. We do not take sides. Have all teams completed their communications checks yet? — Sir, Bravo Team has already finished their radio tests, but Charlie Team is still synchronizing frequencies. — Understood. Complete all checks before departure.',
      question: {
        question: 'What is the primary role of the peacekeeping battalion in Sector West?',
        options: [
          'To monitor the ceasefire along the demarcation line impartially',
          'To engage enemy artillery positions with heavy armor',
          'To build a new civilian airport',
          'To disarm the local police force'
        ],
        correctIndex: 0,
        explanation: 'The briefing clearly highlights: "Our primary mission under the United Nations mandate is to monitor the ceasefire along the forty-kilometer demarcation line".'
      }
    },
    reading: {
      title: 'Protocolo de Mantenimiento de la Paz: Procedimientos en Puestos de Observación (OP)',
      snippet: 'United Nations Military Observers (UNMO) stationed at fixed Observation Posts must maintain 24-hour visual surveillance of the ceasefire line. Any movement of military personnel, fortification construction, or drone overflights inside the Buffer Zone constitutes an immediate violation. All observed incidents must be logged with exact coordinates, photographic evidence, and transmitted to Sector Headquarters within 15 minutes.',
      question: {
        question: 'What constitutes an immediate ceasefire violation according to the UN procedure?',
        options: [
          'Military personnel movement, fortification work, or drone overflights in the Buffer Zone',
          'Civilian farmers harvesting authorized crops',
          'Peacekeepers holding regular morning parades',
          'Logistics trucks refueling at the base camp'
        ],
        correctIndex: 0,
        explanation: 'The snippet states: "Any movement of military personnel, fortification construction, or drone overflights inside the Buffer Zone constitutes an immediate violation".'
      }
    },
    useOfLanguage: {
      title: 'Uso de Already, Yet y Just en Operaciones de Paz',
      prompt: 'Completa el diálogo radial con el adverbio correcto:',
      question: {
        question: 'Patrol Leader: "Control, this is Patrol Alfa. We have ______ reached Checkpoint Four, but we haven\'t met the humanitarian convoy ______."',
        options: ['already / yet', 'yet / already', 'just / never', 'still / already'],
        correctIndex: 0,
        explanation: '"Already" indicates the checkpoint has been reached, while "yet" fits the negative clause "haven\'t met... yet".'
      }
    },
    writing: {
      title: 'Reporte de Observador Militar de la ONU (UN Ceasefire Incident)',
      scenario: 'Redacta un reporte formal para el Cuartel General de Sector informando que a las 1120 hrs se divisaron 3 soldados no identificados cavando una zanja dentro de la zona de amortiguación.',
      targetWordCount: '45-60 palabras',
      requiredElements: ['Designación del puesto (OP 4)', 'Hora y cuadrícula', 'Descripción de la actividad infractora', 'Medida de protesta adoptada'],
      modelAnswer: 'UN MILITARY OBSERVER INCIDENT REPORT: Date: 14 OCT. From: OP 4. To: Sector HQ. At 1120L, observers sighted three unidentified uniformed personnel digging a trench inside the Buffer Zone at Grid 883 241. Activity constitutes a breach of the ceasefire agreement. Sentry issued verbal warning over loudspeaker; personnel withdrew at 1135L.'
    },
    speaking: {
      title: 'Emisión de Advertencia Verbal a Infractores en Línea de Cese al Fuego',
      scenario: 'Utiliza el megáfono del puesto para ordenar a dos individuos armados que abandonen inmediatamente la zona desmilitarizada.',
      recommendedDuration: '30 segundos',
      pronunciationTips: ['Tono autoritario pero diplomático.', 'Pronuncia /dɪˈmɪl.ɪ.tər.aɪzd/ en "demilitarized zone".'],
      modelResponse: 'Attention! This is a United Nations Military Observation Post. You have entered the demilitarized Buffer Zone. Halt! Turn back immediately! Weapons are strictly forbidden in this sector. Turn back now!'
    }
  },

  // L3-2: Reglas de Empeñamiento (ROE) y Escalada de la Fuerza
  {
    title: 'Reglas de Empeñamiento (ROE) & Procedimiento de Escalada de la Fuerza',
    theme: 'Escalation of Force (EoF), Disparos de Advertencia y Segundo Condicional',
    objective: 'Aplicar la tarjeta reglamentaria de Reglas de Empeñamiento (ROE), describir los 5 pasos de escalada de la fuerza y formular hipótesis tácticas con el Segundo Condicional.',
    vocabulary: [
      { term: 'Rules of Engagement (ROE)', translation: 'Reglas de Empeñamiento', ipa: '/ruːlz əv ɪnˈɡeɪdʒ.mənt/', spanishPhonetic: 'ruulz ov in-géidsh-ment', example: 'Soldiers must strictly adhere to the theater Rules of Engagement.' },
      { term: 'Hostile act / Hostile intent', translation: 'Acto hostil / Intención hostil', ipa: '/ˈhɒs.taɪl ækt/', spanishPhonetic: 'jós-tail akt', example: 'Demonstrating hostile intent justifies an escalated defensive posture.' },
      { term: 'Escalation of force (EoF)', translation: 'Escalada progresiva de la fuerza', ipa: '/ˌes.kəˈleɪ.ʃən əv fɔːs/', spanishPhonetic: 'es-ka-léi-shon ov fors', example: 'Apply standard escalation of force: shout, show, shove, shoot.' },
      { term: 'Warning shot', translation: 'Disparo de advertencia / Intimidación', ipa: '/ˈwɔː.nɪŋ ʃɒt/', spanishPhonetic: 'uór-ning shot', example: 'Warning shots may only be fired if authorized by the ROE.' },
      { term: 'Self-defense', translation: 'Legítima defensa', ipa: '/ˌself.dɪˈfens/', spanishPhonetic: 'self-di-féns', example: 'Inherent right of self-defense remains unrestricted.' }
    ],
    grammar: {
      title: 'Second Conditional (Condicional Tipo 2 para Hipótesis Tácticas)',
      formula: 'If + Past Simple, would / could + Base Verb',
      rule: 'Para plantear situaciones hipotéticas o contingencias tácticas poco probables pero decisivas: "If a vehicle accelerated through the roadblock, sentries would deploy the spiked barrier", "What would you do if hostile forces opened fire on your compound? — If they opened fire, we would take cover and return fire in self-defense".',
      tacticalTip: 'En el Segundo Condicional con el verbo "to be", es formal y doctrinal decir "If I were / If the vehicle were" en lugar de "was".'
    },
    phonetics: {
      targetSound: 'Sonido /ʃ/ en Shout, Shoot y /dʒ/ en Engagement, Project',
      articulatoryTip: 'En "shout" y "shoot" proyecta los labios hacia adelante creando fricción suave. En "engagement" añade sonoridad palatal vibrante.',
      spanishPhonetic: 'shaut, shuut, in-géidsh-ment',
      practiceWords: [
        { word: 'Shout', spanishPhonetic: 'shaut', translation: 'gritar / ordenar' },
        { word: 'Shoot', spanishPhonetic: 'shuut', translation: 'disparar' },
        { word: 'Hostile', spanishPhonetic: 'jós-tail', translation: 'hostil' }
      ]
    },
    usefulPhrase: {
      phrase: 'Under ROE Rule 102, if an armed individual demonstrated hostile intent towards our convoy, we would initiate the escalation ladder with verbal warnings before employing non-lethal pyrotechnics.',
      translation: 'Bajo la Regla 102 de las ROE, si un individuo armado demostrara intención hostil hacia nuestro convoy, iniciaríamos la escala de advertencias verbales antes de emplear pirotecnia no letal.',
      spanishPhonetic: 'Án-der R-O-E Ruul uán-zírou-tu, if an armd in-di-ví-dshual dé-mon-strei-ted jós-tail in-tént to-uárdz áuer kón-voi, ui wud i-ní-shieit de es-ka-léi-shon lá-der uid vér-bal uór-nings bi-fór em-plói-ing non-lí-tal pai-ro-ték-niks.',
      tacticalUsage: 'Instrucción jurídica y doctrina operacional en academias militares de oficiales y suboficiales.'
    },
    listening: {
      title: 'Instrucción sobre la Tarjeta ROE y Empleo de la Fuerza Proporcional',
      script: 'Listen carefully, team. Every soldier carries the blue ROE card in their tactical vest pocket. Remember the golden rule: self-defense is never denied. However, minimum force must be used at all times. Step One: Shout verbal warnings in both English and the local dialect. Step Two: Show your weapon and elevate flags. Step Three: Shove by physically blocking the route with vehicles or barriers. Step Four: If authorized, fire a warning shot into soft ground. Step Five: Only shoot to defend human life from imminent death or grievous harm. Questions?',
      question: {
        question: 'Under what circumstance is lethal fire authorized according to Step Five of the ROE instruction?',
        options: [
          'Only to defend human life from imminent death or grievous harm',
          'Whenever an unauthorized vehicle fails to dim headlights',
          'To disperse peaceful civilian protestors',
          'As soon as a warning flag is displayed'
        ],
        correctIndex: 0,
        explanation: 'The instructor specifies: "Step Five: Only shoot to defend human life from imminent death or grievous harm".'
      }
    },
    reading: {
      title: 'Doctrina de Reglas de Empeñamiento: Determinación de Intención Hostil',
      snippet: 'Hostile Intent is defined as the threat of imminent use of force against friendly forces or protected civilian populations. Determining hostile intent requires objective indicators, such as pointing an assault rifle, tracking aircraft with fire-control radar, or aiming rocket-propelled grenades. If an opponent were to point a weapon directly at a patrol, soldiers would have the legal right to neutralize the threat in self-defense.',
      question: {
        question: 'What is an objective indicator of hostile intent according to the doctrinal text?',
        options: [
          'Pointing an assault rifle or aiming a rocket-propelled grenade',
          'Driving a civilian bus on an asphalt highway',
          'Filming a documentary near a public monument',
          'Speaking a foreign language over a radio'
        ],
        correctIndex: 0,
        explanation: 'The text highlights indicators: "pointing an assault rifle, tracking aircraft with fire-control radar, or aiming rocket-propelled grenades".'
      }
    },
    useOfLanguage: {
      title: 'Estructuras del Segundo Condicional en Protocolos ROE',
      prompt: 'Elige la conjugación correcta para la hipótesis del oficial instructor:',
      question: {
        question: '"If an unknown vehicle ______ (breach) the outer perimeter barrier, sentries ______ (deploy) the spike strips immediately."',
        options: ['breached / would deploy', 'breaches / will deploy', 'had breached / would deploy', 'would breach / deployed'],
        correctIndex: 0,
        explanation: 'The second conditional formula is: If + Past Simple (breached), would + base verb (would deploy).'
      }
    },
    writing: {
      title: 'Resumen de Evaluación ROE ante Incidente Perimétrico',
      scenario: 'Redacta un análisis de 4 líneas evaluando si el centinela actuó conforme a las ROE cuando disparó un cartucho de bengala de advertencia hacia un bote sospechoso.',
      targetWordCount: '40-55 palabras',
      requiredElements: ['Referencia a la regla ROE', 'Descripción del desafío previo', 'Proporcionalidad de la bengala no letal', 'Conclusión jurídica'],
      modelAnswer: 'LEGAL AFTER-ACTION REVIEW: Sentry acted in full accordance with Theater ROE Rule 105. After repeated verbal challenges failed, sentry fired a non-lethal illumination flare across the bow of the approaching craft. Action was measured, proportional, and prevented escalation into lethal force.'
    },
    speaking: {
      title: 'Secuencia de Desafío Verbal de Escalada de la Fuerza',
      scenario: 'Imparte la secuencia de 3 órdenes perentorias en inglés a un grupo que avanza hacia el depósito de combustible.',
      recommendedDuration: '30 segundos',
      pronunciationTips: ['Voz firme, clara y con autoridad militar.', 'Cadencia pausada entre cada advertencia.'],
      modelResponse: 'Halt! Stay where you are! Do not approach the fuel storage! Show your hands! Back away immediately or we will use non-lethal deterrents! Step back now!'
    }
  }
];
