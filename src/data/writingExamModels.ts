export interface WritingExamTaskOption {
  id: string;
  label: string; // e.g. "Option A (Email)" or "Option B (Story)"
  title: string;
  type: 'blog' | 'postcard' | 'holiday_review' | 'informal_email' | 'formal_email' | 'story' | 'article' | 'report' | 'essay';
  targetWordRange: { min: number; max: number; label: string };
  instructions: string;
  scenarioContext?: string;
  notesOrQuestions: string[];
  visualBox?: {
    header: string;
    subHeader?: string;
    content: string;
    footer?: string;
  };
  requiredChecklist: string[];
  usefulConnectors: string[];
  modelAnswer: string;
}

export interface WritingExamExercise {
  exerciseNumber: number;
  title: string;
  instructions: string;
  points: number; // usually 10
  isOptionalChoice?: boolean; // If user chooses between A and B
  options: WritingExamTaskOption[];
}

export interface WritingExamModel {
  levelNumber: number;
  levelRoman: string;
  partTitle: string;
  timeAllowedMinutes: number;
  totalPoints: number;
  exercises: WritingExamExercise[];
}

export const WRITING_EXAM_MODELS: Record<number, WritingExamModel> = {
  // =========================================================================
  // NIVEL 1 (Parte 4 – Expresión Escrita) - 30 minutos - 20 puntos
  // =========================================================================
  1: {
    levelNumber: 1,
    levelRoman: 'I',
    partTitle: 'Parte 4 – Expresión Escrita',
    timeAllowedMinutes: 30,
    totalPoints: 20,
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 – Questions 1-5',
        instructions: 'It’s your best friend’s birthday. You are going to write a blog about him/her. Read the questions below to guide you. Include all the information required. Write between 50 and 60 words.',
        points: 10,
        options: [
          {
            id: 'l1-w1-blog',
            label: 'Blog Post: Best Friend\'s Birthday',
            title: 'My Blog – Celebrating Life!',
            type: 'blog',
            targetWordRange: { min: 50, max: 60, label: '50 - 60 words' },
            instructions: 'Write a blog post answering all 5 guiding questions.',
            notesOrQuestions: [
              'What’s your best friend’s name?',
              'How old is he/she?',
              'What does he/she look like?',
              'What does he/she do in his/her free time?',
              'Why is he/she your best friend?'
            ],
            visualBox: {
              header: 'My Blog',
              subHeader: 'February 10, 2024 | Celebrating life! | By Soldier / Cadet',
              content: 'Today is my best friend’s birthday! ...',
              footer: 'Read More'
            },
            requiredChecklist: [
              'Mencionar el nombre de tu mejor amigo/a',
              'Indicar cuántos años cumple',
              'Describir su apariencia física (altura, cabello, ojos)',
              'Mencionar qué hace en su tiempo libre (hobbies o deportes)',
              'Explicar por qué es tu mejor amigo/a',
              'Extensión entre 50 y 60 palabras'
            ],
            usefulConnectors: ['Today is', 'He/She is ... years old', 'He/She has ... eyes and hair', 'In his/her free time', 'Because he/she is always helpful'],
            modelAnswer: `Today is my best friend’s birthday! His name is Lucas and he is twenty-five years old today. Lucas is tall with short brown hair and dark eyes. In his free time, he likes playing football and running. Lucas is my best friend because he is always friendly, loyal, and ready to help me every day.`
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Postcard to Sam',
        instructions: 'Read the postcard from your English pen-friend. Write Sam a postcard. Answer all the questions he asks. Divide your writing in paragraphs. Write between 50 and 60 words.',
        points: 10,
        options: [
          {
            id: 'l1-w2-postcard',
            label: 'Postcard to English Pen-Friend',
            title: 'Reply Postcard to Sam',
            type: 'postcard',
            targetWordRange: { min: 50, max: 60, label: '50 - 60 words' },
            instructions: 'Answer all of Sam\'s questions about your town, evening activities, house, and neighbourhood.',
            scenarioContext: `Dear friend,\nHere is a postcard of my town in England. Please send me a postcard from your town. Is your town big? Are there any interesting places to visit? Where do you go in the evenings? What is your house like? And your neighbourhood?\nWrite soon!\nBye,\nSam`,
            notesOrQuestions: [
              'Is your town big?',
              'Are there any interesting places to visit?',
              'Where do you go in the evenings?',
              'What is your house like?',
              'And your neighbourhood?'
            ],
            requiredChecklist: [
              'Saludo cordial en formato postal (Dear Sam,)',
              'Responder si tu ciudad es grande y lugares interesantes para visitar',
              'Mencionar adónde vas por las tardes/noches',
              'Describir cómo es tu casa y tu barrio',
              'Despedida adecuada (Write soon! / Best wishes)',
              'Extensión entre 50 y 60 palabras dividida en párrafos'
            ],
            usefulConnectors: ['Dear Sam,', 'My city is ...', 'There is/are ...', 'In the evenings, I go to ...', 'My house is ...', 'Best wishes, / Bye,'],
            modelAnswer: `Dear Sam,

Thanks for your postcard! My town is quite big and very lively. There is an interesting historic museum and a beautiful park. In the evenings, I usually go to a local café with my friends.

My house is small but comfortable, and my neighbourhood is very quiet and safe.

Write soon!
Bye,
Alex`
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 2 (Parte 4 – Expresión Escrita) - 30 minutos - 20 puntos
  // =========================================================================
  2: {
    levelNumber: 2,
    levelRoman: 'II',
    partTitle: 'Parte 4 – Expresión Escrita',
    timeAllowedMinutes: 30,
    totalPoints: 20,
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 – An Unforgettable Holiday',
        instructions: 'Write about an unforgettable holiday. Write between 60 and 80 words. Include all the required information.',
        points: 10,
        options: [
          {
            id: 'l2-w1-holiday',
            label: 'Narrative: An Unforgettable Holiday',
            title: 'My Unforgettable Holiday',
            type: 'holiday_review',
            targetWordRange: { min: 60, max: 80, label: '60 - 80 words' },
            instructions: 'Write a narrative describing a memorable trip including all 7 bullet points.',
            notesOrQuestions: [
              'when and where it was',
              'who travelled with you',
              'how you travelled to the place',
              'where you stayed and for how long',
              'what activities you did (mention three different activities)',
              'what the weather was like',
              'what you enjoyed about this holiday'
            ],
            requiredChecklist: [
              'Cuándo y dónde fue la vacación',
              'Quién o quiénes viajaron contigo',
              'Medio de transporte utilizado (avión, auto, etc.)',
              'Lugar de alojamiento y duración de la estancia',
              'Mencionar tres actividades diferentes que realizaron',
              'Cómo estuvo el clima (sunny, warm, etc.)',
              'Qué fue lo que más disfrutaste',
              'Extensión de 60 a 80 palabras con tiempos de pasado'
            ],
            usefulConnectors: ['Last summer, I travelled to...', 'I went with...', 'We travelled by...', 'We stayed in a hotel for...', 'We swam, visited..., and ate...', 'The weather was sunny and warm.', 'I really enjoyed...'],
            modelAnswer: `Last summer, I had an unforgettable holiday in Bariloche with my brother. We travelled there by plane and stayed in a cosy wooden cabin for one week. During our stay, we went hiking in the mountains, took a boat trip on the lake, and tasted delicious artisan chocolates. The weather was sunny and pleasantly cool. I really enjoyed the breathtaking alpine views and peaceful nature.`
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Reply to Jack\'s Invitation',
        instructions: 'Answer this email. Thank your friend for inviting you but say that you can’t go. Explain why you can’t and give excuses. Be polite. Suggest an alternative plan. Follow the conventions for an informal email. Write between 60 and 80 words.',
        points: 10,
        options: [
          {
            id: 'l2-w2-email',
            label: 'Informal Email: Declining an Invitation',
            title: 'Reply Email to Jack',
            type: 'informal_email',
            targetWordRange: { min: 60, max: 80, label: '60 - 80 words' },
            instructions: 'Follow informal conventions, thank Jack, give polite excuses, and propose another date/plan.',
            scenarioContext: `28 Park St., Brighton, May 22nd\nDear John,\nHello! Hope you are all right. Soon you are going to be on holiday. Do you have any plans? Would you like to come home for a few days in June? We can have a great time here. You can see interesting places, we can go to the beach during the day and go out at night.\nWrite soon and let me know if you can come and when.\nLove,\nJack`,
            notesOrQuestions: [
              'Thank your friend for inviting you',
              'Say that you can’t go',
              'Explain why you can’t and give excuses',
              'Be polite',
              'Suggest an alternative plan'
            ],
            requiredChecklist: [
              'Saludo informal (Dear Jack / Hi Jack)',
              'Agradecer cordialmente la invitación',
              'Declinar la invitación educadamente',
              'Dar razones/excusas creíbles (ej. entrenamiento militar, exámenes, trabajo)',
              'Proponer un plan alternativo (ej. encontrarse en julio o agosto)',
              'Cierre informal (Best wishes / Love / Talk soon)',
              'Extensión de 60 a 80 palabras'
            ],
            usefulConnectors: ['Thanks so much for your invitation', 'I would love to come, but unfortunately...', 'The problem is that...', 'Because I have to...', 'How about coming to my place in July instead?', 'Let me know what you think.'],
            modelAnswer: `Hi Jack,

Thank you so much for your wonderful invitation to Brighton! I would love to visit you, but unfortunately I can't make it in June. I have mandatory army training and several exams that month.

I am really sorry about that. Could we meet in late July instead? We could go camping or spend a weekend in the countryside.

Let me know if that works for you!

All the best,
John`
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 3 (Parte 4 – Expresión Escrita) - 45 minutos - 20 puntos
  // =========================================================================
  3: {
    levelNumber: 3,
    levelRoman: 'III',
    partTitle: 'Parte 4 – Expresión Escrita',
    timeAllowedMinutes: 45,
    totalPoints: 20,
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 – Job Application Email (Work Canada)',
        instructions: 'Read the information about Work Canada. Then write a short formal email applying for a job there. Include personal information, language(s) you speak, studies, any previous experience in the tourist industry. Write about 80 - 100 words.',
        points: 10,
        options: [
          {
            id: 'l3-w1-work-canada',
            label: 'Formal Email: Job Application',
            title: 'Application to Work Canada',
            type: 'formal_email',
            targetWordRange: { min: 80, max: 100, label: '80 - 100 words' },
            instructions: 'Write a professional email applying for a tourism position.',
            scenarioContext: `Work Canada is an organisation helping young people (aged 18-27) to find work within the tourist industry in Canada. Jobs include hotel and restaurant work, child day care, sports instructors, activity leaders, tour guides for foreign visitors, etc.`,
            notesOrQuestions: [
              'Include personal information (age, origin)',
              'Specify language(s) you speak',
              'Mention your current studies / qualifications',
              'Detail any previous experience in the tourist industry'
            ],
            requiredChecklist: [
              'Saludo formal (Dear Sir or Madam, / Dear Hiring Team,)',
              'Establecer el motivo del correo (I am writing to apply for...)',
              'Información personal relevante y edad (18-27)',
              'Idiomas hablados con fluidez (English, Spanish)',
              'Estudios cursados y experiencia previa en turismo',
              'Cierre formal (I look forward to hearing from you. Yours faithfully,)',
              'Extensión entre 80 y 100 palabras'
            ],
            usefulConnectors: ['I am writing to apply for the position of...', 'I am a 23-year-old student...', 'I speak fluent Spanish and English...', 'Regarding my background...', 'I look forward to hearing from you.', 'Yours faithfully,'],
            modelAnswer: `Dear Sir or Madam,

I am writing to apply for the tour guide position advertised by Work Canada. I am a 24-year-old student from Argentina, currently completing my degree in Physical Education and Leadership.

I speak fluent Spanish and upper-intermediate English, which enables me to communicate effectively with international visitors. Last year, I worked as a seasonal outdoor activity coordinator at an adventure resort, organising mountain treks and assisting hotel guests.

I am enthusiastic, punctual, and highly adaptable. I attach my CV for your consideration.

I look forward to hearing from you.

Yours faithfully,
Julian Rossi`
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Choice: Film Email (A) OR Story (B)',
        instructions: 'Choose A or B and write about 80 – 100 words.',
        points: 10,
        isOptionalChoice: true,
        options: [
          {
            id: 'l3-w2-opt-a',
            label: 'Option A: Email about a Film',
            title: 'Email to a Friend about a Film Night',
            type: 'informal_email',
            targetWordRange: { min: 80, max: 100, label: '80 - 100 words' },
            instructions: 'Write an email to another friend about watching a movie at your house.',
            notesOrQuestions: [
              'Say what film you watched',
              'Give your personal opinion of the film',
              'Mention something else you did on that occasion',
              'Suggest an activity to do with the friend you are writing to'
            ],
            requiredChecklist: [
              'Saludo amistoso informal',
              'Decir qué película vieron con tu amigo',
              'Dar tu opinión personal crítica de la película',
              'Mencionar otra actividad realizada esa ocasión (ej. cocinar pizza, jugar cartas)',
              'Proponer una actividad para hacer juntos próximamente',
              'Despedida informal y firma',
              'Extensión entre 80 y 100 palabras'
            ],
            usefulConnectors: ['How have you been?', 'We decided to watch...', 'In my opinion, it was...', 'After the film, we...', 'Would you like to...', 'See you soon!'],
            modelAnswer: `Hi Martin,

Hope everything is going well! Last Friday, Carlos came over and we watched "Inception" at my house.

In my opinion, the film was absolutely brilliant because the visual effects and thrilling plot kept us guessing until the very end. After the movie, we ordered a large pizza and talked about music for hours.

We really missed you that night! Would you like to come over this Saturday to play video games and cook a barbecue together?

Let me know soon!

Cheers,
Diego`
          },
          {
            id: 'l3-w2-opt-b',
            label: 'Option B: Story with Prompt Sentence',
            title: 'Story: "I was finishing my coffee when..."',
            type: 'story',
            targetWordRange: { min: 80, max: 100, label: '80 - 100 words' },
            instructions: 'Write a story starting with the compulsory sentence: "I was finishing my coffee when suddenly my phone rang…"',
            notesOrQuestions: [
              'Must begin with: "I was finishing my coffee when suddenly my phone rang…"',
              'Develop a clear narrative arc with past tenses',
              'Describe who was calling and what unexpected event took place',
              'Provide an engaging conclusion'
            ],
            requiredChecklist: [
              'Comenzar exactamente con la frase obligatoria dada',
              'Uso adecuado de tiempos pasados (Past Continuous, Past Simple)',
              'Crear tensión o sorpresa en la trama',
              'Finalizar con una resolución lógica y entretenida',
              'Extensión entre 80 y 100 palabras'
            ],
            usefulConnectors: ['I was finishing my coffee when suddenly my phone rang...', 'It was my...', 'To my surprise,', 'Immediately, I rushed to...', 'Fortunately, in the end...'],
            modelAnswer: `I was finishing my coffee when suddenly my phone rang. It was Lieutenant Evans calling from military base headquarters with urgent news. A flash flood had blocked the main rural road, and our rescue squad was ordered to mobilise immediately.

I grabbed my field equipment, locked my flat, and ran straight to the convoy depot. Within twenty minutes, we reached the sector in our four-wheel-drive trucks and successfully evacuated a trapped family. It was an exhausting day, but helping those villagers made all the effort truly worthwhile.`
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 4 (Parte 4 – Expresión Escrita) - 45 minutos - 20 puntos
  // =========================================================================
  4: {
    levelNumber: 4,
    levelRoman: 'IV',
    partTitle: 'Parte 4 – Expresión Escrita',
    timeAllowedMinutes: 45,
    totalPoints: 20,
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 – Compulsory Story',
        instructions: 'Your English teacher has asked you to write a story. You must begin with the following sentence: "I felt nervous when the phone rang." Write about 100 - 120 words.',
        points: 10,
        options: [
          {
            id: 'l4-w1-story',
            label: 'Story: "I felt nervous when the phone rang"',
            title: 'Compulsory Narrative Story',
            type: 'story',
            targetWordRange: { min: 100, max: 120, label: '100 - 120 words' },
            instructions: 'Write an engaging story starting with the compulsory sentence.',
            notesOrQuestions: [
              'Compulsory opening sentence: "I felt nervous when the phone rang."',
              'Describe the context and reason for feeling nervous',
              'Detail what happened after picking up the call',
              'Conclude with the outcome or emotional relief'
            ],
            requiredChecklist: [
              'Iniciar exactamente con "I felt nervous when the phone rang."',
              'Desarrollo narrativo con variedad de tiempos (Past Simple, Past Perfect, Past Continuous)',
              'Uso de conectores de tiempo y causa (while, because, suddenly, luckily)',
              'Vocabulario expresivo de emociones y acciones',
              'Extensión entre 100 y 120 palabras'
            ],
            usefulConnectors: ['I felt nervous when the phone rang.', 'It was late at night and...', 'With trembling hands, I...', 'On the other line,', 'To my immense relief,', 'It turned out that...'],
            modelAnswer: `I felt nervous when the phone rang. It was late on Sunday evening, and I had been waiting all week for the results of the international peacekeeping selection board.

With trembling hands, I picked up the receiver and answered cautiously. On the line, Colonel Campbell greeted me with a firm voice. He explained that the review committee had examined hundreds of candidates and commended my technical knowledge during the tactical interview.

To my immense relief, he announced that I had been selected for the upcoming mission to Cyprus. I thanked him warmly, hung up, and immediately celebrated the wonderful news with my proud family.`
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Choice: Email (a) OR Article (b)',
        instructions: 'Choose one of the following topics, a) or b), and write about 100 - 120 words.',
        points: 10,
        isOptionalChoice: true,
        options: [
          {
            id: 'l4-w2-opt-a',
            label: 'Topic a) Reply to Sam about Jan\'s Party',
            title: 'Email: Organising Jan\'s Farewell Party',
            type: 'informal_email',
            targetWordRange: { min: 100, max: 120, label: '100 - 120 words' },
            instructions: 'Read Sam\'s email and answer all the guided annotations.',
            scenarioContext: `From: Sam | Subject: Jan’s leaving party\nHi! I’m writing because, as you know, Jan is leaving our school and moving to Australia. I was thinking of having a party to say goodbye. Do you think it’s a good idea? [Great Idea!]\nIf so, can you think of a good place to have the party? [Suggest ...]\nWould it be best to have it on a weekday or at the weekend? [Answer and explain]\nAlso, I’m thinking of hiring a band for the party. Do you know what sort of music Jan likes best? [Answer the question]\nSee you soon! Sam`,
            notesOrQuestions: [
              'Confirm it is a great idea',
              'Suggest a suitable venue/place for the party',
              'Recommend weekday vs weekend and explain your reasoning',
              'Specify what genre/music band Jan loves most'
            ],
            requiredChecklist: [
              'Confirmar con entusiasmo que es una gran idea',
              'Sugerir un lugar concreto (parque, salón, club deportivo)',
              'Aconsejar el fin de semana explicando el motivo (horarios, asistencia)',
              'Informar qué música le gusta a Jan (rock, pop, indie, etc.)',
              'Tono informal cálido con saludo y despedida',
              'Extensión entre 100 y 120 palabras'
            ],
            usefulConnectors: ['Hi Sam,', 'It is an absolutely fantastic idea to throw a party for Jan!', 'As for the venue, I suggest...', 'In my opinion, having it on Saturday evening is much better because...', 'Regarding the band, Jan is a massive fan of...', 'Let me know if you need help with decorations.'],
            modelAnswer: `Hi Sam,

It is a fantastic idea to throw a farewell party for Jan before he moves to Australia! He will be thrilled.

Regarding the venue, I suggest booking the garden terrace at the local community centre. It is spacious and has a covered barbecue area in case it rains.

It would definitely be best to hold the party on Saturday evening rather than on a weekday. Most classmates have training and exams during the week, so everyone will be far more relaxed on the weekend.

As for the music, Jan is a huge fan of British indie rock, so hiring a guitar band would be perfect!

See you soon,
Tom`
          },
          {
            id: 'l4-w2-opt-b',
            label: 'Topic b) Article: Helping People',
            title: 'Article: Making a Difference in our Community',
            type: 'article',
            targetWordRange: { min: 100, max: 120, label: '100 - 120 words' },
            instructions: 'Write an engaging article answering the prompt questions from the website.',
            scenarioContext: `HELPING PEOPLE\nWhat kinds of people need our help?\nWhen did you last help someone? What did you do?`,
            notesOrQuestions: [
              'What kinds of people need our help? (Elderly, vulnerable, sick, young learners)',
              'When did you last help someone?',
              'What did you do specifically?',
              'Reflect on why helping others is vital for society'
            ],
            requiredChecklist: [
              'Título llamativo para el artículo',
              'Introducción explicando qué grupos de personas necesitan apoyo',
              'Anécdota personal sobre la última vez que ayudaste a alguien',
              'Conclusión inspiradora sobre la solidaridad',
              'Extensión entre 100 y 120 palabras'
            ],
            usefulConnectors: ['In today\'s fast-paced world,', 'Many people in our society require assistance, especially...', 'Just last week, I...', 'Not only did this help them, but it also...', 'Ultimately, even small acts of kindness...'],
            modelAnswer: `Helping Hands: Why Kindness Matters

In our fast-paced society, many individuals desperately need our support, especially elderly citizens living alone, disabled veterans, and underprivileged children who require educational guidance.

Just two weeks ago, I had the opportunity to assist an elderly neighbour whose roof had been damaged after a severe thunderstorm. Along with my friend, I spent the afternoon clearing broken branches from her pathway, repairing the fence, and carrying heavy grocery bags to her kitchen.

She was deeply grateful, and seeing her warm smile reminded me that lending a hand does not cost anything. Ultimately, small acts of generosity build stronger and more compassionate communities.`
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 5 (Parte 4 – Expresión Escrita) - 60 minutos - 20 puntos
  // =========================================================================
  5: {
    levelNumber: 5,
    levelRoman: 'V',
    partTitle: 'Parte 4 – Expresión Escrita',
    timeAllowedMinutes: 60,
    totalPoints: 20,
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 – Formal Enquiry Email (Central School of English)',
        instructions: 'You are interested in studying English in the UK. You see this advertisement in an international magazine and make some notes. Write a formal email to Jane Black using all the notes. Write around 120 - 140 words.',
        points: 10,
        options: [
          {
            id: 'l5-w1-formal-enquiry',
            label: 'Formal Email: Central School of English',
            title: 'Course Enquiry to Jane Black',
            type: 'formal_email',
            targetWordRange: { min: 120, max: 140, label: '120 - 140 words' },
            instructions: 'Address Jane Black formally, integrating all 4 margin annotations from the flyer.',
            scenarioContext: `Central School of English (Come and study English at our school!)\n- Two-week courses for all levels -> [Note: Can I do a three-week course?]\n- Highly qualified, experienced teachers\n- Reasonable prices -> [Note: How much exactly?]\n- Accommodation with host families -> [Note: With other students or on my own?]\n- Extensive social programme -> [Note: More details?]\nFor further information contact Jane Black: j.black@central-school.co.uk`,
            notesOrQuestions: [
              'Inquire about extending a 2-week course to a three-week course',
              'Ask for exact price figures and tuition fees',
              'Clarify host family accommodation (with other international students or alone)',
              'Request additional details regarding the social & excursion programme'
            ],
            requiredChecklist: [
              'Tratamiento formal correcto (Dear Ms Black,)',
              'Establecer el propósito de la consulta (referencia al anuncio en la revista)',
              'Preguntar por la posibilidad de un curso de 3 semanas',
              'Solicitar el desglose exacto de precios',
              'Preguntar por las condiciones de alojamiento con familias anfitrionas',
              'Pedir más detalles sobre el programa social',
              'Cierre formal (I look forward to receiving your reply. Yours sincerely,)',
              'Extensión entre 120 y 140 palabras'
            ],
            usefulConnectors: ['Dear Ms Black,', 'I am writing with reference to your advertisement in...', 'Firstly, I would be grateful if you could inform me whether...', 'Furthermore, could you provide exact details regarding...', 'In addition, I would like to know if...', 'Finally, could you send me more information about...', 'Yours sincerely,'],
            modelAnswer: `Dear Ms Black,

I am writing with reference to your advertisement in International Student Magazine regarding English language programmes at your institution. I am very interested in enrolling this summer.

Firstly, your advert mentions two-week courses; however, I would be grateful if you could inform me whether it is possible to attend a three-week course instead. Furthermore, could you please provide exact information concerning tuition fees and registration costs?

Regarding accommodation, I would like to know whether host family rooms are shared with other foreign students or if single rooms are provided. Finally, I would appreciate receiving more details about the excursions and activities included in your extensive social programme.

Thank you in advance for your assistance. I look forward to receiving your reply.

Yours sincerely,
Captain Martin Gomez`
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Choice: Report (a) OR Article (b)',
        instructions: 'Choose a or b and write about 120 – 140 words.',
        points: 10,
        isOptionalChoice: true,
        options: [
          {
            id: 'l5-w2-opt-a',
            label: 'Topic a) Report on Local Sports Facilities',
            title: 'Report: Enhancing Sports Infrastructure',
            type: 'report',
            targetWordRange: { min: 120, max: 140, label: '120 - 140 words' },
            instructions: 'Write a formal report for the local councillor with section headings, popular activities, and funding proposals.',
            scenarioContext: `The local government are interested in spending more money on sports facilities in your town. You have been asked to write a report for the politician responsible for deciding how the money should be spent. Your report should:\n* Explain the most popular sporting activities in your town.\n* Make suggestions about how increased funding could be spent.`,
            notesOrQuestions: [
              'Explain the most popular sporting activities in your town',
              'Make practical suggestions about allocating increased funding',
              'Adopt an objective, structured report format with clear headings'
            ],
            requiredChecklist: [
              'Estructura de informe con encabezados (Introduction, Current Popular Sports, Recommendations)',
              'Análisis de las actividades deportivas más populares en la localidad',
              'Sugerencias justificadas sobre cómo invertir el presupuesto ampliado',
              'Lenguaje formal e impersonal apropiado para funcionarios gubernamentales',
              'Extensión entre 120 y 140 palabras'
            ],
            usefulConnectors: ['The purpose of this report is to...', 'According to recent surveys,', 'It is widely acknowledged that...', 'I would strongly recommend...', 'In conclusion, allocating funds to...'],
            modelAnswer: `REPORT: ALLOCATION OF SPORTS FUNDING

Introduction
The purpose of this report is to evaluate the sporting preferences in our municipality and propose effective ways to invest the increased government budget.

Current Sporting Activities
Football, athletics, and basketball remain the most popular sports among local residents of all age groups. However, the existing public football pitches and running tracks are severely deteriorating and lack modern floodlighting, which limits their use during evening hours.

Recommendations for Funding
I would strongly recommend allocating forty percent of the funds towards refurbishing the outdoor athletics stadium and installing energy-efficient floodlights. Additionally, the remaining capital should be invested in constructing an indoor multi-sport gymnasium with accessible changing rooms. This would allow community tournaments throughout the winter months.

Conclusion
Upgrading these facilities will significantly improve public health and civic engagement.`
          },
          {
            id: 'l5-w2-opt-b',
            label: 'Topic b) Article: The World Without The Internet',
            title: 'Article: The World Without The Internet',
            type: 'article',
            targetWordRange: { min: 120, max: 140, label: '120 - 140 words' },
            instructions: 'Write an article answering the questions published on the technology website.',
            scenarioContext: `Articles Wanted\nThe World Without The Internet\nCould you survive in a world without the Internet?\nHow much have you come to rely on it? Do you think there is a negative side to it?\nWrite an article for us answering these questions. We will publish the best articles!!`,
            notesOrQuestions: [
              'Could you survive in a world without the Internet?',
              'How much have you come to rely on it in daily routines?',
              'Do you think there is a negative side to it? (Addiction, isolation, misinformation)'
            ],
            requiredChecklist: [
              'Título atrayente acorde a un sitio web de tecnología',
              'Reflexión sobre el grado de dependencia de la conectividad digital',
              'Análisis del impacto negativo (sobreinformación, aislamiento social)',
              'Conclusión equilibrada sobre cómo reconectar con la vida real',
              'Extensión entre 120 y 140 palabras'
            ],
            usefulConnectors: ['Can you imagine waking up to...', 'Undoubtedly, the Internet has revolutionized...', 'From instant communication to navigation, we rely on...', 'On the other hand, there is a distinct downside...', 'In conclusion, while we could survive...'],
            modelAnswer: `The World Without The Internet: Blessing or Nightmare?

Could you survive if all global web servers went dark tomorrow? While our ancestors thrived without digital screens, modern society has become profoundly dependent on instantaneous connectivity for banking, academic research, navigation, and professional communication.

Personally, I rely on online platforms constantly to coordinate operations, stream educational lectures, and keep in touch with colleagues abroad. However, this total reliance carries a distinct downside. Excessive screen time fosters social isolation, diminishes concentration, and exposes users to cyber threats and digital misinformation. Constant notifications frequently prevent us from experiencing peaceful contemplation.

In conclusion, although losing the Internet would cause immediate logistical disruption, it might simultaneously encourage deeper human conversations, outdoor physical activity, and renewed appreciation for the real world around us.`
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 6 (Parte 4 – Expresión Escrita) - 60 minutos - 20 puntos
  // =========================================================================
  6: {
    levelNumber: 6,
    levelRoman: 'VI',
    partTitle: 'Parte 4 – Expresión Escrita',
    timeAllowedMinutes: 60,
    totalPoints: 20,
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 – Compulsory Discursive Essay: Robots and Society',
        instructions: 'Someone visited your English class and gave an interesting talk about robots. Now, your English teacher has asked you to write an essay: "Robots will have a beneficial effect on our society. Do you agree with this statement?" Write between 140 and 160 words in an appropriate style.',
        points: 10,
        options: [
          {
            id: 'l6-w1-essay',
            label: 'Essay: Robots and Society (Compulsory)',
            title: 'Academic Discursive Essay: Automation and Society',
            type: 'essay',
            targetWordRange: { min: 140, max: 160, label: '140 - 160 words' },
            instructions: 'Write a balanced, cohesive essay covering all three compulsory notes.',
            notesOrQuestions: [
              'The workplace (automation, hazardous tasks, productivity)',
              'Sports and entertainment (robot assistants, judging, leisure)',
              'Your own ideas (ethics, healthcare, human empathy)'
            ],
            requiredChecklist: [
              'Introducción formal planteando el debate de la robótica',
              'Párrafo sobre el impacto en el ámbito laboral (The workplace)',
              'Párrafo sobre deportes y entretenimiento (Sports and entertainment)',
              'Párrafo con ideas propias (healthcare, eldercare, or human interaction)',
              'Conclusión ponderada resumiendo tu postura equilibrada',
              'Vocabulario avanzado y conectores formales (Furthermore, Consequently, On the one hand)',
              'Extensión estricta entre 140 y 160 palabras'
            ],
            usefulConnectors: ['The emergence of advanced robotics has sparked...', 'First and foremost, in the workplace,', 'Moreover, within sports and entertainment,', 'Nevertheless, one must consider...', 'In conclusion, provided that ethical safeguards are enforced...'],
            modelAnswer: `The rapid advancement of robotics has stimulated intense debate regarding its overarching impact on modern civilization. In my perspective, while automation presents legitimate socio-economic challenges, its overall effect will prove predominantly advantageous.

First and foremost, in the workplace, robots are revolutionising industrial productivity by executing repetitive and hazardous procedures. In mining, manufacturing, and bomb disposal, automated machinery preserves human lives and allows personnel to focus on creative, strategic endeavors.

Furthermore, within sports and entertainment, robotic technologies provide impartial officiating, enhanced training analytics, and interactive recreational simulations. More crucially, in healthcare, robotic precision allows surgeons to perform delicate operations, while autonomous assistive devices support elderly citizens in maintaining their independence.

In conclusion, although the displacement of traditional labor demands thoughtful regulatory intervention, robotic innovation will profoundly elevate human well-being, efficiency, and safety across society, provided ethical governance is universally maintained.`
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Choice: Article (a) OR Report (b)',
        instructions: 'Choose a or b and write about 140 and 160 words.',
        points: 10,
        isOptionalChoice: true,
        options: [
          {
            id: 'l6-w2-opt-a',
            label: 'Topic a) Article: Rock Stars and Teenager Behaviour',
            title: 'Article: Do Rock Stars Encourage Bad Behaviour?',
            type: 'article',
            targetWordRange: { min: 140, max: 160, label: '140 - 160 words' },
            instructions: 'Write an article for a local newspaper investigating the influence of rock stars based on personal experience.',
            scenarioContext: `A local newspaper is investigating the question: "Do Rock Stars encourage teenagers to behave badly?" Write a short article for this newspaper on this topic, based on your own experience.`,
            notesOrQuestions: [
              'Do celebrity rock stars truly influence juvenile conduct negatively?',
              'Draw upon your personal observations or youth experiences',
              'Analyze musical rebellion vs genuine delinquency or creative expression'
            ],
            requiredChecklist: [
              'Título periodístico atractivo para prensa local',
              'Introducción abordando la acusación habitual a los músicos de rock',
              'Análisis de la influencia cultural y la diferenciación entre rebeldía estilística y conducta dañina',
              'Experiencia personal u observación generacional',
              'Conclusión reflexiva sobre el rol de la educación familiar vs íconos musicales',
              'Extensión entre 140 y 160 palabras'
            ],
            usefulConnectors: ['For decades, sensationalist headlines have blamed...', 'In my own experience growing up as an avid music enthusiast,', 'Rather than inciting delinquency, rock music often serves as...', 'Undeniably, certain flamboyant antics make headlines, yet...', 'Ultimately, blaming artists oversimplifies...'],
            modelAnswer: `Music, Rebellion, and Responsibility: The Rock Star Dilemma

For decades, sensationalist media commentators have blamed rock musicians for juvenile rebellion, arguing that flamboyant hedonism corrupts impressionable teenage minds. However, based on my personal experience growing up surrounded by rock and heavy metal music, this indictment is fundamentally misplaced.

During my adolescence, listening to energetic rock anthems provided a healthy emotional release rather than an incentive to commit antisocial acts. Rather than inciting destructive behavior, passionate lyrics and guitar melodies frequently encouraged camaraderie, artistic curiosity, and critical thinking among my peers.

Undeniably, certain high-profile celebrities indulge in reckless publicity stunts. Nevertheless, teenagers are generally discerning individuals capable of distinguishing theatrical stage personas from everyday morality. Blaming musicians ignores deeper socio-cultural causes, such as peer pressure and parental disengagement.

Ultimately, rock stars inspire creative individuality and youth solidarity; true character formation remains the responsibility of families and schools, not musical performers.`
          },
          {
            id: 'l6-w2-opt-b',
            label: 'Topic b) Proposal Report: Three-Day Class Trip',
            title: 'Report: Proposed Destination for Three-Day Trip',
            type: 'report',
            targetWordRange: { min: 140, max: 160, label: '140 - 160 words' },
            instructions: 'Write a comprehensive report recommending a destination with hotels, restaurants, and educational/recreational amenities.',
            scenarioContext: `Your class is planning to go on a three–day trip. You are undecided about where to go so your teacher asks you to write a report on the place you think would be appropriate. Write your report, describing the place of your choice and what it has to offer the students by commenting on its facilities (e.g. hotels, restaurants, beaches, etc.).`,
            notesOrQuestions: [
              'State the recommended destination and rationale',
              'Detail accommodation options and catering facilities',
              'Describe student-friendly recreational and cultural activities'
            ],
            requiredChecklist: [
              'Estructura formal de reporte con encabezados claros',
              'Descripción detallada del destino propuesto (ej. Mar del Plata, Tandil, Córdoba)',
              'Comentarios específicos sobre hoteles/albergues y opciones gastronómicas',
              'Instalaciones recreativas, playas o museos aptos para grupos estudiantiles',
              'Recomendación final al docente',
              'Extensión entre 140 y 160 palabras'
            ],
            usefulConnectors: ['The objective of this report is to evaluate...', 'Regarding accommodation and dining,', 'In terms of recreational opportunities,', 'Taking all these aspects into consideration, I strongly advise...'],
            modelAnswer: `REPORT: THREE-DAY EXCURSION TO TANDIL

Introduction
The objective of this report is to recommend Tandil as the optimal destination for our upcoming three-day class excursion, detailing its pedagogical and leisure amenities.

Accommodation and Dining
Tandil possesses several youth-oriented lodge facilities capable of accommodating large student groups cost-effectively. The Sierra Park Hostel provides secure dormitory lodging with complimentary breakfast and conference rooms. Furthermore, the town center boasts diverse, affordable family restaurants offering healthy dining options suited to dietary requirements.

Recreational and Cultural Facilities
Tandil offers outstanding natural and recreational attractions. Students can engage in guided rock-climbing, orienteering, and mountain biking across the Sierra del Tigre reserve. Additionally, the historic artisan center and geological heritage sites offer valuable educational opportunities linking physical endurance with ecological science.

Recommendation
Taking into consideration its reasonable pricing, dependable security, and diverse outdoor activities, I strongly advise selecting Tandil for our educational journey.`
          }
        ]
      }
    ]
  }
};
