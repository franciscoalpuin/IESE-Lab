import { CompetencyType, DailyTrainingMission } from '../types';
import { getDailyMission, getPhaseForDayAndLevel, TacticalPhaseInfo, getArchetypesForLevel } from './daily120PlanData';
import { getCurriculumForDayAndLevel } from './dailyCurriculumEngine';
import { getListeningVerificationForDay } from './listeningVerificationData';
import { shuffleIndexedQuestion } from '../utils/shuffleOptions';

export interface OperationalPracticeData {
  day: number;
  levelNumber: number;
  axis: CompetencyType;
  phaseNumber: 1 | 2 | 3 | 4;
  phaseName: string;
  phaseCodename: string;
  tacticalTheme: string;
  missionTitle: string;
  objective: string;
  difficultyRating: number; // 1 to 10
  difficultyLevelText: string;
  recommendedAudioRate: number;

  pedagogicalBriefing: {
    topic: string;
    objective: string;
    vocabulary: Array<{
      term: string;
      translation: string;
      ipa: string;
      spanishPhonetic: string;
      example: string;
    }>;
    grammar: {
      title: string;
      formula: string;
      rule: string;
      tacticalTip: string;
    };
    phonetics: {
      targetSound: string;
      articulatoryTip: string;
      spanishPhonetic: string;
      practiceWords: Array<{ word: string; spanishPhonetic: string; translation: string }>;
    };
    usefulPhrase: {
      phrase: string;
      translation: string;
      spanishPhonetic: string;
      tacticalUsage: string;
    };
  };

  listening: {
    transmissionTitle: string;
    transmissionScript: string;
    tierLabel?: string;
    tierDescription?: string;
    primaryQuestion: {
      question: string;
      options: string[];
      correctIndex: number;
      explanation: string;
      focusType?: string;
      difficultyTier?: string;
      phoneticTarget?: string;
    };
    detailQuestion: {
      question: string;
      options: string[];
      correctIndex: number;
      explanation: string;
      focusType?: string;
      difficultyTier?: string;
      phoneticTarget?: string;
    };
    dictationSentence: string;
    dictationTranslation: string;
    phoneticTargetWords: Array<{ word: string; spanishPhonetic: string; translation: string }>;
  };

  reading: {
    title: string;
    scenarioContext: string;
    textPassage: string;
    wordCount: number;
    primaryQuestion: {
      question: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    };
    analyticalQuestion: {
      question: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    };
    keyTacticalGlossary: Array<{ term: string; definition: string }>;
  };

  useOfLanguage: {
    grammarTitle: string;
    formula: string;
    rule: string;
    questions: Array<{
      id: string;
      prompt: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    }>;
    scramblerWords: string[];
    scramblerTargetSentence: string;
    scramblerTranslation: string;
    collocationDrill: {
      prompt: string;
      correctPhrase: string;
      distractors: string[];
      explanation: string;
    };
  };

  writing: {
    title: string;
    scenario: string;
    targetWordCount: string;
    targetMinWords: number;
    targetMaxWords: number;
    requiredElements: string[];
    tacticalProwordsAndConnectors: string[];
    modelAnswer: string;
    evaluationCriteria: string[];
  };

  speaking: {
    title: string;
    scenario: string;
    recommendedDuration: string;
    requiredProwords: string[];
    pronunciationTips: string[];
    modelResponse: string;
    phoneticTargetNotes: string;
  };
}

export function getDailyOperationalPractice(
  levelNumber: number,
  dayNumber: number,
  axis: CompetencyType,
  sessionSeed?: string
): OperationalPracticeData {
  const safeDay = Math.max(1, Math.min(120, dayNumber || 1));
  const safeLevel = Math.max(1, Math.min(6, levelNumber || 1));

  const mission = getDailyMission(safeLevel, safeDay, sessionSeed);
  const phase = getPhaseForDayAndLevel(safeDay, safeLevel);
  const arch = getCurriculumForDayAndLevel(safeLevel, safeDay);

  // Difficulty scaling (1 to 10)
  // Base on safeLevel (1-6) and safeDay (1-120)
  const baseLevelDifficulty = (safeLevel - 1) * 1.5; // Level 1: 0, Level 2: 1.5, Level 3: 3.0, Level 6: 7.5
  const dayProgressFactor = (safeDay / 120) * 3.5; // 0 to 3.5
  const rawDifficulty = Math.min(10, Math.max(1, Math.round(1 + baseLevelDifficulty + dayProgressFactor)));

  let difficultyLevelText = 'Fase Alpha — Fundamentos Operacionales';
  let recommendedAudioRate = 0.88;
  let targetMinWords = 35;
  let targetMaxWords = 60;

  if (safeDay > 90) {
    difficultyLevelText = 'Fase Delta — Alto Nivel & Simulación STANAG 6001';
    recommendedAudioRate = 1.05;
    targetMinWords = 120;
    targetMaxWords = 180;
  } else if (safeDay > 60) {
    difficultyLevelText = 'Fase Charlie — Operaciones Combinadas e Informes';
    recommendedAudioRate = 1.00;
    targetMinWords = 80;
    targetMaxWords = 130;
  } else if (safeDay > 30) {
    difficultyLevelText = 'Fase Bravo — Táctica de Campaña & Comunicaciones';
    recommendedAudioRate = 0.95;
    targetMinWords = 50;
    targetMaxWords = 90;
  }

  // Dictation Sentence selection from transcript or usefulPhrase
  const dictationSentence = arch.usefulPhrase?.phrase 
    ? arch.usefulPhrase.phrase.split('—')[0].trim() 
    : 'All units maintain radio silence until grid zero nine.';
  const dictationTranslation = arch.usefulPhrase?.translation 
    ? arch.usefulPhrase.translation.split('—')[0].trim() 
    : 'Todas las unidades mantienen silencio radial hasta cuadrícula cero nueve.';

  // Progressive listening verification (strictly in English, words & short phrases, difficulty scaling with sound-alikes)
  const listeningVerification = getListeningVerificationForDay(
    safeLevel, 
    safeDay, 
    arch.listening.script, 
    arch.listening.title,
    arch.listening.question
  );

  // Curated reading analytical questions strictly grounded in the daily curriculum text
  const CURATED_READING_ANALYTICAL_BANK: Record<number, {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }> = {
    1: {
      question: 'According to the reading passage, why must military radio operators use the NATO phonetic alphabet instead of everyday letter names?',
      options: [
        'To prevent critical letter confusion over noisy or static radio frequencies.',
        'To make radio transmissions sound more complex to civilian listeners.',
        'To replace written operational reports during combat operations.',
        'To eliminate the need for callsigns and serial numbers.'
      ],
      correctIndex: 0,
      explanation: 'The text explains that the phonetic alphabet eliminates acoustic ambiguity (such as B vs P or D vs T) over noisy combat frequencies.'
    },
    2: {
      question: 'According to the logistics storage record, why must the sergeant immediately update the ledger after issuing 3 kits?',
      options: [
        'To maintain strict inventory control so exactly fifteen kits remain recorded.',
        'To hide missing supplies from the inspecting battalion officer.',
        'To order thirty new emergency stretchers from base headquarters.',
        'To dispose of expired medical pharmaceuticals immediately.'
      ],
      correctIndex: 0,
      explanation: 'Logistics accountability requires ledger balances to match physical stock immediately (18 - 3 = 15 kits).'
    },
    3: {
      question: 'According to the supply pricelist, what total amount would an officer pay if purchasing both the £40 backpack and the £30 tactical bag?',
      options: [
        'Seventy pounds (£70).',
        'Forty pounds (£40).',
        'One hundred pounds (£100).',
        'Fifty-five pounds (£55).'
      ],
      correctIndex: 0,
      explanation: 'Summing £40 (backpack) and £30 (tactical bag) equals seventy pounds (£70).'
    },
    4: {
      question: 'Based on the base map instructions, where should a newly arrived officer report inside Building Bravo?',
      options: [
        'To Room 02 on the ground floor, next to the briefing room.',
        'To the command bunker on the third floor.',
        'To the vehicle motor pool behind the parade grounds.',
        'To the helicopter landing zone on the roof.'
      ],
      correctIndex: 0,
      explanation: 'The text directs personnel to Building Bravo, ground floor, Room 02.'
    },
    5: {
      question: 'According to the garrison daily schedule, what activity occurs immediately after 0630 roll call?',
      options: [
        'Physical training (PT) on the sports ground at zero-seven-hundred.',
        'Evening parade and retreat ceremony.',
        'Lunch in the main dining mess hall.',
        'Personal inspection of dormitory quarters.'
      ],
      correctIndex: 0,
      explanation: 'The schedule specifies roll call at 0630 followed by PT on the sports ground at 0700.'
    },
    6: {
      question: 'According to the description of Captain Evans\'s family, what profession does his sister Laura practice?',
      options: [
        'She is a medical doctor working at a military hospital.',
        'She is an airline pilot stationed abroad.',
        'She is a mechanical engineer in a logistics firm.',
        'She is an army cadet in basic training.'
      ],
      correctIndex: 0,
      explanation: 'The text identifies his sister Laura as a doctor.'
    },
    7: {
      question: 'What does Captain Alvarez do every weekday morning before eating his light breakfast?',
      options: [
        'He goes for a thirty-minute run after his alarm rings at 0600.',
        'He attends a company staff briefing at 0700.',
        'He drives his family into the city centre.',
        'He works in his office on operational files.'
      ],
      correctIndex: 0,
      explanation: 'Captain Alvarez explicitly describes: "my alarm rings at zero-six-hundred hours. I always go for a thirty-minute run, then I shower and have a light breakfast".'
    },
    8: {
      question: 'According to the unit sports timetable, which activities are specifically assigned to Monday and Wednesday afternoons?',
      options: [
        'Playing football or basketball on the outdoor courts.',
        'Doing judo and karate inside Gym Two.',
        'Battalion road running along the river road.',
        'Swimming competitions in the regional leisure centre.'
      ],
      correctIndex: 0,
      explanation: 'The briefing specifies: "On Monday and Wednesday afternoons, company personnel can play football or play basketball on the outdoor courts".'
    },
    9: {
      question: 'Why does Lieutenant Rossi prioritize outdoor activities such as cycling on Sundays?',
      options: [
        'Because he strongly dislikes staying indoors throughout the entire weekend.',
        'Because he is required to lead mandatory platoon marches on Sundays.',
        'Because his kitchen is undergoing scheduled maintenance.',
        'Because base regulations prohibit playing guitar in quarters.'
      ],
      correctIndex: 0,
      explanation: 'He states: "However, I hate staying indoors all weekend, so I usually go cycling on Sundays".'
    },
    10: {
      question: 'According to British dining customs described in the text, why should customers say "Could I have..." instead of "I want..."?',
      options: [
        'Because "Could I have" is the polite, respectful standard for making food orders.',
        'Because using "I want" cancels the restaurant table reservation.',
        'Because British menus do not accept spoken orders.',
        'Because kitchen staff are only authorized to serve officers.'
      ],
      correctIndex: 0,
      explanation: 'The language note explains that "Could I have..." is the courteous standard, whereas "I want..." is considered abrupt or rude.'
    },
    11: {
      question: 'According to the three-layer clothing system described in the guide, what is the specific role of the outer shell jacket?',
      options: [
        'To provide a windproof and waterproof barrier against rain and severe cold.',
        'To absorb sweat directly from the soldier\'s skin.',
        'To replace the need for combat helmets and thermal gloves.',
        'To store twenty-four hours of emergency ration packs.'
      ],
      correctIndex: 0,
      explanation: 'The SOP text describes the three layers: moisture-wicking base, insulating fleece middle, and windproof waterproof outer shell.'
    },
    12: {
      question: 'If a visitor turns right after the vehicle depot, where will they find the Medical Centre?',
      options: [
        'Situated between the gymnasium and the helicopter landing zone.',
        'Directly opposite the ammunition supply bunker.',
        'Inside the administrative headquarters boardroom.',
        'At the far end of the obstacle training course.'
      ],
      correctIndex: 0,
      explanation: 'The guide states: "The Medical Centre is located between the physical training gymnasium and the helicopter landing zone".'
    },
    13: {
      question: 'According to the barracks accommodation policy, where are the laundry washing machines and communal microwave located?',
      options: [
        'In the common area outside the individual bedrooms.',
        'Inside the officer\'s private bathroom.',
        'Underneath the study desk inside room 204.',
        'At the central guard checkpoint by the main gate.'
      ],
      correctIndex: 0,
      explanation: 'The text specifies: "In the common area outside, there are washing machines and a small kitchen with a microwave".'
    },
    14: {
      question: 'Why does the garrison transit guide advise visiting officers to check digital departure boards before boarding?',
      options: [
        'To verify real-time platform assignments and prevent boarding altered routes.',
        'To calculate currency exchange rates between pounds and dollars.',
        'To obtain security clearance codes for civilian train carriages.',
        'To register military identification numbers with the ticket inspector.'
      ],
      correctIndex: 0,
      explanation: 'The text advises personnel to check digital departure boards for potential track and platform alterations.'
    },
    15: {
      question: 'Based on the telephone message slip, what specific action is requested of Major Davis upon his return?',
      options: [
        'To return Captain Torres\'s call at extension 512 regarding morning transport.',
        'To conduct an unannounced weapons inspection at the firing range.',
        'To dispatch two medical ambulances to the central train depot.',
        'To submit his monthly leave application to Sergeant Miller.'
      ],
      correctIndex: 0,
      explanation: 'The message explicitly asks Major Davis to call Captain Torres back at extension 512 regarding the morning convoy.'
    },
    16: {
      question: 'Under standard checkpoint operating procedures, what must the vehicle driver do before the gate barrier is raised?',
      options: [
        'Advance individually to the post and present military identification for scanning.',
        'Turn vehicle headlights off and accelerate through the perimeter.',
        'Hand over all tactical communication radios to the armed sentry.',
        'Wait in the vehicle until the company commander arrives in person.'
      ],
      correctIndex: 0,
      explanation: 'The sentry orders: "Advance to the checkpoint and present your military ID card for scanning".'
    },
    17: {
      question: 'Why does Two-Zero read back the exact grid coordinates "452 681" before signing off?',
      options: [
        'To confirm accurate reception and prevent navigational errors during troop relocation.',
        'To request immediate artillery smoke cover over the rally location.',
        'To cancel the tactical road march scheduled for the evening.',
        'To test whether the backup UHF radio transmitter is functioning.'
      ],
      correctIndex: 0,
      explanation: 'In STANAG radio discipline, reading back coordinates ensures no numeric transposition errors occurred before movement.'
    },
    18: {
      question: 'According to Convoy Escort Bravo\'s situation report, what is the current traffic condition on Route 4 for the incoming ambulance?',
      options: [
        'The road is clear for immediate medical evacuation without obstruction.',
        'The highway is completely blocked by overturned fuel tankers.',
        'Route 4 is closed due to dense fog and flooding.',
        'Traffic is diverted through an unmapped civilian detour.'
      ],
      correctIndex: 0,
      explanation: 'The report confirms: "The road is clear for immediate medical evacuation. Over".'
    },
    19: {
      question: 'According to Major Evans\'s briefing on Charlie Company\'s structure, which specialized element complements the three rifle platoons?',
      options: [
        'One heavy weapons platoon.',
        'Two reconnaissance airborne squads.',
        'A dedicated river assault squadron.',
        'An independent cyber defense division.'
      ],
      correctIndex: 0,
      explanation: 'The briefing specifies: "Charlie Company consists of three rifle platoons and one heavy weapons platoon".'
    },
    20: {
      question: 'What does the logistical status "rations and water green" indicate in Outpost Four\'s 0300 SITREP?',
      options: [
        'Supplies of food and drinking water are fully sufficient for operational duty.',
        'Food rations have expired and water tanks must be sanitized immediately.',
        'Rations have been handed over to neighboring civilian patrols.',
        'Supply lines have been cut off by adverse weather.'
      ],
      correctIndex: 0,
      explanation: 'In military status reporting, "green" signifies fully adequate, operational, and mission-ready logistics.'
    }
  };

  const readingAnalyticalQuestion = CURATED_READING_ANALYTICAL_BANK[safeDay] || {
    question: `[Day ${safeDay} • Analytical Reading]: Based on the text "${arch.reading.title}", what key operational instruction or fact is stated?`,
    options: [
      `${arch.reading.snippet.split('.')[0]}.`,
      'Disregard the stated operational procedure during scheduled movements.',
      'Postpone compliance until command issues administrative exemptions.',
      'Substitute standardized equipment with unverified alternatives.'
    ],
    correctIndex: 0,
    explanation: `The instructional passage for Day ${safeDay} specifically outlines: "${arch.reading.snippet.split('.')[0]}."`
  };

  // Curated grammar questions aligned strictly with the daily curriculum rule
  const CURATED_GRAMMAR_PRACTICE_BANK: Record<number, {
    prompt: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }> = {
    1: {
      prompt: 'Elija la opción que utiliza correctamente el alfabeto fonético militar para deletrear el apellido "DAVIS":',
      options: [
        'Delta-Alfa-Victor-India-Sierra',
        'David-Alpha-Victor-Ice-Sugar',
        'Delta-Apple-Victory-Indigo-Sierra',
        'Dan-Alfa-Voice-India-Sam'
      ],
      correctIndex: 0,
      explanation: 'La regla del IESE/STANAG exige utilizar exclusivamente las palabras de código estándar: Delta, Alfa, Victor, India, Sierra.'
    },
    2: {
      prompt: 'Seleccione la oración gramaticalmente correcta con número cardinal y sustantivo plural:',
      options: [
        'There are fifteen medical kits stored in the warehouse.',
        'There is fifteen medical kit stored in the warehouse.',
        'There are fifteen medicals kits stored in the warehouse.',
        'There have fifteen kit medical stored in the warehouse.'
      ],
      correctIndex: 0,
      explanation: 'Con números plurales (>1) el sustantivo toma "-s" (kits) y la estructura de existencia es "There are".'
    },
    3: {
      prompt: 'Elija la pregunta correcta para consultar el precio de un artículo en una tienda militar:',
      options: [
        'How much is this tactical backpack, please?',
        'How many cost this tactical backpack, please?',
        'How much price has this tactical backpack, please?',
        'What is the cost money for this backpack, please?'
      ],
      correctIndex: 0,
      explanation: 'Para consultar el precio de un elemento singular se utiliza "How much is...?" o "How much does it cost?".'
    },
    4: {
      prompt: 'Complete la oración con la preposición correcta de ubicación en un edificio: "The administrative office is _____ the first floor."',
      options: ['on', 'in', 'at', 'into'],
      correctIndex: 0,
      explanation: 'Para pisos o niveles de un edificio se utiliza obligatoriamente la preposición "ON" (on the ground floor, on the first floor).'
    },
    5: {
      prompt: 'Seleccione la frase que expresa la hora militar y civil con la preposición correcta:',
      options: [
        'Morning roll call begins at zero-six-thirty hours.',
        'Morning roll call begins on zero-six-thirty hours.',
        'Morning roll call begins in zero-six-thirty hours.',
        'Morning roll call begins for zero-six-thirty hours.'
      ],
      correctIndex: 0,
      explanation: 'Las horas exactas se introducen siempre con la preposición "AT": at 0630 hrs, at half past six.'
    },
    6: {
      prompt: 'Elija la opción que aplica correctamente el genitivo sajón de pertenencia familiar:',
      options: [
        'Captain Evans\'s sister is a doctor at the base hospital.',
        'The sister of Captain Evans she is doctor in hospital.',
        'Captain Evans his sister are doctor in hospital.',
        'Captain Evans sister is doctor at base hospital.'
      ],
      correctIndex: 0,
      explanation: 'El genitivo posesivo ("Captain Evans\'s sister") indica la relación familiar de pertenencia.'
    },
    7: {
      prompt: 'Elija la oración que ubica el adverbio de frecuencia en la posición sintáctica correcta:',
      options: [
        'He always wakes up at zero-six-hundred hours.',
        'He wakes always up at zero-six-hundred hours.',
        'Always he wakes up at zero-six-hundred hours.',
        'He wakes up at zero-six-hundred hours always.'
      ],
      correctIndex: 0,
      explanation: 'Los adverbios de frecuencia (always, usually, often) se colocan ANTES del verbo principal en presente simple.'
    },
    8: {
      prompt: 'Seleccione la opción que cumple rigurosamente la regla IESE de colocación para deportes:',
      options: [
        'Soldiers play football, go running, and do physical training.',
        'Soldiers make football, play running, and make physical training.',
        'Soldiers do football, make running, and play physical training.',
        'Soldiers practice football, go to run, and make PT.'
      ],
      correctIndex: 0,
      explanation: 'Regla de Oro: PLAY + deportes de pelota; GO + actividades en -ING; DO + artes marciales y ejercicios físicos (PT).'
    },
    9: {
      prompt: 'Elija la opción gramaticalmente correcta para verbos de preferencia seguidos de gerundio:',
      options: [
        'Lieutenant Rossi enjoys cooking and loves listening to music.',
        'Lieutenant Rossi enjoys to cook and loves listen to music.',
        'Lieutenant Rossi enjoy cooking and love listening music.',
        'Lieutenant Rossi enjoys cook and loves to listen music.'
      ],
      correctIndex: 0,
      explanation: 'Los verbos "enjoy" y "love" se siguen de gerundio en -ING, y "listen" lleva obligatoriamente "to".'
    },
    10: {
      prompt: 'Elija la fórmula de cortesía estándar recomendada para pedir comida en un comedor o restaurante:',
      options: [
        'Could I have the roast chicken with potatoes, please?',
        'I want roast chicken with potatoes now.',
        'Give me roast chicken with potatoes immediately.',
        'Can I to have roast chicken with potatoes, please?'
      ],
      correctIndex: 0,
      explanation: '"Could I have..." y "I would like..." son las fórmulas reglamentarias de cortesía en inglés.'
    },
    11: {
      prompt: 'Seleccione la oración que expresa correctamente el clima con el pronombre impersonal "It":',
      options: [
        'It is cold and rainy today, so soldiers are wearing jackets.',
        'Is cold and rainy today, so soldiers wear jackets.',
        'Makes cold and rain today, so soldiers are wearing jackets.',
        'He is cold and rainy today, so soldiers wearing jackets.'
      ],
      correctIndex: 0,
      explanation: 'En inglés el clima se expresa impersonalmente con "It is" (It is cold, It is raining).'
    },
    12: {
      prompt: 'Seleccione la instrucción que utiliza verbos en imperativo directo para dar una dirección:',
      options: [
        'Go straight ahead and turn left at the traffic lights.',
        'Going straight ahead and turning left at traffic lights.',
        'You must to go straight and to turn left at lights.',
        'Goes straight ahead and turns left at traffic lights.'
      ],
      correctIndex: 0,
      explanation: 'Las instrucciones y directivas de ruta se dan en modo imperativo con la forma base del verbo: "Go straight... turn left...".'
    },
    13: {
      prompt: 'Complete la oración con las formas correctas de existencia: "In room 204, _____ a bed and _____ four chairs."',
      options: [
        'there is / there are',
        'there are / there is',
        'there have / there are',
        'has / have'
      ],
      correctIndex: 0,
      explanation: '"There is" se utiliza para sustantivos singulares (a bed) y "There are" para sustantivos plurales (four chairs).'
    },
    14: {
      prompt: 'Elija la opción con las preposiciones correctas de medio de transporte:',
      options: [
        'He travels to the base by train, but goes to the mess on foot.',
        'He travels to the base in train, but goes to the mess by foot.',
        'He travels to the base with train, but goes to the mess on feet.',
        'He travels to the base by train, but goes to the mess with walking.'
      ],
      correctIndex: 0,
      explanation: 'Se utiliza "by + medio de transporte" (by train, by bus) y obligatoriamente "on foot" para desplazamientos a pie.'
    },
    15: {
      prompt: 'Seleccione la frase protocolar correcta para identificarse en una llamada telefónica formal:',
      options: [
        'Hello, this is Captain Torres speaking.',
        'Hello, I am Captain Torres speaking.',
        'Hello, here is Captain Torres talking.',
        'Hello, my name Captain Torres speaks.'
      ],
      correctIndex: 0,
      explanation: 'Por teléfono en inglés no se dice "I am...", sino "This is [Name] speaking".'
    },
    16: {
      prompt: 'Seleccione la orden militar de centinela reglamentaria para pedir identificación:',
      options: [
        'Halt! Identify yourself and advance to the checkpoint.',
        'Halt! Identificate you and advance to the checkpoint.',
        'Stop! Say your identity and walk to checkpoint.',
        'Stand! Declare who you are and move to checkpoint.'
      ],
      correctIndex: 0,
      explanation: 'El protocolo STANAG exige la fórmula reglamentaria "Halt! Identify yourself".'
    },
    17: {
      prompt: 'Elija la transmisión que confirma correctamente la recepción de coordenadas de cuadrícula:',
      options: [
        'Roger, Grid four-five-two, six-eight-one. Moving now, out.',
        'Roger, I have the numbers 452 and 681. Goodbye.',
        'Acknowledged, coordinates received by radio. Over and out.',
        'Understood, we are going to four-five-two place.'
      ],
      correctIndex: 0,
      explanation: 'En radiotelefonía militar se repiten las coordenadas numeral por numeral seguidas de prowords reglamentarios como ROGER y OUT.'
    },
    18: {
      prompt: 'Seleccione la oración que reporta un incidente médico vehicular con la estructura correcta:',
      options: [
        'We have a motor collision on Route 4. Two personnel require medical attention.',
        'We have motor collision in Route 4. Two personnel is requiring medical attention.',
        'There is collision of cars in Route 4. Two soldiers wants medical attention.',
        'We make a motor collision on Route 4. Personnel needing medicine.'
      ],
      correctIndex: 0,
      explanation: 'Estructura clara de reporte táctico en presente simple con colocación formal "require medical attention".'
    },
    19: {
      prompt: 'Elija la opción gramaticalmente correcta para describir la estructura organizativa de una unidad:',
      options: [
        'Charlie Company consists of three rifle platoons and one heavy weapons platoon.',
        'Charlie Company consists in three rifle platoons and one heavy weapons platoon.',
        'Charlie Company is consisting with three rifle platoons.',
        'Charlie Company consists by three rifle platoons.'
      ],
      correctIndex: 0,
      explanation: 'El verbo "consist" se construye obligatoriamente con la preposición "OF" ("consists of").'
    },
    20: {
      prompt: 'Seleccione la oración de SITREP con la preposición temporal y formato doctrinal correcto:',
      options: [
        'SITREP as of zero-three-hundred hours: perimeter secure, zero casualties.',
        'SITREP at zero-three-hundred hours: perimeter is secure, zero casuals.',
        'SITREP from the 0300 hours: secure perimeter, without casualties.',
        'SITREP since zero-three-hundred hours: perimeter security, no wounded.'
      ],
      correctIndex: 0,
      explanation: 'Los informes de situación tácticos STANAG utilizan la fórmula temporal "SITREP as of [time] hours".'
    }
  };

  const grammarQuestion2 = CURATED_GRAMMAR_PRACTICE_BANK[safeDay] || {
    prompt: `Elija la opción gramaticalmente correcta para la regla: "${arch.grammar.title}"`,
    options: [
      arch.usefulPhrase.phrase.split('—')[0].trim(),
      arch.usefulPhrase.phrase.split('—')[0].trim().replace(/\bis\b/g, 'are').replace(/\bhas\b/g, 'have'),
      'Does not applicable under operational circumstances.',
      'Units must to reporting without delay.'
    ],
    correctIndex: 0,
    explanation: `La opción correcta respeta la fórmula doctrinal: ${arch.grammar.formula}.`
  };

  // Contextual vocabulary question (Question 3): blanks out target term with distractors from the same day's vocabulary
  const vocabTarget = arch.vocabulary[0] || { term: 'Procedure', translation: 'Procedimiento', example: 'Follow procedure.' };
  const vocabDistractors = arch.vocabulary.slice(1, 4).map(v => v.term);
  while (vocabDistractors.length < 3) {
    vocabDistractors.push(`Alternative term ${vocabDistractors.length + 1}`);
  }

  // Blank out term or first part of term if slash exists (stripping parenthetical notations like '(+)')
  const primaryTermWord = vocabTarget.term.replace(/\s*\([^)]*\)/g, '').split('/')[0].trim() || vocabTarget.term.split('/')[0].trim();
  let blankedContext = vocabTarget.example;
  let termReplaced = false;

  try {
    const escaped = primaryTermWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const termRegex = new RegExp(`\\b${escaped}\\b`, 'i');
    if (termRegex.test(blankedContext)) {
      blankedContext = blankedContext.replace(termRegex, '[ _____ ]');
      termReplaced = true;
    }
  } catch {
    // Regex safety fallback
  }

  if (!termReplaced && primaryTermWord) {
    const targetLower = primaryTermWord.toLowerCase();
    const textLower = blankedContext.toLowerCase();
    const idx = textLower.indexOf(targetLower);
    if (idx !== -1) {
      blankedContext = blankedContext.substring(0, idx) + '[ _____ ]' + blankedContext.substring(idx + targetLower.length);
      termReplaced = true;
    }
  }

  if (!termReplaced) {
    blankedContext = `Complete with the correct term (${vocabTarget.translation}): "[ _____ ]" — Example: ${vocabTarget.example}`;
  }

  // Key tactical glossary for the reading text
  const keyTacticalGlossary = arch.vocabulary.map(v => ({
    term: v.term,
    definition: `${v.translation} — Ej: "${v.example}"`
  }));

  // Word count of reading passage
  const readingWordCount = arch.reading.snippet.trim().split(/\s+/).length;

  // Use of language: 3 targeted questions
  const uolQuestions = [
    {
      id: `uol-${safeLevel}-${safeDay}-q1`,
      prompt: arch.useOfLanguage.question.question,
      options: arch.useOfLanguage.question.options,
      correctIndex: arch.useOfLanguage.question.correctIndex,
      explanation: arch.useOfLanguage.question.explanation
    },
    {
      id: `uol-${safeLevel}-${safeDay}-q2`,
      prompt: grammarQuestion2.prompt,
      options: grammarQuestion2.options,
      correctIndex: grammarQuestion2.correctIndex,
      explanation: grammarQuestion2.explanation
    },
    {
      id: `uol-${safeLevel}-${safeDay}-q3`,
      prompt: `Identifique el término correcto para completar el enunciado del Día ${safeDay}: "${blankedContext}"`,
      options: [
        vocabTarget.term,
        vocabDistractors[0],
        vocabDistractors[1],
        vocabDistractors[2]
      ],
      correctIndex: 0,
      explanation: `El término "${vocabTarget.term}" (${vocabTarget.translation}) completa con precisión el contexto: "${vocabTarget.example}".`
    }
  ];

  // Shuffle multiple choice questions per session to prevent positional memorization bias
  const shuffledUolQuestions = uolQuestions.map(q =>
    shuffleIndexedQuestion(q, q.id, sessionSeed)
  );

  const shuffledListeningItem1 = shuffleIndexedQuestion(
    listeningVerification.item1,
    `listening-v1-${safeLevel}-${safeDay}`,
    sessionSeed
  );

  const shuffledListeningItem2 = shuffleIndexedQuestion(
    listeningVerification.item2,
    `listening-v2-${safeLevel}-${safeDay}`,
    sessionSeed
  );

  const shuffledReadingPrimary = shuffleIndexedQuestion(
    arch.reading.question,
    `reading-p-${safeLevel}-${safeDay}`,
    sessionSeed
  );

  const shuffledReadingAnalytical = shuffleIndexedQuestion(
    readingAnalyticalQuestion,
    `reading-a-${safeLevel}-${safeDay}`,
    sessionSeed
  );

  // Scrambler words from useful phrase
  const cleanPhrase = arch.usefulPhrase.phrase.split('—')[0].trim().replace(/[.,?!;:]/g, '');
  const phraseWords = cleanPhrase.split(/\s+/);
  const scramblerWords = [...phraseWords].sort(() => 0.5 - Math.random());

  // Connectors for writing
  const tacticalConnectors = [
    'In accordance with SOP...',
    'Be advised that...',
    'Request immediate authorization to...',
    'Current situation indicates...',
    'Furthermore, observation posts report...',
    'Subject to approval by Command...'
  ];

  // Curated collocation drills matching each day's exact pedagogical topic
  const CURATED_COLLOCATION_BANK: Record<number, {
    prompt: string;
    correctPhrase: string;
    distractors: string[];
    explanation: string;
  }> = {
    1: {
      prompt: 'Seleccione la colocación correcta para transmitir por radio un deletreo con el alfabeto fonético:',
      correctPhrase: 'to spell out a name letter by letter',
      distractors: ['to say by words a name', 'to make letters spelling', 'to speak alphabet out'],
      explanation: 'En radiotelefonía se utiliza "to spell out" para indicar que se deletreará un nombre o indicativo con el alfabeto fonético.'
    },
    2: {
      prompt: 'Seleccione la colocación correcta para el balance de existencias e inventario:',
      correctPhrase: 'to conduct an inventory count',
      distractors: ['to make an inventory number', 'to play with stock items', 'to do the items counting'],
      explanation: 'En gestión logística militar se dice "to conduct an inventory count" (hacer un recuento de inventario).'
    },
    3: {
      prompt: 'Seleccione la colocación correcta para pagar un gasto reglamentario:',
      correctPhrase: 'to pay by credit card',
      distractors: ['to pay with credit card', 'to make money for bills', 'to spend by cash notes'],
      explanation: 'En inglés británico estándar se dice "to pay by card" o "to pay in cash", nunca "to pay with card".'
    },
    4: {
      prompt: 'Seleccione la colocación correcta para ubicar una oficina en un piso de edificio:',
      correctPhrase: 'on the ground floor',
      distractors: ['in the ground floor', 'at the low stage', 'under the first level'],
      explanation: 'Los pisos de un edificio en inglés británico toman la preposición "ON": on the ground floor, on the first floor.'
    },
    5: {
      prompt: 'Seleccione la colocación militar correcta para la formación de revista matutina:',
      correctPhrase: 'to attend morning roll call',
      distractors: ['to assist to roll call', 'to make the morning list', 'to do the attendance show'],
      explanation: '"To attend" significa asistir/estar presente; en formaciones militares se dice "to attend morning roll call".'
    },
    6: {
      prompt: 'Seleccione la colocación correcta para describir el parentesco familiar:',
      correctPhrase: 'to look like one\'s father',
      distractors: ['to seem as one\'s father', 'to make like the father', 'to copy one\'s father face'],
      explanation: '"To look like [someone]" significa parecerse físicamente a alguien.'
    },
    7: {
      prompt: 'Seleccione la colocación correcta para la sesión matinal de trote:',
      correctPhrase: 'to go for a morning run',
      distractors: ['to make a morning run', 'to do running on street', 'to play running outside'],
      explanation: 'Para salir a correr se utiliza la colocación fija "to go for a run" o "to go running".'
    },
    8: {
      prompt: 'Seleccione la colocación correcta según la regla de oro IESE (deportes con pelota):',
      correctPhrase: 'to play football on the pitch',
      distractors: ['to do football on the pitch', 'to practice football with ball', 'to make football in teams'],
      explanation: 'Regla de Oro: PLAY se usa con deportes de pelota y equipo (play football, play basketball); jamás "make" ni "practice".'
    },
    9: {
      prompt: 'Seleccione la colocación correcta para escuchar música en el tiempo libre:',
      correctPhrase: 'to listen to rock music',
      distractors: ['to listen rock music', 'to hear at rock music', 'to make listening to songs'],
      explanation: 'El verbo "listen" exige OBLIGATORIAMENTE la preposición "to": "listen to music" (nunca "listen music").'
    },
    10: {
      prompt: 'Seleccione la fórmula cortés de cortesía estándar para solicitar la cuenta en el restaurante:',
      correctPhrase: 'Could we have the bill, please?',
      distractors: ['Give us the payment paper!', 'I want the check now!', 'Make the final money count!'],
      explanation: 'En restaurantes británicos la fórmula reglamentaria y cortés es: "Could we have the bill, please?".'
    },
    11: {
      prompt: 'Seleccione la colocación correcta para consultar las condiciones del tiempo:',
      correctPhrase: 'to check the weather forecast',
      distractors: ['to look the sky fortune', 'to make weather control', 'to see climatic fortune'],
      explanation: 'La frase fija en meteorología y planificación táctica es "to check the weather forecast".'
    },
    12: {
      prompt: 'Seleccione la colocación imperativa correcta para indicar avance en línea recta:',
      correctPhrase: 'to go straight ahead',
      distractors: ['to walk right forward', 'to go straightly ahead', 'to direct to straight road'],
      explanation: 'La orden e indicación estándar de dirección en inglés es "Go straight ahead" o "Go straight on".'
    },
    13: {
      prompt: 'Seleccione la colocación correcta para mantener el orden en los dormitorios militares:',
      correctPhrase: 'to keep the room clean and tidy',
      distractors: ['to have the bedroom cleared', 'to make the room tidy clean', 'to do clean bedroom status'],
      explanation: 'La colocación estándar en inspecciones de cuarteles es "to keep the room clean and tidy".'
    },
    14: {
      prompt: 'Seleccione la colocación correcta para comprar un pasaje de ida y vuelta en tren:',
      correctPhrase: 'a return ticket to London',
      distractors: ['a round-trip go-and-come ticket', 'a back travel ticket', 'a returning pass by train'],
      explanation: 'En inglés británico, un boleto de ida y vuelta es "a return ticket" (en contraste con "a single ticket").'
    },
    15: {
      prompt: 'Seleccione la fórmula protocolar fija al atender el teléfono de una oficina militar:',
      correctPhrase: 'Sergeant Miller speaking, how may I help you?',
      distractors: ['I am Sergeant Miller here, what do you want?', 'Who speaks there? I am Miller!', 'Speak quickly, Sergeant Miller listening!'],
      explanation: 'La norma telefónica militar exige: "[Rank and Name] speaking, how may I direct/help your call?".'
    },
    16: {
      prompt: 'Seleccione la orden reglamentaria de guardia al ordenar alto a un desconocido:',
      correctPhrase: 'Halt! Identify yourself!',
      distractors: ['Stop walking! Say your name!', 'Wait there! Tell who you are!', 'Block position! Declare identity!'],
      explanation: 'El desafío estándar de centinela militar en STANAG es "Halt! Identify yourself!".'
    },
    17: {
      prompt: 'Seleccione la colocación táctica para confirmar la recepción de coordenadas:',
      correctPhrase: 'to acknowledge receipt of coordinates',
      distractors: ['to confirm receive for numbers', 'to make okay of the grid', 'to say roger to grid location'],
      explanation: '"To acknowledge receipt" es la fórmula doctrinal reglamentaria para acusar recibo de un mensaje o datos.'
    },
    18: {
      prompt: 'Seleccione la colocación doctrinal correcta para solicitar apoyo de evacuación médica:',
      correctPhrase: 'to request immediate medical evacuation',
      distractors: ['to ask fast doctor transport', 'to demand ambulance driving', 'to order wounded rescue travel'],
      explanation: 'En operaciones combinadas se utiliza la fórmula "to request medical evacuation" (MEDEVAC).'
    },
    19: {
      prompt: 'Seleccione la colocación correcta para describir la composición de una compañía:',
      correctPhrase: 'The company consists of three rifle platoons',
      distractors: ['The company composes by three platoons', 'The company has three platoons consisting', 'The company is made from three squads'],
      explanation: 'El verbo "consist" se acompaña siempre de la preposición "OF": "to consist of [units/elements]".'
    },
    20: {
      prompt: 'Seleccione la colocación doctrinal correcta para indicar la fecha y hora de vigencia de un SITREP:',
      correctPhrase: 'SITREP as of zero-three-hundred hours',
      distractors: ['SITREP from 0300 clock time', 'SITREP at the hour of 0300', 'SITREP since current 0300 moment'],
      explanation: 'En terminología STANAG los partes de situación se fechan con la fórmula "as of [time] hours".'
    }
  };

  const dailyCollocation = CURATED_COLLOCATION_BANK[safeDay] || {
    prompt: `Complete la colocación requerida en el Día ${safeDay}:`,
    correctPhrase: arch.vocabulary[0]?.term ? `to apply standard ${arch.vocabulary[0].term.toLowerCase().split('/')[0].trim()}` : 'to carry out orders',
    distractors: ['to make standard mistakes', 'to do an error report', 'to perform with deviations'],
    explanation: `Las colocaciones militares estandarizadas STANAG exigen fórmulas precisas para cada contexto temático.`
  };

  return {
    day: safeDay,
    levelNumber: safeLevel,
    axis,
    phaseNumber: phase.phaseNumber,
    phaseName: phase.name,
    phaseCodename: phase.codename,
    tacticalTheme: arch.theme,
    missionTitle: `Día ${safeDay} • ${arch.title}`,
    objective: arch.objective,
    difficultyRating: rawDifficulty,
    difficultyLevelText,
    recommendedAudioRate,
    pedagogicalBriefing: {
      topic: arch.theme,
      objective: arch.objective,
      vocabulary: arch.vocabulary,
      grammar: arch.grammar,
      phonetics: arch.phonetics,
      usefulPhrase: arch.usefulPhrase
    },
    listening: {
      transmissionTitle: arch.listening.title,
      transmissionScript: arch.listening.script,
      tierLabel: listeningVerification.tierLabel,
      tierDescription: listeningVerification.tierDescription,
      primaryQuestion: shuffledListeningItem1,
      detailQuestion: shuffledListeningItem2,
      dictationSentence,
      dictationTranslation,
      phoneticTargetWords: arch.phonetics.practiceWords
    },
    reading: {
      title: arch.reading.title,
      scenarioContext: `Manual Operacional & Directiva Táctica (Día ${safeDay} • Nivel ${safeLevel})`,
      textPassage: arch.reading.snippet,
      wordCount: readingWordCount,
      primaryQuestion: shuffledReadingPrimary,
      analyticalQuestion: shuffledReadingAnalytical,
      keyTacticalGlossary
    },
    useOfLanguage: {
      grammarTitle: arch.grammar.title,
      formula: arch.grammar.formula,
      rule: arch.grammar.rule,
      questions: shuffledUolQuestions,
      scramblerWords,
      scramblerTargetSentence: cleanPhrase,
      scramblerTranslation: arch.usefulPhrase.translation.split('—')[0].trim(),
      collocationDrill: dailyCollocation
    },
    writing: {
      title: arch.writing.title,
      scenario: arch.writing.scenario,
      targetWordCount: `${targetMinWords} - ${targetMaxWords} palabras`,
      targetMinWords,
      targetMaxWords,
      requiredElements: arch.writing.requiredElements,
      tacticalProwordsAndConnectors: tacticalConnectors,
      modelAnswer: arch.writing.modelAnswer,
      evaluationCriteria: [
        'Uso preciso de vocabulario doctrinal del día',
        'Cumplimiento de la extensión de palabras requerida',
        'Estructura formal militar (encabezado, situación, requerimiento)',
        'Sin errores gramaticales en la regla del día'
      ]
    },
    speaking: {
      title: arch.speaking.title,
      scenario: arch.speaking.scenario,
      recommendedDuration: arch.speaking.recommendedDuration,
      requiredProwords: ['THIS IS', 'ROGER', 'OVER', 'OUT', 'SITREP', 'ACKNOWLEDGE'],
      pronunciationTips: arch.speaking.pronunciationTips,
      modelResponse: arch.speaking.modelResponse,
      phoneticTargetNotes: `Enfoque Fonético: ${arch.phonetics.targetSound} (${arch.phonetics.spanishPhonetic})`
    }
  };
}
