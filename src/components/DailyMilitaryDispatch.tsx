import React, { useState, useEffect } from 'react';
import { 
  MilitaryDailyItem, 
  MILITARY_DAILY_ITEMS, 
  getMilitaryItemForDate 
} from '../data/militaryDailyItems';
import { 
  Sparkles, 
  BookOpen, 
  Volume2, 
  VolumeX, 
  ChevronLeft, 
  ChevronRight, 
  Shuffle, 
  Calendar, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ShieldAlert, 
  Lightbulb, 
  Quote, 
  RotateCcw
} from 'lucide-react';
import { speakBilingualText, stopSpeaking, soundEffects } from '../utils/audio';
import { getSpanishPhonetic } from '../utils/spanishPhonetics';

interface DailyMilitaryDispatchProps {
  className?: string;
}

export const DailyMilitaryDispatch: React.FC<DailyMilitaryDispatchProps> = ({ className = '' }) => {
  // Today's base item
  const [todayItem] = useState<MilitaryDailyItem>(() => getMilitaryItemForDate());
  // Current index in MILITARY_DAILY_ITEMS
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    const idx = MILITARY_DAILY_ITEMS.findIndex(i => i.id === todayItem.id);
    return idx >= 0 ? idx : 0;
  });

  // Collapsed state: always collapsed by default as requested
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  // Audio playing state
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  // Copy feedback state
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  const currentItem = MILITARY_DAILY_ITEMS[currentIndex];
  const isToday = currentItem.id === todayItem.id;

  // Stop audio if component unmounts
  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const handleNext = () => {
    soundEffects.playRadioBeep();
    stopSpeaking();
    setIsPlayingAudio(false);
    setCurrentIndex((currentIndex + 1) % MILITARY_DAILY_ITEMS.length);
  };

  const handlePrev = () => {
    soundEffects.playRadioBeep();
    stopSpeaking();
    setIsPlayingAudio(false);
    setCurrentIndex((currentIndex - 1 + MILITARY_DAILY_ITEMS.length) % MILITARY_DAILY_ITEMS.length);
  };

  const handleRandom = () => {
    soundEffects.playRadioBeep();
    stopSpeaking();
    setIsPlayingAudio(false);

    const available = MILITARY_DAILY_ITEMS.map((_, i) => i).filter(i => i !== currentIndex);
    if (available.length > 0) {
      const randomIdx = available[Math.floor(Math.random() * available.length)];
      setCurrentIndex(randomIdx);
    }
  };

  const handleResetToToday = () => {
    soundEffects.playRadioBeep();
    stopSpeaking();
    setIsPlayingAudio(false);
    const idx = MILITARY_DAILY_ITEMS.findIndex(i => i.id === todayItem.id);
    if (idx >= 0) {
      setCurrentIndex(idx);
    }
  };

  const handleSpeak = () => {
    if (isPlayingAudio) {
      stopSpeaking();
      setIsPlayingAudio(false);
      return;
    }

    soundEffects.playRadioBeep();
    setIsPlayingAudio(true);

    const textToSpeak = `${currentItem.term}. ... ${currentItem.exampleEn}`;
    speakBilingualText(textToSpeak, 'en', {
      rate: 0.88,
      onEnd: () => setIsPlayingAudio(false)
    });
  };

  const handleCopy = () => {
    const typeLabel = currentItem.type === 'fact' 
      ? 'Military Fact / Curiosidad Militar' 
      : 'Military Idiom / Expresión Militar';
      
    const textToCopy = `[${typeLabel}] ${currentItem.term}\n` +
      `Categoría / Category: ${currentItem.categoryEn || currentItem.category} | ${currentItem.category}\n` +
      `Concepto (ES): ${currentItem.titleEs}\n\n` +
      `[Meaning (EN)]:\n${currentItem.meaningEn || currentItem.meaningEs}\n\n` +
      `[Significado (ES)]:\n${currentItem.meaningEs}\n\n` +
      `[Military Genesis & History (EN)]:\n${currentItem.militaryOriginEn || currentItem.militaryOrigin}\n\n` +
      `[Génesis e Historia Militar (ES)]:\n${currentItem.militaryOrigin}\n\n` +
      `[Example (EN)]: "${currentItem.exampleEn}"\n` +
      `[Ejemplo (ES)]: ${currentItem.exampleEs}` +
      (currentItem.tacticalTipEn ? `\n\n[STANAG Application (EN)]: ${currentItem.tacticalTipEn}` : '') +
      (currentItem.tacticalTip ? `\n[Aplicación STANAG (ES)]: ${currentItem.tacticalTip}` : '');

    navigator.clipboard?.writeText(textToCopy);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  // Formatted current date
  const todayFormatted = new Intl.DateTimeFormat('es-AR', {
    day: 'numeric',
    month: 'long'
  }).format(new Date());

  return (
    <section 
      id="daily-military-dispatch-quadrant"
      className={`w-full bg-transparent py-0.5 sm:py-1 px-4 sm:px-8 lg:px-10 transition-all duration-300 ${className}`}
    >
      <div className="w-full max-w-[1720px] mx-auto">
        <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-base)] shadow-sm overflow-hidden">
          {/* Header Bar - Ultra-slim compact */}
          <div className="flex flex-wrap items-center justify-between gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[var(--surface-base)] border-b border-[var(--border-subtle)]">
            <div className="flex items-center space-x-2 min-w-0">
              <div className="flex items-center justify-center w-5 h-5 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--accent-primary)] shrink-0">
                {currentItem.type === 'fact' ? (
                  <Lightbulb className="w-3 h-3" />
                ) : (
                  <Quote className="w-3 h-3" />
                )}
              </div>
              <div className="flex items-center flex-wrap gap-1 sm:gap-1.5 min-w-0">
                <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[var(--accent-primary)] truncate">
                  {currentItem.type === 'fact' ? 'Dato Curioso' : 'Expresión del Día'}
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hidden sm:inline-block">
                  {currentItem.categoryEn ? `${currentItem.categoryEn}` : currentItem.category}
                </span>
                {isToday && (
                  <span className="hidden md:inline-flex items-center text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-[var(--surface-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)]">
                    <Calendar className="w-2.5 h-2.5 mr-1" /> Hoy
                  </span>
                )}
              </div>
            </div>

        {/* Actions & Navigation Controls */}
        <div className="flex items-center space-x-1">
          {/* Navigation Controls */}
          <div className="flex items-center space-x-0.5">
            {!isToday && (
              <button
                id="reset-dispatch-today-btn"
                type="button"
                onClick={handleResetToToday}
                title="Volver a la selección de hoy"
                className="flex items-center px-1.5 py-0.5 rounded bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] text-[var(--text-secondary)] text-[10px] font-medium border border-[var(--border-subtle)] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-2.5 h-2.5 mr-0.5" />
                Hoy
              </button>
            )}
            <button
              id="prev-dispatch-btn"
              type="button"
              onClick={handlePrev}
              title="Anterior"
              aria-label="Anterior entrada"
              className="p-1 rounded bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3 h-3" />
            </button>
            <button
              id="random-dispatch-btn"
              type="button"
              onClick={handleRandom}
              title="Aleatorio / Sorpréndeme"
              aria-label="Entrada aleatoria"
              className="p-1 rounded bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
            >
              <Shuffle className="w-3 h-3" />
            </button>
            <button
              id="next-dispatch-btn"
              type="button"
              onClick={handleNext}
              title="Siguiente"
              aria-label="Siguiente entrada"
              className="p-1 rounded bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Collapse/Expand Toggle */}
          <button
            id="toggle-dispatch-collapse-btn"
            type="button"
            data-expand-trigger="true"
            onClick={() => setIsCollapsed(!isCollapsed)}
            title={isCollapsed ? 'Expandir detalle de Dato Curioso' : 'Minimizar tarjeta'}
            aria-label={isCollapsed ? 'Expandir detalle de Dato Curioso' : 'Minimizar tarjeta'}
            className="p-1 rounded bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors ml-0.5 cursor-pointer neon-orange-expand"
          >
            {isCollapsed ? <ChevronDown className="w-3 h-3 text-[#ff6a00]" /> : <ChevronUp className="w-3 h-3 text-[#ff6a00]" />}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {isCollapsed ? (
        /* Ultra-compact single-line preview with quick audio and expand button */
        <div className="px-2.5 sm:px-3 py-1 flex items-center justify-between gap-2 text-xs bg-[var(--surface-base)]">
          <div className="flex items-center space-x-2 overflow-hidden min-w-0">
            <span className="text-[8px] font-mono font-bold px-1 py-0.2 rounded bg-[var(--surface-elevated)] text-[var(--accent-primary)] border border-[var(--border-subtle)] shrink-0">
              EN
            </span>
            <span className="font-bold text-[var(--text-primary)] font-mono text-xs truncate">
              {currentItem.term}
            </span>
            <span className="text-[var(--text-muted)] shrink-0">•</span>
            <span className="text-[8px] font-mono font-bold px-1 py-0.2 rounded bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] shrink-0">
              ES
            </span>
            <span className="text-[var(--text-secondary)] truncate text-[11px]">
              {currentItem.titleEs}
            </span>
          </div>
          <div className="flex items-center space-x-1.5 shrink-0">
            <button
              type="button"
              onClick={handleSpeak}
              className="p-1 rounded bg-[var(--surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
              title="Escuchar pronunciación"
              aria-label="Escuchar pronunciación"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              id="expand-dispatch-preview-btn"
              data-expand-trigger="true"
              onClick={() => setIsCollapsed(false)}
              className="flex items-center space-x-1 text-[10px] text-[#ff6a00] hover:text-[#ff8533] font-mono px-1.5 py-0.5 rounded bg-[var(--surface-elevated)] cursor-pointer neon-orange-expand"
              title="Expandir detalle de Dato Curioso"
              aria-label="Expandir detalle de Dato Curioso"
            >
              <span className="font-bold">Expandir</span>
              <ChevronDown className="w-3 h-3 text-[#ff6a00]" />
            </button>
          </div>
        </div>
      ) : (
        /* Full detailed card: English on top, Spanish directly below */
        <div data-expanded-container="true" className="p-3.5 sm:p-4 bg-[var(--surface-base)] neon-orange-box rounded-b-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
            {/* Left Col: Term, Translation, Bilingual Meaning & STANAG tip */}
            <div className="lg:col-span-5 space-y-3 border-b lg:border-b-0 lg:border-r border-[var(--border-subtle)] pb-3 lg:pb-0 lg:pr-4">
              
              {/* Bilingual Term / Title Box */}
              <div className="p-3 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] space-y-2.5">
                {/* English Term / Title (Top) */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--surface-base)] text-[var(--accent-primary)] border border-[var(--border-subtle)]">
                        EN
                      </span>
                      <span className="text-[11px] uppercase font-mono tracking-wider text-[var(--text-secondary)] font-semibold">
                        {currentItem.type === 'idiom' ? 'Military Idiom / Expression' : 'Military Curiosity / Fact'}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1 shrink-0">
                      <button
                        id="dispatch-speak-audio-btn"
                        type="button"
                        onClick={handleSpeak}
                        title={isPlayingAudio ? 'Detener audio' : 'Escuchar en inglés militar'}
                        aria-label="Escuchar pronunciación"
                        className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                          isPlayingAudio 
                            ? 'bg-[var(--accent-active)] text-[var(--text-primary)] border-[var(--accent-primary)] ring-1 ring-[var(--accent-primary)]'
                            : 'bg-[var(--surface-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:bg-[var(--surface-elevated)]'
                        }`}
                      >
                        {isPlayingAudio ? (
                          <VolumeX className="w-4 h-4" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        id="dispatch-copy-content-btn"
                        type="button"
                        onClick={handleCopy}
                        title="Copiar texto explicativo"
                        aria-label="Copiar explicación"
                        className="p-1.5 rounded-lg bg-[var(--surface-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)] transition-colors cursor-pointer"
                      >
                        {hasCopied ? (
                          <Check className="w-4 h-4 text-[var(--accent-primary)]" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] tracking-wide flex items-center flex-wrap gap-2">
                    <span>{currentItem.term}</span>
                    {currentItem.phonetic && (
                      <span className="text-xs font-mono font-normal text-[var(--text-muted)] px-2 py-0.5 rounded bg-[var(--surface-base)] border border-[var(--border-subtle)]" title="Transcripción IPA">
                        {currentItem.phonetic}
                      </span>
                    )}
                    {(currentItem.spanishPhonetic || getSpanishPhonetic(currentItem.term, currentItem.phonetic)) && (
                      <span className="text-xs font-sans font-medium text-[var(--accent-primary)] px-2 py-0.5 rounded bg-[var(--surface-base)] border border-[var(--border-subtle)]" title="Pronunciación aproximada en español">
                        <span className="text-[10px] text-[var(--text-muted)] mr-1">Sonido:</span>
                        "{currentItem.spanishPhonetic || getSpanishPhonetic(currentItem.term, currentItem.phonetic)}"
                      </span>
                    )}
                  </h3>
                </div>

                {/* Spanish Title & Equivalent (Directly Below) */}
                <div className="pt-2 border-t border-[var(--border-subtle)]">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--surface-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                      ES
                    </span>
                    <span className="text-[11px] uppercase font-mono tracking-wider text-[var(--text-secondary)] font-semibold">
                      {currentItem.type === 'idiom' ? 'Equivalencia y significado en español' : 'Título y concepto en español'}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    {currentItem.titleEs}
                  </p>
                </div>
              </div>

              {/* Bilingual Meaning: English first, Spanish below */}
              <div className="p-3 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] space-y-2">
                {/* English Meaning (Top) */}
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--surface-base)] text-[var(--accent-primary)] border border-[var(--border-subtle)]">
                      EN
                    </span>
                    <span className="text-[11px] uppercase font-mono tracking-wider text-[var(--text-secondary)] font-semibold">
                      Meaning
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                    {currentItem.meaningEn || currentItem.meaningEs}
                  </p>
                </div>

                {/* Spanish Meaning (Bottom) */}
                <div className="pt-2 border-t border-[var(--border-subtle)]">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--surface-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                      ES
                    </span>
                    <span className="text-[11px] uppercase font-mono tracking-wider text-[var(--text-muted)] font-semibold">
                      Significado en español
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {currentItem.meaningEs}
                  </p>
                </div>
              </div>

              {/* Bilingual Tactical Tip / Exam Usage */}
              {(currentItem.tacticalTip || currentItem.tacticalTipEn) && (
                <div className="bg-[var(--surface-elevated)] p-2.5 rounded-lg border border-[var(--border-subtle)] space-y-1.5 text-[11px]">
                  <div className="flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />
                    <strong className="text-[var(--accent-primary)] font-mono uppercase tracking-wider text-[11px]">
                      STANAG Application • Aplicación
                    </strong>
                  </div>
                  {currentItem.tacticalTipEn && (
                    <div className="flex items-start gap-1.5 pl-1">
                      <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-[var(--surface-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)] shrink-0 mt-0.5 font-semibold">
                        EN
                      </span>
                      <p className="text-[var(--text-primary)] leading-relaxed">
                        {currentItem.tacticalTipEn}
                      </p>
                    </div>
                  )}
                  {currentItem.tacticalTip && (
                    <div className="flex items-start gap-1.5 pl-1">
                      <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-[var(--surface-base)] text-[var(--text-muted)] border border-[var(--border-subtle)] shrink-0 mt-0.5 font-semibold">
                        ES
                      </span>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        {currentItem.tacticalTip}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Col: Bilingual Military Origin & Contextual Example */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5">
              {/* Origin Section: English first, Spanish below */}
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-secondary)] font-semibold">
                    Military Genesis & History • Génesis e Historia Militar
                  </span>
                </div>
                
                <div className="bg-[var(--surface-elevated)] p-3 sm:p-3.5 rounded-lg border border-[var(--border-subtle)] space-y-2">
                  {/* English Origin (Top) */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--surface-base)] text-[var(--accent-primary)] border border-[var(--border-subtle)]">
                        EN
                      </span>
                      <span className="text-[11px] uppercase font-mono tracking-wider text-[var(--text-secondary)] font-semibold">
                        Historical Military Origin
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                      {currentItem.militaryOriginEn || currentItem.militaryOrigin}
                    </p>
                  </div>

                  {/* Spanish Origin (Bottom) */}
                  <div className="pt-2 border-t border-[var(--border-subtle)]">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--surface-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                        ES
                      </span>
                      <span className="text-[11px] uppercase font-mono tracking-wider text-[var(--text-muted)] font-semibold">
                        Génesis militar en español
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {currentItem.militaryOrigin}
                    </p>
                  </div>
                </div>
              </div>

              {/* Practical Example Sentence: English first, Spanish below */}
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-active)]" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-secondary)] font-semibold">
                    Operational Context • Uso en Contexto
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] space-y-2">
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[9px] font-mono font-bold px-1 py-0.2 rounded bg-[var(--surface-base)] text-[var(--accent-primary)] border border-[var(--border-subtle)]">
                        EN
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--text-secondary)] font-semibold">
                        Combat / Operational Example
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-primary)] italic font-serif">
                      "{currentItem.exampleEn}"
                    </p>
                  </div>

                  <div className="pt-1.5 border-t border-[var(--border-subtle)]">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[9px] font-mono font-bold px-1 py-0.2 rounded bg-[var(--surface-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                        ES
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--text-muted)] font-semibold">
                        Traducción operativa
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">
                      — {currentItem.exampleEs}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
        </div>
      </div>
    </section>
  );
};
