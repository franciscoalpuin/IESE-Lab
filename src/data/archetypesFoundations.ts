import { ArchetypeExerciseData } from './daily120PlanData';

export const FOUNDATIONS_ARCHETYPES_PART1: ArchetypeExerciseData[] = [
  // DÍA 1: El Abecedario Normal en Inglés (A-Z) y Deletreo
  {
    title: 'El Abecedario Normal en Inglés (A-Z) & Deletreo de Nombres',
    theme: 'Alfabeto Estándar, Sonidos de las Letras y Deletreo Personal',
    objective: 'Pronunciar el abecedario de la A a la Z, deletrear nombres propios, apellidos, matrículas y correos electrónicos según el programa del IESE.',
    vocabulary: [
      { term: 'Alphabet', translation: 'Abecedario / Alfabeto', ipa: '/ˈæl.fə.bet/', spanishPhonetic: 'ál-fa-bet', example: 'The English alphabet has twenty-six letters.' },
      { term: 'Spell', translation: 'Deletrear', ipa: '/spel/', spanishPhonetic: 'spel', example: 'Could you spell your surname, please?' },
      { term: 'Vowel', translation: 'Vocal', ipa: '/ˈvaʊ.əl/', spanishPhonetic: 'váu-el', example: 'The vowels in English are A, E, I, O, U.' },
      { term: 'Consonant', translation: 'Consonante', ipa: '/ˈkɒn.sə.nənt/', spanishPhonetic: 'kón-so-nant', example: 'The letter B is a consonant.' },
      { term: 'Full stop / Dot', translation: 'Punto (ortográfico / en internet)', ipa: '/fʊl stɒp/', spanishPhonetic: 'ful stop / dot', example: 'In email addresses, we say dot-com.' }
    ],
    grammar: {
      title: 'Imperativos de Instrucción & Pronombres Personales Sujeto',
      formula: 'Instrucción: [Base Verbal] + please | Pregunta: Could you spell [object], please?',
      rule: 'Para pedir que deletreen se usa "Could you spell your name, please?". Para responder se enuncian las letras en mayúscula separadas por pausas: "Yes, it is G-A-R-C-I-A".',
      tacticalTip: 'Recuerda que en inglés la letra "E" suena /iː/ (como la "i" en español) y la "I" suena /aɪ/ (como "ái").'
    },
    phonetics: {
      targetSound: 'Vocales del alfabeto inglés: A /eɪ/, E /iː/, I /aɪ/, O /əʊ/, U /juː/',
      articulatoryTip: 'Distingue claramente la letra A ("éi"), la letra E ("i") y la letra I ("ái").',
      spanishPhonetic: 'A=éi, E=i, I=ái',
      practiceWords: [
        { word: 'Name', spanishPhonetic: 'néim', translation: 'nombre' },
        { word: 'Letter', spanishPhonetic: 'lé-ter', translation: 'letra' },
        { word: 'Spell', spanishPhonetic: 'spel', translation: 'deletrear' }
      ]
    },
    usefulPhrase: {
      phrase: 'Could you spell your first name and surname for me, please? — Yes, of course. It is J-O-H-N S-M-I-T-H.',
      translation: '¿Podría deletrearme su nombre y apellido, por favor? — Sí, por supuesto. Es J-O-H-N S-M-I-T-H.',
      spanishPhonetic: 'Kud iu spel iur ferst néim and sér-neim for mi, plis? — Ies, of kors. It is Dshon Smit.',
      tacticalUsage: 'Identificación inicial y registro obligatorio de visitantes y personal en accesos y recepciones.'
    },
    listening: {
      title: 'Deletreo de Identidad en Registro de Llegada',
      script: 'Good morning. Welcome to the headquarters. May I have your name, please? — Good morning. My name is Captain David Evans. — Could you spell your surname, Captain? — Yes, it is E-V-A-N-S. Echo, Victor, Alfa, November, Sierra in phonetic, or simply E-V-A-N-S.',
      question: {
        question: 'How does Captain Evans spell his surname?',
        options: ['E-V-A-N-S', 'E-V-E-N-S', 'I-V-A-N-S', 'E-B-A-N-S'],
        correctIndex: 0,
        explanation: 'Captain Evans clearly spells: E-V-A-N-S.'
      }
    },
    reading: {
      title: 'Ficha de Registro e Inscripción Básica (Personal Data Form)',
      snippet: 'When arriving at an international military or civilian course, every student must complete the Registration Form. You must write your First Name, Surname, Date of Birth, and Email Address clearly in capital letters. If the receptionist does not understand your handwriting, you must spell your name out loud letter by letter.',
      question: {
        question: 'What must a student do if the receptionist cannot read their handwriting?',
        options: [
          'Leave the course immediately',
          'Spell their name out loud letter by letter',
          'Call their commanding officer',
          'Sign a new passport'
        ],
        correctIndex: 1,
        explanation: 'The text specifies: "you must spell your name out loud letter by letter".'
      }
    },
    useOfLanguage: {
      title: 'Identificación de Letras y Deletreo Correcto',
      prompt: 'Elige la opción correcta para solicitar cortésmente el deletreo de un apellido:',
      question: {
        question: 'Which is the most polite and grammatically correct question to ask someone to spell their surname?',
        options: [
          'Spell you surname now.',
          'Could you spell your surname, please?',
          'How is spelling your name?',
          'You are spelling your name please.'
        ],
        correctIndex: 1,
        explanation: '"Could you spell your surname, please?" is the standard polite request in British English.'
      }
    },
    writing: {
      title: 'Mensaje de Presentación y Deletreo Personal',
      scenario: 'Escribe un mensaje formal presentándote ante el oficial de enlace. Indica tu nombre, tu apellido y su deletreo exacto letra por letra.',
      targetWordCount: '25-35 palabras',
      requiredElements: ['Saludo formal', 'Nombre completo', 'Fórmula de deletreo "It is spelled..."', 'Despedida'],
      modelAnswer: 'Good morning, Sir. My name is Martin Gomez. My surname is spelled G-O-M-E-Z. I am pleased to join the international training programme. Best regards.'
    },
    speaking: {
      title: 'Deletreo Oral de Nombre y Apellido',
      scenario: 'Pronuncia en voz alta tu nombre de pila y tu apellido deletreando cada letra con dicción británica limpia.',
      recommendedDuration: '20 segundos',
      pronunciationTips: ['Haz una micropausa entre cada letra.', 'Pronuncia con claridad las vocales A /eɪ/, E /iː/, I /aɪ/.', 'No agregues vocales al inicio de la S.'],
      modelResponse: 'Good morning. My first name is Carlos, spelled C-A-R-L-O-S, and my surname is Romero, spelled R-O-M-E-R-O.'
    }
  },

  // DÍA 2: Números del 1 al 20, Contar Objetos & Operaciones Matemáticas (Sumar y Restar)
  {
    title: 'Números 1-20, Contar Objetos & Sumar y Restar (+, -, =)',
    theme: 'Números Cardinales Básicos y Operaciones Matemáticas en la Vida Diaria',
    objective: 'Dominar los números del 1 al 20, contar elementos, y expresar operaciones de suma (plus / add) y resta (minus / subtract) en inglés.',
    vocabulary: [
      { term: 'Plus (+)', translation: 'Más (adición)', ipa: '/plʌs/', spanishPhonetic: 'plas', example: 'Eight plus four equals twelve (8 + 4 = 12).' },
      { term: 'Minus (-)', translation: 'Menos (sustracción)', ipa: '/ˈmaɪ.nəs/', spanishPhonetic: 'mái-nas', example: 'Twenty minus seven is thirteen (20 - 7 = 13).' },
      { term: 'Equals (=)', translation: 'Es igual a', ipa: '/ˈiː.kwəlz/', spanishPhonetic: 'í-kualz', example: 'Ten plus five equals fifteen.' },
      { term: 'Count', translation: 'Contar', ipa: '/kaʊnt/', spanishPhonetic: 'kaunt', example: 'Please count the radios in the storage room.' },
      { term: 'Total', translation: 'Total', ipa: '/ˈtəʊ.təl/', spanishPhonetic: 'tóu-tal', example: 'The total number of soldiers is eighteen.' }
    ],
    grammar: {
      title: 'Fórmulas Matemáticas de Suma y Resta en Inglés',
      formula: 'Suma: [Number] plus [Number] equals [Result] | Resta: [Number] minus [Number] is [Result]',
      rule: 'En inglés oral, para sumar se dice "plus" (o "and"): 5 + 3 = 8 se lee "Five plus three is eight" (o "equals eight"). Para restar se usa "minus": 15 - 5 = 10 se lee "Fifteen minus five equals ten".',
      tacticalTip: 'Observa la ortografía de "twelve" (12) y "fifteen" (15). El número 15 se escribe fifteen, nunca fiveteen.'
    },
    phonetics: {
      targetSound: 'Sonido /θ/ interdental en Three, Thirteen y /v/ en Five, Twelve, Seven',
      articulatoryTip: 'Para "three" saca la punta de la lengua entre los dientes sin morder. Para "five" y "twelve" muerde suavemente el labio inferior.',
      spanishPhonetic: 'zri, faiv, tuelv',
      practiceWords: [
        { word: 'Three', spanishPhonetic: 'zri', translation: 'tres' },
        { word: 'Twelve', spanishPhonetic: 'tuelv', translation: 'doce' },
        { word: 'Fifteen', spanishPhonetic: 'fif-tín', translation: 'quince' }
      ]
    },
    usefulPhrase: {
      phrase: 'How many items do we have? — We have eight boxes plus seven spare kits, so the total is fifteen.',
      translation: '¿Cuántos artículos tenemos? — Tenemos ocho cajas más siete equipos de repuesto, por lo que el total es quince.',
      spanishPhonetic: 'Jau méni áitems du wi jav? — Wi jav éit bókses plas séven sper kits, sou de tóutal is fif-tín.',
      tacticalUsage: 'Control diario de inventario y recuento de víveres o efectivos en formación.'
    },
    listening: {
      title: 'Inventario Rápido de Suministros (Suma y Resta)',
      script: 'Corporal, check our supply boxes immediately. How many medical kits do we have? — Sergeant, we started with eighteen kits. Three kits were used yesterday during training. So eighteen minus three equals fifteen kits remaining. — Excellent. Add five new kits from the depot: fifteen plus five equals twenty. We are at full capacity.',
      question: {
        question: 'How many kits remained after deducting the three used kits?',
        options: ['Fifteen (15)', 'Twelve (12)', 'Twenty (20)', 'Eighteen (18)'],
        correctIndex: 0,
        explanation: '18 minus 3 equals 15 kits remaining.'
      }
    },
    reading: {
      title: 'Reporte Matemático Diario: Recuento de Vehículos',
      snippet: 'In the motor transport compound, there are currently sixteen utility vehicles. Four vehicles are currently undergoing maintenance in the workshop, which means sixteen minus four equals twelve vehicles ready for duty. Tomorrow morning, three replacement trucks will arrive, bringing the total operational fleet to twelve plus three, which equals fifteen vehicles.',
      question: {
        question: 'What is the calculation for ready vehicles in the compound?',
        options: [
          'Sixteen minus four equals twelve (16 - 4 = 12)',
          'Sixteen plus four equals twenty',
          'Ten minus two equals eight',
          'Twelve times two equals twenty-four'
        ],
        correctIndex: 0,
        explanation: 'The text clearly states: "sixteen minus four equals twelve vehicles ready for duty".'
      }
    },
    useOfLanguage: {
      title: 'Operaciones Matemáticas Básicas en Inglés',
      prompt: 'Completa la operación matemática con la palabra correcta:',
      question: {
        question: 'Complete the sentence: "Seven _____ eight equals fifteen."',
        options: ['minus', 'plus', 'divided', 'times of'],
        correctIndex: 1,
        explanation: '7 + 8 = 15, therefore "plus" is the correct word.'
      }
    },
    writing: {
      title: 'Redacción de un Balance Matemático Simple',
      scenario: 'Escribe un breve reporte sobre las raciones de comida: tienes 14 raciones, consumes 4 en el almuerzo y recibes 6 raciones nuevas. Expresa el cálculo en inglés.',
      targetWordCount: '25-35 palabras',
      requiredElements: ['Cantidad inicial (14)', 'Resta de 4 raciones', 'Suma de 6 nuevas raciones', 'Total final (16)'],
      modelAnswer: 'We currently have fourteen rations. Fourteen minus four equals ten rations after lunch. Then, ten plus six equals sixteen rations in total. All supplies are accounted for.'
    },
    speaking: {
      title: 'Lectura Oral de Suma y Resta',
      scenario: 'Lee en voz alta las dos operaciones matemáticas en inglés con buena pronunciación.',
      recommendedDuration: '20 segundos',
      pronunciationTips: ['Pronuncia /plʌs/ con sonido "a" relajado.', 'Pronuncia "equals" como /ˈiːkwəlz/.', 'Distingue fourteen (14) y fifteen (15).'],
      modelResponse: 'Ten plus nine equals nineteen. Twenty minus eight equals twelve.'
    }
  },

  // DÍA 3: Números del 21 al 100, Precios, Cantidades & Diferenciación "-teen" vs "-ty"
  {
    title: 'Números 21-100, Precios (£, $, €) & Contraste "-teen" vs "-ty"',
    theme: 'Números hasta 100, Compras y Diferenciación Fonética Crucial',
    objective: 'Dominar números del 21 al 100, preguntar precios de compras cotidianas y evitar la clásica confusión auditiva entre -teen (13-19) y -ty (20-90).',
    vocabulary: [
      { term: 'Twenty / Thirty / Forty / Fifty', translation: '20 / 30 / 40 / 50', ipa: '/ˈtwen.ti/ /ˈθɜː.ti/ /ˈfɔː.ti/ /ˈfɪf.ti/', spanishPhonetic: 'tuénti / zérti / fórti / fífti', example: 'The book costs thirty pounds.' },
      { term: 'One hundred', translation: 'Cien (100)', ipa: '/wʌn ˈhʌn.drəd/', spanishPhonetic: 'uán ján-dred', example: 'There are one hundred soldiers in the company.' },
      { term: 'Price / Cost', translation: 'Precio / Costo', ipa: '/praɪs/ /kɒst/', spanishPhonetic: 'práis / kost', example: 'What is the price of this dictionary?' },
      { term: 'Pound (£) / Pence (p)', translation: 'Libra esterlina / Penique', ipa: '/paʊnd/ /pens/', spanishPhonetic: 'páund / pens', example: 'A cup of tea is two pounds and fifty pence (£2.50).' },
      { term: 'How much', translation: 'Cuánto cuesta / Cuánto', ipa: '/haʊ mʌtʃ/', spanishPhonetic: 'jau mach', example: 'How much are these warm gloves?' }
    ],
    grammar: {
      title: 'Preguntar y Responder Precios en la Vida Diaria',
      formula: 'Pregunta singular: How much is [item]? — It is [price] | Plural: How much are [items]? — They are [price]',
      rule: 'Para precios en inglés británico se dice la moneda y luego los peniques: "£45.50" se lee "Forty-five pounds fifty". Guiones en números compuestos: twenty-one (21), seventy-eight (78).',
      tacticalTip: 'Acentuación: 14 (fourTEEN - acento agudo en la última sílaba) vs 40 (FORty - acento en la primera sílaba).'
    },
    phonetics: {
      targetSound: 'Acentuación contrastiva: thirTEEN vs THIRty, fifTEEN vs FIFty',
      articulatoryTip: 'En -TEEN la voz sube de tono al final. En -TY la voz cae rápidamente al inicio.',
      spanishPhonetic: 'zer-TÍN vs ZÉR-ti',
      practiceWords: [
        { word: 'Thirteen', spanishPhonetic: 'zer-TÍN (13)', translation: 'trece' },
        { word: 'Thirty', spanishPhonetic: 'ZÉR-ti (30)', translation: 'treinta' },
        { word: 'Fifty', spanishPhonetic: 'FÍF-ti (50)', translation: 'cincuenta' }
      ]
    },
    usefulPhrase: {
      phrase: 'Excuse me, how much is this military field jacket? — It is seventy-five pounds (£75).',
      translation: 'Disculpe, ¿cuánto cuesta esta campera militar de campo? — Cuesta setenta y cinco libras (£75).',
      spanishPhonetic: 'Eks-kiús mi, jau mach is dis mí-li-ta-ri fild dshá-ket? — It is sé-ven-ti-faiv páunds.',
      tacticalUsage: 'Compras personales de equipo, vestimenta y artículos de primera necesidad en comercios civiles y cantina.'
    },
    listening: {
      title: 'Preguntando Precios en la Cantina Militar',
      script: 'Good afternoon. Can I help you? — Yes, please. How much is the military English grammar book? — It is fourteen pounds (£14). — And how much is the tactical backpack on the shelf? — That backpack is forty pounds (£40). — I will take the book for fourteen pounds, please. Here is twenty pounds. — Thank you, here is six pounds change.',
      question: {
        question: 'How much does the tactical backpack cost?',
        options: ['Forty pounds (£40)', 'Fourteen pounds (£14)', 'Fifty pounds (£50)', 'Four pounds (£4)'],
        correctIndex: 0,
        explanation: 'The backpack costs forty pounds (£40), while the grammar book is fourteen pounds (£14).'
      }
    },
    reading: {
      title: 'Lista de Precios del Almacén de Guarnición',
      snippet: 'Items for personal purchase at the garrison shop: Running shoes are fifty pounds (£50). A pair of warm socks is four pounds fifty (£4.50). Tactical water flasks are fifteen pounds (£15). If you buy one flask and one pair of running shoes, fifty plus fifteen equals sixty-five pounds (£65) total.',
      question: {
        question: 'What is the total price for the shoes and the water flask?',
        options: [
          'Sixty-five pounds (£65)',
          'Fifty-five pounds (£55)',
          'Seventy pounds (£70)',
          'Forty-five pounds (£45)'
        ],
        correctIndex: 0,
        explanation: '50 + 15 = 65 pounds.'
      }
    },
    useOfLanguage: {
      title: 'Diferenciación de Números y Estructura de Precios',
      prompt: 'Elige la opción que responde correctamente a "How much are these two notebooks?":',
      question: {
        question: 'Choose the correct grammatical response:',
        options: [
          'They is eight pounds.',
          'They are eight pounds.',
          'It is eight pound.',
          'Are eight pounds total.'
        ],
        correctIndex: 1,
        explanation: 'For plural items ("these two notebooks"), we use "They are eight pounds".'
      }
    },
    writing: {
      title: 'Redacción de una Lista de Compras con Precios',
      scenario: 'Escribe un breve correo a un compañero pidiéndole que te compre tres artículos en la tienda del pueblo (un libro por £15, un bolígrafo por £3 y una linterna por £20) y calcula el total.',
      targetWordCount: '30-45 palabras',
      requiredElements: ['Saludo al compañero', 'Los 3 artículos con sus precios en palabras', 'Cálculo del total (15 + 3 + 20 = 38)', 'Despedida cordial'],
      modelAnswer: 'Hi Lucas, could you please buy these items for me at the town shop: one book for fifteen pounds, a pen for three pounds, and a torch for twenty pounds? The total is thirty-eight pounds. Thanks!'
    },
    speaking: {
      title: 'Práctica Oral de Números Conflictivos (-teen vs -ty)',
      scenario: 'Pronuncia claramente los pares contrastivos enfatizando el acento de cada número.',
      recommendedDuration: '25 segundos',
      pronunciationTips: ['Acento en la segunda sílaba para thirTEEN, fourTEEN, fifTEEN.', 'Acento en la primera sílaba para THIRty, FORty, FIFty.', 'Dicción limpia sin titubeos.'],
      modelResponse: 'Thirteen and thirty. Fourteen and forty. Fifteen and fifty. The jacket is fifty pounds, not fifteen pounds.'
    }
  },

  // DÍA 4: Horario Civil (12 horas) y Horario Militar (24 horas)
  {
    title: 'Horario Civil (12 Horas con AM/PM) & Horario Militar (24 Horas)',
    theme: 'Decir la Hora en la Vida Cotidiana y en Procedimientos Operacionales',
    objective: 'Decir y comprender la hora con precisión británica cotidiana (o\'clock, half past, quarter to/past) y su correspondencia exacta con el formato militar de 24 horas (0800, 1430, 2100).',
    vocabulary: [
      { term: 'O\'clock', translation: 'En punto', ipa: '/əˈklɒk/', spanishPhonetic: 'e-klok', example: 'The morning parade is at eight o\'clock (0800 hrs).' },
      { term: 'Half past', translation: 'Y media', ipa: '/hɑːf pɑːst/', spanishPhonetic: 'jaf past', example: 'Lunch is served at half past twelve (1230 hrs).' },
      { term: 'Quarter past / to', translation: 'Y cuarto / Menos cuarto', ipa: '/ˈkwɔː.tər pɑːst / tuː/', spanishPhonetic: 'kuór-ter past / tu', example: 'Quarter past nine (0915) and quarter to ten (0945).' },
      { term: 'Midday / Midnight', translation: 'Mediodía / Medianoche', ipa: '/ˌmɪdˈdeɪ/ /ˈmɪd.naɪt/', spanishPhonetic: 'mid-dei / mid-nait', example: 'The briefing starts at midday (1200 hrs).' },
      { term: 'Hundred hours', translation: 'Horas (en formato militar 24h)', ipa: '/ˈhʌn.drəd aʊəz/', spanishPhonetic: 'ján-dred áu-erz', example: 'Report to headquarters at fourteen-hundred hours (1400 hrs).' }
    ],
    grammar: {
      title: 'Preposiciones de Tiempo para Horas y Formatos Horarios',
      formula: 'Horas: AT + [time] | Civil: It is [minutes] past/to [hour] | Militar: [Hour in 24h] hours',
      rule: 'En inglés civil se dicen los minutos antes de la hora: 7:15 = "quarter past seven"; 6:50 = "ten to seven". En horario militar se lee de dos en dos dígitos: 0730 = "zero-seven-thirty hours", 1500 = "fifteen-hundred hours". La preposición es siempre AT: "at 0800 hours", "at half past seven".',
      tacticalTip: 'Nunca digas "at the 8 o\'clock". Se dice directamente "at eight o\'clock".'
    },
    phonetics: {
      targetSound: 'Vocal larga /ɑː/ en Half past y /ɔː/ en Quarter, O\'clock',
      articulatoryTip: 'En "half past" la L es completamente muda: pronuncia /hɑːf pɑːst/.',
      spanishPhonetic: 'jaf past, kuór-ter',
      practiceWords: [
        { word: 'Half past', spanishPhonetic: 'jaf past', translation: 'y media' },
        { word: 'Quarter', spanishPhonetic: 'kuór-ter', translation: 'cuarto' },
        { word: 'Midnight', spanishPhonetic: 'mid-nait', translation: 'medianoche' }
      ]
    },
    usefulPhrase: {
      phrase: 'What time does the training start? — In civilian time it is half past eight (8:30 AM); in military time it is zero-eight-thirty hours (0830 hrs).',
      translation: '¿A qué hora comienza la instrucción? — En horario civil es a las ocho y media (8:30 AM); en horario militar es a las cero-ocho-treinta horas (0830 hrs).',
      spanishPhonetic: 'Uát táim das de tréi-ning start? — In si-ví-li-an táim it is jaf past éit; in mí-li-ta-ri táim it is zí-rou-éit-zér-ti áu-erz.',
      tacticalUsage: 'Coordinación de horarios entre personal militar y autoridades, familias o proveedores civiles.'
    },
    listening: {
      title: 'Sincronización de Horarios para el Despliegue',
      script: 'Attention all personnel. Synchronize watches. The current civilian time is quarter past six in the morning (6:15 AM), which corresponds to zero-six-fifteen hours (0615 hrs). Breakfast is at seven o\'clock (0700 hrs). Physical training begins at quarter to eight (0745 hrs). The main operational briefing will commence promptly at half past nine (0930 hrs). Any questions? Dismissed.',
      question: {
        question: 'What time does physical training start according to the announcement?',
        options: [
          'Quarter to eight / 0745 hrs',
          'Seven o\'clock / 0700 hrs',
          'Quarter past six / 0615 hrs',
          'Half past nine / 0930 hrs'
        ],
        correctIndex: 0,
        explanation: 'The speaker states: "Physical training begins at quarter to eight (0745 hrs)".'
      }
    },
    reading: {
      title: 'Itinerario Diario: Vida en Guarnición y Contacto Civil',
      snippet: 'Daily schedules require dual time comprehension. In military barracks, wake-up call (reveille) is at zero-six-hundred hours (0600 hrs). Soldiers clean their living quarters until half past six (6:30 AM). The civilian bus leaves the front gate at twenty past seven (7:20 AM) for staff living in the city, while the evening guard change occurs at eighteen-thirty hours (6:30 PM).',
      question: {
        question: 'How is 6:30 PM expressed in 24-hour military time in the text?',
        options: [
          'Eighteen-thirty hours (1830 hrs)',
          'Six-thirty hours (0630 hrs)',
          'Sixteen-thirty hours (1630 hrs)',
          'Twenty-hundred hours (2000 hrs)'
        ],
        correctIndex: 0,
        explanation: '6:30 PM in military 24-hour time is eighteen-thirty hours (1830 hrs).'
      }
    },
    useOfLanguage: {
      title: 'Conversión de Formatos Horarios',
      prompt: 'Elige la forma civil británica correcta para la hora 10:15:',
      question: {
        question: 'How do you say 10:15 in British civilian English?',
        options: [
          'Quarter to ten',
          'Quarter past ten',
          'Ten and fifteen',
          'Half past ten'
        ],
        correctIndex: 1,
        explanation: '15 minutes past 10 is expressed as "quarter past ten".'
      }
    },
    writing: {
      title: 'Redacción de un Horario Diario Civil y Militar',
      scenario: 'Escribe un horario breve con tres actividades de tu día indicando la hora en formato civil (half past, quarter to...) y su equivalente militar en 24h (0700, 1200, 1800).',
      targetWordCount: '35-45 palabras',
      requiredElements: ['3 actividades diarias', 'Horas en formato civil (o\'clock, half past, etc.)', 'Horas en formato militar 24h (0700, 1330, etc.)', 'Preposición "at" correctamente utilizada'],
      modelAnswer: 'My daily schedule starts with morning run at seven o\'clock (0700 hrs). I have lunch with colleagues at half past twelve (1230 hrs). Finally, I finish work at quarter to five in the afternoon (1645 hrs).'
    },
    speaking: {
      title: 'Lectura de Horarios en Ambos Formatos',
      scenario: 'Transmite oralmente la hora de salida de dos vehículos usando el formato civil y luego el formato militar.',
      recommendedDuration: '25 segundos',
      pronunciationTips: ['Pronuncia "quarter" sin hacer sonar la R final en acento británico (/ˈkwɔːtə/).', 'Usa entonación descendente clara al dar una hora.', 'Marca con nitidez AM y PM.'],
      modelResponse: 'The first vehicle leaves at quarter past eight in the morning, which is zero-eight-fifteen hours. The second vehicle departs at half past two in the afternoon, which is fourteen-thirty hours.'
    }
  },

  // DÍA 5: Información Personal, Países, Nacionalidades & Verbo TO BE
  {
    title: 'Información Personal, Nacionalidades & Verbo TO BE (am/is/are)',
    theme: 'Presentación Personal, Origen y Datos Biográficos Básicos',
    objective: 'Presentarse a sí mismo y a compañeros, declarar país de procedencia, nacionalidad, edad y profesión utilizando las formas del verbo TO BE.',
    vocabulary: [
      { term: 'Country / Nationality', translation: 'País / Nacionalidad', ipa: '/ˈkʌn.tri/ /ˌnæʃ.ənˈæl.ə.ti/', spanishPhonetic: 'kán-tri / na-sho-ná-li-ti', example: 'Argentina is my country; I am Argentine.' },
      { term: 'Age / Years old', translation: 'Edad / Años de edad', ipa: '/eɪdʒ/ /jɪəz əʊld/', spanishPhonetic: 'éidsh / yíerz óuld', example: 'He is twenty-nine years old.' },
      { term: 'Occupation / Job', translation: 'Ocupación / Profesión', ipa: '/ˌɒk.jəˈpeɪ.ʃən/ /dʒɒb/', spanishPhonetic: 'o-kiu-péi-shon / dshob', example: 'My occupation is communications officer.' },
      { term: 'Single / Married', translation: 'Soltero / Casado', ipa: '/ˈsɪŋ.ɡəl/ /ˈmær.id/', spanishPhonetic: 'sín-gl / má-rid', example: 'Lieutenant Diaz is married with two children.' },
      { term: 'Colleague', translation: 'Colega / Compañero de trabajo', ipa: '/ˈkɒl.iːɡ/', spanishPhonetic: 'kól-iig', example: 'These officers are my colleagues from the engineering unit.' }
    ],
    grammar: {
      title: 'Verbo TO BE: Afirmativo, Negativo e Interrogativo',
      formula: 'I am (I\'m) / You are (You\'re) / He-She-It is (He\'s) / We are (We\'re) / They are (They\'re)',
      rule: 'En inglés la edad se expresa SIEMPRE con el verbo TO BE, nunca con "have": "I am 28 years old" (¡nunca "I have 28 years"!). Para origen: "I am FROM Argentina" o "I am Argentine". Preguntas: "Are you an officer? — Yes, I am / No, I\'m not".',
      tacticalTip: 'Contracciones: usa I\'m, he\'s, she\'s, they\'re en el habla cotidiana para sonar natural.'
    },
    phonetics: {
      targetSound: 'Sonido /z/ vibrante en Is /ɪz/, He\'s /hiːz/, Years /jɪəz/',
      articulatoryTip: 'Haz vibrar las cuerdas vocales al pronunciar la "s" final en "is" y "years", como el zumbido de una abeja.',
      spanishPhonetic: 'iz, yíerz',
      practiceWords: [
        { word: 'He is', spanishPhonetic: 'ji iz', translation: 'él es / está' },
        { word: 'Years old', spanishPhonetic: 'yíerz óuld', translation: 'años de edad' },
        { word: 'Officer', spanishPhonetic: 'ó-fi-ser', translation: 'oficial' }
      ]
    },
    usefulPhrase: {
      phrase: 'Hello, my name is Lieutenant Lucas Rossi. I am twenty-eight years old, I am from Argentina, and I am an infantry officer.',
      translation: 'Hola, mi nombre es Teniente Lucas Rossi. Tengo veintiocho años de edad, soy de Argentina y soy oficial de infantería.',
      spanishPhonetic: 'Je-lóu, mai néim is Lu-té-nant Lú-kas Ró-si. Ai am tuén-ti-éit yíerz óuld, ai am from Ar-dshén-tí-na, and ai am an ín-fan-tri ó-fi-ser.',
      tacticalUsage: 'Presentación protocolar inicial en cursos multinacionales, comisiones al exterior y foros bilaterales.'
    },
    listening: {
      title: 'Presentación de Oficiales en un Ejercicio Conjunto',
      script: 'Welcome everyone to the combined headquarters. Let us introduce ourselves. — Hello, I am Major Thomas Clark. I am from the United Kingdom and I am thirty-eight years old. I am the logistics coordinator. — Pleased to meet you, Major. I am Captain Sofia Rossi. I am from Argentina and I am thirty-one years old. I am an engineer officer. We are ready to work together.',
      question: {
        question: 'Where is Captain Sofia Rossi from and how old is she?',
        options: [
          'From Argentina, 31 years old',
          'From the UK, 38 years old',
          'From Argentina, 28 years old',
          'From Canada, 35 years old'
        ],
        correctIndex: 0,
        explanation: 'Captain Sofia Rossi states: "I am from Argentina and I am thirty-one years old".'
      }
    },
    reading: {
      title: 'Perfil Biográfico de un Estudiante Militar Internacional',
      snippet: 'Student Profile: Lieutenant Gabriel Mendez is an officer in the Argentine Armed Forces. He is twenty-seven years old. His home country is Argentina, and his native language is Spanish. He is currently a student at the Defense Language Institute in the UK. He is single and his main hobbies are playing football and reading military history books.',
      question: {
        question: 'Which of the following statements about Lieutenant Mendez is true?',
        options: [
          'He is thirty years old and married',
          'He is twenty-seven years old, from Argentina, and single',
          'He is from the United Kingdom',
          'He does not speak Spanish'
        ],
        correctIndex: 1,
        explanation: 'The profile confirms: "He is twenty-seven years old. His home country is Argentina... He is single".'
      }
    },
    useOfLanguage: {
      title: 'Concordancia con el Verbo TO BE',
      prompt: 'Elige la forma correcta del verbo TO BE para completar la oración:',
      question: {
        question: 'Choose the correct form: "Lieutenant Silva and Captain Rossi _____ from Argentina."',
        options: ['am', 'is', 'are', 'be'],
        correctIndex: 2,
        explanation: 'The subject is plural ("They"), so the correct form is "are".'
      }
    },
    writing: {
      title: 'Redacción de una Ficha de Presentación Personal',
      scenario: 'Redacta un texto breve de presentación personal (40 palabras) indicando tu nombre, edad, país, profesión y estado civil utilizando el verbo TO BE.',
      targetWordCount: '35-45 palabras',
      requiredElements: ['Nombre y rango', 'Edad con fórmula "I am ... years old"', 'País de origen con "I am from..."', 'Profesión y estado civil'],
      modelAnswer: 'Hello. My name is Lucas Pereyra. I am thirty years old and I am from Argentina. I am an army officer and I am married. I am very happy to participate in this international English training course.'
    },
    speaking: {
      title: 'Presentación Personal Oral de 30 Segundos',
      scenario: 'Graba tu presentación personal oral presentándote formalmente ante el instructor británico.',
      recommendedDuration: '30 segundos',
      pronunciationTips: ['No digas "I have 30 years", di claramente "I am thirty years old".', 'Enlaza "I am from" con fluidez.', 'Pronuncia /eɪdʒ/ con sonido final suave.'],
      modelResponse: 'Good morning. My name is Lieutenant Gabriel Gomez. I am twenty-nine years old and I am from Argentina. I am an officer and I look forward to improving my English skills.'
    }
  }
];
