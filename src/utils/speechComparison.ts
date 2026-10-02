/**
 * Speech comparison and analysis utilities for STANAG 6001 Oral Production
 */

export interface WordDiffToken {
  word: string;
  status: 'matched' | 'missing' | 'added';
}

export interface SpeechComparisonResult {
  similarityScore: number; // 0 to 100
  matchedWordCount: number;
  userWordCount: number;
  modelWordCount: number;
  keyTermsMatched: { term: string; found: boolean }[];
  keyTermsScore: number; // 0 to 100
  overallFluencyEvaluation: string;
  wordTokens: WordDiffToken[];
  feedbackNotes: string[];
}

/**
 * Normalizes text for comparison (strips punctuation, lowers case, cleans whitespace)
 */
export function cleanSpokenText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extracts distinct content words (ignores trivial stop words for key term evaluation)
 */
const STOP_WORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'if', 'of', 'at', 'by', 'for', 'with', 
  'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 
  'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 
  'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 
  'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 
  'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 
  'very', 's', 't', 'can', 'will', 'just', 'don', 'should', 'now', 'i', 'we', 
  'you', 'he', 'she', 'it', 'they', 'my', 'our', 'your', 'his', 'her', 'their',
  'is', 'am', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had'
]);

/**
 * Compares a user's speech transcript against the reference model text
 */
export function compareSpeechToModel(
  userTranscript: string,
  modelText: string,
  targetVocabulary: string[] = []
): SpeechComparisonResult {
  const cleanUser = cleanSpokenText(userTranscript);
  const cleanModel = cleanSpokenText(modelText);

  const userWords = cleanUser ? cleanUser.split(' ') : [];
  const modelWords = cleanModel ? cleanModel.split(' ') : [];

  if (userWords.length === 0) {
    return {
      similarityScore: 0,
      matchedWordCount: 0,
      userWordCount: 0,
      modelWordCount: modelWords.length,
      keyTermsMatched: targetVocabulary.map(v => ({ term: v, found: false })),
      keyTermsScore: 0,
      overallFluencyEvaluation: 'No se ha detectado audio ni palabras reconocibles en la grabación.',
      wordTokens: modelWords.map(w => ({ word: w, status: 'missing' })),
      feedbackNotes: ['Inicie la grabación y hable cerca del micrófono vocalizando en inglés británico.']
    };
  }

  // Frequency mapping
  const userWordFreq: Record<string, number> = {};
  userWords.forEach(w => {
    userWordFreq[w] = (userWordFreq[w] || 0) + 1;
  });

  const modelWordFreq: Record<string, number> = {};
  modelWords.forEach(w => {
    modelWordFreq[w] = (modelWordFreq[w] || 0) + 1;
  });

  // Calculate common words overlap (Bag-of-words / Cosine-like Jaccard)
  let commonCount = 0;
  const tempFreq = { ...userWordFreq };
  modelWords.forEach(w => {
    if (tempFreq[w] && tempFreq[w] > 0) {
      commonCount++;
      tempFreq[w]--;
    }
  });

  // Token comparison for visual breakdown
  const wordTokens: WordDiffToken[] = [];
  const matchedSet = new Set(userWords);

  modelWords.forEach(w => {
    if (matchedSet.has(w)) {
      wordTokens.push({ word: w, status: 'matched' });
    } else {
      wordTokens.push({ word: w, status: 'missing' });
    }
  });

  // Vocabulary & Key Terms Match
  const keyTermsMatched = targetVocabulary.map(term => {
    const cleanTerm = cleanSpokenText(term);
    const found = cleanUser.includes(cleanTerm);
    return { term, found };
  });

  const foundTermsCount = keyTermsMatched.filter(t => t.found).length;
  const keyTermsScore = targetVocabulary.length > 0 
    ? Math.round((foundTermsCount / targetVocabulary.length) * 100)
    : 100;

  // Compute similarity score (balance of word overlap and vocabulary precision)
  // Max possible is modelWords.length
  const overlapRatio = modelWords.length > 0 ? commonCount / modelWords.length : 0;
  // Length penalty if answer was too short or too long
  const lengthRatio = Math.min(userWords.length / Math.max(modelWords.length * 0.6, 1), 1);
  
  let similarityScore = Math.min(
    100,
    Math.round((overlapRatio * 60 + (foundTermsCount / Math.max(targetVocabulary.length, 1)) * 30 + lengthRatio * 10))
  );

  if (targetVocabulary.length === 0) {
    similarityScore = Math.min(100, Math.round(overlapRatio * 85 + lengthRatio * 15));
  }

  // Construct tactical feedback notes
  const feedbackNotes: string[] = [];

  if (similarityScore >= 80) {
    feedbackNotes.push('Excelente cobertura sintáctica y de vocabulario doctrinal respecto al modelo RP.');
  } else if (similarityScore >= 60) {
    feedbackNotes.push('Buena aproximación temática; se sugiere incorporar más conectores y terminología técnica militar.');
  } else if (similarityScore >= 40) {
    feedbackNotes.push('Respuesta comprensible, pero con omisión de estructuras complejas o términos clave del briefing.');
  } else {
    feedbackNotes.push('La transcripción difiere significativamente del modelo de referencia. Revise las pautas fonéticas.');
  }

  if (userWords.length < modelWords.length * 0.4) {
    feedbackNotes.push(`Longitud breve: ha emitido ${userWords.length} palabras frente a las ${modelWords.length} del modelo oficial. Procure explayarse más.`);
  }

  if (targetVocabulary.length > 0 && foundTermsCount < targetVocabulary.length) {
    const missing = keyTermsMatched.filter(k => !k.found).map(k => k.term);
    if (missing.length > 0) {
      feedbackNotes.push(`Términos clave no detectados: ${missing.slice(0, 3).join(', ')}${missing.length > 3 ? '...' : ''}.`);
    }
  }

  // Overall qualitative evaluation
  let overallFluencyEvaluation = 'Producción Oral Aceptable';
  if (similarityScore >= 85) {
    overallFluencyEvaluation = 'Nivel Sobresaliente (STANAG 6001 - Perfil Avanzado)';
  } else if (similarityScore >= 70) {
    overallFluencyEvaluation = 'Nivel Competente (STANAG 6001 - Perfil Operativo)';
  } else if (similarityScore >= 50) {
    overallFluencyEvaluation = 'Nivel Intermedio (Requiere mayor precisión de léxico militar)';
  } else {
    overallFluencyEvaluation = 'Nivel Inicial / En Desarrollo (Se aconseja repetición guiada)';
  }

  return {
    similarityScore,
    matchedWordCount: commonCount,
    userWordCount: userWords.length,
    modelWordCount: modelWords.length,
    keyTermsMatched,
    keyTermsScore,
    overallFluencyEvaluation,
    wordTokens,
    feedbackNotes
  };
}
