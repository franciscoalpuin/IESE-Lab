import React, { useState } from 'react';
import { Calendar, Clock, X, Bell, ExternalLink, Shield, Check } from 'lucide-react';
import { buildGoogleCalendarUrl, downloadIcsCalendarFile, getIeseCalendarOptions } from '../utils/calendar';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  levelNumber: number;
  cefr: string;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen,
  onClose,
  levelNumber,
  cefr
}) => {
  const [daysOption, setDaysOption] = useState<number>(3);
  const [scheduledSuccess, setScheduledSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const googleCalendarUrl = buildGoogleCalendarUrl(getIeseCalendarOptions(levelNumber, cefr, daysOption));

  const handleDownloadIcs = () => {
    const opts = getIeseCalendarOptions(levelNumber, cefr, daysOption);
    downloadIcsCalendarFile(opts);
    setScheduledSuccess(true);
    setTimeout(() => setScheduledSuccess(false), 4000);
  };

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + daysOption);
  const formattedDate = targetDate.toLocaleDateString('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="w-full max-w-md bg-[var(--surface-base)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 font-tactical">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-[var(--surface-base)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-primary)] shadow-xs">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-stencil font-bold text-[var(--text-primary)] text-base tracking-wide">
                Agendar Alarma de Estudio
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                Escuela de Idiomas del Ejército (IESE)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-base)] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          
          {/* Information Card */}
          <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)] text-xs sm:text-sm space-y-1.5">
            <div className="flex items-center space-x-2 text-[var(--accent-primary)] font-stencil text-xs uppercase tracking-wider font-semibold">
              <Shield className="w-4 h-4" />
              <span>Continuidad Operativa NATO STANAG</span>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed text-xs">
              Configura un aviso automático con alarma para continuar tu adiestramiento en el <strong className="text-[var(--text-primary)] font-semibold">Nivel {levelNumber} ({cefr})</strong>.
            </p>
          </div>

          {/* Target Interval Selector */}
          <div>
            <label className="text-xs font-stencil uppercase tracking-wider text-[var(--accent-primary)] font-semibold block mb-2">
              ¿Cuándo deseas que suene la alarma?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { days: 1, label: 'En 24 horas', tag: 'Mañana' },
                { days: 3, label: 'En 3 días', tag: 'Recomendado' },
                { days: 7, label: 'En 7 días', tag: 'Semanal' },
              ].map(opt => (
                <button
                  key={opt.days}
                  type="button"
                  onClick={() => setDaysOption(opt.days)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    daysOption === opt.days
                      ? 'bg-[var(--surface-elevated)] border-[var(--accent-primary)] text-[var(--text-primary)] shadow-xs ring-1 ring-[var(--accent-primary)]/50'
                      : 'bg-[var(--surface-base)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--accent-primary)]/60 hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span className={`text-[10px] font-mono block uppercase ${
                    daysOption === opt.days ? 'text-[var(--accent-primary)] font-bold' : 'text-[var(--text-muted)]'
                  }`}>
                    {opt.tag}
                  </span>
                  <strong className="text-xs font-semibold block mt-0.5">
                    {opt.label}
                  </strong>
                </button>
              ))}
            </div>
          </div>

          {/* Date Summary */}
          <div className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)]">
            <Clock className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
            <span>
              Fecha del recordatorio: <strong className="text-[var(--text-primary)] capitalize">{formattedDate}</strong> a las 19:00 hs (con alarma previa de 15 min).
            </span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-1">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setScheduledSuccess(true);
                setTimeout(() => setScheduledSuccess(false), 4000);
              }}
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white font-stencil font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer no-underline"
            >
              <div className="flex items-center space-x-2.5">
                <Calendar className="w-4 h-4" />
                <span>Agendar en Google Calendar</span>
              </div>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={handleDownloadIcs}
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[var(--surface-elevated)] hover:bg-[var(--surface-base)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-semibold text-xs sm:text-sm transition-all cursor-pointer"
            >
              <div className="flex items-center space-x-2.5">
                <Bell className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>Añadir Recordatorio a Celular (.ics)</span>
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
                iPhone / Android
              </span>
            </button>
          </div>

          {/* Success notice */}
          {scheduledSuccess && (
            <div className="flex items-center space-x-2 p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--status-success)] text-[var(--status-success)] text-xs animate-in fade-in">
              <Check className="w-4 h-4 shrink-0" />
              <span>¡Recordatorio generado con éxito! Revisa tu calendario para confirmar.</span>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[var(--border-subtle)] bg-[var(--surface-elevated)] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            Listo / Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
