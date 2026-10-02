import { AxisTheoryModule } from '../../types';

export const writingTheoryLevels: Record<number, AxisTheoryModule> = {
  1: {
    axis: 'writing',
    levelNumber: 1,
    overview: 'Redacción de fichas personales militares, notas de servicio breves, mensajes de cuartel elementales y formularios de identificación con frases simples y ortografía precisa.',
    vocabulary: [
      {
        theme: 'Encabezados de Fichas y Notas de Servicio (Memo Headers & Forms)',
        description: 'Términos obligatorios en cualquier encabezado de mensaje formal de servicio.',
        words: [
          { term: 'Date of birth (DOB)', ipa: '/deɪt əv bɜːθ/', partOfSpeech: 'frase nominal', translation: 'Fecha de nacimiento', example: 'State your DOB in DD/MM/YYYY format.', tacticalTip: 'Formato británico militar: día primero, luego mes y año.' },
          { term: 'Next of kin (NOK)', ipa: '/nekst əv kɪn/', partOfSpeech: 'frase nominal', translation: 'Familiar más directo / contacto de emergencia', example: 'List your next of kin on your deployment form.', tacticalTip: 'Contacto obligatorio en fichas de legajo militar.' },
          { term: 'Blood group', ipa: '/blʌd ɡruːp/', partOfSpeech: 'sustantivo', translation: 'Grupo y factor sanguíneo', example: 'Blood group A Positive recorded on dog tags.', tacticalTip: 'Dato vital grabado en la chapa identificatoria.' },
          { term: 'Marital status', ipa: '/ˈmærɪtl ˈsteɪtəs/', partOfSpeech: 'sustantivo', translation: 'Estado civil (Single / Married / Divorced)', example: 'Specify your current marital status in box 4.', tacticalTip: 'Single = soltero; Married = casado.' }
        ]
      },
      {
        theme: 'Fórmulas Epistolares Iniciales (Basic Letter & Email Conventions)',
        description: 'Aperturas y cierres canónicos para mensajes escritos.',
        words: [
          { term: 'Dear Sir / Madam', ipa: '/dɪə sɜː / ˈmædəm/', partOfSpeech: 'saludo formal', translation: 'Estimado Señor / Señora', example: 'Dear Sir, I am writing to request leave.', tacticalTip: 'Saludo obligatorio cuando no se conoce el nombre del destinatario.' },
          { term: 'Yours faithfully', ipa: '/jɔːz ˈfeɪθfəli/', partOfSpeech: 'despedida formal', translation: 'Atentamente / Le saluda atentamente', example: 'Conclude formal letters with Yours faithfully.', tacticalTip: 'Se usa cuando la carta comenzó con Dear Sir / Madam.' },
          { term: 'Yours sincerely', ipa: '/jɔːz sɪnˈsɪəli/', partOfSpeech: 'despedida formal', translation: 'Cordialmente / Le saluda con consideración', example: 'Yours sincerely, Major Davies.', tacticalTip: 'Se usa cuando la carta comenzó con el nombre de la persona (Dear Major Davies).' }
        ]
      }
    ],
    grammar: [
      {
        title: 'Las 4 Fórmulas Canónicas de Puntuación y Mayúsculas en la Redacción Militar',
        structureFormula: 'Mayúscula Inicial + Sujeto + Verbo + Objeto + Complemento + Punto Final (.)',
        orderElements: [
          { position: 1, element: 'Mayúscula Obligatoria', function: 'Inicio de oración y nombres propios / rangos', example: 'Captain / Sergeant / The unit' },
          { position: 2, element: 'Sujeto Explícito', function: 'El pronombre o sustantivo no se puede omitir', example: 'I / We / The soldiers' },
          { position: 3, element: 'Verbo Conjugado', function: 'Acción', example: 'arrived / request' },
          { position: 4, element: 'Punto Final', function: 'Cierre obligatorio de cada idea completa', example: 'at base on time.' }
        ],
        explanation: 'En inglés, el pronombre "I" (yo) SIEMPRE se escribe con mayúscula, al igual que los días de la semana (Monday), meses (October) y rangos cuando anteceden a un apellido (Captain Perez).',
        examples: [
          { english: 'I am writing to report my new contact address.', spanish: 'Le escribo para informar mi nuevo domicilio de contacto.' }
        ],
        commonMistakes: [
          { incorrect: 'i write because i need...', correct: 'I am writing because I need...', reason: 'El pronombre "I" en minúscula es una falta grave en exámenes oficiales.' },
          { incorrect: 'Report to captain perez.', correct: 'Report to Captain Perez.', reason: 'Los rangos con apellido se escriben con mayúscula inicial.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'Correspondencia Grafema-Fonema y Letras Mudas en la Escritura (Silent Letters)',
        soundIpa: '/ˈsaɪlənt ˈletəz/',
        description: 'Letras que se escriben en inglés pero no se articulan al pronunciar.',
        articulatoryGuide: 'En la escritura militar, reconocer letras mudas previene errores ortográficos comunes al transcribir lo que se escucha.',
        rules: [
          'K muda antes de N: know, knee, knife /naɪf/.',
          'W muda antes de R: write /raɪt/, wrist, wrong.',
          'B muda final tras M: bomb /bɒm/, comb.',
          'L muda: half /hɑːf/, calm /kɑːm/.'
        ],
        practiceWords: [
          { word: 'knife', ipa: '/naɪf/', stressPattern: 'knife (k muda)', translation: 'cuchillo / bayoneta' },
          { word: 'write', ipa: '/raɪt/', stressPattern: 'write (w muda)', translation: 'escribir' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Fórmulas para Solicitar Permisos o Justificar Inasistencias',
        situation: 'Redacción de una nota de servicio solicitando licencia o justificando un retraso.',
        phrases: [
          { english: 'I am writing to request compassionate leave from 12 to 15 November.', spanish: 'Me dirijo a usted para solicitar licencia por razones particulares del 12 al 15 de noviembre.', usageNote: 'Fórmula epistolar reglamentaria.', register: 'Formal / Táctico' },
          { english: 'Please find attached my medical certificate.', spanish: 'Adjunto a la presente encontrará mi certificado médico.', usageNote: 'Fórmula para adjuntar documentación.', register: 'Formal / Táctico' }
        ]
      }
    ]
  },
  2: {
    axis: 'writing',
    levelNumber: 2,
    overview: 'Expresión Escrita STANAG 6001 Nivel 2: Transferencia de información de textos a formularios oficiales (datos personales, incidentes, aduana); redacción breve y coherente con ortografía y puntuación precisas; narración de hechos y experiencias pasadas (agradables o desagradables) con conectores cronológicos; redacción de biografías sencillas de familiares o personalidades; y cartas, correos electrónicos informales y notas de servicio sobre temas cotidianos y laborales.',
    vocabulary: [
      {
        theme: 'Formularios Oficiales y Transferencia de Datos (Form Filling & Personal Details)',
        description: 'Campos estandarizados en formularios consulares, policiales, médicos y de guarnición.',
        words: [
          { term: 'Block capitals / In full', ipa: '/blɒk ˈkæpɪtlz / ɪn fʊl/', partOfSpeech: 'instrucción escrita', translation: 'Letra de imprenta mayúscula / En forma completa', example: 'Please complete the registration form in block capitals.', tacticalTip: 'Instrucción clásica en la cabecera de todo formulario.' },
          { term: 'Next of kin', ipa: '/nekst əv kɪn/', partOfSpeech: 'sustantivo', translation: 'Familiar más cercano / Contacto de emergencia', example: 'State the name, relationship and telephone number of your next of kin.', tacticalTip: 'Campo obligatorio en fichas de servicio y médicas.' },
          { term: 'Incident description / Chronology', ipa: '/ˈɪnsɪdənt dɪˈskrɪpʃn / krəˈnɒlədʒi/', partOfSpeech: 'sustantivos', translation: 'Descripción del incidente / Cronología de los hechos', example: 'Provide a concise chronology of the collision in section four.', tacticalTip: 'Campo para el relato de accidentes viales o pérdidas de material.' },
          { term: 'Signature / Date of declaration', ipa: '/ˈsɪɡnətʃə / deɪt əv ˌdekləˈreɪʃn/', partOfSpeech: 'sustantivos', translation: 'Firma / Fecha de la declaración', example: 'Affix your signature and the current date at the bottom of the page.', tacticalTip: 'Cierre vinculante de todo formulario oficial.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'Estructura de la Narración de Hechos Pasados (Past Narrative: Past Simple & Continuous)',
        structureFormula: 'Introducción contextual (Past Continuous / There was/were) + Nudo del suceso (Past Simple) + Resolución y Consecuencia (So / Because)',
        orderElements: [
          { position: 1, element: '1. CONTEXTO INICIAL', function: 'Establece cuándo, dónde y qué estaba ocurriendo', example: 'Last Friday morning, while we were travelling to the training area,' },
          { position: 2, element: '2. SUCESO PRINCIPAL', function: 'Introduce el hecho imprevisto en Pasado Simple', example: 'our vehicle broke down on Highway 9.' },
          { position: 3, element: '3. SECUENCIA DE ACCIONES', function: 'First, Then, After that con verbos en pasado', example: 'First, we secured the perimeter; then, the driver called the breakdown service.' },
          { position: 4, element: '4. DESENLACE', function: 'Resultado final y estado de las personas', example: 'Fortunately, nobody was hurt, and the relief truck arrived within an hour.' }
        ],
        explanation: 'En los exámenes STANAG de expresión escrita Nivel 2, el texto narrativo debe combinar armónicamente el Pasado Continuo para la acción de fondo con el Pasado Simple para las acciones consecutivas, enlazadas por conectores temporales claros.',
        examples: [
          { english: 'While I was waiting for the train, I met an old school friend. We decided to have coffee together.', spanish: 'Mientras esperaba el tren, me encontré con un viejo amigo de la escuela. Decidimos tomar un café juntos (experiencia agradable).', notes: 'Alternancia de tiempos verbales en relato de experiencia.' }
        ],
        commonMistakes: [
          { incorrect: 'Redactar todo el relato usando únicamente el Presente o mezclar tiempos sin justificación.', correct: 'Mantener la coherencia en tiempo pasado para hechos históricos o sucesos concluidos.', reason: 'La consistencia temporal es evaluada estrictamente.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'Puntuación y Fonética Subvocal: La Coma tras Frases Adverbiales Introductorias',
        soundIpa: '/ˈkɒmə/',
        description: 'Uso de la coma en la escritura que marca una micropausa respiratoria en la lectura.',
        articulatoryGuide: 'Toda locución adverbial al inicio de una oración escrita (However, Consequently, On 14 October, Last summer,) debe ir seguida de coma.',
        rules: [
          'On 12 March 2026, ...',
          'Furthermore, ...',
          'In conclusion, ...'
        ],
        practiceWords: [
          { word: 'furthermore', ipa: '/ˌfɜːðəˈmɔː/', stressPattern: 'fur-ther-MORE', translation: 'además / asimismo' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Redacción de Correos Electrónicos Informales y Notas Breves',
        situation: 'Escribir a un amigo, colega o familiar informando sobre planes, vacaciones o novedades.',
        phrases: [
          { english: 'Dear Peter, / Hi Sarah, I hope this email finds you well. I am writing to let you know about our recent trip.', spanish: 'Estimado Peter: / Hola Sarah: Espero que este correo te encuentre bien. Te escribo para contarte sobre nuestro viaje reciente.', usageNote: 'Apertura cordial para correos informales.', register: 'Neutro' },
          { english: 'I would love to catch up soon. Let me know if you are free next weekend. Best regards / All the best,', spanish: 'Me encantaría ponernos al día pronto. Avísame si estás libre el próximo fin de semana. Saludos cordiales / Un gran abrazo,', usageNote: 'Fórmulas de despedida estándar en correspondencia informal.', register: 'Neutro' },
          { english: 'Please find attached the completed application form and a copy of my passport.', spanish: 'Adjunto encontrará el formulario de solicitud completado y una copia de mi pasaporte.', usageNote: 'Nota formal de envío de documentación.', register: 'Formal / Táctico' }
        ]
      }
    ]
  },
  3: {
    axis: 'writing',
    levelNumber: 3,
    overview: 'Producción escrita estructurada de nivel intermedio: redacción de narraciones sobre experiencias de vida, viviendas, hábitos pasados y presentes, planes y expectativas; cartas o correos electrónicos informales; cartas y correos formales (solicitud o provisión de información sobre productos/servicios y cartas de postulación laboral / cover letters); y textos autobiográficos o biografías de terceros con conectores cronológicos y de causa-efecto.',
    vocabulary: [
      {
        theme: 'Estructura de Cartas y Correos Formales de Postulación e Información',
        description: 'Fórmulas de apertura, desarrollo protocolar y cierre para correspondencia formal y laboral.',
        words: [
          { term: 'I am writing to apply for', ipa: '/aɪ əm ˈraɪtɪŋ tuː əˈplaɪ fɔː/', partOfSpeech: 'fórmula de apertura', translation: 'Me dirijo a usted para postularme al puesto de...', example: 'I am writing to apply for the position of Military Logistics Coordinator advertised on your portal.', tacticalTip: 'Declaración directa del propósito de la carta.' },
          { term: 'Curriculum Vitae attached', ipa: '/kəˌrɪkjələm ˈviːtaɪ əˈtætʃt/', partOfSpeech: 'frase formal', translation: 'Currículum vitae adjunto', example: 'Please find attached my Curriculum Vitae outlining my operational qualifications and command history.', tacticalTip: 'Referencia a la documentación adjunta.' },
          { term: 'With reference to your advertisement', ipa: '/wɪð ˈrefrəns tuː jɔːr ədˈvɜːtɪsmənt/', partOfSpeech: 'frase formal', translation: 'Con referencia a su anuncio / publicación', example: 'With reference to your advertisement in the Defence Gazette, I would like to request further details.', tacticalTip: 'Fórmula estándar de remisión a una fuente.' },
          { term: 'Yours sincerely / Yours faithfully', ipa: '/jɔːz sɪnˈsɪəli / jɔːz ˈfeɪθfəli/', partOfSpeech: 'fórmula de despedida', translation: 'Le saluda atentamente / Suyo afectísimo', example: 'Use "Yours sincerely" when you know the recipient\'s name, and "Yours faithfully" when beginning with "Dear Sir/Madam".', tacticalTip: 'Regla áurea de la correspondencia británica formal.' }
        ]
      },
      {
        theme: 'Marcadores de Narración Autobiográfica y Biografías de Terceros',
        description: 'Léxico para organizar hechos biográficos, vivienda, cambios de destino y trayectorias.',
        words: [
          { term: 'Early life and background', ipa: '/ˈɜːli laɪf ənd ˈbækɡraʊnd/', partOfSpeech: 'encabezado temático', translation: 'Primeros años y antecedentes familiares', example: 'Her early life and background shaped her dedication to humanitarian engineering.', tacticalTip: 'Párrafo introductorio de una biografía.' },
          { term: 'Career milestone', ipa: '/kəˈrɪə ˈmaɪlstəʊn/', partOfSpeech: 'sustantivo compuesto', translation: 'Hito o logro profesional', example: 'A decisive career milestone occurred when he took command of the Mountain Battalion.', tacticalTip: 'Punto de inflexión en la trayectoria.' },
          { term: 'Current expectations', ipa: '/ˈkʌrənt ˌekspekˈteɪʃnz/', partOfSpeech: 'sustantivo plural', translation: 'Expectativas actuales y planes futuros', example: 'My current expectations include mastering technical English for joint peacekeeping missions.', tacticalTip: 'Proyección futura del postulante o protagonista.' },
          { term: 'Adaptation to quarters', ipa: '/ˌædæpˈteɪʃn tə ˈkwɔːtəz/', partOfSpeech: 'frase sustantiva', translation: 'Adaptación a la nueva vivienda o guarnición', example: 'The narrative describes the family\'s rapid adaptation to military quarters in Patagonia.', tacticalTip: 'Descripción de condiciones de vivienda y cambio de vida.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'La Progresión Párrafo a Párrafo en Textos Narrativos y Cartas Formales',
        structureFormula: 'Párrafo 1: Propósito / Introducción -> Párrafo 2: Antecedentes / Experiencia -> Párrafo 3: Expectativas / Cierre',
        orderElements: [
          { position: 1, element: 'Salutation & Opening Statement', function: 'Dear Mr. Smith / Dear Sir or Madam + motivo de la carta', example: 'Dear Colonel Davies, I am writing to apply for the position of...' },
          { position: 2, element: 'Narrative Body (Past & Present)', function: 'Desarrollo cronológico con Present Perfect y Past Simple', example: 'For the past three years, I have served as an operations officer... In 2022, I completed...' },
          { position: 3, element: 'Conclusion & Sign-off', function: 'Expectativas futuras, agradecimiento y fórmula protocolar', example: 'I look forward to hearing from you. Yours sincerely, Captain Rossi.' }
        ],
        explanation: 'En las composiciones del Nivel 3, se evalúa la coherencia y cohesión textual:\n- Cartas informales: Saludo afectuoso ("Dear Mark,"), preguntas de cortesía sobre la familia y la salud, descripción de la nueva vivienda y hábitos cotidianos en la guarnición, anécdotas en pasado usando Past Simple y Continuous, planes futuros ("I am going to visit...") y despedida cercana ("All the best,", "Keep in touch,").\n- Cartas formales de postulación (Cover Letter) o solicitud de información: Tratamiento formal, uso de voz pasiva ("I was awarded"), justificación de competencias ("I am experienced in..."), y despedida formal ("Yours sincerely," si se conoce el nombre / "Yours faithfully," si es anónimo "Dear Sir/Madam").\n- Biografías: Estructura cronológica apoyada en conectores de tiempo ("Initially", "Later on", "Subsequently", "In the end").',
        examples: [
          { english: 'Dear Captain Campbell, I am writing to express my strong interest in joining the multinational logistics task force.', spanish: 'Estimada Capitán Campbell: Le escribo para manifestar mi firme interés en incorporarme al grupo de tareas de logística multinacional.' },
          { english: 'During my posting to the southern brigade, I was responsible for coordinating fuel deliveries across harsh terrain.', spanish: 'Durante mi destino en la brigada del sur, fui responsable de coordinar las entregas de combustible en terreno inhóspito.' },
          { english: 'I have attached my academic transcripts and letters of recommendation for your consideration.', spanish: 'He adjuntado mis analíticos académicos y cartas de recomendación para su consideración.' }
        ],
        commonMistakes: [
          { incorrect: 'Dear Sir, ... Yours sincerely,', correct: 'Dear Sir, ... Yours faithfully,', reason: 'Si la carta comienza con "Dear Sir" o "Dear Madam", la despedida reglamentaria es "Yours faithfully". "Yours sincerely" se usa cuando se conoce el apellido.' },
          { incorrect: 'I am writing you for ask a job.', correct: 'I am writing to you to apply for a job.', reason: 'La preposición "to" acompaña a "writing to you", y la postulación formal se formula como "to apply for a job".' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'Convenciones de Puntuación y Enlace en la Redacción (Punctuation & Capitalization)',
        soundIpa: '/ˌpʌŋktʃuˈeɪʃn/',
        description: 'Normas ortográficas de mayúsculas, comas y signos de puntuación en cartas y ensayos en inglés.',
        articulatoryGuide: 'La puntuación en la escritura refleja las pausas del habla. Aplique coma obligatoria tras frases adverbiales introductorias: "In 2021, ...", "Furthermore, ...", "Although we were tired, ...".',
        rules: [
          'Los días de la semana, meses e idiomas SIEMPRE llevan mayúscula inicial: Monday, October, English, Spanish.',
          'Las fórmulas de saludo y despedida llevan coma final: "Dear Major Evans," / "Yours sincerely,".'
        ],
        practiceWords: [
          { word: 'furthermore,', ipa: '/ˌfɜːðəˈmɔː/', stressPattern: 'FUR-ther-more (pausa escrita)', translation: 'además / asimismo' },
          { word: 'in conclusion,', ipa: '/ɪn kənˈkluːʒn/', stressPattern: 'in con-CLU-sion (pausa escrita)', translation: 'en conclusión' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Fórmulas Canónicas para Redactar Cartas Informales y Formales',
        situation: 'Correspondencia epistolar y electrónica en contextos cotidianos, profesionales o de postulación.',
        phrases: [
          { english: 'Thanks a lot for your last letter; it was wonderful to hear all your news after our military posting to the south.', spanish: 'Muchas gracias por tu última carta; fue maravilloso saber de ti tras nuestro traslado militar al sur.', usageNote: 'Apertura de carta informal entre amigos o camaradas.', register: 'Neutro' },
          { english: 'I would be grateful if you could send me detailed brochures regarding the accommodations and schooling facilities near the base.', spanish: 'Le agradecería si pudiera enviarme folletos detallados respecto a las viviendas y las escuelas cercanas a la base.', usageNote: 'Solicitud formal de información de servicios.', register: 'Formal / Táctico' },
          { english: 'I believe my ten years of active field experience make me a highly qualified candidate for this supervisory role.', spanish: 'Considero que mis diez años de experiencia activa en campaña me convierten en un candidato altamente calificado para esta función de supervisión.', usageNote: 'Fundamentación de aptitud en carta de presentación laboral (cover letter).', register: 'Formal / Táctico' }
        ]
      }
    ]
  },
  4: {
    axis: 'writing',
    levelNumber: 4,
    overview: 'Redacción de órdenes preparatorias formales (Warning Orders), directivas de operaciones de Estado Mayor, ensayos argumentativos y análisis de alternativas tácticas.',
    vocabulary: [
      {
        theme: 'Términos de Órdenes Preparatorias (WARNO Structure)',
        description: 'Léxico para alertar a las unidades subordinadas sobre una operación inminente.',
        words: [
          { term: 'WARNING ORDER (WARNO)', ipa: '/ˈwɔːnɪŋ ˈɔːdə/', partOfSpeech: 'documento militar', translation: 'Orden preparatoria / orden de alerta', example: 'Issue WARNO Number 03 to all company commanders.', tacticalTip: 'Permite a las tropas iniciar los preparativos mientras se redacta la orden completa.' },
          { term: 'Time of Departure (TOD)', ipa: '/taɪm əv dɪˈpɑːtʃə/', partOfSpeech: 'frase nominal', translation: 'Hora de partida / salida', example: 'TOD is firmly fixed at 0400Z.', tacticalTip: 'Hora de inicio del movimiento táctico.' },
          { term: 'Line of Departure (LD)', ipa: '/laɪn əv dɪˈpɑːtʃə/', partOfSpeech: 'frase nominal', translation: 'Línea de partida / inicio de ataque', example: 'Cross the Line of Departure without delay.', tacticalTip: 'Línea del terreno a partir de la cual se inicia la maniobra.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'Conectores Contrastivos y Argumentativos de Nivel Avanzado',
        structureFormula: 'Premisa A. In contrast / Whereas / On the other hand, Premisa B.',
        orderElements: [
          { position: 1, element: 'Alternativa 1', function: 'Exposición del curso de acción A', example: 'Course of Action 1 ensures maximum speed across the open plain;' },
          { position: 2, element: 'Conector de Transición', function: 'Marca contraste crítico', example: 'however, it exposes the armor to enemy anti-tank fire.' },
          { position: 3, element: 'Alternativa 2', function: 'Exposición de la contrapropuesta', example: 'Conversely, Course of Action 2 secures defiladed approaches.' }
        ],
        explanation: 'En los ensayos y apreciaciones tácticas (COA Analysis), el uso preciso de conectores como "Conversely", "Whereas" y "Notwithstanding" otorga el tono analítico riguroso exigido en el nivel 3 STANAG.',
        examples: [
          { english: 'Notwithstanding adverse weather conditions, the airborne drop achieved complete surprise.', spanish: 'A pesar de las condiciones meteorológicas adversas, el lanzamiento paracaidista logró sorpresa absoluta.' }
        ],
        commonMistakes: [
          { incorrect: 'In spite of the weather was bad...', correct: 'In spite of the bad weather... / In spite of the fact that the weather was bad...', reason: '"In spite of" va seguido de sintagma nominal o de "the fact that".' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'Reglas Ortográficas de Duplicación Consonántica en Sufijos Escritos',
        soundIpa: '/ˈdʌblɪŋ ruːlz/',
        description: 'Cuándo se duplica la consonante final al agregar sufijos (-ing, -ed, -er).',
        articulatoryGuide: 'Afecta la pronunciación de la vocal previa (vocal corta vs vocal larga).',
        rules: [
          'Una sola vocal seguida de una sola consonante en sílaba acentuada duplica la consonante: stop -> stopped, patrol -> patrolled (acento en -trol).',
          'Si el acento no recae en la última sílaba, no se duplica (en inglés americano; en británico se duplica la L final: travel -> travelled).'
        ],
        practiceWords: [
          { word: 'patrolled', ipa: '/pəˈtrəʊld/', stressPattern: 'pa-TROLLED (doble l)', translation: 'patrullado' },
          { word: 'equipped', ipa: '/ɪˈkwɪpt/', stressPattern: 'e-QUIPPED (doble p)', translation: 'equipado' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Justificación Comparativa de Cursos de Acción en Ensayos Militares',
        situation: 'Redacción de una monografía o examen de ascenso para oficiales.',
        phrases: [
          { english: 'While Course of Action Alpha offers rapid tactical results, Course of Action Bravo provides enduring logistical sustainability.', spanish: 'Si bien el Curso de Acción Alfa ofrece resultados tácticos inmediatos, el Curso de Acción Bravo brinda una sustentabilidad logística duradera.', usageNote: 'Estructura comparativa equilibrada.', register: 'Formal / Táctico' }
        ]
      }
    ]
  },
  5: {
    axis: 'writing',
    levelNumber: 5,
    overview: 'Redacción de directivas operacionales conjuntas y combinadas, monografías doctrinales, acuerdos bilaterales y correspondencia interinstitucional de máximo rigor formal.',
    vocabulary: [
      {
        theme: 'Términos de Doctrina Conjunta y de Coalición (Joint Doctrine)',
        description: 'Léxico para redactar documentos a nivel Ministerio de Defensa y Comandos Conjuntos.',
        words: [
          { term: 'Theater of operations', ipa: '/ˈθɪətə əv ˌɒpəˈreɪʃnz/', partOfSpeech: 'sustantivo', translation: 'Teatro de operaciones (TO)', example: 'Establish a unified joint logistics headquarters in the theater of operations.', tacticalTip: 'Área geográfica asignada al comandante de la fuerza conjunta.' },
          { term: 'Disengagement', ipa: '/ˌdɪsɪnˈɡeɪdʒmənt/', partOfSpeech: 'sustantivo', translation: 'Desenganche táctico / separación de fuerzas', example: 'Monitor the phased disengagement of opposing forces along the buffer zone.', tacticalTip: 'Ruptura organizada del contacto de combate.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'El Estilo Doctrinal Impersonal y Subordinación Múltiple',
        structureFormula: 'Sujeto Institucional + Verbo Rector + Cláusula Subordinada Concesiva + Cláusula de Mandato',
        orderElements: [
          { position: 1, element: 'Enunciado de Autoridad', function: 'Promulgación', example: 'The Joint Task Force Commander hereby directs' },
          { position: 2, element: 'Objeto Normativo', function: 'Alcance', example: 'that all component commands' },
          { position: 3, element: 'Cláusula Subordinada', function: 'Procedimiento', example: 'harmonise their electronic communication protocols prior to D-Day.' }
        ],
        explanation: 'En las directivas de alto rango, el uso de adverbios formales ("hereby", "therein", "notwithstanding") y estructuras subjuntivas sin contracciones otorga solidez jurídica a la orden escrita.',
        examples: [
          { english: 'The provisions set forth herein shall govern all joint exercises conducted during fiscal year 2027.', spanish: 'Las disposiciones aquí establecidas regirán todos los ejercicios conjuntos realizados durante el ejercicio fiscal 2027.' }
        ],
        commonMistakes: [
          { incorrect: 'Don\'t use weapons.', correct: 'Under no circumstances shall lethal force be employed without authorization.', reason: 'En documentos doctrinales de Nivel V y VI se prohíbe terminantemente el uso de contracciones o registro informal.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'Acento en Sufijos Doctrinales de Origen Griego y Latino',
        soundIpa: '/ˈsʌfɪksɪz/',
        description: 'Correspondencia fonética de terminaciones formales en la redacción culta.',
        articulatoryGuide: 'Palabras terminadas en -ology, -ity, -graphy trasladan el acento principal a la antepenúltima sílaba.',
        rules: [
          'method -> me-thod-OL-o-gy',
          'prior -> pri-OR-i-ty'
        ],
        practiceWords: [
          { word: 'methodology', ipa: '/ˌmeθəˈdɒlədʒi/', stressPattern: 'meth-od-OL-o-gy', translation: 'metodología' },
          { word: 'feasibility', ipa: '/ˌfiːzəˈbɪləti/', stressPattern: 'fea-si-BIL-i-ty', translation: 'viabilidad' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Cláusula de Entrada en Vigor en Acuerdos Interinstitucionales',
        situation: 'Redacción de un convenio marco de defensa mutua.',
        phrases: [
          { english: 'This directive supersedes all previous instructions and shall take effect immediately upon signature.', spanish: 'La presente directiva sustituye todas las instrucciones previas y entrará en vigor inmediatamente tras su firma.', usageNote: 'Cláusula de derogación y vigencia universal.', register: 'Formal / Táctico' }
        ]
      }
    ]
  },
  6: {
    axis: 'writing',
    levelNumber: 6,
    overview: 'Redacción de tratados internacionales de defensa, libros blancos de la defensa nacional, directivas de política estratégica y ensayos de alta prospectiva militar con elegancia estilística.',
    vocabulary: [
      {
        theme: 'Léxico de Tratados de Seguridad Colectiva y Estrategia Global',
        description: 'Términos para redactar la política de defensa del Estado nacional.',
        words: [
          { term: 'Collective security', ipa: '/kəˈlektɪv sɪˈkjʊərəti/', partOfSpeech: 'sustantivo', translation: 'Seguridad colectiva', example: 'Reaffirming our commitment to the collective security architecture of the region.', tacticalTip: 'Principio en el que la agresión a uno es agresión a todos.' },
          { term: 'Inviolability of frontiers', ipa: '/ɪnˌvaɪələˈbɪləti əv frʌnˈtɪəz/', partOfSpeech: 'frase nominal', translation: 'Inviolabilidad de las fronteras nacionales', example: 'The cornerstone of continental peace rests upon the inviolability of sovereign frontiers.', tacticalTip: 'Pilar del derecho internacional público.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'La Arquitectura del Párrafo Académico-Militar: Topic Sentence, Evidencia y Síntesis',
        structureFormula: 'Oración Temática (Topic Sentence) -> Desarrollo Argumentativo -> Evidencia Histórica / Doctrinal -> Oración de Cierre (Concluding Sentence)',
        orderElements: [
          { position: 1, element: 'Topic Sentence', function: 'Plantea la tesis rectora del párrafo', example: 'Modern deterrence theory increasingly incorporates digital resilience alongside kinetic capabilities.' },
          { position: 2, element: 'Argumentación y Datos', function: 'Fundamenta con razonamiento causal', example: 'The vulnerability of critical infrastructure underscores that territorial integrity is no longer confined to physical borders.' },
          { position: 3, element: 'Concluding Sentence', function: 'Sintetiza la deducción estratégica', example: 'Consequently, strategic foresight mandates total integration between civil cyber networks and military defense architectures.' }
        ],
        explanation: 'En el nivel más alto de redacción militar, cada párrafo conforma un argumento cerrado y persuasivo con transición natural hacia la siguiente idea.',
        examples: [
          { english: 'History demonstrates that technological superiority alone cannot compensate for a deficiency in strategic vision.', spanish: 'La historia demuestra que la superioridad tecnológica por sí sola no puede compensar una deficiencia en la visión estratégica.' }
        ],
        commonMistakes: [
          { incorrect: 'Yuxtaponer oraciones breves sin conectores subordinantes.', correct: 'Tejer oraciones ricas con oraciones de relativo y cláusulas adverbiales.', reason: 'El Nivel VI exige variedad sintáctica y cadencia oratoria.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'La Prosa Sonora: Eufonía, Paralelismo y Cadencia en Escritos de Estado',
        soundIpa: '/juːˈfəʊni/',
        description: 'Elección de palabras cuya combinación sonora genere fuerza retórica en documentos solemnes.',
        articulatoryGuide: 'El paralelismo rítmico ("to deter aggression, to defend sovereignty, and to preserve peace") crea un efecto persuasivo indeleble.',
        rules: [
          'Uso de la regla de tres elementos (Tricolon) para enunciar metas estratégicas.',
          'Equilibrio silábico en las enumeraciones.'
        ],
        practiceWords: [
          { word: 'deterrence', ipa: '/dɪˈterəns/', stressPattern: 'de-TER-rence', translation: 'disuasión' },
          { word: 'sovereignty', ipa: '/ˈsɒvrənti/', stressPattern: 'SOV-ereign-ty', translation: 'soberanía' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Cláusula de Compromiso Estratégico Solemne en la Declaración Final',
        situation: 'Cierre de la directiva de política de defensa nacional.',
        phrases: [
          { english: 'In witness whereof, the high contracting parties have signed this accord, pledging their undivided resolve to the defense of international peace.', spanish: 'En testimonio de lo cual, las altas partes contratantes firman el presente acuerdo, empeñando su absoluta determinación en defensa de la paz internacional.', usageNote: 'Fórmula diplomática de máximo rango histórico.', register: 'Diplomático' }
        ]
      }
    ]
  }
};
