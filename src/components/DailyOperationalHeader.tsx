import React, { useState } from 'react';
import { OperationalPracticeData } from '../data/dailyOperationalPracticeData';
import { speakBritishText, stopSpeaking } from '../utils/audio';
import { 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Volume2, 
  BookOpen, 
  Shield, 
  Target, 
  Zap, 
  HelpCircle,
  Headphones,
  PenTool,
  Mic 
} from 'lucide-react';

interface DailyOperationalHeaderProps {
  practice: OperationalPracticeData;
  onSelectDay?: (day: number) => void;
  onOpenDaySelector?: () => void;
  audioRate?: number;
}

export const DailyOperationalHeader: React.FC<DailyOperationalHeaderProps> = ({
  practice,
  audioRate = 0.95
}) => {
  const [isBriefingOpen, setIsBriefingOpen] = useState(false);
  const [playingWord, setPlayingWord] = useState<string | null>(null);

  const handlePlayAudio = (text: string, id: string) => {
    if (playingWord === id) {
      stopSpeaking();
      setPlayingWord(null);
      return;
    }
    setPlayingWord(id);
    speakBritishText(text, {
      rate: audioRate,
      onEnd: () => setPlayingWord(null)
    });
  };

  // Color theme according to phase
  const getPhaseBadgeColor = (phaseNumber: number) => {
    switch (phaseNumber) {
      case 1:
        return 'bg-emerald-950/70 text-emerald-300 border-emerald-700/60';
      case 2:
        return 'bg-sky-950/70 text-sky-300 border-sky-700/60';
      case 3:
        return 'bg-amber-950/70 text-amber-300 border-amber-700/60';
      case 4:
      default:
        return 'bg-red-950/70 text-red-300 border-red-700/60';
    }
  };

  return (
    <div className="bg-[#12190d] border border-[#2e3e1d] rounded-2xl p-4 sm:p-5 shadow-xl space-y-4">
      {/* Top Controls: Day and Phase Indicator */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-3 border-b border-[#233116]">
        {/* Day & Tactical Phase & Difficulty */}
        <div className="flex items-center flex-wrap gap-2">
          {/* Tactical Phase Badge with Day */}
          <span className="neon-orange-expand px-2.5 py-1 rounded-md bg-white text-slate-900 text-[11px] font-mono font-bold uppercase tracking-wider shadow-xs flex items-center space-x-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-700" />
            <span>DÍA {practice.day} • {practice.phaseCodename} (Días {practice.phaseNumber === 1 ? '1-30' : practice.phaseNumber === 2 ? '31-60' : practice.phaseNumber === 3 ? '61-90' : '91-120'})</span>
          </span>

          {/* Progressive Difficulty Indicator */}
          <div className="neon-orange-expand flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-white text-slate-900 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[10px] font-mono font-bold text-slate-600 uppercase">Dificultad:</span>
            <span className="text-xs font-mono font-bold text-slate-900">{practice.difficultyRating}/10</span>
          </div>
        </div>
      </div>

      {/* Main Title & Thematic Focus */}
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#7ea830] uppercase">
            PRÁCTICA OPERACIONAL DEL DÍA • STANAG 6001 NIVEL {practice.levelNumber}
          </span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold font-tactical text-[#f2f7ec] tracking-wide">
          {practice.missionTitle}
        </h2>
        <p className="text-xs sm:text-sm text-[#9eb288] leading-relaxed">
          {practice.objective}
        </p>
      </div>

      {/* Actividades Programadas del Día en las 5 Competencias */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-[#0d1409] border border-[#233116] space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-[#1c2812]">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#ff6a00] inline-block animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-[#b8df47] uppercase">
              ACTIVIDADES PROGRAMADAS DE LA JORNADA OPERACIONAL (5 COMPETENCIAS)
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#7ea830] hidden sm:inline">
            12 MINUTOS POR DESTREZA • 60 MIN TOTAL
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {/* 1. Comprensión Auditiva */}
          <div className="p-3 rounded-lg bg-[#131b0d] border border-[#263517] flex items-start space-x-2.5 transition-all hover:border-[#384c22]">
            <div className="p-2 rounded-md bg-[#1c2913] text-sky-400 shrink-0 mt-0.5">
              <Headphones className="w-4 h-4" />
            </div>
            <div className="space-y-1 min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400">
                  Comprensión Auditiva
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-950/80 text-sky-300 border border-sky-800/40">
                  12 min
                </span>
              </div>
              <div className="text-xs font-bold text-[#f2f7ec] leading-snug">
                {practice.listening.transmissionTitle}
              </div>
              <div className="text-[10px] text-[#9eb288] leading-tight">
                Audio táctico VHF británico, dictado operacional y verificación de escucha STANAG.
              </div>
            </div>
          </div>

          {/* 2. Comprensión Escrita */}
          <div className="p-3 rounded-lg bg-[#131b0d] border border-[#263517] flex items-start space-x-2.5 transition-all hover:border-[#384c22]">
            <div className="p-2 rounded-md bg-[#1c2913] text-emerald-400 shrink-0 mt-0.5">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="space-y-1 min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Comprensión Escrita
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/40">
                  12 min
                </span>
              </div>
              <div className="text-xs font-bold text-[#f2f7ec] leading-snug">
                {practice.reading.title}
              </div>
              <div className="text-[10px] text-[#9eb288] leading-tight">
                Lectura de directiva/SOP oficial ({practice.reading.wordCount} palabras), análisis crítico y glosario.
              </div>
            </div>
          </div>

          {/* 3. Uso de la Lengua */}
          <div className="p-3 rounded-lg bg-[#131b0d] border border-[#263517] flex items-start space-x-2.5 transition-all hover:border-[#384c22]">
            <div className="p-2 rounded-md bg-[#1c2913] text-amber-400 shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="space-y-1 min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
                  Uso de la Lengua
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/40">
                  12 min
                </span>
              </div>
              <div className="text-xs font-bold text-[#f2f7ec] leading-snug">
                {practice.useOfLanguage.grammarTitle}
              </div>
              <div className="text-[10px] text-[#9eb288] leading-tight">
                Fórmula: <span className="text-[#b8df47] font-mono">{practice.pedagogicalBriefing.grammar.formula}</span> • Drills de colocación y reactivos.
              </div>
            </div>
          </div>

          {/* 4. Expresión Escrita */}
          <div className="p-3 rounded-lg bg-[#131b0d] border border-[#263517] flex items-start space-x-2.5 transition-all hover:border-[#384c22]">
            <div className="p-2 rounded-md bg-[#1c2913] text-purple-400 shrink-0 mt-0.5">
              <PenTool className="w-4 h-4" />
            </div>
            <div className="space-y-1 min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400">
                  Expresión Escrita
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/40">
                  12 min
                </span>
              </div>
              <div className="text-xs font-bold text-[#f2f7ec] leading-snug">
                {practice.writing.title}
              </div>
              <div className="text-[10px] text-[#9eb288] leading-tight">
                Redacción doctrinal ({practice.writing.targetWordCount}) con conectores y rúbrica formal OTAN.
              </div>
            </div>
          </div>

          {/* 5. Expresión Oral */}
          <div className="p-3 rounded-lg bg-[#131b0d] border border-[#263517] flex items-start space-x-2.5 md:col-span-2 lg:col-span-1 transition-all hover:border-[#384c22]">
            <div className="p-2 rounded-md bg-[#1c2913] text-rose-400 shrink-0 mt-0.5">
              <Mic className="w-4 h-4" />
            </div>
            <div className="space-y-1 min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-400">
                  Expresión Oral
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-rose-950/80 text-rose-300 border border-rose-800/40">
                  12 min
                </span>
              </div>
              <div className="text-xs font-bold text-[#f2f7ec] leading-snug">
                {practice.speaking.title}
              </div>
              <div className="text-[10px] text-[#9eb288] leading-tight">
                Simulación radial cronometrada ({practice.speaking.recommendedDuration}) y fonética militar británica.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Briefing Collapsible Toggle Button */}
      <div>
        <button
          onClick={() => setIsBriefingOpen(!isBriefingOpen)}
          className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#172110] hover:bg-[#1f2d15] border border-[#2b3a1a] text-xs font-tactical font-semibold text-[#b8df47] transition-all cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-[#7ea830]" />
            <span>
              {isBriefingOpen ? 'Ocultar' : 'Consultar'} Briefing Teórico & Vocabulario Táctico del Día
            </span>
          </div>
          {isBriefingOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* Briefing Content */}
        {isBriefingOpen && (
          <div className="mt-3 p-4 rounded-xl bg-[#0c1208] border border-[#233116] space-y-4 animate-in fade-in duration-200">
            {/* Target Vocabulary */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#7ea830]">
                Vocabulario Operacional Clave con Audio y Fonética:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {practice.pedagogicalBriefing.vocabulary.map((vocab, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#141d0e] border border-[#263517] flex items-start justify-between gap-2"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-xs text-[#e3f4b8]">{vocab.term}</span>
                        <span className="text-[10px] font-mono text-[#7ea830]">{vocab.ipa}</span>
                      </div>
                      <div className="text-[11px] text-[#cadbb8]">{vocab.translation}</div>
                      <div className="text-[10px] font-mono text-[#8ea375]">
                        Fonética en español: <span className="text-[#b8df47]">{vocab.spanishPhonetic}</span>
                      </div>
                      <div className="text-[10px] italic text-[#6f835b] pt-0.5">"{vocab.example}"</div>
                    </div>
                    <button
                      onClick={() => handlePlayAudio(vocab.term, `v-${idx}`)}
                      className="p-1.5 rounded-md bg-[#223115] hover:bg-[#2e421c] text-[#b8df47] transition-all cursor-pointer flex-shrink-0"
                      title="Escuchar pronunciación británica militar"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Grammar Rule & Useful Tactical Phrase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-[#1b2512]">
              {/* Grammar Formula */}
              <div className="p-3 rounded-lg bg-[#141d0e] border border-[#263517] space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7ea830]">
                  Regla Gramatical: {practice.pedagogicalBriefing.grammar.title}
                </span>
                <div className="text-xs font-mono text-[#b8df47] bg-[#0c1208] p-1.5 rounded border border-[#1b2512]">
                  {practice.pedagogicalBriefing.grammar.formula}
                </div>
                <div className="text-[11px] text-[#cadbb8] leading-relaxed">
                  {practice.pedagogicalBriefing.grammar.rule}
                </div>
              </div>

              {/* Useful Phrase */}
              <div className="p-3 rounded-lg bg-[#141d0e] border border-[#263517] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7ea830]">
                    Frase Táctica de Radiotelefonía del Día:
                  </span>
                  <button
                    onClick={() => handlePlayAudio(practice.pedagogicalBriefing.usefulPhrase.phrase, 'phrase-1')}
                    className="p-1 rounded bg-[#223115] hover:bg-[#2e421c] text-[#b8df47] transition-all cursor-pointer"
                    title="Escuchar frase útil"
                  >
                    <Volume2 className="w-3 h-3" />
                  </button>
                </div>
                <div className="text-xs font-bold text-[#f2f7ec]">
                  {practice.pedagogicalBriefing.usefulPhrase.phrase}
                </div>
                <div className="text-[11px] text-[#cadbb8]">
                  {practice.pedagogicalBriefing.usefulPhrase.translation}
                </div>
                <div className="text-[10px] font-mono text-[#8ea375]">
                  Fonética: <span className="text-[#b8df47]">{practice.pedagogicalBriefing.usefulPhrase.spanishPhonetic}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
