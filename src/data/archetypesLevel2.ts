import { ArchetypeExerciseData } from './daily120PlanData';

export const LEVEL_2_ARCHETYPES: ArchetypeExerciseData[] = [
  // L2-1: Compras, Ropa, Uniformes Militares y Precios
  {
    title: 'Compras de Guarnición, Uniforme de Combate MTP & Precios',
    theme: 'Compras de Suministros, Tipos de Vestimenta Militar y Monedas (£, $, €)',
    objective: 'Requerir artículos de vestimenta militar y equipo de protección, consultar especificaciones técnicas, talles y precios en el almacén de intendencia de la base.',
    vocabulary: [
      { term: 'Quartermaster store', translation: 'Almacén de intendencia / Efectos', ipa: '/ˈkwɔː.tə.mɑː.stər stɔːr/', spanishPhonetic: 'kuór-ter-mas-ter stor', example: 'Go to the Quartermaster store to exchange your combat boots.' },
      { term: 'Multi-Terrain Pattern (MTP)', translation: 'Patrón de camuflaje británico MTP', ipa: '/ˈmʌl.ti təˈreɪn ˈpæt.ən/', spanishPhonetic: 'mál-ti te-réin pá-ten', example: 'All soldiers were issued standard MTP combat jackets.' },
      { term: 'Size / Fit', translation: 'Talle / Calce', ipa: '/saɪz / fɪt/', spanishPhonetic: 'sáiz / fit', example: 'Do you have these tactical gloves in a larger size?' },
      { term: 'Pence / Pounds', translation: 'Peniques / Libras esterlinas', ipa: '/pens / paʊndz/', spanishPhonetic: 'pens / páundz', example: 'The cleaning kit costs fourteen pounds and fifty pence.' },
      { term: 'Receipt / Invoice', translation: 'Recibo / Factura de entrega', ipa: '/rɪˈsiːt / ˈɪn.vɔɪs/', spanishPhonetic: 'ri-síit / ín-vois', example: 'Please sign the receipt for the new webbing equipment.' }
    ],
    grammar: {
      title: 'Simple Present vs Present Continuous & Demostrativos (These/Those)',
      formula: 'Precios: How much is/are...? | Demostrativos: this/that (sing.), these/those (plur.)',
      rule: 'Para preguntar precios en guarnición se usa "How much is this jacket?" o "How much are these boots?". Para contrastar lo que un soldado usa habitualmente (Simple Present) con lo que lleva puesto hoy (Present Continuous): "He usually wears Service Dress, but today he is wearing combat dress MTP".',
      tacticalTip: 'La palabra "clothes" siempre es plural en inglés. Nunca digas "a cloth" para referirte a una prenda; di "an item of clothing".'
    },
    phonetics: {
      targetSound: 'Vocálico /aɪ/ en Size, Price y /aʊ/ en Pounds, Round',
      articulatoryTip: 'En "size" el sonido abre en "a" y desliza a "i". En "pounds" abre en "a" y desliza hacia "u".',
      spanishPhonetic: 'sáiz, páundz',
      practiceWords: [
        { word: 'Price', spanishPhonetic: 'práis', translation: 'precio' },
        { word: 'Size', spanishPhonetic: 'sáiz', translation: 'talle' },
        { word: 'Pounds', spanishPhonetic: 'páundz', translation: 'libras' }
      ]
    },
    usefulPhrase: {
      phrase: 'Good morning. I need to replace my field jacket; could you tell me if you have these in medium size, and how much the badge sewing costs?',
      translation: 'Buenos días. Necesito reemplazar mi campera de campaña; ¿podría decirme si tiene estas en talle mediano y cuánto cuesta coser la insignia?',
      spanishPhonetic: 'Gud mór-ning. Ai niid tu ri-pléis mai fiild dshá-ket; kud iu tel mi if iu jav diis in mí-diem sáiz, and jáu mach de badsh sóu-ing kósts?',
      tacticalUsage: 'Intercambio protocolar en talleres de sastrería e intendencia militar de base.'
    },
    listening: {
      title: 'Adquisición de Equipamiento en el Almacén de Intendencia',
      script: 'Good morning, Corporal. How can I help you today? — Good morning, Sergeant. I need a pair of cold-weather combat gloves and a spare beret. — Certainly. What size do you take? — I take a size nine for gloves, and seven and a quarter for the beret. — Here you are. Try these on. The gloves are twenty-two pounds and the beret is twelve pounds fifty. — Excellent, I will take both. Can I pay by debit card? — Yes, contactless is accepted.',
      question: {
        question: 'What glove size does the Corporal request?',
        options: ['Size nine', 'Size seven and a quarter', 'Size medium', 'Size twelve'],
        correctIndex: 0,
        explanation: 'The Corporal states: "I take a size nine for gloves, and seven and a quarter for the beret".'
      }
    },
    reading: {
      title: 'Reglamento de Uniformes y Suministros de Intendencia',
      snippet: 'All non-commissioned officers and soldiers must maintain two complete sets of Multi-Terrain Pattern (MTP) field uniforms in serviceable condition. When purchasing replacement clothing at the Quartermaster store, personnel must present their Military ID card and unit authorization voucher. Cash and debit cards are accepted.',
      question: {
        question: 'What documents must personnel present when purchasing replacement uniform items?',
        options: [
          'Military ID card and unit authorization voucher',
          'Only a valid civilian driver license',
          'A written letter from the Defense Ministry',
          'A medical discharge certificate'
        ],
        correctIndex: 0,
        explanation: 'The regulation explicitly states soldiers must present their "Military ID card and unit authorization voucher".'
      }
    },
    useOfLanguage: {
      title: 'Demostrativos y Cuantificadores en Intendencia',
      prompt: 'Elige la opción correcta para completar la consulta del cabo:',
      question: {
        question: 'Corporal: "Excuse me, Sergeant. How much are ______ waterproof combat boots on the shelf?"',
        options: ['these', 'this', 'that', 'them'],
        correctIndex: 0,
        explanation: '"Boots" is a plural noun, so the plural demonstrative "these" is grammatically correct.'
      }
    },
    writing: {
      title: 'Nota de Requisición de Vestimenta Militar (Clothing Demand Note)',
      scenario: 'Redacta una nota formal de intendencia solicitando 1 par de botas de combate talle 10 y 2 camisas de campaña MTP talle Large para el soldado Pérez.',
      targetWordCount: '40-55 palabras',
      requiredElements: ['Nombre y grado del solicitante', 'Artículos específicos con talles', 'Justificación (desgaste en campaña)', 'Firma de autorización'],
      modelAnswer: 'MEMORANDUM: To Quartermaster Store. From: Sergeant Harris. Subject: Clothing Replacement. Please issue one pair of combat boots (Size 10) and two MTP field shirts (Size Large) to Private Perez (Army ID 45892). Previous gear was damaged during field exercise. Approved by Company 2IC.'
    },
    speaking: {
      title: 'Solicitud Oral de Talle y Especificaciones Técnicas',
      scenario: 'Acércate al mostrador de intendencia y solicita probarte una campera térmica en talle grande, preguntando si es impermeable.',
      recommendedDuration: '30 segundos',
      pronunciationTips: ['Articula con claridad "waterproof" /ˈwɔː.tə.pruːf/.', 'Entonación cortés ascendente en preguntas con "could you".'],
      modelResponse: 'Good morning, Sergeant. I would like to try on this thermal jacket in size Large, please. Could you also confirm whether this outer fabric is completely waterproof? Thank you.'
    }
  },

  // L2-2: Incidentes Viales, Testimonios y Pasado Simple
  {
    title: 'Reporte de Accidente de Tránsito & Testimonio Policial',
    theme: 'Accidentes en Rutas de Guarnición, Declaraciones de Testigos y Pasado Simple',
    objective: 'Narrar hechos ocurridos en el pasado utilizando verbos regulares e irregulares, describir secuencias de incidentes viales y prestar testimonio ante la policía militar.',
    vocabulary: [
      { term: 'Collision', translation: 'Colisión / Choque', ipa: '/kəˈlɪʒ.ən/', spanishPhonetic: 'ko-lí-shon', example: 'There was a collision between two military trucks.' },
      { term: 'Skid / Slipped', translation: 'Derrapar / Patinar en calzada húmeda', ipa: '/skɪd / slɪpt/', spanishPhonetic: 'skid / slipt', example: 'The civilian vehicle skidded on the wet asphalt.' },
      { term: 'Witness statement', translation: 'Declaración de testigo', ipa: '/ˈwɪt.nəs ˈsteɪt.mənt/', spanishPhonetic: 'uít-nes stéit-ment', example: 'The Corporal gave a clear witness statement to the MP.' },
      { term: 'Laceration / Injury', translation: 'Herida cortante / Lesión', ipa: '/ˌlæs.ərˈeɪ.ʃən / ˈɪn.dʒər.i/', spanishPhonetic: 'la-se-réi-shon / ín-dshur-i', example: 'The driver suffered minor facial injuries.' },
      { term: 'Recovery vehicle', translation: 'Grúa de remolque / Vehículo de recuperación', ipa: '/rɪˈkʌv.ər.i ˈvɪə.kəl/', spanishPhonetic: 'ri-ká-ve-ri ví-i-kol', example: 'Dispatch a recovery vehicle to clear the damaged utility truck.' }
    ],
    grammar: {
      title: 'Past Simple (Regular -ed & Irregular Verbs) & There was / There were',
      formula: 'Afirmativo: Subject + Verb-ed / Irregular Past | Negativo: did not + base verb | Pregunta: Did + subject + base verb?',
      rule: 'Para narrar accidentes se usa el Pasado Simple: "The truck stopped suddenly", "The car crashed into the guard barrier", "There was ice on the road". La terminación -ed regular suena /t/ tras consonantes sordas (crashed), /d/ tras sonoras (damaged) y /ɪd/ tras /t/ o /d/ (started).',
      tacticalTip: 'Nunca uses "did" con el verbo en pasado: di "Did you see the truck?" (¡jamás "Did you saw"!).'
    },
    phonetics: {
      targetSound: 'Terminaciones de pasado regular: /t/, /d/, /ɪd/',
      articulatoryTip: 'En "stopped" y "crashed" termina con un golpe sordo /t/. En "reported" y "started" se añade una sílaba /ɪd/.',
      spanishPhonetic: 'stopt, krasht, re-pór-ted',
      practiceWords: [
        { word: 'Crashed', spanishPhonetic: 'krasht', translation: 'chocó' },
        { word: 'Damaged', spanishPhonetic: 'dá-medshd', translation: 'dañado' },
        { word: 'Reported', spanishPhonetic: 're-pór-ted', translation: 'reportó' }
      ]
    },
    usefulPhrase: {
      phrase: 'I saw the incident from the sentry tower: the civilian car turned sharply to the left and collided with the perimeter gate at twenty-two hundred hours.',
      translation: 'Vi el incidente desde la torre de guardia: el auto civil giró bruscamente a la izquierda y chocó contra el portón perimétrico a las 2200 horas.',
      spanishPhonetic: 'Ai so de ín-si-dent from de sén-tri táu-er: de si-ví-li-an kar ternd shárp-li tu de left and ko-lái-ded uid de pe-rí-mi-ter géit at tuén-ti-tu ján-dred áu-ers.',
      tacticalUsage: 'Declaración jurada de centinela ante sumarios de tránsito y seguridad militar.'
    },
    listening: {
      title: 'Interrogatorio de la Policía Militar a Testigo de Choque',
      script: 'Sergeant Adams, Military Police. Can you explain what happened at the roundabout? — Yes, Sergeant. At 1430 hours, I was standing outside Hangar 4. A blue supply van approached the roundabout at high speed. The road surface was slippery because it was raining. The driver braked hard, but the vehicle skidded into the ditch. — Did anyone sustain injuries? — The driver had a cut on his forehead, but the passenger was unhurt. — Thank you, Corporal. Please sign this preliminary statement.',
      question: {
        question: 'Why did the supply van skid according to the witness?',
        options: [
          'The road surface was slippery due to rain and the driver braked hard',
          'A tire exploded on the runway',
          'The driver was answering a radio call',
          'The barrier fell prematurely'
        ],
        correctIndex: 0,
        explanation: 'The witness stated: "The road surface was slippery because it was raining. The driver braked hard, but the vehicle skidded".'
      }
    },
    reading: {
      title: 'Informe Doctrinal de Incidente de Tráfico Militar (MTO)',
      snippet: 'INCIDENT LOG: At 0915L, Land Rover Utility (Reg: 45-KA-12) traveling south on Perimeter Road experienced steering failure. The vehicle left the roadway and struck a light mast. There were three personnel on board; all were wearing seatbelts. Medical response team arrived on scene within six minutes and evacuated one soldier with a sprained wrist.',
      question: {
        question: 'How many personnel were on board the Land Rover during the collision?',
        options: ['Three personnel', 'Two drivers', 'Four soldiers', 'Only the commander'],
        correctIndex: 0,
        explanation: 'The log records: "There were three personnel on board; all were wearing seatbelts".'
      }
    },
    useOfLanguage: {
      title: 'Verbos Irregulares y Auxiliar Did en Pasado',
      prompt: 'Selecciona la forma correcta para completar la declaración del oficial:',
      question: {
        question: '"Lieutenant Miller ______ (hear) the siren immediately and ______ (run) towards the gate."',
        options: ['heard / ran', 'heared / runned', 'heard / run', 'hear / ran'],
        correctIndex: 0,
        explanation: 'The irregular past simple of "hear" is "heard" /hɜːd/ and "run" is "ran" /ræn/.'
      }
    },
    writing: {
      title: 'Redacción de Parte de Novedad por Choque Menor',
      scenario: 'Redacta un reporte breve de 4 líneas informando que un camión de carga rozó la barrera del Checkpoint 2 debido a la niebla espesa a las 0630 horas.',
      targetWordCount: '40-55 palabras',
      requiredElements: ['Hora y lugar exacto', 'Causa climática (heavy fog)', 'Daños materiales constatados', 'Acción adoptada'],
      modelAnswer: 'INCIDENT REPORT: At 0630 hrs, a logistics truck struck the swing barrier at Checkpoint 2. Dense morning fog reduced visibility to under 20 meters. The barrier mechanism was bent, but the truck sustained only minor paint scratches. Guard commander logged the incident and notified Military Police.'
    },
    speaking: {
      title: 'Transmisión Verbal de Novedad de Incidente por Radio',
      scenario: 'Informa por la red de radio que ocurrió un choque leve sin heridos y que solicitas una patrulla de control de tránsito.',
      recommendedDuration: '30 segundos',
      pronunciationTips: ['Mantén ritmo firme RSVP.', 'Pronuncia /kəˈlɪʒ.ən/ con sonido /ʒ/ suave como en "pleasure".'],
      modelResponse: 'Control, this is Post Bravo. Report minor vehicle collision outside Gate 2. Zero casualties, traffic partially obstructed. Request Military Police patrol to direct incoming convoy. Over.'
    }
  },

  // L2-3: Estructura de la Base Militar, Vehículos Blindados y Salud
  {
    title: 'Vehículos Militares (APC, MBT, 4x4) & Primeros Auxilios en Campaña',
    theme: 'Designaciones de Blindados, Componentes de Sanidad y Comparativos/Superlativos',
    objective: 'Reconocer especificaciones de vehículos blindados (Armoured Personnel Carrier, Main Battle Tank), solicitar asistencia médica de primeros auxilios y aplicar grados comparativos.',
    vocabulary: [
      { term: 'Armoured Personnel Carrier (APC)', translation: 'Transporte Acorazado de Personal', ipa: '/ˈɑː.məd ˌpɜː.sənˈel ˈkær.i.ər/', spanishPhonetic: 'ár-med per-so-nél ká-ri-er', example: 'The section deployed from the APC in wedge formation.' },
      { term: 'Main Battle Tank (MBT)', translation: 'Tanque Principal de Combate', ipa: '/meɪn ˈbæt.əl tæŋk/', spanishPhonetic: 'méin bá-tol tank', example: 'The Challenger 2 is the British Army Main Battle Tank.' },
      { term: 'Tourniquet / Bandage', translation: 'Torniquete / Venda estéril', ipa: '/ˈtʊə.nɪ.keɪ / ˈbæn.dɪdʒ/', spanishPhonetic: 'túr-ni-kei / bán-didsh', example: 'Apply a Combat Application Tourniquet (CAT) high and tight.' },
      { term: 'Stretcher / Litter', translation: 'Camilla de evacuación', ipa: '/ˈstretʃ.ər / ˈlɪt.ər/', spanishPhonetic: 'stré-cher / lí-ter', example: 'Two soldiers carried the wounded sentry on a rigid stretcher.' },
      { term: 'Heavier / Fastest', translation: 'Más pesado / El más rápido', ipa: '/ˈhev.i.ər / ˈfɑː.stɪst/', spanishPhonetic: 'jé-vi-er / fás-test', example: 'The tank is heavier than the wheeled reconnaissance vehicle.' }
    ],
    grammar: {
      title: 'Comparativos y Superlativos Regulares e Irregulares',
      formula: 'Comparativo: [Adj]-er than / more [Adj] than | Superlativo: the [Adj]-est / the most [Adj]',
      rule: 'Para adjetivos de 1 sílaba: fast -> faster -> the fastest; heavy -> heavier -> the heaviest. Para adjetivos largos: reliable -> more reliable -> the most reliable. Irregulares: good -> better -> the best; bad -> worse -> the worst.',
      tacticalTip: 'Recuerda usar "than" para comparar: "The APC is faster than the tank" (¡nunca "that" o "then"!).'
    },
    phonetics: {
      targetSound: 'Sonido /tʃ/ en Stretcher, Check y /dʒ/ en Bandage, Major',
      articulatoryTip: 'En "stretcher" la lengua choca firmemente contra el paladar generando el sonido explosivo "ch".',
      spanishPhonetic: 'stré-cher, bán-didsh',
      practiceWords: [
        { word: 'Stretcher', spanishPhonetic: 'stré-cher', translation: 'camilla' },
        { word: 'Bandage', spanishPhonetic: 'bán-didsh', translation: 'venda' },
        { word: 'Faster', spanishPhonetic: 'fás-ter', translation: 'más rápido' }
      ]
    },
    usefulPhrase: {
      phrase: 'Medic! We have a casualty with a severe hemorrhage on his right leg; apply the tourniquet immediately and prepare the stretcher for evacuation!',
      translation: '¡Camillero/Médico! Tenemos un herido con hemorragia severa en la pierna derecha; ¡aplique el torniquete inmediatamente y prepare la camilla para la evacuación!',
      spanishPhonetic: 'Mé-dik! Ui jav e ká-shual-ti uid e se-vír jé-mo-ridsh on jis ráit leg; ap-lái de túr-ni-kei i-mí-diet-li and pri-pér de stré-cher for i-va-kiu-éi-shon!',
      tacticalUsage: 'Órdenes de auxilio urgente en ejercicios de tiro, instrucción de combate y primeros auxilios de campaña.'
    },
    listening: {
      title: 'Instrucción Médica Táctica sobre Colocación de Torniquetes',
      script: 'Pay attention, squad. In tactical combat casualty care, massive bleeding is the number one cause of preventable death. If an artery is severed in the leg, you have less than three minutes to act. Place the Combat Application Tourniquet two inches above the wound, or high and tight on the limb. Turn the windlass rod until the arterial bleeding completely stops. Lock the rod into the clip and record the application time on the white band. Is that clear?',
      question: {
        question: 'What must you write on the white band of the tourniquet once bleeding stops?',
        options: [
          'The exact time of application',
          'The soldier\'s rank and blood type',
          'The ammunition caliber used',
          'The coordinates of the field hospital'
        ],
        correctIndex: 0,
        explanation: 'The medic explicitly states: "Lock the rod into the clip and record the application time on the white band".'
      }
    },
    reading: {
      title: 'Ficha Técnica Doctrinal: Blindados de Transporte vs Tanques',
      snippet: 'Modern mechanized doctrine pairs the Main Battle Tank (MBT) with the Armoured Personnel Carrier (APC). The MBT carries the heaviest armor and the most powerful 120mm smoothbore gun, but it has a lower top speed off-road. Conversely, the 8x8 wheeled APC is lighter, faster on paved roads, and more fuel-efficient, capable of transporting an eight-man infantry section directly into urban battle spaces.',
      question: {
        question: 'What is an operational advantage of the 8x8 wheeled APC over the Main Battle Tank?',
        options: [
          'It is lighter, faster on paved roads, and carries an infantry section',
          'It has a heavier 120mm gun',
          'It requires no fuel or maintenance',
          'It is immune to anti-tank mines'
        ],
        correctIndex: 0,
        explanation: 'The text specifies the APC is "lighter, faster on paved roads, and more fuel-efficient, capable of transporting an eight-man infantry section".'
      }
    },
    useOfLanguage: {
      title: 'Comparativos en Especificaciones de Vehículos',
      prompt: 'Completa la comparación técnica doctrinal:',
      question: {
        question: '"The wheeled patrol 4x4 is ______ (maneuverable) than the tracked tank in narrow mountain passes."',
        options: ['more maneuverable', 'most maneuverable', 'maneuverabler', 'as maneuverable'],
        correctIndex: 0,
        explanation: '"Maneuverable" has multiple syllables, so its comparative form is "more maneuverable than".'
      }
    },
    writing: {
      title: 'Reporte Médico Inicial de Paciente en Campaña (Triage Slip)',
      scenario: 'Completa un informe de primeros auxilios registrando a un soldado con esguince de tobillo y signos de deshidratación tras una marcha de 20 km.',
      targetWordCount: '35-50 palabras',
      requiredElements: ['Datos del paciente', 'Diagnóstico preliminar', 'Tratamiento inicial aplicado', 'Estado de movilidad'],
      modelAnswer: 'FIELD MEDICAL REPORT: Patient: Private Jenkins. Diagnosis: Sprained left ankle and moderate dehydration following 20km forced march. Treatment: Elastic compression bandage applied, limb elevated, oral rehydration salts administered. Patient is non-ambulatory; requires vehicle transport to base clinic.'
    },
    speaking: {
      title: 'Solicitud Radial de Ambulancia de Campaña',
      scenario: 'Transmite un mensaje radial solicitando una ambulancia para trasladar a un herido estabilizado desde el polígono de tiro.',
      recommendedDuration: '30 segundos',
      pronunciationTips: ['Voz pausada con pausas claras entre datos.', 'Pronuncia /kæʒ.ju.əl.ti/ en "casualty".'],
      modelResponse: 'Control, this is Firing Range Two. We have one stabilized casualty with ankle fracture. Request field ambulance to Range Gate. Stretcher team standing by. Over.'
    }
  }
];
