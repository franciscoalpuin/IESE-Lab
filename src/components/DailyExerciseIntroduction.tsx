import React, { useState } from 'react';
import { DailyPedagogicalIntro } from '../types';
import { speakBritishText, stopSpeaking } from '../utils/audio';
import { 
  BookOpen, 
  Target, 
  Volume2, 
  Sparkles, 
  Languages, 
  ChevronDown, 
  ChevronUp, 
  Info,
  Radio
} from 'lucide-react';

interface DailyExerciseIntroductionProps {
  intro: DailyPedagogicalIntro;
  competencyLabel: string;
  dayNumber: number;
  levelNumber: number;
  audioRate?: number;
  compact?: boolean;
}

export const DailyExerciseIntroduction: React.FC<DailyExerciseIntroductionProps> = ({
  intro,
  competencyLabel,
  dayNumber,
  levelNumber,
  audioRate = 0.95,
  compact = false
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [playingItem, setPlayingItem] = useState<string | null>(null);

  const handleSpeak = (text: string, id: string, isRadio: boolean = false) => {
    if (playingItem === id) {
      stopSpeaking();
      setPlayingItem(null);
      return;
    }
    setPlayingItem(id);
    speakBritishText(text, {
      rate: audioRate,
      isRadio,
      onEnd: () => setPlayingItem(null)
    });
  };

  return (
    <section 
      id={`iese-intro-day-${dayNumber}`} 
      aria-label={`Introducción didáctica oficial IESE Día ${dayNumber}`}
      className="rounded-xl bg-[var(--surface-base)] border border-[var(--border-subtle)] shadow-sm overflow-hidden transition-all"
    >
      {/* Official Header Banner */}
      <div className="bg-[var(--surface-elevated)] p-3.5 sm:p-4 border-b border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded-full bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] font-bold text-[11px] border border-[var(--accent-primary)]/30 tracking-tight">
              PROGRAMA OFICIAL IESE • DÍA {dayNumber}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[var(--surface-base)] text-[var(--text-secondary)] font-medium text-[11px] border border-[var(--border-subtle)]">
              {competencyLabel}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[var(--surface-base)] text-[var(--text-muted)] font-mono text-[10px]">
              NIVEL {levelNumber} (STANAG 6001)
            </span>
          </div>

          <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)] flex items-center gap-2 tracking-tight">
            <Target className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
            <span>Tema: {intro.topic}</span>
          </h3>

          <div className="text-xs text-[var(--text-secondary)] mt-1 flex items-start gap-1.5 font-sans leading-relaxed">
            <span className="text-[var(--accent-primary)] font-semibold shrink-0">Objetivo:</span>
            <span className="text-[var(--text-primary)] flex-1">{intro.objective}</span>
          </div>
        </div>

        <button
          type="button"
          id="toggle-exercise-guide-btn"
          data-expand-trigger="true"
          onClick={() => setIsExpanded(prev => !prev)}
          className="self-end sm:self-center flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[var(--surface-base)] hover:bg-[var(--border-subtle)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer shadow-xs shrink-0 neon-orange-expand"
        >
          <span>{isExpanded ? 'Contraer Guía Didáctica' : 'Ver Guía Completa IESE'}</span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-[#ff6a00]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#ff6a00]" />}
        </button>
      </div>

      {/* Expanded Pedagogical Content Grid */}
      {isExpanded && (
        <div data-expanded-container="true" className="p-4 sm:p-5 space-y-4 text-xs bg-[var(--surface-base)] neon-orange-box rounded-b-xl">
          
          {/* 4-Quadrant Tactical Briefing: Vocabulario, Gramática, Fonética, Frase Útil */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            
            {/* 1. Vocabulario Doctrinal con Fonética en Español */}
            <div className="rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] p-3.5 space-y-2">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
                <span className="font-bold text-[var(--accent-primary)] uppercase tracking-wider flex items-center gap-1.5 text-xs">
                  <BookOpen className="w-3.5 h-3.5" />
                  Vocabulario Clave ({intro.vocabulary.length} términos)
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Audio Británico</span>
              </div>

              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {intro.vocabulary.map((v, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-[var(--surface-base)] border border-[var(--border-subtle)] flex items-center justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center space-x-2 flex-wrap">
                        <span className="font-bold text-[var(--text-primary)] text-xs">{v.term}</span>
                        <span className="text-[10px] font-mono text-[var(--text-muted)]">{v.ipa}</span>
                        <span className="text-[10px] font-mono text-[var(--accent-primary)] bg-[var(--surface-elevated)] px-1.5 py-0.2 rounded border border-[var(--border-subtle)]" title="Pronunciación aproximada en español">
                          /{v.spanishPhonetic}/
                        </span>
                      </div>
                      <div className="text-[11px] text-[var(--text-secondary)] italic mt-0.5 truncate">
                        = {v.translation}
                      </div>
                      {v.example && (
                        <div className="text-[10px] text-[var(--text-muted)] font-mono truncate mt-0.5">
                          "{v.example}"
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSpeak(v.term, `vocab-${dayNumber}-${i}`)}
                      className={`p-1.5 rounded-lg border transition-colors shrink-0 ${
                        playingItem === `vocab-${dayNumber}-${i}`
                          ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                          : 'bg-[var(--surface-elevated)] text-[var(--accent-primary)] border-[var(--border-subtle)] hover:bg-[var(--border-subtle)]'
                      }`}
                      title={`Escuchar pronunciación británica de "${v.term}"`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Gramática Operativa & Estructura Sintáctica */}
            <div className="rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] p-3.5 space-y-2.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5 mb-2">
                  <span className="font-bold text-[var(--accent-primary)] uppercase tracking-wider flex items-center gap-1.5 text-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    Gramática Operativa
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">Sintaxis STANAG</span>
                </div>

                <div className="space-y-1.5">
                  <div className="font-bold text-[var(--text-primary)] text-xs">
                    {intro.grammar.title}
                  </div>

                  <div className="p-2.5 rounded-lg bg-[var(--surface-base)] border border-[var(--border-subtle)] font-mono text-[11px] text-[var(--accent-primary)]">
                    <span className="text-[var(--text-muted)] block text-[9px] uppercase">Fórmula Sintáctica:</span>
                    {intro.grammar.formula}
                  </div>

                  <p className="text-[var(--text-secondary)] text-[11px] leading-relaxed">
                    {intro.grammar.rule}
                  </p>
                </div>
              </div>

              {intro.grammar.tacticalTip && (
                <div className="p-2 rounded-lg bg-[var(--surface-base)] border-l-2 border-[var(--accent-primary)] text-[10px] text-[var(--text-secondary)] font-mono">
                  <strong className="text-[var(--text-primary)]">Tip Operativo:</strong> {intro.grammar.tacticalTip}
                </div>
              )}
            </div>

            {/* 3. Fonética & Articulación con Guía en Español */}
            <div className="rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] p-3.5 space-y-2">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
                <span className="font-bold text-[var(--accent-primary)] uppercase tracking-wider flex items-center gap-1.5 text-xs">
                  <Languages className="w-3.5 h-3.5" />
                  Fonética & Dicción Táctica
                </span>
                <span className="text-[10px] font-mono text-[var(--accent-primary)] bg-[var(--surface-base)] px-2 py-0.5 rounded-full border border-[var(--border-subtle)] font-bold">
                  {intro.phonetics.targetSound}
                </span>
              </div>

              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                {intro.phonetics.articulatoryTip}
              </p>

              <div className="p-2 rounded-lg bg-[var(--surface-base)] border border-[var(--border-subtle)]">
                <div className="text-[10px] text-[var(--text-muted)] font-mono mb-1">
                  Pronunciación para hispanohablantes: <span className="text-[var(--accent-primary)] font-bold">/{intro.phonetics.spanishPhonetic}/</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {intro.phonetics.practiceWords.map((pw, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSpeak(pw.word, `pw-${dayNumber}-${idx}`)}
                      className="px-2 py-1 rounded-md bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-primary)] flex items-center space-x-1.5 cursor-pointer transition-colors"
                      title={`"${pw.word}" (${pw.translation}) -> se pronuncia "${pw.spanishPhonetic}"`}
                    >
                      <span>{pw.word}</span>
                      <span className="text-[var(--text-muted)] text-[9px]">[{pw.spanishPhonetic}]</span>
                      <Volume2 className="w-2.5 h-2.5 text-[var(--accent-primary)]" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Frase Útil Militar & Protocolo de Radiotelefonía */}
            <div className="rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] p-3.5 space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5 mb-2">
                  <span className="font-bold text-[var(--accent-primary)] uppercase tracking-wider flex items-center gap-1.5 text-xs">
                    <Radio className="w-3.5 h-3.5" />
                    Frase Útil Militar del Día
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">Voz Operacional</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[var(--surface-base)] border border-[var(--border-subtle)] space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-bold text-xs text-[var(--text-primary)] tracking-wide">
                      "{intro.usefulPhrase.phrase}"
                    </p>
                    <button
                      type="button"
                      onClick={() => handleSpeak(intro.usefulPhrase.phrase, `phrase-${dayNumber}`, true)}
                      className={`p-1.5 rounded-lg border transition-colors shrink-0 ${
                        playingItem === `phrase-${dayNumber}`
                          ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] animate-pulse'
                          : 'bg-[var(--surface-elevated)] text-[var(--accent-primary)] border-[var(--border-subtle)] hover:bg-[var(--border-subtle)]'
                      }`}
                      title="Escuchar frase militar con filtro de radio VHF británico"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-[11px] text-[var(--text-secondary)]">
                    Traducción: <span className="text-[var(--text-primary)] font-medium">{intro.usefulPhrase.translation}</span>
                  </div>

                  <div className="text-[10px] font-mono text-[var(--text-muted)]">
                    Pronunciación: <span className="text-[var(--accent-primary)]">/{intro.usefulPhrase.spanishPhonetic}/</span>
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-[var(--text-muted)] font-mono flex items-center gap-1">
                <Info className="w-3 h-3 text-[var(--accent-primary)] shrink-0" />
                <span>Contexto: {intro.usefulPhrase.tacticalUsage}</span>
              </div>
            </div>

          </div>

        </div>
      )}
    </section>
  );
};
