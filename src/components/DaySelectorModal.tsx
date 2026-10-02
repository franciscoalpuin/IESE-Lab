import React, { useState } from 'react';
import { TacticalPhaseInfo, TACTICAL_PHASES_120, getPhaseForDayAndLevel } from '../data/daily120PlanData';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Search, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Shield, 
  Layers,
  Award
} from 'lucide-react';

interface DaySelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDay: number;
  onSelectDay: (day: number) => void;
  completedDays: number[];
  levelNumber: number;
  levelCefr: string;
  onOpenFullDayPlan?: () => void;
}

export const DaySelectorModal: React.FC<DaySelectorModalProps> = ({
  isOpen,
  onClose,
  selectedDay,
  onSelectDay,
  completedDays,
  levelNumber,
  levelCefr,
  onOpenFullDayPlan
}) => {
  if (!isOpen) return null;

  const [activePhaseTab, setActivePhaseTab] = useState<number>(0); // 0 = all, 1, 2, 3, 4
  const [searchTerm, setSearchTerm] = useState<string>('');

  const completedCount = completedDays.length;
  const progressPercent = Math.round((completedCount / 120) * 100);

  // Filter days
  const allDays = Array.from({ length: 120 }, (_, i) => i + 1);

  const filteredDays = allDays.filter(day => {
    if (activePhaseTab !== 0) {
      const phase = getPhaseForDayAndLevel(day, levelNumber);
      if (phase.phaseNumber !== activePhaseTab) return false;
    }
    if (searchTerm.trim()) {
      const query = searchTerm.trim().toLowerCase();
      if (!day.toString().includes(query) && !`día ${day}`.includes(query) && !`dia ${day}`.includes(query)) {
        return false;
      }
    }
    return true;
  });

  // Next incomplete day
  const nextIncompleteDay = allDays.find(d => !completedDays.includes(d)) || 120;

  const handlePickDay = (day: number) => {
    onSelectDay(day);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-[var(--surface-base)] border border-[var(--border-subtle)] rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-[var(--text-primary)]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[var(--surface-elevated)] px-5 py-4 border-b border-[var(--border-subtle)] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-[var(--surface-base)] border border-[var(--border-subtle)] text-[var(--accent-primary)] shadow-xs">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-stencil font-bold tracking-wider px-2 py-0.5 rounded bg-[var(--surface-base)] text-[var(--accent-primary)] border border-[var(--border-subtle)]">
                  NIVEL {levelNumber} ({levelCefr})
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  PROGRAMA DE 120 DÍAS (1 HORA / DÍA)
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-stencil font-bold text-[var(--text-primary)] tracking-wide mt-0.5">
                Seleccionar Día de Adiestramiento (1 al 120)
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[var(--surface-base)] hover:bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            aria-label="Cerrar selector de días"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress & Fast Action Bar */}
        <div className="bg-[var(--surface-base)] px-5 py-3 border-b border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <div>
              <span className="text-[var(--text-muted)] block text-[10px]">Progreso Acumulado:</span>
              <span className="font-stencil text-base font-bold text-[var(--accent-primary)]">
                {completedCount} / 120 <span className="text-xs text-[var(--text-muted)]">días ({progressPercent}%)</span>
              </span>
            </div>
            <div className="h-7 w-px bg-[var(--border-subtle)]" />
            <div className="flex-1 sm:w-48 bg-[var(--surface-elevated)] h-2.5 rounded-full overflow-hidden border border-[var(--border-subtle)]">
              <div 
                className="h-full bg-[var(--accent-primary)] rounded-full transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {completedCount < 120 && (
              <button
                type="button"
                onClick={() => handlePickDay(nextIncompleteDay)}
                className="px-3 py-1.5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white font-bold text-xs flex items-center space-x-1.5 transition-all cursor-pointer shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ir al Próximo Día Pendiente (Día {nextIncompleteDay})</span>
              </button>
            )}

            {onOpenFullDayPlan && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenFullDayPlan();
                }}
                className="px-3 py-1.5 rounded-lg bg-[var(--surface-elevated)] hover:bg-[var(--surface-base)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-xs flex items-center space-x-1.5 transition-all cursor-pointer"
              >
                <Clock className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                <span>Abrir Sesión de 1h del Día {selectedDay}</span>
              </button>
            )}
          </div>
        </div>

        {/* Filters & Phase Tabs */}
        <div className="px-5 py-3 bg-[var(--surface-elevated)] border-b border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Phase Filter Buttons */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setActivePhaseTab(0)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activePhaseTab === 0
                  ? 'bg-[var(--accent-primary)] text-white shadow-xs'
                  : 'bg-[var(--surface-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              Todos (1-120)
            </button>
            {TACTICAL_PHASES_120.map(phase => {
              const isActive = activePhaseTab === phase.phaseNumber;
              const phaseDays = Array.from({ length: phase.endDay - phase.startDay + 1 }, (_, i) => phase.startDay + i);
              const phaseDone = phaseDays.filter(d => completedDays.includes(d)).length;

              return (
                <button
                  key={phase.phaseNumber}
                  type="button"
                  onClick={() => setActivePhaseTab(phase.phaseNumber)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center space-x-1 ${
                    isActive
                      ? 'bg-[var(--surface-base)] text-[var(--text-primary)] border border-[var(--accent-primary)] shadow-xs ring-1 ring-[var(--accent-primary)]/50 font-semibold'
                      : 'bg-[var(--surface-base)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                >
                  <span className="font-bold">{phase.codename.replace('PHASE ', 'Fase ')}</span>
                  <span className="text-[10px] opacity-75">({phase.startDay}-{phase.endDay})</span>
                  <span className="text-[10px] text-[var(--accent-primary)] ml-0.5 font-bold">[{phaseDone}/30]</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-56">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Buscar por día (ej. 45)..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[var(--surface-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] font-mono"
            />
          </div>
        </div>

        {/* 120 Days Grid */}
        <div className="p-5 flex-1 overflow-y-auto max-h-[50vh] space-y-4 bg-[var(--surface-base)]">
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
            {filteredDays.map(day => {
              const isCompleted = completedDays.includes(day);
              const isSelected = selectedDay === day;
              const phase = getPhaseForDayAndLevel(day, levelNumber);

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => handlePickDay(day)}
                  className={`h-12 rounded-xl font-mono text-xs font-bold flex flex-col items-center justify-center transition-all border relative cursor-pointer group ${
                    isSelected
                      ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-md scale-105 z-10'
                      : isCompleted
                      ? 'bg-[var(--surface-elevated)] text-[var(--status-success)] border-[var(--status-success)]/40 hover:bg-[var(--surface-base)]'
                      : 'bg-[var(--surface-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:bg-[var(--surface-base)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]/60'
                  }`}
                  title={`Día ${day}: ${isCompleted ? 'Completado (1h reloj)' : 'Pendiente'} • ${phase.name}`}
                >
                  <span className="text-[11px] leading-none">Día</span>
                  <span className="text-sm font-bold leading-tight">{day}</span>
                  {isCompleted && !isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--status-success)] absolute bottom-1" />
                  )}
                  {isSelected && (
                    <span className="text-[8px] font-stencil uppercase absolute -top-1.5 px-1 rounded bg-black/80 text-white border border-white/40">
                      ACTIVO
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {filteredDays.length === 0 && (
            <div className="text-center py-10 text-xs font-mono text-[var(--text-muted)]">
              No se encontraron días que coincidan con la búsqueda.
            </div>
          )}
        </div>

        {/* Modal Footer Legend */}
        <div className="bg-[var(--surface-elevated)] px-5 py-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[var(--text-muted)]">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded bg-[var(--accent-primary)] inline-block" />
              <span className="text-[var(--text-primary)]">Día Seleccionado</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded bg-[var(--surface-elevated)] border border-[var(--status-success)]/60 inline-block" />
              <span className="text-[var(--status-success)]">Completado (1h)</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] inline-block" />
              <span className="text-[var(--text-muted)]">Pendiente</span>
            </span>
          </div>

          <div className="text-[11px] text-[var(--text-muted)]">
            Al seleccionar un día, se cargan sus 5 ejercicios (Auditiva, Escrita, Uso de Lengua, Expresión Escrita y Oral).
          </div>
        </div>

      </div>
    </div>
  );
};
