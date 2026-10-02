import { useState, useEffect } from 'react';

const SESSION_SEED_KEY = 'iese_mc_session_seed';
const SESSION_SEED_EVENT = 'iese-session-seed-changed';

/**
 * 32-bit FNV-1a hash algorithm for strings
 */
function hashString(str: string): number {
  let hash = 2166136261;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

/**
 * Fast, high-quality 32-bit PRNG (Mulberry32)
 */
function mulberry32(seed: number): () => number {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Get or create the unique session seed stored in sessionStorage.
 * A new session seed is generated each time a user opens a new browser session/tab.
 */
export function getSessionSeed(): string {
  if (typeof window === 'undefined') {
    return 'ssr_seed';
  }
  try {
    let seed = window.sessionStorage.getItem(SESSION_SEED_KEY);
    if (!seed) {
      seed = `session_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 9)}`;
      window.sessionStorage.setItem(SESSION_SEED_KEY, seed);
    }
    return seed;
  } catch {
    return 'fallback_seed';
  }
}

/**
 * Generates a new session seed and dispatches an event to notify active views.
 */
export function startNewShuffleSession(): string {
  if (typeof window === 'undefined') return 'ssr_seed';
  try {
    const newSeed = `session_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 9)}`;
    window.sessionStorage.setItem(SESSION_SEED_KEY, newSeed);
    window.dispatchEvent(new CustomEvent(SESSION_SEED_EVENT, { detail: { seed: newSeed } }));
    return newSeed;
  } catch {
    return 'fallback_seed';
  }
}

/**
 * React hook to listen for session seed changes across components.
 */
export function useSessionShuffle() {
  const [sessionSeed, setSessionSeed] = useState<string>(getSessionSeed);

  useEffect(() => {
    const handleSeedChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ seed: string }>;
      if (customEvent.detail?.seed) {
        setSessionSeed(customEvent.detail.seed);
      } else {
        setSessionSeed(getSessionSeed());
      }
    };

    window.addEventListener(SESSION_SEED_EVENT, handleSeedChange);
    return () => window.removeEventListener(SESSION_SEED_EVENT, handleSeedChange);
  }, []);

  return {
    sessionSeed,
    startNewShuffleSession
  };
}

/**
 * Seeded Fisher-Yates shuffle that produces a deterministic permutation for a given array + seed.
 */
export function shuffleArraySeeded<T>(array: readonly T[], seedStr: string): T[] {
  if (!array || array.length <= 1) return [...array];
  const seed = hashString(seedStr);
  const rng = mulberry32(seed);
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }

  return result;
}

/**
 * Shuffles an exercise question with an options array and a numeric correctIndex.
 * Keeps the correct answer linked to its new shuffled position.
 */
export function shuffleIndexedQuestion<T extends { options: string[]; correctIndex: number }>(
  question: T,
  questionKey: string,
  explicitSeed?: string
): T {
  if (!question || !question.options || question.options.length <= 1) {
    return question;
  }

  const seed = explicitSeed || getSessionSeed();
  const seedKey = `${seed}::${questionKey}`;

  // Track original correct answer
  const items = question.options.map((opt, idx) => ({
    opt,
    isCorrect: idx === question.correctIndex
  }));

  const shuffled = shuffleArraySeeded(items, seedKey);
  const newCorrectIndex = shuffled.findIndex((item) => item.isCorrect);

  return {
    ...question,
    options: shuffled.map((item) => item.opt),
    correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0
  };
}

/**
 * Shuffles an array of string options where the correct answer is verified by string equality.
 */
export function shuffleWordQuestion<T extends { options: string[]; correctCollocate: string }>(
  question: T,
  questionKey: string,
  explicitSeed?: string
): T {
  if (!question || !question.options || question.options.length <= 1) {
    return question;
  }

  const seed = explicitSeed || getSessionSeed();
  const seedKey = `${seed}::${questionKey}`;

  return {
    ...question,
    options: shuffleArraySeeded(question.options, seedKey)
  };
}

/**
 * Shuffles questions in official exams:
 * - Handles letter prefixes: "a) ...", "b) ...", "a. ...", "A. ..."
 * - Handles plain multiple-choice options where correctAnswer is a letter ("A", "b", etc.)
 * - Leaves True/False and matching columns untouched to preserve standard exam layout.
 */
export function shuffleExamQuestion<
  T extends {
    id: string;
    type?: string;
    options?: string[];
    correctAnswer: string;
  }
>(question: T, explicitSeed?: string): T {
  if (!question.options || question.options.length <= 1) {
    return question;
  }

  // Do not shuffle boolean binary choices (True/False, Right/Wrong)
  const isBinaryTrueFalse =
    question.options.length === 2 &&
    question.options.some((o) => ['TRUE', 'FALSE', 'T', 'F', 'RIGHT', 'WRONG'].includes(o.trim().toUpperCase()));

  if (isBinaryTrueFalse) {
    return question;
  }

  // Do not shuffle column-matching letters (e.g. ['A', 'B', 'C', 'D', 'E', 'F', 'G'])
  if (question.type === 'matching') {
    return question;
  }

  const seed = explicitSeed || getSessionSeed();
  const seedKey = `${seed}::${question.id}`;

  const firstOpt = question.options[0].trim();
  // Check if options have a letter prefix: "a) ", "b) ", "a. ", "A. ", "a- "
  const prefixMatch = firstOpt.match(/^([a-zA-Z])([)\.\-]\s*)/);

  if (prefixMatch) {
    const isUpper = prefixMatch[1] === prefixMatch[1].toUpperCase();
    const delimiter = prefixMatch[2]; // e.g. ') ' or '. '

    // Parse options into items with stripped text and flag whether it's correct
    const parsed = question.options.map((opt, idx) => {
      const m = opt.trim().match(/^([a-zA-Z])[)\.\-]\s*(.*)$/);
      const letter = m ? m[1].toLowerCase() : String.fromCharCode(97 + idx);
      const text = m ? m[2] : opt;
      const isCorrect = letter === question.correctAnswer.trim().toLowerCase();
      return { text, isCorrect };
    });

    const shuffled = shuffleArraySeeded(parsed, seedKey);

    // Reconstruct with alphabetical prefix in sequential order
    const newOptions = shuffled.map((item, idx) => {
      const baseLetter = String.fromCharCode((isUpper ? 65 : 97) + idx);
      return `${baseLetter}${delimiter}${item.text}`;
    });

    const correctItemIdx = shuffled.findIndex((item) => item.isCorrect);
    const newCorrectAnswer =
      correctItemIdx >= 0
        ? String.fromCharCode((isUpper ? 65 : 97) + correctItemIdx)
        : question.correctAnswer;

    return {
      ...question,
      options: newOptions,
      correctAnswer: newCorrectAnswer
    };
  }

  // If plain options with single letter correctAnswer (e.g. options: ['Pam', 'Matthew', 'Betsy'], correctAnswer: 'c')
  const isAnswerLetter = /^[a-zA-Z]$/.test(question.correctAnswer.trim());
  if (isAnswerLetter) {
    const isUpper = question.correctAnswer === question.correctAnswer.toUpperCase();
    const origCorrectIdx = question.correctAnswer.toLowerCase().charCodeAt(0) - 97;

    const items = question.options.map((opt, idx) => ({
      text: opt,
      isCorrect: idx === origCorrectIdx
    }));

    const shuffled = shuffleArraySeeded(items, seedKey);
    const newCorrectIdx = shuffled.findIndex((item) => item.isCorrect);
    const newCorrectAnswer =
      newCorrectIdx >= 0
        ? String.fromCharCode((isUpper ? 65 : 97) + newCorrectIdx)
        : question.correctAnswer;

    return {
      ...question,
      options: shuffled.map((s) => s.text),
      correctAnswer: newCorrectAnswer
    };
  }

  // Plain options without letter code in correctAnswer: shuffle options
  return {
    ...question,
    options: shuffleArraySeeded(question.options, seedKey)
  };
}
