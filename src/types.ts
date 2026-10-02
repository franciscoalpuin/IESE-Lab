export type CompetencyType = 
  | 'listening' // Comprensión Auditiva
  | 'reading'   // Comprensión Escrita
  | 'useOfLanguage' // Uso de la Lengua
  | 'writing'   // Expresión Escrita
  | 'speaking'; // Expresión Oral

export interface MultipleChoiceQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ListeningActivity {
  id: string;
  title: string;
  context: string; // e.g., 'Transmisión de Radio de Patrulla', 'Instrucción en Base Militar', 'Anuncio de Aeropuerto'
  audioText: string;
  speakerRole: string;
  audioProwords?: boolean; // Has military radio effect
  questions: MultipleChoiceQuestion[];
  scriptVisibleDefault?: boolean;
}

export interface ReadingTextActivity {
  id: string;
  title: string;
  textType: string; // 'Informe de Patrulla (SITREP)', 'Artículo Técnico Militar', 'Folleto Oficial', 'Boletín de Base'
  content: string;
  glossary?: { term: string; definition: string }[];
  questions: MultipleChoiceQuestion[];
}

export interface GrammarExercise {
  id: string;
  title: string;
  category: 'tenses' | 'modals' | 'phrasal_verbs' | 'passive_voice' | 'connectors' | 'vocabulary' | 'word_formation' | 'inversion' | 'prepositions' | 'collocations';
  prompt: string;
  instructions: string;
  type: 'multiple-choice' | 'fill-blank' | 'reorder';
  sentenceWithBlank?: string;
  acceptedAnswers?: string[];
  options?: string[];
  correctAnswer?: string;
  explanation: string;
}

export interface WritingTask {
  id: string;
  title: string;
  type: 'form' | 'informal_email' | 'formal_letter' | 'sitrep_report' | 'briefing_notes' | 'argumentative_essay';
  scenario: string;
  targetWordCount: string;
  requiredElements: string[];
  modelAnswer: string;
  usefulPhrases: string[];
}

export interface SpeakingTask {
  id: string;
  title: string;
  situation: string;
  role: string;
  prompt: string;
  recommendedDuration: string;
  modelResponse: string;
  pronunciationTips: string[];
  keyVocabulary: string[];
}

export interface LevelSyllabus {
  levelNumber: number; // 1 to 6
  name: string; // e.g. "Nivel 1 - Principiante Avanzado"
  cefr: string; // "A1+", "A2", "A2+", "B1", "B1+", "B2"
  clockHours: number; // 102
  academicHours: number; // 136
  accumulatedClockHours: number; // 102, 204, 306, 408, 510, 612
  accumulatedAcademicHours: number; // 136, 272, 408, 544, 680, 816
  generalObjective: string;
  thematicCompetencies: string[];
  speechActs: string[];
  grammaticalContents: string[];
  vocabularyTopics: string[];
  phrasalVerbs?: string[];
  militarySpecificTopics: string[];
  culturalReflection: string[];
  functions?: string[];
  writtenComprehensionSkills?: string[];
  writtenExpressionSkills?: string[];
  oralComprehensionSkills?: string[];
  oralExpressionSkills?: string[];
  
  // Exercises for the 5 official areas
  listening: ListeningActivity[];
  reading: ReadingTextActivity[];
  useOfLanguage: GrammarExercise[];
  writing: WritingTask[];
  speaking: SpeakingTask[];
}

export interface MilitaryRankEquivalence {
  argentinaRank: string;
  britishArmyRank: string;
  natoCode: string;
  category: 'Oficiales Generales' | 'Oficiales Superiores' | 'Oficiales Jefes' | 'Oficiales Subalternos' | 'Suboficiales' | 'Tropa';
  description: string;
}

export interface NatoAlphabetItem {
  letter: string;
  codeWord: string;
  pronunciation: string;
  spanishPhonetic?: string;
  morseCode: string;
  exampleSentence: string;
}

export interface MilitaryRadioProword {
  word: string;
  meaning: string;
  spanishEquiv: string;
  spanishPhonetic?: string;
  example: string;
  note?: string;
}

export interface VocabularyGroup {
  theme: string;
  description: string;
  words: {
    term: string;
    ipa: string;
    spanishPhonetic?: string;
    partOfSpeech: string;
    translation: string;
    example: string;
    tacticalTip?: string;
  }[];
}

export interface GrammarOrderElement {
  position: number;
  element: string;
  function: string;
  example: string;
}

export interface GrammarRule {
  title: string;
  structureFormula: string;
  orderElements: GrammarOrderElement[];
  explanation: string;
  examples: {
    english: string;
    spanish: string;
    notes?: string;
  }[];
  commonMistakes: {
    incorrect: string;
    correct: string;
    reason: string;
  }[];
}

export interface PhoneticGuide {
  title: string;
  soundIpa: string;
  description: string;
  articulatoryGuide: string;
  rules: string[];
  minimalPairs?: {
    word1: string;
    ipa1: string;
    word2: string;
    ipa2: string;
    meaning1: string;
    meaning2: string;
  }[];
  practiceWords: {
    word: string;
    ipa: string;
    stressPattern: string;
    translation: string;
  }[];
}

export interface UsefulPhraseGroup {
  communicativeFunction: string;
  situation: string;
  phrases: {
    english: string;
    spanish: string;
    usageNote: string;
    register: 'Formal / Táctico' | 'Neutro' | 'Diplomático';
  }[];
}

export interface AxisTheoryModule {
  axis: CompetencyType;
  levelNumber: number;
  overview: string;
  vocabulary: VocabularyGroup[];
  grammar: GrammarRule[];
  phonetics: PhoneticGuide[];
  usefulPhrases: UsefulPhraseGroup[];
}

export interface MinimalPairItem {
  id: string;
  levelNumber: number;
  contrastTitle: string; // e.g., '/ɪ/ vs /iː/ (Short I vs Long EE)'
  wordA: string;
  ipaA: string;
  meaningA: string;
  wordB: string;
  ipaB: string;
  meaningB: string;
  exampleSentenceA: string;
  exampleSentenceB: string;
  testWordTarget: 'A' | 'B'; // For blind ear test
  tacticalNote: string; // e.g. "Confusing 'ship' and 'sheep' causes errors in naval and logistics comms."
  articulatoryTip: string; // Mouth position and tongue guidance for Spanish speakers
}

export interface SentenceScrambleItem {
  id: string;
  levelNumber: number;
  title: string;
  context: string; // e.g., 'Orden de Operaciones', 'Informe SITREP'
  grammarFocus: string; // e.g., 'SVO + Adverbial of Time', 'First Conditional', 'Inversion'
  correctSentence: string;
  scrambledTokens: string[]; // Shuffled word chunks
  translation: string;
  tacticalTip: string;
}

export interface MilitaryDictationItem {
  id: string;
  levelNumber: number;
  title: string;
  context: string; // e.g., 'Transmisión VHF de Reconocimiento'
  audioText: string;
  difficulty: 'Basic' | 'Intermediate' | 'Advanced' | 'Master';
  keywords: string[]; // Essential military terms required
  hint: string;
  spanishTranslation: string;
  prowordsIncluded?: string[];
}

export interface CollocationMatchPair {
  id: string;
  verb: string;
  collocate: string; // e.g. "reconnaissance", "suppressive fire", "a perimeter"
  spanish: string;
  militaryUsage: string;
}

export interface CollocationExerciseItem {
  id: string;
  levelNumber: number;
  title: string;
  category: 'operational_verbs' | 'phrasal_verbs' | 'tactical_nouns' | 'command_collocations';
  instruction: string;
  pairs: CollocationMatchPair[];
  gapFillQuestions: {
    id: string;
    sentenceWithBlank: string;
    correctCollocate: string;
    options: string[];
    explanation: string;
  }[];
}

export interface DailyPedagogicalIntro {
  topic: string; // Tema oficial IESE
  objective: string; // Objetivo operacional
  vocabulary: {
    term: string;
    translation: string;
    ipa: string;
    spanishPhonetic: string;
    example: string;
  }[]; // Vocabulario con fonética
  grammar: {
    title: string;
    formula: string;
    rule: string;
    tacticalTip: string;
  }; // Gramática
  phonetics: {
    targetSound: string;
    articulatoryTip: string;
    spanishPhonetic: string;
    practiceWords: { word: string; spanishPhonetic: string; translation: string }[];
  }; // Fonética
  usefulPhrase: {
    phrase: string;
    translation: string;
    spanishPhonetic: string;
    tacticalUsage: string;
  }; // Frase útil
}

export interface DailyTrainingBlock {
  id: string;
  title: string;
  durationMinutes: number; // 12 minutos (5 bloques * 12 min = 60 min / 1 hora)
  axis: CompetencyType; // 'listening' | 'reading' | 'useOfLanguage' | 'writing' | 'speaking'
  instructions: string;
  intro: DailyPedagogicalIntro;
  content: string;
  drills: string[];
  sampleAudio?: string;
  practiceQuestion?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
  writingTask?: {
    scenario: string;
    targetWordCount: string;
    requiredElements: string[];
    modelAnswer: string;
  };
  speakingPrompt?: {
    scenario: string;
    recommendedDuration: string;
    pronunciationTips: string[];
    modelResponse: string;
  };
}

export interface DailyTrainingMission {
  day: number; // 1 to 120
  levelNumber: number;
  phaseNumber: 1 | 2 | 3 | 4;
  phaseName: string;
  title: string;
  tacticalTheme: string;
  targetMinutes: number; // 60 minutes (1 hora diaria)
  generalIntro: DailyPedagogicalIntro;
  blocks: DailyTrainingBlock[]; // Exactamente 5 ejercicios diarios: Auditiva, Escrita, Uso de la Lengua, Expresión Escrita, Expresión Oral
}

export interface MilitaryProfile {
  rank: string; // Grado militar (ej: "Teniente Primero", "Capitán", etc.)
  firstName: string; // Nombre
  lastName: string; // Apellido
  destination: string; // Destino militar / Unidad
  photoUrl?: string; // Data URL de la fotografía 4x4
  fileNumber?: string; // Matrícula Militar / Legajo
}

export interface UserProgress {
  completedExerciseIds: string[];
  scores: Record<string, number>; // exerciseId -> score percentage
  levelExamPassed: Record<number, boolean>;
  notes: Record<string, string>;
  lastLevel: number;
  lastInteractionDate?: string; // ISO string of last completed lesson/activity
  completedDays?: Record<number, number[]>; // levelNumber -> array of completed days (1 to 120)
  dailyTrainingMinutes?: Record<number, number>; // levelNumber -> accumulated training minutes (e.g. 120 days * 60 min = 7200 min)
  currentDay?: Record<number, number>; // levelNumber -> current training day (1 to 120)
  profile?: MilitaryProfile; // Ficha y credencial de personal del alumno
}
