import React, { useState, useEffect } from 'react';
import { WRITING_EXAM_MODELS, WritingExamModel, WritingExamTaskOption } from '../data/writingExamModels';
import { 
  FileText, 
  Clock, 
  Award, 
  CheckCircle2, 
  RotateCcw, 
  Send, 
  Eye, 
  EyeOff, 
  Shield, 
  PenTool, 
  Copy, 
  Check, 
  Info, 
  CheckSquare, 
  Square,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface OfficialWritingExamProps {
  levelNumber: number;
  onRecordScore: (exerciseId: string, scorePercentage: number) => void;
}

export const OfficialWritingExam: React.FC<OfficialWritingExamProps> = ({
  levelNumber,
  onRecordScore
}) => {
  const exam: WritingExamModel = WRITING_EXAM_MODELS[levelNumber] || WRITING_EXAM_MODELS[1];

  const [controlNumber, setControlNumber] = useState(
    `EA-IESE-WRT-N${exam.levelRoman}-${Math.floor(1000 + Math.random() * 9000)}`
  );

  // Selected option for exercises with choice (e.g. Exercise 2 choice A or B)
  const [selectedOptionIds, setSelectedOptionIds] = useState<Record<number, string>>({});
  
  // User written compositions for each exercise
  const [compositions, setCompositions] = useState<Record<number, string>>({});

  // Checklist self-assessment
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Model answer visibility toggles
  const [showModelAnswer, setShowModelAnswer] = useState<Record<number, boolean>>({});

  // Submission state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedPhrase, setCopiedPhrase] = useState<string | null>(null);

  // Timer
  const initialSeconds = exam.timeAllowedMinutes * 60;
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Active exercise view tab (1 or 2)
  const [activeExerciseTab, setActiveExerciseTab] = useState(1);

  // Reset when level changes
  useEffect(() => {
    setCompositions({});
    setCheckedItems({});
    setShowModelAnswer({});
    setIsSubmitted(false);
    setSecondsLeft(exam.timeAllowedMinutes * 60);
    setIsTimerRunning(false);
    setActiveExerciseTab(1);
    setControlNumber(`EA-IESE-WRT-N${exam.levelRoman}-${Math.floor(1000 + Math.random() * 9000)}`);

    // Pre-select default options for choice exercises
    const initialChoices: Record<number, string> = {};
    exam.exercises.forEach(ex => {
      if (ex.options.length > 0) {
        initialChoices[ex.exerciseNumber] = ex.options[0].id;
      }
    });
    setSelectedOptionIds(initialChoices);
  }, [levelNumber, exam]);

  // Timer countdown
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

  const handleTextChange = (exNum: number, text: string) => {
    if (isSubmitted) return;
    if (!isTimerRunning && secondsLeft === initialSeconds) {
      setIsTimerRunning(true);
    }
    setCompositions(prev => ({ ...prev, [exNum]: text }));
  };

  const handleSelectChoice = (exNum: number, optionId: string) => {
    if (isSubmitted) return;
    setSelectedOptionIds(prev => ({ ...prev, [exNum]: optionId }));
    // Reset checked items for this exercise to keep fresh
    setShowModelAnswer(prev => ({ ...prev, [exNum]: false }));
  };

  const handleToggleCheck = (key: string) => {
    if (isSubmitted) return;
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleInsertPhrase = (exNum: number, phrase: string) => {
    if (isSubmitted) return;
    const current = compositions[exNum] || '';
    const newText = current ? `${current} ${phrase} ` : `${phrase} `;
    setCompositions(prev => ({ ...prev, [exNum]: newText }));
    setCopiedPhrase(phrase);
    setTimeout(() => setCopiedPhrase(null), 1500);
  };

  const getActiveOption = (ex: typeof exam.exercises[0]): WritingExamTaskOption => {
    const chosenId = selectedOptionIds[ex.exerciseNumber];
    const match = ex.options.find(o => o.id === chosenId);
    return match || ex.options[0];
  };

  // Helper to count words
  const countWords = (text?: string): number => {
    if (!text || text.trim() === '') return 0;
    return text.trim().split(/\s+/).length;
  };

  // Evaluate single exercise (0 to 10 points)
  const calculateExerciseScore = (ex: typeof exam.exercises[0]): {
    total: number;
    wordCountScore: number;
    checklistScore: number;
    contentScore: number;
    wordCount: number;
  } => {
    const text = compositions[ex.exerciseNumber] || '';
    const wordCount = countWords(text);
    const activeOpt = getActiveOption(ex);
    const { min, max } = activeOpt.targetWordRange;

    // Word Count Score (up to 3.0 pts)
    let wordCountScore = 0;
    if (wordCount >= min && wordCount <= max + 15) {
      wordCountScore = 3.0; // Perfect length
    } else if (wordCount >= Math.floor(min * 0.7) && wordCount < min) {
      wordCountScore = 1.8; // Slightly short
    } else if (wordCount > max + 15) {
      wordCountScore = 2.2; // Exceeding word limit penalty
    } else if (wordCount > 15) {
      wordCountScore = 1.0; // Too short
    }

    // Checklist self-compliance score (up to 3.5 pts)
    const checks = activeOpt.requiredChecklist;
    const totalChecks = checks.length;
    let checkedCount = 0;
    checks.forEach((_, idx) => {
      if (checkedItems[`${activeOpt.id}-${idx}`]) {
        checkedCount++;
      }
    });
    const checklistScore = totalChecks > 0 ? Math.round((checkedCount / totalChecks) * 3.5 * 10) / 10 : 3.0;

    // Content richness & keywords presence (up to 3.5 pts)
    const lowerText = text.toLowerCase();
    let keywordsFound = 0;
    activeOpt.usefulConnectors.forEach(conn => {
      const coreWord = conn.split(/[\s,]+/)[0].toLowerCase();
      if (coreWord && coreWord.length > 3 && lowerText.includes(coreWord)) {
        keywordsFound++;
      }
    });
    const contentScore = Math.min(3.5, 1.5 + (keywordsFound * 0.5));

    const rawTotal = wordCount === 0 ? 0 : Math.min(10, Math.round((wordCountScore + checklistScore + contentScore) * 10) / 10);
    return {
      total: rawTotal,
      wordCountScore,
      checklistScore,
      contentScore,
      wordCount
    };
  };

  // Final evaluation
  const ex1 = exam.exercises[0];
  const ex2 = exam.exercises[1];
  const score1 = calculateExerciseScore(ex1);
  const score2 = calculateExerciseScore(ex2);
  const totalEarnedPoints = Math.min(20, Math.round((score1.total + score2.total) * 10) / 10);
  const percentage = Math.round((totalEarnedPoints / exam.totalPoints) * 100);
  const isPassed = percentage >= 60;

  const totalWordsWritten = score1.wordCount + score2.wordCount;

  const handleSubmit = () => {
    setIsSubmitted(true);
    setIsTimerRunning(false);

    // Show model answers on submit
    setShowModelAnswer({ 1: true, 2: true });

    onRecordScore(`exam-writing-l${exam.levelNumber}`, percentage);

    if (percentage >= 60) {
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
    setCompositions({});
    setCheckedItems({});
    setShowModelAnswer({});
    setIsSubmitted(false);
    setSecondsLeft(initialSeconds);
    setIsTimerRunning(false);
  };

  // Format time MM:SS
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const currentActiveExercise = exam.exercises.find(e => e.exerciseNumber === activeExerciseTab) || exam.exercises[0];
  const currentActiveOption = getActiveOption(currentActiveExercise);

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
                {exam.partTitle} (Writing Assessment) • STANAG 6001 Standard
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

        {/* Timer, Exercise Tabs & Submit Strip */}
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

          {/* Exercise navigation pills (1 and 2) */}
          <div className="flex items-center space-x-2">
            {exam.exercises.map((ex) => {
              const words = countWords(compositions[ex.exerciseNumber]);
              const activeOpt = getActiveOption(ex);
              const isTargetReached = words >= activeOpt.targetWordRange.min;

              return (
                <button
                  key={ex.exerciseNumber}
                  onClick={() => setActiveExerciseTab(ex.exerciseNumber)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-stencil tracking-wider uppercase transition-all flex items-center space-x-1.5 cursor-pointer ${
                    activeExerciseTab === ex.exerciseNumber
                      ? 'bg-[#688a28] text-[#0e1409] font-bold shadow-md'
                      : 'bg-[#182310] text-[#a4b88f] hover:bg-[#223017] border border-[#374c22]'
                  }`}
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>Ejercicio {ex.exerciseNumber}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isTargetReached ? 'bg-black/30 text-[#f0f7e6]' : 'bg-black/20 text-[#8ba274]'
                  }`}>
                    {words}w
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center space-x-3 text-xs">
            {!isSubmitted ? (
              <button
                id="submit-writing-exam-btn"
                onClick={handleSubmit}
                disabled={totalWordsWritten < 20}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#688a28] hover:bg-[#7da72f] text-[#0f150a] font-bold text-xs font-tactical transition-all shadow-md hover:shadow-[#7da72f]/30 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Entregar Examen Escrito</span>
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#1a2413] hover:bg-[#25331b] border border-[#384c24] text-[#a4b78f] text-xs cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar</span>
              </button>
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
                  {isPassed ? '¡Examen de Expresión Escrita Aprobado (Apto STANAG 6001)!' : 'Examen Completado - Requiere Refuerzo y Práctica'}
                </div>
                <div className="text-xs opacity-90">
                  Puntaje Total: <strong>{totalEarnedPoints}</strong> de {exam.totalPoints} puntos ({percentage}%) • Ex1: {score1.total}/10 pts | Ex2: {score2.total}/10 pts
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="px-3 py-1.5 rounded-lg bg-black/40 border border-current text-sm font-mono font-bold">
                Calificación: {totalEarnedPoints} / 20 pts
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Main Active Exercise Workspace */}
      <div className="bg-[#12190c]/95 border border-[#354822] rounded-2xl p-5 sm:p-7 shadow-xl backdrop-blur-sm space-y-6">
        
        {/* Exercise Header & Instructions */}
        <div className="border-b border-[#2b3a1a] pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1e2a14] text-[#8fa577] uppercase tracking-wider">
                Parte 4 • Ejercicio #{currentActiveExercise.exerciseNumber} (Valor: {currentActiveExercise.points} puntos)
              </span>
              <h2 className="text-base sm:text-lg font-bold font-stencil text-[#b8df47] tracking-wide uppercase mt-1">
                {currentActiveExercise.title}
              </h2>
            </div>

            {/* Target Word Range Pill */}
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-[#192412] border border-[#3a4f25] text-xs font-mono text-[#b8df47]">
              <span className="text-[#8aa073]">Extensión requerida:</span>
              <strong>{currentActiveOption.targetWordRange.label}</strong>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#b2c69e] mt-2 italic font-tactical">
            • {currentActiveExercise.instructions}
          </p>

          {/* If the exercise has optional choices (A or B / a or b), show choice toggle buttons */}
          {currentActiveExercise.options.length > 1 && (
            <div className="mt-4 pt-3 border-t border-[#263517]">
              <div className="text-xs font-mono text-[#8fa577] mb-2 font-semibold">
                Seleccione la consigna que desea redactar (Opción A o B):
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentActiveExercise.options.map(opt => {
                  const isSelected = selectedOptionIds[currentActiveExercise.exerciseNumber] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => handleSelectChoice(currentActiveExercise.exerciseNumber, opt.id)}
                      className={`p-3 rounded-xl border text-left text-xs font-tactical transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#293d18] border-[#7ea830] text-[#b8df47] ring-1 ring-[#7ea830]/50 shadow-md'
                          : 'bg-[#151e0f] border-[#2e3e1c] text-[#9eb288] hover:bg-[#1b2714]'
                      }`}
                    >
                      <div className="font-bold font-stencil uppercase tracking-wider mb-1 flex items-center justify-between">
                        <span>{opt.label}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#b8df47]" />}
                      </div>
                      <div className="text-[11px] opacity-90 line-clamp-2">
                        {opt.title}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Visual Box / Input Card if present (Blog, Postcard, Flyer, Advertisement) */}
        {currentActiveOption.visualBox && (
          <div className="bg-[#0b1007] border-2 border-[#3b4e28] rounded-xl p-4 sm:p-5 relative shadow-inner">
            <div className="flex items-center justify-between border-b border-[#253616] pb-2 mb-3">
              <span className="font-stencil text-sm font-bold text-[#b8df47] uppercase tracking-wider">
                {currentActiveOption.visualBox.header}
              </span>
              {currentActiveOption.visualBox.subHeader && (
                <span className="text-[11px] font-mono text-[#8ca173]">
                  {currentActiveOption.visualBox.subHeader}
                </span>
              )}
            </div>
            <div className="text-xs sm:text-sm font-mono text-[#d6e7c0] italic">
              "{currentActiveOption.visualBox.content}"
            </div>
          </div>
        )}

        {/* Scenario Context / Email / Advertisement Box */}
        {currentActiveOption.scenarioContext && (
          <div className="bg-[#0d1409] border border-[#30431d] rounded-xl p-4 space-y-2">
            <div className="text-xs font-stencil uppercase tracking-widest text-[#8ea476]">
              Documento / Mensaje de Entrada de Referencia:
            </div>
            <pre className="text-xs sm:text-sm font-mono text-[#d4e5be] whitespace-pre-wrap leading-relaxed bg-[#131b0d] p-3 rounded-lg border border-[#233116]">
              {currentActiveOption.scenarioContext}
            </pre>
          </div>
        )}

        {/* Guided Questions / Margin Notes List */}
        {currentActiveOption.notesOrQuestions.length > 0 && (
          <div className="bg-[#152010] border border-[#3b4f26] rounded-xl p-4">
            <div className="text-xs font-stencil uppercase tracking-wider text-[#b8df47] mb-2 flex items-center space-x-1.5">
              <Info className="w-4 h-4" />
              <span>Puntos y Preguntas Guía Obligatorias a Incluir:</span>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono text-[#cadbb8]">
              {currentActiveOption.notesOrQuestions.map((q, qIdx) => (
                <li key={qIdx} className="flex items-start space-x-2 bg-[#0c1208] p-2 rounded border border-[#2b3c1b]">
                  <span className="text-[#b8df47] font-bold">•</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Useful Connectors / Transition Pills */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-stencil uppercase tracking-wider text-[#8ea476]">
              Conectores y Frases Útiles de Nivel Oficial (Haga clic para insertar):
            </span>
            {copiedPhrase && (
              <span className="text-[11px] font-mono text-emerald-400 animate-in fade-in">
                ¡Frase insertada!
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {currentActiveOption.usefulConnectors.map((phrase, pIdx) => (
              <button
                key={pIdx}
                type="button"
                disabled={isSubmitted}
                onClick={() => handleInsertPhrase(currentActiveExercise.exerciseNumber, phrase)}
                className="px-2.5 py-1 rounded-md bg-[#192412] hover:bg-[#25361b] border border-[#344820] text-xs font-mono text-[#b8df47] hover:text-[#d6eb9a] transition-colors cursor-pointer flex items-center space-x-1"
                title="Haga clic para insertar en el texto"
              >
                <span>{phrase}</span>
                <Copy className="w-3 h-3 text-[#778d61] ml-0.5" />
              </button>
            ))}
          </div>
        </div>

        {/* Writing Composition Area */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-stencil uppercase tracking-wider text-[#b8df47] flex items-center space-x-1.5">
              <PenTool className="w-3.5 h-3.5" />
              <span>Hoja de Redacción del Candidato:</span>
            </label>

            {/* Live Word Count Indicator */}
            {(() => {
              const words = countWords(compositions[currentActiveExercise.exerciseNumber]);
              const { min, max } = currentActiveOption.targetWordRange;
              const isGood = words >= min && words <= max;
              const isOver = words > max;

              return (
                <div className={`text-xs font-mono px-3 py-1 rounded-full border transition-colors flex items-center space-x-1.5 ${
                  isGood
                    ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 font-bold'
                    : isOver
                      ? 'bg-amber-950/60 border-amber-500 text-amber-300'
                      : words > 0
                        ? 'bg-sky-950/60 border-sky-500 text-sky-300'
                        : 'bg-[#151f0f] border-[#364923] text-[#8fa577]'
                }`}>
                  <span>{words} palabras</span>
                  <span className="text-[10px] opacity-80">(Meta: {min}-{max})</span>
                  {isGood && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
              );
            })()}
          </div>

          <textarea
            value={compositions[currentActiveExercise.exerciseNumber] || ''}
            disabled={isSubmitted}
            onChange={(e) => handleTextChange(currentActiveExercise.exerciseNumber, e.target.value)}
            rows={10}
            placeholder={`Comience a escribir aquí en inglés respetando el formato (${currentActiveOption.targetWordRange.label})...`}
            className={`w-full p-4 rounded-xl font-mono text-xs sm:text-sm bg-[#0a1006] border leading-relaxed focus:outline-none focus:border-[#7ea830] transition-colors resize-y ${
              isSubmitted
                ? 'border-[#435a29] text-[#e3f0d4] opacity-95'
                : 'border-[#334620] text-[#f0f7e6] focus:ring-1 focus:ring-[#7ea830]/40'
            }`}
          />
        </div>

        {/* Self-Assessment Rubric Checklist */}
        <div className="bg-[#0e160a] border border-[#2b3c1b] rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-stencil uppercase tracking-wider text-[#b8df47] flex items-center space-x-1.5">
              <CheckSquare className="w-3.5 h-3.5" />
              <span>Lista de Control y Autoevaluación de Criterios STANAG 6001:</span>
            </span>
            <span className="text-[11px] font-mono text-[#8fa577]">
              Marque cada elemento cumplido en su texto
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {currentActiveOption.requiredChecklist.map((item, cIdx) => {
              const checkKey = `${currentActiveOption.id}-${cIdx}`;
              const isChecked = !!checkedItems[checkKey];

              return (
                <button
                  key={cIdx}
                  type="button"
                  disabled={isSubmitted}
                  onClick={() => handleToggleCheck(checkKey)}
                  className={`p-2.5 rounded-lg border text-left text-xs font-tactical transition-colors flex items-start space-x-2 cursor-pointer ${
                    isChecked
                      ? 'bg-[#1a2713] border-[#5d8031] text-[#d6eb9a]'
                      : 'bg-[#121b0d] border-[#243317] text-[#8fa577] hover:bg-[#162110]'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {isChecked ? (
                      <CheckCircle2 className="w-4 h-4 text-[#b8df47]" />
                    ) : (
                      <Square className="w-4 h-4 text-[#52663d]" />
                    )}
                  </div>
                  <span>{item}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Official Reference Model Answer & Evaluation Feedback */}
        <div className="pt-2">
          <div className="flex items-center justify-between">
            <button
              type="button"
              id={`toggle-model-answer-${currentActiveExercise.exerciseNumber}`}
              data-expand-trigger="true"
              onClick={() => setShowModelAnswer(prev => ({
                ...prev,
                [currentActiveExercise.exerciseNumber]: !prev[currentActiveExercise.exerciseNumber]
              }))}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#1b2614] hover:bg-[#25351c] text-xs font-semibold text-[#ff8533] hover:text-[#ffaa66] transition-colors cursor-pointer neon-orange-expand"
            >
              {showModelAnswer[currentActiveExercise.exerciseNumber] ? (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-[#ff6a00]" />
                  <span>Ocultar Modelo Oficial de Redacción</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5 text-[#ff6a00]" />
                  <span>Ver Modelo Oficial de Redacción (Doctrina IESE)</span>
                </>
              )}
            </button>

            {isSubmitted && (
              <div className="text-xs font-mono text-[#b8df47]">
                Subtotal Ejercicio {currentActiveExercise.exerciseNumber}:{' '}
                <strong>
                  {currentActiveExercise.exerciseNumber === 1 ? score1.total : score2.total}
                </strong>{' '}
                / 10 pts
              </div>
            )}
          </div>

          {showModelAnswer[currentActiveExercise.exerciseNumber] && (
            <div data-expanded-container="true" className="mt-3 p-4 rounded-xl bg-[#090f05] space-y-2 animate-in fade-in duration-200 neon-orange-box">
              <div className="flex items-center justify-between border-b border-[#243316] pb-2">
                <span className="text-[11px] font-stencil uppercase tracking-wider text-[#b8df47]">
                  Composición Modelo de Referencia (STANAG 6001 Standard):
                </span>
                <span className="text-[11px] font-mono text-[#8ca173]">
                  Extensión: {countWords(currentActiveOption.modelAnswer)} palabras
                </span>
              </div>
              <pre className="text-xs sm:text-sm font-mono text-[#d6e7c0] whitespace-pre-wrap leading-relaxed bg-[#0f170a] p-3 rounded-lg border border-[#1f2c13]">
                {currentActiveOption.modelAnswer}
              </pre>
            </div>
          )}
        </div>
      </div>

      {/* Delivery Bar if not submitted */}
      {!isSubmitted && (
        <div className="bg-[#141d0e]/95 border border-[#3b4e28] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
          <div className="text-xs font-mono text-[#a8bc94]">
            Progreso del examen escrito: Ejercicio 1 ({score1.wordCount}w) • Ejercicio 2 ({score2.wordCount}w) • Total palabras: <strong className="text-[#b8df47]">{totalWordsWritten}</strong>
          </div>
          <button
            onClick={handleSubmit}
            disabled={totalWordsWritten < 20}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#688a28] hover:bg-[#7da72f] text-[#0f150a] font-bold text-xs font-tactical transition-all shadow-md hover:shadow-[#7da72f]/30 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            <span>Finalizar y Entregar Examen de Expresión Escrita (20 pts)</span>
          </button>
        </div>
      )}
    </div>
  );
};
