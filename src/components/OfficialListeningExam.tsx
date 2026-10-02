import React, { useState, useEffect, useRef, useMemo } from 'react';
import { LISTENING_EXAM_MODELS, ListeningExamModel, ListeningExamExercise } from '../data/listeningExamModels';
import { speakBritishText, stopSpeaking, soundEffects } from '../utils/audio';
import { AudioExamPlayer } from './AudioExamPlayer';
import { 
  FileCheck, 
  Clock, 
  Award, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  RotateCcw, 
  HelpCircle, 
  Send, 
  Volume2,
  Square,
  Play,
  FileText,
  Eye,
  EyeOff,
  Shield,
  Layers,
  Sparkles,
  Radio,
  Headphones,
  Upload,
  Shuffle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useSessionShuffle, shuffleExamQuestion } from '../utils/shuffleOptions';

interface OfficialListeningExamProps {
  levelNumber: number;
  onRecordScore: (exerciseId: string, scorePercentage: number) => void;
  audioRate?: number;
}

export const OfficialListeningExam: React.FC<OfficialListeningExamProps> = ({
  levelNumber,
  onRecordScore,
  audioRate = 0.95
}) => {
  const { sessionSeed, startNewShuffleSession } = useSessionShuffle();
  const rawExam: ListeningExamModel = LISTENING_EXAM_MODELS[levelNumber] || LISTENING_EXAM_MODELS[1];

  const exam: ListeningExamModel = useMemo(() => {
    return {
      ...rawExam,
      exercises: rawExam.exercises.map(ex => ({
        ...ex,
        questions: ex.questions.map(q => shuffleExamQuestion(q, sessionSeed))
      }))
    };
  }, [rawExam, sessionSeed]);

  const [controlNumber, setControlNumber] = useState(`EA-IESE-L${exam.levelRoman}-${Math.floor(1000 + Math.random() * 9000)}`);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [activeAudioExercise, setActiveAudioExercise] = useState<number>(1);
  const [playMode, setPlayMode] = useState<'single' | 'double'>('double');
  const [visibleScripts, setVisibleScripts] = useState<Record<number, boolean>>({});

  // Timer state
  const initialSeconds = exam.timeAllowedMinutes * 60;
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Reset state when level or session changes
  useEffect(() => {
    stopSpeaking();
    setAnswers({});
    setIsSubmitted(false);
    setShowKey(false);
    setSecondsLeft(exam.timeAllowedMinutes * 60);
    setIsTimerRunning(false);
    setActiveAudioExercise(1);
    setVisibleScripts({ 1: true, 2: true, 3: true });
    setControlNumber(`EA-IESE-L${exam.levelRoman}-${Math.floor(1000 + Math.random() * 9000)}`);
  }, [levelNumber, exam, sessionSeed]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  // Timer interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && secondsLeft > 0 && !isSubmitted) {
      interval = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev <= 1) {
            clearInterval(interval!);
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, secondsLeft, isSubmitted]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleScriptVisibility = (exerciseNum: number) => {
    setVisibleScripts(prev => ({ ...prev, [exerciseNum]: !prev[exerciseNum] }));
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  // Grading calculation
  const allQuestions = exam.exercises.flatMap(e => e.questions);

  const calculateScore = () => {
    let correctCount = 0;
    allQuestions.forEach(q => {
      const userAns = (answers[q.id] || '').trim().toLowerCase();
      if (!userAns) return;

      const correctAns = q.correctAnswer.trim().toLowerCase();
      const acceptable = (q.acceptableAnswers || [correctAns]).map(a => a.trim().toLowerCase());

      if (userAns === correctAns || acceptable.includes(userAns)) {
        correctCount++;
      }
    });

    const earnedPoints = Math.min(20, Math.round((correctCount / allQuestions.length) * 20 * 10) / 10);
    const percentage = Math.round((earnedPoints / 20) * 100);
    return { correctCount, earnedPoints, percentage };
  };

  const { correctCount, earnedPoints, percentage } = calculateScore();
  const isPassed = earnedPoints >= 14; // 70% standard

  const handleSubmitExam = () => {
    stopSpeaking();
    setIsTimerRunning(false);
    setIsSubmitted(true);
    onRecordScore(`official-listening-exam-l${exam.levelNumber}`, percentage);

    if (isPassed) {
      try {
        confetti({ particleCount: 60, spread: 80, origin: { y: 0.6 } });
      } catch {
        // Ignored
      }
    }
  };

  const handleResetExam = () => {
    stopSpeaking();
    setAnswers({});
    setIsSubmitted(false);
    setShowKey(false);
    setSecondsLeft(exam.timeAllowedMinutes * 60);
    setIsTimerRunning(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Official Header Card */}
      <div className="bg-[#141d0e]/95 border-2 border-[#3b4e28] rounded-2xl p-5 sm:p-7 shadow-xl backdrop-blur-sm">
        
        {/* Top bar with Emblem, Level and Control Number */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#314320] pb-5">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#1d2913] border border-[#445b2a] flex items-center justify-center text-[#b8df47] shadow-inner">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-stencil uppercase tracking-widest text-[#8ea478]">
                Escuela de Idiomas del Ejército • IESE
              </div>
              <h1 className="text-base sm:text-xl font-bold font-stencil text-white tracking-wide uppercase">
                {exam.title}
              </h1>
              <div className="text-xs text-[#b8df47] font-tactical font-semibold">
                {exam.part} • LEVEL {exam.levelNumber}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Control Number Badge */}
            <div className="bg-[#0e1509] border border-[#2e3e1d] px-3.5 py-1.5 rounded-lg text-right">
              <div className="text-[9px] uppercase font-mono text-[#7d9366]">Nro. De Control</div>
              <div className="font-mono text-xs font-bold text-[#b8df47]">{controlNumber}</div>
            </div>

            {/* Total Points Badge */}
            <div className="bg-[#243317] border border-[#47602d] px-4 py-2 rounded-xl text-center shadow-md">
              <div className="text-[9px] uppercase font-mono text-[#a8bc94]">Puntaje Máximo</div>
              <div className="text-xl font-bold font-stencil text-[#f2fcdb]">{exam.totalPoints}</div>
            </div>
          </div>
        </div>

        {/* Instructions & Timer Bar */}
        <div className="mt-4 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-[#cbdcb5] space-y-0.5">
            <div className="font-semibold text-[#f2fcdb]">
              Tiempo estimado reglamentario: <span className="font-mono text-[#b8df47] font-bold">{exam.timeAllowedMinutes} minutes</span>.
            </div>
            <div className="text-[#8ea478] font-mono text-[11px]">
              Escucha oficial: Cada grabación se reproduce dos veces (STANAG 6001). {exam.pointPerQuestionText}
            </div>
          </div>

          {/* Official Timer */}
          <div className="flex items-center space-x-2 bg-[#0c1208] border border-[#2b3a1a] px-3.5 py-1.5 rounded-xl">
            <Clock className={`w-4 h-4 ${secondsLeft < 180 ? 'text-red-400 animate-pulse' : 'text-[#b8df47]'}`} />
            <span className={`font-mono text-sm font-bold ${secondsLeft < 180 ? 'text-red-400' : 'text-white'}`}>
              {formatTime(secondsLeft)}
            </span>
            {!isSubmitted && (
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className={`text-[10px] font-mono px-2 py-0.5 rounded cursor-pointer transition-colors ${
                  isTimerRunning
                    ? 'bg-[#3b1717] text-[#fca5a5] hover:bg-[#4d1f1f]'
                    : 'bg-[#293d18] text-[#b8df47] hover:bg-[#344d1f]'
                }`}
              >
                {isTimerRunning ? 'Pausar' : 'Iniciar'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. SECCIÓN: PRIMERO LOS TEXTOS (Audio Scripts Oficiales con Reproductor)  */}
      {/* ========================================================================= */}
      <div className="bg-[#141d0e]/95 border-2 border-[#7ea830]/60 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#314320] pb-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-[#273917] text-[#b8df47] border border-[#49652c]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-stencil uppercase tracking-widest text-[#8ea478]">
                Etapa 1: Emisión & Audición
              </div>
              <h2 className="text-base sm:text-lg font-bold font-stencil text-[#b8df47] uppercase tracking-wide">
                Textos Oficiales de Audición (Audio Scripts & Transcripciones)
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center bg-[#0c1208] border border-[#2e401d] rounded-xl p-1 text-xs">
              <button
                onClick={() => setPlayMode('double')}
                className={`px-2.5 py-1 rounded-lg font-tactical transition-all cursor-pointer ${
                  playMode === 'double'
                    ? 'bg-[#273917] text-[#b8df47] font-bold border border-[#527329]'
                    : 'text-[#8ea478] hover:text-[#d6e7c1]'
                }`}
                title="Modo oficial de examen: 2 audiciones con 10 segundos de pausa intermedia"
              >
                2 Audiciones Oficiales (STANAG)
              </button>
              <button
                onClick={() => setPlayMode('single')}
                className={`px-2.5 py-1 rounded-lg font-tactical transition-all cursor-pointer ${
                  playMode === 'single'
                    ? 'bg-[#273917] text-[#b8df47] font-bold border border-[#527329]'
                    : 'text-[#8ea478] hover:text-[#d6e7c1]'
                }`}
                title="Reproducción de una sola audición directa"
              >
                1 Audición
              </button>
            </div>
            <span className="text-[11px] font-mono text-[#a4b88f] hidden sm:inline">
              Acento Británico RP
            </span>
          </div>
        </div>

        {/* Official Recording Alert Banner for Level 1 */}
        {levelNumber === 1 && (
          <div className="p-3 bg-[#1c2912] border border-[#49652c] rounded-xl flex items-center space-x-3 text-xs text-[#d6e7c1]">
            <div className="p-1.5 rounded-lg bg-[#273917] text-[#b8df47] shrink-0">
              <Headphones className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <span className="font-bold text-[#b8df47]">Audios Oficiales de Nivel 1 Integrados: </span>
              <span>
                Grabaciones originales de la cátedra IESE verificadas (1. Invitación al cine ABC Tim & Bill • 2. Paseos y deportes en Flushing Meadow, Central Park y Prospect Park • 3. Transmisión deportiva Kansas City vs Dallas).
              </span>
            </div>
          </div>
        )}

        {/* Exercise selector buttons for audio texts */}
        <div className="flex space-x-2 overflow-x-auto pb-1 no-scrollbar">
          {exam.exercises.map((ex) => (
            <button
              key={ex.exerciseNumber}
              onClick={() => setActiveAudioExercise(ex.exerciseNumber)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer font-tactical flex items-center space-x-2 ${
                activeAudioExercise === ex.exerciseNumber
                  ? 'bg-[#293d18] text-[#b8df47] border border-[#7ea830] shadow-md ring-1 ring-[#7ea830]/40'
                  : 'bg-[#141c0e] text-[#9eb288] border border-[#2e3e1d] hover:bg-[#1b2512]'
              }`}
            >
              <span>Texto & Audio Ejercicio #{ex.exerciseNumber}</span>
            </button>
          ))}
        </div>

        {/* Active Audio Script Card */}
        {exam.exercises.map((ex) => {
          if (ex.exerciseNumber !== activeAudioExercise) return null;
          const isScriptVisible = visibleScripts[ex.exerciseNumber] ?? true;

          return (
            <div key={ex.exerciseNumber} className="space-y-4">
              {/* Dedicated Real Audio & Speech Player */}
              <AudioExamPlayer
                levelNumber={levelNumber}
                exerciseNumber={ex.exerciseNumber}
                title={ex.audioScriptTitle}
                transcriptText={ex.audioScript}
                playMode={playMode}
                audioRate={audioRate}
              />

              {/* Full Audio Text Transcript Container */}
              <div className="bg-[#0c1208] border border-[#263818] rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-[#1e2c13] pb-2">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-[#8ea478]" />
                    <span className="text-xs font-stencil uppercase tracking-wider text-[#b8df47]">
                      Transcripción Oficial del Ejercicio {ex.exerciseNumber}
                    </span>
                  </div>
                  <button
                    id={`toggle-script-${ex.exerciseNumber}`}
                    data-expand-trigger="true"
                    onClick={() => toggleScriptVisibility(ex.exerciseNumber)}
                    className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-[#182310] hover:bg-[#223016] text-[#ff8533] hover:text-[#ffaa66] text-xs font-semibold cursor-pointer transition-colors neon-orange-expand"
                  >
                    {isScriptVisible ? <EyeOff className="w-3.5 h-3.5 text-[#ff6a00]" /> : <Eye className="w-3.5 h-3.5 text-[#ff6a00]" />}
                    <span>{isScriptVisible ? 'Ocultar Texto' : 'Ver Texto'}</span>
                  </button>
                </div>

                {isScriptVisible && (
                  <div data-expanded-container="true" className="p-4 rounded-xl bg-[#080d05] text-xs sm:text-sm font-mono text-[#d6e7c1] leading-relaxed whitespace-pre-wrap selection:bg-[#7ea830]/40 neon-orange-box">
                    {ex.audioScript}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 2. SECCIÓN: HOJA DE PREGUNTAS Y RESPUESTAS DEL EXAMEN OFICIAL             */}
      {/* ========================================================================= */}
      <div className="bg-[#141d0e]/95 border-2 border-[#3b4e28] rounded-2xl p-5 sm:p-7 shadow-xl backdrop-blur-sm space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#314320] pb-4">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-[#b8df47]" />
            <h2 className="text-base sm:text-lg font-bold font-stencil text-white tracking-wide uppercase">
              Hoja de Respuestas Oficial – Ejercicios 1 al {exam.exercises.length}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                startNewShuffleSession();
                handleResetExam();
              }}
              title="Generar nueva distribución aleatoria de opciones para esta sesión"
              className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-[#182312] hover:bg-[#25361b] border border-[#3b4e28] text-[#a4b78f] hover:text-[#b8df47] text-xs font-mono transition-colors cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5 text-[#b8df47]" />
              <span>Reordenar</span>
            </button>
            <span className="text-xs font-mono text-[#8fa577]">
              {allQuestions.length} ítems en total
            </span>
          </div>
        </div>

        {/* Exercises mapping */}
        {exam.exercises.map((exercise) => (
          <div key={exercise.exerciseNumber} className="space-y-4 pt-2">
            
            {/* Exercise Title & Instructions */}
            <div className="bg-[#0f170b] border border-[#2b3a1a] p-4 rounded-xl space-y-1">
              <div className="text-xs font-stencil uppercase tracking-wider text-[#b8df47]">
                {exercise.title}
              </div>
              <p className="text-xs text-[#a8bc94] leading-relaxed">
                {exercise.instructions}
              </p>
            </div>

            {/* Table layout if present (e.g. L1 Ex 2, L3 Ex 3) */}
            {exercise.tableData && (
              <div className="overflow-x-auto rounded-xl border border-[#2f431f] bg-[#0c1208]">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#182310] text-[#b8df47] uppercase border-b border-[#2f431f]">
                    <tr>
                      {exercise.tableData.columns.map((col, cIdx) => (
                        <th key={cIdx} className="p-3 font-stencil tracking-wider">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#223116]">
                    {exercise.tableData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-[#121a0c] transition-colors">
                        <td className="p-3 font-semibold text-[#f2fcdb] bg-[#10170a]">
                          {row.label}
                        </td>
                        {row.cells.map((cell, cIdx) => (
                          <td key={cIdx} className="p-3 text-[#dae8cb]">
                            {cell.text ? (
                              <span>{cell.text}</span>
                            ) : cell.questionId ? (
                              <input
                                type="text"
                                disabled={isSubmitted}
                                value={answers[cell.questionId] || ''}
                                onChange={(e) => handleAnswerChange(cell.questionId!, e.target.value)}
                                placeholder={cell.placeholder || 'Completar...'}
                                className="w-full bg-[#182310] border border-[#3b5025] rounded-lg px-2.5 py-1.5 text-xs font-mono text-[#b8df47] focus:outline-none focus:border-[#7ea830]"
                              />
                            ) : null}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Regular questions list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exercise.questions.map((q) => {
                const userVal = answers[q.id] || '';
                const isCorrect = userVal.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase() ||
                  (q.acceptableAnswers || []).map(a => a.trim().toLowerCase()).includes(userVal.trim().toLowerCase());

                return (
                  <div
                    key={q.id}
                    className="p-4 rounded-xl bg-[#0d1409] border border-[#2b3a1a] space-y-2.5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="text-xs font-medium text-[#f2fcdb] leading-snug">
                          {q.question}
                        </span>
                        {isSubmitted && (
                          <span className="shrink-0">
                            {isCorrect ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <XCircle className="w-4 h-4 text-rose-400" />
                            )}
                          </span>
                        )}
                      </div>

                      {/* True/False buttons */}
                      {q.type === 'true-false' && (
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {['TRUE', 'FALSE'].map((opt) => {
                            const isSelected = userVal === opt;
                            let btnStyle = 'bg-[#182310] text-[#c0d4ad] border-[#2e401d] hover:bg-[#202d15]';

                            if (isSelected && !isSubmitted) {
                              btnStyle = 'bg-[#2b3d19] text-[#b8df47] border-[#7ea830] ring-1 ring-[#7ea830]/40';
                            } else if (isSubmitted) {
                              if (opt === q.correctAnswer) {
                                btnStyle = 'bg-[#1b3d16] text-[#6ee7b7] border-[#10b981] font-semibold';
                              } else if (isSelected && !isCorrect) {
                                btnStyle = 'bg-[#3b1717] text-[#fca5a5] border-[#ef4444]';
                              } else {
                                btnStyle = 'bg-[#131b0e] text-[#6b7c5b] border-[#222e16] opacity-60';
                              }
                            }

                            return (
                              <button
                                key={opt}
                                disabled={isSubmitted}
                                onClick={() => handleAnswerChange(q.id, opt)}
                                className={`py-2 rounded-lg border text-xs font-mono font-bold transition-all cursor-pointer ${btnStyle}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Multiple choice options */}
                      {q.type === 'multiple-choice' && q.options && (
                        <div className="space-y-1.5 mt-2">
                          {q.options.map((opt) => {
                            const optKey = opt.trim().charAt(0); // 'A', 'B', 'C' or 'a', 'b', 'c'
                            const isSelected = userVal.toLowerCase() === optKey.toLowerCase();

                            let optStyle = 'bg-[#182310] text-[#c0d4ad] border-[#2e401d] hover:bg-[#202d15]';

                            if (isSelected && !isSubmitted) {
                              optStyle = 'bg-slate-200 text-[#0f2042] border-slate-300 font-bold shadow-md ring-1 ring-slate-400';
                            } else if (isSubmitted) {
                              if (optKey.toLowerCase() === q.correctAnswer.toLowerCase()) {
                                optStyle = 'bg-[#1b3d16] text-[#6ee7b7] border-[#10b981] font-semibold';
                              } else if (isSelected && !isCorrect) {
                                optStyle = 'bg-[#3b1717] text-[#fca5a5] border-[#ef4444]';
                              } else {
                                optStyle = 'bg-[#131b0e] text-[#6b7c5b] border-[#222e16] opacity-60';
                              }
                            }

                            return (
                              <button
                                key={opt}
                                disabled={isSubmitted}
                                onClick={() => handleAnswerChange(q.id, optKey)}
                                className={`w-full text-left p-2 rounded-lg border text-xs transition-all flex items-center justify-between cursor-pointer ${optStyle}`}
                              >
                                <span>{opt}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Fill in the blank text input */}
                      {q.type === 'fill-blank' && (
                        <div className="mt-2">
                          <input
                            type="text"
                            disabled={isSubmitted}
                            value={userVal}
                            onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                            placeholder="Escriba su respuesta..."
                            className={`w-full bg-[#182310] border rounded-lg px-3 py-2 text-xs font-mono text-[#b8df47] focus:outline-none focus:border-[#7ea830] ${
                              isSubmitted
                                ? isCorrect
                                  ? 'border-emerald-500 text-emerald-300'
                                  : 'border-rose-500 text-rose-300'
                                : 'border-[#3b5025]'
                            }`}
                          />
                        </div>
                      )}
                    </div>

                    {/* Correction feedback */}
                    {isSubmitted && (
                      <div className="text-[11px] font-mono pt-1.5 border-t border-[#233315] text-[#cadbb8]">
                        <span className="text-[#8ea478]">Respuesta oficial: </span>
                        <span className="font-bold text-[#b8df47]">{q.correctAnswer}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Submit / Reset Actions & Score Overview */}
        <div className="pt-6 border-t border-[#314320] space-y-4">
          {!isSubmitted ? (
            <button
              onClick={handleSubmitExam}
              disabled={Object.keys(answers).length === 0}
              className="w-full py-3.5 rounded-xl bg-[#688a28] hover:bg-[#7da72f] disabled:opacity-40 disabled:cursor-not-allowed text-[#0f150a] font-bold text-sm font-tactical shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Calificar Examen Oficial de Comprensión Auditiva</span>
            </button>
          ) : (
            <div className="space-y-4">
              {/* Score Results Card */}
              <div className={`p-6 rounded-2xl border-2 ${isPassed ? 'bg-[#142612] border-emerald-500/60' : 'bg-[#291414] border-rose-500/60'} text-center space-y-3`}>
                <div className="text-xs font-stencil uppercase tracking-widest text-[#cadbb8]">
                  Resultado Final del Examen Oficial
                </div>
                <div className="text-3xl sm:text-4xl font-bold font-stencil text-white">
                  {earnedPoints} / 20 <span className="text-lg font-mono">({percentage}%)</span>
                </div>
                <div className={`text-sm font-bold ${isPassed ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {isPassed ? '✓ APROBADO (Cumple con el estándar de la cátedra)' : '✗ REPROBADO (Se requiere un mínimo de 14 / 20 pts)'}
                </div>
                <p className="text-xs text-[#cadbb8] max-w-md mx-auto">
                  Has acertado {correctCount} de {allQuestions.length} consignas evaluadas.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => setShowKey(!showKey)}
                    className="px-4 py-2 rounded-xl bg-[#1d2a13] hover:bg-[#283b1a] text-[#b8df47] border border-[#49652c] text-xs font-semibold cursor-pointer transition-colors"
                  >
                    {showKey ? 'Ocultar Solucionario Oficial' : 'Ver Solucionario Oficial IESE'}
                  </button>

                  <button
                    onClick={handleResetExam}
                    className="px-4 py-2 rounded-xl bg-[#233116] hover:bg-[#2c3d1b] text-[#cadbb8] border border-[#445b2b] text-xs font-semibold cursor-pointer flex items-center space-x-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reiniciar Examen</span>
                  </button>
                </div>
              </div>

              {/* Official Key (PDF faithful) */}
              {showKey && (
                <div className="p-6 rounded-xl bg-[#090f05] border border-[#374c22] space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-[#2b3a1a] pb-2">
                    <span className="font-stencil text-sm text-[#b8df47] uppercase tracking-wider">
                      KEY TO LISTENING COMPREHENSION. LEVEL {exam.levelNumber}.
                    </span>
                    <span className="text-xs font-mono text-[#8fa577]">{exam.pointPerQuestionText}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-[#cce0b8]">
                    {exam.exercises.map((ex) => (
                      <div key={ex.exerciseNumber} className="bg-[#10170a] p-3 rounded-lg border border-[#223116] space-y-1">
                        <div className="font-bold text-[#b8df47] uppercase border-b border-[#223116] pb-1 mb-1">
                          Exercise {ex.exerciseNumber}
                        </div>
                        {ex.questions.map((q) => (
                          <div key={q.id} className="flex items-center justify-between">
                            <span className="text-[#8ea478]">{q.number})</span>
                            <span className="font-bold text-white">{q.correctAnswer}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>

                  {exam.answerKeyNotes && (
                    <div className="text-[11px] font-mono text-[#a8bc94] italic border-t border-[#223116] pt-2">
                      Nota de la cátedra: {exam.answerKeyNotes}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
