import React from 'react';
import {
  X,
  Download,
  Trash2,
  CheckCircle2,
  RefreshCw,
  HardDrive,
  Wifi,
  WifiOff,
  Shield,
  Layers,
  Headphones,
  BookOpen,
  FileCheck,
  Zap,
  Clock,
  Sparkles,
  Info
} from 'lucide-react';
import { IESE_LEVELS } from '../data/levelsData';
import { getLevelExerciseCounts } from '../utils/offlineStorage';
import { LevelSyllabus } from '../types';

interface OfflineDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLevel: LevelSyllabus;
  isOnline: boolean;
  isSimulatedOffline: boolean;
  onToggleSimulatedOffline: () => void;
  manifest: Record<number, any>;
  isDownloading: boolean;
  downloadingLevel: number | null;
  downloadProgress: number;
  downloadStep: string;
  storageInfo: { usedKb: number; quotaKb: number; percentage: number };
  onDownloadLevel: (levelNumber: number) => Promise<void>;
  onDownloadAllLevels: () => Promise<void>;
  onRemoveLevel: (levelNumber: number) => Promise<void>;
  onClearAll: () => Promise<void>;
}

export const OfflineDownloadModal: React.FC<OfflineDownloadModalProps> = ({
  isOpen,
  onClose,
  currentLevel,
  isOnline,
  isSimulatedOffline,
  onToggleSimulatedOffline,
  manifest,
  isDownloading,
  downloadingLevel,
  downloadProgress,
  downloadStep,
  storageInfo,
  onDownloadLevel,
  onDownloadAllLevels,
  onRemoveLevel,
  onClearAll
}) => {
  if (!isOpen) return null;

  const downloadedCount = Object.keys(manifest).length;
  const allLevelsDownloaded = downloadedCount === IESE_LEVELS.length;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="offline-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-5 overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[var(--surface-base)] border border-[var(--border-subtle)] shadow-2xl text-[var(--text-primary)] overflow-hidden font-tactical">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[var(--surface-elevated)] border-b border-[var(--border-subtle)] shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--surface-base)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-primary)] shadow-xs">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 id="offline-modal-title" className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-stencil tracking-wider">
                  Descargas de Contenido para Estudio Offline
                </h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[var(--surface-base)] text-[var(--accent-primary)] border border-[var(--border-subtle)]">
                  IESE STANAG 6001
                </span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Guarda los ejercicios, textos, audios y exámenes por nivel para estudiar sin conexión a internet.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-base)] transition-colors cursor-pointer"
            title="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-[var(--surface-base)]">
          
          {/* Telemetry & Global Controls Card */}
          <div className="rounded-xl bg-[#162110] border border-[#33471e] p-4 sm:p-5 space-y-4 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              
              {/* Storage metric */}
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-[#1a2614] border border-[#2c3d1b]">
                <HardDrive className="w-6 h-6 text-[#b8df47] shrink-0" />
                <div>
                  <div className="text-[11px] font-mono text-[#8ca17c] uppercase">Espacio en Caché</div>
                  <div className="text-base font-bold text-[#f2fcdb] font-mono">
                    {storageInfo.usedKb > 1024
                      ? `${(storageInfo.usedKb / 1024).toFixed(1)} MB`
                      : `${storageInfo.usedKb} KB`}
                  </div>
                  <div className="text-[10px] text-[#718563]">
                    {downloadedCount} de {IESE_LEVELS.length} niveles descargados
                  </div>
                </div>
              </div>

              {/* Network Status */}
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-[#1a2614] border border-[#2c3d1b]">
                {isOnline ? (
                  <Wifi className="w-6 h-6 text-[#72b737] shrink-0" />
                ) : (
                  <WifiOff className="w-6 h-6 text-[#e59635] shrink-0 animate-pulse" />
                )}
                <div>
                  <div className="text-[11px] font-mono text-[#8ca17c] uppercase">Estado de Red</div>
                  <div className="text-sm font-bold text-[#f2fcdb]">
                    {isOnline ? 'Conexión Activa' : 'Sin Conexión (Offline)'}
                  </div>
                  <div className="text-[10px] text-[#718563]">
                    {isOnline ? 'Descargas y sincronización listas' : 'Operando con caché local'}
                  </div>
                </div>
              </div>

              {/* Offline Simulator Switch */}
              <div className="p-3 rounded-lg bg-[#1a2614] border border-[#2c3d1b] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-mono text-[#8ca17c] uppercase">Simulador Sin Red</div>
                  <button
                    type="button"
                    onClick={onToggleSimulatedOffline}
                    className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      isSimulatedOffline ? 'bg-[#c6892a]' : 'bg-[#2b3d1b]'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        isSimulatedOffline ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
                <div className="text-[10px] text-[#b0c4a4] mt-1">
                  {isSimulatedOffline
                    ? 'Simulación activa: prueba la app como si estuvieras en el terreno.'
                    : 'Activa para probar el estudio sin desconectar el Wi-Fi.'}
                </div>
              </div>

            </div>

            {/* Global Actions */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-[#293a19]">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  disabled={isDownloading}
                  onClick={() => onDownloadLevel(currentLevel.levelNumber)}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#273d17] hover:bg-[#34511f] border border-[#527e2b] text-[#d6f28e] hover:text-white font-tactical text-xs font-semibold transition-colors disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>
                    Descargar Nivel Actual ({currentLevel.levelNumber} - {currentLevel.cefr})
                  </span>
                </button>

                <button
                  type="button"
                  disabled={isDownloading || allLevelsDownloaded}
                  onClick={onDownloadAllLevels}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#1f2f13] hover:bg-[#2b411a] border border-[#406123] text-[#b4d485] font-tactical text-xs transition-colors disabled:opacity-40"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Descargar Todos los Niveles (1 al 6)</span>
                </button>
              </div>

              {downloadedCount > 0 && (
                <button
                  type="button"
                  disabled={isDownloading}
                  onClick={() => {
                    if (window.confirm('¿Deseas eliminar todo el contenido descargado del almacenamiento local?')) {
                      onClearAll();
                    }
                  }}
                  className="flex items-center space-x-1 text-xs text-[#ca7474] hover:text-[#f49c9c] px-2.5 py-1 rounded hover:bg-[#2e1717] transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Liberar Todo el Almacenamiento</span>
                </button>
              )}
            </div>

            {/* Active Download Progress Bar */}
            {isDownloading && (
              <div className="p-3.5 rounded-lg bg-[#1e2a16] border border-[#4a6b29] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#b8df47] font-semibold flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    {downloadStep || 'Descargando paquete táctico...'}
                  </span>
                  <span className="font-mono font-bold text-[#f2fcdb]">{downloadProgress}%</span>
                </div>
                <div className="w-full bg-[#11190c] rounded-full h-2.5 overflow-hidden border border-[#2b3c1b]">
                  <div
                    className="bg-gradient-to-r from-[#629723] to-[#b8df47] h-full transition-all duration-300 rounded-full"
                    style={{ width: `${downloadProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Level List: 6 Levels Cards */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#9bb08e] flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#b8df47]" />
              Catálogo de Niveles del Ejército Argentino
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {IESE_LEVELS.map((level) => {
                const counts = getLevelExerciseCounts(level.levelNumber);
                const metadata = manifest[level.levelNumber];
                const isDownloaded = Boolean(metadata);
                const isCurrentlyDownloading = isDownloading && downloadingLevel === level.levelNumber;
                const isCurrent = level.levelNumber === currentLevel.levelNumber;

                return (
                  <div
                    key={level.levelNumber}
                    className={`rounded-xl p-4 border transition-all flex flex-col justify-between ${
                      isCurrent
                        ? 'bg-[#182412] border-[#557b2c] ring-1 ring-[#72a138]/40 shadow-md'
                        : 'bg-[#141d10] border-[#29391a] hover:border-[#3a5225]'
                    }`}
                  >
                    <div>
                      {/* Card Top: Level & Status Badge */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-stencil text-base font-bold text-[#f2fcdb]">
                            Nivel {level.levelNumber}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#283c18] text-[#c0e862] border border-[#446627]">
                            {level.cefr}
                          </span>
                          {isCurrent && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase bg-[#3f5724] text-[#f2fcdb]">
                              Activo
                            </span>
                          )}
                        </div>

                        {isDownloaded ? (
                          <span className="flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#213813] text-[#a1e549] border border-[#427124]">
                            <CheckCircle2 className="w-3 h-3 text-[#94dd38]" />
                            <span>Descargado</span>
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-[#778d69] px-2 py-0.5 rounded bg-[#1b2515]">
                            Sin Descargar
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#b0c3a5] mt-1 line-clamp-1">
                        {level.name}
                      </p>

                      {/* Content metrics breakdown */}
                      <div className="grid grid-cols-3 gap-1.5 mt-3 text-[11px] font-mono text-[#9bb08f]">
                        <div className="p-1.5 rounded bg-[#1a2614] border border-[#2b3b1c] flex items-center gap-1">
                          <Headphones className="w-3 h-3 text-[#b8df47]" />
                          <span>{counts.listening} Audios</span>
                        </div>
                        <div className="p-1.5 rounded bg-[#1a2614] border border-[#2b3b1c] flex items-center gap-1">
                          <BookOpen className="w-3 h-3 text-[#b8df47]" />
                          <span>{counts.reading} Textos</span>
                        </div>
                        <div className="p-1.5 rounded bg-[#1a2614] border border-[#2b3b1c] flex items-center gap-1">
                          <FileCheck className="w-3 h-3 text-[#b8df47]" />
                          <span>{counts.useOfLanguage} Gram.</span>
                        </div>
                        <div className="p-1.5 rounded bg-[#1a2614] border border-[#2b3b1c] flex items-center gap-1">
                          <Zap className="w-3 h-3 text-[#e2b947]" />
                          <span>{counts.dictationLabs + counts.scramblerLabs + counts.minimalPairLabs + counts.collocationLabs} Labs</span>
                        </div>
                        <div className="p-1.5 rounded bg-[#1a2614] border border-[#2b3b1c] flex items-center gap-1 col-span-2">
                          <Sparkles className="w-3 h-3 text-[#e2b947]" />
                          <span>{counts.examModels} Modelos Examen STANAG</span>
                        </div>
                      </div>

                      {/* Cached metadata if downloaded */}
                      {isDownloaded && metadata && (
                        <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono text-[#738865] border-t border-[#233117] pt-2">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {new Date(metadata.downloadedAt).toLocaleDateString('es-AR', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric'
                            })}
                          </span>
                          <span>~{metadata.estimatedSizeKb || 400} KB</span>
                        </div>
                      )}
                    </div>

                    {/* Card Actions */}
                    <div className="mt-4 pt-2.5 border-t border-[#253617] flex items-center justify-end space-x-2">
                      {isDownloaded ? (
                        <>
                          <button
                            type="button"
                            disabled={isDownloading}
                            onClick={() => onDownloadLevel(level.levelNumber)}
                            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-[#202e16] hover:bg-[#2b3e1d] border border-[#3e5926] text-[#bfe07d] text-[11px] font-mono transition-colors disabled:opacity-50"
                            title="Volver a descargar y actualizar contenido"
                          >
                            <RefreshCw className="w-3 h-3" />
                            <span>Actualizar</span>
                          </button>

                          <button
                            type="button"
                            disabled={isDownloading}
                            onClick={() => onRemoveLevel(level.levelNumber)}
                            className="p-1 text-[#a55f5f] hover:text-[#e07575] hover:bg-[#2b1616] rounded transition-colors"
                            title="Eliminar este nivel del almacenamiento offline"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </>
                      ) : (
                        <button
                          type="button"
                          disabled={isDownloading}
                          onClick={() => onDownloadLevel(level.levelNumber)}
                          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#273f16] hover:bg-[#35571e] border border-[#4d7928] text-[#d6f28e] hover:text-white font-tactical text-xs font-semibold transition-colors disabled:opacity-50"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Descargar para Offline</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Operational Offline Guidance Section */}
          <div className="rounded-xl bg-[#152010] border border-[#2b3d1b] p-4 text-xs space-y-2 text-[#9db391]">
            <div className="flex items-center space-x-2 text-[#f2fcdb] font-bold">
              <Info className="w-4 h-4 text-[#b8df47]" />
              <span className="font-stencil uppercase tracking-wider">
                Instrucciones Operativas para Estudio en Terreno
              </span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-[#acc29f]">
              <li>
                <strong>Síntesis de Voz Británica Offline:</strong> El reproductor de audio utiliza el motor de voz británico (en-GB) integrado en tu sistema operativo, funcionando de manera autónoma sin necesidad de conexión externa.
              </li>
              <li>
                <strong>Audios Reales Subidos:</strong> Si cargas grabaciones oficiales en formato MP3 o WAV, se almacenan de forma permanente e indefinida en la base de datos local de tu navegador.
              </li>
              <li>
                <strong>Progreso y Evaluaciones Seguras:</strong> Todos los puntajes, respuestas marcadas, grabaciones orales y estadísticas se conservan localmente.
              </li>
              <li>
                <strong>PWA Pantalla Completa:</strong> Para una experiencia óptima durante maniobras o traslados, instala la aplicación en la pantalla de inicio desde el botón &quot;Instalar App&quot;.
              </li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3.5 bg-[#172111] border-t border-[#293a19] flex items-center justify-between shrink-0 text-xs">
          <span className="font-mono text-[#788e6a]">
            IESE • Escuela de Idiomas del Ejército
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#28381b] hover:bg-[#364d24] border border-[#476629] text-[#dbeeaa] font-tactical font-medium transition-colors"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
