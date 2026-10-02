// =========================================================================
// DATA & GENERATOR ENGINE: GRAMMAR LAB (PRONOUNS & TENSES)
// Generador dinámico de ejercicios gramaticales basados en pronombres personales
// y su concordancia en tiempos verbales (Pasado, Presente y Futuro).
// Diseñado conforme a los estándares STANAG 6001 y doctrina IESE.
// =========================================================================

export type TimeCategory = 'present' | 'past' | 'future';

export type GrammarTenseId = 
  | 'present_simple'
  | 'present_continuous'
  | 'present_perfect'
  | 'past_simple'
  | 'past_continuous'
  | 'past_perfect'
  | 'future_simple'
  | 'future_going_to'
  | 'future_continuous';

export type PronounSubject = 'I' | 'You' | 'He' | 'She' | 'It' | 'We' | 'They';

export type ExerciseKind = 'mcq' | 'fill' | 'spot_error' | 'reorder';

export interface GrammarLabExercise {
  id: string;
  kind: ExerciseKind;
  tenseId: GrammarTenseId;
  tenseNameSpanish: string;
  tenseNameEnglish: string;
  timeCategory: TimeCategory;
  targetPronoun: PronounSubject;
  prompt: string;
  sentenceWithBlank: string;
  fullSentence: string;
  options: string[];
  correctIndex: number;
  correctAnswer: string;
  explanation: string;
  formula: string;
  audioText: string;
  phonetic: string;
  spanishTranslation: string;
  tokens?: string[]; // Para modo reordenar palabras
  errorDetails?: {
    incorrectSentence: string;
    erroneousPart: string;
    correction: string;
  };
}

export interface TenseDefinition {
  id: GrammarTenseId;
  nameSpanish: string;
  nameEnglish: string;
  category: TimeCategory;
  formula: string;
  description: string;
  pitfall: string;
}

export const TENSES_METADATA: Record<GrammarTenseId, TenseDefinition> = {
  present_simple: {
    id: 'present_simple',
    nameSpanish: 'Presente Simple',
    nameEnglish: 'Present Simple',
    category: 'present',
    formula: 'Sujeto + Verbo(base / -s / -es) | Neg: do/does not + V(base)',
    description: 'Rutinas, hechos permanentes y órdenes operacionales.',
    pitfall: 'Olvidar la terminación "-s/-es" en He/She/It o usar "don\'t" en lugar de "doesn\'t".'
  },
  present_continuous: {
    id: 'present_continuous',
    nameSpanish: 'Presente Continuo',
    nameEnglish: 'Present Continuous',
    category: 'present',
    formula: 'Sujeto + am/is/are + Verbo-ing',
    description: 'Acciones en progreso en este momento o situaciones temporales.',
    pitfall: 'Confundir la concordancia de "to be" (*They is running ❌ -> They are running ✔️).'
  },
  present_perfect: {
    id: 'present_perfect',
    nameSpanish: 'Presente Perfecto',
    nameEnglish: 'Present Perfect',
    category: 'present',
    formula: 'Sujeto + have/has + Verbo(Past Participle)',
    description: 'Acciones pasadas con relevancia en el presente o experiencias de vida.',
    pitfall: 'Usar "have" con He/She/It (*He have inspected ❌ -> He has inspected ✔️).'
  },
  past_simple: {
    id: 'past_simple',
    nameSpanish: 'Pasado Simple',
    nameEnglish: 'Past Simple',
    category: 'past',
    formula: 'Sujeto + Verbo(-ed / irregular) | Neg: did not + V(base)',
    description: 'Acciones concluidas en un momento específico del pasado.',
    pitfall: 'Usar "was" con plurales (*They was ❌ -> They were ✔️) o doble pasado (*did went ❌).'
  },
  past_continuous: {
    id: 'past_continuous',
    nameSpanish: 'Pasado Continuo',
    nameEnglish: 'Past Continuous',
    category: 'past',
    formula: 'Sujeto + was/were + Verbo-ing',
    description: 'Acciones continuas que se desarrollaban en un momento del pasado.',
    pitfall: 'Usar "were" con I/He/She/It (*He were sleeping ❌ -> He was sleeping ✔️).'
  },
  past_perfect: {
    id: 'past_perfect',
    nameSpanish: 'Pasado Perfecto',
    nameEnglish: 'Past Perfect',
    category: 'past',
    formula: 'Sujeto + had + Verbo(Past Participle)',
    description: 'Acción que ocurrió antes de otra acción en el pasado (el "pasado del pasado").',
    pitfall: 'Confundir el participio con el pasado simple en verbos irregulares (*had went ❌ -> had gone ✔️).'
  },
  future_simple: {
    id: 'future_simple',
    nameSpanish: 'Futuro Simple (Will)',
    nameEnglish: 'Future Simple (Will)',
    category: 'future',
    formula: 'Sujeto + will/won\'t + Verbo(base)',
    description: 'Decisiones espontáneas, promesas, predicciones y directivas formales.',
    pitfall: 'Agregar "-s" o "to" tras "will" (*He will goes ❌ / He will to go ❌ -> He will go ✔️).'
  },
  future_going_to: {
    id: 'future_going_to',
    nameSpanish: 'Futuro Intencional (Going To)',
    nameEnglish: 'Future (Be Going To)',
    category: 'future',
    formula: 'Sujeto + am/is/are + going to + Verbo(base)',
    description: 'Planes predeterminados, intenciones premeditadas y evidencias inminentes.',
    pitfall: 'Omitir el verbo To Be (*They going to deploy ❌ -> They are going to deploy ✔️).'
  },
  future_continuous: {
    id: 'future_continuous',
    nameSpanish: 'Futuro Continuo',
    nameEnglish: 'Future Continuous',
    category: 'future',
    formula: 'Sujeto + will be + Verbo-ing',
    description: 'Acciones que estarán en curso en un momento determinado del futuro.',
    pitfall: 'Omitir "be" (*She will operating ❌ -> She will be operating ✔️).'
  }
};

// =========================================================================
// BANCO BASE DE VERBOS Y CONTEXTOS OPERATIVOS / COTIDIANOS
// =========================================================================

interface VerbEntry {
  base: string;
  thirdPerson: string;
  pastSimple: string;
  pastParticiple: string;
  ing: string;
  spanish: string;
  objectContext: string;
  spanishObjectContext: string;
  phoneticBase: string;
}

const VERB_BANK: VerbEntry[] = [
  {
    base: 'inspect',
    thirdPerson: 'inspects',
    pastSimple: 'inspected',
    pastParticiple: 'inspected',
    ing: 'inspecting',
    spanish: 'inspeccionar',
    objectContext: 'the perimeter checkpoint',
    spanishObjectContext: 'el puesto de control perimetral',
    phoneticBase: 'in-spékt'
  },
  {
    base: 'patrol',
    thirdPerson: 'patrols',
    pastSimple: 'patrolled',
    pastParticiple: 'patrolled',
    ing: 'patrolling',
    spanish: 'patrullar',
    objectContext: 'Sector Bravo during the night',
    spanishObjectContext: 'el Sector Bravo durante la noche',
    phoneticBase: 'pa-tróul'
  },
  {
    base: 'operate',
    thirdPerson: 'operates',
    pastSimple: 'operated',
    pastParticiple: 'operated',
    ing: 'operating',
    spanish: 'operar',
    objectContext: 'the VHF tactical radio',
    spanishObjectContext: 'la radio táctica VHF',
    phoneticBase: 'óp-er-eit'
  },
  {
    base: 'send',
    thirdPerson: 'sends',
    pastSimple: 'sent',
    pastParticiple: 'sent',
    ing: 'sending',
    spanish: 'enviar',
    objectContext: 'the encrypted SITREP to headquarters',
    spanishObjectContext: 'el informe de situación cifrado al cuartel general',
    phoneticBase: 'send'
  },
  {
    base: 'receive',
    thirdPerson: 'receives',
    pastSimple: 'received',
    pastParticiple: 'received',
    ing: 'receiving',
    spanish: 'recibir',
    objectContext: 'new coordinates from the officer in charge',
    spanishObjectContext: 'nuevas coordenadas del oficial a cargo',
    phoneticBase: 'ri-sív'
  },
  {
    base: 'secure',
    thirdPerson: 'secures',
    pastSimple: 'secured',
    pastParticiple: 'secured',
    ing: 'securing',
    spanish: 'asegurar',
    objectContext: 'the ammunition depot',
    spanishObjectContext: 'el depósito de munición',
    phoneticBase: 'se-kiúr'
  },
  {
    base: 'verify',
    thirdPerson: 'verifies',
    pastSimple: 'verified',
    pastParticiple: 'verified',
    ing: 'verifying',
    spanish: 'verificar',
    objectContext: 'the identity of all incoming personnel',
    spanishObjectContext: 'la identidad de todo el personal ingresante',
    phoneticBase: 'vér-i-fai'
  },
  {
    base: 'complete',
    thirdPerson: 'completes',
    pastSimple: 'completed',
    pastParticiple: 'completed',
    ing: 'completing',
    spanish: 'completar',
    objectContext: 'the advanced reconnaissance mission',
    spanishObjectContext: 'la misión de reconocimiento avanzado',
    phoneticBase: 'kom-plít'
  },
  {
    base: 'maintain',
    thirdPerson: 'maintains',
    pastSimple: 'maintained',
    pastParticiple: 'maintained',
    ing: 'maintaining',
    spanish: 'mantener',
    objectContext: 'continuous radio silence on the frequency',
    spanishObjectContext: 'silencio de radio continuo en la frecuencia',
    phoneticBase: 'mein-téin'
  },
  {
    base: 'deliver',
    thirdPerson: 'delivers',
    pastSimple: 'delivered',
    pastParticiple: 'delivered',
    ing: 'delivering',
    spanish: 'entregar',
    objectContext: 'the tactical logistics report',
    spanishObjectContext: 'el informe logístico táctico',
    phoneticBase: 'di-lív-er'
  },
  {
    base: 'lead',
    thirdPerson: 'leads',
    pastSimple: 'led',
    pastParticiple: 'led',
    ing: 'leading',
    spanish: 'liderar / encabezar',
    objectContext: 'the detachment towards the rally point',
    spanishObjectContext: 'el destacamento hacia el punto de reunión',
    phoneticBase: 'lid'
  },
  {
    base: 'prepare',
    thirdPerson: 'prepares',
    pastSimple: 'prepared',
    pastParticiple: 'prepared',
    ing: 'preparing',
    spanish: 'preparar',
    objectContext: 'the emergency medical evacuation kit',
    spanishObjectContext: 'el botiquín de evacuación médica de emergencia',
    phoneticBase: 'pri-pér'
  }
];

// Helper para obtener auxiliares y formas según pronombre y tiempo
export function getConjugationForms(pronoun: PronounSubject, tense: GrammarTenseId, verb: VerbEntry) {
  const is3rdSingular = pronoun === 'He' || pronoun === 'She' || pronoun === 'It';
  const isI = pronoun === 'I';
  const isPlural = pronoun === 'We' || pronoun === 'They' || pronoun === 'You';

  switch (tense) {
    case 'present_simple': {
      const affirmativeVerb = is3rdSingular ? verb.thirdPerson : verb.base;
      const negativeAux = is3rdSingular ? "does not" : "do not";
      const negativeContracted = is3rdSingular ? "doesn't" : "don't";
      const questionAux = is3rdSingular ? "Does" : "Do";
      const wrongVerb3rd = is3rdSingular ? verb.base : verb.thirdPerson;
      const wrongNeg = is3rdSingular ? "do not" : "does not";
      return {
        affirmative: `${affirmativeVerb}`,
        negative: `${negativeContracted} ${verb.base}`,
        fullAffirmative: `${pronoun} ${affirmativeVerb} ${verb.objectContext}.`,
        fullNegative: `${pronoun} ${negativeContracted} ${verb.base} ${verb.objectContext}.`,
        fullQuestion: `${questionAux} ${pronoun.toLowerCase()} ${verb.base} ${verb.objectContext}?`,
        correctForm: affirmativeVerb,
        distractors: [wrongVerb3rd, `${verb.ing}`, `${verb.pastSimple}`],
        distractorNegatives: [`${wrongNeg} ${verb.base}`, `not ${affirmativeVerb}`, `is not ${verb.base}`]
      };
    }

    case 'present_continuous': {
      const aux = isI ? 'am' : is3rdSingular ? 'is' : 'are';
      const wrongAux1 = isI ? 'are' : is3rdSingular ? 'are' : 'is';
      const wrongAux2 = isI ? 'is' : is3rdSingular ? 'am' : 'was';
      return {
        affirmative: `${aux} ${verb.ing}`,
        negative: `${aux} not ${verb.ing}`,
        fullAffirmative: `${pronoun} ${aux} ${verb.ing} ${verb.objectContext}.`,
        fullNegative: `${pronoun} ${aux} not ${verb.ing} ${verb.objectContext}.`,
        fullQuestion: `${aux.charAt(0).toUpperCase() + aux.slice(1)} ${pronoun.toLowerCase()} ${verb.ing} ${verb.objectContext}?`,
        correctForm: `${aux} ${verb.ing}`,
        distractors: [`${wrongAux1} ${verb.ing}`, `${wrongAux2} ${verb.ing}`, `${aux} ${verb.base}`],
        distractorNegatives: [`${wrongAux1} not ${verb.ing}`, `not ${aux} ${verb.ing}`, `${aux} not ${verb.base}`]
      };
    }

    case 'present_perfect': {
      const aux = is3rdSingular ? 'has' : 'have';
      const wrongAux = is3rdSingular ? 'have' : 'has';
      return {
        affirmative: `${aux} ${verb.pastParticiple}`,
        negative: `${aux} not ${verb.pastParticiple}`,
        fullAffirmative: `${pronoun} ${aux} ${verb.pastParticiple} ${verb.objectContext}.`,
        fullNegative: `${pronoun} ${aux} not ${verb.pastParticiple} ${verb.objectContext}.`,
        fullQuestion: `${aux.charAt(0).toUpperCase() + aux.slice(1)} ${pronoun.toLowerCase()} ${verb.pastParticiple} ${verb.objectContext}?`,
        correctForm: `${aux} ${verb.pastParticiple}`,
        distractors: [`${wrongAux} ${verb.pastParticiple}`, `${aux} ${verb.base}`, `${aux} ${verb.ing}`],
        distractorNegatives: [`${wrongAux} not ${verb.pastParticiple}`, `did not ${verb.pastParticiple}`, `${aux} not ${verb.base}`]
      };
    }

    case 'past_simple': {
      const verbForm = verb.pastSimple;
      return {
        affirmative: `${verbForm}`,
        negative: `did not ${verb.base}`,
        fullAffirmative: `${pronoun} ${verbForm} ${verb.objectContext} yesterday.`,
        fullNegative: `${pronoun} did not ${verb.base} ${verb.objectContext} yesterday.`,
        fullQuestion: `Did ${pronoun.toLowerCase()} ${verb.base} ${verb.objectContext} yesterday?`,
        correctForm: verbForm,
        distractors: [`did ${verbForm}`, verb.base, `${verb.ing}`],
        distractorNegatives: [`did not ${verbForm}`, `didn't ${verb.pastParticiple}`, `not ${verbForm}`]
      };
    }

    case 'past_continuous': {
      const aux = (isI || is3rdSingular) ? 'was' : 'were';
      const wrongAux = (isI || is3rdSingular) ? 'were' : 'was';
      return {
        affirmative: `${aux} ${verb.ing}`,
        negative: `${aux} not ${verb.ing}`,
        fullAffirmative: `${pronoun} ${aux} ${verb.ing} ${verb.objectContext} at 0200 hours.`,
        fullNegative: `${pronoun} ${aux} not ${verb.ing} ${verb.objectContext} at 0200 hours.`,
        fullQuestion: `${aux.charAt(0).toUpperCase() + aux.slice(1)} ${pronoun.toLowerCase()} ${verb.ing} ${verb.objectContext}?`,
        correctForm: `${aux} ${verb.ing}`,
        distractors: [`${wrongAux} ${verb.ing}`, `${aux} ${verb.base}`, `${wrongAux} ${verb.base}`],
        distractorNegatives: [`${wrongAux} not ${verb.ing}`, `${aux} not ${verb.base}`, `did not ${verb.ing}`]
      };
    }

    case 'past_perfect': {
      return {
        affirmative: `had ${verb.pastParticiple}`,
        negative: `had not ${verb.pastParticiple}`,
        fullAffirmative: `${pronoun} had ${verb.pastParticiple} ${verb.objectContext} before the air raid started.`,
        fullNegative: `${pronoun} had not ${verb.pastParticiple} ${verb.objectContext} before the air raid started.`,
        fullQuestion: `Had ${pronoun.toLowerCase()} ${verb.pastParticiple} ${verb.objectContext} before the order arrived?`,
        correctForm: `had ${verb.pastParticiple}`,
        distractors: [`has ${verb.pastParticiple}`, `had ${verb.base}`, `have ${verb.pastParticiple}`],
        distractorNegatives: [`has not ${verb.pastParticiple}`, `had not ${verb.base}`, `did not had ${verb.base}`]
      };
    }

    case 'future_simple': {
      return {
        affirmative: `will ${verb.base}`,
        negative: `will not ${verb.base}`,
        fullAffirmative: `${pronoun} will ${verb.base} ${verb.objectContext} tomorrow.`,
        fullNegative: `${pronoun} will not ${verb.base} ${verb.objectContext} tomorrow.`,
        fullQuestion: `Will ${pronoun.toLowerCase()} ${verb.base} ${verb.objectContext} tomorrow?`,
        correctForm: `will ${verb.base}`,
        distractors: [`will ${verb.thirdPerson}`, `will to ${verb.base}`, `wills ${verb.base}`],
        distractorNegatives: [`will not to ${verb.base}`, `won't ${verb.thirdPerson}`, `will not ${verb.ing}`]
      };
    }

    case 'future_going_to': {
      const aux = isI ? 'am' : is3rdSingular ? 'is' : 'are';
      const wrongAux = isI ? 'are' : is3rdSingular ? 'are' : 'is';
      return {
        affirmative: `${aux} going to ${verb.base}`,
        negative: `${aux} not going to ${verb.base}`,
        fullAffirmative: `${pronoun} ${aux} going to ${verb.base} ${verb.objectContext} as ordered.`,
        fullNegative: `${pronoun} ${aux} not going to ${verb.base} ${verb.objectContext} without permission.`,
        fullQuestion: `${aux.charAt(0).toUpperCase() + aux.slice(1)} ${pronoun.toLowerCase()} going to ${verb.base} ${verb.objectContext}?`,
        correctForm: `${aux} going to ${verb.base}`,
        distractors: [`going to ${verb.base}`, `${wrongAux} going to ${verb.base}`, `${aux} going ${verb.base}`],
        distractorNegatives: [`not going to ${verb.base}`, `${wrongAux} not going to ${verb.base}`, `${aux} not going ${verb.base}`]
      };
    }

    case 'future_continuous': {
      return {
        affirmative: `will be ${verb.ing}`,
        negative: `will not be ${verb.ing}`,
        fullAffirmative: `${pronoun} will be ${verb.ing} ${verb.objectContext} at this time tomorrow.`,
        fullNegative: `${pronoun} will not be ${verb.ing} ${verb.objectContext} at this time tomorrow.`,
        fullQuestion: `Will ${pronoun.toLowerCase()} be ${verb.ing} ${verb.objectContext} at dawn?`,
        correctForm: `will be ${verb.ing}`,
        distractors: [`will ${verb.ing}`, `will be ${verb.base}`, `will is ${verb.ing}`],
        distractorNegatives: [`will not ${verb.ing}`, `won't be ${verb.base}`, `will be not ${verb.ing}`]
      };
    }
  }
}

// =========================================================================
// BANCO CURADO DE ALTO IMPACTO (STANAG 6001 / IESE DOCTRINA)
// =========================================================================

export const CURATED_GRAMMAR_LAB_BANK: GrammarLabExercise[] = [
  // 1. Presente Simple - 3ª Persona Singular (-s)
  {
    id: 'c-ps-1',
    kind: 'mcq',
    tenseId: 'present_simple',
    tenseNameSpanish: 'Presente Simple',
    tenseNameEnglish: 'Present Simple',
    timeCategory: 'present',
    targetPronoun: 'He',
    prompt: 'Selecciona la forma verbal correcta para el pronombre "He" en Presente Simple:',
    sentenceWithBlank: 'Every morning at 0600, He [ _____ ] the perimeter watch.',
    fullSentence: 'Every morning at 0600, He inspects the perimeter watch.',
    options: ['inspects', 'inspect', 'inspecting', 'inspected'],
    correctIndex: 0,
    correctAnswer: 'inspects',
    explanation: 'En Presente Simple afirmativo, la 3ª persona singular (He, She, It) añade obligatoriamente "-s" o "-es" al verbo base.',
    formula: 'He / She / It + Verbo-s/-es',
    audioText: 'Every morning at zero-six-hundred, he inspects the perimeter watch.',
    phonetic: 'év-ri mór-ning at sí-ro siks ján-dred, jí in-spékts de pe-rím-e-ter uótch',
    spanishTranslation: 'Cada mañana a las 0600, él inspecciona la guardia perimetral.'
  },

  // 2. Presente Simple - Negativo con She (doesn't vs don't)
  {
    id: 'c-ps-2',
    kind: 'mcq',
    tenseId: 'present_simple',
    tenseNameSpanish: 'Presente Simple',
    tenseNameEnglish: 'Present Simple',
    timeCategory: 'present',
    targetPronoun: 'She',
    prompt: 'Elige el auxiliar negativo reglamentario para "She" en Presente Simple:',
    sentenceWithBlank: 'Captain Torres confirmed that She [ _____ ] leave her radio post unattended.',
    fullSentence: 'Captain Torres confirmed that She does not leave her radio post unattended.',
    options: ['does not', 'do not', 'is not', 'did not'],
    correctIndex: 0,
    correctAnswer: 'does not',
    explanation: 'La negación en Presente Simple para He/She/It se construye con "does not" (o "doesn\'t") seguido del verbo en infinitivo sin to.',
    formula: 'He / She / It + does not (doesn\'t) + Verbo(base)',
    audioText: 'Captain Torres confirmed that she does not leave her radio post unattended.',
    phonetic: 'káp-tin tór-res kon-férmd dat shí das not liv jer réi-di-ou poust an-at-én-ded',
    spanishTranslation: 'La capitán Torres confirmó que ella no deja su puesto de radio sin vigilancia.'
  },

  // 3. Pasado Simple - To Be con Plural (They were vs They was)
  {
    id: 'c-past-1',
    kind: 'spot_error',
    tenseId: 'past_simple',
    tenseNameSpanish: 'Pasado Simple',
    tenseNameEnglish: 'Past Simple',
    timeCategory: 'past',
    targetPronoun: 'They',
    prompt: 'Identifica y corrige el error crítico de concordancia de pasado en la transmisión:',
    sentenceWithBlank: 'At 2300 hours, [ _____ ] stationed near the northern fuel storage depot.',
    fullSentence: 'At 2300 hours, they were stationed near the northern fuel storage depot.',
    options: ['they were', 'they was', 'they did were', 'they are'],
    correctIndex: 0,
    correctAnswer: 'they were',
    explanation: 'En Pasado Simple del verbo To Be, los pronombres plurales (They, We, You) exigen "were". Decir *"they was"* es un error severamente penalizado en STANAG 6001.',
    formula: 'They / We / You + were (NUNCA "was")',
    audioText: 'At twenty-three-hundred hours, they were stationed near the northern fuel storage depot.',
    phonetic: 'at tuén-ti zrí ján-dred áu-ers, déi uér stéi-shond níer de nór-dern fiú-el stór-idj dí-pou',
    spanishTranslation: 'A las 2300 horas, ellos estaban apostados cerca del depósito norte de combustible.',
    errorDetails: {
      incorrectSentence: 'At 2300 hours, they was stationed near the northern fuel storage depot.',
      erroneousPart: 'they was',
      correction: 'they were'
    }
  },

  // 4. Pasado Simple - Negativo con Did + Base (no double past)
  {
    id: 'c-past-2',
    kind: 'mcq',
    tenseId: 'past_simple',
    tenseNameSpanish: 'Pasado Simple (Negativo)',
    tenseNameEnglish: 'Past Simple (Negative)',
    timeCategory: 'past',
    targetPronoun: 'We',
    prompt: 'Completa la negación en Pasado Simple evitando la trampa del doble pasado:',
    sentenceWithBlank: 'Yesterday, We [ _____ ] any unauthorized vehicles enter the restricted zone.',
    fullSentence: 'Yesterday, We did not see any unauthorized vehicles enter the restricted zone.',
    options: ['did not see', 'did not saw', 'not saw', 'didn\'t seen'],
    correctIndex: 0,
    correctAnswer: 'did not see',
    explanation: 'Cuando se utiliza el auxiliar negativo "did not" (didn\'t), el verbo principal DEBE permanecer en su forma base (infinitivo sin to). Decir *"didn\'t saw"* es incorrecto.',
    formula: 'Sujeto + did not + Verbo(base) [NUNCA verbo en pasado]',
    audioText: 'Yesterday, we did not see any unauthorized vehicles enter the restricted zone.',
    phonetic: 'iés-ter-dei, uí did not sí én-i an-ó-zo-raizd ví-i-kls én-ter de ri-strík-tid zóun',
    spanishTranslation: 'Ayer nosotros no vimos ningún vehículo no autorizado ingresar a la zona restringida.'
  },

  // 5. Presente Perfecto - He has vs He have
  {
    id: 'c-perf-1',
    kind: 'mcq',
    tenseId: 'present_perfect',
    tenseNameSpanish: 'Presente Perfecto',
    tenseNameEnglish: 'Present Perfect',
    timeCategory: 'present',
    targetPronoun: 'He',
    prompt: 'Selecciona el auxiliar y participio correctos para "He" en Presente Perfecto:',
    sentenceWithBlank: 'The Sergeant reports that He [ _____ ] all night shift assignments.',
    fullSentence: 'The Sergeant reports that He has completed all night shift assignments.',
    options: ['has completed', 'have completed', 'has complete', 'having completed'],
    correctIndex: 0,
    correctAnswer: 'has completed',
    explanation: 'El Presente Perfecto con He, She o It se forma exclusivamente con el auxiliar "has" + Participio Pasado (V3). Nunca uses "have" con la 3ª persona singular.',
    formula: 'He / She / It + has + Past Participle',
    audioText: 'The Sergeant reports that he has completed all night shift assignments.',
    phonetic: 'de sár-djent ri-pórts dat jí jas kom-plí-tid ól náit shift a-sáin-ments',
    spanishTranslation: 'El sargento informa que él ha completado todas las asignaciones del turno noche.'
  },

  // 6. Pasado Continuo - Was vs Were con I
  {
    id: 'c-pc-1',
    kind: 'mcq',
    tenseId: 'past_continuous',
    tenseNameSpanish: 'Pasado Continuo',
    tenseNameEnglish: 'Past Continuous',
    timeCategory: 'past',
    targetPronoun: 'I',
    prompt: 'Concordancia de 1ª persona en Pasado Continuo:',
    sentenceWithBlank: 'When the alarm sounded, I [ _____ ] the radar transmission log.',
    fullSentence: 'When the alarm sounded, I was monitoring the radar transmission log.',
    options: ['was monitoring', 'were monitoring', 'am monitoring', 'did monitoring'],
    correctIndex: 0,
    correctAnswer: 'was monitoring',
    explanation: 'El pronombre "I" (yo) en Pasado Continuo utiliza "was" + gerundio (-ing), coincidiendo con he/she/it.',
    formula: 'I / He / She / It + was + Verbo-ing',
    audioText: 'When the alarm sounded, I was monitoring the radar transmission log.',
    phonetic: 'uén de a-lárm sáun-did, ái uos món-i-tor-ing de réi-dar trans-mí-shon log',
    spanishTranslation: 'Cuando sonó la alarma, yo estaba monitoreando el registro de transmisiones del radar.'
  },

  // 7. Futuro con Be Going To - Concordancia con You (plural)
  {
    id: 'c-fgt-1',
    kind: 'mcq',
    tenseId: 'future_going_to',
    tenseNameSpanish: 'Futuro Intencional (Going To)',
    tenseNameEnglish: 'Future (Be Going To)',
    timeCategory: 'future',
    targetPronoun: 'You',
    prompt: 'Completa la orden operacional con la estructura correcta de "Be Going To":',
    sentenceWithBlank: 'Attention team: You [ _____ ] deploy to Observation Post Charlie at dawn.',
    fullSentence: 'Attention team: You are going to deploy to Observation Post Charlie at dawn.',
    options: ['are going to deploy', 'is going to deploy', 'going to deploy', 'will going to deploy'],
    correctIndex: 0,
    correctAnswer: 'are going to deploy',
    explanation: 'La estructura de futuro "Be Going To" requiere la conjugación del verbo To Be según el sujeto: You + are + going to + verbo base.',
    formula: 'You / We / They + are going to + Verbo(base)',
    audioText: 'Attention team: You are going to deploy to Observation Post Charlie at dawn.',
    phonetic: 'a-tén-shon tim: iú ar góu-ing tu di-plói tu ob-zer-véi-shon poust chár-li at dón',
    spanishTranslation: 'Atención equipo: ustedes van a desplegarse hacia el Puesto de Observación Charlie al amanecer.'
  },

  // 8. Futuro Simple (Will) - Modales sin -s ni to
  {
    id: 'c-fwill-1',
    kind: 'spot_error',
    tenseId: 'future_simple',
    tenseNameSpanish: 'Futuro Simple (Will)',
    tenseNameEnglish: 'Future Simple (Will)',
    timeCategory: 'future',
    targetPronoun: 'She',
    prompt: 'Detecta el error común al conjugar el futuro con 3ª persona singular:',
    sentenceWithBlank: 'Lieutenant Miller confirmed that She [ _____ ] the communications antenna tomorrow.',
    fullSentence: 'Lieutenant Miller confirmed that She will repair the communications antenna tomorrow.',
    options: ['will repair', 'will repairs', 'will to repair', 'wills repair'],
    correctIndex: 0,
    correctAnswer: 'will repair',
    explanation: 'El auxiliar modal "will" nunca agrega "-s" ni va seguido de "to". El verbo principal siempre va en infinitivo puro sin cambios.',
    formula: 'Cualquier Sujeto + will + Verbo(base) [Sin "-s", sin "to"]',
    audioText: 'Lieutenant Miller confirmed that she will repair the communications antenna tomorrow.',
    phonetic: 'lef-tén-ant míl-er kon-férmd dat shí uil ri-pér de ko-miu-ni-kéi-shons an-tén-a tu-mó-rou',
    spanishTranslation: 'La teniente Miller confirmó que ella reparará la antena de comunicaciones mañana.',
    errorDetails: {
      incorrectSentence: 'Lieutenant Miller confirmed that she will repairs the communications antenna tomorrow.',
      erroneousPart: 'will repairs',
      correction: 'will repair'
    }
  },

  // 9. Pasado Perfecto - Had + Participio
  {
    id: 'c-pastperf-1',
    kind: 'mcq',
    tenseId: 'past_perfect',
    tenseNameSpanish: 'Pasado Perfecto',
    tenseNameEnglish: 'Past Perfect',
    timeCategory: 'past',
    targetPronoun: 'We',
    prompt: 'Selecciona la forma correcta para indicar una acción previa a otra en el pasado:',
    sentenceWithBlank: 'By 0500 hours, We [ _____ ] the bridge before the convoy arrived.',
    fullSentence: 'By 0500 hours, We had secured the bridge before the convoy arrived.',
    options: ['had secured', 'have secured', 'had secure', 'would secured'],
    correctIndex: 0,
    correctAnswer: 'had secured',
    explanation: 'El Pasado Perfecto ("had + participio") describe una acción concluida antes de otro evento en el pasado (the convoy arrived).',
    formula: 'Sujeto + had + Past Participle',
    audioText: 'By zero-five-hundred hours, we had secured the bridge before the convoy arrived.',
    phonetic: 'bai sí-ro fáiv ján-dred áu-ers, uí jad se-kiúrd de bridj bi-fór de kón-voi a-ráivd',
    spanishTranslation: 'Para las 0500 horas, nosotros ya habíamos asegurado el puente antes de que llegara el convoy.'
  },

  // 10. Declinación de Pronombre - Sujeto vs Objeto en Pasado
  {
    id: 'c-decl-1',
    kind: 'mcq',
    tenseId: 'past_simple',
    tenseNameSpanish: 'Declinación de Pronombre (Objeto)',
    tenseNameEnglish: 'Pronoun Case (Subject vs Object)',
    timeCategory: 'past',
    targetPronoun: 'He',
    prompt: 'Elige la forma pronominal correcta (sujeto vs objeto) en posición de complemento:',
    sentenceWithBlank: 'The Commanding Officer commended [ _____ ] for his bravery during the past operation.',
    fullSentence: 'The Commanding Officer commended him for his bravery during the past operation.',
    options: ['him', 'he', 'his', 'himself'],
    correctIndex: 0,
    correctAnswer: 'him',
    explanation: 'Tras un verbo transitivo (commended) se utiliza el pronombre en caso objeto ("him"). "He" solo funciona como sujeto de la oración.',
    formula: 'Verbo transitivo + Pronombre Objeto (him / her / them / me / us)',
    audioText: 'The Commanding Officer commended him for his bravery during the past operation.',
    phonetic: 'de ko-mán-ding óf-is-er ko-mén-did jim for jis bréiv-er-i diú-ring de past op-er-éi-shon',
    spanishTranslation: 'El comandante lo felicitó a él por su valentía durante la operación pasada.'
  },

  // 11. Reordenamiento Sintáctico - Futuro Continuo
  {
    id: 'c-reorder-1',
    kind: 'reorder',
    tenseId: 'future_continuous',
    tenseNameSpanish: 'Futuro Continuo (Reordenamiento)',
    tenseNameEnglish: 'Future Continuous (Word Order)',
    timeCategory: 'future',
    targetPronoun: 'They',
    prompt: 'Reordena las palabras tácticas para formar la oración afirmativa en Futuro Continuo:',
    sentenceWithBlank: '[ Reordena los bloques para formar la oración correcta ]',
    fullSentence: 'They will be patrolling the southern ridge all night.',
    options: ['They', 'will be', 'patrolling', 'the southern ridge', 'all night.'],
    correctIndex: 0,
    correctAnswer: 'They will be patrolling the southern ridge all night.',
    explanation: 'La estructura correcta es: Sujeto (They) + auxiliar compuesto (will be) + gerundio (patrolling) + complemento (the southern ridge all night).',
    formula: 'Sujeto + will be + Verbo-ing + Complemento',
    audioText: 'They will be patrolling the southern ridge all night.',
    phonetic: 'déi uil bi pa-tróul-ing de sá-dern ridj ól náit',
    spanishTranslation: 'Ellos estarán patrullando la cresta sur toda la noche.',
    tokens: ['They', 'will be', 'patrolling', 'the southern ridge', 'all night.']
  },

  // 12. Presente Simple - Pregunta con Does
  {
    id: 'c-ps-q1',
    kind: 'mcq',
    tenseId: 'present_simple',
    tenseNameSpanish: 'Presente Simple (Interrogativo)',
    tenseNameEnglish: 'Present Simple (Question)',
    timeCategory: 'present',
    targetPronoun: 'It',
    prompt: 'Estructura interrogativa en Presente Simple para el pronombre neutro "It":',
    sentenceWithBlank: '[ _____ ] transmit encrypted tactical signals on this high frequency?',
    fullSentence: 'Does it transmit encrypted tactical signals on this high frequency?',
    options: ['Does it', 'Do it', 'Is it', 'Does it transmits'],
    correctIndex: 0,
    correctAnswer: 'Does it',
    explanation: 'Las preguntas en Presente Simple para He/She/It comienzan con "Does" seguido del sujeto y el verbo en forma base (sin -s).',
    formula: 'Does + he/she/it + Verbo(base) ... ?',
    audioText: 'Does it transmit encrypted tactical signals on this high frequency?',
    phonetic: 'das it trans-mít en-kríp-tid ták-ti-kl síg-nals on dis jai frí-kuen-si',
    spanishTranslation: '¿Transmite señales tácticas cifradas en esta alta frecuencia?'
  }
];

// =========================================================================
// MOTOR GENERADOR PROCEDURAL DINÁMICO
// Genera combinaciones ilimitadas basadas en los filtros seleccionados
// =========================================================================

export interface GeneratorFilterOptions {
  timeCategory?: 'all' | TimeCategory;
  tenseId?: 'all' | GrammarTenseId;
  pronoun?: 'all' | PronounSubject | '3rd_singular';
  kind?: 'all' | ExerciseKind;
  count?: number;
  seed?: string;
}

export function generateDynamicGrammarExercises(options: GeneratorFilterOptions = {}): GrammarLabExercise[] {
  const {
    timeCategory = 'all',
    tenseId = 'all',
    pronoun = 'all',
    kind = 'all',
    count = 10,
    seed = Math.random().toString(36).substring(2)
  } = options;

  // 1. Filtrar los curados que coincidan
  const filteredCurated = CURATED_GRAMMAR_LAB_BANK.filter(ex => {
    if (timeCategory !== 'all' && ex.timeCategory !== timeCategory) return false;
    if (tenseId !== 'all' && ex.tenseId !== tenseId) return false;
    if (pronoun === '3rd_singular' && !['He', 'She', 'It'].includes(ex.targetPronoun)) return false;
    if (pronoun !== 'all' && pronoun !== '3rd_singular' && ex.targetPronoun !== pronoun) return false;
    if (kind !== 'all' && ex.kind !== kind) return false;
    return true;
  });

  // 2. Generar sintéticamente ejercicios procedurales para completar la cuota o añadir variedad
  const proceduralExercises: GrammarLabExercise[] = [];
  const allTenses: GrammarTenseId[] = [
    'present_simple',
    'present_continuous',
    'present_perfect',
    'past_simple',
    'past_continuous',
    'past_perfect',
    'future_simple',
    'future_going_to',
    'future_continuous'
  ];

  const allPronouns: PronounSubject[] = ['I', 'You', 'He', 'She', 'It', 'We', 'They'];

  // Función determinista pseudoaleatoria basada en el seed
  let seedValue = 0;
  for (let i = 0; i < seed.length; i++) {
    seedValue = (seedValue * 31 + seed.charCodeAt(i)) % 1000000;
  }
  const nextPseudoRand = () => {
    seedValue = (seedValue * 9301 + 49297) % 233280;
    return seedValue / 233280;
  };

  // Generamos candidatos procedurales
  for (let i = 0; i < VERB_BANK.length * 2; i++) {
    const vIndex = Math.floor(nextPseudoRand() * VERB_BANK.length);
    const verb = VERB_BANK[vIndex];

    // Seleccionar tiempo compatible con el filtro
    let tId: GrammarTenseId;
    if (tenseId !== 'all') {
      tId = tenseId;
    } else if (timeCategory !== 'all') {
      const candidates = allTenses.filter(t => TENSES_METADATA[t].category === timeCategory);
      tId = candidates[Math.floor(nextPseudoRand() * candidates.length)];
    } else {
      tId = allTenses[Math.floor(nextPseudoRand() * allTenses.length)];
    }

    // Seleccionar pronombre compatible
    let pSubject: PronounSubject;
    if (pronoun === '3rd_singular') {
      const p3 = ['He', 'She', 'It'] as PronounSubject[];
      pSubject = p3[Math.floor(nextPseudoRand() * p3.length)];
    } else if (pronoun !== 'all') {
      pSubject = pronoun;
    } else {
      pSubject = allPronouns[Math.floor(nextPseudoRand() * allPronouns.length)];
    }

    const tMeta = TENSES_METADATA[tId];
    const forms = getConjugationForms(pSubject, tId, verb);

    // Tipo de ejercicio
    const candidateKinds: ExerciseKind[] = ['mcq', 'fill', 'spot_error'];
    const chosenKind = kind !== 'all' ? kind : candidateKinds[Math.floor(nextPseudoRand() * candidateKinds.length)];

    let exercise: GrammarLabExercise;

    if (chosenKind === 'spot_error') {
      // Ejercicio de detectar error
      const erroneousForm = forms.distractors[0];
      const incorrectSentence = `${pSubject} ${erroneousForm} ${verb.objectContext}.`;
      const optionsShuffled = [forms.correctForm, ...forms.distractors.slice(0, 3)];
      // Barajado determinista
      for (let j = optionsShuffled.length - 1; j > 0; j--) {
        const k = Math.floor(nextPseudoRand() * (j + 1));
        [optionsShuffled[j], optionsShuffled[k]] = [optionsShuffled[k], optionsShuffled[j]];
      }
      const correctIndex = optionsShuffled.indexOf(forms.correctForm);

      exercise = {
        id: `proc-spot-${i}-${tId}-${pSubject.toLowerCase()}`,
        kind: 'spot_error',
        tenseId: tId,
        tenseNameSpanish: tMeta.nameSpanish,
        tenseNameEnglish: tMeta.nameEnglish,
        timeCategory: tMeta.category,
        targetPronoun: pSubject,
        prompt: `Detecta y corrige la discordancia en la frase errónea: "${incorrectSentence}"`,
        sentenceWithBlank: `${pSubject} [ _____ ] ${verb.objectContext}.`,
        fullSentence: `${pSubject} ${forms.correctForm} ${verb.objectContext}.`,
        options: optionsShuffled,
        correctIndex,
        correctAnswer: forms.correctForm,
        explanation: `En ${tMeta.nameSpanish}, el pronombre "${pSubject}" exige concordar con "${forms.correctForm}". Regla: ${tMeta.formula}. ${tMeta.pitfall}`,
        formula: tMeta.formula,
        audioText: `${pSubject} ${forms.correctForm} ${verb.objectContext}.`,
        phonetic: `${pSubject.toLowerCase()} ${verb.phoneticBase} ${verb.objectContext}`,
        spanishTranslation: `${pSubject} ${verb.spanish} ${verb.spanishObjectContext}.`,
        errorDetails: {
          incorrectSentence,
          erroneousPart: erroneousForm,
          correction: forms.correctForm
        }
      };
    } else {
      // MCQ o Fill
      const optionsShuffled = [forms.correctForm, ...forms.distractors.slice(0, 3)];
      for (let j = optionsShuffled.length - 1; j > 0; j--) {
        const k = Math.floor(nextPseudoRand() * (j + 1));
        [optionsShuffled[j], optionsShuffled[k]] = [optionsShuffled[k], optionsShuffled[j]];
      }
      const correctIndex = optionsShuffled.indexOf(forms.correctForm);

      exercise = {
        id: `proc-mcq-${i}-${tId}-${pSubject.toLowerCase()}`,
        kind: chosenKind,
        tenseId: tId,
        tenseNameSpanish: tMeta.nameSpanish,
        tenseNameEnglish: tMeta.nameEnglish,
        timeCategory: tMeta.category,
        targetPronoun: pSubject,
        prompt: `Completa con la forma verbal reglamentaria para el pronombre "${pSubject}" en ${tMeta.nameSpanish}:`,
        sentenceWithBlank: `${pSubject} [ _____ ] ${verb.objectContext}.`,
        fullSentence: `${pSubject} ${forms.correctForm} ${verb.objectContext}.`,
        options: optionsShuffled,
        correctIndex,
        correctAnswer: forms.correctForm,
        explanation: `Para el pronombre "${pSubject}" en ${tMeta.nameSpanish}, la fórmula doctrinal es "${tMeta.formula}". La opción correcta es "${forms.correctForm}".`,
        formula: tMeta.formula,
        audioText: `${pSubject} ${forms.correctForm} ${verb.objectContext}.`,
        phonetic: `${pSubject.toLowerCase()} ${verb.phoneticBase} ${verb.objectContext}`,
        spanishTranslation: `${pSubject} ${verb.spanish} ${verb.spanishObjectContext}.`
      };
    }

    proceduralExercises.push(exercise);
  }

  // 3. Mezclar curados y procedurales
  const pool = [...filteredCurated, ...proceduralExercises];

  // Barajar todo el pool
  for (let j = pool.length - 1; j > 0; j--) {
    const k = Math.floor(nextPseudoRand() * (j + 1));
    [pool[j], pool[k]] = [pool[k], pool[j]];
  }

  // Devolver el número solicitado
  return pool.slice(0, Math.min(count, pool.length));
}
