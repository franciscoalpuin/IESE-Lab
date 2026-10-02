import React, { useState, useEffect, useMemo } from 'react';
import { LevelSyllabus } from '../types';
import { speakBritishText, stopSpeaking } from '../utils/audio';
import { 
  BookOpen, 
  HelpCircle, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  Volume2, 
  Square, 
  Clock, 
  FileText, 
  Tag,
  Sparkles,
  Shuffle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DailyOperationalHeader } from './DailyOperationalHeader';
import { getDailyOperationalPractice } from '../data/dailyOperationalPracticeData';
import { useSessionShuffle } from '../utils/shuffleOptions';

interface ReadingSectionProps {
  level: LevelSyllabus;
  onRecordScore: (exerciseId: string, scorePercentage: number) => void;
  selectedDay?: number;
  onSelectDay?: (day: number) => void;
  onOpenDaySelector?: () => void;
}

export const ReadingSection: React.FC<ReadingSectionProps> = ({
  level,
  onRecordScore,
  selectedDay = 1,
  onSelectDay,
  onOpenDaySelector
}) => {
  const { sessionSeed, startNewShuffleSession } = useSessionShuffle();

  // Load progressive daily operational practice with deterministic session shuffling
  const practice = useMemo(
    () => getDailyOperationalPractice(level.levelNumber, selectedDay, 'reading', sessionSeed),
    [level.levelNumber, selectedDay, sessionSeed]
  );

  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Reset when day, level, or session seed changes
  useEffect(() => {
    setUserAnswers({});
    setIsSubmitted(false);
    setIsPlayingAudio(false);
    stopSpeaking();
  }, [selectedDay, level.levelNumber, sessionSeed]);

  const handlePlayPassageAudio = () => {
    if (isPlayingAudio) {
      stopSpeaking();
      setIsPlayingAudio(false);
      return;
    }

    setIsPlayingAudio(true);
    speakBritishText(practice.reading.textPassage, {
      rate: practice.recommendedAudioRate || 0.95,
      onEnd: () => setIsPlayingAudio(false)
    });
  };

  const handleSelectOption = (key: string, optIdx: number) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [key]: optIdx }));
  };

  const handleSubmitAnswers = () => {
    let correct = 0;
    if (userAnswers['q1'] === practice.reading.primaryQuestion.correctIndex) correct++;
    if (userAnswers['q2'] === practice.reading.analyticalQuestion.correctIndex) correct++;

    const percentage = Math.round((correct / 2) * 100);
    setIsSubmitted(true);
    onRecordScore(`day-${selectedDay}-reading`, percentage);

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

  const questions = [
    { key: 'q1', data: practice.reading.primaryQuestion, label: 'Comprensión Textual Directa' },
    { key: 'q2', data: practice.reading.analyticalQuestion, label: 'Análisis e Inferencia Doctrinal' }
  ];

  return (
    <div className="space-y-6">
      {/* Daily Header with Day Navigation & Pedagogical Briefing */}
      <DailyOperationalHeader
        practice={practice}
        onSelectDay={onSelectDay}
        onOpenDaySelector={onOpenDaySelector}
      />

      {/* Main Reading Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Official Reading Document */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#141d0e]/95 border border-[#2e401d] rounded-2xl p-5 shadow-xl space-y-4">
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#233116]">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-[#7ea830]" />
                <span className="text-xs font-mono font-bold text-[#cadbb8] uppercase">
                  DOCUMENTO DOCTRINAL MILITAR
                </span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] font-mono text-[#8ea375]">
                <span className="px-2 py-0.5 rounded bg-[#0c1208] border border-[#1d2913]">
                  {practice.reading.wordCount} palabras
                </span>
                <span className="px-2 py-0.5 rounded bg-[#0c1208] border border-[#1d2913] flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-[#7ea830]" />
                  <span>Lectura: ~2 min</span>
                </span>
              </div>
            </div>

            {/* Document Title & Context */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#7ea830] uppercase font-bold">
                {practice.reading.scenarioContext}
              </span>
              <h3 className="text-base font-bold text-[#f2f7ec] font-tactical">
                {practice.reading.title}
              </h3>
            </div>

            {/* Reading Passage Body */}
            <div className="p-4 rounded-xl bg-[#0c1208] border border-[#233116] text-sm text-[#cadbb8] leading-relaxed font-serif tracking-normal">
              {practice.reading.textPassage}
            </div>

            {/* Audio Listen for Text */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#0e160a] border border-[#1c2713]">
              <div className="text-xs text-[#8ea375] font-mono">
                Audio militar de apoyo para lectura guiada
              </div>
              <button
                onClick={handlePlayPassageAudio}
                className={`px-3 py-1.5 rounded-lg text-xs font-tactical font-semibold flex items-center space-x-1.5 transition-all cursor-pointer ${
                  isPlayingAudio
                    ? 'bg-amber-600 hover:bg-amber-500 text-white'
                    : 'bg-[#253617] hover:bg-[#32491e] text-[#e3f4b8] border border-[#4a652c]'
                }`}
              >
                {isPlayingAudio ? (
                  <>
                    <Square className="w-3.5 h-3.5 fill-current" />
                    <span>Pausar Lectura</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Escuchar Texto</span>
                  </>
                )}
              </button>
            </div>

            {/* Key Tactical Glossary */}
            <div className="pt-2 border-t border-[#1f2d15] space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7ea830] flex items-center space-x-1">
                <Tag className="w-3 h-3" />
                <span>Glosario Doctrinal Extraído del Texto:</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {practice.reading.keyTacticalGlossary.map((item, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-[#0e160a] border border-[#1e2a14] text-xs">
                    <span className="font-bold text-[#b8df47] font-mono">{item.term}: </span>
                    <span className="text-[#8ea375]">{item.definition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Comprehension & Verification Questions */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#141d0e]/95 border border-[#2e401d] rounded-2xl p-5 shadow-xl space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#233116]">
              <div>
                <h4 className="font-tactical font-bold text-sm text-[#f2f7ec]">
                  Reactivos de Comprensión • Día {selectedDay}
                </h4>
                <span className="text-[10px] font-mono text-[#7ea830] flex items-center gap-1 mt-0.5">
                  <Shuffle className="w-3 h-3 text-[#7ea830]" /> Opciones aleatorizadas por sesión
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    startNewShuffleSession();
                    setUserAnswers({});
                    setIsSubmitted(false);
                  }}
                  title="Generar nueva distribución de opciones para esta sesión"
                  className="px-2.5 py-1 rounded-lg bg-[#182312] hover:bg-[#233318] border border-[#2e421e] hover:border-[#7ea830]/50 text-[#a8c788] hover:text-[#c4ea4f] text-[10px] font-mono flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Shuffle className="w-3 h-3 text-[#7ea830]" />
                  <span>Reordenar</span>
                </button>
                <span className="text-[11px] font-mono text-[#8ea375]">
                  2 Preguntas
                </span>
              </div>
            </div>

            {/* Question Items */}
            <div className="space-y-4">
              {questions.map(({ key, data, label }, qIdx) => (
                <div key={key} className="space-y-2 p-3 rounded-xl bg-[#0c1208] border border-[#1b2512]">
                  <div className="text-[10px] font-mono text-[#7ea830] uppercase font-bold">
                    {label}
                  </div>
                  <div className="text-xs font-semibold text-[#e3f4b8] leading-snug">
                    {data.question}
                  </div>

                  {/* Options */}
                  <div className="space-y-1.5 pt-1">
                    {data.options.map((opt, optIdx) => {
                      const isSelected = userAnswers[key] === optIdx;
                      const isCorrect = optIdx === data.correctIndex;
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
                          onClick={() => handleSelectOption(key, optIdx)}
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
                      <span className="font-bold text-[#b8df47]">Fundamento Doctrinal: </span>
                      {data.explanation}
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
                  disabled={userAnswers['q1'] === undefined || userAnswers['q2'] === undefined}
                  className="w-full py-3 rounded-xl bg-[#435e23] hover:bg-[#52722b] disabled:opacity-40 disabled:cursor-not-allowed text-[#f2f7ec] font-bold text-xs font-tactical shadow-lg transition-all cursor-pointer border border-[#6b8b3e]"
                >
                  Evaluar Comprensión Lectora (Día {selectedDay})
                </button>
              ) : (
                <button
                  onClick={handleResetQuiz}
                  className="w-full py-2.5 rounded-xl bg-[#233116] hover:bg-[#2c3d1b] text-[#cadbb8] border border-[#445b2b] text-xs font-semibold font-tactical flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reintentar Ejercicios de Lectura</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
