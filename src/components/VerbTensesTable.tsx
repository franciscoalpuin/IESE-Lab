import React, { useState } from 'react';
import {
  VERB_TENSES_TABLE_DATA,
  VerbTenseItem,
  VerbTenseExample
} from '../data/grammarRulesData';
import { speakBritishText, stopSpeaking } from '../utils/audio';
import {
  Volume2,
  Play,
  Square,
  Clock,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  XCircle,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface VerbTensesTableProps {
  audioRate: number;
}

export const VerbTensesTable: React.FC<VerbTensesTableProps> = ({ audioRate }) => {
  const [periodFilter, setPeriodFilter] = useState<'all' | 'present' | 'past' | 'future'>('all');
  const [playingKey, setPlayingKey] = useState<string | null>(null);
  const [expandedTenses, setExpandedTenses] = useState<Record<string, boolean>>({
    'present-simple': true,
    'past-simple': true,
    'future-simple': true
  });

  const filteredTenses = VERB_TENSES_TABLE_DATA.filter((item) => {
    if (periodFilter === 'all') return true;
    return item.period === periodFilter;
  });

  const toggleExpand = (id: string) => {
    setExpandedTenses((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    VERB_TENSES_TABLE_DATA.forEach((t) => {
      allExpanded[t.id] = true;
    });
    setExpandedTenses(allExpanded);
  };

  const collapseAll = () => {
    setExpandedTenses({});
  };

  const handlePlayAudio = (key: string, text: string) => {
    stopSpeaking();
    if (playingKey === key) {
      setPlayingKey(null);
      return;
    }
    setPlayingKey(key);
    speakBritishText(text, {
      rate: audioRate,
      onEnd: () => setPlayingKey(null)
    });
  };

  const handlePlayAllInTense = (tense: VerbTenseItem) => {
    stopSpeaking();
    const compositeText = tense.examples.map((ex) => ex.english).join('. ');
    setPlayingKey(tense.id);
    speakBritishText(compositeText, {
      rate: audioRate,
      onEnd: () => setPlayingKey(null)
    });
  };

  const getPeriodBadge = (period: string) => {
    switch (period) {
      case 'present':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-100 text-blue-950 border border-blue-300">
            Presente
          </span>
        );
      case 'past':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-950 border border-amber-300">
            Pasado
          </span>
        );
      case 'future':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-950 border border-emerald-300">
            Futuro
          </span>
        );
      default:
        return null;
    }
  };

  const getExampleIcon = (type: string) => {
    switch (type) {
      case 'affirmative':
        return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />;
      case 'negative':
        return <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />;
      case 'question':
        return <HelpCircle className="w-3.5 h-3.5 text-blue-700 shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {/* Table Header & Controls Banner */}
      <div className="p-4 sm:p-5 rounded-xl bg-slate-100 border border-slate-300 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-slate-200 border border-slate-300 flex items-center justify-center text-blue-950 shrink-0 shadow-xs">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-stencil font-bold text-base text-blue-950 uppercase tracking-wide">
                Tabla Maestra: Los 12 Tiempos Verbales
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 text-blue-950 border border-slate-300 font-bold">
                12 Estructuras
              </span>
            </div>
            <p className="text-xs text-blue-900 mt-0.5">
              Guía completa con fórmulas afirmativas, negativas e interrogativas, ejemplos reales, pronunciación estilo español, traducción y audio nativo.
            </p>
          </div>
        </div>

        {/* Global Expand/Collapse Buttons */}
        <div className="flex items-center space-x-2 self-stretch md:self-auto justify-end">
          <button
            type="button"
            onClick={expandAll}
            className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-blue-950 text-xs font-mono transition-colors cursor-pointer font-medium"
          >
            Expandir todos
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-blue-950 text-xs font-mono transition-colors cursor-pointer font-medium"
          >
            Contraer todos
          </button>
        </div>
      </div>

      {/* Period Filter Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-thin">
        <button
          type="button"
          onClick={() => setPeriodFilter('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer whitespace-nowrap ${
            periodFilter === 'all'
              ? 'bg-blue-900 border border-blue-950 text-white font-bold shadow-xs'
              : 'bg-slate-100 hover:bg-slate-200 text-blue-950 border border-slate-300'
          }`}
        >
          Todos los Tiempos (12)
        </button>

        <button
          type="button"
          onClick={() => setPeriodFilter('present')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer whitespace-nowrap ${
            periodFilter === 'present'
              ? 'bg-blue-900 border border-blue-950 text-white font-bold shadow-xs'
              : 'bg-slate-100 hover:bg-slate-200 text-blue-950 border border-slate-300'
          }`}
        >
          Presente (4)
        </button>

        <button
          type="button"
          onClick={() => setPeriodFilter('past')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer whitespace-nowrap ${
            periodFilter === 'past'
              ? 'bg-blue-900 border border-blue-950 text-white font-bold shadow-xs'
              : 'bg-slate-100 hover:bg-slate-200 text-blue-950 border border-slate-300'
          }`}
        >
          Pasado (4)
        </button>

        <button
          type="button"
          onClick={() => setPeriodFilter('future')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer whitespace-nowrap ${
            periodFilter === 'future'
              ? 'bg-blue-900 border border-blue-950 text-white font-bold shadow-xs'
              : 'bg-slate-100 hover:bg-slate-200 text-blue-950 border border-slate-300'
          }`}
        >
          Futuro (4)
        </button>
      </div>

      {/* Main Interactive Table / Cards List */}
      <div className="space-y-3">
        {filteredTenses.map((tense) => {
          const isExpanded = !!expandedTenses[tense.id];
          const isPlayingAll = playingKey === tense.id;

          return (
            <div
              key={tense.id}
              className="rounded-xl bg-slate-100 border border-slate-300 shadow-xs overflow-hidden transition-colors hover:border-slate-400"
            >
              {/* Row Header / Click to Expand */}
              <div
                onClick={() => toggleExpand(tense.id)}
                className="p-3.5 sm:p-4 bg-slate-100 hover:bg-slate-200/80 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 transition-colors"
              >
                <div className="flex items-start sm:items-center space-x-3">
                  <span className="w-8 h-8 rounded-lg bg-slate-200 border border-slate-300 flex items-center justify-center font-mono font-bold text-xs text-blue-950 shrink-0">
                    {tense.number}
                  </span>
                  <div>
                    <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                      <span className="font-stencil font-bold text-sm sm:text-base text-blue-950">
                        {tense.nameEnglish}
                      </span>
                      <span className="text-xs text-blue-800 font-mono font-semibold">
                        ({tense.nameSpanish})
                      </span>
                      {getPeriodBadge(tense.period)}
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-200 text-blue-950 border border-slate-300 font-medium">
                        {tense.aspectLabel}
                      </span>
                    </div>
                    <p className="text-xs text-blue-900 mt-1">
                      {tense.useExplanation}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-end sm:self-center shrink-0">
                  {/* Play all audio in this tense */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayAllInTense(tense);
                    }}
                    className={`px-2.5 py-1.5 rounded-lg border text-xs font-mono flex items-center space-x-1.5 cursor-pointer transition-colors ${
                      isPlayingAll
                        ? 'bg-blue-900 border-blue-950 text-white animate-pulse'
                        : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-blue-950 font-medium'
                    }`}
                    title="Escuchar los 3 ejemplos del tiempo"
                  >
                    {isPlayingAll ? (
                      <>
                        <Square className="w-3.5 h-3.5 text-white fill-white" />
                        <span>Detener</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 text-blue-950 fill-blue-950" />
                        <span>Escuchar 3 ejemplos</span>
                      </>
                    )}
                  </button>

                  <div className="text-blue-950 p-1">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-blue-950" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-950" />
                    )}
                  </div>
                </div>
              </div>

              {/* Collapsible Details Body */}
              {isExpanded && (
                <div className="p-4 space-y-4 bg-slate-200/50">
                  {/* Formula Box */}
                  <div className="p-3 rounded-lg bg-white border border-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-[11px] font-mono font-bold text-blue-950 uppercase tracking-wider">
                        Estructura:
                      </span>
                      <span className="font-mono text-xs sm:text-sm text-blue-950 font-bold">
                        {tense.formula}
                      </span>
                    </div>

                    {/* Signal Words */}
                    <div className="flex items-center space-x-1 flex-wrap gap-1">
                      <span className="text-[10px] font-mono text-blue-800 mr-1 font-semibold">
                        Palabras clave:
                      </span>
                      {tense.signalWords.map((sw, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 text-blue-950 border border-slate-300 font-semibold"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 3 Exemplary Sentences: Affirmative, Negative, Question */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {tense.examples.map((ex, exIdx) => {
                      const exKey = `${tense.id}-ex-${exIdx}`;
                      const isPlayingThis = playingKey === exKey;

                      return (
                        <div
                          key={exKey}
                          className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all ${
                            isPlayingThis
                              ? 'bg-blue-50/70 border-2 border-blue-700 shadow-sm'
                              : 'bg-white border-slate-300 hover:border-slate-400'
                          }`}
                        >
                          <div>
                            {/* Type badge + Audio button */}
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-1.5">
                                {getExampleIcon(ex.type)}
                                <span className="text-[11px] font-mono font-bold text-blue-950 uppercase">
                                  {ex.typeLabel}
                                </span>
                              </div>

                              <button
                                type="button"
                                onClick={() => handlePlayAudio(exKey, ex.english)}
                                className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                                  isPlayingThis
                                    ? 'bg-blue-900 border-blue-950 text-white animate-pulse'
                                    : 'bg-slate-100 hover:bg-slate-200 text-blue-950 border-slate-300'
                                }`}
                                title="Escuchar pronunciación nativa"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            {/* English Sentence */}
                            <div className="font-stencil font-bold text-sm text-blue-950 leading-snug">
                              {ex.english}
                            </div>

                            {/* Spanish Phonetic Pronunciation */}
                            <div className="mt-2 p-1.5 rounded bg-slate-100 border border-slate-200 text-blue-950 font-mono text-xs">
                              <span className="text-[10px] text-blue-800 block font-semibold">Pronunciación:</span>
                              "{ex.spanishPhonetic}"
                            </div>

                            {/* Spanish Translation */}
                            <div className="mt-2 text-xs text-blue-900">
                              <strong className="text-blue-950 font-medium">Traducción: </strong>
                              {ex.spanish}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
