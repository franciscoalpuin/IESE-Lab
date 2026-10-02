import { ArchetypeExerciseData } from './daily120PlanData';

export const MILITARY_OPERATIONAL_ARCHETYPES: ArchetypeExerciseData[] = [
  {
    title: 'Control de Acceso al Puesto de Guardia & Alfabeto OTAN',
    theme: 'Procedimientos de Acceso al Puesto de Guardia (SOP)',
    objective: 'Identificar personal militar, verificar matrículas en código fonético OTAN y aplicar imperativos doctrinales de seguridad en guarnición.',
    vocabulary: [
      { term: 'Checkpoint', translation: 'Puesto de control', ipa: '/ˈtʃek.pɔɪnt/', spanishPhonetic: 'chék-point', example: 'All vehicles must stop at Checkpoint 1.' },
      { term: 'Sentry', translation: 'Centinela / Guardia de guardia', ipa: '/ˈsen.tri/', spanishPhonetic: 'sén-tri', example: 'The sentry challenged the approaching driver.' },
      { term: 'Credentials', translation: 'Credenciales / Identificación', ipa: '/krəˈden.ʃəlz/', spanishPhonetic: 'kri-dén-shals', example: 'Present your military credentials immediately.' },
      { term: 'Barrier', translation: 'Barrera levadiza', ipa: '/ˈbær.i.ər/', spanishPhonetic: 'bá-ri-er', example: 'Do not raise the barrier before scanning the pass.' },
      { term: 'Proword', translation: 'Palabra de procedimiento', ipa: '/ˈprəʊ.wɜːd/', spanishPhonetic: 'próu-werd', example: 'Use standard NATO prowords on the net.' }
    ],
    grammar: {
      title: 'Comandos Imperativos & Presente Simple de Rutina',
      formula: 'Imperativo Afirmativo: [Base Verbal] + [Complemento] | Negativo: Do not + [Base Verbal]',
      rule: 'En doctrina militar, los comandos de guardia no llevan pronombre personal ni adornos de cortesía: "Halt!", "Turn off the engine", "Do not cross the red line".',
      tacticalTip: 'Evita decir "You please stop". Usa la fórmula concisa reglamentaria: "Halt! Present your ID card".'
    },
    phonetics: {
      targetSound: 'Vocálico /æ/ breve en Checkpoint, Stand, Barrier',
      articulatoryTip: 'Abre la mandíbula ampliamente con los labios tensados horizontalmente. Es un sonido intermedio entre la "a" y la "e" española.',
      spanishPhonetic: 'a abierta',
      practiceWords: [
        { word: 'barrier', spanishPhonetic: 'bá-ri-er', translation: 'barrera' },
        { word: 'stand fast', spanishPhonetic: 'stand fast', translation: 'permanecer firme' },
        { word: 'checkpoint', spanishPhonetic: 'chék-point', translation: 'puesto de control' }
      ]
    },
    usefulPhrase: {
      phrase: 'Halt! Identify yourself. Advance one at a time for ID verification.',
      translation: '¡Alto! Identifíquese. Avance de a uno para la verificación de identidad.',
      spanishPhonetic: 'Jolt! Ai-dén-ti-fai iur-sélf. Ad-váns uán at e táim for ai-dí ve-ri-fi-kéi-shon.',
      tacticalUsage: 'Desafío estándar verbal en perímetro de guarnición y puntos de control tácticos.'
    },
    listening: {
      title: 'Control de Acceso en Puerta Principal (Main Gate)',
      script: 'Halt! Identify yourself. — This is Sergeant Miller, Mike-India-Lima-Lima-Echo-Romeo, Charlie Company. Vehicle registration Alfa-Tango-Seven-Niner. Over. — Advance to the checkpoint and present your military ID card for scanning.',
      question: {
        question: 'How does Sergeant Miller spell his surname over the net?',
        options: [
          'Mike-India-Lima-Lima-Echo-Romeo',
          'Mike-India-Lima-Echo-Romeo',
          'Mike-Uniform-Lima-Lima-Echo-Romeo',
          'Mike-India-Lima-Lima-Echo-Oscar'
        ],
        correctIndex: 0,
        explanation: 'Sergeant Miller correctly spells M-I-L-L-E-R using the NATO phonetic alphabet: Mike, India, Lima, Lima, Echo, Romeo.'
      }
    },
    reading: {
      title: 'Procedimiento Operativo Estandarizado: Inspección de Vehículos (SOP)',
      snippet: 'All supply vehicles entering the military installation must stop at Checkpoint 1. The security sentinel verifies the driver\'s identification, inspects the cargo manifest, and scans the vehicle underside with tactical mirrors before raising the barrier.',
      question: {
        question: 'What must the sentinel do before raising the barrier?',
        options: [
          'Call the Brigade Commander',
          'Verify ID, inspect the cargo manifest, and scan the vehicle underside',
          'Unload all ammunition boxes',
          'Escort the driver to the headquarters building'
        ],
        correctIndex: 1,
        explanation: 'The SOP states the sentinel verifies identification, checks cargo manifest, and inspects the underside before raising the barrier.'
      }
    },
    useOfLanguage: {
      title: 'Imperativos Tácticos en Punto de Empeñamiento',
      prompt: 'Completa la orden oficial del centinela hacia el conductor:',
      question: {
        question: 'Which is the correct tactical imperative command to stop a vehicle approaching the gate?',
        options: [
          'You stopping the vehicle now.',
          'Halt and turn off the engine.',
          'Please you are halting.',
          'Will halt immediately.'
        ],
        correctIndex: 1,
        explanation: '"Halt and turn off the engine" utilizes standard military imperative form with the bare infinitive.'
      }
    },
    writing: {
      title: 'Redacción de Reporte Breve de Guardia de Puesto',
      scenario: 'Eres el oficial de guardia en el acceso principal. Redacta una entrada de bitácora registrando la llegada del Capitán Stevens (Charlie Company) en un camión con matrícula Bravo-Zulu-3-4 a las 0830 hrs.',
      targetWordCount: '35-50 palabras',
      requiredElements: ['Hora exacta en formato militar 24h', 'Nombre y rango', 'Unidad y matrícula', 'Resultado de la inspección de seguridad'],
      modelAnswer: '0830 HRS: Entry log entry. Captain Stevens, Charlie Company, arrived at Main Gate in supply truck registration Bravo-Zulu-3-4. Driver presented valid ID credentials. Cargo manifest verified. Vehicle underside cleared. Access granted.'
    },
    speaking: {
      title: 'Desafío Verbal de Centinela e Instrucción a Conductor',
      scenario: 'Un vehículo se aproxima al control nocturno con las luces altas encendidas. Imparte las órdenes en voz alta con tono firme.',
      recommendedDuration: '30 segundos',
      pronunciationTips: ['Usa tono perentorio (cadencia RSVP).', 'Remarca el sonido /h/ aspirado en "Halt".', 'No vaciles entre palabras.'],
      modelResponse: 'Halt! Dim your headlights! Turn off your engine and stay inside the vehicle with both hands on the steering wheel until approached by the sentry.'
    }
  },
  {
    title: 'Navegación Terrestre, Cartas Topográficas & Cuadrículas MGRS',
    theme: 'Lectura de Cartas Topográficas Militares',
    objective: 'Transmitir e interpretar coordenadas de cuadrícula de 6 dígitos (MGRS), rumbos magnéticos y referencias geográficas en cartas 1:50.000.',
    vocabulary: [
      { term: 'Grid coordinates', translation: 'Coordenadas de cuadrícula', ipa: '/ɡrɪd kəʊˈɔː.dɪ.nəts/', spanishPhonetic: 'grid kou-ór-di-nets', example: 'Report your grid coordinates immediately.' },
      { term: 'Eastings', translation: 'Líneas verticales (este)', ipa: '/ˈiː.stɪŋz/', spanishPhonetic: 'ís-tings', example: 'Read Eastings before Northings.' },
      { term: 'Northings', translation: 'Líneas horizontales (norte)', ipa: '/ˈnɔː.ðɪŋz/', spanishPhonetic: 'nór-tings', example: 'Locate the Northing line 45 on the map.' },
      { term: 'Rally point', translation: 'Punto de reunión', ipa: '/ˈræl.i pɔɪnt/', spanishPhonetic: 'rá-li point', example: 'The squad retreated to Rally Point Echo.' },
      { term: 'Contour line', translation: 'Curva de nivel', ipa: '/ˈkɒn.tʊər laɪn/', spanishPhonetic: 'kón-tur láin', example: 'Steep hills are indicated by close contour lines.' }
    ],
    grammar: {
      title: 'Preposiciones de Lugar & Dirección Operacional',
      formula: 'Advance [ALONG route] / Halt [AT landmark] / Cross [THROUGH dense terrain]',
      rule: 'En doctrina militar: "AT" define el punto exacto (at Grid 452 681); "ALONG" el movimiento longitudinal (along the creek); "ACROSS" el cruce transversal.',
      tacticalTip: 'Nunca uses "in the checkpoint". Se dice siempre "at the checkpoint" y "on the high ground".'
    },
    phonetics: {
      targetSound: 'Diptongo /aɪ/ en Coordinates, Line, Point',
      articulatoryTip: 'Inicia en una posición abierta "a" y desliza rápidamente hacia una "i" corta y cerrada.',
      spanishPhonetic: 'ái marcado',
      practiceWords: [
        { word: 'coordinates', spanishPhonetic: 'kou-ór-di-nets', translation: 'coordenadas' },
        { word: 'high ground', spanishPhonetic: 'jái gráund', translation: 'terreno elevado' },
        { word: 'contour line', spanishPhonetic: 'kón-tur láin', translation: 'curva de nivel' }
      ]
    },
    usefulPhrase: {
      phrase: 'Two-Zero, this is Sunray. Confirm new Rally Point coordinates: Grid four-five-two, six-eight-one.',
      translation: 'Dos-Cero, aquí Sunray. Confirme nuevas coordenadas de Punto de Reunión: Cuadrícula cuatro-cinco-dos, seis-ocho-uno.',
      spanishPhonetic: 'Tu-Zírou, dis is Sán-rei. Kon-férm niu Rá-li Point kou-ór-di-nets: Grid for-faiv-tu, siks-eit-uán.',
      tacticalUsage: 'Transmisión de coordenadas codificadas por red de radio táctica VHF.'
    },
    listening: {
      title: 'Transmisión de Coordenadas de Punto de Reunión',
      script: 'Two-Zero, this is Sunray. Confirm new Rally Point coordinates. Grid: four-five-two, six-eight-one. Repeat: Grid four-five-two, six-eight-one. Acknowledge receipt, over. — Sunray, this is Two-Zero. Roger, Grid four-five-two, six-eight-one. Moving now, out.',
      question: {
        question: 'What are the exact grid coordinates confirmed by the unit?',
        options: ['Grid 452 681', 'Grid 425 618', 'Grid 542 861', 'Grid 452 861'],
        correctIndex: 0,
        explanation: 'Both stations explicitly state and repeat: Grid 452 681.'
      }
    },
    reading: {
      title: 'Manual Táctico: Principios de la Navegación con Brújula y Carta',
      snippet: 'Military map reading relies on the Military Grid Reference System (MGRS). A 6-figure grid reference identifies an area of 100 square meters. The standard rule is: read Eastings first (from left to right across the map), then Northings (from bottom to top).',
      question: {
        question: 'What is the standard rule for reading grid references?',
        options: ['Northings first, then Eastings', 'Read Eastings first, then Northings', 'Read coordinates clockwise', 'Elevation first, then grid lines'],
        correctIndex: 1,
        explanation: 'Military doctrine specifies: "Eastings first (across), then Northings (up)". Memory aid: "along the corridor, then up the stairs".'
      }
    },
    useOfLanguage: {
      title: 'Preposiciones Tácticas de Orientación',
      prompt: 'Selecciona la preposición adecuada para describir el avance de patrulla:',
      question: {
        question: 'Choose the correct preposition: "The reconnaissance patrol is advancing _____ the main supply route towards the bridge."',
        options: ['along', 'between', 'underneath', 'upon'],
        correctIndex: 0,
        explanation: '"Along" is the correct military preposition when advancing parallel or following the line of a road or route.'
      }
    },
    writing: {
      title: 'Mensaje de Navegación y Posición de Patrulla',
      scenario: 'Informa por escrito a la base que tu patrulla alcanzó el vado del río en Cuadrícula 782 341 a las 1400 hrs y detectó el puente destruido.',
      targetWordCount: '35-50 palabras',
      requiredElements: ['Coordenadas de cuadrícula 6 dígitos', 'Hora zulu u hora local', 'Estado del objetivo (puente)', 'Siguiente acción'],
      modelAnswer: 'SITREP 1400L: Patrol Alpha reached river crossing at Grid 782 341. Reconnaissance confirms the bridge is destroyed. No enemy activity observed. Patrol is establishing an observation post on the south bank. Over.'
    },
    speaking: {
      title: 'Transmisión de Coordenadas de Evacuación por Radio',
      scenario: 'Transmite tus coordenadas exactas y solicita confirmación del punto de aterrizaje para helicóptero.',
      recommendedDuration: '30 segundos',
      pronunciationTips: ['Pronuncia dígito por dígito.', 'Di "niner" para 9 y "tree" para 3.', 'Termina con OVER.'],
      modelResponse: 'Sunray, this is Recon One. Secure landing zone established at Grid seven-eight-two, three-four-one. Markings: orange smoke. Acknowledge, over.'
    }
  },
  {
    title: 'Incidentes de Convoy & Solicitud de Evacuación Médica (9-Line)',
    theme: 'Primeros Auxilios y Despacho de Emergencias en Base',
    objective: 'Transmitir reportes de bajas, colisiones viales y solicitudes de MEDEVAC empleando terminología táctica internacional.',
    vocabulary: [
      { term: 'Casualty', translation: 'Baja (herido o muerto)', ipa: '/ˈkæʒ.ju.əl.ti/', spanishPhonetic: 'ká-zhu-al-ti', example: 'We have two casualties requiring triage.' },
      { term: 'MEDEVAC', translation: 'Evacuación médica táctica', ipa: '/ˈmed.ɪ.væk/', spanishPhonetic: 'méd-i-vak', example: 'Request immediate MEDEVAC for urgent casualty.' },
      { term: 'Triage', translation: 'Clasificación de heridos', ipa: '/ˈtriː.ɑːʒ/', spanishPhonetic: 'tri-ásh', example: 'Perform initial triage before transport.' },
      { term: 'Litter patient', translation: 'Herido en camilla (no camina)', ipa: '/ˈlɪt.ər ˈpeɪ.ʃənt/', spanishPhonetic: 'lí-ter péi-shent', example: 'Casualty one is a litter patient with femur fracture.' },
      { term: 'Ambulatory patient', translation: 'Herido que puede caminar', ipa: '/ˈæm.bjə.lə.tər.i/', spanishPhonetic: 'ám-biu-la-to-ri', example: 'Two ambulatory patients with smoke inhalation.' }
    ],
    grammar: {
      title: 'Pasado Simple vs Pasado Continuo en Informes de Incidentes',
      formula: 'While + [Past Continuous] (acción en desarrollo), [Past Simple] (evento interruptor)',
      rule: 'Se describe el incidente combinando la actividad que se estaba realizando con el suceso puntual: "While the convoy was traveling along Route 4, vehicle two hit an obstacle."',
      tacticalTip: 'Usa verbos de acción directa: "struck", "collided", "overturned", en lugar de perífrasis.'
    },
    phonetics: {
      targetSound: 'Fricativa /ʒ/ en Casualty, Triage, Measure',
      articulatoryTip: 'Haz vibrar las cuerdas vocales con la lengua en la posición de "sh" (como la "j" francesa en "bonjour").',
      spanishPhonetic: 'zh vibrante',
      practiceWords: [
        { word: 'casualty', spanishPhonetic: 'ká-zhu-al-ti', translation: 'baja' },
        { word: 'triage', spanishPhonetic: 'tri-ásh', translation: 'clasificación médica' },
        { word: 'division', spanishPhonetic: 'di-ví-zhon', translation: 'división' }
      ]
    },
    usefulPhrase: {
      phrase: 'Medical Centre, this is Convoy Escort Bravo. We have a motor collision on Route 4. Two casualties require immediate evacuation. Over.',
      translation: 'Centro Médico, aquí Escolta de Convoy Bravo. Tenemos una colisión vehicular en Ruta 4. Dos bajas requieren evacuación inmediata. Cambio.',
      spanishPhonetic: 'Méd-i-kal Sén-ter, dis is Kón-voi Es-kórt Brá-vou. Ui jaf e mó-tor ko-lí-zhon on Rut for. Tu ká-zhu-al-tis ri-kuáir i-mí-diat e-va-kiu-éi-shon. Óu-ver.',
      tacticalUsage: 'Llamada de prioridad operacional ante accidente vial o emboscada en ruta.'
    },
    listening: {
      title: 'Solicitud de Ambulancia Táctica por Choque de Convoy',
      script: 'Medical Centre, this is Convoy Escort Bravo. We have a motor collision on Route 4. Two personnel require medical attention. One soldier has a fractured wrist, the other has minor shock. The road is clear for immediate medical evacuation. Over.',
      question: {
        question: 'What injuries are sustained by the personnel?',
        options: [
          'Two fatalities',
          'One fractured wrist and one case of minor shock',
          'Severe chest trauma',
          'No injuries reported'
        ],
        correctIndex: 1,
        explanation: 'The transmission specifies: "One soldier has a fractured wrist, the other has minor shock."'
      }
    },
    reading: {
      title: 'Doctrina Médica: Formato 9-Line MEDEVAC Request',
      snippet: 'The 9-Line MEDEVAC request provides combat medics with rapid critical data. Line 1 transmits the pick-up location grid. Line 2 provides call-sign and frequency. Line 3 categorizes patients by precedence: Urgent, Urgent Surgical, Priority, Routine, or Convenient.',
      question: {
        question: 'What does Line 3 of a standard NATO 9-Line MEDEVAC report designate?',
        options: [
          'The security of the pick-up zone',
          'The number of patients by precedence / medical urgency',
          'The terrain terrain elevation',
          'The type of ammunition required'
        ],
        correctIndex: 1,
        explanation: 'Line 3 categorizes patients by medical precedence (Urgent, Priority, Routine, etc.).'
      }
    },
    useOfLanguage: {
      title: 'Sintaxis de Reporte de Incidentes',
      prompt: 'Identifica la estructura gramatical correcta para el informe de colisión:',
      question: {
        question: 'Select the grammatically correct sentence for an incident report:',
        options: [
          'While the convoy was traveling along Route 4, vehicle two struck an obstacle.',
          'While the convoy traveled along Route 4, vehicle two was striking.',
          'The convoy was traveling when vehicle two was strucking obstacle.',
          'Vehicle two strike obstacle while convoy traveling.'
        ],
        correctIndex: 0,
        explanation: '"While the convoy was traveling... vehicle two struck..." correctly combines Past Continuous (ongoing action) with Past Simple (punctual incident).'
      }
    },
    writing: {
      title: 'Redacción de Resumen de Incidente de Convoy',
      scenario: 'Redacta un párrafo para el oficial de operaciones informando que el vehículo táctico número 3 sufrió una pinchadura en Ruta 9 a las 1130 hrs, fue reparado por la tripulación y continuó la marcha.',
      targetWordCount: '40-55 palabras',
      requiredElements: ['Designación del convoy y vehículo', 'Ubicación y hora', 'Causa de la detención', 'Acción correctiva y estado actual'],
      modelAnswer: 'INCIDENT REPORT: At 1130 hours, Tactical Vehicle 3 of Convoy Bravo suffered a tire puncture on Route 9. The crew established perimeter security and replaced the wheel in 15 minutes. No casualties or damage. The convoy resumed movement at 1150 hours. Movement continues as planned.'
    },
    speaking: {
      title: 'Transmisión de Solicitud de Ambulancia por Radio',
      scenario: 'Emite el mensaje inicial de alerta médica solicitando una ambulancia táctica de apoyo.',
      recommendedDuration: '30 segundos',
      pronunciationTips: ['Articula con precisión la palabra MEDEVAC /méd-i-vak/.', 'Habla con calma y sin gritar.', 'Mantén el proword de cierre.'],
      modelResponse: 'Medical Control, this is Alpha Lead. We have two casualties at Checkpoint 3. Request immediate tactical ambulance. Security is clear. Over.'
    }
  },
  {
    title: 'Organización Militar, Jerarquías de la OTAN & Cadena de Mando',
    theme: 'Estructura Organizacional y Jerárquica Militar',
    objective: 'Reconocer equivalencias de grados militares STANAG (OR-1 a OF-10), funciones de estado mayor y órganos de mando.',
    vocabulary: [
      { term: 'Chain of command', translation: 'Cadena de mando', ipa: '/tʃeɪn əv kəˈmɑːnd/', spanishPhonetic: 'chéin ov ko-mánd', example: 'Orders must pass through the official chain of command.' },
      { term: 'Non-Commissioned Officer (NCO)', translation: 'Suboficial', ipa: '/ˌnɒn.kəˈmɪʃ.ənd ˈɒf.ɪ.sər/', spanishPhonetic: 'non-ko-mí-shend ó-fi-ser', example: 'The NCO briefed the squad before departure.' },
      { term: 'Staff officer', translation: 'Oficial de estado mayor', ipa: '/stɑːf ˈɒf.ɪ.sər/', spanishPhonetic: 'staf ó-fi-ser', example: 'Staff officers coordinate logistics and intelligence.' },
      { term: 'Platoon', translation: 'Pelotón / Sección', ipa: '/pləˈtuːn/', spanishPhonetic: 'pla-tún', example: 'A platoon consists of three rifle squads.' },
      { term: 'Headquarters (HQ)', translation: 'Cuartel general', ipa: '/ˌhedˈkwɔː.təz/', spanishPhonetic: 'jéd-kuor-ters', example: 'Report to Division HQ at 1600 hours.' }
    ],
    grammar: {
      title: 'Presente Simple para Funciones y Jerarquías Permanentes',
      formula: 'Subject + Verb (s/es) + Direct Object (e.g. A Captain commands a company)',
      rule: 'Para describir funciones doctrinales permanentes se utiliza Presente Simple: "A Sergeant leads a squad", "The G-2 branch handles intelligence".',
      tacticalTip: 'Cuidado con la 3ra persona singular (-s): "The commander inspects", "The unit operates".'
    },
    phonetics: {
      targetSound: 'Sonido /uː/ largo en Platoon, Crew, Troop',
      articulatoryTip: 'Redondea los labios intensamente hacia adelante como silbando. Mantén la vocal tensa y prolongada.',
      spanishPhonetic: 'u prolongada',
      practiceWords: [
        { word: 'platoon', spanishPhonetic: 'pla-tún', translation: 'pelotón' },
        { word: 'troop', spanishPhonetic: 'trup', translation: 'tropa' },
        { word: 'crew', spanishPhonetic: 'kru', translation: 'tripulación' }
      ]
    },
    usefulPhrase: {
      phrase: 'Captain Richardson is the Company Commander; Lieutenant Davis reports directly to him as Executive Officer.',
      translation: 'El Capitán Richardson es el Comandante de Compañía; el Teniente Davis le reporta directamente como Oficial Ejecutivo.',
      spanishPhonetic: 'Káp-ten Rí-chard-son is de Kóm-pa-ni Ko-mán-der; Lu-té-nant Déi-vis ri-pórts di-rékt-li tu jim as Eg-zék-iu-tiv Ó-fi-ser.',
      tacticalUsage: 'Presentación formal de autoridades militares y líneas de subordinación.'
    },
    listening: {
      title: 'Briefing de Organización de la Compañía',
      script: 'Good morning, personnel. I am Major Evans, Battalion S-3. Charlie Company consists of three rifle platoons and one heavy weapons platoon. First Lieutenant Clark commands First Platoon, while Master Sergeant Hayes serves as the Company First Sergeant.',
      question: {
        question: 'What is Major Evans\' staff position?',
        options: ['Battalion S-1 (Personnel)', 'Battalion S-3 (Operations)', 'Company Commander', 'Logistics Officer (S-4)'],
        correctIndex: 1,
        explanation: 'Major Evans introduces himself as: "Major Evans, Battalion S-3 (Operations)."'
      }
    },
    reading: {
      title: 'Doctrina de Estado Mayor: Funciones de las Secciones G/S',
      snippet: 'In NATO military headquarters, staff branches are standardized by numbers: S-1 is Personnel and Administration, S-2 is Military Intelligence, S-3 is Operations and Training, and S-4 is Logistics and Supply. In brigade-level or above, the prefix "G" or "J" is utilized.',
      question: {
        question: 'Which staff section is responsible for logistics and supply in a battalion headquarters?',
        options: ['S-1', 'S-2', 'S-3', 'S-4'],
        correctIndex: 3,
        explanation: 'NATO standardizes S-4 as Logistics and Supply.'
      }
    },
    useOfLanguage: {
      title: 'Concordancia en Descripción de Roles Militares',
      prompt: 'Elige la oración que respeta las normas de concordancia y terminología militar:',
      question: {
        question: 'Which sentence correctly describes military chain of command?',
        options: [
          'A Lieutenant commands a platoon and reports to the Company Commander.',
          'A Lieutenant command a platoon and report to Commander.',
          'Lieutenants is commanding platoons directly to the General.',
          'A Lieutenant are commanding platoons.'
        ],
        correctIndex: 0,
        explanation: '"A Lieutenant commands... and reports..." has correct singular third-person verb agreement (-s).'
      }
    },
    writing: {
      title: 'Descripción de Estructura de Pelotón',
      scenario: 'Escribe un memorando interno detallando la composición de tu pelotón (3 secciones de fusileros, 1 sección de apoyo, total 30 efectivos).',
      targetWordCount: '40-55 palabras',
      requiredElements: ['Denominación de la unidad', 'Subdivisiones', 'Efectivo numérico total', 'Comandante al mando'],
      modelAnswer: 'MEMORANDUM: First Platoon, Bravo Company, consists of thirty personnel under the command of Second Lieutenant Vance. The unit is organized into three rifle squads of eight soldiers each and one heavy weapons squad of six soldiers. All personnel and weapon systems are fully operational.'
    },
    speaking: {
      title: 'Presentación Oral de la Cadena de Mando',
      scenario: 'Explica oralmente ante un oficial de enlace de la OTAN quién es tu comandante directo y cuál es tu unidad de pertenencia.',
      recommendedDuration: '30 segundos',
      pronunciationTips: ['Pronuncia claramente rangos: Lieutenant /lu-té-nant/ o /lef-té-nant/, Major /méi-dzhor/.', 'Mantén postura erguida.'],
      modelResponse: 'Sir, I am Sergeant Morales. I belong to Second Platoon, Alpha Company. My direct superior is Captain Adams, who serves as Company Commander.'
    }
  },
  {
    title: 'Informes de Situación Operacional (SITREP) & Protocolo Radial',
    theme: 'Informes Operacionales y Comunicaciones Tácticas',
    objective: 'Redactar y transmitir informes SITREP siguiendo el encabezado estándar OTAN: Situation, Equipment, Personnel, Logistics, Administration.',
    vocabulary: [
      { term: 'SITREP', translation: 'Informe de situación operacional', ipa: '/ˈsɪt.rep/', spanishPhonetic: 'sít-rep', example: 'Transmit your hourly SITREP to tactical net.' },
      { term: 'Perimeter', translation: 'Perímetro de seguridad', ipa: '/pəˈrɪm.ɪ.tər/', spanishPhonetic: 'pe-rím-i-ter', example: 'The perimeter is 100% secure.' },
      { term: 'Serviceable', translation: 'Operativo / En condiciones de servicio', ipa: '/ˈsɜː.vɪ.sə.bəl/', spanishPhonetic: 'sér-vi-sa-bl', example: 'All night vision devices are serviceable.' },
      { term: 'Ammunition status', translation: 'Estado de munición', ipa: '/ˌæm.jəˈnɪʃ.ən ˈsteɪ.təs/', spanishPhonetic: 'a-miu-ní-shon stéi-tus', example: 'Ammunition status is green (above 80%).' },
      { term: 'Roger', translation: 'Entendido / Comprendido (proword)', ipa: '/ˈrɒdʒ.ər/', spanishPhonetic: 'ró-dzher', example: 'Roger, your last message received.' }
    ],
    grammar: {
      title: 'Adjetivos de Estado Operacional & Abreviaturas Tácticas',
      formula: 'Subject + BE + [Status Adjective] (e.g. Perimeter IS secure, Communications ARE active)',
      rule: 'En doctrina de radio de la OTAN, los informes SITREP eliminan artículos y palabras redundantes para máxima brevedad: "Perimeter secure. Morale high. Ammo green."',
      tacticalTip: 'Nunca utilices frases largas de cortesía ("I want to inform you that"). Ve directo al estado operacional.'
    },
    phonetics: {
      targetSound: 'Oclusiva sorda /p/ con aspiración en Perimeter, Patrol, Post',
      articulatoryTip: 'Junta los labios firmemente y suelta el aire con una pequeña ráfaga de aire perceptible (aspiración británica).',
      spanishPhonetic: 'p aspirada',
      practiceWords: [
        { word: 'perimeter', spanishPhonetic: 'pe-rím-i-ter', translation: 'perímetro' },
        { word: 'patrol', spanishPhonetic: 'pa-tróul', translation: 'patrulla' },
        { word: 'post', spanishPhonetic: 'póust', translation: 'puesto' }
      ]
    },
    usefulPhrase: {
      phrase: 'Control, this is Outpost Charlie. SITREP: Perimeter secure, radar active, all personnel accounted for. Over.',
      translation: 'Control, aquí Puesto de Avanzada Charlie. SITREP: Perímetro seguro, radar activo, todo el personal contabilizado. Cambio.',
      spanishPhonetic: 'Kon-tróul, dis is Áut-poust Chár-li. SÍT-REP: Pe-rím-i-ter si-kiúr, réi-dar ák-tiv, ol pér-so-nel a-káun-ted for. Óu-ver.',
      tacticalUsage: 'Transmisión reglamentaria de informe de situación periódico.'
    },
    listening: {
      title: 'Transmisión de SITREP Nocturno de Puesto de Avanzada',
      script: 'Sunray, this is Outpost Four. SITREP as of 0300 hours: 1. Situation: No enemy contact, perimeter secure. 2. Equipment: Radar generator operational. 3. Personnel: 10 soldiers on duty, zero casualties. 4. Logistics: Rations and water green. Over.',
      question: {
        question: 'What is the operational situation reported at Outpost Four?',
        options: ['Heavy enemy mortar contact', 'No enemy contact and perimeter secure', 'Generator failed', 'Casualties reported'],
        correctIndex: 1,
        explanation: 'The transmission says: "1. Situation: No enemy contact, perimeter secure."'
      }
    },
    reading: {
      title: 'Formato Doctrinal OTAN para SITREP Táctico',
      snippet: 'A standard tactical SITREP follows five headings: Line 1 - SITUATION (enemy and friendly status), Line 2 - PERSONNEL (strength, casualties, prisoners), Line 3 - LOGISTICS (ammunition, fuel, rations, maintenance), Line 4 - COMMUNICATIONS (frequencies, net status), Line 5 - COMMANDER\'S INTENT.',
      question: {
        question: 'Under which heading of a tactical SITREP are ammunition, fuel, and rations reported?',
        options: ['Line 1 - Situation', 'Line 2 - Personnel', 'Line 3 - Logistics', 'Line 5 - Commander\'s Intent'],
        correctIndex: 2,
        explanation: 'Ammunition, fuel, rations, and equipment serviceability are reported under Logistics.'
      }
    },
    useOfLanguage: {
      title: 'Uso de Palabras de Procedimiento (Prowords)',
      prompt: 'Identifica el proword de radiotelefonía correcto para indicar que se comprendió el mensaje:',
      question: {
        question: 'Which proword means "I have received your transmission satisfactorily and understand it"?',
        options: ['WILCO', 'ROGER', 'SAY AGAIN', 'OUT'],
        correctIndex: 1,
        explanation: 'ROGER means "I have received your last transmission satisfactorily". (WILCO means "I have understood and WILL COMPLY").'
      }
    },
    writing: {
      title: 'Redacción de un SITREP Táctico Breve',
      scenario: 'Redacta un SITREP de 4 líneas reportando: perímetro seguro, radar funcionando, 2 soldados de relevo y munición completa.',
      targetWordCount: '35-50 palabras',
      requiredElements: ['1. SITUATION', '2. EQUIPMENT', '3. PERSONNEL', '4. LOGISTICS'],
      modelAnswer: 'SITREP 1800L: 1. SITUATION: Sector quiet, perimeter fully secure. 2. EQUIPMENT: Tactical radar and communications 100% operational. 3. PERSONNEL: 8 personnel present, 2 relief sentries arrived. 4. LOGISTICS: Ammunition status green, rations adequate for 48 hours. Over.'
    },
    speaking: {
      title: 'Emisión Oral de SITREP en Red Táctica',
      scenario: 'Transmite el SITREP de tu base por radio ante el oficial de guardia con dicción clara RSVP.',
      recommendedDuration: '30 segundos',
      pronunciationTips: ['Pausa breve después de cada encabezado.', 'Pronuncia /sít-rep/ con acento en la primera sílaba.', 'Cierra con OVER.'],
      modelResponse: 'Control, this is Observation Post Bravo. SITREP: Perimeter is secure, visibility 5 kilometers, all weapons serviceable, zero casualties. Over.'
    }
  }
];
