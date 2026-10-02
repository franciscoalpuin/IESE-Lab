export interface UseOfLanguageQuestion {
  id: string;
  number: number | string;
  questionText: string;
  type: 'multiple-choice' | 'cloze-choice' | 'dialogue-match' | 'open-cloze' | 'transformation' | 'word-formation';
  options?: string[];
  givenWord?: string; // For transformations or word formation (e.g., 'EASY', 'PREPARE', 'regrets')
  prefixText?: string;
  suffixText?: string;
  correctAnswer: string;
  acceptableAnswers?: string[];
  points: number;
  explanation?: string;
}

export interface UseOfLanguageExercise {
  exerciseNumber: number;
  title: string;
  instruction: string;
  type: 'multiple-choice' | 'dialogue-match' | 'cloze-choice' | 'open-cloze' | 'transformation' | 'word-formation';
  contextTitle?: string;
  contextText?: string;
  dialogueScript?: { speaker: string; text: string; blankId?: string }[];
  dialogueOptions?: { id: string; text: string }[];
  questions: UseOfLanguageQuestion[];
}

export interface UseOfLanguageExamModel {
  levelNumber: number;
  levelRoman: string;
  partTitle: string;
  timeAllowedMinutes: number;
  totalPoints: number;
  exercises: UseOfLanguageExercise[];
  officialKeySummary: { exercise: string; answers: string }[];
}

export const USE_OF_LANGUAGE_EXAM_MODELS: Record<number, UseOfLanguageExamModel> = {
  // =========================================================================
  // NIVEL 1 (Parte 3 – Uso de la lengua) - 20 minutos - 20 puntos
  // =========================================================================
  1: {
    levelNumber: 1,
    levelRoman: 'I',
    partTitle: 'Parte 3 – Uso de la lengua',
    timeAllowedMinutes: 20,
    totalPoints: 20,
    officialKeySummary: [
      { exercise: 'Exercise 1 (1-5)', answers: '1) b (are), 2) c (is playing), 3) a (starts), 4) c (can\'t), 5) b (is going to go)' },
      { exercise: 'Exercise 2 (A-E)', answers: 'A) 6, B) 1, C) 3, D) 7, E) 4' },
      { exercise: 'Exercise 3 (1-10)', answers: '1) b, 2) a, 3) b, 4) c, 5) c, 6) a, 7) b, 8) a, 9) a, 10) b' }
    ],
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 – Questions 1-5',
        instruction: 'Read the sentences about movies and choose the best word for each space:',
        type: 'multiple-choice',
        questions: [
          {
            id: 'l1-u1-q1',
            number: 1,
            questionText: 'There __________ a lot of good movies playing at the Multiplex Cinemas tonight.',
            type: 'multiple-choice',
            options: ['a) is', 'b) are', 'c) were'],
            correctAnswer: 'b',
            points: 1,
            explanation: '"A lot of good movies" es plural y el contexto temporal es presente ("tonight"), por lo tanto se utiliza "are".'
          },
          {
            id: 'l1-u1-q2',
            number: 2,
            questionText: '"Spider Man" ______________ in Cinema 1 now.',
            type: 'multiple-choice',
            options: ['a) play', 'b) plays', 'c) is playing'],
            correctAnswer: 'c',
            points: 1,
            explanation: 'La expresión temporal "now" indica una acción en progreso continuo en este momento (Present Continuous: is playing).'
          },
          {
            id: 'l1-u1-q3',
            number: 3,
            questionText: '"Ice Age 2" _____________ at 7p.m. in Cinema 2.',
            type: 'multiple-choice',
            options: ['a) starts', 'b) start', 'c) starting'],
            correctAnswer: 'a',
            points: 1,
            explanation: 'Para horarios y programaciones oficiales de espectáculos o transportes se utiliza el Present Simple con sujeto singular en tercera persona (starts).'
          },
          {
            id: 'l1-u1-q4',
            number: 4,
            questionText: 'Peter _______________ go tonight because he\'s ill.',
            type: 'multiple-choice',
            options: ['a) can', 'b) could', 'c) can\'t'],
            correctAnswer: 'c',
            points: 1,
            explanation: 'Al estar enfermo ("because he\'s ill"), no tiene la posibilidad física de ir (imposibilidad en presente: can\'t).'
          },
          {
            id: 'l1-u1-q5',
            number: 5,
            questionText: 'Peter _______________ next Saturday instead because he is in bed now.',
            type: 'multiple-choice',
            options: ['a) goes', 'b) is going to go', 'c) going'],
            correctAnswer: 'b',
            points: 1,
            explanation: 'Para planes o intenciones futuras determinadas ("next Saturday") se utiliza "be going to + verbo base" (is going to go).'
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Questions 5-10',
        instruction: 'Complete the conversations between two people at a party using the given options. There are two extra choices:',
        type: 'dialogue-match',
        dialogueOptions: [
          { id: '1', text: '1) No, I don\'t. I work out of town.' },
          { id: '2', text: '2) I was born near here.' },
          { id: '3', text: '3) It takes me half an hour by train.' },
          { id: '4', text: '4) From 8 a.m to 5 p.m.' },
          { id: '5', text: '5) At 8 o\'clock.' },
          { id: '6', text: '6) At the moment I\'m living with my parents but I\'m going to rent a flat with a friend.' },
          { id: '7', text: '7) You are lucky! My brother does too.' }
        ],
        dialogueScript: [
          { speaker: 'Gordon', text: 'Where do you live?' },
          { speaker: 'Marie', text: '(A)', blankId: 'l1-u2-qa' },
          { speaker: 'Gordon', text: 'Do you work near here?' },
          { speaker: 'Marie', text: '(B)', blankId: 'l1-u2-qb' },
          { speaker: 'Gordon', text: 'How long does it take you to go to work?' },
          { speaker: 'Marie', text: '(C)', blankId: 'l1-u2-qc' },
          { speaker: 'Gordon', text: 'I walk because I live near the office.' },
          { speaker: 'Marie', text: '(D)', blankId: 'l1-u2-qd' },
          { speaker: 'Gordon', text: 'What are your hours?' },
          { speaker: 'Marie', text: '(E)', blankId: 'l1-u2-qe' }
        ],
        questions: [
          {
            id: 'l1-u2-qa',
            number: 'A',
            questionText: 'Gordon: Where do you live? -> Marie: (A)',
            type: 'dialogue-match',
            correctAnswer: '6',
            points: 1,
            explanation: 'Opción 6: "At the moment I\'m living with my parents but I\'m going to rent a flat with a friend."'
          },
          {
            id: 'l1-u2-qb',
            number: 'B',
            questionText: 'Gordon: Do you work near here? -> Marie: (B)',
            type: 'dialogue-match',
            correctAnswer: '1',
            points: 1,
            explanation: 'Opción 1: "No, I don\'t. I work out of town."'
          },
          {
            id: 'l1-u2-qc',
            number: 'C',
            questionText: 'Gordon: How long does it take you to go to work? -> Marie: (C)',
            type: 'dialogue-match',
            correctAnswer: '3',
            points: 1,
            explanation: 'Opción 3: "It takes me half an hour by train."'
          },
          {
            id: 'l1-u2-qd',
            number: 'D',
            questionText: 'Gordon: I walk because I live near the office. -> Marie: (D)',
            type: 'dialogue-match',
            correctAnswer: '7',
            points: 1,
            explanation: 'Opción 7: "You are lucky! My brother does too."'
          },
          {
            id: 'l1-u2-qe',
            number: 'E',
            questionText: 'Gordon: What are your hours? -> Marie: (E)',
            type: 'dialogue-match',
            correctAnswer: '4',
            points: 1,
            explanation: 'Opción 4: "From 8 a.m to 5 p.m."'
          }
        ]
      },
      {
        exerciseNumber: 3,
        title: 'Exercise 3 – Questions 11-20',
        instruction: 'Read the article about penguins and choose the best word for each space:',
        type: 'cloze-choice',
        contextTitle: 'PENGUINS',
        contextText: `There (1).................. seventeen different types of penguins. They can be (2) ................... forty centimetres to one metre tall. They all (3) ..................... in the south part of the world. In winter, they swim (4) ....................... long way to find warmer weather.

In spring, (5) ...................... penguins come together in the beaches of Antarctica. The female penguin has one or two eggs. She puts (6) ....................... eggs on the ground and sits there to keep (7) ............................ warm. But she (8) .........................sit all the time because penguins can move with one egg between their legs.

(9) ............................... the female penguin is sitting on the eggs, the male penguin brings her food. He also (10) ........................... this when the baby penguins are born.`,
        questions: [
          {
            id: 'l1-u3-q1',
            number: 1,
            questionText: 'There (1) ________ seventeen different types of penguins.',
            type: 'multiple-choice',
            options: ['a) is', 'b) are', 'c) be'],
            correctAnswer: 'b',
            points: 1,
            explanation: '"Seventeen different types" es plural -> There are.'
          },
          {
            id: 'l1-u3-q2',
            number: 2,
            questionText: 'They can be (2) ________ forty centimetres to one metre tall.',
            type: 'multiple-choice',
            options: ['a) from', 'b) by', 'c) between'],
            correctAnswer: 'a',
            points: 1,
            explanation: 'La correlación con "to" es "from ... to" (from forty centimetres to one metre tall).'
          },
          {
            id: 'l1-u3-q3',
            number: 3,
            questionText: 'They all (3) ________ in the south part of the world.',
            type: 'multiple-choice',
            options: ['a) lives', 'b) live', 'c) living'],
            correctAnswer: 'b',
            points: 1,
            explanation: 'Sujeto plural "They all" -> forma base del verbo "live".'
          },
          {
            id: 'l1-u3-q4',
            number: 4,
            questionText: 'In winter, they swim (4) ________ long way to find warmer weather.',
            type: 'multiple-choice',
            options: ['a) one', 'b) the', 'c) a'],
            correctAnswer: 'c',
            points: 1,
            explanation: 'La expresión idiomática es "swim a long way" (una distancia larga).'
          },
          {
            id: 'l1-u3-q5',
            number: 5,
            questionText: 'In spring, (5) ________ penguins come together in the beaches of Antarctica.',
            type: 'multiple-choice',
            options: ['a) lots', 'b) much', 'c) many'],
            correctAnswer: 'c',
            points: 1,
            explanation: '"Penguins" es sustantivo contable en plural -> "many penguins" ("lots" requeriría "lots of").'
          },
          {
            id: 'l1-u3-q6',
            number: 6,
            questionText: 'She puts (6) ________ eggs on the ground and sits there...',
            type: 'multiple-choice',
            options: ['a) her', 'b) hers', 'c) she'],
            correctAnswer: 'a',
            points: 1,
            explanation: 'Adjetivo posesivo delante del sustantivo "eggs" -> "her eggs".'
          },
          {
            id: 'l1-u3-q7',
            number: 7,
            questionText: '...and sits there to keep (7) ________ warm.',
            type: 'multiple-choice',
            options: ['a) it', 'b) them', 'c) their'],
            correctAnswer: 'b',
            points: 1,
            explanation: 'Pronombre objeto en plural que sustituye a "one or two eggs" -> "them".'
          },
          {
            id: 'l1-u3-q8',
            number: 8,
            questionText: 'But she (8) ________ sit all the time because penguins can move...',
            type: 'multiple-choice',
            options: ['a) doesn\'t', 'b) don\'t', 'c) isn\'t'],
            correctAnswer: 'a',
            points: 1,
            explanation: 'Sujeto singular tercera persona "she" + verbo base "sit" en presente simple -> "doesn\'t".'
          },
          {
            id: 'l1-u3-q9',
            number: 9,
            questionText: '(9) ________ the female penguin is sitting on the eggs, the male brings food.',
            type: 'multiple-choice',
            options: ['a) When', 'b) How', 'c) Who'],
            correctAnswer: 'a',
            points: 1,
            explanation: 'Conjunción temporal "When" (Cuando la hembra está empollando...).'
          },
          {
            id: 'l1-u3-q10',
            number: 10,
            questionText: 'He also (10) ________ this when the baby penguins are born.',
            type: 'multiple-choice',
            options: ['a) do', 'b) does', 'c) doing'],
            correctAnswer: 'b',
            points: 1,
            explanation: 'Sujeto singular "He" en presente simple afirmativo -> "does".'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 2 (Parte 3 – Uso de la lengua) - 20 minutos - 20 puntos
  // =========================================================================
  2: {
    levelNumber: 2,
    levelRoman: 'II',
    partTitle: 'Parte 3 – Uso de la lengua',
    timeAllowedMinutes: 20,
    totalPoints: 20,
    officialKeySummary: [
      { exercise: 'Exercise 1 (1-7)', answers: '1) a (decided), 2) b (to stay), 3) b (took), 4) b (corner), 5) b (colder), 6) c (some), 7) c (after)' },
      { exercise: 'Exercise 2 (8-15)', answers: '8) b (finished), 9) a (is filming), 10) a (painting), 11) b (is going to fly), 12) b (can\'t travel), 13) a (were cycling), 14) c (fell), 15) b (couldn\'t)' },
      { exercise: 'Exercise 3 (16-20)', answers: '16) her, 17) another, 18) and, 19) a, 20) with' }
    ],
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 – Questions 1-7',
        instruction: 'Read the sentences about going camping. Circle the best word for each space:',
        type: 'multiple-choice',
        questions: [
          {
            id: 'l2-u1-q1',
            number: 1,
            questionText: 'Adrian and Martin ..............................to go camping for the summer holidays.',
            type: 'multiple-choice',
            options: ['a) decided', 'b) thought', 'c) felt'],
            correctAnswer: 'a',
            points: 1,
            explanation: '"Decided to go" rige infinitivo con to para decisiones tomadas.'
          },
          {
            id: 'l2-u1-q2',
            number: 2,
            questionText: 'They wanted .........................................somewhere near the sea.',
            type: 'multiple-choice',
            options: ['a) to stand', 'b) to stay', 'c) staying'],
            correctAnswer: 'b',
            points: 1,
            explanation: '"Wanted to stay" (quedarse/alojarse en un lugar).'
          },
          {
            id: 'l2-u1-q3',
            number: 3,
            questionText: 'It ...............................................three hours to drive to the campsite.',
            type: 'multiple-choice',
            options: ['a) had', 'b) took', 'c) got'],
            correctAnswer: 'b',
            points: 1,
            explanation: 'Para duración de viajes: "It took [time] to drive...".'
          },
          {
            id: 'l2-u1-q4',
            number: 4,
            questionText: 'They put their tent in a............................................ of the field.',
            type: 'multiple-choice',
            options: ['a) centre', 'b) corner', 'c) back'],
            correctAnswer: 'b',
            points: 1,
            explanation: '"In a corner of the field" (en una esquina/rincón del campo).'
          },
          {
            id: 'l2-u1-q5',
            number: 5,
            questionText: 'The weather was much …………………………. than they thought.',
            type: 'multiple-choice',
            options: ['a) cold', 'b) colder', 'c) coldest'],
            correctAnswer: 'b',
            points: 1,
            explanation: 'Estructura comparativa con "than": "much colder than".'
          },
          {
            id: 'l2-u1-q6',
            number: 6,
            questionText: 'They sent...................................postcards to their friends.',
            type: 'multiple-choice',
            options: ['a) any', 'b) much', 'c) some'],
            correctAnswer: 'c',
            points: 1,
            explanation: 'Oración afirmativa con sustantivo plural contable -> "some postcards".'
          },
          {
            id: 'l2-u1-q7',
            number: 7,
            questionText: '…………………. a week of rain, they decided to go back home.',
            type: 'multiple-choice',
            options: ['a) before', 'b) because', 'c) after'],
            correctAnswer: 'c',
            points: 1,
            explanation: 'Preposición temporal de posterioridad: "After a week of rain".'
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Questions 8-15',
        instruction: 'Read the text below and choose the correct option a, b or c:',
        type: 'cloze-choice',
        contextTitle: 'John the Stuntman',
        contextText: `John is 32 years old and lives in Manchester with his girlfriend, Gita. He has a very unusual job - he is a stuntman!
Every day he drives to the film studios near his home and often works more than 10 hours a day. Two days ago he 8- ……………. the new Stephen Spielberg movie. And now he 9- ……………. a film with Demi Moore. Lucky John!
In his free time John likes 10- ……………. pictures of fruit but he is not very good; he also flies small aeroplanes; next week he 11- ……………. to Rome to see his friend, Neil. Gita 12- ……………. to Italy with him. Last month, John and Gita were on holiday together; they 13 - ……………. down a mountain when Gita 14- ……………. off her bike. She tried to get on the bike again but she 15- ……………. because her leg was broken! Poor Gita! She must stay in bed for some more time.`,
        questions: [
          {
            id: 'l2-u2-q8',
            number: 8,
            questionText: 'Two days ago he 8- ……………. the new Stephen Spielberg movie.',
            type: 'multiple-choice',
            options: ['a) finish', 'b) finished', 'c) finishes'],
            correctAnswer: 'b',
            points: 1,
            explanation: '"Two days ago" marca una acción completada en pasado simple -> finished.'
          },
          {
            id: 'l2-u2-q9',
            number: 9,
            questionText: 'And now he 9- ……………. a film with Demi Moore.',
            type: 'multiple-choice',
            options: ['a) is filming', 'b) films', 'c) is film'],
            correctAnswer: 'a',
            points: 1,
            explanation: '"And now" indica acción en desarrollo en el presente -> is filming.'
          },
          {
            id: 'l2-u2-q10',
            number: 10,
            questionText: 'In his free time John likes 10- ……………. pictures of fruit...',
            type: 'multiple-choice',
            options: ['a) painting', 'b) paint', 'c) paints'],
            correctAnswer: 'a',
            points: 1,
            explanation: 'Verbo de preferencia "like" seguido de gerundio para actividades recreativas -> painting.'
          },
          {
            id: 'l2-u2-q11',
            number: 11,
            questionText: '...next week he 11- ……………. to Rome to see his friend, Neil.',
            type: 'multiple-choice',
            options: ['a) are flying', 'b) is going to fly', 'c) flies'],
            correctAnswer: 'b',
            points: 1,
            explanation: 'Planes futuros con sujeto singular ("he") -> is going to fly.'
          },
          {
            id: 'l2-u2-q12',
            number: 12,
            questionText: 'Gita 12- ……………. to Italy with him.',
            type: 'multiple-choice',
            options: ['a) don’t travel', 'b) can’t travel', 'c) didn’t travel'],
            correctAnswer: 'b',
            points: 1,
            explanation: 'Imposibilidad para el viaje próximo: "can\'t travel" (por tener la pierna rota).'
          },
          {
            id: 'l2-u2-q13',
            number: 13,
            questionText: '...they 13 - ……………. down a mountain when Gita...',
            type: 'multiple-choice',
            options: ['a) were cycling', 'b) cycled', 'c) did cycle'],
            correctAnswer: 'a',
            points: 1,
            explanation: 'Acción continua en el pasado interrumpida por otra -> were cycling.'
          },
          {
            id: 'l2-u2-q14',
            number: 14,
            questionText: '...when Gita 14- ……………. off her bike.',
            type: 'multiple-choice',
            options: ['a) fall', 'b) feel', 'c) fell'],
            correctAnswer: 'c',
            points: 1,
            explanation: 'Pasado simple irregular del verbo fall (caer) -> fell.'
          },
          {
            id: 'l2-u2-q15',
            number: 15,
            questionText: 'She tried to get on the bike again but she 15- ……………. because her leg was broken!',
            type: 'multiple-choice',
            options: ['a) can’t', 'b) couldn’t', 'c) can'],
            correctAnswer: 'b',
            points: 1,
            explanation: 'Incapacidad física en tiempo pasado -> couldn\'t.'
          }
        ]
      },
      {
        exerciseNumber: 3,
        title: 'Exercise 3 – Questions 16-20',
        instruction: 'Read the article about a woman called Jahan Begum. Complete the blanks (16 – 20) with 1 (ONE) appropriate word:',
        type: 'open-cloze',
        contextTitle: 'Jahan Begum',
        contextText: `Jahan Begum was born on a farm in the hills. She lived there with her (16) …………… family for thirteen years. The family grew their own food and kept animals. But then one year it didn’t rain so they decided to move to (17) …………… country.
The journey to the mountains was long and (18) …………… difficult.
Their first home in the new country was a (19) …………… tent. Then Jahan’s brother made a house with (20) …………… wood and stones so the family had a place to live.`,
        questions: [
          {
            id: 'l2-u3-q16',
            number: 16,
            questionText: 'She lived there with her (16) ________ family for thirteen years.',
            type: 'open-cloze',
            correctAnswer: 'her',
            acceptableAnswers: ['her'],
            points: 1,
            explanation: 'Adjetivo posesivo que acompaña a family: "her family".'
          },
          {
            id: 'l2-u3-q17',
            number: 17,
            questionText: '...they decided to move to (17) ________ country.',
            type: 'open-cloze',
            correctAnswer: 'another',
            acceptableAnswers: ['another'],
            points: 1,
            explanation: 'Determinante para otro país diferente: "another".'
          },
          {
            id: 'l2-u3-q18',
            number: 18,
            questionText: 'The journey to the mountains was long and (18) ________ difficult.',
            type: 'open-cloze',
            correctAnswer: 'and',
            acceptableAnswers: ['and', 'very'],
            points: 1,
            explanation: 'Conjunción copulativa "and" (o intensificador "very", la clave oficial del examen es "and").'
          },
          {
            id: 'l2-u3-q19',
            number: 19,
            questionText: 'Their first home in the new country was a (19) ________ tent.',
            type: 'open-cloze',
            correctAnswer: 'a',
            acceptableAnswers: ['a', 'small', 'big'],
            points: 1,
            explanation: 'Clave oficial: "a" (o adjetivo de tamaño).'
          },
          {
            id: 'l2-u3-q20',
            number: 20,
            questionText: '...made a house with (20) ________ wood and stones...',
            type: 'open-cloze',
            correctAnswer: 'with',
            acceptableAnswers: ['with', 'some'],
            points: 1,
            explanation: 'Clave oficial: "with".'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 3 (Parte 3 – Uso de la lengua) - 30 minutos - 20 puntos
  // =========================================================================
  3: {
    levelNumber: 3,
    levelRoman: 'III',
    partTitle: 'Parte 3 – Uso de la lengua',
    timeAllowedMinutes: 30,
    totalPoints: 20,
    officialKeySummary: [
      { exercise: 'Exercise 1 (1-5)', answers: '1. who, 2. have, 3. of, 4. a, 5. as' },
      { exercise: 'Exercise 2 (6-11)', answers: '6 - C, 7 - C, 8 - B, 9 - D, 10 - A, 11 - B' },
      { exercise: 'Exercise 3 (12-20)', answers: '12 - C, 13 - B, 14 - A, 15 - B, 16 - C, 17 - A, 18 - A, 19 - C, 20 - B' }
    ],
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 – Questions 1-5',
        instruction: 'Read the e-mail below and fill in the blanks (1 – 5) with ONE word:',
        type: 'open-cloze',
        contextTitle: 'E-mail from Katie to Maria: My holiday',
        contextText: `From: Katie
To: Maria
Subject: My holiday

We are having a lovely time on holiday. The weather has been very good and I love the food! Tomorrow, we're going to visit my uncle and aunt, (1) ....... live in a little village near our hotel. If we (2) ........ enough time we might visit some (3) ........ our other relatives in the area.
There are a lot of things to do here if you like sightseeing. We are going on (4) ........ trip to the other side of the island one day and I want to do some shopping before I come home.
Anyway, I am looking forward to seeing you next week. I'll phone you (5) ........ soon as I get back.
Best wishes
Katie`,
        questions: [
          {
            id: 'l3-u1-q1',
            number: 1,
            questionText: '...visit my uncle and aunt, (1) _______ live in a little village...',
            type: 'open-cloze',
            correctAnswer: 'who',
            acceptableAnswers: ['who', 'that'],
            points: 1,
            explanation: 'Pronombre relativo para personas en non-defining clause -> who.'
          },
          {
            id: 'l3-u1-q2',
            number: 2,
            questionText: 'If we (2) ________ enough time we might visit...',
            type: 'open-cloze',
            correctAnswer: 'have',
            acceptableAnswers: ['have'],
            points: 1,
            explanation: 'Primer condicional en presente simple: "If we have enough time".'
          },
          {
            id: 'l3-u1-q3',
            number: 3,
            questionText: '...visit some (3) ________ our other relatives in the area.',
            type: 'open-cloze',
            correctAnswer: 'of',
            acceptableAnswers: ['of'],
            points: 1,
            explanation: 'Partitivo ante determinante posesivo -> "some of our other relatives".'
          },
          {
            id: 'l3-u1-q4',
            number: 4,
            questionText: 'We are going on (4) ________ trip to the other side of the island...',
            type: 'open-cloze',
            correctAnswer: 'a',
            acceptableAnswers: ['a'],
            points: 1,
            explanation: 'Expresión fija para excursiones -> "go on a trip".'
          },
          {
            id: 'l3-u1-q5',
            number: 5,
            questionText: 'I\'ll phone you (5) ________ soon as I get back.',
            type: 'open-cloze',
            correctAnswer: 'as',
            acceptableAnswers: ['as'],
            points: 1,
            explanation: 'Conector temporal "as soon as" (tan pronto como).'
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Questions 6-11',
        instruction: 'Read the text below and choose the correct verb tense option to fill in each blank:',
        type: 'cloze-choice',
        contextTitle: 'My Trips to Italy',
        contextText: `I (6)............................... to Italy only three times in my life and the third time, in 1963, was the best because it was then that I finally (7)...................................Laura to be my wife and we got married in one of the most beautiful cities in the world, Florence. We then toured the country, staying in different little towns for the night.
Then back to England where I (8) ………………… my first job. I (9) ....................... the next seven years as a salesman working for the family business before I (10)................................... writing books. I (11) ………………………. to return to Italy and I think in my heart that perhaps one day when I retire, I will spend my last days there.`,
        questions: [
          {
            id: 'l3-u2-q6',
            number: 6,
            questionText: 'I (6) ________ to Italy only three times in my life...',
            type: 'multiple-choice',
            options: ['A- went', 'B- came', 'C- have been', 'D- have come'],
            correctAnswer: 'C',
            points: 1,
            explanation: 'Experiencia vital a lo largo de toda la vida ("in my life") -> Present Perfect: have been.'
          },
          {
            id: 'l3-u2-q7',
            number: 7,
            questionText: '...in 1963, was the best because it was then that I finally (7) ________ Laura to be my wife...',
            type: 'multiple-choice',
            options: ['A- have asked', 'B- was asking', 'C- asked', 'D- would like'],
            correctAnswer: 'C',
            points: 1,
            explanation: 'Evento específico concluido en un momento pasado determinado (1963) -> Past Simple: asked.'
          },
          {
            id: 'l3-u2-q8',
            number: 8,
            questionText: 'Then back to England where I (8) ________ my first job.',
            type: 'multiple-choice',
            options: ['A- have got', 'B- started', 'C- have started', 'D- will start'],
            correctAnswer: 'B',
            points: 1,
            explanation: 'Acción cronológica sucesiva en el pasado -> started.'
          },
          {
            id: 'l3-u2-q9',
            number: 9,
            questionText: 'I (9) ________ the next seven years as a salesman working for the family business...',
            type: 'multiple-choice',
            options: ['A- have passed', 'B- passed', 'C- have spent', 'D- spent'],
            correctAnswer: 'D',
            points: 1,
            explanation: 'Tiempo transcurrido en el pasado ("spend time" en pasado) -> spent.'
          },
          {
            id: 'l3-u2-q10',
            number: 10,
            questionText: '...before I (10) ________ writing books.',
            type: 'multiple-choice',
            options: ['A- began', 'B- have began', 'C- was beginning', 'D- have begun'],
            correctAnswer: 'A',
            points: 1,
            explanation: 'Cláusula temporal subordinada con "before" en el pasado -> Past Simple: began.'
          },
          {
            id: 'l3-u2-q11',
            number: 11,
            questionText: 'I (11) ________ to return to Italy and I think in my heart...',
            type: 'multiple-choice',
            options: ['A- always wanted', 'B- have always wanted', 'C- have always been wanting', 'D- was wanting'],
            correctAnswer: 'B',
            points: 1,
            explanation: 'Deseo que continúa desde el pasado hasta el presente (verbo estático want con "always") -> have always wanted.'
          }
        ]
      },
      {
        exerciseNumber: 3,
        title: 'Exercise 3 – Questions 12–20',
        instruction: 'Read the article about Jack Novak and choose the best word (A, B or C) for each space:',
        type: 'cloze-choice',
        contextTitle: 'Jack Novak',
        contextText: `The (12) ………………… man in the whole of St. Helena, 70-year-old Jack Novak, has been the owner of the biggest national newspaper, the St. Helena Times, (13) ……………………… 1994. He (14) …………………… to Qeenstown a month ago. Police have been investigating (15)................................. connections with the local mafia (16) ……………. more than a year, but (17) ………………… they have not found (18) ………………………… reason to arrest him. He promises to reduce taxes and (19) ………………………. a lot of money on facilites in the city (for example, a new swimming pool and a sports centre). His slogan is, “With Jack Novak, (20) ……………………. will be better off”.`,
        questions: [
          {
            id: 'l3-u3-q12',
            number: 12,
            questionText: 'The (12) ________ man in the whole of St. Helena...',
            type: 'multiple-choice',
            options: ['A- richer', 'B- most rich', 'C- richest'],
            correctAnswer: 'C',
            points: 1,
            explanation: 'Superlativo de adjetivo corto (rich) precedido por "The" -> richest.'
          },
          {
            id: 'l3-u3-q13',
            number: 13,
            questionText: '...owner of the biggest national newspaper, the St. Helena Times, (13) ________ 1994.',
            type: 'multiple-choice',
            options: ['A- in', 'B- since', 'C- for'],
            correctAnswer: 'B',
            points: 1,
            explanation: 'Punto de partida temporal específico con Present Perfect -> since 1994.'
          },
          {
            id: 'l3-u3-q14',
            number: 14,
            questionText: 'He (14) ________ to Queenstown a month ago.',
            type: 'multiple-choice',
            options: ['A- moved', 'B- has moved', 'C- would move'],
            correctAnswer: 'A',
            points: 1,
            explanation: '"a month ago" es un marcador inequívoco de Past Simple -> moved.'
          },
          {
            id: 'l3-u3-q15',
            number: 15,
            questionText: 'Police have been investigating (15) ________ connections with the local mafia...',
            type: 'multiple-choice',
            options: ['A- their', 'B- his', 'C- its'],
            correctAnswer: 'B',
            points: 1,
            explanation: 'Posesivo referido a Jack Novak (masculino singular) -> his.'
          },
          {
            id: 'l3-u3-q16',
            number: 16,
            questionText: '...connections with the local mafia (16) ________ more than a year...',
            type: 'multiple-choice',
            options: ['A- since', 'B- while', 'C- for'],
            correctAnswer: 'C',
            points: 1,
            explanation: 'Duración acumulada de tiempo con Present Perfect Continuous -> for more than a year.'
          },
          {
            id: 'l3-u3-q17',
            number: 17,
            questionText: '...but (17) ________ they have not found...',
            type: 'multiple-choice',
            options: ['A- so far', 'B- so long', 'C- so often'],
            correctAnswer: 'A',
            points: 1,
            explanation: 'Locución adverbial "so far" (hasta el momento / hasta ahora).'
          },
          {
            id: 'l3-u3-q18',
            number: 18,
            questionText: '...they have not found (18) ________ reason to arrest him.',
            type: 'multiple-choice',
            options: ['A- any', 'B- no', 'C- some'],
            correctAnswer: 'A',
            points: 1,
            explanation: 'Oración negativa ("have not found") -> any.'
          },
          {
            id: 'l3-u3-q19',
            number: 19,
            questionText: 'He promises to reduce taxes and (19) ________ a lot of money on facilities in the city...',
            type: 'multiple-choice',
            options: ['A- pay', 'B- waste', 'C- spend'],
            correctAnswer: 'C',
            points: 1,
            explanation: 'Colocación "spend money on" (invertir/gastar dinero en instalaciones).'
          },
          {
            id: 'l3-u3-q20',
            number: 20,
            questionText: 'His slogan is, "With Jack Novak, (20) ________ will be better off".',
            type: 'multiple-choice',
            options: ['A- someone', 'B- everyone', 'C- anyone'],
            correctAnswer: 'B',
            points: 1,
            explanation: 'Significado inclusivo de beneficio para toda la población -> everyone.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 4 (Parte 3 – Uso de la lengua) - 30 minutos - 20 puntos
  // =========================================================================
  4: {
    levelNumber: 4,
    levelRoman: 'IV',
    partTitle: 'Parte 3 – Uso de la lengua',
    timeAllowedMinutes: 30,
    totalPoints: 20,
    officialKeySummary: [
      { exercise: 'Exercise 1 (1-5, 0.50 pts c/u)', answers: '1) B (invited), 2) C (each), 3) B (thinking), 4) C (which), 5) A (so)' },
      { exercise: 'Exercise 2 (6-10, 0.50 pts c/u)', answers: '6) which, 7) an, 8) their, 9) were, 10) it' },
      { exercise: 'Exercise 3 (11-15, 1 pt c/u)', answers: '11) enough, 12) many, 13) you play, 14) I would, 15) is sold' },
      { exercise: 'Exercise 4 (16-25, 1 pt c/u)', answers: '16) A, 17) B, 18) C, 19) B, 20) A, 21) C, 22) A, 23) C, 24) B, 25) A' }
    ],
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 – Questions 1-5 (0.50 pts each)',
        instruction: 'Read the text below and choose the correct word for each space. Circle A, B, C or D:',
        type: 'cloze-choice',
        contextTitle: 'SCHOOL’S ART SALE',
        contextText: `Last Friday parents helped collect lots of money for a school by buying children’s pictures. A primary school in Bicester used its classrooms as an art gallery for a day and (1) ................................ parents to come and look. All the pupils produced a work of art and (2)...................................... painting went on sale at 5 pounds. Hundreds of parents and relations came and, together, they spent over 2,000 pounds!
Now the school is (3) .................................... of making the exhibition bigger next year by also contacting businesses (4) ......................................... operate in the local area. One of the school-children’s parents first had the idea after going to similar exhibitions in her home country, South Africa.
The school has decided to use the money to buy books and CD players. The Head Teacher said he was delighted to see the school (5) ........................... full and he was very proud of the children.`,
        questions: [
          {
            id: 'l4-u1-q1',
            number: 1,
            questionText: '...used its classrooms as an art gallery for a day and (1) ________ parents to come and look.',
            type: 'multiple-choice',
            options: ['A) hoped', 'B) invited', 'C) pleased', 'D) wished'],
            correctAnswer: 'B',
            points: 0.5,
            explanation: '"Invited [someone] to come" rige objeto directo e infinitivo con to.'
          },
          {
            id: 'l4-u1-q2',
            number: 2,
            questionText: 'All the pupils produced a work of art and (2) ________ painting went on sale at 5 pounds.',
            type: 'multiple-choice',
            options: ['A) few', 'B) some', 'C) each', 'D) all'],
            correctAnswer: 'C',
            points: 0.5,
            explanation: 'Sustantivo singular contable "painting" -> each painting (cada cuadro individual).'
          },
          {
            id: 'l4-u1-q3',
            number: 3,
            questionText: 'Now the school is (3) ________ of making the exhibition bigger next year...',
            type: 'multiple-choice',
            options: ['A) planning', 'B) thinking', 'C) considering', 'D) wanting'],
            correctAnswer: 'B',
            points: 0.5,
            explanation: 'Construcción con preposición: "thinking of doing something" (considering no lleva preposición "of").'
          },
          {
            id: 'l4-u1-q4',
            number: 4,
            questionText: '...by also contacting businesses (4) ________ operate in the local area.',
            type: 'multiple-choice',
            options: ['A) what', 'B) who', 'C) which', 'D) who'],
            correctAnswer: 'C',
            points: 0.5,
            explanation: 'Pronombre relativo para empresas/cosas (businesses) -> which.'
          },
          {
            id: 'l4-u1-q5',
            number: 5,
            questionText: '...he was delighted to see the school (5) ________ full and he was very proud...',
            type: 'multiple-choice',
            options: ['A) so', 'B) too', 'C) such', 'D) enough'],
            correctAnswer: 'A',
            points: 0.5,
            explanation: 'Intensificador de adjetivo con sentido positivo ("tan lleno") -> so full.'
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Questions 6-10 (0.50 pts each)',
        instruction: 'Read the text and fill in the blanks (6 – 10) with 1 (ONE) appropriate word:',
        type: 'open-cloze',
        contextTitle: 'Best Pies ever!!',
        contextText: `I'm having a fantastic time here in Canada and I thought I'd write to tell you about something I've eaten which I loved!
As you know, I'm in a place called Amprior, (6) ........ is in the north east, near Ontario. They have something called a Premium Pasty. It looks like a parcel made of pastry and the pastry holds together a mixture of meat and vegetables. These pasties have (7) ........ interesting history. In the past, they were the basic meal for British miners who worked underground digging for tin. After a hard morning's work the miners would sit down to eat (8) ........ lunch. But because of the job they were doing, their hands (9) ........ covered in dangerous materials. The design of the pasty meant they could eat the meat and vegetables before throwing away the dirty pastry.
I don't know if it's true and (10) ........ seems a shame that they couldn't eat all of it! You can get the pasties anywhere in the north of Canada but I've been told the best ones are in Cornwall, UK.`,
        questions: [
          {
            id: 'l4-u2-q6',
            number: 6,
            questionText: '...in a place called Amprior, (6) ________ is in the north east...',
            type: 'open-cloze',
            correctAnswer: 'which',
            acceptableAnswers: ['which'],
            points: 0.5,
            explanation: 'Pronombre relativo para lugares en oración explicativa -> which.'
          },
          {
            id: 'l4-u2-q7',
            number: 7,
            questionText: 'These pasties have (7) ________ interesting history.',
            type: 'open-cloze',
            correctAnswer: 'an',
            acceptableAnswers: ['an'],
            points: 0.5,
            explanation: 'Artículo indefinido ante sonido vocálico -> an interesting history.'
          },
          {
            id: 'l4-u2-q8',
            number: 8,
            questionText: '...the miners would sit down to eat (8) ________ lunch.',
            type: 'open-cloze',
            correctAnswer: 'their',
            acceptableAnswers: ['their'],
            points: 0.5,
            explanation: 'Posesivo para plural "the miners" -> their lunch.'
          },
          {
            id: 'l4-u2-q9',
            number: 9,
            questionText: '...their hands (9) ________ covered in dangerous materials.',
            type: 'open-cloze',
            correctAnswer: 'were',
            acceptableAnswers: ['were'],
            points: 0.5,
            explanation: 'Voz pasiva en pasado plural ("their hands were covered").'
          },
          {
            id: 'l4-u2-q10',
            number: 10,
            questionText: '...and (10) ________ seems a shame that they couldn\'t eat all of it!',
            type: 'open-cloze',
            correctAnswer: 'it',
            acceptableAnswers: ['it'],
            points: 0.5,
            explanation: 'Sujeto impersonal preparatorio -> "it seems a shame".'
          }
        ]
      },
      {
        exerciseNumber: 3,
        title: 'Exercise 3 – Questions 11-15 (1 pt each)',
        instruction: 'Complete the second sentence so that it means the same as the first. Use no more than three words.',
        type: 'transformation',
        questions: [
          {
            id: 'l4-u3-q11',
            number: 11,
            questionText: 'It\'s too cold to play tennis.',
            prefixText: 'It isn’t warm',
            suffixText: 'to play tennis.',
            type: 'transformation',
            correctAnswer: 'enough',
            acceptableAnswers: ['enough'],
            points: 1,
            explanation: 'Estructura opuesta a "too cold": "not warm enough".'
          },
          {
            id: 'l4-u3-q12',
            number: 12,
            questionText: 'There are only a few squash courts in this town.',
            prefixText: 'There aren’t',
            suffixText: 'squash courts in this town.',
            type: 'transformation',
            correctAnswer: 'many',
            acceptableAnswers: ['many'],
            points: 1,
            explanation: '"Only a few" equivale a "not many" en oraciones negativas.'
          },
          {
            id: 'l4-u3-q13',
            number: 13,
            questionText: 'If you don’t play every week, you won’t improve your tennis.',
            prefixText: 'You won’t improve your tennis unless',
            suffixText: 'every week.',
            type: 'transformation',
            correctAnswer: 'you play',
            acceptableAnswers: ['you play'],
            points: 1,
            explanation: '"Unless" sustituye a "if not", por lo que el verbo va en forma afirmativa: "unless you play".'
          },
          {
            id: 'l4-u3-q14',
            number: 14,
            questionText: 'Why don’t you join a tennis club?',
            prefixText: 'If I were you',
            suffixText: 'join a tennis club.',
            type: 'transformation',
            correctAnswer: 'I would',
            acceptableAnswers: ['I would', 'I\'d'],
            points: 1,
            explanation: 'Fórmula de consejo en segundo condicional: "If I were you, I would...".'
          },
          {
            id: 'l4-u3-q15',
            number: 15,
            questionText: 'The club store sells all the necessary equipment.',
            prefixText: 'All the necessary equipment',
            suffixText: 'at the club store.',
            type: 'transformation',
            correctAnswer: 'is sold',
            acceptableAnswers: ['is sold'],
            points: 1,
            explanation: 'Transformación de voz activa a pasiva en presente simple: equipment es incontable singular -> "is sold".'
          }
        ]
      },
      {
        exerciseNumber: 4,
        title: 'Exercise 4 – Questions 16-25 (1 pt each)',
        instruction: 'Fill in the blanks with the most suitable option: A, B or C.',
        type: 'cloze-choice',
        contextTitle: 'My Experience with Exams',
        contextText: `I ...............................(16) very good at exams. When I was a child I............................ (17) very nervous before an exam, even if I thought I ................................... (18) everything and I .................................... (19) really well. I am not lazy and I normally...................................(20) quite hard, but I am not fond of ................................... (21) exams at all. This year is even worse than usual because I ................................(22) as hard as I ....................................(23).
My parents kept telling me I ............................... (24) or I ................................ (25) but I just couldn’t. But this time I have an excuse because I have been ill for the last few days.`,
        questions: [
          {
            id: 'l4-u4-q16',
            number: 16,
            questionText: 'I ...............................(16) very good at exams.',
            type: 'multiple-choice',
            options: ['A- have never been', 'B- never was', 'C- am never'],
            correctAnswer: 'A',
            points: 1,
            explanation: 'Present Perfect para una condición que abarca desde la niñez hasta el presente -> have never been.'
          },
          {
            id: 'l4-u4-q17',
            number: 17,
            questionText: 'When I was a child I............................ (17) very nervous before an exam...',
            type: 'multiple-choice',
            options: ['A- was getting', 'B- used to get', 'C- had got'],
            correctAnswer: 'B',
            points: 1,
            explanation: 'Hábito o estado recurrente en el pasado -> used to get.'
          },
          {
            id: 'l4-u4-q18',
            number: 18,
            questionText: '...even if I thought I ................................... (18) everything...',
            type: 'multiple-choice',
            options: ['A- had known', 'B- was knowing', 'C- knew'],
            correctAnswer: 'C',
            points: 1,
            explanation: 'Verbo de estado "know" en estilo indirecto / concordancia en pasado -> knew.'
          },
          {
            id: 'l4-u4-q19',
            number: 19,
            questionText: '...and I .................................... (19) really well.',
            type: 'multiple-choice',
            options: ['A- would prepare', 'B- had prepared', 'C- prepared'],
            correctAnswer: 'B',
            points: 1,
            explanation: 'Acción anterior al examen en el pasado -> Past Perfect: had prepared.'
          },
          {
            id: 'l4-u4-q20',
            number: 20,
            questionText: 'I am not lazy and I normally...................................(20) quite hard...',
            type: 'multiple-choice',
            options: ['A- work', 'B- use to work', 'C- worked'],
            correctAnswer: 'A',
            points: 1,
            explanation: 'Hábito habitual en presente indicado por "normally" -> work.'
          },
          {
            id: 'l4-u4-q21',
            number: 21,
            questionText: '...but I am not fond of ................................... (21) exams at all.',
            type: 'multiple-choice',
            options: ['A- do', 'B- to do', 'C- doing'],
            correctAnswer: 'C',
            points: 1,
            explanation: 'Tras la preposición "of" de la expresión "fond of", se debe emplear gerundio -> doing.'
          },
          {
            id: 'l4-u4-q22',
            number: 22,
            questionText: 'This year is even worse than usual because I ................................(22) as hard as I...',
            type: 'multiple-choice',
            options: ['A- haven’t worked', 'B- don’t work', 'C- didn’t work'],
            correctAnswer: 'A',
            points: 1,
            explanation: 'Período no concluido ("This year") con relevancia en el presente -> haven’t worked.'
          },
          {
            id: 'l4-u4-q23',
            number: 23,
            questionText: '...as hard as I ....................................(23).',
            type: 'multiple-choice',
            options: ['A- can have done', 'B- should do done', 'C- should have'],
            correctAnswer: 'C',
            points: 1,
            explanation: 'Modal elíptico de reproche/deber retrospectivo ("debería haberlo hecho") -> should have.'
          },
          {
            id: 'l4-u4-q24',
            number: 24,
            questionText: 'My parents kept telling me I ............................... (24)...',
            type: 'multiple-choice',
            options: ['A- must study', 'B- had to study', 'C- studied'],
            correctAnswer: 'B',
            points: 1,
            explanation: 'Obligación en pasado o estilo indirecto para "must" -> had to study.'
          },
          {
            id: 'l4-u4-q25',
            number: 25,
            questionText: '...or I ................................ (25) but I just couldn’t.',
            type: 'multiple-choice',
            options: ['A- would fail', 'B- would have failed', 'C- will fail'],
            correctAnswer: 'A',
            points: 1,
            explanation: 'Futuro desde el punto de vista del pasado (concordancia con "told/kept") -> would fail.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 5 (Parte 3 – Uso de la lengua) - 40 minutos - 20 puntos
  // =========================================================================
  5: {
    levelNumber: 5,
    levelRoman: 'V',
    partTitle: 'Parte 3 – Uso de la lengua',
    timeAllowedMinutes: 40,
    totalPoints: 20,
    officialKeySummary: [
      { exercise: 'Exercise 1: OPEN CLOZE', answers: '1. EVERY, 2. CALL, 3. HAS, 4. WITHOUT, 5. THROUGH' },
      { exercise: 'Exercise 2: VERB TENSES', answers: '6-a, 7-b, 8-b, 9-c, 10-a, 11-c, 12-b, 13-a, 14-b, 15-a' },
      { exercise: 'Exercise 3: PARAPHRASING', answers: '16. speak to her, 17. and I are close to, 18. told her where I, 19. something wrong with your, 20. making up his mind' },
      { exercise: 'Exercise 4: WORD FORMATION', answers: '21. easily, 22. preparation, 23. insecurity, 24. natural, 25. attention' }
    ],
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 – Questions 1-5 (Open Cloze)',
        instruction: 'READ THE TEXT AND FILL IN THE BLANKS WITH A SUITABLE WORD:',
        type: 'open-cloze',
        contextTitle: 'The Cable Racer',
        contextText: `Robinson Diaz lives in a small cottage high in the Andes Mountains of South America. Diaz is a cable racer, and 1-………………. morning he faces the hard task of taking the local teacher to her school. To do this, he first walks for an hour up to a place the locals 2-…...............Los Pinos, right at the edge of the 400-foot deep gorge of the Negro Valley. Here, one end of the thick metal cable 3-………….. been fixed to a wooden post. The cable stretches right across the deep valley to the other side, a kilometer away.

A metal hook is fixed to the cable, with leather straps hanging from it. Diaz fastens the straps around his shoulders and waist, does a quick safety check and then, 4-……………….. hesitating, throws himself off the edge of the mountain. Attached to the cable by only the metal hook, he picks up speed and soon he is racing 5-……………….. the air.`,
        questions: [
          {
            id: 'l5-u1-q1',
            number: 1,
            questionText: '...and 1-………………. morning he faces the hard task...',
            type: 'open-cloze',
            correctAnswer: 'EVERY',
            acceptableAnswers: ['EVERY', 'EACH'],
            points: 1,
            explanation: 'Determinante de frecuencia diaria ante sustantivo singular: "every morning".'
          },
          {
            id: 'l5-u1-q2',
            number: 2,
            questionText: '...to a place the locals 2-………………. Los Pinos...',
            type: 'open-cloze',
            correctAnswer: 'CALL',
            acceptableAnswers: ['CALL', 'NAMED'],
            points: 1,
            explanation: 'Verbo de denominación: "call Los Pinos".'
          },
          {
            id: 'l5-u1-q3',
            number: 3,
            questionText: '...one end of the thick metal cable 3-………………. been fixed to a wooden post.',
            type: 'open-cloze',
            correctAnswer: 'HAS',
            acceptableAnswers: ['HAS'],
            points: 1,
            explanation: 'Present Perfect pasivo para sujeto singular (one end) -> has been fixed.'
          },
          {
            id: 'l5-u1-q4',
            number: 4,
            questionText: '...and then, 4-………………. hesitating, throws himself off...',
            type: 'open-cloze',
            correctAnswer: 'WITHOUT',
            acceptableAnswers: ['WITHOUT'],
            points: 1,
            explanation: 'Preposición seguida de gerundio: "without hesitating" (sin dudarlo).'
          },
          {
            id: 'l5-u1-q5',
            number: 5,
            questionText: '...and soon he is racing 5-………………. the air.',
            type: 'open-cloze',
            correctAnswer: 'THROUGH',
            acceptableAnswers: ['THROUGH'],
            points: 1,
            explanation: 'Preposición de movimiento a través de un medio: "racing through the air".'
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Questions 6-15 (Verb Tenses)',
        instruction: 'CIRCLE THE CORRECT VERB TENSE IN 6 – 15:',
        type: 'cloze-choice',
        contextTitle: 'Diana Ríos and the Cable',
        contextText: `As Diaz begins his trip, Diana Ríos, 23-year-old elementary teacher, 6-............ on the other side of the gorge for the moment when he 7- …………. racing through the mist towards her at 100 mph. She 8-………… with him, hanging on to him as he 9-…………… back along the cable. Diana 10- …………. no idea when she 11- ………….. the teaching job that just getting to work in the village school 12- …………… so dangerous. “At first, I 13-…………. to cry,” she says, clutching her books as the metal cable 14- …………… to rattle violently at Diaz´s approach. “But I soon 15- …………… used to it.”`,
        questions: [
          {
            id: 'l5-u2-q6',
            number: 6,
            questionText: 'Diana Ríos, 23-year-old elementary teacher, 6-............ on the other side of the gorge...',
            type: 'multiple-choice',
            options: ['a) is waiting', 'b) will wait', 'c) are going to wait'],
            correctAnswer: 'a',
            points: 1,
            explanation: 'Acción en progreso en el momento narrativo presente -> is waiting.'
          },
          {
            id: 'l5-u2-q7',
            number: 7,
            questionText: '...for the moment when he 7- …………. racing through the mist...',
            type: 'multiple-choice',
            options: ['a) are going to come', 'b) will come', 'c) are coming'],
            correctAnswer: 'b',
            points: 1,
            explanation: 'Futuro de predicción inmediata con sujeto singular -> will come.'
          },
          {
            id: 'l5-u2-q8',
            number: 8,
            questionText: 'She 8-………… with him, hanging on to him...',
            type: 'multiple-choice',
            options: ['a) have then returned', 'b) will then return', 'c) are then returning'],
            correctAnswer: 'b',
            points: 1,
            explanation: 'Acción consecutiva futura -> will then return.'
          },
          {
            id: 'l5-u2-q9',
            number: 9,
            questionText: '...hanging on to him as he 9-…………… back along the cable.',
            type: 'multiple-choice',
            options: ['a) is going', 'b) will go', 'c) goes'],
            correctAnswer: 'c',
            points: 1,
            explanation: 'Cláusula temporal subordinada introducida por "as" -> Present Simple: goes.'
          },
          {
            id: 'l5-u2-q10',
            number: 10,
            questionText: 'Diana 10- …………. no idea when she...',
            type: 'multiple-choice',
            options: ['a) had', 'b) has had', 'c) had had'],
            correctAnswer: 'a',
            points: 1,
            explanation: 'Estado pasado de desconocimiento -> had.'
          },
          {
            id: 'l5-u2-q11',
            number: 11,
            questionText: '...when she 11- ………….. the teaching job...',
            type: 'multiple-choice',
            options: ['a) has taken', 'b) had taken', 'c) took'],
            correctAnswer: 'c',
            points: 1,
            explanation: 'Momento histórico puntual en que aceptó el trabajo -> took.'
          },
          {
            id: 'l5-u2-q12',
            number: 12,
            questionText: '...that just getting to work in the village school 12- …………… so dangerous.',
            type: 'multiple-choice',
            options: ['a) had to be', 'b) would be', 'c) would have to be'],
            correctAnswer: 'b',
            points: 1,
            explanation: 'Futuro hipotético proyectado desde el pasado -> would be.'
          },
          {
            id: 'l5-u2-q13',
            number: 13,
            questionText: '“At first, I 13-…………. to cry,” she says...',
            type: 'multiple-choice',
            options: ['a) wanted', 'b) had wanted', 'c) would want'],
            correctAnswer: 'a',
            points: 1,
            explanation: 'Reacción emocional inicial en tiempo pasado -> wanted.'
          },
          {
            id: 'l5-u2-q14',
            number: 14,
            questionText: '...as the metal cable 14- …………… to rattle violently at Diaz´s approach.',
            type: 'multiple-choice',
            options: ['a) is starting', 'b) starts', 'c) is going to start'],
            correctAnswer: 'b',
            points: 1,
            explanation: 'Presente narrativo vívido con sujeto singular -> starts.'
          },
          {
            id: 'l5-u2-q15',
            number: 15,
            questionText: '“But I soon 15- …………… used to it.”',
            type: 'multiple-choice',
            options: ['a) got', 'b) had got', 'c) would have got'],
            correctAnswer: 'a',
            points: 1,
            explanation: 'Expresión idiomática "get used to" (acostumbrarse) en pasado simple -> got used to.'
          }
        ]
      },
      {
        exerciseNumber: 3,
        title: 'Exercise 3 – Questions 16-20 (Paraphrasing)',
        instruction: 'COMPLETE THE SECOND SENTENCE SO THAT IT HAS A SIMILAR MEANING TO THE FIRST SENTENCE, USING THE WORD GIVEN. DO NOT CHANGE THE WORD GIVEN.',
        type: 'transformation',
        questions: [
          {
            id: 'l5-u3-q16',
            number: 16,
            questionText: 'You should telephone her.',
            givenWord: 'speak',
            prefixText: 'You should',
            suffixText: 'on the phone.',
            type: 'transformation',
            correctAnswer: 'speak to her',
            acceptableAnswers: ['speak to her'],
            points: 0.5,
            explanation: 'Clave oficial: "speak to her on the phone".'
          },
          {
            id: 'l5-u3-q17',
            number: 17,
            questionText: 'My house is near John´s.',
            givenWord: 'close',
            prefixText: 'John',
            suffixText: 'each other.',
            type: 'transformation',
            correctAnswer: 'and I are close to',
            acceptableAnswers: ['and I are close to', 'and I live close to'],
            points: 0.5,
            explanation: 'Clave oficial: "John and I are close to each other".'
          },
          {
            id: 'l5-u3-q18',
            number: 18,
            questionText: 'I gave her my address.',
            givenWord: 'where',
            prefixText: 'I',
            suffixText: 'lived.',
            type: 'transformation',
            correctAnswer: 'told her where I',
            acceptableAnswers: ['told her where I'],
            points: 0.5,
            explanation: 'Clave oficial: "I told her where I lived".'
          },
          {
            id: 'l5-u3-q19',
            number: 19,
            questionText: 'Your brakes are faulty.',
            givenWord: 'wrong',
            prefixText: 'There´s',
            suffixText: 'brakes.',
            type: 'transformation',
            correctAnswer: 'something wrong with your',
            acceptableAnswers: ['something wrong with your'],
            points: 0.5,
            explanation: 'Clave oficial: "There\'s something wrong with your brakes".'
          },
          {
            id: 'l5-u3-q20',
            number: 20,
            questionText: 'He took two hours deciding which seeds to buy.',
            givenWord: 'mind',
            prefixText: 'He took two hours',
            suffixText: 'about which seeds to buy.',
            type: 'transformation',
            correctAnswer: 'making up his mind',
            acceptableAnswers: ['making up his mind', 'to make up his mind'],
            points: 0.5,
            explanation: 'Clave oficial: "He took two hours making up his mind about which seeds to buy".'
          }
        ]
      },
      {
        exerciseNumber: 4,
        title: 'Exercise 4 – Questions 21-25 (Word Formation)',
        instruction: 'READ THE TEXT BELOW. USE THE WORD GIVEN IN CAPITAL LETTERS AT THE END OF EACH LINE TO FORM A WORD THAT FITS IN THE SPACE IN THE SAME LINE.',
        type: 'word-formation',
        contextTitle: 'The Ideal Speech',
        contextText: `Giving the ideal speech is a matter of confidence in yourself and in what you´re going to say.
This may be more 21)……….said than (EASY),
but part of the answer lies in your careful 22).................... (PREPARE).
Note down your key points, preferably on postcards or other small slips. Don´t make the mistake of trying to script your speech word for word.
You may gain a sense of 23)………...from (SECURE) doing this but when you come to deliver your speech it will sound 24)……………………… (NATURE).
Keep it brief. It´s no good saying afterwards, “I delivered it well but they fell asleep.”
To grab their 25)…….., begin your speech with a few arresting thoughts or phrases (ATTEND).
Be a top-class speaker-not an amateur comedian!`,
        questions: [
          {
            id: 'l5-u4-q21',
            number: 21,
            questionText: 'This may be more 21) __________ said than done (EASY)',
            givenWord: 'EASY',
            type: 'word-formation',
            correctAnswer: 'easily',
            acceptableAnswers: ['easily'],
            points: 1,
            explanation: 'Adverbio que modifica a "said" en la frase fija "more easily said than done" -> easily.'
          },
          {
            id: 'l5-u4-q22',
            number: 22,
            questionText: '...part of the answer lies in your careful 22) __________ (PREPARE)',
            givenWord: 'PREPARE',
            type: 'word-formation',
            correctAnswer: 'preparation',
            acceptableAnswers: ['preparation'],
            points: 1,
            explanation: 'Sustantivo derivado precedido por el adjetivo "careful" -> preparation.'
          },
          {
            id: 'l5-u4-q23',
            number: 23,
            questionText: 'You may gain a sense of 23) __________ from doing this (SECURE)',
            givenWord: 'SECURE',
            type: 'word-formation',
            correctAnswer: 'insecurity',
            acceptableAnswers: ['insecurity', 'security'],
            points: 1,
            explanation: 'Clave oficial: insecurity (o security según sentido, la clave especifica "insecurity").'
          },
          {
            id: 'l5-u4-q24',
            number: 24,
            questionText: '...when you come to deliver your speech it will sound 24) __________ (NATURE)',
            givenWord: 'NATURE',
            type: 'word-formation',
            correctAnswer: 'natural',
            acceptableAnswers: ['natural', 'unnatural'],
            points: 1,
            explanation: 'Clave oficial: natural (o unnatural tras verbo de percepción sound).'
          },
          {
            id: 'l5-u4-q25',
            number: 25,
            questionText: 'To grab their 25) __________, begin your speech with a few arresting thoughts (ATTEND)',
            givenWord: 'ATTEND',
            type: 'word-formation',
            correctAnswer: 'attention',
            acceptableAnswers: ['attention'],
            points: 1,
            explanation: 'Sustantivo para la colocación "grab their attention" -> attention.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 6 (Parte 3 – Uso de la lengua) - 40 minutos - 20 puntos
  // =========================================================================
  6: {
    levelNumber: 6,
    levelRoman: 'VI',
    partTitle: 'Parte 3 – Uso de la lengua',
    timeAllowedMinutes: 40,
    totalPoints: 20,
    officialKeySummary: [
      { exercise: 'Exercise 1 (0.50 pts c/u)', answers: '1. this / the, 2. of, 3. as, 4. be / cost, 5. who, 6. from, 7. to, 8. in, 9. there, 10. which' },
      { exercise: 'Exercise 2 (1 pt c/u)', answers: '1. regrets not having bought, 2. had been invited, 3. made it impossible for them, 4. about / high time he was taught, 5. put me up, 6. have any knowledge about, 7. more interested in tennis than, 8. mind if I opened, 9. as long as you have, 10. are not allowed to smoke' },
      { exercise: 'Exercise 3 (0.50 pts c/u)', answers: '1. limited, 2. tasty, 3. experienced, 4. inspiration, 5. inexpensive, 6. specialist, 7. appearance, 8. successful, 9. suggestions, 10. excitement' }
    ],
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 – Questions 1-10 (0.50 pts each)',
        instruction: 'Read the text below and think of the word which best fits each space. Use only ONE word in each space.',
        type: 'open-cloze',
        contextTitle: 'Ocean Communication City',
        contextText: `One of Japan’s biggest problems is overpopulation in relation to the limited amount of land it has. The Japanese, though, have come up with an unbelievable solution to (1) ………….. problem: when you run out (2) .................... islands, simply build more.

The project is known (3) …………… Ocean Communication City and will (4) ……………. Approximately $ 200 billion. Kiyohide Terai, (5) …………… is Japan’s leading expert on new technology, is the man behind the idea.

Ocean City, different (6) .................... any real island, will be a four-level platform. It will cover an area of nine square miles, about 75 miles out to sea from Tokyo. The biggest advantage is that it will be very stable even in the event of an earthquake. As many as one million Japanese citizens will be able (7).......................live there.

It is hoped that the project will have been completed by the beginning of the 21st century. (8) …………… addition to homes, (9)......................will be a business and financial centre, shops, places of entertainment, parks and outdoor activities (10) …………….. will include 400 tennis courts. The island will have an airport and a system of hovercrafts. These will provide connections to the mainland.

If the project is a success, other cities like this will be built in the future.`,
        questions: [
          {
            id: 'l6-u1-q1',
            number: 1,
            questionText: '...solution to (1) ________ problem...',
            type: 'open-cloze',
            correctAnswer: 'this',
            acceptableAnswers: ['this', 'the'],
            points: 0.5,
            explanation: 'Clave oficial: this / the.'
          },
          {
            id: 'l6-u1-q2',
            number: 2,
            questionText: '...when you run out (2) ________ islands, simply build more.',
            type: 'open-cloze',
            correctAnswer: 'of',
            acceptableAnswers: ['of'],
            points: 0.5,
            explanation: 'Phrasal verb "run out of" (quedarse sin).'
          },
          {
            id: 'l6-u1-q3',
            number: 3,
            questionText: 'The project is known (3) ________ Ocean Communication City...',
            type: 'open-cloze',
            correctAnswer: 'as',
            acceptableAnswers: ['as'],
            points: 0.5,
            explanation: 'Colocación pasiva: "known as" (conocido como).'
          },
          {
            id: 'l6-u1-q4',
            number: 4,
            questionText: '...and will (4) ________ approximately $ 200 billion.',
            type: 'open-cloze',
            correctAnswer: 'cost',
            acceptableAnswers: ['cost', 'be'],
            points: 0.5,
            explanation: 'Clave oficial: be / cost.'
          },
          {
            id: 'l6-u1-q5',
            number: 5,
            questionText: 'Kiyohide Terai, (5) ________ is Japan’s leading expert...',
            type: 'open-cloze',
            correctAnswer: 'who',
            acceptableAnswers: ['who'],
            points: 0.5,
            explanation: 'Pronombre relativo para personas en non-defining clause -> who.'
          },
          {
            id: 'l6-u1-q6',
            number: 6,
            questionText: 'Ocean City, different (6) ________ any real island...',
            type: 'open-cloze',
            correctAnswer: 'from',
            acceptableAnswers: ['from', 'to'],
            points: 0.5,
            explanation: 'Preposición para contrastar adjetivo different -> different from.'
          },
          {
            id: 'l6-u1-q7',
            number: 7,
            questionText: '...will be able (7) ________ live there.',
            type: 'open-cloze',
            correctAnswer: 'to',
            acceptableAnswers: ['to'],
            points: 0.5,
            explanation: 'Estructura modal: "be able to + infinitivo".'
          },
          {
            id: 'l6-u1-q8',
            number: 8,
            questionText: '(8) ________ addition to homes...',
            type: 'open-cloze',
            correctAnswer: 'In',
            acceptableAnswers: ['In', 'in'],
            points: 0.5,
            explanation: 'Locución conjuntiva "In addition to" (Además de).'
          },
          {
            id: 'l6-u1-q9',
            number: 9,
            questionText: '...(9) ________ will be a business and financial centre...',
            type: 'open-cloze',
            correctAnswer: 'there',
            acceptableAnswers: ['there'],
            points: 0.5,
            explanation: 'Estructura existencial futura: "there will be" (habrá).'
          },
          {
            id: 'l6-u1-q10',
            number: 10,
            questionText: '...outdoor activities (10) ________ will include 400 tennis courts.',
            type: 'open-cloze',
            correctAnswer: 'which',
            acceptableAnswers: ['which', 'that'],
            points: 0.5,
            explanation: 'Pronombre relativo para cosas / actividades -> which / that.'
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Questions 11-20 (Key Word Transformations, 1 pt each)',
        instruction: 'Complete the second sentence so that it has similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        type: 'transformation',
        questions: [
          {
            id: 'l6-u2-q11',
            number: 11,
            questionText: 'Mary wishes she had bought a dog.',
            givenWord: 'regrets',
            prefixText: 'Mary',
            suffixText: 'a dog.',
            type: 'transformation',
            correctAnswer: 'regrets not having bought',
            acceptableAnswers: ['regrets not having bought', 'regrets not buying'],
            points: 1,
            explanation: 'Clave oficial: "Mary regrets not having bought a dog".'
          },
          {
            id: 'l6-u2-q12',
            number: 12,
            questionText: 'Susan didn’t give John an invitation to her party, so he didn’t go.',
            givenWord: 'invited',
            prefixText: 'If John',
            suffixText: 'to Susan’s party, he would have gone.',
            type: 'transformation',
            correctAnswer: 'had been invited',
            acceptableAnswers: ['had been invited'],
            points: 1,
            explanation: 'Tercer condicional en voz pasiva: "If John had been invited to Susan\'s party...".'
          },
          {
            id: 'l6-u2-q13',
            number: 13,
            questionText: 'The water was so cold that they couldn’t swim.',
            givenWord: 'impossible',
            prefixText: 'The cold water',
            suffixText: 'to swim.',
            type: 'transformation',
            correctAnswer: 'made it impossible for them',
            acceptableAnswers: ['made it impossible for them'],
            points: 1,
            explanation: 'Estructura "make it impossible for someone to do something".'
          },
          {
            id: 'l6-u2-q14',
            number: 14,
            questionText: 'Somebody should teach him some manners.',
            givenWord: 'was',
            prefixText: 'It’s',
            suffixText: 'some manners.',
            type: 'transformation',
            correctAnswer: 'about time he was taught',
            acceptableAnswers: ['about time he was taught', 'high time he was taught', 'time he was taught'],
            points: 1,
            explanation: 'Estructura de subjuntivo retrospectivo: "It\'s about / high time he was taught some manners".'
          },
          {
            id: 'l6-u2-q15',
            number: 15,
            questionText: 'Can I stay at your place when I come to Athens?',
            givenWord: 'put',
            prefixText: 'Can you',
            suffixText: 'when I come to Athens?',
            type: 'transformation',
            correctAnswer: 'put me up',
            acceptableAnswers: ['put me up'],
            points: 1,
            explanation: 'Phrasal verb "put someone up" (hospedar/dar alojamiento temporal).'
          },
          {
            id: 'l6-u2-q16',
            number: 16,
            questionText: 'He didn’t know anything about astronomy but he was willing to learn.',
            givenWord: 'knowledge',
            prefixText: 'He didn’t',
            suffixText: 'astronomy but he was willing to learn.',
            type: 'transformation',
            correctAnswer: 'have any knowledge about',
            acceptableAnswers: ['have any knowledge about', 'have knowledge of', 'have any knowledge of'],
            points: 1,
            explanation: 'Clave oficial: "He didn\'t have any knowledge about astronomy...".'
          },
          {
            id: 'l6-u2-q17',
            number: 17,
            questionText: 'Monica isn’t nearly as interested in tennis as Joan is.',
            givenWord: 'more',
            prefixText: 'Joan is much',
            suffixText: 'Monica is.',
            type: 'transformation',
            correctAnswer: 'more interested in tennis than',
            acceptableAnswers: ['more interested in tennis than'],
            points: 1,
            explanation: 'Inversión de comparación: "much more interested in tennis than".'
          },
          {
            id: 'l6-u2-q18',
            number: 18,
            questionText: 'Do you mind me opening the window?',
            givenWord: 'if',
            prefixText: 'Would you',
            suffixText: 'the window?',
            type: 'transformation',
            correctAnswer: 'mind if I opened',
            acceptableAnswers: ['mind if I opened'],
            points: 1,
            explanation: 'Fórmula de cortesía en condicional: "Would you mind if I opened the window?".'
          },
          {
            id: 'l6-u2-q19',
            number: 19,
            questionText: 'You can’t go to Australia without a visa.',
            givenWord: 'long',
            prefixText: 'You can go to Australia',
            suffixText: 'a visa.',
            type: 'transformation',
            correctAnswer: 'as long as you have',
            acceptableAnswers: ['as long as you have', 'so long as you have'],
            points: 1,
            explanation: 'Condicional restrictivo: "as long as you have a visa".'
          },
          {
            id: 'l6-u2-q20',
            number: 20,
            questionText: 'Smoking in the library is forbidden.',
            givenWord: 'allowed',
            prefixText: 'You',
            suffixText: 'in the library.',
            type: 'transformation',
            correctAnswer: 'are not allowed to smoke',
            acceptableAnswers: ['are not allowed to smoke', 'aren\'t allowed to smoke'],
            points: 1,
            explanation: 'Voz pasiva de permiso: "You are not allowed to smoke in the library".'
          }
        ]
      },
      {
        exerciseNumber: 3,
        title: 'Exercise 3 – Questions 21-30 (Word Formation, 0.50 pts each)',
        instruction: 'Read the text below. Use the word given in capitals at the end of each line to form a word that fits in the space in the same line.',
        type: 'word-formation',
        contextTitle: 'SPICE UP YOUR LIFE',
        contextText: `Are you looking for more (0) variety in what you cook, but (VARY)
Have to survive on a (21) ……………….budget ? (LIMIT)
Which are both (22) ……………. and nutritious is a constant challenge (TASTE)
faced by most new and (23) …………………housekeepers, who are (EXPERIENCE)
beginners to the art of cooking.
This easy – to – use cookbook will give you the (24) ……….you need (INSPIRE)
To create something both special and (25) ……………………... . (EXPENSE)
The author, Karen Shelley, is a (26) …………….. in cooking. (SPECIAL)
She is also very well-known for her occasional (27) ………….. on the (APPEAR)
Television programme “Let’s Cook”. Her very (28) ……………career (SUCCESS)
As a cook is reflected in this book.
If you happen to be looking for (29) ……………… to add some more (SUGGEST)
(30) ………… to your cooking, we strongly recommend this book. (EXCITE)`,
        questions: [
          {
            id: 'l6-u3-q21',
            number: 21,
            questionText: 'Have to survive on a (21) __________ budget? (LIMIT)',
            givenWord: 'LIMIT',
            type: 'word-formation',
            correctAnswer: 'limited',
            acceptableAnswers: ['limited'],
            points: 0.5,
            explanation: 'Participio adjetivado que modifica al sustantivo budget -> limited.'
          },
          {
            id: 'l6-u3-q22',
            number: 22,
            questionText: 'Which are both (22) __________ and nutritious is a constant challenge (TASTE)',
            givenWord: 'TASTE',
            type: 'word-formation',
            correctAnswer: 'tasty',
            acceptableAnswers: ['tasty', 'tasteful'],
            points: 0.5,
            explanation: 'Adjetivo en correlación con "nutritious" -> tasty.'
          },
          {
            id: 'l6-u3-q23',
            number: 23,
            questionText: '...faced by most new and (23) __________ housekeepers, who are beginners... (EXPERIENCE)',
            givenWord: 'EXPERIENCE',
            type: 'word-formation',
            correctAnswer: 'experienced',
            acceptableAnswers: ['experienced', 'inexperienced'],
            points: 0.5,
            explanation: 'Clave oficial del modelo IESE: "experienced" (o contextualmente "inexperienced").'
          },
          {
            id: 'l6-u3-q24',
            number: 24,
            questionText: '...will give you the (24) __________ you need (INSPIRE)',
            givenWord: 'INSPIRE',
            type: 'word-formation',
            correctAnswer: 'inspiration',
            acceptableAnswers: ['inspiration'],
            points: 0.5,
            explanation: 'Sustantivo precedido del artículo "the" -> inspiration.'
          },
          {
            id: 'l6-u3-q25',
            number: 25,
            questionText: 'To create something both special and (25) __________ (EXPENSE)',
            givenWord: 'EXPENSE',
            type: 'word-formation',
            correctAnswer: 'inexpensive',
            acceptableAnswers: ['inexpensive'],
            points: 0.5,
            explanation: 'Adjetivo con prefijo negativo que armoniza con presupuesto limitado ("budget") -> inexpensive (económico).'
          },
          {
            id: 'l6-u3-q26',
            number: 26,
            questionText: 'The author, Karen Shelley, is a (26) __________ in cooking. (SPECIAL)',
            givenWord: 'SPECIAL',
            type: 'word-formation',
            correctAnswer: 'specialist',
            acceptableAnswers: ['specialist'],
            points: 0.5,
            explanation: 'Sustantivo de persona ("un especialista") -> specialist.'
          },
          {
            id: 'l6-u3-q27',
            number: 27,
            questionText: '...for her occasional (27) __________ on the Television programme (APPEAR)',
            givenWord: 'APPEAR',
            type: 'word-formation',
            correctAnswer: 'appearance',
            acceptableAnswers: ['appearance', 'appearances'],
            points: 0.5,
            explanation: 'Sustantivo precedido por adjetivo "occasional" -> appearance.'
          },
          {
            id: 'l6-u3-q28',
            number: 28,
            questionText: 'Her very (28) __________ career as a cook is reflected in this book. (SUCCESS)',
            givenWord: 'SUCCESS',
            type: 'word-formation',
            correctAnswer: 'successful',
            acceptableAnswers: ['successful'],
            points: 0.5,
            explanation: 'Adjetivo ante el sustantivo "career" -> successful.'
          },
          {
            id: 'l6-u3-q29',
            number: 29,
            questionText: 'If you happen to be looking for (29) __________ to add some more... (SUGGEST)',
            givenWord: 'SUGGEST',
            type: 'word-formation',
            correctAnswer: 'suggestions',
            acceptableAnswers: ['suggestions', 'suggestion'],
            points: 0.5,
            explanation: 'Sustantivo plural contable -> suggestions.'
          },
          {
            id: 'l6-u3-q30',
            number: 30,
            questionText: '...to add some more (30) __________ to your cooking (EXCITE)',
            givenWord: 'EXCITE',
            type: 'word-formation',
            correctAnswer: 'excitement',
            acceptableAnswers: ['excitement'],
            points: 0.5,
            explanation: 'Sustantivo incontable de emoción -> excitement.'
          }
        ]
      }
    ]
  }
};
