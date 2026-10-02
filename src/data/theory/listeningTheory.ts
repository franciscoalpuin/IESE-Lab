import { AxisTheoryModule } from '../../types';

export const listeningTheoryLevels: Record<number, AxisTheoryModule> = {
  1: {
    axis: 'listening',
    levelNumber: 1,
    overview: 'Comprensión de avisos orales breves, instrucciones directas de cuartel, números, coordenadas, horas y alfabeto militar con articulación clara.',
    vocabulary: [
      {
        theme: 'Números, Fechas y Horas Militares (Numbers & Zulu Time)',
        description: 'Vocabulario esencial de alta frecuencia para decodificar horas operativas, coordenadas y días de servicio.',
        words: [
          { term: 'Hundred hours', ipa: '/ˈhʌndrəd aʊəz/', partOfSpeech: 'sustantivo', translation: 'Horas (ej. 0800 = zero eight hundred hours)', example: 'Briefing starts at zero eight hundred hours.', tacticalTip: 'En el ámbito militar las horas se leen de dos en dos dígitos.' },
          { term: 'Quarter past', ipa: '/ˈkwɔːtə pɑːst/', partOfSpeech: 'frase adverbial', translation: 'Y cuarto (15 min después)', example: 'The guard shift changes at a quarter past seven.', tacticalTip: 'Uso frecuente en conversaciones informales de cuartel.' },
          { term: 'Half past', ipa: '/hɑːf pɑːst/', partOfSpeech: 'frase adverbial', translation: 'Y media', example: 'Inspection is scheduled at half past six.', tacticalTip: 'La "l" en "half" es muda en inglés británico estándar (/hɑːf/).' },
          { term: 'Schedule', ipa: '/ˈʃedʒuːl/', partOfSpeech: 'sustantivo', translation: 'Horario, cronograma', example: 'Please confirm the daily training schedule.', tacticalTip: 'En inglés británico se pronuncia con /ʃ/ inicial, no /sk/.' }
        ]
      },
      {
        theme: 'Instrucciones Básicas de Puesto y Cuartel (Base Instructions)',
        description: 'Términos inmediatos escuchados en órdenes de formación y desplazamientos iniciales.',
        words: [
          { term: 'Checkpoint', ipa: '/ˈtʃekpɔɪnt/', partOfSpeech: 'sustantivo', translation: 'Puesto de control', example: 'Report immediately to Checkpoint Alpha.', tacticalTip: 'Identificado habitualmente por letras del alfabeto fonético.' },
          { term: 'Gate', ipa: '/ɡeɪt/', partOfSpeech: 'sustantivo', translation: 'Portón, guardia de acceso', example: 'Visitors must stop at the main gate.', tacticalTip: 'Punto crítico de identificación personal y vehicular.' },
          { term: 'Barracks', ipa: '/ˈbærəks/', partOfSpeech: 'sustantivo plural', translation: 'Cuartel, pabellón de tropas', example: 'Return to barracks before twenty-two hundred hours.', tacticalTip: 'Se usa comúnmente con terminación -s fija.' },
          { term: 'Parade ground', ipa: '/pəˈreɪd ɡraʊnd/', partOfSpeech: 'sustantivo', translation: 'Plaza de armas', example: 'Fall in on the parade ground for roll call.', tacticalTip: 'Espacio de formación y revista matutina.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'El Orden de los Elementos en Órdenes Directas (Imperativos)',
        structureFormula: 'Verbo en Infinitivo (sin "to") + Complemento Directo + Lugar / Tiempo',
        orderElements: [
          { position: 1, element: 'Verbo Base', function: 'Acción directa mandatoria', example: 'Halt! / Report / Secure' },
          { position: 2, element: 'Objeto / Complemento', function: 'Elemento sobre el que recae la orden', example: 'the perimeter / your ID' },
          { position: 3, element: 'Lugar / Tiempo', function: 'Circunstancia operativa', example: 'at the main gate immediately' }
        ],
        explanation: 'En las órdenes orales, el sujeto "you" se omite por completo. Para una orden negativa, se antepone estrictamente "Do not" o "Don\'t".',
        examples: [
          { english: 'Stand by for instructions.', spanish: 'Manténgase a la espera de instrucciones.', notes: 'Orden afirmativa típica en radio.' },
          { english: 'Do not cross the perimeter.', spanish: 'No cruce el perímetro.', notes: 'Orden prohibitiva con "Do not".' }
        ],
        commonMistakes: [
          { incorrect: 'You stand by.', correct: 'Stand by.', reason: 'El sujeto "you" no debe enunciarse en imperativos militares estándar.' },
          { incorrect: 'No enter the room.', correct: 'Do not enter the room.', reason: 'La negación de imperativo requiere el auxiliar "Do not", jamás "No" aislado.' }
        ]
      },
      {
        title: 'Estructura de Preguntas de Identificación y Ubicación (Wh- Questions)',
        structureFormula: 'Wh- Word + Auxiliar / Verbo to be + Sujeto + Complemento?',
        orderElements: [
          { position: 1, element: 'Palabra interrogativa', function: 'Indica el tipo de información requerida', example: 'Where / When / Who' },
          { position: 2, element: 'Verbo to be / Auxiliar', function: 'Concordancia con el sujeto', example: 'is / are / do' },
          { position: 3, element: 'Sujeto', function: 'Persona o elemento interrogado', example: 'the officer / the convoy' },
          { position: 4, element: 'Complemento', function: 'Especificación de estado o lugar', example: 'stationed?' }
        ],
        explanation: 'Al escuchar preguntas, identificar la primera palabra (Wh-) determina si el emisor busca un lugar (Where), tiempo (When) o persona (Who).',
        examples: [
          { english: 'Where is the medical tent?', spanish: '¿Dónde está la carpa médica?' },
          { english: 'What time is the morning muster?', spanish: '¿A qué hora es la formación matutina?' }
        ],
        commonMistakes: [
          { incorrect: 'Where the officer is?', correct: 'Where is the officer?', reason: 'Inversión obligatoria: el verbo precede al sujeto en preguntas.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'El Alfabeto Fonético de la OTAN (NATO Phonetic Alphabet)',
        soundIpa: '/ˈneɪtəʊ fəʊˈnetɪk/',
        description: 'Sistema internacional para deletrear palabras, códigos y matrículas sin ambigüedad en transmisiones orales con ruido de fondo.',
        articulatoryGuide: 'Articular cada palabra con fuerza explosiva en la sílaba acentuada. Enlaces vocálicos deben separarse tajantemente.',
        rules: [
          'A: ALFA /ˈælfə/ - Vocal abierta inicial.',
          'B: BRAVO /ˈbrɑːvəʊ/ - Acento en la primera sílaba.',
          'C: CHARLIE /ˈtʃɑːli/ - Oclusiva africada /tʃ/ clara.',
          'D: DELTA /ˈdeltə/ - Dental pura sin aspiración.'
        ],
        minimalPairs: [
          { word1: 'M (Mike)', ipa1: '/maɪk/', word2: 'N (November)', ipa2: '/nəʊˈvembə/', meaning1: 'Letra M', meaning2: 'Letra N' },
          { word1: 'B (Bravo)', ipa1: '/ˈbrɑːvəʊ/', word2: 'V (Victor)', ipa2: '/ˈvɪktə/', meaning1: 'Oclusiva bilabial /b/', meaning2: 'Fricativa labiodental /v/' }
        ],
        practiceWords: [
          { word: 'ALFA', ipa: '/ˈælfə/', stressPattern: 'AL-fa', translation: 'Letra A' },
          { word: 'TANGO', ipa: '/ˈtæŋɡəʊ/', stressPattern: 'TAN-go', translation: 'Letra T' },
          { word: 'SIERRA', ipa: '/siˈerə/', stressPattern: 'si-ER-ra', translation: 'Letra S' }
        ]
      },
      {
        title: 'Discriminación entre /iː/ (larga) e /ɪ/ (corta)',
        soundIpa: '/iː/ vs /ɪ/',
        description: 'Contraste vocálico decisivo en órdenes escuchadas (ej. "leave" vs "live", "ship" vs "sheep").',
        articulatoryGuide: 'Para /iː/ la comisura de los labios se estira como en una sonrisa tensa. Para /ɪ/ la mandíbula desciende ligeramente con labios relajados.',
        rules: [
          '/iː/ se representa en la ortografía habitualmente con ee, ea (meet, lead).',
          '/ɪ/ se representa habitualmente con la letra i entre consonantes (hit, sit, split).'
        ],
        minimalPairs: [
          { word1: 'leave', ipa1: '/liːv/', word2: 'live', ipa2: '/lɪv/', meaning1: 'Partir / abandonar', meaning2: 'Vivir' },
          { word1: 'reach', ipa1: '/riːtʃ/', word2: 'rich', ipa2: '/rɪtʃ/', meaning1: 'Alcanzar (coordenada)', meaning2: 'Rico' }
        ],
        practiceWords: [
          { word: 'briefing', ipa: '/ˈbriːfɪŋ/', stressPattern: 'BRIEF-ing', translation: 'Instrucción operacional' },
          { word: 'drill', ipa: '/drɪl/', stressPattern: 'drill', translation: 'Ejercicio de adiestramiento' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Recepción y Verificación de Radio (Radio Protocol)',
        situation: 'Transmisión oral de enlace entre operador y puesto de comando.',
        phrases: [
          { english: 'Say again your last transmission, over.', spanish: 'Repita su última transmisión, cambio.', usageNote: 'Obligatorio en radio. Nunca se usa "Repeat" (reservado para fuego artillero).', register: 'Formal / Táctico' },
          { english: 'Message received loud and clear.', spanish: 'Mensaje recibido fuerte y claro.', usageNote: 'Confirma volumen y legibilidad óptimos de la señal.', register: 'Formal / Táctico' },
          { english: 'Stand by, wait out.', spanish: 'Permanezca a la escucha, corto.', usageNote: 'Indica que se verificará el dato y se retomará el enlace.', register: 'Formal / Táctico' }
        ]
      },
      {
        communicativeFunction: 'Clarificación en Conversaciones Cara a Cara',
        situation: 'Reunión o instrucción militar presencial con un oficial instructor.',
        phrases: [
          { english: 'Could you spell your surname, please?', spanish: '¿Podría deletrear su apellido, por favor?', usageNote: 'Fórmula de cortesía británica estándar.', register: 'Neutro' },
          { english: 'I beg your pardon, Sir? Could you speak more slowly?', spanish: '¿Disculpe, Señor? ¿Podría hablar más despacio?', usageNote: 'Fórmula de máximo respeto militar.', register: 'Formal / Táctico' }
        ]
      }
    ]
  },
  2: {
    axis: 'listening',
    levelNumber: 2,
    overview: 'Comprensión Oral STANAG 6001 Nivel 2: Identificación del tema principal en textos orales claros a ritmo pausado; reconocimiento de secuencias cronológicas y marcadores temporales; discriminación de actos de habla y funciones comunicativas cotidianas (narración, descripción, aviso de emergencia, instrucción técnica); búsqueda selectiva de información general y específica (precios, horarios, números de vuelo, coordenadas); y comprensión de mensajes telefónicos grabados, partes meteorológicos y anuncios por altavoz o transmisiones.',
    vocabulary: [
      {
        theme: 'Tipologías y Canales de Transmisión Oral (Audio Formats & Announcements)',
        description: 'Vocabulario para identificar la fuente, el canal de difusión y la función del audio.',
        words: [
          { term: 'Recorded announcement / Voicemail', ipa: '/rɪˈkɔːdɪd əˈnaʊnsmənt / ˈvɔɪsmeɪl/', partOfSpeech: 'sustantivos', translation: 'Anuncio pregrabado por altavoz / Mensaje de correo de voz', example: 'Please listen to the voicemail message left by the medical officer.', tacticalTip: 'Audio típico de contestador o megafonía de terminales.' },
          { term: 'Weather bulletin / Live broadcast', ipa: '/ˈweðə ˈbʊlətɪn / laɪv ˈbrɔːdkɑːst/', partOfSpeech: 'sustantivos', translation: 'Boletín meteorológico / Transmisión en directo', example: 'The weather bulletin reports gale-force winds in the northern channel.', tacticalTip: 'Transmisión oral de datos fácticos y meteorológicos.' },
          { term: 'Automated prompt / Dial tone', ipa: '/ˈɔːtəmeɪtɪd prɒmpt / ˈdaɪəl təʊn/', partOfSpeech: 'sustantivos', translation: 'Menú telefónico automático / Tono de marcado', example: 'Press one for reservations or hold for the next available operator.', tacticalTip: 'Instrucciones en sistemas telefónicos IVR.' }
        ]
      },
      {
        theme: 'Condiciones Meteorológicas y Terreno (Weather & Terrain)',
        description: 'Léxico vital para comprender informes meteorológicos y estados de transitabilidad.',
        words: [
          { term: 'Visibility', ipa: '/ˌvɪzəˈbɪləti/', partOfSpeech: 'sustantivo', translation: 'Visibilidad', example: 'Visibility is reduced to less than two hundred metres.', tacticalTip: 'Parámetro determinante para operaciones de vuelo o transporte.' },
          { term: 'Precipitation', ipa: '/prɪˌsɪpɪˈteɪʃn/', partOfSpeech: 'sustantivo', translation: 'Precipitaciones, lluvia', example: 'Heavy precipitation expected after midnight.', tacticalTip: 'Término formal preferido en informes meteorológicos sobre "rain".' },
          { term: 'Muddy track', ipa: '/ˈmʌdi træk/', partOfSpeech: 'sustantivo', translation: 'Camino barrizal / huella lodosa', example: 'Wheeled vehicles cannot traverse the muddy track.', tacticalTip: 'Restricción típica de avance para vehículos terrestres.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'El Reconocimiento Auditivo de Secuencias Temporales y Cláusulas Temporales',
        structureFormula: 'Secuencia auditiva: First (...) -> Then (...) -> Next (...) -> Finally (...)\nCláusulas: As soon as (...) / When (...) / Before (...) / After (...)',
        orderElements: [
          { position: 1, element: 'Marcador auditivo clave', function: 'Indica en qué etapa del proceso se encuentra el audio', example: 'First of all / Before departing' },
          { position: 2, element: 'Acción primaria requerida', function: 'Instrucción o suceso inicial', example: 'inspect the tires and check communications' },
          { position: 3, element: 'Marcador consecutivo', function: 'Then / After that', example: 'then report to the dispatch office.' }
        ],
        explanation: 'En las pruebas de audición Nivel 2, el oyente debe filtrar información irrelevante y enfocarse en los conectores de tiempo para reconstruir la cronología exacta de los hechos reportados o de las instrucciones dadas.',
        examples: [
          { english: 'First, check your equipment; then, report to the flight line at 0630.', spanish: 'Primero, verifiquen su equipo; luego, preséntense en la línea de vuelo a las 0630 (orden secuencial).', notes: 'Reconocimiento de First y Then.' }
        ],
        commonMistakes: [
          { incorrect: 'Asumir que el primer dato mencionado en el audio es siempre el que ocurrió primero.', correct: 'Prestar atención a los conectores "before" y "after", ya que pueden invertir el orden en la frase.', reason: '"Before doing X, do Y" significa que Y se realiza en primer lugar.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'Las Tres Pronunciaciones del Pasado Regular (-ed endings en la Escucha)',
        soundIpa: '/t/, /d/, /ɪd/',
        description: 'Regla fonética obligatoria para reconocer si una acción escuchada ocurrió en pasado o es presente.',
        articulatoryGuide: 'Tocar la laringe: si la consonante previa hace vibrar las cuerdas vocales, la terminación es sonora /d/. Si es sorda, es /t/. Si termina en t o d, se agrega la sílaba extra /ɪd/.',
        rules: [
          'Tras sonidos sordos (/p, k, s, ʃ, tʃ, f/): se pronuncia /t/ (ej. checked /tʃekt/, stopped /stɒpt/).',
          'Tras sonidos sonoros (vocales y /b, ɡ, v, z, m, n, l, r/): se pronuncia /d/ (ej. secured /sɪˈkjʊəd/, ordered /ˈɔːdəd/).',
          'Tras /t/ o /d/: se agrega una sílaba completa /ɪd/ (ej. halted /ˈhɔːltɪd/, reported /rɪˈpɔːtɪd/).'
        ],
        minimalPairs: [
          { word1: 'checked', ipa1: '/tʃekt/', word2: 'report', ipa2: '/rɪˈpɔːt/', meaning1: 'Verificado (-ed como /t/)', meaning2: 'Informe' },
          { word1: 'halt', ipa1: '/hɔːlt/', word2: 'halted', ipa2: '/ˈhɔːltɪd/', meaning1: 'Alto (1 sílaba)', meaning2: 'Detenido (2 sílabas)' }
        ],
        practiceWords: [
          { word: 'briefed', ipa: '/briːft/', stressPattern: 'briefed (/t/)', translation: 'instruido' },
          { word: 'secured', ipa: '/sɪˈkjʊəd/', stressPattern: 'se-CURED (/d/)', translation: 'asegurado' },
          { word: 'commanded', ipa: '/kəˈmɑːndɪd/', stressPattern: 'com-MAND-ed (/ɪd/)', translation: 'comandado' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Decodificación de Avisos por Altavoz y Mensajes Telefónicos',
        situation: 'Escucha de megafonía en aeropuertos, estaciones o contestadores de servicio.',
        phrases: [
          { english: 'Attention all passengers: Flight BA 242 to London Heathrow is now boarding at Gate 14.', spanish: 'Atención todos los pasajeros: El vuelo BA 242 con destino a Londres Heathrow está abordando por la Puerta 14.', usageNote: 'Anuncio aeroportuario estándar; identificar número de vuelo y puerta.', register: 'Neutro' },
          { english: 'You have reached the military medical clinic. For emergency ambulance service, hang up and dial 999.', spanish: 'Se ha comunicado con la clínica médica militar. Para servicio de ambulancia de emergencia, corte y marque 999.', usageNote: 'Mensaje de central telefónica automática.', register: 'Formal / Táctico' }
        ]
      }
    ]
  },
  3: {
    axis: 'listening',
    levelNumber: 3,
    overview: 'Decodificación auditiva de textos orales de mediana extensión y complejidad (entrevistas laborales y de prensa, boletines informativos de radio y televisión, conferencias de divulgación científica, relatos de experiencias y cambios de vida, debates sobre salud, medio ambiente y vida militar): identificación precisa del tema principal, información puntual (números, fechas, requisitos), función comunicativa predominante, detección de actitudes y sentimientos del hablante (entusiasmo, frustración, cautela, determinación), y reconocimiento de relaciones lógicas (causa-efecto, condición, contraste, secuencia temporal, propósito y ejemplificación).',
    vocabulary: [
      {
        theme: 'Reconocimiento de Actitudes y Estados Afectivos del Hablante',
        description: 'Léxico y descriptores auditivos para inferir el tono emocional y la actitud en diálogos y monólogos.',
        words: [
          { term: 'Hesitant / Reluctant', ipa: '/ˈhezɪtənt / rɪˈlʌktənt/', partOfSpeech: 'adjetivos', translation: 'Vacilante, dubitativo / Reacio', example: 'The candidate sounded hesitant when asked about relocating overseas.', tacticalTip: 'Se percibe por pausas prolongadas y titubeos vocálicos (er... um...).' },
          { term: 'Confident / Determined', ipa: '/ˈkɒnfɪdənt / dɪˈtɜːmɪnd/', partOfSpeech: 'adjetivos', translation: 'Seguro de sí mismo / Determinado', example: 'The speaker expressed a determined attitude toward environmental conservation.', tacticalTip: 'Tono firme, entonación descendente categórica y dicción clara.' },
          { term: 'Frustrated / Disappointed', ipa: '/frʌˈstreɪtɪd / ˌdɪsəˈpɔɪntɪd/', partOfSpeech: 'adjetivos', translation: 'Frustrado / Decepcionado', example: 'Her tone sounded disappointed because the theatrical festival was postponed.', tacticalTip: 'Modulación plana y suspiros o exhalaciones audibles.' },
          { term: 'Supportive / Empathetic', ipa: '/səˈpɔːtɪv / ˌempəˈθetɪk/', partOfSpeech: 'adjetivos', translation: 'Solidario, comprensivo / Empático', example: 'The counselor adopted a supportive tone when advising on family relocation adjustments.', tacticalTip: 'Tono cálido con entonación suave y ascendente de aliento.' }
        ]
      },
      {
        theme: 'Marcadores Fonéticos de Función Comunicativa en Medios Orales',
        description: 'Pistas acústicas para discernir si el hablante está persuadiendo, advirtiendo, solicitando o informando.',
        words: [
          { term: 'Primary intention / Function', ipa: '/ˈpraɪməri ɪnˈtenʃn / ˈfʌŋkʃn/', partOfSpeech: 'sustantivo compuesto', translation: 'Intención primaria / Función comunicativa', example: 'The speaker\'s main function is to warn residents about contaminated river water.', tacticalTip: 'Distingue entre persuadir, advertir, relatar o dar instrucciones.' },
          { term: 'Specific detail extraction', ipa: '/spəˈsɪfɪk ˈdiːteɪl ɪkˈstrækʃn/', partOfSpeech: 'frase metodológica', translation: 'Extracción auditiva de datos específicos', example: 'Listen for the specific salary figure and relocation stipend mentioned in the interview.', tacticalTip: 'Focalizar la atención auditiva en números, lugares y fechas clave.' },
          { term: 'Contrasting cue', ipa: '/kənˈtrɑːstɪŋ kjuː/', partOfSpeech: 'frase auditiva', translation: 'Pista de contraste o viraje argumental', example: 'The acoustic cue "on the other hand" signals a shift in the speaker\'s opinion.', tacticalTip: 'Acento contrastivo de mayor intensidad en el marcador discursivo.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'Decodificación en Tiempo Real de Relaciones Lógicas y Cláusulas Condicionales en el Audio',
        structureFormula: 'Condición / Causa (If... / Because...) + Resultado Auditivo (modal will/would + consecuencia)',
        orderElements: [
          { position: 1, element: 'Marcador de Relación Lógica Auditivo', function: 'Indica si es condición, causa, o contraste', example: 'If / Provided that / Because / Consequently / In order to' },
          { position: 2, element: 'Proposición Base', function: 'Hecho o premisa', example: 'the military base reduces emissions by 20%' },
          { position: 3, element: 'Consecuencia Auditiva', function: 'Resultado proyectado', example: 'it will receive the national green sustainability award.' }
        ],
        explanation: 'En las grabaciones de nivel intermedio, las relaciones lógicas se expresan a menudo mediante formas elididas o conectores continuos:\n- Causa y consecuencia: "due to", "as a result of", "therefore", "that\'s why".\n- Condición: Cláusulas con "if" de 1er tipo ("If we recruit more engineers, we will complete the hospital") y 2do tipo hipotético ("If they invested more in theatre, youth participation would increase").\n- Propósito: "so that", "in order to".\n- Ejemplificación: "such as", "take for instance".',
        examples: [
          { english: 'Although public transport in London is very punctual, Argentine commuters often prefer informal social carpooling.', spanish: 'Aunque el transporte público en Londres es muy puntual, los viajeros argentinos a menudo prefieren compartir coche de forma informal (Contraste sociocultural).' },
          { english: 'The doctor recommended light gymnastics every morning so that the patient\'s lower back pain would subside.', spanish: 'El médico recomendó gimnasia liviana cada mañana para que el dolor lumbar del paciente disminuyera (Propósito).' }
        ],
        commonMistakes: [
          { incorrect: 'Confundir la condición ("If we secure the perimeter...") con una acción ya concretada.', correct: 'Distinguir entre hechos reales (Past Simple) e hipótesis condicionadas (Second Conditional: "If we had more time...").', reason: 'El uso de "would" o "could" indica situación no fáctica o hipotética.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'Entonación y Modulación Afectiva en Inglés (Intonation & Speaker Attitude)',
        soundIpa: '/ˌɪntəˈneɪʃn/',
        description: 'Cómo el contorno tonal revela certeza, duda, ironía o empatía.',
        articulatoryGuide: 'Prestar atención a los movimientos de tono en la última palabra acentuada de cada frase:\n- Tono descendente neto (Falling tone ↘): Certeza, orden, afirmación rotunda.\n- Tono ascendente-descendente (Rise-fall ↗↘): Sorpresa, convicción intensa, actitud enérgica.\n- Tono descendente-ascendente (Fall-rise ↘↗): Duda, advertencia, reserva o desacuerdo cortés.',
        rules: [
          'Una caída tonal abrupta al final de la oración transmite firmeza y determinación.',
          'Un tono ondulante descendente-ascendente (fall-rise) sugiere cautela o una objeción implícita: "Well, I sup↗pose so...".'
        ],
        practiceWords: [
          { word: 'Definitely! ↘', ipa: '/ˈdefɪnətli/', stressPattern: 'DEF-i-nite-ly (caída)', translation: '¡Definitivamente! (seguridad total)' },
          { word: 'Perhaps... ↘↗', ipa: '/pəˈhæps/', stressPattern: 'per-HAPS (fall-rise)', translation: 'Quizás... (duda o cautela)' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Reconocimiento de Preguntas de Examen sobre Actitud e Intención Auditiva',
        situation: 'Preguntas tipo STANAG / IESE sobre clips orales de entrevistas y debates.',
        phrases: [
          { english: 'What is the speaker\'s primary attitude towards moving to a new military garrison?', spanish: '¿Cuál es la actitud principal del hablante respecto a mudarse a una nueva guarnición militar?', usageNote: 'Pregunta sobre actitud y estado de ánimo del emisor.', register: 'Neutro' },
          { english: 'What relationship is established between air pollution in urban centres and respiratory health?', spanish: '¿Qué relación se establece entre la contaminación del aire en centros urbanos y la salud respiratoria?', usageNote: 'Pregunta sobre relación de causa y efecto en un reporte científico.', register: 'Formal / Táctico' },
          { english: 'According to the interviewee, why did he decide to pursue a theatrical career?', spanish: 'Según el entrevistado, ¿por qué decidió seguir una carrera teatral?', usageNote: 'Búsqueda de razón o propósito específico en un texto biográfico.', register: 'Neutro' }
        ]
      }
    ]
  },
  4: {
    axis: 'listening',
    levelNumber: 4,
    overview: 'Comprensión de briefings de Estado Mayor, órdenes preparatorias (WARNOs), debates tácticos y exposiciones con acentos regionales e internacionales.',
    vocabulary: [
      {
        theme: 'Planificación Estratégica y Conceptos de Misión',
        description: 'Términos de doctrina de nivel brigada y fuerza de tareas.',
        words: [
          { term: 'Course of Action (COA)', ipa: '/kɔːs əv ˈækʃn/', partOfSpeech: 'sustantivo', translation: 'Curso de acción (alternativa táctica)', example: 'The Commander selected Course of Action Two.', tacticalTip: 'Concepto central en el proceso de toma de decisiones militares (MDMP).' },
          { term: 'Contingency plan', ipa: '/kənˈtɪndʒənsi plæn/', partOfSpeech: 'sustantivo', translation: 'Plan de contingencia', example: 'Activate the contingency plan if the bridge is compromised.', tacticalTip: 'Medida prevista para eventos imprevistos.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'Estructuras Condicionales Complejas en Análisis de Riesgo',
        structureFormula: 'If + Past Perfect (Had + PP), Subject + Would have + Past Participle',
        orderElements: [
          { position: 1, element: 'Cláusula de Hipótesis', function: 'Situación hipotética pasada', example: 'If air support had arrived' },
          { position: 2, element: 'Cláusula Principal', function: 'Resultado hipotético no ocurrido', example: 'the objective would have been secured' },
          { position: 3, element: 'Complemento de Tiempo', function: 'Temporalidad del evento', example: 'hours earlier.' }
        ],
        explanation: 'En las conferencias militares de evaluación tras la acción (AAR), el Tercer Condicional se utiliza para evaluar qué hubiera sucedido bajo otras decisiones.',
        examples: [
          { english: 'If reconnaissance had detected the obstacle, the convoy would not have stalled.', spanish: 'Si el reconocimiento hubiera detectado el obstáculo, el convoy no se habría detenido.' }
        ],
        commonMistakes: [
          { incorrect: 'If we would have known, we had deployed earlier.', correct: 'If we had known, we would have deployed earlier.', reason: '"Would" jamás va en la cláusula de "If".' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'El "Connected Speech": Asimilación y Elisión en Transmisiones Rápidas',
        soundIpa: '/kəˈnektɪd spiːtʃ/',
        description: 'Unión y omisión de sonidos consonánticos en el habla británica militar veloz.',
        articulatoryGuide: 'La /t/ o /d/ final antes de otra consonante con frecuencia se elide (desaparece) en el habla rápida: "next target" suena como /neks ˈtɑːɡɪt/.',
        rules: [
          'Elisión de /t/ en grupos consonánticos: "must be" suena /mʌs bi/.',
          'Asimilación regresiva: "good morning" a menudo suena /ɡʊb ˈmɔːnɪŋ/.'
        ],
        practiceWords: [
          { word: 'hold back', ipa: '/həʊl bæk/ (elisión de /d/)', stressPattern: 'hold back', translation: 'contener el avance' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Decodificación de Evaluaciones de Estado Mayor',
        situation: 'Participación como oyente en un briefing de actualización de inteligencia.',
        phrases: [
          { english: 'The balance of probability suggests an enemy redeployment towards the north.', spanish: 'El balance de probabilidades sugiere un redespliegue enemigo hacia el norte.', usageNote: 'Fórmula británica de alta precisión analítica.', register: 'Diplomático' }
        ]
      }
    ]
  },
  5: {
    axis: 'listening',
    levelNumber: 5,
    overview: 'Comprensión crítica de debates doctrinales en Estados Mayores combinados OTAN, discursos diplomático-militares y negociaciones bilaterales.',
    vocabulary: [
      {
        theme: 'Doctrina de Coalición y Tratados Multilaterales',
        description: 'Léxico diplomático militar y de gestión de crisis internacionales.',
        words: [
          { term: 'Interoperability', ipa: '/ˌɪntərˌɒpərəˈbɪləti/', partOfSpeech: 'sustantivo', translation: 'Interoperabilidad', example: 'Standardised ammunition guarantees tactical interoperability.', tacticalTip: 'Capacidad de operar conjuntamente con fuerzas de otros países.' },
          { term: 'Rules of Engagement (ROE)', ipa: '/ruːlz əv ɪnˈɡeɪdʒmənt/', partOfSpeech: 'sustantivo plural', translation: 'Reglas de empeñamiento / enfrentamiento', example: 'The ROE strictly restrict the use of lethal force to self-defence.', tacticalTip: 'Directivas jurídicas que rigen el empleo de la fuerza.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'Inversión Sintáctica para Énfasis en Discursos Formales',
        structureFormula: 'Adverbio Negativo / Restrictivo + Auxiliar + Sujeto + Verbo Principal',
        orderElements: [
          { position: 1, element: 'Adverbio Restrictivo', function: 'Enfatiza la excepcionalidad', example: 'Seldom / Under no circumstances' },
          { position: 2, element: 'Verbo Auxiliar', function: 'Inversión obligatoria', example: 'have / will' },
          { position: 3, element: 'Sujeto', function: 'Elemento rector', example: 'coalition forces' },
          { position: 4, element: 'Verbo Principal', function: 'Acción principal', example: 'compromised on security.' }
        ],
        explanation: 'En alocuciones formales o exposiciones magistrales, la inversión formal eleva el registro y subraya la solemnidad de la directiva.',
        examples: [
          { english: 'Under no circumstances should the integrity of the border be breached.', spanish: 'Bajo ninguna circunstancia debe vulnerarse la integridad de la frontera.' }
        ],
        commonMistakes: [
          { incorrect: 'Under no circumstances coalition forces should retreat.', correct: 'Under no circumstances should coalition forces retreat.', reason: 'La inversión del auxiliar es mandatoria tras locuciones negativas iniciales.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'Entonación y Modulación en Debates y Persuasión Diplomática',
        soundIpa: '/ˌɪntəˈneɪʃn/',
        description: 'Patrones de tono ascendente y descendente que denotan certeza, duda o reserva diplomática.',
        articulatoryGuide: 'Un tono descendente final /↘/ denota orden o conclusión categórica. Un tono ascendente-descendente denota reserva ("I wouldn\'t say that... /↗↘/").',
        rules: [
          'Caída de tono /↘/ al final de declaraciones categóricas militares.',
          'Subida de tono leve /↗/ en oraciones concesivas antes de la cláusula principal.'
        ],
        practiceWords: [
          { word: 'compromise', ipa: '/ˈkɒmprəmaɪz/', stressPattern: 'COM-pro-mise', translation: 'acuerdo / ceder' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Identificación de Acuerdos y Matices en Reuniones de Mando',
        situation: 'Reunión de coordinación combinada entre comandantes de teatro.',
        phrases: [
          { english: 'While we concur with the broad objective, the timeline requires reassessment.', spanish: 'Si bien coincidimos con el objetivo general, el cronograma requiere reevaluación.', usageNote: 'Estructura diplomática de desacuerdo constructivo.', register: 'Diplomático' }
        ]
      }
    ]
  },
  6: {
    axis: 'listening',
    levelNumber: 6,
    overview: 'Comprensión e interpretación de oradores nativos con idiolectos sutiles, ironía, doble sentido, discursos geopolíticos y conferencias de doctrina de nivel estratégico.',
    vocabulary: [
      {
        theme: 'Estrategia Geopolítica y Teatros Multidominio',
        description: 'Terminología de doctrina militar de vanguardia y nivel estratégico operacional.',
        words: [
          { term: 'Attrition', ipa: '/əˈtrɪʃn/', partOfSpeech: 'sustantivo', translation: 'Desgaste progresivo (guerra de desgaste)', example: 'A prolonged war of attrition drains national industrial capacity.', tacticalTip: 'Estrategia basada en el agotamiento gradual del adversario.' },
          { term: 'Deterrence', ipa: '/dɪˈterəns/', partOfSpeech: 'sustantivo', translation: 'Disuasión estratégica', example: 'Credible conventional deterrence prevents conflict escalation.', tacticalTip: 'Pilar de la doctrina de defensa moderna.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'El Subjuntivo de Mando y Cláusulas Nominales Complejas (Mandative Subjunctive)',
        structureFormula: 'Sujeto + Verbo de Mando (Demand/Insist) + That + Sujeto + Verbo Base (sin "s" ni auxiliaries)',
        orderElements: [
          { position: 1, element: 'Autoridad Emisora', function: 'Órgano que promulga la orden', example: 'The General Staff' },
          { position: 2, element: 'Verbo de Mandato', function: 'Indica requerimiento absoluto', example: 'demands / insists' },
          { position: 3, element: 'Cláusula "that"', function: 'Enlace subordinado', example: 'that every commander' },
          { position: 4, element: 'Verbo en Forma Base', function: 'Subjuntivo estricto (no "complies")', example: 'comply immediately with the directive.' }
        ],
        explanation: 'En las directivas del más alto nivel de comando, se preserva el subjuntivo mandatorio inglés donde el verbo de la subordinada no conjuga tercera persona.',
        examples: [
          { english: 'It is imperative that the unit remain in position.', spanish: 'Es imperativo que la unidad permanezca en su posición (nótese "remain", no "remains").' }
        ],
        commonMistakes: [
          { incorrect: 'It is essential that he leaves now.', correct: 'It is essential that he leave now.', reason: 'El subjuntivo mandativo exige la forma base verbal sin la -s de tercera persona.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'Discriminación de Entonaciones Complejas y Matices Irónicos',
        soundIpa: '/kəmˈpleks ˌɪntəˈneɪʃn/',
        description: 'Capacidad de discernir sarcasmo, reticencia o énfasis sutil en debates del más alto nivel.',
        articulatoryGuide: 'El alargamiento de la vocal en palabras clave ("That is an... interesting /ɪːːntrəstɪŋ/ solution") indica duda o desacuerdo encubierto.',
        rules: [
          'Alargamiento vocálico para denotar escepticismo.',
          'Uso de pausas tácticas de silencio para enfatizar una conclusión inevitable.'
        ],
        practiceWords: [
          { word: 'sovereignty', ipa: '/ˈsɒvrənti/', stressPattern: 'SOV-rein-ty', translation: 'soberanía' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Decodificación de Posturas Estratégicas y Cláusulas de Salvaguarda',
        situation: 'Conferencia de ministros de defensa y cancillerías aliadas.',
        phrases: [
          { english: 'Without prejudice to existing bilateral treaties, we reaffirm our mutual security pact.', spanish: 'Sin perjuicio de los tratados bilaterales vigentes, reafirmamos nuestro pacto de seguridad mutua.', usageNote: 'Fórmula jurídica militar de validez universal.', register: 'Diplomático' }
        ]
      }
    ]
  }
};
