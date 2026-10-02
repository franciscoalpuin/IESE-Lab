import React, { useState } from 'react';
import { LevelSyllabus, UserProgress } from '../types';
import { 
  Calendar,
  Clock,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  Headphones,
  BookOpen,
  PenTool,
  Mic
} from 'lucide-react';

interface ProgressIndicatorBarProps {
  currentLevel: LevelSyllabus;
  levels: LevelSyllabus[];
  progress: UserProgress;
  onSelectLevel?: (level: LevelSyllabus) => void;
  onOpenProgress: () => void;
  onNavigateTab?: (tab: any) => void;
  isCurrentLevelDownloaded?: boolean;
  isDownloadingCurrentLevel?: boolean;
  onDownloadCurrentLevel?: () => void;
  onOpenOfflineModal?: () => void;
  selectedDay?: number;
  onOpenDaySelector?: () => void;
  onSelectDay?: (day: number) => void;
}

interface PhaseSummary {
  num: number;
  name: string;
  daysRange: string;
  startDay: number;
  endDay: number;
  description: string;
}

const PHASES: PhaseSummary[] = [
  {
    num: 1,
    name: 'Fase 1: Inmersión Fundamental',
    daysRange: 'Días 1 a 30',
    startDay: 1,
    endDay: 30,
    description: 'Protocolos básicos, léxico doctrinal y fonética táctica.'
  },
  {
    num: 2,
    name: 'Fase 2: Consolidación Operacional',
    daysRange: 'Días 31 a 60',
    startDay: 31,
    endDay: 60,
    description: 'Intendencia, transmisiones tácticas y estructuras complejas.'
  },
  {
    num: 3,
    name: 'Fase 3: Misiones Combinadas',
    daysRange: 'Días 61 a 90',
    startDay: 61,
    endDay: 90,
    description: 'Operaciones multinacionales OTAN y redacción de informes.'
  },
  {
    num: 4,
    name: 'Fase 4: Estandarización STANAG',
    daysRange: 'Días 91 a 120',
    startDay: 91,
    endDay: 120,
    description: 'Simulacros de examen y calificación para la condecoración.'
  }
];

export const ProgressIndicatorBar: React.FC<ProgressIndicatorBarProps> = ({
  currentLevel,
  levels,
  progress,
  onOpenProgress,
  onNavigateTab,
  selectedDay = 1,
  onOpenDaySelector,
  onSelectDay
}) => {
  // Collapsible 120 Days Plan state (default: collapsed as requested)
  const [isPlan120Expanded, setIsPlan120Expanded] = useState<boolean>(false);

  // Current level exercise IDs
  const listeningIds = currentLevel.listening.map(a => a.id);
  const readingIds = currentLevel.reading.map(r => r.id);
  const useOfLangIds = currentLevel.useOfLanguage.map(u => u.id);
  const writingIds = currentLevel.writing.map(w => w.id);
  const speakingIds = currentLevel.speaking.map(s => s.id);

  const allLevelExerciseIds = [
    ...listeningIds,
    ...readingIds,
    ...useOfLangIds,
    ...writingIds,
    ...speakingIds
  ];

  const totalInCurrentLevel = allLevelExerciseIds.length;
  const completedInCurrentLevel = allLevelExerciseIds.filter(id => 
    progress.completedExerciseIds.includes(id)
  ).length;

  const levelPercentage = totalInCurrentLevel > 0 
    ? Math.round((completedInCurrentLevel / totalInCurrentLevel) * 100) 
    : 0;

  // Global counts
  const totalAllExercises = levels.reduce((acc, lvl) => 
    acc + lvl.listening.length + lvl.reading.length + lvl.useOfLanguage.length + lvl.writing.length + lvl.speaking.length, 
    0
  );
  const totalCompletedAll = progress.completedExerciseIds.length;
  const globalPercentage = totalAllExercises > 0 
    ? Math.round((totalCompletedAll / totalAllExercises) * 100) 
    : 0;

  const completedDays = progress.completedDays?.[currentLevel.levelNumber] || [];
  const completedDaysCount = completedDays.length;

  // Active Phase for selectedDay
  const activePhaseNum = Math.min(4, Math.max(1, Math.ceil(selectedDay / 30)));
  const activePhase = PHASES[activePhaseNum - 1];

  const handleOpenFullDayPlan = () => {
    if (onNavigateTab) {
      onNavigateTab('daily120');
    }
  };

  const handlePrevDay = () => {
    if (selectedDay > 1 && onSelectDay) {
      onSelectDay(selectedDay - 1);
    }
  };

  const handleNextDay = () => {
    if (selectedDay < 120 && onSelectDay) {
      onSelectDay(selectedDay + 1);
    }
  };

  return (
    <div 
      id="progress-indicator-quadrant"
      className="w-full bg-[var(--surface-base)] border-y border-[var(--border-subtle)] shadow-xs transition-all"
    >
      {/* Primary Bar */}
      <div className="w-full max-w-[1720px] mx-auto py-1.5 px-4 sm:px-8 lg:px-10 flex items-center justify-between gap-2 sm:gap-4 text-xs">
        
        {/* Left: Botón Plan 120 Días + Botones Navegación de Día (Día Ant., DÍA X / 120, Día Sig.) */}
        <div className="flex items-center space-x-1 sm:space-x-1.5 shrink-0">
          {/* Botón Plan de 120 Días (Ubicado a la izquierda de la barra de progreso) */}
          <button
            type="button"
            id="toggle-plan-120-info-btn"
            data-expand-trigger="true"
            onClick={() => setIsPlan120Expanded(prev => !prev)}
            className="flex items-center space-x-1.5 px-2 py-0.5 rounded bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer shadow-xs neon-orange-expand"
            title={isPlan120Expanded ? "Contraer información del Plan de 120 Días" : "Desplegar información del Plan de 120 Días"}
            aria-expanded={isPlan120Expanded}
          >
            <Clock className="w-3.5 h-3.5 text-[#ff6a00]" />
            <span className="font-semibold hidden sm:inline">Plan 120 Días</span>
            <span className="font-semibold inline sm:hidden">120d</span>
            {isPlan120Expanded ? (
              <ChevronUp className="w-3.5 h-3.5 text-[#ff6a00]" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-[#ff6a00]" />
            )}
          </button>

          {/* Botón Día Anterior */}
          <button
            type="button"
            id="bar-prev-day-btn"
            onClick={handlePrevDay}
            disabled={selectedDay <= 1}
            title="Ir al Día Anterior"
            className="neon-orange-expand px-1.5 sm:px-2 py-0.5 rounded bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] disabled:opacity-40 disabled:cursor-not-allowed border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-xs font-mono font-bold text-[var(--text-primary)] transition-all cursor-pointer shadow-xs flex items-center space-x-1"
          >
            <ChevronLeft className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
            <span className="hidden md:inline">Día Ant.</span>
          </button>

          {/* Botón Día Actual (Selector de Día) */}
          <button
            type="button"
            id="bar-day-selector-btn"
            onClick={onOpenDaySelector}
            title="Hacer clic para abrir el selector de los 120 días"
            className="neon-orange-expand px-2 sm:px-2.5 py-0.5 rounded bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-xs font-mono font-bold text-[var(--text-primary)] transition-all cursor-pointer shadow-xs flex items-center space-x-1.5"
          >
            <Calendar className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span>DÍA {selectedDay} <span className="hidden sm:inline">/ 120</span></span>
          </button>

          {/* Botón Día Siguiente */}
          <button
            type="button"
            id="bar-next-day-btn"
            onClick={handleNextDay}
            disabled={selectedDay >= 120}
            title="Ir al Día Siguiente"
            className="neon-orange-expand px-1.5 sm:px-2 py-0.5 rounded bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] disabled:opacity-40 disabled:cursor-not-allowed border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-xs font-mono font-bold text-[var(--text-primary)] transition-all cursor-pointer shadow-xs flex items-center space-x-1"
          >
            <span className="hidden md:inline">Día Sig.</span>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
          </button>
        </div>

        {/* Center: Tactical Progress Bar with Numeric Percentage (A la derecha del Botón Plan 120 Días) */}
        <div className="flex-1 flex items-center space-x-2 max-w-xl mx-1 sm:mx-4">
          <div className="flex-1 h-2 bg-[var(--bg-base)] rounded-full overflow-hidden border border-[var(--border-subtle)]">
            <div 
              className="h-full rounded-full bg-[var(--status-success)] transition-all duration-300"
              style={{ width: `${Math.max(levelPercentage, 2)}%` }}
            />
          </div>
          <span className="font-mono text-xs font-bold text-[var(--text-primary)] shrink-0">
            {levelPercentage}%
          </span>
          <span className="text-[10px] font-mono text-[var(--text-muted)] shrink-0 hidden md:inline">
            ({completedInCurrentLevel}/{totalInCurrentLevel} ej.)
          </span>
        </div>

        {/* Right: Global Progress Summary */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          <span className="text-[11px] font-mono text-[var(--text-muted)]">
            Global: <strong className="text-[var(--text-primary)]">{globalPercentage}%</strong>
          </span>
        </div>

      </div>

      {/* Expanded Information Container for 120-Day Plan */}
      {isPlan120Expanded && (
        <div 
          id="plan-120-expanded-container"
          data-expanded-container="true"
          className="border-t border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-4 sm:p-5 text-xs animate-in fade-in duration-200"
        >
          <div className="w-full max-w-[1720px] mx-auto space-y-4">
            
            {/* Header / Summary Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)]">
              <div>
                <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                  <span className="px-2 py-0.5 rounded bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] font-bold text-[11px] border border-[var(--accent-primary)]/30">
                    PROGRAMA OFICIAL IESE • STANAG 6001
                  </span>
                  <span className="font-bold text-sm text-[var(--text-primary)] flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-[var(--accent-primary)]" />
                    Plan de Adiestramiento de 120 Días (Nivel {currentLevel.levelNumber})
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  120 jornadas consecutivas de adiestramiento intensivo estructuradas en 4 fases de 30 días, con 60 minutos diarios (12 minutos por cada una de las 5 competencias evaluadas).
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center space-x-2 shrink-0">
                <button
                  type="button"
                  onClick={handleOpenFullDayPlan}
                  className="px-3 py-1.5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white font-bold text-xs flex items-center space-x-1.5 transition-colors cursor-pointer shadow-sm"
                  title="Abrir vista de estudio interactiva de 1 hora del Plan de 120 Días"
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Ir a Sesión de 1h</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {onOpenDaySelector && (
                  <button
                    type="button"
                    onClick={onOpenDaySelector}
                    className="px-3 py-1.5 rounded-lg bg-[var(--surface-base)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                    <span>Selector 120 Días</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setIsPlan120Expanded(false)}
                  className="px-2.5 py-1.5 rounded-lg bg-[var(--surface-base)] hover:bg-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] text-xs flex items-center space-x-1 transition-colors cursor-pointer"
                  title="Contraer información"
                >
                  <ChevronUp className="w-3.5 h-3.5" />
                  <span>Contraer</span>
                </button>
              </div>
            </div>

            {/* 4 Phases Overview Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {PHASES.map((phase) => {
                const isCurrentPhase = activePhaseNum === phase.num;
                const phaseCompletedDays = completedDays.filter(
                  d => d >= phase.startDay && d <= phase.endDay
                ).length;
                const phasePercent = Math.round((phaseCompletedDays / 30) * 100);

                return (
                  <div
                    key={phase.num}
                    className={`rounded-xl p-3.5 border transition-all ${
                      isCurrentPhase
                        ? 'bg-[var(--surface-base)] border-[var(--accent-primary)]/50 ring-1 ring-[var(--accent-primary)]/30 shadow-sm'
                        : 'bg-[var(--surface-base)] border-[var(--border-subtle)] opacity-90'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="font-bold text-xs text-[var(--text-primary)]">
                        {phase.name}
                      </span>
                      {isCurrentPhase && (
                        <span className="px-1.5 py-0.2 rounded bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] font-mono text-[9px] font-bold uppercase">
                          Activa
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] mb-2">
                      <span>{phase.daysRange}</span>
                      <span className="font-bold text-[var(--text-secondary)]">
                        {phaseCompletedDays}/30d ({phasePercent}%)
                      </span>
                    </div>

                    {/* Mini progress bar */}
                    <div className="w-full h-1.5 bg-[var(--bg-base)] rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full bg-[var(--status-success)] rounded-full transition-all"
                        style={{ width: `${phasePercent}%` }}
                      />
                    </div>

                    <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Daily 60-Minute Tactical Methodology Strip */}
            <div className="rounded-xl bg-[var(--surface-base)] border border-[var(--border-subtle)] p-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                <span className="font-bold text-xs text-[var(--text-primary)]">
                  Estructura Diaria de 60 Minutos (12 min por competencia):
                </span>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[11px] flex items-center space-x-1 text-sky-400">
                  <Headphones className="w-3 h-3" />
                  <span>Auditiva 12m</span>
                </span>
                <span className="px-2 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[11px] flex items-center space-x-1 text-emerald-400">
                  <BookOpen className="w-3 h-3" />
                  <span>Lectura 12m</span>
                </span>
                <span className="px-2 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[11px] flex items-center space-x-1 text-amber-400">
                  <Sparkles className="w-3 h-3" />
                  <span>Uso Lengua 12m</span>
                </span>
                <span className="px-2 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[11px] flex items-center space-x-1 text-purple-400">
                  <PenTool className="w-3 h-3" />
                  <span>Redacción 12m</span>
                </span>
                <span className="px-2 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[11px] flex items-center space-x-1 text-rose-400">
                  <Mic className="w-3 h-3" />
                  <span>Oral 12m</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
