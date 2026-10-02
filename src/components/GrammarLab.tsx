import React, { useState, useMemo, useEffect } from 'react';
import {
  generateDynamicGrammarExercises,
  GrammarLabExercise,
  TimeCategory,
  GrammarTenseId,
  PronounSubject,
  ExerciseKind,
  TENSES_METADATA
} from '../data/grammarLabData';
import { speakBritishText, stopSpeaking } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  BookOpen,
  Sparkles,
  Volume2,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Shuffle,
  ChevronRight,
  Filter,
  Layers,
  HelpCircle,
  Award,
  Zap,
  Check,
  Flame,
  Clock,
  ArrowRight,
  Eye,
  Info
} from 'lucide-react';

interface GrammarLabProps {
  audioRate?: number;
  onRecordScore?: (exerciseId: string, scorePercentage: number) => void;
  onClose?: () => void;
  initialTimeCategory?: TimeCategory | 'all';
}

export const GrammarLab: React.FC<GrammarLabProps> = ({
  audioRate = 0.95,
  onRecordScore,
  onClose,
  initialTimeCategory = 'all'
}) => {
  // Filters State
  const [selectedTimeCategory, setSelectedTimeCategory] = useState<'all' | TimeCategory>(initialTimeCategory);
  const [selectedPronounFilter, setSelectedPronounFilter] = useState<'all' | PronounSubject | '3rd_singular'>('all');
  const [selectedKindFilter, setSelectedKindFilter] = useState<'all' | ExerciseKind>('all');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [sessionSeed, setSessionSeed] = useState<string>(() => Date.now().toString());

  // Generate exercises dynamically when filters or seed change
  const exercises = useMemo(() => {
    return generateDynamicGrammarExercises({
      timeCategory: selectedTimeCategory,
      pronoun: selectedPronounFilter,
      kind: selectedKindFilter,
      count: questionCount,
      seed: sessionSeed
    });
  }, [selectedTimeCategory, selectedPronounFilter, selectedKindFilter, questionCount, sessionSeed]);

  // Practice Progression State
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, { selectedIdx: number; isCorrect: boolean }>>({});
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [isSessionComplete, setIsSessionComplete] = useState<boolean>(false);
  const [showFormulaDetails, setShowFormulaDetails] = useState<boolean>(true);
  const [showMatrixCheatSheet, setShowMatrixCheatSheet] = useState<boolean>(false);

  // Word reordering state (for 'reorder' kind)
  const [reorderedTokens, setReorderedTokens] = useState<string[]>([]);
  const [availableTokens, setAvailableTokens] = useState<string[]>([]);

  const currentExercise: GrammarLabExercise | undefined = exercises[currentIndex];

  // Initialize reorder tokens whenever current exercise changes
  useEffect(() => {
    if (currentExercise && currentExercise.kind === 'reorder' && currentExercise.tokens) {
      const shuffled = [...currentExercise.tokens].sort(() => Math.random() - 0.5);
      setAvailableTokens(shuffled);
      setReorderedTokens([]);
    } else {
      setAvailableTokens([]);
      setReorderedTokens([]);
    }
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    stopSpeaking();
    setIsPlayingAudio(false);
  }, [currentIndex, currentExercise]);

  // Audio Playback
  const handlePlayAudio = (text: string) => {
    stopSpeaking();
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
      return;
    }
    setIsPlayingAudio(true);
    speakBritishText(text, {
      rate: audioRate,
      onEnd: () => setIsPlayingAudio(false)
    });
  };

  // Generate a brand new battery of exercises
  const handleRegenerateBattery = () => {
    stopSpeaking();
    setSessionSeed(Date.now().toString());
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setUserAnswers({});
    setIsSessionComplete(false);
    setStreak(0);
  };

  // Submit Answer for MCQ or Spot-the-Error
  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted || !currentExercise) return;
    setSelectedOption(idx);
    setIsAnswerSubmitted(true);

    const isCorrect = idx === currentExercise.correctIndex;
    setUserAnswers(prev => ({
      ...prev,
      [currentExercise.id]: { selectedIdx: idx, isCorrect }
    }));

    if (isCorrect) {
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      if (nextStreak > maxStreak) setMaxStreak(nextStreak);
      try {
        confetti({ particleCount: 45, spread: 60, origin: { y: 0.65 } });
      } catch {
        // Safe fallback
      }
      handlePlayAudio(currentExercise.audioText);
    } else {
      setStreak(0);
      handlePlayAudio(currentExercise.audioText);
    }
  };

  // Token click for sentence reordering
  const handleAddToken = (token: string, tokenIndex: number) => {
    if (isAnswerSubmitted) return;
    setReorderedTokens(prev => [...prev, token]);
    setAvailableTokens(prev => prev.filter((_, i) => i !== tokenIndex));
  };

  const handleRemoveToken = (token: string, tokenIndex: number) => {
    if (isAnswerSubmitted) return;
    setAvailableTokens(prev => [...prev, token]);
    setReorderedTokens(prev => prev.filter((_, i) => i !== tokenIndex));
  };

  const handleCheckReorder = () => {
    if (!currentExercise || isAnswerSubmitted) return;
    const constructed = reorderedTokens.join(' ').trim();
    const target = currentExercise.correctAnswer.trim();
    const isCorrect = constructed.toLowerCase() === target.toLowerCase() ||
                      constructed.replace(/[.,]/g, '').toLowerCase() === target.replace(/[.,]/g, '').toLowerCase();

    setIsAnswerSubmitted(true);
    setSelectedOption(isCorrect ? 0 : 1);
    setUserAnswers(prev => ({
      ...prev,
      [currentExercise.id]: { selectedIdx: isCorrect ? 0 : 1, isCorrect }
    }));

    if (isCorrect) {
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      if (nextStreak > maxStreak) setMaxStreak(nextStreak);
      try {
        confetti({ particleCount: 50, spread: 65, origin: { y: 0.65 } });
      } catch {
        // Safe fallback
      }
      handlePlayAudio(currentExercise.audioText);
    } else {
      setStreak(0);
      handlePlayAudio(currentExercise.audioText);
    }
  };

  // Navigate Questions
  const handleNextQuestion = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Completed all exercises
      setIsSessionComplete(true);
      if (onRecordScore) {
        const correctCount = Object.values(userAnswers).filter(a => a.isCorrect).length;
        const total = exercises.length;
        const pct = Math.round((correctCount / total) * 100);
        onRecordScore(`grammar-lab-${selectedTimeCategory}-${Date.now()}`, pct);
      }
    }
  };

  // Calculate score stats
  const totalAnswered = Object.keys(userAnswers).length;
  const correctCount = Object.values(userAnswers).filter(a => a.isCorrect).length;
  const scorePercentage = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  return (
    <div className="space-y-5 animate-fade-in text-[var(--text-primary)]">
      {/* ========================================================================= */}
      {/* 1. HERO TACTICAL BANNER & CONFIGURATION BAR */}
      {/* ========================================================================= */}
      <div className="rounded-2xl bg-gradient-to-r from-[#141d0f] via-[#1a2514] to-[#12190d] border border-[#3b5025] p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-72 h-72 bg-[#b8df47]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-5">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#233116] border border-[#446127] flex items-center justify-center text-[#b8df47] shadow-md shrink-0">
              <Zap className="w-6 h-6 text-[#b8df47]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-stencil font-bold tracking-wider px-2 py-0.5 rounded bg-[#202e15] text-[#b8df47] border border-[#446127]">
                  GRAMMAR LAB • GENERADOR DINÁMICO
                </span>
                <span className="text-xs font-mono text-[#9bb084] hidden sm:inline">
                  STANAG 6001 / IESE
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-stencil font-bold tracking-wide text-white mt-1">
                Laboratorio de Pronombres y Tiempos Verbales
              </h2>
              <p className="text-xs text-[#cadbb8] max-w-2xl leading-relaxed mt-0.5">
                Generador dinámico de reactivos de concordancia sujeto-verbo en <span className="text-amber-300 font-bold">Pasado</span>, <span className="text-emerald-400 font-bold">Presente</span> y <span className="text-sky-300 font-bold">Futuro</span> con validación doctrinal inmediata.
              </p>
            </div>
          </div>

          {/* Quick Metrics & Actions */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-end">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#0f150b] border border-[#233116] font-mono text-xs text-[#d6ec99]">
              <Flame className="w-4 h-4 text-amber-400" />
              <span className="font-bold">Racha:</span>
              <span className="text-amber-400 font-bold">{streak}</span>
              <span className="text-[10px] text-[#7d9468]">(Máx: {maxStreak})</span>
            </div>

            <button
              onClick={() => setShowMatrixCheatSheet(prev => !prev)}
              className="px-3 py-1.5 rounded-xl bg-[#202e15] hover:bg-[#2b3e1c] border border-[#446127] text-xs font-mono text-[#d6ec99] flex items-center space-x-1.5 transition-all cursor-pointer shadow-xs"
              title="Ver matriz rápida de concordancia de pronombres"
            >
              <Info className="w-3.5 h-3.5 text-[#b8df47]" />
              <span className="hidden sm:inline">Guía Rápida</span>
              <span className="sm:hidden">Guía</span>
            </button>

            <button
              onClick={handleRegenerateBattery}
              className="px-3.5 py-1.5 rounded-xl bg-[#6e8f2a] hover:bg-[#7fa430] text-black font-mono font-bold text-xs flex items-center space-x-1.5 transition-all cursor-pointer shadow-md hover:shadow-lg"
              title="Generar nueva batería aleatoria de ejercicios"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Generar Nuevos</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE CONTROLS / FILTER BAR */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-3 border-t border-[#293a19]">
          
          {/* 1. Filtro de Tiempos (Past, Present, Future, All) */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono text-[#9bb084] flex items-center space-x-1">
              <Clock className="w-3 h-3 text-[#b8df47]" />
              <span>Tiempo Verbal:</span>
            </label>
            <div className="grid grid-cols-4 gap-1">
              {[
                { id: 'all', label: 'Todos' },
                { id: 'past', label: 'Pasado' },
                { id: 'present', label: 'Presente' },
                { id: 'future', label: 'Futuro' }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => {
                    setSelectedTimeCategory(t.id as any);
                    setCurrentIndex(0);
                    setUserAnswers({});
                    setIsAnswerSubmitted(false);
                    setIsSessionComplete(false);
                  }}
                  className={`py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer text-center ${
                    selectedTimeCategory === t.id
                      ? 'bg-[#b8df47] text-black shadow-xs'
                      : 'bg-[#12190d] text-[#9bb084] hover:bg-[#202e15] border border-[#233116]'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Filtro de Pronombres */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono text-[#9bb084] flex items-center space-x-1">
              <Layers className="w-3 h-3 text-[#b8df47]" />
              <span>Pronombre Objetivo:</span>
            </label>
            <select
              value={selectedPronounFilter}
              onChange={(e) => {
                setSelectedPronounFilter(e.target.value as any);
                setCurrentIndex(0);
                setUserAnswers({});
                setIsAnswerSubmitted(false);
                setIsSessionComplete(false);
              }}
              className="w-full py-1.5 px-2.5 rounded-lg bg-[#12190d] border border-[#233116] text-[#d6ec99] font-mono text-xs focus:outline-none focus:border-[#b8df47]"
            >
              <option value="all">Todos los Pronombres (I, You, He, She, It, We, They)</option>
              <option value="3rd_singular">⚠️ Zona Crítica: 3ª Persona (He / She / It)</option>
              <option value="I">I (1ª Persona Singular)</option>
              <option value="You">You (2ª Persona)</option>
              <option value="He">He (Él - 3ª masc.)</option>
              <option value="She">She (Ella - 3ª fem.)</option>
              <option value="It">It (Ello / Neutro)</option>
              <option value="We">We (Nosotros)</option>
              <option value="They">They (Ellos / Plural)</option>
            </select>
          </div>

          {/* 3. Modalidad de Ejercicio */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono text-[#9bb084] flex items-center space-x-1">
              <Filter className="w-3 h-3 text-[#b8df47]" />
              <span>Modalidad de Práctica:</span>
            </label>
            <select
              value={selectedKindFilter}
              onChange={(e) => {
                setSelectedKindFilter(e.target.value as any);
                setCurrentIndex(0);
                setUserAnswers({});
                setIsAnswerSubmitted(false);
                setIsSessionComplete(false);
              }}
              className="w-full py-1.5 px-2.5 rounded-lg bg-[#12190d] border border-[#233116] text-[#d6ec99] font-mono text-xs focus:outline-none focus:border-[#b8df47]"
            >
              <option value="all">Todas las Modalidades Mezcladas</option>
              <option value="mcq">Concordancia & Auxiliares (Opción Múltiple)</option>
              <option value="spot_error">Detector de Discordancias (Spot-the-Error)</option>
              <option value="reorder">Reordenador Sintáctico (Word Order)</option>
            </select>
          </div>

          {/* 4. Cantidad de Reactivos */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono text-[#9bb084] flex items-center space-x-1">
              <Award className="w-3 h-3 text-[#b8df47]" />
              <span>Tamaño de Batería:</span>
            </label>
            <div className="grid grid-cols-3 gap-1">
              {[5, 10, 15].map(cnt => (
                <button
                  key={cnt}
                  onClick={() => {
                    setQuestionCount(cnt);
                    setCurrentIndex(0);
                    setUserAnswers({});
                    setIsAnswerSubmitted(false);
                    setIsSessionComplete(false);
                  }}
                  className={`py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer text-center ${
                    questionCount === cnt
                      ? 'bg-[#b8df47] text-black shadow-xs'
                      : 'bg-[#12190d] text-[#9bb084] hover:bg-[#202e15] border border-[#233116]'
                  }`}
                >
                  {cnt} Reactivos
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* QUICK REFERENCE DRAWER (CHEAT SHEET DE CONCORDANCIA) */}
      {/* ========================================================================= */}
      {showMatrixCheatSheet && (
        <div className="rounded-xl bg-[#141d0f] border border-[#446127] p-4 text-xs font-mono text-[#d6ec99] space-y-3 animate-fade-in shadow-lg">
          <div className="flex items-center justify-between border-b border-[#233116] pb-2">
            <span className="font-stencil font-bold text-sm text-[#b8df47] flex items-center gap-1.5">
              <Info className="w-4 h-4 text-[#b8df47]" />
              MATRIZ RÁPIDA DE CONCORDANCIA: PRONOMBRE × AUXILIAR Y VERBO
            </span>
            <button
              onClick={() => setShowMatrixCheatSheet(false)}
              className="text-[#9bb084] hover:text-white cursor-pointer"
            >
              ✕ Cerrar
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Presente */}
            <div className="p-2.5 rounded-lg bg-[#0e160a] border border-[#233116] space-y-1.5">
              <span className="text-emerald-400 font-bold block text-[11px]">PRESENTE (Present)</span>
              <p><span className="text-[#b8df47]">I:</span> am, have, do, verbo base sin -s</p>
              <p><span className="text-amber-300 font-bold">He / She / It:</span> is, has, does, <span className="underline">verbo con -s/-es</span></p>
              <p><span className="text-[#b8df47]">You / We / They:</span> are, have, do, verbo base</p>
            </div>

            {/* Pasado */}
            <div className="p-2.5 rounded-lg bg-[#0e160a] border border-[#233116] space-y-1.5">
              <span className="text-amber-400 font-bold block text-[11px]">PASADO (Past)</span>
              <p><span className="text-[#b8df47]">I / He / She / It:</span> <span className="text-amber-300 font-bold">was</span>, had, did</p>
              <p><span className="text-[#b8df47]">You / We / They:</span> <span className="text-amber-300 font-bold">were</span> (¡nunca was!), had, did</p>
              <p><span className="text-emerald-400">Negativo:</span> Sujeto + did not + <span className="underline">verbo base</span></p>
            </div>

            {/* Futuro */}
            <div className="p-2.5 rounded-lg bg-[#0e160a] border border-[#233116] space-y-1.5">
              <span className="text-sky-400 font-bold block text-[11px]">FUTURO (Future)</span>
              <p><span className="text-[#b8df47]">Will:</span> Todos usan <span className="text-sky-300 font-bold">will + verbo base</span> (sin -s ni to)</p>
              <p><span className="text-[#b8df47]">Going To:</span> am / is / are + going to + base</p>
              <p><span className="text-[#b8df47]">Continuo:</span> will be + gerundio (-ing)</p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. MAIN ACTIVE EXERCISE WORKSPACE */}
      {/* ========================================================================= */}
      {!isSessionComplete && currentExercise && (
        <div className="rounded-2xl bg-[#141d0f] border border-[#3b5025] p-5 sm:p-7 shadow-xl space-y-6">
          
          {/* Header of the Question: Progress Bar + Badges */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-[#202e15] border border-[#446127] text-[#b8df47] font-bold">
                  REACTIVO {currentIndex + 1} DE {exercises.length}
                </span>
                <span className="text-[#9bb084] hidden sm:inline">•</span>
                <span className="text-amber-300 font-bold uppercase tracking-wider text-[11px]">
                  {currentExercise.tenseNameSpanish}
                </span>
              </div>

              <div className="flex items-center space-x-2 font-bold">
                <span className="text-[#9bb084]">Aciertos:</span>
                <span className="text-emerald-400">{correctCount} / {totalAnswered}</span>
                <span className="text-[#7d9468]">({scorePercentage}%)</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-[#0e160a] rounded-full overflow-hidden border border-[#233116]">
              <div
                className="h-full bg-gradient-to-r from-[#6e8f2a] to-[#b8df47] transition-all duration-300"
                style={{ width: `${Math.round(((currentIndex + 1) / exercises.length) * 100)}%` }}
              />
            </div>
          </div>

          {/* Exercise Prompt & Badges */}
          <div className="p-4 rounded-xl bg-[#0e160a] border border-[#233116] space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wide border ${
                  currentExercise.timeCategory === 'past'
                    ? 'bg-amber-950/60 text-amber-300 border-amber-600/40'
                    : currentExercise.timeCategory === 'present'
                    ? 'bg-emerald-950/60 text-emerald-300 border-emerald-600/40'
                    : 'bg-sky-950/60 text-sky-300 border-sky-600/40'
                }`}>
                  {currentExercise.timeCategory === 'past' ? '⏳ Tiempo Pasado' : currentExercise.timeCategory === 'present' ? '⚡ Tiempo Presente' : '🚀 Tiempo Futuro'}
                </span>

                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#1a2514] text-[#b8df47] border border-[#446127]">
                  Pronombre Sujeto: {currentExercise.targetPronoun}
                </span>

                {currentExercise.kind === 'spot_error' && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-950/60 text-red-300 border border-red-700/50">
                    Detector de Error
                  </span>
                )}
                {currentExercise.kind === 'reorder' && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-950/60 text-indigo-300 border border-indigo-700/50">
                    Reordenador Sintáctico
                  </span>
                )}
              </div>

              {/* Listen Audio Button */}
              <button
                type="button"
                onClick={() => handlePlayAudio(isAnswerSubmitted ? currentExercise.fullSentence : currentExercise.audioText)}
                className="px-3 py-1 rounded-lg bg-[#202e15] hover:bg-[#2c3f1d] border border-[#446127] text-xs font-mono text-[#d6ec99] flex items-center space-x-1.5 transition-all cursor-pointer"
                title="Escuchar locución militar británica"
              >
                <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'text-[#b8df47] animate-pulse' : 'text-[#9bb084]'}`} />
                <span>{isPlayingAudio ? 'Reproduciendo...' : 'Audio Doctrinal'}</span>
              </button>
            </div>

            {/* Prompt Instruction */}
            <p className="text-sm font-semibold text-white leading-relaxed">
              {currentExercise.prompt}
            </p>

            {/* Sentence with Blank Highlight */}
            <div className="p-4 rounded-xl bg-[#141d0f] border border-[#3b5025] text-base sm:text-lg font-tactical tracking-wide text-white leading-relaxed">
              {isAnswerSubmitted ? (
                <div>
                  <span className="text-emerald-400 font-bold">{currentExercise.fullSentence}</span>
                  <div className="mt-2 text-xs font-mono text-[#9bb084] flex items-center space-x-1">
                    <span className="text-amber-400 font-bold">Fonética:</span>
                    <span>"{currentExercise.phonetic}"</span>
                  </div>
                  <div className="text-xs font-mono text-[#7d9468] mt-0.5">
                    <span className="font-bold">Español:</span> {currentExercise.spanishTranslation}
                  </div>
                </div>
              ) : (
                <div className="font-mono text-base">
                  {currentExercise.sentenceWithBlank.split('[ _____ ]').map((part, i, arr) => (
                    <React.Fragment key={i}>
                      <span>{part}</span>
                      {i < arr.length - 1 && (
                        <span className="inline-block px-3 py-1 mx-1.5 rounded-lg bg-[#202e15] border-2 border-dashed border-[#b8df47] text-[#b8df47] font-bold animate-pulse text-sm">
                          [ ? ]
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* ========================================================================= */}
          {/* OPTIONS SELECTION (MCQ, SPOT-THE-ERROR, OR WORD REORDER) */}
          {/* ========================================================================= */}
          {currentExercise.kind !== 'reorder' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentExercise.options.map((opt, optIdx) => {
                const isSelected = selectedOption === optIdx;
                const isCorrectOption = optIdx === currentExercise.correctIndex;

                let btnStyle = 'bg-[#12190d] hover:bg-[#1a2514] border-[#293a19] text-white';
                if (isAnswerSubmitted) {
                  if (isCorrectOption) {
                    btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold ring-2 ring-emerald-500/40';
                  } else if (isSelected && !isCorrectOption) {
                    btnStyle = 'bg-red-950/80 border-red-500 text-red-300 font-bold ring-2 ring-red-500/40';
                  } else {
                    btnStyle = 'bg-[#10160c] opacity-40 border-[#202e15] text-[#7d9468]';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={isAnswerSubmitted}
                    className={`p-3.5 sm:p-4 rounded-xl border text-left font-mono text-sm sm:text-base flex items-center justify-between transition-all cursor-pointer shadow-sm ${btnStyle}`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs ${
                        isAnswerSubmitted && isCorrectOption
                          ? 'bg-emerald-500 text-black'
                          : isAnswerSubmitted && isSelected
                          ? 'bg-red-500 text-white'
                          : 'bg-[#202e15] text-[#b8df47] border border-[#446127]'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{opt}</span>
                    </div>

                    {isAnswerSubmitted && isCorrectOption && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrectOption && (
                      <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          ) : (
            /* Sentence Reordering Workspace */
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0e160a] border border-[#233116] min-h-[70px] space-y-2">
                <span className="text-[11px] font-mono text-[#9bb084] block">
                  Tu oración estructurada (Haz clic en los bloques para añadirlos o removerlos):
                </span>
                <div className="flex flex-wrap gap-2">
                  {reorderedTokens.length === 0 ? (
                    <span className="text-xs font-mono text-[#7d9468] italic py-1">
                      Selecciona las palabras de abajo en el orden sintáctico correcto...
                    </span>
                  ) : (
                    reorderedTokens.map((token, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleRemoveToken(token, idx)}
                        disabled={isAnswerSubmitted}
                        className="px-3 py-1.5 rounded-lg bg-[#b8df47] text-black font-mono font-bold text-xs sm:text-sm shadow-md hover:bg-red-400 hover:text-white transition-all cursor-pointer"
                        title="Haz clic para remover"
                      >
                        {token}
                      </button>
                    ))
                  )}
                </div>
              </div>

              {/* Available Tokens Pool */}
              <div className="flex flex-wrap gap-2 p-3 rounded-xl bg-[#12190d] border border-[#233116]">
                {availableTokens.map((token, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAddToken(token, idx)}
                    disabled={isAnswerSubmitted}
                    className="px-3 py-1.5 rounded-lg bg-[#202e15] hover:bg-[#2b3e1c] border border-[#446127] text-white font-mono text-xs sm:text-sm transition-all cursor-pointer shadow-xs"
                  >
                    {token}
                  </button>
                ))}
              </div>

              {!isAnswerSubmitted && (
                <button
                  type="button"
                  onClick={handleCheckReorder}
                  disabled={availableTokens.length > 0}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#6e8f2a] hover:bg-[#7fa430] disabled:opacity-40 disabled:cursor-not-allowed text-black font-mono font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md"
                >
                  Verificar Orden Sintáctico
                </button>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* INSTANT EXPLANATION & PEDAGOGICAL BRIEFING */}
          {/* ========================================================================= */}
          {isAnswerSubmitted && (
            <div className={`p-4 sm:p-5 rounded-xl border animate-fade-in space-y-3 ${
              userAnswers[currentExercise.id]?.isCorrect
                ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-200'
                : 'bg-red-950/30 border-red-500/50 text-red-200'
            }`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center space-x-2">
                  {userAnswers[currentExercise.id]?.isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                  )}
                  <span className="font-stencil font-bold text-sm tracking-wide">
                    {userAnswers[currentExercise.id]?.isCorrect
                      ? '¡CONCORDANCIA REGLAMENTARIA CORRECTA!'
                      : '¡ATENCIÓN DOCTRINAL: ERROR DE CONCORDANCIA!'}
                  </span>
                </div>

                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/10">
                  {currentExercise.tenseNameEnglish}
                </span>
              </div>

              {/* Detailed Explanation */}
              <p className="text-xs sm:text-sm font-mono leading-relaxed text-white/95">
                {currentExercise.explanation}
              </p>

              {/* Doctrinal Formula Badge */}
              {showFormulaDetails && (
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/10 text-xs font-mono space-y-1">
                  <div className="text-amber-300 font-bold flex items-center space-x-1.5">
                    <Info className="w-3.5 h-3.5" />
                    <span>Fórmula Sintáctica Reglamentaria:</span>
                  </div>
                  <div className="text-[#b8df47] font-semibold tracking-wide">
                    {currentExercise.formula}
                  </div>
                </div>
              )}

              {/* Next Question Button */}
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="px-5 py-2.5 rounded-xl bg-[#b8df47] hover:bg-[#c9ef56] text-black font-stencil font-bold text-xs sm:text-sm flex items-center space-x-2 transition-all cursor-pointer shadow-lg hover:scale-102"
                >
                  <span>{currentIndex < exercises.length - 1 ? 'Siguiente Reactivo' : 'Ver Resultados Finales'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. SESSION COMPLETION / SCORE REPORT CARD */}
      {/* ========================================================================= */}
      {isSessionComplete && (
        <div className="rounded-2xl bg-[#141d0f] border border-[#3b5025] p-6 sm:p-8 shadow-2xl space-y-6 text-center animate-fade-in">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#233116] border border-[#446127] flex items-center justify-center text-[#b8df47] shadow-xl">
            <Award className="w-8 h-8 text-[#b8df47]" />
          </div>

          <div>
            <span className="text-xs font-mono font-bold text-[#b8df47] px-2.5 py-1 rounded bg-[#202e15] border border-[#446127]">
              SESIÓN DE GRAMMAR LAB COMPLETADA
            </span>
            <h3 className="text-2xl sm:text-3xl font-stencil font-bold text-white mt-2">
              Evaluación de Concordancia Sintáctica
            </h3>
            <p className="text-xs font-mono text-[#9bb084] max-w-md mx-auto mt-1">
              Batería dinámica de {exercises.length} reactivos en tiempos verbales ({selectedTimeCategory === 'all' ? 'Pasado, Presente y Futuro' : selectedTimeCategory.toUpperCase()}).
            </p>
          </div>

          {/* Big Score Card */}
          <div className="max-w-md mx-auto p-5 rounded-2xl bg-[#0e160a] border border-[#233116] grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-stencil font-bold text-emerald-400">{correctCount}</div>
              <div className="text-[11px] font-mono text-[#9bb084]">Aciertos</div>
            </div>
            <div className="border-x border-[#233116]">
              <div className="text-2xl sm:text-3xl font-stencil font-bold text-white">{scorePercentage}%</div>
              <div className="text-[11px] font-mono text-[#9bb084]">Efectividad</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-stencil font-bold text-amber-400">{maxStreak}</div>
              <div className="text-[11px] font-mono text-[#9bb084]">Racha Máx.</div>
            </div>
          </div>

          {/* Assessment standard */}
          <div className="max-w-md mx-auto p-3 rounded-xl bg-[#1b2713] border border-[#3f5724] text-xs font-mono">
            {scorePercentage >= 80 ? (
              <span className="text-emerald-300 font-bold flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Nivel STANAG 6001 Competente: Excelente concordancia entre pronombres y tiempos.
              </span>
            ) : scorePercentage >= 60 ? (
              <span className="text-amber-300 font-bold flex items-center justify-center gap-1.5">
                <Info className="w-4 h-4 text-amber-400" />
                Nivel Operativo: Se recomienda reforzar concordancia de 3ª persona singular y auxiliares de pasado.
              </span>
            ) : (
              <span className="text-red-300 font-bold flex items-center justify-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Refuerzo Necesario: Revisa la matriz rápida y vuelve a generar una batería de práctica.
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleRegenerateBattery}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#b8df47] hover:bg-[#cbf556] text-black font-stencil font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg hover:scale-102"
            >
              <Shuffle className="w-4 h-4" />
              <span>Generar Otra Batería Dinámica</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setCurrentIndex(0);
                setSelectedOption(null);
                setIsAnswerSubmitted(false);
                setUserAnswers({});
                setIsSessionComplete(false);
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#202e15] hover:bg-[#2b3e1c] border border-[#446127] text-white font-mono text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-[#b8df47]" />
              <span>Reintentar Esta Misma Batería</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
