import React, { useState, useMemo } from 'react';
import {
  GRAMMAR_RULES_DATA,
  GrammarSection,
  GrammarSubtopic,
  GrammarExample
} from '../data/grammarRulesData';
import { VerbTensesTable } from './VerbTensesTable';
import { PersonalPronounsLabView } from './PersonalPronounsLabView';
import { GrammarLab } from './GrammarLab';
import { speakBritishText, stopSpeaking } from '../utils/audio';
import {
  Volume2,
  BookOpen,
  Search,
  Sparkles,
  Layers,
  HelpCircle,
  AlertTriangle,
  FileText,
  Play,
  Square,
  Clock,
  ListOrdered,
  Users,
  Zap
} from 'lucide-react';

interface GrammarRulesLabViewProps {
  audioRate: number;
}

export const GrammarRulesLabView: React.FC<GrammarRulesLabViewProps> = ({ audioRate }) => {
  const [viewMode, setViewMode] = useState<'rules' | 'tenses-table' | 'pronouns' | 'grammar-lab'>('rules');
  const [activeSectionId, setActiveSectionId] = useState<string>('parts-of-speech');
  const [selectedSubtopicId, setSelectedSubtopicId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [playingKey, setPlayingKey] = useState<string | null>(null);

  const currentSection = useMemo(() => {
    return (
      GRAMMAR_RULES_DATA.find((s) => s.id === activeSectionId) ||
      GRAMMAR_RULES_DATA[0]
    );
  }, [activeSectionId]);

  // Filter subtopics based on search and selected subtopic
  const filteredSubtopics = useMemo(() => {
    let list = currentSection.subtopics;

    if (selectedSubtopicId !== 'all') {
      list = list.filter((st) => st.id === selectedSubtopicId);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (st) =>
          st.titleEnglish.toLowerCase().includes(q) ||
          st.titleSpanish.toLowerCase().includes(q) ||
          st.ruleExplanationSpanish.toLowerCase().includes(q) ||
          st.examples.some(
            (ex) =>
              ex.english.toLowerCase().includes(q) ||
              ex.spanish.toLowerCase().includes(q) ||
              ex.spanishPhonetic.toLowerCase().includes(q)
          )
      );
    }

    return list;
  }, [currentSection, selectedSubtopicId, searchQuery]);

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

  const handlePlayAllExamples = (subtopic: GrammarSubtopic) => {
    stopSpeaking();
    const compositeText = subtopic.examples.map((ex) => ex.english).join('. ');
    setPlayingKey(subtopic.id);
    speakBritishText(compositeText, {
      rate: audioRate,
      onEnd: () => setPlayingKey(null)
    });
  };

  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      {/* Top Pedagogical Banner */}
      <div className="p-4 sm:p-5 rounded-xl bg-slate-100 border border-slate-300 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-slate-200 border border-slate-300 flex items-center justify-center text-blue-950 shrink-0 shadow-xs">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="font-stencil font-bold text-base text-blue-950 uppercase tracking-wide">
                Reglas Gramaticales del Idioma Inglés
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 text-blue-950 border border-slate-300 font-bold">
                A1-B2 STANAG
              </span>
            </div>
            <p className="text-xs text-blue-900 mt-1 max-w-2xl leading-relaxed">
              Manual completo de reglas gramaticales con <strong className="text-blue-950 font-bold">traducción integral al español</strong>, <strong className="text-blue-950 font-bold">pronunciación figurada en estilo español</strong> y <strong className="text-blue-950 font-bold">audio de voz nativa</strong> para entrenar el oído y la expresión oral.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-[11px] font-mono text-blue-950 bg-slate-200 px-3 py-1.5 rounded-lg border border-slate-300 self-stretch sm:self-auto justify-center font-bold">
          <Sparkles className="w-3.5 h-3.5 text-blue-900" />
          <span>4 Secciones • 35 Módulos • 12 Tiempos</span>
        </div>
      </div>

      {/* Main View Mode Selector (Rules vs Tenses Table) */}
      <div className="p-1.5 rounded-xl bg-slate-200/90 border border-slate-300 flex items-center space-x-2">
        <button
          type="button"
          onClick={() => setViewMode('rules')}
          className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            viewMode === 'rules'
              ? 'bg-blue-900 border border-blue-950 text-white shadow-sm'
              : 'text-blue-950 hover:text-blue-900 hover:bg-slate-100 border border-transparent'
          }`}
        >
          <ListOrdered className="w-4 h-4" />
          <span>35 Temas & Reglas Gramaticales</span>
        </button>

        <button
          type="button"
          onClick={() => setViewMode('tenses-table')}
          className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            viewMode === 'tenses-table'
              ? 'bg-blue-900 border border-blue-950 text-white shadow-sm'
              : 'text-blue-950 hover:text-blue-900 hover:bg-slate-100 border border-transparent'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Tabla de los 12 Tiempos Verbales</span>
          <span className="px-1.5 py-0.2 rounded text-[9px] bg-slate-100 text-blue-950 border border-slate-300 font-bold">
            Present • Past • Future
          </span>
        </button>

        <button
          type="button"
          onClick={() => setViewMode('pronouns')}
          className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            viewMode === 'pronouns'
              ? 'bg-blue-900 border border-blue-950 text-white shadow-sm'
              : 'text-blue-950 hover:text-blue-900 hover:bg-slate-100 border border-transparent'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Pronombres Personales en Todos los Tiempos</span>
          <span className="px-1.5 py-0.2 rounded text-[9px] bg-slate-100 text-blue-950 border border-slate-300 font-bold">
            Sujeto • Objeto • 12 Tiempos
          </span>
        </button>

        <button
          type="button"
          onClick={() => setViewMode('grammar-lab')}
          className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            viewMode === 'grammar-lab'
              ? 'bg-[#233116] border border-[#507229] text-[#b8df47] shadow-sm'
              : 'text-[#233116] hover:text-[#3b5025] hover:bg-emerald-50 border border-transparent'
          }`}
        >
          <Zap className="w-4 h-4 text-[#507229]" />
          <span>Grammar Lab</span>
          <span className="px-1.5 py-0.2 rounded text-[9px] bg-emerald-100 text-emerald-950 border border-emerald-300 font-bold">
            Práctica Dinámica
          </span>
        </button>
      </div>

      {/* VIEW: GRAMMAR LAB GENERATOR */}
      {viewMode === 'grammar-lab' && (
        <GrammarLab audioRate={audioRate} />
      )}

      {/* VIEW: PERSONAL PRONOUNS LAB */}
      {viewMode === 'pronouns' && (
        <PersonalPronounsLabView audioRate={audioRate} />
      )}

      {/* VIEW 1: VERB TENSES TABLE */}
      {viewMode === 'tenses-table' && (
        <VerbTensesTable audioRate={audioRate} />
      )}

      {/* VIEW 2: 35 RULES AND SUBTOPICS */}
      {viewMode === 'rules' && (
        <>
          {/* 4 Main Section Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
            {GRAMMAR_RULES_DATA.map((sec) => {
              const isSelected = sec.id === activeSectionId;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => {
                    setActiveSectionId(sec.id);
                    setSelectedSubtopicId('all');
                    setSearchQuery('');
                  }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-200 border-2 border-blue-900 text-blue-950 shadow-sm'
                      : 'bg-slate-100 border-slate-300 text-blue-900 hover:bg-slate-200 hover:border-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-200 text-blue-950 border border-slate-300">
                      Parte {sec.sectionNumber}
                    </span>
                    {sec.id === 'parts-of-speech' && <Layers className="w-4 h-4 text-blue-900" />}
                    {sec.id === 'sentence-structure' && <BookOpen className="w-4 h-4 text-blue-900" />}
                    {sec.id === 'punctuation' && <HelpCircle className="w-4 h-4 text-blue-900" />}
                    {sec.id === 'common-errors' && <AlertTriangle className="w-4 h-4 text-amber-700" />}
                  </div>
                  <div className="mt-2">
                    <div className="font-stencil font-bold text-xs sm:text-sm text-blue-950">
                      {sec.titleSpanish}
                    </div>
                    <div className="text-[11px] font-mono text-blue-800 truncate">
                      {sec.titleEnglish}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Section Sub-bar with Subtopic Filter and Search */}
          <div className="p-3 rounded-xl bg-slate-200/90 border border-slate-300 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Subtopics pill selector */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-thin">
              <button
                type="button"
                onClick={() => setSelectedSubtopicId('all')}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono whitespace-nowrap cursor-pointer transition-all ${
                  selectedSubtopicId === 'all'
                    ? 'bg-blue-900 text-white border border-blue-950 font-bold shadow-xs'
                    : 'bg-slate-100 text-blue-950 hover:bg-slate-300 border border-slate-300 font-medium'
                }`}
              >
                Todos ({currentSection.subtopics.length})
              </button>
              {currentSection.subtopics.map((st) => {
                const isSelected = selectedSubtopicId === st.id;
                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setSelectedSubtopicId(st.id)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono whitespace-nowrap cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-blue-900 text-white border border-blue-950 font-bold shadow-xs'
                        : 'bg-slate-100 text-blue-950 hover:bg-slate-300 border border-slate-300 font-medium'
                    }`}
                  >
                    {st.number} {st.titleSpanish}
                  </button>
                );
              })}
            </div>

            {/* Search input */}
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 text-blue-900 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar regla, palabra o ejemplo..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs text-blue-950 placeholder-slate-400 focus:outline-none focus:border-blue-700"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-blue-900 hover:text-blue-950"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Subtopics Listing */}
          <div className="space-y-4">
            {filteredSubtopics.length === 0 ? (
              <div className="p-8 text-center rounded-xl bg-slate-100 border border-slate-300 text-blue-900">
                <p className="font-mono text-sm">No se encontraron reglas para "{searchQuery}".</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedSubtopicId('all');
                  }}
                  className="mt-3 px-3 py-1.5 rounded-lg bg-blue-900 text-white border border-blue-950 text-xs font-mono cursor-pointer hover:bg-blue-950 font-bold"
                >
                  Restablecer filtros
                </button>
              </div>
            ) : (
              filteredSubtopics.map((subtopic) => {
                const isPlayingSubtopic = playingKey === subtopic.id;

                return (
                  <div
                    key={subtopic.id}
                    className="p-4 sm:p-5 rounded-xl bg-slate-100 border border-slate-300 shadow-xs space-y-4 hover:border-slate-400 transition-colors"
                  >
                    {/* Subtopic Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-slate-200 pb-3">
                      <div className="flex items-start sm:items-center space-x-3">
                        <span className="w-9 h-9 rounded-lg bg-slate-200 border border-slate-300 flex items-center justify-center font-mono font-bold text-sm text-blue-950 shrink-0">
                          {subtopic.number}
                        </span>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-stencil font-bold text-base text-blue-950">
                              {subtopic.titleSpanish}
                            </h3>
                            <span className="text-xs font-mono text-blue-800 font-semibold">
                              ({subtopic.titleEnglish})
                            </span>
                          </div>
                          <p className="text-xs text-blue-900 mt-0.5">
                            {subtopic.ruleExplanationSpanish}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 self-start sm:self-auto shrink-0">
                        {/* Play all examples in subtopic */}
                        <button
                          type="button"
                          onClick={() => handlePlayAllExamples(subtopic)}
                          className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center space-x-1.5 cursor-pointer transition-all ${
                            isPlayingSubtopic
                              ? 'bg-blue-900 border-blue-950 text-white animate-pulse'
                              : 'bg-slate-200 hover:bg-slate-300 border-slate-300 text-blue-950 font-semibold'
                          }`}
                          title="Escuchar todos los ejemplos seguidos"
                        >
                          {isPlayingSubtopic ? (
                            <>
                              <Square className="w-3.5 h-3.5 text-white fill-white" />
                              <span>Detener</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3.5 h-3.5 text-blue-950 fill-blue-950" />
                              <span>Escuchar todo ({subtopic.examples.length})</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Subtopic Examples Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {subtopic.examples.map((ex, exIdx) => {
                        const exKey = `${subtopic.id}-ex-${exIdx}`;
                        const isPlayingThis = playingKey === exKey;

                        return (
                          <div
                            key={exKey}
                            className={`p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                              isPlayingThis
                                ? 'bg-blue-50/70 border-2 border-blue-700 shadow-sm'
                                : 'bg-white border-slate-300 hover:border-slate-400'
                            }`}
                          >
                            {/* Upper row: English text + Speaker button */}
                            <div className="flex items-start justify-between gap-2">
                              <div className="font-stencil font-bold text-sm sm:text-base text-blue-950 tracking-wide">
                                {ex.english}
                              </div>

                              <button
                                type="button"
                                onClick={() => handlePlayAudio(exKey, ex.english)}
                                className={`p-2 rounded-lg border transition-all cursor-pointer shrink-0 ${
                                  isPlayingThis
                                    ? 'bg-blue-900 border-blue-950 text-white animate-pulse'
                                    : 'bg-slate-100 hover:bg-slate-200 text-blue-950 border-slate-300'
                                }`}
                                title="Escuchar pronunciación nativa"
                              >
                                <Volume2 className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Pronunciación en estilo español */}
                            <div className="mt-2.5 p-2 rounded-lg bg-slate-100 border border-slate-200 flex items-center space-x-2">
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 text-blue-950 font-bold shrink-0">
                                Pronunciación:
                              </span>
                              <span className="font-mono text-xs sm:text-sm text-blue-950 font-semibold tracking-wide">
                                "{ex.spanishPhonetic}"
                              </span>
                            </div>

                            {/* Traducción al español */}
                            <div className="mt-2 text-xs text-blue-900">
                              <strong className="text-blue-950 font-medium">Traducción: </strong>
                              {ex.spanish}
                            </div>

                            {/* Context / Rule Note if available */}
                            {ex.contextNote && (
                              <div className="mt-2 pt-2 border-t border-slate-200 text-[11px] font-mono text-blue-800">
                                💡 {ex.contextNote}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </>
      )}

      {/* Footer Info Box */}
      <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 text-center space-y-1">
        <p className="text-xs text-blue-950 font-mono font-medium">
          Basado en la guía oficial de referencia <strong className="text-blue-950 font-bold">English Grammar Rules</strong> y los 12 tiempos verbales de la lengua inglesa.
        </p>
        <p className="text-[11px] text-blue-800">
          Alineado con los requerimientos de la prueba escrita STANAG 6001 del Instituto de Enseñanza Superior del Ejército (IESE).
        </p>
      </div>
    </div>
  );
};
