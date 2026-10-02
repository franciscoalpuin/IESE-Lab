import React, { useState, useMemo } from 'react';
import { CompetencyType, DailyTrainingBlock } from '../types';
import { getDailyBlockForAxis, getPhaseForDayAndLevel } from '../data/daily120PlanData';
import { DailyExerciseIntroduction } from './DailyExerciseIntroduction';
import { speakBritishText, stopSpeaking } from '../utils/audio';
import { 
  Calendar, 
  Clock, 
  HelpCircle, 
  CheckCircle2, 
  Volume2, 
  Radio, 
  Eye, 
  Square, 
  Check, 
  Mic,
  ChevronDown,
  ChevronUp,
  Shuffle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useSessionShuffle } from '../utils/shuffleOptions';

interface DailyCompetencyBannerProps {
  axis: CompetencyType;
  levelNumber: number;
  selectedDay: number;
  audioRate?: number;
  onOpenDaySelector: () => void;
  onNavigateToFullDay: () => void;
  onRecordScore?: (exerciseId: string, scorePercentage: number) => void;
}

export const DailyCompetencyBanner: React.FC<DailyCompetencyBannerProps> = ({
  axis,
  levelNumber,
  selectedDay,
  audioRate = 0.95,
  onOpenDaySelector,
  onNavigateToFullDay,
  onRecordScore
}) => {
  const { sessionSeed, startNewShuffleSession } = useSessionShuffle();
  const dailyBlock = useMemo(
    () => getDailyBlockForAxis(levelNumber, selectedDay, axis, sessionSeed),
    [levelNumber, selectedDay, axis, sessionSeed]
  );
  const phase = getPhaseForDayAndLevel(selectedDay, levelNumber);

  // Audio Playback
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [radioFilter, setRadioFilter] = useState(true);

  const handlePlayAudio = (text: string) => {
    if (isPlayingAudio) {
      stopSpeaking();
      setIsPlayingAudio(false);
      return;
    }
    setIsPlayingAudio(true);
    speakBritishText(text, {
      rate: audioRate,
      isRadio: radioFilter,
      onEnd: () => setIsPlayingAudio(false)
    });
  };

  // Practice Question State
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Reset state when day, axis, level or session seed changes
  React.useEffect(() => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setIsPlayingAudio(false);
    stopSpeaking();
  }, [selectedDay, axis, levelNumber, sessionSeed]);

  const handleSelectOption = (optIdx: number) => {
    if (isSubmitted) return;
    setSelectedOption(optIdx);
    setIsSubmitted(true);

    if (dailyBlock.practiceQuestion) {
      const isCorrect = optIdx === dailyBlock.practiceQuestion.correctIndex;
      if (isCorrect) {
        try {
          confetti({ particleCount: 35, spread: 60, origin: { y: 0.7 } });
        } catch {
          // Ignored
        }
      }
      if (onRecordScore) {
        onRecordScore(`day-${selectedDay}-${axis}`, isCorrect ? 100 : 0);
      }
    }
  };

  // Writing state
  const [writingDraft, setWritingDraft] = useState<string>('');
  const [showWritingModel, setShowWritingModel] = useState<boolean>(false);
  const wordCount = writingDraft.trim() ? writingDraft.trim().split(/\s+/).length : 0;

  // Speaking state
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingSeconds, setRecordingSeconds] = useState<number>(0);
  const [hasRecorded, setHasRecorded] = useState<boolean>(false);
  const recTimerRef = React.useRef<any>(null);

  const handleToggleRecord = () => {
    if (isRecording) {
      clearInterval(recTimerRef.current);
      setIsRecording(false);
      setHasRecorded(true);
    } else {
      setIsRecording(true);
      setRecordingSeconds(0);
      setHasRecorded(false);
      recTimerRef.current = setInterval(() => {
        setRecordingSeconds(prev => prev + 1);
      }, 1000);
    }
  };

  // Collapsible Banner State (default: collapsed)
  const [isContentExpanded, setIsContentExpanded] = useState<boolean>(false);

  const handleToggleExpand = () => {
    setIsContentExpanded(prev => {
      const next = !prev;
      if (!next && isPlayingAudio) {
        stopSpeaking();
        setIsPlayingAudio(false);
      }
      return next;
    });
  };

  React.useEffect(() => {
    return () => {
      if (recTimerRef.current) clearInterval(recTimerRef.current);
    };
  }, []);

  return (
    <div className={`rounded-2xl bg-[var(--surface-base)] p-4 sm:p-5 border border-[var(--border-subtle)] shadow-lg mb-6 relative overflow-hidden transition-all ${isContentExpanded ? 'space-y-4' : ''}`}>
      
      {/* Top Banner Bar */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${isContentExpanded ? 'pb-3 border-b border-[var(--border-subtle)]' : ''}`}>
        <div className="flex items-center space-x-2.5 flex-wrap gap-y-1">
          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--accent-primary)] font-bold text-xs tracking-wide">
            <Calendar className="w-3.5 h-3.5 text-[#ff6a00]" />
            <span>Día {selectedDay}</span>
          </div>

          <span className="text-xs font-mono text-[var(--text-muted)] hidden md:inline">
            {phase.codename} • 12 min
          </span>

          <span className="text-xs text-[var(--text-secondary)] font-medium truncate max-w-md hidden lg:inline">
            <span className="text-[var(--accent-primary)] font-semibold">{dailyBlock.title}:</span> {dailyBlock.intro.topic}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            type="button"
            id="toggle-daily-banner-btn"
            onClick={handleToggleExpand}
            className="px-3 py-1.5 rounded-lg bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-xs font-mono text-[var(--text-primary)] flex items-center space-x-1.5 transition-all cursor-pointer shadow-xs"
            title={isContentExpanded ? "Contraer información de la sesión diaria" : "Desplegar información de la sesión diaria"}
          >
            {isContentExpanded ? (
              <>
                <ChevronUp className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                <span>Contraer Información</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                <span>Desplegar Información</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Collapsible Content Area */}
      {isContentExpanded && (
        <>
          {/* Official IESE Pedagogical Introduction */}
          <DailyExerciseIntroduction
            intro={dailyBlock.intro}
            competencyLabel={dailyBlock.title}
            dayNumber={selectedDay}
            levelNumber={levelNumber}
            audioRate={audioRate}
          />

          {/* Interactive Exercise Section */}
          <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] space-y-4">
            
            {/* Exercise Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[var(--border-subtle)]">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-[var(--text-primary)] tracking-tight">
                  EJERCICIO PRÁCTICO DEL DÍA {selectedDay}: {dailyBlock.title}
                </span>
              </div>

          {dailyBlock.sampleAudio && (
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setRadioFilter(!radioFilter)}
                className={`px-2 py-1 rounded-md text-[11px] font-mono border transition-all cursor-pointer ${
                  radioFilter 
                    ? 'bg-[var(--surface-base)] text-[var(--accent-primary)] border-[var(--accent-primary)] font-semibold' 
                    : 'bg-[var(--surface-base)] text-[var(--text-muted)] border-[var(--border-subtle)]'
                }`}
              >
                <Radio className="w-3 h-3 inline mr-1" />
                {radioFilter ? 'Filtro Radio ON' : 'Voz Clara'}
              </button>

              <button
                type="button"
                onClick={() => handlePlayAudio(dailyBlock.sampleAudio!)}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-semibold font-mono transition-all cursor-pointer ${
                  isPlayingAudio
                    ? 'bg-amber-900/70 text-amber-200 border border-amber-600 animate-pulse'
                    : 'bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-hover)] shadow-xs'
                }`}
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>{isPlayingAudio ? 'Detener Audio' : 'Reproducir Audio EN-GB'}</span>
              </button>
            </div>
          )}
        </div>

        {/* Consigna */}
        <div className="text-xs text-[var(--text-secondary)] font-sans">
          <strong className="text-[var(--accent-primary)]">Consigna: </strong>{dailyBlock.instructions}
        </div>

        {/* Content Box */}
        <div className="p-3.5 rounded-lg bg-[var(--surface-base)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed whitespace-pre-wrap font-mono">
          {dailyBlock.content}
        </div>

        {/* Practical Drills */}
        {dailyBlock.drills && dailyBlock.drills.length > 0 && (
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block font-semibold">
              Puntos Operacionales:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {dailyBlock.drills.map((drill, dIdx) => (
                <div key={dIdx} className="flex items-start space-x-2 p-2.5 rounded-lg bg-[var(--surface-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                  <span>{drill}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Question (for listening, reading, useOfLanguage) */}
        {dailyBlock.practiceQuestion && (
          <div className="mt-3 p-3.5 rounded-xl bg-[var(--surface-base)] border border-[var(--border-subtle)] space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-bold text-[var(--accent-primary)]">
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>Reactivo de Evaluación Diario (STANAG 6001):</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  startNewShuffleSession();
                  setSelectedOption(null);
                  setIsSubmitted(false);
                }}
                title="Reordenar opciones de respuesta (nueva distribución de sesión)"
                className="px-2 py-0.5 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-[10px] font-mono text-[var(--text-secondary)] hover:text-[var(--accent-primary)] flex items-center gap-1 transition-all cursor-pointer"
              >
                <Shuffle className="w-3 h-3 text-[var(--accent-primary)]" />
                <span>Reordenar</span>
              </button>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
              {dailyBlock.practiceQuestion.question}
            </p>

            <div className="space-y-1.5">
              {dailyBlock.practiceQuestion.options.map((option, optIdx) => {
                const isSelected = selectedOption === optIdx;
                const isCorrect = optIdx === dailyBlock.practiceQuestion!.correctIndex;

                let btnStyle = 'bg-[var(--surface-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-secondary)]';
                if (isSubmitted) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                  } else {
                    btnStyle = 'opacity-50 border-[var(--border-subtle)] text-[var(--text-muted)]';
                  }
                } else if (isSelected) {
                  btnStyle = 'bg-[var(--surface-elevated)] border-[var(--accent-primary)] text-[var(--text-primary)] ring-1 ring-[var(--accent-primary)]';
                }

                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-2.5 rounded-lg border text-xs font-mono transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <span>{String.fromCharCode(65 + optIdx)}) {option}</span>
                    {isSubmitted && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {isSubmitted && (
              <div className="p-3 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] leading-relaxed">
                <strong className="text-[var(--accent-primary)]">Fundamento Doctrinal: </strong>
                {dailyBlock.practiceQuestion.explanation}
              </div>
            )}
          </div>
        )}

        {/* Writing prompt (for writing axis) */}
        {axis === 'writing' && dailyBlock.writingTask && (
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <label>Redacción Táctica del Día {selectedDay}:</label>
              <span className={`font-bold ${wordCount >= 30 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {wordCount} palabras
              </span>
            </div>
            <textarea
              value={writingDraft}
              onChange={e => setWritingDraft(e.target.value)}
              placeholder="Redacta tu mensaje de radio o informe operacional según los requerimientos..."
              rows={3}
              className="w-full p-3 rounded-xl bg-[var(--surface-base)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-mono text-xs focus:outline-none focus:border-[var(--accent-primary)] transition-colors resize-y"
            />
            <button
              type="button"
              onClick={() => setShowWritingModel(!showWritingModel)}
              className="px-3 py-1.5 rounded-lg bg-[var(--surface-base)] hover:bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>{showWritingModel ? 'Ocultar Modelo' : 'Comparar con Respuesta Modelo Oficial'}</span>
            </button>

            {showWritingModel && (
              <div className="p-3 rounded-lg bg-[var(--surface-base)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--text-secondary)] italic">
                "{dailyBlock.writingTask.modelAnswer}"
              </div>
            )}
          </div>
        )}

        {/* Speaking prompt (for speaking axis) */}
        {axis === 'speaking' && dailyBlock.speakingPrompt && (
          <div className="p-3.5 rounded-xl bg-[var(--surface-base)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={handleToggleRecord}
                className={`p-2.5 rounded-xl font-bold flex items-center space-x-2 transition-all cursor-pointer ${
                  isRecording
                    ? 'bg-rose-900/90 text-rose-200 border-2 border-rose-500 animate-pulse'
                    : 'bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-hover)] shadow-xs'
                }`}
              >
                {isRecording ? <Square className="w-4 h-4 text-white" /> : <Mic className="w-4 h-4" />}
                <span className="text-xs font-mono">
                  {isRecording ? 'Detener Grabación' : 'Grabar Transmisión Oral'}
                </span>
              </button>

              {isRecording && (
                <span className="text-xs font-mono text-rose-400">
                  Grabando: {recordingSeconds}s
                </span>
              )}

              {hasRecorded && !isRecording && (
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  Transmisión guardada ({recordingSeconds}s)
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => handlePlayAudio(dailyBlock.speakingPrompt!.modelResponse)}
              className="px-3 py-1.5 rounded-lg bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>Escuchar Pronunciación Modelo</span>
            </button>
          </div>
        )}

      </div>
    </>
  )}
</div>
  );
};
