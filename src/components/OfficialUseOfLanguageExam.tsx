import React, { useState, useEffect, useMemo } from 'react';
import { USE_OF_LANGUAGE_EXAM_MODELS, UseOfLanguageExamModel, UseOfLanguageQuestion } from '../data/useOfLanguageExamModels';
import { 
  FileCheck, 
  Clock, 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Send, 
  Eye, 
  Shield, 
  BookOpen, 
  HelpCircle,
  Sparkles,
  Info,
  Check,
  Shuffle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useSessionShuffle, shuffleExamQuestion } from '../utils/shuffleOptions';

interface OfficialUseOfLanguageExamProps {
  levelNumber: number;
  onRecordScore: (exerciseId: string, scorePercentage: number) => void;
}

export const OfficialUseOfLanguageExam: React.FC<OfficialUseOfLanguageExamProps> = ({
  levelNumber,
  onRecordScore
}) => {
  const { sessionSeed, startNewShuffleSession } = useSessionShuffle();
  const rawExam: UseOfLanguageExamModel = USE_OF_LANGUAGE_EXAM_MODELS[levelNumber] || USE_OF_LANGUAGE_EXAM_MODELS[1];

  const exam: UseOfLanguageExamModel = useMemo(() => {
    return {
      ...rawExam,
      exercises: rawExam.exercises.map(ex => ({
        ...ex,
        questions: ex.questions.map(q => shuffleExamQuestion(q, sessionSeed))
      }))
    };
  }, [rawExam, sessionSeed]);

  const [controlNumber, setControlNumber] = useState(`EA-IESE-UOL-N${exam.levelRoman}-${Math.floor(1000 + Math.random() * 9000)}`);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showKey, setShowKey] = useState(false);

  // Timer state
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
    setControlNumber(`EA-IESE-UOL-N${exam.levelRoman}-${Math.floor(1000 + Math.random() * 9000)}`);
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

  const allQuestions = exam.exercises.flatMap(e => e.questions);
  const totalQuestions = allQuestions.length;
  const answeredCount = Object.values(answers).filter((v: string) => typeof v === 'string' && v.trim() !== '').length;

  const isAnswerCorrect = (q: UseOfLanguageQuestion, userVal?: string): boolean => {
    if (!userVal) return false;
    const cleanUser = userVal.trim().toLowerCase().replace(/['’]/g, "'");
    const cleanExpected = q.correctAnswer.trim().toLowerCase().replace(/['’]/g, "'");

    // Direct match
    if (cleanUser === cleanExpected) return true;

    // Check multiple choice letter prefix, e.g. "b" vs "b) are"
    if (cleanUser === cleanExpected.charAt(0)) return true;

    // Check acceptable variants
    if (q.acceptableAnswers && q.acceptableAnswers.some(a => a.trim().toLowerCase().replace(/['’]/g, "'") === cleanUser)) {
      return true;
    }

    // Flexible punctuation / whitespace
    if (cleanUser.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "") === cleanExpected.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")) {
      return true;
    }

    return false;
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setIsTimerRunning(false);

    let earnedPoints = 0;
    allQuestions.forEach(q => {
      const userAns = answers[q.id];
      if (isAnswerCorrect(q, userAns)) {
        earnedPoints += q.points;
      }
    });

    const finalScore = Math.min(20, Math.round(earnedPoints * 10) / 10);
    const scorePercentage = Math.round((finalScore / exam.totalPoints) * 100);

    onRecordScore(`exam-uol-l${exam.levelNumber}`, scorePercentage);

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
  let earnedPoints = 0;
  let correctCount = 0;
  if (isSubmitted) {
    allQuestions.forEach(q => {
      const userAns = answers[q.id];
      if (isAnswerCorrect(q, userAns)) {
        earnedPoints += q.points;
        correctCount++;
      }
    });
  }
  const finalScore = Math.min(20, Math.round(earnedPoints * 10) / 10);
  const percentage = Math.round((finalScore / exam.totalPoints) * 100);
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
                {exam.partTitle} (Use of English) • STANAG 6001 Standard
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
                className="bg-transparent border-b border-[#526d33] w-44 text-center focus:outline-none text-[#f0f7e6]"
                title="Número de control del candidato"
              />
            </div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#202d16] border border-[#48632c] text-xs font-mono">
              <span className="text-[#9cb086]">Puntaje Máximo:</span>
              <span className="text-base font-bold text-[#b8df47]">{exam.totalPoints} pts</span>
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
              className="text-xs px-2.5 py-1.5 rounded bg-[#1e2a14] hover:bg-[#28381b] border border-[#3b4e28] text-[#c4d6b0] hover:text-white transition-colors cursor-pointer disabled:opacity-50 font-tactical"
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
                id="submit-uol-exam-btn"
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
                  onClick={() => setShowKey(!showKey)}
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#243318] hover:bg-[#304421] border border-[#48632c] text-[#b8df47] text-xs font-semibold cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
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
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Award className="w-6 h-6" />
                </div>
              )}
              <div>
                <div className="text-sm font-bold font-stencil tracking-wider uppercase">
                  {isPassed ? '¡Examen Aprobado (Apto Operativo)!' : 'Examen Completado - Requiere Refuerzo'}
                </div>
                <div className="text-xs opacity-90">
                  Puntaje obtenido: <strong>{finalScore}</strong> de {exam.totalPoints} puntos ({percentage}%) • Aciertos: {correctCount}/{totalQuestions}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="px-3 py-1.5 rounded-lg bg-black/40 border border-current text-sm font-mono font-bold">
                Calificación: {finalScore} / 20 pts
              </span>
            </div>
          </div>
        )}

        {/* Solucionario Oficial Desplegable */}
        {showKey && (
          <div className="mt-4 p-4 rounded-xl bg-[#0c1208] border border-[#48632c] text-xs font-mono space-y-3">
            <div className="flex items-center justify-between border-b border-[#2d3f1c] pb-2">
              <span className="font-bold text-[#b8df47] uppercase tracking-wider font-stencil">
                KEY TO USE OF ENGLISH. LEVEL {exam.levelRoman} (Hoja Oficial de Respuestas)
              </span>
              <span className="text-[#8ea476]">Total: 20 points</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {exam.officialKeySummary.map((item, i) => (
                <div key={i} className="bg-[#141d0e] p-2.5 rounded-lg border border-[#2b3b1a]">
                  <div className="font-bold text-[#d4e5be] mb-1">{item.exercise}:</div>
                  <div className="text-[#b8df47]">{item.answers}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Official Exercises List */}
      <div className="space-y-8">
        {exam.exercises.map((exercise) => {
          return (
            <div 
              key={exercise.exerciseNumber}
              className="bg-[#12190c]/90 border border-[#354822] rounded-2xl p-5 sm:p-7 shadow-xl backdrop-blur-sm space-y-5"
            >
              {/* Exercise Header */}
              <div className="border-b border-[#2b3a1a] pb-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-base sm:text-lg font-bold font-stencil text-[#b8df47] tracking-wide uppercase">
                    {exercise.title}
                  </h2>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#1e2a14] text-[#9eb288] border border-[#3c5025]">
                    Ejercicio #{exercise.exerciseNumber}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#b2c69e] mt-1 italic font-tactical">
                  • {exercise.instruction}
                </p>
              </div>

              {/* Context Text or Passage if present */}
              {exercise.contextText && (
                <div className="bg-[#0b1007] border border-[#263517] rounded-xl p-4 sm:p-5 relative">
                  {exercise.contextTitle && (
                    <div className="text-xs font-bold font-stencil uppercase tracking-widest text-[#b8df47] border-b border-[#263517] pb-2 mb-3">
                      {exercise.contextTitle}
                    </div>
                  )}
                  <div className="text-xs sm:text-sm font-mono text-[#d6e7c0] whitespace-pre-line leading-relaxed">
                    {exercise.contextText}
                  </div>
                </div>
              )}

              {/* Dialogue Script if dialogue matching */}
              {exercise.dialogueScript && exercise.dialogueOptions && (
                <div className="space-y-4">
                  {/* Options Pool */}
                  <div className="bg-[#0b1007] border border-[#2b3c1b] rounded-xl p-4">
                    <div className="text-xs font-stencil uppercase tracking-wider text-[#b8df47] mb-2">
                      Options:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#cadbb8]">
                      {exercise.dialogueOptions.map(opt => (
                        <div key={opt.id} className="p-2 rounded bg-[#141d0e] border border-[#2f401d]">
                          {opt.text}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Conversation Script with slots */}
                  <div className="bg-[#152010] border border-[#3b4f26] rounded-xl p-4 space-y-3 font-mono text-xs sm:text-sm">
                    {exercise.dialogueScript.map((line, idx) => {
                      if (!line.blankId) {
                        return (
                          <div key={idx} className="flex items-start space-x-2 text-[#d4e5be]">
                            <span className="font-bold text-[#b8df47] w-16 shrink-0">{line.speaker}:</span>
                            <span>{line.text}</span>
                          </div>
                        );
                      }

                      // It's a blank slot for Marie
                      const q = exercise.questions.find(q => q.id === line.blankId)!;
                      const userVal = answers[q.id] || '';
                      const isCorrect = isAnswerCorrect(q, userVal);

                      return (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 text-[#d4e5be] bg-[#0c1208] p-2.5 rounded-lg border border-[#2c3d1b]">
                          <span className="font-bold text-[#b8df47] w-16 shrink-0">{line.speaker}:</span>
                          <span className="font-bold text-[#8fa577]">{line.text}</span>
                          
                          {/* Dropdown to pick option */}
                          <div className="flex-1">
                            <select
                              value={userVal}
                              disabled={isSubmitted}
                              onChange={(e) => handleSelectAnswer(q.id, e.target.value)}
                              className={`w-full bg-[#182310] border text-xs sm:text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#7ea830] transition-colors ${
                                isSubmitted
                                  ? isCorrect
                                    ? 'border-emerald-500 bg-emerald-950/40 text-emerald-300'
                                    : 'border-rose-500 bg-rose-950/40 text-rose-300'
                                  : userVal
                                    ? 'border-[#7ea830] text-[#f0f7e6]'
                                    : 'border-[#33471f] text-[#8fa577]'
                              }`}
                            >
                              <option value="">-- Seleccionar opción (1-7) --</option>
                              {exercise.dialogueOptions.map(opt => (
                                <option key={opt.id} value={opt.id}>
                                  {opt.text}
                                </option>
                              ))}
                            </select>
                          </div>

                          {isSubmitted && (
                            <div className="flex items-center space-x-1 shrink-0">
                              {isCorrect ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <div className="flex items-center space-x-1 text-rose-400 text-xs">
                                  <XCircle className="w-4 h-4" />
                                  <span>(Correcta: {q.correctAnswer})</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Questions Render (Non-dialogue) */}
              {!exercise.dialogueScript && (
                <div className="space-y-4">
                  {exercise.questions.map((q) => {
                    const userVal = answers[q.id] || '';
                    const isCorrect = isAnswerCorrect(q, userVal);

                    return (
                      <div 
                        key={q.id}
                        className={`p-4 rounded-xl border transition-all ${
                          isSubmitted
                            ? isCorrect
                              ? 'bg-[#102412]/80 border-emerald-600/50'
                              : 'bg-[#291414]/80 border-rose-600/50'
                            : userVal
                              ? 'bg-[#162010] border-[#445b2b]'
                              : 'bg-[#0f160a] border-[#293819]'
                        }`}
                      >
                        {/* Question Prompt */}
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div className="text-xs sm:text-sm font-mono text-[#d6e7c0] leading-relaxed">
                            <span className="font-bold text-[#b8df47] mr-2">
                              {q.number})
                            </span>
                            {q.questionText}
                          </div>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1e2a14] text-[#8fa577] shrink-0">
                            {q.points} pt
                          </span>
                        </div>

                        {/* Multiple Choice Options */}
                        {q.options && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
                            {q.options.map((opt, oIdx) => {
                              // Extract letter code: 'a', 'b', 'c', 'd'
                              const matchLetter = opt.trim().match(/^([a-dA-D])[)\-.]/);
                              const letterCode = matchLetter ? matchLetter[1].toLowerCase() : opt.trim().toLowerCase();
                              const isSelected = userVal.toLowerCase() === letterCode || userVal.toLowerCase() === opt.trim().toLowerCase();

                              let style = 'bg-[#182310] border-[#2d3e1c] text-[#b8cc9f] hover:bg-[#202d15]';
                              if (isSelected && !isSubmitted) {
                                style = 'bg-[#2b3e18] border-[#7ea830] text-[#b8df47] ring-1 ring-[#7ea830]/40';
                              } else if (isSubmitted) {
                                const optIsTarget = q.correctAnswer.toLowerCase() === letterCode;
                                if (optIsTarget) {
                                  style = 'bg-emerald-950/60 border-emerald-500 text-emerald-300 font-semibold';
                                } else if (isSelected && !isCorrect) {
                                  style = 'bg-rose-950/60 border-rose-500 text-rose-300';
                                } else {
                                  style = 'bg-[#131b0e] border-[#222e16] text-[#6b7c5b] opacity-60';
                                }
                              }

                              return (
                                <button
                                  key={oIdx}
                                  type="button"
                                  disabled={isSubmitted}
                                  onClick={() => handleSelectAnswer(q.id, letterCode)}
                                  className={`p-2.5 rounded-lg border text-xs font-mono text-left flex items-center justify-between cursor-pointer transition-all ${style}`}
                                >
                                  <span>{opt}</span>
                                  {isSubmitted && q.correctAnswer.toLowerCase() === letterCode && (
                                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* Open Cloze / Single Word Input */}
                        {q.type === 'open-cloze' && (
                          <div className="flex items-center space-x-3 mt-2">
                            <span className="text-xs font-mono text-[#8fa577]">Respuesta (1 palabra):</span>
                            <input
                              type="text"
                              value={userVal}
                              disabled={isSubmitted}
                              placeholder="Escriba 1 palabra..."
                              onChange={(e) => handleSelectAnswer(q.id, e.target.value)}
                              className={`bg-[#0c1208] border text-xs sm:text-sm font-mono px-3 py-1.5 rounded-lg focus:outline-none focus:border-[#7ea830] w-56 ${
                                isSubmitted
                                  ? isCorrect
                                    ? 'border-emerald-500 text-emerald-300 bg-emerald-950/30'
                                    : 'border-rose-500 text-rose-300 bg-rose-950/30'
                                  : 'border-[#33471f] text-[#f0f7e6]'
                              }`}
                            />
                            {isSubmitted && (
                              <div className="flex items-center space-x-1 text-xs font-mono">
                                {isCorrect ? (
                                  <span className="text-emerald-400 flex items-center space-x-1">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    <span>Correcto</span>
                                  </span>
                                ) : (
                                  <span className="text-rose-400 flex items-center space-x-1">
                                    <XCircle className="w-3.5 h-3.5" />
                                    <span>Esperado: <strong>{q.correctAnswer}</strong></span>
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Sentence Transformation / Paraphrasing */}
                        {q.type === 'transformation' && (
                          <div className="space-y-2 mt-2">
                            {q.givenWord && (
                              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-md bg-[#223115] border border-[#48632a] text-xs font-mono text-[#b8df47]">
                                <span className="text-[#849a6f]">Palabra dada:</span>
                                <strong className="uppercase font-bold tracking-wider">{q.givenWord}</strong>
                              </div>
                            )}

                            <div className="flex flex-wrap items-center gap-2 p-3 rounded-lg bg-[#0b1007] border border-[#263717] font-mono text-xs sm:text-sm text-[#d4e5be]">
                              {q.prefixText && <span>{q.prefixText}</span>}
                              
                              <input
                                type="text"
                                value={userVal}
                                disabled={isSubmitted}
                                placeholder="Complete aquí..."
                                onChange={(e) => handleSelectAnswer(q.id, e.target.value)}
                                className={`bg-[#162010] border px-3 py-1 rounded text-xs sm:text-sm min-w-[200px] flex-1 focus:outline-none focus:border-[#7ea830] ${
                                  isSubmitted
                                    ? isCorrect
                                      ? 'border-emerald-500 text-emerald-300 bg-emerald-950/30'
                                      : 'border-rose-500 text-rose-300 bg-rose-950/30'
                                    : 'border-[#3d5324] text-[#f0f7e6]'
                                }`}
                              />

                              {q.suffixText && <span>{q.suffixText}</span>}
                            </div>

                            {isSubmitted && (
                              <div className={`p-2 rounded text-xs font-mono flex items-center justify-between ${
                                isCorrect ? 'text-emerald-300 bg-emerald-950/20' : 'text-rose-300 bg-rose-950/20'
                              }`}>
                                <div className="flex items-center space-x-1.5">
                                  {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <XCircle className="w-3.5 h-3.5 text-rose-400" />}
                                  <span>{isCorrect ? '¡Transformación correcta!' : 'Respuesta oficial esperada:'}</span>
                                </div>
                                {!isCorrect && (
                                  <div className="font-bold text-[#b8df47]">
                                    "{q.correctAnswer}"
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Word Formation */}
                        {q.type === 'word-formation' && (
                          <div className="flex flex-wrap items-center justify-between gap-3 mt-2">
                            <div className="flex items-center space-x-2">
                              {q.givenWord && (
                                <span className="px-2.5 py-1 rounded bg-[#202d15] border border-[#445e27] text-xs font-mono font-bold text-[#b8df47] uppercase">
                                  {q.givenWord}
                                </span>
                              )}
                              <span className="text-xs font-mono text-[#8fa577]">Derivación:</span>
                              <input
                                type="text"
                                value={userVal}
                                disabled={isSubmitted}
                                placeholder="Palabra derivada..."
                                onChange={(e) => handleSelectAnswer(q.id, e.target.value)}
                                className={`bg-[#0c1208] border text-xs sm:text-sm font-mono px-3 py-1.5 rounded-lg focus:outline-none focus:border-[#7ea830] w-48 ${
                                  isSubmitted
                                    ? isCorrect
                                      ? 'border-emerald-500 text-emerald-300 bg-emerald-950/30'
                                      : 'border-rose-500 text-rose-300 bg-rose-950/30'
                                    : 'border-[#33471f] text-[#f0f7e6]'
                                }`}
                              />
                            </div>

                            {isSubmitted && (
                              <div className="flex items-center space-x-2 text-xs font-mono">
                                {isCorrect ? (
                                  <span className="text-emerald-400 flex items-center space-x-1">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    <span>Correcto</span>
                                  </span>
                                ) : (
                                  <span className="text-rose-400 flex items-center space-x-1">
                                    <XCircle className="w-3.5 h-3.5" />
                                    <span>Solución oficial: <strong>{q.correctAnswer}</strong></span>
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Explanation on submit */}
                        {isSubmitted && q.explanation && (
                          <div className="mt-2.5 pt-2 border-t border-[#2a3a19] text-[11px] text-[#9cb086] flex items-start space-x-1.5">
                            <Info className="w-3.5 h-3.5 text-[#b8df47] shrink-0 mt-0.5" />
                            <span>{q.explanation}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Floating/Fixed Delivery Bar if not submitted */}
      {!isSubmitted && (
        <div className="bg-[#141d0e]/95 border border-[#3b4e28] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
          <div className="text-xs font-mono text-[#a8bc94]">
            Progreso del examen: <strong className="text-[#b8df47]">{answeredCount}</strong> de {totalQuestions} ítems respondidos.
          </div>
          <button
            onClick={handleSubmit}
            disabled={answeredCount === 0}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#688a28] hover:bg-[#7da72f] text-[#0f150a] font-bold text-xs font-tactical transition-all shadow-md hover:shadow-[#7da72f]/30 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            <span>Finalizar y Entregar Examen de Uso de la Lengua (20 pts)</span>
          </button>
        </div>
      )}
    </div>
  );
};
