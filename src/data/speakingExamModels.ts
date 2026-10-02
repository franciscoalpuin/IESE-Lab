export interface SpeakingInterviewQuestion {
  id: string;
  student: 'A' | 'B' | 'Both';
  question: string;
  audioPromptText: string;
  modelAnswer: string;
  usefulVocabulary: string[];
}

export interface SpeakingMonologueTask {
  student: 'A' | 'B';
  cardTitle: string;
  prompt: string;
  bulletPoints: string[];
  visualPromptDescription?: string;
  visualItems?: { label: string; iconType: string }[];
  followUpQuestions?: string[];
  modelResponse: string;
  usefulPhrases: string[];
}

export interface SpeakingInteractionTask {
  type: 'roleplay' | 'simulated_situation' | 'collaborative_task';
  title: string;
  durationMinutes: number;
  scenarioDescription: string;
  studentARole: {
    title: string;
    instructions: string[];
    usefulLanguage: string[];
  };
  studentBRole: {
    title: string;
    instructions: string[];
    usefulLanguage: string[];
  };
  mindMapOptions?: {
    centralPrompt: string;
    branches: { id: string; label: string; details: string; suggestedArguments: string[] }[];
  };
  itemImages?: { id: string; name: string; category: string; description: string }[];
  sampleDialogue: { speaker: string; text: string; role: 'studentA' | 'studentB' }[];
  consensusPrompt?: string;
}

export interface SpeakingExamModel {
  levelNumber: number;
  levelRoman: string;
  partTitle: string;
  timeAllowedMinutes: number;
  totalPoints: number;
  overview: string;
  part1Interview: {
    title: string;
    duration: string;
    instructions: string;
    questionsA: SpeakingInterviewQuestion[];
    questionsB: SpeakingInterviewQuestion[];
  };
  part2Monologue: {
    title: string;
    duration: string;
    instructions: string;
    tasks: SpeakingMonologueTask[];
  };
  part3Interaction: SpeakingInteractionTask;
  stanagRubric: {
    criterion: string;
    maxPoints: number;
    description: string;
    guidelines: string[];
  }[];
}

export const SPEAKING_EXAM_MODELS: Record<number, SpeakingExamModel> = {
  // =========================================================================
  // NIVEL 1 (Parte 5 – Producción Oral) - 15 min - 20 pts
  // =========================================================================
  1: {
    levelNumber: 1,
    levelRoman: 'I',
    partTitle: 'Parte 5 – Producción Oral',
    timeAllowedMinutes: 15,
    totalPoints: 20,
    overview: 'The oral part is divided into three steps: a guided interview, a monologue and a role-play. The whole paper lasts about 15 minutes, involving a pair of candidates and two examiners. The speaking component contributes 20% of the mark of the whole test.',
    part1Interview: {
      title: 'Step A: Guided Interview (3-4 minutes)',
      duration: '3-4 minutes',
      instructions: 'Each candidate interacts with the interlocutor giving factual personal information (name, origin, occupation, family, daily routine, free time).',
      questionsA: [
        {
          id: 'l1-p1-q1',
          student: 'A',
          question: "What's your full name and how do you spell your last name?",
          audioPromptText: "What is your full name and how do you spell your last name?",
          modelAnswer: "My full name is Martin Gomez. My last name is spelled G-O-M-E-Z.",
          usefulVocabulary: ['My name is...', 'It is spelled...', 'First name / Surname']
        },
        {
          id: 'l1-p1-q2',
          student: 'A',
          question: "Where are you from? What's your home town like?",
          audioPromptText: "Where are you from? What is your home town like?",
          modelAnswer: "I am from Cordoba, Argentina. It is a large, vibrant city with historical churches, lively universities, and beautiful hills nearby.",
          usefulVocabulary: ['I come from...', 'It is a large/small city', 'There are...']
        },
        {
          id: 'l1-p1-q3',
          student: 'A',
          question: "What do you do? Describe your daily routine on weekdays.",
          audioPromptText: "What do you do? Describe your daily routine on weekdays.",
          modelAnswer: "I am an army cadet. On weekdays, I get up early at six o'clock, attend parade formation, study tactics and English in the morning, and do physical training in the afternoon.",
          usefulVocabulary: ['I get up at...', 'In the morning...', 'In the afternoon...', 'I study...']
        }
      ],
      questionsB: [
        {
          id: 'l1-p1-q4',
          student: 'B',
          question: "Tell me about your family. Are you married? Do you have brothers or sisters?",
          audioPromptText: "Tell me about your family. Are you married? Do you have brothers or sisters?",
          modelAnswer: "I am not married. I live with my parents and I have one younger brother and an older sister. My brother is a high school student and my sister is a nurse.",
          usefulVocabulary: ['I have one brother...', 'My sister is a...', 'We live in...']
        },
        {
          id: 'l1-p1-q5',
          student: 'B',
          question: "Describe your house or flat. Talk about your neighbourhood.",
          audioPromptText: "Describe your house or flat. Talk about your neighbourhood.",
          modelAnswer: "I live in a comfortable two-bedroom flat with a small balcony. My neighbourhood is quiet, clean, and has a pleasant public square with trees.",
          usefulVocabulary: ['It has two bedrooms', 'My flat is located in...', 'The neighbourhood is peaceful']
        },
        {
          id: 'l1-p1-q6',
          student: 'B',
          question: "What do you do in your free time?",
          audioPromptText: "What do you do in your free time?",
          modelAnswer: "In my free time, I like playing football with my comrades, reading military history books, and listening to rock music.",
          usefulVocabulary: ['In my free time, I like...', 'I enjoy playing...', 'On weekends, I relax by...']
        }
      ]
    },
    part2Monologue: {
      title: 'Step B: Monologue (3-4 minutes)',
      duration: '3-4 minutes',
      instructions: 'Each candidate talks freely about a familiar topic guided by prompt pictures.',
      tasks: [
        {
          student: 'A',
          cardTitle: 'Part 2 – Student A: The place where you go on holidays',
          prompt: 'Tell us about the place where you go on holidays.',
          bulletPoints: [
            'Where you go and how you travel (plane, bus, car)',
            'The landscape (beach, mountains, cities)',
            'What you do in the evening and who you eat with',
            'Why you recommend this destination'
          ],
          visualItems: [
            { label: 'Sunny Beach & Coastline', iconType: 'beach' },
            { label: 'Mountain Range', iconType: 'mountains' },
            { label: 'Airplane Flight', iconType: 'plane' },
            { label: 'Evening City Lights', iconType: 'city' },
            { label: 'Family Dinner Table', iconType: 'dinner' }
          ],
          modelResponse: "On holidays, I usually travel to the Atlantic coast with my family. We love travelling by car or plane. We stay near the beach where we swim in the ocean, relax under the sun, and walk along the dunes. In the evening, we go to traditional restaurants to enjoy fresh seafood and barbecue together. I recommend this place because the climate is refreshing and it is perfect for relaxing.",
          usefulPhrases: ['On holiday, I usually go to...', 'I travel by plane / car', 'The landscape is wonderful because...', 'In the evening, we gather to...']
        },
        {
          student: 'B',
          cardTitle: 'Part 2 – Student B: Your abilities',
          prompt: 'Tell us about your abilities (sports, instruments, skills).',
          bulletPoints: [
            'Physical and sports abilities (swimming, football, skiing)',
            'Creative and artistic abilities (playing the guitar, painting)',
            'How often you practice these skills',
            'Which ability you would like to learn in the future'
          ],
          visualItems: [
            { label: 'Freestyle Swimming', iconType: 'swim' },
            { label: 'Playing Acoustic Guitar', iconType: 'guitar' },
            { label: 'Football / Team Sports', iconType: 'soccer' },
            { label: 'Alpine Skiing', iconType: 'ski' },
            { label: 'Canvas Painting', iconType: 'art' }
          ],
          modelResponse: "I have several abilities. First, I can swim very well because I trained in swimming squads for five years. I also play football every Saturday with my colleagues, which helps me stay fit and work as a team. In addition, I can play acoustic guitar, which I enjoy in my spare time. In the future, I would like to learn alpine skiing and foreign languages like French.",
          usefulPhrases: ['I can swim / play...', 'I am good at...', 'I practice every week', 'In the future, I would like to learn...']
        }
      ]
    },
    part3Interaction: {
      type: 'roleplay',
      title: 'Step C: Role Play – Hotel Reservation',
      durationMinutes: 5,
      scenarioDescription: 'Student A is a tourist on holiday arriving with a reservation. Student B is the hotel receptionist.',
      studentARole: {
        title: 'Student A (Tourist)',
        instructions: [
          'Greet the receptionist and give your name.',
          'Say that you have a reservation.',
          'Ask if you can pay with credit card.',
          'Ask if there is a free Wi-Fi connection.'
        ],
        usefulLanguage: [
          'Good morning / afternoon.',
          'My name is...',
          'I have a reservation for a double room.',
          'Can I pay by credit card?',
          'Is there a Wi-Fi connection in the room?'
        ]
      },
      studentBRole: {
        title: 'Student B (Hotel Receptionist)',
        instructions: [
          'Greet the guest and ask how you can help.',
          'Ask for the guest’s name and ask them to spell it.',
          'Ask where they are from.',
          'Assign the room and give the room key.'
        ],
        usefulLanguage: [
          'Good morning, sir/madam. How can I help you?',
          'May I have your name, please? Could you spell that?',
          'Where are you from?',
          'Yes, of course. Credit cards are welcome.',
          'You are in room 304 on the third floor. Here is your key.'
        ]
      },
      sampleDialogue: [
        { speaker: 'Student A', text: "Good afternoon. My name is Martin Gomez. I have a reservation at your hotel.", role: 'studentA' },
        { speaker: 'Student B', text: "Good afternoon, Mr Gomez. Welcome! Could you please spell your last name for our registry?", role: 'studentB' },
        { speaker: 'Student A', text: "Certainly. It is G-O-M-E-Z.", role: 'studentA' },
        { speaker: 'Student B', text: "Thank you. And where are you from?", role: 'studentB' },
        { speaker: 'Student A', text: "I am from Argentina. By the way, can I pay by credit card?", role: 'studentA' },
        { speaker: 'Student B', text: "Yes, we accept Visa and MasterCard. Wi-Fi is also complimentary in all areas.", role: 'studentB' },
        { speaker: 'Student A', text: "Excellent! What is my room number?", role: 'studentA' },
        { speaker: 'Student B', text: "You are in room 205 on the second floor. Have a pleasant stay!", role: 'studentB' }
      ]
    },
    stanagRubric: [
      { criterion: 'Fluidez y Ritmo', maxPoints: 4, description: 'Capacidad de mantener un discurso continuo sin pausas excesivas.', guidelines: ['Respuestas completas', 'Ritmo natural'] },
      { criterion: 'Vocabulario y Léxico', maxPoints: 4, description: 'Uso apropiado de palabras de presentación, familia, rutinas y viajes.', guidelines: ['Sustantivos concretos', 'Adjetivos descriptivos'] },
      { criterion: 'Corrección Gramatical', maxPoints: 4, description: 'Manejo de Present Simple, can/can’t y preguntas básicas.', guidelines: ['Estructura Sujeto-Verbo', 'Uso correcto de preposiciones'] },
      { criterion: 'Pronunciación e Intonación', maxPoints: 4, description: 'Claridad fonética e inteligibilidad en inglés británico/internacional.', guidelines: ['Sonidos claros', 'Entonación en preguntas'] },
      { criterion: 'Interacción y Roleplay', maxPoints: 4, description: 'Respuestas pertinentes a las preguntas del examinador y compañero.', guidelines: ['Turnos conversacionales', 'Fórmulas de cortesía'] }
    ]
  },

  // =========================================================================
  // NIVEL 2 (Parte 5 – Producción Oral) - 15 min - 20 pts
  // =========================================================================
  2: {
    levelNumber: 2,
    levelRoman: 'II',
    partTitle: 'Parte 5 – Producción Oral',
    timeAllowedMinutes: 15,
    totalPoints: 20,
    overview: 'The test is divided into three steps: a guided interview, a descriptive monologue and a roleplay. The whole paper lasts about 10-15 minutes, involving a pair of candidates and two examiners (20% of the total mark).',
    part1Interview: {
      title: 'Step A: Guided Interview (around 5 minutes)',
      duration: '5 minutes',
      instructions: 'Interaction with the interlocutor regarding personal details, family, comparison of hometown with Buenos Aires, routine, past activities and future plans.',
      questionsA: [
        {
          id: 'l2-p1-q1',
          student: 'A',
          question: "What's your full name and where are you from? What is your home town like?",
          audioPromptText: "What is your full name and where are you from? What is your home town like?",
          modelAnswer: "My name is Lucas Rossi. I am from Salta in northern Argentina. My hometown is surrounded by scenic mountains, has rich colonial architecture, and the climate is pleasantly dry.",
          usefulVocabulary: ['I come from...', 'It is situated in...', 'Colonial architecture', 'Scenic mountains']
        },
        {
          id: 'l2-p1-q2',
          student: 'A',
          question: "Can you compare your hometown to Buenos Aires?",
          audioPromptText: "Can you compare your hometown to Buenos Aires?",
          modelAnswer: "Yes. Salta is much smaller, quieter, and less crowded than Buenos Aires. Buenos Aires has faster traffic and taller buildings, whereas Salta offers a calmer lifestyle and more natural landscapes.",
          usefulVocabulary: ['It is smaller than...', 'Much quieter than...', 'Whereas...', 'In contrast to...']
        },
        {
          id: 'l2-p1-q3',
          student: 'A',
          question: "What did you do last weekend / yesterday?",
          audioPromptText: "What did you do last weekend or yesterday?",
          modelAnswer: "Last weekend, I went on a mountain bike trek with my army squad. We rode thirty kilometres through rough trails, had a picnic near a river, and returned home before sunset.",
          usefulVocabulary: ['Last weekend, I went...', 'We rode...', 'I visited...', 'It was exciting because...']
        }
      ],
      questionsB: [
        {
          id: 'l2-p1-q4',
          student: 'B',
          question: "Tell me about your family and describe your neighbourhood.",
          audioPromptText: "Tell me about your family and describe your neighbourhood.",
          modelAnswer: "My family consists of my parents, an elder sister who works as an architect, and myself. My neighbourhood is residential and peaceful, with leafy trees, grocery stores, and good public transit connections.",
          usefulVocabulary: ['My family consists of...', 'My neighbourhood is residential', 'Convenient public transport']
        },
        {
          id: 'l2-p1-q5',
          student: 'B',
          question: "Do you live near your place of work? Describe your weekday routine.",
          audioPromptText: "Do you live near your place of work? Describe your weekday routine.",
          modelAnswer: "Yes, I live ten minutes away from the military garrison. On weekdays, I wake up at dawn, supervise logistical equipment, study military theory in the afternoon, and exercise daily.",
          usefulVocabulary: ['Ten minutes away from...', 'I wake up at dawn', 'I supervise...', 'I study...']
        },
        {
          id: 'l2-p1-q6',
          student: 'B',
          question: "What are you going to do after the exam / this weekend?",
          audioPromptText: "What are you going to do after the exam or this weekend?",
          modelAnswer: "After this exam, I am going to meet my classmates for lunch at a nearby bistro. This weekend, I am planning to visit my grandparents in the countryside and help them with farm chores.",
          usefulVocabulary: ['I am going to meet...', 'I am planning to...', 'We intend to...']
        }
      ]
    },
    part2Monologue: {
      title: 'Step B: Descriptive Monologue (approx. 5 minutes)',
      duration: '5 minutes',
      instructions: 'The candidate speaks about their home town for 3-4 minutes without interruption using the guided points on the card.',
      tasks: [
        {
          student: 'A',
          cardTitle: 'Descriptive Monologue: Talk about your home town',
          prompt: 'Talk about your home town. Describe the place, size, inhabitants, landscape, climate, attractions, people, and your personal feelings.',
          bulletPoints: [
            'The place: big / noisy / expensive / inhabitants, compare it to another town/city',
            'Location & landscape (mountains, lakes, rivers, beaches, forest)',
            'Seasons and the weather',
            'Attractions: historical places, museums, shopping malls, festivals, casino',
            'The people and activities you can do',
            'Your feelings: why you like or dislike it'
          ],
          modelResponse: "I would like to talk about my hometown, Tandil, situated in the province of Buenos Aires. It has approximately one hundred and fifty thousand inhabitants. Compared to the capital city, Tandil is much calmer, safer, and noticeably greener. The landscape is dominated by ancient, rolling rocky hills, pine forests, and artificial lakes. During the summer, days are warm and breezy, whereas winters can be frosty. Tandil is renowned for its historic Calvary hill, cheese and salami artisan festivals, and outdoor trekking trails. The local people are warm-hearted and welcoming. I really love living in Tandil because it combines the tranquility of nature with modern educational and sporting facilities.",
          usefulPhrases: [
            'I would like to describe my hometown...',
            'It has a population of approximately...',
            'Compared to large metropolitan areas...',
            'The landscape features picturesque hills and...',
            'One of the main attractions is...',
            'I have a strong affection for this town because...'
          ]
        },
        {
          student: 'B',
          cardTitle: 'Descriptive Monologue: A Memorable Place / Holidays',
          prompt: 'Talk about a place you admire or an unforgettable vacation.',
          bulletPoints: [
            'Location and why you travelled there',
            'Who accompanied you and how you reached the destination',
            'Climate and geographical highlights',
            'Key activities and cultural highlights',
            'Why this place remains memorable in your life'
          ],
          modelResponse: "I want to talk about Bariloche, located in Patagonia in southwestern Argentina. I travelled there last winter with my squad colleagues by bus. The region is famous for its massive snow-capped Andean peaks, crystal-clear glacial lakes, and dense pine woodlands. The weather was freezing with frequent snowfalls, which was magical. We spent days skiing at Cerro Catedral, hiking in national parks, and sampling traditional alpine chocolates in the civic centre. What I loved most was the pristine mountain air and the sense of camaraderie during our outdoor expeditions.",
          usefulPhrases: [
            'I would like to talk about...',
            'It is located in...',
            'The climate is characterised by...',
            'We had the opportunity to...',
            'What impressed me most was...'
          ]
        }
      ]
    },
    part3Interaction: {
      type: 'roleplay',
      title: 'Step C: Roleplay – Four-Star Hotel Reservation',
      durationMinutes: 5,
      scenarioDescription: 'Two candidates interact in a telephone reservation inquiry for a 4-star hotel.',
      studentARole: {
        title: 'Student A (Tourist with Family)',
        instructions: [
          'Phone the hotel to make a reservation.',
          'Explain you are married with two children.',
          'Ask about facilities: swimming pool, restaurant, parking, baby-sitters, cable TV.',
          'Inquire about room rates and overall price.'
        ],
        usefulLanguage: [
          'Hello, I would like to make a reservation for next month.',
          'I am travelling with my wife and our two young children.',
          'Could you tell me if you have a heated swimming pool and parking?',
          'Do you provide babysitting services?',
          'How much is the family suite per night?'
        ]
      },
      studentBRole: {
        title: 'Student B (Four-Star Hotel Receptionist)',
        instructions: [
          'Answer the phone professionally.',
          'Provide clear information about hotel amenities and prices.',
          'Collect necessary personal information: ID/passport, arrival date, stay duration, room preference.',
          'Confirm booking details.'
        ],
        usefulLanguage: [
          'Grand Palace Hotel, reception desk. How may I assist you today?',
          'Yes, we feature a heated indoor pool, valet parking, and licensed child-care.',
          'May I take your full name and passport number?',
          'What date are you planning to arrive, and for how many nights?',
          'We have an interconnecting family suite available for that week.'
        ]
      },
      sampleDialogue: [
        { speaker: 'Student A', text: "Hello! I am calling to make a reservation for a family holiday in July.", role: 'studentA' },
        { speaker: 'Student B', text: "Good morning! Welcome to the Grand Palace Hotel. I will be glad to assist you. How many guests will be staying?", role: 'studentB' },
        { speaker: 'Student A', text: "I am married and we have two children aged six and eight. We need information about your facilities: do you have a swimming pool, restaurant, and secure car park?", role: 'studentA' },
        { speaker: 'Student B', text: "Yes, sir. We offer a heated indoor swimming pool, a restaurant serving breakfast and dinner, and private undercover parking. We also have qualified baby-sitters upon request.", role: 'studentB' },
        { speaker: 'Student A', text: "That sounds ideal! Do the rooms have cable TV and Wi-Fi? And how much does a family room cost per night?", role: 'studentA' },
        { speaker: 'Student B', text: "All our suites have smart cable TV and high-speed Wi-Fi. Our family suite is one hundred and twenty pounds per night. Could I take your ID number and arrival date?", role: 'studentB' },
        { speaker: 'Student A', text: "My passport number is 18459203. We will arrive on July 10th for five nights.", role: 'studentA' },
        { speaker: 'Student B', text: "Perfect, Mr Gomez. Your reservation is confirmed. We look forward to welcoming your family on July 10th.", role: 'studentB' }
      ]
    },
    stanagRubric: [
      { criterion: 'Discurso Descriptivo y Monólogo', maxPoints: 4, description: 'Organización lógica de ideas sobre lugares, geografía y clima.', guidelines: ['Conectores descriptivos', 'Comparativos (much quieter than)'] },
      { criterion: 'Riqueza Léxica', maxPoints: 4, description: 'Vocabulario adecuado de turismo, instalaciones de hotel y entorno.', guidelines: ['Términos precisos', 'Adjetivos variados'] },
      { criterion: 'Precisión Gramatical', maxPoints: 4, description: 'Uso correcto de Pasado Simple, Futuro (going to) y Comparativos.', guidelines: ['Tiempos verbales correctos', 'Construcción de preguntas'] },
      { criterion: 'Pronunciación e Inteligibilidad', maxPoints: 4, description: 'Claridad en la articulación, acentuación y ritmo comunicativo.', guidelines: ['Acento comprensible', 'Pausas naturales'] },
      { criterion: 'Interacción en Roleplay', maxPoints: 4, description: 'Intercambio fluido de información fáctica no personal por teléfono.', guidelines: ['Negociación de turnos', 'Preguntas y respuestas claras'] }
    ]
  },

  // =========================================================================
  // NIVEL 3 (Parte 5 – Producción Oral) - 15 min - 20 pts
  // =========================================================================
  3: {
    levelNumber: 3,
    levelRoman: 'III',
    partTitle: 'Parte 5 – Producción Oral',
    timeAllowedMinutes: 15,
    totalPoints: 20,
    overview: 'There are two examiners: an interlocutor and an assessor. The candidates are examined in pairs (whole test ~15 minutes). Steps include: Guided interview, Photograph description, and Roleplay.',
    part1Interview: {
      title: 'Step 1: Guided Interview (about 5 minutes)',
      duration: '5 minutes',
      instructions: 'Spontaneous warm-up conversation. Candidates must avoid one-word answers and extend their replies with reasons and examples.',
      questionsA: [
        {
          id: 'l3-p1-q1',
          student: 'A',
          question: "Where do you come from? Do you work or are you a student?",
          audioPromptText: "Where do you come from? Do you work or are you a student?",
          modelAnswer: "I come from Santa Fe, Argentina. At present, I am an army lieutenant serving in an engineering battalion, while also completing advanced technical studies in civil defense.",
          usefulVocabulary: ['I come from...', 'At present, I work as...', 'I am also studying...']
        },
        {
          id: 'l3-p1-q2',
          student: 'A',
          question: "Do you enjoy studying English? Why (not)?",
          audioPromptText: "Do you enjoy studying English? Why or why not?",
          modelAnswer: "Yes, I enjoy it immensely. English is the universal language of peacekeeping operations and multinational exercises, so mastering it gives me great confidence and career opportunities.",
          usefulVocabulary: ['I enjoy it immensely because...', 'It is essential for...', 'Career advancement']
        },
        {
          id: 'l3-p1-q3',
          student: 'A',
          question: "What did you do last weekend?",
          audioPromptText: "What did you do last weekend?",
          modelAnswer: "Last weekend, I caught up on physical fitness. I completed a ten-kilometre cross-country run on Saturday morning, and on Sunday I invited my relatives over for an open-air barbecue.",
          usefulVocabulary: ['I caught up on...', 'Cross-country run', 'Gathered with family']
        }
      ],
      questionsB: [
        {
          id: 'l3-p1-q4',
          student: 'B',
          question: "Where do you live? Have you got a job? What subject do you study?",
          audioPromptText: "Where do you live? Have you got a job? What subject do you study?",
          modelAnswer: "I live in Buenos Aires near the Military College. I work as an operations specialist in communications and I am currently studying electronic networking and tactical English.",
          usefulVocabulary: ['I live near...', 'I work as an operations specialist', 'My field of study is...']
        },
        {
          id: 'l3-p1-q5',
          student: 'B',
          question: "What did you enjoy doing when you were a child?",
          audioPromptText: "What did you enjoy doing when you were a child?",
          modelAnswer: "When I was a child, I used to spend hours outdoors exploring the woods, building treehouses with my cousins, and cycling along country roads after school.",
          usefulVocabulary: ['When I was a child, I used to...', 'Spend hours outdoors', 'Building and exploring']
        },
        {
          id: 'l3-p1-q6',
          student: 'B',
          question: "How do you think speaking English will help your professional future?",
          audioPromptText: "How do you think speaking English will help your professional future?",
          modelAnswer: "It will enable me to deploy abroad with UN missions, comprehend tactical field manuals without delay, and coordinate efficiently with international coalition officers.",
          usefulVocabulary: ['Deploy abroad', 'Understand technical documentation', 'Coordinate with colleagues']
        }
      ]
    },
    part2Monologue: {
      title: 'Step 2: Photograph Description (about 5 minutes)',
      duration: '5 minutes',
      instructions: 'Each candidate describes a picture in detail as if speaking to someone who cannot see it, followed by opinion and lifestyle questions.',
      tasks: [
        {
          student: 'A',
          cardTitle: 'Student A: Friends having dinner at a restaurant',
          prompt: 'Describe this picture about people spending their free time on a weekend. Include as much detail as you can.',
          bulletPoints: [
            'Describe the scene: a group of five cheerful friends around a round wooden dining table in a rustic restaurant',
            'Details: food dishes, wine glasses, chandelier, stone arches in the background',
            'Follow-up: How do you like to spend your free time?',
            'Follow-up: Do you think you have enough free time to enjoy?',
            'Follow-up: Is there anything you prefer NOT to do during your free time?'
          ],
          modelResponse: "In this photograph, I can see a group of five cheerful friends enjoying an evening meal in what looks like a cosy, rustic restaurant. They are gathered closely around a circular table covered with dinner plates, bread, and wine glasses. In the background, there is an ornate iron chandelier and warm stone arches, suggesting a welcoming, lively atmosphere. The people are smiling warmly at the camera, wearing casual winter sweaters and scarves. As for myself, I love spending free time dining with friends because it allows us to unwind after intense working weeks. Personally, I don't feel I have enough free time due to duty rosters. During my weekends, I definitely prefer NOT to check work emails or do administrative paperwork.",
          usefulPhrases: [
            'In the foreground / background, I can see...',
            'The atmosphere appears to be lively and...',
            'They seem to be enjoying...',
            'Personally, I prefer spending my free time...',
            'One thing I avoid doing on weekends is...'
          ]
        },
        {
          student: 'B',
          cardTitle: 'Student B: Family watching television on a sofa',
          prompt: 'Describe this picture about people spending their free time on a weekend. Include as much detail as you can.',
          bulletPoints: [
            'Describe the scene: family (parents and children) sitting together on a comfortable sofa watching television',
            'Details: living room, modern flat-screen TV on wooden unit, stereo speakers, home environment',
            'Follow-up: Do you prefer to spend your free time alone or with others?',
            'Follow-up: What kind of activities do you enjoy most doing in your free time?',
            'Follow-up: Do you think people should have more free time these days?'
          ],
          modelResponse: "This picture shows a family enjoying quiet leisure time together at home. The parents and their young children are seen from behind, relaxing comfortably on a large beige sofa. They are watching a flat-screen television mounted on a contemporary wooden living room unit flanked by tall speakers. The room looks bright, tidy, and peaceful. Regarding my own habits, I generally prefer spending my leisure time with others, especially family, because shared experiences create lasting bonds. I particularly enjoy outdoor sports and barbecues. In my view, people definitely ought to have more free time nowadays, because modern work pressure often leads to stress and burnout.",
          usefulPhrases: [
            'This image depicts a family relaxing...',
            'From their posture, they appear relaxed and...',
            'The setting is a modern living room with...',
            'I firmly believe people need more leisure time because...',
            'In contrast to solitary activities...'
          ]
        }
      ]
    },
    part3Interaction: {
      type: 'roleplay',
      title: 'Step 3: Roleplay – Planning Weekend Outing (4-5 minutes)',
      durationMinutes: 5,
      scenarioDescription: 'Student A invites Student B to go out next weekend. Student B accepts happily. They negotiate where to go, activities, timings, and other friends to invite.',
      studentARole: {
        title: 'Student A (Initiator)',
        instructions: [
          'Invite your friend to go out next weekend.',
          'Suggest a venue or activity (e.g. cinema, hiking, or eating out).',
          'Discuss dates, meeting point, and exact time.',
          'Ask if they want to invite other mutual friends.'
        ],
        usefulLanguage: [
          'Are you free next Saturday evening?',
          'Would you like to go to the cinema or grab some dinner?',
          'How about meeting outside the metro station at seven?',
          'Shall we ask Marcos and Julia to come along?'
        ]
      },
      studentBRole: {
        title: 'Student B (Responder)',
        instructions: [
          'Accept the invitation enthusiastically.',
          'Agree or suggest alternative activities.',
          'Confirm the meeting location and schedule.',
          'Agree on inviting mutual friends and offer to send them messages.'
        ],
        usefulLanguage: [
          'I would love to! That sounds like great fun.',
          'Going for dinner sounds fantastic. What type of food do you fancy?',
          'Seven o’clock suits me perfectly.',
          'Yes, let’s invite Marcos! I will send him a message right away.'
        ]
      },
      sampleDialogue: [
        { speaker: 'Student A', text: "Hi Julian! Are you up to anything exciting next Saturday?", role: 'studentA' },
        { speaker: 'Student B', text: "Hi Martin! No, I don't have any firm plans yet. Why do you ask?", role: 'studentB' },
        { speaker: 'Student A', text: "Well, I was wondering if you’d like to go out together. Perhaps we could watch the new thriller at the cinema and then grab some pizza?", role: 'studentA' },
        { speaker: 'Student B', text: "That sounds like a brilliant idea! I've been wanting to see that movie for weeks. Where and when should we meet?", role: 'studentB' },
        { speaker: 'Student A', text: "How about meeting at seven fifteen in front of the central cinema entrance?", role: 'studentA' },
        { speaker: 'Student B', text: "Seven fifteen suits me perfectly. Should we invite Diego and Lucas from our squad as well?", role: 'studentB' },
        { speaker: 'Student A', text: "Definitely! The more, the merrier. Could you drop them a text?", role: 'studentA' },
        { speaker: 'Student B', text: "Consider it done. I'll message them right now. See you on Saturday at seven fifteen!", role: 'studentB' }
      ]
    },
    stanagRubric: [
      { criterion: 'Descripción Fotográfica y Detalle', maxPoints: 4, description: 'Habilidad para describir personas, entorno, planos y atmósfera.', guidelines: ['Uso de preposiciones de lugar', 'Adjetivos sensoriales'] },
      { criterion: 'Extensión y Justificación', maxPoints: 4, description: 'Desarrollo de respuestas sin monosílabos, aportando causas y ejemplos.', guidelines: ['Conectores (because, whereas)', 'Ejemplos personales'] },
      { criterion: 'Interacción y Negociación (Roleplay)', maxPoints: 4, description: 'Propuesta, aceptación, contrapropuesta y consenso entre pares.', guidelines: ['Fórmulas para invitar', 'Toma de decisiones mutuas'] },
      { criterion: 'Gramática y Estructuras', maxPoints: 4, description: 'Uso de Present Continuous para imágenes y modales de sugerencia (Shall we, How about).', guidelines: ['Modales de sugerencia', 'Tiempos pasados y futuros'] },
      { criterion: 'Pronunciación y Fluidez', maxPoints: 4, description: 'Articulación clara y natural sin vacilación prolongada.', guidelines: ['Inteligibilidad clara', 'Fluidez comunicativa'] }
    ]
  },

  // =========================================================================
  // NIVEL 4 (Parte 5 – Producción Oral) - 15 min - 20 pts
  // =========================================================================
  4: {
    levelNumber: 4,
    levelRoman: 'IV',
    partTitle: 'Parte 5 – Producción Oral',
    timeAllowedMinutes: 15,
    totalPoints: 20,
    overview: 'The whole test takes around fifteen minutes involving a pair of candidates and two examiners. Steps: Guided interview (warm-up), Photograph description and general conversation, and Simulated situation with visual prompts.',
    part1Interview: {
      title: 'Step 1: Guided Interview (4-5 minutes)',
      duration: '4-5 minutes',
      instructions: 'Spontaneous conversation covering likes/dislikes, present circumstances, childhood memories, and future professional goals.',
      questionsA: [
        {
          id: 'l4-p1-q1',
          student: 'A',
          question: "Where do you come from and what is your current profession or study field?",
          audioPromptText: "Where do you come from and what is your current profession or study field?",
          modelAnswer: "I am originally from Mendoza. Currently, I serve as an infantry officer in the Argentine Army, specialising in mountain operations and bilingual tactical reconnaissance.",
          usefulVocabulary: ['Originally from...', 'I serve as...', 'Specialising in tactical reconnaissance']
        },
        {
          id: 'l4-p1-q2',
          student: 'A',
          question: "What did you enjoy doing most during your last holidays?",
          audioPromptText: "What did you enjoy doing most during your last holidays?",
          modelAnswer: "During my last holidays, I explored the glacial lakes in southern Patagonia. What I enjoyed most was trekking along remote trails where there was no cellular coverage, which provided true mental relaxation.",
          usefulVocabulary: ['During my last holidays...', 'What I enjoyed most was...', 'Mental relaxation']
        },
        {
          id: 'l4-p1-q3',
          student: 'A',
          question: "What are your future professional aspirations for the next five years?",
          audioPromptText: "What are your future professional aspirations for the next five years?",
          modelAnswer: "Over the next five years, I aspire to earn my STANAG 6001 Level 3 certification, qualify for a United Nations peacekeeping deployment, and command a specialized logistics company.",
          usefulVocabulary: ['I aspire to...', 'Deploy on a peacekeeping mission', 'Command a company']
        }
      ],
      questionsB: [
        {
          id: 'l4-p1-q4',
          student: 'B',
          question: "Where do you live? What did you enjoy doing when you were a child?",
          audioPromptText: "Where do you live? What did you enjoy doing when you were a child?",
          modelAnswer: "I live in Campo de Mayo near the military garrison. As a child, I was passionate about assembling scale model aircraft and participating in scouting expeditions with my schoolmates.",
          usefulVocabulary: ['I live near...', 'As a child, I was passionate about...', 'Participating in expeditions']
        },
        {
          id: 'l4-p1-q5',
          student: 'B',
          question: "What do you find most challenging and most rewarding about learning English?",
          audioPromptText: "What do you find most challenging and most rewarding about learning English?",
          modelAnswer: "The most challenging aspect is mastering idiomatic expressions and rapid military acronyms. Conversely, the most rewarding part is conversing seamlessly with international colleagues during joint exercises.",
          usefulVocabulary: ['The most challenging aspect...', 'Conversely, the most rewarding part...', 'Conversing seamlessly']
        },
        {
          id: 'l4-p1-q6',
          student: 'B',
          question: "How do you manage to balance demanding duty hours with leisure activities?",
          audioPromptText: "How do you manage to balance demanding duty hours with leisure activities?",
          modelAnswer: "Discipline is paramount. I ensure that I schedule regular running sessions and read books in the evening, which helps me decompress after rigorous tactical duties.",
          usefulVocabulary: ['Discipline is paramount', 'I ensure that I schedule...', 'Decompress after duty']
        }
      ]
    },
    part2Monologue: {
      title: 'Step 2: Photograph Description & Conversation (5 minutes)',
      duration: '5 minutes',
      instructions: 'Each candidate describes a picture about reading and writing, comparing childhood reading habits with the present, and expressing views on future print media.',
      tasks: [
        {
          student: 'A',
          cardTitle: 'Student A: Young man reading in a kitchen / catering setting',
          prompt: 'Describe the picture of the young man studying in the kitchen and answer the follow-up questions.',
          bulletPoints: [
            'Description: young man in a catering apron focused intently on a paperback book surrounded by kitchen equipment',
            'Follow-up: Do you like reading in your free time? Why / Why not?',
            'Follow-up: Do you think books and magazines will disappear in the near future?'
          ],
          modelResponse: "This photograph portrays a young man sitting at a stainless steel work counter in a commercial catering kitchen. He is wearing a dark apron with 'Caterer' printed across the front, and he is reading a book with intense focus during what seems to be a work break. In the background, there are metal shelves with cooking supplies and kitchen gear. Regarding free-time reading, I am an enthusiastic reader because books broaden one's perspectives and enhance analytical thinking. Regarding the future of printed media, I firmly believe that physical books will never completely disappear. Even though e-books and tablets offer undeniable convenience, printed books possess an irreplaceable tactile quality and do not suffer from battery drain or screen glare.",
          usefulPhrases: [
            'The picture illustrates a person reading...',
            'He appears engrossed in his reading...',
            'As far as I am concerned, reading fosters...',
            'Although digital devices are widespread, I doubt that books will disappear because...'
          ]
        },
        {
          student: 'B',
          cardTitle: 'Student B: Young man writing with headphones',
          prompt: 'Describe the picture of the student writing notes and answer the follow-up questions.',
          bulletPoints: [
            'Description: young student wearing over-ear headphones, leaning forward to write notes on paper in a café or study hall',
            'Follow-up: Do you usually listen to music while you do other activities?',
            'Follow-up: What do you prefer: physical or mental work? Why?'
          ],
          modelResponse: "In this picture, we can observe a young man in casual attire sitting on a chair, intently writing handwritten notes on a pad placed on his lap. He is wearing headphones, which suggests he is either listening to a lecture or enjoying music to block out external distractions. The setting looks like a library or campus lounge. Speaking from experience, I often listen to instrumental classical or ambient music while studying, as it enhances my focus. When considering physical versus mental work, I believe a balanced combination is optimal. In the armed forces, mental agility is necessary for strategic planning, but physical stamina is equally vital to withstand harsh field environments.",
          usefulPhrases: [
            'The image portrays a student wearing headphones...',
            'He is writing notes diligently...',
            'Personally, listening to instrumental music helps me...',
            'In my view, physical and mental labor are complementary because...'
          ]
        }
      ]
    },
    part3Interaction: {
      type: 'simulated_situation',
      title: 'Step 3: Simulated Situation – Preparing for 6 Months in England (5 minutes)',
      durationMinutes: 5,
      scenarioDescription: 'A mutual friend is planning to spend 6 months in England to improve her English. Candidates discuss the essential items shown in the prompt pictures and reach a consensus on the most important items.',
      studentARole: {
        title: 'Student A',
        instructions: [
          'Introduce the scenario and propose items from the sheet.',
          'Argue for weather protection (heavy winter coat, umbrella, gloves).',
          'Evaluate language study tools (dictionary, notebook).',
          'Negotiate agreement on the top 2 indispensable items.'
        ],
        usefulLanguage: [
          'Given England’s notoriously rainy climate, an umbrella is essential.',
          'Don’t you think a warm winter coat should take priority?',
          'She will definitely need a backpack for daily commuting.',
          'Let’s weigh the pros and cons of taking a paper dictionary versus using a smartphone.'
        ]
      },
      studentBRole: {
        title: 'Student B',
        instructions: [
          'Respond to Student A’s proposals and introduce other items (camera, city map, audio player).',
          'Weigh practical navigation versus digital alternatives.',
          'Reach a consensus on what must be prioritized.'
        ],
        usefulLanguage: [
          'I completely agree with you regarding the overcoat.',
          'However, in terms of navigation, a tube map or smartphone is crucial.',
          'A digital camera might be useful, but her phone can do that.',
          'So, shall we agree that the winter coat and the dictionary/backpack are the top priorities?'
        ]
      },
      itemImages: [
        { id: 'coat', name: 'Heavy Winter Overcoat', category: 'Clothing', description: 'Essential for chilly, damp British autumn and winter temperatures.' },
        { id: 'umbrella', name: 'Compact Umbrella', category: 'Weather', description: 'Indispensable for frequent, sudden UK downpours.' },
        { id: 'dictionary', name: 'Oxford English Dictionary', category: 'Academics', description: 'Reliable vocabulary reference for English immersion.' },
        { id: 'backpack', name: 'Sturdy Commuter Backpack', category: 'Luggage', description: 'Carrying textbooks, laptop, and lunch during daily travel.' },
        { id: 'tube_map', name: 'London Underground & City Map', category: 'Navigation', description: 'Navigating public transport efficiently across urban zones.' },
        { id: 'camera', name: 'Digital Camera', category: 'Memories', description: 'Capturing historic landmarks and sightseeing moments.' },
        { id: 'winter_gear', name: 'Beanie Hat, Scarf and Gloves', category: 'Clothing', description: 'Thermal protection against freezing winter winds.' },
        { id: 'audio_player', name: 'Audio Listening Player', category: 'Study', description: 'Listening to English podcasts and audiobooks on the move.' }
      ],
      sampleDialogue: [
        { speaker: 'Student A', text: "Shall we look at what our friend will need most during her six-month stay in England?", role: 'studentA' },
        { speaker: 'Student B', text: "Yes, definitely. Considering England's notoriously damp and cold weather, I think a heavy waterproof coat and an umbrella are absolute necessities.", role: 'studentB' },
        { speaker: 'Student A', text: "I couldn't agree more. Without warm clothing, she won't be able to enjoy exploring. But what about academic tools? An Oxford English Dictionary would help her vocabulary immensely.", role: 'studentA' },
        { speaker: 'Student B', text: "That is true, although nowadays most students use dictionary apps on their phones. However, having a sturdy backpack to carry her books to class every day is undeniable.", role: 'studentB' },
        { speaker: 'Student A', text: "Good point. And how about the camera and the tube map?", role: 'studentA' },
        { speaker: 'Student B', text: "A smartphone can take photos and provide GPS, so the camera is optional. But winter accessories like gloves and a beanie hat will be crucial between November and February.", role: 'studentB' },
        { speaker: 'Student A', text: "So, shall we conclude that the warm overcoat, the umbrella, and the commuter backpack are the three most vital items to bring?", role: 'studentA' },
        { speaker: 'Student B', text: "Agreed! Those three items provide comfort, protection, and daily practical utility.", role: 'studentB' }
      ],
      consensusPrompt: 'Decide together which 3 items are the most indispensable for surviving and studying successfully in England for 6 months.'
    },
    stanagRubric: [
      { criterion: 'Discurso Monológico y Opinión', maxPoints: 4, description: 'Profundidad en el comentario fotográfico y reflexión sobre lectura/tecnología.', guidelines: ['Argumentación razonada', 'Estructura clara'] },
      { criterion: 'Interacción y Negociación en Simulación', maxPoints: 4, description: 'Intercambio activo de pros y contras, sugerencias y búsqueda de consenso.', guidelines: ['Agreeing/disagreeing', 'Turn-taking fluido'] },
      { criterion: 'Gama Léxica y Colocaciones', maxPoints: 4, description: 'Vocabulario amplio sobre clima, viajes, tecnología y educación.', guidelines: ['Colocaciones naturales', 'Precisión terminológica'] },
      { criterion: 'Control Gramatical', maxPoints: 4, description: 'Manejo de condicionales, modales de deducción y conectores contrastivos.', guidelines: ['Uso de would/should', 'Conectores (however, whereas)'] },
      { criterion: 'Pronunciación y Cohesión', maxPoints: 4, description: 'Entonación natural, pausas adecuadas y dicción fluida.', guidelines: ['Acentuación oracional', 'Sonidos claros'] }
    ]
  },

  // =========================================================================
  // NIVEL 5 (Parte 5 – Producción Oral) - 15-20 min - 20 pts
  // =========================================================================
  5: {
    levelNumber: 5,
    levelRoman: 'V',
    partTitle: 'Parte 5 – Producción Oral',
    timeAllowedMinutes: 20,
    totalPoints: 20,
    overview: 'The whole oral test takes about 15-20 minutes involving two examiners (interlocutor and assessor) and a pair of candidates. Steps: Section 1 (Conversation 5-8 min), Section 2 (Picture comparison ~5 min), Section 3 (Simulated situation ~8 min).',
    part1Interview: {
      title: 'Section 1: In-depth Conversation (5-8 minutes)',
      duration: '5-8 minutes',
      instructions: 'General conversation assessing spontaneous social and professional interaction. Candidates must elaborate thoroughly with examples.',
      questionsA: [
        {
          id: 'l5-p1-q1',
          student: 'A',
          question: "Could you tell me something about the area where you grew up? What did you like about living there?",
          audioPromptText: "Could you tell me something about the area where you grew up? What did you like about living there?",
          modelAnswer: "I grew up in the foothills of the Andes in western Argentina. What I cherished most was the sense of safety and uninterrupted contact with nature. Neighbors knew one another intimately, and children had boundless freedom to roam outdoors without parental anxiety.",
          usefulVocabulary: ['I grew up in...', 'What I cherished most was...', 'Uninterrupted contact with nature']
        },
        {
          id: 'l5-p1-q2',
          student: 'A',
          question: "How much time do you spend at home nowadays, and what do you most enjoy doing when at home?",
          audioPromptText: "How much time do you spend at home nowadays, and what do you most enjoy doing when you are at home?",
          modelAnswer: "Due to rigorous command duties, my time at home is unfortunately constrained. When I do have an evening off, I relish cooking gourmet meals from scratch and immersing myself in international geopolitical journals.",
          usefulVocabulary: ['Due to command duties...', 'My time is constrained', 'I relish cooking...', 'Immersing myself in...']
        },
        {
          id: 'l5-p1-q3',
          student: 'A',
          question: "How has environmental awareness influenced military operations and logistics in recent years?",
          audioPromptText: "How has environmental awareness influenced military operations and logistics in recent years?",
          modelAnswer: "Significantly. Modern defense doctrines mandate ecological impact assessments prior to maneuvers, proper hazardous material protocols, and a transition towards renewable energy in field base camps.",
          usefulVocabulary: ['Ecological impact assessments', 'Hazardous material protocols', 'Renewable field energy']
        }
      ],
      questionsB: [
        {
          id: 'l5-p1-q4',
          student: 'B',
          question: "Could you describe your ideal home and how it reflects your personality?",
          audioPromptText: "Could you describe your ideal home and how it reflects your personality?",
          modelAnswer: "My ideal home would be an eco-friendly stone residence situated near a lake, equipped with large glass windows that maximize natural daylight. It would feature an extensive study and a workshop, reflecting my appreciation for intellectual solitude and craftsmanship.",
          usefulVocabulary: ['Eco-friendly stone residence', 'Maximize natural daylight', 'Intellectual solitude']
        },
        {
          id: 'l5-p1-q5',
          student: 'B',
          question: "To what extent has digital media altered the way people consume news and form political opinions?",
          audioPromptText: "To what extent has digital media altered the way people consume news and form political opinions?",
          modelAnswer: "Digital media has fundamentally democratized information flow, yet it has simultaneously fostered dangerous algorithmic echo chambers where sensationalism frequently eclipses verified factual journalism.",
          usefulVocabulary: ['Democratized information flow', 'Algorithmic echo chambers', 'Eclipses verified journalism']
        },
        {
          id: 'l5-p1-q6',
          student: 'B',
          question: "What qualities distinguish an outstanding military commander in high-stress operational theaters?",
          audioPromptText: "What qualities distinguish an outstanding military commander in high-stress operational theaters?",
          modelAnswer: "An exceptional commander blends unwavering moral integrity with emotional resilience, rapid analytical decision-making under uncertainty, and profound empathy for subordinates.",
          usefulVocabulary: ['Moral integrity', 'Emotional resilience', 'Analytical decision-making under uncertainty']
        }
      ]
    },
    part2Monologue: {
      title: 'Section 2: Picture Comparison & Speculation (around 5 minutes)',
      duration: '5 minutes',
      instructions: 'Candidates compare and contrast two visuals, speculate about motivations/emotions, give reasons, and answer a follow-up question. (Do not simply describe).',
      tasks: [
        {
          student: 'A',
          cardTitle: 'Student A: Holiday Destinations (Beach vs Historic Cathedral)',
          prompt: 'Compare and contrast these pictures. Say why you think the people might have chosen to visit these places. Follow-up: Do you enjoy sightseeing?',
          bulletPoints: [
            'Visual 1: People strolling along a misty, windy ocean beach',
            'Visual 2: Tourists looking up in awe at the intricate interior ceiling of a historic European cathedral',
            'Speculate on motivations: relaxation & nature vs cultural enrichment & history',
            'Follow-up: Do you enjoy sightseeing?'
          ],
          modelResponse: "Both photographs depict individuals spending leisure time away from their daily routines; however, the motivations driving their choices appear markedly distinct. In the first image, the people walking along the breezy shoreline seem to seek tranquility, physical rejuvenation, and escapism from urban stress. The open seascape fosters contemplation. In stark contrast, the tourists in the second image have opted for an intellectually stimulating cultural experience, admiring the architectural grandeur and spiritual heritage of a historic cathedral. They are likely passionate about art history and human achievement. As for my personal tastes, I thoroughly enjoy sightseeing, particularly visiting historical fortresses and museums, because understanding the past illuminates our present strategic realities.",
          usefulPhrases: [
            'While the first image highlights..., the second focuses on...',
            'The people might have opted for this destination in order to...',
            'In sharp contrast to the open seascape...',
            'They are likely seeking cultural enrichment rather than...'
          ]
        },
        {
          student: 'B',
          cardTitle: 'Student B: Group Gatherings (Social Commute vs Business Meeting)',
          prompt: 'Compare and contrast these pictures. Say how you think these people feel about being together. Follow-up: How often do you spend time with other people?',
          bulletPoints: [
            'Visual 1: Young friends laughing and having fun on a subway or carnival carousel',
            'Visual 2: Business professionals in suits engaged in an intense strategic discussion around a boardroom table',
            'Speculate on feelings: spontaneous joy and friendship vs professional pressure, collaboration, and high stakes',
            'Follow-up: How often do you spend time with other people?'
          ],
          modelResponse: "These photographs offer a striking juxtaposition of human interaction in informal versus formal spheres. In the first visual, the young individuals appear jubilant and carefree. Their body language reflects spontaneous affection, mutual trust, and sheer enjoyment of each other's company without any agenda. Conversely, the corporate colleagues in the second photograph are absorbed in serious deliberation. While they might feel a strong sense of professional camaraderie and collective purpose, there is an unmistakable undercurrent of tension and accountability, as critical decisions may be at stake. Regarding my own social life, given my military commitments, I interact with team members constantly throughout the day; however, I ensure that I reserve quality weekends for intimate family time.",
          usefulPhrases: [
            'The visuals present a striking contrast between...',
            'In the former, there is an atmosphere of uninhibited joy...',
            'Conversely, the latter illustrates professional pressure and...',
            'Their expressions convey deep concentration rather than...'
          ]
        }
      ]
    },
    part3Interaction: {
      type: 'collaborative_task',
      title: 'Section 3: Simulated Situation – Planning a Memorable Holiday (around 8 minutes)',
      durationMinutes: 8,
      scenarioDescription: 'Candidates receive a mind map diagram with the central question: "What should people consider when planning a memorable holiday?" and 5 surrounding factors: Destination, Weather, Transport, Budget, and Activities.',
      studentARole: {
        title: 'Student A',
        instructions: [
          'Initiate the discussion addressing the central question.',
          'Analyze the impact of Budget and Destination.',
          'Elicit your partner’s opinion and challenge assumptions courteously.',
          'Work together to agree on the two most decisive considerations.'
        ],
        usefulLanguage: [
          'Shall we start by examining the correlation between budget and destination?',
          'Without sufficient financial planning, many options become unattainable.',
          'What is your take on the importance of local weather conditions?',
          'Would you agree that transport logistics can make or break the trip?'
        ]
      },
      studentBRole: {
        title: 'Student B',
        instructions: [
          'Respond constructively, expanding on Weather and Transport.',
          'Argue how Activities dictate the overall satisfaction and memories.',
          'Negotiate and prioritize which factors are primary versus secondary.'
        ],
        usefulLanguage: [
          'You raise a valid point regarding finances; however, even with a modest budget, weather is critical.',
          'If travelers face continuous rainfall, outdoor activities become impossible.',
          'I would argue that the variety of activities is what makes a trip truly unforgettable.',
          'Can we reach a consensus that Budget establishes the parameters, but Activities define the experience?'
        ]
      },
      mindMapOptions: {
        centralPrompt: 'What should people consider when planning a memorable holiday?',
        branches: [
          {
            id: 'l4-dest',
            label: 'Destination',
            details: 'Safety, cultural appeal, visa regulations, accessibility, and local hospitality.',
            suggestedArguments: ['Choosing between exotic overseas locations vs domestic retreats.', 'Assessing geopolitical stability and health advice.']
          },
          {
            id: 'l4-budget',
            label: 'Budget',
            details: 'Accommodation fees, flights, daily meals, excursion tickets, and contingency emergency funds.',
            suggestedArguments: ['Budget determines whether luxury resorts or budget hostels are viable.', 'Crucial to prevent unforeseen financial distress.']
          },
          {
            id: 'l4-activities',
            label: 'Activities',
            details: 'Outdoor trekking, watersports, historical sightseeing, culinary exploration, and nightlife.',
            suggestedArguments: ['Engaging pursuits form the actual enduring memories.', 'Tailoring activities to the physical fitness of the group.']
          },
          {
            id: 'l4-transport',
            label: 'Transport',
            details: 'Direct flights, high-speed rail, rental vehicles, and local bus networks.',
            suggestedArguments: ['Efficient transport saves precious holiday hours.', 'Remote destinations may involve grueling overland journeys.']
          },
          {
            id: 'l4-weather',
            label: 'Weather',
            details: 'Seasonal temperatures, monsoon seasons, snow conditions, and daylight hours.',
            suggestedArguments: ['Unfavorable weather can ruin outdoor itineraries.', 'Crucial for packing the appropriate technical gear.']
          }
        ]
      },
      sampleDialogue: [
        { speaker: 'Student A', text: "Shall we examine the central question of what individuals should prioritize when planning a memorable holiday?", role: 'studentA' },
        { speaker: 'Student B', text: "By all means. In my view, everything fundamentally pivots on the Budget. The financial allocation dictates the distance one can travel, the standard of accommodation, and the range of experiences available.", role: 'studentB' },
        { speaker: 'Student A', text: "I certainly see your rationale; however, wouldn't you say that the Destination itself is the primary catalyst? If the destination lacks cultural charm or natural splendor, even a lavish budget cannot guarantee a truly memorable trip.", role: 'studentA' },
        { speaker: 'Student B', text: "That is true, but what about the Weather? If a traveler journeys to an idyllic beach destination during the monsoon season, the entire itinerary could be spoiled by torrential storms.", role: 'studentB' },
        { speaker: 'Student A', text: "Indeed, weather forecasting is critical. Moreover, we must not overlook the Activities. A memorable holiday is defined by what you actively do—whether that means scuba diving, hiking rugged peaks, or sampling regional cuisine.", role: 'studentA' },
        { speaker: 'Student B', text: "Precisely. Transport also plays a supporting role, since prolonged transit delays induce immense fatigue. So, if we had to select the two paramount considerations, which would you nominate?", role: 'studentB' },
        { speaker: 'Student A', text: "I would propose Budget as the foundational prerequisite, and Activities as the experiential soul of the holiday.", role: 'studentA' },
        { speaker: 'Student B', text: "I completely concur with that verdict. Budget sets the realistic boundaries, while curated activities create the lifelong memories.", role: 'studentB' }
      ],
      consensusPrompt: 'Negotiate and decide together which two considerations are the most crucial for ensuring a vacation is genuinely unforgettable.'
    },
    stanagRubric: [
      { criterion: 'Discurso Monológico y Especulación (STANAG L2+)', maxPoints: 4, description: 'Capacidad de especular, contrastar hipótesis y justificar opiniones complejas.', guidelines: ['Lenguaje de especulación (might have, seems to)', 'Contraste riguroso'] },
      { criterion: 'Interacción Diplomática y Negociación', maxPoints: 4, description: 'Mantenimiento del debate colaborativo, réplicas ágiles y síntesis consensuada.', guidelines: ['Turnos equitativos', 'Llegada a un acuerdo'] },
      { criterion: 'Léxico Avanzado y Sofisticación', maxPoints: 4, description: 'Vocabulario abstracto, colocaciones precisas e idioma matizado.', guidelines: ['Términos conceptuales', 'Eliminación de repeticiones'] },
      { criterion: 'Gama y Precisión Sintáctica', maxPoints: 4, description: 'Estructuras complejas (cláusulas relativas, pasivas, condicionales mixtos).', guidelines: ['Inversiones y modales', 'Cohesión discursiva'] },
      { criterion: 'Fonética, Acentuación y Fluidez', maxPoints: 4, description: 'Ritmo natural, acento inteligible y entonación que realza el significado.', guidelines: ['Intonación discursiva', 'Pausas estratégicas'] }
    ]
  },

  // =========================================================================
  // NIVEL 6 (Parte 5 – Producción Oral) - 15-20 min - 20 pts
  // =========================================================================
  6: {
    levelNumber: 6,
    levelRoman: 'VI',
    partTitle: 'Parte 5 – Producción Oral',
    timeAllowedMinutes: 20,
    totalPoints: 20,
    overview: 'Paper 5 consists of three parts: an interview, a long individual turn and a collaborative task; the whole paper lasts about 15-20 minutes, involving a pair of candidates and two examiners (20% of the mark).',
    part1Interview: {
      title: 'Step A: Interview (around 5 minutes)',
      duration: '5 minutes',
      instructions: 'Individual interaction with the examiner regarding complex personal perspectives, ambitions, linguistic philosophies, and cultural observations.',
      questionsA: [
        {
          id: 'l6-p1-q1',
          student: 'A',
          question: "How do you usually relax when you have some free time? What do you do when you stay in versus when you go out?",
          audioPromptText: "How do you usually relax when you have some free time? What do you do when you stay in versus when you go out?",
          modelAnswer: "When staying in, I gravitate towards cerebral decompression, such as reading classical literature or playing classical guitar. Conversely, when venturing out, I prioritize immersive outdoor endurance—navigating arduous trail runs or exploring alpine terrain with close comrades.",
          usefulVocabulary: ['Gravitate towards cerebral decompression', 'Immersive outdoor endurance', 'Conversely, when venturing out...']
        },
        {
          id: 'l6-p1-q2',
          student: 'A',
          question: "As a child, what did you want to be when you grew up? Do you still maintain that ambition?",
          audioPromptText: "As a child, what did you want to be when you grew up? Do you still maintain that ambition?",
          modelAnswer: "From early youth, I harbored a deep fascination with military aviation and strategic leadership. While geopolitical realities have matured my perspective, that foundational ambition remains intact, steering my current pursuit of command roles in combined joint environments.",
          usefulVocabulary: ['Harbored a deep fascination with...', 'Geopolitical realities have matured my perspective', 'Foundational ambition']
        },
        {
          id: 'l6-p1-q3',
          student: 'A',
          question: "What could an international delegate see or experience if they visited your hometown?",
          audioPromptText: "What could an international delegate see or experience if they visited your hometown?",
          modelAnswer: "An international visitor would encounter a fascinating synthesis of colonial heritage and modern enterprise—spanning centuries-old Jesuit architecture, vibrant regional vineyards, and passionate civic debates in our public forums.",
          usefulVocabulary: ['Fascinating synthesis', 'Colonial heritage and modern enterprise', 'Centuries-old architecture']
        }
      ],
      questionsB: [
        {
          id: 'l6-p1-q4',
          student: 'B',
          question: "What apps or technological platforms do you employ to enhance your English proficiency?",
          audioPromptText: "What apps or technological platforms do you employ to enhance your English proficiency?",
          modelAnswer: "I utilize high-level defense podcasts, international think-tank webinars, and interactive vocabulary repositories to refine my idiomatic command and operational tactical jargon.",
          usefulVocabulary: ['Think-tank webinars', 'Idiomatic command', 'Operational tactical jargon']
        },
        {
          id: 'l6-p1-q5',
          student: 'B',
          question: "Would you like to speak any other foreign language? Why or why not?",
          audioPromptText: "Would you like to speak any other foreign language? Why or why not?",
          modelAnswer: "I would be keen to acquire Portuguese or Russian. Within South American peacekeeping and multilateral diplomatic agreements, multilingual versatility bridges cultural divides and fosters interoperability.",
          usefulVocabulary: ['Multilingual versatility', 'Bridges cultural divides', 'Fosters interoperability']
        },
        {
          id: 'l6-p1-q6',
          student: 'B',
          question: "Do you come from a large family, and how has that influenced your interpersonal leadership style?",
          audioPromptText: "Do you come from a large family, and how has that influenced your interpersonal leadership style?",
          modelAnswer: "Growing up in an extended family of five siblings taught me the art of patient consensus-building, conflict de-escalation, and genuine active listening—attributes that are indispensable when commanding military units under pressure.",
          usefulVocabulary: ['Consensus-building', 'Conflict de-escalation', 'Active listening', 'Commanding under pressure']
        }
      ]
    },
    part2Monologue: {
      title: 'Step B: Long Turn (around 5 minutes)',
      duration: '5 minutes',
      instructions: 'Each candidate is given two photographs, compares and contrasts them in depth without interruption, and the partner comments afterwards.',
      tasks: [
        {
          student: 'A',
          cardTitle: 'Student A: Modes of Modern Communication',
          prompt: 'Compare and contrast these pictures and say why the people are communicating in these ways.',
          bulletPoints: [
            'Visual 1: Woman reclining on bed holding a laptop during a virtual video conference',
            'Visual 2: Woman in living room seated on a sofa talking on a smartphone while referencing documents on a laptop',
            'Analyze modalities: personal remote presence vs urgent multi-tasking and vocal immediacy',
            'Partner follow-up: Which mode of communication do you consider most efficient?'
          ],
          modelResponse: "Both photographs capture modern remote communication; nevertheless, the functional contexts and interpersonal dynamics differ substantially. In the upper photograph, the individual is engaged in a video conference while lying down, which conveys informal, domestic ease. Video calls allow visual feedback, facial cues, and a sense of physical proximity, which is crucial when bridging long distances with loved ones or colleagues in relaxed settings. In contrast, the lower image portrays an individual actively multi-tasking—conducting an urgent smartphone call while concurrently consulting her laptop. This reflects operational immediacy, where vocal communication is preferred for rapid clarification and prompt decision-making. In my estimation, while video conferencing fosters deeper relational resonance, telephone calls remain unmatched for time-critical problem solving.",
          usefulPhrases: [
            'While both images illustrate digital connectivity...',
            'The former conveys domestic comfort and emotional proximity...',
            'Conversely, the latter illustrates the demands of multi-tasking...',
            'One might deduce that the smartphone is preferred for immediate logistical agility...'
          ]
        },
        {
          student: 'B',
          cardTitle: 'Student B: Culinary Shared Experiences',
          prompt: 'Compare and contrast these pictures and say why the people are enjoying these experiences.',
          bulletPoints: [
            'Visual 1: Adult couple smiling and cooking together in a sleek, contemporary kitchen',
            'Visual 2: Mother and young child joyfully stirring a hot pan together in a home kitchen',
            'Analyze shared bonds: romantic/peer partnership vs parental pedagogical bonding and nurturing',
            'Partner follow-up: How important is cooking as a medium for human connection?'
          ],
          modelResponse: "These photographs celebrate the unifying power of culinary collaboration across different generational relationships. In the first visual, the adult partners are preparing a meal collaboratively in a modern kitchen. Their shared enjoyment stems from equitable teamwork, intellectual companionship, and the creative pleasure of culinary experimentation after a demanding week. On the other hand, the second visual captures a tender pedagogical moment between a mother and her young son. The child's delighted expression reveals the thrill of sensory discovery, autonomy, and learning life skills under loving supervision. In both instances, preparing food transcends mere physical sustenance—it acts as an intimate ritual that fortifies human attachment, patience, and mutual appreciation.",
          usefulPhrases: [
            'Both visuals illuminate how food preparation fosters connection...',
            'In the first instance, the pleasure originates from peer companionship...',
            'In contrast, the second image depicts formative nurturing and...',
            'Preparing nourishment transcends physical needs and serves as a vehicle for...'
          ]
        }
      ]
    },
    part3Interaction: {
      type: 'collaborative_task',
      title: 'Step C: Collaborative Task – Planning a Memorable Holiday (around 8 minutes)',
      durationMinutes: 8,
      scenarioDescription: 'Candidates receive the STANAG 6001 Level 3 diagram: "What should people consider when planning a memorable holiday?" with 5 prompts: Weather, Transport, Destination, Budget, Activities. Candidates exchange nuanced arguments and negotiate a final consensus.',
      studentARole: {
        title: 'Student A',
        instructions: [
          'Open the debate by contrasting logistical prerequisites against experiential value.',
          'Assess the interplay between Transport and Budget.',
          'Challenge your partner with counter-examples and refine definitions of "memorable".',
          'Negotiate a definitive conclusion.'
        ],
        usefulLanguage: [
          'Shall we embark on our evaluation by dissecting how logistics influence tourist satisfaction?',
          'While Budget provides the financial parameters, Destination dictates the cultural caliber.',
          'Could one argue that challenging transport logistics actually amplify the memorability of an expedition?',
          'How do you synthesize the relative weight of weather versus planned activities?'
        ]
      },
      studentBRole: {
        title: 'Student B',
        instructions: [
          'Contribute high-level philosophical and practical insights.',
          'Examine Weather vulnerability versus Activity diversity.',
          'Guide the interaction towards an articulated consensus.'
        ],
        usefulLanguage: [
          'I see your perspective; nevertheless, one must recognize that adverse weather can paralyze activities.',
          'From an experiential standpoint, it is the novelty of the activities that endures in human recollection.',
          'We must strike a balance between structural feasibility and personal enrichment.',
          'Shall we formally conclude that while Destination and Budget constitute the framework, Activities create the indelible memories?'
        ]
      },
      mindMapOptions: {
        centralPrompt: 'What should people consider when planning a memorable holiday?',
        branches: [
          {
            id: 'l5-dest',
            label: 'Destination',
            details: 'Cultural heritage, geopolitical stability, landscape biodiversity, and historic resonance.',
            suggestedArguments: ['A distinctive destination provides the conceptual canvas for the entire expedition.']
          },
          {
            id: 'l5-budget',
            label: 'Budget',
            details: 'Macro-economic feasibility, exchange rate fluctuations, and insurance safeguards.',
            suggestedArguments: ['Fiscal discipline ensures peace of mind and prevents logistical emergencies.']
          },
          {
            id: 'l5-activities',
            label: 'Activities',
            details: 'Immersive cultural engagements, extreme sport expeditions, and culinary discoveries.',
            suggestedArguments: ['Active participation leaves profound neurological and emotional impressions.']
          },
          {
            id: 'l5-transport',
            label: 'Transport',
            details: 'Carbon footprint, transit efficiency, multi-modal connectivity, and regional access.',
            suggestedArguments: ['Seamless transit conserves cognitive energy for exploration.']
          },
          {
            id: 'l5-weather',
            label: 'Weather',
            details: 'Climatic unpredictability, seasonal atmospheric conditions, and safety margins.',
            suggestedArguments: ['Severe weather conditions can invalidate months of meticulous planning.']
          }
        ]
      },
      sampleDialogue: [
        { speaker: 'Student A', text: "Shall we commence our analysis by examining the multifaceted considerations that culminate in an extraordinary holiday experience?", role: 'studentA' },
        { speaker: 'Student B', text: "Gladly. To my mind, the foundational determinant must be the Destination. The historical, geographical, and cultural essence of the location establishes the thematic backdrop for the entire venture.", role: 'studentB' },
        { speaker: 'Student A', text: "I agree that the destination provides the canvas; however, Budget inevitably dictates the boundaries of feasibility. Fluctuations in expenditure determine the degree of comfort, access to exclusive sites, and overall peace of mind.", role: 'studentA' },
        { speaker: 'Student B', text: "That is undeniably pragmatic. Yet, we cannot disregard Weather and Activities. You could possess unlimited capital in a spectacular location, but if unyielding storms prevent you from engaging in outdoor exploration, the experience becomes severely diminished.", role: 'studentB' },
        { speaker: 'Student A', text: "Indeed, activities represent the experiential core of any holiday. It is through active immersion—whether scaling peaks, touring ancient ruins, or conversing with locals—that indelible memories are forged.", role: 'studentA' },
        { speaker: 'Student B', text: "So, if we were tasked with designating the two paramount factors that ensure enduring memorability, what would your verdict be?", role: 'studentB' },
        { speaker: 'Student A', text: "I would synthesize our deliberations by selecting Destination as the prime intellectual catalyst, and Activities as the practical vehicle for memorable engagement.", role: 'studentA' },
        { speaker: 'Student B', text: "I wholeheartedly endorse that conclusion. Destination inspires the vision, and curated activities crystallize it into an unforgettable chapter of life.", role: 'studentB' }
      ],
      consensusPrompt: 'Negotiate and select the two decisive factors that guarantee an indelible, transformative holiday experience.'
    },
    stanagRubric: [
      { criterion: 'Discurso Profesional y Argumentación (STANAG L3)', maxPoints: 4, description: 'Elocuencia, matices discursivos, formulación de hipótesis complejas y síntesis.', guidelines: ['Lenguaje conceptual', 'Capacidad de síntesis'] },
      { criterion: 'Habilidad Negociadora y Diplomacia Interpersonal', maxPoints: 4, description: 'Intercambio simétrico, refutación cortés, mediación y construcción de consenso.', guidelines: ['Turn-taking natural', 'Diplomatic hedging'] },
      { criterion: 'Amplitud y Precisión Léxica Superior', maxPoints: 4, description: 'Vocabulario sofisticado, colocaciones de alto registro y modismos operativos.', guidelines: ['Registro elevado', 'Precisión terminológica'] },
      { criterion: 'Dominio y Cohesión Gramatical Avanzada', maxPoints: 4, description: 'Inversiones sintácticas, estructuras enfáticas, pasivas impersonales y cohesión oracional.', guidelines: ['Subordinación compleja', 'Estructuras enfáticas'] },
      { criterion: 'Fonética, Prosodia y Ritmo Nativo', maxPoints: 4, description: 'Fluidez impecable, entonación elocuente y articulación cristalina.', guidelines: ['Prosodia expresiva', 'Dicción impecable'] }
    ]
  }
};
