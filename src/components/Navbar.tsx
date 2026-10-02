import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, Radio, Award, ChevronDown, CheckCircle2, Calendar, Languages, WifiOff, Check, Sparkles, Settings, Book } from 'lucide-react';
import { LevelSyllabus } from '../types';
import { EjercitoArgentinoEmblem } from './EjercitoArgentinoEmblem';

interface NavbarProps {
  levels: LevelSyllabus[];
  currentLevel: LevelSyllabus;
  onSelectLevel: (level: LevelSyllabus) => void;
  onOpenSyllabus?: () => void;
  isSyllabusActive?: boolean;
  onOpenDictionary?: () => void;
  isDictionaryActive?: boolean;
  onOpenToolkit: () => void;
  onOpenProgress: () => void;
  onOpenCalendar?: () => void;
  onOpenTranslator?: () => void;
  onOpenOffline?: () => void;
  onOpenScratchLab?: () => void;
  onOpenSettings?: () => void;
  activeThemeId?: string;
  onSelectTheme?: (themeId: string) => void;
  isCurrentLevelDownloaded?: boolean;
  downloadedLevelsMap?: Record<number, any>;
  isEffectiveOffline?: boolean;
  audioRate?: number;
  onChangeAudioRate?: (rate: number) => void;
  completedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  levels,
  currentLevel,
  onSelectLevel,
  onOpenSyllabus,
  isSyllabusActive = false,
  onOpenDictionary,
  isDictionaryActive = false,
  onOpenToolkit,
  onOpenProgress,
  onOpenCalendar,
  onOpenTranslator,
  onOpenOffline,
  onOpenScratchLab,
  onOpenSettings,
  isCurrentLevelDownloaded = false,
  downloadedLevelsMap = {},
  isEffectiveOffline = false,
  completedCount,
}) => {
  const [isLevelMenuOpen, setIsLevelMenuOpen] = useState(false);
  const levelMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (levelMenuRef.current && !levelMenuRef.current.contains(event.target as Node)) {
        setIsLevelMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLevelMenuOpen(false);
      }
    };

    if (isLevelMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLevelMenuOpen]);

  return (
    <nav id="iese-superior-quadrant" className="w-full bg-[var(--header-bg)] text-[var(--header-text)] border-b border-white/10">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between py-1.5 sm:py-2 min-h-[2.75rem] sm:min-h-[3rem]">
          
          {/* Brand / Logo (Editorial Lab Style like Futuros · Lab) */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            <div className="flex items-center space-x-2 px-2.5 py-1 rounded-md bg-[#162d48] border border-white/10 text-white shadow-xs">
              <div className="w-6 h-6 shrink-0 aspect-square rounded-full bg-[#0c1a2e] p-0.5 flex items-center justify-center border border-sky-400/40">
                <EjercitoArgentinoEmblem className="w-full h-full block aspect-square" />
              </div>
              <span className="font-bold text-[12pt] tracking-tight text-white whitespace-nowrap">
                IESE · Lab
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-[11pt] text-slate-300 font-normal leading-tight whitespace-nowrap">
                Escuela de Idiomas del Ejército • British Military English
              </span>
            </div>
          </div>

          {/* Quick Controls */}
          <div className="flex items-center space-x-1 sm:space-x-1.5">
            
            {/* Live STANAG Status (like Python 0.26.4 in reference) */}
            <div className="hidden lg:flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-[#122336] border border-white/10 text-[10pt] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>STANAG 6001 Ed.5</span>
            </div>

            {/* Level Dropdown */}
            <div className="relative" ref={levelMenuRef}>
              <button
                id="level-selector-btn"
                type="button"
                data-expand-trigger="true"
                onClick={() => setIsLevelMenuOpen(prev => !prev)}
                aria-expanded={isLevelMenuOpen}
                aria-haspopup="true"
                className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-[#162d48] hover:bg-[#1f3a5e] text-[11pt] sm:text-[12pt] font-semibold text-white transition-colors cursor-pointer shadow-xs neon-orange-expand"
                aria-label="Seleccionar Nivel IESE"
              >
                <div className="flex items-center space-x-1.5">
                  <span className={`w-2 h-2 rounded-full ${isCurrentLevelDownloaded ? 'bg-emerald-400' : 'bg-sky-400'} shrink-0`}></span>
                  <span className="text-[11pt] sm:text-[12pt] font-bold text-sky-300">NIVEL {currentLevel.levelNumber}</span>
                  <span className="text-slate-300 font-mono text-[10pt]">({currentLevel.cefr})</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-[#ff6a00] transition-transform duration-200 ${isLevelMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLevelMenuOpen && (
                <div 
                  id="level-dropdown-menu"
                  data-expanded-container="true"
                  className="absolute right-0 mt-2 w-72 sm:w-80 rounded-xl bg-[var(--surface-base)] shadow-2xl p-2 z-[9999] neon-orange-box"
                >
                  <div className="px-3 py-2 text-[11pt] font-bold uppercase tracking-wider text-[var(--accent-primary)] border-b border-[var(--border-subtle)] font-stencil flex items-center justify-between">
                    <span>Programa de 6 Niveles IESE</span>
                    <span className="text-[8pt] font-mono text-[var(--text-muted)]">STANAG 6001</span>
                  </div>
                  <div className="py-1.5 space-y-1 max-h-[70vh] overflow-y-auto">
                    {levels.map((lvl) => {
                      const active = lvl.levelNumber === currentLevel.levelNumber;
                      const isLvlDownloaded = Boolean(downloadedLevelsMap[lvl.levelNumber]);
                      return (
                        <button
                          key={lvl.levelNumber}
                          type="button"
                          onClick={() => {
                            onSelectLevel(lvl);
                            setIsLevelMenuOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between transition-colors cursor-pointer ${
                            active
                              ? 'bg-[var(--surface-elevated)] text-[var(--accent-primary)] font-semibold border border-[var(--accent-primary)] shadow-xs'
                              : 'text-[var(--text-secondary)] hover:bg-[var(--surface-elevated)] hover:text-[var(--text-primary)] border border-transparent'
                          }`}
                        >
                          <div className="flex items-center space-x-2.5">
                            <span className={`w-5 h-5 rounded flex items-center justify-center font-stencil text-[11pt] font-bold ${
                              active ? 'bg-[var(--accent-primary)] text-[#12160f]' : 'bg-[var(--surface-elevated)] text-[var(--text-muted)]'
                            }`}>
                              {lvl.levelNumber}
                            </span>
                            <div>
                              <div className="flex items-center space-x-1.5">
                                <span className="font-tactical font-semibold text-[11pt]">Nivel {lvl.levelNumber}</span>
                                <span className="text-[8pt] font-mono px-1 py-0.2 rounded bg-[var(--surface-elevated)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                                  {lvl.cefr}
                                </span>
                              </div>
                              <p className="text-[10pt] text-[var(--text-muted)] truncate max-w-[150px]">
                                {lvl.name}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {isLvlDownloaded && (
                              <span className="text-[8pt] font-mono text-[var(--status-success)] bg-[var(--surface-elevated)] px-1 py-0.5 rounded border border-[var(--border-subtle)]" title="Disponible para estudio sin internet">
                                Offline
                              </span>
                            )}
                            <span className="text-[10pt] text-[var(--text-muted)] font-mono">{lvl.clockHours}h</span>
                            {active && <Check className="w-3.5 h-3.5 text-[var(--accent-primary)]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Programa Oficial IESE - Botón con librito a la derecha del Nivel y a la izquierda del Diccionario */}
            {onOpenSyllabus && (
              <button
                id="open-official-syllabus-btn"
                onClick={onOpenSyllabus}
                aria-label={isSyllabusActive ? "Cerrar Programa Oficial IESE y volver a la vista anterior" : "Programa Oficial IESE y Cuadro STANAG 6001"}
                title={isSyllabusActive ? "Volver a la vista de estudio anterior" : "Programa Oficial IESE: Objetivos de Nivel, Contenidos Temáticos y Cuadro STANAG 6001"}
                className={`p-1.5 sm:p-2 rounded-md border transition-colors duration-150 cursor-pointer shadow-xs ${
                  isSyllabusActive
                    ? 'bg-white border-white text-slate-900 shadow-sm'
                    : 'bg-[#162d48] hover:bg-[#1f3a5e] border-white/10 text-slate-200 hover:text-white'
                }`}
              >
                <BookOpen className={`w-3.5 h-3.5 ${isSyllabusActive ? 'text-slate-900' : 'text-slate-200'}`} />
              </button>
            )}

            {/* Diccionario Bilingüe Español-Inglés / Inglés-Español (+1.000 palabras) */}
            {onOpenDictionary && (
              <button
                id="open-bilingual-dictionary-btn"
                onClick={onOpenDictionary}
                aria-label="Diccionario Bilingüe Español-Inglés (+1000 palabras)"
                title="Diccionario Bilingüe Español-Inglés / Inglés-Español (+1.200 palabras, fonética, ejemplos y audio)"
                className={`p-1.5 sm:p-2 rounded-md border transition-colors duration-150 cursor-pointer shadow-xs ${
                  isDictionaryActive
                    ? 'bg-amber-500 border-amber-500 text-white shadow-sm'
                    : 'bg-[#162d48] hover:bg-[#1f3a5e] border-white/10 text-slate-200 hover:text-white'
                }`}
              >
                <Book className={`w-3.5 h-3.5 ${isDictionaryActive ? 'text-white' : 'text-slate-200'}`} />
              </button>
            )}

            {/* Google Translate & Military Dictionary - Icon with tooltip */}
            {onOpenTranslator && (
              <button
                id="open-military-translator-btn"
                onClick={onOpenTranslator}
                aria-label="Traductor Militar Español-Inglés"
                title="Traductor Militar estilo Google Translate con Audio y Significado (Español ⇄ Inglés)"
                className="p-1.5 sm:p-2 rounded-md bg-[#162d48] hover:bg-[#1f3a5e] border border-white/10 text-slate-200 hover:text-white transition-colors duration-150 cursor-pointer shadow-xs"
              >
                <Languages className="w-3.5 h-3.5 text-slate-200" />
              </button>
            )}

            {/* English From Scratch / Everyday Life Lab - Outline button with icon and tooltip */}
            {onOpenScratchLab && (
              <button
                id="open-scratch-lab-btn"
                onClick={onOpenScratchLab}
                aria-label="Laboratorio de Inglés desde Cero (A0-A1)"
                title="Laboratorio de Inglés desde Cero: Reglas Gramaticales, Abecedario (A-Z), Números 1-100, Operaciones, Horario civil y militar, Deportes y Pasatiempos"
                className="p-1.5 sm:p-2 rounded-md bg-[#162d48] hover:bg-[#1f3a5e] border border-white/10 text-slate-200 hover:text-white transition-colors duration-150 cursor-pointer shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-slate-200" />
              </button>
            )}

            {/* Schedule Calendar Alarm - Icon with tooltip */}
            {onOpenCalendar && (
              <button
                id="open-calendar-alarm"
                onClick={onOpenCalendar}
                aria-label="Agendar Alarma de Estudio Militar"
                title="Agendar alarma de estudio militar en Calendario (Google / Celular)"
                className="p-1.5 sm:p-2 rounded-md bg-[#162d48] hover:bg-[#1f3a5e] border border-white/10 text-slate-200 hover:text-white transition-colors duration-150 cursor-pointer shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5 text-slate-200" />
              </button>
            )}

            {/* Military Reference Toolkit - Icon with tooltip */}
            <button
              id="open-military-toolkit"
              onClick={onOpenToolkit}
              aria-label="Manual OTAN y Alfabeto Fonético"
              title="Manual OTAN: Alfabeto fonético, rangos militares y prowords de radio"
              className="p-1.5 sm:p-2 rounded-md bg-[#162d48] hover:bg-[#1f3a5e] border border-white/10 text-slate-200 hover:text-white transition-colors duration-150 cursor-pointer shadow-xs"
            >
              <Radio className="w-3.5 h-3.5 text-slate-200" />
            </button>

            {/* Progress / Stats - Icon with tooltip */}
            <button
              id="open-progress-modal"
              onClick={onOpenProgress}
              aria-label="Expediente Militar, Medallero y Evaluaciones"
              title={`Expediente Militar & Medallero: ${completedCount} ejercicios completados`}
              className="p-1.5 sm:p-2 rounded-md bg-[#162d48] hover:bg-[#1f3a5e] border border-white/10 text-slate-200 hover:text-white transition-colors duration-150 cursor-pointer shadow-xs"
            >
              <Award className="w-3.5 h-3.5 text-slate-200" />
            </button>

            {/* Gear Button: Configuración y Temas del Sistema */}
            {onOpenSettings && (
              <button
                id="open-settings-modal"
                type="button"
                onClick={onOpenSettings}
                aria-label="Configuración y Temas del Sistema"
                title="Centro de Configuración: Temas de apariencia (10 teatros), audio británico, modo offline y foja"
                className="group relative p-1.5 sm:p-2 rounded-md bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-[var(--accent-primary)] hover:text-[var(--accent-hover)] transition-all duration-150 cursor-pointer shadow-xs ml-0.5"
              >
                <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:rotate-90 transition-transform duration-300" />
                <span className="sr-only">Configuración</span>
              </button>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
};
