import { AxisTheoryModule } from '../../types';

export const speakingTheoryLevels: Record<number, AxisTheoryModule> = {
  1: {
    axis: 'speaking',
    levelNumber: 1,
    overview: 'Presentación formal ante el tribunal examinador militar, respuesta a preguntas de datos personales, descripción elemental de lugares y habilidades, y role play básico de recepción.',
    vocabulary: [
      {
        theme: 'Fórmulas de Saludo y Presentación Militar (Military Introductions)',
        description: 'Palabras de uso inmediato al ingresar a la sala de examen o saludar a un oficial examinador.',
        words: [
          { term: 'Good morning, Sir / Ma\'am', ipa: '/ɡʊd ˈmɔːnɪŋ sɜː / mæm/', partOfSpeech: 'saludo formal', translation: 'Buenos días, Señor / Señora', example: 'Good morning, Sir. Private Rossi reporting as instructed.', tacticalTip: 'Postura erguida, contacto visual directo y voz enérgica.' },
          { term: 'Spell', ipa: '/spel/', partOfSpeech: 'verbo', translation: 'Deletrear', example: 'I spell my surname: R-O-S-S-I, Romeo-Oscar-Sierra-Sierra-India.', tacticalTip: 'El tribunal suele solicitar el deletreo en la Fase A de la entrevista.' },
          { term: 'Origin / Hometown', ipa: '/ˈɒrɪdʒɪn / ˈhəʊmtaʊn/', partOfSpeech: 'sustantivo', translation: 'Lugar de origen / ciudad natal', example: 'My hometown is Cordoba, in the central region of Argentina.', tacticalTip: 'Describe provincia, paisaje y dimensiones básicas.' },
          { term: 'Service branch', ipa: '/ˈsɜːvɪs brɑːntʃ/', partOfSpeech: 'sustantivo', translation: 'Arma o servicio militar (Infantry, Cavalry, Artillery, Engineers, Signals)', example: 'I belong to the Infantry branch.', tacticalTip: 'Conocer de memoria la traducción exacta del arma de pertenencia.' }
        ]
      },
      {
        theme: 'Descripción de Habilidades y Tiempo Libre (Abilities & Leisure)',
        description: 'Términos para responder a la Fase B del examen oral (Monólogo guiado por fotos).',
        words: [
          { term: 'Swim / Swimming', ipa: '/swɪm / ˈswɪmɪŋ/', partOfSpeech: 'verbo / sustantivo', translation: 'Nadar / natación', example: 'I can swim very well; it is part of our combat physical training.', tacticalTip: 'Uso del modal "can" para expresar habilidad física.' },
          { term: 'Hike / Hiking', ipa: '/haɪk / ˈhaɪkɪŋ/', partOfSpeech: 'verbo / sustantivo', translation: 'Caminar en montaña / marcha a pie', example: 'In my free time, I enjoy hiking in the mountains.', tacticalTip: 'Actividad de recreación y marcha física de campaña.' },
          { term: 'Accommodation', ipa: '/əˌkɒməˈdeɪʃn/', partOfSpeech: 'sustantivo incontable', translation: 'Alojamiento / hospedaje', example: 'I would like to book single room accommodation for three nights.', tacticalTip: 'Término central para el Role Play de recepción de hotel (Fase C).' }
        ]
      }
    ],
    grammar: [
      {
        title: 'El Orden Sintáctico en Respuestas Orales Espontáneas (Subject-Verb Agreement)',
        structureFormula: 'Sujeto + Verbo en Forma Adecuada + Objeto + Complemento',
        orderElements: [
          { position: 1, element: 'Sujeto Explícito', function: 'Evitar omitir "I" o "He/She"', example: 'I / My father / The barracks' },
          { position: 2, element: 'Verbo Concordado', function: 'Concordancia de número y persona', example: 'am / lives / are' },
          { position: 3, element: 'Complemento', function: 'Información precisa solicitada', example: 'stationed in Campo de Mayo.' }
        ],
        explanation: 'En español es habitual omitir el sujeto ("Soy teniente", "Vivo en Buenos Aires"). En inglés oral, la omisión del pronombre ("*Am lieutenant*") es una falta gramatical que resta puntaje de inmediato en la rúbrica oficial.',
        examples: [
          { english: 'I am twenty-eight years old and I serve in the Signals Battalion.', spanish: 'Tengo veintiocho años y presto servicio en el Batallón de Comunicaciones.' }
        ],
        commonMistakes: [
          { incorrect: 'Have twenty-five years.', correct: 'I am twenty-five years old.', reason: 'La edad en inglés se expresa obligatoriamente con el verbo "to be" y sujeto "I".' },
          { incorrect: 'Live in Buenos Aires.', correct: 'I live in Buenos Aires.', reason: 'Nunca omitir el pronombre sujeto "I".' }
        ]
      },
      {
        title: 'Estructura de Preguntas Corteses en el Role Play (Polite Requests)',
        structureFormula: 'Could you please + Verbo en Base + Objeto? (O BIEN: May I have + Objeto?)',
        orderElements: [
          { position: 1, element: 'Fórmula de Cortesía', function: 'Abre la solicitud diplomática', example: 'Could you please / May I' },
          { position: 2, element: 'Verbo en Infinitivo sin to', function: 'Acción requerida', example: 'tell me / have' },
          { position: 3, element: 'Objeto de la Consulta', function: 'Servicio o dato solicitado', example: 'the Wi-Fi password / a receipt for the payment?' }
        ],
        explanation: 'En el Role Play con el examinador o con el compañero, el uso de "Could you" o "May I" en lugar de órdenes directas como "Give me" es fundamental para obtener la máxima nota en registro de interacción.',
        examples: [
          { english: 'Could you tell me what time breakfast is served, please?', spanish: '¿Podría decirme a qué hora se sirve el desayuno, por favor?' }
        ],
        commonMistakes: [
          { incorrect: 'Give me key.', correct: 'Could I have the room key, please?', reason: 'El trato oral directo sin modal suena descortés y agresivo en inglés.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'La Pronunciación de Vocales Críticas: SIR, LIEUTENANT y CORPS',
        soundIpa: '/sɜː/, /lefˈtenənt/, /kɔː/',
        description: 'Términos de tratamiento y jerarquía militar evaluados desde el primer segundo de la entrevista oral.',
        articulatoryGuide: 'SIR: vocal central larga no rótica /sɜː/ (no decir "ser" ni pronunciar una r vibrante española). LIEUTENANT: acento en la segunda sílaba y presencia del sonido /f/ en estándar británico.',
        rules: [
          'Sir: /sɜː/ con labios neutros y tono formal.',
          'Lieutenant: /lefˈtenənt/ (norma británica oficial IESE).',
          'Corps: la "p" y la "s" son mudas: se pronuncia exactamente /kɔː/.'
        ],
        practiceWords: [
          { word: 'Sir', ipa: '/sɜː/', stressPattern: 'Sir', translation: 'Señor (trato a superiores)' },
          { word: 'lieutenant', ipa: '/lefˈtenənt/', stressPattern: 'lieu-TEN-ant', translation: 'teniente' },
          { word: 'corps', ipa: '/kɔː/', stressPattern: 'corps', translation: 'cuerpo militar (ej. Army Air Corps)' }
        ]
      },
      {
        title: 'Entonación Ascendente vs Descendente en Preguntas (Intonation)',
        soundIpa: '/↗/ vs /↘/',
        description: 'Regla melódica universal para sonar natural y seguro ante el jurado.',
        articulatoryGuide: 'En preguntas que se responden por Sí/No (Yes/No questions), la voz sube al final /↗/. En preguntas con Wh- (Where, What, When), la voz baja al final /↘/.',
        rules: [
          'Are you an officer? /↗/ (Sube)',
          'Where do you live? /↘/ (Baja)'
        ],
        practiceWords: [
          { word: 'Can I help you?', ipa: '/kən aɪ help juː ↗/', stressPattern: 'Entonación ascendente', translation: '¿Puedo ayudarle?' },
          { word: 'What is your rank?', ipa: '/wɒt ɪz jɔː ræŋk ↘/', stressPattern: 'Entonación descendente', translation: '¿Cuál es su jerarquía?' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Entrada y Presentación Inicial ante el Tribunal Examinador',
        situation: 'Primer minuto de la prueba oral de Speaking en el IESE.',
        phrases: [
          { english: 'Good morning, Sir. I am Second Lieutenant Fernandez, ready for the oral examination.', spanish: 'Buenos días, Señor. Soy el Subteniente Fernández, listo para el examen oral.', usageNote: 'Presentación formal protocolar impecable.', register: 'Formal / Táctico' },
          { english: 'Excuse me, Sir, could you please repeat the question?', spanish: 'Disculpe, Señor, ¿podría repetir la pregunta, por favor?', usageNote: 'Fórmula reglamentaria si no se comprendió la consigna.', register: 'Formal / Táctico' }
        ]
      },
      {
        communicativeFunction: 'Frases para el Role Play de Recepción de Hotel / Mesa de Entradas',
        situation: 'Fase C del examen de Nivel 1: reserva y consultas de servicio.',
        phrases: [
          { english: 'Good afternoon. I have a reservation under the name of Perez for three nights.', spanish: 'Buenas tardes. Tengo una reserva a nombre de Pérez por tres noches.', usageNote: 'Apertura directa del role play.', register: 'Neutro' },
          { english: 'Does the room include a private bathroom and Wi-Fi access?', spanish: '¿La habitación incluye baño privado y acceso a Wi-Fi?', usageNote: 'Consulta de comodidades.', register: 'Neutro' },
          { english: 'May I pay by credit card or is cash preferred?', spanish: '¿Puedo abonar con tarjeta de crédito o prefieren efectivo?', usageNote: 'Pregunta de modalidad de pago.', register: 'Neutro' }
        ]
      }
    ]
  },
  2: {
    axis: 'speaking',
    levelNumber: 2,
    overview: 'Expresión Oral STANAG 6001 Nivel 2: Desenvolvimiento interactivo en situaciones de la vida cotidiana y profesional adaptando registros (formal, neutro, informal); relato de experiencias pasadas y exposición de planes futuros; descripción y comparación de personas, objetos, lugares y comodidades; recolección e intercambio de información (compras, restaurantes, hoteles, direcciones, salud); solicitud de auxilio en emergencias y declaración testimonial; y recursos de interacción (interrumpir con cortesía, pedir repetición o aclaración, y ayudar a otros a formular ideas).',
    vocabulary: [
      {
        theme: 'Interacción y Desenvolvimiento Cotidiano (Daily Social Transactions)',
        description: 'Léxico para compras, gastronomía, hotelería, salud y servicios de emergencia.',
        words: [
          { term: 'Customer service / Assistance', ipa: '/ˈkʌstəmə ˈsɜːvɪs / əˈsɪstəns/', partOfSpeech: 'sustantivos', translation: 'Atención al cliente / Asistencia o auxilio', example: 'Excuse me, could you give me some assistance with this ticket machine?', tacticalTip: 'Fórmula universal de apertura en transacciones comerciales.' },
          { term: 'Accident report / Emergency call', ipa: '/ˈæksɪdənt rɪˈpɔːt / ɪˈmɜːdʒənsi kɔːl/', partOfSpeech: 'sustantivos', translation: 'Parte de accidente / Llamada de auxilio al 999 o 911', example: 'The driver made an emergency call to report the multi-vehicle collision.', tacticalTip: 'Interacción perentoria con operadores de seguridad pública.' },
          { term: 'Preference / In my opinion', ipa: '/ˈprefrəns / ɪn maɪ əˈpɪnjən/', partOfSpeech: 'sustantivo y locución', translation: 'Preferencia / En mi opinión (argumentada)', example: 'My personal preference is the train because it is more punctual.', tacticalTip: 'Estructuras para justificar opiniones personales.' }
        ]
      },
      {
        theme: 'Descripción Geográfica, Vivienda y Entornos (Hometown & Housing)',
        description: 'Términos para describir la ciudad natal, barrios, viviendas y comparar entornos.',
        words: [
          { term: 'Inhabitants / Population', ipa: '/ɪnˈhæbɪtənts / ˌpɒpjuˈleɪʃn/', partOfSpeech: 'sustantivo', translation: 'Habitantes / población', example: 'My hometown has a population of approximately fifty thousand inhabitants.', tacticalTip: 'Dato demográfico básico para iniciar la descripción.' },
          { term: 'Surrounded by', ipa: '/səˈraʊndɪd baɪ/', partOfSpeech: 'frase participial', translation: 'Rodeado de / por', example: 'The town is surrounded by rolling green hills and wide rivers.', tacticalTip: 'Estructura descriptiva del paisaje circundante.' },
          { term: 'Amenities / Neighbourhood', ipa: '/əˈmiːnətiz / ˈneɪbəhʊd/', partOfSpeech: 'sustantivos', translation: 'Comodidades urbanas / Vecindario o barrio', example: 'The neighbourhood has excellent sports amenities, shops and schools.', tacticalTip: 'Descripción de infraestructura urbana y calidad de vida.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'El Orden en Estructuras Comparativas y Superlativas Orales',
        structureFormula: 'Sujeto A + to be + Adjetivo (-er / more + adj) + than + Sujeto B\nSuperlativo: the + -est / the most + adjetivo largo',
        orderElements: [
          { position: 1, element: 'Primer Elemento', function: 'Ciudad, persona u objeto comparado', example: 'Life in the capital' },
          { position: 2, element: 'Verbo to be', function: 'is much', example: 'is much' },
          { position: 3, element: 'Comparativo', function: 'Grado relativo regular o irregular', example: 'busier and more expensive' },
          { position: 4, element: 'than + Segundo Elemento', function: 'Término de comparación', example: 'than in my hometown.' }
        ],
        explanation: 'En las pruebas orales STANAG Nivel 2, los examinadores evalúan la capacidad de comparar opciones argumentando razones objetivas. Adjetivos cortos de 1 sílaba agregan -er (colder, cheaper); de 2 sílabas con -y pasan a -ier (easier); largos usan more (more comfortable). Superlativos llevan "the most" o terminación "-est".',
        examples: [
          { english: 'Public transport here is faster and more reliable than driving a car.', spanish: 'El transporte público aquí es más rápido y más confiable que conducir un automóvil (comparación argumentada).', notes: 'Comparativos con -er y con more.' }
        ],
        commonMistakes: [
          { incorrect: 'More big than...', correct: 'Bigger than...', reason: 'Los adjetivos monosilábicos nunca usan "more".' },
          { incorrect: 'Is more cheap.', correct: 'It is cheaper.', reason: '"Cheap" es monosilábico y requiere -er (cheaper).' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'El Sonido /h/ Aspirado Inicial en Inglés vs la "J" Española',
        soundIpa: '/h/ Glottal fricative',
        description: 'En inglés, palabras como "hotel", "hometown", "helicopter", "hospital" se pronuncian con una suave exhalación de aire glotal, no con la "j" áspera y velar del español.',
        articulatoryGuide: 'Exhalar aire cálido sobre la mano como si se empañara un cristal: /h/otel, /h/ome, /h/ealth.',
        rules: [
          'La /h/ es sorda y suave en hotel, hospital, huge, helmet.',
          'Es muda en excepciones históricas: hour /ˈaʊə/, honest /ˈɒnɪst/, honour /ˈɒnə/.'
        ],
        minimalPairs: [
          { word1: 'hat', ipa1: '/hæt/', word2: 'at', ipa2: '/æt/', meaning1: 'Sombrero', meaning2: 'En (preposición)' }
        ],
        practiceWords: [
          { word: 'hometown', ipa: '/ˈhəʊmtaʊn/', stressPattern: 'HOME-town', translation: 'ciudad natal' },
          { word: 'helicopter', ipa: '/ˈhelɪkɒptə/', stressPattern: 'HEL-i-cop-ter', translation: 'helicóptero' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Role-Play de Emergencias: Reportar Accidente o Incidente a la Policía',
        situation: 'Declaración oral como testigo o involucrado ante autoridades o servicios de emergencia.',
        phrases: [
          { english: 'I would like to report a road accident at the junction of High Street and Market Road. Two vehicles collided.', spanish: 'Quisiera reportar un accidente vial en la intersección de High Street y Market Road. Dos vehículos colisionaron.', usageNote: 'Declaración clara de lugar y naturaleza del siniestro.', register: 'Formal / Táctico' },
          { english: 'Please send an ambulance right away; one of the passengers has suffered a head injury and cannot move.', spanish: 'Por favor envíen una ambulancia de inmediato; uno de los pasajeros sufrió un golpe en la cabeza y no puede moverse.', usageNote: 'Solicitud fundamentada de asistencia sanitaria urgente.', register: 'Formal / Táctico' }
        ]
      },
      {
        communicativeFunction: 'Gestión de la Conversación: Interrumpir, Pedir Repetición y Ayudar a Otros',
        situation: 'Interacción dinámica durante el diálogo con el tribunal examinador o interlocutores angloparlantes.',
        phrases: [
          { english: 'Excuse me for interrupting, but do you mean we should leave immediately?', spanish: 'Disculpe por interrumpir, pero ¿quiere decir que deberíamos partir de inmediato?', usageNote: 'Interrupción cortés y verificación de significado.', register: 'Neutro' },
          { english: 'Sorry, I didn\'t catch that last point. Could you please rephrase it or speak a little slower?', spanish: 'Disculpe, no alcancé a captar ese último punto. ¿Podría reformularlo o hablar un poco más lento, por favor?', usageNote: 'Pedido constructivo de aclaración o reformulación.', register: 'Neutro' },
          { english: 'Are you trying to say that the schedule has been postponed until tomorrow morning?', spanish: '¿Estás intentando decir que el cronograma ha sido postergado hasta mañana por la mañana?', usageNote: 'Ayudar al interlocutor a clarificar o expresar su idea.', register: 'Neutro' }
        ]
      }
    ]
  },
  3: {
    axis: 'speaking',
    levelNumber: 3,
    overview: 'Expresión e Interacción Oral Intermedia: (1) Interacción fluida para expresar actitudes y hábitos de terceros; identificar, designar o elegir opciones; pedir y dar información; preguntar sobre actividades; expresar y justificar opiniones, acuerdos y desacuerdos; intercambiar puntos de vista; describir personas, objetos, situaciones cotidianas, lugares y hechos pasados; realizar sugerencias, propuestas y recomendaciones; formular intenciones, condiciones, causa-efecto, consecuencias y propósitos; cursar y responder invitaciones; pedir y otorgar permisos; describir procesos paso a paso; expresar obligación y ausencia de ella; y desenvolverse con soltura en situaciones de la vida cotidiana. (2) Producción oral mediante monólogos breves sobre temas de interés general y del ámbito militar (destinos, traslados de guarnición, misiones operacionales y rutinas de adiestramiento), y descripción y contraste comparativo de láminas visuales y situaciones concurrentes.',
    vocabulary: [
      {
        theme: 'Fórmulas de Interacción, Opinión, Sugerencia y Permiso',
        description: 'Léxico interactivo para sostener intercambios ágiles con examinadores e interlocutores.',
        words: [
          { term: 'In my honest opinion', ipa: '/ɪn maɪ ˈɒnɪst əˈpɪnjən/', partOfSpeech: 'frase discursiva', translation: 'En mi sincera opinión', example: 'In my honest opinion, military postings strengthen family resilience.', tacticalTip: 'Introducción cordial de una postura personal.' },
          { term: 'I see your point, but', ipa: '/aɪ siː jɔː pɔɪnt bʌt/', partOfSpeech: 'frase interactiva', translation: 'Entiendo tu punto de vista, pero...', example: 'I see your point, but relocating every two years is challenging for schooling.', tacticalTip: 'Desacuerdo matizado y diplomático.' },
          { term: 'Would you mind if I', ipa: '/wʊd juː maɪnd ɪf aɪ/', partOfSpeech: 'fórmula de permiso', translation: '¿Te importaría si yo... / ¿Me permitiría...?', example: 'Would you mind if I asked a question regarding the barracks schedule?', tacticalTip: 'Petición de permiso de máxima cortesía.' },
          { term: 'Why don\'t we / How about', ipa: '/waɪ dəʊnt wiː / haʊ əˈbaʊt/', partOfSpeech: 'fórmula de sugerencia', translation: '¿Por qué no... / ¿Qué tal si...?', example: 'Why don\'t we visit the theatre festival in Buenos Aires this weekend?', tacticalTip: 'Propuesta constructiva para actividades de ocio.' }
        ]
      },
      {
        theme: 'Términos de Producción Oral Militar: Destinos, Traslados y Entrenamiento',
        description: 'Vocabulario para monólogos sobre cambios de vida militar y adaptación profesional.',
        words: [
          { term: 'Change of station / Posting', ipa: '/tʃeɪndʒ əv ˈsteɪʃn / ˈpəʊstɪŋ/', partOfSpeech: 'sustantivo compuesto', translation: 'Pase a nuevo destino / Traslado de destino militar', example: 'My upcoming posting is to the 6th Mountain Infantry Regiment in Neuquén.', tacticalTip: 'Término estándar para las rotaciones periódicas de oficiales y suboficiales.' },
          { term: 'Acclimatization and field drill', ipa: '/əˌklaɪmətaɪˈzeɪʃn ənd fiːld drɪl/', partOfSpeech: 'frase sustantiva', translation: 'Aclimatación y ejercicio de adiestramiento en el terreno', example: 'Our training routine focuses on acclimatization to extreme cold weather.', tacticalTip: 'Fase de adaptación ambiental en nuevas unidades.' },
          { term: 'Relocation logistics', ipa: '/ˌriːləʊˈkeɪʃn ləˈdʒɪstɪks/', partOfSpeech: 'frase sustantiva', translation: 'Logística de mudanza y traslado familiar', example: 'Organizing the furniture transport took two weeks prior to departure.', tacticalTip: 'Gestión del traslado de vivienda y pertenencias.' },
          { term: 'Contrast between images', ipa: '/ˈkɒntrɑːst bɪˈtwiːn ˈɪmɪdʒɪz/', partOfSpeech: 'frase metodológica', translation: 'Contraste entre láminas / lámina A vs lámina B', example: 'While photo A depicts outdoor recreational sports, photo B highlights indoor cinema.', tacticalTip: 'Estructura comparativa directa en el examen oral.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'Formulación Oral de Obligación, Permiso, Condición y Procesos Paso a Paso',
        structureFormula: 'Obligación: must / have to / don\'t have to\nPermiso: May I / Could you\nCondición: If + Present, will + Base\nProcesos: First, then, subsequently, finally',
        orderElements: [
          { position: 1, element: 'Marcador Modal / Secuencial', function: 'Indica deber, ausencia de obligación o paso cronológico', example: 'All officers have to report at 0700; however, they don\'t have to wear dress uniform today.' },
          { position: 2, element: 'Estructura Condicional o de Propósito', function: 'Justificación o condición vinculada', example: 'If we finish the navigation exercise early, we will organize a cultural barbecue.' },
          { position: 3, element: 'Contraste de Hábitos de Terceros', function: 'used to vs usually / while others prefer...', example: 'Argentine soldiers usually drink mate in groups, whereas British peers tend to drink tea individually.' }
        ],
        explanation: 'En las evaluaciones orales de Nivel 3, el tribunal valora la variedad gramatical espontánea:\n1. Obligación vs Ausencia de Obligación: Diferenciar "must / have to" (obligación estricta) de "don\'t have to / needn\'t" (no es necesario, no hay obligación).\n2. Expresión de condiciones y causa-efecto: Uso fluido de "If you need transport, I can drive you" y "We changed our destination because the mountain pass was closed".\n3. Descripción de procesos: Describir cómo postular a un puesto de trabajo o cómo se realiza una mudanza de guarnición ("First, submit the inventory form; next, schedule the inspection...").\n4. Monólogo comparativo de láminas: Utilizar "In the first photograph... whereas in the second picture..." destacando similitudes y contrastes culturales.',
        examples: [
          { english: 'You don\'t have to bring your own survival gear; the mountain company provides all cold-weather kit.', spanish: 'No tienes que traer tu propio equipo de supervivencia; la compañía de montaña provee todo el equipamiento de clima frío (Ausencia de obligación).' },
          { english: 'Comparing the two pictures: both show people spending leisure time, but while the family in photo A is hiking outdoors, the group in photo B is attending a theatrical play in town.', spanish: 'Comparando las dos imágenes: ambas muestran personas disfrutando de su tiempo libre, pero mientras la familia en la foto A está haciendo senderismo al aire libre, el grupo en la foto B asiste a una obra de teatro en la ciudad (Comparación de láminas).' },
          { english: 'Could you tell me how to reach the military hospital from the city terminal, please?', spanish: '¿Podría decirme cómo llegar al hospital militar desde la terminal de la ciudad, por favor? (Pedido cortés de información).' }
        ],
        commonMistakes: [
          { incorrect: 'You don\'t have to smoke here.', correct: 'You mustn\'t smoke here / Smoking is forbidden.', reason: '"Don\'t have to" significa que no es obligatorio (es opcional); para prohibición taxativa se usa "mustn\'t".' },
          { incorrect: 'In the photo they are more happier.', correct: 'In the photo they seem happier / much happier.', reason: 'No se combina "more" con el sufijo comparativo "-ier".' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'Entonación en Preguntas Directas e Indirectas y Cortesía Social',
        soundIpa: '/kɜːtəsi ˌɪntəˈneɪʃn/',
        description: 'La melodía de la frase para sonar persuasivo, cooperativo y natural en diálogos formales e informales.',
        articulatoryGuide: 'En preguntas que requieren confirmación Sí/No, la entonación asciende al final (↗: "Would you like some tea? ↗"). En preguntas con palabras interrogativas Wh-, la entonación suele ser descendente (↘: "Where is the new battalion located? ↘").',
        rules: [
          'Yes/No questions: curva tonal ascendente final ↗.',
          'Wh- questions: curva tonal descendente final ↘.',
          'Formulaciones indirectas ("Could you tell me...") suavizan el tono y denotan cortesía institucional.'
        ],
        practiceWords: [
          { word: 'Could you please explain? ↗', ipa: '/kʊd juː pliːz ɪkˈspleɪn/', stressPattern: 'could you please ex-PLAIN (ascendente)', translation: '¿Podría explicar, por favor?' },
          { word: 'What do you recommend? ↘', ipa: '/wɒt duː juː ˌrekəˈmend/', stressPattern: 'what do you rec-om-MEND (descendente)', translation: '¿Qué recomienda?' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Monólogo sobre Traslados y Adaptación Militar (Brief Monologue)',
        situation: 'Exposición individual de 2 minutos ante el tribunal sobre la experiencia de cambio de destino.',
        phrases: [
          { english: 'I have served in three different garrisons throughout my career, from the northern border to the Patagonian plateau.', spanish: 'He servido en tres guarniciones diferentes a lo largo de mi carrera, desde la frontera norte hasta la meseta patagónica.', usageNote: 'Apertura con Present Perfect en monólogo personal.', register: 'Formal / Táctico' },
          { english: 'Although moving every few years presents challenges for family routine, it also provides valuable intercultural learning and strong bonds among fellow soldiers.', spanish: 'Aunque mudarse cada pocos años presenta desafíos para la rutina familiar, también brinda un valioso aprendizaje intercultural y fuertes lazos de camaradería.', usageNote: 'Desarrollo argumentativo con concesión y contraste.', register: 'Diplomático' }
        ]
      },
      {
        communicativeFunction: 'Debate Intercultural sobre Tiempo Libre y Tradiciones (Argentina vs Reino Unido)',
        situation: 'Intercambio de opiniones sobre diferencias culturales en pasatiempos y sistemas recreativos.',
        phrases: [
          { english: 'From what I understand, while British people frequently socialize in local pubs or gardening clubs after work, Argentines often organize late-evening family barbecues and shared mate circles.', spanish: 'Por lo que entiendo, mientras los británicos frecuentemente socializan en pubs locales o clubes de jardinería después del trabajo, los argentinos a menudo organizan asados familiares tardíos y rondas compartidas de mate.', usageNote: 'Comparación sociocultural contrastiva con vocabulario específico.', register: 'Diplomático' }
        ]
      }
    ]
  },
  4: {
    axis: 'speaking',
    levelNumber: 4,
    overview: 'Descripción y debate sobre temas de fondo guiados por fotos (Fase 2: libros impresos vs digitales / concentración musical), y negociación de consenso sobre artículos indispensables para un viaje de 6 meses a Inglaterra (Fase 3).',
    vocabulary: [
      {
        theme: 'Elementos de Supervivencia y Estudio en el Extranjero (UK Mission Items)',
        description: 'Términos oficiales para debatir la selección interactiva de los 8 elementos del examen Nivel IV.',
        words: [
          { term: 'Overcoat / Heavy coat', ipa: '/ˈəʊvəkəʊt/', partOfSpeech: 'sustantivo', translation: 'Sobretodo / abrigo pesado de invierno', example: 'A waterproof overcoat is essential to withstand the damp English winter.', tacticalTip: 'Elemento de protección térmica indispensable.' },
          { term: 'Compact umbrella', ipa: '/ˈkɒmpækt ʌmˈbrelə/', partOfSpeech: 'sustantivo', translation: 'Paraguas compacto / plegable', example: 'British rain is unpredictable, so a compact umbrella is indispensable.', tacticalTip: 'Herramienta de uso diario ante chubascos repentinos.' },
          { term: 'Underground / Tube map', ipa: '/ˈʌndəɡraʊnd mæp/', partOfSpeech: 'sustantivo', translation: 'Plano del metro de Londres (the Tube)', example: 'The Tube map allows effortless navigation across Greater London.', tacticalTip: 'Metro de Londres se llama tradicionalmente "the Tube".' },
          { term: 'Bilingual dictionary', ipa: '/baɪˈlɪŋɡwəl ˈdɪkʃənri/', partOfSpeech: 'sustantivo', translation: 'Diccionario bilingüe de bolsillo', example: 'A reliable dictionary helps clarify technical military terminology.', tacticalTip: 'Soporte académico permanente.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'Fórmulas de Negociación y Consenso Colaborativo (Negotiation & Consensus)',
        structureFormula: 'Propuesta: Shall we prioritize X? -> Contrapropuesta: While X is useful, Y is far more critical -> Consenso: So, we agree on X, Y and Z.',
        orderElements: [
          { position: 1, element: 'Fórmula de Apertura', function: 'Lanza el debate sobre un elemento', example: 'In my view, we should definitely include' },
          { position: 2, element: 'Elemento Propuesto', function: 'Objeto defendido', example: 'the warm overcoat and the backpack' },
          { position: 3, element: 'Justificación Funcional', function: 'Argumento de peso', example: 'because winter temperatures drop significantly.' }
        ],
        explanation: 'En la Fase 3 del Nivel IV, el objetivo no es imponer la propia opinión, sino negociar e interactuar con el compañero hasta arribar a un consenso sobre exactamente 3 elementos.',
        examples: [
          { english: 'I see your point about the camera, but surely our smartphones can take high-quality photos.', spanish: 'Entiendo tu punto sobre la cámara de fotos, pero ciertamente nuestros celulares pueden tomar fotos de alta calidad.' }
        ],
        commonMistakes: [
          { incorrect: 'I want this, this and this. Finished.', correct: 'What do you think about prioritizing the umbrella? Do you agree?', reason: 'El examen penaliza monologar sin dar pie al compañero a opinar.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'Pares Mínimos en la Argumentación Rápida: THINK vs SINK, THREE vs FREE',
        soundIpa: '/θ/ vs /s/, /θ/ vs /f/',
        description: 'La pronunciación de la "th" /θ/ es decisiva para no confundir "I think" con "I sink" (me hundo).',
        articulatoryGuide: 'Lengua entre los dientes para /θ/. Si se colocan los labios como para /f/, el examinador nativo percibirá un error fonético.',
        rules: [
          'Think: /θɪŋk/ (pienso / opino).',
          'Three items: /θriː ˈaɪtəmz/ (tres elementos).'
        ],
        practiceWords: [
          { word: 'think', ipa: '/θɪŋk/', stressPattern: 'think (/θ/)', translation: 'pensar / opinar' },
          { word: 'three', ipa: '/θriː/', stressPattern: 'three (/θ/)', translation: 'tres' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Llegar a un Consenso Diplomático en la Fase 3',
        situation: 'Negociación final entre los dos candidatos ante el jurado.',
        phrases: [
          { english: 'So, shall we conclude that the overcoat, the umbrella, and the backpack are our top three choices?', spanish: 'Entonces, ¿concluimos que el abrigo, el paraguas y la mochila son nuestras tres elecciones prioritarias?', usageNote: 'Fórmula perfecta para sellar el consenso.', register: 'Formal / Táctico' },
          { english: 'I completely agree with that selection; they cover daily survival, mobility, and weather protection.', spanish: 'Estoy completamente de acuerdo con esa selección; cubren la supervivencia diaria, movilidad y protección meteorológica.', usageNote: 'Respaldo fundado de la decisión.', register: 'Formal / Táctico' }
        ]
      }
    ]
  },
  5: {
    axis: 'speaking',
    levelNumber: 5,
    overview: 'Conversación de alto nivel sobre impacto de medios y medio ambiente (Sección 1), comparación y especulación sobre pares de fotos (Sección 2), y resolución colaborativa del Mapa Conceptual de Vacaciones Memorables con 5 nodos (Sección 3).',
    vocabulary: [
      {
        theme: 'Los 5 Nodos del Mapa Conceptual Oficial de Vacaciones Memorables',
        description: 'Conceptos del diagrama oficial del examen Nivel V para debatir factores clave.',
        words: [
          { term: 'Destination', ipa: '/ˌdestɪˈneɪʃn/', partOfSpeech: 'nodo conceptual', translation: 'Destino (paisaje, cultura, lejanía)', example: 'A remote destination stimulates curiosity and broadens cultural horizons.', tacticalTip: 'Nodo geográfico del mapa mental.' },
          { term: 'Budget', ipa: '/ˈbʌdʒɪt/', partOfSpeech: 'nodo conceptual', translation: 'Presupuesto y viabilidad financiera', example: 'A realistic budget dictates the boundaries of accommodation and transit.', tacticalTip: 'Nodo económico que condiciona las demás variables.' },
          { term: 'Activities', ipa: '/ækˈtɪvətiz/', partOfSpeech: 'nodo conceptual', translation: 'Actividades programadas vs espontáneas', example: 'Curated activities such as mountaineering create lasting experiential memories.', tacticalTip: 'Nodo vivencial de la experiencia de viaje.' },
          { term: 'Transport', ipa: '/ˈtrænspɔːt/', partOfSpeech: 'nodo conceptual', translation: 'Medios de transporte y conectividad', example: 'Efficient transport minimizes physical exhaustion during long transfers.', tacticalTip: 'Nodo logístico de desplazamiento.' },
          { term: 'Weather', ipa: '/ˈweðə/', partOfSpeech: 'nodo conceptual', translation: 'Condiciones meteorológicas y clima', example: 'Unfavourable weather can cancel planned outdoor excursions.', tacticalTip: 'Nodo ambiental no controlable.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'Estructuras de Especulación Compleja y Contraste en Pares de Fotografías',
        structureFormula: 'Whereas photo A portrays X, photo B highlights Y. They might be experiencing Z because...',
        orderElements: [
          { position: 1, element: 'Conector Contrastivo', function: 'Establece el contrapunto entre ambas imágenes', example: 'Whereas the first picture depicts' },
          { position: 2, element: 'Análisis de Imagen 1', function: 'Descripción de fondo', example: 'a solitary traveler gazing at cathedral vaults' },
          { position: 3, element: 'Contraste con Imagen 2', function: 'Contrapunto dinámico', example: 'the second photo captures energetic social interaction in a crowded train.' }
        ],
        explanation: 'En el Nivel V, el candidato no debe simplemente describir lo que ve de forma superficial, sino contrastar las motivaciones humanas, emociones y dinámicas psicológicas que subyacen en ambas fotos.',
        examples: [
          { english: 'Both scenes illustrate human connection, albeit through vastly different mediums.', spanish: 'Ambas escenas ilustran la conexión humana, si bien a través de medios sumamente distintos.' }
        ],
        commonMistakes: [
          { incorrect: 'Describir la foto 1 completamente y luego la foto 2 de forma aislada.', correct: 'Comparar y contrastar de manera entrelazada utilizando "Whereas", "In contrast" y "Similarly".', reason: 'La rúbrica evalúa la capacidad de síntesis comparativa.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'Modulación de Tono para Expresar Acuerdo Parcial y Diplomacia',
        soundIpa: '/ˌpɑːʃl əˈɡriːmənt/',
        description: 'Patrones entonacionales para disentir sin sonar confrontativo ante un colega u oficial superior.',
        articulatoryGuide: 'Subir levemente el tono en la concesión ("I agree with your point on budget /↗/") y bajarlo con calidez en la salvedad ("however, destination sets the vision /↘/").',
        rules: [
          'Uso de "Up to a point" con tono fluctuante para indicar acuerdo parcial.',
          'Pausas de medio segundo para demostrar que se ha procesado el argumento del interlocutor.'
        ],
        practiceWords: [
          { word: 'indispensable', ipa: '/ˌɪndɪˈspensəbl/', stressPattern: 'in-di-SPEN-sa-ble', translation: 'indispensable' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Defensa de Prioridades y Síntesis Final en el Mapa Conceptual',
        situation: 'Negociación final de la Sección 3 para elegir los 2 factores supremos de un viaje memorable.',
        phrases: [
          { english: 'I would propose Budget as the foundational prerequisite, and Activities as the experiential soul of the holiday.', spanish: 'Propondría el Presupuesto como el prerrequisito fundacional, y las Actividades como el alma vivencial de las vacaciones.', usageNote: 'Argumento filosófico y práctico de máxima elocuencia.', register: 'Formal / Táctico' },
          { english: 'I completely concur with that verdict. Budget sets the realistic boundaries, while curated activities create lifelong memories.', spanish: 'Coincido plenamente con ese veredicto. El presupuesto establece los límites realistas, mientras que las actividades programadas generan recuerdos imborrables.', usageNote: 'Cierre consensual perfecto.', register: 'Formal / Táctico' }
        ]
      }
    ]
  },
  6: {
    axis: 'speaking',
    levelNumber: 6,
    overview: 'Entrevista de alto nivel sobre liderazgo militar y vocación (Fase A), turno largo de análisis filosófico de fotografías complejas (Fase B), y deliberación colaborativa de Estado Mayor sobre el mapa conceptual (Fase C).',
    vocabulary: [
      {
        theme: 'Léxico de Liderazgo Estratégico y Cohesión Humana',
        description: 'Términos para la entrevista reflexiva y el monólogo de Nivel VI.',
        words: [
          { term: 'Ethos', ipa: '/ˈiːθɒs/', partOfSpeech: 'sustantivo', translation: 'Ethos militar / valores morales identitarios', example: 'The military ethos fosters selfless commitment to mission accomplishment.', tacticalTip: 'Conjunto de valores y conducta ética de una fuerza.' },
          { term: 'Esprit de corps', ipa: '/eˌspriː də ˈkɔː/', partOfSpeech: 'sustantivo de origen francés', translation: 'Espíritu de cuerpo / camaradería castrense', example: 'Shared hardships in training forge an unbreakable esprit de corps.', tacticalTip: 'Cohesión afectiva y moral entre los miembros de la unidad.' },
          { term: 'Indelible memory', ipa: '/ɪnˈdelɪbl ˈmeməri/', partOfSpeech: 'frase nominal', translation: 'Recuerdo indeleble / huella imborrable', example: 'Transformative journeys leave an indelible imprint upon personal character.', tacticalTip: 'Concepto clave para el cierre del mapa conceptual.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'Elaboración Sintáctica Compleja: Oraciones Concesivas Compuestas y Síntesis Dialéctica',
        structureFormula: 'While it is undeniable that X exerts significant influence, the decisive catalyst remains Y, given that Z.',
        orderElements: [
          { position: 1, element: 'Reconocimiento Concesivo', function: 'Valida la tesis opuesta', example: 'While it is undeniable that meticulous planning averts logistical collapse' },
          { position: 2, element: 'Tesis Principal', function: 'Introduce la perspectiva superadora', example: 'the true essence of leadership resides in adaptable improvisation' },
          { position: 3, element: 'Fundamento Filosófico', function: 'Justificación profunda', example: 'when unforeseen contingencies inevitably arise.' }
        ],
        explanation: 'En el nivel de maestría operacional STANAG 3+, el orador demuestra capacidad dialéctica: no descarta la opinión contraria, sino que la integra en una síntesis de orden superior.',
        examples: [
          { english: 'I wholeheartedly endorse your perspective on destination as the catalyst, provided that curated activities serve as the vehicle for meaningful engagement.', spanish: 'Respaldo de todo corazón su perspectiva sobre el destino como catalizador, siempre y cuando las actividades programadas sirvan como vehículo para el compromiso significativo.' }
        ],
        commonMistakes: [
          { incorrect: 'You are wrong, my idea is better.', correct: 'That is a compelling consideration; nonetheless, when viewed from a strategic perspective...', reason: 'En Nivel VI la diplomacia verbal y el respeto dialéctico son premisas absolutas.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'Dicción Impecable, Variación de Tempo y Pausas Tácticas en el Discurso',
        soundIpa: '/ˈdɪkʃn ænd ˈtæktɪkl ˈpɔːzɪz/',
        description: 'Control magistral de la velocidad de elocución para cautivar la atención del tribunal militar.',
        articulatoryGuide: 'Desacelerar el ritmo antes de una conclusión trascendente. Respiración costodiafragmática profunda sin jadeo audible.',
        rules: [
          'Evitar apresurarse al responder preguntas complejas; tomar una pausa de 2 segundos denota serenidad de mando.',
          'Articulación cristalina de todos los grupos consonánticos complejos (/kstr/, /mpl/, /ndʒ/).'
        ],
        practiceWords: [
          { word: 'catalyst', ipa: '/ˈkætəlɪst/', stressPattern: 'CAT-a-lyst', translation: 'catalizador' },
          { word: 'transformative', ipa: '/trænsˈfɔːmətɪv/', stressPattern: 'trans-FORM-a-tive', translation: 'transformador' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Síntesis Magistral de Consenso en la Fase C de Nivel VI',
        situation: 'Turno final de consenso colaborativo ante el tribunal examinador.',
        phrases: [
          { english: 'I would synthesize our deliberations by selecting Destination as the prime intellectual catalyst, and Activities as the practical vehicle for memorable engagement.', spanish: 'Sintetizaría nuestras deliberaciones seleccionando el Destino como el catalizador intelectual primordial, y las Actividades como el vehículo práctico para el compromiso memorable.', usageNote: 'Cierre dialéctico de máxima solvencia académica y militar.', register: 'Diplomático' },
          { english: 'I wholeheartedly endorse that conclusion. Destination inspires the vision, and curated activities crystallize it into an unforgettable chapter of life.', spanish: 'Suscribo de todo corazón esa conclusión. El destino inspira la visión, y las actividades programadas la cristalizan en un capítulo inolvidable de la vida.', usageNote: 'Fórmula de respaldo diplomático recíproco.', register: 'Diplomático' }
        ]
      }
    ]
  }
};
