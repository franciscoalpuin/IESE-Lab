import React, { useState, useEffect, useMemo } from 'react';
import { READING_EXAM_MODELS, ReadingExamModel, ReadingExamExercise } from '../data/readingExamModels';
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
  BookOpen, 
  ChevronRight,
  Shield,
  Eye,
  Check,
  Shuffle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useSessionShuffle, shuffleExamQuestion } from '../utils/shuffleOptions';

interface OfficialReadingExamProps {
  levelNumber: number;
  onRecordScore: (exerciseId: string, scorePercentage: number) => void;
}

export const OfficialReadingExam: React.FC<OfficialReadingExamProps> = ({
  levelNumber,
  onRecordScore
}) => {
  const { sessionSeed, startNewShuffleSession } = useSessionShuffle();
  const rawExam: ReadingExamModel = READING_EXAM_MODELS[levelNumber] || READING_EXAM_MODELS[1];

  const exam: ReadingExamModel = useMemo(() => {
    return {
      ...rawExam,
      exercises: rawExam.exercises.map(ex => ({
        ...ex,
        questions: ex.questions.map(q => shuffleExamQuestion(q, sessionSeed))
      }))
    };
  }, [rawExam, sessionSeed]);

  const [controlNumber, setControlNumber] = useState(`EA-IESE-N${exam.levelRoman}-${Math.floor(1000 + Math.random() * 9000)}`);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showKey, setShowKey] = useState(false);

  // Timer state (seconds)
  const initialSeconds = exam.timeAllowedMinutes * 60;
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Reset exam state when level or session changes
  useEffect(() => {
    setAnswers({});
    setIsSubmitted(false);
    setShowKey(false);
    setSecondsLeft(exam.timeAllowedMinutes * 60);
    setIsTimerRunning(false);
    setControlNumber(`EA-IESE-N${exam.levelRoman}-${Math.floor(1000 + Math.random() * 9000)}`);
  }, [levelNumber, exam, sessionSeed]);

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

  const handleSelectAnswer = (qId: string, value: string) => {
    if (isSubmitted) return;
    if (!isTimerRunning && secondsLeft === initialSeconds) {
      setIsTimerRunning(true);
    }
    setAnswers(prev => ({ ...prev, [qId]: value }));
  };

  // Collect all questions for validation and scoring
  const allQuestions = exam.exercises.flatMap(e => e.questions);
  const totalQuestions = allQuestions.length;
  const answeredCount = Object.keys(answers).length;

  const handleSubmit = () => {
    setIsSubmitted(true);
    setIsTimerRunning(false);

    let correctCount = 0;
    allQuestions.forEach(q => {
      const userAns = (answers[q.id] || '').trim().toUpperCase();
      const expected = (q.correctAnswer || '').trim().toUpperCase();
      if (userAns === expected) {
        correctCount++;
      }
    });

    const finalScore = Math.min(20, Math.round(correctCount * exam.pointsPerItem * 10) / 10);
    const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

    onRecordScore(`exam-reading-l${exam.levelNumber}`, scorePercentage);

    if (scorePercentage >= 60) {
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback
      }
    }
  };

  const handleReset = () => {
    setAnswers({});
    setIsSubmitted(false);
    setShowKey(false);
    setSecondsLeft(initialSeconds);
    setIsTimerRunning(false);
  };

  // Format time MM:SS
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Results calculation
  let correctCount = 0;
  if (isSubmitted) {
    allQuestions.forEach(q => {
      const userAns = (answers[q.id] || '').trim().toUpperCase();
      const expected = (q.correctAnswer || '').trim().toUpperCase();
      if (userAns === expected) correctCount++;
    });
  }
  const calculatedPoints = Math.min(20, Math.round(correctCount * exam.pointsPerItem * 10) / 10);
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const isPassed = percentage >= 60;

  return (
    <div className="space-y-6">
      
      {/* Official Exam Document Header */}
      <div className="bg-[#141d0e]/95 border-2 border-[#455b2e] rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-sm relative overflow-hidden">
        
        {/* Top Official Military Stamp Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#364923] pb-4 mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-xl bg-[#202d15] border border-[#4a642e] flex items-center justify-center text-[#b8df47] shadow-inner">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-stencil uppercase tracking-widest text-[#8ea478]">
                Escuela de Idiomas del Ejército • IESE
              </div>
              <h1 className="text-base sm:text-xl font-bold font-stencil text-[#b8df47] tracking-wider uppercase">
                Modelo de Examen de Inglés – Nivel {exam.levelRoman}
              </h1>
              <div className="text-xs text-[#cadbb8] font-tactical font-medium">
                {exam.partTitle} • STANAG 6001 Standard
              </div>
            </div>
          </div>

          {/* Control Number & Max Points */}
          <div className="flex flex-wrap sm:flex-col items-end gap-2 text-right">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-[#0d1409] border border-[#3b4e28] text-xs font-mono text-[#b8df47]">
              <span className="text-[#849a6f]">Nro. De Control:</span>
              <input
                type="text"
                value={controlNumber}
                onChange={(e) => setControlNumber(e.target.value)}
                className="bg-transparent border-b border-[#526d33] w-36 text-center focus:outline-none text-[#f0f7e6]"
                title="Número de control del candidato"
              />
            </div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#202d16] border border-[#48632c] text-xs font-mono">
              <span className="text-[#9cb086]">Puntaje Máximo:</span>
              <span className="text-base font-bold text-[#b8df47]">{exam.totalPoints} pts</span>
              <span className="text-[11px] text-[#7d9366]">({exam.pointsPerItem} pt c/u)</span>
            </div>
          </div>
        </div>

        {/* Timer, Status & Action Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0d1409]/90 p-3 rounded-xl border border-[#2f401e]">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#192412] border border-[#3c5026]">
              <Clock className={`w-4 h-4 ${secondsLeft < 300 && !isSubmitted ? 'text-rose-400 animate-pulse' : 'text-[#b8df47]'}`} />
              <span className="text-xs font-mono text-[#9eb286]">Tiempo:</span>
              <span className={`font-mono font-bold text-sm ${secondsLeft < 300 && !isSubmitted ? 'text-rose-400' : 'text-[#f0f7e6]'}`}>
                {formattedTime}
              </span>
              <span className="text-[10px] text-[#73885d] font-mono">({exam.timeAllowedMinutes} min)</span>
            </div>

            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              disabled={isSubmitted}
              className="text-xs px-2.5 py-1.5 rounded bg-[#1e2a14] hover:bg-[#28381b] border border-[#3b4e28] text-[#c4d6b0] hover:text-white transition-colors cursor-pointer disabled:opacity-50"
            >
              {isTimerRunning ? 'Pausar Reloj' : secondsLeft === initialSeconds ? 'Iniciar Reloj' : 'Reanudar'}
            </button>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <span className="font-mono text-[#9cb086]">
              Respondidas: <strong className="text-[#b8df47]">{answeredCount}</strong> / {totalQuestions}
            </span>

            <button
              type="button"
              onClick={() => {
                startNewShuffleSession();
                handleReset();
              }}
              title="Generar nueva distribución aleatoria de opciones para esta sesión"
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-[#182312] hover:bg-[#25361b] border border-[#3b4e28] text-[#a4b78f] hover:text-[#b8df47] text-xs font-mono transition-colors cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5 text-[#b8df47]" />
              <span>Reordenar</span>
            </button>

            {!isSubmitted ? (
              <button
                id="submit-reading-exam-btn"
                onClick={handleSubmit}
                disabled={answeredCount === 0}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#688a28] hover:bg-[#7da72f] text-[#0f150a] font-bold text-xs font-tactical transition-all shadow-md hover:shadow-[#7da72f]/30 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Entregar Examen</span>
              </button>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  id="toggle-reading-key-btn"
                  data-expand-trigger="true"
                  onClick={() => setShowKey(!showKey)}
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#243318] hover:bg-[#304421] text-[#ff8533] hover:text-[#ffaa66] text-xs font-semibold cursor-pointer neon-orange-expand"
                >
                  <Eye className="w-3.5 h-3.5 text-[#ff6a00]" />
                  <span>{showKey ? 'Ocultar Solucionario' : 'Ver Solucionario (Key)'}</span>
                </button>
                <button
                  onClick={handleReset}
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#1a2413] hover:bg-[#25331b] border border-[#384c24] text-[#a4b78f] text-xs cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reiniciar</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Results Banner if Submitted */}
        {isSubmitted && (
          <div className={`mt-4 p-4 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in duration-300 ${
            isPassed 
              ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-200' 
              : 'bg-amber-950/70 border-amber-500/50 text-amber-200'
          }`}>
            <div className="flex items-center space-x-3">
              {isPassed ? (
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-400">
                  <AlertTriangle className="w-7 h-7" />
                </div>
              )}
              <div>
                <h3 className="text-base font-bold font-stencil uppercase tracking-wide">
                  {isPassed ? 'Examen Aprobado • Apto Comprensión Escrita' : 'Examen No Aprobado • Requiere Repaso'}
                </h3>
                <p className="text-xs text-[#cadbb8] mt-0.5">
                  Calificación obtenida: <strong className="text-white text-sm">{calculatedPoints} / 20 puntos</strong> ({percentage}% de aciertos — {correctCount} de {totalQuestions} ítems correctos).
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-stencil uppercase tracking-wider font-bold ${
                isPassed ? 'bg-emerald-500 text-slate-950' : 'bg-amber-500 text-slate-950'
              }`}>
                {isPassed ? 'APROBADO' : 'REPROBADO'}
              </span>
            </div>
          </div>
        )}

      </div>

      {/* Exercises List */}
      <div className="space-y-8">
        {exam.exercises.map((exercise: ReadingExamExercise) => {
          return (
            <div 
              key={exercise.exerciseNumber}
              className="bg-[#141d0e]/85 border border-[#3b4e28] rounded-2xl p-5 sm:p-7 shadow-xl backdrop-blur-sm"
            >
              {/* Exercise Header */}
              <div className="flex items-center justify-between border-b border-[#30411f] pb-3 mb-4">
                <div className="flex items-center space-x-2.5">
                  <span className="px-2.5 py-1 rounded bg-[#202e15] border border-[#445b2b] text-xs font-stencil uppercase text-[#b8df47] font-bold">
                    {exercise.title}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#8ea478]">
                  {exercise.questions.length} preguntas
                </span>
              </div>

              {/* Instructions */}
              <p className="text-sm font-tactical font-semibold text-[#d6eb9a] mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b8df47]"></span>
                {exercise.instruction}
              </p>

              {/* Context Text or Cards if any */}
              {exercise.passageText && (
                <div className="bg-[#0b1007]/90 border border-[#2f401e] rounded-xl p-4 sm:p-5 mb-6 shadow-inner">
                  {exercise.passageTitle && (
                    <div className="text-xs font-stencil uppercase tracking-wider text-[#b8df47] mb-2 border-b border-[#253318] pb-1">
                      {exercise.passageTitle}
                    </div>
                  )}
                  <p className="text-sm sm:text-base text-[#e2edce] font-sans leading-relaxed whitespace-pre-line">
                    {exercise.passageText}
                  </p>
                </div>
              )}

              {/* Cards (e.g. notices, hotels, interviews) */}
              {exercise.cards && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  {exercise.cards.map((card) => (
                    <div key={card.id} className="bg-[#0e1509] border border-[#384c24] rounded-xl p-4 flex flex-col justify-between shadow-md">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#b8df47] font-stencil border-b border-[#273618] pb-1.5 mb-2">
                          {card.title}
                        </h4>
                        <p className="text-xs text-[#cbdab6] leading-relaxed font-sans">
                          {card.body}
                        </p>
                      </div>
                      {card.extra && (
                        <div className="mt-2.5 pt-2 border-t border-[#233116] text-[11px] font-mono text-[#98ab82]">
                          {card.extra}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Matching Options Legend if any */}
              {exercise.matchingOptions && (
                <div className="bg-[#0c1208] border border-[#2c3d1b] rounded-xl p-3.5 mb-6">
                  <div className="text-xs font-stencil uppercase text-[#b8df47] mb-2">Opciones disponibles:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#cbdcb5]">
                    {exercise.matchingOptions.map(opt => (
                      <div key={opt.key} className="p-1.5 rounded bg-[#16200f] border border-[#2e401d]">
                        {opt.label}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Questions Area */}
              <div className="space-y-4">
                {exercise.questions.map((q) => {
                  const userAnswer = answers[q.id];
                  const isCorrect = isSubmitted && userAnswer?.trim().toUpperCase() === q.correctAnswer.trim().toUpperCase();
                  const isWrong = isSubmitted && userAnswer && !isCorrect;

                  return (
                    <div 
                      key={q.id}
                      className={`p-3.5 sm:p-4 rounded-xl border transition-all ${
                        isCorrect
                          ? 'bg-emerald-950/40 border-emerald-500/50'
                          : isWrong
                          ? 'bg-rose-950/40 border-rose-500/50'
                          : 'bg-[#10170b]/90 border-[#2f3f1e]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2.5">
                        <div className="text-xs sm:text-sm font-semibold text-[#f0f7e6] font-tactical flex items-start gap-2">
                          <span className="px-1.5 py-0.5 rounded bg-[#202d16] text-[#b8df47] font-mono text-xs font-bold">
                            {q.number}
                          </span>
                          <span>{q.questionText}</span>
                        </div>

                        {isSubmitted && (
                          <div className="shrink-0">
                            {isCorrect ? (
                              <span className="flex items-center gap-1 text-emerald-400 font-mono text-xs font-bold">
                                <Check className="w-4 h-4" /> Correcto
                              </span>
                            ) : (
                              <span className="flex items-center gap-1 text-rose-400 font-mono text-xs font-bold">
                                <XCircle className="w-4 h-4" /> Incorrecto
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Options Selector */}
                      {q.options && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                          {q.options.map((opt, optIndex) => {
                            // Can be option text or option letter
                            const letterKey = String.fromCharCode(97 + optIndex); // a, b, c...
                            const isLetterMatching = q.type === 'matching';
                            const optionValue = isLetterMatching ? opt : letterKey;
                            const isSelected = userAnswer?.toLowerCase() === optionValue.toLowerCase() || userAnswer === opt;

                            return (
                              <button
                                key={optIndex}
                                type="button"
                                disabled={isSubmitted}
                                onClick={() => handleSelectAnswer(q.id, optionValue)}
                                className={`text-left px-3 py-2 rounded-lg text-xs font-medium border transition-all flex items-center justify-between cursor-pointer disabled:cursor-default ${
                                  isSelected
                                    ? 'bg-slate-200 border-slate-300 text-[#0f2042] font-bold shadow-md ring-1 ring-slate-400'
                                    : 'bg-[#172210] hover:bg-[#202e17] border-[#364923] text-[#b4c79f] hover:text-white'
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-mono border ${
                                    isSelected ? 'border-[#0f2042] bg-[#0f2042] text-white font-bold' : 'border-[#556e36] text-[#8ea476]'
                                  }`}>
                                    {isLetterMatching ? opt : letterKey}
                                  </span>
                                  <span className={isSelected ? 'text-[#0f2042] font-bold' : ''}>{opt}</span>
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Official Explanation / Key Breakdown */}
                      {(isSubmitted || showKey) && (
                        <div className="mt-3 pt-2 border-t border-[#263517] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                          <div className="text-[#a4b88f]">
                            Respuesta Oficial: <strong className="text-[#b8df47] font-mono uppercase text-sm">{q.correctAnswer}</strong>
                            {q.explanation && (
                              <span className="text-[#899f71] ml-2 italic">— {q.explanation}</span>
                            )}
                          </div>
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>

      {/* Official Key Solucionario Drawer / Modal if toggled */}
      {showKey && (
        <div data-expanded-container="true" className="bg-[#0e1509] rounded-2xl p-5 shadow-2xl animate-in fade-in duration-200 neon-orange-box">
          <div className="flex items-center justify-between border-b border-[#354822] pb-3 mb-3">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-[#b8df47]" />
              <h3 className="font-stencil text-base text-[#b8df47] uppercase tracking-wider">
                Solucionario Oficial del Ejército (Key to Reading Comprehension – Level {exam.levelRoman})
              </h3>
            </div>
            <button
              onClick={() => setShowKey(false)}
              className="text-xs px-2.5 py-1 rounded bg-[#1e2a14] text-[#a4b78f] hover:text-white"
            >
              Cerrar
            </button>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-2 text-xs font-mono">
            {allQuestions.map(q => {
              const isMatch = (answers[q.id] || '').trim().toUpperCase() === q.correctAnswer.trim().toUpperCase();
              return (
                <div key={q.id} className="p-2 rounded bg-[#15200e] border border-[#344721] text-center">
                  <div className="text-[10px] text-[#7d9366]">Ítem {q.number}</div>
                  <div className="font-bold text-[#b8df47] text-sm">{q.correctAnswer}</div>
                  {isSubmitted && (
                    <div className={`text-[10px] mt-0.5 ${isMatch ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {isMatch ? '✓ Bien' : `Tuya: ${answers[q.id] || '-'}`}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-[#2a3a19] text-xs text-[#9eb286]">
            Total: 20 puntos ({exam.pointsPerItem} punto c/u). Criterio de Aprobación IESE: 60% (mínimo 12 puntos).
          </div>
        </div>
      )}

    </div>
  );
};
