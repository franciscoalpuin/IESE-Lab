import React from 'react';
import { WifiOff, CheckCircle2, AlertTriangle } from 'lucide-react';
import { LevelSyllabus } from '../types';

interface OfflineStatusBannerProps {
  isOnline: boolean;
  isSimulatedOffline: boolean;
  currentLevel: LevelSyllabus;
  isCurrentLevelDownloaded: boolean;
  onOpenDownloadManager?: () => void;
  onToggleSimulatedOffline: () => void;
}

export const OfflineStatusBanner: React.FC<OfflineStatusBannerProps> = ({
  isOnline,
  isSimulatedOffline,
  currentLevel,
  isCurrentLevelDownloaded,
  onToggleSimulatedOffline
}) => {
  const isEffectiveOffline = !isOnline || isSimulatedOffline;

  if (!isEffectiveOffline) return null;

  return (
    <aside aria-label="Alerta de modo offline" className="w-full bg-[#1e1509] border-b border-[#734812] text-[#f4dcb5] px-4 sm:px-8 lg:px-10 py-2 sm:py-2.5 transition-all">
      <div className="w-full max-w-[1720px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
        
        {/* Left: Status Message & Offline Reason */}
        <div className="flex items-center space-x-2.5">
          <div className="p-1.5 rounded-md bg-[#38220c] border border-[#7d5016] text-[#f2a83b] shrink-0">
            <WifiOff className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-stencil font-bold tracking-wider uppercase text-[#f2a83b]">
                {isSimulatedOffline && isOnline
                  ? 'Simulador de Modo Sin Conexión'
                  : 'Modo Sin Conexión (Offline)'}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#331e0a] text-[#ffd188] border border-[#6f4211]">
                {isOnline ? 'Prueba Activa' : 'Sin Red Detectada'}
              </span>
            </div>
            <p className="text-[11px] text-[#e0caa2]">
              {isCurrentLevelDownloaded ? (
                <span className="text-[#a4df54] flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 inline text-[#88cb30]" />
                  Nivel {currentLevel.levelNumber} ({currentLevel.cefr}) disponible para estudio local.
                </span>
              ) : (
                <span className="text-[#fca05f] flex items-center gap-1 font-medium">
                  <AlertTriangle className="w-3.5 h-3.5 inline text-[#f58e45]" />
                  Modo sin conexión activo para Nivel {currentLevel.levelNumber}.
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-2 shrink-0">
          {isSimulatedOffline && (
            <button
              type="button"
              onClick={onToggleSimulatedOffline}
              className="text-[10px] font-mono underline text-[#d1b17b] hover:text-white px-1.5 py-1"
              title="Volver a modo en línea"
            >
              Desactivar simulación
            </button>
          )}
        </div>

      </div>
    </aside>
  );
};
