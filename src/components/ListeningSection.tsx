import React, { useState, useEffect, useMemo } from 'react';
import { LevelSyllabus } from '../types';
import { speakBritishText, stopSpeaking } from '../utils/audio';
import { 
  Play, 
  Square, 
  RotateCcw, 
  Eye, 
  EyeOff, 
  Radio, 
  CheckCircle, 
  XCircle, 
  Volume2, 
  HelpCircle, 
  Headphones, 
  Target, 
  PenTool, 
  Sparkles,
  Zap,
  Layers,
  Shuffle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MinimalPairsEarTrainer } from './MinimalPairsEarTrainer';
import { MilitaryDictationLab } from './MilitaryDictationLab';
import { DailyOperationalHeader } from './DailyOperationalHeader';
import { getDailyOperationalPractice } from '../data/dailyOperationalPracticeData';
import { useSessionShuffle } from '../utils/shuffleOptions';

interface ListeningSectionProps {
  level: LevelSyllabus;
  onRecordScore: (exerciseId: string, scorePercentage: number) => void;
  audioRate: number;
  selectedDay?: number;
  onSelectDay?: (day: number) => void;
  onOpenDaySelector?: () => void;
}

export type ListeningPracticeTool = 'three_phase' | 'dictation' | 'minimal_pairs';

export const ListeningSection: React.FC<ListeningSectionProps> = ({
  level,
  onRecordScore,
  audioRate,
  selectedDay = 1,
  onSelectDay,
  onOpenDaySelector
}) => {
  const [practiceTool, setPracticeTool] = useState<ListeningPracticeTool>('three_phase');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [radioEffect, setRadioEffect] = useState(true);
  const { sessionSeed, startNewShuffleSession } = useSessionShuffle();

  // Load the progressive daily operational practice with deterministic session shuffling
  const practice = useMemo(
    () => getDailyOperationalPractice(level.levelNumber, selectedDay, 'listening', sessionSeed),
    [level.levelNumber, selectedDay, sessionSeed]
  );

  const [listeningSpeed, setListeningSpeed] = useState<number>(practice.recommendedAudioRate || audioRate || 0.95);

  // Selected answers for questions
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Reset state when day or level or session seed changes
  useEffect(() => {
    setIsPlaying(false);
    stopSpeaking();
    setShowTranscript(false);
    setUserAnswers({});
    setIsSubmitted(false);
    setListeningSpeed(practice.recommendedAudioRate);
  }, [selectedDay, level.levelNumber, practice.recommendedAudioRate, sessionSeed]);

  const handlePlayAudio = () => {
    if (isPlaying) {
      stopSpeaking();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    speakBritishText(practice.listening.transmissionScript, {
      rate: listeningSpeed,
      isRadio: radioEffect,
      onEnd: () => setIsPlaying(false)
    });
  };

  const handleStopAudio = () => {
    stopSpeaking();
    setIsPlaying(false);
  };

  const handleSelectOption = (questionKey: string, optIndex: number) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [questionKey]: optIndex }));
  };

  const handleSubmitAnswers = () => {
    let correctCount = 0;
    const q1Correct = userAnswers['q1'] === practice.listening.primaryQuestion.correctIndex;
    const q2Correct = userAnswers['q2'] === practice.listening.detailQuestion.correctIndex;

    if (q1Correct) correctCount++;
    if (q2Correct) correctCount++;

    const percentage = Math.round((correctCount / 2) * 100);
    setIsSubmitted(true);
    onRecordScore(`day-${selectedDay}-listening`, percentage);

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
    { 
      key: 'q1', 
      data: practice.listening.primaryQuestion, 
      label: 'Item 1: Acoustic Discrimination (Minimal Pairs & Sound-Alikes)',
      badge: 'Acoustic Contrast'
    },
    { 
      key: 'q2', 
      data: practice.listening.detailQuestion, 
      label: 'Item 2: Tactical Operational Verification (Standard Procedures)',
      badge: 'Tactical Directive'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Daily Tactical Header with Day Selector & Thematic Briefing */}
      <DailyOperationalHeader
        practice={practice}
        onSelectDay={onSelectDay}
        onOpenDaySelector={onOpenDaySelector}
        audioRate={audioRate}
      />

      {/* Practice Tools Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2 rounded-xl bg-[#12190d] border border-[#233116]">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <button
            onClick={() => setPracticeTool('three_phase')}
            className={`px-3 py-2 rounded-lg text-xs font-tactical flex items-center space-x-2 transition-all cursor-pointer ${
              practiceTool === 'three_phase'
                ? 'bg-slate-200 hover:bg-slate-100 text-[#0f2042] border border-slate-300 shadow-md font-bold'
                : 'text-[#9eb288] hover:text-[#cadbb8] hover:bg-[#182312] border border-transparent font-semibold'
            }`}
          >
            <Headphones className={`w-3.5 h-3.5 ${practiceTool === 'three_phase' ? 'text-[#0f2042]' : 'text-[#b8df47]'}`} />
            <span>1. Transmisión Radial del Día (3 Fases)</span>
          </button>

          <button
            onClick={() => setPracticeTool('dictation')}
            className={`px-3 py-2 rounded-lg text-xs font-tactical flex items-center space-x-2 transition-all cursor-pointer ${
              practiceTool === 'dictation'
                ? 'bg-slate-200 hover:bg-slate-100 text-[#0f2042] border border-slate-300 shadow-md font-bold'
                : 'text-[#9eb288] hover:text-[#cadbb8] hover:bg-[#182312] border border-transparent font-semibold'
            }`}
          >
            <PenTool className={`w-3.5 h-3.5 ${practiceTool === 'dictation' ? 'text-[#0f2042]' : 'text-amber-400'}`} />
            <span>2. Laboratorio de Dictado</span>
          </button>

          <button
            onClick={() => setPracticeTool('minimal_pairs')}
            className={`px-3 py-2 rounded-lg text-xs font-tactical flex items-center space-x-2 transition-all cursor-pointer ${
              practiceTool === 'minimal_pairs'
                ? 'bg-slate-200 hover:bg-slate-100 text-[#0f2042] border border-slate-300 shadow-md font-bold'
                : 'text-[#9eb288] hover:text-[#cadbb8] hover:bg-[#182312] border border-transparent font-semibold'
            }`}
          >
            <Target className={`w-3.5 h-3.5 ${practiceTool === 'minimal_pairs' ? 'text-[#0f2042]' : 'text-sky-400'}`} />
            <span>3. Entrenador de Oído</span>
          </button>
        </div>

        {/* Tactical Speed Badge */}
        <div className="flex items-center space-x-2 px-3 py-1 rounded-lg bg-[#0c1208] border border-[#1b2512] text-xs font-mono text-[#8ea375]">
          <span>Velocidad de audio:</span>
          <span className="font-bold text-[#b8df47]">{listeningSpeed}x</span>
        </div>
      </div>

      {/* Tool 1: Three-Phase Operational Radio Transmission */}
      {practiceTool === 'three_phase' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Radio Player & 3-Step Protocol */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-[#141d0e]/95 border border-[#2e401d] rounded-2xl p-5 shadow-xl space-y-5">
              {/* Radio Console Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#233116]">
                <div className="flex items-center space-x-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-emerald-500'}`} />
                  <span className="font-mono text-xs font-bold text-[#cadbb8] tracking-wider uppercase">
                    CANAL TÁCTICO VHF • DÍA {selectedDay}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {/* Radio Static Effect Toggle */}
                  <button
                    onClick={() => setRadioEffect(!radioEffect)}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono flex items-center space-x-1.5 transition-all cursor-pointer ${
                      radioEffect 
                        ? 'bg-[#2b3a1a] text-[#b8df47] border border-[#4e682d]' 
                        : 'bg-[#182210] text-[#71845c] border border-[#243116]'
                    }`}
                  >
                    <Radio className="w-3 h-3" />
                    <span>Filtro VHF {radioEffect ? 'ON' : 'OFF'}</span>
                  </button>

                  {/* Audio Rate Selector */}
                  <div className="flex items-center space-x-1 bg-[#182210] px-2 py-0.5 rounded border border-[#243116]">
                    {[0.85, 0.95, 1.05].map(rate => (
                      <button
                        key={rate}
                        onClick={() => setListeningSpeed(rate)}
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                          listeningSpeed === rate
                            ? 'bg-[#3b4f24] text-[#e3f4b8] font-bold'
                            : 'text-[#8ea375] hover:text-[#c2d9ac]'
                        }`}
                      >
                        {rate}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Transmission Subject */}
              <div className="space-y-1">
                <div className="text-[11px] font-mono text-[#7ea830] uppercase">
                  Misión Radial del Día {selectedDay}
                </div>
                <h3 className="text-base font-bold text-[#f2f7ec] font-tactical">
                  {practice.listening.transmissionTitle}
                </h3>
              </div>

              {/* Audio Controls */}
              <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-[#0c1208] border border-[#1f2d15]">
                <button
                  onClick={handlePlayAudio}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold font-tactical text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg ${
                    isPlaying
                      ? 'bg-amber-600 hover:bg-amber-500 text-white'
                      : 'bg-[#435e23] hover:bg-[#52722b] text-[#f2f7ec] border border-[#6b8b3e]'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Square className="w-4 h-4 fill-current" />
                      <span>Pausar Transmisión Radial</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Transmitir Mensaje Militar (Día {selectedDay})</span>
                    </>
                  )}
                </button>

                {isPlaying && (
                  <button
                    onClick={handleStopAudio}
                    className="p-3 rounded-xl bg-[#233116] hover:bg-[#30431f] text-[#cadbb8] border border-[#3e5627] cursor-pointer"
                    title="Detener Audio"
                  >
                    <Square className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* 3 Phases Protocol Guide */}
              <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
                <div className="p-2 rounded-lg bg-[#0e160a] border border-[#1c2713] text-[#8ea375]">
                  <span className="block font-bold text-[#b8df47]">FASE 1</span>
                  Escucha global sin texto
                </div>
                <div className="p-2 rounded-lg bg-[#0e160a] border border-[#1c2713] text-[#8ea375]">
                  <span className="block font-bold text-[#b8df47]">FASE 2</span>
                  Responder preguntas
                </div>
                <div className="p-2 rounded-lg bg-[#0e160a] border border-[#1c2713] text-[#8ea375]">
                  <span className="block font-bold text-[#b8df47]">FASE 3</span>
                  Revisar transcripción
                </div>
              </div>

              {/* Collapsible Transcript (Phase 3) */}
              <div className="pt-2 border-t border-[#1f2d15]">
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="flex items-center space-x-2 text-xs font-mono font-semibold text-[#8ea375] hover:text-[#b8df47] transition-colors cursor-pointer"
                >
                  {showTranscript ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{showTranscript ? 'Ocultar Transcripción Oficial' : 'Revelar Transcripción de Radio (Fase 3)'}</span>
                </button>

                {showTranscript && (
                  <div className="mt-3 p-4 rounded-xl bg-[#0c1208] border border-[#233116] text-xs font-mono text-[#cadbb8] leading-relaxed whitespace-pre-wrap animate-in fade-in duration-150">
                    <div className="text-[10px] text-[#7ea830] uppercase mb-1 font-bold">
                      Transcripción Oficial STANAG:
                    </div>
                    {practice.listening.transmissionScript}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Comprehension & Verification Questions */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#141d0e]/95 border border-[#2e401d] rounded-2xl p-5 shadow-xl space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#233116]">
                <div>
                  <h4 className="font-tactical font-bold text-sm text-[#f2f7ec]">
                    Tactical Listening Verification • Day {selectedDay}
                  </h4>
                  <div className="text-[10px] font-mono text-[#7ea830] flex items-center gap-1 mt-0.5">
                    <Shuffle className="w-3 h-3 text-[#7ea830]" /> Opciones aleatorizadas por sesión
                  </div>
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
                  <span className="px-2 py-0.5 rounded bg-[#1c2713] text-[10px] font-mono text-[#b8df47] border border-[#2f421c]">
                    2 Items
                  </span>
                </div>
              </div>

              {/* Questions List */}
              <div className="space-y-4">
                {questions.map(({ key, data, label, badge }, qIdx) => (
                  <div key={key} className="space-y-2 p-3 rounded-xl bg-[#0c1208] border border-[#1b2512]">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#7ea830] uppercase font-bold">
                        {label}
                      </span>
                      {data.phoneticTarget && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#182312] text-[#b8df47] border border-[#2a3a1b]">
                          {data.phoneticTarget}
                        </span>
                      )}
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

                    {/* Feedback if submitted */}
                    {isSubmitted && (
                      <div className="mt-2 p-2.5 rounded-lg bg-[#141d0e] border border-[#243316] text-[11px] text-[#cadbb8] space-y-1">
                        <div className="flex items-center space-x-1.5 font-bold text-[#b8df47]">
                          <Sparkles className="w-3 h-3 text-[#b8df47]" />
                          <span>Tactical Rationale & Acoustic Key:</span>
                        </div>
                        <div className="text-[#9eb288] leading-relaxed">
                          {data.explanation}
                        </div>
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
                    className="w-full py-3 rounded-xl bg-[#435e23] hover:bg-[#52722b] disabled:opacity-40 disabled:cursor-not-allowed text-[#f2f7ec] font-bold text-xs font-tactical shadow-lg transition-all cursor-pointer border border-[#6b8b3e] flex items-center justify-center space-x-2"
                  >
                    <CheckCircle className="w-4 h-4 text-[#b8df47]" />
                    <span>Submit Listening Verification</span>
                  </button>
                ) : (
                  <button
                    onClick={handleResetQuiz}
                    className="w-full py-2.5 rounded-xl bg-[#233116] hover:bg-[#2c3d1b] text-[#cadbb8] border border-[#445b2b] text-xs font-semibold font-tactical flex items-center justify-center space-x-2 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retry Verification (Day {selectedDay})</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tool 2: Military Dictation Lab (Day-Driven) */}
      {practiceTool === 'dictation' && (
        <div className="space-y-4">
          <div className="p-3.5 rounded-xl bg-[#12190d] border border-[#2e401d] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#7ea830] uppercase font-bold">
                DIRECCIÓN DE DICTADO • DÍA {selectedDay}
              </span>
              <h4 className="text-sm font-bold text-[#f2f7ec]">
                Dictado Operacional Táctico
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded bg-[#1c2713] text-xs font-mono text-[#b8df47] border border-[#2f421c]">
              Frase clave del día
            </span>
          </div>
          <MilitaryDictationLab
            levelNumber={level.levelNumber}
            audioRate={audioRate}
            onRecordScore={onRecordScore}
          />
        </div>
      )}

      {/* Tool 3: Minimal Pairs Ear Trainer */}
      {practiceTool === 'minimal_pairs' && (
        <div className="space-y-4">
          <div className="p-3.5 rounded-xl bg-[#12190d] border border-[#2e401d] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#7ea830] uppercase font-bold">
                DISCRIMINACIÓN FONÉTICA • DÍA {selectedDay}
              </span>
              <h4 className="text-sm font-bold text-[#f2f7ec]">
                Enfoque Fonético: {practice.pedagogicalBriefing.phonetics.targetSound}
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded bg-[#1c2713] text-xs font-mono text-[#b8df47] border border-[#2f421c]">
              {practice.pedagogicalBriefing.phonetics.spanishPhonetic}
            </span>
          </div>
          <MinimalPairsEarTrainer
            levelNumber={level.levelNumber}
            audioRate={audioRate}
            onRecordScore={onRecordScore}
          />
        </div>
      )}
    </div>
  );
};
