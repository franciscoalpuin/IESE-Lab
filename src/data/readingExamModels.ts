export interface ExamQuestion {
  id: string;
  number: number;
  questionText: string;
  type: 'multiple-choice' | 'true-false' | 'right-wrong' | 'matching';
  options?: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface ReadingExamExercise {
  exerciseNumber: number;
  title: string;
  instruction: string;
  type: 'multiple-choice' | 'true-false' | 'matching' | 'right-wrong' | 'heading-match';
  passageTitle?: string;
  passageText?: string;
  cards?: {
    id: string;
    title: string;
    body: string;
    extra?: string;
  }[];
  directionsMapInfo?: {
    locationName: string;
    currentPosition: string;
    routeOptions: { key: string; text: string }[];
  };
  matchingOptions?: { key: string; label: string }[];
  questions: ExamQuestion[];
}

export interface ReadingExamModel {
  levelNumber: number;
  levelRoman: string;
  partTitle: string;
  timeAllowedMinutes: number;
  totalPoints: number;
  pointsPerItem: number;
  exercises: ReadingExamExercise[];
  officialKey: Record<string, string>;
}

export const READING_EXAM_MODELS: Record<number, ReadingExamModel> = {
  // =========================================================================
  // NIVEL 1 (Parte 2 – Lectura Comprensiva)
  // =========================================================================
  1: {
    levelNumber: 1,
    levelRoman: 'I',
    partTitle: 'Parte 2 – Lectura Comprensiva',
    timeAllowedMinutes: 20,
    totalPoints: 20,
    pointsPerItem: 1.33,
    officialKey: {
      'l1-q1': 'c',
      'l1-q2': 'b',
      'l1-q3': 'b',
      'l1-q4': 'a',
      'l1-q5': 'a',
      'l1-q6': 'F',
      'l1-q7': 'T',
      'l1-q8': 'F',
      'l1-q9': 'T',
      'l1-q10': 'F',
      'l1-q11': 'F',
      'l1-q12': 'T',
      'l1-q13': 'a',
      'l1-q14': 'a',
      'l1-q15': 'b'
    },
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 – Questions 1-5',
        instruction: 'Read the message and circle the correct answer (a, b or c):',
        type: 'multiple-choice',
        passageTitle: 'Message from Betsy',
        passageText: `Tuesday, 6th May\nDear Pam,\nIt’s my birthday on Saturday and I’m going to have a small dinner party at home at 9 o’clock p.m. Would you like to come? All our friends from the office are going to be here and Matthew too. Bring something to drink.\nPlease, call me tomorrow to confirm. See you.\nBetsy`,
        questions: [
          {
            id: 'l1-q1',
            number: 1,
            questionText: 'The message is from:',
            type: 'multiple-choice',
            options: ['Pam', 'Matthew', 'Betsy'],
            correctAnswer: 'c',
            explanation: 'The letter concludes: "See you. Betsy". Betsy is the author.'
          },
          {
            id: 'l1-q2',
            number: 2,
            questionText: 'This is:',
            type: 'multiple-choice',
            options: ['a formal invitation', 'an informal invitation', 'a business message'],
            correctAnswer: 'b',
            explanation: 'It is a personal dinner invitation written informally to a friend/colleague.'
          },
          {
            id: 'l1-q3',
            number: 3,
            questionText: 'When is Betsy’s birthday?',
            type: 'multiple-choice',
            options: ['9th May', '10th May', '11th May'],
            correctAnswer: 'b',
            explanation: 'The note was written on Tuesday 6th May. Saturday is 10th May.'
          },
          {
            id: 'l1-q4',
            number: 4,
            questionText: 'What is Pam going to take to the party?',
            type: 'multiple-choice',
            options: ['A drink', 'A cake', 'A present'],
            correctAnswer: 'a',
            explanation: 'Betsy asks Pam: "Bring something to drink."'
          },
          {
            id: 'l1-q5',
            number: 5,
            questionText: 'Betsy has to phone Pam:',
            type: 'multiple-choice',
            options: ['on Wednesday', 'on Tuesday', 'on Saturday'],
            correctAnswer: 'a',
            explanation: 'The message is sent on Tuesday requesting: "Please, call me tomorrow to confirm" (Wednesday).'
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Questions 6-12',
        instruction: 'Read the real estate notices in Italy and say if the following sentences are TRUE (T) or FALSE (F):',
        type: 'true-false',
        passageTitle: 'Real Estate Opportunities in Italy',
        cards: [
          {
            id: 'tuscany',
            title: 'Luxury villa in Tuscany',
            body: '(Castiglione della Pescaia – Roccamare), 3 bedrooms, 3 bathrooms, vast living, kitchen and patio, garage and ample basement. Open fire, air conditioning and satellite. Possibility for additional construction. 5.000 sqm private land in vast private pineta guarded and serviced 24/7. 300m from isolated sand beach, quiet and beautiful surrounding.',
            extra: 'For sale 2.2 mio€. Contact: Jacques.poma@skynet.be'
          },
          {
            id: 'rome',
            title: 'ROME Apartment',
            body: 'Opportunity to buy 400sq.metre 2-level garden apartment with garage. Located on prestigious Aventine Hill within the roman walls. 10 minutes to Colosseum and Forum.',
            extra: 'Euros 3,100,000.00 | Tel: 0039.06.575.0452 | Cell: 0039.340.6138360 | e-mail: invisiblehand@tiscalinet.it'
          },
          {
            id: 'venice',
            title: 'APARTMENT FOR SALE VENICE, ITALY',
            body: 'Lovely ground floor apartment located in the centre of historic Venice.',
            extra: 'For details please see site: http://homepage.mac.com/vaakeroy/Venice/'
          }
        ],
        questions: [
          {
            id: 'l1-q6',
            number: 6,
            questionText: 'This is a holiday brochure.',
            type: 'true-false',
            options: ['T', 'F'],
            correctAnswer: 'F',
            explanation: 'It is a real estate sale listing, not a holiday vacation brochure.'
          },
          {
            id: 'l1-q7',
            number: 7,
            questionText: 'The flat in Rome is not far from the Colosseum.',
            type: 'true-false',
            options: ['T', 'F'],
            correctAnswer: 'T',
            explanation: 'The notice states: "10 minutes to Colosseum and Forum".'
          },
          {
            id: 'l1-q8',
            number: 8,
            questionText: 'The flat in Venice is on a high floor.',
            type: 'true-false',
            options: ['T', 'F'],
            correctAnswer: 'F',
            explanation: 'The text specifies: "Lovely ground floor apartment".'
          },
          {
            id: 'l1-q9',
            number: 9,
            questionText: 'A big family can live in the villa in Tuscany.',
            type: 'true-false',
            options: ['T', 'F'],
            correctAnswer: 'T',
            explanation: 'It offers 3 bedrooms, 3 bathrooms, vast living, patio, and 5000 sqm of land.'
          },
          {
            id: 'l1-q10',
            number: 10,
            questionText: 'The flat in Rome is for rent.',
            type: 'true-false',
            options: ['T', 'F'],
            correctAnswer: 'F',
            explanation: 'The text states "Opportunity to buy", not for rent.'
          },
          {
            id: 'l1-q11',
            number: 11,
            questionText: 'The villa is in a noisy and busy location.',
            type: 'true-false',
            options: ['T', 'F'],
            correctAnswer: 'F',
            explanation: 'The ad states: "quiet and beautiful surrounding".'
          },
          {
            id: 'l1-q12',
            number: 12,
            questionText: 'In all the cases you can contact by mail.',
            type: 'true-false',
            options: ['T', 'F'],
            correctAnswer: 'T',
            explanation: 'All listings provide email addresses or website contact.'
          }
        ]
      },
      {
        exerciseNumber: 3,
        title: 'Exercise 3 – Questions 13-15',
        instruction: 'Look at the directions and choose the best instructions, a or b:',
        type: 'multiple-choice',
        questions: [
          {
            id: 'l1-q13',
            number: 13,
            questionText: 'You need to get to Mumford Theatre (starting at Mill Ave / Mackenzie Rd corner):',
            type: 'multiple-choice',
            options: [
              'Walk down Mill Ave for three blocks. Turn right on East Road and go past Bradmore Street; the Theatre is the first place to your right.',
              'Walk along Mackenzie Rd for three blocks. Turn left on East Road and go past Bradmore Street, the Theatre is the first place to your right.'
            ],
            correctAnswer: 'a',
            explanation: 'Route A correctly follows Mill Ave down to East Road, turns right and passes Bradmore St to Mumford Theatre.'
          },
          {
            id: 'l1-q14',
            number: 14,
            questionText: 'You are on the corner of Blooms Road and Culford Road:',
            type: 'multiple-choice',
            options: [
              'Go straight ahead on Culford Ave and turn right on Englefield Road. Walk on for two blocks and the Theatre is past Crowland Terrace.',
              'Turn into Blooms Rd. Walk on for one block. Turn right into Englefield Rd and the Theatre is past Crowland Terrace.'
            ],
            correctAnswer: 'a',
            explanation: 'The route goes straight along Culford Ave and turns right into Englefield Rd.'
          },
          {
            id: 'l1-q15',
            number: 15,
            questionText: 'You are meeting a friend for lunch at Megan’s on the Hill Restaurant (from Devonshire Court / Laurie Rd):',
            type: 'multiple-choice',
            options: [
              'Turn left and then right into Laurie Rd. Walk on up to Sistova Drive. Keep going and the restaurant is at the end of the Drive.',
              'Walk straight on along Laurie Rd. Turn right into Sistova Drive. Keep going and the restaurant is at the end of the Drive.'
            ],
            correctAnswer: 'b',
            explanation: 'Starting on Laurie Rd, walk straight on along Laurie Rd, turn right into Sistova Drive, and the restaurant is at the end.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 2 (Parte 2 – Lectura Comprensiva)
  // =========================================================================
  2: {
    levelNumber: 2,
    levelRoman: 'II',
    partTitle: 'Parte 2 – Lectura Comprensiva',
    timeAllowedMinutes: 30,
    totalPoints: 20,
    pointsPerItem: 1.33,
    officialKey: {
      'l2-q1': 'G',
      'l2-q2': 'B',
      'l2-q3': 'D',
      'l2-q4': 'F',
      'l2-q5': 'C',
      'l2-q6': 'TRUE',
      'l2-q7': 'FALSE',
      'l2-q8': 'TRUE',
      'l2-q9': 'FALSE',
      'l2-q10': 'FALSE',
      'l2-q11': 'WRONG',
      'l2-q12': 'WRONG',
      'l2-q13': 'RIGHT',
      'l2-q14': 'RIGHT',
      'l2-q15': 'WRONG'
    },
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 – Questions 1-5',
        instruction: 'Which notice (A to G) says this (1 to 5)? There are two extra choices.',
        type: 'matching',
        matchingOptions: [
          { key: 'A', label: 'A: CLOSED FOR LUNCH – Come back later' },
          { key: 'B', label: 'B: Shoes half-price until Saturday' },
          { key: 'C', label: 'C: FIRE DOOR – Keep closed at all times' },
          { key: 'D', label: 'D: Special Lunch until 2.30 p.m. ($4.50)' },
          { key: 'E', label: 'E: Children under three eat free!' },
          { key: 'F', label: 'F: Postcards 40p each or 3 for one pound' },
          { key: 'G', label: 'G: Country Farm Soup – 100% fresh vegetables' }
        ],
        questions: [
          {
            id: 'l2-q1',
            number: 1,
            questionText: 'There is no meat in this.',
            type: 'matching',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            correctAnswer: 'G',
            explanation: 'Notice G: "Country Farm Soup - 100% fresh vegetables".'
          },
          {
            id: 'l2-q2',
            number: 2,
            questionText: 'Next week these will be more expensive.',
            type: 'matching',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            correctAnswer: 'B',
            explanation: 'Notice B: "Shoes half-price until Saturday". After Saturday the discount ends.'
          },
          {
            id: 'l2-q3',
            number: 3,
            questionText: 'You cannot eat this meal in the evening.',
            type: 'matching',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            correctAnswer: 'D',
            explanation: 'Notice D: "Special Lunch until 2.30 p.m.".'
          },
          {
            id: 'l2-q4',
            number: 4,
            questionText: 'It’s cheaper to buy three of these.',
            type: 'matching',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            correctAnswer: 'F',
            explanation: 'Notice F: "Postcards 40p each or 3 for one pound" (saving 20p).'
          },
          {
            id: 'l2-q5',
            number: 5,
            questionText: 'Do not leave this open.',
            type: 'matching',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            correctAnswer: 'C',
            explanation: 'Notice C: "FIRE DOOR - Keep closed at all times".'
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Questions 6-10',
        instruction: 'Read the newspaper article and say if the sentences are TRUE (T) or FALSE (F):',
        type: 'true-false',
        passageTitle: 'BENEFIT CONCERT (www.miamiherald.com – Sunday, March 5, 2007)',
        passageText: `Pianist Kemal Gekic will be one of the distinguished talents scheduled to perform on Monday in the annual Artists-in-Residence concert at the Wertheim Performing Arts Centre. The concert begins at 8 p.m. and will benefit the Florida International University School of Music. Also performing will be Romanian-born violinist Robert Davidovici and the Miami String Quartet. For ticket information, call 305-348-1998.`,
        questions: [
          {
            id: 'l2-q6',
            number: 6,
            questionText: 'This is an article from a newspaper.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'TRUE',
            explanation: 'It is published in the Miami Herald (newspaper).'
          },
          {
            id: 'l2-q7',
            number: 7,
            questionText: 'The date of the concert is March 5th, 2007.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'FALSE',
            explanation: 'The paper is dated Sunday March 5th; the concert is "on Monday" (March 6th).'
          },
          {
            id: 'l2-q8',
            number: 8,
            questionText: 'The Artists-in-Residence concert is once a year.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'TRUE',
            explanation: 'The text says: "in the annual Artists-in-Residence concert" (annual = once a year).'
          },
          {
            id: 'l2-q9',
            number: 9,
            questionText: 'The concert will be at the Florida International University School of Music.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'FALSE',
            explanation: 'It takes place at the Wertheim Performing Arts Centre (it benefits the School of Music).'
          },
          {
            id: 'l2-q10',
            number: 10,
            questionText: 'Kemal Gekic is a Romanian pianist.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'FALSE',
            explanation: 'Robert Davidovici is the Romanian-born violinist; Kemal Gekic is not specified as Romanian.'
          }
        ]
      },
      {
        exerciseNumber: 3,
        title: 'Exercise 3 – Questions 11-15',
        instruction: 'Say if the following statements are RIGHT or WRONG:',
        type: 'right-wrong',
        passageTitle: 'Three Hotels in Brighton',
        cards: [
          {
            id: 'queens',
            title: 'From £ 59 Queens Hotel (And Lanes Leisure Club)',
            body: '1-5 Kings Rd, Brighton. A 3 star hotel (refurbished in 2005), situated on the seafront in the heart of the Lanes. Fantastic sea-views from many rooms and the bar. There are also extensive leisure facilities and pool.'
          },
          {
            id: 'quality',
            title: 'From £ 60 Quality Hotel Brighton',
            body: 'West Street, Brighton. A bright, modern hotel with a friendly atmosphere and ideal location. Adjacent to the Brighton conference centre, minutes to the Piers, The Lanes, and Brighton Pavilion.'
          },
          {
            id: 'paramount',
            title: 'From £ 85 Paramount Old Ship Hotel',
            body: '31-38 Kings Road, Brighton. The Old Ship Hotel is a grand sea front Georgian hotel. Excellent base for all Brighton has to offer!!'
          }
        ],
        questions: [
          {
            id: 'l2-q11',
            number: 11,
            questionText: 'The Paramount Old Ship Hotel is the cheapest.',
            type: 'right-wrong',
            options: ['RIGHT', 'WRONG'],
            correctAnswer: 'WRONG',
            explanation: 'Paramount is £85 (the most expensive); Queens Hotel is £59.'
          },
          {
            id: 'l2-q12',
            number: 12,
            questionText: 'All these hotels are three-star hotels.',
            type: 'right-wrong',
            options: ['RIGHT', 'WRONG'],
            correctAnswer: 'WRONG',
            explanation: 'Only Queens Hotel is explicitly stated as 3 star.'
          },
          {
            id: 'l2-q13',
            number: 13,
            questionText: 'Two hotels are on the same street.',
            type: 'right-wrong',
            options: ['RIGHT', 'WRONG'],
            correctAnswer: 'RIGHT',
            explanation: 'Both Queens Hotel and Paramount Old Ship Hotel are on Kings Road.'
          },
          {
            id: 'l2-q14',
            number: 14,
            questionText: 'You can have a swim in the Queens Hotel.',
            type: 'right-wrong',
            options: ['RIGHT', 'WRONG'],
            correctAnswer: 'RIGHT',
            explanation: 'The listing states: "extensive leisure facilities and pool".'
          },
          {
            id: 'l2-q15',
            number: 15,
            questionText: 'You can see the sea from the Quality Hotel Brighton.',
            type: 'right-wrong',
            options: ['RIGHT', 'WRONG'],
            correctAnswer: 'WRONG',
            explanation: 'No sea views are mentioned for Quality Hotel on West Street.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 3 (Parte 2 – Lectura Comprensiva)
  // =========================================================================
  3: {
    levelNumber: 3,
    levelRoman: 'III',
    partTitle: 'Parte 2 – Lectura Comprensiva',
    timeAllowedMinutes: 35,
    totalPoints: 20,
    pointsPerItem: 1.33,
    officialKey: {
      'l3-q1': 'FALSE',
      'l3-q2': 'TRUE',
      'l3-q3': 'TRUE',
      'l3-q4': 'FALSE',
      'l3-q5': 'TRUE',
      'l3-q6': 'C',
      'l3-q7': 'B',
      'l3-q8': 'F',
      'l3-q9': 'A',
      'l3-q10': 'D',
      'l3-q11': 'B',
      'l3-q12': 'A',
      'l3-q13': 'B',
      'l3-q14': 'C',
      'l3-q15': 'C'
    },
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 – Questions 1-5',
        instruction: 'Read the magazine interviews with people talking about work experience, and say if the sentences below are TRUE or FALSE:',
        type: 'true-false',
        passageTitle: 'Work Experience Interviews',
        cards: [
          {
            id: 'ali',
            title: '1- ALI HUMAIDI, receptionist',
            body: '"I applied for work experience in a primary school but they couldn\'t take me. I got a placement in a library instead. Work experience taught me about myself and skills I didn\'t know I had, such as working with other people and meeting members of the public. I liked listening to people and helping them. Perhaps that\'s why I became a receptionist."'
          },
          {
            id: 'mel',
            title: '2- MEL OLIVER, TV chef',
            body: '"I was quite good in class but I never did well in exams. Towards the end of school I developed negative attitudes. I thought work experience was going to be a waste of time. I didn\'t think it would help me to decide what I wanted to be. But then I did work experience in a restaurant and I loved it. A year later I got a place at a local college on a food preparation course. That was the start of my career."'
          },
          {
            id: 'josie',
            title: '3- JOSIE PARKER, singer',
            body: '"No one believes me now but I was once so shy that I could only sing to myself in the shower. I did my work experience in a hairdresser\'s. I didn\'t cut hair but I helped with the customers, took people cups of tea and tidied up the salon. The staff and customers were so nice and friendly. I stopped being frightened of people. After that I started singing for my friends at parties and then for small audiences in clubs."'
          },
          {
            id: 'mike',
            title: '4- MIKE STEEL, record producer',
            body: '"My mother owns a pharmacy and she expected me to work there. I suppose I did, too. When it was time for work experience I applied to a recording Studio. From the first day I knew I had to work in the music business. And that\'s what I did."'
          },
          {
            id: 'ted',
            title: '5- TED SURKEES, businessman',
            body: '"On the first day everything went wrong. I forgot to wear a jacket and tie. I spilled coffee on the manager\'s desk. I broke the office lift - I can\'t explain how. It was awful. After that I became determined to set up my own business and never to work for anyone else."'
          }
        ],
        questions: [
          {
            id: 'l3-q1',
            number: 1,
            questionText: 'Ali Humaidi did work experience in a school.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'FALSE',
            explanation: 'The school couldn\'t take him; he got a placement in a library instead.'
          },
          {
            id: 'l3-q2',
            number: 2,
            questionText: 'School experience helped Mel Oliver choose her job.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'TRUE',
            explanation: 'Her school work experience in a restaurant sparked her career and college food preparation course.'
          },
          {
            id: 'l3-q3',
            number: 3,
            questionText: 'Before her work experience Josie Parker only used to sing alone.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'TRUE',
            explanation: 'She states: "I was once so shy that I could only sing to myself in the shower."'
          },
          {
            id: 'l3-q4',
            number: 4,
            questionText: 'Mike Steel has worked as a pharmacist and a record producer.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'FALSE',
            explanation: 'He never worked as a pharmacist; his mother owned one, but he went straight to a recording studio.'
          },
          {
            id: 'l3-q5',
            number: 5,
            questionText: 'Ted Sarkees doesn’t know why the lift broke.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'TRUE',
            explanation: 'He says: "I broke the office lift - I can\'t explain how."'
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Questions 6-10',
        instruction: 'Read the signs or notes (6-10) and choose an appropriate explanation from options a – g. (Two extra letters not needed):',
        type: 'matching',
        matchingOptions: [
          { key: 'A', label: 'a- Don’t try to turn on the heating between 10am and 4pm.' },
          { key: 'B', label: 'b- Your old magazines will be used and read here.' },
          { key: 'C', label: 'c- Go somewhere else to see the show.' },
          { key: 'D', label: 'd- There is enough petrol in the car to get to a cheap petrol station.' },
          { key: 'E', label: 'e- The event has moved from Room 4 to the West Building.' },
          { key: 'F', label: 'f- If you buy something that’s too big, you can’t bring it back.' },
          { key: 'G', label: 'g- Please return what you’ve taken after finishing with it.' }
        ],
        questions: [
          {
            id: 'l3-q6',
            number: 6,
            questionText: 'Sign 6: "Our science comedy night is very popular. The show will now take place in room 4 of the West Building, so that more people can see it. See you there!"',
            type: 'matching',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            correctAnswer: 'C',
            explanation: 'Explanation c: Go somewhere else to see the show.'
          },
          {
            id: 'l3-q7',
            number: 7,
            questionText: 'Sign 7: "Magazines needed for patients to read. Up to date or out of date. Leave them with our receptionist or in the black box by the front door."',
            type: 'matching',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            correctAnswer: 'B',
            explanation: 'Explanation b: Your old magazines will be used and read here.'
          },
          {
            id: 'l3-q8',
            number: 8,
            questionText: 'Sign 8: "Clothes on sale cannot be returned. Try them on before you buy them!"',
            type: 'matching',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            correctAnswer: 'F',
            explanation: 'Explanation f: If you buy something that’s too big, you can’t bring it back.'
          },
          {
            id: 'l3-q9',
            number: 9,
            questionText: 'Sign 9: "Heating comes on between 7am and 10am and 4pm and 11pm. Please do not try to change these times."',
            type: 'matching',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            correctAnswer: 'A',
            explanation: 'Explanation a: Don’t try to turn on the heating between 10am and 4pm.'
          },
          {
            id: 'l3-q10',
            number: 10,
            questionText: 'Note 10: "Paul, There’s still a little petrol in the car, so you won’t need to get any more until you reach Benton, where you can buy it cheaply. Sally"',
            type: 'matching',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            correctAnswer: 'D',
            explanation: 'Explanation d: There is enough petrol in the car to get to a cheap petrol station.'
          }
        ]
      },
      {
        exerciseNumber: 3,
        title: 'Exercise 3 – Questions 11-15',
        instruction: 'Read the text about two sisters and choose the best answer for questions 11 to 15 (a, b or c):',
        type: 'multiple-choice',
        passageTitle: 'The Story of Tamara and Adriana',
        passageText: `Something very strange happened to Tamara. She never knew she had a twin sister until she started university!\nTamara was born in Mexico. Her parents could not look after her so she went to live with a family in Manhattan, USA.\nWhen Tamara was twenty years old, she started university in Long Island. She enjoyed her university life. But one day she was walking home from class, and a student smiled at her. “Hello Adriana!” said the student. “I’m not Adriana,” said Tamara.\nThis happened to Tamara again and again. People Tamara didn’t know kept calling her Adriana. It was very strange. One day, when a woman called her Adriana, Tamara asked “Why do you keep calling me Adriana?”\nThe woman replied, “You look like my friend Adriana. You have the same face and the same hair. Is Adriana your sister?” Tamara said that she did not have a sister called Adriana. But she was interested in this girl Adriana. Finally, she asked someone for Adriana’s email address.\nWhen Tamara wrote to Adriana, she found out that they both had the same birthday, they looked the same and both of them were from Mexico. When Tamara went to live with the family in Manhattan, Adriana moved to Long Island to live with a family there. It had to be true! Adriana and Tamara were twin sisters!`,
        questions: [
          {
            id: 'l3-q11',
            number: 11,
            questionText: 'Tamara’s parents ...',
            type: 'multiple-choice',
            options: ['moved from Mexico to Manhattan', 'sent Tamara and Adriana away', 'are still alive'],
            correctAnswer: 'B',
            explanation: 'Her parents could not look after them, so both sisters were sent away to live with families in the USA.'
          },
          {
            id: 'l3-q12',
            number: 12,
            questionText: 'Tamara and her sister were both born ...',
            type: 'multiple-choice',
            options: ['in Mexico', 'in Manhattan', 'in Long Island'],
            correctAnswer: 'A',
            explanation: '"Tamara was born in Mexico... both of them were from Mexico."'
          },
          {
            id: 'l3-q13',
            number: 13,
            questionText: 'Adriana wrote to Tamara ...',
            type: 'multiple-choice',
            options: ['after speaking to friends', 'to reply to an email', 'to suggest a meeting'],
            correctAnswer: 'B',
            explanation: 'Tamara wrote first to Adriana\'s email address, and Adriana wrote back to reply to it.'
          },
          {
            id: 'l3-q14',
            number: 14,
            questionText: 'How did the sisters meet?',
            type: 'multiple-choice',
            options: ['Adriana contacted Tamara', 'A friend introduced them', 'Tamara contacted Adriana'],
            correctAnswer: 'C',
            explanation: 'Tamara got Adriana\'s email address and contacted her.'
          },
          {
            id: 'l3-q15',
            number: 15,
            questionText: 'Tamara didn\'t know ...',
            type: 'multiple-choice',
            options: ['that she was born in Mexico', 'what day her birthday was', 'that she had a sister'],
            correctAnswer: 'C',
            explanation: '"She never knew she had a twin sister until she started university!"'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 4 (Parte 2 – Lectura Comprensiva)
  // =========================================================================
  4: {
    levelNumber: 4,
    levelRoman: 'IV',
    partTitle: 'Parte 2 – Lectura Comprensiva',
    timeAllowedMinutes: 30,
    totalPoints: 20,
    pointsPerItem: 1.33,
    officialKey: {
      'l4-q1': 'C',
      'l4-q2': 'A',
      'l4-q3': 'C',
      'l4-q4': 'B',
      'l4-q5': 'A',
      'l4-q6': 'TRUE',
      'l4-q7': 'FALSE',
      'l4-q8': 'TRUE',
      'l4-q9': 'FALSE',
      'l4-q10': 'FALSE',
      'l4-q11': 'TRUE',
      'l4-q12': 'TRUE',
      'l4-q13': 'TRUE',
      'l4-q14': 'FALSE',
      'l4-q15': 'TRUE'
    },
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 – Questions 1-5',
        instruction: 'Look at the text in each question. What does it say? Circle the correct option A, B or C:',
        type: 'multiple-choice',
        questions: [
          {
            id: 'l4-q1',
            number: 1,
            questionText: 'Notice: "SATURDAY’S DISCO — There aren’t any tickets left. Anyone who ordered a ticket and hasn’t given me the money should do so before tomorrow. José Martín"',
            type: 'multiple-choice',
            options: [
              'Tickets for the disco can be collected after tomorrow.',
              'It is possible to reserve a disco ticket if you do so by tomorrow.',
              'Reserved tickets for the disco must be paid for today.'
            ],
            correctAnswer: 'C',
            explanation: 'Money must be given before tomorrow, meaning unpaid reservations must be paid today.'
          },
          {
            id: 'l4-q2',
            number: 2,
            questionText: 'Sign: "WAIT FOR LIFT DOORS TO CLOSE BEFORE PRESSING THE BUTTON"',
            type: 'multiple-choice',
            options: [
              'Press the button after the doors close.',
              'Press the button while the doors are closing.',
              'Press the button to close the lift doors.'
            ],
            correctAnswer: 'A',
            explanation: 'The sign explicitly instructs you to wait until the doors are closed before pressing the button.'
          },
          {
            id: 'l4-q3',
            number: 3,
            questionText: 'Message: "TO: Pablo | FROM: Fátima — Did I leave a scarf in your house? The problem is it’s not mine- I borrowed it and I must give it back."',
            type: 'multiple-choice',
            options: [
              'return the scarf he borrowed.',
              'lend her a scarf.',
              'look for the borrowed scarf.'
            ],
            correctAnswer: 'C',
            explanation: 'Fátima is asking Pablo to check if the borrowed scarf was left in his house.'
          },
          {
            id: 'l4-q4',
            number: 4,
            questionText: 'Message: "Eva- your Spanish class is on Friday evening this week instead of Thursday, starting 15 minutes earlier than usual."',
            type: 'multiple-choice',
            options: [
              'will not be in the evening this week.',
              'will be a day later than normal.',
              'will no longer be on Thursday.'
            ],
            correctAnswer: 'B',
            explanation: 'Thursday to Friday is one day later.'
          },
          {
            id: 'l4-q5',
            number: 5,
            questionText: 'Label: "THROW AWAY ANY REMAINING MEDICINE WITHIN ONE MONTH OF OPENING THIS BOTTLE"',
            type: 'multiple-choice',
            options: [
              'You can use this medicine up to one month after opening it.',
              'This bottle contains enough medicine for one month.',
              'Unopened bottles of medicine must be thrown away within one month.'
            ],
            correctAnswer: 'A',
            explanation: 'You can use it for up to one month after opening; then throw any remainder away.'
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Questions 6-15',
        instruction: 'Read the article below about a journey to the Arctic on board a ship. Then, decide if the sentences are TRUE (T) or FALSE (F):',
        type: 'true-false',
        passageTitle: 'EXPLORING THE ARCTIC',
        passageText: `The Arctic is one of the few places in the world untouched by pollution where you can see nature at its wildest and most beautiful. Join our ship The Northern Star from 2 to 18 July, for a 17-day voyage to the Arctic. During the voyage you are able to relax and get away from it all. There are no parties or film-shows to attend, quizzes to enter, or entertainers to watch. However, we do have specialists on board who are willing to answer any of your questions about the Arctic and who will talk about the animals and birds that you see on the trip.

After setting off from Scotland, we go north along the coast of Norway to Bear Island. Along the way you'll see thousands of seabirds and wonderful scenery, with rivers of ice and huge cliffs. You will have the chance to see reindeer, polar bears, and other Arctic animals. Although we have a timetable, experience has shown that we may have to change our direction a little, depending on the weather and which animals appear.

The Northern Star is a very special ship and our past voyages have been very popular. Our cabins all have the same excellent facilities, which include a private bathroom and refrigerator. Our chefs are happy to prepare any food for people on special diets. Choose just what you want to eat from the wide variety available from the dining room buffet. There is a library, shop, clinic and plenty of space for relaxation. If you need some exercise, why not go jogging every morning around the decks, or do some swimming in the indoor pool.

Prices include economy class air travel and 16 nights on board the Northern Star, all meals and excursions and all lectures.

Day 1: Board the Northern Star.
Days 2-7: We sail slowly north along the coast of Norway, stopping at places of interest.
Day 8: Tromso. You need to get up at sunrise to see the whales as we sail towards Tromso. Visit Tromso to see the Arctic Museum, the cathedral and the beautiful old wooden houses. In the evening we sail away along the west coast to Bird Island, which is excellent for bird-watching.
Days 9-10: Bear Island. We arrive here in the early evening and stay overnight. Bear Island once had an active fishing industry, but today little of this remains. We will explore the island, looking out for Arctic flowers.
Days 11-16: Spitsbergen. A place of mountains and rivers of ice, it is home to a large variety of animals.
Day 17: Leave the ship in Spitsbergen and fly to London from Tromso.`,
        questions: [
          {
            id: 'l4-q6',
            number: 6,
            questionText: 'This trip is for people who like peace and quiet.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'TRUE',
            explanation: '"During the voyage you are able to relax and get away from it all... no parties or film-shows".'
          },
          {
            id: 'l4-q7',
            number: 7,
            questionText: 'Many different activities are organised on board.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'FALSE',
            explanation: 'The text states: "There are no parties or film-shows to attend, quizzes to enter, or entertainers to watch."'
          },
          {
            id: 'l4-q8',
            number: 8,
            questionText: 'The voyage begins in Scotland.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'TRUE',
            explanation: '"After setting off from Scotland, we go north..."'
          },
          {
            id: 'l4-q9',
            number: 9,
            questionText: 'The ship follows a fixed route.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'FALSE',
            explanation: '"we may have to change our direction a little, depending on the weather and which animals appear."'
          },
          {
            id: 'l4-q10',
            number: 10,
            questionText: 'There are different types of accommodation.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'FALSE',
            explanation: '"Our cabins all have the same excellent facilities".'
          },
          {
            id: 'l4-q11',
            number: 11,
            questionText: 'Passengers serve themselves in the dining room.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'TRUE',
            explanation: '"Choose just what you want to eat from the wide variety available from the dining room buffet."'
          },
          {
            id: 'l4-q12',
            number: 12,
            questionText: 'Whales can be seen in the morning near Tromso.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'TRUE',
            explanation: '"You need to get up at sunrise to see the whales as we sail towards Tromso."'
          },
          {
            id: 'l4-q13',
            number: 13,
            questionText: 'There are some examples of traditional buildings in Tromso.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'TRUE',
            explanation: '"the beautiful old wooden houses".'
          },
          {
            id: 'l4-q14',
            number: 14,
            questionText: 'The ship stays overnight in Tromso.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'FALSE',
            explanation: '"In the evening we sail away along the west coast to Bird Island".'
          },
          {
            id: 'l4-q15',
            number: 15,
            questionText: 'Bear Island used to be a busy fishing centre.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'TRUE',
            explanation: '"Bear Island once had an active fishing industry, but today little of this remains."'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 5 (Parte 2 – Lectura Comprensiva)
  // =========================================================================
  5: {
    levelNumber: 5,
    levelRoman: 'V',
    partTitle: 'Parte 2 – Lectura Comprensiva',
    timeAllowedMinutes: 35,
    totalPoints: 20,
    pointsPerItem: 1.0,
    officialKey: {
      'l5-q1': 'e',
      'l5-q2': 'c',
      'l5-q3': 'd',
      'l5-q4': 'b',
      'l5-q5': 'a',
      'l5-q6': 'F',
      'l5-q7': 'F',
      'l5-q8': 'T',
      'l5-q9': 'F',
      'l5-q10': 'F',
      'l5-q11': 'F',
      'l5-q12': 'T',
      'l5-q13': 'T',
      'l5-q14': 'T',
      'l5-q15': 'F',
      'l5-q16': 'D',
      'l5-q17': 'C',
      'l5-q18': 'B',
      'l5-q19': 'D',
      'l5-q20': 'A'
    },
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 – The Sanfermines Pamplona Madness',
        instruction: 'A) Insert the corresponding sentence (a to e) at the beginning of each paragraph (1 to 5). Then B) Mark T for TRUE or F for FALSE.',
        type: 'heading-match',
        passageTitle: 'THE SANFERMINES PAMPLONA MADNESS',
        passageText: `Paragraph 1: [...] Eight days of collective madness when the people of the town and others from all over the world go without sleep, drink and dance without a pause in the streets of the capital of Navarre. At eight in the morning each day, the old quarter is the setting for the traditional encierro, in which thousands of people run through the streets in front of the brave bulls which will be fought in the ring in the afternoon.

Paragraph 2: [...] Then everyone starts to jump and dance and the corners of the square fill with empty champagne bottles. The Sanfermines, the fiesta that Ernest Hemingway made world famous in his book, are under way and for a week the people of the city forget their daily worries and plunge headlong into the revelry. They are joined by thousands of foreigners who flock to Pamplona year after year; during the festival there is not a single hotel room to be found.

Paragraph 3: [...] At four in the afternoon the Riau Riau is held; this is an event attended by the town councilors, in party dress, who walk from the Town Hall to the chapel of San Fermín in the church of San Lorenzo, whilst the mozos or boys try to hinder them, jumping and chanting a typical song. On previous occasions this has led to the suspension of the Riau Riau without the dignitaries ever reaching the chapel where the image of the saint is kept.

Paragraph 4: [...] The peñas eat dinner in restaurants or in their special haunts, lining their stomachs to prepare for the huge amounts of alcohol that they will be drinking as the night goes on. While the Sanfermines are on, Pamplona does not sleep and only when exhaustion overcomes the body, which cannot make another jump or absorb another drop of alcohol, does it become necessary to find the corner to snooze for an hour or two, just enough to get up again and go on with the party or run with the bulls at eight in the morning.

Paragraph 5: [...] At this time of day alcohol is replaced by a cup of broth or chocolate with doughnuts to tone up the body. Meanwhile, the valiant prepare to run in front of six brave bulls which, every morning at eight o’clock on the dot, are driven from the pens to the bull-ring, where they will fight in the afternoon.`,
        matchingOptions: [
          { key: 'a', label: 'a. About a quarter to seven reveille sounds and the stoutest or those who have managed to snatch a few hours sleep have no intention of missing this musical trip through the old streets of the town.' },
          { key: 'b', label: 'b. When dusk begins to fall, the bars of the old quarter of Pamplona fill with people.' },
          { key: 'c', label: 'c. Thousands of people, most of them dressed in the traditional white costume with red sash and neckerchief, gather every year at midday on 6 July beneath the balcony of the Pamplona Town Hall, from where a councilor of the corporation fires the rocket which is the starting signal for the fiesta with a cry of “Viva San Fermín”.' },
          { key: 'd', label: 'd. As soon as the signal has been given, the merry-making spreads out through the streets of the old quarter to the music of friends who meet to watch the bullfight and drink wine.' },
          { key: 'e', label: 'e. With the launching of the rocket or “opening salva”, on 6 July the Sanfermines begin in Pamplona.' }
        ],
        questions: [
          {
            id: 'l5-q1',
            number: 1,
            questionText: 'Insert heading for Paragraph 1:',
            type: 'matching',
            options: ['a', 'b', 'c', 'd', 'e'],
            correctAnswer: 'e',
            explanation: 'Key: e ("With the launching of the rocket...")'
          },
          {
            id: 'l5-q2',
            number: 2,
            questionText: 'Insert heading for Paragraph 2:',
            type: 'matching',
            options: ['a', 'b', 'c', 'd', 'e'],
            correctAnswer: 'c',
            explanation: 'Key: c ("Thousands of people... gather every year at midday on 6 July...")'
          },
          {
            id: 'l5-q3',
            number: 3,
            questionText: 'Insert heading for Paragraph 3:',
            type: 'matching',
            options: ['a', 'b', 'c', 'd', 'e'],
            correctAnswer: 'd',
            explanation: 'Key: d ("As soon as the signal has been given...")'
          },
          {
            id: 'l5-q4',
            number: 4,
            questionText: 'Insert heading for Paragraph 4:',
            type: 'matching',
            options: ['a', 'b', 'c', 'd', 'e'],
            correctAnswer: 'b',
            explanation: 'Key: b ("When dusk begins to fall, the bars fill...")'
          },
          {
            id: 'l5-q5',
            number: 5,
            questionText: 'Insert heading for Paragraph 5:',
            type: 'matching',
            options: ['a', 'b', 'c', 'd', 'e'],
            correctAnswer: 'a',
            explanation: 'Key: a ("About a quarter to seven reveille sounds...")'
          },
          {
            id: 'l5-q6',
            number: 6,
            questionText: '1. San Fermín became known by thousands of people centuries ago.',
            type: 'true-false',
            options: ['T', 'F'],
            correctAnswer: 'F',
            explanation: 'Key: F (Ernest Hemingway made it world famous in his 20th century book).'
          },
          {
            id: 'l5-q7',
            number: 7,
            questionText: '2. Everyone dresses up especially for this occasion.',
            type: 'true-false',
            options: ['T', 'F'],
            correctAnswer: 'F',
            explanation: 'Key: F (only "most of them" or specific councilors in party dress).'
          },
          {
            id: 'l5-q8',
            number: 8,
            questionText: '3. There’s joy in every corner for 8 days.',
            type: 'true-false',
            options: ['T', 'F'],
            correctAnswer: 'T',
            explanation: 'Key: T ("Eight days of collective madness... plunge headlong into revelry").'
          },
          {
            id: 'l5-q9',
            number: 9,
            questionText: '4. It’s a good time to do business in this city.',
            type: 'true-false',
            options: ['T', 'F'],
            correctAnswer: 'F',
            explanation: 'Key: F (people forget daily worries, not for routine commerce).'
          },
          {
            id: 'l5-q10',
            number: 10,
            questionText: '5. The “Riau Riau” is the beginning of the celebration.',
            type: 'true-false',
            options: ['T', 'F'],
            correctAnswer: 'F',
            explanation: 'Key: F (The rocket on 6 July at midday is the beginning; Riau Riau is at 4pm).'
          },
          {
            id: 'l5-q11',
            number: 11,
            questionText: '6. This event forms part of a legend.',
            type: 'true-false',
            options: ['T', 'F'],
            correctAnswer: 'F',
            explanation: 'Key: F.'
          },
          {
            id: 'l5-q12',
            number: 12,
            questionText: '7. There were times when the city authorities were not able to reach the Church S Lorenzo.',
            type: 'true-false',
            options: ['T', 'F'],
            correctAnswer: 'T',
            explanation: 'Key: T ("On previous occasions this has led to the suspension of the Riau Riau without the dignitaries ever reaching the chapel").'
          },
          {
            id: 'l5-q13',
            number: 13,
            questionText: '8. The “peñas” eat before drinking.',
            type: 'true-false',
            options: ['T', 'F'],
            correctAnswer: 'T',
            explanation: 'Key: T ("lining their stomachs to prepare for the huge amounts of alcohol").'
          },
          {
            id: 'l5-q14',
            number: 14,
            questionText: '9. Even the strongest men usually rest before the bullfight.',
            type: 'true-false',
            options: ['T', 'F'],
            correctAnswer: 'T',
            explanation: 'Key: T ("the stoutest or those who have managed to snatch a few hours sleep").'
          },
          {
            id: 'l5-q15',
            number: 15,
            questionText: '10. The fights take place at night.',
            type: 'true-false',
            options: ['T', 'F'],
            correctAnswer: 'F',
            explanation: 'Key: F ("which will be fought in the ring in the afternoon").'
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Edinburgh Airport Inspection Report',
        instruction: 'Read the passenger report about Edinburgh Airport and circle the correct option (A, B, C or D):',
        type: 'multiple-choice',
        passageTitle: 'EDINBURGH AIRPORT PASSENGER REPORT',
        passageText: `1. When we recently visited all the airports in Britain to look at them from the passengers’ point of view, we judged Edinburgh to be an extremely well-planned airport which met most of the standards we were expecting.\n2. Good signposting to the airport starts in the city itself, although there is a confusing stretch along the route where directions disappear for a while. The L-shaped terminal is “wrapped” around the car-park and getting from the car to the terminal is consequently trouble-free. Plenty of flight notices and signs greet travelers immediately inside the terminal and a moving stairway makes it easy to reach the upper levels.\n3. The large bar and café on the ground floor are well furnished with proper chairs and tables and there is wide range of appetizing food. Upstairs there is another bar - clean and uncrowded - and a bright, cheerful restaurant with newspapers to read. Flight notices were easily seen.\n4. There aren't many seats outside the refreshments areas, although some are provided opposite the “arrivals” door. There is an excellent area for watching planes arriving and departing - decorated with masses of plants - a large shop and bank, plenty of payphones and telephone directories. The terminal is long and pleasant with much to interest a visitor with time to spare. Countless little touches add up to an enjoyable building.\n5. Not surprisingly for an airport in which about 85% of the traffic is domestic, passengers on internal flights are put first for comfort and convenience. Moving staircases take them speedily up to first floor holding lounges; air bridges make boarding the planes easily. International passengers wait in a large and naturally-lit departure lounge, but must then walk along the corridor, down some stairs to the gates and cross the concrete to the planes. Only one gate had an air bridge. International arrivals walk back up these stairs, through passport control and then downstairs to collect their baggage.`,
        questions: [
          {
            id: 'l5-q16',
            number: 16,
            questionText: 'From this report Edinburgh Airport seems to be:',
            type: 'multiple-choice',
            options: ['very crowded.', 'sub-standard.', 'easy to reach.', 'pleasant for passengers.'],
            correctAnswer: 'D',
            explanation: 'Key: D ("an extremely well-planned airport... enjoyable building... pleasant").'
          },
          {
            id: 'l5-q17',
            number: 17,
            questionText: 'What is reported about the signs and notices?',
            type: 'multiple-choice',
            options: [
              'the route from the city was easy to follow.',
              'the signposting is confusing as you enter the terminal.',
              'you could read the flight notices from the restaurant.',
              'there is no complaint about the matter.'
            ],
            correctAnswer: 'C',
            explanation: 'Key: C ("Flight notices were easily seen... in the restaurant").'
          },
          {
            id: 'l5-q18',
            number: 18,
            questionText: 'What is reported about refreshment areas?',
            type: 'multiple-choice',
            options: [
              'refreshments are more expensive on the ground floor.',
              'the café has a good choice of food.',
              'the restaurant menu is a limited one.',
              'the upstairs bar is uncomfortable.'
            ],
            correctAnswer: 'B',
            explanation: 'Key: B ("there is wide range of appetizing food").'
          },
          {
            id: 'l5-q19',
            number: 19,
            questionText: 'The report says that in the “landside” areas there is:',
            type: 'multiple-choice',
            options: [
              'a shortage of telephones.',
              'a good supply of seats.',
              'a lot of empty spaces.',
              'plenty to keep you occupied.'
            ],
            correctAnswer: 'D',
            explanation: 'Key: D ("The terminal is long and pleasant with much to interest a visitor with time to spare").'
          },
          {
            id: 'l5-q20',
            number: 20,
            questionText: 'What did the authors of the report criticize about Edinburgh Airport?',
            type: 'multiple-choice',
            options: [
              'arrangements for international passengers',
              'the number of car-parking spaces',
              'most of the domestic part of the airport',
              'delays at the terminal building'
            ],
            correctAnswer: 'A',
            explanation: 'Key: A (International passengers must walk down stairs, cross the concrete in the open, and only one gate had an air bridge).'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 6 (Parte 2 – Lectura Comprensiva)
  // =========================================================================
  6: {
    levelNumber: 6,
    levelRoman: 'VI',
    partTitle: 'Parte 2 – Lectura Comprensiva',
    timeAllowedMinutes: 30,
    totalPoints: 20,
    pointsPerItem: 1.53,
    officialKey: {
      'l6-q1': 'B',
      'l6-q2': 'F',
      'l6-q3': 'A',
      'l6-q4': 'G',
      'l6-q5': 'C',
      'l6-q6': 'E',
      'l6-q7': 'A',
      'l6-q8': 'C',
      'l6-q9': 'B',
      'l6-q10': 'C',
      'l6-q11': 'A',
      'l6-q12': 'B',
      'l6-q13': 'C'
    },
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 – Computers May Read Your Job Application',
        instruction: 'Choose the most suitable heading from the list A-H for each part (1-6) of the article. (One extra heading not needed. Example 0 = H).',
        type: 'heading-match',
        passageTitle: 'Computers may read your job application',
        cards: [
          {
            id: 'p0',
            title: '[Example 0] Heading H: First step: computer scans application.',
            body: 'Computers could be the first obstacle that job applicants face. Forget the C.V. sitting on the corner of your future employer’s desk. Instead, your application will have been neatly processed by a computer which will have taken out your name and address, processed your educational background and cross-checked your skills with those demanded by the employer.'
          },
          {
            id: 'p1',
            title: 'Paragraph 1',
            body: 'Then the employer will be presented with a short list of applicants best fitting the requirements he is looking for. It may sound like science fiction destroying the personal touch, but in some companies it is science fact. Many large companies already use some kind of computer selection.'
          },
          {
            id: 'p2',
            title: 'Paragraph 2',
            body: 'A business analyst from one of the major companies already participating in this system says that companies using the new computerized recruitment systems are rapidly becoming the new corporate “Face Control”. He says that three-quarters of companies attending a recent computer exhibition are considering using computer software to help with employee selection within the next five years.'
          },
          {
            id: 'p3',
            title: 'Paragraph 3',
            body: 'Computerized systems already in use range from primitive scanners, which look for key words, to sophisticated systems which can accept applications, focusing on important information such as name, address, phone number, skills, educational background and previous jobs.'
          },
          {
            id: 'p4',
            title: 'Paragraph 4',
            body: 'The advantages for the company are clear. Faced with a bundle of application forms it could take days for a personnel manager to process them all. It is also quite possible that they would get tired and be put off after the first few forms, so the ideal applicant could be missed. On the other hand, a computer could examine three hundred thousand applications in about six seconds.'
          },
          {
            id: 'p5',
            title: 'Paragraph 5',
            body: 'This means that if you have the right qualifications you are much less likely to be passed over. “At our company all job vacancies are kept on computer and every application that comes in is fed into the system and cross-matched, so a person could apply for one job and be shortlisted for another,” said a top analyst.'
          },
          {
            id: 'p6',
            title: 'Paragraph 6',
            body: 'But employers must remember that the best systems are only ninety-five per cent accurate, so mistakes will occur. And there is no way of monitoring the system for the applicant who writes: “I have never used a word processor or spread sheet,” leading the computer to spy two key phrases and assume that is has found an office technology expert.'
          }
        ],
        matchingOptions: [
          { key: 'A', label: 'A. Types of systems available.' },
          { key: 'B', label: 'B. Consider it a fact.' },
          { key: 'C', label: 'C. One application – many opportunities.' },
          { key: 'D', label: 'D. Trust them 100%.' },
          { key: 'E', label: 'E. Systems aren’t perfect.' },
          { key: 'F', label: 'F. Future looks bright.' },
          { key: 'G', label: 'G. Benefits for companies.' },
          { key: 'H', label: 'H. First step: computer scans application (Example 0).' }
        ],
        questions: [
          {
            id: 'l6-q1',
            number: 1,
            questionText: 'Select heading for Paragraph 1:',
            type: 'matching',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            correctAnswer: 'B',
            explanation: 'Key: B (Consider it a fact - "in some companies it is science fact").'
          },
          {
            id: 'l6-q2',
            number: 2,
            questionText: 'Select heading for Paragraph 2:',
            type: 'matching',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            correctAnswer: 'F',
            explanation: 'Key: F (Future looks bright - "three-quarters considering software within five years").'
          },
          {
            id: 'l6-q3',
            number: 3,
            questionText: 'Select heading for Paragraph 3:',
            type: 'matching',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            correctAnswer: 'A',
            explanation: 'Key: A (Types of systems available - "range from primitive scanners to sophisticated systems").'
          },
          {
            id: 'l6-q4',
            number: 4,
            questionText: 'Select heading for Paragraph 4:',
            type: 'matching',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            correctAnswer: 'G',
            explanation: 'Key: G (Benefits for companies - "advantages for the company are clear").'
          },
          {
            id: 'l6-q5',
            number: 5,
            questionText: 'Select heading for Paragraph 5:',
            type: 'matching',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            correctAnswer: 'C',
            explanation: 'Key: C (One application – many opportunities - "apply for one job and be shortlisted for another").'
          },
          {
            id: 'l6-q6',
            number: 6,
            questionText: 'Select heading for Paragraph 6:',
            type: 'matching',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            correctAnswer: 'E',
            explanation: 'Key: E (Systems aren’t perfect - "best systems are only 95% accurate, mistakes will occur").'
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Earth’s Tectonic Plates',
        instruction: 'Read about the Earth’s tectonic plates. For questions 7 to 13, choose the best answer a, b or c:',
        type: 'multiple-choice',
        passageTitle: 'Earth’s Tectonic Plates',
        passageText: `Most earthquakes are caused by large-scale movements of the Earth's lithospheric plates, and occur at the boundaries between the plates. Experts recognize seven to twelve major plates and a number of smaller ones. The plates take their names from continents (the North American plate); from oceans (the Pacific plate); and from geographic areas (the Arabian plate).

Slow and Steady Motion
The plates are in very slow but constant motion, so that seen from above, the Earth's surface might look like a slowly moving spherical jigsaw puzzle. The plates move at rates of 2 to 15 cm or several inches in a year, about as fast as our fingernails grow. On a human scale, this is a rate of movement that only the most sophisticated instruments can detect. But on the scale of geological time, it's a dizzying speed. At this rate, those almost-four-billion-year old rocks could have traveled all the way around the Earth eleven times.
The movement of the plates is generally one of three kinds: spreading, colliding or sliding. When plates are spreading, or separating from each other, we call their movement divergent. When they are colliding, or pushing each other, we call the movement convergent. Movement in which plates slide past each other is called lateral (or transform) plate movement. Earthquakes can accompany each of the three types of movement.

Plate Tectonics
The revolutionary theory of plate tectonics originated early in the 20th century, although it did not gain general acceptance until the late 1960s. The German meteorologist, geophysicist, and explorer Alfred L Wegener is now given credit for the first step in understanding the movement of the lithosphere. In the period 1910-1912 he formulated the theory called continental drift and collected evidence from the rocks, fossils, and climate of various continents to show that they had once been joined together. Wegener had little data on the oceanic crust, so he thought that the continents merely moved through that crust.`,
        questions: [
          {
            id: 'l6-q7',
            number: 7,
            questionText: 'Earthquakes occur when what parts of the tectonic plates collide?',
            type: 'multiple-choice',
            options: ['the edges', 'the centres', 'the peaks'],
            correctAnswer: 'A',
            explanation: 'Key: A ("occur at the boundaries between the plates", i.e. the edges).'
          },
          {
            id: 'l6-q8',
            number: 8,
            questionText: 'Tectonic plates can get their names from what?',
            type: 'multiple-choice',
            options: ['cities', 'rivers', 'seas'],
            correctAnswer: 'C',
            explanation: 'Key: C ("from oceans... the Pacific plate", i.e. seas).'
          },
          {
            id: 'l6-q9',
            number: 9,
            questionText: 'Why is the phrase "jigsaw puzzle" used in the second paragraph?',
            type: 'multiple-choice',
            options: ['to show how complex everything is', 'because of the way the plates fit together', 'because of the number of plates'],
            correctAnswer: 'B',
            explanation: 'Key: B (like pieces fitting together across the spherical surface).'
          },
          {
            id: 'l6-q10',
            number: 10,
            questionText: 'Why have the plates travelled so far?',
            type: 'multiple-choice',
            options: ['because they are moving quite fast', 'because Earth is not very big', 'because of the age of the Earth'],
            correctAnswer: 'C',
            explanation: 'Key: C ("those almost-four-billion-year old rocks could have traveled all the way around the Earth eleven times").'
          },
          {
            id: 'l6-q11',
            number: 11,
            questionText: 'Can earthquakes be caused when plates are moving away from each other?',
            type: 'multiple-choice',
            options: ['yes', 'no', 'only if they are touching'],
            correctAnswer: 'A',
            explanation: 'Key: A ("Earthquakes can accompany each of the three types of movement", including divergent / spreading).'
          },
          {
            id: 'l6-q12',
            number: 12,
            questionText: 'Why did Wegener\'s theory take so long to be accepted?',
            type: 'multiple-choice',
            options: ['he had no understanding of the ocean floor', 'it was very different from previous ideas in this area', 'he made several errors in his theory'],
            correctAnswer: 'B',
            explanation: 'Key: B (it was revolutionary and very different from the established geological beliefs of the time).'
          },
          {
            id: 'l6-q13',
            number: 13,
            questionText: 'What evidence did Wegener NOT use to support his theory of Continental Drift when looking at two now-distant locations?',
            type: 'multiple-choice',
            options: ['the existence of similar rocks', 'the existence of similar extinct animals', 'the existence of similar races of people'],
            correctAnswer: 'C',
            explanation: 'Key: C (He collected evidence from rocks, fossils, and climate, not human races).'
          }
        ]
      }
    ]
  }
};
