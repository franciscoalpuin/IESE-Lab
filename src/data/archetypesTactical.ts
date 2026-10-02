import { ArchetypeExerciseData } from './daily120PlanData';

export const TACTICAL_ARCHETYPES_PART3: ArchetypeExerciseData[] = [
  // DÍA 11: El Clima, Las Estaciones y La Ropa
  {
    title: 'El Clima, Las Estaciones del Año & La Ropa Adecuada',
    theme: 'Pronóstico del Tiempo, Condiciones Climáticas y Vestimenta',
    objective: 'Describir condiciones meteorológicas (sunny, rainy, foggy, cold), estaciones del año y seleccionar la ropa adecuada para actividades al aire libre y en el cuartel.',
    vocabulary: [
      { term: 'Weather forecast', translation: 'Pronóstico meteorológico', ipa: '/ˈweð.ər ˈfɔː.kɑːst/', spanishPhonetic: 'ué-der fór-kast', example: 'Check the weather forecast before departure.' },
      { term: 'Sunny / Rainy / Windy / Foggy', translation: 'Soleado / Lluvioso / Ventoso / Con niebla', ipa: '/ˈsʌn.i/ /ˈreɪ.ni/ /ˈwɪn.di/ /ˈfɒɡ.i/', spanishPhonetic: 'sá-ni / réi-ni / uín-di / fóg-i', example: 'Today is cold and rainy with heavy wind.' },
      { term: 'Spring / Summer / Autumn / Winter', translation: 'Primavera / Verano / Otoño / Invierno', ipa: '/sprɪŋ/ /ˈsʌm.ər/ /ˈɔː.təm/ /ˈwɪn.tər/', spanishPhonetic: 'spring / sá-mer / ó-tom / uín-ter', example: 'In winter, temperatures drop below zero.' },
      { term: 'Jacket / Coat / Boots / Gloves', translation: 'Campera / Abrigo / Botas / Guantes', ipa: '/ˈdʒæk.ɪt/ /kəʊt/ /buːts/ /ɡlʌvz/', spanishPhonetic: 'dshá-ket / kóut / buuts / glavz', example: 'Wear your waterproof boots and warm gloves.' },
      { term: 'Temperature / Degrees', translation: 'Temperatura / Grados', ipa: '/ˈtem.prə.tʃər/ /dɪˈɡriːz/', spanishPhonetic: 'tém-pra-cher / di-gríiz', example: 'The current temperature is eight degrees Celsius.' }
    ],
    grammar: {
      title: 'Estructuras para Describir el Clima y la Ropa que se Viste',
      formula: 'Clima: It is + [adjective] / It is raining/snowing | Ropa: [Subject] + is/are wearing + [clothes]',
      rule: 'En inglés el clima se expresa siempre con el pronombre impersonal "IT": "It is sunny today" (Hace sol hoy), "It is very cold" (Hace mucho frío). Para la ropa que uno lleva puesta se usa el Presente Continuo: "He is wearing a waterproof jacket and sturdy boots".',
      tacticalTip: 'Otoño en inglés británico se dice "autumn" (/ˈɔː.təm/), mientras que en inglés americano se suele decir "fall".'
    },
    phonetics: {
      targetSound: 'Vocal /ʌ/ breve en Sunny, Summer, Gloves y /ɔː/ larga en Warm, Autumn',
      articulatoryTip: 'En "sunny" y "gloves" la vocal se produce en el centro de la boca con labios relajados.',
      spanishPhonetic: 'sá-ni, glavz, ó-tom',
      practiceWords: [
        { word: 'Sunny', spanishPhonetic: 'sá-ni', translation: 'soleado' },
        { word: 'Gloves', spanishPhonetic: 'glavz', translation: 'guantes' },
        { word: 'Weather', spanishPhonetic: 'ué-der', translation: 'clima' }
      ]
    },
    usefulPhrase: {
      phrase: 'The weather forecast for tomorrow is cold and rainy with low visibility. Make sure all personnel wear waterproof jackets and boots.',
      translation: 'El pronóstico del tiempo para mañana es frío y lluvioso con baja visibilidad. Asegúrese de que todo el personal use camperas impermeables y botas.',
      spanishPhonetic: 'De ué-der fór-kast for tu-mó-rou is kóuld and réi-ni uid lóu vi-si-bí-li-ti. Méik shur ol per-so-nél uer uó-ter-pruf dshá-kets and buuts.',
      tacticalUsage: 'Instrucciones previas a marchas, patrullas y actividades al aire libre bajo inclemencias climáticas.'
    },
    listening: {
      title: 'Boletín Meteorológico para el Área de Ejercicios',
      script: 'Good morning, troops. Here is the operational weather bulletin for sector north. Expect heavy rain and strong winds beginning at ten o\'clock. Temperatures will remain around five degrees Celsius. Due to wet ground, all soldiers must wear waterproof jackets, warm thermal underwear, and combat boots. Visibility will improve by mid-afternoon.',
      question: {
        question: 'What weather conditions are expected starting at ten o\'clock?',
        options: [
          'Heavy rain and strong winds, around five degrees',
          'Bright sunshine and hot temperatures',
          'Heavy snowfall and zero visibility',
          'A mild spring breeze'
        ],
        correctIndex: 0,
        explanation: 'The bulletin predicts: "heavy rain and strong winds beginning at ten o\'clock... around five degrees".'
      }
    },
    reading: {
      title: 'Reporte de Condiciones Climáticas y Equipo Recomendado',
      snippet: 'Autumn and winter deployments require strict weather discipline. During freezing conditions, soldiers risk hypothermia if clothing is damp. Standard operating procedures dictate the three-layer clothing system: a moisture-wicking base layer, an insulating fleece middle layer, and a windproof waterproof outer shell. Warm hats and gloves are mandatory whenever temperatures fall below ten degrees.',
      question: {
        question: 'When are warm hats and gloves mandatory according to the procedure?',
        options: [
          'Whenever temperatures fall below ten degrees',
          'Only during night guard duty',
          'Exclusively during summer rains',
          'When driving administrative vehicles'
        ],
        correctIndex: 0,
        explanation: 'The text specifies: "mandatory whenever temperatures fall below ten degrees".'
      }
    },
    useOfLanguage: {
      title: 'Adjetivos Meteorológicos y Uso de IT',
      prompt: 'Elige la opción que describe correctamente el clima y la ropa:',
      question: {
        question: 'Choose the correct grammatical sentence:',
        options: [
          'It is very cold today, so she is wearing a warm coat.',
          'Is very cold today, so she wears warm coats.',
          'He has cold today, so he wear coat.',
          'It makes cold today, so she wearing a coat.'
        ],
        correctIndex: 0,
        explanation: '"It is very cold today, so she is wearing a warm coat" uses impersonal "It is" and Present Continuous for clothing.'
      }
    },
    writing: {
      title: 'Redacción del Informe Meteorológico Local',
      scenario: 'Escribe un breve informe meteorológico (40 palabras) describiendo el clima de tu ciudad hoy, la temperatura estimada y la vestimenta recomendada para salir.',
      targetWordCount: '35-45 palabras',
      requiredElements: ['Descripción del clima (sunny, windy, cold, rainy)', 'Temperatura estimada con "degrees Celsius"', 'Ropa recomendada con "wear / wearing"', 'Uso del pronombre impersonal "It is"'],
      modelAnswer: 'Today in Buenos Aires it is sunny but very windy. The temperature is around fourteen degrees Celsius. It is quite cool, so you should wear a warm jacket and comfortable shoes if you go outside for a walk.'
    },
    speaking: {
      title: 'Emisión Oral de un Parte Meteorológico',
      scenario: 'Simula ser un oficial meteorológico informando las condiciones del tiempo para la mañana de instrucción.',
      recommendedDuration: '25 segundos',
      pronunciationTips: ['Pronuncia /w/ con labios redondeados en "weather" y "windy".', 'Articula con nitidez /dɪˈɡriːz/ (degrees).', 'Mantén cadencia pausada y profesional.'],
      modelResponse: 'Good morning. The weather today is partly cloudy and cold with a temperature of twelve degrees Celsius. A light jacket is recommended for all outdoor training activities.'
    }
  },

  // DÍA 12: Direcciones en la Ciudad y en la Base
  {
    title: 'Direcciones en la Ciudad y en la Base (Dar y Seguir Instrucciones)',
    theme: 'Orientación Espacial, Preposiciones de Lugar e Indicaciones Urbanas',
    objective: 'Pedir y dar indicaciones claras para llegar a edificios, oficinas o puntos de interés (turn left, turn right, go straight on, opposite, next to).',
    vocabulary: [
      { term: 'Turn left / Turn right', translation: 'Girar a la izquierda / derecha', ipa: '/tɜːn left/ /tɜːn raɪt/', spanishPhonetic: 'térn left / térn ráit', example: 'Turn left at the traffic lights.' },
      { term: 'Go straight ahead / on', translation: 'Seguir todo derecho', ipa: '/ɡəʊ streɪt əˈhed/', spanishPhonetic: 'góu stréit e-jéd', example: 'Go straight ahead for two hundred metres.' },
      { term: 'Next to / Opposite', translation: 'Al lado de / Enfrente de', ipa: '/nekst tuː/ /ˈɒp.ə.zɪt/', spanishPhonetic: 'nékst tu / ó-po-zit', example: 'The post office is opposite the railway station.' },
      { term: 'Between / Behind', translation: 'Entre (dos cosas) / Detrás de', ipa: '/bɪˈtwiːn/ /bɪˈhaɪnd/', spanishPhonetic: 'bi-tuíin / bi-jáind', example: 'The headquarters is between the mess and the parade ground.' },
      { term: 'Corner / Cross the street', translation: 'Esquina / Cruzar la calle', ipa: '/ˈkɔː.nər/ /krɒs/', spanishPhonetic: 'kór-ner / kros', example: 'Cross the street at the pedestrian crossing.' }
    ],
    grammar: {
      title: 'Imperativos de Dirección y Preposiciones de Lugar',
      formula: 'Imperativo: [Verb] + [direction] (Turn left, Walk straight, Take the second road) | Preposición: [Building] is + [preposition] + [landmark]',
      rule: 'Para dar indicaciones se emplean verbos en imperativo directo: "Go straight on", "Take the first turning on your right". Para indicar ubicación: "The hospital is opposite the bank" (enfrente del banco), "The gym is next to the barracks" (al lado de los cuarteles).',
      tacticalTip: 'Para preguntar direcciones con cortesía: "Excuse me, how do I get to [place]?" o "Could you tell me the way to [place]?"'
    },
    phonetics: {
      targetSound: 'Grupo consonántico /str/ en Straight y /tw/ en Between',
      articulatoryTip: 'En "straight" encadena s-t-r sin agregar vocales antes de la s. Pronuncia /streɪt/.',
      spanishPhonetic: 'stréit, bi-tuíin',
      practiceWords: [
        { word: 'Straight', spanishPhonetic: 'stréit', translation: 'derecho / recto' },
        { word: 'Opposite', spanishPhonetic: 'ó-po-zit', translation: 'enfrente' },
        { word: 'Between', spanishPhonetic: 'bi-tuíin', translation: 'entre dos' }
      ]
    },
    usefulPhrase: {
      phrase: 'Excuse me, could you tell me the way to the Headquarters building? — Yes, go straight ahead, take the first road on your right, and it is opposite the parade ground.',
      translation: 'Disculpe, ¿podría indicarme el camino al edificio de la Comandancia? — Sí, siga derecho, tome la primera calle a su derecha y está enfrente de la plaza de armas.',
      spanishPhonetic: 'Eks-kiús mi, kud iu tel mi de uéi tu de Jed-kuór-terz bíl-ding? — Ies, góu stréit e-jéd, téik de ferst róud on iur ráit, and it is ó-po-zit de pa-réid gráund.',
      tacticalUsage: 'Orientación de personal de relevo, agregados extranjeros y visitantes en instalaciones civiles y militares.'
    },
    listening: {
      title: 'Pidiendo Indicaciones en una Ciudad Británica',
      script: 'Excuse me, Sir. I am a bit lost. How do I get to the central train station? — No problem. Walk straight along this street for about three hundred yards. When you reach the traffic lights, turn left onto Victoria Road. Walk past the supermarket, and you will see the station on your right, directly opposite the grand hotel. — Thank you very much! — You\'re welcome.',
      question: {
        question: 'What should the person do at the traffic lights?',
        options: [
          'Turn left onto Victoria Road',
          'Turn right into a park',
          'Stop and take a taxi',
          'Cross the river immediately'
        ],
        correctIndex: 0,
        explanation: 'The directions state: "When you reach the traffic lights, turn left onto Victoria Road".'
      }
    },
    reading: {
      title: 'Guía de Desplazamiento en la Guarnición',
      snippet: 'Base Orientation Guide: Visitors arriving through the Main Gate must register at the reception office on their immediate left. To reach the Medical Centre, proceed straight along General San Martin Avenue for 400 metres. Turn right after the vehicle depot. The Medical Centre is located between the physical training gymnasium and the helicopter landing zone.',
      question: {
        question: 'Where is the Medical Centre located according to the guide?',
        options: [
          'Between the gymnasium and the helicopter landing zone',
          'Opposite the main entrance gate',
          'Inside the vehicle depot',
          'Behind the civilian train station'
        ],
        correctIndex: 0,
        explanation: 'The guide explicitly states: "between the physical training gymnasium and the helicopter landing zone".'
      }
    },
    useOfLanguage: {
      title: 'Preposiciones de Lugar e Indicación de Rutas',
      prompt: 'Elige la preposición correcta para indicar que un edificio está al lado de otro:',
      question: {
        question: 'Complete the sentence: "The library is _____ the administrative building."',
        options: ['next to', 'straight of', 'turn to', 'under of'],
        correctIndex: 0,
        explanation: '"Next to" means beside or adjacent to another building.'
      }
    },
    writing: {
      title: 'Redacción de Instrucciones de Llegada a un Edificio',
      scenario: 'Escribe un mensaje breve (40 palabras) dando indicaciones a un visitante desde la entrada del cuartel hasta la cantina militar.',
      targetWordCount: '35-45 palabras',
      requiredElements: ['Comando "Go straight ahead"', 'Indicación de giro (turn left o right)', 'Referencia a un punto clave (opposite / next to)', 'Puntualidad en los pasos'],
      modelAnswer: 'From the main gate, go straight ahead along the main avenue for two hundred metres. At the second crossing, turn right. Walk past the flagpole, and the cafeteria is on your left, directly opposite the parade ground.'
    },
    speaking: {
      title: 'Transmisión Oral de Indicaciones de Dirección',
      scenario: 'Explica en voz alta cómo llegar desde la puerta de guardia hasta la sala de conferencias con entonación segura.',
      recommendedDuration: '25 segundos',
      pronunciationTips: ['No agregues "e" antes de "straight" (/streɪt/).', 'Pausa breve después de cada paso.', 'Usa "on your left" y "on your right".'],
      modelResponse: 'Go straight ahead down the corridor. Take the stairs to the first floor, turn left, and the conference room is the second door on your right, next to the director\'s office.'
    }
  },

  // DÍA 13: La Casa, Mobiliario & THERE IS / THERE ARE
  {
    title: 'La Casa, Habitaciones, Muebles & THERE IS / THERE ARE',
    theme: 'Partes de la Vivienda, Alojamiento Cuartelero y Expresión de Existencia',
    objective: 'Describir viviendas y dormitorios militares, identificar habitaciones y muebles, y aplicar con precisión there is (singular) y there are (plural).',
    vocabulary: [
      { term: 'Living room / Bedroom', translation: 'Sala de estar / Dormitorio', ipa: '/ˈlɪv.ɪŋ ˌruːm/ /ˈbed.ruːm/', spanishPhonetic: 'lív-ing ruum / béd-ruum', example: 'There are two beds in the bedroom.' },
      { term: 'Kitchen / Bathroom', translation: 'Cocina / Baño', ipa: '/ˈkɪtʃ.ən/ /ˈbɑːθ.ruːm/', spanishPhonetic: 'kí-chin / báz-ruum', example: 'There is a modern refrigerator in the kitchen.' },
      { term: 'Bed / Desk / Chair', translation: 'Cama / Escritorio / Silla', ipa: '/bed/ /desk/ /tʃeər/', spanishPhonetic: 'bed / desk / cher', example: 'Each room has a desk, a chair, and a wardrobe.' },
      { term: 'Wardrobe / Cupboard', translation: 'Armario / Alacena', ipa: '/ˈwɔː.drəʊb/ /ˈkʌb.əd/', spanishPhonetic: 'uór-droub / káb-erd', example: 'Put your uniform inside the wardrobe.' },
      { term: 'There is / There are', translation: 'Hay (singular / plural)', ipa: '/ðeər ɪz/ /ðeər ɑːr/', spanishPhonetic: 'der iz / der ar', example: 'There is a lamp on the desk and there are three windows.' }
    ],
    grammar: {
      title: 'Estructuras de Existencia: There is / There are',
      formula: 'Singular: There is a [noun] | Plural: There are [number/some] [nouns] | Pregunta: Is there a ...? / Are there any ...?',
      rule: 'Para expresar existencia en presente se utiliza "There is" con sustantivos singulares ("There is a shower") y "There are" con sustantivos plurales ("There are four chairs"). En negativo: "There isn\'t any desk", "There aren\'t any blankets".',
      tacticalTip: 'No uses el verbo "have" para decir que algo existe. En español decimos "Hay dos camas", pero en inglés nunca se dice "Has two beds", sino "There are two beds".'
    },
    phonetics: {
      targetSound: 'Sonido /ð/ interdental en There is /ˈðeər ɪz/ y /tʃ/ en Chair, Kitchen',
      articulatoryTip: 'Enlaza "There is a" como una sola unidad sonora: /ðeər ɪz ə/.',
      spanishPhonetic: 'der iz e, cher, kí-chin',
      practiceWords: [
        { word: 'There is', spanishPhonetic: 'der iz', translation: 'hay (singular)' },
        { word: 'There are', spanishPhonetic: 'der ar', translation: 'hay (plural)' },
        { word: 'Kitchen', spanishPhonetic: 'kí-chin', translation: 'cocina' }
      ]
    },
    usefulPhrase: {
      phrase: 'In my apartment, there is a comfortable living room with a large sofa, and there are two bedrooms with wooden desks.',
      translation: 'En mi departamento, hay una sala de estar cómoda con un sofá grande, y hay dos dormitorios con escritorios de madera.',
      spanishPhonetic: 'In mai e-párt-ment, der is e kóm-for-te-bl lív-ing ruum uid e lardsh sóu-fa, and der ar tu béd-ruumz uid uú-den desks.',
      tacticalUsage: 'Descripción de alojamiento personal, asignación de cuartos y control de inventario de barracas.'
    },
    listening: {
      title: 'Asignación de Dormitorio en la Escuela Militar',
      script: 'Welcome to your quarters, Lieutenant. Here is your room key. Inside room 204, there is a single bed, a study desk with a lamp, and a large wardrobe for your gear. There is also a private bathroom with a hot shower. In the common area outside, there are washing machines and a small kitchen with a microwave. Please keep your room clean.',
      question: {
        question: 'What furniture is inside room 204 according to the instructor?',
        options: [
          'A single bed, a study desk with a lamp, and a wardrobe',
          'Two bunk beds and five chairs',
          'Only a sofa and a television',
          'A double bed and a dining table'
        ],
        correctIndex: 0,
        explanation: 'The instructor specifies: "a single bed, a study desk with a lamp, and a large wardrobe".'
      }
    },
    reading: {
      title: 'Inspección de Alojamiento y Mobiliario Cuartelero',
      snippet: 'Barracks Inspection Standards: Every living quarter must maintain standardized furniture placement. In each four-soldier room, there are four individual bunk lockers, four beds, and two study tables. There is an emergency fire extinguisher mounted on the hallway wall. Inspecting officers verify that there are no unauthorized electrical appliances in the bedrooms.',
      question: {
        question: 'How many beds and lockers are in each four-soldier room?',
        options: [
          'Four individual lockers and four beds',
          'Two beds and one locker',
          'Six beds and eight lockers',
          'Ten individual lockers'
        ],
        correctIndex: 0,
        explanation: 'The text states: "there are four individual bunk lockers, four beds".'
      }
    },
    useOfLanguage: {
      title: 'Elección entre There is y There are',
      prompt: 'Elige la opción correcta para completar la oración:',
      question: {
        question: 'Complete the sentence: "In the conference room, _____ twenty chairs and _____ a large projector screen."',
        options: [
          'there are / there is',
          'there is / there are',
          'there are / there are',
          'is there / are there'
        ],
        correctIndex: 0,
        explanation: '"Twenty chairs" is plural (there are) and "a large projector screen" is singular (there is).'
      }
    },
    writing: {
      title: 'Redacción de la Descripción de tu Habitación o Casa',
      scenario: 'Escribe un párrafo (40 palabras) describiendo tu habitación actual o tu casa utilizando correctamente "there is" y "there are".',
      targetWordCount: '35-45 palabras',
      requiredElements: ['Uso correcto de "There is a..." en singular', 'Uso correcto de "There are..." en plural', 'Mención de al menos 3 muebles o ambientes', 'Un adjetivo calificativo (clean, comfortable, spacious)'],
      modelAnswer: 'In my apartment, there is a spacious living room and a clean kitchen. In my bedroom, there is a comfortable bed and a wooden desk where I study English. There are also two large windows with plenty of sunlight.'
    },
    speaking: {
      title: 'Descripción Oral de un Ambiente',
      scenario: 'Describe oralmente tu cuarto de estudio o tu oficina ante el examinador utilizando there is y there are.',
      recommendedDuration: '25 segundos',
      pronunciationTips: ['Enlaza "there is a" (/ðeər ɪz ə/).', 'No pronuncies la "d" en desk como muda.', 'Pronuncia /bed/ con vocal corta limpia.'],
      modelResponse: 'In my office, there is a computer desk with two monitors and a comfortable chair. On the wall, there are three tactical maps, and there is a bookcase with military regulations.'
    }
  },

  // DÍA 14: Medios de Transporte, Horarios & Compra de Pasajes
  {
    title: 'Medios de Transporte, Horarios & Compra de Pasajes',
    theme: 'Transporte Público y Privado, Viajes y Preposiciones de Desplazamiento',
    objective: 'Identificar medios de transporte (train, bus, underground, flight), preguntar horarios y comprar pasajes de ida o vuelta (single/return ticket) con soltura.',
    vocabulary: [
      { term: 'Train / Bus / Underground', translation: 'Tren / Autobús / Subterráneo (Metro)', ipa: '/treɪn/ /bʌs/ /ˈʌn.də.ɡraʊnd/', spanishPhonetic: 'tréin / bas / án-der-graund', example: 'I go to London by train.' },
      { term: 'Single ticket / Return ticket', translation: 'Boleto de ida / Boleto de ida y vuelta', ipa: '/ˈsɪŋ.ɡəl/ /rɪˈtɜːn/', spanishPhonetic: 'sín-gl / ri-térn tí-ket', example: 'A standard return ticket to Manchester, please.' },
      { term: 'Platform / Departure / Arrival', translation: 'Andén / Salida / Llegada', ipa: '/ˈplæt.fɔːm/ /dɪˈpɑː.tʃər/', spanishPhonetic: 'plát-form / di-pár-cher', example: 'The train departs from Platform 3.' },
      { term: 'Timetable / Schedule', translation: 'Horario / Cronograma', ipa: '/ˈtaɪmˌteɪ.bəl/', spanishPhonetic: 'táim-tei-bl', example: 'Check the bus timetable on the board.' },
      { term: 'By car / By bus / On foot', translation: 'En auto / En colectivo / A pie', ipa: '/baɪ kɑːr/ /ɒn fʊt/', spanishPhonetic: 'bai kar / on fut', example: 'Do you travel by car or on foot?' }
    ],
    grammar: {
      title: 'Preposiciones de Medio de Transporte: BY vs ON FOOT',
      formula: 'Desplazamiento: BY + transport (by car, by train, by bus, by plane) | Excepción obligatoria: ON FOOT (a pie)',
      rule: 'En inglés se usa siempre "by" seguido directamente del medio: "by train", "by bus", "by car". Si vas caminando, la regla fija exige "ON FOOT" (nunca "by foot" ni "by walk"). Para preguntar horarios: "What time does the train leave / arrive?".',
      tacticalTip: 'Para comprar pasajes: "Could I have a single/return ticket to [destination], please?".'
    },
    phonetics: {
      targetSound: 'Sonido /tr/ en Train, Travel y /ʌ/ en Bus, Underground',
      articulatoryTip: 'En "train" no separes la t de la r; es una articulación única y limpia.',
      spanishPhonetic: 'tréin, bas, án-der-graund',
      practiceWords: [
        { word: 'Train', spanishPhonetic: 'tréin', translation: 'tren' },
        { word: 'Ticket', spanishPhonetic: 'tí-ket', translation: 'boleto' },
        { word: 'On foot', spanishPhonetic: 'on fut', translation: 'a pie' }
      ]
    },
    usefulPhrase: {
      phrase: 'Good morning. Could I have a return ticket to Oxford, please? Which platform does the next train leave from?',
      translation: 'Buenos días. ¿Podría darme un boleto de ida y vuelta a Oxford, por favor? ¿De qué andén sale el próximo tren?',
      spanishPhonetic: 'Gud mór-ning. Kud ai jav e ri-térn tí-ket tu Óks-ford, plis? Uích plát-form das de nekst tréin liiv from?',
      tacticalUsage: 'Desplazamientos personales, comisiones de servicio y traslados ferroviarios o aéreos en el exterior.'
    },
    listening: {
      title: 'Compra de Pasajes en la Estación de Trenes',
      script: 'Ticket office clerk: Next, please. How can I help you? — Passenger: Good morning. I would like a single ticket to Birmingham, please. — Clerk: Certainly. That is twenty-two pounds fifty. The next train departs at ten-forty from Platform Four. — Passenger: Thank you. Does it stop at Coventry? — Clerk: Yes, it is a direct service arriving at eleven-fifteen.',
      question: {
        question: 'How much is the ticket and what platform does the train leave from?',
        options: [
          'Twenty-two pounds fifty (£22.50) from Platform 4',
          'Ten pounds from Platform 1',
          'Thirty pounds from Platform 2',
          'Free travel for military'
        ],
        correctIndex: 0,
        explanation: 'The clerk confirms the ticket is £22.50 and departs from Platform 4.'
      }
    },
    reading: {
      title: 'Itinerarios de Transporte y Normas de Traslado',
      snippet: 'Public Transport Guidelines for Visiting Personnel: When travelling between garrison facilities and London, officers are advised to use the rail network. Trains run every thirty minutes from Platform 2. Tickets should be purchased in advance at the station counter or automated ticket machines. Always check the digital departure board for track alterations.',
      question: {
        question: 'How often do trains run between the garrison and London?',
        options: [
          'Every thirty minutes',
          'Once a day',
          'Every two hours',
          'Only on Sundays'
        ],
        correctIndex: 0,
        explanation: 'The text specifies: "Trains run every thirty minutes from Platform 2".'
      }
    },
    useOfLanguage: {
      title: 'Preposiciones de Transporte Correctas',
      prompt: 'Elige la preposición adecuada para completar la oración:',
      question: {
        question: 'Complete the sentence: "Lieutenant Mendez travels to the base _____ bus, but in the summer he prefers to go _____ foot."',
        options: [
          'by / on',
          'in / by',
          'on / with',
          'with / on'
        ],
        correctIndex: 0,
        explanation: 'We use "by bus" for motorized transport, and "on foot" for walking.'
      }
    },
    writing: {
      title: 'Redacción de un Correo de Itinerario de Viaje',
      scenario: 'Escribe un correo electrónico breve (40 palabras) informando a tu anfitrión tu itinerario de viaje en tren: medio de transporte, hora de salida, hora estimada de llegada y andén.',
      targetWordCount: '35-45 palabras',
      requiredElements: ['Medio de transporte con "by train"', 'Hora de salida en formato 24h o civil', 'Hora de llegada estimada', 'Fórmula de cortesía de despedida'],
      modelAnswer: 'Dear Captain Taylor, I am travelling to the garrison by train tomorrow morning. My train departs from Waterloo Station at 0930 hrs and arrives at 1045 hrs on Platform 3. I will see you at the station entrance. Best regards.'
    },
    speaking: {
      title: 'Simulación Oral de Compra de Billete en Ventanilla',
      scenario: 'Pide en voz alta un boleto de ida y vuelta a Londres, pregunta el precio y consulta el andén de salida.',
      recommendedDuration: '25 segundos',
      pronunciationTips: ['Pronuncia /rɪˈtɜːn/ con sonido "er" limpio.', 'Usa entonación cortés ascendente en preguntas.', 'Di claramente el nombre del destino.'],
      modelResponse: 'Good morning. Could I have a return ticket to London Victoria, please? How much is it, and could you tell me which platform the train leaves from? Thank you.'
    }
  },

  // DÍA 15: Llamadas Telefónicas Cotidianas & Tomar Mensajes
  {
    title: 'Llamadas Telefónicas Cotidianas & Tomar Mensajes',
    theme: 'Comunicación Telefónica Básica, Identificación y Recados',
    objective: 'Iniciar y responder llamadas telefónicas formal e informalmente, identificarse ("This is..."), solicitar hablar con alguien ("Could I speak to...?") y tomar o dejar un mensaje.',
    vocabulary: [
      { term: 'Telephone call / Ring', translation: 'Llamada telefónica / Sonar', ipa: '/ˈtel.ɪ.fəʊn kɔːl/ /rɪŋ/', spanishPhonetic: 'té-le-foun kol / ring', example: 'Answer the telephone; it is ringing.' },
      { term: 'This is ... speaking', translation: 'Habla ... (fórmula de identificación)', ipa: '/ðɪs ɪz ˈspiː.kɪŋ/', spanishPhonetic: 'dis iz spí-king', example: 'Hello, this is Captain Rossi speaking.' },
      { term: 'Hold on / Hold the line', translation: 'Espere un momento en línea', ipa: '/həʊld ɒn/', spanishPhonetic: 'jóuld on', example: 'Hold on a moment, please; I will connect you.' },
      { term: 'Leave / Take a message', translation: 'Dejar / Tomar un mensaje', ipa: '/liːv / teɪk ə ˈmes.ɪdʒ/', spanishPhonetic: 'liiv / téik e mé-sidsh', example: 'Can I take a message for Major Harris?' },
      { term: 'Call back / Extension', translation: 'Volver a llamar / Interno telefónico', ipa: '/kɔːl bæk/ /ɪkˈsten.ʃən/', spanishPhonetic: 'kol bak / eks-tén-shon', example: 'Please ask him to call me back on extension 402.' }
    ],
    grammar: {
      title: 'Fórmulas Fijas de la Comunicación Telefónica en Inglés',
      formula: 'Identificarse: Hello, this is [Name] speaking | Pedir hablar: Could I speak to [Person], please? | Ausencia: I am afraid he/she is not available',
      rule: 'Por teléfono en inglés NUNCA se dice "I am John" (Yo soy John). La norma estándar exige "This is John speaking" (Habla John) o "Is that Captain Evans?" (¿Es usted el Capitán Evans?). Para pedir hablar: "Could I speak to Major Scott, please?".',
      tacticalTip: 'Para números telefónicos, cada dígito se pronuncia individualmente: 452 301 = "four-five-two, three-zero-one" (o "three-oh-one").'
    },
    phonetics: {
      targetSound: 'Entonación de cortesía ascendente ↗ en preguntas telefónicas',
      articulatoryTip: 'En "Could I speak to Major Scott, please? ↗" la entonación sube al final para transmitir cortesía y amabilidad.',
      spanishPhonetic: 'dis iz spí-king, jóuld on',
      practiceWords: [
        { word: 'Speaking', spanishPhonetic: 'spí-king', translation: 'hablando' },
        { word: 'Message', spanishPhonetic: 'mé-sidsh', translation: 'mensaje' },
        { word: 'Extension', spanishPhonetic: 'eks-tén-shon', translation: 'interno telefónico' }
      ]
    },
    usefulPhrase: {
      phrase: 'Hello, this is Lieutenant Alvarez speaking. Could I speak to Major Scott, please? — I\'m afraid he is in a meeting. Would you like to leave a message?',
      translation: 'Hola, habla el Teniente Álvarez. ¿Podría hablar con el Mayor Scott, por favor? — Me temo que está en una reunión. ¿Desea dejar un mensaje?',
      spanishPhonetic: 'Je-lóu, dis is Lu-té-nant Ál-va-rez spí-king. Kud ai spiik tu Méi-dshor Skot, plis? — Aim e-fréid ji is in e mí-ting. Uud iu laik tu liiv e mé-sidsh?',
      tacticalUsage: 'Atención de conmutadores, enlaces telefónicos con cuarteles generales y coordinación interinstitucional.'
    },
    listening: {
      title: 'Tomando un Mensaje Telefónico de Oficina',
      script: 'Receptionist: Headquarters Operations, Sergeant Miller speaking. How may I direct your call? — Caller: Good morning. This is Captain Torres speaking. Could I speak with Major Davis, please? — Receptionist: Hold on one moment, Captain... I am afraid Major Davis is out of the office at the firing range. Can I take a message? — Caller: Yes, please. Could you ask him to call me back at extension 512 regarding the morning transport? — Receptionist: Certainly, Captain Torres: extension 5-1-2. I will give him the note.',
      question: {
        question: 'Why cannot Captain Torres speak with Major Davis?',
        options: [
          'Major Davis is out of the office at the firing range',
          'Major Davis is sleeping in his quarters',
          'The telephone line is broken',
          'Captain Torres dialled the wrong country code'
        ],
        correctIndex: 0,
        explanation: 'Sergeant Miller states: "Major Davis is out of the office at the firing range".'
      }
    },
    reading: {
      title: 'Formato de Registro de Mensajes Telefónicos (Message Pad)',
      snippet: 'Telephone Message Slip: \nTO: Major Davis \nFROM: Captain Torres \nTIME: 1045 hrs \nMESSAGE: Please call back on extension 512. Urgent query regarding tomorrow\'s morning convoy transport. \nTAKEN BY: Sgt. Miller.',
      question: {
        question: 'What is the topic of the telephone message for Major Davis?',
        options: [
          'Tomorrow\'s morning convoy transport',
          'A personal lunch invitation',
          'Weekend leave approval',
          'The weather forecast in London'
        ],
        correctIndex: 0,
        explanation: 'The message explicitly states: "Urgent query regarding tomorrow\'s morning convoy transport".'
      }
    },
    useOfLanguage: {
      title: 'Fórmulas de Identificación Telefónica',
      prompt: 'Elige la frase correcta para identificarte al contestar una llamada:',
      question: {
        question: 'What is the correct English phrase to identify yourself when answering the phone?',
        options: [
          'Hello, I am Lieutenant Gomez.',
          'Hello, this is Lieutenant Gomez speaking.',
          'Hello, here is Lieutenant Gomez talking.',
          'Hello, who is calling to Lieutenant Gomez?'
        ],
        correctIndex: 1,
        explanation: '"Hello, this is Lieutenant Gomez speaking" is the standard professional English phone greeting.'
      }
    },
    writing: {
      title: 'Redacción de una Nota de Mensaje Telefónico',
      scenario: 'Redacta un mensaje telefónico breve (35 palabras) para tu superior: indica quién llamó (Capitán Jenkins), la hora (1130 hrs), el asunto (reunión de logística) y el número de contacto.',
      targetWordCount: '30-40 palabras',
      requiredElements: ['Nombre de la persona que llamó', 'Hora de la llamada', 'Motivo del llamado', 'Número o interno para devolver la llamada'],
      modelAnswer: 'Telephone message for Major Rossi: Captain Jenkins called at 1130 hrs regarding the logistics briefing. Please call him back on extension 304 before midday. Taken by Corporal Perez.'
    },
    speaking: {
      title: 'Simulación Oral de Contestación Telefónica',
      scenario: 'Responde la llamada telefónica, identifícate formalmente con tu rango y nombre, e invita cordialmente al interlocutor a dejar un mensaje.',
      recommendedDuration: '25 segundos',
      pronunciationTips: ['Usa entonación amable y segura.', 'Di "This is..." en vez de "I am...".', 'Pronuncia cada dígito con separación.'],
      modelResponse: 'Good morning, Logistics Department, Lieutenant Lucas Gomez speaking. Major Clark is currently unavailable. Would you like to leave a message, or may I take your contact number?'
    }
  }
];
