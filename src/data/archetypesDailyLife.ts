import { ArchetypeExerciseData } from './daily120PlanData';

export const DAILY_LIFE_ARCHETYPES_PART2: ArchetypeExerciseData[] = [
  // DÍA 6: La Familia, Vínculos y Descripciones Físicas
  {
    title: 'La Familia, Vínculos Personales & Descripciones Físicas',
    theme: 'Miembros de la Familia, Rasgos Físicos y Genitivo Sajón (\'s)',
    objective: 'Nombrar parientes, describir la apariencia física de personas (estatura, cabello, ojos) y utilizar adjetivos posesivos y el genitivo sajón.',
    vocabulary: [
      { term: 'Father / Mother / Parents', translation: 'Padre / Madre / Padres', ipa: '/ˈfɑː.ðər/ /ˈmʌð.ər/ /ˈpeə.rənts/', spanishPhonetic: 'fá-der / má-der / pé-rents', example: 'My parents live in Córdoba.' },
      { term: 'Brother / Sister', translation: 'Hermano / Hermana', ipa: '/ˈbrʌð.ər/ /ˈsɪs.tər/', spanishPhonetic: 'brá-der / sís-ter', example: 'My brother is also in the military.' },
      { term: 'Husband / Wife / Children', translation: 'Esposo / Esposa / Hijos', ipa: '/ˈhʌz.bənd/ /waɪf/ /ˈtʃɪl.drən/', spanishPhonetic: 'jás-band / uáif / chíl-dren', example: 'His wife is a high school teacher.' },
      { term: 'Tall / Short / Slim', translation: 'Alto / Bajo / Delgado', ipa: '/tɔːl/ /ʃɔːt/ /slɪm/', spanishPhonetic: 'tol / short / slim', example: 'Captain Evans is tall and athletic.' },
      { term: 'Dark / Fair hair & Eyes', translation: 'Cabello oscuro/claro y ojos', ipa: '/dɑːk feə heər/', spanishPhonetic: 'dark / fer jer and áiz', example: 'She has brown eyes and short dark hair.' }
    ],
    grammar: {
      title: 'Genitivo Sajón (\'s) & Orden de Adjetivos Físicos',
      formula: 'Posesión: [Person]\'s + [noun] | Descripción: [Subject] + has / have + [adjectives] + [body feature]',
      rule: 'Para indicar parentesco: "My brother\'s name is Martin" (El nombre de mi hermano). Para descripciones físicas: "He is tall and slim", "She has long dark hair and green eyes". Notar que en inglés los adjetivos van ANTES del sustantivo y no se pluralizan: "blue eyes" (¡nunca "blues eyes"!).',
      tacticalTip: 'Usa "has" para he/she/it y "have" para I/you/we/they.'
    },
    phonetics: {
      targetSound: 'Sonido /ð/ sonoro en Father, Mother, Brother y /h/ aspirada en Husband, Hair',
      articulatoryTip: 'En "father" y "brother", la lengua vibra suavemente contra los bordes de los dientes incisivos superiores.',
      spanishPhonetic: 'fá-der, brá-der, jer',
      practiceWords: [
        { word: 'Father', spanishPhonetic: 'fá-der', translation: 'padre' },
        { word: 'Brother', spanishPhonetic: 'brá-der', translation: 'hermano' },
        { word: 'Hair', spanishPhonetic: 'jer', translation: 'cabello' }
      ]
    },
    usefulPhrase: {
      phrase: 'My father is a retired officer; he is tall with grey hair, and my sister is a doctor in Buenos Aires.',
      translation: 'Mi padre es un oficial retirado; es alto con cabello canoso, y mi hermana es médica en Buenos Aires.',
      spanishPhonetic: 'Mai fá-der is e ri-táierd ó-fi-ser; ji is tol uid grey jer, and mai sís-ter is e dók-tor in Bué-nos Ái-res.',
      tacticalUsage: 'Conversación social en recepciones de bienvenida, cenas de camaradería e intercambios culturales.'
    },
    listening: {
      title: 'Describiendo una Fotografía Familiar',
      script: 'Let me show you a picture of my family. The tall man on the left is my father, Robert. He is sixty-two years old and has short grey hair. Next to him is my mother, Elena; she is wearing glasses. The young woman with dark hair is my sister Laura, and the boy holding the football is my brother Lucas.',
      question: {
        question: 'Who is the person with short grey hair in the photograph?',
        options: [
          'The speaker\'s father (Robert)',
          'The speaker\'s brother (Lucas)',
          'The speaker\'s sister (Laura)',
          'The speaker\'s grandfather'
        ],
        correctIndex: 0,
        explanation: 'The speaker explicitly states: "The tall man on the left is my father, Robert. He has short grey hair".'
      }
    },
    reading: {
      title: 'Semblanza Familiar de un Oficial de Enlace',
      snippet: 'Captain Daniel Suarez lives in Salta with his family. His wife\'s name is Mariana, and she works as an architect. They have two children: a seven-year-old daughter named Sofia and a four-year-old son named Mateo. Daniel has two brothers; his older brother is a civil engineer and his younger brother is studying law at university.',
      question: {
        question: 'What is Captain Suarez\'s wife\'s profession?',
        options: ['Architect', 'Lawyer', 'Doctor', 'Teacher'],
        correctIndex: 0,
        explanation: 'The text states: "His wife\'s name is Mariana, and she works as an architect".'
      }
    },
    useOfLanguage: {
      title: 'Uso del Genitivo Sajón y Adjetivos Posesivos',
      prompt: 'Elige la opción gramaticalmente correcta para expresar posesión:',
      question: {
        question: 'Choose the correct sentence:',
        options: [
          'The brother of my wife is tall.',
          'My wife\'s brother is tall.',
          'My wifes\' brother is tall.',
          'The my wife brother is tall.'
        ],
        correctIndex: 1,
        explanation: '"My wife\'s brother is tall" correctly uses the Saxon genitive (\'s) for natural English.'
      }
    },
    writing: {
      title: 'Redacción de una Descripción Familiar Breve',
      scenario: 'Escribe un párrafo (40 palabras) describiendo a dos miembros de tu familia: indica su nombre, parentesco, ocupación y al menos dos rasgos físicos de cada uno.',
      targetWordCount: '35-45 palabras',
      requiredElements: ['Nombre y parentesco con \'s', 'Ocupación de cada pariente', 'Rasgos físicos (estatura, cabello u ojos)', 'Uso de adjetivos antes del sustantivo'],
      modelAnswer: 'My brother\'s name is Julian. He is twenty-five years old, tall, and has short dark hair. He is a secondary school teacher. My sister\'s name is Camila; she is slim with brown eyes and works as an accountant.'
    },
    speaking: {
      title: 'Descripción Oral de un Colega o Familiar',
      scenario: 'Describe oralmente a un amigo o familiar ante tu examinador: estatura, rasgos del rostro y personalidad.',
      recommendedDuration: '25 segundos',
      pronunciationTips: ['No agregues "s" a los adjetivos (di "blue eyes", no "blues eyes").', 'Pronuncia /tɔːl/ con vocal abierta.', 'Mantén buen ritmo al usar adjetivos.'],
      modelResponse: 'My friend Carlos is twenty-eight years old. He is quite tall and athletic with short dark hair and brown eyes. He is very hardworking and reliable.'
    }
  },

  // DÍA 7: Rutina Diaria, Hábitos Cotidianos & Presente Simple
  {
    title: 'Rutina Diaria, Hábitos Cotidianos & Presente Simple',
    theme: 'Actividades Cotidianas y Adverbios de Frecuencia',
    objective: 'Describir la rutina desde que uno se despierta hasta que se acuesta usando el Presente Simple (tercera persona -s/-es) y adverbios de frecuencia (always, usually, often, sometimes, never).',
    vocabulary: [
      { term: 'Wake up / Get up', translation: 'Despertarse / Levantarse de la cama', ipa: '/weɪk ʌp/ /ɡet ʌp/', spanishPhonetic: 'uéik ap / get ap', example: 'I wake up at six o\'clock and get up immediately.' },
      { term: 'Have breakfast / lunch / dinner', translation: 'Desayunar / Almorzar / Cenar', ipa: '/hæv ˈbrek.fəst/', spanishPhonetic: 'jav brék-fast / lanch / dí-ner', example: 'We have breakfast in the dining hall at 0700 hrs.' },
      { term: 'Take a shower / Brush teeth', translation: 'Bañarse / Cepillarse los dientes', ipa: '/teɪk ə ʃaʊər/', spanishPhonetic: 'téik e sháu-er / brash tiiz', example: 'He takes a quick shower before morning parade.' },
      { term: 'Go to work / Return home', translation: 'Ir a trabajar / Volver a casa', ipa: '/ɡəʊ tuː wɜːk/', spanishPhonetic: 'góu tu uérk / ri-térn jóum', example: 'Soldiers go to work at 0730 and return home at 1700.' },
      { term: 'Always / Usually / Sometimes / Never', translation: 'Siempre / Usualmente / A veces / Nunca', ipa: '/ˈɔːl.weɪz/ /ˈjuː.ʒu.ə.li/', spanishPhonetic: 'ól-ueiz / iú-zhu-a-li / sám-taimz / né-ver', example: 'I always drink coffee; I never skip breakfast.' }
    ],
    grammar: {
      title: 'Presente Simple y Posición de Adverbios de Frecuencia',
      formula: 'Afirmativo: [Subject] + [Verb] (+ -s/es en he/she/it) | Adverbio: [Subject] + [Adverb] + [Main Verb]',
      rule: 'En 3ra persona singular se agrega -s o -es: "He wakes up at 0600", "She goes to work". Los adverbios de frecuencia van ANTES del verbo principal: "I usually have lunch at 1230", "He never arrives late" (pero DESPUÉS del verbo to be: "He is always punctual").',
      tacticalTip: 'Negación en Presente Simple: "I do not (don\'t) wake up late", "He does not (doesn\'t) have coffee".'
    },
    phonetics: {
      targetSound: 'Pronunciación de la -s final de 3ra persona: /s/, /z/, /ɪz/',
      articulatoryTip: '/s/ sorda en sleeps, /z/ sonora en cleans, /ɪz/ con sílaba extra en watches, brushes.',
      spanishPhonetic: 'slips, klinz, uó-chiz',
      practiceWords: [
        { word: 'Wakes up', spanishPhonetic: 'uéiks ap', translation: 'se despierta' },
        { word: 'Brushes', spanishPhonetic: 'brá-shiz', translation: 'cepilla' },
        { word: 'Usually', spanishPhonetic: 'iú-zhu-a-li', translation: 'usualmente' }
      ]
    },
    usefulPhrase: {
      phrase: 'I usually wake up at six o\'clock, take a shower, have breakfast with my colleagues, and report for duty at seven-thirty.',
      translation: 'Usualmente me despierto a las seis en punto, me ducho, desayuno con mis colegas y me presento al servicio a las siete y media.',
      spanishPhonetic: 'Ai iú-zhu-a-li uéik ap at siks e-klok, téik e sháu-er, jav brék-fast uid mai kól-iigs, and ri-pórt for diú-ti at sé-ven-zér-ti.',
      tacticalUsage: 'Explicación de rutinas laborales, regímenes diarios de unidad e intercambios con instructores.'
    },
    listening: {
      title: 'Comparando Rutinas entre Semana y Fin de Semana',
      script: 'Captain Alvarez, what is your typical Monday routine? — On weekdays, my alarm rings at zero-six-hundred hours. I always go for a thirty-minute run, then I shower and have a light breakfast: toast and black tea. I arrive at my office at zero-seven-forty-five. In the evening, I finish work at seventeen-hundred hours, return home, and have dinner with my family at eight o\'clock.',
      question: {
        question: 'What does Captain Alvarez do immediately after waking up on weekdays?',
        options: [
          'He goes for a thirty-minute run',
          'He watches television',
          'He has a heavy dinner',
          'He drives into the city'
        ],
        correctIndex: 0,
        explanation: 'Captain Alvarez states: "I always go for a thirty-minute run, then I shower and have a light breakfast".'
      }
    },
    reading: {
      title: 'Un Día Típico en la Base Militar de Adiestramiento',
      snippet: 'Daily life in the training regiment follows a strict routine. Personnel get up at zero-six-hundred hours. They inspect their rooms and then attend morning physical conditioning from zero-seven-hundred to zero-eight-hundred. At midday, all companies have lunch in the central dining facility. Work concludes at seventeen-thirty hours, and quiet hours begin at twenty-two-hundred hours (lights out).',
      question: {
        question: 'Between what hours does morning physical conditioning take place?',
        options: [
          '0700 to 0800 hours',
          '0600 to 0700 hours',
          '1200 to 1300 hours',
          '1730 to 1830 hours'
        ],
        correctIndex: 0,
        explanation: 'The text specifies: "morning physical conditioning from zero-seven-hundred to zero-eight-hundred".'
      }
    },
    useOfLanguage: {
      title: 'Posición de Adverbios de Frecuencia y 3ra Persona',
      prompt: 'Elige la oración sintácticamente correcta en Presente Simple:',
      question: {
        question: 'Choose the correct sentence:',
        options: [
          'He wakes always up early in the morning.',
          'He always wakes up early in the morning.',
          'He always wake up early in the morning.',
          'Always he is wake up early in the morning.'
        ],
        correctIndex: 1,
        explanation: '"He always wakes up early" has the adverb before the main verb and the 3rd person singular "-s".'
      }
    },
    writing: {
      title: 'Redacción de tu Rutina de Lunes a Viernes',
      scenario: 'Redacta un párrafo (40 palabras) detallando tu rutina habitual en días hábiles utilizando al menos tres adverbios de frecuencia (always, usually, sometimes).',
      targetWordCount: '35-45 palabras',
      requiredElements: ['Hora en que te levantas', 'Actividades de la mañana (desayuno, transporte)', 'Horario laboral', 'Al menos 3 adverbios de frecuencia'],
      modelAnswer: 'From Monday to Friday, I always wake up at six o\'clock. I usually take a quick shower and have a cup of coffee. I sometimes walk to work if the weather is nice. In the evening, I always return home at six.'
    },
    speaking: {
      title: 'Relato Oral de la Rutina Diaria',
      scenario: 'Explica en voz alta tu día típico desde la mañana hasta la noche con fluidez y pronunciación clara.',
      recommendedDuration: '30 segundos',
      pronunciationTips: ['Articula /weɪk ʌp/ con enlace fonético.', 'No omitas la /s/ en la 3ra persona si hablas de otra persona.', 'Pronuncia /juːʒuəli/ con suavidad.'],
      modelResponse: 'On a typical weekday, I get up at half past six. I always eat breakfast with my family and start work at eight o\'clock. After work, I usually go to the gym for an hour before dinner.'
    }
  },

  // DÍA 8: Deportes y Acondicionamiento Físico (PLAY, GO, DO)
  {
    title: 'Deportes, Acondicionamiento Físico & Colocaciones (PLAY, GO, DO)',
    theme: 'Deportes, Vida Saludable y Reglas Gramaticales de Colocación',
    objective: 'Dominar la regla de colocación de deportes del IESE: PLAY (deportes con pelota y en equipo), GO (actividades en -ING) y DO (ejercicios físicos individuales, artes marciales y PT).',
    vocabulary: [
      { term: 'Football / Basketball / Tennis', translation: 'Fútbol / Básquetbol / Tenis', ipa: '/ˈfʊt.bɔːl/ /ˈbɑː.skɪt.bɔːl/ /ˈten.ɪs/', spanishPhonetic: 'fút-bol / bás-kit-bol / tén-is', example: 'We play football every Wednesday afternoon.' },
      { term: 'Swimming / Running / Cycling', translation: 'Natación / Correr / Ciclismo', ipa: '/ˈswɪm.ɪŋ/ /ˈrʌn.ɪŋ/ /ˈsaɪ.klɪŋ/', spanishPhonetic: 'suím-ing / rán-ing / sái-kling', example: 'Soldiers go running at 0630 hours.' },
      { term: 'Physical Training (PT) / Gymnastics', translation: 'Adiestramiento Físico / Gimnasia', ipa: '/ˈfɪz.ɪ.kəl ˈtreɪ.nɪŋ/', spanishPhonetic: 'fí-zi-kal tréi-ning / dshim-nás-tiks', example: 'Every recruit must do physical training (PT).' },
      { term: 'Judo / Karate / Martial arts', translation: 'Judo / Karate / Artes marciales', ipa: '/ˈdʒuː.dəʊ/ /kəˈrɑː.ti/', spanishPhonetic: 'dshú-dou / ka-rá-ti', example: 'Sergeant Morales does judo twice a week.' },
      { term: 'Gym / Sports pitch', translation: 'Gimnasio / Campo de deportes', ipa: '/dʒɪm/ /pɪtʃ/', spanishPhonetic: 'dshim / pitch', example: 'The football match is on the main sports pitch.' }
    ],
    grammar: {
      title: 'La Regla de Oro de los Deportes: PLAY vs GO vs DO',
      formula: 'PLAY + ball/team games | GO + activity-ING | DO + individual/martial/fitness',
      rule: '1. PLAY se usa con deportes de pelota, reglas competitivas y juegos de mesa (play football, play tennis, play chess). 2. GO se usa con actividades al aire libre que terminan en -ING (go swimming, go cycling, go hiking). 3. DO se usa con artes marciales, calistenia y gimnasia (do judo, do yoga, do physical training/PT).',
      tacticalTip: '¡Nunca digas "I make sport" o "I practice football"! En inglés se dice "I do sport" y "I play football".'
    },
    phonetics: {
      targetSound: 'Sonido /ŋ/ velar nasal en Swimming, Running, Cycling y /eɪ/ en Play',
      articulatoryTip: 'En el sufijo -ING el aire sale por la nariz; la lengua bloquea el velo del paladar sin pronunciar una "g" dura final.',
      spanishPhonetic: 'suím-ing, plei',
      practiceWords: [
        { word: 'Play', spanishPhonetic: 'plei', translation: 'jugar' },
        { word: 'Swimming', spanishPhonetic: 'suím-ing', translation: 'natación' },
        { word: 'Gymnastics', spanishPhonetic: 'dshim-nás-tiks', translation: 'gimnasia' }
      ]
    },
    usefulPhrase: {
      phrase: 'Every Tuesday and Thursday, our platoon goes running for five miles and we do physical training (PT) at the base gym.',
      translation: 'Todos los martes y jueves, nuestro pelotón sale a correr cinco millas y hacemos adiestramiento físico (PT) en el gimnasio de la base.',
      spanishPhonetic: 'Év-ri Tiús-dei and Zérs-dei, áu-er pla-tún góuz rán-ing for faiv máilz and wi du fí-zi-kal tréi-ning at de béis dshim.',
      tacticalUsage: 'Organización de planes de adiestramiento físico de unidad y preparación para pruebas de aptitud física.'
    },
    listening: {
      title: 'Organización del Programa Deportivo Semanal',
      script: 'Good morning, soldiers. Here is this week\'s sports schedule. On Monday and Wednesday afternoons, company personnel can play football or play basketball on the outdoor courts. On Tuesday mornings, the whole battalion will go running along the river road. Finally, on Friday, recruits who do judo or do karate have their training session in Gym Two. Stay fit and be ready.',
      question: {
        question: 'Which sports are scheduled for Monday and Wednesday afternoons?',
        options: [
          'Play football or basketball',
          'Go swimming in the lake',
          'Do karate and judo',
          'Go cycling in the mountains'
        ],
        correctIndex: 0,
        explanation: 'The speaker announces: "On Monday and Wednesday afternoons, company personnel can play football or play basketball".'
      }
    },
    reading: {
      title: 'Doctrina de Acondicionamiento Físico Militar',
      snippet: 'Physical fitness is an essential requirement for military operational readiness. All service members must maintain high cardiovascular and muscular endurance. Routine physical conditioning requires soldiers to do PT five days a week. During leisure hours, many soldiers play rugby or volleyball to promote teamwork, while others go cycling or go swimming to improve stamina.',
      question: {
        question: 'According to the text, why do soldiers play rugby or volleyball?',
        options: [
          'To promote teamwork',
          'Because they dislike running',
          'To pass military language exams',
          'Only when the gym is closed'
        ],
        correctIndex: 0,
        explanation: 'The text specifies: "many soldiers play rugby or volleyball to promote teamwork".'
      }
    },
    useOfLanguage: {
      title: 'Colocaciones Verbales con Deportes (PLAY, GO, DO)',
      prompt: 'Elige el verbo correcto para completar cada espacio:',
      question: {
        question: 'Complete the sentence: "On Saturdays, my friends _____ football, my sister _____ swimming, and I _____ judo."',
        options: [
          'play / goes / do',
          'do / plays / go',
          'go / does / play',
          'make / practices / play'
        ],
        correctIndex: 0,
        explanation: 'Football takes "play", swimming takes "go" (goes with 3rd person), and judo takes "do".'
      }
    },
    writing: {
      title: 'Redacción de un Reporte de Hábitos Deportivos',
      scenario: 'Escribe un texto breve (40 palabras) explicando qué deportes practicas tú y tus colegas utilizando correctamente los verbos PLAY, GO y DO.',
      targetWordCount: '35-45 palabras',
      requiredElements: ['Un deporte con PLAY', 'Un deporte con GO', 'Una actividad física con DO', 'Frecuencia con que se practica'],
      modelAnswer: 'Physical training is very important for my health. Every morning, I go running for thirty minutes. In the afternoon, my colleagues and I often play basketball. On Fridays, I also do judo at the military club.'
    },
    speaking: {
      title: 'Explicación Oral de Deportes y Actividad Física',
      scenario: 'Responde oralmente a la pregunta: "What sports do you do to keep fit and healthy?"',
      recommendedDuration: '25 segundos',
      pronunciationTips: ['Usa "play" para fútbol o básquetbol.', 'Usa "go" para correr o nadar.', 'Usa "do" para adiestramiento físico (PT) o gimnasia.'],
      modelResponse: 'To keep fit, I go running three times a week and I do physical training in the gym. On the weekend, I enjoy playing football with my friends.'
    }
  },

  // DÍA 9: Pasatiempos, Ocio y Preferencias (LIKE, LOVE, ENJOY + -ING)
  {
    title: 'Pasatiempos, Tiempo Libre & Preferencias (LIKE, LOVE + -ING)',
    theme: 'Actividades de Ocio, Gustos Personales y Estructuras con Gerundio',
    objective: 'Hablar con soltura sobre pasatiempos y tiempo libre, expresando agrado, entusiasmo o desagrado con verbos seguidos de -ING (like, love, enjoy, prefer, hate).',
    vocabulary: [
      { term: 'Hobby / Free time / Pastime', translation: 'Pasatiempo / Tiempo libre / Ocio', ipa: '/ˈhɒb.i/ /friː taɪm/', spanishPhonetic: 'jób-i / fri táim', example: 'What are your favourite hobbies in your free time?' },
      { term: 'Reading / Writing', translation: 'Lectura / Escritura', ipa: '/ˈriː.dɪŋ/ /ˈraɪ.tɪŋ/', spanishPhonetic: 'ríd-ing / ráit-ing', example: 'I love reading historical biographies.' },
      { term: 'Listening to music', translation: 'Escuchar música', ipa: '/ˈlɪs.ən.ɪŋ tuː ˈmjuː.zɪk/', spanishPhonetic: 'lís-ning tu miú-zik', example: 'She enjoys listening to classical music.' },
      { term: 'Watching movies / series', translation: 'Ver películas / series', ipa: '/ˈwɒtʃ.ɪŋ ˈmuː.viz/', spanishPhonetic: 'uótch-ing mú-viz', example: 'We prefer watching documentaries on weekends.' },
      { term: 'Playing guitar / video games', translation: 'Tocar la guitarra / jugar videojuegos', ipa: '/ˈpleɪ.ɪŋ ɡɪˈtɑːr/', spanishPhonetic: 'pléi-ing gi-tár', example: 'Lieutenant Silva likes playing guitar to relax.' }
    ],
    grammar: {
      title: 'Verbos de Preferencia seguidos de Gerundio (-ING)',
      formula: '[Subject] + like / love / enjoy / prefer / hate + [Verb-ING]',
      rule: 'Cuando un verbo de preferencia va seguido de otra acción, el segundo verbo adopta terminación -ING: "I like reading" (Me gusta leer), "He loves cooking" (Le encanta cocinar), "They enjoy travelling" (Disfrutan viajar). Para negar: "I don\'t like watching horror films".',
      tacticalTip: 'Recuerda: "listen" lleva SIEMPRE la preposición "to": "listening TO music" (¡nunca "listening music"!).'
    },
    phonetics: {
      targetSound: 'Terminación relajada /-ɪŋ/ en Reading, Cooking, Travelling',
      articulatoryTip: 'No pronuncies una "g" fuerte o golpeada al final. Mantén la vocal breve /ɪ/ y la resonancia nasal suave.',
      spanishPhonetic: 'ríd-ing, kúk-ing',
      practiceWords: [
        { word: 'Reading', spanishPhonetic: 'ríd-ing', translation: 'leer' },
        { word: 'Cooking', spanishPhonetic: 'kúk-ing', translation: 'cocinar' },
        { word: 'Travelling', spanishPhonetic: 'tráv-ling', translation: 'viajar' }
      ]
    },
    usefulPhrase: {
      phrase: 'In my free time, I love playing chess with my father and I enjoy reading books about modern military history.',
      translation: 'En mi tiempo libre, me encanta jugar al ajedrez con mi padre y disfruto leer libros sobre historia militar moderna.',
      spanishPhonetic: 'In mai fri táim, ai lav pléi-ing ches uid mai fá-der and ai en-dshói ríd-ing buks e-báut mó-dern mí-li-ta-ri jís-to-ri.',
      tacticalUsage: 'Intercambio social informal en recepciones, entrevistas de admisión a becas y foros internacionales.'
    },
    listening: {
      title: 'Entrevista Informal sobre Pasatiempos',
      script: 'Hello, Lieutenant Rossi. What do you like doing when you are off duty? — Well, when I have some free time, I really enjoy cooking traditional Argentine meals for my family. I also love listening to rock music and I like reading novels. However, I hate staying indoors all weekend, so I usually go cycling on Sundays.',
      question: {
        question: 'What does Lieutenant Rossi hate doing on weekends?',
        options: [
          'Staying indoors all weekend',
          'Cooking traditional meals',
          'Listening to rock music',
          'Cycling on Sundays'
        ],
        correctIndex: 0,
        explanation: 'He explicitly says: "However, I hate staying indoors all weekend".'
      }
    },
    reading: {
      title: 'El Papel del Ocio y los Pasatiempos en la Salud Mental',
      snippet: 'Recreational pastimes play a vital role in reducing stress. Service personnel who cultivate healthy hobbies demonstrate better operational performance. Many officers report that engaging in creative activities, such as playing musical instruments or photography, improves concentration. Others prefer outdoor pursuits like gardening, hiking, or fishing to unwind after challenging field exercises.',
      question: {
        question: 'Which of the following hobbies is mentioned as an outdoor pursuit to unwind?',
        options: [
          'Gardening, hiking, or fishing',
          'Watching television inside',
          'Writing technical reports',
          'Working extra hours'
        ],
        correctIndex: 0,
        explanation: 'The text states: "Others prefer outdoor pursuits like gardening, hiking, or fishing to unwind".'
      }
    },
    useOfLanguage: {
      title: 'Estructura Sintáctica de Preferencias',
      prompt: 'Elige la forma gramatical correcta para expresar un pasatiempo:',
      question: {
        question: 'Choose the correct sentence:',
        options: [
          'She enjoys to listen music.',
          'She enjoys listening to music.',
          'She enjoy listen to music.',
          'She enjoys listening music.'
        ],
        correctIndex: 1,
        explanation: '"Enjoys" requires a verb ending in -ing and "listen" requires the preposition "to": "enjoys listening to music".'
      }
    },
    writing: {
      title: 'Redacción sobre tus Pasatiempos y Gustos',
      scenario: 'Escribe un párrafo (40 palabras) describiendo qué actividades te gusta hacer en tu tiempo libre y cuáles no te gustan.',
      targetWordCount: '35-45 palabras',
      requiredElements: ['Uso de "I like / I love + -ing"', 'Uso de "I enjoy + -ing"', 'Una cosa que no te gusta ("I don\'t like + -ing")', 'Mención de al menos 2 pasatiempos concretos'],
      modelAnswer: 'In my free time, I love playing guitar and I really enjoy reading historical books. I also like going to the cinema with my friends on Saturday night. However, I do not like staying on the sofa watching television all day.'
    },
    speaking: {
      title: 'Respuesta Oral sobre Pasatiempos',
      scenario: 'Responde oralmente ante la cámara o grabador: "What do you like doing in your free time, and why?"',
      recommendedDuration: '25 segundos',
      pronunciationTips: ['Pronuncia con claridad "enjoy /ɪnˈdʒɔɪ/".', 'Recuerda decir "listening TO music".', 'Usa entonación expresiva y natural.'],
      modelResponse: 'In my free time, I love playing chess because it requires strategy and concentration. I also enjoy reading military history books and going cycling in the countryside.'
    }
  },

  // DÍA 10: Comida, Bebidas & Hacer Pedidos en Bares y Restaurantes
  {
    title: 'Comida, Bebidas & Hacer Pedidos en Bares y Restaurantes',
    theme: 'Alimentos, Comidas del Día y Fórmulas de Cortesía para Pedir',
    objective: 'Identificar vocabulario esencial de alimentos y bebidas, y pedir comida de forma cortés en restaurantes y cantinas utilizando "Could I have..." y "I would like...".',
    vocabulary: [
      { term: 'Breakfast / Lunch / Dinner', translation: 'Desayuno / Almuerzo / Cena', ipa: '/ˈbrek.fəst/ /lʌntʃ/ /ˈdɪn.ər/', spanishPhonetic: 'brék-fast / lanch / dí-ner', example: 'What time is dinner served in the officers\' mess?' },
      { term: 'Beef / Chicken / Fish', translation: 'Carne vacuna / Pollo / Pescado', ipa: '/biːf/ /ˈtʃɪk.ɪn/ /fɪʃ/', spanishPhonetic: 'biif / chí-kin / fish', example: 'I would like the grilled beef with salad.' },
      { term: 'Water / Coffee / Tea', translation: 'Agua / Café / Té', ipa: '/ˈwɔː.tər/ /ˈkɒf.i/ /tiː/', spanishPhonetic: 'uó-ter / kóf-i / tii', example: 'Could we have a bottle of still water, please?' },
      { term: 'Menu / Bill / Check', translation: 'Menú / Cuenta a pagar', ipa: '/ˈmen.juː/ /bɪl/', spanishPhonetic: 'mén-iu / bil', example: 'Could we have the bill, please? We would like to pay by card.' },
      { term: 'Waiter / Waitress', translation: 'Mozo / Camarera', ipa: '/ˈweɪ.tər/ /ˈweɪ.trəs/', spanishPhonetic: 'uéi-ter / uéi-tres', example: 'The waiter brought our main courses quickly.' }
    ],
    grammar: {
      title: 'Fórmulas de Cortesía en Restaurantes y Cafeterías',
      formula: 'Pedir: I would like (I\'d like) + [item], please | Could I / we have + [item], please? | La cuenta: Can we have the bill, please?',
      rule: 'En inglés es considerado rudo decir "I want..." (Yo quiero). La norma de cortesía británica e internacional exige siempre usar "I would like..." (Me gustaría...) o "Could I have..." (¿Podría traerme...?).',
      tacticalTip: 'Para pagar: "Can I pay by credit card / by card?" o "In cash" (en efectivo).'
    },
    phonetics: {
      targetSound: 'Diptongo /aɪ/ en "I\'d like" y sonido /w/ suave en "Water", "Waitress"',
      articulatoryTip: 'En "water" y "would", redondea los labios en forma de "u" suave sin morderlos con los dientes.',
      spanishPhonetic: 'aid laik, uó-ter',
      practiceWords: [
        { word: 'I\'d like', spanishPhonetic: 'aid laik', translation: 'me gustaría' },
        { word: 'Water', spanishPhonetic: 'uó-ter', translation: 'agua' },
        { word: 'Bill', spanishPhonetic: 'bil', translation: 'la cuenta' }
      ]
    },
    usefulPhrase: {
      phrase: 'Good evening. Could I have the grilled steak with salad and a bottle of mineral water, please? And could we have the bill later?',
      translation: 'Buenas noches. ¿Podría traerme el bife a la parrilla con ensalada y una botella de agua mineral, por favor? ¿Y podríamos pedir la cuenta más tarde?',
      spanishPhonetic: 'Gud ív-ning. Kud ai jav de grild stéik uid sá-lad and e bó-tl of mí-ne-ral uó-ter, plis? And kud wi jav de bil léi-ter?',
      tacticalUsage: 'Interacción social cotidiana y protocolar en hoteles, restaurantes, conferencias y casinos de oficiales.'
    },
    listening: {
      title: 'Diálogo Completo en un Restaurante Británico',
      script: 'Good evening, welcome to The Red Lion. A table for one? — Good evening, yes, please. — Here is the menu. Are you ready to order? — Yes, thank you. To start, I\'d like the vegetable soup, and for the main course, could I have the roast chicken with potatoes? — Certainly. And what would you like to drink? — Just a glass of tap water, please. — Very good, Sir.',
      question: {
        question: 'What did the customer choose for his main course and drink?',
        options: [
          'Roast chicken with potatoes and a glass of tap water',
          'Grilled beef with rice and a beer',
          'Fish and chips with mineral water',
          'Vegetable soup and coffee'
        ],
        correctIndex: 0,
        explanation: 'The customer ordered: "roast chicken with potatoes" and "a glass of tap water".'
      }
    },
    reading: {
      title: 'Menú del Comedor y Protocolo Gastronómico',
      snippet: 'Dining Etiquette: When visiting international military dining facilities or public restaurants, meals are divided into starters, main courses, and desserts. Common main courses include roast beef, grilled fish, or vegetarian pasta. At the end of the meal, customers request the bill by saying: "Excuse me, could we have the bill, please?". Tipping around ten percent is standard in British restaurants.',
      question: {
        question: 'What is the standard phrase to request the bill according to the text?',
        options: [
          '"Excuse me, could we have the bill, please?"',
          '"Give me the money now."',
          '"How much money do you want?"',
          '"I leave the restaurant now."'
        ],
        correctIndex: 0,
        explanation: 'The text specifies: "Excuse me, could we have the bill, please?".'
      }
    },
    useOfLanguage: {
      title: 'Fórmulas de Cortesía en Pedidos Gastronómicos',
      prompt: 'Elige la frase más cortés y natural para pedir una taza de café en una cafetería:',
      question: {
        question: 'Which is the most polite and natural way to order a coffee?',
        options: [
          'I want a coffee immediately.',
          'Could I have a white coffee, please?',
          'Give me one coffee.',
          'You bring me coffee.'
        ],
        correctIndex: 1,
        explanation: '"Could I have a white coffee, please?" is the polite standard in British English.'
      }
    },
    writing: {
      title: 'Redacción de un Diálogo en un Restaurante',
      scenario: 'Escribe un diálogo de 4 líneas entre tú (el cliente) y el camarero: pide una comida principal, una bebida y finalmente solicita la cuenta para pagar con tarjeta.',
      targetWordCount: '35-45 palabras',
      requiredElements: ['Fórmula cortés "I would like..."', 'Pedido de bebida con "Could I have..."', 'Pedido de la cuenta', 'Mención de pago con tarjeta'],
      modelAnswer: 'Waiter: Good evening. What would you like to order? \nCustomer: Good evening. I would like the grilled fish with salad, please. \nWaiter: And to drink? \nCustomer: Could I have a bottle of sparkling water? And could we pay by card later?'
    },
    speaking: {
      title: 'Simulación Oral de Pedido de Comida',
      scenario: 'Imagina que estás en un restaurante en Londres. Pide en voz alta tu plato principal favorito, tu bebida y pide la cuenta con tono cortés.',
      recommendedDuration: '25 segundos',
      pronunciationTips: ['Usa entonación amable y ascendente en preguntas de cortesía.', 'Pronuncia /kʊd aɪ hæv/ con enlace fluido.', 'Di "please" al final.'],
      modelResponse: 'Good evening. Could I have the steak with roasted potatoes and a glass of mineral water, please? And excuse me, could we have the bill when you have a moment? Thank you.'
    }
  }
];
