import React, { useState, useEffect } from 'react';
import { Clock, BookOpen, X, AlertTriangle, ArrowRight, Shield, Bell, CheckCircle2, Calendar } from 'lucide-react';

interface StudyReminderToastProps {
  lastInteractionDate?: string;
  currentLevelNumber: number;
  currentLevelCefr: string;
  onContinueStudy: () => void;
  onDismiss: () => void;
  onSimulateActivity?: () => void;
  onOpenCalendar?: () => void;
}

export const StudyReminderToast: React.FC<StudyReminderToastProps> = ({
  lastInteractionDate,
  currentLevelNumber,
  currentLevelCefr,
  onContinueStudy,
  onDismiss,
  onSimulateActivity,
  onOpenCalendar
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Calculate days elapsed
  const calculateDaysElapsed = (): number | null => {
    if (!lastInteractionDate) return null;
    const last = new Date(lastInteractionDate).getTime();
    if (isNaN(last)) return null;
    const now = Date.now();
    const diffMs = now - last;
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
  };

  const daysElapsed = calculateDaysElapsed();
  const shouldShow = daysElapsed !== null && daysElapsed >= 3;

  useEffect(() => {
    if (shouldShow) {
      // Small entrance delay for smooth animation
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [shouldShow]);

  if (!shouldShow || !isVisible) {
    return null;
  }

  const formatLastDate = (isoStr?: string) => {
    if (!isoStr) return '';
    try {
      const d = new Date(isoStr);
      return d.toLocaleDateString('es-AR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return '';
    }
  };

  return (
    <aside
      aria-label="Notificación de recordatorio de estudio militar"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-md w-[calc(100vw-2rem)] sm:w-auto animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="rounded-2xl bg-[#141c0e]/95 border border-[#48632c] p-4 sm:p-5 shadow-2xl shadow-black/80 backdrop-blur-md relative overflow-hidden text-[#dce7ce] font-tactical">
        
        {/* Subtle tactical corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#b8df47]/10 rounded-full blur-2xl pointer-events-none -mr-8 -mt-8" />
        
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center space-x-2.5">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-[#243417] border border-[#5d8035] text-[#b8df47] shrink-0">
              <Clock className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#b8df47] animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#b8df47]" />
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-stencil uppercase tracking-wider font-bold text-[#b8df47] bg-[#223117] px-2 py-0.5 rounded border border-[#4a672d]">
                  Recordatorio IESE
                </span>
                <span className="text-[10px] font-mono text-[#9eb486]">
                  Hace {daysElapsed} {daysElapsed === 1 ? 'día' : 'días'}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-stencil font-bold text-[#f2fcdb] mt-0.5 tracking-wide">
                ¡Reanuda tu adiestramiento militar!
              </h4>
            </div>
          </div>

          <button
            onClick={() => {
              setIsVisible(false);
              onDismiss();
            }}
            className="p-1 rounded-lg text-[#9eb486] hover:text-white hover:bg-[#202c16] transition-colors"
            title="Cerrar notificación"
            aria-label="Cerrar notificación"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message */}
        <p className="text-xs sm:text-sm text-[#c7d9b4] leading-relaxed mb-3">
          Han transcurrido <strong className="text-[#b8df47] font-semibold">{daysElapsed} días</strong> desde tu última lección completada{lastInteractionDate ? ` (${formatLastDate(lastInteractionDate)})` : ''}. Para alcanzar el estándar <span className="font-mono font-semibold text-[#f2fcdb]">STANAG 6001</span>, la cátedra recomienda mantener constancia en el estudio.
        </p>

        {/* Target Level Info */}
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#10170b] border border-[#344621] mb-3.5 text-xs">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-[#b8df47] shrink-0" />
            <span className="text-[#c7d9b4]">
              Continuar en: <strong className="text-[#f2fcdb]">Nivel {currentLevelNumber} ({currentLevelCefr})</strong>
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#9eb486] uppercase">
            En curso
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 pt-2 border-t border-[#344621]">
          <div className="flex items-center space-x-1.5">
            <button
              type="button"
              onClick={() => {
                setIsVisible(false);
                onDismiss();
              }}
              className="px-2.5 py-1.5 rounded-lg text-xs text-[#9eb486] hover:text-white hover:bg-[#202c16] transition-colors font-semibold"
            >
              Posponer
            </button>

            {onOpenCalendar && (
              <button
                type="button"
                onClick={onOpenCalendar}
                className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-[#243417] hover:bg-[#314620] text-[#b8df47] border border-[#48632c] text-xs font-semibold transition-colors"
                title="Agendar alarma de estudio en Google Calendar o celular"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Agendar Alarma</span>
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              setIsVisible(false);
              onContinueStudy();
            }}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-[#9ec835] hover:bg-[#b0dc3e] text-white font-stencil font-bold text-xs shadow-md shadow-black/40 transition-all cursor-pointer shrink-0"
          >
            <span className="text-white">Continuar lección</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </button>
        </div>

      </div>
    </aside>
  );
};
