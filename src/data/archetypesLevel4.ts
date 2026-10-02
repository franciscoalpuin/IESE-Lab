import { ArchetypeExerciseData } from './daily120PlanData';

export const LEVEL_4_ARCHETYPES: ArchetypeExerciseData[] = [
  // L4-1: Orden de Operaciones Táctica (OPORD de 5 Párrafos)
  {
    title: 'Emisión de la Orden de Operaciones Táctica (OPORD de 5 Párrafos)',
    theme: 'Formato Doctrinal SMEAC (Situation, Mission, Execution, Admin/Logistics, Command/Signal)',
    objective: 'Estructurar y redactar los 5 párrafos reglamentarios de una OPORD, transmitir la intención del comandante (Commander\'s Intent) y aplicar oraciones relativas y modales de deducción.',
    vocabulary: [
      { term: 'Operations Order (OPORD)', translation: 'Orden de Operaciones', ipa: '/ˌɒp.ərˈeɪ.ʃənz ˈɔː.dər/', spanishPhonetic: 'o-pe-réi-shonz ór-der', example: 'The Operations Officer delivered the OPORD at 0500 hours.' },
      { term: 'Commander\'s Intent', translation: 'Intención del Comandante', ipa: '/kəˈmɑːn.dəz ɪnˈtent/', spanishPhonetic: 'ko-mán-derz in-tént', example: 'Units must understand the Commander\'s Intent to exploit tactical initiative.' },
      { term: 'Line of Departure (LD)', translation: 'Línea de Partida', ipa: '/laɪn əv dɪˈpɑː.tʃər/', spanishPhonetic: 'láin ov di-pár-cher', example: 'Lead scouts cross the Line of Departure at H-Hour.' },
      { term: 'Phase Line (PL)', translation: 'Línea de Fase / Control', ipa: '/feɪz laɪn/', spanishPhonetic: 'féiz láin', example: 'Report all platoon callsigns upon crossing Phase Line Blue.' },
      { term: 'Decisive Point', translation: 'Punto Decisivo', ipa: '/dɪˈsaɪ.sɪv pɔɪnt/', spanishPhonetic: 'di-sái-siv point', example: 'The high ground overlooking the bridge is the decisive point.' }
    ],
    grammar: {
      title: 'Relative Clauses (Defining & Non-Defining) & Sequencing Connectors',
      formula: 'Defining: [Noun] + who/which/that + [clause] | Non-defining: [Noun], which/who + [clause], ...',
      rule: 'En órdenes doctrinales se emplean cláusulas relativas precisas: "The company will secure Bridge 4, which is the only heavy armor crossing point", "All vehicles that carry medical supplies will travel in the center of the column". Conectores de secuencia temporal: Subsequently, prior to, upon arrival, simultaneously.',
      tacticalTip: 'Evita ambigüedades como "and then do this". Emplea adverbios doctrinales: "Subsequently, 1st Platoon will establish a cordon; simultaneously, 2nd Platoon will search Compound Bravo".'
    },
    phonetics: {
      targetSound: 'Vocálico /aɪ/ en Departure, Decisive y /eɪ/ en Phase, Intent',
      articulatoryTip: 'En "decisive" la segunda sílaba /saɪ/ es tónica y abre ampliamente antes de deslizarse.',
      spanishPhonetic: 'di-sái-siv, féiz, di-pár-cher',
      practiceWords: [
        { word: 'Decisive', spanishPhonetic: 'di-sái-siv', translation: 'decisivo' },
        { word: 'Departure', spanishPhonetic: 'di-pár-cher', translation: 'partida' },
        { word: 'Simultaneously', spanishPhonetic: 'si-mul-téi-nios-li', translation: 'simultáneamente' }
      ]
    },
    usefulPhrase: {
      phrase: 'Commander\'s Intent: Our purpose is to deny adversary reconnaissance freedom of maneuver in Sector North; the key tasks are to secure Hill 204 and destroy the enemy observation post, terminating in a secure perimeter prior to sunset.',
      translation: 'Intención del Comandante: Nuestro propósito es denegar al reconocimiento adversario la libertad de maniobra en el Sector Norte; las tareas clave son asegurar la Colina 204 y destruir el puesto de observación enemigo, finalizando con un perímetro seguro antes del atardecer.',
      spanishPhonetic: 'Ko-mán-derz In-tént: Áuer pér-pos is tu di-nái ad-ver-sá-ri ri-kón-ne-sans frí-dom ov ma-nú-ver in Sék-tor Nort; de kii tasks ar tu se-kiúr Jil tu-zírou-for and des-trói de é-ne-mi ob-zer-véi-shon poust, tér-mi-nei-ting in e se-kiúr pe-rí-mi-ter prái-or tu sán-set.',
      tacticalUsage: 'Lectura oficial del Párrafo 3 (Ejecución) en briefings operacionales de batallón y compañía.'
    },
    listening: {
      title: 'Emisión del Párrafo de Misión y Ejecución de una OPORD',
      script: 'Listen to the mission statement for Operation Iron Grip: Alpha Company attacks to seize Hill 182 at Grid 456 789 at 0530 hours, in order to protect the brigade logistics corridor from enemy direct fire. Execution: Main effort is First Platoon, which will conduct a flanking movement from the west. Second Platoon will provide suppressive fires from Battle Position Charlie. Third Platoon remains in company reserve behind Phase Line Gold. Any questions before we synchronize watches?',
      question: {
        question: 'Which element represents the main effort and what is their specific task?',
        options: [
          'First Platoon, conducting a flanking movement from the west',
          'Third Platoon, serving as company reserve',
          'Second Platoon, providing medical triage',
          'Headquarters section, guarding Phase Line Gold'
        ],
        correctIndex: 0,
        explanation: 'The commander states: "Main effort is First Platoon, which will conduct a flanking movement from the west".'
      }
    },
    reading: {
      title: 'Manual de Doctrina: Los Cinco Párrafos de la Orden de Operaciones (SMEAC)',
      snippet: 'The standard Five-Paragraph Field Order structure (NATO STANAG 2014) guarantees clarity under combat stress. Paragraph 1 (Situation) details adversary and friendly forces, attachments, and weather. Paragraph 2 (Mission) contains a concise statement expressing who, what, when, where, and why. Paragraph 3 (Execution) articulates the Commander\'s Intent, concept of operations, scheme of maneuver, and coordinating instructions. Paragraphs 4 and 5 cover Administration/Logistics and Command/Signal arrangements respectively.',
      question: {
        question: 'What essential elements must Paragraph 2 (Mission) express according to STANAG 2014?',
        options: [
          'Who, what, when, where, and why (the five Ws)',
          'Only the list of rations and ammunition calibers',
          'The radio callsigns and electronic encryption keys',
          'The biographies of all platoon sergeants'
        ],
        correctIndex: 0,
        explanation: 'The doctrine specifies that Paragraph 2 contains a concise statement expressing "who, what, when, where, and why".'
      }
    },
    useOfLanguage: {
      title: 'Oraciones Relativas en Cláusulas Doctrinales',
      prompt: 'Completa la directiva de operaciones con el pronombre relativo adecuado:',
      question: {
        question: '"Company Headquarters will occupy the radar compound, ______ provides unobstructed line-of-sight communications with Brigade HQ."',
        options: ['which', 'who', 'whom', 'where'],
        correctIndex: 0,
        explanation: '"Which" is used in non-defining relative clauses providing additional descriptive information about a thing or place ("the radar compound, which provides...").'
      }
    },
    writing: {
      title: 'Redacción del Párrafo 2 (Misión) de una OPORD Táctica',
      scenario: 'Redacta el Párrafo 2 de Misión para una compañía de infantería mecanizada que debe asegurar el puente sobre el Río Salado el 15 de marzo a las 0600 hrs para permitir el paso de la brigada.',
      targetWordCount: '35-50 palabras',
      requiredElements: ['Unidad ejecutante (Bravo Company)', 'Acción táctica (secure)', 'Objetivo geográfico', 'Hora y fecha exacta', 'Propósito superior (in order to...)'],
      modelAnswer: 'PARAGRAPH 2 (MISSION): Bravo Company, 1st Mechanized Battalion, seizes and secures the road bridge over the Salado River at Grid 672 914 at 0600 hours on 15 March, in order to permit the unimpeded crossing of the 3rd Brigade main supply route.'
    },
    speaking: {
      title: 'Emisión Oral de la Intención del Comandante (Commander\'s Intent)',
      scenario: 'Imparte verbalmente ante tus comandantes de sección la intención del comandante con tono enérgico y dicción clara.',
      recommendedDuration: '30 segundos',
      pronunciationTips: ['Énfasis deliberado en palabras operacionales clave (purpose, end state).', 'Pausa tras la declaración de cada tarea.'],
      modelResponse: 'Officers, Commander\'s Intent: Our purpose is to deny enemy access to the bridge. Key tasks: neutralize anti-tank positions on the ridge, establish blocking positions north of the river. End state: bridge secured, ready for friendly armor passage. Execute!'
    }
  },

  // L4-2: Evacuación Médica Táctica (9-Line MEDEVAC Request) & Pasado Perfecto
  {
    title: 'Solicitud de Evacuación Médica Táctica (9-Line MEDEVAC) & Pasado Perfecto',
    theme: 'Procedimiento de Evacuación Aeromédica NATO (STANAG 3204) y Past Perfect',
    objective: 'Transmitir un 9-Line MEDEVAC bajo fuego hostil, reconstruir cronologías médicas con el Pasado Perfecto (Past Perfect Simple & Continuous) y aplicar códigos breves doctrinales.',
    vocabulary: [
      { term: '9-Line MEDEVAC', translation: 'Solicitud de evacuación médica de 9 líneas', ipa: '/naɪn laɪn ˈmed.ɪ.væk/', spanishPhonetic: 'náin láin méd-i-vak', example: 'Transmit the 9-Line MEDEVAC request on the brigade emergency net.' },
      { term: 'Urgent / Priority / Routine', translation: 'Urgente (menos de 2h) / Prioritario / Rutinario', ipa: '/ˈɜː.dʒənt / praɪˈɒr.ɪ.ti / ruːˈtiːn/', spanishPhonetic: 'ér-dtshent / prai-ó-ri-ti / ruu-tíin', example: 'Casualty Category: One Urgent Surgical, one Routine.' },
      { term: 'Landing Zone (LZ)', translation: 'Zona de Aterrizaje de Helicóptero', ipa: '/ˈlæn.dɪŋ zəʊn/', spanishPhonetic: 'lán-ding zoun', example: 'Mark the LZ with purple smoke when the helicopter approaches.' },
      { term: 'Shrapnel / Blast injury', translation: 'Metralla / Lesión por onda expansiva', ipa: '/ˈʃræp.nəl / blɑːst ˈɪn.dʒər.i/', spanishPhonetic: 'shráp-nel / blast ín-dshur-i', example: 'The soldier had sustained shrapnel wounds before the ambush ended.' },
      { term: 'Had stabilized', translation: 'Había estabilizado (Pasado Perfecto)', ipa: '/hæd ˈsteɪ.bəl.aɪzd/', spanishPhonetic: 'jad stei-bi-láizd', example: 'The medic had stabilized the casualty before the helicopter arrived.' }
    ],
    grammar: {
      title: 'Past Perfect Simple & Continuous en Reconstrucciones Cronológicas',
      formula: 'Past Perfect Simple: had + Past Participle | Continuous: had been + verb-ing',
      rule: 'Para narrar un suceso que ocurrió con anterioridad a otro momento pasado: "When the helicopter touched down, the combat medic had already applied two chest seals", "The patrol had been maneuvering through dense marshland for two hours before they encountered the minefield".',
      tacticalTip: 'El Pasado Perfecto aclara la precedencia temporal en partes operativos: "The enemy had withdrawn before friendly reinforcements arrived".'
    },
    phonetics: {
      targetSound: 'Sonido /æ/ en MEDEVAC, Landing, Blast y /ɜː/ en Urgent',
      articulatoryTip: 'En "urgent" la vocal /ɜː/ es neutra, alargada y profunda, semejante al sonido en "bird" o "nurse".',
      spanishPhonetic: 'ér-dtshent, méd-i-vak',
      practiceWords: [
        { word: 'Urgent', spanishPhonetic: 'ér-dtshent', translation: 'urgente' },
        { word: 'Landing', spanishPhonetic: 'lán-ding', translation: 'aterrizaje' },
        { word: 'Stabilized', spanishPhonetic: 'stei-bi-láizd', translation: 'estabilizado' }
      ]
    },
    usefulPhrase: {
      phrase: 'Dustoff, this is Spartan Zero-Six. Request immediate 9-Line MEDEVAC: Line 1: Grid 452 891; Line 2: 45.50 VHF; Line 3: One Urgent Surgical; Line 4: Special equipment: hoist and ventilator; Line 5: One litter casualty. Over.',
      translation: 'Dustoff (helicóptero médico), aquí Spartan Cero-Seis. Solicito MEDEVAC inmediato de 9 líneas: Línea 1: Cuadrícula 452 891; Línea 2: 45.50 VHF; Línea 3: Un urgente quirúrgico; Línea 4: Equipo especial: torno y respirador; Línea 5: Un herido en camilla. Cambio.',
      spanishPhonetic: 'Dást-of, dis is Spár-tan Zírou-Siks. Ri-kuést i-mí-diet Náin-Láin Méd-i-vak: Láin uán: Grid for-faiv-tu eit-nain-uán; Láin tu: for-ti-faiv point fif-ti Vi-Eitch-Ef; Láin trii: Uán Ér-dtshent Sér-dshi-kal; Láin for: Spé-shal i-kuíp-ment: joist and ven-ti-léi-tor; Láin faiv: Uán lí-ter ká-shual-ti. Óu-ver.',
      tacticalUsage: 'Transmisión reglamentaria NATO STANAG de solicitud urgente de helicóptero aeromédico (Dustoff).'
    },
    listening: {
      title: 'Transmisión Radial de Emergencia: Formato 9-Line MEDEVAC',
      script: 'Dustoff Control, this is Patrol Commander, callsign Ironclad Two. I have a 9-Line MEDEVAC request. Prepare to copy: Line One: Location of pickup site, Grid 671 234. Line Two: Radio frequency 52.20, callsign Ironclad Two. Line Three: Number of patients by precedence: One Urgent, One Priority. Line Four: Special equipment: request extraction hoist. Line Five: Number of patients by type: Two litter. Line Six: Security at pickup site: Papa, possible enemy in area. Line Seven: Method of marking: Smoke, color violet. Line Eight: Patient nationality: Military allied. Line Nine: NBC Contamination: None. Acknowledge, over.',
      question: {
        question: 'What color smoke will the patrol use to mark the pickup landing zone (Line 7)?',
        options: ['Violet smoke', 'Yellow smoke', 'White phosphorus', 'Red signal flare'],
        correctIndex: 0,
        explanation: 'The transmission explicitly reports: "Line Seven: Method of marking: Smoke, color violet".'
      }
    },
    reading: {
      title: 'Doctrina Médica NATO: Las Primeras Cinco Líneas Críticas de un MEDEVAC',
      snippet: 'Under NATO STANAG 3204, the first five lines of a 9-Line MEDEVAC must be transmitted within 25 seconds to initiate immediate helicopter launch. Line 1 provides the exact grid reference. Line 2 provides frequency and callsign. Line 3 indicates patient precedence (Urgent, Urgent-Surgical, Priority, Routine). Line 4 lists required specialized medical equipment (hoist, ventilator, oxygen). Line 5 indicates litter versus ambulatory casualties. Remaining lines (6 to 9) can be relayed while the medevac aircraft is in flight.',
      question: {
        question: 'Why must Lines 1 through 5 be transmitted within 25 seconds?',
        options: [
          'To permit the medical evacuation helicopter to scramble and launch immediately',
          'To allow the battery on the tactical radio to recharge',
          'To alert civilian television broadcasters',
          'To cancel the combat patrol'
        ],
        correctIndex: 0,
        explanation: 'The doctrine explains that Lines 1 to 5 are transmitted rapidly "to initiate immediate helicopter launch".'
      }
    },
    useOfLanguage: {
      title: 'Past Perfect Simple en Reportes Médicos',
      prompt: 'Completa la reconstrucción del caso clínico:',
      question: {
        question: '"By the time the aeromedical helicopter touched down, the combat medic ______ (administer) intravenous fluids and ______ (control) the arterial hemorrhage."',
        options: [
          'had administered / controlled',
          'administered / had controlling',
          'has administered / controlled',
          'had been administer / controlling'
        ],
        correctIndex: 0,
        explanation: 'Both past actions were completed prior to the touchdown: "had administered ... and [had] controlled".'
      }
    },
    writing: {
      title: 'Elaboración de Reporte de Evacuación Médica (Lines 1 to 5)',
      scenario: 'Transcribe los datos de un soldado con herida de bala en el tórax en un punto de reunión en Cuadrícula 334 556, frecuencia 38.40 MHz VHF, herido urgente en camilla.',
      targetWordCount: '40-55 palabras',
      requiredElements: ['Line 1 (Grid)', 'Line 2 (Frequency & Callsign)', 'Line 3 (Precedence)', 'Line 4 (Equipment)', 'Line 5 (Litter/Ambulatory)'],
      modelAnswer: '9-LINE MEDEVAC TRANSMISSION FORM: Line 1: Grid 334 556. Line 2: Freq 38.40 MHz, Callsign Cobra 4. Line 3: 1 Urgent Surgical (gunshot wound to thorax). Line 4: Chest seal and suction required. Line 5: 1 Litter patient. Request immediate helicopter scramble.'
    },
    speaking: {
      title: 'Transmisión Verbal Rápida de Líneas 1 a 5 de MEDEVAC',
      scenario: 'Emite por radio las primeras 5 líneas de una solicitud MEDEVAC con cadencia táctica profesional sin titubeos.',
      recommendedDuration: '30 segundos',
      pronunciationTips: ['Pronuncia las cifras en dígitos individuales: "three-three-four".', 'Articula con rigor "Urgent Surgical".'],
      modelResponse: 'Dustoff, this is Cobra Four. 9-Line MEDEVAC: Line One: Grid three-three-four, five-five-six. Line Two: thirty-eight point four zero VHF. Line Three: One Urgent Surgical. Line Four: Ventilator required. Line Five: One litter. Over.'
    }
  }
];
