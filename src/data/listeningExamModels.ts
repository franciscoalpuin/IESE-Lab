export interface ListeningExamQuestion {
  id: string;
  number: number;
  question: string;
  type: 'true-false' | 'multiple-choice' | 'fill-blank' | 'table-cell';
  options?: string[];
  correctAnswer: string;
  acceptableAnswers?: string[];
  points: number;
  field?: string;
  rowLabel?: string;
}

export interface ListeningExamExercise {
  exerciseNumber: number;
  title: string;
  instructions: string;
  audioScriptTitle: string;
  audioScript: string;
  questions: ListeningExamQuestion[];
  tableData?: {
    columns: string[];
    rows: {
      label: string;
      cells: {
        text?: string;
        questionId?: string;
        placeholder?: string;
      }[];
    }[];
  };
}

export interface ListeningExamModel {
  levelNumber: number;
  levelRoman: string;
  title: string;
  part: string;
  timeAllowedMinutes: number;
  totalPoints: number;
  pointPerQuestionText: string;
  exercises: ListeningExamExercise[];
  answerKeyNotes?: string;
}

export const LISTENING_EXAM_MODELS: Record<number, ListeningExamModel> = {
  // =========================================================================
  // NIVEL 1
  // =========================================================================
  1: {
    levelNumber: 1,
    levelRoman: 'I',
    title: 'Modelo de Examen de Inglés – Nivel I',
    part: 'Parte 1 – Comprensión Auditiva (Part 1 – Listening Comprehension)',
    timeAllowedMinutes: 15,
    totalPoints: 20,
    pointPerQuestionText: '1.33 point each correct answer. Total: 20 points.',
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 - Questions 1-6 (Say if the sentences are TRUE or FALSE)',
        instructions: 'Say if the following sentences are TRUE or FALSE. You will hear the recording twice.',
        audioScriptTitle: 'Audio Text 1: Phone Conversation – Movie Invitation (Official Recording)',
        audioScript: `Narrator: Listen to the dialogue.
[Telephone ringing]

Woman: Can you answer that, Tim?
Tim: Of course. Hello?
Bill: Hi Tim, this is Bill.
Tim: Hello, Bill.
Bill: What are you doing Tim, right now I mean?
Tim: Nothing special, I'm reading a magazine.
Bill: Do you want to go to the movies with Carol and me?
Tim: Sure, great idea. What's playing?
Bill: Murder on the Orient Express. It's a mystery.
Tim: Okay. What time does it start?
Bill: At five.
Tim: Five o'clock? Which theatre?
Bill: The ABC. Do you know where it is?
Tim: Wait a minute, isn't it on Bleecker Street?
Bill: No, that's the Circle. The ABC is on University Place, near Union Square.
Tim: University Place?
Bill: Never mind, Tim, we'll come and pick you up at your house.
Tim: Thanks, that'll help. Is a quarter to five okay?
Bill: That's fine. See you at quarter to five. Goodbye.
Tim: Bye.`,
        questions: [
          {
            id: 'l1-ex1-q1',
            number: 1,
            question: '(1) This phone conversation is an invitation to go out.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'TRUE',
            points: 1.33
          },
          {
            id: 'l1-ex1-q2',
            number: 2,
            question: '(2) They are going to see a comedy.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'FALSE',
            points: 1.33
          },
          {
            id: 'l1-ex1-q3',
            number: 3,
            question: '(3) The movie starts at five.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'TRUE',
            points: 1.33
          },
          {
            id: 'l1-ex1-q4',
            number: 4,
            question: '(4) The movie is playing at the Circle on Bleeker Street.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'FALSE',
            points: 1.33
          },
          {
            id: 'l1-ex1-q5',
            number: 5,
            question: '(5) The ABC is near the university.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'FALSE',
            points: 1.33
          },
          {
            id: 'l1-ex1-q6',
            number: 6,
            question: '(6) They are going to meet at the cinema.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'FALSE',
            points: 1.33
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 - Questions 7-11 (Weekend Activities Chart)',
        instructions: 'Listen to the dialogues and complete the chart with the missing information about when people go, what they do and where they go.',
        audioScriptTitle: 'Audio Text 2: Leisure Dialogues – Flushing Meadow, Central Park & Prospect Park (Official Recording)',
        audioScript: `Narrator: Listening. Listen to find out when the people go, what they do, and where they go.

Dialogue 1:
Man: What'll we do on Sunday?
Woman: I don't know, what do you want to do?
Man: What about playing tennis?
Woman: Okay, let's go to Flushing Meadow Park.

Dialogue 2:
Woman: Thank goodness, at last it's Saturday. What can we do today?
Man: How about riding bikes in Central Park?
Woman: It's a good idea, but Central Park is too far to walk.
Man: Yeah, but we can take the subway. The park is really beautiful in the spring.
Woman: Okay, let's go to Central Park then.

Dialogue 3:
Man 1: There's a good football game on Wednesday.
Man 2: That's tomorrow. Where's the game?
Man 1: At Prospect Park in Brooklyn.
Man 2: What time is the game?
Man 1: At 4 o'clock.
Man 2: That's great, see you at 3:30 then.`,
        tableData: {
          columns: ['DIALOGUE', 'WHEN THEY GO', 'WHAT THEY DO', 'WHERE THEY GO'],
          rows: [
            {
              label: '1st DIALOGUE',
              cells: [
                { text: 'Sunday' },
                { questionId: 'l1-ex2-q7', placeholder: '(7) What they do...' },
                { text: 'Flashing Meadow Park' }
              ]
            },
            {
              label: '2nd DIALOGUE',
              cells: [
                { questionId: 'l1-ex2-q8', placeholder: '(8) When they go...' },
                { text: 'riding bikes' },
                { questionId: 'l1-ex2-q9', placeholder: '(9) Where they go...' }
              ]
            },
            {
              label: '3rd DIALOGUE',
              cells: [
                { questionId: 'l1-ex2-q10', placeholder: '(10) When they go...' },
                { questionId: 'l1-ex2-q11', placeholder: '(11) What they do...' },
                { text: 'Prospect Park' }
              ]
            }
          ]
        },
        questions: [
          {
            id: 'l1-ex2-q7',
            number: 7,
            question: '(7) 1st Dialogue - What they do:',
            type: 'fill-blank',
            correctAnswer: 'play tennis',
            acceptableAnswers: ['play tennis', 'tennis', 'playing tennis'],
            points: 1.33
          },
          {
            id: 'l1-ex2-q8',
            number: 8,
            question: '(8) 2nd Dialogue - When they go:',
            type: 'fill-blank',
            correctAnswer: 'Saturday',
            acceptableAnswers: ['saturday', 'on saturday'],
            points: 1.33
          },
          {
            id: 'l1-ex2-q9',
            number: 9,
            question: '(9) 2nd Dialogue - Where they go:',
            type: 'fill-blank',
            correctAnswer: 'Central Park',
            acceptableAnswers: ['central park', 'central park.'],
            points: 1.33
          },
          {
            id: 'l1-ex2-q10',
            number: 10,
            question: '(10) 3rd Dialogue - When they go:',
            type: 'fill-blank',
            correctAnswer: 'Wednesday',
            acceptableAnswers: ['wednesday', 'wesnesday', 'on wednesday'],
            points: 1.33
          },
          {
            id: 'l1-ex2-q11',
            number: 11,
            question: '(11) 3rd Dialogue - What they do:',
            type: 'fill-blank',
            correctAnswer: 'football game',
            acceptableAnswers: ['football game', 'football', 'soccer game', 'watch football game'],
            points: 1.33
          }
        ]
      },
      {
        exerciseNumber: 3,
        title: 'Exercise 3 - Questions 12-15 (Sports Radio Broadcast)',
        instructions: 'Listen and circle the correct option (a, b or c).',
        audioScriptTitle: 'Audio Text 3: Sports Radio Broadcast – Live Match Kansas City vs Dallas (Official Recording)',
        audioScript: `Narrator: Listening.
[Sound: Stadium whistle and crowd cheering in background]

Commentator: It's the 25th minute, second half. Kansas City leads two goals to one. Jimmy Case runs on the right. He's fast, crosses, but the Kansas City goalie jumps and takes the ball. 
Dallas is trying, but they just can't get going. KC is surprisingly strong. 
Now McDermott has the ball, centre field. He passes to Case. Yes! Case is moving fast! He's there! Goal! Goal! It's a great goal! 
Kansas City two, Dallas two!`,
        questions: [
          {
            id: 'l1-ex3-q12',
            number: 12,
            question: '(12) This is a .................................................',
            type: 'multiple-choice',
            options: ['a. phone conversation', 'b. radio broadcast', 'c. movie review'],
            correctAnswer: 'b',
            points: 1.33
          },
          {
            id: 'l1-ex3-q13',
            number: 13,
            question: '(13) This is a ...................................................',
            type: 'multiple-choice',
            options: ['a. tennis game', 'b. soccer game', 'c. baseball game'],
            correctAnswer: 'b',
            points: 1.33
          },
          {
            id: 'l1-ex3-q14',
            number: 14,
            question: '(14) The teams are ............................................',
            type: 'multiple-choice',
            options: ['a. Dallas-Kansas', 'b. Dallas-Phoenix', 'c. Houston-Kansas'],
            correctAnswer: 'a',
            points: 1.33
          },
          {
            id: 'l1-ex3-q15',
            number: 15,
            question: '(15) The final score is ...........................................',
            type: 'multiple-choice',
            options: ['a. 2-1', 'b. 1-1', 'c. 2-2'],
            correctAnswer: 'c',
            points: 1.33
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 2
  // =========================================================================
  2: {
    levelNumber: 2,
    levelRoman: 'II',
    title: 'Modelo de Examen de Inglés – Nivel II',
    part: 'Parte 1 – Comprensión Auditiva (Part 1 – Listening Comprehension)',
    timeAllowedMinutes: 15,
    totalPoints: 20,
    pointPerQuestionText: '1.33 point each correct answer. Total: 20 points.',
    answerKeyNotes: 'Recognizable spelling is accepted, except in numbers 11 and 15.',
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 - Questions 1-5 (Five Short Conversations)',
        instructions: 'You will hear five short conversations. You will hear each conversation twice. There is one question for each conversation. Put a tick under the right answer (A, B or C).',
        audioScriptTitle: 'Audio Text 1: Five Short Daily Conversations',
        audioScript: `[Example 0]
Man: How was the meeting today, Karen?
Woman: Well, there were only 3 people at the start, but then another 10 arrived, so in total we had 30 participants in the conference room.
Answer is C (30).

[Conversation 1]
Man: Are you taking a holiday abroad this summer, Clara? Have you booked Italy or Canada again?
Woman: We thought about Canada, but the flights were so expensive, and Italy was fully booked. So this year we decided on Turkey! We found a lovely resort on the Mediterranean coast.

[Conversation 2]
Woman: Did you make it to your doctor's appointment this afternoon?
Man: Barely! My appointment was scheduled for two-thirty, but traffic was terrible, so I rushed through the door right at half past two.

[Conversation 3]
Man: What's the weather forecast for our trip to the mountain cabin tomorrow?
Woman: Pack your heaviest winter coats and boots! The forecaster warned that heavy snow is coming, with freezing blizzards all across the region.

[Conversation 4]
Woman: Excuse me, is there a large supermarket nearby?
Man: Yes, there's one down the main road. If you keep driving straight ahead, you will see the blue road sign showing the supermarket is exactly 3 kilometres away.

[Conversation 5]
Man: Look at these dining tables, Sally. Do you like the round pedestal one or the square modern one?
Woman: Neither of those. I really like that sturdy rectangular wooden table with the four straight legs. It will match our dining room chairs perfectly.`,
        questions: [
          {
            id: 'l2-ex1-q1',
            number: 1,
            question: '1. Where is the woman going to go on holiday this year?',
            type: 'multiple-choice',
            options: ['A. CANADA', 'B. ITALY', 'C. TURKEY'],
            correctAnswer: 'C',
            points: 1.33
          },
          {
            id: 'l2-ex1-q2',
            number: 2,
            question: '2. What time was the man’s appointment?',
            type: 'multiple-choice',
            options: ['A. 2:00', 'B. 2:30 (Half past two)', 'C. 3:00'],
            correctAnswer: 'B',
            points: 1.33
          },
          {
            id: 'l2-ex1-q3',
            number: 3,
            question: '3. What will the weather be like?',
            type: 'multiple-choice',
            options: ['A. Heavy snow / winter blizzard', 'B. Sunny and clear', 'C. Rain with umbrella'],
            correctAnswer: 'A',
            points: 1.33
          },
          {
            id: 'l2-ex1-q4',
            number: 4,
            question: '4. How far is the nearest supermarket?',
            type: 'multiple-choice',
            options: ['A. 5 Km', 'B. 3 Km', 'C. 1 Km'],
            correctAnswer: 'B',
            points: 1.33
          },
          {
            id: 'l2-ex1-q5',
            number: 5,
            question: '5. Which table does Sally like?',
            type: 'multiple-choice',
            options: ['A. Round round-top pedestal table', 'B. Diamond-square pedestal table', 'C. Rectangular 4-legged wooden table'],
            correctAnswer: 'C',
            points: 1.33
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 - Questions 6-10 (Buying a Computer Game)',
        instructions: 'Listen to Jenny talking to Mark about buying a computer game. For questions 6-10, tick (✓) A, B or C. You will hear the conversation twice.',
        audioScriptTitle: 'Audio Text 2: Jenny and Mark – Computer Game Purchase',
        audioScript: `Jenny: Hi Mark! What are you playing on your PC?
Mark: Oh hi Jenny! It's a new strategy simulation game called "City 2010". It's brilliant!
Jenny: Can my little nephew play it? He's six years old.
Mark: No, the game is quite complex. It's not good for children under eight years of age.
Jenny: I see. Where did you buy it?
Mark: I bought it at Black's PC shop. You know, their main branch is in London, not Cambridge or Peterstown.
Jenny: Oh, London? Do you know the exact address of the shop?
Mark: Yes, it's located at 29 Marsden Street, just off the high street. Not Hunter Road or Walker Street.
Jenny: Is there any special offer right now?
Mark: Yes! If you buy before the weekend, they give you a free bonus expansion game. But hurry, because the last day you can get the free game is Friday!
Jenny: And how much does the computer game cost?
Mark: It normally costs £48, but on special discount this week it only costs £26! Quite a bargain compared to the usual £30 or £48!
Jenny: That's great! Thanks Mark.`,
        questions: [
          {
            id: 'l2-ex2-q6',
            number: 6,
            question: '6. The game is not good for people under:',
            type: 'multiple-choice',
            options: ['A. eight.', 'B. City 2001', 'C. City 2100'],
            correctAnswer: 'A',
            points: 1.33
          },
          {
            id: 'l2-ex2-q7',
            number: 7,
            question: "7. Black's PC shop is in:",
            type: 'multiple-choice',
            options: ['A. Cambridge.', 'B. London.', 'C. Peterstown.'],
            correctAnswer: 'B',
            points: 1.33
          },
          {
            id: 'l2-ex2-q8',
            number: 8,
            question: '8. The address of the shop is:',
            type: 'multiple-choice',
            options: ['A. 29 Hunter Road.', 'B. 29 Walker Street.', 'C. 29 Marsden Street.'],
            correctAnswer: 'C',
            points: 1.33
          },
          {
            id: 'l2-ex2-q9',
            number: 9,
            question: '9. The last day you can get a free game is:',
            type: 'multiple-choice',
            options: ['A. Monday.', 'B. Thursday.', 'C. Friday.'],
            correctAnswer: 'C',
            points: 1.33
          },
          {
            id: 'l2-ex2-q10',
            number: 10,
            question: '10. The computer game costs:',
            type: 'multiple-choice',
            options: ['A. £ 26.', 'B. £ 30.', 'C. £ 48.'],
            correctAnswer: 'A',
            points: 1.33
          }
        ]
      },
      {
        exerciseNumber: 3,
        title: 'Exercise 3 - Questions 11-15 (Train Information Newcastle)',
        instructions: 'You will hear a man asking for information about a train. Listen and complete questions 11-15. You will hear the conversation twice.',
        audioScriptTitle: 'Audio Text 3: Train Enquiry to Newcastle',
        audioScript: `Travel Clerk: Good morning, National Rail travel agency, how can I help you?
Man: Hello, I'd like some information about trains to Newcastle, please.
Travel Clerk: Certainly. What day of the week would you like to travel?
Man: I need to go on Tuesday. That's Tuesday next week.
Travel Clerk: Let me check... On Tuesday, the direct morning express train leaves at 11:30. That's half past eleven in the morning.
Man: Half past eleven, that's fine. And how much does a return ticket cost?
Travel Clerk: A standard return ticket to Newcastle costs forty pounds (£40).
Man: Forty pounds. And is there any hot food served on board the train?
Travel Clerk: There is a buffet car on the train serving drinks and sandwiches.
Man: Excellent. Where is your agency located so I can pick up the printed tickets?
Travel Clerk: Our central office is located at 22 Mallet Street. That is spelt M-A-L-L-E-T Street.
Man: 22 Mallet Street. Thank you very much!
Travel Clerk: You're welcome, sir. Have a good journey.`,
        questions: [
          {
            id: 'l2-ex3-q11',
            number: 11,
            question: 'Day of Journey (11):',
            type: 'fill-blank',
            correctAnswer: 'Tuesday',
            acceptableAnswers: ['tuesday'],
            points: 1.33
          },
          {
            id: 'l2-ex3-q12',
            number: 12,
            question: 'Train leaves at (12):',
            type: 'fill-blank',
            correctAnswer: '11.30',
            acceptableAnswers: ['11.30', '11:30', 'half past eleven', 'eleven thirty'],
            points: 1.33
          },
          {
            id: 'l2-ex3-q13',
            number: 13,
            question: 'Return ticket costs: £ (13):',
            type: 'fill-blank',
            correctAnswer: '40',
            acceptableAnswers: ['40', 'forty', '£40', 'forty pounds'],
            points: 1.33
          },
          {
            id: 'l2-ex3-q14',
            number: 14,
            question: 'Food on train: Drinks and (14):',
            type: 'fill-blank',
            correctAnswer: 'sandwiches',
            acceptableAnswers: ['sandwiches', 'sandwich', 'sandwich(es)'],
            points: 1.33
          },
          {
            id: 'l2-ex3-q15',
            number: 15,
            question: 'Address of Travel Agency: 22 (15) Street:',
            type: 'fill-blank',
            correctAnswer: 'Mallet',
            acceptableAnswers: ['mallet', 'Mallet'],
            points: 1.33
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 3
  // =========================================================================
  3: {
    levelNumber: 3,
    levelRoman: 'III',
    title: 'Modelo de Examen de Inglés – Nivel III',
    part: 'Parte 1 – Comprensión Auditiva (Part 1 – Listening Comprehension)',
    timeAllowedMinutes: 20,
    totalPoints: 20,
    pointPerQuestionText: '1 point each correct answer. Total: 20 points.',
    answerKeyNotes: 'Questions 17 and 19: any of the listed options are accepted.',
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 - Questions 1-7 (Three Different Commercials)',
        instructions: 'Listen to three different commercials and circle the correct option: A, B or C. You will hear the recording twice. After that you will have a minute to complete your answers.',
        audioScriptTitle: 'Audio Text 1: Three Radio Commercials',
        audioScript: `[First commercial]
Announcer: Are you tired of standard dental care? Introducing Polydent! The revolutionary new toothpaste recommended by leading British dentists. Polydent now features an advanced new formula enriched with active minerals to protect your enamel and keep your gums healthy all day long. And check out our new economy family size tube: it gives you the same premium dental care, but it is substantially less expensive than the regular packages! Switch to Polydent today!

[Second commercial]
Woman: My hair used to be dull and lifeless after long days at work. But then my salon stylist introduced me to Silk-Pro Hair Shampoo! Silk-Pro isn't just an ordinary oil or lotion; it's an intensely nourishing shampoo infused with botanical extracts. And look at our newly redesigned bottle on store shelves: you'll spot it immediately because of its striking emerald green colour! Look for the bright green bottle in your nearest pharmacy.

[Third commercial]
Announcer: Stains on your family's clothes after outdoor activities? Don't worry! Ultra-Clean washing powder dissolves tough grease, mud, and dirt in cold water without damaging fabrics. Ultra-Clean is the high-efficiency washing powder that cleans deeper and smells fresher. Right now at all major supermarkets, nine dollars and ninety-nine cents ($9.99) is all you have to pay for our value-packed large size pack! Yes, get the large size pack of Ultra-Clean for just $9.99 this week only!`,
        questions: [
          {
            id: 'l3-ex1-q1',
            number: 1,
            question: '1) First commercial: They are advertising ………………',
            type: 'multiple-choice',
            options: ['A - an ingredient', 'B - a toothpaste', 'C - a toothbrush'],
            correctAnswer: 'B',
            points: 1
          },
          {
            id: 'l3-ex1-q2',
            number: 2,
            question: '2) Polydent has …………………….',
            type: 'multiple-choice',
            options: ['A - a new formula', 'B - a new taste', 'C - a new name'],
            correctAnswer: 'A',
            points: 1
          },
          {
            id: 'l3-ex1-q3',
            number: 3,
            question: '3) The new economy size is …………………',
            type: 'multiple-choice',
            options: ['A - bigger', 'B - less expensive', 'C - smaller'],
            correctAnswer: 'B',
            points: 1
          },
          {
            id: 'l3-ex1-q4',
            number: 4,
            question: '4) Second commercial: They are advertising ………………………….',
            type: 'multiple-choice',
            options: ['A - an oil', 'B - a hairdresser', 'C - a shampoo'],
            correctAnswer: 'C',
            points: 1
          },
          {
            id: 'l3-ex1-q5',
            number: 5,
            question: '5) The bottle is different because of ……………..',
            type: 'multiple-choice',
            options: ['A - the colour', 'B - the size', 'C - the shape'],
            correctAnswer: 'A',
            points: 1
          },
          {
            id: 'l3-ex1-q6',
            number: 6,
            question: '6) Third commercial: They are advertising …………………….',
            type: 'multiple-choice',
            options: ['A - a skin powder', 'B - a washing powder', 'C - a baking powder'],
            correctAnswer: 'B',
            points: 1
          },
          {
            id: 'l3-ex1-q7',
            number: 7,
            question: '7) $9.99 is what you have to pay for ………………',
            type: 'multiple-choice',
            options: ['A - a small size pack', 'B - a medium size pack', 'C - a large size pack'],
            correctAnswer: 'C',
            points: 1
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 - Questions 8-12 (An Important Personal Experience)',
        instructions: 'You will listen to somebody speaking about an important experience. Say if the following sentences are TRUE or FALSE. You will hear the recording twice and then you will have a minute to complete your answers.',
        audioScriptTitle: 'Audio Text 2: Monologue – How I Met My Girlfriend',
        audioScript: `Speaker: "People often ask me how I first met my girlfriend, Emma. Well, it was a rainy Friday evening in autumn. I didn't meet her at a bus stop or on the street; I was actually walking into the Royal Victoria Theatre to see a play. We had both arrived completely on our own, without any friends. When I found my seat in row G, there she was, sitting right next to me! Yes, our tickets were booked side by side. Before the performance began, she realized she didn't have a theatre programme to read about the actors. Luckily, I had bought two copies at the entrance kiosk, so I gave one to her. We started chatting during the interval, had coffee after the show, and we've been dating happily ever since that night."`,
        questions: [
          {
            id: 'l3-ex2-q8',
            number: 8,
            question: '8 - The first time he saw his girlfriend she was waiting for the bus.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'FALSE',
            points: 1
          },
          {
            id: 'l3-ex2-q9',
            number: 9,
            question: '9 - Both of them were alone.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'TRUE',
            points: 1
          },
          {
            id: 'l3-ex2-q10',
            number: 10,
            question: '10 - They sat one beside the other in the theatre.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'TRUE',
            points: 1
          },
          {
            id: 'l3-ex2-q11',
            number: 11,
            question: '11 - She didn’t have a programme and he didn’t either.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'FALSE',
            points: 1
          },
          {
            id: 'l3-ex2-q12',
            number: 12,
            question: '12 - They’ve been dating since then.',
            type: 'true-false',
            options: ['TRUE', 'FALSE'],
            correctAnswer: 'TRUE',
            points: 1
          }
        ]
      },
      {
        exerciseNumber: 3,
        title: 'Exercise 3 - Questions 13-20 (Answering Machine Messages – Birthday Party)',
        instructions: 'Kevin invited his friends to his birthday party. Listen to the messages they left on his answering machine and fill in the grid using only one or two words in each case. You will hear the recording twice.',
        audioScriptTitle: "Audio Text 3: Answering Machine Messages for Kevin's Party",
        audioScript: `[Answering machine beep]
Message 1 - Janet: "Hi Kevin, it's Janet. Happy early birthday! I'm so sorry, but I won't be able to come to your party on Saturday. My sister asked me urgently to babysit my little nephew that evening. Have a wonderful time!"
[Beep]
Message 2 - James: "Hey Kevin, James here. Thanks for the invitation, mate! Count me in, I will definitely be there to celebrate with you! See you Saturday!"
[Beep]
Message 3 - Carol: "Hello Kevin, this is Carol. I'm afraid I can't make it to your birthday. I was assigned an overnight nursing shift at the hospital, so I have to work all evening. Catch up soon!"
[Beep]
Message 4 - Tom: "Kevin, Tom speaking. Sorry buddy, but I can't attend. My company is flying me to France for a major medical conference in Paris this weekend. Have a drink for me!"
[Beep]
Message 5 - Susan: "Hi Kevin! Susan calling. I'd love to come to your party! I've cleared my schedule and I'll see you on Saturday evening!"
[Beep]
Message 6 - Brian: "Hi Kevin, Brian here. I'm really not sure if I can make it yet. I have a critical university assignment due on Sunday, and if I don't finish my assignment in time, I'll have to stay home and study. I'll let you know as soon as possible."`,
        questions: [
          {
            id: 'l3-ex3-q13',
            number: 13,
            question: "1st) Janet – YES / NO / NOT SURE:",
            type: 'fill-blank',
            correctAnswer: 'NO',
            acceptableAnswers: ['no', 'NO'],
            points: 1
          },
          {
            id: 'l3-ex3-q14',
            number: 14,
            question: "1st) Janet – IF NO, WHAT EXCUSE?:",
            type: 'fill-blank',
            correctAnswer: 'Babysit',
            acceptableAnswers: ['babysit', 'babysitting', 'babysitter'],
            points: 1
          },
          {
            id: 'l3-ex3-q15',
            number: 15,
            question: "2nd) James – YES / NO / NOT SURE:",
            type: 'fill-blank',
            correctAnswer: 'YES',
            acceptableAnswers: ['yes', 'YES'],
            points: 1
          },
          {
            id: 'l3-ex3-q16',
            number: 16,
            question: "3rd) Carol – YES / NO / NOT SURE:",
            type: 'fill-blank',
            correctAnswer: 'NO',
            acceptableAnswers: ['no', 'NO'],
            points: 1
          },
          {
            id: 'l3-ex3-q17',
            number: 17,
            question: "3rd) Carol – IF NO, WHAT EXCUSE?:",
            type: 'fill-blank',
            correctAnswer: 'Work/Hospital',
            acceptableAnswers: ['work', 'hospital', 'work/hospital', 'working', 'at hospital'],
            points: 1
          },
          {
            id: 'l3-ex3-q18',
            number: 18,
            question: "4th) Tom – YES / NO / NOT SURE:",
            type: 'fill-blank',
            correctAnswer: 'NO',
            acceptableAnswers: ['no', 'NO'],
            points: 1
          },
          {
            id: 'l3-ex3-q19',
            number: 19,
            question: "4th) Tom – IF NO, WHAT EXCUSE?:",
            type: 'fill-blank',
            correctAnswer: 'France/Paris/Conference',
            acceptableAnswers: ['france', 'paris', 'conference', 'france/paris/conference', 'trip to france'],
            points: 1
          },
          {
            id: 'l3-ex3-q20',
            number: 20,
            question: "5th) Susan – YES / NO / NOT SURE:",
            type: 'fill-blank',
            correctAnswer: 'YES',
            acceptableAnswers: ['yes', 'YES'],
            points: 1
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 4
  // =========================================================================
  4: {
    levelNumber: 4,
    levelRoman: 'IV',
    title: 'Modelo de Examen de Inglés – Nivel IV',
    part: 'Parte 1 – Comprensión Auditiva (Part 1 – Listening Comprehension)',
    timeAllowedMinutes: 20,
    totalPoints: 20,
    pointPerQuestionText: '1.42 point each correct answer. Total: 20 points.',
    exercises: [
      {
        exerciseNumber: 1,
        title: "Exercise 1 - Questions 1-6 (Summer Camp Activities Briefing)",
        instructions: "Look at the questions for this part. You will hear a woman giving details about the week's activities at a summer camp. Put a tick (✓) in the correct box for each question. At the end the recording is repeated.",
        audioScriptTitle: "Audio Text 1: Summer Camp Coordinator Briefing",
        audioScript: `Camp Coordinator: "Good morning everyone, and welcome to Highland Adventure Summer Camp! Here is the briefing for this week's scheduled activities.
First, for those registered for rock climbing: please do not wait by the pool or car park; the rock climbing class meets directly in the gym, where instructors will inspect your harnesses.
Regarding meal times: lunch starts promptly at twelve-thirty (12:30) every day. Please do not queue up early.
Now, concerning the horse riding group: you will be taken to the stables in minibuses, but after your lesson, the entire group returns by bus for lunch right at the dining hall.
For the evening entertainment, please note that disco dance classes are held in the drama hall, which has a specialized sprung wooden floor and sound system.
If at any point you want to change your course or swap an activity, you must inform your teacher directly before tomorrow morning.
Finally, on catering: if we have good weather, everyone is given a picnic lunch to enjoy on the grassy lawns by the lake. Thank you, and enjoy your week!"`,
        questions: [
          {
            id: 'l4-ex1-q1',
            number: 1,
            question: '1) The rock climbing class meets',
            type: 'multiple-choice',
            options: ['A by the pool.', 'B in the car park.', 'C by the tennis courts.', 'D in the gym.'],
            correctAnswer: 'D',
            points: 1.42
          },
          {
            id: 'l4-ex1-q2',
            number: 2,
            question: '2) Lunch starts at',
            type: 'multiple-choice',
            options: ['A 12.00.', 'B 12.30.', 'C 13.00.', 'D 13.30.'],
            correctAnswer: 'B',
            points: 1.42
          },
          {
            id: 'l4-ex1-q3',
            number: 3,
            question: '3) The horse riding group',
            type: 'multiple-choice',
            options: ['A leaves from the bus stop.', 'B arrives back at the main gate.', 'C has to walk back from the lesson.', 'D returns by bus for lunch.'],
            correctAnswer: 'D',
            points: 1.42
          },
          {
            id: 'l4-ex1-q4',
            number: 4,
            question: '4) Disco dance classes are held in the',
            type: 'multiple-choice',
            options: ['A open air.', 'B practice rooms.', 'C music studio.', 'D drama hall.'],
            correctAnswer: 'D',
            points: 1.42
          },
          {
            id: 'l4-ex1-q5',
            number: 5,
            question: '5) If you want to change your course you must',
            type: 'multiple-choice',
            options: ['A sign another form.', 'B inform your teacher.', 'C tell your group leader.', 'D wait until the evening.'],
            correctAnswer: 'B',
            points: 1.42
          },
          {
            id: 'l4-ex1-q6',
            number: 6,
            question: '6) In good weather',
            type: 'multiple-choice',
            options: ['A everyone is given a picnic lunch.', 'B lunch is cooked out of doors.', 'C everyone can take their trays outside.', 'D group leaders bring a picnic.'],
            correctAnswer: 'A',
            points: 1.42
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 – Questions 7-14 (Radio 749 Shop Window)',
        instructions: 'Look at the notes about some things which are being advertised for sale on a radio programme. Some information is missing. You will hear different people talking about what they want to sell. Fill in the missing information in the numbered spaces.',
        audioScriptTitle: 'Audio Text 2: Radio 749 Classifieds – Items for Sale',
        audioScript: `Radio Host: Welcome back to Radio 749 Shop Window, where local listeners call in to sell pre-owned items! Let's go to our first caller on line one.
First caller (Isabel): Hello, this is Isabel. I want to sell an elegant silk designer item: a long dress that I bought for a formal gala. I originally paid £500 for it, but I only want £200. It is a European size 40. Anyone interested can ring me at 491268.

Radio Host: Thank you Isabel. Next caller on line two is Tony. What are you selling Tony?
Second caller (Tony): Hi there! I'm selling a vintage radio cassette player. It's in full working order with twin speakers. I'm looking for around £65. Interested buyers can come to my home address at 21 Walker Street. Please call round after 6 p.m.

Radio Host: Fantastic. And our third caller today is Ted on line three.
Third caller (Ted): Hello! I want to sell my specialized mountain bike. It has twenty-one gears and front suspension. The condition is absolutely brilliant, practically like new! I'm asking £340 for it. The frame colours are distinctive: blue and gold. You can ring me on 73155 any time of day.`,
        questions: [
          {
            id: 'l4-ex2-q7',
            number: 7,
            question: 'First caller - Isabel: Wants to sell (7):',
            type: 'fill-blank',
            correctAnswer: 'a long dress',
            acceptableAnswers: ['a long dress', 'long dress', 'dress'],
            points: 1.42
          },
          {
            id: 'l4-ex2-q8',
            number: 8,
            question: 'Size (8):',
            type: 'fill-blank',
            correctAnswer: '40',
            acceptableAnswers: ['40'],
            points: 1.42
          },
          {
            id: 'l4-ex2-q9',
            number: 9,
            question: 'Phone number to ring (9):',
            type: 'fill-blank',
            correctAnswer: '491268',
            acceptableAnswers: ['491268'],
            points: 1.42
          },
          {
            id: 'l4-ex2-q10',
            number: 10,
            question: 'Second caller - Tony: Selling (10):',
            type: 'fill-blank',
            correctAnswer: 'radio cassette ( player )',
            acceptableAnswers: ['radio cassette ( player )', 'radio cassette', 'radio cassette player'],
            points: 1.42
          },
          {
            id: 'l4-ex2-q11',
            number: 11,
            question: 'Address: 21 (11):',
            type: 'fill-blank',
            correctAnswer: 'Walker Street',
            acceptableAnswers: ['walker street', 'Walker Street', 'Walker'],
            points: 1.42
          },
          {
            id: 'l4-ex2-q12',
            number: 12,
            question: 'Third caller - Ted: Wants to sell his (12):',
            type: 'fill-blank',
            correctAnswer: 'mountain bike',
            acceptableAnswers: ['mountain bike', 'bike'],
            points: 1.42
          },
          {
            id: 'l4-ex2-q13',
            number: 13,
            question: 'Condition (13):',
            type: 'fill-blank',
            correctAnswer: 'brilliant',
            acceptableAnswers: ['brilliant'],
            points: 1.42
          },
          {
            id: 'l4-ex2-q14',
            number: 14,
            question: 'Colours (14):',
            type: 'fill-blank',
            correctAnswer: 'blue and gold',
            acceptableAnswers: ['blue and gold', 'gold and blue'],
            points: 1.42
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 5
  // =========================================================================
  5: {
    levelNumber: 5,
    levelRoman: 'V',
    title: 'Modelo de Examen de Inglés – Nivel V',
    part: 'Parte 1 – Comprensión Auditiva (Part 1 – Listening Comprehension)',
    timeAllowedMinutes: 25,
    totalPoints: 20,
    pointPerQuestionText: '1 point each correct answer. Total: 20 points.',
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 - Questions 1-8 (Eight Different Situations)',
        instructions: 'You will hear people talking in eight different situations. For questions 1-8, choose the best answer A, B or C. You will hear each conversation twice.',
        audioScriptTitle: 'Audio Text 1: Eight Distinct Sociolinguistic Situations',
        audioScript: `[Situation 1]
Presenter: "Welcome to today's outside broadcast of Splashdown Live! As you can hear from the splashing and echoing cheers around me, the municipal swimming pool is packed with competitors preparing for the national freestyle heats!"

[Situation 2]
Girl: "Mum, remember last week you promised we could travel down to London to visit the museums and do some shopping?"
Mother: "Yes darling, I agreed we could go to London for the weekend, but we're definitely staying with Aunt Sarah rather than booking an expensive hotel."

[Situation 3]
Radio Ad: "The Royal Philharmonic Orchestra will perform Beethoven's Ninth Symphony this Saturday at Symphony Hall. What makes this particular evening unique? For the first time in ten years, there will be full choral singers performing alongside the brass and strings!"

[Situation 4]
Woman: "Looking back at the years of rigorous training and the sacrifices I had to make for my career, I don't feel bitter or regretful at all. In fact, standing here looking at what our team accomplished, I feel immense satisfaction."

[Situation 5]
Man (on phone): "Hello, is this the local council emergency helpline? I'm calling from Mill Lane. Two heavy horses and a flock of sheep have broken through a fence and escaped onto the main road; they are creating a serious hazard for motorists!"

[Situation 6]
TV Reporter: "Here outside the headquarters of the Industrial Commerce Union, shareholders have been gathering all morning. In just a few minutes, I will be joined live by the chief executive businessman responsible for restructuring the company."

[Situation 7]
Boy: "For the past three months, my scout troop and I have volunteered every Saturday planting native trees and restoring the wetlands at the local nature reserve. It's rewarding to see birds returning to the reserve."

[Situation 8]
Woman (outside flats): "Good afternoon! If you step right this way through the main entrance hall, I can show you the luxury two-bedroom apartments currently available for purchase in this newly completed development. As the sole listing agent for this property, I can answer all pricing questions."`,
        questions: [
          {
            id: 'l5-ex1-q1',
            number: 1,
            question: '1- You will hear someone introducing a programme on the radio. Where is he?',
            type: 'multiple-choice',
            options: ['a- a swimming pool', 'b- a sports hall', 'c- a football ground.'],
            correctAnswer: 'a',
            points: 1
          },
          {
            id: 'l5-ex1-q2',
            number: 2,
            question: '2- You will hear this girl talking to her mother. What plan had her mother agreed to?',
            type: 'multiple-choice',
            options: ['a- visiting a friend', 'b- going to London', 'c- staying in a hotel.'],
            correctAnswer: 'b',
            points: 1
          },
          {
            id: 'l5-ex1-q3',
            number: 3,
            question: '3- You will hear this advertisement for a concert. What is unusual about it?',
            type: 'multiple-choice',
            options: ['a- it´s on a Saturday', 'b- it´s in a different place', 'c- there will be singers in it.'],
            correctAnswer: 'c',
            points: 1
          },
          {
            id: 'l5-ex1-q4',
            number: 4,
            question: '4- You hear this woman talking about herself. What does she feel?',
            type: 'multiple-choice',
            options: ['a- regret', 'b- pride', 'c- satisfaction'],
            correctAnswer: 'c',
            points: 1
          },
          {
            id: 'l5-ex1-q5',
            number: 5,
            question: '5- Listen to this man on the phone. Why is he calling?',
            type: 'multiple-choice',
            options: ['a- to apologise for being late', 'b- to report escaped animals', 'c- to offer his help.'],
            correctAnswer: 'b',
            points: 1
          },
          {
            id: 'l5-ex1-q6',
            number: 6,
            question: '6- You will hear this reporter on the television. Who is he going to talk to?',
            type: 'multiple-choice',
            options: ['a- a businessman', 'b- a politician', 'c- a shopper'],
            correctAnswer: 'a',
            points: 1
          },
          {
            id: 'l5-ex1-q7',
            number: 7,
            question: '7- This boy is talking about something he´s been working on. What is it?',
            type: 'multiple-choice',
            options: ['a- a garden', 'b- a water sports center', 'c- a nature reserve.'],
            correctAnswer: 'c',
            points: 1
          },
          {
            id: 'l5-ex1-q8',
            number: 8,
            question: '8- You hear this woman talking to someone outside a block of flats. What is her job?',
            type: 'multiple-choice',
            options: ['a- She sells property', 'b- She is a tourist guide', 'c- She inspects building work.'],
            correctAnswer: 'a',
            points: 1
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 - Questions 9-20 (Radio Station Monthly Schedule)',
        instructions: 'You will hear two radio presenters talking about some of the programmes for the coming month. For questions 9-20, complete the information. You will need to write a word or a phrase.',
        audioScriptTitle: 'Audio Text 2: Radio Presenters – Upcoming Monthly Highlights',
        audioScript: `Presenter 1: Welcome to our preview of next month's programming highlights here on Radio Central!
Presenter 2: Starting on Monday the 6th, we have a wonderful exclusive interview with Sir Elton John talking intimately about his early career in London pubs before finding international fame.
Presenter 1: Then on Wednesday the 8th, listeners can win a holiday prize simply by calling in and guessing the identity of our special mystery host!
Presenter 2: On Thursday the 9th, tune in for travel documentarian Sez U's exciting visit to the Far East, exploring culinary traditions across Asia.
Presenter 1: Moving to Friday the 17th, we broadcast an insightful report from the USA investigating the daily lifestyle of university students.
Presenter 2: On Monday the 20th, our consumer segment explains how young travellers can save money by using student travel cards while getting around Europe on rail networks.
Presenter 1: On Friday the 24th, don't miss an eye-opening programme about the grown-up children of former rock musicians and big music names, revealing that these famous rockstars could actually be very strict parents at home!
Presenter 2: On Monday the 27th, we celebrate vibrant Caribbean culture with traditional reggae and folk music from Jamaica.
Presenter 1: And our grand monthly competition prize is an all-inclusive trip to Brazil!
Presenter 2: On Tuesday the 28th, our cultural correspondent delivers an eccentric report from a shoe museum in Toronto.
Presenter 1: And finally on Wednesday the 29th, our fashion hour showcases glamorous new fashions for people who go dancing in clubs! Be sure to tune in!`,
        questions: [
          {
            id: 'l5-ex2-q9',
            number: 9,
            question: 'Monday 6th: Elton John talking about his (9):',
            type: 'fill-blank',
            correctAnswer: 'early career',
            acceptableAnswers: ['early career'],
            points: 1
          },
          {
            id: 'l5-ex2-q10',
            number: 10,
            question: 'Wednesday 8th: Win a prize by guessing name of the (10):',
            type: 'fill-blank',
            correctAnswer: 'mystery host',
            acceptableAnswers: ['mystery host'],
            points: 1
          },
          {
            id: 'l5-ex2-q11',
            number: 11,
            question: "Thursday 9th: Sez U´s visit to (11):",
            type: 'fill-blank',
            correctAnswer: '(the) Far East',
            acceptableAnswers: ['Far East', 'the Far East', '(the) Far East', 'the far east'],
            points: 1
          },
          {
            id: 'l5-ex2-q12',
            number: 12,
            question: 'Friday 17th: Report from USA on lifestyle of (12):',
            type: 'fill-blank',
            correctAnswer: '(a) student(s)',
            acceptableAnswers: ['students', 'student', 'a student', '(a) student(s)', 'university students'],
            points: 1
          },
          {
            id: 'l5-ex2-q13',
            number: 13,
            question: 'Monday 20th: How to save money by using (13):',
            type: 'fill-blank',
            correctAnswer: '(student) travel cards',
            acceptableAnswers: ['student travel cards', 'travel cards', '(student) travel cards'],
            points: 1
          },
          {
            id: 'l5-ex2-q14',
            number: 14,
            question: 'while getting around (14):',
            type: 'fill-blank',
            correctAnswer: 'Europe',
            acceptableAnswers: ['europe', 'Europe'],
            points: 1
          },
          {
            id: 'l5-ex2-q15',
            number: 15,
            question: 'Friday 24th: Programme about children of former (15):',
            type: 'fill-blank',
            correctAnswer: 'rock musicians/big music names',
            acceptableAnswers: ['rock musicians', 'big music names', 'rock musicians/big music names', 'musicians'],
            points: 1
          },
          {
            id: 'l5-ex2-q16',
            number: 16,
            question: 'They could be very (16) parents:',
            type: 'fill-blank',
            correctAnswer: 'strict',
            acceptableAnswers: ['strict'],
            points: 1
          },
          {
            id: 'l5-ex2-q17',
            number: 17,
            question: 'Monday 27th: Music from (17):',
            type: 'fill-blank',
            correctAnswer: 'Jamaica',
            acceptableAnswers: ['jamaica', 'Jamaica'],
            points: 1
          },
          {
            id: 'l5-ex2-q18',
            number: 18,
            question: 'Competition prize (18):',
            type: 'fill-blank',
            correctAnswer: 'Trip to Brazil',
            acceptableAnswers: ['trip to brazil', 'Trip to Brazil', 'Brazil'],
            points: 1
          },
          {
            id: 'l5-ex2-q19',
            number: 19,
            question: 'Tuesday 28th: Report from (19):',
            type: 'fill-blank',
            correctAnswer: '(a) shoe museum',
            acceptableAnswers: ['shoe museum', 'a shoe museum', '(a) shoe museum'],
            points: 1
          },
          {
            id: 'l5-ex2-q20',
            number: 20,
            question: 'Wednesday 29th: New fashions for people who go (20):',
            type: 'fill-blank',
            correctAnswer: 'dancing (in clubs)-to clubs',
            acceptableAnswers: ['dancing', 'dancing in clubs', 'to clubs', 'dancing (in clubs)-to clubs', 'clubbing'],
            points: 1
          }
        ]
      }
    ]
  },

  // =========================================================================
  // NIVEL 6
  // =========================================================================
  6: {
    levelNumber: 6,
    levelRoman: 'VI',
    title: 'Modelo de Examen de Inglés – Nivel VI',
    part: 'Parte 1 – Comprensión Auditiva (Part 1 – Listening Comprehension)',
    timeAllowedMinutes: 20,
    totalPoints: 20,
    pointPerQuestionText: '1.33 point each correct answer. Total: 20 points.',
    exercises: [
      {
        exerciseNumber: 1,
        title: 'Exercise 1 - Questions 1-8 (Winter Survival in a Stranded Vehicle)',
        instructions: 'Listen to the interview twice and complete these notes.',
        audioScriptTitle: 'Audio Text 1: Cold Weather Survival Expert Interview',
        audioScript: `Interviewer: Welcome to Outdoor Safety. Today we are speaking with seasoned survival instructor Mark Thorne about what motorists should do if stranded in heavy blizzards. Mark, what is the most fundamental principle?
Expert: Well, first and foremost, people don't realize that your most important piece of survival equipment is your car itself. It provides shelter, windbreak, and visibility.
Interviewer: And what is the golden rule?
Expert: Rule number one is never, under any circumstances, leave your car unless you can clearly see a safe building or shelter right within walking distance. Wandering into a whiteout blizzard is almost always fatal.
Interviewer: What emergency items should drivers pack inside their boot?
Expert: Whenever you venture onto winter roads, make sure you carry blankets, a sleeping bag, an entrenching shovel, and ample food and drinks. High-calorie energy bars and sealed water bottles will keep you sustained.
Interviewer: What about running the engine for heat?
Expert: This is where fatal mistakes happen. Snow can block the exhaust pipe, and deadly carbon monoxide car fumes can kill you in a matter of minutes. Therefore, clear the exhaust pipe with your shovel first, and run your car engine for a maximum of ten minutes every hour, keeping a window cracked slightly for fresh air ventilation.
Interviewer: And before setting off?
Expert: Before you leave on your journey, always ring up your destination to inform relatives or colleagues of your planned route and estimated arrival time.`,
        questions: [
          {
            id: 'l6-ex1-q1',
            number: 1,
            question: 'Your most important piece of survival equipment is (1):',
            type: 'fill-blank',
            correctAnswer: 'your car',
            acceptableAnswers: ['your car', 'the car', 'car'],
            points: 1.33
          },
          {
            id: 'l6-ex1-q2',
            number: 2,
            question: 'Rule number one is (2):',
            type: 'fill-blank',
            correctAnswer: 'not to leave your car (unless you can see the place you want to get)',
            acceptableAnswers: ['not to leave your car', 'stay in your car', 'not leave your car', 'never leave your car', 'not to leave your car (unless you can see the place you want to get)'],
            points: 1.33
          },
          {
            id: 'l6-ex1-q3',
            number: 3,
            question: 'Items in car - Item 1 (3):',
            type: 'fill-blank',
            correctAnswer: 'a sleeping bag',
            acceptableAnswers: ['sleeping bag', 'a sleeping bag', 'shovel', 'food', 'drinks'],
            points: 1.33
          },
          {
            id: 'l6-ex1-q4',
            number: 4,
            question: 'Items in car - Item 2 (4):',
            type: 'fill-blank',
            correctAnswer: 'a shovel',
            acceptableAnswers: ['shovel', 'a shovel', 'sleeping bag', 'food', 'drinks'],
            points: 1.33
          },
          {
            id: 'l6-ex1-q5',
            number: 5,
            question: 'Items in car - Item 3 (5):',
            type: 'fill-blank',
            correctAnswer: 'food, drinks',
            acceptableAnswers: ['food', 'drinks', 'food and drinks', 'food, drinks', 'sleeping bag', 'shovel'],
            points: 1.33
          },
          {
            id: 'l6-ex1-q6',
            number: 6,
            question: 'Car fumes can kill you in (6):',
            type: 'fill-blank',
            correctAnswer: '(a matter of ) minutes',
            acceptableAnswers: ['minutes', 'a matter of minutes', '(a matter of ) minutes', 'a few minutes'],
            points: 1.33
          },
          {
            id: 'l6-ex1-q7',
            number: 7,
            question: 'Run car engine maximum (7) every hour:',
            type: 'fill-blank',
            correctAnswer: 'ten minutes',
            acceptableAnswers: ['10 minutes', 'ten minutes', '10 mins'],
            points: 1.33
          },
          {
            id: 'l6-ex1-q8',
            number: 8,
            question: 'Before you leave on journey, you should (8):',
            type: 'fill-blank',
            correctAnswer: 'ring up your destination',
            acceptableAnswers: ['ring up your destination', 'call your destination', 'phone your destination', 'notify destination'],
            points: 1.33
          }
        ]
      },
      {
        exerciseNumber: 2,
        title: 'Exercise 2 - Questions 9-16 (Eight Different Spoken Contexts)',
        instructions: 'You will hear people talking in eight different situations. For questions 9-16 choose the best answer A, B or C. You will listen to the recording twice.',
        audioScriptTitle: 'Audio Text 2: Advanced Contextual Listening Situations',
        audioScript: `[Situation 9]
Radio Reader: "The shadow lengthened across the gravel driveway. Detective Higgins checked his service revolver under his trench coat, heart pounding against his ribs as footsteps echoed along the dark corridor..."
Question: The book is A) a thriller.

[Situation 10]
Studio Newsreader: "And that concludes our domestic news summary for this Thursday evening. I will now hand you over to our political correspondent, Peter Jennings, in Westminster for the late parliamentary debate..."
Question: At the end she C) hands over to someone else.

[Situation 11]
Cinema Tannoy / Cinema Audio: "Dust flew from galloping hooves across the dry Arizona canyon as Sheriff Cooper cocked his rifle, warning the outlaw gang not to cross the Rio Grande border..."
Question: The film is B) a western.

[Situation 12]
Woman 1: "I saw the wreckage on Elm Street, Sarah. How on earth did you survive?"
Woman 2: "It was horrific. A delivery lorry ran the red light and ploughed straight into the passenger door, right in the side of our vehicle! If the impact had been on my side, I wouldn't be here."
Question: The car B) was hit in the side.

[Situation 13]
Maths Teacher: "Look here, David. You've had five days to prepare this algebraic calculation, yet you have barely completed three problems, and even those lack basic working. This level of negligence is totally unacceptable for a student of your grade."
Question: The teacher is B) critical.

[Situation 14]
Father: "Son, I appreciate that you want to travel the globe saving rare rainforest butterflies, but you haven't even finished your basic secondary examinations or saved a penny for your upkeep. You need to get your priorities straight before daydreaming!"
Question: The father thinks his son A) has wrong priorities.

[Situation 15]
Narrator / Park Bystander: "Look at that paramedic team by the pavilion. The doctor is demonstrating chest compressions and defibrillator pads on a computerized medical training mannequin so the nursing students can observe proper technique."
Question: It is C) a demonstration on a model.

[Situation 16]
TV Presenter: "Our next guest tonight is Ellen McArthur, the record-breaking solo navigator who conquered the Southern Ocean. In just a moment, she will join me live in the studio for an exclusive interview on her harrowing journey."
Question: She is talking about her because C) she is going to interview her.`,
        questions: [
          {
            id: 'l6-ex2-q9',
            number: 9,
            question: '9 - You turn on your radio and hear someone reading an extract from a book. The book is',
            type: 'multiple-choice',
            options: ['A a thriller.', 'B a love story.', 'C an autobiography.'],
            correctAnswer: 'A',
            points: 1.33
          },
          {
            id: 'l6-ex2-q10',
            number: 10,
            question: '10 - A studio newsreader is reading the evening bulletin. At the end she',
            type: 'multiple-choice',
            options: ['A moves to the next item.', 'B announces some good news.', 'C hands over to someone else.'],
            correctAnswer: 'C',
            points: 1.33
          },
          {
            id: 'l6-ex2-q11',
            number: 11,
            question: '11 - You are waiting the outside auditorium for the next film to begin. The film that is about to finish is',
            type: 'multiple-choice',
            options: ['A a horror movie.', 'B a western.', 'C a film about the French foreign legion.'],
            correctAnswer: 'B',
            points: 1.33
          },
          {
            id: 'l6-ex2-q12',
            number: 12,
            question: '12 - You are in a café when you overhear two women talking about a car accident. From what you hear you can understand that',
            type: 'multiple-choice',
            options: ['A one of the women was driving.', 'B the car was hit in the side.', 'C what saved one of the women was her seat belt.'],
            correctAnswer: 'B',
            points: 1.33
          },
          {
            id: 'l6-ex2-q13',
            number: 13,
            question: '13 - A mathematics teacher is talking to a pupil who has had trouble with her homework. The teacher is',
            type: 'multiple-choice',
            options: ['A understanding.', 'B critical.', 'C patient.'],
            correctAnswer: 'B',
            points: 1.33
          },
          {
            id: 'l6-ex2-q14',
            number: 14,
            question: '14 - You are on the bus when you overhear this exchange between a father and a teenage son. The father thinks his son',
            type: 'multiple-choice',
            options: ['A has wrong priorities.', 'B is an idealist.', 'C is idealist like most young people.'],
            correctAnswer: 'A',
            points: 1.33
          },
          {
            id: 'l6-ex2-q15',
            number: 15,
            question: '15 - You are watching a doctor at work in a park. It is',
            type: 'multiple-choice',
            options: ['A a real emergency.', 'B a demonstration on a student.', 'C a demonstration on a model.'],
            correctAnswer: 'C',
            points: 1.33
          },
          {
            id: 'l6-ex2-q16',
            number: 16,
            question: '16 - Listen to this woman on the TV talking about another woman. She is talking about her because',
            type: 'multiple-choice',
            options: ['A she is an old friend.', 'B she is a famous sailor.', 'C she is going to interview her.'],
            correctAnswer: 'C',
            points: 1.33
          }
        ]
      }
    ]
  }
};
