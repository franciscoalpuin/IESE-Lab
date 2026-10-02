/**
 * Offline Storage & Caching Engine for IESE Military English
 * Enables cadets and military students to download and cache complete level exercises,
 * exams, specialized labs, theory modules, and audio transcripts for 100% offline study.
 */

import { 
  LevelSyllabus, 
  MilitaryDictationItem, 
  SentenceScrambleItem, 
  MinimalPairItem, 
  CollocationExerciseItem 
} from '../types';
import { IESE_LEVELS } from '../data/levelsData';
import { LISTENING_EXAM_MODELS, ListeningExamModel } from '../data/listeningExamModels';
import { READING_EXAM_MODELS, ReadingExamModel } from '../data/readingExamModels';
import { USE_OF_LANGUAGE_EXAM_MODELS, UseOfLanguageExamModel } from '../data/useOfLanguageExamModels';
import { WRITING_EXAM_MODELS, WritingExamModel } from '../data/writingExamModels';
import { SPEAKING_EXAM_MODELS, SpeakingExamModel } from '../data/speakingExamModels';
import { MILITARY_DICTATION_DATA } from '../data/dictationData';
import { SENTENCE_SCRAMBLER_DATA } from '../data/sentenceScramblerData';
import { MINIMAL_PAIRS_DATA } from '../data/minimalPairsData';
import { MILITARY_COLLOCATIONS_DATA } from '../data/collocationsData';
import { getAxisTheoryModule } from '../data/theory';
import { soundEffects } from './audio';

export interface OfflineExerciseCounts {
  listening: number;
  reading: number;
  useOfLanguage: number;
  writing: number;
  speaking: number;
  dictationLabs: number;
  scramblerLabs: number;
  minimalPairLabs: number;
  collocationLabs: number;
  examModels: number;
  totalExercises: number;
}

export interface OfflineLevelMetadata {
  levelNumber: number;
  cefr: string;
  name: string;
  downloadedAt: string; // ISO date string
  version: string;
  estimatedSizeKb: number;
  counts: OfflineExerciseCounts;
}

export interface OfflineLevelPackage extends OfflineLevelMetadata {
  syllabus: LevelSyllabus;
  theory: {
    listening: ReturnType<typeof getAxisTheoryModule>;
    reading: ReturnType<typeof getAxisTheoryModule>;
    useOfLanguage: ReturnType<typeof getAxisTheoryModule>;
    writing: ReturnType<typeof getAxisTheoryModule>;
    speaking: ReturnType<typeof getAxisTheoryModule>;
  };
  exams: {
    listening: ListeningExamModel | null;
    reading: ReadingExamModel | null;
    useOfLanguage: UseOfLanguageExamModel | null;
    writing: WritingExamModel | null;
    speaking: SpeakingExamModel | null;
  };
  labs: {
    dictation: MilitaryDictationItem[];
    scrambler: SentenceScrambleItem[];
    minimalPairs: MinimalPairItem[];
    collocations: CollocationExerciseItem[];
  };
  audioScripts: Array<{
    id: string;
    title: string;
    speakerRole: string;
    audioText: string;
    questionsCount: number;
  }>;
}

const DB_NAME = 'IESE_Offline_Study_DB';
const DB_VERSION = 1;
const STORE_LEVELS = 'offline_levels';
const MANIFEST_LOCAL_STORAGE_KEY = 'iese_offline_manifest_v1';
const CURRENT_CACHE_VERSION = 'v1.0.0';

/**
 * Opens or initializes the offline IndexedDB instance
 */
function openOfflineDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB no está soportado en este navegador'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_LEVELS)) {
        db.createObjectStore(STORE_LEVELS, { keyPath: 'levelNumber' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Fast synchronous check using localStorage manifest
 */
export function getStoredManifest(): Record<number, OfflineLevelMetadata> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(MANIFEST_LOCAL_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function updateStoredManifest(manifest: Record<number, OfflineLevelMetadata>) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(MANIFEST_LOCAL_STORAGE_KEY, JSON.stringify(manifest));
  } catch {
    // ignore
  }
}

/**
 * Calculates level content counts and aggregates
 */
export function getLevelExerciseCounts(levelNumber: number): OfflineExerciseCounts {
  const level = IESE_LEVELS.find((l) => l.levelNumber === levelNumber);
  const listeningCount = level?.listening.length || 0;
  const readingCount = level?.reading.length || 0;
  const useOfLangCount = level?.useOfLanguage.length || 0;
  const writingCount = level?.writing.length || 0;
  const speakingCount = level?.speaking.length || 0;

  const dictationLabs = MILITARY_DICTATION_DATA.filter((i) => i.levelNumber === levelNumber).length;
  const scramblerLabs = SENTENCE_SCRAMBLER_DATA.filter((i) => i.levelNumber === levelNumber).length;
  const minimalPairLabs = MINIMAL_PAIRS_DATA.filter((i) => i.levelNumber === levelNumber).length;
  const collocationLabs = MILITARY_COLLOCATIONS_DATA.filter((i) => i.levelNumber === levelNumber).length;

  let examModels = 0;
  if (LISTENING_EXAM_MODELS[levelNumber]) examModels++;
  if (READING_EXAM_MODELS[levelNumber]) examModels++;
  if (USE_OF_LANGUAGE_EXAM_MODELS[levelNumber]) examModels++;
  if (WRITING_EXAM_MODELS[levelNumber]) examModels++;
  if (SPEAKING_EXAM_MODELS[levelNumber]) examModels++;

  const totalExercises =
    listeningCount +
    readingCount +
    useOfLangCount +
    writingCount +
    speakingCount +
    dictationLabs +
    scramblerLabs +
    minimalPairLabs +
    collocationLabs;

  return {
    listening: listeningCount,
    reading: readingCount,
    useOfLanguage: useOfLangCount,
    writing: writingCount,
    speaking: speakingCount,
    dictationLabs,
    scramblerLabs,
    minimalPairLabs,
    collocationLabs,
    examModels,
    totalExercises
  };
}

/**
 * Packages and saves the complete content for a specific level into local storage
 */
export async function downloadLevelForOffline(
  levelNumber: number,
  onProgress?: (percentage: number, stepMessage: string) => void
): Promise<OfflineLevelPackage> {
  const level = IESE_LEVELS.find((l) => l.levelNumber === levelNumber);
  if (!level) {
    throw new Error(`El Nivel ${levelNumber} no existe en el programa IESE.`);
  }

  // Step 1: Initialize
  onProgress?.(10, `Iniciando compilación del Nivel ${levelNumber} (${level.cefr})...`);
  await new Promise((r) => setTimeout(r, 120));

  // Step 2: Extract & package core exercises
  onProgress?.(30, 'Empaquetando ejercicios de Comprensión Auditiva, Lectura y Gramática...');
  const counts = getLevelExerciseCounts(levelNumber);

  const audioScripts = level.listening.map((l) => ({
    id: l.id,
    title: l.title,
    speakerRole: l.speakerRole,
    audioText: l.audioText,
    questionsCount: l.questions.length
  }));
  await new Promise((r) => setTimeout(r, 150));

  // Step 3: Extract & package official exam models & tactical labs
  onProgress?.(55, 'Estructurando Modelos de Examen Oficial STANAG 6001 y Laboratorios Tácticos...');
  const exams = {
    listening: LISTENING_EXAM_MODELS[levelNumber] || null,
    reading: READING_EXAM_MODELS[levelNumber] || null,
    useOfLanguage: USE_OF_LANGUAGE_EXAM_MODELS[levelNumber] || null,
    writing: WRITING_EXAM_MODELS[levelNumber] || null,
    speaking: SPEAKING_EXAM_MODELS[levelNumber] || null
  };

  const labs = {
    dictation: MILITARY_DICTATION_DATA.filter((i) => i.levelNumber === levelNumber),
    scrambler: SENTENCE_SCRAMBLER_DATA.filter((i) => i.levelNumber === levelNumber),
    minimalPairs: MINIMAL_PAIRS_DATA.filter((i) => i.levelNumber === levelNumber),
    collocations: MILITARY_COLLOCATIONS_DATA.filter((i) => i.levelNumber === levelNumber)
  };
  await new Promise((r) => setTimeout(r, 150));

  // Step 4: Extract & package theory modules
  onProgress?.(75, 'Indexando Módulos de Teoría Gramatical, Fonética y Frases Operativas...');
  const theory = {
    listening: getAxisTheoryModule('listening', levelNumber),
    reading: getAxisTheoryModule('reading', levelNumber),
    useOfLanguage: getAxisTheoryModule('useOfLanguage', levelNumber),
    writing: getAxisTheoryModule('writing', levelNumber),
    speaking: getAxisTheoryModule('speaking', levelNumber)
  };

  // Pre-test speech synthesis readiness / audio effect
  try {
    soundEffects.playRadioBeep();
  } catch {
    // Ignore audio pre-check
  }

  await new Promise((r) => setTimeout(r, 150));

  // Step 5: Save to IndexedDB
  onProgress?.(90, 'Almacenando paquete seguro en IndexedDB local...');
  const estimatedSizeKb = Math.round(
    JSON.stringify({ level, theory, exams, labs, audioScripts }).length / 1024
  );

  const levelPackage: OfflineLevelPackage = {
    levelNumber,
    cefr: level.cefr,
    name: level.name,
    downloadedAt: new Date().toISOString(),
    version: CURRENT_CACHE_VERSION,
    estimatedSizeKb,
    counts,
    syllabus: level,
    theory,
    exams,
    labs,
    audioScripts
  };

  const db = await openOfflineDB();
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction([STORE_LEVELS], 'readwrite');
    const store = transaction.objectStore(STORE_LEVELS);
    const request = store.put(levelPackage);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });

  // Update quick manifest
  const manifest = getStoredManifest();
  manifest[levelNumber] = {
    levelNumber,
    cefr: level.cefr,
    name: level.name,
    downloadedAt: levelPackage.downloadedAt,
    version: levelPackage.version,
    estimatedSizeKb: levelPackage.estimatedSizeKb,
    counts
  };
  updateStoredManifest(manifest);

  // Dispatch custom storage update event
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('iese-offline-updated', { detail: { levelNumber } }));
  }

  onProgress?.(100, `¡Nivel ${levelNumber} (${level.cefr}) descargado exitosamente para modo offline!`);
  return levelPackage;
}

/**
 * Retrieves a cached level package from IndexedDB
 */
export async function getOfflineLevel(levelNumber: number): Promise<OfflineLevelPackage | null> {
  try {
    const db = await openOfflineDB();
    return new Promise((resolve) => {
      const transaction = db.transaction([STORE_LEVELS], 'readonly');
      const store = transaction.objectStore(STORE_LEVELS);
      const request = store.get(levelNumber);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

/**
 * Checks if a level is currently downloaded and cached
 */
export async function isLevelDownloaded(levelNumber: number): Promise<boolean> {
  // First check fast manifest
  const manifest = getStoredManifest();
  if (!manifest[levelNumber]) return false;

  // Confirm in IndexedDB
  const pkg = await getOfflineLevel(levelNumber);
  return pkg !== null;
}

/**
 * Deletes a downloaded level package from offline storage
 */
export async function removeOfflineLevel(levelNumber: number): Promise<void> {
  try {
    const db = await openOfflineDB();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction([STORE_LEVELS], 'readwrite');
      const store = transaction.objectStore(STORE_LEVELS);
      const request = store.delete(levelNumber);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });

    const manifest = getStoredManifest();
    delete manifest[levelNumber];
    updateStoredManifest(manifest);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('iese-offline-updated', { detail: { levelNumber } }));
    }
  } catch {
    // ignore
  }
}

/**
 * Clears all downloaded offline level packages
 */
export async function clearAllOfflineLevels(): Promise<void> {
  try {
    const db = await openOfflineDB();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction([STORE_LEVELS], 'readwrite');
      const store = transaction.objectStore(STORE_LEVELS);
      const request = store.clear();
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });

    updateStoredManifest({});

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('iese-offline-updated', { detail: { cleared: true } }));
    }
  } catch {
    // ignore
  }
}

/**
 * Returns estimated device storage quota info
 */
export async function getStorageQuotaEstimate(): Promise<{
  usedKb: number;
  quotaKb: number;
  percentage: number;
}> {
  if (typeof navigator !== 'undefined' && navigator.storage && navigator.storage.estimate) {
    try {
      const estimate = await navigator.storage.estimate();
      const usedKb = Math.round((estimate.usage || 0) / 1024);
      const quotaKb = Math.round((estimate.quota || 0) / 1024);
      const percentage = quotaKb > 0 ? Math.min(100, Math.round((usedKb / quotaKb) * 100)) : 0;
      return { usedKb, quotaKb, percentage };
    } catch {
      // fallback
    }
  }

  // Fallback from manifest
  const manifest = getStoredManifest();
  const totalKb = Object.values(manifest).reduce((acc, m) => acc + (m.estimatedSizeKb || 0), 0);
  return { usedKb: totalKb, quotaKb: 50000, percentage: Math.round((totalKb / 50000) * 100) };
}
