import { AxisTheoryModule } from '../../types';

export const readingTheoryLevels: Record<number, AxisTheoryModule> = {
  1: {
    axis: 'reading',
    levelNumber: 1,
    overview: 'Lectura comprensiva de avisos breves de base, letreros de seguridad, señales tácticas, carteleras de servicio y formularios elementales.',
    vocabulary: [
      {
        theme: 'Señales de Advertencia y Seguridad en Bases (Warning Signs & Base Security)',
        description: 'Términos de lectura inmediata indispensables para la seguridad física en instalaciones militares.',
        words: [
          { term: 'Restricted area', ipa: '/rɪˈstrɪktɪd ˈeəriə/', partOfSpeech: 'frase nominal', translation: 'Zona restringida / área prohibida', example: 'Entry to this restricted area is forbidden without a pass.', tacticalTip: 'Visto habitualmente en perímetros de alta seguridad.' },
          { term: 'Authorised personnel only', ipa: '/ˈɔːθəraɪzd ˌpɜːsəˈnel ˈəʊnli/', partOfSpeech: 'frase nominal', translation: 'Solo personal autorizado', example: 'Armoury entrance: Authorised personnel only.', tacticalTip: 'En inglés británico se escribe "authorised" con "s".' },
          { term: 'Keep out', ipa: '/kiːp aʊt/', partOfSpeech: 'frase verbal imperativa', translation: 'Prohibido el paso / no ingresar', example: 'Ammunition depot: Danger, keep out!', tacticalTip: 'Señalización perimetral de peligro inminente.' },
          { term: 'Assembly point', ipa: '/əˈsembli pɔɪnt/', partOfSpeech: 'sustantivo', translation: 'Punto de reunión / concentración', example: 'In case of alarm, proceed to Assembly Point Delta.', tacticalTip: 'Lugar designado para reunión de evacuación o formación.' }
        ]
      },
      {
        theme: 'Partes de un Formulario de Identificación Militar (Military Identity Forms)',
        description: 'Campos estándar encontrados en registros de acceso, fichas y pases de cuartel.',
        words: [
          { term: 'Surname', ipa: '/ˈsɜːneɪm/', partOfSpeech: 'sustantivo', translation: 'Apellido (equivalente a Last name)', example: 'Print your surname in block capital letters.', tacticalTip: 'Término estándar en formularios militares de tradición británica.' },
          { term: 'Service number', ipa: '/ˈsɜːvɪs ˈnʌmbə/', partOfSpeech: 'sustantivo', translation: 'Número de matrícula militar / legajo', example: 'Write your rank and service number at the top.', tacticalTip: 'Identificador único inmutable del efectivo castrense.' },
          { term: 'Duty officer', ipa: '/ˈdjuːti ˈɒfɪsə/', partOfSpeech: 'sustantivo', translation: 'Oficial de servicio / de guardia', example: 'Submit your pass to the Duty Officer before departure.', tacticalTip: 'Responsable de la guardia durante el turno asignado.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'El Orden Sintáctico Canónico en Oraciones Afirmativas (SVO: Sujeto + Verbo + Objeto)',
        structureFormula: 'Sujeto + Verbo Auxiliar/Principal + Objeto Directo + Complementos',
        orderElements: [
          { position: 1, element: 'Sujeto (Subject)', function: 'Núcleo que realiza o protagoniza la acción', example: 'All soldiers' },
          { position: 2, element: 'Verbo (Verb)', function: 'Acción obligatoria o estado', example: 'must carry' },
          { position: 3, element: 'Objeto Directo (Object)', function: 'Elemento que recibe la acción', example: 'their military identification card' },
          { position: 4, element: 'Complemento de Modo/Lugar', function: 'Circunstancia de la norma', example: 'at all times inside the perimeter.' }
        ],
        explanation: 'En los textos normativos en inglés, el orden es estrictamente Sujeto-Verbo-Objeto. A diferencia del español, no se puede posponer el sujeto tras el verbo en oraciones declarativas.',
        examples: [
          { english: 'Guard posts operate 24 hours a day.', spanish: 'Los puestos de guardia operan las 24 horas del día.' },
          { english: 'The commander signed the daily orders.', spanish: 'El comandante firmó las órdenes del día.' }
        ],
        commonMistakes: [
          { incorrect: 'Signed the commander the orders.', correct: 'The commander signed the orders.', reason: 'El inglés no permite invertir verbo y sujeto en oraciones declarativas estándar.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'La Pronunciación de las Vocales Cortas vs Largas en la Lectura Mental',
        soundIpa: '/æ/ vs /ɑː/',
        description: 'Diferenciación de la vocal "a" en avisos impresos para una lectura y comprensión certera.',
        articulatoryGuide: 'En inglés británico, "pass" se pronuncia con vocal larga posterior /pɑːs/, mientras que "gas" lleva vocal corta anterior /ɡæs/.',
        rules: [
          'En inglés británico estándar (RP), palabras como pass, fast, ask llevan /ɑː/ larga.',
          'Palabras de origen latino o cerradas breves suelen mantener /æ/ corta.'
        ],
        minimalPairs: [
          { word1: 'pass', ipa1: '/pɑːs/', word2: 'path', ipa2: '/pɑːθ/', meaning1: 'Pase / autorización', meaning2: 'Sendero / camino' }
        ],
        practiceWords: [
          { word: 'pass', ipa: '/pɑːs/', stressPattern: 'pass', translation: 'pase / autorización' },
          { word: 'barracks', ipa: '/ˈbærəks/', stressPattern: 'BAR-racks', translation: 'cuartel' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Interpretación de Rótulos y Avisos de Tránsito en Bases',
        situation: 'Lectura de carteles en una instalación multinacional.',
        phrases: [
          { english: 'Speed limit on base strictly enforced: 20 km/h.', spanish: 'Límite de velocidad en la base estrictamente vigilado: 20 km/h.', usageNote: 'Indica control riguroso de la policía militar.', register: 'Formal / Táctico' },
          { english: 'Report suspicious activity to Military Police post immediately.', spanish: 'Reporte actividad sospechosa al puesto de la Policía Militar de inmediato.', usageNote: 'Directiva de seguridad en instalaciones.', register: 'Formal / Táctico' }
        ]
      }
    ]
  },
  2: {
    axis: 'reading',
    levelNumber: 2,
    overview: 'Comprensión Escrita STANAG 6001 Nivel 2: Identificación de la finalidad de documentos (informar, publicitar, aconsejar, instruir, narrar); reconocimiento de fuentes y tipologías textuales; extracción de ideas principales y datos específicos en incidentes, relatos cronológicos, manuales de aparatos y reseñas; inferencia contextual de vocabulario; e interpretación de conectores discursivos (adición, condición, causa-consecuencia y secuencia temporal).',
    vocabulary: [
      {
        theme: 'Finalidad del Texto y Fuentes de Información (Text Purpose & Sources)',
        description: 'Términos para clasificar la intención comunicativa y el origen documental.',
        words: [
          { term: 'Notice / Brochure / Leaflet', ipa: '/ˈnəʊtɪs / ˈbrəʊʃə / ˈliːflət/', partOfSpeech: 'sustantivos', translation: 'Aviso oficial / Folleto publicitario / Volante o tríptico informativo', example: 'Read the safety notice posted at the entrance of the technical workshop.', tacticalTip: 'Distingue formatos publicitarios de comunicados formales.' },
          { term: 'Instructions manual / User guide', ipa: '/ɪnˈstrʌkʃnz ˈmænjuəl / ˈjuːzə ɡaɪd/', partOfSpeech: 'sustantivos', translation: 'Manual de instrucciones / Guía de usuario', example: 'Follow the step-by-step user guide to calibrate the radio set.', tacticalTip: 'Textos instruccionales con abundancia de verbos imperativos.' },
          { term: 'Review / Editorial / Report', ipa: '/rɪˈvjuː / ˌedɪˈtɔːriəl / rɪˈpɔːt/', partOfSpeech: 'sustantivos', translation: 'Crítica o reseña / Nota de opinión / Informe fáctico', example: 'The magazine published a critical review of the new transport vehicle.', tacticalTip: 'Diferencia textos de opinión de informes objetivos.' },
          { term: 'Chronological account / Logbook', ipa: '/ˌkrɒnəˈlɒdʒɪkl əˈkaʊnt / ˈlɒɡbʊk/', partOfSpeech: 'sustantivos', translation: 'Relato cronológico / Libro de guardia o bitácora', example: 'The logbook records all arrivals and departures in chronological order.', tacticalTip: 'Estructura temporal con marcadores First, Then, After that.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'Conectores Discursivos y Relaciones Lógicas en la Lectura (Discourse Markers)',
        structureFormula: 'Adición: also, in addition | Condición: if, unless | Causa/Efecto: because, so, therefore | Secuencia: First, Next, Finally | Tiempo: When, As soon as, Until',
        orderElements: [
          { position: 1, element: 'Marcador lógico', function: 'Indica la relación entre enunciados', example: 'Because / As soon as / Therefore' },
          { position: 2, element: 'Proposición antecedente', function: 'Causa, condición o momento temporal', example: 'the primary runway was blocked,' },
          { position: 3, element: 'Proposición consecuente', function: 'Resultado o instrucción obligatoria', example: 'all incoming flights were diverted.' }
        ],
        explanation: 'En las evaluaciones de lectura STANAG Nivel 2, los conectores discursivos son pistas decisivas para deducir relaciones de causa-efecto (because, so), condiciones (if), adiciones (also) y el orden estricto de los hechos en secuencias temporales (when, as soon as, before, after, until).',
        examples: [
          { english: 'As soon as the fire alarm sounded, personnel evacuated through the emergency exits.', spanish: 'Tan pronto como sonó la alarma de incendios, el personal evacuó por las salidas de emergencia (relación de inmediatez temporal).', notes: 'Comprensión de "as soon as".' },
          { english: 'The bridge was damaged by heavy flooding; therefore, the convoy took Route 4.', spanish: 'El puente fue dañado por graves inundaciones; por lo tanto, el convoy tomó la Ruta 4 (relación lógica de consecuencia).', notes: 'Comprensión de "therefore / so".' }
        ],
        commonMistakes: [
          { incorrect: 'Confundir "so" (consecuencia: por eso) con "because" (causa: porque).', correct: 'Identificar si la frase responde a "¿por qué ocurrió?" (because) o "¿qué ocurrió como resultado?" (so).', reason: 'Diferenciación esencial para preguntas de opción múltiple en lectura.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'Las Consonantes Fricativas Dentales /θ/ (sorda) y /ð/ (sonora) en Textos Escritos',
        soundIpa: '/θ/ vs /ð/',
        description: 'La combinación "th" representa dos sonidos distintos esenciales para la lectura fluida en voz alta.',
        articulatoryGuide: 'Colocar la punta de la lengua entre los incisivos superiores e inferiores. En /θ/ solo sale aire; en /ð/ vibran las cuerdas vocales.',
        rules: [
          '/θ/ sorda: palabras de contenido léxico (ej. think, depth, north, health, tooth).',
          '/ð/ sonora: palabras gramaticales y funcionales (ej. the, this, that, therefore, weather, clothing).'
        ],
        minimalPairs: [
          { word1: 'teeth', ipa1: '/tiːθ/', word2: 'teethe', ipa2: '/tiːð/', meaning1: 'Dientes', meaning2: 'Dentición' }
        ],
        practiceWords: [
          { word: 'health', ipa: '/helθ/', stressPattern: 'health (/θ/)', translation: 'salud' },
          { word: 'weather', ipa: '/ˈweðə/', stressPattern: 'WEA-ther (/ð/)', translation: 'clima' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Técnicas de Lectura: Skimming, Scanning e Inferencia Contextual',
        situation: 'Resolución de textos en exámenes oficiales de comprensión lectora.',
        phrases: [
          { english: 'Skimming: Read the opening and concluding paragraphs rapidly to determine the main purpose of the document.', spanish: 'Lectura global: Lea el primer y último párrafo rápidamente para determinar la finalidad primordial del documento.', usageNote: 'Estrategia para preguntas sobre el objetivo general del texto.', register: 'Neutro' },
          { english: 'Scanning: Locate specific dates, numbers, prices, or technical terms without reading every individual word.', spanish: 'Búsqueda selectiva: Localice fechas, cifras, precios o términos técnicos específicos sin leer cada palabra.', usageNote: 'Estrategia para preguntas de datos puntuales.', register: 'Neutro' },
          { english: 'Contextual Clues: Deduce the meaning of unfamiliar words by looking at nearby adjectives, verbs and connectors.', spanish: 'Pistas contextuales: Deduzca el significado de palabras desconocidas analizando adjetivos, verbos y conectores contiguos.', usageNote: 'Estrategia para inferir vocabulario no familiar.', register: 'Neutro' }
        ]
      }
    ]
  },
  3: {
    axis: 'reading',
    levelNumber: 3,
    overview: 'Comprensión de textos auténticos y adaptados: artículos de periódicos y revistas sobre hechos de la realidad, folletos turísticos e institucionales, reseñas de espectáculos, biografías y textos literarios o testimoniales. Integración de estrategias de lecto-comprensión (tema principal, datos específicos, identificación de referentes pronominales e inferencia de significados) y reconocimiento explícito de relaciones lógicas (causa-efecto, consecuencia, condición, secuencia cronológica, contraste, adición, propósito y ejemplificación).',
    vocabulary: [
      {
        theme: 'Tipología Textual y Componentes de Artículos y Folletos',
        description: 'Léxico para identificar formatos, secciones y géneros de lectura informativa y turística.',
        words: [
          { term: 'Feature article', ipa: '/ˈfiːtʃə ˈɑːtɪkl/', partOfSpeech: 'sustantivo compuesto', translation: 'Artículo de fondo o reportaje especial', example: 'The defence journal published a feature article on military relocations and family adaptation.', tacticalTip: 'Texto periodístico extenso y analítico.' },
          { term: 'Travel brochure', ipa: '/ˈtrævl ˈbrəʊʃə/', partOfSpeech: 'sustantivo compuesto', translation: 'Folleto turístico y de servicios', example: 'The garrison tourism office offers a travel brochure detailing historical landmarks in North Yorkshire.', tacticalTip: 'Material promocional con itinerarios, horarios y tarifas.' },
          { term: 'Biographical sketch', ipa: '/ˌbaɪəˈɡræfɪkl sketʃ/', partOfSpeech: 'sustantivo compuesto', translation: 'Semblanza o reseña biográfica', example: 'The historical anthology includes a biographical sketch of General San Martin\'s campaign in Peru.', tacticalTip: 'Narración sintética de vida y trayectoria profesional.' },
          { term: 'Cultural review', ipa: '/ˈkʌltʃərəl rɪˈvjuː/', partOfSpeech: 'sustantivo compuesto', translation: 'Crítica o reseña de cine, teatro o música', example: 'The Sunday newspaper featured a glowing cultural review of the West End theatrical production.', tacticalTip: 'Evaluación cualitativa de un espectáculo artístico.' }
        ]
      },
      {
        theme: 'Estrategias de Lectura Crítica y Análisis Discursivo',
        description: 'Términos metodológicos para el procesamiento activo de textos escritos.',
        words: [
          { term: 'Main idea', ipa: '/meɪn aɪˈdɪə/', partOfSpeech: 'sustantivo compuesto', translation: 'Idea o tema principal del texto', example: 'Identify the main idea of each paragraph before answering the multiple-choice questions.', tacticalTip: 'Núcleo temático global del documento.' },
          { term: 'Specific detail', ipa: '/spəˈsɪfɪk ˈdiːteɪl/', partOfSpeech: 'sustantivo compuesto', translation: 'Dato o información puntual (Scanning)', example: 'Scan the timetable to retrieve the specific detail regarding train departure platforms.', tacticalTip: 'Cifras, nombres propios, fechas y requisitos específicos.' },
          { term: 'Pronominal reference', ipa: '/prəʊˈnɒmɪnl ˈrefrəns/', partOfSpeech: 'sustantivo compuesto', translation: 'Referencia pronominal (antecedente)', example: 'In line 14, the pronoun "they" refers to the UN peacekeeping observers.', tacticalTip: 'Rastreo del sustantivo al que alude un pronombre (it, they, which, former).' },
          { term: 'Contextual inference', ipa: '/kənˈtekstʃuəl ˈɪnfərəns/', partOfSpeech: 'sustantivo compuesto', translation: 'Inferencia léxica contextual', example: 'Use contextual inference to deduce the meaning of unfamiliar medical or technical terms.', tacticalTip: 'Deducción del significado a partir del contexto contiguo.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'Mapeo de Relaciones Lógicas en Textos Escritos (Logical Relations & Connectors)',
        structureFormula: 'Proposición A + Marcador de Relación Lógica + Proposición B',
        orderElements: [
          { position: 1, element: 'Premisa Inicial', function: 'Hecho, causa o condición', example: 'The garrison adopted solar panels' },
          { position: 2, element: 'Conector de Relación Lógica', function: 'in order to / for this reason / although / besides', example: 'in order to' },
          { position: 3, element: 'Consecuencia, propósito o contraste', function: 'Efecto derivado o concesión', example: 'reduce electrical grid dependency.' }
        ],
        explanation: 'En las evaluaciones de lectura del Nivel 3, las preguntas de comprensión evalúan la capacidad de distinguir siete relaciones lógicas clave:\n1. Causa-efecto / consecuencia: "because", "due to", "for this reason", "as a result".\n2. Condición: "if", "unless" (a menos que / si no), "provided that".\n3. Secuencia cronológica: "first", "subsequently", "prior to", "as soon as", "in the end".\n4. Contraste y concesión: "although", "even though", "however", "whereas", "on the other hand".\n5. Adición: "besides", "furthermore", "in addition to", "not only... but also".\n6. Propósito: "in order to", "so as to", "so that".\n7. Ejemplificación: "for instance", "such as", "namely".',
        examples: [
          { english: 'Although the new military posting required moving across the country, the officer\'s family adapted quickly.', spanish: 'Aunque el nuevo destino militar requirió mudarse a través de todo el país, la familia del oficial se adaptó rápidamente (Contraste/Concesión).' },
          { english: 'The battalion ran out of drinking water; for this reason, the emergency logistics convoy was dispatched immediately.', spanish: 'El batallón se quedó sin agua potable; por esta razón, el convoy logístico de emergencia fue despachado de inmediato (Causa/Consecuencia).' },
          { english: 'All personnel must check their respirators prior to entering the chemical training chamber in order to ensure safety.', spanish: 'Todo el personal debe revisar sus respiradores antes de ingresar a la cámara de entrenamiento químico a fin de garantizar la seguridad (Propósito y Secuencia).' }
        ],
        commonMistakes: [
          { incorrect: 'Although the team was tired, but they finished the survey.', correct: 'Although the team was tired, they finished the survey.', reason: 'No se combinan "although" y "but" en la misma relación oracional.' },
          { incorrect: 'The flight was cancelled for the reason of bad weather.', correct: 'The flight was cancelled due to bad weather / for this reason...', reason: 'Usar "due to / because of + sustantivo", o "for this reason" como conector oracional independiente.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'Lectura en Voz Alta: Pausas Sintácticas y Grupos de Sentido (Thought Groups & Chunking)',
        soundIpa: '/tʃʌŋkɪŋ/',
        description: 'Segmentación del texto escrito en unidades de sentido para lograr una lectura comprensiva y fluida.',
        articulatoryGuide: 'Al leer artículos o relatos en voz alta, agrupe las palabras en frases coherentes (sujeto + verbo, frase preposicional, cláusula relativa) haciendo micro-pausas sin cortar oraciones a mitad de un sintagma.',
        rules: [
          'Haga una pausa breve después de comas que delimitan cláusulas condicionales ("If it rains, / the parade is cancelled").',
          'Enlace los conectores discursivos con una entonación suspendida que anticipe la segunda idea: "However, / ...".'
        ],
        practiceWords: [
          { word: 'for instance,', ipa: '/fər ˈɪnstəns/', stressPattern: 'for IN-stance (pausa)', translation: 'por ejemplo' },
          { word: 'consequently,', ipa: '/ˈkɒnsɪkwəntli/', stressPattern: 'CON-se-quent-ly (pausa)', translation: 'por consiguiente' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Reconocimiento de Fórmulas y Marcadores en Textos Informativos',
        situation: 'Lectura comprensiva de artículos de prensa, biografías y reseñas culturales.',
        phrases: [
          { english: 'According to the author, the primary factor influencing lifestyle adaptation is family cohesion.', spanish: 'Según el autor, el factor principal que influye en la adaptación del estilo de vida es la cohesión familiar.', usageNote: 'Identificación de la tesis del autor en un artículo periodístico.', register: 'Formal / Táctico' },
          { english: 'The underlined pronoun "which" refers to the newly constructed military medical complex.', spanish: 'El pronombre subrayado "which" hace referencia al complejo médico militar recién construido.', usageNote: 'Resolución de referencia pronominal anafórica.', register: 'Neutro' },
          { english: 'The passage implies that while Argentine leisure activities centre on open-air gatherings, British routines are more home-oriented.', spanish: 'El pasaje da a entender que mientras las actividades de ocio argentinas se centran en reuniones al aire libre, las rutinas británicas están más orientadas al hogar.', usageNote: 'Inferencia de contrastes socioculturales en textos informativos.', register: 'Diplomático' }
        ]
      }
    ]
  },
  4: {
    axis: 'reading',
    levelNumber: 4,
    overview: 'Comprensión crítica de órdenes de operaciones completas (OPORDs de 5 párrafos), manuales de procedimiento estándar (SOPs) y evaluaciones de inteligencia militar.',
    vocabulary: [
      {
        theme: 'Los 5 Párrafos de la OPORD Doctrinal OTAN (SMEAC)',
        description: 'Encabezados y conceptos doctrinales fundamentales de la orden de operaciones.',
        words: [
          { term: 'Situation (SMEAC)', ipa: '/ˌsɪtʃuˈeɪʃn/', partOfSpeech: 'sustantivo', translation: 'Situación (fuerzas enemigas, amigas y terreno)', example: 'Paragraph 1 details enemy strength, weather, and civil considerations.', tacticalTip: 'Primer bloque de la orden de operaciones estándar.' },
          { term: 'Mission', ipa: '/ˈmɪʃn/', partOfSpeech: 'sustantivo', translation: 'Misión (tarea y propósito)', example: 'The mission statement clearly establishes the who, what, when, where, and why.', tacticalTip: 'Enunciado conciso e inviolable del propósito militar.' },
          { term: 'Execution', ipa: '/ˌeksɪˈkjuːʃn/', partOfSpeech: 'sustantivo', translation: 'Ejecución (concepto de la operación)', example: 'The Execution paragraph outlines the Scheme of Manoeuvre.', tacticalTip: 'Define las fases tácticas de maniobra y fuegos.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'Estructuras con Verbos Modales de Certeza y Deducción Lógica',
        structureFormula: 'Sujeto + Modal (Must / May / Might / Cannot) + Have + Participio Pasado',
        orderElements: [
          { position: 1, element: 'Sujeto Analizado', function: 'Fuerza o elemento evaluado', example: 'The opposing force' },
          { position: 2, element: 'Modal de Deducción', function: 'Grado de probabilidad deducida', example: 'must have / cannot have' },
          { position: 3, element: 'Participio Pasado', function: 'Acción presumida', example: 'withdrawn / received' },
          { position: 4, element: 'Complemento', function: 'Dato de sustento', example: 'under cover of darkness.' }
        ],
        explanation: 'En los informes de inteligencia militar, la graduación de certeza es decisiva: "must have" denota deducción casi segura; "might have" denota posibilidad sin confirmar.',
        examples: [
          { english: 'The radar station must have suffered an electrical breakdown.', spanish: 'La estación de radar debe de haber sufrido un fallo eléctrico (deducción casi certera).' }
        ],
        commonMistakes: [
          { incorrect: 'The unit must has arrived.', correct: 'The unit must have arrived.', reason: 'Tras cualquier modal el auxiliar es siempre el infinitivo "have".' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'El Acento Diacrítico en Sustantivos vs Verbos Heterófonos',
        soundIpa: '/ˈhɒməʊɡrɑːfs/',
        description: 'Palabras idénticas en la escritura cuyo significado cambia según qué sílaba se acentúa.',
        articulatoryGuide: 'Los sustantivos y adjetivos llevan el acento en la primera sílaba; los verbos llevan el acento en la segunda sílaba.',
        rules: [
          'RE-cord (sustantivo: registro) vs re-CORD (verbo: registrar/grabar).',
          'CON-voy (sustantivo: caravana de vehículos) vs con-VOY (verbo: escoltar/custodiar).'
        ],
        practiceWords: [
          { word: 'suspect (sust.)', ipa: '/ˈsʌspekt/', stressPattern: 'SUS-pect', translation: 'sospechoso' },
          { word: 'suspect (verbo)', ipa: '/səˈspekt/', stressPattern: 'sus-PECT', translation: 'sospechar' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Identificación de Directivas Mandatorias en Manuales Técnicos',
        situation: 'Lectura de manuales de mantenimiento de armamento y vehículos.',
        phrases: [
          { english: 'Personnel shall not deviate from approved technical procedures.', spanish: 'El personal no se apartará de los procedimientos técnicos aprobados.', usageNote: '"Shall" en manuales militares expresa una obligación reglamentaria inflexible.', register: 'Formal / Táctico' }
        ]
      }
    ]
  },
  5: {
    axis: 'reading',
    levelNumber: 5,
    overview: 'Análisis de directivas de defensa nacional, tratados de desarme, directrices de ROE complejas y documentos doctrinales estratégicos.',
    vocabulary: [
      {
        theme: 'Doctrina de Derecho Internacional Humanitario y Conflictos Armados',
        description: 'Conceptos jurídicos castrenses indispensables para el oficial de Estado Mayor.',
        words: [
          { term: 'Proportionality', ipa: '/prəˌpɔːʃəˈnæləti/', partOfSpeech: 'sustantivo', translation: 'Proporcionalidad (principio de)', example: 'Military commanders must adhere strictly to the principle of proportionality.', tacticalTip: 'Principio que prohíbe ataques con daño colateral excesivo.' },
          { term: 'Collateral damage', ipa: '/kəˈlætərəl ˈdæmɪdʒ/', partOfSpeech: 'sustantivo incontable', translation: 'Daño colateral (a civiles o bienes)', example: 'Precision munitions minimise the risk of collateral damage.', tacticalTip: 'Impacto secundario no deseado de una acción cinética.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'Oraciones Participiales para Concisión Doctrinal (Participle Clauses)',
        structureFormula: 'Participio Presente (-ing) / Pasado (-ed), Oración Principal',
        orderElements: [
          { position: 1, element: 'Cláusula Participial', function: 'Reemplaza a una subordinada adverbial', example: 'Having completed the operational review' },
          { position: 2, element: 'Sujeto Común', function: 'Debe ser el mismo de la cláusula participial', example: 'the Joint Chiefs of Staff' },
          { position: 3, element: 'Verbo Principal', function: 'Acción rectora', example: 'authorised the deployment.' }
        ],
        explanation: 'Las cláusulas participiales permiten condensar dos hechos cronológicos o causales en una sola frase de máxima densidad informativa.',
        examples: [
          { english: 'Operating under severe electronic interference, the signals brigade maintained satellite link.', spanish: 'Operando bajo severa interferencia electrónica, la brigada de comunicaciones mantuvo el enlace satelital.' }
        ],
        commonMistakes: [
          { incorrect: 'Having arrived at the base, the order was cancelled.', correct: 'Having arrived at the base, the platoon discovered the order was cancelled.', reason: 'Dangling participle: el sujeto de la oración principal debe ser quien ejecutó la acción del participio.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'Pronunciación de Préstamos Lingüísticos y Latinismos en Textos Doctrinales',
        soundIpa: '/ˈlætɪn ˈbɒrəʊɪŋz/',
        description: 'Lectura precisa de expresiones de origen latino o francés de uso universal en doctrina.',
        articulatoryGuide: 'Los latinismos en el inglés militar se pronuncian con fonética adaptada al sistema vocálico inglés.',
        rules: [
          'De facto: /deɪ ˈfæk.təʊ/ - pronunciado con diptongo /eɪ/ inicial.',
          'Status quo: /ˌsteɪ.təs ˈkwəʊ/ - con vocal larga inicial /eɪ/.'
        ],
        practiceWords: [
          { word: 'status quo', ipa: '/ˌsteɪ.təs ˈkwəʊ/', stressPattern: 'STA-tus QUO', translation: 'estado actual de cosas' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Reconocimiento de Excepciones Doctrinales en Documentos Legales',
        situation: 'Lectura de acuerdos sobre el estatuto de las fuerzas (SOFA).',
        phrases: [
          { english: 'Subject to paragraph four, military personnel enjoy functional immunity from local civil litigation.', spanish: 'Sujeto a lo dispuesto en el párrafo cuatro, el personal militar goza de inmunidad funcional frente a litigios civiles locales.', usageNote: 'Introduce una salvaguarda jurídica.', register: 'Diplomático' }
        ]
      }
    ]
  },
  6: {
    axis: 'reading',
    levelNumber: 6,
    overview: 'Comprensión e interpretación de doctrina militar de vanguardia, tratados de ciberdefensa, discursos geopolíticos y ensayos de prospectiva estratégica.',
    vocabulary: [
      {
        theme: 'Guerra Híbrida y Estrategia de Zona Gris',
        description: 'Conceptos avanzados de seguridad multidominio del siglo XXI.',
        words: [
          { term: 'Cognitive warfare', ipa: '/ˈkɒɡnətɪv ˈwɔːfeə/', partOfSpeech: 'sustantivo', translation: 'Guerra cognitiva / batalla por la mente', example: 'Cognitive warfare targets decision-making processes through disinformation.', tacticalTip: 'Manipulación sistemática de la percepción pública y del mando.' },
          { term: 'Asymmetric threat', ipa: '/ˌeɪsɪˈmetrɪk θret/', partOfSpeech: 'sustantivo', translation: 'Amenaza asimétrica', example: 'Unmanned aerial swarms represent a disruptive asymmetric threat.', tacticalTip: 'Capacidades de bajo costo que neutralizan sistemas de alta gama.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'Estructuras de Doble Negación Elegante y Litotes Estilístico',
        structureFormula: 'Sujeto + Verbo Negativo + Adjetivo con Prefijo Negativo (Not unfeasible / Not unlikely)',
        orderElements: [
          { position: 1, element: 'Sujeto', function: 'Propuesta evaluada', example: 'A winter counter-offensive' },
          { position: 2, element: 'Verbo Negativo', function: 'Atenuador', example: 'is not' },
          { position: 3, element: 'Adjetivo Negado', function: 'Afirmación matizada', example: 'unimaginable' },
          { position: 4, element: 'Condición', function: 'Requisito', example: 'provided supply lines remain intact.' }
        ],
        explanation: 'En los análisis de alta estrategia, el litotes ("not impossible", "not uncommon") expresa prudencia y rigor evitando aseveraciones dogmáticas.',
        examples: [
          { english: 'It is not impossible that the adversary might seek a negotiated ceasefire.', spanish: 'No es imposible que el adversario procure un cese del fuego negociado.' }
        ],
        commonMistakes: [
          { incorrect: 'It is not impossible nothing.', correct: 'It is not impossible that...', reason: 'Evitar dobles negaciones vulgares; el litotes es una figura estilística de atenuación.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'El Ritmo Acentual del Idioma Inglés (Stress-Timed Rhythm) en la Lectura Extensa',
        soundIpa: '/ˈstres taɪmd/',
        description: 'Principio por el cual el intervalo entre sílabas acentuadas se mantiene constante en la lectura fluida.',
        articulatoryGuide: 'Acelerar las sílabas no acentuadas y pronunciar con peso rítmico las palabras de contenido.',
        rules: [
          'El tiempo entre palabras tónicas es regular.',
          'Comprender este ritmo previene la fatiga en la lectura rápida de documentos estratégicos extensos.'
        ],
        practiceWords: [
          { word: 'unilateral', ipa: '/ˌjuːnɪˈlætrəl/', stressPattern: 'u-ni-LAT-e-ral', translation: 'unilateral' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Reconocimiento de Hipótesis Doctrinales en Ensayos Estratégicos',
        situation: 'Lectura de publicaciones del Colegio Superior de Guerra y centros de estudios militares.',
        phrases: [
          { english: 'The paradigm shift from attrition warfare to multi-domain dominance redefines command and control architectures.', spanish: 'El cambio de paradigma de la guerra de desgaste hacia el dominio multidominio redefine las arquitecturas de comando y control.', usageNote: 'Apertura de tesis doctrinal estratégica.', register: 'Formal / Táctico' }
        ]
      }
    ]
  }
};
