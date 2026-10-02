import React, { useState, useEffect, useRef, useMemo } from 'react';
import { LevelSyllabus, UserProgress } from '../types';
import { 
  TACTICAL_PHASES_120, 
  getPhaseForDay, 
  getDailyMission,
  getTacticalPhasesForLevel,
  getPhaseForDayAndLevel
} from '../data/daily120PlanData';
import { speakBritishText, stopSpeaking } from '../utils/audio';
import { DailyExerciseIntroduction } from './DailyExerciseIntroduction';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Play, 
  Pause, 
  RotateCcw, 
  Award, 
  Shield, 
  ChevronRight, 
  ChevronLeft, 
  Volume2, 
  Radio, 
  BookOpen, 
  FileText, 
  PenTool, 
  Mic, 
  Headphones, 
  Sparkles, 
  FastForward, 
  Layers, 
  AlertCircle,
  HelpCircle,
  Square,
  Eye,
  Check,
  Shuffle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useSessionShuffle } from '../utils/shuffleOptions';

interface Daily120TrainingPlanProps {
  level: LevelSyllabus;
  progress: UserProgress;
  onCompleteDay: (levelNumber: number, dayNumber: number, minutes?: number) => void;
  onFastForwardDays?: (levelNumber: number, targetDays: number) => void;
  onResetDays?: (levelNumber: number) => void;
  audioRate?: number;
  selectedDay?: number;
  onSelectDay?: (day: number) => void;
  onOpenDaySelector?: () => void;
  onNavigateToExam?: () => void;
}

export const Daily120TrainingPlan: React.FC<Daily120TrainingPlanProps> = ({
  level,
  progress,
  onCompleteDay,
  onFastForwardDays,
  onResetDays,
  audioRate = 0.95,
  selectedDay: propSelectedDay,
  onSelectDay: propOnSelectDay,
  onOpenDaySelector,
  onNavigateToExam
}) => {
  // Level days completed from progress
  const completedDays = progress.completedDays?.[level.levelNumber] || [];
  const completedDaysCount = completedDays.length;
  const isLevelQualified = completedDaysCount >= 120;
  const isExamPassed = !!progress.levelExamPassed?.[level.levelNumber];

  // Active day selection
  const [internalSelectedDay, setInternalSelectedDay] = useState<number>(() => {
    if (propSelectedDay) return propSelectedDay;
    for (let d = 1; d <= 120; d++) {
      if (!completedDays.includes(d)) return d;
    }
    return 1;
  });

  const selectedDay = propSelectedDay !== undefined ? propSelectedDay : internalSelectedDay;
  const handleSetSelectedDay = (day: number) => {
    if (propOnSelectDay) {
      propOnSelectDay(day);
    } else {
      setInternalSelectedDay(day);
    }
  };

  // Level-specific Tactical Phases
  const levelPhases = getTacticalPhasesForLevel(level.levelNumber);

  // Phase tab
  const currentPhase = getPhaseForDayAndLevel(selectedDay, level.levelNumber);
  const [activePhaseTab, setActivePhaseTab] = useState<1 | 2 | 3 | 4>(currentPhase.phaseNumber);

  useEffect(() => {
    setActivePhaseTab(getPhaseForDayAndLevel(selectedDay, level.levelNumber).phaseNumber);
  }, [selectedDay, level.levelNumber]);

  // Mission for selected day with deterministic session shuffling
  const { sessionSeed, startNewShuffleSession } = useSessionShuffle();
  const mission = useMemo(
    () => getDailyMission(level.levelNumber, selectedDay, sessionSeed),
    [level.levelNumber, selectedDay, sessionSeed]
  );

  // Active block (0 to 4: Listening, Reading, Use of Language, Writing, Speaking)
  const [activeBlockIndex, setActiveBlockIndex] = useState<number>(0);

  // 60-Minute Tactical Timer State (3600 seconds)
  const [timerSeconds, setTimerSeconds] = useState<number>(3600);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const timerIntervalRef = useRef<any>(null);

  useEffect(() => {
    if (isTimerRunning) {
      timerIntervalRef.current = setInterval(() => {
        setTimerSeconds(prev => {
          if (prev <= 1) {
            clearInterval(timerIntervalRef.current);
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerIntervalRef.current);
    }
    return () => clearInterval(timerIntervalRef.current);
  }, [isTimerRunning]);

  const handleToggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(3600);
  };

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

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

  // Interactive Question State for current day
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, boolean>>({});

  const handleSelectAnswer = (qKey: string, optIndex: number) => {
    if (submittedAnswers[qKey]) return;
    setUserAnswers(prev => ({ ...prev, [qKey]: optIndex }));
    setSubmittedAnswers(prev => ({ ...prev, [qKey]: true }));
  };

  // Writing & Speaking production states
  const [writtenResponse, setWrittenResponse] = useState<string>('');
  const [showModelWriting, setShowModelWriting] = useState<boolean>(false);
  
  // Voice recorder simulation state
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingSeconds, setRecordingSeconds] = useState<number>(0);
  const [hasRecordedAudio, setHasRecordedAudio] = useState<boolean>(false);
  const recTimerRef = useRef<any>(null);

  const handleToggleRecording = () => {
    if (isRecording) {
      clearInterval(recTimerRef.current);
      setIsRecording(false);
      setHasRecordedAudio(true);
    } else {
      setIsRecording(true);
      setRecordingSeconds(0);
      setHasRecordedAudio(false);
      recTimerRef.current = setInterval(() => {
        setRecordingSeconds(prev => prev + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      if (recTimerRef.current) clearInterval(recTimerRef.current);
    };
  }, []);

  // Complete Day Action
  const handleCompleteCurrentDay = () => {
    onCompleteDay(level.levelNumber, selectedDay, 60);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Safe fallback if canvas-confetti fails
    }

    // Advance to next day if available
    if (selectedDay < 120) {
      handleSetSelectedDay(selectedDay + 1);
      setActiveBlockIndex(0);
      setWrittenResponse('');
      setShowModelWriting(false);
      setHasRecordedAudio(false);
    }
  };

  // Phase day range
  const phaseInfo = levelPhases.find(p => p.phaseNumber === activePhaseTab) || levelPhases[0];
  const phaseDays = Array.from(
    { length: phaseInfo.endDay - phaseInfo.startDay + 1 }, 
    (_, i) => phaseInfo.startDay + i
  );

  const phaseCompletedCount = phaseDays.filter(d => completedDays.includes(d)).length;
  const isDayCompleted = completedDays.includes(selectedDay);

  const activeBlock = mission.blocks[activeBlockIndex] || mission.blocks[0];

  const wordCount = writtenResponse.trim() ? writtenResponse.trim().split(/\s+/).length : 0;

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Tactical Header Card: 120 Days / 1 Hour Per Day */}
      <div className="rounded-2xl camo-card-elevated p-5 sm:p-6 border border-[var(--border-subtle)] relative overflow-hidden shadow-xl text-[var(--text-primary)]">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-[var(--accent-primary)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-md bg-[var(--surface-base)] text-[var(--accent-primary)] font-stencil text-xs border border-[var(--border-subtle)] tracking-wide font-bold">
                NIVEL {level.levelNumber} ({level.cefr})
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-[var(--surface-base)] text-[var(--text-secondary)] font-mono text-xs border border-[var(--border-subtle)]">
                1 HORA / DÍA • 5 DESTREZAS DIARIAS
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-[var(--surface-base)] text-[var(--text-muted)] font-mono text-xs border border-[var(--border-subtle)]">
                STANAG 6001
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-stencil font-bold text-[var(--text-primary)] tracking-wide flex items-center gap-2">
              <Shield className="w-6 h-6 text-[var(--accent-primary)]" />
              <span>Plan de Adiestramiento de 120 Días</span>
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl mt-1">
              Régimen operacional diario del IESE: <strong>cada día incluye 5 ejercicios</strong> (Comprensión auditiva, Comprensión escrita, Uso de la lengua, Expresión escrita y Expresión oral). Cada ejercicio cuenta con su introducción oficial: Tema, Objetivo, Vocabulario, Gramática, Fonética y Frase útil.
            </p>
          </div>

          {/* Quick Metrics & Progression Pill */}
          <div className="flex flex-wrap items-center gap-3 bg-[var(--surface-base)] p-3 rounded-xl border border-[var(--border-subtle)] shrink-0 w-full sm:w-auto justify-between sm:justify-end">
            <div className="text-right">
              <div className="text-[11px] font-mono text-[var(--text-muted)]">Días Completados</div>
              <div className="text-lg font-stencil font-bold text-[var(--accent-primary)]">
                {completedDaysCount} / 120 <span className="text-xs text-[var(--text-muted)]">días</span>
              </div>
              <div className="text-[10px] text-[var(--text-muted)] font-mono">
                {completedDaysCount}h / 120h de adiestramiento
              </div>
            </div>

            <div className="h-9 w-px bg-[var(--border-subtle)]" />

            <div className="text-right">
              <div className="text-[11px] font-mono text-[var(--text-muted)]">Estado de Ascenso</div>
              {isExamPassed ? (
                <span className="inline-flex items-center gap-1 text-xs font-bold font-stencil text-emerald-500 bg-[var(--surface-elevated)] px-2 py-0.5 rounded border border-emerald-500/40">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  NIVEL CERTIFICADO
                </span>
              ) : isLevelQualified ? (
                <span className="inline-flex items-center gap-1 text-xs font-bold font-stencil text-[var(--accent-primary)] bg-[var(--surface-elevated)] px-2 py-0.5 rounded border border-[var(--accent-primary)]">
                  <Award className="w-3.5 h-3.5" />
                  APTO P/ EXAMEN FINAL
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs font-bold font-stencil text-amber-500 bg-[var(--surface-elevated)] px-2 py-0.5 rounded border border-amber-500/40">
                  <Clock className="w-3.5 h-3.5" />
                  FALTAN {120 - completedDaysCount} DÍAS
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Tactical 120-Day Progress Bar */}
        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between text-xs font-mono text-[var(--text-muted)]">
            <span>Progreso del nivel: {Math.round((completedDaysCount / 120) * 100)}% ({completedDaysCount} de 120 días)</span>
            <span>Requisito reglamentario: 120 días (120 horas)</span>
          </div>
          <div className="w-full bg-[var(--surface-base)] h-3 rounded-full overflow-hidden border border-[var(--border-subtle)] p-0.5 relative">
            <div
              className="h-full rounded-full transition-all duration-500 bg-[var(--accent-primary)] shadow-xs"
              style={{ width: `${Math.min(100, (completedDaysCount / 120) * 100)}%` }}
            />
          </div>
        </div>

        {/* Quick Fast Forward / Testing Controls */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[var(--border-subtle)] mt-4 text-xs font-mono">
          <div className="flex items-center space-x-2 text-[var(--text-muted)]">
            <Sparkles className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>Accesos rápidos de evaluación:</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onFastForwardDays && onFastForwardDays(level.levelNumber, 30)}
              className="px-2.5 py-1 rounded bg-[var(--surface-base)] hover:bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--accent-primary)] font-bold transition-all cursor-pointer"
              title="Completar Fase 1 (Días 1 a 30)"
            >
              +30 Días (Fase 1)
            </button>
            <button
              onClick={() => onFastForwardDays && onFastForwardDays(level.levelNumber, 60)}
              className="px-2.5 py-1 rounded bg-[var(--surface-base)] hover:bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--accent-primary)] font-bold transition-all cursor-pointer"
              title="Completar Fases 1 y 2 (Días 1 a 60)"
            >
              +60 Días (Fase 2)
            </button>
            <button
              onClick={() => onFastForwardDays && onFastForwardDays(level.levelNumber, 120)}
              className="px-2.5 py-1 rounded bg-[var(--accent-primary)] text-white font-bold transition-all cursor-pointer shadow-xs"
              title="Simular los 120 días completados para habilitar el ascenso"
            >
              <FastForward className="w-3 h-3 inline mr-1" />
              Completar 120 Días
            </button>
            {completedDaysCount > 0 && onResetDays && (
              <button
                onClick={() => onResetDays(level.levelNumber)}
                className="px-2.5 py-1 rounded bg-red-950/20 hover:bg-red-900/40 border border-red-800/40 text-red-400 transition-all cursor-pointer"
                title="Reiniciar contador de días del nivel"
              >
                <RotateCcw className="w-3 h-3 inline mr-1" />
                Reiniciar
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mesa Examinadora Final Banner (Obligatorio tras 120 días de adiestramiento) */}
      {isLevelQualified && (
        <div className="bg-gradient-to-r from-[#17240f] via-[#243516] to-[#1a2911] rounded-2xl p-4 sm:p-5 border-2 border-[#b8df47]/70 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-2xl bg-[#b8df47]/20 border border-[#b8df47]/50 text-[#d4f66a] shrink-0 shadow-inner">
              <Award className="w-7 h-7 text-[#d4f66a]" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#11180d] text-[#a4bb8e] border border-[#384c24] uppercase">
                  PROGRAMA OFICIAL IESE • STANAG 6001
                </span>
                <span className="text-[10px] font-stencil font-bold px-2 py-0.5 rounded bg-[#b8df47] text-[#121c0b]">
                  {isExamPassed ? 'DIPLOMA EMITIDO' : 'MESA EXAMINADORA HABILITADA'}
                </span>
                <span className="text-[10px] font-mono text-[#d4f66a] border border-[#b8df47]/40 px-2 py-0.5 rounded">
                  120 / 120 DÍAS CUMPLIDOS
                </span>
              </div>
              <h3 className="font-stencil text-base sm:text-lg font-bold text-[#f2fcdb]">
                {isExamPassed 
                  ? `Nivel ${level.levelNumber} (${level.cefr}) Homologado y Aprobado`
                  : `Examen Final Exigente de Nivel ${level.levelNumber} (${level.cefr})`}
              </h3>
              <p className="text-xs text-[#a4bb8e] max-w-3xl leading-relaxed">
                {isExamPassed
                  ? 'Ha completado el programa de 120 días y aprobado con éxito las 5 áreas reglamentarias (Comprensión Auditiva, Comprensión Lectora, Uso de la Lengua, Expresión Escrita y Expresión Oral). Puede revisar su acta militar o imprimir su diploma.'
                  : 'Habiendo completado las 120 jornadas lectivas, se encuentra reglamentariamente en condiciones de rendir el examen final exigente acorde al programa del IESE con las 2 comprensiones, las 2 expresiones y el uso de la lengua.'}
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={onNavigateToExam}
              className="w-full md:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-[#8cb92f] to-[#b8df47] hover:from-[#9ecc36] hover:to-[#c6ef4f] text-[#121c0b] font-stencil font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(184,223,71,0.5)] cursor-pointer"
            >
              <Award className="w-4 h-4 text-[#121c0b]" />
              <span>{isExamPassed ? 'Ver Diploma y Calificaciones' : 'Rendir Examen Final (5 Áreas)'}</span>
              <ChevronRight className="w-4 h-4 text-[#121c0b]" />
            </button>
          </div>
        </div>
      )}

      {/* Phase Navigation Tabs (4 Phases of 30 Days Each) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {levelPhases.map(phase => {
          const isCurrentActive = activePhaseTab === phase.phaseNumber;
          const phaseCompleted = Array.from(
            { length: phase.endDay - phase.startDay + 1 }, 
            (_, i) => phase.startDay + i
          ).filter(d => completedDays.includes(d)).length;

          return (
            <button
              key={phase.phaseNumber}
              onClick={() => {
                setActivePhaseTab(phase.phaseNumber);
                if (selectedDay < phase.startDay || selectedDay > phase.endDay) {
                  handleSetSelectedDay(phase.startDay);
                }
              }}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                isCurrentActive
                  ? 'bg-[var(--surface-elevated)] border-[var(--accent-primary)] ring-1 ring-[var(--accent-primary)]/40 shadow-sm'
                  : 'bg-[var(--surface-base)] hover:bg-[var(--surface-elevated)] border-[var(--border-subtle)]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-stencil font-bold tracking-wider text-[var(--accent-primary)]">
                  {phase.codename}
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">
                  {phase.dayRange}
                </span>
              </div>
              <div className="text-xs font-bold text-[var(--text-primary)] truncate font-tactical">
                {phase.name.split('—')[1]?.trim() || phase.name}
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] mt-2 pt-1 border-t border-[var(--border-subtle)]">
                <span>30 horas reloj</span>
                <span className="font-bold text-[var(--accent-primary)]">{phaseCompleted}/30 d</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Day Selector Strip for Active Phase */}
      <div className="bg-[var(--surface-base)] p-4 rounded-xl border border-[var(--border-subtle)] space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-[var(--text-secondary)]">
            <Calendar className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>Seleccionar Día ({phaseInfo.dayRange}):</span>
            <span className="text-[var(--text-primary)] font-bold">
              {phaseCompletedCount}/30 completados
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                if (selectedDay > 1) handleSetSelectedDay(selectedDay - 1);
              }}
              disabled={selectedDay <= 1}
              className="p-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--accent-primary)] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--surface-base)] cursor-pointer"
              aria-label="Día anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-[var(--accent-primary)] font-bold px-2 py-0.5 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
              DÍA {selectedDay} DE 120
            </span>
            <button
              onClick={() => {
                if (selectedDay < 120) handleSetSelectedDay(selectedDay + 1);
              }}
              disabled={selectedDay >= 120}
              className="p-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--accent-primary)] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--surface-base)] cursor-pointer"
              aria-label="Día siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {onOpenDaySelector && (
              <button
                id="open-120-days-modal-btn"
                data-expand-trigger="true"
                onClick={onOpenDaySelector}
                className="px-2.5 py-1 rounded bg-[var(--surface-elevated)] hover:bg-[var(--surface-base)] text-[11px] font-mono text-[#ff8533] hover:text-[#ffaa66] transition-colors cursor-pointer ml-1 neon-orange-expand"
              >
                Ver los 120 Días
              </button>
            )}
          </div>
        </div>

        {/* 30 Day Grid for the active phase */}
        <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-15 gap-1.5 max-h-36 overflow-y-auto pr-1">
          {phaseDays.map(d => {
            const isCompleted = completedDays.includes(d);
            const isSelected = selectedDay === d;

            return (
              <button
                key={d}
                onClick={() => handleSetSelectedDay(d)}
                className={`h-9 rounded-lg font-mono text-xs font-bold flex flex-col items-center justify-center transition-all border relative cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-sm scale-105 z-10'
                    : isCompleted
                    ? 'bg-[var(--surface-elevated)] text-[var(--status-success)] border-[var(--status-success)]/50 hover:bg-[var(--surface-base)]'
                    : 'bg-[var(--surface-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:bg-[var(--surface-base)] hover:text-[var(--text-primary)]'
                }`}
                title={`Día ${d}: ${isCompleted ? 'Completado (1h)' : 'Pendiente'}`}
              >
                <span>D{d}</span>
                {isCompleted && !isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--status-success)] absolute bottom-1" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Day Mission Workspace (60-Minute Tactical Session with 5 Blocks) */}
      <div className="rounded-2xl camo-card p-5 sm:p-6 border border-[var(--border-subtle)] space-y-6 shadow-xl text-[var(--text-primary)]">
        
        {/* Day Mission Header & 60-Minute Timer */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[var(--accent-primary)] mb-1">
              <span className="px-2 py-0.5 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] font-bold font-stencil">
                MISIÓN DEL DÍA {mission.day}
              </span>
              <span>•</span>
              <span className="text-[var(--text-muted)]">{mission.phaseName}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-stencil font-bold text-[var(--text-primary)]">
              {mission.title}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] font-mono mt-0.5">
              Tema Táctico: <span className="text-[var(--text-primary)] font-semibold">{mission.tacticalTheme}</span>
            </p>
          </div>

          {/* Tactical 60-Minute Stopwatch / Timer */}
          <div className="flex items-center gap-3 bg-[var(--surface-elevated)] px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] shrink-0 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center space-x-2">
              <Clock className={`w-5 h-5 ${isTimerRunning ? 'text-[var(--accent-primary)] animate-pulse' : 'text-[var(--text-muted)]'}`} />
              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] block">CRONÓMETRO 1 HORA</span>
                <span className="text-xl font-mono font-bold text-[var(--text-primary)] tracking-wider">
                  {formatTimer(timerSeconds)}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-1.5">
              <button
                onClick={handleToggleTimer}
                className={`p-2 rounded-lg font-bold text-xs transition-all cursor-pointer ${
                  isTimerRunning
                    ? 'bg-amber-500/20 text-amber-500 border border-amber-500/40 hover:bg-amber-500/30'
                    : 'bg-[var(--accent-primary)] text-white border border-[var(--accent-primary)] hover:bg-[var(--accent-hover)]'
                }`}
                title={isTimerRunning ? 'Pausar cronómetro' : 'Iniciar cronómetro de 1 hora'}
              >
                {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={handleResetTimer}
                className="p-2 rounded-lg bg-[var(--surface-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)] cursor-pointer"
                title="Reiniciar a 60 minutos"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Special Day 120 Examination Readiness Callout */}
        {selectedDay === 120 && (
          <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--accent-primary)] text-xs space-y-2 text-[var(--text-primary)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[var(--accent-primary)] font-stencil font-bold">
                <Award className="w-4 h-4" />
                <span>DÍA 120 • JORNADA FINAL DE ADIESTRAMIENTO Y TRANSICIÓN AL EXAMEN</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-primary)] text-white font-bold">
                120 / 120 HORAS
              </span>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Completar la misión del Día 120 corona las 120 horas reloj de adiestramiento reglamentario del Nivel {level.levelNumber} ({level.cefr}). Al finalizar los ejercicios de hoy, quedará formalmente convocado a la <strong>Mesa Examinadora Final Integral</strong> con las 2 comprensiones (Auditiva y Lectora), las 2 expresiones (Escrita y Oral) y el Uso de la Lengua.
            </p>
            {onNavigateToExam && (
              <div className="pt-1">
                <button
                  type="button"
                  onClick={onNavigateToExam}
                  className="px-3.5 py-1.5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white font-stencil font-bold text-xs flex items-center space-x-1.5 transition-all cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Ir Directamente al Examen Final de 5 Áreas</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* The 5 Tactical Blocks (12 Minutes Each = 60 Min / 1 Hour) */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold font-stencil uppercase tracking-wider text-[var(--accent-primary)] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>Estructura de la Sesión: 5 Destrezas Oficiales (12 Min c/u = 60 Min)</span>
            </h4>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              Ejercicio {activeBlockIndex + 1} de 5
            </span>
          </div>

          {/* 5-Block Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-4">
            {mission.blocks.map((block, idx) => {
              const isSelectedBlock = activeBlockIndex === idx;
              const icons = [
                <Headphones key="1" className="w-4 h-4" />,
                <BookOpen key="2" className="w-4 h-4" />,
                <Sparkles key="3" className="w-4 h-4" />,
                <PenTool key="4" className="w-4 h-4" />,
                <Mic key="5" className="w-4 h-4" />
              ];

              return (
                <button
                  key={block.id}
                  onClick={() => setActiveBlockIndex(idx)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelectedBlock
                      ? 'bg-[var(--surface-elevated)] border-[var(--accent-primary)] ring-1 ring-[var(--accent-primary)]/40 text-[var(--text-primary)] shadow-sm'
                      : 'bg-[var(--surface-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:bg-[var(--surface-elevated)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-stencil font-bold text-[var(--accent-primary)]">
                      EJERCICIO {idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--accent-primary)] px-1.5 py-0.2 rounded bg-[var(--surface-base)] border border-[var(--border-subtle)]">
                      12 MIN
                    </span>
                  </div>
                  <div className="text-xs font-bold truncate flex items-center gap-1.5 mt-1">
                    {icons[idx]}
                    <span className="truncate">{block.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Pedagogical Introduction Card (Tema, Objetivo, Vocabulario, Gramática, Fonética, Frase útil) */}
          <div className="mb-5">
            <DailyExerciseIntroduction 
              intro={activeBlock.intro}
              competencyLabel={activeBlock.title}
              dayNumber={selectedDay}
              levelNumber={level.levelNumber}
              audioRate={audioRate}
            />
          </div>

          {/* Active Block Interactive Exercise Container */}
          <div className="bg-[#12190d] rounded-xl border border-[#394d23] p-5 space-y-4">
            
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#2d3d1c]">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded bg-[#202c16] text-[#b8df47] font-mono text-xs font-bold border border-[#415827]">
                  Ejercicio {activeBlockIndex + 1} de 5: {activeBlock.title}
                </span>
              </div>

              {/* Audio button for listening / speaking / script */}
              {activeBlock.sampleAudio && (
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setRadioFilter(!radioFilter)}
                    className={`px-2 py-1 rounded text-[11px] font-mono border transition-all cursor-pointer ${
                      radioFilter 
                        ? 'bg-[#293b1a] text-[#b8df47] border-[#4e6b2c]' 
                        : 'bg-[#151f10] text-[#7f9467] border-[#2e3e1c]'
                    }`}
                    title="Activar/desactivar filtro de radio VHF militar"
                  >
                    <Radio className="w-3 h-3 inline mr-1" />
                    {radioFilter ? 'Filtro Radio ON' : 'Voz Clara'}
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePlayAudio(activeBlock.sampleAudio!)}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
                      isPlayingAudio
                        ? 'bg-amber-900/70 text-amber-200 border border-amber-600 animate-pulse'
                        : 'bg-[#233316] text-[#b8df47] border border-[#4d6b2c] hover:bg-[#2e421d]'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isPlayingAudio ? 'Detener Audio' : 'Reproducir Audio Militar (EN-GB)'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Block Instructions */}
            <div className="text-xs text-[#9eb486] font-mono">
              <strong className="text-[#b8df47]">Consigna del Ejercicio: </strong>{activeBlock.instructions}
            </div>

            {/* Content Display (Audio Script, Reading Snippet, Grammar Context) */}
            <div className="p-4 rounded-lg bg-[#182212] border border-[#354820] font-mono text-xs sm:text-sm text-[#e0ebd3] leading-relaxed whitespace-pre-wrap">
              {activeBlock.content}
            </div>

            {/* Drills / Actionable Checkpoints */}
            {activeBlock.drills && activeBlock.drills.length > 0 && (
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8fa776] block font-bold">
                  Pautas Operacionales:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeBlock.drills.map((drill, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-2 p-2.5 rounded-lg bg-[#151e10] border border-[#2d3c1d] text-xs text-[#c4d6b2]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#b8df47] shrink-0 mt-0.5" />
                      <span>{drill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Interactive Practice Question (Listening, Reading, Use of Language) */}
            {activeBlock.practiceQuestion && (
              <div className="mt-4 p-4 rounded-xl bg-[#162010] border border-[#3e5626] space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-stencil font-bold text-[#b8df47]">
                  <div className="flex items-center space-x-2">
                    <HelpCircle className="w-4 h-4 text-[#b8df47]" />
                    <span>Reactivo Práctico de Evaluación (Estándar STANAG 6001):</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      startNewShuffleSession();
                      setUserAnswers(prev => {
                        const next = { ...prev };
                        delete next[`${activeBlock.id}-q`];
                        return next;
                      });
                      setSubmittedAnswers(prev => {
                        const next = { ...prev };
                        delete next[`${activeBlock.id}-q`];
                        return next;
                      });
                    }}
                    title="Reordenar opciones de respuesta (nueva distribución de sesión)"
                    className="px-2 py-0.5 rounded bg-[#202f15] border border-[#3e5626] hover:border-[#b8df47] text-[10px] font-mono text-[#c4d7b2] hover:text-[#b8df47] flex items-center gap-1 transition-all cursor-pointer"
                  >
                    <Shuffle className="w-3 h-3 text-[#b8df47]" />
                    <span>Reordenar</span>
                  </button>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#f2fcdb]">
                  {activeBlock.practiceQuestion.question}
                </p>

                <div className="space-y-1.5">
                  {activeBlock.practiceQuestion.options.map((option, optIdx) => {
                    const qKey = `${activeBlock.id}-q`;
                    const isSelected = userAnswers[qKey] === optIdx;
                    const isSubmitted = submittedAnswers[qKey];
                    const isCorrect = optIdx === activeBlock.practiceQuestion!.correctIndex;

                    let btnStyle = 'bg-[#1b2613] border-[#364921] text-[#c4d7b2] hover:bg-[#233118]';
                    if (isSubmitted) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                      } else {
                        btnStyle = 'opacity-50 border-[#2d3a1d] text-[#869871]';
                      }
                    } else if (isSelected) {
                      btnStyle = 'bg-slate-200 hover:bg-slate-100 border-slate-300 text-[#0f2042] font-bold shadow-sm';
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectAnswer(qKey, optIdx)}
                        className={`w-full text-left p-2.5 rounded-lg border text-xs font-mono transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                      >
                        <span className={isSelected && !isSubmitted ? 'text-[#0f2042] font-bold' : ''}>
                          {String.fromCharCode(65 + optIdx)}) {option}
                        </span>
                        {isSubmitted && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {submittedAnswers[`${activeBlock.id}-q`] && (
                  <div className="p-3 rounded-lg bg-[#1b2613] border border-[#445d2a] text-xs text-[#d3e5be] font-mono leading-relaxed">
                    <strong className="text-[#b8df47]">Fundamento Doctrinal: </strong>
                    {activeBlock.practiceQuestion.explanation}
                  </div>
                )}
              </div>
            )}

            {/* Expresión Escrita Interactive Area (Block 4) */}
            {activeBlock.axis === 'writing' && activeBlock.writingTask && (
              <div className="mt-4 p-4 rounded-xl bg-[#162010] border border-[#3e5626] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-stencil text-xs font-bold text-[#b8df47] uppercase tracking-wider flex items-center gap-1.5">
                    <PenTool className="w-3.5 h-3.5 text-[#b8df47]" />
                    Área de Redacción Operacional
                  </span>
                  <span className="text-xs font-mono text-[#8ea476]">
                    Objetivo: {activeBlock.writingTask.targetWordCount}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#1a2512] border border-[#30441c] space-y-2">
                  <span className="text-[11px] font-mono text-[#8ea476] uppercase font-bold block">
                    Elementos Tácticos Requeridos:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {activeBlock.writingTask.requiredElements.map((el, eIdx) => (
                      <div key={eIdx} className="text-xs font-mono text-[#d4e8b8] flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b8df47]" />
                        <span>{el}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono text-[#8fa776]">
                    <label>Tu redacción:</label>
                    <span className={`font-bold ${wordCount >= 30 ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {wordCount} palabras
                    </span>
                  </div>
                  <textarea
                    value={writtenResponse}
                    onChange={(e) => setWrittenResponse(e.target.value)}
                    placeholder="Redacta el informe operacional aquí siguiendo las normas STANAG..."
                    rows={4}
                    className="w-full p-3 rounded-xl bg-[#141d0f] border border-[#364b22] text-[#e0ecd4] font-mono text-xs focus:outline-none focus:border-[#7ea830] transition-colors resize-y"
                  />
                </div>

                <div className="pt-1 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setShowModelWriting(!showModelWriting)}
                    className="px-3 py-1.5 rounded-lg bg-[#223315] hover:bg-[#2d441c] border border-[#486629] text-xs font-mono text-[#d5ed97] flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#b8df47]" />
                    <span>{showModelWriting ? 'Ocultar Modelo Oficial' : 'Comparar con Respuesta Modelo Oficial'}</span>
                  </button>
                </div>

                {showModelWriting && (
                  <div className="p-3.5 rounded-lg bg-[#1a2512] border border-[#4e6b2c] space-y-1.5 animate-fade-in font-mono text-xs">
                    <span className="text-[10px] font-stencil font-bold text-[#b8df47] uppercase block">
                      Respuesta Modelo Oficial IESE / OTAN:
                    </span>
                    <p className="text-[#e2f0d0] leading-relaxed italic">
                      "{activeBlock.writingTask.modelAnswer}"
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Expresión Oral Interactive Area (Block 5) */}
            {activeBlock.axis === 'speaking' && activeBlock.speakingPrompt && (
              <div className="mt-4 p-4 rounded-xl bg-[#162010] border border-[#3e5626] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-stencil text-xs font-bold text-[#b8df47] uppercase tracking-wider flex items-center gap-1.5">
                    <Mic className="w-3.5 h-3.5 text-[#b8df47]" />
                    Entrenamiento de Expresión Oral y Radiotelefonía
                  </span>
                  <span className="text-xs font-mono text-[#8ea476]">
                    Duración recomendada: {activeBlock.speakingPrompt.recommendedDuration}
                  </span>
                </div>

                {/* Voice recording simulator */}
                <div className="p-4 rounded-xl bg-[#192412] border border-[#3a5223] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={handleToggleRecording}
                      className={`p-3 rounded-xl font-bold flex items-center space-x-2 transition-all cursor-pointer ${
                        isRecording
                          ? 'bg-rose-900/90 text-rose-200 border-2 border-rose-500 animate-pulse'
                          : 'bg-[#293d19] text-[#b8df47] border border-[#5d8334] hover:bg-[#344e21]'
                      }`}
                    >
                      {isRecording ? <Square className="w-4 h-4 text-white" /> : <Mic className="w-4 h-4" />}
                      <span className="text-xs font-mono">
                        {isRecording ? 'Detener Grabación' : 'Grabar Transmisión Oral'}
                      </span>
                    </button>

                    {isRecording && (
                      <div className="flex items-center space-x-2 font-mono text-xs text-rose-400">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                        <span>Grabando: {recordingSeconds}s</span>
                      </div>
                    )}

                    {hasRecordedAudio && !isRecording && (
                      <div className="flex items-center space-x-1.5 text-xs font-mono text-emerald-400">
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Transmisión registrada ({recordingSeconds}s)</span>
                      </div>
                    )}
                  </div>

                  {/* Audio model playback */}
                  <button
                    type="button"
                    onClick={() => handlePlayAudio(activeBlock.speakingPrompt!.modelResponse)}
                    className="px-3 py-2 rounded-lg bg-[#223315] hover:bg-[#2d441c] border border-[#486629] text-xs font-mono text-[#d5ed97] flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4 text-[#b8df47]" />
                    <span>Escuchar Pronunciación Modelo Británica</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Completion & Next Day Action Bar */}
        <div className="p-4 rounded-xl bg-[#141d0f] border border-[#3b5025] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#9bb084]">
              Estado del Día {selectedDay} (5 Destrezas):
            </div>
            {isDayCompleted ? (
              <span className="text-sm font-bold text-emerald-400 font-stencil flex items-center gap-1.5 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
                DÍA {selectedDay} COMPLETADO (60 MINUTOS / 1 HORA REGISTRADA)
              </span>
            ) : (
              <span className="text-sm font-bold text-amber-300 font-stencil flex items-center gap-1.5 mt-0.5">
                <Clock className="w-4 h-4" />
                SESIÓN DIARIA PENDIENTE (REQUISITO: 1 HORA / 5 DESTREZAS)
              </span>
            )}
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            {activeBlockIndex < 4 ? (
              <button
                onClick={() => setActiveBlockIndex(activeBlockIndex + 1)}
                className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-[#202e15] hover:bg-[#2a3d1c] border border-[#446127] text-xs font-mono text-[#d6ec99] flex items-center justify-center space-x-1 transition-all cursor-pointer"
              >
                <span>Siguiente Ejercicio ({activeBlockIndex + 2} de 5)</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : null}

            <button
              onClick={handleCompleteCurrentDay}
              className={`flex-1 sm:flex-initial px-5 py-2 rounded-xl font-stencil font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg ${
                isDayCompleted
                  ? 'bg-[#293d19] text-[#b8df47] border border-[#5b8032] hover:bg-[#344d21]'
                  : 'bg-gradient-to-r from-[#6e8f2a] to-[#9ac63b] hover:from-[#7ea330] hover:to-[#abd942] text-black shadow-[0_0_15px_rgba(184,223,71,0.3)]'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>{isDayCompleted ? 'Registrar Nuevamente' : 'Marcar Día como Completado (1h)'}</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
