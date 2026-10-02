import React, { useState, useEffect, useMemo } from 'react';
import { LevelSyllabus } from '../types';
import { 
  Sparkles, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  HelpCircle, 
  Layers, 
  Shuffle, 
  BookmarkCheck,
  Zap,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TacticalSentenceScrambler } from './TacticalSentenceScrambler';
import { CollocationsPhrasalLab } from './CollocationsPhrasalLab';
import { DailyOperationalHeader } from './DailyOperationalHeader';
import { GrammarLab } from './GrammarLab';
import { getDailyOperationalPractice } from '../data/dailyOperationalPracticeData';
import { useSessionShuffle } from '../utils/shuffleOptions';

interface UseOfLanguageSectionProps {
  level: LevelSyllabus;
  onRecordScore: (exerciseId: string, scorePercentage: number) => void;
  selectedDay?: number;
  onSelectDay?: (day: number) => void;
  onOpenDaySelector?: () => void;
}

export type UseOfLangPracticeMode = 'daily_doctrinal' | 'scrambler' | 'collocations' | 'grammar_lab';

export const UseOfLanguageSection: React.FC<UseOfLanguageSectionProps> = ({
  level,
  onRecordScore,
  selectedDay = 1,
  onSelectDay,
  onOpenDaySelector
}) => {
  const [practiceMode, setPracticeMode] = useState<UseOfLangPracticeMode>('daily_doctrinal');
  const { sessionSeed, startNewShuffleSession } = useSessionShuffle();

  // Load the progressive daily operational practice with deterministic session shuffling
  const practice = useMemo(
    () => getDailyOperationalPractice(level.levelNumber, selectedDay, 'useOfLanguage', sessionSeed),
    [level.levelNumber, selectedDay, sessionSeed]
  );

  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Reset when day, level, or session seed changes
  useEffect(() => {
    setUserAnswers({});
    setIsSubmitted(false);
  }, [selectedDay, level.levelNumber, sessionSeed]);

  const handleSelectOption = (questionId: string, optIdx: number) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: optIdx }));
  };

  const handleSubmitAnswers = () => {
    let correctCount = 0;
    const questions = practice.useOfLanguage.questions;

    questions.forEach(q => {
      if (userAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    const percentage = Math.round((correctCount / questions.length) * 100);
    setIsSubmitted(true);
    onRecordScore(`day-${selectedDay}-useOfLanguage`, percentage);

    if (percentage >= 70) {
      try {
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
      } catch {
        // Ignored
      }
    }
  };

  const handleResetQuiz = () => {
    setIsSubmitted(false);
    setUserAnswers({});
  };

  return (
    <div className="space-y-6">
      {/* Daily Header with Day Navigation & Pedagogical Briefing */}
      <DailyOperationalHeader
        practice={practice}
        onSelectDay={onSelectDay}
        onOpenDaySelector={onOpenDaySelector}
      />

      {/* Mode Switcher Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2 rounded-xl bg-[#12190d] border border-[#233116]">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <button
            onClick={() => setPracticeMode('daily_doctrinal')}
            className={`px-3 py-2 rounded-lg text-xs font-tactical flex items-center space-x-2 transition-all cursor-pointer ${
              practiceMode === 'daily_doctrinal'
                ? 'bg-slate-200 hover:bg-slate-100 text-[#0f2042] border border-slate-300 shadow-md font-bold'
                : 'text-[#9eb288] hover:text-[#cadbb8] hover:bg-[#182312] border border-transparent font-semibold'
            }`}
          >
            <BookmarkCheck className={`w-3.5 h-3.5 ${practiceMode === 'daily_doctrinal' ? 'text-[#0f2042]' : 'text-[#b8df47]'}`} />
            <span>1. Ejercicios Doctrinales del Día (3 Reactivos)</span>
          </button>

          <button
            onClick={() => setPracticeMode('scrambler')}
            className={`px-3 py-2 rounded-lg text-xs font-tactical flex items-center space-x-2 transition-all cursor-pointer ${
              practiceMode === 'scrambler'
                ? 'bg-slate-200 hover:bg-slate-100 text-[#0f2042] border border-slate-300 shadow-md font-bold'
                : 'text-[#9eb288] hover:text-[#cadbb8] hover:bg-[#182312] border border-transparent font-semibold'
            }`}
          >
            <Shuffle className={`w-3.5 h-3.5 ${practiceMode === 'scrambler' ? 'text-[#0f2042]' : 'text-amber-400'}`} />
            <span>2. Desarmador Sintáctico</span>
          </button>

          <button
            onClick={() => setPracticeMode('collocations')}
            className={`px-3 py-2 rounded-lg text-xs font-tactical flex items-center space-x-2 transition-all cursor-pointer ${
              practiceMode === 'collocations'
                ? 'bg-slate-200 hover:bg-slate-100 text-[#0f2042] border border-slate-300 shadow-md font-bold'
                : 'text-[#9eb288] hover:text-[#cadbb8] hover:bg-[#182312] border border-transparent font-semibold'
            }`}
          >
            <Layers className={`w-3.5 h-3.5 ${practiceMode === 'collocations' ? 'text-[#0f2042]' : 'text-sky-400'}`} />
            <span>3. Colocaciones & Phrasal Verbs</span>
          </button>

          <button
            onClick={() => setPracticeMode('grammar_lab')}
            className={`px-3 py-2 rounded-lg text-xs font-tactical flex items-center space-x-2 transition-all cursor-pointer ${
              practiceMode === 'grammar_lab'
                ? 'bg-slate-200 hover:bg-slate-100 text-[#0f2042] border border-slate-300 shadow-md font-bold'
                : 'text-[#9eb288] hover:text-[#cadbb8] hover:bg-[#182312] border border-transparent font-semibold'
            }`}
          >
            <Zap className={`w-3.5 h-3.5 ${practiceMode === 'grammar_lab' ? 'text-[#0f2042]' : 'text-emerald-400'}`} />
            <span>4. Grammar Lab (Pronombres & Tiempos)</span>
          </button>
        </div>

        {/* Rule summary indicator */}
        <div className="flex items-center space-x-2 px-3 py-1 rounded-lg bg-[#0c1208] border border-[#1b2512] text-xs font-mono text-[#8ea375]">
          <span>Foco gramatical:</span>
          <span className="font-bold text-[#b8df47] truncate max-w-[200px]">
            {practice.useOfLanguage.grammarTitle}
          </span>
        </div>
      </div>

      {/* Mode 1: Daily Doctrinal Questions */}
      {practiceMode === 'daily_doctrinal' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Grammar Formula & Rule Breakdown */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#141d0e]/95 border border-[#2e401d] rounded-2xl p-5 shadow-xl space-y-4 sticky top-6">
              <div className="flex items-center space-x-2 pb-2 border-b border-[#233116]">
                <Zap className="w-4 h-4 text-[#7ea830]" />
                <h4 className="font-tactical font-bold text-sm text-[#f2f7ec]">
                  Fórmula Sintáctica del Día {selectedDay}
                </h4>
              </div>

              {/* Title */}
              <div className="text-xs font-bold text-[#e3f4b8]">
                {practice.useOfLanguage.grammarTitle}
              </div>

              {/* Formula box */}
              <div className="p-3 rounded-xl bg-[#0c1208] border border-[#233116] font-mono text-xs text-[#b8df47] leading-relaxed">
                {practice.useOfLanguage.formula}
              </div>

              {/* Explanation */}
              <div className="text-xs text-[#cadbb8] leading-relaxed">
                {practice.useOfLanguage.rule}
              </div>

              {/* Day Phrase Example */}
              <div className="p-3 rounded-xl bg-[#0e160a] border border-[#1d2913] space-y-1">
                <span className="text-[10px] font-mono text-[#7ea830] uppercase font-bold">
                  Ejemplo Doctrinal en Contexto:
                </span>
                <div className="text-xs font-bold text-[#f2f7ec]">
                  "{practice.pedagogicalBriefing.usefulPhrase.phrase}"
                </div>
                <div className="text-[11px] text-[#8ea375]">
                  {practice.pedagogicalBriefing.usefulPhrase.translation}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Targeted Doctrinal Questions */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-[#141d0e]/95 border border-[#2e401d] rounded-2xl p-5 shadow-xl space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#233116]">
                <div>
                  <h4 className="font-tactical font-bold text-sm text-[#f2f7ec]">
                    Reactivos de Aplicación Sintáctica • Día {selectedDay}
                  </h4>
                  <span className="text-[10px] font-mono text-[#7ea830] flex items-center gap-1 mt-0.5">
                    <Shuffle className="w-3 h-3 text-[#7ea830]" /> Opciones aleatorizadas por sesión
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      startNewShuffleSession();
                      handleResetQuiz();
                    }}
                    title="Generar nueva distribución de opciones para esta sesión"
                    className="px-2.5 py-1 rounded-lg bg-[#182312] hover:bg-[#233318] border border-[#2e421e] hover:border-[#7ea830]/50 text-[#a8c788] hover:text-[#c4ea4f] text-[10px] font-mono flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Shuffle className="w-3 h-3 text-[#7ea830]" />
                    <span>Reordenar Opciones</span>
                  </button>
                  <span className="text-[11px] font-mono text-[#8ea375]">
                    {practice.useOfLanguage.questions.length} Preguntas
                  </span>
                </div>
              </div>

              {/* Questions List */}
              <div className="space-y-4">
                {practice.useOfLanguage.questions.map((q, qIdx) => (
                  <div key={q.id} className="space-y-2.5 p-4 rounded-xl bg-[#0c1208] border border-[#1b2512]">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#7ea830] uppercase font-bold">
                        Reactivo {qIdx + 1} de {practice.useOfLanguage.questions.length}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm font-semibold text-[#e3f4b8] leading-snug">
                      {q.prompt}
                    </div>

                    {/* Options */}
                    <div className="space-y-1.5 pt-1">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = userAnswers[q.id] === optIdx;
                        const isCorrect = optIdx === q.correctIndex;
                        let optStyle = 'bg-[#16200f] hover:bg-[#202e15] border-[#293b1a] text-[#cadbb8]';

                        if (isSubmitted) {
                          if (isCorrect) {
                            optStyle = 'bg-emerald-950/80 border-emerald-600 text-emerald-200 font-semibold';
                          } else if (isSelected && !isCorrect) {
                            optStyle = 'bg-red-950/80 border-red-600 text-red-200';
                          } else {
                            optStyle = 'bg-[#10170a] border-[#1d2713] text-[#556947] opacity-60';
                          }
                        } else if (isSelected) {
                          optStyle = 'bg-slate-200 hover:bg-slate-100 border-slate-300 text-[#0f2042] font-semibold shadow-sm';
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectOption(q.id, optIdx)}
                            disabled={isSubmitted}
                            className={`w-full text-left p-2.5 rounded-lg text-xs border transition-all cursor-pointer flex items-start space-x-2 ${optStyle}`}
                          >
                            <span className={`font-mono text-[11px] font-bold ${isSelected && !isSubmitted ? 'text-[#0f2042]' : 'text-[#7ea830]'}`}>
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            <span className="flex-1 leading-snug">{opt}</span>
                            {isSubmitted && isCorrect && <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />}
                            {isSubmitted && isSelected && !isCorrect && <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />}
                          </button>
                        );
                      })}
                    </div>

                    {/* Feedback on submit */}
                    {isSubmitted && (
                      <div className="mt-2 p-2 rounded-lg bg-[#141d0e] border border-[#243316] text-[11px] text-[#8ea375]">
                        <span className="font-bold text-[#b8df47]">Fundamento: </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Submit / Reset Actions */}
              <div className="pt-2">
                {!isSubmitted ? (
                  <button
                    onClick={handleSubmitAnswers}
                    disabled={practice.useOfLanguage.questions.some(q => userAnswers[q.id] === undefined)}
                    className="w-full py-3 rounded-xl bg-[#435e23] hover:bg-[#52722b] disabled:opacity-40 disabled:cursor-not-allowed text-[#f2f7ec] font-bold text-xs font-tactical shadow-lg transition-all cursor-pointer border border-[#6b8b3e]"
                  >
                    Evaluar Reactivos Gramaticales (Día {selectedDay})
                  </button>
                ) : (
                  <button
                    onClick={handleResetQuiz}
                    className="w-full py-2.5 rounded-xl bg-[#233116] hover:bg-[#2c3d1b] text-[#cadbb8] border border-[#445b2b] text-xs font-semibold font-tactical flex items-center justify-center space-x-2 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reintentar Reactivos del Día {selectedDay}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Tactical Sentence Scrambler */}
      {practiceMode === 'scrambler' && (
        <div className="space-y-4">
          <div className="p-3.5 rounded-xl bg-[#12190d] border border-[#2e401d] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#7ea830] uppercase font-bold">
                CONSTRUCCIÓN SINTÁCTICA • DÍA {selectedDay}
              </span>
              <h4 className="text-sm font-bold text-[#f2f7ec]">
                Desarmador Sintáctico Táctico
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded bg-[#1c2713] text-xs font-mono text-[#b8df47] border border-[#2f421c]">
              Orden táctico de palabras
            </span>
          </div>
          <TacticalSentenceScrambler
            levelNumber={level.levelNumber}
            onRecordScore={onRecordScore}
          />
        </div>
      )}

      {/* Mode 3: Collocations & Phrasal Verbs */}
      {practiceMode === 'collocations' && (
        <div className="space-y-4">
          <div className="p-3.5 rounded-xl bg-[#12190d] border border-[#2e401d] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#7ea830] uppercase font-bold">
                COMBINATORIA LÉXICA • DÍA {selectedDay}
              </span>
              <h4 className="text-sm font-bold text-[#f2f7ec]">
                Laboratorio de Colocaciones & Phrasal Verbs
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded bg-[#1c2713] text-xs font-mono text-[#b8df47] border border-[#2f421c]">
              Doctrina OTAN
            </span>
          </div>
          <CollocationsPhrasalLab
            levelNumber={level.levelNumber}
            onRecordScore={onRecordScore}
          />
        </div>
      )}

      {/* Mode 4: Grammar Lab - Dynamic Pronoun & Tenses Generator */}
      {practiceMode === 'grammar_lab' && (
        <GrammarLab onRecordScore={onRecordScore} />
      )}
    </div>
  );
};
