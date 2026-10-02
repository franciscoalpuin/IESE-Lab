import { LevelSyllabus } from '../types';

export const IESE_LEVELS: LevelSyllabus[] = [
  // =========================================================================
  // NIVEL 1 (A1+)
  // =========================================================================
  {
    levelNumber: 1,
    name: 'Nivel 1 – Elemental / Principiante (A1 / A1+ • STANAG 6001 Nivel 0+/1)',
    cefr: 'A1+',
    clockHours: 120,
    academicHours: 160,
    accumulatedClockHours: 120,
    accumulatedAcademicHours: 160,
    generalObjective: 'Que el usuario asimile los principios más básicos de la lengua cultura prioritariamente gracias a un proceso activo de aprendizaje y no por la mera memorización de reglas, que le permita inferir, deducir y operar conceptualizaciones y nociones aplicables a situaciones sencillas de la vida cotidiana y militar (abecedario, números 1-100, operaciones aritméticas elementales, horarios civiles y militares, deportes y pasatiempos).',
    thematicCompetencies: [
      'EL ABECEDARIO Y EL DELETREO: Dominio del abecedario en inglés (A-Z), pronunciación de vocales y consonantes, deletreo (spelling) de nombres, apellidos, ciudades, direcciones de correo y placas/matrículas vehiculares; articulación fonética estándar y alfabeto fonético militar OTAN (Alfa, Bravo, Charlie... Zulu).',
      'LOS NÚMEROS DEL 1 AL 100 Y OPERACIONES BÁSICAS: Números cardinales del 1 al 100 y ordinales (1st a 31st para fechas del calendario); operaciones aritméticas elementales: sumar (+ / plus), restar (- / minus), igual (= / is, equals), cálculo de presupuestos, víveres, raciones, cambio en dinero y precios (£, $, €).',
      'LA HORA Y LOS HORARIOS: Lectura y expresión del tiempo en formato civil de 12 horas con a.m./p.m., expresiones o\'clock, half past, quarter past, quarter to; contraste y conversión con el reloj militar de 24 horas (06:00 = zero-six-hundred hours, 14:30 = fourteen-thirty hours) y cronogramas de rutina diaria.',
      'DEPORTES Y ACTIVIDADES FÍSICAS DE LA VIDA DIARIA: Regla gramatical para deportes y ejercicio físico: uso estricto de PLAY (deportes con pelota o competitivos en equipo como football, basketball, tennis), GO (actividades recreativas al aire libre con terminación -ing como swimming, running, cycling) y DO (actividades individuales, artes marciales y acondicionamiento como judo, karate, physical training/PT).',
      'PASATIEMPOS, GUSTOS Y PREFERENCIAS: Expresión de gustos y preferencias en el tiempo libre mediante los verbos LIKE, LOVE, ENJOY, HATE seguidos de gerundio (-ing) o sustantivo; descripción de entretenimientos de fin de semana, lectura, música y vida familiar.',
      'Saludar al llegar y al retirarse formal e informalmente.',
      'Presentarse y presentar a terceros. Identificar personas y rangos militares.',
      'Referirse a la familia, los amigos y los colegas de cuartel.',
      'Expresar pertenencia y mostrar personas o cosas. Preguntar por pertenencia (whose, possessive case \'s).',
      'Describir comodidades y mobiliario de las viviendas y alojamientos militares.',
      'Describir en forma básica lugares, el barrio y el clima (temperatura, lluvia, viento).',
      'Describir personas físicamente (estatura, contextura, color de ojos y cabello).',
      'Describir tamaño, color, formatos, etc., de objetos y equipo individual.',
      'Dar y requerir información personal en cuanto a nombre, dirección, estado civil, edad, ocupación, nacionalidad, lugar y fecha de nacimiento.',
      'Comprender y completar formularios dando detalles personales y militares.',
      'Ubicar personas, lugares y cosas en tiempo y espacio (preposiciones in, on, at, under, next to, opposite).',
      'Solicitar y dar instrucciones para llegar a un lugar (turn left, go straight on).',
      'Afirmar y negar con oraciones completas y respuestas breves (short answers).',
      'Expresar nociones de cantidad y de precios en transacciones comerciales básicas.',
      'Describir y preguntar por actividades rutinarias y de la vida cotidiana (Present Simple).',
      'Expresar existencia y estado en el pasado (Past of to be: was / were).',
      'Abordar a alguien y llamar su atención cortésmente (Excuse me, Sir / Madam).',
      'Expresar entrega de algo a alguien (Here you are / Here is your ID card).',
      'Felicitar por logros personales y militares (Congratulations! / Well done!).',
      'Formular, aceptar o declinar invitaciones (Would you like to come? / I\'d love to / I\'m afraid I can\'t).',
      'Expresar obligación (have to) y prohibición (must not / cannot).',
      'Dar o seguir instrucciones simples e imperativos de seguridad.',
      'Hacer llamadas telefónicas sencillas: pedir, dar, acordar y posponer citas.',
      'Acordar, pedir o dar información sobre lugar, hora y fecha de salidas o reuniones.',
      'Expresar gratitud y responder a agradecimientos.',
      'Expresar intención de realizar una actividad prevista o un plan para el futuro (be going to).',
      'Disculparse, pedir perdón, responder a una disculpa.',
      'Pedir ayuda o un favor; pedir y conceder permiso (Can I...? / Could you...?).',
      'Hablar de los hábitos y actividades cotidianas propias, de terceros o de camaradas.',
      'Realizar o responder a una entrevista personal de acreditación o enlace.',
      'Describir acciones en progresión en el momento presente (Present Continuous).',
      'Expresar habilidades o destrezas operativas (can / can\'t).',
      'Hacer un pedido en un bar, cafetería o comedor militar (mess); solicitar la cuenta y medios de pago.',
      'Reservar una habitación de hotel, mesa de restaurante, pasajes y traslados.',
      'Averiguar sobre un departamento en alquiler o comodidades en un inmueble.',
      'Solicitar y dar significado u ortografía de palabras mediante deletreo.'
    ],
    speechActs: [
      'Deletrear nombres propios, apellidos, ciudades, acrónimos y matrículas usando el abecedario inglés estándar y el código fonético militar OTAN.',
      'Contar del 1 al 100, leer ordinales para fechas, y realizar cálculos aritméticos básicos orales y escritos (suma con plus, resta con minus, resultado con is/equals).',
      'Preguntar y decir la hora en reloj civil de 12 horas (What time is it? / It\'s quarter past seven) y en reloj militar de 24 horas (zero-seven-fifteen hours).',
      'Describir la práctica deportiva aplicando la regla de verbos Play, Go y Do (I play football, I go running, I do judo).',
      'Expresar pasatiempos y aficiones de tiempo libre usando like, love, hate + -ing (I love reading history books, I like cooking).',
      'Saludar y despedirse formal e informalmente (Good morning, Good afternoon, Goodbye, See you later).',
      'Presentarse y presentar a terceros (I am Lieutenant..., This is Captain Smith, Nice to meet you).',
      'Dar y solicitar información personal (nombre, rango militar, dirección, edad, estado civil, ocupación, nacionalidad).',
      'Comprender y completar formularios de registro personal, militar y de servicios.',
      'Ubicar personas, lugares, cosas y actividades en tiempo y espacio (preposiciones at, in, on, next to, opposite).',
      'Solicitar y dar instrucciones simples de navegación urbana y dentro de la base (turn left, go straight on, opposite the gate).',
      'Afirmar y negar de forma concisa (Yes, I am / No, he doesn\'t / Certainly).',
      'Contar, usar números y expresar cantidades y precios (cardinales, ordinales, currencies: £, $, €).',
      'Describir y preguntar por rutinas diarias y vida cotidiana propia y de colegas (What time do you wake up?).',
      'Expresar existencia y estados en el pasado mediante "was / were".',
      'Abordar a alguien y solicitar atención (Excuse me, Sir / Pardon me).',
      'Expresar entrega de algo a alguien (Here you are / Here is your military ID).',
      'Felicitar formal e informalmente (Congratulations! / Well done!).',
      'Formular, aceptar o declinar invitaciones (Would you like to come? / I\'d love to / I\'m afraid I can\'t).',
      'Expresar obligación (have to) y prohibición (cannot / must not).',
      'Hacer llamadas telefónicas sencillas: pedir, dar, acordar y posponer citas y encuentros.',
      'Expresar gustos y preferencias sobre deportes, comidas, entretenimientos y estaciones (like, love, hate + -ing).',
      'Expresar gratitud y responder a agradecimientos (Thank you very much / You\'re welcome).',
      'Expresar intenciones y planes futuros previstos (be going to).',
      'Disculparse, pedir perdón y responder a disculpas (I\'m sorry / Never mind / No problem).',
      'Pedir ayuda o un favor; pedir y conceder permiso (Can you help me? / Could I leave early? / Yes, you may).',
      'Realizar y responder a una entrevista personal básica de acreditación o enlace.',
      'Describir acciones en progresión en el momento de hablar (Present Continuous).',
      'Expresar habilidades y destrezas operativas (can / can\'t speak, drive, shoot).',
      'Hacer pedidos en bar, restaurante o casino militar; solicitar la cuenta y formas de pago.',
      'Reservar habitación de hotel, mesa en restaurante, pasajes y excursiones.',
      'Averiguar sobre inmuebles en alquiler o venta y sus comodidades (How much is the rent? / Does it have heating?).',
      'Solicitar y dar el significado u ortografía de palabras mediante el abecedario y el código fonético militar OTAN.'
    ],
    grammaticalContents: [
      'The English Alphabet (A-Z) & Spelling rules: Vowels, consonants, digraphs and letter names',
      'Numbers 1-100 & Basic Arithmetic: Cardinal numbers (1-100), Ordinals (1st-31st), and mathematical operators (+ plus, - minus, = is / equals)',
      'Telling Time & Schedules: 12-hour civil clock (o\'clock, half past, quarter past/to, a.m./p.m.) vs 24-hour military clock (hundred hours)',
      'Sports Verbs Rule: PLAY (team & ball sports), GO (-ing recreational activities), and DO (individual fitness & martial arts)',
      'Verbs of Preference: LIKE, LOVE, ENJOY, HATE + Gerund (-ing) or Noun phrase',
      'Verb to be: Affirmative, Negative, Interrogative & Question making',
      'Simple Present & Frequency adverbs (always, usually, often, sometimes, never)',
      'Present Continuous for actions in progression (Subject + am/is/are + verb-ing)',
      'Future with "Going to" for intentions and planned activities',
      'Past Simple of "to be" (was / were) for recognition of past states and situations',
      'Modals: can (ability, permission, request)',
      'Modals: could (polite request)',
      'Modals: have to (obligation)',
      'Modals: would (polite request: Would you like...? / I\'d like...)',
      'Imperatives (commands, military orders, street and safety instructions)',
      'Personal Pronouns, Possessive Adjectives, Objective Pronouns & Possessive Case (\'s)',
      'Demonstrative Adjectives (this, that, these, those)',
      'Simple Adjectives (old/new, tall/short, clean/dirty, large/small, etc.)',
      'Articles: a, an, the (indefinite and definite)',
      'Plural of nouns (regular -s/-es and common irregulars: man/men, woman/women, child/children)',
      'Countable and uncountable nouns with quantifiers (some, any, a lot of, much, many)',
      'There is / There are (singular and plural existence)',
      'Prepositions of time (at, on, in) & Prepositions of place (in, on, at, next to, between, opposite, behind, in front of)',
      'Connectors: and, but, or, because, too',
      'Polite expressions & offers: Would you like...? / I\'d like to... / I\'d love to...',
      'Suggestions: Let\'s... / How about...?'
    ],
    functions: [
      'Alphabet Spelling (spelling names, surnames, emails, cities and vehicle license plates with English letters and NATO phonetics)',
      'Basic Arithmetic Calculations (adding rations with "plus", subtracting used items with "minus", stating totals with "equals")',
      'Telling Time and Reading Schedules (coordinating civilian appointments and military daily duty timetables)',
      'Expressing Sports Routines with the Play / Go / Do rule',
      'Sharing Hobbies and Leisure Interests using Like, Love, Hate + -ing',
      'Filling a form (personal information, military registry, customs, hotel check-in)',
      'Giving directions (turn left, turn right, go straight ahead, opposite the barracks)',
      'Going to a restaurant (booking a table, ordering dishes/drinks, paying the bill, currencies)',
      'Simple telephone calls (initiating, identifying oneself, asking for someone, leaving a message, scheduling appointments)'
    ],
    vocabularyTopics: [
      'The English Alphabet (A-Z), letter pronunciation, vowel and consonant sounds, spelling conventions',
      'Numbers from 1 to 100 (cardinals) and 1st to 31st (ordinals for calendar dates and ranks)',
      'Basic arithmetic vocabulary: plus (+), minus (-), equals (=), sum, total, balance, cost',
      'Time expressions: 12-hour civil clock (o\'clock, half past, quarter past, quarter to, in the morning, in the afternoon) and 24-hour military time (zero-six-hundred hours, eighteen-thirty hours)',
      'Sports and fitness activities: PLAY (football, rugby, basketball, tennis, golf); GO (running, swimming, cycling, fishing); DO (judo, karate, yoga, physical training / PT)',
      'Leisure hobbies: reading, listening to music, watching movies, cooking, gardening, travelling, spending time with family',
      'Occupations & military branches (Infantry, Cavalry, Artillery, Engineers, Logistics, Signals)',
      'Physical description (simple: height, build, hair colour/style, eye colour, age)',
      'Countries, nationalities, and languages',
      'Parts of the house / Furniture / Colours',
      'Places in the neighbourhood & military base (checkpoint, armory, mess, parade square, supermarket, bank, hospital)',
      'Means of transport (car, bus, train, helicopter, truck, airplane, bicycle)',
      'Months / Days of the Week / Seasons / Special Celebrations',
      'Food, beverages and meals (breakfast, lunch, dinner, ration packs)',
      'Clothes and military uniforms (combat dress, beret, boots, jacket, shirt, trousers)',
      'The weather (sunny, rainy, foggy, cold, hot, windy, snowy, temperature)',
      'Family members, friends, colleagues and comrades',
      'Currencies, prices and forms of payment (pound sterling, dollar, euro, cash, credit card)',
      'The military NATO alphabet (Alfa, Bravo, Charlie... Zulu)',
      'Weapons and soldier personal equipment (SA80 assault rifle, pistol, helmet, webbing, canteen, tactical backpack)',
      'Routines and uniforms in garrison life',
      'Military ranks (Private, Corporal, Sergeant, Warrant Officer, Lieutenant, Captain, Major)'
    ],
    militarySpecificTopics: [
      'The Military NATO Phonetic Alphabet & radio check procedure',
      'Basic Military Ranks (OR-1 to OF-3 equivalences between Argentina and British Army)',
      'Weapons and individual soldier field equipment (kit inspection)',
      'Military daily routine in the barracks (Reveille, muster parade, PT, weapon inspection, retreat, lights out)',
      'Barracks navigation and security access controls (guardroom, sentry post, armory, mess)'
    ],
    culturalReflection: [
      'Primeros contactos con las diversidades culturales entre Argentina y Gran Bretaña / países angloparlantes.',
      'Nombres de principales países de habla inglesa, capitales y ciudades destacadas.',
      'Costumbres militares británicas: The Officers\' Mess, Tea break (elevenses), parade drills y cortesía militar.',
      'Diferencias en convenciones de trato social, formalidad, puntualidad británica y horarios de comidas.'
    ],
    writtenComprehensionSkills: [
      '1. Comprender textos simples, por ejemplo del tipo necesario para sobrevivir en la vida diaria o al viajar en el país extranjero en donde se habla el idioma.',
      '2. Reconocer diferentes tipos de texto y el contexto de donde provienen: mensajes telefónicos, noticias, avisos clasificados, artículos de diarios o revistas, folletos turísticos, publicidades, avisos inmobiliarios, señales o carteles simples de la vía pública o de lugares y edificios públicos, formularios de información personal, instrucciones, etiquetas, postales, notas, invitaciones, tarjetas personales, diario personal, menús de restaurantes, mapas o planos.',
      '3. Identificar el mensaje principal del texto y el léxico relacionado con el mismo.',
      '4. Buscar información específica dentro de los tipos de texto mencionados anteriormente y en lo relativo a colores, precios, tamaños, medidas, horarios, direcciones, información personal, ocupaciones, teléfonos, lugares, etc.'
    ],
    writtenExpressionSkills: [
      '1. Redactar o completar formularios con información personal, de terceros o de servicios.',
      '2. Redactar postales, mensajes de texto, de correo electrónico, de un blog, posteos en redes sociales y cartas informales simples y breves.',
      '3. Describir rutinas propias y ajenas, así como descripciones de lugares (casa, barrio, base militar, ciudad, país).',
      '4. Redactar invitaciones formales e informales, y respuestas aceptando, rechazando o agradeciendo las mismas.'
    ],
    oralComprehensionSkills: [
      '1. Reconocer diferentes tipos de textos orales simples y breves: publicidad, conversación telefónica formal o informal, mensaje de un contestador, pronóstico del tiempo, anuncios en lugares públicos (aeropuertos, estaciones de trenes, eventos deportivos), instrucciones sencillas.',
      '2. Identificar el tema principal del texto oral.',
      '3. Identificar información general y específica relevante en diferentes tipos de textos orales en lo referente a colores, precios, información sobre personas, lugares, horarios, frecuencias, lugares de encuentro, etc.'
    ],
    oralExpressionSkills: [
      '1. Interactuar en forma sencilla en áreas de necesidades inmediatas o relativas a temas cotidianos y de servicio.',
      '2. Describir personas, lugares, viviendas y servicios en forma simple y clara.'
    ],
    listening: [
      {
        id: 'l1-act1',
        title: 'Morning Barracks Parade & Roll Call',
        context: 'Pase de lista y orden matutina en el cuartel británico de Catterick',
        speakerRole: 'Colour Sergeant Evans (British Army)',
        audioProwords: true,
        audioText: 'Attention on deck! Listen carefully. Good morning, soldiers. Today is Tuesday, the fifteenth of October. Reveille was at zero-six-hundred hours. Company physical training commences at zero-seven-thirty on the parade square. Private Williams, you are assigned to the Quartermaster stores for kit inspection. Corporal Davies, your section will conduct vehicle maintenance at Hangar Charlie. Ensure all boots are polished and standard combat dress is worn. Dismissed!',
        questions: [
          {
            id: 'l1-q1',
            question: 'At what time does company physical training (PT) start?',
            options: ['06:00 hours', '07:30 hours', '08:00 hours', '15:00 hours'],
            correctIndex: 1,
            explanation: 'The Colour Sergeant explicitly commands: "Company physical training commences at zero-seven-thirty on the parade square."'
          },
          {
            id: 'l1-q2',
            question: 'Where is Private Williams assigned today?',
            options: ['The vehicle garage', 'The Quartermaster stores', 'The parade ground guard', 'The mess hall'],
            correctIndex: 1,
            explanation: 'Private Williams is instructed: "you are assigned to the Quartermaster stores for kit inspection."'
          },
          {
            id: 'l1-q3',
            question: 'What is Corporal Davies\' section going to do at Hangar Charlie?',
            options: ['Weapon cleaning', 'Radio communications drill', 'Vehicle maintenance', 'Physical fitness testing'],
            correctIndex: 2,
            explanation: '"Corporal Davies, your section will conduct vehicle maintenance at Hangar Charlie."'
          }
        ]
      },
      {
        id: 'l1-act2',
        title: 'Military Radio Check & NATO Spelling',
        context: 'Prueba de enlace radial y deletreo de datos con código fonético OTAN',
        speakerRole: 'Signaller (Radio Operator)',
        audioProwords: true,
        audioText: 'Control, this is Patrol Delta Two. Radio check, do you read me? Over. — Delta Two, this is Control. Read you loud and clear. What is the driver\'s surname? Over. — Control, driver\'s surname is SMITH. I spell: Sierra, Mike, India, Tango, Hotel. Rank is Corporal. Vehicle registration: Bravo-Seven-Niner. Over.',
        questions: [
          {
            id: 'l1-q4',
            question: 'Which NATO phonetic words spell the driver\'s surname?',
            options: [
              'Sierra, Mike, India, Tango, Hotel',
              'Sugar, Mary, Item, Tommy, Harry',
              'Sierra, Mike, Indigo, Tango, Hotel',
              'Sam, Mike, India, Tiger, Hotel'
            ],
            correctIndex: 0,
            explanation: 'Under NATO phonetic standard: S = Sierra, M = Mike, I = India, T = Tango, H = Hotel (SMITH).'
          },
          {
            id: 'l1-q5',
            question: 'What is the military rank of the driver?',
            options: ['Private', 'Lance Corporal', 'Corporal', 'Sergeant'],
            correctIndex: 2,
            explanation: 'The transmission states: "Rank is Corporal."'
          }
        ]
      },
      {
        id: 'l1-act3',
        title: 'Telephone Answering Machine: Rescheduling a Meeting',
        context: 'Mensaje en contestador automático coordinando y posponiendo una cita',
        speakerRole: 'Captain Henderson (Liaison Officer)',
        audioProwords: false,
        audioText: 'Hello, this is Captain Henderson from Headquarters. This is a message for Lieutenant Rossi. I am calling about our meeting tomorrow, Wednesday, at ten o\'clock. I am afraid I cannot make it because I have an inspection at the vehicle depot. Can we postpone our meeting to Thursday afternoon at fourteen-thirty hours? My office is on the second floor, Room B-Twelve. Please call me back on zero-seven-four-five, three-three-one, eight-nine-zero. Thank you and goodbye.',
        questions: [
          {
            id: 'l1-q6',
            question: 'Why does Captain Henderson need to postpone Wednesday\'s meeting?',
            options: [
              'He is on sick leave',
              'He has an inspection at the vehicle depot',
              'He is travelling to London',
              'The weather is too bad'
            ],
            correctIndex: 1,
            explanation: 'Captain Henderson explains: "I cannot make it because I have an inspection at the vehicle depot."'
          },
          {
            id: 'l1-q7',
            question: 'What new day and time does he propose for the rescheduled meeting?',
            options: [
              'Wednesday at 10:00 hours',
              'Thursday at 14:30 hours',
              'Friday at 09:00 hours',
              'Thursday at 10:00 hours'
            ],
            correctIndex: 1,
            explanation: 'He asks: "Can we postpone our meeting to Thursday afternoon at fourteen-thirty hours?"'
          },
          {
            id: 'l1-q8',
            question: 'Where is Captain Henderson\'s office located?',
            options: [
              'Ground floor, Room A-1',
              'Second floor, Room B-12',
              'First floor, Room C-4',
              'Hangar Charlie'
            ],
            correctIndex: 1,
            explanation: 'He specifies: "My office is on the second floor, Room B-Twelve."'
          }
        ]
      },
      {
        id: 'l1-act4',
        title: 'Airport Public Announcement & Weather Bulletin',
        context: 'Anuncio por altavoz en aeropuerto y reporte meteorológico',
        speakerRole: 'Airport Announcer',
        audioProwords: false,
        audioText: 'Attention all passengers on British Airways Flight Two-Four-One to Edinburgh. Boarding is now open at Gate Fourteen. Please have your passport and boarding pass ready. The weather in Edinburgh is currently cold and rainy with a temperature of nine degrees Celsius and strong winds. Please ensure your baggage complies with safety regulations. Thank you.',
        questions: [
          {
            id: 'l1-q9',
            question: 'Which boarding gate is announced for the flight to Edinburgh?',
            options: ['Gate 4', 'Gate 14', 'Gate 24', 'Gate 40'],
            correctIndex: 1,
            explanation: 'The announcement says: "Boarding is now open at Gate Fourteen."'
          },
          {
            id: 'l1-q10',
            question: 'What is the current weather condition in Edinburgh?',
            options: [
              'Sunny and warm, 25 degrees',
              'Cold and rainy, 9 degrees Celsius with strong winds',
              'Snowy and calm, zero degrees',
              'Foggy with no wind, 18 degrees'
            ],
            correctIndex: 1,
            explanation: 'The announcer states: "The weather in Edinburgh is currently cold and rainy with a temperature of nine degrees Celsius and strong winds."'
          }
        ]
      },
      {
        id: 'l1-act5',
        title: 'Ordering at the Officers\' Mess & Fast Food Counter',
        context: 'Pedido en cafetería de base, precios, cuenta y modo de pago',
        speakerRole: 'Staff and Customer',
        audioProwords: false,
        audioText: 'Good afternoon, Sir. What would you like to order? — Hello. I would like a grilled chicken sandwich, a portion of chips, and a bottle of mineral water, please. — Certainly. Would you like still or sparkling water? — Still water, please. How much is that altogether? — That comes to eight pounds seventy-five. Are you paying by cash or credit card? — By contactless debit card, please. Here you are. — Thank you, Sir. Take a seat, your order will be ready in five minutes.',
        questions: [
          {
            id: 'l1-q11',
            question: 'What food and drink items did the customer order?',
            options: [
              'A beef burger, salad and orange juice',
              'A grilled chicken sandwich, chips, and still mineral water',
              'Fish and chips with hot tea',
              'Pasta and sparkling water'
            ],
            correctIndex: 1,
            explanation: 'He orders: "a grilled chicken sandwich, a portion of chips, and a bottle of mineral water... Still water, please."'
          },
          {
            id: 'l1-q12',
            question: 'How much is the total bill and what payment method is used?',
            options: [
              '£5.00 in cash',
              '£8.75 paid by contactless debit card',
              '£12.50 by cheque',
              '£8.75 in euro banknotes'
            ],
            correctIndex: 1,
            explanation: 'The total is eight pounds seventy-five (£8.75) paid by contactless debit card.'
          }
        ]
      },
      {
        id: 'l1-act6',
        title: 'Alphabet, Name Spelling & Vehicle Check at Garrison Gate',
        context: 'Control de acceso militar: verificación de identidad, deletreo del apellido letra por letra y matrícula vehicular con abecedario y alfabeto fonético OTAN',
        speakerRole: 'Sentry Corporal & Visiting Argentine Officer',
        audioProwords: false,
        audioText: 'Halt! Good morning, Sir. Welcome to Catterick Garrison. May I inspect your military identification, please? — Good morning, Corporal. Here is my ID card and passport. — Thank you, Sir. Could you please spell your surname for the security register? — Certainly. My surname is MORALES: that is M-O-R-A-L-E-S. In NATO phonetics: Mike, Oscar, Romeo, Alfa, Lima, Echo, Sierra. — Understood, Captain Morales. And could you confirm the license plate of your rental vehicle? — Yes, it is Bravo-Kilo-seven-four-eight-Zulu. — Thank you, Captain. Pass through to building twelve on your right.',
        questions: [
          {
            id: 'l1-act6-q1',
            question: 'How does the officer spell his surname?',
            options: [
              'M-O-R-E-N-O',
              'M-O-R-A-L-E-S (Mike, Oscar, Romeo, Alfa, Lima, Echo, Sierra)',
              'M-A-R-T-I-N-E-Z',
              'M-I-L-L-E-R'
            ],
            correctIndex: 1,
            explanation: 'He spells: "M-O-R-A-L-E-S. In NATO phonetics: Mike, Oscar, Romeo, Alfa, Lima, Echo, Sierra."'
          },
          {
            id: 'l1-act6-q2',
            question: 'What is the license plate of the officer\'s rental vehicle?',
            options: [
              'Alfa-Bravo-one-two-three',
              'Bravo-Kilo-seven-four-eight-Zulu (BK-748-Z)',
              'Charlie-Delta-nine-nine-zero',
              'Echo-Foxtrot-five-zero-one'
            ],
            correctIndex: 1,
            explanation: 'The officer confirms: "Bravo-Kilo-seven-four-eight-Zulu."'
          }
        ]
      },
      {
        id: 'l1-act7',
        title: 'Numbers 1-100, Basic Math & Daily Duty Timetable',
        context: 'Cálculo de raciones en intendencia con operaciones básicas (plus, minus, equals) y coordinación de horarios de rutina (civil vs militar)',
        speakerRole: 'Quartermaster Sergeant & Mess Corporal',
        audioProwords: false,
        audioText: 'Corporal Jenkins, let us check our field ration inventory before lunchtime. How many ration packs do we have in storage? — Sergeant, we currently have forty-five ration packs in the main locker, plus twenty-five new boxes delivered this morning. — Right. Forty-five plus twenty-five equals seventy boxes in total. Now, the second platoon needs thirty boxes for their field exercise. So seventy minus thirty equals forty boxes remaining for tomorrow. — Exactly, Sergeant: forty boxes remain. And what time is the muster parade this afternoon? — The parade is at half past two in the afternoon, which is fourteen-thirty hours in military time. Please ensure the store is locked by quarter to five, or sixteen-forty-five hours. — Roger that, Sergeant!',
        questions: [
          {
            id: 'l1-act7-q1',
            question: 'What is the mathematical calculation for the remaining ration boxes?',
            options: [
              'One hundred minus ten equals ninety',
              'Seventy minus thirty equals forty boxes remaining (45 + 25 = 70; 70 - 30 = 40)',
              'Fifty plus twenty equals seventy',
              'Eighty minus forty equals forty'
            ],
            correctIndex: 1,
            explanation: 'They calculate: 45 + 25 = 70 total boxes, and 70 - 30 = 40 boxes remaining.'
          },
          {
            id: 'l1-act7-q2',
            question: 'What time is the afternoon parade in both civil and military time?',
            options: [
              'Quarter past one (13:15 hrs)',
              'Half past two in the afternoon (14:30 hours)',
              'Quarter to five (16:45 hours)',
              'Six o\'clock in the evening (18:00 hours)'
            ],
            correctIndex: 1,
            explanation: 'The sergeant states: "at half past two in the afternoon, which is fourteen-thirty hours in military time."'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'l1-read1',
        title: 'Daily Routine Order: British Infantry Battalion',
        textType: 'Orden del Día de Guarnición Militar',
        content: `HEADQUARTERS 1ST BATTALION, THE ROYAL ANGLIAN REGIMENT
DATE: 24 NOVEMBER

ROUTINE TIMETABLE:
06:00 hrs: Reveille.
06:30 - 07:15 hrs: Breakfast in the Central Mess.
07:30 hrs: Battalion Muster and Inspection on Parade Ground.
08:00 - 12:00 hrs: Field training and weapons handling drill (Assault Rifle SA80 A3).
12:30 - 13:30 hrs: Lunch.
14:00 - 16:30 hrs: Classroom instruction: NATO Map Reading and Radio Communications.
17:00 hrs: Evening retreat and lowering of the colours.
18:00 hrs: Dinner available in the Mess.
22:00 hrs: Lights out across all living quarters.

DUTY OFFICER: Captain J. Miller
ORDERLY SERGEANT: Sergeant D. Hughes
NOTE: All personnel deploying to the training ranges must draw ear protection and ballistic eye wear from the Armory before 07:45 hrs.`,
        glossary: [
          { term: 'Reveille', definition: 'Toque de diana / despertador militar' },
          { term: 'Muster', definition: 'Formación / pase de lista general' },
          { term: 'Lowering of the colours', definition: 'Arrió del pabellón nacional' },
          { term: 'Mess', definition: 'Casino / comedor de tropa u oficiales' }
        ],
        questions: [
          {
            id: 'l1-rq1',
            question: 'What subject is taught during classroom instruction between 14:00 and 16:30 hrs?',
            options: ['Foreign languages', 'NATO Map Reading and Radio Communications', 'Vehicle mechanics', 'First aid training'],
            correctIndex: 1,
            explanation: 'The text specifies "14:00 - 16:30 hrs: Classroom instruction: NATO Map Reading and Radio Communications."'
          },
          {
            id: 'l1-rq2',
            question: 'What must soldiers collect from the Armory before 07:45 hrs?',
            options: ['Rations and water bottles', 'Ear protection and ballistic eye wear', 'Radio sets and maps', 'Dress uniforms'],
            correctIndex: 1,
            explanation: 'The note states soldiers must draw "ear protection and ballistic eye wear from the Armory before 07:45 hrs."'
          },
          {
            id: 'l1-rq3',
            question: 'Who is the Orderly Sergeant on duty?',
            options: ['Captain J. Miller', 'Sergeant D. Hughes', 'Corporal Evans', 'Major Thomas'],
            correctIndex: 1,
            explanation: 'The notice lists: "ORDERLY SERGEANT: Sergeant D. Hughes".'
          }
        ]
      },
      {
        id: 'l1-read2',
        title: 'Accommodation Notice: Apartment for Rent Near Military Base',
        textType: 'Aviso Inmobiliario y Descripción de Vivienda',
        content: `PROPERTY FOR RENT – GARRISON VILLAGE, CATTERICK
Ref: AP-402 | Available from 1st December

Spacious 2-bedroom furnished flat, ideal for military officers or exchange personnel.
Location: 15 Victoria Road, just 500 metres from the Main Military Base Gate.

FEATURES AND FURNITURE:
• Living room: Large modern sofa, wooden dining table with 4 chairs, flat-screen television and high-speed Wi-Fi router.
• Kitchen: Fully equipped with electric cooker, microwave, refrigerator, washing machine and kitchen utensils.
• Bedrooms: Master bedroom with double bed and spacious wardrobe. Second bedroom with single bed and study desk.
• Bathroom: Bath with power shower, washbasin and central heating.
• Neighbourhood: Walking distance to local supermarket, pharmacy, bus stop and fitness centre.

RENTAL CONDITIONS:
Rent: £750 per calendar month (includes water rates; electricity and council tax not included).
Security Deposit: £750. No pets permitted.
Viewing by appointment: Contact Agent Mark Thompson on 01748 832900 or email mark@garrisonlettings.co.uk.`,
        glossary: [
          { term: 'Furnished flat', definition: 'Departamento amoblado' },
          { term: 'Wardrobe', definition: 'Placard / armario para ropa' },
          { term: 'Per calendar month', definition: 'Por mes calendario' },
          { term: 'Security deposit', definition: 'Depósito de garantía' }
        ],
        questions: [
          {
            id: 'l1-rq4',
            question: 'How many bedrooms does the property have and how far is it from the base?',
            options: [
              '1 bedroom, 5 miles away',
              '2 bedrooms, 500 metres from the main gate',
              '3 bedrooms, right inside the base',
              'Studio flat, 20 kilometres away'
            ],
            correctIndex: 1,
            explanation: 'The notice states: "Spacious 2-bedroom furnished flat... just 500 metres from the Main Military Base Gate."'
          },
          {
            id: 'l1-rq5',
            question: 'What furniture is provided in the master bedroom?',
            options: [
              'Two bunk beds and a sofa',
              'A double bed and a spacious wardrobe',
              'Only a study desk',
              'An unfurnished room'
            ],
            correctIndex: 1,
            explanation: 'The ad describes: "Master bedroom with double bed and spacious wardrobe."'
          },
          {
            id: 'l1-rq6',
            question: 'What is the monthly rent and what does it include?',
            options: [
              '£500 including electricity',
              '£750 per month, including water rates',
              '£1,000 all bills included',
              '£750 including council tax and electricity'
            ],
            correctIndex: 1,
            explanation: 'Rent is £750 per calendar month, and explicitly "includes water rates; electricity and council tax not included."'
          }
        ]
      },
      {
        id: 'l1-read3',
        title: 'The Garrison Bistro Menu & City Information',
        textType: 'Menú de Restaurante y Folleto de Servicios',
        content: `THE ROYAL CROWN GARRISON BISTRO
High Street, Richmond, North Yorkshire
Opening Hours: Monday to Saturday 11:30 - 22:00 | Sunday 12:00 - 20:00

STARTERS:
• Homemade Tomato & Basil Soup with warm bread roll - £4.50
• Traditional British Garlic Bread with melted cheddar cheese - £3.95

MAIN COURSES:
• Classic British Fish and Chips with mushy peas and tartar sauce - £11.50
• Grilled Chicken Breast with roasted potatoes and seasonal vegetables - £12.25
• Vegetarian Shepherd\'s Pie with lentils, carrots and mashed potato topping - £10.50

BEVERAGES:
• English Breakfast Tea / Fresh Coffee - £2.50
• Fresh Orange Juice - £3.00
• Mineral Water (still or sparkling, 500ml) - £2.00

SPECIAL NOTICE FOR SERVICE PERSONNEL:
Show your military identification card to receive a 10% discount on all food items.
Table reservations recommended on Friday and Saturday evenings: Call 01748 824555.
Payment accepted: Cash, Visa, MasterCard, and Apple Pay.`,
        glossary: [
          { term: 'Mushy peas', definition: 'Puré tradicional británico de arvejas' },
          { term: 'Shepherd\'s pie', definition: 'Pastel de carne o vegetales con puré de papas gratinado' },
          { term: 'Service personnel', definition: 'Personal militar en servicio activo' }
        ],
        questions: [
          {
            id: 'l1-rq7',
            question: 'How much does the Classic British Fish and Chips cost before discount?',
            options: ['£4.50', '£10.50', '£11.50', '£12.25'],
            correctIndex: 2,
            explanation: 'The menu lists "Classic British Fish and Chips... £11.50".'
          },
          {
            id: 'l1-rq8',
            question: 'What benefit do military personnel receive with their ID card?',
            options: [
              'Free dessert',
              'A 10% discount on all food items',
              'Free parking',
              'A 50% discount on drinks'
            ],
            correctIndex: 1,
            explanation: 'The notice says: "Show your military identification card to receive a 10% discount on all food items."'
          }
        ]
      },
      {
        id: 'l1-read4',
        title: 'Exchange Officer Personal Profile & Travel Questionnaire',
        textType: 'Perfil Personal de Oficial y Formulario',
        content: `INTERNATIONAL MILITARY LIAISON OFFICE
EXCHANGE OFFICER PROFILE FORM

1. PERSONAL DETAILS:
• Full Name: Capitán Martin Alejandro Silva
• Nationality: Argentine
• Date of Birth: 14th August 1993 (Age: 31)
• Marital Status: Married (Spouse: Laura, 2 children: Lucas aged 5, Sofia aged 2)
• Native Language: Spanish | Other Languages: English (STANAG Level 1), French (basic)

2. MILITARY ASSIGNMENT:
• Service Branch: Argentine Army - Cavalry (Arma de Caballería)
• Home Unit: 10th Tank Cavalry Regiment, Azul, Buenos Aires
• Current Mission: 6-month multinational training detachment in Salisbury Plain, UK

3. INTERESTS, SPORTS AND PREFERENCES:
• Sports: Football, horse riding, running (5 km three times a week)
• Hobbies: Reading military history, cooking Argentine barbecue, playing the guitar
• Favourite season: Spring, because the weather is mild and pleasant for outdoor physical training.`,
        glossary: [
          { term: 'Marital status', definition: 'Estado civil' },
          { term: 'Spouse', definition: 'Cónyuge / esposo/a' },
          { term: 'Cavalry', definition: 'Caballería / blindados' }
        ],
        questions: [
          {
            id: 'l1-rq9',
            question: 'What is Captain Silva\'s marital status and family composition?',
            options: [
              'Single with no children',
              'Married to Laura with two young children',
              'Divorced with one son',
              'Widowed'
            ],
            correctIndex: 1,
            explanation: 'The profile confirms: "Married (Spouse: Laura, 2 children: Lucas aged 5, Sofia aged 2)".'
          },
          {
            id: 'l1-rq10',
            question: 'Which sports and frequency of exercise does Captain Silva practice?',
            options: [
              'Rugby every weekend',
              'Football, horse riding, and running 5 km three times a week',
              'Swimming and tennis daily',
              'Basketball once a month'
            ],
            correctIndex: 1,
            explanation: 'He reports: "Sports: Football, horse riding, running (5 km three times a week)".'
          }
        ]
      },
      {
        id: 'l1-read5',
        title: 'Soldier\'s Daily Life: Schedules (12h vs 24h), Sports (Play/Go/Do) & Mess Budgeting',
        textType: 'Guía de Rutina Diaria, Deportes y Finanzas Personales en la Base',
        content: `GARRISON SOLDIER HANDBOOK: DAILY LIFE, FITNESS & BUDGET

1. DAILY TIMETABLE (CIVIL VS MILITARY TIME):
Every soldier at the base observes a precise daily routine:
• 06:00 hrs (six o'clock in the morning): Reveille and personal hygiene.
• 07:15 hrs (quarter past seven in the morning): Breakfast muster in the central mess.
• 08:30 hrs (half past eight in the morning): Morning inspection and drill practice.
• 12:30 hrs (half past twelve in the afternoon): Lunch break.
• 16:45 hrs (quarter to five in the afternoon): Physical training (PT) and sports.
• 19:30 hrs (half past seven in the evening): Dinner and leisure time.
• 22:00 hrs (ten o'clock at night): Lights out and dormitory silence.

2. SPORTS AND FITNESS (PLAY / GO / DO RULE):
Physical fitness is mandatory. Soldiers select their weekly activities according to standard grammatical rules:
• PLAY (team and ball sports): Soldiers play football on Tuesdays, play basketball on Thursdays, and play tennis on Saturday afternoons.
• GO (outdoor and -ing activities): Soldiers go running around the perimeter three times a week, go swimming at the garrison pool, and go cycling on weekends.
• DO (individual martial arts & conditioning): Recruits do judo and karate for unarmed combat, and do physical training (PT) every morning.
In personal leisure time, soldiers love cooking in the kitchen, like reading technical books, enjoy listening to music, and hate wasting time.

3. CANTEEN EXPENSES & BASIC ARITHMETIC:
Each soldier receives a weekly pocket allowance of eighty pounds (£80) for canteen and laundry expenses:
• On Monday, Private Evans spends twenty-five pounds (£25) on soap, boot polish, and writing paper: eighty minus twenty-five is fifty-five pounds (£80 - £25 = £55).
• On Wednesday, he receives a fifteen-pound refund for a train ticket: fifty-five plus fifteen equals seventy pounds (£55 + £15 = £70).
• On Friday, he buys coffee and snacks for sixteen pounds (£16): seventy minus sixteen is fifty-four pounds (£70 - £16 = £54).
His final weekly balance is fifty-four pounds (£54).`,
        glossary: [
          { term: 'Quarter past seven', definition: 'Siete y cuarto (07:15)' },
          { term: 'Half past twelve', definition: 'Doce y media (12:30)' },
          { term: 'Quarter to five', definition: 'Un cuarto para las cinco (16:45)' },
          { term: 'Play / Go / Do', definition: 'Regla de verbos para deportes: Play con pelota, Go con -ing, Do con artes marciales y ejercicios' },
          { term: 'Minus / Plus', definition: 'Menos (-) y Más (+) para operaciones de resta y suma' },
          { term: 'Allowance', definition: 'Asignación económica / viático semanal' }
        ],
        questions: [
          {
            id: 'l1-r5-q1',
            question: 'What time does the morning breakfast muster take place in civil and military time?',
            options: [
              'Six o\'clock in the morning (06:00 hrs)',
              'Quarter past seven in the morning (07:15 hrs)',
              'Half past eight (08:30 hrs)',
              'Ten o\'clock at night (22:00 hrs)'
            ],
            correctIndex: 1,
            explanation: 'The guide states: "07:15 hrs (quarter past seven in the morning): Breakfast muster in the central mess."'
          },
          {
            id: 'l1-r5-q2',
            question: 'According to the sports classification rule, which combination is grammatically correct?',
            options: [
              'Play running, go football, do cycling',
              'Play football (ball sport), go running (-ing activity), and do judo (martial art)',
              'Do tennis, play swimming, go karate',
              'Play judo, go basketball, do running'
            ],
            correctIndex: 1,
            explanation: 'The rule requires: PLAY for ball sports (football), GO for -ing activities (running), and DO for martial arts (judo).'
          },
          {
            id: 'l1-r5-q3',
            question: 'What is Private Evans\'s balance calculation after adding the £15 refund to his remaining £55?',
            options: [
              'Fifty-five minus fifteen equals forty pounds (£40)',
              'Fifty-five plus fifteen equals seventy pounds (£55 + £15 = £70)',
              'Eighty plus twenty equals one hundred pounds (£100)',
              'Seventy minus twenty-five equals forty-five pounds (£45)'
            ],
            correctIndex: 1,
            explanation: 'The text explains: "fifty-five plus fifteen equals seventy pounds (£55 + £15 = £70)."'
          }
        ]
      }
    ],
    useOfLanguage: [
      {
        id: 'l1-u1',
        title: 'Verb To Be & Military Identity',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'Lieutenant Rossi is from Argentina, but he ______ stationed at a joint peacekeeping centre this month.',
        options: ['am', 'is', 'are', 'be'],
        correctAnswer: 'is',
        explanation: 'The subject "he / Lieutenant Rossi" is third person singular, requiring the verb "is".',
        instructions: 'Choose the correct form of the verb "to be".'
      },
      {
        id: 'l1-u2',
        title: 'Question Making with Verb To Be',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: '______ you the new communications signaller from the Second Battalion?',
        options: ['Is', 'Are', 'Do', 'Have'],
        correctAnswer: 'Are',
        explanation: 'Questions with the subject "you" and noun complement take "Are you...?".',
        instructions: 'Select the correct question word for the sentence.'
      },
      {
        id: 'l1-u3',
        title: 'Present Simple: Daily Routines & Frequency Adverb',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'The sentries ______ check identification cards at the base gate before granting entry.',
        options: ['always', 'are always', 'always are', 'always to'],
        correctAnswer: 'always',
        explanation: 'Frequency adverbs like "always" go immediately before the main verb in present simple: "always check".',
        instructions: 'Choose the correct word order with frequency adverbs.'
      },
      {
        id: 'l1-u4',
        title: 'Present Continuous: Actions in Progress',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'Look at the parade square! The soldiers ______ standard combat uniform for the general inspection.',
        options: ['wears', 'are wearing', 'wear', 'is wearing'],
        correctAnswer: 'are wearing',
        explanation: 'For actions occurring right now ("Look!"), use Present Continuous: "are wearing" (plural subject: soldiers).',
        instructions: 'Complete with the present continuous form.'
      },
      {
        id: 'l1-u5',
        title: 'Future with "Going to": Planned Intentions',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'Our reconnaissance platoon ______ conduct a night navigation exercise tomorrow evening.',
        options: ['is going to', 'are going to', 'going to', 'will to'],
        correctAnswer: 'is going to',
        explanation: 'Singular collective subject "Our reconnaissance platoon" takes "is going to + base verb".',
        instructions: 'Select the correct future expression of intention.'
      },
      {
        id: 'l1-u6',
        title: 'Past Simple of "to be" (Recognition: was/were)',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'Captain Davis and Major Evans ______ in London yesterday for the NATO bilateral conference.',
        options: ['was', 'were', 'is', 'are'],
        correctAnswer: 'were',
        explanation: 'Plural subject (two officers) in the past ("yesterday") takes "were".',
        instructions: 'Select the correct past form of the verb "to be".'
      },
      {
        id: 'l1-u7',
        title: 'Modals: Ability and Permission with "Can"',
        category: 'modals',
        type: 'multiple-choice',
        prompt: 'Excuse me, Corporal. ______ I use the radio set to call the main guardroom?',
        options: ['Can', 'Must', 'Am', 'Do'],
        correctAnswer: 'Can',
        explanation: '"Can I...?" is used to request permission politely.',
        instructions: 'Choose the modal verb expressing permission.'
      },
      {
        id: 'l1-u8',
        title: 'Modals: Polite Requests with "Could"',
        category: 'modals',
        type: 'multiple-choice',
        prompt: '______ you tell me the way to the ammunition depot, please?',
        options: ['Could', 'Must', 'Should', 'Are'],
        correctAnswer: 'Could',
        explanation: '"Could you tell me...?" is the standard polite request structure.',
        instructions: 'Select the polite request modal.'
      },
      {
        id: 'l1-u9',
        title: 'Modals: Obligation with "Have to"',
        category: 'modals',
        type: 'multiple-choice',
        prompt: 'According to barracks regulations, every private ______ clean his rifle after firing practice.',
        options: ['has to', 'have to', 'having', 'is to'],
        correctAnswer: 'has to',
        explanation: '"Every private" is grammatically third-person singular, taking "has to".',
        instructions: 'Complete the sentence with the appropriate modal expression of obligation.'
      },
      {
        id: 'l1-u10',
        title: 'Imperatives & Giving Directions',
        category: 'modals',
        type: 'multiple-choice',
        prompt: 'To reach the military hospital, ______ straight on for two hundred metres, then turn right at the traffic lights.',
        options: ['go', 'goes', 'going', 'to go'],
        correctAnswer: 'go',
        explanation: 'Imperative instructions use the base form of the verb without "to" or desinences: "go straight on".',
        instructions: 'Select the correct imperative form.'
      },
      {
        id: 'l1-u11',
        title: 'Possessive Case and Pronouns',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'This is the ______ office; please knock on the door before entering.',
        options: ['Colonel', 'Colonel\'s', 'Colonels', 'Colonel is'],
        correctAnswer: 'Colonel\'s',
        explanation: 'Possessive case singular uses apostrophe + s: "the Colonel\'s office" (el despacho del coronel).',
        instructions: 'Choose the correct possessive case form.'
      },
      {
        id: 'l1-u12',
        title: 'Demonstrative Adjectives (This / That / These / Those)',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'Please take ______ documents right here on my desk and deliver them to the Adjutant.',
        options: ['this', 'that', 'these', 'those'],
        correctAnswer: 'these',
        explanation: '"These" is used for plural items located close to the speaker ("right here on my desk").',
        instructions: 'Select the correct demonstrative adjective.'
      },
      {
        id: 'l1-u13',
        title: 'Countable / Uncountable Nouns (Some / Any)',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'Are there ______ spare magazines in the armory rack?',
        options: ['some', 'any', 'much', 'a'],
        correctAnswer: 'any',
        explanation: 'In questions and negative statements with plural countable nouns, use "any".',
        instructions: 'Choose the correct quantifier.'
      },
      {
        id: 'l1-u14',
        title: 'Existence with "There is / There are"',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'In the officers\' quarters, ______ a private bedroom, a desk, and a modern bathroom.',
        options: ['there is', 'there are', 'is there', 'it has'],
        correctAnswer: 'there is',
        explanation: 'Singular items in the first listed noun ("a private bedroom") take "there is".',
        instructions: 'Select the correct existential structure.'
      },
      {
        id: 'l1-u15',
        title: 'Prepositions of Place & Time',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'The briefing starts ______ zero-eight-hundred hours and takes place ______ the main lecture room.',
        options: ['at / in', 'on / at', 'in / on', 'at / on'],
        correctAnswer: 'at / in',
        explanation: 'Precise clock times take "at" (at 08:00 hrs) and enclosed rooms take "in" (in the room).',
        instructions: 'Select the correct prepositions.'
      },
      {
        id: 'l1-u16',
        title: 'Connectors & Suggestions',
        category: 'connectors',
        type: 'multiple-choice',
        prompt: 'I want to improve my spoken English ______ I need it for overseas peacekeeping missions.',
        options: ['because', 'but', 'or', 'too'],
        correctAnswer: 'because',
        explanation: '"Because" introduces the reason or explanation for an action.',
        instructions: 'Select the appropriate connector.'
      },
      {
        id: 'l1-u17',
        title: 'English Alphabet & Letter Spelling',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: '"Could you please spell your surname for the visitor register, Captain?" — "Certainly. It is spelled ______."',
        options: ['G-A-R-C-I-A', 'G-E-R-C-I-E', 'J-A-R-S-I-A', 'G-A-R-K-I-A'],
        correctAnswer: 'G-A-R-C-I-A',
        explanation: 'The English letter names for the surname GARCIA are G (/dʒiː/), A (/eɪ/), R (/ɑːr/), C (/siː/), I (/aɪ/), A (/eɪ/).',
        instructions: 'Select the correct English alphabet spelling sequence.'
      },
      {
        id: 'l1-u18',
        title: 'Numbers 1 to 100 & Basic Arithmetic (Plus, Minus, Equals)',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'In our supply warehouse: "Fifty-five ration boxes ______ twenty-five boxes ______ eighty boxes in total."',
        options: ['plus / equals', 'minus / equals', 'plus / minus', 'equals / plus'],
        correctAnswer: 'plus / equals',
        explanation: 'Addition uses "plus" (+) and the result is introduced by "equals" or "is" (=): 55 + 25 = 80.',
        instructions: 'Choose the correct mathematical words for the addition operation.'
      },
      {
        id: 'l1-u19',
        title: 'Telling Time: 12-Hour Civil Clock vs 24-Hour Military Clock',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'The evening parade starts at 18:30 hours. In civilian 12-hour clock, this is ______.',
        options: ['half past six in the evening (6:30 p.m.)', 'quarter to seven in the morning (6:45 a.m.)', 'six o\'clock sharp (6:00 p.m.)', 'twenty past eight at night (8:20 p.m.)'],
        correctAnswer: 'half past six in the evening (6:30 p.m.)',
        explanation: '18:30 hours in 24-hour military time corresponds to 6:30 p.m. or "half past six in the evening".',
        instructions: 'Convert the military time to standard civilian time.'
      },
      {
        id: 'l1-u20',
        title: 'Sports Collocations: The Play, Go, Do Rule',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'During sports afternoon, soldiers ______ football on the pitch, ______ swimming at the base pool, and ______ karate in the gym.',
        options: ['play / go / do', 'do / play / go', 'go / do / play', 'play / do / go'],
        correctAnswer: 'play / go / do',
        explanation: 'The sports verb rule states: PLAY for ball and team games (football), GO for activities ending in -ing (swimming), and DO for martial arts and individual conditioning (karate).',
        instructions: 'Complete with the correct sports verbs following the Play / Go / Do rule.'
      },
      {
        id: 'l1-u21',
        title: 'Leisure & Hobbies: Like, Love, Hate + Gerund (-ing)',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'On weekends off duty, Lieutenant Rossi loves ______ historical biographies and really enjoys ______ running in the countryside.',
        options: ['reading / going', 'read / go', 'reads / goes', 'to reading / to going'],
        correctAnswer: 'reading / going',
        explanation: 'Verbs of liking and preference (love, enjoy, like, hate) are followed by the gerund form (-ing): "loves reading" and "enjoys going".',
        instructions: 'Select the correct gerund verb forms for expressing hobbies.'
      }
    ],
    writing: [
      {
        id: 'l1-w1',
        title: 'Personal Military Registration & In-Processing Form',
        type: 'form',
        scenario: 'You are arriving at a multinational military exercise in the United Kingdom. Complete the reception desk in-processing form with your military and personal details.',
        targetWordCount: '40-60 words',
        requiredElements: [
          'Full Name and Argentine Military Rank',
          'Service Number and Military Branch (Infantry, Cavalry, Artillery, Engineers, Signals)',
          'Current Base / Unit in Argentina and Date of Birth',
          'Dietary requirements, uniform size and contact details'
        ],
        modelAnswer: 'Full Name: Captain Juan Manuel Morales\nRank: Captain (Ejército Argentino - Infantry)\nService ID: EA-884210 | Date of Birth: 12 May 1992\nCurrent Unit: 6th Mountain Infantry Regiment, Neuquén, Argentina\nPassport / NATO ID: AR-9923841\nNext of Kin: Maria Morales (Spouse) - Tel: +54 9 11 4455 6677\nDietary: Nil (Standard military rations)\nUniform Size: Medium (UK 40) / Boots UK 9',
        usefulPhrases: [
          'My rank is...',
          'I serve in the Infantry / Cavalry / Artillery branch',
          'Stationed at...',
          'Date of birth is...',
          'Next of kin is...'
        ]
      },
      {
        id: 'l1-w2',
        title: 'Informal Email: Introducing Yourself, Routine & Accommodations',
        type: 'informal_email',
        scenario: 'Write an email to Captain Mark Evans, your British exchange counterpart, introducing yourself before your deployment. Describe your family, typical daily routine, and ask about your accommodation near the barracks.',
        targetWordCount: '70-90 words',
        requiredElements: [
          'Friendly opening and self-introduction (name, rank, country)',
          'Brief mention of your family and hobbies',
          'Description of your daily routine',
          'Inquiry about the flat / accommodation (furniture, heating, distance)',
          'Polite sign-off'
        ],
        modelAnswer: 'Dear Mark,\n\nI hope this email finds you well. My name is Captain Martin Silva from Argentina. I am married and have two young children. In my free time, I enjoy running and playing football.\n\nMy daily routine in Argentina starts early: reveille is at 06:00, followed by physical training and battalion duties. I usually finish work at 17:00.\n\nCould you please tell me about my accommodation near Catterick Garrison? Is the flat furnished, and does it have central heating? How far is it from the main gate?\n\nI look forward to meeting you soon.\n\nBest regards,\nMartin',
        usefulPhrases: [
          'Dear [Name],',
          'I hope you are well.',
          'My daily routine starts at...',
          'In my free time, I like...',
          'Could you tell me about...?',
          'Is the flat furnished?',
          'Best regards,'
        ]
      },
      {
        id: 'l1-w3',
        title: 'Note of Invitation: Accepting or Declining a Mess Dinner',
        type: 'informal_email',
        scenario: 'You receive an invitation from Major Sterling to a formal welcome dinner at the Officers\' Mess this Friday at 19:30 hours. Write a short note either accepting or declining with an apology and reason.',
        targetWordCount: '40-60 words',
        requiredElements: [
          'Polite greeting to the host officer',
          'Expression of gratitude for the invitation',
          'Clear acceptance or decline with reason',
          'Confirmation of dress code or inquiry about time',
          'Polite closing'
        ],
        modelAnswer: 'Dear Major Sterling,\n\nThank you very much for your kind invitation to the Officers\' Mess welcome dinner this Friday evening at 19:30 hours. \n\nI would love to attend and look forward to meeting the British battalion officers. Could you please confirm if the dress code is service dress or formal mess kit?\n\nThank you again for your hospitality.\n\nYours sincerely,\nLieutenant Rossi',
        usefulPhrases: [
          'Thank you very much for the invitation to...',
          'I would love to attend...',
          'I am afraid I cannot attend because...',
          'Could you please confirm the dress code?',
          'Yours sincerely,'
        ]
      },
      {
        id: 'l1-w4',
        title: 'Daily Schedule, Sports (Play/Go/Do) & Basic Canteen Budget Form',
        type: 'form',
        scenario: 'Complete a course registration module detailing your name spelling, daily routine with civil (12h) and military (24h) times, weekly sports routine with Play/Go/Do, and a simple weekly canteen calculation.',
        targetWordCount: '60-80 words',
        requiredElements: [
          'Full name spelled out letter by letter',
          'Three daily activities with both civil (a.m./p.m.) and military (hours) times',
          'Three sports activities using Play, Go, and Do correctly',
          'A simple mathematical calculation of weekly expenses using plus, minus, and equals'
        ],
        modelAnswer: 'Surname & Spelling: G-A-R-C-I-A (Garcia)\nDaily Routine Timetable:\n• Reveille & breakfast: 06:30 hrs (half past six in the morning)\n• Classroom lectures: 13:15 hrs (quarter past one in the afternoon)\n• Evening retreat: 18:00 hrs (six o\'clock in the evening)\nSports Activities:\n• Tuesdays: I play football with my platoon.\n• Thursdays: I go running around the base.\n• Saturdays: I do judo in the garrison gym.\nWeekly Allowance Calculation:\nMy allowance is eighty pounds (£80). I spend twenty-five pounds on laundry and fifteen pounds on snacks: twenty-five plus fifteen equals forty pounds (£40). Eighty minus forty leaves forty pounds (£40) remaining.',
        usefulPhrases: [
          'My surname is spelled...',
          'In civil time it is [time], which corresponds to [hours] in military time',
          'I play [ball sport] / I go [running/swimming] / I do [judo/gymnastics]',
          '[Amount] plus [amount] equals...',
          '[Amount] minus [amount] is...'
        ]
      }
    ],
    speaking: [
      {
        id: 'l1-s1',
        title: 'Reporting to British Liaison Officer',
        situation: 'You are reporting in person to Major Sterling, the British Army liaison officer at the training centre.',
        role: 'Argentine Army Officer / NCO',
        prompt: 'Introduce yourself politely, state your name, Argentine rank, home regiment, and express your readiness to start the course.',
        recommendedDuration: '45-60 seconds',
        modelResponse: 'Good morning, Major Sterling, Sir. I am Lieutenant Garcia from the Argentine Army. I belong to the First Mechanised Brigade in Argentina. It is a pleasure to meet you. I am here for the Joint Military English Course, and I am ready to begin today\'s briefing.',
        pronunciationTips: [
          'Pronounce "Lieutenant" in British English as /lef-TEN-ənt/ (not /loo-TEN-ənt/).',
          'Say "Sir" clearly with a non-rhotic British vowel /sɜː/.',
          'Keep your tone formal, confident, and crisp.'
        ],
        keyVocabulary: ['Good morning Sir', 'Lieutenant', 'Regiment', 'Pleasure to meet you', 'Ready for duty']
      },
      {
        id: 'l1-s2',
        title: 'Personal Interview: Biographical Information & Hobbies',
        situation: 'You are attending an oral interview at the language wing. The examiner asks about your background, family, daily life, and interests.',
        role: 'Military Student / Officer',
        prompt: 'Answer the examiner\'s questions: where you are from, your marital status, your daily routine, what you like doing on weekends, and why you are learning English.',
        recommendedDuration: '60-90 seconds',
        modelResponse: 'I am from Buenos Aires, Argentina. I am thirty-one years old and I am married with two children. On weekdays, I usually wake up at six o\'clock and do physical training with my unit. In the evening, I like cooking and spending time with my family. On weekends, I love playing football and watching sports. I am learning English because it is essential for multinational peacekeeping operations and communication with allied armed forces.',
        pronunciationTips: [
          'Differentiate between "thirty" /ˈθɜːti/ and "thirteen" /θɜːˈtiːn/.',
          'Pronounce the "th" in "with" and "brother" smoothly /ð/.',
          'Use natural sentence stress on frequency words: "USUALLY wake up", "ALWAYS check".'
        ],
        keyVocabulary: ['Buenos Aires', 'Thirty-one years old', 'Married with children', 'Wake up at six', 'Playing football', 'Peacekeeping operations']
      },
      {
        id: 'l1-s3',
        title: 'Service Interaction: Ordering at a Restaurant & Reserving',
        situation: 'You are at a restaurant near the base with a colleague. Call to reserve a table or order food at the counter, inquire about prices, and ask for the bill.',
        role: 'Customer / Officer on Leave',
        prompt: 'Order a starter, main course, and drink. Inquire about payment with a debit card, and ask for the bill politely.',
        recommendedDuration: '60-75 seconds',
        modelResponse: 'Good evening. We would like a table for two, please. — For our main course, I would like the grilled fish with vegetables, and my colleague would like the chicken sandwich. Could we also have two bottles of still mineral water, please? — Excuse me, could we have the bill, please? Do you accept contactless credit cards? Thank you very much, keep the change.',
        pronunciationTips: [
          'Use polite rising intonation on requests: "Could we have the bill, please? ↗"',
          'Pronounce "would like" smoothly: /wʊd laɪk/ (avoid pronouncing the "l" in "would").',
          'Clear pronunciation of currency: "Pounds" /paʊndz/.'
        ],
        keyVocabulary: ['Table for two', 'I would like', 'Still water', 'Could we have the bill?', 'Credit card', 'Keep the change']
      },
      {
        id: 'l1-s4',
        title: 'Oral Interview: Spelling, Daily Timetable (12h/24h) & Sports (Play/Go/Do)',
        situation: 'Part 1 Oral Exam: The examiner asks you to spell your surname, describe your daily timetable using both civil and military time, and explain which sports and hobbies you practice.',
        role: 'Candidate responding to examiner',
        prompt: 'Spell your surname letter by letter, state your daily routine times in both civilian (12-hour) and military (24-hour) formats, and describe your sports using Play, Go, and Do.',
        recommendedDuration: '60-90 seconds',
        modelResponse: 'Good morning, examiner. My surname is Sanchez. That is spelled S-A-N-C-H-E-Z: Sierra, Alfa, November, Charlie, Hotel, Echo, Zulu. My daily military duties begin at zero-seven-hundred hours, which is seven o\'clock in the morning. We have lunch at twelve-thirty hours, or half past twelve, and we finish duty at sixteen-thirty hours, or half past four in the afternoon. For sports and fitness, I play basketball with my company on Mondays, I go running three times a week around the perimeter, and I do judo in the gymnasium. In my leisure time, I really love reading military history and I enjoy spending time with my family.',
        pronunciationTips: [
          'Pronounce letters crisply: S (/es/), A (/eɪ/), N (/en/), C (/siː/), H (/eɪtʃ/), E (/iː/), Z (/zed/ in British English).',
          'Clearly contrast "half past twelve" with "twelve-thirty hours".',
          'Apply the sports collocations smoothly: "play basketball", "go running", "do judo".'
        ],
        keyVocabulary: ['Spelled S-A-N-C-H-E-Z', 'Seven o\'clock in the morning', 'Zero-seven-hundred hours', 'Half past twelve', 'Play basketball', 'Go running', 'Do judo', 'Love reading']
      }
    ]
  },

  // =========================================================================
  // NIVEL 2 (A2)
  // =========================================================================
  {
    levelNumber: 2,
    name: 'Nivel 2 – Pre-Intermedio Inicial (A2 • STANAG 6001 Nivel 1)',
    cefr: 'A2',
    clockHours: 120,
    academicHours: 160,
    accumulatedClockHours: 240,
    accumulatedAcademicHours: 320,
    generalObjective: 'Que el usuario logre superar el límite de una experiencia pasiva de recepción y habiendo asimilado los principios básicos pueda desenvolverse al estar en contacto con parlantes nativos o no nativos en situaciones familiares de la vida cotidiana y militar.',
    thematicCompetencies: [
      'Las compras de comida, mobiliario, vestimenta. Precios, gastos y dinero.',
      'La moda y la ropa: vestimenta formal, de combate (uniforme) y deportiva.',
      'El trabajo y el lugar de trabajo: organigramas, jerarquías, funciones y puestos.',
      'Personas: descripción física, personalidad y estados de ánimo.',
      'Biografías sencillas de figuras históricas y militares.',
      'Lugares: países, ciudades, bases y cuarteles militares.',
      'Viajes, turismo, hotelería y transporte.',
      'Señales de tránsito y navegación terrestre.',
      'El clima y condiciones meteorológicas para operaciones.',
      'Servicios y comunicaciones telefónicas formales.',
      'La salud, enfermedades, primeros auxilios y accidentes menores.',
      'Vehículos militares y tecnología (blindados, transporte de personal, drones/UAV).'
    ],
    speechActs: [
      'Pedir productos, pedir y dar información sobre calidad, precio y especificaciones.',
      'Describir tareas de trabajo y comentar un organigrama militar (cadena de mando).',
      'Dar órdenes, instrucciones o consignas técnicas.',
      'Solicitar ayuda en una emergencia (ambulancia, bomberos, policía militar).',
      'Declarar como testigo o protagonista de un incidente o accidente de tránsito.',
      'Expresar obligación o ausencia de obligación (must, have to, don\'t have to).',
      'Referirse a eventos pasados y acciones finalizadas.'
    ],
    grammaticalContents: [
      'Simple Present vs Present Continuous (state verbs vs action verbs)',
      'Time clauses with: when, as soon as, before, after, until',
      'Past Simple: regular and irregular verbs; there was / there were',
      'Past Continuous: parallel actions with while, interrupted actions with when',
      'Future: Going to (plans), Will (spontaneous decisions, predictions), Present Continuous for arrangements',
      'Shall for offers and suggestions',
      'Modals: must / mustn\'t (prohibition), have to / have got to (job duties), should (advice)',
      'Conditional sentences Type 1: If + simple present, will + infinitive',
      'Comparatives and superlatives (regular & irregular)',
      'Indefinite pronouns: some-, any-, no-, every- (body, thing, where)',
      'Countable vs Uncountable nouns; How much / How many; a few, a little, a lot of',
      'Connectors: also, if, so, for example; Time sequence: First, Then, Next, After that, Finally',
      'Phrasal verbs: look for, look after, try on, eat out, fill in, watch out'
    ],
    vocabularyTopics: [
      'Military vehicles (Armoured Personnel Carrier - APC, Main Battle Tank, Patrol 4x4, UAV)',
      'A military base: Guardhouse, Headquarters (HQ), Armory, Barracks, Drill square, Mess',
      'Military organizational units: Fireteam, Section, Platoon, Company, Battalion, Brigade',
      'Health and field medical kit: bandage, tourniquet, fracture, stretcher',
      'Weather conditions: foggy, severe rainfall, gale-force winds, zero visibility',
      'Street and tactical signs, checkpoints, convoy rules'
    ],
    militarySpecificTopics: [
      'British Army vehicle terminology & designations',
      'Organizational structure: Section (8 soldiers), Platoon (30 soldiers), Company (100+ soldiers)',
      'Emergency response & police/accident witness statements',
      'Military telephone etiquette & standard messaging'
    ],
    culturalReflection: [
      'Hábitos cotidianos británicos en el cuartel y la vida civil.',
      'Diferencias entre vestimenta civil y uniformes británicos (No. 1 Dress, No. 2 Service Dress, Multi-Terrain Pattern MTP).',
      'El sistema de salud británico (NHS) y atención médica en campaña.'
    ],
    listening: [
      {
        id: 'l2-act1',
        title: 'Base Emergency Call & Traffic Incident',
        context: 'Llamada de emergencia por incidente en el perímetro sur de la base',
        speakerRole: 'Military Police Dispatcher & Patrol Corporal',
        audioProwords: true,
        audioText: 'Military Police Desk, Corporal Jenkins speaking. What is your emergency? — Corporal, this is Lance Corporal Reed from South Gate. There was a collision between a supply truck and a civilian vehicle at Checkpoint Three. Nobody is fatally injured, but the civilian driver has a laceration on his arm. We need an ambulance and a recovery vehicle immediately. The road is completely blocked. Over. — Roger that, Reed. Medical response team dispatched right now. Keep both drivers calm and set up warning flares. Out.',
        questions: [
          {
            id: 'l2-q1',
            question: 'Where did the collision take place?',
            options: ['Main Headquarters', 'Checkpoint Three at South Gate', 'The central fuel depot', 'Hangar Bravo'],
            correctIndex: 1,
            explanation: 'Lance Corporal Reed reports the collision took place at "Checkpoint Three" near South Gate.'
          },
          {
            id: 'l2-q2',
            question: 'What injury is reported?',
            options: ['A broken leg', 'A severe concussion', 'A laceration on the civilian driver\'s arm', 'No injuries at all'],
            correctIndex: 2,
            explanation: 'The report states: "the civilian driver has a laceration on his arm."'
          },
          {
            id: 'l2-q3',
            question: 'What immediate instruction does the MP dispatcher give?',
            options: [
              'Arrest both drivers immediately',
              'Keep both drivers calm and set up warning flares',
              'Abandon the vehicles and withdraw',
              'Cancel all further deliveries'
            ],
            correctIndex: 1,
            explanation: 'The dispatcher orders: "Keep both drivers calm and set up warning flares."'
          }
        ]
      },
      {
        id: 'l2-act2',
        title: 'Tactical Radio Check & Equipment Readiness',
        context: 'Comprobación de enlace radial matutino entre el Puesto de Mando y las patrullas',
        speakerRole: 'Duty Signals Officer & Patrol Leader',
        audioProwords: true,
        audioText: 'All stations, this is Control. Radio check, report your signal strength and readability. Over. — Control, this is Patrol Alfa. Reading you loud and clear. All communications equipment operational, batteries at ninety percent. Over. — Roger Alfa, you are loud and clear also. Maintain radio silence until zero-six-hundred hours unless engaged. Out.',
        questions: [
          {
            id: 'l2-act2-q1',
            question: 'What is Patrol Alfa\'s radio readability?',
            options: ['Unreadable', 'Weak with heavy interference', 'Loud and clear', 'Intermittent'],
            correctIndex: 2,
            explanation: 'Patrol Alfa states: "Reading you loud and clear."'
          },
          {
            id: 'l2-act2-q2',
            question: 'Until what time must Patrol Alfa maintain radio silence?',
            options: ['Until zero-six-hundred hours (06:00)', 'Until midnight', 'Until next Sunday', 'Until the convoy arrives'],
            correctIndex: 0,
            explanation: 'Control instructs: "Maintain radio silence until zero-six-hundred hours unless engaged."'
          }
        ]
      },
      {
        id: 'l2-act3',
        title: 'Weather Briefing for Aerial Patrol',
        context: 'Informe meteorológico para vuelo de reconocimiento en helicóptero',
        speakerRole: 'Air Liaison Officer & Flight Crew',
        audioProwords: false,
        audioText: 'Good morning, aircrew. Here is the weather report for flight sector Delta. Current temperature is four degrees Celsius. Ground visibility is currently reduced to two kilometres due to morning mist, but winds are calm at five knots from the north. The mist is expected to clear completely by ten-thirty. Expect rain showers after fourteen hundred hours. Flight safety category is amber until the fog clears.',
        questions: [
          {
            id: 'l2-act3-q1',
            question: 'When is the ground mist expected to clear completely?',
            options: ['By zero-eight-hundred hours', 'By ten-thirty (10:30)', 'Never during the day', 'By tomorrow morning'],
            correctIndex: 1,
            explanation: 'The briefing explicitly notes: "The mist is expected to clear completely by ten-thirty."'
          },
          {
            id: 'l2-act3-q2',
            question: 'What is the flight safety category until the fog clears?',
            options: ['Green', 'Amber', 'Red', 'Black'],
            correctIndex: 1,
            explanation: 'The officer confirms: "Flight safety category is amber until the fog clears."'
          }
        ]
      },
      {
        id: 'l2-act4',
        title: 'Armory Weapon Inspection & Handover',
        context: 'Entrega y recepción de armamento individual en el polvorín de la base',
        speakerRole: 'Armourer Sergeant & Section Leader',
        audioProwords: false,
        audioText: 'Corporal Higgins, Section Three weapons are ready for draw. You have eight SA80 assault rifles and two light support weapons. All serial numbers have been cross-checked against the registry sheet. Please sign line four, and ensure your soldiers conduct safety clearances in the clearing pit before loading into the trucks. — Understood, Sergeant. I will verify every bolt and magazine right now.',
        questions: [
          {
            id: 'l2-act4-q1',
            question: 'How many assault rifles are being issued to Section Three?',
            options: ['Four', 'Eight', 'Twelve', 'Twenty'],
            correctIndex: 1,
            explanation: 'The Armourer Sergeant states: "You have eight SA80 assault rifles and two light support weapons."'
          },
          {
            id: 'l2-act4-q2',
            question: 'Where must the soldiers conduct safety clearances?',
            options: ['Inside the cafeteria', 'In the clearing pit', 'Behind the trucks', 'In the dormitory'],
            correctIndex: 1,
            explanation: 'The sergeant instructs: "ensure your soldiers conduct safety clearances in the clearing pit."'
          }
        ]
      },
      {
        id: 'l2-act5',
        title: 'Field Ambulance Evacuation Protocol',
        context: 'Despacho táctico de ambulancia militar por caída de soldado',
        speakerRole: 'Field Medic & Forward Dispatcher',
        audioProwords: true,
        audioText: 'Dispatcher, this is Medic Two at Obstacle Course Bravo. A recruit has fallen from the six-foot climbing wall. He has severe pain in his left ankle and cannot walk. Suspected ligament tear or fracture. Send a field ambulance with a stretcher to gate two immediately. Over. — Medic Two, this is Dispatcher. Ambulance dispatched, estimated arrival time four minutes. Keep casualty warm. Out.',
        questions: [
          {
            id: 'l2-act5-q1',
            question: 'What is the recruit\'s suspected injury?',
            options: ['Head concussion', 'Broken finger', 'Suspected ligament tear or ankle fracture', 'Chemical burn'],
            correctIndex: 2,
            explanation: 'Medic Two states: "Suspected ligament tear or fracture" in the left ankle.'
          },
          {
            id: 'l2-act5-q2',
            question: 'What is the ambulance\'s estimated arrival time (ETA)?',
            options: ['Four minutes', 'Twenty minutes', 'One hour', 'Ten minutes'],
            correctIndex: 0,
            explanation: 'The dispatcher confirms: "estimated arrival time four minutes."'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'l2-read1',
        title: 'British Army Unit Structure: The Infantry Battalion',
        textType: 'Manual Informativo de Organización Militar',
        content: `AN INTRODUCTION TO BRITISH ARMY INFANTRY BATTALIONS

A British Army Infantry Battalion usually consists of approximately 600 to 700 soldiers, commanded by a Lieutenant Colonel (OF-4). The battalion is subdivided into several distinct companies, each commanded by a Major (OF-3) assisted by a Captain (Second-in-Command) and a Company Sergeant Major (WO2).

Each Rifle Company contains three Platoons. A Platoon consists of around 30 soldiers and is led by a Platoon Commander, typically a Second Lieutenant or Lieutenant (OF-1), partnered with a Platoon Sergeant (OR-6). 

Furthermore, each Platoon is divided into three Sections of eight soldiers. The Section is the basic tactical fighting element of the British Army. It is commanded by a Corporal (OR-4), with a Lance Corporal (OR-3) acting as second-in-command. The Section can be split into two four-man fireteams: Charlie and Delta.

When deployed abroad on peacekeeping or operational duties, the Battalion operates its own logistics, medical detachment, and signals communications team to ensure autonomous capability.`,
        glossary: [
          { term: 'Second-in-Command (2IC)', definition: 'Segundo jefe de la subunidad' },
          { term: 'Company Sergeant Major (CSM)', definition: 'Suboficial Principal encargado de la compañía' },
          { term: 'Fireteam', definition: 'Equipo de fuego de 4 efectivos' }
        ],
        questions: [
          {
            id: 'l2-rq1',
            question: 'Who commands a British infantry battalion?',
            options: ['A Captain (OF-2)', 'A Lieutenant Colonel (OF-4)', 'A Major General (OF-7)', 'A Warrant Officer (WO1)'],
            correctIndex: 1,
            explanation: 'The text notes: "commanded by a Lieutenant Colonel (OF-4)".'
          },
          {
            id: 'l2-rq2',
            question: 'How many soldiers normally form an infantry Section in the British Army?',
            options: ['4 soldiers', '8 soldiers', '30 soldiers', '120 soldiers'],
            correctIndex: 1,
            explanation: 'The text states: "divided into three Sections of eight soldiers."'
          },
          {
            id: 'l2-rq3',
            question: 'Which military rank commands a Section?',
            options: ['Private', 'Lance Corporal', 'Corporal (OR-4)', 'Major'],
            correctIndex: 2,
            explanation: '"It is commanded by a Corporal (OR-4), with a Lance Corporal acting as second-in-command."'
          }
        ]
      },
      {
        id: 'l2-read2',
        title: 'Standard Operating Procedures: Vehicle Checkpoint Alpha',
        textType: 'Directiva de Seguridad en Punto de Control',
        content: `STANDARD OPERATING PROCEDURES (SOP) — VEHICLE CHECKPOINTS (VCP)

1. PURPOSE AND ESTABLISHMENT:
Vehicle Checkpoints are established to monitor tactical movement, deter illicit logistics, and safeguard critical infrastructure. A standard hasty checkpoint requires a minimum of eight personnel divided into three functional elements:
a) The Search Team: Two soldiers responsible for inspecting credentials and vehicles.
b) The Cover Team: Two riflemen positioned behind sandbag emplacements providing direct overwatch.
c) The Security and Reserve Team: Four soldiers guarding flanks and managing traffic flow.

2. SEARCH PROTOCOLS:
All approaching vehicles must decrease speed to five miles per hour. Drivers must switch off ignition, leave headlights on, and step outside when requested. Under no circumstances may a searcher inspect a vehicle without designated armed overwatch.

3. ESCALATION OF FORCE:
If a driver ignores visual signals (red flags, tactical stop signs), sentinels utilize auditory warnings (whistles, loud hailers). If non-compliance continues and hostile intent is identified, warning shots are authorized only in strict compliance with the Rules of Engagement (ROE).`,
        glossary: [
          { term: 'Overwatch', definition: 'Vigilancia y cobertura armada constante' },
          { term: 'Escalation of Force', definition: 'Graduación del uso de la fuerza' },
          { term: 'Rules of Engagement (ROE)', definition: 'Reglas de Empeñamiento' }
        ],
        questions: [
          {
            id: 'l2-r2-q1',
            question: 'What is the minimum number of soldiers required for a standard hasty VCP?',
            options: ['Two soldiers', 'Four soldiers', 'Eight personnel', 'Twenty personnel'],
            correctIndex: 2,
            explanation: 'The SOP states: "A standard hasty checkpoint requires a minimum of eight personnel".'
          },
          {
            id: 'l2-r2-q2',
            question: 'What must searchers always have before inspecting a vehicle?',
            options: ['A camera', 'A written permit', 'Designated armed overwatch', 'A medical doctor present'],
            correctIndex: 2,
            explanation: '"Under no circumstances may a searcher inspect a vehicle without designated armed overwatch."'
          }
        ]
      },
      {
        id: 'l2-read3',
        title: 'British Combat Vehicles: The Warrior IFV and Challenger 2',
        textType: 'Artículo Doctrinal sobre Blindados',
        content: `BRITISH ARMOURED COMBAT VEHICLES

The British Army relies on two primary tracked combat vehicles to project mechanized infantry power: the Challenger 2 Main Battle Tank (MBT) and the Warrior Infantry Fighting Vehicle (IFV).

The Challenger 2 is renowned for its exceptional crew survivability, protected by advanced Chobham composite armour. Armed with a 120-millimetre rifled gun, it carries a crew of four: commander, gunner, loader, and driver. Its maximum road speed is approximately 59 kilometres per hour.

In contrast, the Warrior IFV is designed to transport mechanized infantry directly into close contact with enemy positions. It accommodates a crew of three plus seven fully equipped infantry soldiers in the rear compartment. Armed with a 30-millimetre RARDEN cannon, the Warrior combines rapid mobility with sustained infantry firepower. Both vehicles work in close tactical synergy during combined arms operations.`,
        glossary: [
          { term: 'Infantry Fighting Vehicle (IFV)', definition: 'Vehículo de Combate de Infantería (VCI)' },
          { term: 'Main Battle Tank (MBT)', definition: 'Tanque Principal de Combate (TAM / MBT)' },
          { term: 'Combined Arms', definition: 'Armas Combinadas (infantería + blindados + artillería)' }
        ],
        questions: [
          {
            id: 'l2-r3-q1',
            question: 'How many infantry soldiers can the Warrior IFV transport in its rear compartment?',
            options: ['Three soldiers', 'Seven fully equipped soldiers', 'Twelve soldiers', 'Twenty soldiers'],
            correctIndex: 1,
            explanation: 'The text states: "It accommodates a crew of three plus seven fully equipped infantry soldiers in the rear compartment."'
          },
          {
            id: 'l2-r3-q2',
            question: 'What calibre gun is mounted on the Challenger 2 MBT?',
            options: ['30-millimetre cannon', '50-calibre machine gun', '120-millimetre rifled gun', '105-millimetre howitzer'],
            correctIndex: 2,
            explanation: 'The text notes: "Armed with a 120-millimetre rifled gun".'
          }
        ]
      },
      {
        id: 'l2-read4',
        title: 'Field Hygiene and First Aid in Deployment',
        textType: 'Manual Médico de Campaña',
        content: `FIELD HYGIENE AND ACCIDENT PREVENTION IN OPERATIONAL ENVIRONMENTS

Maintaining high standards of personal hygiene in tactical field conditions is critical to unit operational readiness. Preventable illnesses such as gastroenteritis and heat exhaustion can degrade combat capability faster than enemy action.

Key preventive regulations include:
1. WATER PURIFICATION: Soldiers must only consume water from authorized bowsers or treat local water using effervescent purification tablets. Minimum intake in arid climates is four litres per soldier per day.
2. PERSONAL CLEANLINESS: Field showers or antiseptic body wipes must be used daily to prevent skin infections and fungal issues.
3. BLISTER MANAGEMENT: Foot inspections must be conducted by section NCOs after every prolonged road march. Early treatment with zinc oxide tape prevents severe tissue damage.
4. SANITATION: Field latrines must be sited at least 100 metres downwind from cooking areas and natural water sources.`,
        glossary: [
          { term: 'Bowser', definition: 'Camión o remolque cisterna de agua potable' },
          { term: 'Downwind', definition: 'A favor del viento (para evitar olores y contaminación)' },
          { term: 'Operational Readiness', definition: 'Alistamiento operacional de la tropa' }
        ],
        questions: [
          {
            id: 'l2-r4-q1',
            question: 'What is the minimum recommended daily water intake per soldier in arid climates?',
            options: ['One litre', 'Two litres', 'Four litres per day', 'Eight litres'],
            correctIndex: 2,
            explanation: 'The manual states: "Minimum intake in arid climates is four litres per soldier per day."'
          },
          {
            id: 'l2-r4-q2',
            question: 'How far must field latrines be sited from cooking areas?',
            options: ['At least 10 metres', 'At least 50 metres', 'At least 100 metres downwind', 'Directly adjacent to the tents'],
            correctIndex: 2,
            explanation: '"Field latrines must be sited at least 100 metres downwind from cooking areas and natural water sources."'
          }
        ]
      }
    ],
    useOfLanguage: [
      {
        id: 'l2-u1',
        title: 'Past Simple vs Past Continuous',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'While the convoy ______ along the main route, one vehicle had a tyre blowout.',
        options: ['was driving', 'drove', 'is driving', 'were drive'],
        correctAnswer: 'was driving',
        explanation: 'We use the Past Continuous ("was driving") for an ongoing past action interrupted by a single completed event ("had a tyre blowout").',
        instructions: 'Choose the correct past verb form.'
      },
      {
        id: 'l2-u2',
        title: 'Modals of Obligation: Must vs Have To',
        category: 'modals',
        type: 'multiple-choice',
        prompt: 'You ______ smoke near the fuel dump; it is strictly prohibited and dangerous.',
        options: ['mustn\'t', 'don\'t have to', 'should', 'can'],
        correctAnswer: 'mustn\'t',
        explanation: '"Mustn\'t" expresses strict prohibition, which fits the context of ammunition or fuel dumps.',
        instructions: 'Select the modal expressing prohibition.'
      },
      {
        id: 'l2-u3',
        title: 'Phrasal Verbs: Watch Out',
        category: 'phrasal_verbs',
        type: 'multiple-choice',
        prompt: '"______! There are hidden unexploded ordnance markers in this sector."',
        options: ['Watch out', 'Look after', 'Eat out', 'Fill in'],
        correctAnswer: 'Watch out',
        explanation: '"Watch out" is used to warn someone of sudden danger (cuidado / atención).',
        instructions: 'Select the appropriate phrasal verb.'
      },
      {
        id: 'l2-u4',
        title: 'Conditional Type 1',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'If the heavy fog ______ by midday, the transport helicopters will not take off.',
        options: ['does not clear', 'will not clear', 'did not clear', 'is not clear'],
        correctAnswer: 'does not clear',
        explanation: 'In First Conditional sentences: If + Simple Present (does not clear), Main clause + will (will not take off).',
        instructions: 'Choose the correct form to complete the First Conditional.'
      },
      {
        id: 'l2-u5',
        title: 'Past Simple Irregular Verbs in Reports',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'The reconnaissance patrol ______ behind the tree line and observed enemy movement for two hours.',
        options: ['hid', 'hided', 'was hide', 'have hidden'],
        correctAnswer: 'hid',
        explanation: 'The past simple of the irregular verb "hide" is "hid".',
        instructions: 'Select the correct irregular past tense.'
      },
      {
        id: 'l2-u6',
        title: 'Countable vs Uncountable Nouns in Logistics',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'We need to order ______ ammunition and five new rifles for the guard detachment.',
        options: ['more', 'many', 'a few', 'a number of'],
        correctAnswer: 'more',
        explanation: '"Ammunition" is an uncountable collective noun in military English, so it pairs with "more" or "much", not "many" or "a few".',
        instructions: 'Choose the correct quantifier for uncountable military nouns.'
      },
      {
        id: 'l2-u7',
        title: 'Comparatives in Military Specifications',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'The Warrior IFV is ______ than a Main Battle Tank, allowing it to navigate narrow mountain bridges.',
        options: ['lighter', 'more light', 'lightest', 'as light'],
        correctAnswer: 'lighter',
        explanation: 'Short adjectives take "-er" in comparative forms: light -> lighter.',
        instructions: 'Select the correct comparative adjective.'
      },
      {
        id: 'l2-u8',
        title: 'Superlatives in Strategic Descriptions',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'Mount Aconcagua is the ______ peak in South America, presenting extreme challenges for high-altitude troops.',
        options: ['highest', 'most high', 'higher', 'high'],
        correctAnswer: 'highest',
        explanation: 'The superlative of "high" is "the highest".',
        instructions: 'Select the superlative form.'
      },
      {
        id: 'l2-u9',
        title: 'Time Connectors in Chronological Briefings',
        category: 'connectors',
        type: 'multiple-choice',
        prompt: 'First, secure the perimeter. ______, conduct a radio check with Headquarters before dismounting.',
        options: ['Then', 'Although', 'Despite', 'Because'],
        correctAnswer: 'Then',
        explanation: '"Then" is a sequential time connector used to establish chronological operational order (First... Then... Next... Finally).',
        instructions: 'Choose the appropriate sequence connector.'
      },
      {
        id: 'l2-u10',
        title: 'Future with Going To for Planned Operations',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'The battalion ______ deploy to the training area next Monday according to the annual calendar.',
        options: ['is going to', 'will to', 'shall going', 'is go'],
        correctAnswer: 'is going to',
        explanation: '"Is going to" expresses a prior plan or scheduled military decision.',
        instructions: 'Choose the correct future expression for pre-planned events.'
      },
      {
        id: 'l2-u11',
        title: 'Modals: Have To for Routine Job Regulations',
        category: 'modals',
        type: 'multiple-choice',
        prompt: 'All sentries on night duty ______ wear their high-visibility reflective bands and carry flashlights.',
        options: ['have to', 'might to', 'can to', 'are have'],
        correctAnswer: 'have to',
        explanation: '"Have to" expresses external institutional requirement or regulation.',
        instructions: 'Select the modal expressing mandatory standard duty.'
      },
      {
        id: 'l2-u12',
        title: 'Modals: Should for Medical and Tactical Advice',
        category: 'modals',
        type: 'multiple-choice',
        prompt: 'Soldiers ______ apply sunscreen and drink water frequently to prevent heat stroke in the desert.',
        options: ['should', 'would to', 'might must', 'shall to'],
        correctAnswer: 'should',
        explanation: '"Should" expresses strong recommendation and best practice advice.',
        instructions: 'Select the modal expressing tactical advice.'
      },
      {
        id: 'l2-u13',
        title: 'Phrasal Verbs: Fill In and Carry Out',
        category: 'phrasal_verbs',
        type: 'multiple-choice',
        prompt: 'Every vehicle operator must ______ an equipment log before departing the depot.',
        options: ['fill in', 'eat out', 'turn down', 'give up'],
        correctAnswer: 'fill in',
        explanation: '"Fill in" means to complete a form, logbook, or official document.',
        instructions: 'Choose the correct phrasal verb.'
      },
      {
        id: 'l2-u14',
        title: 'Indefinite Pronouns in Security Sweeps',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'The search team checked the warehouse and found ______ suspicious in the northern corner.',
        options: ['nothing', 'nobody', 'nowhere', 'none'],
        correctAnswer: 'nothing',
        explanation: '"Nothing" is used for inanimate items or objects: "found nothing suspicious".',
        instructions: 'Select the correct indefinite pronoun.'
      },
      {
        id: 'l2-u15',
        title: 'Prepositions of Direction in Movement Orders',
        category: 'prepositions',
        type: 'multiple-choice',
        prompt: 'The patrol moved quietly ______ the dense woodland to avoid enemy observation.',
        options: ['through', 'across of', 'between to', 'underneath of'],
        correctAnswer: 'through',
        explanation: '"Through" is used when moving inside a 3D space like a forest or tunnel.',
        instructions: 'Choose the correct preposition of motion.'
      },
      {
        id: 'l2-u16',
        title: 'Collocations: Military Actions',
        category: 'collocations',
        type: 'multiple-choice',
        prompt: 'The Section Commander ordered his men to ______ cover behind the stone wall.',
        options: ['take', 'make', 'do', 'catch'],
        correctAnswer: 'take',
        explanation: 'The standard military collocation is "take cover" (ponerse a cubierto / buscar cobertura).',
        instructions: 'Select the correct military verb collocation.'
      }
    ],
    writing: [
      {
        id: 'l2-w1',
        title: 'Minor Vehicle Incident Report',
        type: 'sitrep_report',
        scenario: 'You are an Argentine NCO driving a service vehicle on a British base. You backed into a stationary post in the motor pool. Write a concise factual report for the Officer of the Watch.',
        targetWordCount: '60-80 words',
        requiredElements: [
          'Date, time, and exact location',
          'Vehicle description and registration',
          'Brief chronological description of what happened',
          'Damage assessment and confirmation that no personnel were hurt'
        ],
        modelAnswer: 'INCIDENT REPORT\nTO: Officer of the Watch, Base Motor Pool\nFROM: Sergeant Carlos Mendez, EA\nDATE: 12 March 2026, 14:15 hrs\n\nSUBJECT: Minor vehicle damage at Motor Pool Bay 4.\n\nWhile reversing Land Rover Defender (Reg: WD-402-UK), visibility was obstructed by stacked cargo boxes. The rear bumper made light contact with a steel boundary post. \n\nDamage: Minor dent on rear bumper. No injuries sustained. Vehicle remains roadworthy.',
        usefulPhrases: [
          'While reversing...',
          'Visibility was obstructed by...',
          'No injuries were sustained',
          'The vehicle remains roadworthy'
        ]
      },
      {
        id: 'l2-w2',
        title: 'Formal Leave Request (Solicitud de Licencia)',
        type: 'formal_letter',
        scenario: 'You need to request 3 days of administrative leave to attend a consular appointment in London. Write a formal memorandum to your Officer Commanding.',
        targetWordCount: '60-80 words',
        requiredElements: [
          'Formal military header (TO, FROM, DATE, SUBJECT)',
          'Specific dates requested (e.g. 18-20 April)',
          'Reason for leave (consular paperwork)',
          'Contact phone number and address during absence'
        ],
        modelAnswer: 'MEMORANDUM\nTO: Officer Commanding, Headquarters Company\nFROM: Lieutenant Martin Rossi, EA Exchange Officer\nDATE: 15 April 2026\nSUBJECT: Application for Ordinary Leave\n\nSir, I respectfully request three days of ordinary leave from 18 to 20 April 2026 to complete mandatory consular documentation at the Argentine Embassy in London.\n\nDuring my absence, Lieutenant Gomez will cover my liaison duties. My emergency contact number will be +44 7700 900123.',
        usefulPhrases: [
          'I respectfully request...',
          'To complete mandatory documentation',
          'Will cover my duties',
          'My emergency contact number will be...'
        ]
      },
      {
        id: 'l2-w3',
        title: 'Guard Duty Logbook Entry (Libro de Guardia)',
        type: 'sitrep_report',
        scenario: 'You are the Guard Commander at Gate 2. Record the events of your 4-hour watch (20:00 to 24:00 hrs) in the official guard logbook.',
        targetWordCount: '50-70 words',
        requiredElements: [
          'Time span of duty',
          'Personnel on watch',
          'Notable occurrences (e.g. routine courier arrival, fence sweep)',
          'Closing status (all quiet, handover completed)'
        ],
        modelAnswer: 'GUARD LOG — GATE TWO\nDUTY PERIOD: 2000 - 2400 hrs, 14 May 2026\nGUARD COMMANDER: Corporal J. Santos\n\n2015 hrs: Guard mounting completed. Perimeter lights tested and fully operational.\n2145 hrs: Routine postal courier processed without incident.\n2315 hrs: Foot patrol conducted along western wire perimeter; no breaches found.\n2400 hrs: Relieved by Corporal Davies. All quiet.',
        usefulPhrases: [
          'Guard mounting completed',
          'Tested and fully operational',
          'Processed without incident',
          'Relieved by... All quiet'
        ]
      },
      {
        id: 'l2-w4',
        title: 'Radio Transmission Dispatch (Logistics Request)',
        type: 'sitrep_report',
        scenario: 'Draft a written radio dispatch requesting 200 litres of diesel and ten cases of field rations for Forward Operating Base Bravo.',
        targetWordCount: '40-60 words',
        requiredElements: [
          'Station callsigns (sender and recipient)',
          'Exact items and quantities required',
          'Priority level and delivery location',
          'Prowords (OVER, OUT)'
        ],
        modelAnswer: 'RADIO DISPATCH\nTO: Logistics Control (Bravo-Zero)\nFROM: Forward Base (Sierra-Two)\n\nPriority: Routine.\nRequire resupply at Grid 342 789:\n- Item 1: 200 litres diesel fuel\n- Item 2: 10 cases ration packs (Halal/Standard)\nRequest delivery by 1600 hours.\nACKNOWLEDGE RECEIPT. OVER.',
        usefulPhrases: [
          'Require resupply at Grid...',
          'Request delivery by...',
          'Acknowledge receipt. Over.'
        ]
      }
    ],
    speaking: [
      {
        id: 'l2-s1',
        title: 'Describing Your Unit and Duties',
        situation: 'At a NATO lunch table, a British Captain asks about your unit in Argentina and your daily responsibilities.',
        role: 'Argentine Officer / NCO',
        prompt: 'Describe your unit\'s location in Argentina, the size of your team, and your main duties during a typical week.',
        recommendedDuration: '60-90 seconds',
        modelResponse: 'In Argentina, I serve in the 8th Mountain Infantry Brigade based in Mendoza, near the Andes. I am responsible for a team of ten soldiers. On a typical day, we start with physical conditioning at seven in the morning. After that, I supervise weapon safety inspections and mountain tactical training. In winter, we also train in alpine search and rescue operations.',
        pronunciationTips: [
          'Stress the syllables accurately in "responsible" /rɪˈspɒnsəbəl/ and "typical" /ˈtɪpɪkəl/.',
          'Notice British vowel in "schedule" /ˈʃedʒuːl/ or daily routine.',
          'Speak clearly without rushing.'
        ],
        keyVocabulary: ['Responsible for', 'Supervise', 'Tactical training', 'Search and rescue', 'Mountain Brigade']
      },
      {
        id: 'l2-s2',
        title: 'Reporting a Mechanical Failure in the Field',
        situation: 'Your patrol vehicle has broken down 5 kilometres from the main garrison. Call your maintenance desk on the radio.',
        role: 'Patrol Commander',
        prompt: 'State your location, explain that the engine overheated and smoke is coming from the radiator, and request a recovery truck.',
        recommendedDuration: '45-60 seconds',
        modelResponse: 'Maintenance Desk, this is Patrol Alfa. We have a mechanical breakdown five kilometres north on Route Two. Our engine overheated and there is steam coming from the radiator. The vehicle is stationary on the road shoulder. We request a recovery truck and a replacement patrol vehicle. Over.',
        pronunciationTips: [
          'Pronounce "radiator" /ˈreɪdieɪtə/ and "engine" /ˈendʒɪn/ accurately.',
          'Keep your tone calm and assertive on the radio.'
        ],
        keyVocabulary: ['Mechanical breakdown', 'Overheated', 'Stationary', 'Recovery truck']
      },
      {
        id: 'l2-s3',
        title: 'Giving Directions to the Regimental Ammunition Depot',
        situation: 'A newly arrived allied liaison officer asks you how to reach the ammunition depot from the main guardhouse.',
        role: 'Base Duty Guide',
        prompt: 'Give clear step-by-step driving directions: go straight along Montgomery Avenue, turn left at the drill square, and pass the armory.',
        recommendedDuration: '60 seconds',
        modelResponse: 'To reach the ammunition depot, drive straight ahead along Montgomery Avenue for about 400 metres. When you reach the drill square, turn left. Continue past the vehicle workshops on your right. You will see the high security fence of the ammunition depot directly in front of you. Stop at the inner gate for guard clearance.',
        pronunciationTips: [
          'Enunciate directional prepositions clearly: "straight ahead", "turn left", "past the workshops".'
        ],
        keyVocabulary: ['Straight ahead', 'Turn left', 'Drill square', 'Security fence', 'Inner gate']
      },
      {
        id: 'l2-s4',
        title: 'Explaining Field First Aid Kit Equipment',
        situation: 'A multinational squad member asks you what essential items you carry in your Individual First Aid Kit (IFAK).',
        role: 'Trained Combat Lifesaver',
        prompt: 'List and explain at least three essential items: tourniquet, pressure bandage, and burn dressing.',
        recommendedDuration: '60 seconds',
        modelResponse: 'In my Individual First Aid Kit, I carry three vital items. First, a combat application tourniquet to stop severe arterial bleeding on limbs. Second, an elastic trauma pressure bandage for deep lacerations. Third, sterile burn dressings and water purification tablets. Every soldier must know how to apply these within thirty seconds.',
        pronunciationTips: [
          'Pronounce "tourniquet" /ˈtʊənɪkeɪ/ or /ˈtɜːnɪkɪt/ and "bandage" /ˈbændɪdʒ/ correctly.',
          'Pause between items for clear auditory comprehension.'
        ],
        keyVocabulary: ['Tourniquet', 'Pressure bandage', 'Arterial bleeding', 'Sterile dressings']
      },
      {
        id: 'l2-s5',
        title: 'Standard Military Telephone Exchange',
        situation: 'You answer the staff telephone at the Brigade Headquarters. The caller wants to speak to the Intelligence Officer.',
        role: 'Brigade Operations Clerk',
        prompt: 'Answer the call formally, identify your office and rank, explain that the Intelligence Officer is in a briefing, and take a message.',
        recommendedDuration: '45-60 seconds',
        modelResponse: 'Good morning, Headquarters Eighth Mountain Brigade, Corporal Rossi speaking. How may I direct your call? — I see, sir. Major Sterling is currently in an operational briefing until eleven hundred hours. May I take your name, rank, and telephone extension so he can return your call immediately after the meeting?',
        pronunciationTips: [
          'Adopt a polite, professional military telephone intonation.',
          'Notice clear separation of digits in times and numbers.'
        ],
        keyVocabulary: ['How may I direct your call?', 'Currently in a briefing', 'Return your call', 'Extension']
      }
    ]
  },

  // =========================================================================
  // NIVEL 3 (A2+)
  // =========================================================================
  {
    levelNumber: 3,
    name: 'Nivel 3 – Pre-Intermedio Superior (A2+ • STANAG 6001 Nivel 1+)',
    cefr: 'A2+',
    clockHours: 120,
    academicHours: 160,
    accumulatedClockHours: 360,
    accumulatedAcademicHours: 480,
    generalObjective: 'Que el usuario consolide y expanda su competencia comunicativa en situaciones altamente predecibles y de mediana complejidad de la vida social y profesional militar, desenvolviéndose con autonomía, reformulando su discurso sin depender de esquemas fijos, comprendiendo textos orales y escritos auténticos o adaptados, y redactando textos estructurados sobre hechos pasados, hábitos, viviendas, planes y expectativas profesionales.',
    thematicCompetencies: [
      'La vida social: personas y personalidades. Características y relaciones humanas.',
      'Experiencia y cambios en la vida de las personas: biografías y trayectorias.',
      'Los pasatiempos, el tiempo libre y las actividades recreativas.',
      'El mundo del trabajo: la búsqueda de empleo, postulaciones y entrevistas laborales.',
      'Los medios de comunicación: prensa, televisión, radio e internet.',
      'El cuerpo humano, la salud y la medicina: lesiones, primeros auxilios y tratamientos.',
      'El deporte, el adiestramiento físico y la preparación para la misión.',
      'Cine – Teatro – Danza – Música – Espectáculos culturales.',
      'El medio ambiente, la ecología y la prevención de la contaminación.',
      'Cambios de vida: adaptación psicológica y operativa a nuevas situaciones.',
      'Los cambios en la vida militar: destinos (postings), traslados de guarnición y mudanzas de vivienda.'
    ],
    culturalReflection: [
      'Comparación entre argentinos y angloparlantes en lo relativo al uso del tiempo libre y los hábitos sociales cotidianos.',
      'Comparación en lo relativo a los sistemas educativos (escuelas primarias y secundarias, universidades e institutos de formación militar).',
      'El rol social y cultural del cine, el teatro y las artes escénicas en Argentina y en el Reino Unido / Estados Unidos.',
      'La adaptación familiar ante las mudanzas periódicas de guarnición y la vida en bases militares multinacionales.'
    ],
    speechActs: [
      'Expresar ideas en relación a actitudes y hábitos de terceros.',
      'Identificar, designar o elegir algo entre diversas alternativas disponibles.',
      'Pedir y dar información detallada sobre servicios, trámites, rutas y actividades.',
      'Preguntar acerca de una actividad y sus requisitos operativos.',
      'Expresar y justificar opiniones personales, manifestando acuerdo y desacuerdo de manera diplomática.',
      'Intercambiar puntos de vista y argumentar alternativas tácticas o de gestión.',
      'Describir personas, objetos, situaciones cotidianas, lugares y hechos pasados con precisión.',
      'Realizar sugerencias, propuestas y recomendaciones constructivas.',
      'Expresar intenciones, condiciones, relaciones de causa-efecto, consecuencia y propósito.',
      'Efectuar y responder invitaciones formales e informales.',
      'Pedir y conceder permisos utilizando fórmulas canónicas de cortesía.',
      'Describir procesos paso a paso en riguroso orden cronológico.',
      'Expresar la obligación y la ausencia de ella (must, have to vs don\'t have to, needn\'t).',
      'Desenvolverse con seguridad en situaciones complejas de la vida cotidiana y profesional militar.'
    ],
    functions: [
      'Describir hábitos pasados y compararlos con la rutina actual (used to vs usually).',
      'Reportar hechos recientes y experiencias acumuladas a lo largo de la vida (Present Perfect).',
      'Formular hipótesis y condiciones presentes y futuras (Conditionals 0, 1 y 2).',
      'Expresar deducciones lógicas sobre sucesos inmediatos (must be / can\'t be).',
      'Solicitar y conceder autorizaciones en la cadena de mando con deferencia protocolar.'
    ],
    writtenComprehensionSkills: [
      'Reconocer diferentes tipos de textos: artículos de periódicos y revistas sobre hechos de la realidad, folletos turísticos, textos literarios y biografías.',
      'Aplicar estrategias de lecto-comprensión: reconocer tema principal, buscar información específica (scanning), identificar referentes pronominales e inferir significados a partir del contexto.',
      'Identificar relaciones lógicas en párrafos: causa-efecto, consecuencia, condición, secuencias cronológicas, contrastes, adición, propósito y ejemplificación.'
    ],
    writtenExpressionSkills: [
      'Redactar narraciones de experiencias y conocimientos acerca de viviendas, hábitos, hechos del pasado, planes y expectativas futuras.',
      'Redactar cartas o correos electrónicos informales a camaradas y amistades.',
      'Redactar cartas o correos electrónicos formales solicitando o brindando información sobre productos o servicios, o postulándose para un puesto de trabajo o misión (Cover Letter / Application).',
      'Redactar textos autobiográficos y biografías de terceros estructuradas cronológicamente.'
    ],
    oralComprehensionSkills: [
      'Identificar en textos orales de mediana extensión y complejidad: tema principal, datos específicos, función comunicativa predominante, y actitudes y sentimientos del hablante.',
      'Identificar relaciones lógicas auditivas: causa, efecto, consecuencia, condición, secuencias lógicas, contraste, adición, propósito y ejemplificación.'
    ],
    oralExpressionSkills: [
      'Interacción: expresar actitudes y hábitos de terceros, identificar o elegir opciones, fundamentar acuerdos y desacuerdos, formular sugerencias, pedir permisos y describir procesos u obligaciones.',
      'Producción: monólogos breves sobre temas conocidos o de interés general y del ámbito militar (destinos, traslados, misiones, entrenamiento), y describir y comparar analíticamente láminas visuales o situaciones concurrentes.'
    ],
    grammaticalContents: [
      'Present Perfect Simple with: ever, never, just, already, yet, since, for, how long',
      'Present Perfect Continuous (actions continuing over a period of time: have been doing)',
      'Present Perfect Simple vs Simple Past (completed past with definite time vs open time link)',
      'Modals: can, could, be able to (ability, possibility, permission)',
      'Modals of advice: should, ought to',
      'Modals of obligation: have to, have got to, must',
      'Modals of absence of obligation vs prohibition: don\'t have to, needn\'t vs mustn\'t',
      'Modals of deduction & probability: may, might, could, must / can\'t (deduction in present)',
      'Conditional sentences: Type 0 (general truths), Type 1 (real future), Type 2 (hypothetical present: If I were... I would...)',
      'Used to (past habits or states) vs still / not anymore / usually',
      'Comparison: as... as, as many / much... as, not as... as',
      'Participial adjectives (-ing describing source vs -ed describing feeling: tiring vs tired, exhausted vs exhausting)',
      'Gerunds & Infinitives: verb + to-infinitive, adjective + to-infinitive, verb + gerund (-ing)',
      'Reflexive pronouns: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves',
      'Defining relative clauses for people and things: who, which, that, whose, where',
      'Question tags and short answers; Rejoinders (So do I / Neither do I / Nor do I)',
      'Degree modifiers: Too + adjective, adjective + enough, not enough',
      'Passive voice in simple present (is/are + PP) and simple past (was/were + PP)',
      'Phrasal verbs: ask for, get along with, take after, look it up, look forward to + -ing, find out, run into, run out of, take off, work out'
    ],
    vocabularyTopics: [
      'Social life, personalities, character traits and human relationships',
      'Life experiences, biographical milestones and personal history',
      'Free time, leisure hobbies and sports routines (athletics, football, martial arts)',
      'World of work: job search, CV writing, requirements and interview language',
      'Media and communication: press, broadcasting, television, podcasts and the internet',
      'Human body, anatomy, health conditions, symptoms and field medicine',
      'Arts, culture and entertainment: cinema, theatre, music and performing arts',
      'Environment, ecology, renewable energy and pollution mitigation',
      'Life transitions, adaptation to new environments and cross-cultural challenges',
      'Military postings, garrison relocations, quarter allocations and family logistics'
    ],
    militarySpecificTopics: [
      'The 5-Paragraph Field Briefing Format (SMEAC: Situation, Mission, Execution, Admin, Command)',
      'British military etiquette & modes of address ("Sir", "Ma\'am", "RSM", "Colour Sergeant")',
      'Postings and overseas deployment logistics: quarters, allowances and transport',
      'First aid triage, casualty assessment and field medical reporting'
    ],
    listening: [
      {
        id: 'l3-act1',
        title: 'Operational Briefing: Patrol Route Alpha & Mission Execution',
        context: 'Briefing táctico militar previo a una patrulla de reconocimiento',
        speakerRole: 'Major Hamilton, British Army',
        audioProwords: true,
        audioText: 'Quiet down, gentlemen. Here is your operational briefing for Patrol Alpha. Situation: Local civilian protests have blocked the western highway near Village Foxtrot. Mission: Your platoon will conduct a presence patrol along the northern ridge to safeguard the humanitarian food convoy. Execution: Number One Section moves on foot at eleven-hundred hours. Number Two Section provides overwatch from Hill Two-Four. Administration and Logistics: Each soldier carries three litres of water and twelve-hour field rations. Command and Signals: Radio frequency is channel six. I will remain at Forward Operating Base Romeo. Questions so far?',
        questions: [
          {
            id: 'l3-q1',
            question: 'What is the primary mission of the platoon?',
            options: [
              'To disperse the civilian crowd using lethal force',
              'To conduct a presence patrol along the northern ridge to safeguard the food convoy',
              'To repair the damaged highway near Village Foxtrot',
              'To deliver extra radio batteries to Hill Two-Four'
            ],
            correctIndex: 1,
            explanation: 'The briefing explicitly states: "Mission: Your platoon will conduct a presence patrol along the northern ridge to safeguard the humanitarian food convoy."'
          },
          {
            id: 'l3-q2',
            question: 'What is the specific tactical role assigned to Number Two Section?',
            options: [
              'Drive the supply trucks along the highway',
              'Provide overwatch from Hill Two-Four',
              'Remain at Forward Operating Base Romeo',
              'Prepare hot meals for the detachment'
            ],
            correctIndex: 1,
            explanation: 'Under Execution: "Number Two Section provides overwatch from Hill Two-Four."'
          },
          {
            id: 'l3-q3',
            question: 'What logistical equipment is allocated to each soldier for this mission?',
            options: [
              'Five litres of water and tents',
              'Three litres of water and twelve-hour field rations',
              'Extra radios and satellite phones',
              'Stretcher and surgical trauma kit'
            ],
            correctIndex: 1,
            explanation: 'The Major orders: "Each soldier carries three litres of water and twelve-hour field rations."'
          }
        ]
      },
      {
        id: 'l3-act2',
        title: 'Job Selection Interview: Multinational Peacekeeping Liaison Officer',
        context: 'Entrevista de selección para puesto en misión de paz de la ONU',
        speakerRole: 'Interviewer (Lt. Col. Evans) and Candidate (Captain Rossi)',
        audioProwords: false,
        audioText: 'Good morning, Captain Rossi. Please take a seat. — Thank you, Colonel Evans. — To begin with, I see you have applied for the Military Liaison role in Cyprus. Why do you believe you are suitable for this deployment? — Well, Colonel, for the past four years I have worked extensively with joint staff officers. I am used to coordinating complex convoy movements, and I have completed advanced English qualifications. Furthermore, I have always adapted easily to unfamiliar cultural environments. — Excellent. How would you describe your attitude when dealing with unpredictable local leaders? — I remain calm and objective, Sir. If unexpected disputes occur, I always listen actively so that we can find diplomatic ground before escalating. — That is precisely what our peacekeeping mission requires.',
        questions: [
          {
            id: 'l3-q4',
            question: 'What is the main purpose of this interview?',
            options: [
              'To discipline Captain Rossi for a convoy delay',
              'To assess Captain Rossi\'s suitability for a peacekeeping liaison position in Cyprus',
              'To brief the officer on upcoming physical training exercises',
              'To discuss housing allowances in London'
            ],
            correctIndex: 1,
            explanation: 'The interviewer clarifies that Captain Rossi has applied for the Military Liaison role in Cyprus and is evaluating his suitability.'
          },
          {
            id: 'l3-q5',
            question: 'What attitude does Captain Rossi display when facing unpredictable situations?',
            options: [
              'He becomes hesitant and asks for permission before taking any step',
              'He remains calm and objective, listening actively to seek diplomatic ground',
              'He adopts an aggressive stance to enforce military orders immediately',
              'He avoids direct contact and requests a transfer to headquarters'
            ],
            correctIndex: 1,
            explanation: 'Captain Rossi states: "I remain calm and objective, Sir. If unexpected disputes occur, I always listen actively so that we can find diplomatic ground."'
          },
          {
            id: 'l3-q6',
            question: 'What logical relationship is expressed by the clause "so that we can find diplomatic ground"?',
            options: [
              'A relationship of past consequence',
              'A relationship of purpose (finalidad)',
              'A relationship of spatial contrast',
              'A relationship of numerical comparison'
            ],
            correctIndex: 1,
            explanation: '"so that" introduces the purpose or intended objective of his active listening behavior.'
          }
        ]
      },
      {
        id: 'l3-act3',
        title: 'Environmental Science Feature: Renewable Energy in Military Garrisons',
        context: 'Programa radial de divulgación sobre control de contaminación y transición ecológica en bases militares',
        speakerRole: 'Radio Presenter (Dr. Harriet Green) and Garrison Engineer (Major Collins)',
        audioProwords: false,
        audioText: 'Welcome back to Green Horizons. Today we are examining how modern armed forces are tackling environmental pollution. Major Collins, how is your brigade adapting to environmental challenges? — Well, Harriet, military garrisons used to consume vast amounts of fossil fuel for heating and vehicle maintenance. Consequently, carbon emissions were excessively high. To reverse this, our base has installed solar thermal panels across all vehicle depots in order to generate clean electricity. Although the initial setup was costly, our energy expenditure has decreased by thirty percent over the last two years. Moreover, we have strict waste management protocols; if any toxic oil leaks occur, automated containment barriers deploy within seconds to protect local waterways.',
        questions: [
          {
            id: 'l3-q7',
            question: 'What was the past habit of military garrisons mentioned by Major Collins?',
            options: [
              'They used to generate all power from wind turbines',
              'They used to consume vast amounts of fossil fuel for heating and maintenance',
              'They were completely independent of the national electrical grid',
              'They banned motorized transport inside the camp'
            ],
            correctIndex: 1,
            explanation: 'Major Collins explains: "military garrisons used to consume vast amounts of fossil fuel for heating and vehicle maintenance."'
          },
          {
            id: 'l3-q8',
            question: 'What concrete measure was implemented on the base in order to generate clean power?',
            options: [
              'Building a coal-powered thermal plant outside the perimeter',
              'Installing solar thermal panels across all vehicle depots',
              'Purchasing older diesel backup generators',
              'Cancelling all routine field driving exercises'
            ],
            correctIndex: 1,
            explanation: 'He states: "our base has installed solar thermal panels across all vehicle depots in order to generate clean electricity."'
          },
          {
            id: 'l3-q9',
            question: 'What condition triggers the deployment of automated containment barriers?',
            options: [
              'Whenever heavy snowfall begins in winter',
              'If any toxic oil leaks occur, to protect local waterways',
              'When visiting inspectors arrive at the main gate',
              'If the electrical grid reaches maximum capacity'
            ],
            correctIndex: 1,
            explanation: 'He specifies: "if any toxic oil leaks occur, automated containment barriers deploy within seconds."'
          }
        ]
      },
      {
        id: 'l3-act4',
        title: 'Intercultural Podcast: Free Time, Cinema, Theatre & Education in Argentina and the UK',
        context: 'Episodio de podcast comparativo entre estilos de vida y pasatiempos británicos y argentinos',
        speakerRole: 'Hosts: Martin (Argentina) and Sophie (UK)',
        audioProwords: false,
        audioText: 'Hi everyone! On today\'s cultural exchange, Sophie and I are comparing how people spend their free time. Sophie, what is the quintessential British weekend? — Well, Martin, British people love outdoor sports like football or rugby, but because the weather is frequently rainy, many of us enjoy going to the cinema or attending live theatre. In cities like London or Manchester, theatrical productions are packed every weekend. What about Argentina? — In Argentina, social life revolves heavily around personal relationships and food. On Sundays, families and friends gather for long asados and share mate in parks. While British people might socialize at a neighbourhood pub after work, Argentines often stay up much later chatting at cafes. Regarding education, Argentine public universities are tuition-free, whereas British university students have to pay substantial tuition fees and take student loans.',
        questions: [
          {
            id: 'l3-q10',
            question: 'Why do many British people frequently attend cinema or theatre at the weekend?',
            options: [
              'Because outdoor sports are strictly prohibited on Sundays',
              'Because the weather is frequently rainy, making indoor arts very popular',
              'Because movie tickets are completely free of charge in the UK',
              'Because they do not have access to television or the internet'
            ],
            correctIndex: 1,
            explanation: 'Sophie explains that "because the weather is frequently rainy, many of us enjoy going to the cinema or attending live theatre."'
          },
          {
            id: 'l3-q11',
            question: 'What major contrast in the higher education system is highlighted by Martin?',
            options: [
              'Argentine universities do not teach literature or arts',
              'Argentine public universities are tuition-free, whereas British students have to pay tuition fees and take loans',
              'British universities only accept military officers as students',
              'Neither country has public universities'
            ],
            correctIndex: 1,
            explanation: 'Martin states: "Argentine public universities are tuition-free, whereas British university students have to pay substantial tuition fees and take student loans."'
          }
        ]
      },
      {
        id: 'l3-act5',
        title: 'Military Medical Clinic: Sports Injury and Rehabilitation Protocol',
        context: 'Consulta médica tras lesión durante el entrenamiento físico de la guarnición',
        speakerRole: 'Doctor (Capt. Miller) and Soldier (Corporal Diaz)',
        audioProwords: false,
        audioText: 'Come in, Corporal Diaz. What seems to be the problem with your leg? — Good morning, Doctor. While I was doing obstacle course training yesterday, I twisted my right ankle and fell awkwardly. It is badly swollen and I can hardly put weight on it. — Let me examine it... Move your toes for me. Does this hurt? — Ouch! Yes, right there on the outer ligament. — Well, the ligament is sprained, but fortunately your ankle is not fractured. You have to rest it completely for forty-eight hours and apply ice packs four times a day. However, you don\'t have to stay in bed all week; once the swelling subsides, you ought to start light physiotherapy exercises so that the joint regains its flexibility. I will give you a medical exemption from march drills for ten days.',
        questions: [
          {
            id: 'l3-q12',
            question: 'How did Corporal Diaz sustain his injury?',
            options: [
              'In a vehicle accident on the highway',
              'He twisted his ankle and fell during obstacle course training yesterday',
              'During an overseas peacekeeping operation',
              'While lifting heavy furniture during a barracks relocation'
            ],
            correctIndex: 1,
            explanation: 'Corporal Diaz explains: "While I was doing obstacle course training yesterday, I twisted my right ankle and fell awkwardly."'
          },
          {
            id: 'l3-q13',
            question: 'What is the doctor\'s instruction regarding bed rest and exercise?',
            options: [
              'He must stay in bed for two months without moving',
              'He has to rest it for 48 hours, but doesn\'t have to stay in bed all week; he ought to start light physiotherapy once swelling subsides',
              'He can resume running obstacle courses immediately this afternoon',
              'He must undergo emergency surgery tomorrow'
            ],
            correctIndex: 1,
            explanation: 'Captain Miller specifies: "You have to rest it completely for forty-eight hours... However, you don\'t have to stay in bed all week; once the swelling subsides, you ought to start light physiotherapy."'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'l3-read1',
        title: 'Adapting to Change: Military Postings, Garrison Life and Family Resilience',
        textType: 'Artículo de Fondo en Revista de Defensa (Feature Article)',
        content: `ADAPTING TO CHANGE: THE CHALLENGES AND REWARDS OF MILITARY RELOCATION
By Major Rachel Thornton

For service members and their families, change of station orders—commonly referred to as "postings"—represent an inevitable milestone every two to three years. Moving across provinces or countries is exciting, but it also creates considerable personal disruption.

When an officer is reassigned to a remote garrison, such as the highland regiments in northern Argentina or the Catterick Garrison in North Yorkshire, housing and schooling become top priorities. Military quarters provide secure accommodation, yet settling into an unfamiliar neighbourhood requires patience. Children have to adapt to new curricula, while spouses often face the challenge of seeking employment in rural communities.

Despite these hurdles, psychologists specializing in military welfare note that regular relocation fosters exceptional resilience. Families develop strong social networks within the base community, relying on mutual support clubs and shared recreational facilities. In fact, many officers report that living in diverse garrisons enriched their cultural awareness and deepened their professional perspective.

Although the physical relocation process is stressful, early preparation simplifies the transition. Those personnel who inspect their assigned quarters in advance, organize schooling documentation, and engage with community liaison teams adapt far more swiftly to their new environment.`,
        glossary: [
          { term: 'Postings', definition: 'Pases a nuevo destino militar' },
          { term: 'Military quarters', definition: 'Viviendas fiscales dentro de la guarnición militar' },
          { term: 'Resilience', definition: 'Capacidad de sobreponerse y adaptarse positivamente a cambios' },
          { term: 'Liaison teams', definition: 'Equipos de enlace y asistencia a familias' }
        ],
        questions: [
          {
            id: 'l3-rq1',
            question: 'What is the main topic of the feature article?',
            options: [
              'The technical maintenance of armored personnel carriers',
              'The personal, family and social challenges and benefits associated with military postings and relocations',
              'The historical origin of British military uniform decorations',
              'A medical study on infectious diseases in urban centers'
            ],
            correctIndex: 1,
            explanation: 'The entire text examines the effects of moving between garrisons ("postings"), covering family adjustments, housing, schooling, and psychological resilience.'
          },
          {
            id: 'l3-rq2',
            question: 'In paragraph 2, what does the pronoun "it" refer to in "yet settling into an unfamiliar neighbourhood requires patience. Children have to adapt..."?',
            options: [
              'The highland regiment',
              'Settling into an unfamiliar neighbourhood',
              'The military quarters',
              'The remote garrison'
            ],
            correctIndex: 1,
            explanation: 'In the sentence "settling into an unfamiliar neighbourhood requires patience", the process of adapting/settling is the clear referent.'
          },
          {
            id: 'l3-rq3',
            question: 'What relationship is expressed by the connector "Although" in the final paragraph?',
            options: [
              'Addition of similar facts',
              'Concession and contrast between the stress of moving and the benefits of early preparation',
              'Chronological order of morning parade exercises',
              'Hypothetical deduction about past battles'
            ],
            correctIndex: 1,
            explanation: '"Although" introduces a concession/contrast clause: admitting that the relocation is stressful while arguing that early preparation makes it easier.'
          }
        ]
      },
      {
        id: 'l3-read2',
        title: 'Cultural Heritage & Theatrical Guide: Stratford-upon-Avon & The Royal Shakespeare Theatres',
        textType: 'Folleto Turístico y Cultural (Travel Brochure)',
        content: `VISIT STRATFORD-UPON-AVON: THE HEART OF BRITISH THEATRE & HERITAGE

Welcome to Stratford-upon-Avon, the historic market town located in Warwickshire, England. Famous worldwide as the birthplace of William Shakespeare, the town offers a vibrant blend of historical architecture, performing arts, and scenic countryside.

WHAT TO SEE AND DO:
1. The Royal Shakespeare Theatre (RST):
Situated on the banks of the River Avon, this magnificent 1,000-seat theatre presents world-class performances of classic plays and contemporary drama. Matinee and evening performances run from Tuesday to Sunday throughout the year. Backstage guided tours are available daily at 10:30 and 13:30 hours.

2. Shakespeare's Birthplace & Anne Hathaway's Cottage:
Explore the restored 16th-century timber-framed house where the playwright grew up, featuring original furnishings, domestic artifacts, and costumed guides depicting Elizabethan life.

3. Cinema and Live Music:
Stratford Picturehouse screens British independent films as well as live theatrical broadcasts. For classical music enthusiasts, the Town Hall hosts weekly chamber music recitals on Friday evenings.

VISITOR INFORMATION & BOOKINGS:
• Ticket Prices: Full price £28.00; Military personnel, seniors and students with valid ID receive a 25% discount (£21.00).
• Transportation: Direct rail connections depart hourly from London Marylebone and Birmingham Moor Street.
• Accessibility: All venues provide wheelchair access and audio-described performances for visually impaired patrons.`,
        glossary: [
          { term: 'Matinee', definition: 'Función teatral vespertina (por la tarde)' },
          { term: 'Timber-framed', definition: 'Construcción con entramado de vigas de madera histórica' },
          { term: 'Chamber music recitals', definition: 'Conciertos de música de cámara' }
        ],
        questions: [
          {
            id: 'l3-rq4',
            question: 'What special discount is offered to military personnel and students at the theatre?',
            options: [
              'Tickets are completely free of charge',
              'A 25% discount on the full price of £28.00 (making it £21.00)',
              'Only a free coffee during the interval',
              'A 50% discount on Saturday nights only'
            ],
            correctIndex: 1,
            explanation: 'Under Visitor Information: "Military personnel, seniors and students with valid ID receive a 25% discount (£21.00)."'
          },
          {
            id: 'l3-rq5',
            question: 'At what times can visitors take guided backstage tours of the Royal Shakespeare Theatre?',
            options: [
              'Only on Sunday mornings at 08:00',
              'Daily at 10:30 and 13:30 hours',
              'Every hour on the hour',
              'Only after midnight following evening shows'
            ],
            correctIndex: 1,
            explanation: 'The brochure states: "Backstage guided tours are available daily at 10:30 and 13:30 hours."'
          }
        ]
      },
      {
        id: 'l3-read3',
        title: 'Biographical Profile: Major Elena Rostova – Pioneer in Humanitarian Engineering & Peacekeeping',
        textType: 'Semblanza Biográfica (Biographical Sketch)',
        content: `MAJOR ELENA ROSTOVA: RESILIENCE IN WAR AND PEACE
By Dr. Julian Vance

Elena Rostova was born in 1978 in a small mining town. From an early age, she displayed an aptitude for mathematics and civil engineering. After graduating with honours from the Military Technical Institute in 2001, she received her commission as a second lieutenant in the Engineering Corps.

Her early career was defined by rapid operational promotions. In 2004, she was deployed to Central Africa with the United Nations Disaster Assessment and Coordination detachment. During that turbulent posting, Rostova supervised the rapid construction of emergency water purification plants that supplied clean drinking water to over forty thousand displaced civilians. Her decisive leadership under austere conditions earned her the UN Peace Medal.

In 2012, Rostova completed a Master's degree in Environmental Science at Cranfield University, focusing on renewable microgrids in remote military compounds. Her academic research directly influenced doctrinal reforms regarding fuel conservation in garrison and deployed operations.

Today, Major Rostova commands the 4th Humanitarian Support Battalion. When interviewed about her extraordinary journey, she remarked: "Engineering is not merely about concrete and steel; it is about providing shelter and hope so that communities can rebuild after disaster." Her biography remains an inspiring example of service, intellectual curiosity, and humanitarian dedication.`,
        glossary: [
          { term: 'Commission', definition: 'Nombramiento oficial como oficial de las Fuerzas Armadas' },
          { term: 'Austere conditions', definition: 'Condiciones de campaña rigurosas y con escasos recursos' },
          { term: 'Microgrids', definition: 'Microrredes eléctricas autónomas de energía renovable' }
        ],
        questions: [
          {
            id: 'l3-rq6',
            question: 'What decisive humanitarian contribution did Elena Rostova make during her 2004 UN deployment?',
            options: [
              'She commanded an armoured offensive along the northern border',
              'She supervised the rapid construction of water purification plants supplying 40,000 civilians',
              'She wrote a historical novel about mining towns',
              'She established a university campus in Cranfield'
            ],
            correctIndex: 1,
            explanation: 'The biography states: "Rostova supervised the rapid construction of emergency water purification plants that supplied clean drinking water to over forty thousand displaced civilians."'
          },
          {
            id: 'l3-rq7',
            question: 'What can be inferred about Major Rostova\'s leadership philosophy from her concluding quote?',
            options: [
              'She believes military engineering should only focus on heavy weapons development',
              'She views engineering as a human-centred mission to provide safety, dignity and rebuild communities',
              'She regrets joining the armed forces instead of remaining a civilian miner',
              'She thinks that academic study is irrelevant to real operations'
            ],
            correctIndex: 1,
            explanation: 'Her quote emphasizes that engineering is about "providing shelter and hope so that communities can rebuild after disaster", reflecting a humanitarian philosophy.'
          }
        ]
      },
      {
        id: 'l3-read4',
        title: 'Comparative Analysis: Higher Education and Military Academies in Argentina and the UK',
        textType: 'Artículo de Análisis Educativo (Educational Feature)',
        content: `EDUCATION AND FORMATION: A COMPARATIVE STUDY OF HIGHER LEARNING
By Professor Thomas Walsh

Comparing the education systems of Argentina and the United Kingdom reveals striking institutional distinctions alongside common pedagogical values.

In the United Kingdom, secondary education culminates in Advanced Level examinations (A-Levels) at age eighteen. Students who pursue higher education generally attend universities where tuition fees are standard. Consequently, many British students rely on government loans and part-time jobs. Furthermore, prospective military officers attend the Royal Military Academy Sandhurst, where all officer cadets undergo an intensive forty-four-week commissioning course regardless of whether they previously earned a university degree.

In Argentina, by contrast, public tertiary education is tuition-free and open-access by constitutional mandate. Universities such as the University of Buenos Aires (UBA) welcome hundreds of thousands of students who commute daily from their family homes. For military candidates, the Colegio Militar de la Nación provides an integrated four-year dual-track programme: cadets graduate concurrently with a military officer's rank and an accredited bachelor's degree (Licenciatura).

Despite these procedural variations, both nations place immense emphasis on physical fitness, sports competitions, ethics, and leadership development. Whether marching across the parade square in El Palomar or traversing the obstacle grounds at Sandhurst, young cadets are prepared to lead with honour in modern multinational missions.`,
        glossary: [
          { term: 'Commissioning course', definition: 'Curso de egreso como oficial militar' },
          { term: 'Dual-track programme', definition: 'Programa de formación dual (militar y universitaria simultánea)' },
          { term: 'Open-access', definition: 'Ingreso irrestricto y no arancelado' }
        ],
        questions: [
          {
            id: 'l3-rq8',
            question: 'What is a major structural difference between Sandhurst and the Argentine Colegio Militar de la Nación?',
            options: [
              'Sandhurst does not train officers, whereas El Palomar only trains doctors',
              'Sandhurst offers a 44-week commissioning course for all cadets, whereas the Argentine academy offers an integrated 4-year degree programme',
              'Argentine cadets are forbidden from playing sports or exercising outdoors',
              'British cadets never pay for food or uniform supplies'
            ],
            correctIndex: 1,
            explanation: 'The text highlights that Sandhurst has an intensive 44-week course, whereas the Colegio Militar provides an integrated four-year dual-track university degree programme.'
          },
          {
            id: 'l3-rq9',
            question: 'What core values are shared by both Argentine and British military educational institutions according to the author?',
            options: [
              'Strict isolation from civilian technology and foreign languages',
              'Immense emphasis on physical fitness, sports, ethics, and leadership development',
              'Exclusively theoretical lectures with no physical training',
              'Mandatory retirement at age twenty-five'
            ],
            correctIndex: 1,
            explanation: 'The article states: "both nations place immense emphasis on physical fitness, sports competitions, ethics, and leadership development."'
          }
        ]
      }
    ],
    useOfLanguage: [
      {
        id: 'l3-u1',
        title: 'Present Perfect Simple with "For" & "Since"',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'Captain Alvarez ______ in the UN Peacekeeping Force in Cyprus for six months.',
        options: ['has served', 'is serving', 'served', 'was serve'],
        correctAnswer: 'has served',
        explanation: 'We use the Present Perfect ("has served") with "for six months" when the duration relates to an ongoing deployment up to the present.',
        instructions: 'Choose the appropriate Present Perfect structure.'
      },
      {
        id: 'l3-u2',
        title: 'Second Conditional for Hypothetical Situations',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'If our unit ______ better satellite communications, we would coordinate patrols more rapidly.',
        options: ['has', 'had', 'have had', 'will have'],
        correctAnswer: 'had',
        explanation: 'Second conditional: If + Past Simple (had), would + bare infinitive (would coordinate).',
        instructions: 'Complete the hypothetical conditional sentence.'
      },
      {
        id: 'l3-u3',
        title: 'Phrasal Verb with Gerund: Look forward to',
        category: 'phrasal_verbs',
        type: 'multiple-choice',
        prompt: 'All officers are looking forward to ______ the joint naval exercise next week.',
        options: ['attend', 'attending', 'attended', 'be attend'],
        correctAnswer: 'attending',
        explanation: '"Look forward to" is followed by a gerund (-ing form), so "attending" is correct.',
        instructions: 'Choose the correct form following the phrasal verb.'
      },
      {
        id: 'l3-u4',
        title: 'Passive Voice in Present and Past',
        category: 'passive_voice',
        type: 'multiple-choice',
        prompt: 'The new protective body armour ______ to all deployed infantry personnel yesterday.',
        options: ['issued', 'was issued', 'is issuing', 'has issue'],
        correctAnswer: 'was issued',
        explanation: 'Past passive: was/were + past participle (was issued). The action was performed upon the armour yesterday.',
        instructions: 'Select the past passive construction.'
      },
      {
        id: 'l3-u5',
        title: 'Modals of Obligation vs Absence of Obligation',
        category: 'modals',
        type: 'multiple-choice',
        prompt: 'Tomorrow is an official base holiday, so soldiers ______ wake up for the 06:00 muster parade.',
        options: ['mustn\'t', 'don\'t have to', 'should not to', 'have to'],
        correctAnswer: 'don\'t have to',
        explanation: '"Don\'t have to" expresses absence of obligation (it is not necessary). "Mustn\'t" expresses strict prohibition.',
        instructions: 'Choose the modal expression indicating that an action is optional.'
      },
      {
        id: 'l3-u6',
        title: 'Used to for Past Habits vs Present Routine',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'Major Thornton ______ live in Buenos Aires, but now he is stationed in Neuquén.',
        options: ['used to', 'was used to', 'is used to', 'uses to'],
        correctAnswer: 'used to',
        explanation: '"used to + infinitive" indicates a past habit or situation that is no longer true.',
        instructions: 'Select the structure expressing a former habit or state.'
      },
      {
        id: 'l3-u7',
        title: 'Participial Adjectives: -ed vs -ing',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'The forty-kilometer mountain march was deeply ______; by midnight, the entire platoon was ______.',
        options: [
          'exhausted / exhausting',
          'exhausting / exhausted',
          'exhausted / exhausted',
          'exhausting / exhausting'
        ],
        correctAnswer: 'exhausting / exhausted',
        explanation: '-ing adjectives describe the cause/thing that produces the feeling (exhausting march); -ed adjectives describe how people feel (exhausted platoon).',
        instructions: 'Select the correct combination of participial adjectives.'
      },
      {
        id: 'l3-u8',
        title: 'Defining Relative Clauses: Who, Which, Whose',
        category: 'connectors',
        type: 'multiple-choice',
        prompt: 'The liaison officer ______ vehicle broke down near the checkpoint requested a recovery team.',
        options: ['whose', 'who', 'which', 'whom'],
        correctAnswer: 'whose',
        explanation: '"whose" is the possessive relative pronoun connecting the officer with his vehicle.',
        instructions: 'Select the correct relative pronoun showing possession.'
      },
      {
        id: 'l3-u9',
        title: 'Rejoinders: Expressing Agreement (So / Neither)',
        category: 'connectors',
        type: 'multiple-choice',
        prompt: '— "I haven\'t received the new operational deployment schedule yet." — "______."',
        options: ['So have I', 'Neither have I', 'I don\'t too', 'Neither do I'],
        correctAnswer: 'Neither have I',
        explanation: 'To agree with a negative statement in the Present Perfect ("haven\'t received"), use "Neither + auxiliary have + subject" ("Neither have I").',
        instructions: 'Select the correct rejoinder agreeing with a negative statement.'
      },
      {
        id: 'l3-u10',
        title: 'Comparison of Equality: As... As and Degree Modifiers',
        category: 'connectors',
        type: 'multiple-choice',
        prompt: 'This radio transmitter is not ______ powerful ______ the digital satellite set at headquarters.',
        options: ['as / as', 'so / than', 'more / as', 'too / than'],
        correctAnswer: 'as / as',
        explanation: 'Negative comparison of equality: "not as + adjective + as".',
        instructions: 'Complete the comparison of equality structure.'
      },
      {
        id: 'l3-u11',
        title: 'Phrasal Verbs: Run out of, Get along with, Find out',
        category: 'phrasal_verbs',
        type: 'multiple-choice',
        prompt: 'The reconnaissance patrol had to withdraw because they had ______ drinking water.',
        options: ['run into', 'run out of', 'taken after', 'looked up'],
        correctAnswer: 'run out of',
        explanation: '"run out of" means to have no more supply of something (in this case, drinking water).',
        instructions: 'Choose the appropriate phrasal verb meaning to deplete supplies.'
      },
      {
        id: 'l3-u12',
        title: 'First Conditional with "Unless" (Probable Condition)',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'We will not depart on the humanitarian convoy ______ the military police clear the southern highway.',
        options: ['if', 'unless', 'provided', 'because'],
        correctAnswer: 'unless',
        explanation: '"unless" means "if not" (a menos que / si no). "We will not depart unless they clear the road."',
        instructions: 'Select the conditional conjunction meaning "except if" or "if not".'
      }
    ],
    writing: [
      {
        id: 'l3-w1',
        title: 'Formal Cover Letter: Application for Military Logistics Coordinator',
        type: 'formal_letter',
        scenario: 'You are an Argentine officer applying for a vacancy as Military Logistics Coordinator for a United Nations peacekeeping deployment. Write a formal application letter (cover letter) to the British Selection Board.',
        targetWordCount: '100-130 words',
        requiredElements: [
          'Formal salutation ("Dear Colonel Davies," or "Dear Sir/Madam,")',
          'Clear statement of application and reference to vacancy',
          'Summary of operational experience and qualifications (Present Perfect & Past Simple)',
          'Mention of attached Curriculum Vitae and language competencies',
          'Courteous closing statement and formal sign-off ("Yours sincerely," or "Yours faithfully,")'
        ],
        modelAnswer: 'Dear Colonel Davies,\n\nI am writing to formally apply for the position of Military Logistics Coordinator for the upcoming UN deployment in Cyprus, advertised in the International Defence Bulletin.\n\nFor the past five years, I have served as a supply and transport officer in the 6th Mountain Brigade. During this time, I have successfully coordinated fuel resupply convoys across rugged terrain and supervised the maintenance of over sixty tactical vehicles. In 2023, I completed the STANAG English Certification with distinction.\n\nPlease find attached my Curriculum Vitae outlining my command history and technical credentials. I believe my field experience and dedication make me a strong candidate for your multinational logistics cell.\n\nThank you for your time and consideration. I look forward to hearing from you.\n\nYours sincerely,\nCaptain Diego Fernandez',
        usefulPhrases: [
          'I am writing to formally apply for...',
          'For the past five years, I have served as...',
          'Please find attached my Curriculum Vitae...',
          'I believe my field experience makes me...',
          'I look forward to hearing from you.',
          'Yours sincerely,'
        ]
      },
      {
        id: 'l3-w2',
        title: 'Informal Email: Life in a New Garrison and Family Adaptation',
        type: 'informal_email',
        scenario: 'You have recently relocated to a new military garrison in Patagonia. Write an informal email to an old friend/colleague telling them about your journey, your new military quarters, daily habits, and inviting them to visit.',
        targetWordCount: '90-120 words',
        requiredElements: [
          'Friendly opening ("Dear Lucas, / Hi Lucas,")',
          'Description of the relocation and your new military quarters (housing)',
          'Changes in daily routine and habits compared to the past (used to vs now)',
          'Mention of local weather, leisure activities and invitation for the weekend',
          'Informal warm sign-off ("All the best, / Take care,")'
        ],
        modelAnswer: 'Dear Lucas,\n\nI hope you are doing well! I am writing to let you know that we have finally settled into our new garrison in Zapala.\n\nThe relocation took over ten days, but our quarters are spacious and very comfortable. We used to live in a noisy apartment in the capital, but here we have a big garden with a wonderful view of the Andes. The weather is much colder than in Buenos Aires, so we have to wear heavy jackets every morning.\n\nOn weekends, we usually go hiking or prepare a barbecue with fellow officers. Why don\'t you come down and visit us next month? We have plenty of room for guests.\n\nKeep in touch and send my best to your family!\n\nAll the best,\nMartin',
        usefulPhrases: [
          'I hope you are doing well!',
          'We have finally settled into our new...',
          'We used to live in... but now...',
          'Why don\'t you come down and visit us...?',
          'Keep in touch and send my best to...'
        ]
      },
      {
        id: 'l3-w3',
        title: 'Formal Inquiry Email: Requesting Information on Base Housing & Schools',
        type: 'formal_letter',
        scenario: 'You have received your posting orders to a joint international base in the UK. Write a formal inquiry email to the Base Housing and Family Welfare Office requesting details on family accommodations, schooling, and transport facilities.',
        targetWordCount: '100-130 words',
        requiredElements: [
          'Formal salutation and statement of purpose',
          'Notice of your upcoming posting date and family size',
          'Specific questions regarding quarters allocation, primary schools, and vehicle registration',
          'Request for informational brochures or application forms',
          'Formal polite sign-off'
        ],
        modelAnswer: 'Dear Sir or Madam,\n\nI am writing to respectfully request information regarding family quarters and educational facilities at Catterick Garrison, in view of my upcoming posting as an Argentine liaison officer commencing on 15 August.\n\nI will be relocating with my spouse and two primary school children (aged seven and nine). Could you please provide guidance on the application procedure for three-bedroom service family accommodation? Furthermore, I would be grateful if you could forward brochures or contact details for local primary schools near the residential quarter.\n\nFinally, could you clarify whether foreign military vehicles require specific inspection prior to driving on base roads?\n\nThank you very much for your assistance. I look forward to your guidance.\n\nYours faithfully,\nMajor Rodrigo Morales\nArgentine Army Liaison Detachment',
        usefulPhrases: [
          'I am writing to respectfully request information regarding...',
          'Could you please provide guidance on...?',
          'I would be grateful if you could forward brochures...',
          'Could you clarify whether...?',
          'Yours faithfully,'
        ]
      },
      {
        id: 'l3-w4',
        title: 'Biographical Narrative: An Inspiring Military Leader and Historical Milestones',
        type: 'briefing_notes',
        scenario: 'Write a concise biographical narrative (100-130 words) about an inspiring military leader (such as General José de San Martín or a respected commander), tracing early life, decisive milestones, and enduring legacy.',
        targetWordCount: '100-130 words',
        requiredElements: [
          'Title and introductory background (birth, early education, commission)',
          'Chronological sequence of decisive career milestones (Past Simple)',
          'Use of time connectors (Initially, Subsequently, In 1817, Later on)',
          'Conclusion reflecting their historical legacy and humanitarian values'
        ],
        modelAnswer: 'GENERAL JOSÉ DE SAN MARTÍN: LIBERATOR OF THE SOUTHERN CONE\n\nJosé de San Martín was born in 1778 in Yapeyú, Corrientes. As a young boy, he traveled to Spain, where he entered the Royal Academy and fought bravely in the Peninsular War against Napoleonic forces.\n\nIn 1812, driven by a deep conviction for American independence, he returned to Buenos Aires and organized the legendary Mounted Grenadiers Regiment. His greatest strategic masterpiece occurred in 1817, when he led the Army of the Andes across treacherous mountain passes over four thousand meters high to liberate Chile and Peru.\n\nThroughout his campaigns, San Martín refused political power, insisting that military victories must serve freedom rather than tyranny. Today, he is revered worldwide as an exemplar of military genius, humility, and moral integrity.',
        usefulPhrases: [
          'was born in... and studied at...',
          'In 1812, driven by a deep conviction...',
          'His greatest strategic masterpiece occurred when...',
          'led the army across treacherous mountain passes...',
          'Today, he is revered as an exemplar of...'
        ]
      }
    ],
    speaking: [
      {
        id: 'l3-s1',
        title: 'Delivering a 2-Minute Tactical Briefing (SMEAC Format)',
        situation: 'You are an Argentine platoon leader briefing four British squad leaders on the security arrangements for an incoming dignitary.',
        role: 'Briefing Officer',
        prompt: 'Present a concise oral briefing following the SMEAC structure: Situation, Mission, Execution, Admin & Logistics, Command & Signals.',
        recommendedDuration: '90-120 seconds',
        modelResponse: 'Good morning everyone. Pay close attention to this security briefing. Situation: The UN Special Envoy arrives at Landing Zone Bravo at fourteen-hundred hours today. Mission: Our detachment will conduct route escort and perimeter security along Corridor Green to safeguard the convoy. Execution: Team One will secure the landing zone; Team Two will lead the vehicle column. The maximum speed limit is forty kilometers per hour. Administration and Logistics: Emergency trauma kits and radio batteries are stowed in the second vehicle. Command and Signals: I will travel in the lead vehicle. The primary VHF net is Channel Six. Are there any questions?',
        pronunciationTips: [
          'Speak with firm military cadence and deliberate pauses between the five sections.',
          'Pronounce "corridor" as /ˈkɒr.ɪ.dɔː/ and "vehicle" as /ˈviː.ɪ.kəl/.',
          'Emphasize operational terms like "Landing Zone", "Convoy", and "Perimeter".'
        ],
        keyVocabulary: ['Special Envoy', 'Perimeter security', 'Route escort', 'Landing Zone', 'Trauma gear']
      },
      {
        id: 'l3-s2',
        title: 'Comparative Photo Description: Outdoor Sports vs Indoor Theatrical Culture',
        situation: 'Part 2 of the oral examination: You are shown two photographs illustrating different leisure activities (Photo A: Soldiers jogging together in an open park; Photo B: People attending a theatrical play in a classic theatre).',
        role: 'Examinee / Speaker',
        prompt: 'Compare and contrast the two pictures. Describe what the people are doing (Present Continuous), where they are, and discuss the benefits of each activity for physical and mental well-being.',
        recommendedDuration: '90-120 seconds',
        modelResponse: 'In the first photograph, I can see a group of young soldiers running together along a gravel track in a sunny public park. In the foreground, they are wearing sports uniforms and seem determined and cheerful. Running outdoors is fantastic for cardiovascular fitness and teamwork.\n\nOn the other hand, the second picture depicts a completely different scene. Here, an audience is sitting quietly in an elegant theatre with velvet seats and gilded balconies. In the background, actors on stage are performing a dramatic scene under bright spotlights. While sports provide physical fitness and stress relief, cultural activities like theatre or cinema stimulate the intellect and offer emotional inspiration. In my opinion, a balanced military life requires both physical training and cultural enrichment.',
        pronunciationTips: [
          'Use Present Continuous for actions: "they are wearing", "actors are performing".',
          'Link contrasting ideas with "on the other hand", "whereas", "while".',
          'Pronounce "theatre" as /ˈθɪətə/ and "audience" as /ˈɔːdiəns/.'
        ],
        keyVocabulary: ['In the foreground', 'On the other hand', 'Cardiovascular fitness', 'Performing arts', 'Stress relief']
      },
      {
        id: 'l3-s3',
        title: 'Interactive Role-Play: Asking for and Granting Permission at the Command Post',
        situation: 'You need to ask the Base Adjutant for permission to leave the garrison early on Friday afternoon to attend your daughter\'s school festival in town.',
        role: 'Subordinate Officer interacting with Superior',
        prompt: 'Formulate polite requests using modals ("Would you mind if I...", "Could I possibly..."), explain your circumstances, and respond to conditions regarding guard duty.',
        recommendedDuration: '60-90 seconds',
        modelResponse: 'Good afternoon, Major Evans. Excuse me, Sir, would you mind if I asked a brief question regarding Friday\'s duty schedule? — Go ahead, Captain. What is on your mind? — Well, Sir, my daughter is performing in her primary school music recital on Friday at sixteen-thirty. Could I possibly request permission to leave base at fifteen-hundred hours? I have already inspected the motor pool and finished all weekly logistics paperwork. — If your paperwork is completed and you arrange for Lieutenant Perez to cover the afternoon guard roster, I will sign your leave chit. — Thank you very much, Sir. I will coordinate with Lieutenant Perez right away.',
        pronunciationTips: [
          'Maintain a respectful, courteous intonation rising at the end of requests: "Could I possibly...? ↗".',
          'Sound cooperative when accepting the condition: "I will coordinate right away."'
        ],
        keyVocabulary: ['Would you mind if', 'Could I possibly', 'Leave chit', 'Guard roster', 'Duty schedule']
      },
      {
        id: 'l3-s4',
        title: 'Monologue: Adapting to a New Military Posting and Overcoming Relocation Challenges',
        situation: 'Part 1 / Personal Monologue: The examiners ask you to speak about your experience with changes, postings, and adapting to new garrisons or missions.',
        role: 'Candidate delivering a personal monologue',
        prompt: 'Speak for up to two minutes describing a past posting, the difficulties you faced (housing, weather, habits), how you adapted, and what advice you would give to junior soldiers.',
        recommendedDuration: '90-120 seconds',
        modelResponse: 'Throughout my military career, I have experienced three major postings across Argentina. Three years ago, I was transferred from our central brigade in Buenos Aires to a mountain infantry battalion in Chubut, Patagonia.\n\nInitially, the change was quite challenging. The climate was extraordinarily cold with sub-zero temperatures and severe winds, and our family had to adjust to living in a very small military town. We used to go out to restaurants and cinemas in the city every weekend, so we had to invent new hobbies like cross-country skiing and hosting community dinners.\n\nHowever, I discovered that regular postings strengthen character and create deep friendships among military families. My advice to junior officers facing their first relocation is simple: be proactive, get involved in local sports and base clubs, and embrace the new environment with an open mind.',
        pronunciationTips: [
          'Use past tenses clearly: "was transferred", "had to adjust", "used to go out".',
          'Vary pace to emphasize the contrast between initial difficulties and ultimate adaptation.'
        ],
        keyVocabulary: ['Throughout my career', 'Sub-zero temperatures', 'Adjust to living', 'Embrace with an open mind']
      },
      {
        id: 'l3-s5',
        title: 'Intercultural Discussion: Comparing Free Time and Education in Argentina and the UK',
        situation: 'Part 3 Collaborative Discussion: You and your partner are asked to explore cultural differences in leisure time, socializing, and higher education between Argentine and British societies.',
        role: 'Discussion Partner',
        prompt: 'Exchange views, ask your partner\'s opinion, state your agreement or disagreement diplomatically, and summarize common ground.',
        recommendedDuration: '90-120 seconds',
        modelResponse: 'From what I understand, British and Argentine people approach their free time with distinct cultural traditions. While British people frequently gather in local pubs or pursue individual hobbies like gardening and cycling, Argentines place huge importance on collective social rituals, like sharing mate circles and enjoying Sunday asados that last for hours. In addition, when we look at higher education, Argentine public universities are completely tuition-free, which allows broad access across social classes, whereas British students often take on significant student loans. Do you agree that these traditions shape how each society builds community? — Absolutely, but I think both cultures share a profound passion for football, theatre, and family values.',
        pronunciationTips: [
          'Use conversational linking: "From what I understand...", "While British people...", "Do you agree that...?"',
          'Emphasize contrastive words: "completely tuition-free", "collective rituals".'
        ],
        keyVocabulary: ['From what I understand', 'Tuition-free', 'Social rituals', 'Profound passion', 'Common ground']
      }
    ]
  },

  // =========================================================================
  // NIVEL 4 (B1)
  // =========================================================================
  {
    levelNumber: 4,
    name: 'Nivel 4 – Intermedio (B1 • STANAG 6001 Nivel 2)',
    cefr: 'B1',
    clockHours: 120,
    academicHours: 160,
    accumulatedClockHours: 480,
    accumulatedAcademicHours: 640,
    generalObjective: 'Que el usuario comprenda, analice y produzca una amplia gama de discursos orales y escritos auténticos vinculados con la vida profesional y social militar, estilos de vida urbanos y rurales, ecología cotidiana, familia moderna, derechos, deberes y misiones combinadas, comunicándose con razonable fluidez, coherencia y corrección.',
    thematicCompetencies: [
      'ESTILOS DE VIDA: en las grandes urbes, en la periferia, en las pequeñas ciudades de provincia, en el campo y en los centros turísticos.',
      'LA ECOLOGÍA EN LA VIDA COTIDIANA Y EL MEDIO AMBIENTE: sostenibilidad, reciclaje, energías limpias y control de contaminación en bases militares y comunidades.',
      'LA EDUCACIÓN: el estudio, el aprendizaje, formación académica y desarrollo profesional continuo.',
      'LA VIDA SOCIAL: asociaciones culturales, vecinales, de bien público y organismos internacionales (ONGs, Naciones Unidas).',
      'DERECHOS Y DEBERES: libertades civiles, leyes, responsabilidades y Derecho Internacional Humanitario.',
      'LA FAMILIA ACTUAL: el divorcio, la natalidad, comportamientos humanos y relaciones interpersonales.',
      'EMPLEOS Y OCUPACIONES: ventajas y desventajas laborales, vocación castrense vs carreras civiles, conciliación laboral y familiar.',
      'EL ROL DE LA MUJER EN LA SOCIEDAD Y EN LAS FFAA: integración plena en armas de combate (infantería, blindados), liderazgo e igualdad de oportunidades.',
      'EL ENTRETENIMIENTO Y LOS MEDIOS DE COMUNICACIÓN: prensa escrita, radio, televisión, plataformas digitales e internet.',
      'SENTIMIENTOS, OPINIONES Y EXPERIENCIAS PERSONALES: miedo, coraje, empatía, arrepentimiento, quejas e indiferencia.',
      'CURRICULUM VITAE: elaboración de perfil profesional, antecedentes académicos, destinos militares y aptitudes técnicas.'
    ],
    culturalReflection: [
      'COMPARACIÓN PERMANENTE DE LOS HECHOS DE CIVILIZACIÓN DE LOS PAÍSES EXTRANJEROS CON LA ARGENTINA.',
      'PAÍSES Y CULTURAS: vida cultural, normas de convivencia y costumbres en los países angloparlantes.',
      'EL PATRIMONIO NACIONAL: preservación del patrimonio cultural, histórico, arquitectónico y urbanístico.',
      'LA INMIGRACIÓN: procesos migratorios, políticas de integración e impacto social en EE.UU., Canadá, Gran Bretaña y otros países de habla inglesa frente a la experiencia argentina.'
    ],
    speechActs: [
      'Expresar una opinión personal y hacer una hipótesis poco probable.',
      'Informarse y requerir precisiones mediante preguntas directas e indirectas.',
      'Exponer un hecho con orden cronológico y rigor formal.',
      'Evaluar las argumentaciones de terceros identificando fortalezas y debilidades.',
      'Proponer una actividad de adiestramiento, estudio o recreación.',
      'Precisar ideas y argumentos, señalando ventajas y desventajas; desarrollar un argumento de baja a media complejidad.',
      'Justificar opiniones y elecciones de forma constructiva.',
      'Expresar la aprobación y la desaprobación, acuerdo o desacuerdo formal y cordial.',
      'Persuadir y convencer con fundamentos lógicos y operativos.',
      'Expresar hipótesis en el pasado, deducciones o especulaciones sobre hechos que podrían haber ocurrido (sensibilización).',
      'Expresar condiciones en el pasado mediante estructuras condicionales irreales (Conditional Type 3).',
      'Expresar obligaciones en el pasado no cumplidas mediante modales perfectos (should have, ought to have).',
      'Expresar arrepentimiento por cosas realizadas o no realizadas en el pasado.',
      'Describir acciones futuras y hablar sobre situaciones imaginarias futuras o presentes.',
      'Expresar finalidad, causa, consecuencia y oposición mediante conectores específicos.',
      'Conectar ideas contrastantes con fluidez y coherencia.',
      'Describir una actividad en el pasado previa a otra actividad también pasada (Past Perfect).',
      'Expresar hábitos en el pasado en contraste con hábitos presentes (used to, would).',
      'Mostrar interés por lo dicho por el interlocutor mediante respuestas activas.',
      'Expresar grados de certeza, probabilidad o duda fundada.',
      'Hacer cumplidos y responder apropiadamente a elogios.',
      'Reafirmar lo dicho reformulando ideas para evitar malentendidos.',
      'Cambiar el tópico de la conversación con transiciones naturales.',
      'Describir procesos técnicos y operativos simples paso a paso.',
      'Realizar comparaciones expresando mayor o menor grado de diferencias.',
      'Expresar conclusiones y balances.',
      'Expresar pena o condolencias por las dificultades o pérdidas del otro.',
      'Expresar queja formal o disconformidad por fallas en servicios o equipos.',
      'Expresar el miedo y el coraje en situaciones de apremio u operacionales.',
      'Expresar cambios de sentimientos o de estados emocionales.',
      'Expresar indiferencia o neutralidad.',
      'Expresar sensaciones físicas y estados de ánimo.',
      'Expresar prohibición y advertencia.',
      'Expresar sorpresa y énfasis.',
      'Referir lo dicho por otros (discurso indirecto: Reported Speech) en forma simple con Say y Tell.'
    ],
    grammaticalContents: [
      'Tenses: Past Perfect Simple (had + past participle) para acciones ocurridas con anterioridad a otro suceso pasado',
      'Tenses: Past Perfect Continuous (had been + -ing) para procesos pasados continuos previos a un punto temporal',
      'Perfect Modals: can\'t have, may/might have (reconocimiento), must have (deducción certera sobre el pasado)',
      'Perfect Modals: should have / ought to have (obligaciones pasadas no cumplidas y arrepentimiento)',
      'Simple Reported Speech: statements, commands, questions, requests (con distinción entre Say y Tell)',
      'Passive Voice in the present and the past (y tiempos perfectos/futuros, excepto formas continuas)',
      'Conditional Sentences Type 3: If + Past Perfect, would have + past participle (hipótesis irreales en el pasado)',
      'Gerunds & Infinitives: Infinitivos después de adjetivos (easy to operate, difficult to locate)',
      'Gerunds & Infinitives: Gerundios como sujeto y objeto de la oración (Patrolling is demanding, He avoids talking)',
      'Gerunds & Infinitives: Gerundios tras preposiciones (after arriving, without checking, good at planning)',
      'Gerunds & Infinitives: Infinitivo de propósito (in order to, so as to, to protect)',
      'Verbos seguidos de -ing: consider, keep, admit, mind, feel like, delay, avoid',
      'Verbos seguidos de to-infinitive: seem, promise, accept, refuse, offer, agree',
      'Verbos seguidos de Objeto + to-infinitive: advise, allow, force, encourage, invite, remind',
      'Verbos seguidos de gerundio o to-infinitive: begin, continue, start',
      'Preferencias y recomendaciones: prefer / would rather / had better',
      'Colocaciones fijas: Make vs Do (make a decision, make an effort / do duty, do an inspection)',
      'Defining relative clauses: relative pronouns (who, which, whose, whom, where)',
      'Order of adjectives: Opinión - Tamaño - Forma - Edad - Color - Origen - Material',
      'Compound adjectives: adjetivos compuestos (a ten-year-old vehicle, a well-equipped unit)',
      'Comparatives and superlatives with indication of degree: slightly bigger, far more dangerous, by far the biggest',
      'Order of adverbs of manner, place, and time (modo, lugar y tiempo)',
      'Intensifiers: so / such y correlativos so... that / such... that',
      'Contrastes temporales y preposicionales: While vs During; Quite vs Rather',
      'Question Tags (coletillas interrogativas) y Embedded Questions (preguntas indirectas incrustadas)',
      'Prepositions: among vs between, toward(s), besides / by, on time / in time, at the end / in the end',
      'Preposition + Noun: by mistake, on television, on duty, in advance, under pressure',
      'Prepositions tras sustantivos/adjetivos: advice on, afraid of, good at, capable of',
      'Prepositions tras verbos: laugh at, ask for, spend on, apologize for, rely on',
      'Connectors de adición: besides, moreover, in addition (to this), furthermore',
      'Connectors condicionales: in case, eventually, unless, provided that',
      'Connectors de causa/motivo: because of, due to, owing to',
      'Connectors de consecuencia/resultado: therefore, consequently, as a result',
      'Connectors de contraste: even though / although / though, as a matter of fact, in fact, actually',
      'Phrasal verbs generales: break down, break up, come across, figure out, give up, go with, look into, run into, take up, try out, wear out, make up, run out of, try on',
      'Phrasal verbs para telefonía y radiotelefonía: call up, hold on, hang on, hang up, cut off, get through, pick up, put through',
      'Miscellaneous: due to, owing to, like, as'
    ],
    vocabularyTopics: [
      'Lifestyles: metropolises, suburban outskirts, small provincial towns, countryside, tourist resorts',
      'The environment & everyday ecology: waste sorting, recycling, microgrids, carbon footprint reduction',
      'Education: academic degrees, military academies, pedagogical models, continuous learning',
      'Entertainment & the media: daily press, television broadcasts, podcasting, digital journalism',
      'Relationships & family life: marital trends, divorce, birth rate statistics, conflict resolution',
      'Jobs & careers: civil service vs military vocation, career pros & cons, professional development',
      'The role of women: combat integration, leadership command, equal opportunity laws',
      'Personal experiences: feelings, coping with fear, exercising courage, expressing regret',
      'Curriculum Vitae: military service records, duty postings, language qualifications, mission history',
      'National heritage: architectural landmarks, historic battlefield conservation, urban preservation',
      'Migration & multiculturalism: historical waves, immigration policies in the UK, USA, Canada, and Argentina',
      'Radio reports & conversations: situational awareness, standard operational prowords',
      'Peacekeeping tasks: demilitarized zones, ceasefire supervision, buffer zones, CIMIC operations',
      'Special forces & tactical operations: covert reconnaissance, extraction plans, rules of engagement'
    ],
    militarySpecificTopics: [
      'UN Peacekeeping doctrine, Rules of Engagement (ROE) and Geneva Conventions',
      'Special operations forces mission debriefing and after-action reviews (AAR)',
      'Radio telephone communications: handling interference, call forwarding and prowords',
      'Environmental risk management on military bases and during deployed field exercises',
      'Civil-Military Cooperation (CIMIC) and liaison with local community councils'
    ],
    writtenComprehensionSkills: [
      '1. Reconocer diferentes tipos de textos tomados del mundo real: artículos de diarios, revistas, informes, reportajes, sitios web, críticas cinematográficas y literarias, folletos turísticos, volantes, extractos narrativos, señales públicas y advertencias.',
      '2. Aplicar estrategias de lecto-comprensión: reconocer organización textual, tema principal y secundario, descartar información irrelevante, apreciar actitud del autor e inferir significados contextuales.',
      '3. Identificar relaciones lógicas: causa, consecuencia, finalidad, oposición, condición, secuencias cronológicas, contrastes, adición, ejemplificación, propósito, opinión y fuentes informativas.'
    ],
    writtenExpressionSkills: [
      '1. Redactar narraciones de experiencias, hábitos y hechos pasados, presentes y futuros (biografías, reportajes, expectativas, planes).',
      '2. Elaborar respuestas personales y justificar opiniones frente a dilemas con argumentos, razones y puntos de vista estructurados.',
      '3. Redactar correspondencia formal: solicitud de empleo adjuntando Curriculum Vitae, y cartas de reclamo expresando disconformidad o queja por servicios o suministros deficientes.',
      '4. Redactar artículos e informes breves, reduciendo, expandiendo y produciendo variaciones textuales con coherencia.'
    ],
    oralComprehensionSkills: [
      '1. Reconocer los distintos usos y registros sociales de la lengua (formal, operacional, coloquial).',
      '2. Identificar el tema central y detalles de emisiones orales claras (noticias, comerciales, transmisiones radiales).',
      '3. Extraer información general y específica en mensajes auténticos aun con vocabulario no familiar.',
      '4. Comprender instrucciones orales sobre el manejo de aparatos y equipos de radiocomunicación.',
      '5. Inferir intenciones, grados de certeza, reservas o actitudes de los hablantes.'
    ],
    oralExpressionSkills: [
      '1. Interactuar en situaciones comunicativas de índole personal, social, laboral o militar aplicando actos del habla variados (sugerir, acordar, recomendar, persuadir).',
      '2. Exponer monólogos sostenidos describiendo hechos pasados, opiniones personales y planes futuros con coherencia y fluidez.',
      '3. Describir, comparar y contrastar fotografías utilizando léxico preciso y conectores discursivos adecuados.'
    ],
    listening: [
      {
        id: 'l4-act1',
        title: 'Sociological Feature: Modern Lifestyles – Megacities vs Provincial Towns',
        context: 'Programa radial de análisis social sobre calidad de vida en capitales y pequeñas ciudades del interior',
        speakerRole: 'Radio Host (Helen Parker) and Urban Sociologist (Dr. Andrew Vance)',
        audioProwords: false,
        audioText: 'Welcome to Social Horizons. Today we are discussing shifting lifestyles. Dr. Vance, why are more people choosing to leave megacities like London for smaller provincial towns? — Well, Helen, life in huge metropolitan areas has become extraordinarily stressful. Commuters spend up to two hours travelling on crowded subways every morning. Moreover, housing prices in urban centres have skyrocketed, so young families find it nearly impossible to purchase property. In contrast, smaller provincial towns offer a significantly higher quality of life. Even though career opportunities might be slightly narrower, residents enjoy closer neighbourhood associations, access to green spaces, and a stronger sense of community. In fact, many professionals who had worked in the capital for decades recently decided to relocate after discovering the advantages of remote working.',
        questions: [
          {
            id: 'l4-q1',
            question: 'What is mentioned as a major disadvantage of living in large metropolitan cities?',
            options: [
              'A complete lack of internet connectivity',
              'Long and stressful commutes on crowded transport and high housing costs',
              'The total absence of cultural centres or entertainment',
              'Obligatory military service for all city residents'
            ],
            correctIndex: 1,
            explanation: 'Dr. Vance explains that commuters spend up to two hours travelling on crowded subways and that housing prices have skyrocketed.'
          },
          {
            id: 'l4-q2',
            question: 'What advantage do smaller provincial towns offer according to Dr. Vance?',
            options: [
              'Free public transport for all citizens',
              'A higher quality of life, green spaces, and a stronger sense of community',
              'Guaranteed employment in international diplomacy',
              'Warmer tropical climate throughout the year'
            ],
            correctIndex: 1,
            explanation: 'He points out: "residents enjoy closer neighbourhood associations, access to green spaces, and a stronger sense of community."'
          },
          {
            id: 'l4-q3',
            question: 'Which grammatical connector in the text introduces a contrast between narrower career opportunities and community benefits?',
            options: ['"Even though"', '"In case"', '"Because of"', '"Therefore"'],
            correctIndex: 0,
            explanation: '"Even though" is used to introduce the concession/contrast: "Even though career opportunities might be slightly narrower, residents enjoy..."'
          }
        ]
      },
      {
        id: 'l4-act2',
        title: 'Environmental Ecology: Everyday Sustainable Practices in Garrisons',
        context: 'Entrevista técnica sobre gestión ecológica, reducción de residuos y microrredes en recintos militares',
        speakerRole: 'Environmental Engineer (Capt. Liam Foster) and Host (Sarah Jenkins)',
        audioProwords: false,
        audioText: 'Captain Foster, modern armed forces are increasingly focused on environmental protection. What measures has your brigade adopted? — Good morning, Sarah. We realized that protecting the environment starts with everyday habits. In our garrison, we introduced a strict zero-waste initiative. Before this programme started, single-use plastics had been widely used in the dining halls, generating tonnes of preventable waste. Now, everyone uses reusable containers. Furthermore, our maintenance workshops have installed solar-powered microgrids so that vehicle batteries can be recharged cleanly. If we had not implemented these energy-saving protocols two years ago, our carbon footprint would have risen dramatically. The commanding officer told us that environmental responsibility is as crucial as tactical readiness.',
        questions: [
          {
            id: 'l4-q4',
            question: 'What was the situation in the garrison dining halls before the zero-waste initiative?',
            options: [
              'They were completely closed to soldiers',
              'Single-use plastics had been widely used, generating tonnes of preventable waste',
              'Only imported gourmet meals were served',
              'Solar microgrids provided all heating'
            ],
            correctIndex: 1,
            explanation: 'Capt. Foster states: "Before this programme started, single-use plastics had been widely used in the dining halls, generating tonnes of preventable waste."'
          },
          {
            id: 'l4-q5',
            question: 'Which conditional sentence is used to express an unreal hypothesis about past environmental measures?',
            options: [
              '"If we do not save energy, emissions will rise."',
              '"If we had not implemented these protocols two years ago, our carbon footprint would have risen dramatically."',
              '"If you want to recycle, speak to the commander."',
              '"If solar panels are installed, energy is free."'
            ],
            correctIndex: 1,
            explanation: 'This is a Third Conditional (unreal past): "If we had not implemented... would have risen dramatically."'
          },
          {
            id: 'l4-q6',
            question: 'What did the commanding officer state regarding environmental responsibility?',
            options: [
              'That it should be postponed until next decade',
              'That it is as crucial as tactical readiness',
              'That it only applies to civilian personnel',
              'That it was too expensive to maintain'
            ],
            correctIndex: 1,
            explanation: 'The text notes: "The commanding officer told us that environmental responsibility is as crucial as tactical readiness."'
          }
        ]
      },
      {
        id: 'l4-act3',
        title: 'Operational Telephone Call: Troubleshooting Tactical Radio Communications',
        context: 'Llamada telefónica de servicio entre oficial de comunicaciones y central técnica militar',
        speakerRole: 'Captain Gomez (Field Unit) and Sergeant Evans (Signal Support Desk)',
        audioProwords: false,
        audioText: 'Signal Support, Sergeant Evans speaking. How can I help you, Sir? — Good morning, Sergeant. This is Captain Gomez from Outpost Delta. I am calling up regarding our satellite relay terminal. It broke down unexpectedly during yesterday\'s thunderstorm. Can you put me through to the technical repair officer? — Please hold on for a moment, Sir. I will try to connect you... I\'m sorry, Captain Gomez, his line is engaged right now. If you hold the line, I can take down your details. — Well, we ran out of spare transmitter fuses last night. When we tried on the backup generator, the main antenna was cut off automatically. Could you figure out whether a technician can visit our post before eighteen-hundred hours? — Yes, Sir. I will look into the duty roster and call you back immediately.',
        questions: [
          {
            id: 'l4-q7',
            question: 'Why did Captain Gomez call the Signal Support desk?',
            options: [
              'To order sports equipment for the garrison',
              'Because their satellite relay terminal broke down during a thunderstorm',
              'To complain about the cafeteria food',
              'To schedule an annual leave request'
            ],
            correctIndex: 1,
            explanation: 'Captain Gomez states: "I am calling up regarding our satellite relay terminal. It broke down unexpectedly during yesterday\'s thunderstorm."'
          },
          {
            id: 'l4-q8',
            question: 'What phrasal verb does Sergeant Evans use when asking the officer to wait on the line?',
            options: ['"give up"', '"hold on"', '"break up"', '"run into"'],
            correctIndex: 1,
            explanation: '"hold on" is the standard telephoning phrasal verb meaning to wait on the line.'
          },
          {
            id: 'l4-q9',
            question: 'What problem occurred when the outpost switched to the backup generator?',
            options: [
              'The entire camp lost internet permanently',
              'The main antenna was cut off automatically',
              'The radio technicians refused to assist',
              'A fire broke out in the barracks'
            ],
            correctIndex: 1,
            explanation: 'Captain Gomez explains: "When we tried on the backup generator, the main antenna was cut off automatically."'
          }
        ]
      },
      {
        id: 'l4-act4',
        title: 'UN Peacekeeping Debriefing: Buffer Zone Incident & Ceasefire Maintenance',
        context: 'Debriefing de oficiales de la ONU tras una patrulla en la zona desmilitarizada',
        speakerRole: 'Major Thomas Wright (UK Contingent) and Captain Lucía Ramos (Argentine Contingent)',
        audioProwords: true,
        audioText: 'Attention to debrief. At fourteen-hundred hours, Argentine and British joint patrol Alpha-Three conducted a motorized reconnaissance along the southern perimeter of the UN buffer zone. Captain Ramos, what was the sequence of events? — Major, while we were inspecting Observation Post Four, our forward scout noticed that three individuals had dismantled a section of the perimeter wire. By the time we arrived at the breach, they had already fled toward the neutral line. We discovered several abandoned tools and a commercial drone. If our patrol had left headquarters five minutes earlier, we would have intercepted the perpetrators. However, our team adhered strictly to the Rules of Engagement and avoided crossing the demarcation line without formal clearance from Sector Command.',
        questions: [
          {
            id: 'l4-q10',
            question: 'What had the individuals done before the joint patrol arrived at Observation Post Four?',
            options: [
              'They had surrendered to the military police',
              'They had dismantled a section of the perimeter wire and fled',
              'They had planted an explosive device inside the tower',
              'They had requested political mediation'
            ],
            correctIndex: 1,
            explanation: 'Captain Ramos states that "they had dismantled a section of the perimeter wire" and "had already fled toward the neutral line."'
          },
          {
            id: 'l4-q11',
            question: 'Why did the patrol refrain from pursuing the suspects across the neutral line?',
            options: [
              'Because their patrol vehicles ran out of fuel',
              'Because they adhered strictly to the Rules of Engagement and avoided crossing without clearance',
              'Because bad weather made pursuit impossible',
              'Because the British contingent had no radios'
            ],
            correctIndex: 1,
            explanation: 'Captain Ramos explains: "our team adhered strictly to the Rules of Engagement and avoided crossing the demarcation line without formal clearance."'
          }
        ]
      },
      {
        id: 'l4-act5',
        title: 'Special Operations Tactical Debrief: Mountain Extraction and Unfulfilled Obligations',
        context: 'Análisis posterior a una operación de fuerzas especiales en terreno montañoso',
        speakerRole: 'Debriefing Officer (Colonel Hayes) and Team Leader (Captain Scott)',
        audioProwords: true,
        audioText: 'Captain Scott, your special reconnaissance unit has successfully extracted the surveillance team from Sector Sierra. However, we need to address why the backup radio relay failed. — Colonel, the terrain in Valley Charlie was extraordinarily rugged. The signals specialist should have tested the secondary high-frequency antenna before departing base, but he forgot due to the hurried departure. As a result, when the satellite link dropped, we were cut off for forty minutes. If the team had brought the backup transceiver, we would have established contact immediately. Fortunately, Corporal Diaz climbed Ridge Nine and deployed visual signal flares. We certainly ought to have verified all communication kits prior to insertion, and I accept full responsibility for this oversight.',
        questions: [
          {
            id: 'l4-q12',
            question: 'What unfulfilled past obligation does Captain Scott acknowledge regarding the communication equipment?',
            options: [
              'They should have purchased new satellite dishes from civilians',
              'The signals specialist should have tested the secondary antenna before departing',
              'They ought to have abandoned the injured soldier on the ridge',
              'They should not have carried any emergency flares'
            ],
            correctIndex: 1,
            explanation: 'Captain Scott admits: "The signals specialist should have tested the secondary high-frequency antenna before departing base, but he forgot..."'
          },
          {
            id: 'l4-q13',
            question: 'How did Corporal Diaz restore contact when the communications were cut off?',
            options: [
              'By walking twenty kilometres back to garrison',
              'By climbing Ridge Nine and deploying visual signal flares',
              'By using a civilian smartphone',
              'By firing live rounds into the air'
            ],
            correctIndex: 1,
            explanation: 'Captain Scott explains: "Corporal Diaz climbed Ridge Nine and deployed visual signal flares."'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'l4-read1',
        title: 'Urban Dynamics: The Great Migration from Megacities to Provincial Towns and Rural Communities',
        textType: 'Artículo de Análisis Sociológico y Urbanístico',
        content: `URBAN DYNAMICS: THE REVALUATION OF PROVINCIAL LIFE
By Dr. Catherine Howard

For most of the twentieth century, global urbanization followed an unbroken trajectory toward megacities. Metropolitan capitals like London, New York, and Buenos Aires attracted millions of ambitious workers seeking prestigious employment, cultural prestige, and world-class universities. However, during the past decade, demographic analysts have observed an intriguing counter-trend: a noticeable migration away from dense urban centres toward smaller provincial towns, commuter peripheries, and even rural villages.

Several compounding factors explain this contemporary migration. Firstly, escalating living costs in major cities have placed homeownership far beyond the reach of middle-class families. Commuters often spend over twenty hours each week travelling on congested motorways or overcrowded trains, resulting in chronic fatigue and diminished family time. Secondly, the widespread expansion of high-speed fibre-optic internet and flexible teleworking arrangements has severed the historic obligation to reside within physical commuting distance of corporate headquarters.

Provincial towns have reaped enormous benefits from this influx. Local councils report renewed vitality in public libraries, sports associations, and civic charities. Moreover, residents emphasize that smaller communities foster genuine interpersonal relationships, allowing neighbours to look out for one another. Although provincial life may lack the sheer quantity of theatrical shows or international exhibitions found in the capital, it compensates with clean air, proximity to nature, and an enviable pace of life. As one relocated engineer remarked: "In the metropolis, you merely survive; in a provincial town, you truly live."`,
        glossary: [
          { term: 'Unbroken trajectory', definition: 'Trayectoria ininterrumpida de crecimiento o movimiento' },
          { term: 'Commuter periphery', definition: 'Zonas periféricas o ciudades dormitorio con traslados diarios' },
          { term: 'Chronic fatigue', definition: 'Cansancio acumulado crónico derivado de largas jornadas' },
          { term: 'Civic charities', definition: 'Asociaciones comunitarias y de beneficencia pública' }
        ],
        questions: [
          {
            id: 'l4-rq1',
            question: 'What counter-trend has been observed by demographic analysts over the past decade?',
            options: [
              'A total abandonment of provincial universities',
              'A noticeable migration away from dense megacities toward provincial towns and rural areas',
              'The complete depopulation of coastal tourist resorts',
              'An immediate ban on remote working across the Commonwealth'
            ],
            correctIndex: 1,
            explanation: 'The text highlights that analysts observed "a noticeable migration away from dense urban centres toward smaller provincial towns, commuter peripheries, and even rural villages."'
          },
          {
            id: 'l4-rq2',
            question: 'What technological advance enabled workers to move away from major metropolitan centres?',
            options: [
              'The invention of diesel combustion engines',
              'High-speed fibre-optic internet and flexible teleworking arrangements',
              'Satellite television broadcasts',
              'Autonomous electric cargo helicopters'
            ],
            correctIndex: 1,
            explanation: 'The author points out that "high-speed fibre-optic internet and flexible teleworking arrangements has severed the historic obligation to reside within physical commuting distance."'
          },
          {
            id: 'l4-rq3',
            question: 'What is highlighted as a primary community advantage of living in smaller provincial towns?',
            options: [
              'Completely free public housing for all residents',
              'Closer neighbourhood associations, genuine interpersonal relationships, and an enviable pace of life',
              'The complete absence of local taxation',
              'More international film premieres than in capital cities'
            ],
            correctIndex: 1,
            explanation: 'The article emphasizes that "smaller communities foster genuine interpersonal relationships, allowing neighbours to look out for one another... with clean air, proximity to nature, and an enviable pace of life."'
          }
        ]
      },
      {
        id: 'l4-read2',
        title: 'Rights, Duties, and International Humanitarian Law in Multinational Peacekeeping',
        textType: 'Informe de Doctrina y Derecho Internacional Humanitario',
        content: `RIGHTS, DUTIES, AND LEGAL RESPONSIBILITIES UNDER THE BLUE HELMET
By Colonel Marcus Sterling, Legal Advisor to UN Peacekeeping Operations

The deployment of military contingents under the mandate of the United Nations demands a sophisticated understanding of legal rights, moral duties, and strict operational responsibilities. Unlike conventional warfare, where victory is defined by the defeat of hostile forces, peacekeeping operations are designed to de-escalate tension, protect vulnerable civilian populations, and uphold international rule of law.

At the core of all peacekeeping engagements are the Geneva Conventions and United Nations Security Council resolutions. Peacekeepers have the fundamental duty to act with strict impartiality. They must never favor one political or ethnic faction over another, even when operating under severe provocation. Furthermore, military personnel are bound by clearly defined Rules of Engagement (ROE). The ROE establish precisely when and to what degree force may be authorized. As a general principle, force is strictly restricted to self-defence and the defence of civilians under imminent threat of physical violence.

If a peacekeeping detachment had employed disproportionate force in disputed border areas in past missions, the legitimacy of the entire international coalition would have been instantly compromised. Therefore, modern soldiering requires officers who can exercise cognitive composure and legal discernment under extreme stress. Soldiers must remember that the wearing of the blue beret carries with it not merely tactical authority, but a profound ethical obligation to safeguard human rights and preserve human dignity.`,
        glossary: [
          { term: 'Rules of Engagement (ROE)', definition: 'Reglas de enfrentamiento que dictan el uso legal de la fuerza' },
          { term: 'Impartiality', definition: 'Principio de imparcialidad y neutralidad activa' },
          { term: 'Imminent threat', definition: 'Amenaza inminente de peligro o ataque físico' },
          { term: 'Disproportionate force', definition: 'Uso desmedido o desproporcionado de la fuerza armada' }
        ],
        questions: [
          {
            id: 'l4-rq4',
            question: 'How do the core objectives of peacekeeping differ from conventional warfare according to Colonel Sterling?',
            options: [
              'Peacekeeping focuses on territorial conquest and industrial capture',
              'Peacekeeping is designed to de-escalate tension, protect civilians, and uphold international law',
              'Peacekeeping requires soldiers to abandon their weapons and uniforms',
              'Peacekeeping has no legal oversight from international courts'
            ],
            correctIndex: 1,
            explanation: 'The text notes: "peacekeeping operations are designed to de-escalate tension, protect vulnerable civilian populations, and uphold international rule of law."'
          },
          {
            id: 'l4-rq5',
            question: 'Under what specific conditions is the use of force authorized according to the standard Rules of Engagement?',
            options: [
              'Whenever a commanding officer feels impatient',
              'Force is strictly restricted to self-defence and the defence of civilians under imminent threat of violence',
              'Only during nighttime operations in urban centres',
              'Whenever property damage exceeds ten thousand dollars'
            ],
            correctIndex: 1,
            explanation: 'The text specifies: "force is strictly restricted to self-defence and the defence of civilians under imminent threat of physical violence."'
          },
          {
            id: 'l4-rq6',
            question: 'What third conditional consequence does the author describe regarding the misuse of force in past missions?',
            options: [
              'The coalition would have received additional funding',
              'The legitimacy of the entire international coalition would have been instantly compromised',
              'Troops would have been promoted ahead of schedule',
              'The civilian population would have surrendered completely'
            ],
            correctIndex: 1,
            explanation: 'He writes: "If a peacekeeping detachment had employed disproportionate force... the legitimacy of the entire international coalition would have been instantly compromised."'
          }
        ]
      },
      {
        id: 'l4-read3',
        title: 'The Contemporary Family and Social Fabric: Comparative Perspectives (UK & Argentina)',
        textType: 'Ensayo Sociológico Comparativo e Intercultural',
        content: `THE CONTEMPORARY FAMILY: ADAPTING TO DEMOGRAPHIC AND CULTURAL EVOLUTION
By Professor Mariana Gomez & Dr. Nigel Dawson

Family structures across both Western and South American societies have undergone profound transformations over the past fifty years. In both the United Kingdom and Argentina, the traditional nuclear household has been complemented by diverse configurations, including single-parent families, blended households resulting from divorce, and multi-generational arrangements.

In Argentina, familial relationships continue to form the cornerstone of daily social life. Despite rising divorce rates and declining birth rates similar to European trends, close extended families typically gather every Sunday. Grandparents frequently play an indispensable role in daily childcare, providing stability while both parents pursue demanding careers. In contrast, British society exhibits a somewhat more individualistic orientation; adult children frequently relocate far from their hometowns for university or employment, and older generations are more likely to live independently in retirement communities or active social clubs.

Nevertheless, both nations place increasing value on volunteer neighbourhood associations, civic charities, and international non-governmental organizations. When communities face socioeconomic crises or environmental disasters, citizens in both Buenos Aires and Birmingham demonstrate an extraordinary capacity for civic solidarity. Whether organizing community food banks, running local youth sports clubs, or advocating for public park conservation, these voluntary associations prove that human empathy and civic responsibility remain vibrant even as traditional family models evolve.`,
        glossary: [
          { term: 'Blended households', definition: 'Familias ensambladas tras nuevos matrimonios' },
          { term: 'Extended families', definition: 'Familias ampliadas (abuelos, tíos, primos)' },
          { term: 'Civic solidarity', definition: 'Solidaridad y ayuda mutua ciudadana organizada' },
          { term: 'Food banks', definition: 'Bancos de alimentos comunitarios para familias vulnerables' }
        ],
        questions: [
          {
            id: 'l4-rq7',
            question: 'What key difference is noted regarding extended family roles in Argentina compared to the UK?',
            options: [
              'Argentine grandparents frequently assist with daily childcare and families gather regularly on Sundays',
              'British families are legally obliged to live under the same roof forever',
              'Argentine families never celebrate birthdays or holidays together',
              'Divorce is completely illegal in the United Kingdom'
            ],
            correctIndex: 0,
            explanation: 'The article explains: "In Argentina, close extended families typically gather every Sunday. Grandparents frequently play an indispensable role in daily childcare..."'
          },
          {
            id: 'l4-rq8',
            question: 'What common civic characteristic is shared by both Argentine and British societies according to the essay?',
            options: [
              'A complete refusal to volunteer for community projects',
              'An extraordinary capacity for civic solidarity through voluntary neighbourhood associations and charities',
              'Mandatory membership in political clubs for all university students',
              'Identical housing architecture in rural areas'
            ],
            correctIndex: 1,
            explanation: 'The authors emphasize: "citizens in both Buenos Aires and Birmingham demonstrate an extraordinary capacity for civic solidarity... organizing community food banks, running youth clubs..."'
          }
        ]
      },
      {
        id: 'l4-read4',
        title: 'Special Operations & Environmental Protection: Counter-Poaching Patrols in Maritime Reserves',
        textType: 'Artículo de Operaciones Especiales y Protección Ambiental',
        content: `GUARDIANS OF THE DEEP: SPECIAL FORCES CONFRONTING ENVIRONMENTAL CRIME
By Captain Derek Morrison, Royal Marines Specialist Advisor

Environmental degradation is no longer simply an ecological concern; it has evolved into a national security challenge. Across international waters and protected marine reserves, transnational criminal syndicates engage in illegal, unreported, and unregulated (IUU) fishing, threatening biodiversity and depriving coastal communities of essential protein resources.

To confront this growing threat, multinational special forces detachments have been tasked with maritime interdiction operations. Operating from stealth patrol corvettes and rigid-inflatable boats, boarding teams conduct hazardous night insertions to board and inspect suspect vessels. Last November, a joint detachment intercepted an illegal trawler that had been harvesting endangered species inside a maritime conservation sanctuary for three weeks.

The team commander recalled: "The trawler's crew attempted to jettison their nets and navigational computers overboard. Fortunately, our boarding team had trained for precisely this scenario. If the specialist search team had not secured the electronic logbooks immediately upon boarding, crucial evidence of environmental destruction would have been irretrievably lost." Through such operations, special forces prove that tactical excellence can directly safeguard our planet's endangered natural heritage.`,
        glossary: [
          { term: 'Maritime interdiction', definition: 'Operación de interdicción y abordaje marítimo' },
          { term: 'Transnational syndicates', definition: 'Organizaciones criminales transnacionales' },
          { term: 'Jettison', definition: 'Arrojar carga o equipos al mar para deshacerse de pruebas' },
          { term: 'Electronic logbooks', definition: 'Bitácoras y registros de navegación digital' }
        ],
        questions: [
          {
            id: 'l4-rq9',
            question: 'Why has environmental degradation in international waters become a national security concern?',
            options: [
              'Because tourist cruise liners refuse to travel during winter',
              'Because criminal syndicates conduct illegal fishing that harms biodiversity and coastal livelihoods',
              'Because naval ships are not allowed to sail in deep waters',
              'Because all fishing was banned globally by the United Nations'
            ],
            correctIndex: 1,
            explanation: 'The text states: "transnational criminal syndicates engage in illegal, unreported, and unregulated fishing, threatening biodiversity and depriving coastal communities of resources."'
          },
          {
            id: 'l4-rq10',
            question: 'What would have occurred if the specialist team had not secured the electronic logbooks immediately upon boarding?',
            options: [
              'The trawler would have sunk immediately',
              'Crucial evidence of environmental destruction would have been irretrievably lost',
              'The special forces team would have run out of fuel',
              'The suspects would have been granted diplomatic immunity'
            ],
            correctIndex: 1,
            explanation: 'The commander remarked: "If the specialist search team had not secured the electronic logbooks immediately upon boarding, crucial evidence of environmental destruction would have been irretrievably lost."'
          }
        ]
      }
    ],
    useOfLanguage: [
      {
        id: 'l4-u1',
        title: 'Past Perfect Simple: Prior Action in the Past',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'By the time the search and rescue helicopter arrived at the mountain pass, the alpine patrol ______ already established an emergency shelter.',
        options: ['has', 'had', 'was', 'would'],
        correctAnswer: 'had',
        explanation: 'We use the Past Perfect Simple ("had established") for an action completed before another past event ("the helicopter arrived").',
        instructions: 'Choose the correct auxiliary to complete the past perfect tense.'
      },
      {
        id: 'l4-u2',
        title: 'Past Perfect Continuous: Ongoing Action Before a Past Milestone',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'The peacekeepers were completely exhausted because they ______ marching across rugged marshland for eight consecutive hours before reaching base.',
        options: ['have been', 'had been', 'were', 'would be'],
        correctAnswer: 'had been',
        explanation: 'Past Perfect Continuous ("had been marching") expresses an ongoing activity that had been happening up to a specific past moment.',
        instructions: 'Select the past perfect continuous auxiliary.'
      },
      {
        id: 'l4-u3',
        title: 'Perfect Modals of Deduction: Must Have vs Can\'t Have',
        category: 'modals',
        type: 'multiple-choice',
        prompt: 'The outer security gate was locked from the inside and the alarm was still active. The intruder ______ entered through the main entrance.',
        options: ['can\'t have', 'must have', 'should have', 'might have not'],
        correctAnswer: 'can\'t have',
        explanation: '"can\'t have + past participle" expresses certainty that a past event was impossible given the physical evidence.',
        instructions: 'Select the modal of past deduction expressing impossibility.'
      },
      {
        id: 'l4-u4',
        title: 'Perfect Modals of Unfulfilled Obligation & Regret: Should Have / Ought to Have',
        category: 'modals',
        type: 'multiple-choice',
        prompt: 'The signals team ran out of battery power during the night mission. They ______ brought two spare charging packs as prescribed in standard regulations.',
        options: ['should have', 'must have', 'would have to', 'ought have'],
        correctAnswer: 'should have',
        explanation: '"should have + past participle" expresses an obligation in the past that was not carried out (an unfulfilled obligation or regret).',
        instructions: 'Choose the modal structure expressing an unfulfilled past duty.'
      },
      {
        id: 'l4-u5',
        title: 'Simple Reported Speech: Say vs Tell',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'The Base Commander ______ the company leaders that the international peacekeeping inspection would commence at dawn.',
        options: ['told', 'said', 'explained to', 'reported to'],
        correctAnswer: 'told',
        explanation: '"tell" takes a direct personal object ("told the company leaders"), whereas "say" does not take a direct personal object without "to".',
        instructions: 'Select the correct reporting verb.'
      },
      {
        id: 'l4-u6',
        title: 'Passive Voice in Past and Present',
        category: 'passive_voice',
        type: 'multiple-choice',
        prompt: 'All radio transmission protocols ______ by the communications officer before the combined operation began yesterday.',
        options: ['were inspected', 'are inspected', 'inspected', 'had inspect'],
        correctAnswer: 'were inspected',
        explanation: 'Past Simple Passive: were + past participle ("were inspected"). The protocols were the object of the inspection yesterday.',
        instructions: 'Select the appropriate past passive verb phrase.'
      },
      {
        id: 'l4-u7',
        title: 'Third Conditional: Unreal Hypothesis in the Past',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'If the reconnaissance patrol ______ the concealed surveillance drone earlier, they would have altered their tactical approach.',
        options: ['detected', 'had detected', 'have detected', 'would detect'],
        correctAnswer: 'had detected',
        explanation: 'Third Conditional structure: If + Past Perfect (had detected), would have + past participle (would have altered).',
        instructions: 'Complete the third conditional if-clause.'
      },
      {
        id: 'l4-u8',
        title: 'Gerunds vs Infinitives: Verbs taking -ing vs to-infinitive',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'The young soldier admitted ______ a procedural error during the radio relay test, but promised ______ more vigilant in the future.',
        options: [
          'making / to be',
          'to make / being',
          'make / to be',
          'making / being'
        ],
        correctAnswer: 'making / to be',
        explanation: '"admit" is followed by a gerund ("making"), while "promise" is followed by a to-infinitive ("to be").',
        instructions: 'Select the correct combination of gerund and infinitive.'
      },
      {
        id: 'l4-u9',
        title: 'Verb + Object + to-infinitive (Advise, Allow, Force, Encourage)',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'The physical training instructor encouraged all cadets ______ in the marathon to build cardiovascular stamina.',
        options: ['participate', 'participating', 'to participate', 'for participate'],
        correctAnswer: 'to participate',
        explanation: 'Verbs like "encourage", "allow", "advise", "force" follow the pattern: Verb + Object + to-infinitive ("encouraged cadets to participate").',
        instructions: 'Choose the correct complementation structure.'
      },
      {
        id: 'l4-u10',
        title: 'Expressing Preference: Would rather vs Had better',
        category: 'modals',
        type: 'multiple-choice',
        prompt: 'The patrol commander decided they had better ______ the vehicle before entering the contested sector.',
        options: ['camouflage', 'to camouflage', 'camouflaging', 'camouflaged'],
        correctAnswer: 'camouflage',
        explanation: '"had better" is followed by a bare infinitive without "to" (had better camouflage), expressing an urgent recommendation.',
        instructions: 'Choose the correct verb form following "had better".'
      },
      {
        id: 'l4-u11',
        title: 'Collocations: Make vs Do',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'Before departing on an overseas mission, every staff officer must ______ an effort to ______ a comprehensive risk assessment.',
        options: [
          'make / do',
          'do / make',
          'make / make',
          'do / do'
        ],
        correctAnswer: 'make / do',
        explanation: 'We say "make an effort" (hacer un esfuerzo) and "do a risk assessment / inspection" (realizar una evaluación/inspección).',
        instructions: 'Select the appropriate combination of Make and Do.'
      },
      {
        id: 'l4-u12',
        title: 'Defining Relative Clauses: Whose, Who, Which, Where',
        category: 'connectors',
        type: 'multiple-choice',
        prompt: 'The logistics officer ______ family had relocated to the southern base requested a transfer to the transport battalion ______ is stationed nearby.',
        options: [
          'whose / which',
          'who / where',
          'whose / where',
          'whom / which'
        ],
        correctAnswer: 'whose / which',
        explanation: '"whose" expresses possession (the officer\'s family), and "which" refers to the transport battalion as subject of the relative clause.',
        instructions: 'Select the correct pair of relative pronouns.'
      },
      {
        id: 'l4-u13',
        title: 'Order of Adjectives & Compound Adjectives',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'The UN mission procured five ______ tactical vehicles for the peacekeeping reconnaissance company.',
        options: [
          'impressive new British',
          'British impressive new',
          'new British impressive',
          'impressive British new'
        ],
        correctAnswer: 'impressive new British',
        explanation: 'Adjective order: Opinion (impressive) - Age (new) - Origin (British).',
        instructions: 'Choose the correct order of descriptive adjectives.'
      },
      {
        id: 'l4-u14',
        title: 'Connectors & Intensifiers: So... that vs Such... that & Moreover',
        category: 'connectors',
        type: 'multiple-choice',
        prompt: 'The mountain storm was ______ severe ______ all air reconnaissance flights were grounded; ______, the access roads were blocked by snow.',
        options: [
          'so / that / moreover',
          'such / that / unless',
          'so / as / consequently',
          'such / as / even though'
        ],
        correctAnswer: 'so / that / moreover',
        explanation: '"so + adjective (severe) + that" expresses result, and "moreover" introduces an additional reinforcing fact.',
        instructions: 'Select the correct connectors and intensifiers.'
      },
      {
        id: 'l4-u15',
        title: 'Phrasal Verbs for Telephoning and Field Operations',
        category: 'phrasal_verbs',
        type: 'multiple-choice',
        prompt: 'When our satellite phone line was ______ during the squall, the radio operator had to ______ and wait for the relay tower to reboot.',
        options: [
          'cut off / hang on',
          'broken up / give up',
          'worn out / figure out',
          'put through / call up'
        ],
        correctAnswer: 'cut off / hang on',
        explanation: '"cut off" means interrupted/disconnected during a call, and "hang on" means to wait briefly on the line.',
        instructions: 'Choose the appropriate pair of telephoning phrasal verbs.'
      }
    ],
    writing: [
      {
        id: 'l4-w1',
        title: 'Formal Job Application Letter & Curriculum Vitae (CV) Submission',
        type: 'formal_letter',
        scenario: 'You are an Argentine Army officer applying for a prestigious secondment as a Multinational Peacekeeping Liaison Officer at a United Nations Sector Headquarters. Write a formal application letter to the British Brigadier in charge of the selection board, outlining your qualifications, military career milestones, language capabilities, and referring to your attached Curriculum Vitae.',
        targetWordCount: '120-150 words',
        requiredElements: [
          'Formal salutation ("Dear Brigadier Kensington," or "Dear Sir,")',
          'Clear statement of application and reference to the official posting announcement',
          'Summary of military experience and past postings using Past Perfect and Present Perfect',
          'Reference to attached Curriculum Vitae, language certifications, and interpersonal skills',
          'Polite concluding paragraph and formal sign-off ("Yours sincerely," or "Yours faithfully,")'
        ],
        modelAnswer: 'Dear Brigadier Kensington,\n\nI am writing to formally submit my application for the position of Multinational Peacekeeping Liaison Officer at UN Sector West, as advertised in the International Defence Vacancy Circular.\n\nOver the past eight years, I have served as an infantry operations officer in the Argentine Army. Prior to my current assignment at Army Headquarters, I had completed two deployments in mountain border surveillance units. These postings provided me with extensive experience in civil-military coordination and intercultural dialogue under demanding operational conditions.\n\nI hold a degree in Military Operations from the Colegio Militar de la Nación and recently achieved Level 3 STANAG 6001 language proficiency. Please find attached my comprehensive Curriculum Vitae detailing my service record, academic credentials, and commendations.\n\nThank you for your consideration of my application. I welcome the opportunity to discuss my qualifications at an interview.\n\nYours sincerely,\nCaptain Joaquin Morales\nArgentine Army',
        usefulPhrases: [
          'I am writing to formally submit my application for...',
          'Prior to my current assignment, I had completed...',
          'These postings provided me with extensive experience in...',
          'Please find attached my comprehensive Curriculum Vitae...',
          'Thank you for your consideration of my application.',
          'Yours sincerely,'
        ]
      },
      {
        id: 'l4-w2',
        title: 'Formal Letter of Discontent / Complaint: Defective Tactical Equipment',
        type: 'formal_letter',
        scenario: 'Your unit recently received a shipment of fifty tactical VHF field transceivers from an international defence contractor. During field testing, several radios broke down due to faulty battery connections. Write a formal letter of complaint to the supplier\'s Quality Assurance Director requesting immediate replacement or technical inspection.',
        targetWordCount: '110-140 words',
        requiredElements: [
          'Formal salutation and precise reference to procurement order number',
          'Clear explanation of the defect and impact on field training schedules',
          'Contrast of expected standards vs actual failure (connectors, battery life)',
          'Firm and professional demand for immediate replacement or on-site technical assistance',
          'Formal polite sign-off'
        ],
        modelAnswer: 'Dear Mr. Davies,\n\nI am writing on behalf of the 5th Communications Battalion to formally express our serious dissatisfaction with the shipment of fifty tactical VHF transceivers received on 10 September under Procurement Contract DEF-8821.\n\nDuring pre-deployment field testing yesterday, eight radio sets broke down unexpectedly within two hours of operation due to loose battery connections. This failure severely disrupted our scheduled training maneuvers. Although your brochure guaranteed all-weather reliability, the equipment delivered does not meet the agreed military specifications.\n\nTherefore, we request that a certified technician be dispatched to our garrison immediately, or that the defective units be replaced without additional cost. We expect your urgent response within forty-eight hours.\n\nYours faithfully,\nMajor Esteban Valenzuela\nLogistics and Procurement Officer',
        usefulPhrases: [
          'I am writing to formally express our serious dissatisfaction with...',
          'During pre-deployment field testing, several sets broke down...',
          'Although your brochure guaranteed... the equipment does not meet...',
          'Therefore, we request that... be replaced without additional cost.',
          'We expect your urgent response within...',
          'Yours faithfully,'
        ]
      },
      {
        id: 'l4-w3',
        title: 'Argumentative Essay: The Integration of Women into Armed Forces and Combat Arms',
        type: 'argumentative_essay',
        scenario: 'Write an argumentative essay (120-150 words) evaluating the advantages and challenges of integrating women into frontline combat arms (infantry and armoured units). Weigh physical requirements, leadership capabilities, and modern operational demands.',
        targetWordCount: '120-150 words',
        requiredElements: [
          'Clear introduction presenting the topic of gender integration in combat roles',
          'First body paragraph discussing modern warfare requirements (cognitive skills, technological expertise, physical standards)',
          'Second body paragraph addressing operational diversity and team leadership',
          'Use of contrastive and consecutive connectors (Moreover, Although, Consequently, Therefore)',
          'Balanced conclusion summarizing the positive impact on defense forces'
        ],
        modelAnswer: 'THE ROLE OF WOMEN IN MODERN COMBAT ARMS\n\nIn recent years, armed forces worldwide have reassessed the integration of women into combat roles, including infantry and armoured units. While some critics initially argued that physical differences might compromise combat effectiveness, modern experience has proven otherwise.\n\nFirstly, contemporary warfare relies as much on technological aptitude, tactical intelligence, and strategic decision-making as on physical stamina. Furthermore, military forces that maintain rigorous, gender-neutral physical employment standards ensure that every soldier, male or female, possesses the requisite capability. Moreover, female officers bring vital perspectives to civil-military cooperation and intelligence gathering, particularly in multinational peacekeeping environments.\n\nIn conclusion, capability and professional discipline, rather than gender, must determine operational readiness. Integrating women into all branches of the armed forces undeniably enhances organizational resilience and operational effectiveness.',
        usefulPhrases: [
          'In recent years, armed forces worldwide have reassessed...',
          'While some critics initially argued that... experience has proven otherwise.',
          'contemporary warfare relies as much on... as on...',
          'Furthermore, military forces that maintain rigorous standards...',
          'In conclusion, capability and discipline must determine...'
        ]
      },
      {
        id: 'l4-w4',
        title: 'Informational Article / Report: Comparative Study on Lifestyles, Heritage and Immigration',
        type: 'briefing_notes',
        scenario: 'Write a comparative feature article (120-150 words) for a military educational bulletin comparing lifestyles, historical heritage conservation, and immigration experiences between Argentina and English-speaking societies (such as the UK or Canada).',
        targetWordCount: '120-150 words',
        requiredElements: [
          'Catchy headline and introduction to cultural comparison',
          'Comparison of urban vs rural lifestyles and family traditions',
          'Discussion of national heritage and immigrant integration in both societies',
          'Use of comparative structures and degree modifiers (significantly more, whereas, similarly)',
          'Thoughtful concluding reflection on intercultural shared values'
        ],
        modelAnswer: 'CROSSING BORDERS: LIFESTYLES, HERITAGE, AND IMMIGRATION IN PERSPECTIVE\n\nExamining cultural patterns in Argentina and the United Kingdom reveals striking parallels alongside distinctive national traditions. Both societies have been profoundly shaped by historic waves of immigration, creating multicultural communities that take pride in their collective heritage.\n\nIn the United Kingdom, historic urban preservation is strictly regulated, and suburban commuter life is widespread. In contrast, Argentine social life remains significantly more focused on close-knit extended family rituals and spontaneous neighbourhood gatherings. However, both nations share a deep reverence for national heritage, whether commemorating historic battlegrounds or preserving architectural landmarks.\n\nFurthermore, both countries have demonstrated an enduring ability to assimilate immigrant populations into the armed forces and public life. Ultimately, understanding these cultural nuances fosters mutual respect and smoother interoperability when serving together in international missions.',
        usefulPhrases: [
          'Examining cultural patterns reveals striking parallels...',
          'Both societies have been profoundly shaped by historic waves of immigration...',
          'In contrast, Argentine social life remains significantly more focused on...',
          'However, both nations share a deep reverence for...',
          'Ultimately, understanding these nuances fosters mutual respect...'
        ]
      }
    ],
    speaking: [
      {
        id: 'l4-s1',
        title: 'Tactical Debate: Defending an Operational Option and Evaluating Arguments',
        situation: 'Part 3 Collaborative Discussion: You and your British counterpart are debating whether a humanitarian relief convoy should travel along the faster highway (which has reported checkpoint delays) or take a longer provincial detour through rural villages.',
        role: 'Operations Planning Officer',
        prompt: 'Present your opinion, precise advantages and disadvantages of both routes, evaluate your partner\'s arguments, and diplomatically persuade them to reach a consensus.',
        recommendedDuration: '90-120 seconds',
        modelResponse: 'From my perspective, taking the highway presents unacceptable operational risks. Even though it is fifty kilometres shorter, intelligence reports indicate that commercial traffic has created massive bottlenecks near Checkpoint Charlie. If our convoy were delayed there for several hours, the perishable medical cargo would be compromised. In contrast, the secondary provincial route through the rural valleys is significantly clearer. Although the road is narrower and our speed would be slower, it guarantees continuous movement and better natural concealment. What do you think about deploying an advance scout vehicle along the valley road to verify bridge clearances? — I think that is a sound compromise. If the scout confirms the bridges are secure, we will follow the provincial route.',
        pronunciationTips: [
          'Use contrastive markers with clear pitch inflection: "Even though...", "In contrast...", "Although...".',
          'Pronounce "checkpoint" /ˈtʃekpɔɪnt/ and "compromise" /ˈkɒmprəmaɪz/.',
          'Maintain a collaborative, persuasive tone rather than an aggressive one.'
        ],
        keyVocabulary: ['From my perspective', 'Unacceptable operational risks', 'In contrast', 'Bottlenecks', 'Perishable cargo', 'Sound compromise']
      },
      {
        id: 'l4-s2',
        title: 'Comparative Photo Description: Megacity Congestion vs Rural Provincial Life',
        situation: 'Part 2 of the oral examination: You are presented with two photographs depicting contrasting lifestyles (Photo A: Crowded commuters on a London underground escalator during rush hour; Photo B: People cycling peacefully along a tree-lined provincial street in a small town).',
        role: 'Examinee / Candidate',
        prompt: 'Compare and contrast the two pictures. Describe what is happening in each image, discuss the advantages and disadvantages of each lifestyle, and express your personal preference regarding where you would rather live.',
        recommendedDuration: '90-120 seconds',
        modelResponse: 'In the first picture, I can see dozens of tired commuters descending a steep escalator in a bustling underground station during peak morning rush hour. The atmosphere appears hurried, tense, and claustrophobic. Many people are staring down at their mobile phones, completely isolated from one another. On the other hand, the second photograph illustrates a completely different way of living. Here, two young people are cycling leisurely along a wide provincial street surrounded by lush trees and traditional brick cottages. The environment looks peaceful, healthy, and clean.\n\nWhile megacities undoubtedly provide superior career opportunities and diverse cultural entertainment, living in a small provincial town offers a far healthier work-life balance. Personally, I would rather live in a quiet provincial community where children can play outdoors safely and neighbours actually know your name.',
        pronunciationTips: [
          'Contrast the tone between images: hurried for image A, calm and relaxed for image B.',
          'Use "would rather" correctly with bare infinitive: "I would rather live...".',
          'Pronounce "claustrophobic" /ˌklɒstrəˈfəʊbɪk/ and "leisurely" /ˈleʒəli/.'
        ],
        keyVocabulary: ['Bustling underground station', 'Hurried and claustrophobic', 'On the other hand', 'Leisurely', 'Work-life balance', 'I would rather live']
      },
      {
        id: 'l4-s3',
        title: 'Personal Monologue: Professional Career Milestones, Life Changes and Regrets',
        situation: 'Part 1 Personal Monologue: The examiners ask you to speak about your military and academic journey, how you adapted to past postings, and what you would have done differently.',
        role: 'Candidate delivering a structured monologue',
        prompt: 'Speak for up to two minutes describing your background, decisive milestones in your career, difficulties you overcame, and reflect on whether you have any professional regrets using past modals (should have / would have).',
        recommendedDuration: '90-120 seconds',
        modelResponse: 'Good morning. Looking back on my military career over the past twelve years, I have experienced both demanding challenges and rewarding milestones. After graduating from the military academy, I was posted to an artillery unit in the north of Argentina. Initially, I found the climate and geographical isolation quite daunting. We used to conduct prolonged field maneuvers under extreme heat, which forced me to develop physical resilience and leadership under stress.\n\nIf I had known earlier how crucial foreign languages would become in modern multinational missions, I would have dedicated much more time to studying English during my cadet years. In fact, I probably should have enrolled in intensive translation courses earlier in my career. Nevertheless, adapting to frequent garrison transfers taught me how to embrace change with enthusiasm. Today, I feel well prepared to represent my country in multinational operations overseas.',
        pronunciationTips: [
          'Emphasize the conditional past: "If I had known... I would have dedicated...".',
          'Use natural pauses when reflecting: "Looking back...", "Nevertheless...", "In fact...".',
          'Pronounce "artillery" /ɑːˈtɪləri/ and "resilience" /rɪˈzɪliəns/.'
        ],
        keyVocabulary: ['Looking back on my career', 'Rewarding milestones', 'Initially, I found...', 'If I had known earlier', 'I should have enrolled', 'Physical resilience']
      },
      {
        id: 'l4-s4',
        title: 'Interactive Telephone Role-Play: Reporting Equipment Failure and Logistics Coordination',
        situation: 'You need to call the Regional Maintenance Depot to report that your unit\'s water purification system broke down in the field, and request immediate delivery of replacement filters.',
        role: 'Field Logistics Officer interacting with Depot Dispatcher',
        prompt: 'Use telephoning phrasal verbs (call up, put through, hold on, cut off, get through), explain the malfunction, evaluate urgency, and confirm delivery schedule.',
        recommendedDuration: '60-90 seconds',
        modelResponse: 'Regional Maintenance Depot, Corporal Taylor speaking. How may I direct your call? — Good morning, Corporal. This is Captain Rossi from Forward Camp Falcon. I am calling up to report an urgent breakdown with our reverse-osmosis water purification system. Could you put me through to the chief logistics dispatcher? — Please hold on, Captain, the line is ringing... Dispatcher Sergeant Miller on the line, Sir. Go ahead. — Sergeant, our primary filter membrane ruptured twenty minutes ago. We have run out of spare filter cartridges and our camp only has forty-eight hours of potable water remaining. Could you check whether an emergency resupply convoy can deliver six replacement filters by tomorrow morning? — Yes, Captain Rossi. I will look into the supply depot inventory immediately. If we dispatch a light utility truck at dawn, it should arrive by ten-hundred hours. — Excellent. Thank you for your swift assistance.',
        pronunciationTips: [
          'Adopt an urgent yet professional military radio-telephone cadence.',
          'Speak clearly into the microphone as if communicating over a field line.',
          'Pronounce "purification" /ˌpjʊərɪfɪˈkeɪʃən/ and "inventory" /ˈɪnvəntri/.'
        ],
        keyVocabulary: ['Calling up to report', 'Put me through to', 'Hold on for a moment', 'Ruptured membrane', 'Potable water', 'Look into the inventory']
      },
      {
        id: 'l4-s5',
        title: 'Intercultural Discussion: Rights, Environmental Responsibilities, and Immigration',
        situation: 'Part 3 Collaborative Discussion: You and your partner are asked to explore how attitudes toward environmental preservation, civic duties, and immigration differ or align between the UK and Argentina.',
        role: 'Discussion Partner',
        prompt: 'Exchange views, formulate polite questions, express agreement and diplomatic disagreement, and summarize shared civic values.',
        recommendedDuration: '90-120 seconds',
        modelResponse: 'It is fascinating to observe how both British and Argentine citizens approach civic duties and environmental ecology. In the United Kingdom, recycling regulations are very strict, and people are heavily fined if they do not sort their household waste correctly. In Argentina, environmental awareness is growing rapidly, particularly among young generations who are advocating for renewable energy and cleaner rivers. Do you agree that environmental protection should be treated as a constitutional duty? — Absolutely. Furthermore, when we examine immigration, both countries have rich histories of welcoming diverse cultures. While Great Britain experienced significant migration from Commonwealth nations, Argentina welcomed millions of European immigrants who integrated into our national identity. Don\'t you think that both societies have been profoundly enriched by this multicultural heritage? — Indeed, diversity strengthens society and provides armed forces with diverse cultural and linguistic skills.',
        pronunciationTips: [
          'Use engaging conversational questions: "Do you agree that...?", "Don\'t you think that...?".',
          'Sound open and diplomatic: "It is fascinating to observe...", "Indeed, diversity strengthens...".'
        ],
        keyVocabulary: ['It is fascinating to observe', 'Civic duties', 'Environmental awareness', 'Multicultural heritage', 'Profoundly enriched', 'Intercultural dialogue']
      }
    ]
  },

  // =========================================================================
  // NIVEL 5 (B1+)
  // =========================================================================
  {
    levelNumber: 5,
    name: 'Nivel 5 – Intermedio Superior (B1+ • STANAG 6001 Nivel 2+)',
    cefr: 'B1+',
    clockHours: 120,
    academicHours: 160,
    accumulatedClockHours: 600,
    accumulatedAcademicHours: 800,
    generalObjective: 'Que el usuario sea capaz de desenvolverse lingüísticamente con un grado aceptable de eficiencia en una variedad de situaciones vinculadas con la vida personal, social y profesional militar, demostrando un manejo apropiado, preciso, variado y coherente.',
    thematicCompetencies: [
      'CALIDAD DE VIDA: La gestión del tiempo (trabajo, vida familiar, hobbies y ocio saludable).',
      'LAS RELACIONES INTERPERSONALES: El matrimonio, la familia y los problemas generacionales.',
      'BIOGRAFÍAS Y AUTOBIOGRAFÍAS: Trayectorias de vida, memorias, hitos formativos y carreras profesionales.',
      'MUNDO ACTUAL: El amor y los ideales en la sociedad contemporánea.',
      'LA PERSONA IDEAL: Los líderes y los tipos de liderazgo (autocrático, transformacional, sirviente). Luchas sociales históricas y actuales.',
      'SOCIEDAD Y CIUDADANÍA: Construcción de la noción de ciudadanía, derechos civiles y deberes cívicos.',
      'LAS ASOCIACIONES Y LA CIUDADANÍA: Organizaciones no gubernamentales (ONGs), voluntariado, entidades vecinales y bien común.',
      'JUVENTUD Y CIUDADANÍA: Nuevas generaciones, participación cívica, voluntariado y compromiso social.',
      'MISTERIOS Y MITOS: Enigmas de la historia, arqueología, ciencia y leyendas culturales.',
      'PODER Y DINERO: Riqueza, economía, finanzas públicas, presupuestos de defensa y toma de decisiones.',
      'LA INSEGURIDAD Y LA PROBLEMÁTICA SOCIAL INTERNACIONAL: Conflictos asimétricos, crimen transnacional y marginación.',
      'COOPERACIÓN INTERNACIONAL: Alianzas estratégicas bilaterales y multilaterales, coaliciones y diplomacia militar.',
      'CELEBRACIONES Y FESTIVALES EN EL MUNDO: Tradiciones culturales, rituales comunitarios y festividades patrias.',
      'HECHOS HISTÓRICOS TRASCENDENTES: Grandes acontecimientos de la historia mundial y su repercusión geopolítica.',
      'LA LUCHA CONTRA EL NARCOTRÁFICO: Redes ilícitas transnacionales, interdicción fluvial/marítima y control fronterizo.',
      'CULTURAS, RELIGIONES E IDENTIDADES: Diversidad religiosa, costumbres ancestrales y pluralismo sociocultural.',
      'LA CIENCIA EN LA SOCIEDAD CONTEMPORÁNEA: Grandes inventos, descubrimientos médicos y científicos revolucionarios.',
      'LOGROS INESPERADOS EN LA VIDA Y PROBLEMAS INESPERADOS: Superación de contingencias, resiliencia y adaptabilidad.',
      'LA MENTE Y SUS CARACTERÍSTICAS: Tipos de inteligencia (analítica, emocional, espacial), neurociencia y agilidad mental.',
      'SALUD FÍSICA Y MENTAL: Bienestar integral, preparación psicológica y mitigación del estrés operacional (PTSD).',
      'ROL DE LAS FUERZAS ARMADAS EN EL TERCER MILENIO: Misiones militares de paz (UN Peacekeeping) y seguridad global.'
    ],
    culturalReflection: [
      'DIVERSIDAD CULTURAL DEL MUNDO ANGLOPARLANTE: Variedades regionales, legados compartidos e influencias globales (Reino Unido, EE.UU., Canadá, Australia, Nueva Zelanda, Commonwealth).',
      'PRIMEROS CONTACTOS CON LA LITERATURA INGLESA Y AMERICANA: Autores y obras completas originales (Shakespeare, Orwell, Hemingway, Virginia Woolf, Edgar Allan Poe) y recursos literarios (metáforas, alusiones, ritmo).',
      'ROL DE LAS FUERZAS ARMADAS EN EL TERCER MILENIO: Misiones de paz bajo mandato de la ONU, diplomacia de defensa y preservación del orden humanitario internacional.',
      'COMPARACIÓN INTERCULTURAL: Tradiciones cívicas, conmemoraciones patrias, festivales comunitarios y participación ciudadana entre el Reino Unido, países de habla inglesa y la República Argentina.'
    ],
    speechActs: [
      'Expresar ideas de forma fluida, estructurada y coherente.',
      'Enumerar informaciones y datos operativos con exactitud.',
      'Explicar cómo funciona un aparato (por ejemplo: una computadora, terminal satelital C4ISR o estación de radar).',
      'Dar consejos útiles y formular recomendaciones precisas.',
      'Describir capacidades operativas, técnicas y humanas.',
      'Definir conceptos doctrinarios, científicos y normativos.',
      'Expresar relaciones de causa, efecto, condición y finalidad.',
      'Dar precisiones en variados tipos de circunstancias y contingencias.',
      'Expresarse acerca de hechos futuros y proyecciones estratégicas.',
      'Expresar hipótesis referidas al futuro en el pasado.',
      'Hablar de situaciones hipotéticas en el pasado (unreal past y condicionales mixtos).',
      'Emplear expresiones idiomáticas y colocaciones adecuadas al registro.',
      'Referir lo dicho por otros (Reported Speech y Reporting Verbs variados).',
      'Explicar ideas complejas mediante la paráfrasis.',
      'Expresar diferencias de opinión y sentimientos (certeza, duda, esperanza, temor, deseo).',
      'Acusar y defenderse fundamentando en hechos, pruebas y reglas de enfrentamiento (ROE).',
      'Expresar valorización, reconocimiento y elogio profesional.',
      'Expresar queja o disconformidad de manera formal o diplomática.',
      'Enfatizar lo que se dice mediante intensificadores y auxiliares enfáticos (do, did).',
      'Reformular para explicar, generalizar o sintetizar discursos y debates.',
      'Plantear problemas, dar ejemplos concretos e ilustrar situaciones.',
      'Atenuar críticas y opiniones en contextos diplomáticos o jerárquicos.',
      'Expresar necesidades imperiosas y aspiraciones futuras.',
      'Precisar la causa, el momento y la manera de una acción.',
      'Indicar simultaneidad, anterioridad y posterioridad de una secuencia de hechos.',
      'Comenzar, mantener y finalizar conversaciones con naturalidad.',
      'Expresar condolencia y sentimientos de pesar o solidaridad.',
      'Contar una historia o incidente desde distintos puntos de vista.',
      'Expresar conclusiones y discutir soluciones consensuadas.'
    ],
    grammaticalContents: [
      'Tiempos verbales futuros avanzados: Future Continuous (will be deploying), Future Perfect (will have completed), Future Perfect Continuous (will have been operating).',
      'Perfect Modals: can\'t have, can/may/might have, must have, should have / ought to have (deducción lógica y reproche en el pasado).',
      'Reported Speech completo: declaraciones, órdenes, preguntas y pedidos (distinción say vs tell).',
      'Reporting Verbs avanzados: urge, advise, warn, remind, insist, suggest, claim, deny, admit, recommend, state.',
      'Voz Pasiva: con verbos modales y en todos los tiempos verbales (presente, pasado, perfecto y futuro).',
      'Oraciones condicionales: Tipos 0, 1, 2, 3 y Condicionales Mixtos (Mixed Conditionals: condición en el pasado con efecto en el presente).',
      'Estructuras con Wish: Wish + Simple Past (deseo presente), Wish + Past Perfect (arrepentimiento pasado), Wish + Would/Could (queja o aspiración).',
      'Estructuras de hábito: Be / Get used to + gerund/noun vs Used to + infinitive / Would para hábitos pasados.',
      'Gerundios e Infinitivos con cambio de significado: remember, forget, regret, try, stop, mean, allow, permit.',
      'Construcciones con Suggest: Suggest + that (he) should... / Suggest + gerund / Suggest + noun (her working).',
      'Uso causativo de Have / Get: Have/Get something done en todos los tiempos (have the vehicles serviced, get the radios encrypted).',
      'Question tags y preguntas retóricas de confirmación y cortesía.',
      'Proposiciones relativas no especificativas (Non-defining relative clauses) con puntuación de comas.',
      'Uso de artículos: definido (the), indefinido (a, an) y artículo cero (zero article).',
      'Verbos y pronombres reflexivos (myself, himself, themselves, etc.).',
      'Recursos de énfasis: intensificadores, uso de auxiliares enfáticos (do, did), estructuras con so y such.',
      'Conectores lógicos: Adición (furthermore, moreover); Condición (as long as, provided that); Causa (because of, due to); Contraste (nevertheless, despite, despite the fact that, in spite of the fact that); Fuente (with reference to); Conclusión (in conclusion); Tiempo (by the time).',
      'Formación de palabras (Word formation): prefijos (anti-, counter-, inter-, mis-, over-, post-, un-) y sufijos (-tion, -ment, -ness, -ity, -able, -ive, -ly).'
    ],
    phrasalVerbs: [
      'be away (leave)', 'be back (return)', 'be off (leave)', 'be over (end)', 'come back (return)',
      'come out (publish / emerge)', 'come up (happen in the course of time)', 'get across (convey, be understood)',
      'get away (escape)', 'get back from (return)', 'give back (return something)', 'give in (surrender / yield)',
      'give out (distribute / stop working)', 'go ahead (continue / proceed)', 'go by (pass time)', 'go on (continue)',
      'go off (explode / ring)', 'go over (examine thoroughly)', 'go up (increase / rise)', 'keep on (continue, insist)',
      'keep out (stay away or not enter)', 'keep up with (remain level / keep pace)', 'look back (remember the past)',
      'look down on (despise)', 'look up to (admire / respect)', 'make for (go towards)', 'make out (distinguish / discern)',
      'make up (invent / reconcile / apply cosmetics)', 'make up for (compensate for)', 'put down (suppress / write down)',
      'put off (postpone / discourage)', 'put out (extinguish)', 'put through (connect by telephone)', 'put up with (tolerate / bear)',
      'turn in (submit an assignment / go to bed)', 'turn down (refuse / lower volume)', 'turn into (change / transform into something different)'
    ],
    vocabularyTopics: [
      'Lifestyles and time management (work-life balance, family life, hobbies, stress management)',
      'Human relationships (marriage, modern family structures, intergenerational dynamics)',
      'People and leadership styles (servant leadership, transformational commanders, social struggles)',
      'Society, citizenship and associations (civic rights, community organisations, youth engagement)',
      'Myths and mysteries (historical riddles, legends, unproven scientific phenomena)',
      'Power and money (wealth, governance, public finance, defence procurement budgets)',
      'Social problems (international insecurity, marginalisation, transnational organised crime)',
      'Celebrations around the world (cultural festivals, heritage commemorations, national holidays)',
      'Culture, identity and religion (customs, values, spiritual diversity, multicultural coexistence)',
      'Science and health (scientific development, medical breakthroughs, cognitive neuroscience and the human mind)',
      'Peacekeeping missions and the armed forces today (UN Chapter VII mandates, Rules of Engagement, DDR)',
      'Collocations and high-level idiomatic expressions'
    ],
    militarySpecificTopics: [
      'UN Peacekeeping Operations & Third Millennium Armed Forces Doctrine (Chapter VII mandates, buffer zones, DDR)',
      'Counter-Narcotics Maritime Interdiction & Joint Border Surveillance Operations',
      'C4ISR, Tactical Communications Encryption & Cybersecurity Operations',
      'Rules of Engagement (ROE), Proportionality & International Humanitarian Law (IHL)',
      'Psychological Readiness, Cognitive Resilience & Combat Stress Management (PTSD)',
      'Civil-Military Cooperation (CIMIC) & Multilateral Humanitarian Relief Convoys'
    ],
    writtenComprehensionSkills: [
      'Reconocer diferentes tipos de textos: artículos de diarios y revistas de opinión, actualidad política, económica, educativa, cultural, nacional e internacional; novelas, cuentos cortos, poesías y ensayos.',
      'Aplicar estrategias de lecto-comprensión integradas: tema principal, búsqueda de información específica, identificación de referentes, inferencia de significados contextuales y síntesis.',
      'Identificar relaciones lógicas: causa, consecuencia, finalidad, condición, secuencias temporales, contrastes, adición, ejemplificación, propósito, opinión y fuente de información.',
      'Identificar recursos literarios (metáforas, ironía, alusiones históricas, ritmo y tono discursivo).'
    ],
    writtenExpressionSkills: [
      'Redactar narraciones de experiencias y conocimientos acerca de vivencias, hábitos, hechos pasados, planes futuros, expectativas, biografías y relatos cortos.',
      'Elaborar ensayos argumentativos equilibrados: presentación de argumentos a favor y en contra con conectores de contraste y conclusiones ponderadas.',
      'Redactar mensajes formales e informales: correos electrónicos oficiales, notas de coordinación, faxes, tarjetas de felicitación y condolencias.',
      'Confeccionar informes y SITREPs técnicos con terminología precisa, datos ordenados y recomendaciones fundadas.'
    ],
    oralComprehensionSkills: [
      'Reconocer los distintos registros de la lengua (formal diplomático, operacional militar, coloquial).',
      'Reconocer actos de habla directos e indirectos a través de foco, palabras clave, contraste y énfasis.',
      'Identificar el tema general, puntos clave e informaciones específicas del discurso oral.',
      'Distinguir la función comunicativa e inferir actitudes, intenciones y puntos de vista del enunciador.',
      'Comprender palabras y frases en contextos no familiares y distinguir expresiones idiomáticas de distintos registros.',
      'Tomar notas estructuradas y precisas a partir de audios, conferencias y órdenes operativas.'
    ],
    oralExpressionSkills: [
      'Expresarse oralmente con fluidez, cohesión y corrección en situaciones formales e informales.',
      'Realizar exposiciones orales claras, ordenadas y fundamentadas con ejemplos concretos y opiniones debidamente argumentadas.',
      'Interactuar en debates, mesas redondas y conferencias de prensa con discurso preciso, diplomático y coherente.',
      'Atenuar críticas, defender posturas éticas y operacionales, y sintetizar conclusiones compartidas.'
    ],
    listening: [
      {
        id: 'l5-act1',
        title: 'Operational Planning Briefing: Combined Counter-Narcotics and Coastal Interdiction',
        context: 'Conferencia de planeamiento conjunto de estado mayor contra el narcotráfico marítimo',
        speakerRole: 'Colonel James Thornton (British Army Staff Officer) and Commander Diego Morales (Argentine Naval Liaison)',
        audioProwords: false,
        audioText: 'Good morning, delegates. By the end of this month, our combined task force will have been operating in the littoral border sector for twelve consecutive weeks. Intelligence confirms that transnational drug cartels have been modifying their logistical corridors, taking advantage of dense mangrove estuaries. Despite our continuous aerial radar sweeps, fast semi-submersible vessels have managed to exploit blind river channels during inclement weather. Therefore, we urge all contingent commanders to integrate satellite radar feeds directly into our forward patrol craft. Furthermore, by next Tuesday, the naval technical support unit will have upgraded the thermal night-vision optics across all interceptor boats. I must insist that strict Rules of Engagement be observed at all times: lethal force may only be authorised if hostile fire is positively confirmed. Commander Morales, would you elaborate on the joint boarding protocol? — Certainly, Colonel. Provided that sea conditions remain manageable, our naval special teams will be conducting nocturnal boardings under international maritime law.',
        questions: [
          {
            id: 'l5-q1',
            question: 'How long will the combined task force have been operating in the littoral sector by the end of the month?',
            options: ['Four weeks', 'Eight weeks', 'Twelve consecutive weeks', 'Six months'],
            correctIndex: 2,
            explanation: 'Colonel Thornton states: "By the end of this month, our combined task force will have been operating in the littoral border sector for twelve consecutive weeks."'
          },
          {
            id: 'l5-q2',
            question: 'How are illicit drug cartels attempting to avoid radar detection?',
            options: [
              'By flying low-altitude supersonic civilian jets',
              'By using semi-submersible vessels in blind mangrove river channels during bad weather',
              'By hiding shipments in underground desert tunnels',
              'By jamming commercial telecommunications networks'
            ],
            correctIndex: 1,
            explanation: 'The Colonel explains that cartels take advantage of dense mangrove estuaries and use semi-submersible vessels in blind river channels during inclement weather.'
          },
          {
            id: 'l5-q3',
            question: 'What condition does Colonel Thornton emphasize regarding the Rules of Engagement and lethal force?',
            options: [
              'Lethal force is strictly prohibited under any scenario',
              'Lethal force may only be authorised if hostile fire is positively confirmed',
              'Troops are encouraged to fire warning shots at all unidentified boats',
              'Boarding teams must surrender their weapons prior to inspection'
            ],
            correctIndex: 1,
            explanation: 'Thornton insists: "lethal force may only be authorised if hostile fire is positively confirmed."'
          }
        ]
      },
      {
        id: 'l5-act2',
        title: 'Staff Officer Welfare & Quality of Life: Time Management and Command Balance',
        context: 'Diálogo de orientación entre dos oficiales sobre el balance entre servicio exigente, vida familiar y hobbies',
        speakerRole: 'Colonel David Campbell (Senior Mentor) and Major Sarah Jenkins (Operations Officer)',
        audioProwords: false,
        audioText: 'Sarah, come in and take a seat. I\'ve noticed you have been working past twenty-one hundred hours almost every evening this month. How are you coping with your work-life balance? — Honestly, Colonel, managing my time between operational planning and family commitments has become extraordinarily taxing. My husband and children rarely see me during weekdays, and I haven\'t touched my violin or gone running in two months. I sometimes wish I had chosen a less demanding staff billet. — I completely understand your dedication, Sarah, but chronic sleep deprivation will eventually compromise your cognitive acuity. In the armed forces, we used to believe that working round the clock proved leadership, but contemporary psychology shows that resilience depends on rest. You must get used to delegating administrative tasks to your junior staff. When was the last time you took a weekend off with your family? — It was three months ago, Sir. — Right. By next Friday, you will have completed the brigade mobilization schedule. As soon as that is turned in, I am ordering you to take seventy-two hours of compensatory leave to recharge.',
        questions: [
          {
            id: 'l5-q4',
            question: 'What difficulty does Major Jenkins express regarding her current lifestyle and time management?',
            options: [
              'She is bored because she has insufficient duties to complete',
              'She struggles to balance demanding operational schedules with family life and personal hobbies',
              'She wants to resign immediately from the armed forces',
              'Her superiors have reprimanded her for leaving headquarters too early'
            ],
            correctIndex: 1,
            explanation: 'Major Jenkins explains that balancing operational planning with family commitments has become taxing, preventing her from seeing her family and practicing hobbies.'
          },
          {
            id: 'l5-q5',
            question: 'What grammatical structure does Major Jenkins use to express an unreal regret about her posting?',
            options: [
              '"I hope I will choose..."',
              '"I wish I had chosen a less demanding staff billet"',
              '"If I chose a billet, I would be happy"',
              '"I used to choose easy postings"'
            ],
            correctIndex: 1,
            explanation: '"I wish I had chosen..." uses Wish + Past Perfect to express a past regret about an unfulfilled desire.'
          },
          {
            id: 'l5-q6',
            question: 'What advice and directive does Colonel Campbell give Major Jenkins?',
            options: [
              'To work through the weekend to finish early',
              'To get used to delegating administrative duties and take seventy-two hours of compensatory leave',
              'To transfer permanently to an administrative civil branch',
              'To stop practicing personal hobbies entirely'
            ],
            correctIndex: 1,
            explanation: 'Colonel Campbell urges her to get used to delegating tasks and orders her to take 72 hours of leave once the mobilization schedule is submitted.'
          }
        ]
      },
      {
        id: 'l5-act3',
        title: 'Explaining Equipment Operation: Tactical Secure Military Communications Terminal (C4ISR)',
        context: 'Sesión de instrucción técnica donde un oficial de comunicaciones explica cómo funciona un equipo informático cifrado',
        speakerRole: 'Captain Edward Miller (Signals Technology Instructor)',
        audioProwords: false,
        audioText: 'Good afternoon, officers. Today I am going to explain how our new tactical satellite encryption computer functions in the field. This ruggedized terminal enables encrypted voice, video, and biometric data transfer in contested electromagnetic environments. To initialize the device, you must first verify that the dual lithium-polymer battery cells have been inserted properly. Next, connect the ultra-high-frequency dish antenna to the golden coaxial port located on the left chassis. Once the hardware is assembled, press and hold the master power switch for three seconds until the illuminated cryptographic LED turns solid green. The internal microprocessor will automatically execute a diagnostic self-test, checking all memory registers. After the self-test has concluded, insert your digital cryptographic key card into the sealed slot below the keyboard. If the key is valid, the secure operating system will boot up within twenty seconds. If the terminal were ever captured by hostile elements, an emergency zeroise button would erase all sensitive cryptographic codes instantaneously.',
        questions: [
          {
            id: 'l5-q7',
            question: 'What is the primary operational function of the tactical computer explained by Captain Miller?',
            options: [
              'To broadcast civilian commercial television programs',
              'To transmit encrypted voice, video, and biometric data in contested electronic environments',
              'To control air conditioning units in base barracks',
              'To calculate meal rations for field messes'
            ],
            correctIndex: 1,
            explanation: 'Captain Miller explains that the terminal enables "encrypted voice, video, and biometric data transfer in contested electromagnetic environments."'
          },
          {
            id: 'l5-q8',
            question: 'What step must the operator take immediately after the hardware is assembled and the power switch is held?',
            options: [
              'Format the hard drive immediately',
              'Wait for the cryptographic LED to turn green and let the microprocessor run its self-test',
              'Submerge the computer in water to test water-resistance',
              'Call brigade headquarters on a civilian smartphone'
            ],
            correctIndex: 1,
            explanation: 'The operator waits until the cryptographic LED turns green and the internal microprocessor executes its diagnostic self-test.'
          },
          {
            id: 'l5-q9',
            question: 'What emergency mechanism is installed in case the terminal is captured by hostile elements?',
            options: [
              'A small explosive charge that detonates automatically',
              'An emergency zeroise button that erases all cryptographic codes instantaneously',
              'A siren that sounds for twelve hours continuously',
              'A parachute that deploys into the air'
            ],
            correctIndex: 1,
            explanation: 'Miller notes: "an emergency zeroise button would erase all sensitive cryptographic codes instantaneously."'
          }
        ]
      },
      {
        id: 'l5-act4',
        title: 'Debate on Leadership, Power, and Social Movements: The Legacy of Transformational Leaders',
        context: 'Mesa redonda académica y militar sobre liderazgo transformacional, poder y movimientos cívicos',
        speakerRole: 'Professor Elena Ross (Historian) and Major Julian Vance (Military College Lecturer)',
        audioProwords: false,
        audioText: 'Welcome to our seminar on leadership and civil struggles in the modern era. Major Vance, how do you define the distinction between coercive power and genuine transformational leadership? — Thank you, Professor Ross. Throughout military and political history, authoritarian leaders have relied on fear, hierarchical punishment, and financial coercion to enforce obedience. However, history proves that power built purely on coercion is inherently fragile. In contrast, transformational leaders—such as Nelson Mandela or General George Marshall, who dedicated themselves to public welfare—inspired voluntary commitment through moral integrity and selfless service. They did not look down on their followers; rather, they empowered them to become active citizens. — Indeed, Major. Moreover, when we examine civil rights movements in the twentieth century, we observe that the most profound social achievements came about because ordinary citizens banded together in civic associations. Power ceased to be the monopoly of kings and wealthy elites; instead, citizenship was redefined as an active moral responsibility.',
        questions: [
          {
            id: 'l5-q10',
            question: 'Why is authoritarian power described as inherently fragile by Major Vance?',
            options: [
              'Because dictators never have enough money to buy weapons',
              'Because it relies on fear, punishment, and coercion rather than voluntary commitment and moral integrity',
              'Because modern soldiers are prohibited from obeying senior officers',
              'Because international law bans political parties'
            ],
            correctIndex: 1,
            explanation: 'Major Vance argues that power based solely on fear and punishment is fragile compared to transformational leaders who inspire commitment through integrity.'
          },
          {
            id: 'l5-q11',
            question: 'What phrasal verb does Major Vance use to explain that true leaders do not despise or underestimate others?',
            options: ['"look back on"', '"look down on"', '"make up for"', '"put up with"'],
            correctIndex: 1,
            explanation: '"look down on" means to despise or regard others as inferior: "They did not look down on their followers; rather, they empowered them".'
          },
          {
            id: 'l5-q12',
            question: 'According to Professor Ross, how was citizenship redefined during twentieth-century civil movements?',
            options: [
              'As a privilege reserved strictly for military commanders',
              'As an active moral responsibility forged through civic associations and community solidarity',
              'As an obligation to pay higher income taxes',
              'As an agreement to avoid public demonstrations'
            ],
            correctIndex: 1,
            explanation: 'Professor Ross states that through civic associations, "citizenship was redefined as an active moral responsibility."'
          }
        ]
      },
      {
        id: 'l5-act5',
        title: 'Medical Symposium: Cognitive Resilience, Psychological Health (PTSD) and Multiple Intelligences',
        context: 'Conferencia médica sobre neurociencia, salud mental y preparación psicológica de tropas en misiones de paz',
        speakerRole: 'Surgeon Commander Alistair Finch (Military Neuropsychiatrist)',
        audioProwords: false,
        audioText: 'Ladies and gentlemen, contemporary medical science has revolutionized our understanding of the human brain under acute stress. For decades, military recruitment focused predominantly on physical endurance and raw logical intelligence. Today, we recognize Howard Gardner\'s theory of multiple intelligences—specifically emotional, interpersonal, and spatial faculties—as crucial determinants of combat leadership. When peacekeepers deploy into asymmetric conflict zones, their nervous systems are subjected to unpredictable trauma. If early psychological intervention had not been introduced following prolonged tours, post-traumatic stress disorder rates would have escalated uncontrollably. Neuroplasticity proves that the human brain can rewire itself and recover, provided that soldiers receive prompt therapeutic decompression. We must stop regarding mental health care as a sign of weakness; mental fortitude must be nurtured just as rigorously as physical conditioning.',
        questions: [
          {
            id: 'l5-q13',
            question: 'What theory does Surgeon Commander Finch cite regarding human cognitive capabilities?',
            options: [
              'The theory of universal gravitational pull',
              'Howard Gardner\'s theory of multiple intelligences, including emotional and interpersonal faculties',
              'The theory of economic scarcity in medical clinics',
              'The concept of unconditional physical superiority'
            ],
            correctIndex: 1,
            explanation: 'Commander Finch highlights Gardner\'s theory of multiple intelligences as vital for leadership and resilience.'
          },
          {
            id: 'l5-q14',
            question: 'What scientific finding offers hope for soldiers recovering from trauma and PTSD?',
            options: [
              'The discovery of synthetic stimulants',
              'Neuroplasticity, which demonstrates that the brain can rewire and heal with proper decompression',
              'The total elimination of fear through hypnosis',
              'Mandatory isolation in medical wards'
            ],
            correctIndex: 1,
            explanation: 'Finch explains: "Neuroplasticity proves that the human brain can rewire itself and recover, provided that soldiers receive prompt therapeutic decompression."'
          },
          {
            id: 'l5-q15',
            question: 'What change in organizational culture does the speaker advocate regarding mental health?',
            options: [
              'Military forces should dismiss any soldier who experiences anxiety',
              'Soldiers must stop viewing mental health support as weakness and nurture mental fortitude like physical fitness',
              'Mental health evaluations should be classified as secret documents',
              'Doctors should replace commanding officers in field units'
            ],
            correctIndex: 1,
            explanation: 'Finch concludes: "We must stop regarding mental health care as a sign of weakness; mental fortitude must be nurtured just as rigorously as physical conditioning."'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'l5-read1',
        title: 'Leadership and Citizenship in the Third Millennium: The Servant Leader in Combat and Civil Society',
        textType: 'Ensayo Doctrinal y Sociológico de Estado Mayor',
        content: `LEADERSHIP AND CITIZENSHIP IN THE THIRD MILLENNIUM: THE EVOLUTION OF POWER AND CIVIC ENGAGEMENT
By Lieutenant Colonel Marcus Sterling (Directorate of Defence Leadership Studies)

The archetype of the detached, dictatorial commander has become entirely obsolete in contemporary doctrine. Today\'s complex operational environment—characterised by asymmetric threats, rapid technological decentralisation, and instant media scrutiny—demands what military theorists define as the "Servant Leader". First conceptualised by Robert Greenleaf and adapted into modern British military doctrine (as enshrined in the Royal Military Academy Sandhurst ethos "Serve to Lead"), servant leadership posits that an officer\'s primary moral obligation is to equip, support, and protect their subordinates. Rather than relying purely on hierarchical coercion, effective commanders inspire voluntary commitment through exemplary professional competence, moral integrity, and authentic empathy.

In high-stress peacekeeping deployments, personnel who feel valued and understood demonstrate substantially greater psychological resilience and ethical discipline. Furthermore, modern junior officers must be empowered to exercise "Mission Command"—a doctrine of decentralised decision-making where superiors specify intent and desired outcomes while granting subordinate leaders full tactical autonomy regarding execution. Without mutual trust between ranks, Mission Command cannot function effectively.

This doctrinal evolution mirrors broader transformations within democratic citizenship. In the twenty-first century, citizenship is no longer conceived merely as a passive legal status conferred by birthplace; rather, it represents an active moral pact between individuals and their community. Grassroots civic associations, humanitarian non-governmental organisations, and youth volunteer movements have proven that positive social change emerges when citizens accept shared responsibility for vulnerable populations and the environment. By aligning military leadership with the ethos of democratic citizenship, contemporary armed forces reaffirm their role not as isolated instruments of force, but as noble servants of society and guardians of constitutional liberty.`,
        glossary: [
          { term: 'Servant Leader', definition: 'Líder servidor: doctrina de liderazgo donde el deber primordial del jefe es servir, capacitar y proteger a sus subordinados' },
          { term: 'Serve to Lead', definition: 'Lema histórico de la Real Academia Militar de Sandhurst ("Servir para liderar")' },
          { term: 'Mission Command', definition: 'Mando tipo misión: doctrina de mando descentralizado con autonomía táctica para los subordinados' },
          { term: 'Civic pact', definition: 'Pacto cívico de responsabilidad mutua entre ciudadano y sociedad' }
        ],
        questions: [
          {
            id: 'l5-rq1',
            question: 'What core principle defines the concept of the "Servant Leader" according to the text?',
            options: [
              'A commander must delegate all physical fitness training to civilian contractors',
              'An officer\'s primary moral obligation is to equip, support, and protect subordinates rather than rule by coercion',
              'Leaders should avoid making decisions and let soldiers vote on tactical plans',
              'Commanders must prioritize political popularity over mission success'
            ],
            correctIndex: 1,
            explanation: 'The text explains that servant leadership "posits that an officer\'s primary moral obligation is to equip, support, and protect their subordinates" rather than relying on hierarchical coercion.'
          },
          {
            id: 'l5-rq2',
            question: 'What operational philosophy grants subordinate officers autonomy in tactical execution?',
            options: [
              'Authoritarian Direct Command',
              'Mission Command (Mando tipo misión)',
              'Centralized Strategic Oversight',
              'Bureaucratic Management Protocol'
            ],
            correctIndex: 1,
            explanation: 'Mission Command is defined as a doctrine "where superiors specify intent and desired outcomes while granting subordinate leaders full tactical autonomy regarding execution."'
          },
          {
            id: 'l5-rq3',
            question: 'How is modern democratic citizenship conceptualised in the final paragraph?',
            options: [
              'As a passive legal status based exclusively on paying annual taxes',
              'As an active moral pact where citizens take shared responsibility for community welfare through civic associations',
              'As an automatic exemption from any civic or military duty',
              'As an arrangement reserved strictly for elected parliamentarians'
            ],
            correctIndex: 1,
            explanation: 'The author states citizenship "represents an active moral pact... when citizens accept shared responsibility for vulnerable populations and the environment."'
          }
        ]
      },
      {
        id: 'l5-read2',
        title: 'The Architecture of the Human Mind: Neuroplasticity, Multiple Intelligences, and Stress Resilience in Extreme Environments',
        textType: 'Artículo Científico y Médico sobre Neurociencia y Psicología',
        content: `THE RESILIENT BRAIN: NEUROSCIENCE, COGNITIVE DOMAINS, AND POST-TRAUMATIC RECOVERY
By Dr. Aris Thorne, Fellow of the Royal College of Psychiatrists

For generations, psychological discourse categorized human cognitive ability through the narrow prism of intelligence quotient (IQ) tests, which measured verbal logic and mathematical problem-solving. However, landmark research initiated by Harvard cognitive psychologist Howard Gardner disrupted this dogma by introducing the Theory of Multiple Intelligences. Gardner posited that human competence spans at least eight distinct modalities, among which interpersonal intelligence (the capacity to perceive the intentions and desires of others) and intrapersonal intelligence (self-awareness, emotional regulation, and metacognition) prove decisive in leadership, team cohesion, and crisis management.

In extreme operational settings—such as peacekeeping patrols facing sudden urban unrest, counter-narcotics riverine interdictions, or disaster relief—an officer\'s emotional intelligence directly determines survival and ethical compliance. Acute fear triggers massive surges of cortisol and adrenaline, which temporarily suppress the prefrontal cortex—the brain\'s executive centre for rational decision-making—while hyperactivating the amygdala. Without adequate psychological conditioning, leaders are susceptible to tunnel vision, erratic aggression, or total paralysis.

Fortunately, modern neuroimaging has unveiled the phenomenon of neuroplasticity: the central nervous system\'s astonishing capacity to reorganize its neural pathways in response to experience and deliberate training. Cognitive resilience is not an immutable genetic gift; it can be methodically cultivated through stress-inoculation simulations, mindfulness, and cognitive-behavioral restructuring. Furthermore, when soldiers experience acute trauma, structured decompression protocols and peer-support networks stimulate positive neurobiological rewiring, preventing the consolidation of chronic Post-Traumatic Stress Disorder (PTSD). In the words of cognitive neuroscientists, mental fitness must be trained with the same scientific rigour that armed forces dedicate to marksmanship and physical stamina.`,
        glossary: [
          { term: 'Multiple Intelligences', definition: 'Teoría de las inteligencias múltiples formulada por Howard Gardner' },
          { term: 'Neuroplasticity', definition: 'Neuroplasticidad: capacidad del cerebro para generar nuevas conexiones y sanar tras el trauma' },
          { term: 'Stress-inoculation', definition: 'Inoculación del estrés: entrenamiento graduado para tomar decisiones bajo presión extrema' },
          { term: 'Cognitive-behavioral restructuring', definition: 'Reestructuración cognitivo-conductual para regular el pánico y el estrés postraumático' }
        ],
        questions: [
          {
            id: 'l5-rq4',
            question: 'What theory challenged the traditional, narrow focus on IQ tests in understanding human potential?',
            options: [
              'The theory of subconscious repression',
              'Howard Gardner\'s Theory of Multiple Intelligences',
              'The doctrine of genetic determinism',
              'The classical behaviorist stimulus-response model'
            ],
            correctIndex: 1,
            explanation: 'The text highlights that "Howard Gardner disrupted this dogma by introducing the Theory of Multiple Intelligences."'
          },
          {
            id: 'l5-rq5',
            question: 'How does acute physiological stress impact brain function during crises?',
            options: [
              'It permanently increases mathematical calculation speeds',
              'Cortisol and adrenaline suppress the prefrontal cortex while hyperactivating the amygdala',
              'It shuts down all emotional responses permanently',
              'It causes the brain to double its oxygen consumption indefinitely'
            ],
            correctIndex: 1,
            explanation: 'The article explains: "Acute fear triggers massive surges of cortisol and adrenaline, which temporarily suppress the prefrontal cortex... while hyperactivating the amygdala."'
          },
          {
            id: 'l5-rq6',
            question: 'What vital insight does neuroplasticity provide regarding psychological fortitude and PTSD recovery?',
            options: [
              'That brain damage caused by psychological trauma can never be healed',
              'That cognitive resilience can be cultivated and neural pathways rewired through deliberate training and structured decompression',
              'That only soldiers with specific DNA markers can overcome combat stress',
              'That medication is the only conceivable cure for mental fatigue'
            ],
            correctIndex: 1,
            explanation: 'Neuroplasticity proves that the nervous system can reorganize neural pathways through training, mindfulness, and structured decompression.'
          }
        ]
      },
      {
        id: 'l5-read3',
        title: 'International Insecurity and Transnational Crime: Global Cooperation in the Counter-Narcotics War',
        textType: 'Informe de Asuntos Internacionales y Seguridad Estratégica',
        content: `GLOBAL DRUG CORRIDORS: ASYMMETRIC THREATS AND MULTILATERAL ENFORCEMENT
By Ambassador Robert K. Sinclair, UN Office on Drugs and Crime (UNODC)

In the twenty-first century, transnational organised crime has emerged as one of the most insidious threats to international security and democratic stability. Illicit drug cartels no longer operate as fragmented domestic gangs; rather, they function as sophisticated multinational conglomerates with global logistical networks, state-of-the-art encrypted communications, and vast illicit financial treasuries that dwarf the gross domestic products of many developing nations. By laundering hundreds of billions of dollars annually through offshore tax havens and digital cryptocurrencies, these cartels systematically corrupt public institutions, sponsor insurgent militias, and destabilise entire geographical corridors across Latin America, West Africa, and Southeast Asia.

The combat against this transnational scourge cannot be waged by any single nation in isolation. The international community has increasingly recognised that bilateral defense treaties, intelligence-sharing compacts, and combined naval interdiction agreements are indispensable. In South America, joint border surveillance operations combining Argentine, Brazilian, and neighbouring armed forces have disrupted clandestine riverine corridors and illicit airfields. Concurrently, navies from Britain, the United States, and partner nations conduct persistent maritime patrols across Caribbean and Atlantic shipping lanes under United Nations Security Council resolutions.

Nevertheless, operational enforcement represents only one facet of the strategic solution. Military interdiction must be complemented by socio-economic initiatives aimed at crop substitution, education for disenfranchised youth, and anti-money laundering legislation. As long as global consumer demand persists in affluent metropolitan centres, syndicates will adapt their smuggling techniques. Only through sustained international cooperation, rigorous border controls, and comprehensive civic development can the international community hope to dismantle the financial and logistical foundations of transnational narco-terrorism.`,
        glossary: [
          { term: 'Transnational conglomerates', definition: 'Conglomerados criminales con operaciones y redes en múltiples continentes' },
          { term: 'Offshore tax havens', definition: 'Paraísos fiscales extraterritoriales para el blanqueo de capitales' },
          { term: 'Riverine corridors', definition: 'Corredores fluviales de contrabando en zonas selváticas o de difícil acceso' },
          { term: 'Crop substitution', definition: 'Sustitución de cultivos ilícitos por productos agrícolas sostenibles y legales' }
        ],
        questions: [
          {
            id: 'l5-rq7',
            question: 'How do contemporary drug cartels operate according to Ambassador Sinclair?',
            options: [
              'As isolated neighbourhood gangs with primitive tools',
              'As sophisticated multinational conglomerates with global logistics, encryption, and massive financial power',
              'As government-approved state enterprises in Europe',
              'As non-profit charities operating public schools'
            ],
            correctIndex: 1,
            explanation: 'The report states cartels "function as sophisticated multinational conglomerates with global logistical networks, state-of-the-art encrypted communications, and vast illicit financial treasuries."'
          },
          {
            id: 'l5-rq8',
            question: 'Why is international cooperation deemed indispensable in counter-narcotics operations?',
            options: [
              'Because no single country possesses the jurisdiction or resources to combat global smuggling networks in isolation',
              'Because the United Nations requires all soldiers to speak five languages',
              'Because naval vessels cannot operate without foreign civilian captains',
              'Because domestic law enforcement has been abolished worldwide'
            ],
            correctIndex: 0,
            explanation: 'Sinclair explains that "The combat against this transnational scourge cannot be waged by any single nation in isolation" and requires multilateral treaties and joint patrols.'
          },
          {
            id: 'l5-rq9',
            question: 'What complementary measures must accompany military border interdiction to ensure lasting success?',
            options: [
              'Immediate closure of all commercial ports permanently',
              'Socio-economic initiatives such as crop substitution, youth education, and aggressive anti-money laundering laws',
              'A complete ban on digital internet technologies',
              'Total reliance on mercenary private security firms'
            ],
            correctIndex: 1,
            explanation: 'The text highlights that military enforcement must be joined with crop substitution, education for disenfranchised youth, and anti-money laundering measures.'
          }
        ]
      },
      {
        id: 'l5-read4',
        title: 'Echoes of the Canon: First Encounters with Classic Anglophone Literature, Cultural Heritage, and World Celebrations',
        textType: 'Ensayo Crítico Literario y de Reflexión Intercultural',
        content: `VOICES OF THE ANGLOPHONE CANON: TIMELESS THEMES, CULTURAL RITUALS, AND HUMAN NATURE
By Professor Eleanor Vance (Faculty of Comparative Literature and Cultural Studies)

Engaging with original literature in the English language offers military and diplomatic officers far more than linguistic enrichment; it provides an unmatched window into the philosophical foundations, societal ideals, and psychological anxieties that have shaped the English-speaking world. From William Shakespeare's tragic exploration of unchecked ambition in Macbeth to George Orwell's chilling dissection of surveillance, propaganda, and state power in Nineteen Eighty-Four, classic texts confront the universal dilemmas of duty, authority, and individual conscience. Similarly, American master Ernest Hemingway, whose spare prose in For Whom the Bell Tolls immortalised the brutal sacrifices of wartime camaraderie, demonstrated that courage is fundamentally "grace under pressure."

These literary masterworks are intimately interwoven with the diverse cultural identities and traditional celebrations found across the Anglophone sphere. Consider Scotland's historic Hogmanay celebration—where the singing of Robert Burns's "Auld Lang Syne" reaffirms enduring friendship across years of separation—or the solemn pageantry of Britain's Remembrance Sunday, when red poppies commemorate the fallen soldiers of two world wars. Across the Atlantic, the vibrant African-Caribbean heritage celebrated in London's Notting Hill Carnival contrasts dynamically with the civic solemnity of American Independence Day.

When viewed alongside Argentine cultural traditions—such as the communal ritual of mate, the philosophical melancholia of the tango, or the solemn national reverence on the Day of the Veteran and Fallen in the Malvinas War—striking commonalities emerge. In every culture, literature, mythology, and celebratory rituals serve to anchor collective memory, honour sacrifice, and define what it means to be an ethical member of society. For the modern military officer operating in international coalitions, appreciating these literary metaphors and cultural customs is not merely an intellectual pursuit; it is the cornerstone of empathetic intercultural communication and strategic insight.`,
        glossary: [
          { term: 'Unchecked ambition', definition: 'Ambición desmedida sin límites éticos ni morales' },
          { term: 'Grace under pressure', definition: 'Famosa máxima de Hemingway que define el valor como la "serenidad y gracia bajo presión extrema"' },
          { term: 'Hogmanay', definition: 'Tradicional festividad escocesa de Año Nuevo rica en costumbres ancestrales' },
          { term: 'Collective memory', definition: 'Memoria colectiva e identidad histórica compartida de una comunidad nacional' }
        ],
        questions: [
          {
            id: 'l5-rq10',
            question: 'What profound leadership theme does William Shakespeare explore in Macbeth, according to the essay?',
            options: [
              'The technical navigation of wooden sailing ships',
              'The catastrophic consequences of unchecked ambition and moral compromise',
              'The financial advantages of international banking',
              'The agricultural farming methods of medieval Scotland'
            ],
            correctIndex: 1,
            explanation: 'The text references "Shakespeare\'s tragic exploration of unchecked ambition in Macbeth... confront[ing] the universal dilemmas of duty, authority, and individual conscience."'
          },
          {
            id: 'l5-rq11',
            question: 'How did Ernest Hemingway famously define courage in his literary works?',
            options: [
              '"The absence of fear"',
              '"Grace under pressure"',
              '"Blind obedience to commanders"',
              '"Victory at any moral cost"'
            ],
            correctIndex: 1,
            explanation: 'The author notes that Hemingway "demonstrated that courage is fundamentally \'grace under pressure\'."'
          },
          {
            id: 'l5-rq12',
            question: 'What shared human purpose unites British traditions like Remembrance Sunday with Argentine commemorations of fallen veterans?',
            options: [
              'Encouraging commercial shopping holidays',
              'Anchoring collective memory, honouring wartime sacrifice, and reinforcing ethical civic values',
              'Promoting political elections among cadet corps',
              'Restricting foreign literature from educational academies'
            ],
            correctIndex: 1,
            explanation: 'Professor Vance emphasizes that celebratory and commemorative rituals "serve to anchor collective memory, honour sacrifice, and define what it means to be an ethical member of society."'
          }
        ]
      }
    ],
    useOfLanguage: [
      {
        id: 'l5-u1',
        title: 'Future Continuous vs Future Perfect: Tactical Milestones',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'By zero-six-hundred hours tomorrow, the engineering battalion ______ all anti-tank obstacles, and our mechanized column ______ through the mountain pass.',
        options: [
          'will have cleared / will be advancing',
          'will be clearing / will have advanced',
          'has cleared / was advancing',
          'had cleared / would advance'
        ],
        correctAnswer: 'will have cleared / will be advancing',
        explanation: 'We use the Future Perfect ("will have cleared") for an action completed prior to a future deadline ("by zero-six-hundred hours"), and Future Continuous ("will be advancing") for an action in progress at that future time.',
        instructions: 'Select the correct combination of future tenses.'
      },
      {
        id: 'l5-u2',
        title: 'Future Perfect Continuous: Duration in the Future',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'By next Friday, Captain Evans ______ with the UN observer mission for exactly twelve consecutive months.',
        options: [
          'will have been serving',
          'will be serve',
          'is going to be served',
          'would have served'
        ],
        correctAnswer: 'will have been serving',
        explanation: 'The Future Perfect Continuous ("will have been serving") emphasizes the ongoing duration of an action up to a future reference point ("by next Friday").',
        instructions: 'Choose the correct Future Perfect Continuous verb form.'
      },
      {
        id: 'l5-u3',
        title: 'Perfect Modals: Past Deduction and Regret',
        category: 'modals',
        type: 'multiple-choice',
        prompt: 'The smugglers ______ our coastal radar blind spots; otherwise, our patrol boats ______ them before they reached the river delta.',
        options: [
          'must have known / would have intercepted',
          'should have known / might intercept',
          'can\'t have known / will have intercepted',
          'ought to know / would intercept'
        ],
        correctAnswer: 'must have known / would have intercepted',
        explanation: '"must have known" expresses a strong logical deduction about a past reality, and "would have intercepted" completes the unreal past consequence.',
        instructions: 'Select the appropriate perfect modals of deduction and conditional result.'
      },
      {
        id: 'l5-u4',
        title: 'Reported Speech with Advanced Reporting Verbs',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'The brigade staff officer ______ the convoy commander ______ proceeding through the canyon without an advance reconnaissance team.',
        options: [
          'warned / against',
          'advised / from',
          'urged / of',
          'reminded / for'
        ],
        correctAnswer: 'warned / against',
        explanation: 'The reporting verb "warn" follows the pattern: warn + someone + against + gerund ("warned the convoy commander against proceeding").',
        instructions: 'Choose the correct reporting verb construction.'
      },
      {
        id: 'l5-u5',
        title: 'Passive Voice with Modal Verbs',
        category: 'passive_voice',
        type: 'multiple-choice',
        prompt: 'Under international humanitarian law, all captured non-combatants ______ with dignity, and immediate medical care ______ without discrimination.',
        options: [
          'must be treated / must be provided',
          'must treat / must provide',
          'are treating / are providing',
          'have been treating / will provide'
        ],
        correctAnswer: 'must be treated / must be provided',
        explanation: 'Passive with modals: modal (must) + be + past participle (treated / provided).',
        instructions: 'Select the correct passive modal constructions.'
      },
      {
        id: 'l5-u6',
        title: 'Mixed Conditionals: Past Condition with Present Result',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'If our intelligence detachment ______ the cartel\'s encrypted frequency last week, our combined task force ______ in this dangerous ambush today.',
        options: [
          'had intercepted / would not be',
          'intercepted / would not have been',
          'would intercept / had not been',
          'has intercepted / were not'
        ],
        correctAnswer: 'had intercepted / would not be',
        explanation: 'Mixed conditional (Past cause -> Present result): If + Past Perfect ("had intercepted"), would (not) + base verb ("would not be").',
        instructions: 'Choose the correct mixed conditional verb forms.'
      },
      {
        id: 'l5-u7',
        title: 'Wish Structures: Past Regrets and Present Desires',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'Major Jenkins wishes her unit ______ the heavy satellite dish before the storm began, and she wishes the terrain ______ so mountainous.',
        options: [
          'had secured / were not',
          'secured / had not been',
          'would secure / will not be',
          'has secured / is not'
        ],
        correctAnswer: 'had secured / were not',
        explanation: 'Wish + Past Perfect ("had secured") expresses regret about a past action. Wish + Past Subjunctive ("were not") expresses a desire contrary to present reality.',
        instructions: 'Select the correct verb forms after "wish".'
      },
      {
        id: 'l5-u8',
        title: 'Be / Get used to + Gerund vs Used to + Infinitive',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'Although the cadets ______ in comfortable barracks, they quickly ______ under harsh, freezing bivouac conditions.',
        options: [
          'used to sleep / got used to camping',
          'were used to sleep / used to camp',
          'got used to sleep / were used to camp',
          'used to sleeping / got used to camp'
        ],
        correctAnswer: 'used to sleep / got used to camping',
        explanation: '"used to + infinitive" indicates a past habit that no longer exists ("used to sleep"). "get used to + gerund" denotes the process of becoming accustomed to something ("got used to camping").',
        instructions: 'Distinguish between past habitual "used to" and "get used to".'
      },
      {
        id: 'l5-u9',
        title: 'Gerunds vs Infinitives with Meaning Shift: Remember, Regret, Stop',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'The duty officer ______ the emergency radio channel before leaving, and he deeply ______ to brief his replacement on the perimeter breach.',
        options: [
          'remembered to test / regretted failing',
          'remembered testing / regretted to fail',
          'remembers test / regret failing',
          'remembering to test / regrets to fail'
        ],
        correctAnswer: 'remembered to test / regretted failing',
        explanation: '"remember to test" means not forgetting to do an obligation. "regret failing" means feeling sorrow about something already done/failed in the past.',
        instructions: 'Select the verbs followed by infinitive or gerund reflecting the correct meaning.'
      },
      {
        id: 'l5-u10',
        title: 'Subjunctive & Suggest Structure: Suggest that he should...',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'The United Nations medical director suggested that every peacekeeper ______ inoculated against tropical diseases before deployment.',
        options: [
          'should be',
          'must to be',
          'is being',
          'will be'
        ],
        correctAnswer: 'should be',
        explanation: 'After "suggest", English uses either a subjunctive / modal structure ("suggested that every peacekeeper should be...") or a gerund.',
        instructions: 'Choose the correct verb form following "suggested that".'
      },
      {
        id: 'l5-u11',
        title: 'Causative Use of Have / Get Something Done',
        category: 'passive_voice',
        type: 'multiple-choice',
        prompt: 'Before embarking on the joint peacekeeping mission, the contingent commander will ______ by certified military avionics technicians.',
        options: [
          'have all transport helicopters inspected',
          'have inspect all transport helicopters',
          'get all transport helicopters inspect',
          'inspect all transport helicopters have'
        ],
        correctAnswer: 'have all transport helicopters inspected',
        explanation: 'Causative structure: have / get + object (all transport helicopters) + past participle (inspected).',
        instructions: 'Select the correct causative construction.'
      },
      {
        id: 'l5-u12',
        title: 'Question Tags: Confirmation and Nuanced Inquiries',
        category: 'modals',
        type: 'multiple-choice',
        prompt: 'The joint task force commander has already signed the memorandum of understanding with the civilian authorities, ______?',
        options: [
          'hasn\'t he',
          'doesn\'t he',
          'didn\'t he',
          'won\'t he'
        ],
        correctAnswer: 'hasn\'t he',
        explanation: 'For a positive present perfect statement ("has already signed"), the corresponding question tag is negative: "hasn\'t he?".',
        instructions: 'Choose the appropriate question tag.'
      },
      {
        id: 'l5-u13',
        title: 'Non-Defining Relative Clauses: Adding Parenthetical Information',
        category: 'connectors',
        type: 'multiple-choice',
        prompt: 'Brigadier General Kensington, ______ commanded the multinational brigade in Cyprus for three years, delivered the keynote address on civil-military cooperation.',
        options: [
          'who had previously',
          'which had previously',
          'whom had previously',
          'whose had previously'
        ],
        correctAnswer: 'who had previously',
        explanation: 'For persons in non-defining relative clauses acting as subject, we use "who" set off between commas.',
        instructions: 'Select the correct non-defining relative pronoun.'
      },
      {
        id: 'l5-u14',
        title: 'Logical Connectors: Addition, Condition, and Contrast',
        category: 'connectors',
        type: 'multiple-choice',
        prompt: '______ the extreme weather conditions, the search-and-rescue detachment continued their operations; ______, they successfully located the survivors ______ night fell.',
        options: [
          'Despite / furthermore / by the time',
          'Although / nevertheless / provided that',
          'Because of / however / as long as',
          'In spite / moreover / due to'
        ],
        correctAnswer: 'Despite / furthermore / by the time',
        explanation: '"Despite" takes a noun phrase ("the extreme weather conditions"), "furthermore" introduces an additive positive milestone, and "by the time" establishes a time deadline.',
        instructions: 'Choose the correct combination of discourse connectors.'
      },
      {
        id: 'l5-u15',
        title: 'Phrasal Verbs Mastery: Command, Toleration, and Overcoming Obstacles',
        category: 'phrasal_verbs',
        type: 'multiple-choice',
        prompt: 'The staff officer refused to ______ the contractor\'s substandard equipment, so he decided to ______ the bid and demand replacement parts to ______ lost training time.',
        options: [
          'put up with / turn down / make up for',
          'look down on / give out / keep up with',
          'make out / put off / get across',
          'give in / look back / be off'
        ],
        correctAnswer: 'put up with / turn down / make up for',
        explanation: '"put up with" = tolerate; "turn down" = reject/refuse; "make up for" = compensate for.',
        instructions: 'Select the correct trio of phrasal verbs.'
      },
      {
        id: 'l5-u16',
        title: 'Word Formation: Prefixes and Suffixes in Strategic Affairs',
        category: 'word_formation',
        type: 'multiple-choice',
        prompt: 'In asymmetric warfare, strategic ______ (DEPEND) between partner nations is vital to counter ______ (PREDICT) incursions and ensure regional ______ (STABLE).',
        options: [
          'interdependence / unpredictable / stability',
          'codependence / non-predictable / stabilization',
          'dependency / unpredicting / stabilities',
          'interdependency / non-predicted / stableness'
        ],
        correctAnswer: 'interdependence / unpredictable / stability',
        explanation: 'The prefix "inter-" forms "interdependence" (noun); the prefix "un-" and suffix "-able" form "unpredictable" (adjective); suffix "-ity" forms "stability" (noun).',
        instructions: 'Choose the correct set of derived words using prefixes and suffixes.'
      }
    ],
    writing: [
      {
        id: 'l5-w1',
        title: 'Argumentative Essay: Autonomous Drones and AI in Asymmetric Warfare (For and Against)',
        type: 'argumentative_essay',
        scenario: 'Write an argumentative essay (150-180 words) for the Army Higher Education Institute (IESE) academic journal evaluating the arguments for and against deploying autonomous weapon systems and artificial intelligence in modern combat zones. Weigh precision and force protection against ethical and humanitarian concerns.',
        targetWordCount: '150-180 words',
        requiredElements: [
          'Formal title and introductory paragraph defining the technological dilemma',
          'Body paragraph presenting arguments in favour (precision, persistent surveillance, risk reduction for friendly personnel)',
          'Body paragraph presenting arguments against (lack of moral discretion, risk of civilian casualties, violation of IHL / Geneva Conventions)',
          'Use of advanced logical connectors (Furthermore, Conversely, Nevertheless, In conclusion)',
          'Balanced concluding judgement reiterating the imperative of human command oversight'
        ],
        modelAnswer: 'AUTONOMOUS WEAPONS AND ARTIFICIAL INTELLIGENCE IN ASYMMETRIC WARFARE: TACTICAL PROGRESS VERSUS ETHICAL ACCOUNTABILITY\n\nThe integration of autonomous weapons systems and artificial intelligence into contemporary warfare represents one of the most contentious dilemmas confronting military leaders in the third millennium. While proponents underscore significant tactical advantages, grave ethical and legal concerns must be rigorously examined.\n\nOn the one hand, autonomous systems offer unmatched precision, sensory endurance, and reaction speeds. By operating without physical fatigue, autonomous unmanned platforms maintain persistent surveillance over hostile terrain, drastically mitigating the risk of casualties among friendly soldiers. Furthermore, rapid algorithmic analysis can accelerate decision-making during sudden complex ambushes.\n\nConversely, delegating lethal decisions to autonomous algorithms raises profound moral hazards. Machines lack human empathy, intuitive contextual understanding, and moral conscience. Consequently, algorithms cannot reliably distinguish between combatants and non-combatants in chaotic urban environments, potentially breaching the core Geneva Convention principles of distinction and proportionality.\n\nIn conclusion, while artificial intelligence should be leveraged for defensive surveillance and logistics, the ultimate decision to employ lethal force must strictly remain the moral responsibility of human commanders. Human accountability is paramount to preserving legitimacy on the battlefield.',
        usefulPhrases: [
          'Represents one of the most contentious dilemmas confronting...',
          'While proponents underscore significant tactical advantages...',
          'On the one hand... Conversely...',
          'Mitigating the risk of casualties among friendly soldiers',
          'Breaching the core principles of distinction and proportionality',
          'The ultimate decision to employ lethal force must strictly remain...'
        ]
      },
      {
        id: 'l5-w2',
        title: 'Formal Diplomatic Report: Combined Counter-Narcotics Riverine Interdiction',
        type: 'briefing_notes',
        scenario: 'You are the Argentine Operations Officer assigned to a Multinational Joint Task Force. Draft a formal briefing memorandum (140-170 words) addressed to the United Nations Mission Director summarizing a recent combined counter-narcotics interdiction operation along a disputed riverine border.',
        targetWordCount: '140-170 words',
        requiredElements: [
          'Standard military briefing header (To, From, Date, Subject)',
          'Operational summary (chronological sequence of events and interception)',
          'Reference to Rules of Engagement, legal detention of suspects, and seized contraband',
          'Use of Future Perfect or Passive Voice ("vessels were intercepted", "evidence will have been logged")',
          'Formal military diplomatic closure and recommendations'
        ],
        modelAnswer: 'MEMORANDUM FOR: United Nations Mission Director\nFROM: Operations Officer, Multinational Combined Task Force Delta\nDATE: 24 September 2026\nSUBJECT: Operational Debrief: Riverine Counter-Narcotics Interdiction (Operation GUARDIAN)\n\n1. PURPOSE\nThis memorandum provides an executive operational summary of the combined riverine interdiction conducted along Sector Green on 22 September.\n\n2. SEQUENCE OF EVENTS\nAt twenty-two-hundred hours, forward acoustic sensors detected an unlit semi-submersible vessel navigating southbound along the Paraná river delta. In accordance with UN Rules of Engagement, joint naval boarding detachments deployed two high-speed interceptor craft. Despite hazardous fog and heavy river currents, the suspect vessel was intercepted without exchange of gunfire.\n\n3. RESULTS & CONTRABAND\nFour transnational suspects were detained and transferred to federal judicial authorities. A search of the cargo hold revealed 850 kilograms of illicit narcotics and sophisticated satellite communication transceivers. By tomorrow morning, all confiscated evidence will have been catalogued and secured by military police forensic investigators.\n\n4. RECOMMENDATION\nIt is recommended that combined joint river patrols be maintained continuously, provided that additional night-vision optics are delivered as scheduled.\n\nMajor Hernán Castro\nArgentine Army / UN Liaison',
        usefulPhrases: [
          'This memorandum provides an executive operational summary of...',
          'In accordance with United Nations Rules of Engagement...',
          'The suspect vessel was intercepted without exchange of gunfire',
          'By tomorrow morning, all confiscated evidence will have been...',
          'It is recommended that combined patrols be maintained continuously...'
        ]
      },
      {
        id: 'l5-w3',
        title: 'Biographical Reflection / Narrative: A Profile in Courage and Transformational Leadership',
        type: 'formal_letter',
        scenario: 'Write a biographical narrative (140-170 words) for the IESE Military Leadership Bulletin profiling an inspiring historical leader (such as General George Marshall, General José de San Martín, or Nelson Mandela) who demonstrated transformational leadership, moral courage, and dedicated their life to the civic good.',
        targetWordCount: '140-170 words',
        requiredElements: [
          'Captivating title and introduction identifying the chosen leader and their historical context',
          'Detailed description of life challenges, career milestones, and overcoming unexpected crises',
          'Discussion of their leadership style (servant leadership, moral integrity, empathy over coercion)',
          'Use of narrative tenses, Past Perfect, and relative clauses ("who dedicated himself...", "had faced...")',
          'Inspiring concluding synthesis on their enduring legacy for contemporary soldiers and citizens'
        ],
        modelAnswer: 'A PROFILE IN COURAGE: GENERAL GEORGE C. MARSHALL AND THE ARCHITECTURE OF PEACE\n\nFew figures in modern history embody the ideals of servant leadership as profoundly as General George Catlett Marshall. Serving as Chief of Staff of the United States Army during the Second World War and subsequently as Secretary of State, Marshall demonstrated that true authority springs from self-effacing integrity rather than autocratic vanity.\n\nHaving successfully coordinated the largest combined military coalition in human history, Marshall faced a devastated post-war European continent facing starvation and geopolitical collapse. Instead of seeking retribution, he conceived the European Recovery Program—known as the Marshall Plan—which invested billions of dollars to rebuild shattered democratic societies, including former adversaries. Throughout his life, he refused personal royalties and accolades, choosing instead to serve as an unyielding guardian of constitutional duty.\n\nMarshall\'s enduring legacy reminds contemporary officers that military triumphs are ephemeral unless anchored in civic reconstruction, empathy, and international cooperation. His career stands as an immortal testament to the principle that leaders must serve to lead.',
        usefulPhrases: [
          'Few figures in modern history embody the ideals of...',
          'True authority springs from self-effacing integrity rather than...',
          'Having successfully coordinated the largest coalition...',
          'Instead of seeking retribution, he conceived...',
          'His career stands as an immortal testament to the principle that...'
        ]
      },
      {
        id: 'l5-w4',
        title: 'Staff Welfare Advisory Memo: Time Management, Work-Life Balance, and Mental Health',
        type: 'form',
        scenario: 'As a Battalion Executive Officer, draft an official guidance memorandum (130-160 words) to junior officers on managing time effectively, balancing intense duty schedules with family commitments and hobbies, and maintaining mental resilience and cognitive health.',
        targetWordCount: '130-160 words',
        requiredElements: [
          'Clear subject line and professional military tone',
          'Guidance on prioritising tasks and delegating administrative burdens',
          'Concrete advice on preserving family time, physical sports, and personal hobbies',
          'Destigmatisation of mental health, stress management, and psychological support',
          'Encouraging conclusion on holistic readiness'
        ],
        modelAnswer: 'MEMORANDUM FOR: Company Commanders and Subaltern Officers\nFROM: Battalion Executive Officer\nSUBJECT: Operational Welfare: Time Management, Family Balance, and Mental Fortitude\n\n1. While our operational tempo remains demanding, sustained excellence requires commanders to manage their time with foresight and emotional intelligence. Working exhaustively without rest degrades situational awareness and impairs critical decision-making.\n\n2. Officers are expected to prioritize core tactical milestones and get used to delegating administrative tasks to capable non-commissioned officers. Furthermore, commanders must make deliberate time for family relationships, physical conditioning, and personal hobbies. Preserving these anchors outside garrison life is essential to psychological resilience.\n\n3. Never regard combat stress or fatigue as a personal defect. If any soldier under your command experiences anxiety or signs of PTSD, prompt consultation with medical personnel must be facilitated without stigma. Our battalion is only as combat-ready as the physical and mental health of our soldiers.\n\nMajor Tomas Alvarez\nExecutive Officer, 8th Infantry Battalion',
        usefulPhrases: [
          'Sustained excellence requires commanders to manage their time with...',
          'Degrades situational awareness and impairs critical decision-making',
          'Get used to delegating administrative tasks to capable NCOs',
          'Preserving these anchors outside garrison life is essential to...',
          'Never regard combat stress or fatigue as a personal defect'
        ]
      }
    ],
    speaking: [
      {
        id: 'l5-s1',
        title: 'Technical Demonstration: Explaining How a Tactical Device / System Operates',
        situation: 'Part 2 Individual Presentation: You are demonstrating a secure military satellite communications computer terminal to a group of allied liaison officers. Explain its components, startup sequence, encryption features, and emergency protocols.',
        role: 'Communications Technology Officer',
        prompt: 'Deliver a structured 90-120 second technical explanation using sequencing connectors (first, subsequently, once, finally), passive voice, and clear definitions of technical concepts.',
        recommendedDuration: '90-120 seconds',
        modelResponse: 'Good morning, gentlemen. I would like to demonstrate how our field satellite encryption terminal operates. Essentially, this system is a ruggedized communications computer designed to transmit encrypted voice, video, and tactical maps in hostile environments. First, you must ensure that the high-gain dish antenna is connected securely to the coaxial input on the left panel. Next, insert the dual lithium-polymer battery pack into the rear bay. Once the power switch is depressed for three seconds, the internal microprocessor will automatically execute an extensive cryptographic self-test. When the LED indicator turns solid green, you insert the individual cryptographic key card into the sealed reader slot. Within twenty seconds, the secure operating system boots up and establishes a direct uplink with our geostationary military satellite. In the unlikely event that your position is overrun, an emergency zeroise button can be triggered, which instantly purges all cryptographic keys from memory, preventing hostile interception. Thank you for your attention. Are there any technical questions?',
        pronunciationTips: [
          'Maintain a clear, measured pace suitable for technical instruction.',
          'Pronounce "cryptographic" /ˌkrɪptəˈɡræfɪk/ and "microprocessor" /ˌmaɪkrəʊˈprəʊsesər/.',
          'Enunciate sequencing markers distinctly: "First...", "Next...", "Once...", "Subsequently...".'
        ],
        keyVocabulary: ['Ruggedized terminal', 'Coaxial input', 'Cryptographic self-test', 'Geostationary satellite', 'Emergency zeroise button', 'Purges all keys']
      },
      {
        id: 'l5-s2',
        title: 'Tactical Press Briefing: Defending Rules of Engagement and Proportionality',
        situation: 'Part 3 Oral Exam: As a military spokesperson for a multinational peacekeeping task force, you are facing hostile press questioning regarding a recent confrontation where your troops restrained their fire in a crowded civilian area.',
        role: 'Task Force Public Information Officer',
        prompt: 'Defend your unit\'s decisions, explain the principles of distinction, positive identification, and proportionality under the Geneva Conventions, and articulate your arguments with diplomatic poise.',
        recommendedDuration: '90-120 seconds',
        modelResponse: 'Ladies and gentlemen of the press, thank you for your patience. I would like to address the incident that occurred in Sector Blue this morning. At eleven-thirty hours, hostile gunfire was directed towards our patrol vehicle from the fringes of a crowded market. Our patrol commander immediately ordered troops to take defensive cover rather than return fire indiscriminately into the civilian crowd. Under United Nations Chapter Seven Rules of Engagement, military forces are legally and morally bound by the principles of proportionality and distinction. Returning fire without clear, positive identification of the hostile shooter would have posed an unacceptable risk of collateral civilian casualties. By demonstrating professional tactical restraint, our soldiers prevented innocent loss of life, while our specialized marksman detachment subsequently neutralised the perpetrator without further harm to bystanders. In warfare, true courage lies not in reckless force, but in disciplined, ethical restraint.',
        pronunciationTips: [
          'Deliver with diplomatic poise, formal register, and authoritative cadence.',
          'Pronounce "proportionality" /prəˌpɔː.ʃənˈæl.ə.ti/ and "indiscriminately" /ˌɪn.dɪˈskrɪm.ɪ.nət.li/.',
          'Use natural rhetorical pauses after key assertions of moral responsibility.'
        ],
        keyVocabulary: ['Proportionality', 'Positive identification', 'Collateral casualties', 'Tactical restraint', 'Distinction', 'Ethical restraint']
      },
      {
        id: 'l5-s3',
        title: 'Collaborative Round Table: Quality of Life, Work-Life Balance, and Command Responsibility',
        situation: 'Part 3 Collaborative Discussion: You and a partner (an Allied Major) are discussing how modern armed forces can best reconcile demanding operational deployments with personal hobbies, family stability, and mental health.',
        role: 'Senior Staff Officer discussing with Allied Counterpart',
        prompt: 'Exchange views, formulate polite queries, express diplomatic agreement and nuances, propose solutions for time management, and summarize shared conclusions.',
        recommendedDuration: '90-120 seconds',
        modelResponse: 'Major, it is evident that chronic overwork among staff officers poses a severe threat to operational effectiveness. When officers routinely work sixteen-hour days, cognitive fatigue inevitably impairs judgment. Don\'t you agree that we need to actively encourage our personnel to maintain personal hobbies and family time? — Absolutely. In the past, there was a harmful belief that sacrificing one\'s family life was a badge of honour. Today, neuroscience proves that leaders who engage in sports, music, or literature demonstrate higher resilience and emotional intelligence. How do you propose we implement this practically in high-tempo headquarters? — From my perspective, commanding officers must lead by example. If battalion commanders insist on delegating routine paperwork and leave headquarters at reasonable hours, junior officers will feel permitted to do the same. Furthermore, introducing mandatory decompression periods following intense deployments is crucial. — I could not agree more. A balanced officer is undoubtedly a more decisive, reliable commander in combat.',
        pronunciationTips: [
          'Use conversational pitch modulation when querying: "Don\'t you agree that...?", "How do you propose...?".',
          'Stress key concepts: "cognitive fatigue", "emotional intelligence", "lead by example".'
        ],
        keyVocabulary: ['Chronic overwork', 'Cognitive fatigue', 'Badge of honour', 'Lead by example', 'Mandatory decompression', 'Emotional intelligence']
      },
      {
        id: 'l5-s4',
        title: 'Cultural & Literary Presentation: Contrasting World Celebrations and National Heritage',
        situation: 'Part 1 Monologue: The examiners ask you to compare how traditions, literature, and commemorations celebrate national identity and heroes in Argentina and the English-speaking world.',
        role: 'Candidate delivering a structured comparative monologue',
        prompt: 'Deliver a structured 90-120 second presentation comparing cultural commemorations (such as Remembrance Sunday / Veterans Day vs Malvinas Fallen Day), literary archetypes, and community rituals.',
        recommendedDuration: '90-120 seconds',
        modelResponse: 'Examining cultural celebrations across the English-speaking world and Argentina reveals how deeply societies revere their history, literature, and heroes. In the United Kingdom, Remembrance Sunday is marked by the wearing of red poppies and two minutes of nationwide silence at the Cenotaph in London, commemorating those who fell in defense of freedom. Similarly, in Argentina, the Day of the Veteran and the Fallen in the Malvinas War is observed with profound solemnity, honouring our soldiers who fought with extraordinary gallantry.\n\nMoreover, literature plays a decisive role in shaping national identity. While British culture reflects the moral questions of Shakespeare and Orwell, and American literature celebrates Hemingway\'s concept of "grace under pressure," Argentine identity is intrinsically linked to epic literature like Martín Fierro, celebrating freedom, loyalty, and resilience. Whether through Scotland\'s Hogmanay or Argentina\'s communal mate gatherings, cultural rituals remind us that human beings thrive on shared memories and mutual respect. For military officers, appreciating these cultural foundations is vital to fostering genuine intercultural cooperation in multinational operations.',
        pronunciationTips: [
          'Maintain a respectful, reflective and dignified tone throughout.',
          'Pronounce "Cenotaph" /ˈsenətɑːf/, "gallantry" /ˈɡæləntri/, and "intrinsically" /ɪnˈtrɪnzɪkli/.',
          'Use contrastive transitions with clear emphasis: "Similarly...", "In contrast...", "Whether through...".'
        ],
        keyVocabulary: ['Remembrance Sunday', 'Two minutes of silence', 'Extraordinary gallantry', 'Grace under pressure', 'Communal rituals', 'Intercultural cooperation']
      },
      {
        id: 'l5-s5',
        title: 'Storytelling from Dual Perspectives: An Unexpected Operational Crisis and Resolution',
        situation: 'Part 2 Long Turn: Recount a dramatic operational or humanitarian incident (such as an unexpected flash flood during a peacekeeping deployment) from two contrasting perspectives: first as the forward scout on the ground, and second as the operations controller at headquarters.',
        role: 'Candidate narrating a multi-perspective incident',
        prompt: 'Use narrative tenses, Past Perfect, expressions of emotion (dread, relief, urgency), and recount how unexpected adversity was transformed into a life-saving success.',
        recommendedDuration: '90-120 seconds',
        modelResponse: 'I would like to recount the events of the flash flood in Sector Charlie from two distinct perspectives. From the viewpoint of Corporal Morales, the forward scout, the situation seemed utterly catastrophic. By nineteen-hundred hours, the river had broken its banks, sweeping away the primary bridge. He and his patrol were cut off, surrounded by rising waters with sixty civilian villagers seeking shelter on a precarious mound. In that terrifying moment, Morales felt an overwhelming sense of dread; nevertheless, he kept his composure, fired visual emergency flares, and climbed a radio tower to guide rescue craft.\n\nNow, viewing the crisis from the operations bunker at headquarters, Major Campbell faced an entirely different battle: an agonizing battle against time and incomplete information. When the satellite feed was cut off, the operations staff feared the worst. If Morales had not fired those illumination flares, our rescue helicopters would have searched the wrong valley. Guided by Morales\'s signals, the helicopters evacuated all sixty villagers safely before midnight. Looking back, what began as an unexpected catastrophe was turned into an inspiring triumph through mutual trust, initiative, and decisive courage.',
        pronunciationTips: [
          'Vary your voice tone to reflect the fear on the ground vs the intense pressure in the command bunker.',
          'Pronounce "catastrophic" /ˌkætəˈstrɒfɪk/ and "precarious" /prɪˈkeəriəs/.',
          'Use vivid storytelling verbs and dramatic pauses.'
        ],
        keyVocabulary: ['Utterly catastrophic', 'Overwhelming sense of dread', 'Kept his composure', 'Agonizing battle against time', 'Turned into an inspiring triumph']
      }
    ]
  },

  // =========================================================================
  // NIVEL 6 (B2)
  // =========================================================================
  {
    levelNumber: 6,
    name: 'Nivel 6 – Avanzado (B2 • STANAG 6001 Nivel 3 Profesional)',
    cefr: 'B2',
    clockHours: 120,
    academicHours: 160,
    accumulatedClockHours: 720,
    accumulatedAcademicHours: 960,
    generalObjective: 'Que el usuario sea capaz de desenvolverse lingüísticamente en forma eficiente, con soltura y haciendo uso de recursos estilísticos en situaciones complejas de la vida personal, social, profesional y diplomático-militar, pudiendo abordar cualquier tema con rigor argumentativo, precisión léxica y adecuada cohesión discursiva.',
    thematicCompetencies: [
      'EDUCACIÓN Y CULTURA: Sistemas educativos y académicos comparados, formación militar superior, preservación del patrimonio cultural y pensamiento crítico.',
      'LA GLOBALIZACIÓN Y LAS COMUNICACIONES: Conectividad mundial, medios de comunicación masivos, diplomacia pública e interoperabilidad de redes estratégicas.',
      'LAS LENGUAS EN EL MUNDO GLOBALIZADO: El inglés como lengua franca global (ELF), sociolingüística aplicada, multilingüismo y preservación de lenguas minoritarias.',
      'LA INMIGRACIÓN EN EL MUNDO GLOBALIZADO: Movimientos migratorios transnacionales, crisis de refugiados, integración cultural, regímenes fronterizos y derecho de asilo.',
      'LA DEFENSA DEL MEDIOAMBIENTE EN EL MUNDO GLOBALIZADO: Seguridad ecológica y climática, transición hacia energías renovables, escasez de agua potable y minerales críticos.',
      'LAS RELACIONES HUMANAS: Las personas, sus personalidades y conductas. Modales, cortesía y relaciones interpersonales. Comportamientos sociales y etiqueta en diversas culturas.',
      'EL MUNDO DEL FUTURO: CIENCIA Y TECNOLOGÍA: Inteligencia artificial generativa y táctica, computación cuántica, automatización robótica, biotecnología y dilemas éticos.',
      'POLÍTICA: DIFERENTES SISTEMAS DE GOBIERNO EN LOS PAÍSES DE HABLA INGLESA: Monarquía parlamentaria británica (Westminster), república federal presidencialista (EE.UU.) y modelos de la Commonwealth.',
      'CRIMEN Y CASTIGO: LA LEGISLACIÓN EN LOS PAÍSES DE HABLA INGLESA Y SUS DIFERENCIAS: Common Law (derecho consuetudinario y precedente judicial), jurados populares, sistema adversarial y tribunales militares.',
      'ECONOMÍA: CONSUMISMO, BIENES Y SERVICIOS: Cadenas de suministro globales, macroeconomía, presupuestos públicos, defensa, contrataciones y comercio internacional.',
      'MENTE, CUERPO Y ESPÍRITU: Terapias alternativas, neurociencia cognitiva, bienestar psicológico integral, gestión del estrés operacional (PTSD) y resiliencia humana.'
    ],
    culturalReflection: [
      'DIVERSIDAD CULTURAL DEL MUNDO ANGLOPARLANTE: Pluralismo sociocultural, dialectos e idiosincrasias en el Reino Unido, Estados Unidos, Canadá, Australia, Nueva Zelanda y naciones de la Mancomunidad Británica (Commonwealth).',
      'LA OTAN Y LA ONU: Tratado del Atlántico Norte (Defensa Colectiva - Artículo 5), operaciones de paz bajo mandato del Capítulo VII de la Carta de la ONU, y la tensión entre soberanía nacional e intervenciones humanitarias multilaterales.',
      'ANÁLISIS SIMBÓLICO Y LITERARIO: Arquetipos míticos y morales en la literatura en lengua inglesa (Shakespeare, George Orwell, Ernest Hemingway) y su impacto en la construcción de los valores cívicos y militares contemporáneos.'
    ],
    speechActs: [
      'Explicar causas, orígenes y teorías con rigor conceptual y argumentativo.',
      'Expresarse asegurando la progresión y cohesión de una argumentación o de una sucesión de hechos que reúna situaciones pasadas, presentes y futuras.',
      'Presentar argumentos a favor y en contra, sopesando evidencias y realizando concesiones diplomáticas.',
      'Evocar recuerdos, memorias institucionales y trayectorias históricas.',
      'Resumir, sintetizar y parafrasear información densa o técnica.',
      'Poner de relieve diferentes elementos del discurso (el sujeto, los complementos, etc.) mediante inversiones y oraciones hendidas (cleft sentences).',
      'Dar puntos de vista personales y compararlos con los de terceros con sutileza y cortesía formal.',
      'Expresar consecuencias y condiciones hipotéticas complejas (condicionales invertidos y mixtos).',
      'Referir lo dicho por otros mediante el discurso indirecto y verbos de reporte avanzados (allege, concede, urge, deny, claim).',
      'Comentar estadísticas, encuestas de opinión pública y análisis prospectivos de riesgos.',
      'Analizar textos simbólicos (cuentos, mitos, alegorías y figuras retóricas).',
      'Expresar necesidad imperativa y obligación formal.',
      'Aconsejar y formular recomendaciones estratégicas fundadas.',
      'Describir usando vocabulario preciso que varíe según el contexto y el registro lingüístico.',
      'Describir usando expresiones idiomáticas, frases verbales (phrasal verbs) o locuciones preposicionales.',
      'Emplear familias de palabras y derivados mediante prefijación y sufijación compleja.',
      'Explicar ideas mediante la paráfrasis y la reformulación analítica.',
      'Expresar con precisión la causa, la consecuencia, la oposición, el contraste y la finalidad.',
      'Explicar y justificar elecciones y decisiones bajo condiciones de incertidumbre.',
      'Expresar importancia o banalidad de un acontecimiento o medida.',
      'Expresar exageración o atenuación mediante recursos de distanciamiento (hedging, understatement).',
      'Expresar sensaciones, emociones y sentimientos con matices afectivos y profesionales precisos.',
      'Expresar agrado, desagrado, satisfacción e inconformidad constructiva.',
      'Fundamentar elecciones y prioridades estratégicas.',
      'Expresar inquietud, perplejidad e incredulidad.',
      'Expresar interés intelectual y sorpresa.',
      'Expresar conflictos y proponer vías pacíficas de concertación y mediación.',
      'Expresar instrucciones, qué hacer, qué no hacer y orden estricto de prioridades.',
      'Dar pequeños consejos útiles y orientaciones prácticas.',
      'Presentar conclusiones ponderadas y recomendaciones de acción futura.',
      'Expresarse utilizando recursos retóricos para mantener la atención del lector y del oyente.'
    ],
    grammaticalContents: [
      'Tenses (all): Dominio e integración de todos los tiempos verbales (Simple, Continuous, Perfect, Perfect Continuous en pasado, presente y futuro).',
      'Passive Voice & Advanced Causative: Voz pasiva completa, pasivas impersonales de reporte (It is alleged that... / The minister is understood to have...) y causativo (have/get something done).',
      'Conditionals (all types and mixed): Condicionales 0, 1, 2, 3, condicionales mixtos (causa pasada con efecto presente y viceversa) y conectores condicionales (provided that, as long as, on condition that, but for).',
      'Inversions: Inversión sujeto-auxiliar tras adverbiales negativos o restrictivos (Seldom, Rarely, Never, Scarcely, No sooner... than, Under no circumstances, Not only... but also, Little did they realize).',
      'Inverted Conditionals: Omisión de "if" mediante inversión en registros formales y diplomáticos (Had the allies acted..., Were the government to negotiate..., Should you require further intelligence...).',
      'Emphasis Cleft Sentences: Oraciones hendidas para focalización temática (What the summit demonstrated was... / It was the intelligence failure that prompted...).',
      'Emphasis through auxiliaries: Uso enfático de auxiliares "do", "does", "did" en aseveraciones afirmativas (The delegation DID present compelling evidence...).',
      'Subject-verb agreement: Concordancia gramatical y nocional en oraciones complejas con sustantivos colectivos, cuantificadores, estructuras correlativas (neither... nor, either... or) y cláusulas interpuestas.',
      'Verb patterns with/without change of meaning: Patrones con gerundio e infinitivo (remember, regret, stop, try, mean, go on).',
      'Phrasal verbs and prepositional phrases: Verbos frasales avanzados y locuciones preposicionales formales (bring about, face up to, iron out, rule out, fall back on; in accordance with, on behalf of, with a view to, by virtue of).',
      'Ellipsis and Substitution: Omisión de elementos sintácticos sobreentendidos y uso de sustitutos (so, neither, nor, do so, that of, those of) para maximizar la concisión.',
      'Compound nouns and adjectives: Sustantivos y adjetivos compuestos formados por derivación y yuxtaposición (decision-making, forward-looking, high-ranking, state-of-the-art).',
      'Unreal past: Estructuras con "It\'s (high) time + pronoun + Simple Past" y "I\'d rather / I\'d sooner + past subjunctive".',
      'Distancing: Técnicas de distanciamiento informativo (seem, appear, indicate, allegedly, reportedly, ostensibly, arguably).',
      'Discourse markers: Marcadores discursivos avanzados de concesión, reformulación, adición y contraste (Be that as it may, Albeit, Inasmuch as, By the same token, That is to say, All things considered).',
      'Collocations & Idioms: Colocaciones léxicas fijas y expresiones idiomáticas de uso frecuente en el lenguaje culto, periodístico y militar.',
      'Word formation (prefixes and suffixes): Formación léxica mediante prefijos y sufijos de alta complejidad (counter-, anti-, pseudo-, trans-, sub-, de-, dis-; -ization, -ability, -hood, -ness).',
      'Modal verbs (all functions): Especulación, deducción lógica (must have, can\'t have, might have), necesidad (needn\'t have vs didn\'t need to), obligación y permisión.',
      'Adjectives and adverbs for speculation: Determinación de grados de certeza (bound to, certain to, likely, arguably, conceivably, ostensibly, indisputably).'
    ],
    vocabularyTopics: [
      'Education and culture: Higher military education, academic credentials, cultural heritage preservation and pedagogical innovation.',
      'Globalisation and migration: Global economic interdependence, transnational migration corridors, refugee conventions and diaspora integration.',
      'Modern languages and communication: English as a global lingua franca, sociolinguistics, strategic communications and media influence.',
      'Welfare and wellbeing: Comprehensive healthcare frameworks, mental health parity, operational decompression and quality of life.',
      'The environment and its protection: Environmental security, climate change geopolitics, energy transition and sustainable resource governance.',
      'Human relationships and social behaviour: Cross-cultural etiquette, interpersonal psychology, diplomatic protocol and non-verbal communication.',
      'The future of science and technology: Tactical artificial intelligence, autonomous robotics, quantum encryption and bioethical boundaries.',
      'Politics and economy today: Comparative democratic systems (Parliamentary vs Presidential), public finances, consumerism and defence acquisition.',
      'Mind, body and spirit: Alternative therapies, cognitive neuroscience, mindfulness practices, operational stress mitigation and emotional fortitude.',
      'Crime and punishment: Comparative legal frameworks (Common Law vs Civil Law), adversarial trials, restorative justice and international criminal tribunals (ICC).',
      'International organisations: NATO collective defence architectures (Article 5), UN Security Council resolutions, Chapter VII peacekeeping and multilateral treaties.'
    ],
    phrasalVerbs: [
      'bring about (cause to happen / generate)',
      'call off (cancel an operation or meeting)',
      'carry out (execute an order, plan or study)',
      'come down to (be essentially dependent on)',
      'count on (rely on / trust firmly)',
      'cut back on (reduce expenditure or consumption)',
      'do away with (abolish / eliminate)',
      'draw up (draft a treaty, contract or plan)',
      'face up to (confront a harsh reality or crisis)',
      'fall back on (resort to a reserve plan or asset)',
      'fall through (fail to occur / collapse)',
      'get across (successfully communicate an idea)',
      'get along with (maintain a harmonious relationship)',
      'get round to (finally find time to deal with)',
      'iron out (resolve minor difficulties or differences)',
      'keep up with (stay at the same pace or standard)',
      'lay down (establish formal rules or surrender arms)',
      'look down on (regard with contempt or condescension)',
      'look forward to (anticipate with pleasure)',
      'look up to (admire and respect deeply)',
      'make up for (compensate for a deficiency or delay)',
      'pay off (yield positive results or bribe)',
      'phase out (gradually withdraw from service)',
      'put up with (tolerate an unpleasant situation)',
      'rule out (exclude as a possibility)',
      'run out of (deplete completely)',
      'set forth (explain principles or begin an expedition)',
      'stand in for (substitute temporarily for someone)',
      'stand up for (defend rights, principles or allies)',
      'step up (increase intensity, tempo or volume)',
      'take up (assume a responsibility, role or hobby)',
      'watch out for (maintain vigilance against a hazard)',
      'wipe out (destroy or eradicate completely)',
      'in accordance with (conforming exactly to regulations)',
      'with a view to (with the intention or hope of)',
      'by virtue of (on account of / because of)'
    ],
    militarySpecificTopics: [
      'NATO STANAG 6001 Level 3/4 Language Proficiency Standards across Listening, Speaking, Reading and Writing',
      'C4ISR (Command, Control, Comms, Computers, Intelligence, Surveillance, Reconnaissance) & Cyber Interoperability',
      'Washington Treaty Article 5, Collective Defence & Multinational Coalition Command Mechanisms',
      'UN Peacekeeping Missions under Chapter VII, Rules of Engagement (ROE) & International Humanitarian Law (IHL)',
      'Civil-Military Cooperation (CIMIC), Environmental Security & Disaster Relief Operations',
      'Cognitive Readiness, Operational Stress Control & Psychological Resilience in Expeditionary Deployments'
    ],
    writtenComprehensionSkills: [
      'Reconocer diferentes tipos de textos: artículos de diarios y revistas de opinión, actualidad política, económica, educativa, cultural, nacional e internacional; novelas, cuentos cortos, poesía, ensayos, obras y publicaciones técnicas, científicas y literarias.',
      'Aplicar estrategias de lecto-comprensión integrando los objetivos de nivel 1 a 5: reconocer el tema principal y temas secundarios, buscar información específica, identificar referentes y establecer relaciones lógicas del texto.',
      'Reconocer estructura textual, indicadores de secuencia cronológica, relaciones de causa-efecto, consecuencia, condición, contraste, adición, ejemplificación, propósito, opinión, fuente y tipo de documento.',
      'Inferir significados contextuales, resumir, sintetizar y predecir resultados a partir de evidencias textuales.',
      'Interpretar lenguaje figurado, evaluar juicios de la realidad, opinión o fantasía, y comprender dichos, proverbios y expresiones idiomáticas.',
      'Identificar estilos y géneros literarios (narrativa alegórica, lírica reflexiva, ensayo discursivo, tratado técnico-jurídico).'
    ],
    writtenExpressionSkills: [
      'Redactar documentos generales: artículos de opinión sobre música, cine, libros, etc.; ensayos narrativos, descriptivos, discursivos y argumentativos.',
      'Elaborar artículos informativos rigurosos sobre actualidad internacional, adelantos científicos y transformaciones socioculturales.',
      'Redactar cartas y correos electrónicos formales para pedir información, presentar credenciales o establecer acuerdos interinstitucionales.',
      'Confeccionar informes analíticos: interpretar datos estadísticos, encuestas y gráficos para volcarlos con claridad sintética y conceptual en un informe ejecutivo.'
    ],
    oralComprehensionSkills: [
      'Reconocer los distintos registros de la lengua (formal, informal, académico, diplomático, militar operacional).',
      'Identificar el tema general y la arquitectura argumentativa del discurso oral con rapidez.',
      'Comprender distintos acentos regionales e internacionales del mundo angloparlante (RP británico, escocés, norteamericano, australiano, acentos no nativos en conferencias multinacionales).',
      'Buscar información general y específica bajo diversas condiciones acústicas.',
      'Distinguir la función comunicativa de un texto oral (persuasión, advertencia, consenso, ironía, distanciamiento).',
      'Inferir información implícita, supuestos ideológicos y actitudes del hablante.',
      'Demostrar comprensión de palabras y frases conocidas en contextos no familiares o de alta especialización.',
      'Seleccionar información relevante para cumplimentar una orden o tarea compleja, descartando redundancias.',
      'Comprender material auténtico incluyendo pausas, redundancias y estructuras de lengua correspondientes a distintos niveles de expresión: estándar, familiar, popular, etc.',
      'Tomar notas analíticas, jerarquizadas y concisas durante exposiciones, conferencias y comunicaciones de enlace.'
    ],
    oralExpressionSkills: [
      'Conversar con naturalidad y fluidez corrigiendo de forma autónoma los errores que comete.',
      'Argumentar eficazmente, defender ideas con rigor persuasivo, explicar puntos de vista divergentes, negociar y realizar concesiones estratégicas.',
      'Planificar sus discursos con conciencia de la repercusión en el interlocutor, empleando recursos retóricos, modulación tonal y pausas para mantener la atención activa.'
    ],
    listening: [
      {
        id: 'l6-act1',
        title: 'NATO Strategic Briefing: Interoperability and Collective Defence',
        context: 'Discurso de apertura en la Conferencia de Comandantes Aliados',
        speakerRole: 'Air Marshal Sir Arthur Vance, RAF / NATO Supreme Allied Command',
        audioProwords: false,
        audioText: 'Distinguished colleagues and commanders. Never before has the cohesion of collective security faced such multifaceted challenges across both physical and digital spheres. Under no circumstances should member states underestimate the vulnerability of critical subsea infrastructure and satellite constellations. It is not merely conventional artillery that deter aggression; what truly guarantees our collective resilience is technological interoperability and shared intelligence. Had we not unified our command, control, and communications networks over the past decade, our response times to hybrid border incursions would have been unacceptably degraded. Scarcely had the last exercise concluded when simulated cyber assaults targeted our logistics nodes, proving that peacetime is no longer distinct from contested grey-zone warfare. Therefore, it is high time we modernized our collective cyber protocols.',
        questions: [
          {
            id: 'l6-q1',
            question: 'What specific vulnerability does the Air Marshal highlight as critical?',
            options: [
              'Recruitment shortages in military music bands',
              'Subsea infrastructure and satellite constellations',
              'Shortage of diesel fuel in training centres',
              'Ammunition storage in central depots'
            ],
            correctIndex: 1,
            explanation: 'Air Marshal Vance underscores: "Under no circumstances should member states underestimate the vulnerability of critical subsea infrastructure and satellite constellations."'
          },
          {
            id: 'l6-q2',
            question: 'What stylistic grammatical feature is used in "Never before has the cohesion..." and "Under no circumstances should..."?',
            options: [
              'Direct reported speech',
              'Grammatical inversion after negative adverbials for emphasis',
              'Past continuous for interrupted actions',
              'Zero conditional general truth'
            ],
            correctIndex: 1,
            explanation: 'Both phrases use negative inversion (adverbial + auxiliary + subject) to establish strong rhetorical emphasis.'
          },
          {
            id: 'l6-q3',
            question: 'What lesson did the cyber simulation teach according to the speaker?',
            options: [
              'Cyber warfare has become obsolete',
              'Peacetime is no longer distinct from contested grey-zone warfare',
              'Only naval assets require digital protection',
              'NATO should eliminate all wireless networks'
            ],
            correctIndex: 1,
            explanation: 'The speaker states: "proving that peacetime is no longer distinct from contested grey-zone warfare."'
          }
        ]
      },
      {
        id: 'l6-act2',
        title: 'Globalisation, Migration and Sociolinguistic Integration: The Multilingual Dilemma',
        context: 'Debate académico sobre sociolingüística, migración y la posición del inglés en el mundo globalizado',
        speakerRole: 'Professor Alistair Finch (Sociolinguist) & Dr. Elena Vance (Policy Advisor)',
        audioProwords: false,
        audioText: 'Professor Finch, when we examine the unprecedented scale of global migration, one central paradox immediately emerges. While English undeniably functions as the global lingua franca of commerce, science, and diplomacy, millions of migrants arriving in Anglophone societies face acute socio-economic marginalisation if their linguistic competence is deemed sub-optimal. — Absolutely, Dr. Vance. Little do native English speakers realise how heavily accented speech can trigger implicit bias in housing and employment. Were governments to allocate comprehensive resources to adult language education rather than punitive border controls, societal cohesion would be vastly enhanced. Furthermore, we must question whether the globalisation of English is inadvertently eroding indigenous languages across the Commonwealth. Inasmuch as globalisation facilitates communication, it also threatens linguistic biodiversity. What societies require is not forced assimilation, but additive bilingualism where immigrant communities preserve their cultural heritage while mastering the national language.',
        questions: [
          {
            id: 'l6-q4',
            question: 'What paradox regarding the global status of English is highlighted in the discussion?',
            options: [
              'English is losing its status to Latin in international trade',
              'English is the dominant global lingua franca, yet migrants suffer severe disadvantages if their fluency is deemed imperfect',
              'All immigrants speak English fluently upon arrival',
              'English is no longer taught in universities across the Commonwealth'
            ],
            correctIndex: 1,
            explanation: 'The speakers note that while English is the global lingua franca, migrants experience socioeconomic barriers if their English is considered sub-optimal.'
          },
          {
            id: 'l6-q5',
            question: 'Which grammatical inversion appears in Professor Finch\'s first response?',
            options: [
              '"Rarely do people migrate..."',
              '"Little do native English speakers realise..."',
              '"Never have governments invested..."',
              '"Under no circumstances can languages die..."'
            ],
            correctIndex: 1,
            explanation: 'Professor Finch uses: "Little do native English speakers realise how heavily accented speech can trigger implicit bias...".'
          },
          {
            id: 'l6-q6',
            question: 'What policy approach does Professor Finch advocate regarding language integration?',
            options: [
              'Mandatory abandonment of ancestral mother tongues',
              'Additive bilingualism where immigrants master the national tongue while preserving heritage languages',
              'Elimination of public schools in immigrant districts',
              'Exclusively punitive border checks without educational support'
            ],
            correctIndex: 1,
            explanation: 'He advocates for "additive bilingualism where immigrant communities preserve their cultural heritage while mastering the national language."'
          }
        ]
      },
      {
        id: 'l6-act3',
        title: 'Comparative Governance & Legal Systems: Westminster vs Washington & Common Law vs Civil Law',
        context: 'Conferencia magistral en la Escuela Superior de Guerra sobre derecho comparado y modelos constitucionales',
        speakerRole: 'Dr. Julian Montgomery, Senior Lecturer in Comparative Constitutional Law',
        audioProwords: false,
        audioText: 'Good morning, gentlemen. When analyzing bilateral cooperation across the Anglophone sphere, one must appreciate the stark constitutional divergences between the British Westminster model and the United States Presidential republic. In the United Kingdom, executive authority derives directly from parliamentary confidence, characterized by legislative supremacy and the absence of a single codified constitution. In contrast, the United States relies upon a rigid constitutional framework featuring strict separation of powers, where judicial review empowered by the Supreme Court can invalidate presidential decrees or congressional statutes.\n\nSimultaneously, when we inspect legal systems, both nations adhere to the Common Law tradition, founded on judicial precedent and the doctrine of stare decisis, fundamentally contrasting with the Romano-Germanic Civil Law prevalent throughout Continental Europe and South America. In an adversarial Common Law trial, whether civilian or before a military court-martial, the judge acts as an impartial umpire while opposing counsel argue before a jury of peers. Were allied officers unfamiliar with these legal subtleties, civil-military status of forces agreements (SOFA) would inevitably trigger jurisdictional friction during joint overseas missions.',
        questions: [
          {
            id: 'l6-q7',
            question: 'What is a defining institutional difference between the British and American systems of governance?',
            options: [
              'The British Prime Minister is elected directly by popular universal suffrage nationwide',
              'The UK lacks a single codified constitution and executive power stems from parliamentary confidence, whereas the US features strict separation of powers',
              'The US Supreme Court has no power to strike down federal legislation',
              'The British monarchy holds absolute executive power over legislative statutes'
            ],
            correctIndex: 1,
            explanation: 'The lecturer contrasts the uncodified British system anchored in parliamentary supremacy with the rigid US constitutional separation of powers.'
          },
          {
            id: 'l6-q8',
            question: 'What principle is central to the Common Law legal tradition according to Dr. Montgomery?',
            options: [
              'Codification of all laws in comprehensive civil codes without judicial discretion',
              'The doctrine of stare decisis and binding judicial precedent in an adversarial trial format',
              'Trial by inquisitorial judges who lead investigations directly',
              'The total prohibition of juries in criminal and military tribunals'
            ],
            correctIndex: 1,
            explanation: 'The Common Law tradition is characterized by judicial precedent (stare decisis) and an adversarial courtroom format.'
          },
          {
            id: 'l6-q9',
            question: 'What risk arises if allied officers fail to understand these legal differences?',
            options: [
              'Immediate cancellation of all trade agreements',
              'Jurisdictional friction regarding Status of Forces Agreements (SOFA) during overseas operations',
              'Compulsory adoption of British English across all military schools',
              'Automatic dissolution of NATO treaties'
            ],
            correctIndex: 1,
            explanation: 'Dr. Montgomery warns: "Were allied officers unfamiliar with these legal subtleties, civil-military status of forces agreements (SOFA) would inevitably trigger jurisdictional friction..."'
          }
        ]
      },
      {
        id: 'l6-act4',
        title: 'Environmental Security, Climate Disruption & Geopolitics in the 21st Century',
        context: 'Mesa redonda del grupo de trabajo sobre seguridad ambiental y crisis climática de las Naciones Unidas',
        speakerRole: 'Major General Thomas Bradley (UN Environmental Task Force) and Dr. Clara Lindqvist',
        audioProwords: false,
        audioText: 'General Bradley, for decades military planners treated environmental defense as peripheral to core national security. Today, however, climate change is universally recognized as a potent threat multiplier. — Indeed, Dr. Lindqvist. Scarcely a week passes without extreme weather events destabilising fragile governance structures across equatorial regions. As droughts intensify and arable land shrinks, competition over transboundary aquifers and rare mineral deposits is triggering armed skirmishes. Not only does resource depletion accelerate cross-border migration, but it also creates recruitment vacuums that extremist non-state actors exploit with alarming efficacy.\n\nFrom a logistics standpoint, had the armed forces not initiated large-scale transitions towards solar microgrids, hydrogen-fuelled logistics columns, and resilient coastal bases, our forward operating capacity would be compromised. Furthermore, international conventions such as the Paris Accord require armed services—historically among the world\'s largest institutional fossil fuel consumers—to drastically curtail their carbon footprints. It is time we recognized that environmental preservation is not merely an ecological virtue, but an indispensable foundation of global peace.',
        questions: [
          {
            id: 'l6-q10',
            question: 'How is climate change currently characterized by modern military strategists?',
            options: [
              'As an irrelevant political talking point with no operational impact',
              'As a potent threat multiplier that exacerbates resource scarcity, migration, and regional instability',
              'As a seasonal phenomenon that will naturally dissipate within a decade',
              'As an issue strictly limited to naval meteorological services'
            ],
            correctIndex: 1,
            explanation: 'Climate change is identified as a "potent threat multiplier" that triggers competition over water, fertile land, and destabilises fragile governance.'
          },
          {
            id: 'l6-q11',
            question: 'Which negative inversion is used by General Bradley to describe the cascading effects of resource depletion?',
            options: [
              '"Rarely does rainfall occur..."',
              '"Not only does resource depletion accelerate cross-border migration, but it also creates recruitment vacuums..."',
              '"Under no circumstances will militaries deploy..."',
              '"Seldom have aquifers been replenished..."'
            ],
            correctIndex: 1,
            explanation: 'General Bradley states: "Not only does resource depletion accelerate cross-border migration, but it also creates recruitment vacuums..."'
          },
          {
            id: 'l6-q12',
            question: 'What proactive transformation have armed forces undertaken according to the speaker?',
            options: [
              'Banning all motorized vehicles in combat zones',
              'Adopting solar microgrids, alternative fuels, and resilient installations to cut carbon footprints and maintain readiness',
              'Relocating all military headquarters underground',
              'Refusing to participate in UN humanitarian relief'
            ],
            correctIndex: 1,
            explanation: 'General Bradley points out transitions towards solar microgrids, hydrogen-fuelled logistics, and compliance with carbon reduction goals.'
          }
        ]
      },
      {
        id: 'l6-act5',
        title: 'Mind, Body & Spirit: Cognitive Ergonomics, Resilience & Alternative Therapies in High-Stress Roles',
        context: 'Simposio sobre neurociencia aplicada, resiliencia psicológica y salud holística en fuerzas expedicionarias',
        speakerRole: 'Dr. Miriam Sterling, Military Neuropsychiatrist and Mindfulness Researcher',
        audioProwords: false,
        audioText: 'Good afternoon. In the high-velocity decision-making environments that characterize modern crisis management, human cognitive capacity remains our most vulnerable yet vital asset. For generations, military and medical cultures celebrated the myth of emotional stoicism, assuming that suppressing psychological distress was a hallmark of fortitude. Today, neuroscience proves that chronic suppression invariably leads to cognitive burnout, executive dysfunction, and severe post-traumatic stress.\n\nAt our research institute, we have integrated evidence-based alternative modalities alongside conventional psychiatric care. Daily mindfulness meditation, heart-rate variability biofeedback, and progressive somatic de-escalation have demonstrated remarkable efficacy in re-calibrating the autonomic nervous system following acute operational trauma. Were command echelons to incorporate these holistic mind-body disciplines into routine garrison training, soldiers would exhibit superior situational awareness and emotional agility in combat. True resilience is not the absence of vulnerability, but the conscious cultivation of psychological adaptability and holistic health.',
        questions: [
          {
            id: 'l6-q13',
            question: 'What conventional belief regarding psychological distress does Dr. Sterling challenge?',
            options: [
              'The idea that physical fitness prevents all injuries',
              'The myth of emotional stoicism and suppression of distress as a sign of strength',
              'The recommendation to sleep eight hours before operations',
              'The necessity of wearing protective body armour'
            ],
            correctIndex: 1,
            explanation: 'Dr. Sterling challenges the outdated myth that emotional suppression represents fortitude, demonstrating that it leads to burnout and cognitive dysfunction.'
          },
          {
            id: 'l6-q14',
            question: 'What alternative and holistic modalities are proving effective in cognitive re-calibration?',
            options: [
              'Hypnosis using unregulated narcotic substances',
              'Daily mindfulness meditation, heart-rate variability biofeedback, and somatic de-escalation',
              'Extreme solitary confinement in darkness',
              'Complete cessation of intellectual tasks'
            ],
            correctIndex: 1,
            explanation: 'The researcher highlights mindfulness meditation, biofeedback, and somatic exercises that re-calibrate the autonomic nervous system.'
          },
          {
            id: 'l6-q15',
            question: 'How does Dr. Sterling define "true resilience" in her closing statement?',
            options: [
              'The total elimination of human emotions',
              'The conscious cultivation of psychological adaptability and holistic health rather than absence of vulnerability',
              'The ability to endure endless sleep deprivation without complaint',
              'Obedience without moral questioning'
            ],
            correctIndex: 1,
            explanation: 'She concludes: "True resilience is not the absence of vulnerability, but the conscious cultivation of psychological adaptability and holistic health."'
          }
        ]
      }
    ],
    reading: [
      {
        id: 'l6-read1',
        title: 'NATO Article 5, Collective Defence & Grey-Zone Deterrence in the Contemporary Era',
        textType: 'Strategic Policy & Defence Journal Article',
        content: `THE ANATOMY OF ARTICLE 5: SOLIDARITY IN AN AGE OF HYBRID CONFLICT

At the bedrock of the North Atlantic Treaty lies Article 5, embodying the foundational principle that an armed attack against one member state shall be considered an attack against all allies. Drafted in Washington in 1949, this mutual defence covenant was originally calibrated to deter conventional Soviet tank divisions from advancing across Western Europe through the existential guarantee of American nuclear and conventional retaliation.

Paradoxically, throughout the half-century of the Cold War, Article 5 was never formally invoked. Its maiden activation took place in the immediate aftermath of the terrorist attacks on the United States on September 11, 2001. That historic decision fundamentally reshaped Atlanticist doctrine, demonstrating that collective security could be projected out-of-area against non-state asymmetric actors operating from ungoverned territories thousands of kilometers beyond European borders.

In the contemporary geopolitical landscape, however, the alliance confronts an operational environment that strains the traditional Westphalian conception of an "armed attack". Chief among these emerging threats is the proliferation of "Grey-Zone Warfare"—a deliberate spectrum of coercive measures engineered to remain beneath the legal threshold that triggers unambiguous military retaliation. State adversaries deploy sophisticated cyber intrusions against national power grids, propagate algorithmic disinformation designed to polarise democratic electorates, and weaponise irregular migratory flows along contested frontiers.

Consequently, NATO strategic debates have shifted toward refining threshold criteria for collective retaliation. Had the alliance not recognized cyberspace and space as operational domains in recent summits, coordinated deterrence against sub-threshold aggression would have been irrevocably compromised. Were a member state to suffer a catastrophic and systemic cyber attack that disabled its hospitals, air traffic control, or banking grids, the North Atlantic Council would almost certainly convene under Article 5. Modern deterrence, therefore, relies as much on strategic ambiguity and resilient infrastructure as on massed armoured divisions.`,
        glossary: [
          { term: 'Article 5', definition: 'Cláusula central de defensa colectiva del Tratado de Washington de 1949.' },
          { term: 'Grey-zone warfare', definition: 'Guerra en la zona gris; hostilidad y coerción calibradas para no cruzar el umbral de conflicto bélico abierto.' },
          { term: 'Strategic ambiguity', definition: 'Ambigüedad estratégica; doctrina de no revelar con exactitud qué acción hostil provocará una respuesta armada para desmotivar al adversario.' },
          { term: 'Stare decisis', definition: 'Principio legal del Common Law que obliga a los tribunales a acatar precedentes judiciales vinculantes.' }
        ],
        questions: [
          {
            id: 'l6-rq1',
            question: 'On what historic occasion was NATO\'s Article 5 invoked for the first time?',
            options: [
              'During the Berlin Blockade in 1948',
              'In the immediate aftermath of the September 11, 2001 terrorist attacks on the US',
              'During the 1982 South Atlantic conflict',
              'Following the dissolution of the Warsaw Pact in 1991'
            ],
            correctIndex: 1,
            explanation: 'The text highlights that Article 5 was activated for the first time after the September 11, 2001 attacks on the United States.'
          },
          {
            id: 'l6-rq2',
            question: 'How does the article describe the operational nature of "Grey-Zone Warfare"?',
            options: [
              'Open naval clashes between formal battlefleets in international waters',
              'Coercive measures calibrated to remain beneath the legal threshold triggering armed retaliation',
              'Conflicts fought exclusively in uninhabited desert expanses',
              'Traditional infantry combat conducted under dense fog or smoke'
            ],
            correctIndex: 1,
            explanation: 'Grey-zone warfare is defined as actions "engineered to remain beneath the legal threshold that triggers unambiguous military retaliation."'
          },
          {
            id: 'l6-rq3',
            question: 'What inverted conditional structure is deployed in the concluding paragraph?',
            options: [
              '"Had the alliance not recognized cyberspace..." and "Were a member state to suffer..."',
              '"If the treaty were signed..."',
              '"Should anyone question our resolve..."',
              '"Unless allies agree on funding..."'
            ],
            correctIndex: 0,
            explanation: 'The text features: "Had the alliance not recognized cyberspace..." and "Were a member state to suffer a catastrophic and systemic cyber attack...".'
          }
        ]
      },
      {
        id: 'l6-read2',
        title: 'The Globalisation of English: Linguistic Imperialism, Lingua Franca & Cultural Identity',
        textType: 'Sociolinguistic & Cultural Analysis Essay',
        content: `ENGLISH AS A GLOBAL PREDATOR OR ENABLER? NAVIGATING THE MULTILINGUAL 21ST CENTURY

In the history of human civilization, no language has achieved the geographic ubiquity, institutional entrenchment, and sociolinguistic dominance currently commanded by the English language. From the flight decks of international civil aviation to the research laboratories of quantum physics, and from international peace negotiations in Geneva to the algorithmic architecture of the internet, English operates as the indisputable global lingua franca (English as a Lingua Franca, or ELF).

Yet, this unprecedented supremacy is far from benign or uncontested. Sociolinguists have long observed that the relentless expansion of English functions as a double-edged sword. On one hand, it democratises access to global academic journals, multinational corporate finance, and diplomatic discourse. A shared medium of communication breaks down regional parochialism, enabling scholars in Buenos Aires, military commanders in London, and diplomats in Tokyo to collaborate with frictionless clarity.

On the other hand, cultural critics point to the insidious phenomenon of linguistic imperialism. The economic premium placed on English fluency frequently exacerbates domestic class stratification. In developing economies, those who can afford elite English-medium private schooling monopolize senior governmental, diplomatic, and executive posts, relegating non-English speakers to economic precarity. 

Furthermore, the unchecked ascendancy of global English accelerates the attrition of indigenous and minority languages. It is estimated that a spoken human language dies every fortnight, taking with it irreplaceable epistemologies, oral mythologies, and ecological wisdom encoded over millennia. If international institutions truly wish to defend human dignity and cultural pluralism, they must foster policies of robust linguistic conservation alongside English proficiency. Far from being mutually exclusive, mastery of a global medium and reverence for ancestral mother tongues constitute the dual pillars of modern cosmopolitan citizenship.`,
        glossary: [
          { term: 'Lingua franca', definition: 'Lengua vehicular adoptada como medio de entendimiento común entre hablantes de diversas lenguas maternas.' },
          { term: 'Linguistic imperialism', definition: 'Imposición o dominación cultural y económica ejercida por una lengua hegemónica sobre otras.' },
          { term: 'Epistemology', definition: 'Sistema o teoría del conocimiento y de las formas de aprehender la realidad de una cultura.' },
          { term: 'Attrition', definition: 'Desgaste, pérdida gradual de vitalidad o desaparición de una lengua.' }
        ],
        questions: [
          {
            id: 'l6-rq4',
            question: 'Why is the global ascendancy of English described as a "double-edged sword"?',
            options: [
              'Because it is difficult to learn but has very few grammatical irregular verbs',
              'Because it facilitates global collaboration and access to knowledge, yet can generate social stratification and threaten linguistic diversity',
              'Because it is only spoken in maritime commerce and rejected in diplomacy',
              'Because native speakers refuse to allow foreigners to publish in English'
            ],
            correctIndex: 1,
            explanation: 'The essay balances the utilitarian benefits of global communication with the risks of socioeconomic inequality and minority language extinction.'
          },
          {
            id: 'l6-rq5',
            question: 'According to the text, how does English proficiency impact class structure in developing societies?',
            options: [
              'It eliminates poverty automatically across all social classes',
              'Those with access to elite English education often monopolize top professional roles, deepening social inequality',
              'It forces governments to abolish national languages completely',
              'It makes foreign investment illegal in rural areas'
            ],
            correctIndex: 1,
            explanation: 'The text notes that those who can afford elite English schooling monopolize senior posts, relegating non-speakers to precarity.'
          },
          {
            id: 'l6-rq6',
            question: 'What vision of cosmopolitan citizenship does the author endorse in the conclusion?',
            options: [
              'Replacing all national languages with a single artificial digital code',
              'Harmonizing mastery of a global lingua franca with active conservation of native languages',
              'Banning English instruction outside the United Kingdom and United States',
              'Restricting international commerce to regional dialects'
            ],
            correctIndex: 1,
            explanation: 'The author concludes that "mastery of a global medium and reverence for ancestral mother tongues constitute the dual pillars of modern cosmopolitan citizenship."'
          }
        ]
      },
      {
        id: 'l6-read3',
        title: 'Comparative Jurisprudence: The Common Law Tradition, Adversarial Justice & Military Tribunals',
        textType: 'Comparative Legal & Military Justice Treatise',
        content: `MAPPING LEGAL CULTURES: COMMON LAW, CIVIL LAW, AND THE DISPENSATION OF JUSTICE

To comprehend legal discourse across the English-speaking world, one must discern the historical divergence between the Common Law tradition and the Romano-Germanic Civil Law system. Originating in medieval England following the Norman Conquest of 1066, Common Law was forged through the uncodified decisions of travelling royal judges. Rather than relying primarily on comprehensive legislative statutes, Common Law elevates judicial precedent to binding authority under the doctrine of stare decisis ("to stand by things decided").

In a Common Law jurisdiction—such as those operating in England and Wales, the United States federal system, Canada, and Australia—the judicial process is resolutely adversarial. In this arena, the courtroom serves as a forum where two competing advocates present evidence and cross-examine witnesses before a neutral judge and a jury of lay citizens. The judge acts not as an inquisitorial investigator, but as an impartial arbiter ensuring strict adherence to procedural rules of evidence. Conversely, in the Civil Law tradition dominant in Continental Europe and Latin America, trials tend to be inquisitorial, with judicial magistrates actively steering fact-finding and evidence gathering.

This distinction extends profoundly into military criminal jurisprudence. While both legal families maintain specialized military justice codes governing uniform discipline and service offences, their operational procedures mirror their civilian traditions. In Anglo-American courts-martial, military judges preside over proceedings where military defense attorneys aggressively challenge government prosecutors before a panel of officers or enlisted members serving as the jury. Understanding these procedural paradigms is imperative for liaison officers: in coalition deployments governed by Status of Forces Agreements (SOFA), differences regarding rules of evidence, habeas corpus, and the rights of the accused can determine the legitimacy of joint commands.`,
        glossary: [
          { term: 'Stare decisis', definition: 'Doctrina que prescribe respetar los fallos y precedentes judiciales de tribunales de mayor jerarquía.' },
          { term: 'Adversarial system', definition: 'Sistema judicial acusatorio donde dos partes contrapuestas litigan ante un juez y jurado imparciales.' },
          { term: 'Inquisitorial system', definition: 'Sistema inquisitivo donde el juez o magistrado asume un rol proactivo en la investigación penal.' },
          { term: 'Status of Forces Agreement (SOFA)', definition: 'Convenio sobre el estatuto de las fuerzas que delimita la jurisdicción penal sobre tropas extranjeras estacionadas en un país anfitrión.' }
        ],
        questions: [
          {
            id: 'l6-rq7',
            question: 'What is the primary source of legal authority in the Common Law tradition as explained in the text?',
            options: [
              'Comprehensive statutory codes written by executive decree',
              'Binding judicial precedent established through previous rulings (stare decisis)',
              'Informal customs determined by neighborhood councils',
              'Religious decrees interpreted by ecclesiastical courts'
            ],
            correctIndex: 1,
            explanation: 'The text notes that Common Law elevates judicial precedent to binding authority under the doctrine of stare decisis.'
          },
          {
            id: 'l6-rq8',
            question: 'How does the role of the judge differ between adversarial and inquisitorial systems?',
            options: [
              'In the adversarial system, the judge actively leads the criminal investigation and prosecutes the suspect',
              'In the adversarial system, the judge acts as an impartial umpire of procedure, whereas in inquisitorial systems magistrates actively direct fact-finding',
              'In the inquisitorial system, judges are prohibited from questioning witnesses',
              'In the Common Law system, judges decide guilt without ever allowing a jury to deliberate'
            ],
            correctIndex: 1,
            explanation: 'The Common Law judge acts as an impartial arbiter of procedural fairness, whereas Civil Law inquisitorial judges actively steer investigations.'
          },
          {
            id: 'l6-rq9',
            question: 'Why are these procedural differences crucial for military liaison officers in coalition deployments?',
            options: [
              'They determine food rations and uniform allowances in allied bases',
              'They directly affect Status of Forces Agreements (SOFA), evidence handling, and jurisdictional legitimacy during joint operations',
              'They require all officers to earn a civilian law degree before deploying',
              'They prevent allied nations from using shared radio frequencies'
            ],
            correctIndex: 1,
            explanation: 'Differences regarding SOFA agreements, rules of evidence, and rights of the accused can make or break the jurisdictional legitimacy of joint commands.'
          }
        ]
      },
      {
        id: 'l6-read4',
        title: 'Literary & Symbolic Exploration: Myth, Meaning & the Human Condition in Anglo-American Literature',
        textType: 'Literary Criticism & Philosophical Essay',
        content: `THE HEROIC PARADOX: POWER, HUBRIS, AND MORAL INTEGRITY IN ANGLOPHONE LITERATURE

To analyze a society's highest values and darkest anxieties, one must examine its literary myths and symbolic narratives. Throughout the canon of English and American literature, authors have consistently wrestled with the corrosive temptations of unchecked power, the vulnerability of individual conscience against collective conformism, and the tragic nature of hubris.

Nowhere is this interrogation more piercing than in William Shakespeare's Macbeth. Written on the threshold of the modern era, the play presents an anatomy of moral deterioration. Macbeth, initially heralded as a valiant and honourable general defending his homeland, succumbs to the prophetic prophecies of the witches and the ruthless ambitions of his spouse. In succumbing to ambition without moral restraint, he murders King Duncan, only to discover that tyranny breeds inescapable paranoia. Shakespeare utilizes vivid symbolic motifs—blood that cannot be cleansed by all great Neptune's oceans, hallucinations of floating daggers, and insomnia—to dramatise the psychological torment that follows the betrayal of duty. The tragic downfall of Macbeth serves as a timeless cautionary fable: power severed from ethical responsibility consumes itself.

Centuries later, George Orwell's dystopian masterpiece Nineteen Eighty-Four reimagined this thematic struggle within the totalitarian landscape of the mid-twentieth century. Where Macbeth fell prey to classical ambition, Orwell's protagonist Winston Smith confronts an all-encompassing surveillance state that seeks not merely physical submission, but the complete obliteration of independent thought through "Newspeak" and psychological conditioning. In Orwell's bleak symbolic universe, language itself is engineered to render dissenting thought literally unthinkable.

Contrasting with Orwell's warning is the American ethos articulated by Ernest Hemingway in The Old Man and the Sea. In Santiago's solitary oceanic battle against the marlin and the scavenging sharks, Hemingway crafts an enduring parable of existential perseverance. Santiago famously reflects that "a man can be destroyed, but not defeated." Whether through the tragic catastrophe of Macbeth, the dystopian defiance of Winston Smith, or the dignified endurance of Santiago, literature reveals that the human spirit is ultimately forged not through unblemished triumph, but through its steadfast refusal to surrender moral agency in the crucible of adversity.`,
        glossary: [
          { term: 'Hubris', definition: 'Orgullo desmedido o soberbia que en la tragedia clásica precipita la caída del héroe.' },
          { term: 'Moral agency', definition: 'Capacidad autónoma de actuar de acuerdo con principios éticos y asumir la responsabilidad de las decisiones.' },
          { term: 'Newspeak', definition: '"Neolengua"; lenguaje ficticio totalitario diseñado por Orwell para limitar el pensamiento crítico y la libertad.' },
          { term: 'Canon', definition: 'Conjunto de obras literarias consideradas clásicas, formativas y representativas de una tradición cultural.' }
        ],
        questions: [
          {
            id: 'l6-rq10',
            question: 'What core theme unites the analysis of Shakespeare, Orwell, and Hemingway in the essay?',
            options: [
              'The superiority of British naval strategy in the Mediterranean',
              'The human confrontation with power, moral responsibility, and resilience against adversity',
              'The historical development of printing presses in North America',
              'The tactical advantages of guerrilla warfare over conventional armies'
            ],
            correctIndex: 1,
            explanation: 'The essay explores how literary classics examine the corrosive nature of power, moral duty, and the human refusal to surrender dignity.'
          },
          {
            id: 'l6-rq11',
            question: 'What symbolic devices does Shakespeare employ in Macbeth to depict the agony of a guilty conscience?',
            options: [
              'Gold coins and broken compasses',
              'Uncleanable blood, floating daggers, and relentless insomnia',
              'A white whale and ocean storm clouds',
              'Clock towers striking thirteen times'
            ],
            correctIndex: 1,
            explanation: 'Shakespeare employs motifs such as uncleanable blood, hallucinatory daggers, and insomnia to illustrate moral deterioration.'
          },
          {
            id: 'l6-rq12',
            question: 'How does Hemingway\'s Santiago illustrate courage in The Old Man and the Sea?',
            options: [
              'By capturing the fish through modern electronic radar and machine power',
              'By demonstrating dignified perseverance, showing that a man can be destroyed physically but not defeated spiritually',
              'By abandoning his boat and calling for international rescue immediately',
              'By becoming wealthy and retiring from fishing forever'
            ],
            correctIndex: 1,
            explanation: 'Santiago embodies the ethos that "a man can be destroyed, but not defeated," showcasing dignified perseverance.'
          }
        ]
      }
    ],
    useOfLanguage: [
      {
        id: 'l6-u1',
        title: 'Negative Inversion for Rhetorical & Diplomatic Emphasis',
        category: 'inversion',
        type: 'multiple-choice',
        prompt: 'Rarely ______ such unprecedented multilateral consensus regarding climate security and border defense protocols.',
        options: [
          'has the international community reached',
          'the international community has reached',
          'reached the international community',
          'did the international community reached'
        ],
        correctAnswer: 'has the international community reached',
        explanation: 'When restrictive or negative adverbs like "Rarely", "Seldom", or "Never" are placed at the beginning of a clause for rhetorical emphasis, subject-auxiliary inversion is mandatory: "has the international community reached".',
        instructions: 'Select the correctly inverted verb structure.'
      },
      {
        id: 'l6-u2',
        title: 'Inverted Conditionals in Formal Registers (Omission of "If")',
        category: 'inversion',
        type: 'multiple-choice',
        prompt: '______ the treaty signatories to violate the agreed ceasefire line, the multinational peacekeeping force would be authorized to intervene under Chapter VII.',
        options: ['Were', 'Had', 'Should', 'Would'],
        correctAnswer: 'Were',
        explanation: '"Were + subject + to-infinitive" replaces "If + subject + were to + infinitive" in formal and legal English ("Were the treaty signatories to violate...").',
        instructions: 'Choose the correct inverted conditional word.'
      },
      {
        id: 'l6-u3',
        title: 'Mixed Conditionals: Past Action with Present Repercussion',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'If the defense ministry ______ the cyber vulnerability warning issued last year, our national satellite communications network ______ offline today.',
        options: [
          'had heed / were not',
          'had heeded / would not be',
          'heeded / would not have been',
          'would have heeded / was not'
        ],
        correctAnswer: 'had heeded / would not be',
        explanation: 'Mixed Conditional (Past cause -> Present state): If + Past Perfect ("had heeded"), would not + base verb ("would not be").',
        instructions: 'Select the verb pair that expresses a past cause with a present result.'
      },
      {
        id: 'l6-u4',
        title: 'Wh- and It- Cleft Sentences for Discourse Highlighting',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: '"______ our diplomatic delegation sought to clarify during the summit ______ the sovereign boundary guarantees."',
        options: [
          'What / was',
          'That / were',
          'Which / has been',
          'It / were'
        ],
        correctAnswer: 'What / was',
        explanation: 'In a wh-cleft sentence, "What + clause + was/is" focuses the listener\'s attention on the key item: "What our diplomatic delegation sought to clarify... was the sovereign boundary guarantees."',
        instructions: 'Select the correct cleft structure.'
      },
      {
        id: 'l6-u5',
        title: 'Emphasis through Emphatic Auxiliaries (Do / Does / Did)',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'Although the chief intelligence officer was initially accused of withholding information, historical archives confirm that he ______ his superiors of the impending crisis weeks before it erupted.',
        options: [
          'did warn',
          'does warn',
          'had did warn',
          'would warned'
        ],
        correctAnswer: 'did warn',
        explanation: 'The auxiliary "did" + bare infinitive ("did warn") is used in affirmative declarative sentences to contradict a previous claim and provide decisive rhetorical emphasis.',
        instructions: 'Choose the emphatic auxiliary construction.'
      },
      {
        id: 'l6-u6',
        title: 'Unreal Past Structures: "It is high time" & "Would rather"',
        category: 'tenses',
        type: 'multiple-choice',
        prompt: 'It is high time the parliamentary committee ______ the outdated legal definitions of cyber aggression, and the general would rather we ______ the classified report until dawn.',
        options: [
          'revised / did not release',
          'revises / will not release',
          'had revised / had not released',
          'would revise / do not release'
        ],
        correctAnswer: 'revised / did not release',
        explanation: '"It is (high) time + subject + Simple Past" ("revised") expresses that an action is overdue. "would rather + subject + Simple Past" ("did not release") expresses a preference regarding another person\'s action.',
        instructions: 'Select the appropriate unreal past verb forms.'
      },
      {
        id: 'l6-u7',
        title: 'Distancing Techniques in Formal Intelligence & Media Reporting',
        category: 'passive_voice',
        type: 'multiple-choice',
        prompt: 'The insurgent leadership ______ covert financial assistance from foreign cartels, though official sources maintain strict silence.',
        options: [
          'is alleged to have received',
          'alleged to receive',
          'is alleging to have received',
          'was alleged receiving'
        ],
        correctAnswer: 'is alleged to have received',
        explanation: 'Impersonal passive distancing: "Subject + is/are alleged + to have + past participle" conveys unverified claims without assuming direct legal liability.',
        instructions: 'Choose the correct formal distancing structure.'
      },
      {
        id: 'l6-u8',
        title: 'Advanced Causative with "Have / Get Something Done"',
        category: 'passive_voice',
        type: 'multiple-choice',
        prompt: 'Prior to deploying into the contested buffer zone, the contingent commander must ______ by accredited cryptographic specialists.',
        options: [
          'have all tactical radios encrypted',
          'have encrypted all tactical radios',
          'get all tactical radios encrypt',
          'encrypt all tactical radios have'
        ],
        correctAnswer: 'have all tactical radios encrypted',
        explanation: 'Causative formula: have + object (all tactical radios) + past participle (encrypted).',
        instructions: 'Select the correct causative arrangement.'
      },
      {
        id: 'l6-u9',
        title: 'Subject-Verb Agreement in Complex & Correlative Sentences',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'Neither the Secretary General nor his senior military advisors ______ in favour of escalating maritime patrols without an explicit Security Council resolution.',
        options: ['were', 'was being', 'has been', 'is'],
        correctAnswer: 'were',
        explanation: 'In correlative structures with "neither... nor", the verb agrees in person and number with the closer subject ("his senior military advisors" -> plural -> "were").',
        instructions: 'Choose the verb agreeing with the proximate subject.'
      },
      {
        id: 'l6-u10',
        title: 'Verb Patterns with Change of Meaning: Stop, Regret, Try, Mean',
        category: 'vocabulary',
        type: 'multiple-choice',
        prompt: 'The peacekeeper ______ the wounded civilian, but he deeply ______ that he could not evacuate the remaining villagers before nightfall.',
        options: [
          'stopped to assist / regretted to announce',
          'stopped to assist / regretted',
          'stopped assisting / regretted to announce',
          'stopped to assist / regretted admitting'
        ],
        correctAnswer: 'stopped to assist / regretted',
        explanation: '"stopped to assist" means interrupted an action in order to provide assistance. "regretted" expresses grief over an existing reality.',
        instructions: 'Choose the verb forms that convey the intended meanings.'
      },
      {
        id: 'l6-u11',
        title: 'Phrasal Verbs in Diplomatic & Professional Contexts',
        category: 'phrasal_verbs',
        type: 'multiple-choice',
        prompt: 'The allied commanders managed to ______ their operational disagreements and vowed to ______ the criminal cartel networks threatening the maritime strait.',
        options: [
          'iron out / wipe out',
          'look down on / fall back on',
          'draw up / do away',
          'bring about / cut back'
        ],
        correctAnswer: 'iron out / wipe out',
        explanation: '"Iron out" means resolve minor difficulties or differences; "wipe out" means eliminate or destroy completely.',
        instructions: 'Select the phrasal verbs completing the sentence.'
      },
      {
        id: 'l6-u12',
        title: 'Prepositional Phrases in Formal and Treaty Registers',
        category: 'connectors',
        type: 'multiple-choice',
        prompt: 'The humanitarian convoy was dispatched ______ the provisions of the Geneva Conventions and ______ delivering urgent medical relief to the besieged enclave.',
        options: [
          'in accordance with / with a view to',
          'by virtue / on behalf',
          'in view of / with regard',
          'for the sake / according to'
        ],
        correctAnswer: 'in accordance with / with a view to',
        explanation: '"in accordance with" means conforming to rules/laws; "with a view to + gerund" expresses deliberate aim or purpose ("with a view to delivering").',
        instructions: 'Choose the appropriate formal prepositional phrases.'
      },
      {
        id: 'l6-u13',
        title: 'Ellipsis and Substitution for Textual Cohesion',
        category: 'connectors',
        type: 'multiple-choice',
        prompt: 'The defense minister was advised to redeploy the artillery regiment immediately, and she decided to ______ as soon as meteorological conditions permitted.',
        options: [
          'do so',
          'do it so',
          'make that',
          'perform thus'
        ],
        correctAnswer: 'do so',
        explanation: '"Do so" is the formal substitute used to avoid repeating a verb phrase ("redeploy the artillery regiment immediately").',
        instructions: 'Select the correct substitution device.'
      },
      {
        id: 'l6-u14',
        title: 'Compound Nouns & Adjectives: Derivation and Hyphenation',
        category: 'word_formation',
        type: 'multiple-choice',
        prompt: 'The general praised the detachment\'s ______ planning and their adoption of ______ surveillance systems.',
        options: [
          'forward-looking / state-of-the-art',
          'forwardly-looking / state of art',
          'forward looking / stated-of-art',
          'forwarded-look / state-art'
        ],
        correctAnswer: 'forward-looking / state-of-the-art',
        explanation: 'Compound hyphenated adjectives before nouns: "forward-looking" (visionary/anticipatory) and "state-of-the-art" (cutting-edge technological standard).',
        instructions: 'Select the correctly formed compound adjectives.'
      },
      {
        id: 'l6-u15',
        title: 'Discourse Markers: Concession, Contrast and Reformulation',
        category: 'connectors',
        type: 'multiple-choice',
        prompt: 'The sanctions failed to collapse the regime\'s heavy industry; ______, they crippled its commercial aviation sector. ______, economic isolation alone is unlikely to force a capitulation.',
        options: [
          'albeit / That is to say',
          'on the contrary / All things considered',
          'inasmuch as / By the same token',
          'be that as it may / In contrast'
        ],
        correctAnswer: 'on the contrary / All things considered',
        explanation: '"on the contrary" introduces a contrasting, opposite reality; "All things considered" introduces a balanced, concluding evaluation.',
        instructions: 'Choose the most appropriate advanced discourse markers.'
      },
      {
        id: 'l6-u16',
        title: 'Complex Word Formation: Prefixes and Suffixes',
        category: 'word_formation',
        type: 'multiple-choice',
        prompt: 'The military council warned that spreading unverified online rumours was profoundly ______ and would contribute to the rapid ______ of social order.',
        options: [
          'counter-productive / de-stabilisation',
          'anti-productive / un-stabilisation',
          'sub-productive / dis-stabilisation',
          'pseudo-productive / non-stabilisation'
        ],
        correctAnswer: 'counter-productive / de-stabilisation',
        explanation: 'Prefix "counter-" forms "counter-productive" (having the opposite of the desired effect); prefix "de-" with suffix "-ation" forms "de-stabilisation".',
        instructions: 'Select the words demonstrating correct morphological affixation.'
      }
    ],
    writing: [
      {
        id: 'l6-w1',
        title: 'Discursive / Argumentative Essay: Globalisation and National Sovereignty',
        type: 'argumentative_essay',
        scenario: 'Write an argumentative essay (220-260 words) evaluating the proposition: "In an era of hyper-globalisation and transnational cyber threats, traditional national sovereignty is an obsolete concept for defence." Present arguments for and against, use contrastive connectors, negative inversion, and articulate a balanced conclusion.',
        targetWordCount: '220-260 words',
        requiredElements: [
          'Compelling academic thesis statement in the introduction',
          'Arguments affirming that globalisation erodes traditional boundaries (cyber warfare, economic interdependence, climate security)',
          'Counterarguments defending the enduring necessity of sovereign statehood and territorial borders',
          'Grammatical inversion and advanced discourse markers (Albeit, Nevertheless, Under no circumstances)',
          'Nuanced conclusion proposing integrated multilateralism'
        ],
        modelAnswer: 'Few debates in contemporary strategic affairs are as contentious as the viability of national sovereignty in an interconnected world. Advocates of post-national security contend that hyper-globalisation has rendered traditional Westphalian borders archaic. In an age dominated by transnational cyber warfare, orbital espionage, and borderless environmental crises, no sovereign state—regardless of its military might—can unilaterally insulate its citizens. Critical subsea communication cables and financial clearing systems operate across global commons; under no circumstances can individual nations defend these assets without multilateral pacts like NATO.\n\nNevertheless, dismissing sovereign statehood as obsolete constitutes a profound strategic error. When systemic international crises erupt—exemplified by global pandemics, energy embargoes, or kinetic territorial incursions—it is sovereign nation-states, not international bodies, that mobilise armed forces, deploy emergency logistics, and command the legitimate loyalty of citizens. International organisations possess neither independent armies nor taxing authorities; their effectiveness depends entirely upon the political will of sovereign capitals.\n\nAll things considered, national sovereignty has not become obsolete; rather, it has evolved into what scholars term "shared sovereignty." In our volatile century, genuine security requires nations to project robust domestic resilience while simultaneously participating in multilateral coalitions. True national sovereignty is not preserved through splendid isolation, but through principled, interoperable partnerships.',
        usefulPhrases: [
          'Few debates in contemporary strategic affairs are as contentious as...',
          'Under no circumstances can individual nations defend these assets without...',
          'Dismissing sovereign statehood as obsolete constitutes a profound strategic error',
          'All things considered, national sovereignty has not become obsolete; rather...',
          'True national sovereignty is not preserved through splendid isolation, but through...'
        ]
      },
      {
        id: 'l6-w2',
        title: 'Data & Chart Interpretation Report: Migration Dynamics and Border Security',
        type: 'sitrep_report',
        scenario: 'Analyze a hypothetical statistical briefing on Transnational Irregular Migration and Border Interdiction. Draft a formal analytical report (200-240 words) for the Joint Staff detailing demographic trends, maritime interdiction rates, resource bottlenecks, and policy recommendations.',
        targetWordCount: '200-240 words',
        requiredElements: [
          'Formal title, reference numbers, and executive summary',
          'Quantitative and qualitative analysis of statistical data trends',
          'Identification of strategic vulnerabilities (surveillance blind spots, asylum processing delays)',
          'Clear, numbered policy recommendations for joint command'
        ],
        modelAnswer: 'EXECUTIVE ANALYTICAL REPORT: TRANSNATIONAL MIGRATION METRICS (Q1-Q3)\nTO: Chief of the Joint Operations Staff\nFROM: Directorate of Intelligence & Border Security\nDATE: 14 October 2026\n\n1. EXECUTIVE SUMMARY\nAnalysis of statistical data over the past three quarters reveals a 34% surge in irregular maritime crossings across the northern maritime corridor. Concurrently, interdiction efficiency by joint naval-coast guard patrols reached 78%, representing a 12% improvement over previous fiscal year benchmarks.\n\n2. STATISTICAL INTERPRETATION & BOTTLENECKS\nQuantitative breakdowns indicate that 62% of displaced persons originate from drought-stricken equatorial zones, confirming that climate disruption serves as a primary driver of migratory flows. While aerial unmanned reconnaissance (UAV) patrols have reduced radar blind spots by 45%, severe logistical bottlenecks persist at littoral processing facilities. Processing wait-times currently average 21 days, straining base supply rations and creating human rights concerns.\n\n3. RECOMMENDATIONS\na. Deploy two additional offshore patrol vessels (OPVs) equipped with thermal night-vision sensors to Sector Bravo.\nb. Establish a joint civil-military processing center to accelerate biometric verification in accordance with international humanitarian law.\nc. Enhance bilateral intelligence sharing with neighbouring maritime authorities to dismantle human-trafficking cartels at source.\n\nColonel Martin Gomez\nDirector of Strategic Border Intelligence',
        usefulPhrases: [
          'Analysis of statistical data over the past three quarters reveals a...',
          'Quantitative breakdowns indicate that climate disruption serves as a primary driver...',
          'Severe logistical bottlenecks persist at littoral processing facilities',
          'In accordance with international humanitarian law',
          'Enhance bilateral intelligence sharing to dismantle criminal networks'
        ]
      },
      {
        id: 'l6-w3',
        title: 'Formal Diplomatic Letter: Bilateral Environmental Disaster Response Cooperation',
        type: 'formal_letter',
        scenario: 'You are the Military Attaché at the Argentine Embassy in London. Draft a formal diplomatic letter (180-220 words) to the British Ministry of Defence requesting information and bilateral exchange on joint military civil protection protocols for environmental disaster response (floods, wildfires, search and rescue).',
        targetWordCount: '180-220 words',
        requiredElements: [
          'Formal diplomatic letterhead, salutation, and references',
          'Statement of purpose citing international environmental and disaster relief frameworks',
          'Specific areas of desired technical information (airlift logistics, satellite imagery sharing, UAV search protocols)',
          'Diplomatic closing formula and formal signature'
        ],
        modelAnswer: 'EMBASSY OF THE ARGENTINE REPUBLIC\nOFFICE OF THE DEFENCE ATTACHÉ\nLONDON, UNITED KINGDOM\n\n12 November 2026\n\nTo: The Director of International Security Cooperation\nMinistry of Defence, Whitehall, London SW1A 2HB\n\nExcellency,\n\nI have the honour to address you on behalf of the Argentine Armed Forces regarding bilateral cooperation in environmental emergency response and disaster mitigation.\n\nIn view of the escalating frequency of catastrophic climate events globally, our Joint Staff is currently revising its civil protection doctrine. Knowing the extensive expertise of Her Majesty\'s Armed Forces in coordinated flood relief, wildfire interdiction, and humanitarian airlift logistics, we would be deeply grateful to receive informational documentation concerning your specialized CIMIC (Civil-Military Cooperation) operational procedures.\n\nFurthermore, we would welcome the opportunity to explore bilateral staff talks in Buenos Aires or London with a view to conducting tabletop simulations on remote search-and-rescue coordination and real-time satellite imagery sharing.\n\nPlease accept, Excellency, the assurances of my highest consideration and esteem.\n\nBrigadier General Fernando Morales\nDefence and Military Attaché\nArgentine Embassy to the Court of St. James\'s',
        usefulPhrases: [
          'I have the honour to address you on behalf of...',
          'In view of the escalating frequency of catastrophic climate events...',
          'Knowing the extensive expertise of your armed forces in...',
          'With a view to conducting tabletop simulations on...',
          'Please accept, Excellency, the assurances of my highest consideration and esteem'
        ]
      },
      {
        id: 'l6-w4',
        title: 'Critical Opinion Article / Review: Modern Warfare, Ethics & Moral Injury in Cinema and Literature',
        type: 'form',
        scenario: 'Draft a cultural and philosophical review (200-240 words) for a military journal evaluating how modern cinema or literature portrays the psychological and moral trauma of contemporary asymmetric warfare (PTSD, drone strikes, civilian dilemmas).',
        targetWordCount: '200-240 words',
        requiredElements: [
          'Engaging critical title and cultural hook',
          'Analysis of specific artistic works or themes (remote warfare, moral injury, bystander trauma)',
          'Examination of symbolic motifs and ethical questions',
          'Concluding perspective on the human condition in warfare'
        ],
        modelAnswer: 'BEYOND KINETIC VICTORY: THE SHADOW OF MORAL INJURY IN MODERN WARFARE ART\n\nFor decades, mainstream cinema celebrated warfare through unambiguous narratives of martial heroism. However, contemporary literature and film have pivoted toward a far darker and more honest frontier: the agonizing realm of moral injury. Unlike physical wounds, which heal with medical intervention, moral trauma strikes at the soul of the combatant, leaving scars that defy conventional treatment.\n\nNowhere is this modern dilemma portrayed with greater psychological precision than in recent cinematic works examining unmanned aerial warfare. In films like Eye in the Sky, the sanitized veneer of remote combat—conducted by pilots sitting thousands of miles away in climate-controlled shipping containers—is shattered. By forcing viewers to witness the ethical paralysis of launching a strike that guarantees civilian collateral damage to neutralize suicide bombers, the art forces society to confront the cost of utilitarian decisions.\n\nWhat these works poignantly demonstrate is that technological detachment does not immunize the human conscience against horror. The recurring symbolic motifs of trembling hands, sterile computer monitors juxtaposed against vibrant market squares, and lingering silence remind us that soldiers are not moral automata. As armed forces navigate automated warfare, literature and art remain our most indispensable ethical compass, preserving the humanity of those who bear arms in our name.',
        usefulPhrases: [
          'Pivoted toward a far darker and more honest frontier: moral injury',
          'Sanitized veneer of remote combat is shattered',
          'Forces society to confront the cost of utilitarian decisions',
          'Technological detachment does not immunize the human conscience against horror',
          'Art remains our most indispensable ethical compass'
        ]
      }
    ],
    speaking: [
      {
        id: 'l6-s1',
        title: 'Strategic Keynote Address on Multilateral Security & Interoperability',
        situation: 'Part 2 Presentation: You are addressing the International Staff College symposium in London. Your topic is the evolution of multilateral defence agreements and technological interoperability under persistent hybrid threats.',
        role: 'Senior Argentine Military Representative',
        prompt: 'Deliver a structured 2-minute oral presentation using formal rhetoric, negative inversions, cleft sentences, and nuanced arguments to hold the audience\'s attention.',
        recommendedDuration: '120 seconds',
        modelResponse: 'General Vance, distinguished colleagues, ladies and gentlemen. Never in recent history has the landscape of global peace operations experienced such profound systemic volatility. We have transitioned from traditional peacekeeping—where consented buffer zones provided predictable stability—into an era of complex peace enforcement under persistent asymmetric threat. Not only must contemporary military contingents navigate conventional security guarantees, but they must also confront grey-zone disinformation, cyber vulnerabilities, and extreme resource scarcity.\n\nWhat our combined forces require is neither more rhetoric nor isolated national solutions; what we require is deep doctrinal interoperability and unwavering moral clarity. In the words of our own military tradition, true professional strength lies in adaptability and principled restraint. It is my firm conviction that through collaborative partnerships, rigorous linguistic proficiency, and shared values, our nations will continue to safeguard international peace in this challenging century. Thank you.',
        pronunciationTips: [
          'Articulate with commanding pace and authoritative British or international RP rhythm.',
          'Deliver inverted rhetorical phrases ("Never in recent history...", "Not only must...") with dynamic vocal modulation.',
          'Pause deliberately between major conceptual transitions.'
        ],
        keyVocabulary: ['Systemic volatility', 'Peace enforcement', 'Doctrinal interoperability', 'Principled restraint', 'Moral clarity', 'Asymmetric threat']
      },
      {
        id: 'l6-s2',
        title: 'Comparative Monologue: Governance Systems & Constitutional Law in the Anglophone World',
        situation: 'Part 1 Structured Monologue: Examiners ask you to compare how executive authority, legislative power, and justice are balanced between the British Westminster model and the US Presidential republic.',
        role: 'Examinee / Senior Officer',
        prompt: 'Deliver a 90-120 second comparison highlighting the presence or absence of a codified constitution, parliamentary supremacy vs checks-and-balances, and Common Law judicial traditions.',
        recommendedDuration: '90-120 seconds',
        modelResponse: 'When comparing political and legal frameworks in the English-speaking world, one must appreciate the stark contrast between the British Westminster parliament and the American constitutional republic. In the United Kingdom, executive power is intrinsically bound to parliamentary confidence. There is no single codified written constitution; instead, constitutional law evolves through historic statutes, royal conventions, and common law precedents. Parliament possesses legislative supremacy, meaning no judicial court can strike down an act of parliament.\n\nIn sharp contrast, the United States was deliberately constructed upon a rigid constitutional document featuring strict separation of powers. The President serves as both head of state and head of government, independent of Congress, while the Supreme Court exercises profound judicial review, capable of invalidating both executive orders and congressional legislation. Yet, both nations share the Common Law adversarial tradition, where judicial precedent and juries protect individual liberties. For military leaders, understanding these distinct legal cultures is vital when navigating multinational agreements and coalition rules of engagement.',
        pronunciationTips: [
          'Pronounce "sovereignty" /ˈsɒvrənti/ and "adversarial" /ˌædvəˈseəriəl/.',
          'Use contrastive inflection when transitioning: "In sharp contrast...", "Yet, both nations share...".',
          'Maintain a measured, scholarly delivery.'
        ],
        keyVocabulary: ['Parliamentary confidence', 'Codified written constitution', 'Legislative supremacy', 'Separation of powers', 'Judicial review', 'Adversarial tradition']
      },
      {
        id: 'l6-s3',
        title: 'Collaborative Discussion & Diplomatic Negotiation: Environment vs Economic Growth',
        situation: 'Part 3 Collaborative Discussion: You and a partner (an Allied liaison officer) must debate how international organisations should balance environmental conservation goals with the urgent economic development of developing nations.',
        role: 'Diplomatic Military Representative',
        prompt: 'Exchange views, formulate polite queries, put forward balanced arguments, concede points diplomatically, and synthesize shared conclusions.',
        recommendedDuration: '90-120 seconds',
        modelResponse: 'Major, when we examine international treaties on carbon neutrality, it seems clear that imposing identical emission restrictions on developing economies creates severe economic hardship. Wouldn\'t you agree that developed nations, having industrialized on fossil fuels for two centuries, should shoulder a greater financial burden? — I certainly concede that historical emissions justify substantial green technology transfers. However, if emerging economies continue expanding coal infrastructure without environmental safeguards, global climate targets will be irrevocably compromised. How do you propose we bridge this divide? — From my perspective, the answer lies in subsidized renewable energy investments and debt-for-nature swaps. Rather than punitive trade sanctions, multinational organizations like the UN and World Bank must provide low-interest financing for solar and hydroelectric infrastructure. — That is an exceptionally sound proposal. In fact, environmental degradation directly threatens military bases and water supplies worldwide. Conceding technological assistance today prevents resource conflicts tomorrow. — Exactly. Sustainable ecological security is the true foundation of global stability.',
        pronunciationTips: [
          'Sound collaborative and diplomatic: "Wouldn\'t you agree that...?", "I certainly concede that...", "That is an exceptionally sound proposal".',
          'Modulate tone to express polite inquiry and consensus-building.',
          'Pronounce "sovereignty" and "hydroelectric" /ˌhaɪdrəʊɪˈlektrɪk/ accurately.'
        ],
        keyVocabulary: ['Shoulder a greater financial burden', 'I certainly concede that', 'Debt-for-nature swaps', 'Bridge this divide', 'Resource conflicts', 'Ecological security']
      },
      {
        id: 'l6-s4',
        title: 'Technical Presentation & Ethical Briefing: Autonomous AI and Future Warfare',
        situation: 'Part 2 Presentation: You are briefing a joint defense committee on the tactical benefits and grave ethical perils of Lethal Autonomous Weapon Systems (LAWS) and artificial intelligence on the battlefield.',
        role: 'Director of Emerging Defence Technologies',
        prompt: 'Deliver a structured 90-120 second technical briefing explaining how autonomous algorithms operate, evaluating ethical accountability under the Geneva Conventions, and recommending governance standards.',
        recommendedDuration: '90-120 seconds',
        modelResponse: 'Distinguished members of the defense committee. Today, we stand on the precipice of a revolution in military affairs driven by artificial intelligence and autonomous robotics. On one hand, algorithmic target recognition and hypersonic autonomous swarms offer unprecedented response velocity, capable of intercepting incoming missiles far faster than human biological reflexes allow. On the battlefield, these systems can dramatically reduce friendly casualties by replacing soldiers in hazardous reconnaissance missions.\n\nOn the other hand, the deployment of lethal autonomous weapons devoid of human oversight introduces catastrophic moral dilemmas. Under international humanitarian law, decisions regarding lethal force require the exercise of human judgment, proportionality, and ethical empathy. Algorithms, no matter how sophisticated their neural networks, cannot comprehend the tragic value of human life or experience moral remorse. Were an autonomous drone to commit a war crime, who would bear legal accountability: the programmer, the commanding officer, or the manufacturer? Therefore, it is imperative that our armed forces mandate that a human commander always remain firmly in the decision-making loop. Technology must serve our values, not usurp our humanity.',
        pronunciationTips: [
          'Deliver with solemn ethical conviction and precise technical enunciation.',
          'Pronounce "autonomous" /ɔːˈtɒnəməs/ and "algorithm" /ˈælɡərɪðəm/.',
          'Use rhetorical questioning effectively: "Were an autonomous drone to commit a war crime, who would bear accountability?".'
        ],
        keyVocabulary: ['Lethal autonomous weapons', 'Algorithmic target recognition', 'Unprecedented velocity', 'Devoid of human oversight', 'Proportionality and ethical empathy', 'Human in the loop']
      },
      {
        id: 'l6-s5',
        title: 'Personal Monologue: Evoking Memories, the Human Condition, and Holistic Wellbeing',
        situation: 'Part 1 Reflective Monologue: The examiners invite you to reflect on a past professional deployment, personal adversity, and how you cultivate psychological resilience through physical discipline, literature, and holistic wellbeing.',
        role: 'Candidate / Seasoned Military Leader',
        prompt: 'Deliver a reflective 90-120 second monologue using narrative tenses, unreal past ("I wish I had...", "It is high time"), idiomatic expressions, and personal reflections on mind, body, and spirit.',
        recommendedDuration: '90-120 seconds',
        modelResponse: 'Looking back on my early peacekeeping deployment to the Balkans fifteen years ago, I can vividly recall the profound psychological disorientation our unit experienced. We were young, rigorously trained in conventional tactics, but entirely unprepared for the harrowing emotional toll of human suffering. In those days, military culture demanded unbroken stoicism; we used to bottle up our fears, pretending that exhaustion was merely a temporary physical inconvenience.\n\nIf I had possessed then the emotional wisdom I have today, I would have paid far greater attention to the mental wellbeing of my subordinates. Over the years, I have learned that true strength is holistic—it requires harmony between mind, body, and spirit. Today, I maintain my psychological equilibrium through daily mindfulness meditation, rigorous distance running, and reading classical literature. Literature, in particular, reminds us that the struggle against despair is a universal human trial. It is high time we destigmatised mental health across all ranks of the armed forces. An officer who understands their own vulnerabilities is incomparably better equipped to lead others with compassion, decisiveness, and honor.',
        pronunciationTips: [
          'Adopt an introspective, sincere, and dignified vocal tone.',
          'Pronounce "stoicism" /ˈstəʊɪsɪzəm/ and "vulnerabilities" /ˌvʌlnərəˈbɪlətiz/.',
          'Use natural pauses when evoking past memories: "Looking back...", "In those days...", "Over the years...".'
        ],
        keyVocabulary: ['Looking back on my early deployment', 'Emotional toll of human suffering', 'Unbroken stoicism', 'Bottle up our fears', 'Harmony between mind, body, and spirit', 'Destigmatised mental health']
      }
    ]
  }
];
