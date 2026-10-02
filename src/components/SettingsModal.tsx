import React, { useState } from 'react';
import { 
  X, 
  Settings, 
  Palette, 
  Volume2, 
  Wifi, 
  WifiOff, 
  Bell, 
  RotateCcw, 
  Check, 
  Shield, 
  Calendar, 
  Play, 
  AlertTriangle,
  Radio,
  Sliders
} from 'lucide-react';
import { MILITARY_THEMES, MilitaryTheme, applyTheme } from '../data/themesData';
import { UserProgress, LevelSyllabus } from '../types';

export interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeThemeId: string;
  onSelectTheme: (themeId: string) => void;
  audioRate: number;
  onChangeAudioRate: (rate: number) => void;
  isOnline: boolean;
  isSimulatedOffline: boolean;
  onToggleSimulatedOffline: () => void;
  downloadedCount: number;
  totalLevels: number;
  onOpenDownloadManager: () => void;
  onOpenCalendar: () => void;
  progress: UserProgress;
  onResetProgress: () => void;
  onSimulateInactivity: () => void;
  onSimulateRecentActivity: () => void;
  currentLevel: LevelSyllabus;
}

type SettingsTab = 'appearance' | 'audio' | 'offline' | 'reminders' | 'data';

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  activeThemeId,
  onSelectTheme,
  audioRate,
  onChangeAudioRate,
  isOnline,
  isSimulatedOffline,
  onToggleSimulatedOffline,
  downloadedCount,
  totalLevels,
  onOpenDownloadManager,
  onOpenCalendar,
  progress,
  onResetProgress,
  onSimulateInactivity,
  onSimulateRecentActivity,
  currentLevel
}) => {
  const [activeTab, setActiveTab] = useState<SettingsTab>('appearance');
  const [isConfirmingReset, setIsConfirmingReset] = useState(false);
  const [isPlayingTestAudio, setIsPlayingTestAudio] = useState(false);

  if (!isOpen) return null;

  const currentTheme = MILITARY_THEMES.find(t => t.id === activeThemeId) || MILITARY_THEMES[0];

  const handleTestAudio = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance("This is IESE Command. Radio check on frequency Alpha. How do you read? Over.");
    utterance.rate = audioRate;
    utterance.pitch = 1.0;
    utterance.lang = 'en-GB';

    // Find British voice if available
    const voices = window.speechSynthesis.getVoices();
    const gbVoice = voices.find(v => v.lang === 'en-GB' || v.name.toLowerCase().includes('british') || v.name.toLowerCase().includes('uk'));
    if (gbVoice) {
      utterance.voice = gbVoice;
    }

    utterance.onstart = () => setIsPlayingTestAudio(true);
    utterance.onend = () => setIsPlayingTestAudio(false);
    utterance.onerror = () => setIsPlayingTestAudio(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div 
      id="settings-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="settings-modal-container"
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl bg-[var(--surface-base)] border border-[var(--border-subtle)] overflow-hidden text-[var(--text-primary)] font-tactical"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-[var(--surface-base)] border border-[var(--accent-primary)] flex items-center justify-center text-[var(--accent-primary)] shadow-xs">
              <Settings className="w-5 h-5 animate-[spin_10s_linear_infinite]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base sm:text-lg font-bold font-stencil uppercase tracking-wider text-[var(--text-primary)]">
                  Configuración del Sistema
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--surface-base)] text-[var(--accent-primary)] border border-[var(--border-subtle)] font-bold">
                  STANAG 6001
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] font-mono">
                Personalización de apariencia, motor de audio británico, conectividad y foja
              </p>
            </div>
          </div>

          <button
            id="close-settings-modal-btn"
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[var(--surface-base)] border border-[var(--border-subtle)] hover:border-[var(--text-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            aria-label="Cerrar configuración"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tactical Sub-Navigation Tabs */}
        <div className="flex items-center space-x-1 sm:space-x-2 px-4 sm:px-6 pt-3 border-b border-[var(--border-subtle)] bg-[var(--surface-base)] overflow-x-auto scrollbar-none">
          <button
            id="tab-settings-appearance"
            type="button"
            onClick={() => setActiveTab('appearance')}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 text-xs font-semibold rounded-t-lg transition-all cursor-pointer border-b-2 whitespace-nowrap ${
              activeTab === 'appearance'
                ? 'border-[var(--accent-primary)] text-[var(--accent-primary)] bg-[var(--surface-elevated)] font-bold'
                : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Skins & Temas ({MILITARY_THEMES.length})</span>
          </button>

          <button
            id="tab-settings-audio"
            type="button"
            onClick={() => setActiveTab('audio')}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 text-xs font-semibold rounded-t-lg transition-all cursor-pointer border-b-2 whitespace-nowrap ${
              activeTab === 'audio'
                ? 'border-[var(--accent-primary)] text-[var(--accent-primary)] bg-[var(--surface-elevated)] font-bold'
                : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Audio Británico ({audioRate}x)</span>
          </button>

          <button
            id="tab-settings-offline"
            type="button"
            onClick={() => setActiveTab('offline')}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 text-xs font-semibold rounded-t-lg transition-all cursor-pointer border-b-2 whitespace-nowrap ${
              activeTab === 'offline'
                ? 'border-[var(--accent-primary)] text-[var(--accent-primary)] bg-[var(--surface-elevated)] font-bold'
                : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]'
            }`}
          >
            <Wifi className="w-3.5 h-3.5" />
            <span>Modo Offline</span>
          </button>

          <button
            id="tab-settings-reminders"
            type="button"
            onClick={() => setActiveTab('reminders')}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 text-xs font-semibold rounded-t-lg transition-all cursor-pointer border-b-2 whitespace-nowrap ${
              activeTab === 'reminders'
                ? 'border-[var(--accent-primary)] text-[var(--accent-primary)] bg-[var(--surface-elevated)] font-bold'
                : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]'
            }`}
          >
            <Bell className="w-3.5 h-3.5" />
            <span>Alarmas & Calendario</span>
          </button>

          <button
            id="tab-settings-data"
            type="button"
            onClick={() => setActiveTab('data')}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 text-xs font-semibold rounded-t-lg transition-all cursor-pointer border-b-2 whitespace-nowrap ${
              activeTab === 'data'
                ? 'border-[var(--accent-primary)] text-[var(--accent-primary)] bg-[var(--surface-elevated)] font-bold'
                : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Foja & Datos</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* ========================================================= */}
          {/* TAB 1: APARIENCIA Y 10 ESCALAS DE COLORES MILITARES       */}
          {/* ========================================================= */}
          {activeTab === 'appearance' && (
            <div className="space-y-6">
              {/* Themes Catalog Grid */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center space-x-2">
                    <span>Catálogo de Skins y Temas de Interfaz ({MILITARY_THEMES.length} Disponibles)</span>
                  </h3>
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    Clic para aplicar instantáneamente
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5">
                  {MILITARY_THEMES.map((theme, index) => {
                    const isSelected = theme.id === activeThemeId;
                    return (
                      <div
                        key={theme.id}
                        id={`theme-card-${theme.id}`}
                        onClick={() => onSelectTheme(theme.id)}
                        className={`relative rounded-xl p-4 transition-all duration-200 cursor-pointer border text-left flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[var(--surface-elevated)] border-[var(--accent-primary)] shadow-md shadow-black/60 ring-1 ring-[var(--accent-primary)]'
                            : 'bg-[var(--surface-elevated)]/60 hover:bg-[var(--surface-elevated)] border-[var(--border-subtle)] hover:border-[var(--text-secondary)]'
                        }`}
                      >
                        {/* Top Info */}
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="w-5 h-5 rounded-full text-[10px] font-mono font-bold flex items-center justify-center bg-[var(--surface-base)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                                  {index + 1}
                                </span>
                                <h4 className="font-stencil font-bold text-sm text-[var(--text-primary)]">
                                  {theme.name}
                                </h4>
                              </div>
                              <p className="text-[11px] font-mono text-[var(--accent-primary)] mt-0.5 ml-7">
                                {theme.subtitle}
                              </p>
                            </div>

                            {/* Badge */}
                            <div className="flex items-center space-x-1 shrink-0">
                              {theme.isDefault && (
                                <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] border border-[var(--accent-primary)]/40">
                                  Básico
                                </span>
                              )}
                              {isSelected && (
                                <span className="w-6 h-6 rounded-full bg-[var(--accent-primary)] text-[var(--bg-base)] flex items-center justify-center shadow-xs">
                                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                                </span>
                              )}
                            </div>
                          </div>

                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                            {theme.description}
                          </p>
                        </div>

                        {/* Full 5-Step Scale Bar & Hex Chips */}
                        <div className="mt-3 pt-3 border-t border-[var(--border-subtle)] space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                              Escala de 5 Tonos
                            </span>
                            <span className={`text-[10px] font-mono font-medium ${isSelected ? 'text-[var(--accent-primary)] font-bold' : 'text-[var(--text-muted)]'}`}>
                              {isSelected ? '● Escala Aplicada' : 'Seleccionar Escala'}
                            </span>
                          </div>

                          {/* 5-Step Continuous Bar */}
                          <div className="w-full h-5 rounded-md overflow-hidden flex border border-[var(--border-subtle)] shadow-inner">
                            {theme.colorScale.map((step) => (
                              <div
                                key={step.step}
                                className="flex-1 h-full flex items-center justify-center text-[9px] font-mono font-bold"
                                style={{ 
                                  backgroundColor: step.hex,
                                  color: step.step >= 4 ? '#08111e' : '#ffffff'
                                }}
                                title={`${step.name}: ${step.hex} (${step.role})`}
                              >
                                {step.step}
                              </div>
                            ))}
                          </div>

                          {/* Hex Codes Row */}
                          <div className="grid grid-cols-5 gap-1 text-[9px] font-mono text-[var(--text-muted)] text-center">
                            {theme.colorScale.map((step) => (
                              <span 
                                key={step.step} 
                                className="px-0.5 py-0.5 rounded bg-[var(--surface-base)] border border-[var(--border-subtle)] truncate"
                                title={`${step.name}: ${step.hex}`}
                              >
                                {step.hex}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 2: AUDIO BRITÁNICO Y VELOCIDAD                       */}
          {/* ========================================================= */}
          {activeTab === 'audio' && (
            <div className="space-y-6">
              <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Volume2 className="w-5 h-5 text-[var(--accent-primary)]" />
                    <h3 className="font-stencil font-bold text-sm sm:text-base text-[var(--text-primary)]">
                      Velocidad del Sintetizador de Audio Británico (UK RP)
                    </h3>
                  </div>
                  <span className="font-mono text-sm font-bold text-[var(--accent-primary)] px-2 py-0.5 rounded bg-[var(--surface-base)] border border-[var(--border-subtle)]">
                    {audioRate}x
                  </span>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Ajuste la cadencia del habla según su nivel de adiestramiento auditivo. Las grabaciones y transcripciones de radio STANAG 6001 utilizan pronunciación militar británica reglamentaria (Received Pronunciation).
                </p>

                {/* Speed Selectors */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                  {[
                    { rate: 0.85, label: '0.85x Lenta', desc: 'Para discriminación fonética detallada' },
                    { rate: 0.95, label: '0.95x Táctica', desc: 'Recomendada para estudio diario' },
                    { rate: 1.0, label: '1.00x Normal', desc: 'Cadencia estándar de examen STANAG' },
                    { rate: 1.15, label: '1.15x Rápida', desc: 'Combate y alta exigencia operativa' }
                  ].map((option) => (
                    <button
                      key={option.rate}
                      type="button"
                      onClick={() => onChangeAudioRate(option.rate)}
                      className={`p-3 rounded-lg text-left transition-all cursor-pointer border ${
                        audioRate === option.rate
                          ? 'bg-[var(--surface-base)] border-[var(--accent-primary)] text-[var(--accent-primary)] shadow-xs'
                          : 'bg-[var(--surface-base)]/50 hover:bg-[var(--surface-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-xs">{option.label}</span>
                        {audioRate === option.rate && <Check className="w-3.5 h-3.5 text-[var(--accent-primary)]" />}
                      </div>
                      <p className="text-[10px] text-[var(--text-muted)] mt-1 line-clamp-2">
                        {option.desc}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Test Voice Button */}
                <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-xs font-semibold text-[var(--text-primary)]">
                      Prueba de Transmisión Radial STANAG
                    </span>
                    <p className="text-[11px] font-mono text-[var(--text-muted)]">
                      "This is IESE Command. Radio check on frequency Alpha. How do you read? Over."
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleTestAudio}
                    disabled={isPlayingTestAudio}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-[var(--bg-base)] font-bold text-xs transition-colors cursor-pointer shrink-0 disabled:opacity-50 shadow-xs"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isPlayingTestAudio ? 'Transmitiendo...' : 'Probar Audio Británico'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 3: MODO OFFLINE & DESCARGAS                           */}
          {/* ========================================================= */}
          {activeTab === 'offline' && (
            <div className="space-y-5">
              <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {isOnline ? (
                      <Wifi className="w-5 h-5 text-[var(--status-success)]" />
                    ) : (
                      <WifiOff className="w-5 h-5 text-[var(--accent-primary)]" />
                    )}
                    <h3 className="font-stencil font-bold text-sm sm:text-base text-[var(--text-primary)]">
                      Estado de Conexión y Estudio de Campaña (Offline)
                    </h3>
                  </div>

                  <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border ${
                    isOnline 
                      ? 'bg-[var(--surface-base)] text-[var(--status-success)] border-[var(--status-success)]/30'
                      : 'bg-[var(--surface-base)] text-[var(--accent-primary)] border-[var(--accent-primary)]/30'
                  }`}>
                    {isOnline ? 'En Línea (Online)' : 'Sin Conexión (Offline)'}
                  </span>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Permite realizar las actividades de escucha, lectura, gramática y exámenes finales en zonas de maniobras, bases remotas o sin cobertura de datos móviles mediante almacenamiento local indexado.
                </p>

                {/* Network Simulation */}
                <div className="pt-2">
                  <div className="p-3.5 rounded-lg bg-[var(--surface-base)] border border-[var(--border-subtle)] flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
                        Simulación de Corte de Red
                      </span>
                      <p className="text-xs font-medium text-[var(--text-primary)]">
                        {isSimulatedOffline ? 'Simulación Activa' : 'Modo Normal'}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={onToggleSimulatedOffline}
                      className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer border ${
                        isSimulatedOffline
                          ? 'bg-[var(--accent-primary)] text-[#12160f] border-[var(--accent-primary)]'
                          : 'bg-[var(--surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-subtle)]'
                      }`}
                    >
                      {isSimulatedOffline ? 'Desactivar Simulación' : 'Simular Sin Red'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 4: ALARMAS Y CALENDARIO                               */}
          {/* ========================================================= */}
          {activeTab === 'reminders' && (
            <div className="space-y-5">
              <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] space-y-4">
                <div className="flex items-center space-x-2">
                  <Bell className="w-5 h-5 text-[var(--accent-primary)]" />
                  <h3 className="font-stencil font-bold text-sm sm:text-base text-[var(--text-primary)]">
                    Alarmas de Disciplina de Estudio y Recordatorios de Inactividad
                  </h3>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  El sistema emite un aviso táctico si transcurren más de 3 días sin completar un ejercicio, asegurando la continuidad del entrenamiento conforme a la directiva académica militar.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-lg bg-[var(--surface-base)] border border-[var(--border-subtle)] flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
                        Alarma en Calendario Militar
                      </span>
                      <p className="text-xs text-[var(--text-primary)]">
                        Sincronizar evento con Apple Calendar o Google Calendar
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenCalendar();
                      }}
                      className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-xs text-[var(--text-primary)] transition-colors cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                      <span>Agendar Alarma</span>
                    </button>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[var(--surface-base)] border border-[var(--border-subtle)] flex flex-col justify-between gap-2">
                    <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
                      Diagnóstico de Alerta de Inactividad
                    </span>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={onSimulateInactivity}
                        className="flex-1 px-2.5 py-1.5 rounded bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                        title="Simula 4 días de inactividad para activar la notificación de estudio"
                      >
                        Simular Inactividad (+4d)
                      </button>
                      <button
                        type="button"
                        onClick={onSimulateRecentActivity}
                        className="flex-1 px-2.5 py-1.5 rounded bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                        title="Restablece la fecha de última actividad al día de hoy"
                      >
                        Restablecer Actividad
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 5: FOJA & DATOS                                       */}
          {/* ========================================================= */}
          {activeTab === 'data' && (
            <div className="space-y-5">
              <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] space-y-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-[var(--accent-primary)]" />
                  <h3 className="font-stencil font-bold text-sm sm:text-base text-[var(--text-primary)]">
                    Resumen de Foja y Restablecimiento de Progreso
                  </h3>
                </div>

                {/* Progress Summary */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="p-3 rounded-lg bg-[var(--surface-base)] border border-[var(--border-subtle)]">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">Nivel Actual</span>
                    <strong className="font-stencil text-base text-[var(--accent-primary)]">Nivel {currentLevel.levelNumber}</strong>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--surface-base)] border border-[var(--border-subtle)]">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">Ejercicios Hechos</span>
                    <strong className="font-mono text-base text-[var(--text-primary)]">{progress.completedExerciseIds.length}</strong>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--surface-base)] border border-[var(--border-subtle)]">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">Exámenes Aprobados</span>
                    <strong className="font-mono text-base text-[var(--status-success)]">
                      {Object.values(progress.levelExamPassed || {}).filter(Boolean).length} de 6
                    </strong>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--surface-base)] border border-[var(--border-subtle)]">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">Tema en Uso</span>
                    <strong className="font-mono text-xs text-[var(--text-secondary)] truncate block">{currentTheme.name}</strong>
                  </div>
                </div>

                {/* Danger Zone */}
                <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3">
                  <div className="flex items-start space-x-3 p-3.5 rounded-lg bg-red-950/20 border border-red-900/30">
                    <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-red-300 font-mono uppercase">
                        Zona de Reinicio de Foja Militar
                      </h4>
                      <p className="text-xs text-red-200/80 leading-relaxed">
                        Esta acción borrará los ejercicios completados, calificaciones de exámenes y fojas registradas en este navegador, regresando al estado de aspirante inicial.
                      </p>
                    </div>
                  </div>

                  {!isConfirmingReset ? (
                    <button
                      type="button"
                      onClick={() => setIsConfirmingReset(true)}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-900/40 hover:bg-red-900/70 border border-red-700/60 text-red-200 text-xs font-bold transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reiniciar Foja de Progreso Militar</span>
                    </button>
                  ) : (
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-[var(--surface-base)] border border-red-500/50 animate-in fade-in">
                      <span className="text-xs text-red-300 font-bold">
                        ¿Confirma el reinicio completo de todos los datos?
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          onResetProgress();
                          setIsConfirmingReset(false);
                          onClose();
                        }}
                        className="px-3 py-1.5 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors cursor-pointer"
                      >
                        Sí, Reiniciar Todo
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsConfirmingReset(false)}
                        className="px-3 py-1.5 rounded bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] text-[var(--text-secondary)] text-xs transition-colors cursor-pointer"
                      >
                        Cancelar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3 border-t border-[var(--border-subtle)] bg-[var(--surface-elevated)] flex items-center justify-between">
          <div className="flex items-center space-x-2 text-[11px] font-mono text-[var(--text-muted)]">
            <span className="w-2 h-2 rounded-full bg-[var(--status-success)]" />
            <span>Configuración persistida automáticamente</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-[#12160f] font-bold text-xs transition-colors cursor-pointer shadow-xs"
          >
            Listo / Guardar
          </button>
        </div>
      </div>
    </div>
  );
};
