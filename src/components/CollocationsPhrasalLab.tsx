import React, { useState } from 'react';
import { CollocationExerciseItem, CollocationMatchPair } from '../types';
import { MILITARY_COLLOCATIONS_DATA } from '../data/collocationsData';
import { soundEffects } from '../utils/audio';
import { Bookmark, CheckCircle, XCircle, RotateCcw, Link2, Sparkles, BookOpen, Layers, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CollocationsPhrasalLabProps {
  levelNumber: number;
  onRecordScore?: (id: string, score: number) => void;
}

export const CollocationsPhrasalLab: React.FC<CollocationsPhrasalLabProps> = ({
  levelNumber,
  onRecordScore
}) => {
  const currentLevelData = MILITARY_COLLOCATIONS_DATA.find(c => c.levelNumber === levelNumber) || MILITARY_COLLOCATIONS_DATA[0];
  const [activeTab, setActiveTab] = useState<'matching' | 'gap_fill' | 'glossary'>('matching');

  // Matching state
  const [selectedVerb, setSelectedVerb] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]); // pair ids
  const [wrongMatch, setWrongMatch] = useState<boolean>(false);

  // Gap-fill state
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, boolean>>({});

  if (!currentLevelData) {
    return (
      <div className="bg-[#141d0e] border border-[#2e401d] rounded-2xl p-6 text-center text-[#9eb288]">
        No hay datos de colocaciones para este nivel.
      </div>
    );
  }

  // Handle clicking a verb in matching
  const handleSelectVerb = (verbId: string) => {
    if (matchedPairs.includes(verbId)) return;
    setSelectedVerb(verbId);
    setWrongMatch(false);
  };

  // Handle clicking a collocate in matching
  const handleSelectCollocate = (collocatePairId: string) => {
    if (!selectedVerb) return;

    if (selectedVerb === collocatePairId) {
      // Success match
      const updated = [...matchedPairs, collocatePairId];
      setMatchedPairs(updated);
      setSelectedVerb(null);
      setWrongMatch(false);
      soundEffects.playSuccessChime();

      if (updated.length === currentLevelData.pairs.length) {
        try {
          confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
        } catch {
          // Ignored
        }
        if (onRecordScore) {
          onRecordScore(`colloc-match-l${levelNumber}`, 100);
        }
      }
    } else {
      setWrongMatch(true);
      setTimeout(() => {
        setWrongMatch(false);
        setSelectedVerb(null);
      }, 900);
    }
  };

  const handleResetMatching = () => {
    setSelectedVerb(null);
    setMatchedPairs([]);
    setWrongMatch(false);
  };

  // Gap fill answers
  const handleSelectOption = (questionId: string, opt: string) => {
    if (submittedAnswers[questionId]) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: opt }));
  };

  const handleCheckGapFill = (questionId: string, correctCollocate: string) => {
    const selected = userAnswers[questionId];
    if (!selected) return;

    setSubmittedAnswers(prev => ({ ...prev, [questionId]: true }));
    const isCorrect = selected.trim().toLowerCase() === correctCollocate.trim().toLowerCase();

    if (isCorrect) {
      soundEffects.playSuccessChime();
    }
    if (onRecordScore) {
      onRecordScore(`colloc-gf-${questionId}`, isCorrect ? 100 : 0);
    }
  };

  const handleResetGapFill = (questionId: string) => {
    setSubmittedAnswers(prev => ({ ...prev, [questionId]: false }));
    setUserAnswers(prev => {
      const copy = { ...prev };
      delete copy[questionId];
      return copy;
    });
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#141d0e] via-[#1a2612] to-[#141d0e] border border-[#3b4e28] rounded-2xl p-5 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="bg-[#b8df47] text-[#11170b] text-[10px] font-bold font-stencil px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Colocaciones Castrenses • Nivel {levelNumber}
              </span>
              <span className="text-xs font-mono text-[#8fa577]">
                Collocations & Phrasal Verbs Lab (EnglishClub)
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold font-stencil text-white tracking-wide uppercase mt-1">
              Laboratorio de Colocaciones Militares y Phrasal Verbs
            </h2>
            <p className="text-xs text-[#a8bc94] mt-1 max-w-2xl">
              Las colocaciones fijas (ej. <em>maintain radio silence</em>, <em>lay down suppressive fire</em>, <em>stand at attention</em>) son evaluadas con máxima prioridad en exámenes STANAG 6001.
            </p>
          </div>

          <div className="bg-[#0e1509] border border-[#2c3d1b] rounded-xl px-4 py-2 text-right">
            <span className="text-[10px] font-mono text-[#788e63] uppercase block">Pares Completados</span>
            <span className="text-xs font-mono font-bold text-[#b8df47]">
              {matchedPairs.length} / {currentLevelData.pairs.length}
            </span>
          </div>
        </div>
      </div>

      {/* Internal Sub-tabs */}
      <div className="flex space-x-2 border-b border-[#2e3e1d] pb-2">
        <button
          onClick={() => setActiveTab('matching')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold font-tactical transition-all cursor-pointer ${
            activeTab === 'matching'
              ? 'bg-[#293d18] text-[#b8df47] border border-[#7ea830] shadow'
              : 'bg-[#141c0e] text-[#9eb288] border border-[#2e3e1d] hover:bg-[#1b2512]'
          }`}
        >
          <Link2 className="w-4 h-4" />
          <span>1. Emparejamiento Táctico (Matching)</span>
        </button>

        <button
          onClick={() => setActiveTab('gap_fill')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold font-tactical transition-all cursor-pointer ${
            activeTab === 'gap_fill'
              ? 'bg-[#293d18] text-[#b8df47] border border-[#7ea830] shadow'
              : 'bg-[#141c0e] text-[#9eb288] border border-[#2e3e1d] hover:bg-[#1b2512]'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>2. Inserción en SITREPs (Gap-Fill)</span>
        </button>

        <button
          onClick={() => setActiveTab('glossary')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold font-tactical transition-all cursor-pointer ${
            activeTab === 'glossary'
              ? 'bg-[#293d18] text-[#b8df47] border border-[#7ea830] shadow'
              : 'bg-[#141c0e] text-[#9eb288] border border-[#2e3e1d] hover:bg-[#1b2512]'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>3. Glosario Doctrinal de Colocaciones</span>
        </button>
      </div>

      {/* 1. MATCHING TAB */}
      {activeTab === 'matching' && (
        <div className="bg-[#141d0e]/95 border border-[#3b4e28] rounded-2xl p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-[#314320] pb-3">
            <div>
              <h3 className="text-sm font-bold font-stencil text-white tracking-wide uppercase">
                {currentLevelData.title}
              </h3>
              <p className="text-xs text-[#a8bc94] mt-0.5">
                Paso 1: Haz clic en un <strong>verbo o phrasal verb militar</strong> en la columna izquierda.
                Paso 2: Haz clic en su <strong>complemento táctico reglamentario</strong> en la columna derecha.
              </p>
            </div>

            <button
              onClick={handleResetMatching}
              className="px-3 py-1.5 rounded-lg bg-[#1a2512] hover:bg-[#253617] text-[#9eb288] text-xs font-mono flex items-center space-x-1.5 transition-colors cursor-pointer border border-[#2e3e1d]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Verbs Column */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase text-[#b8df47] font-bold block">
                Columna A • Verbos / Phrasal Verbs:
              </span>
              <div className="space-y-2">
                {currentLevelData.pairs.map((pair) => {
                  const isMatched = matchedPairs.includes(pair.id);
                  const isSelected = selectedVerb === pair.id;

                  let style = 'bg-[#182310] text-[#cce0b8] border-[#2e401d] hover:bg-[#202d15]';
                  if (isMatched) {
                    style = 'bg-[#132612] text-[#6ee7b7] border-[#10b981] opacity-70';
                  } else if (isSelected) {
                    style = wrongMatch
                      ? 'bg-[#3b1717] text-[#fca5a5] border-[#ef4444]'
                      : 'bg-[#293d18] text-[#b8df47] border-[#7ea830] ring-1 ring-[#7ea830]/40';
                  }

                  return (
                    <button
                      key={`verb-${pair.id}`}
                      disabled={isMatched}
                      onClick={() => handleSelectVerb(pair.id)}
                      className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm font-mono font-bold transition-all flex items-center justify-between cursor-pointer ${style}`}
                    >
                      <span>{pair.verb}</span>
                      {isMatched && <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Collocates Column (shuffled order for challenge) */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase text-[#b8df47] font-bold block">
                Columna B • Complementos Tácticos:
              </span>
              <div className="space-y-2">
                {[...currentLevelData.pairs]
                  .sort((a, b) => a.collocate.localeCompare(b.collocate))
                  .map((pair) => {
                    const isMatched = matchedPairs.includes(pair.id);

                    let style = 'bg-[#182310] text-[#cce0b8] border-[#2e401d] hover:bg-[#202d15]';
                    if (isMatched) {
                      style = 'bg-[#132612] text-[#6ee7b7] border-[#10b981] opacity-70';
                    }

                    return (
                      <button
                        key={`collocate-${pair.id}`}
                        disabled={isMatched || !selectedVerb}
                        onClick={() => handleSelectCollocate(pair.id)}
                        className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm font-mono font-medium transition-all flex items-center justify-between cursor-pointer ${style} ${
                          !selectedVerb && !isMatched ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        <span>... {pair.collocate}</span>
                        {isMatched && <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* Matched Pairs Explanation Panel */}
          {matchedPairs.length > 0 && (
            <div className="mt-6 pt-5 border-t border-[#2a3a19] space-y-3 animate-in fade-in duration-200">
              <span className="text-[11px] font-mono text-[#b8df47] uppercase font-bold block">
                Colocaciones Dominadas y Empleo Operacional:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchedPairs.map((pId) => {
                  const pair = currentLevelData.pairs.find(p => p.id === pId);
                  if (!pair) return null;

                  return (
                    <div key={pId} className="p-3.5 rounded-xl bg-[#0c1208] border border-[#2b3a1a] text-xs">
                      <div className="font-bold text-[#b8df47] font-mono mb-1">
                        {pair.verb} {pair.collocate}
                      </div>
                      <div className="text-[11px] text-[#a8bc94] italic mb-1.5">
                        Equivalencia castrense: {pair.spanish}
                      </div>
                      <div className="text-[11px] text-white">
                        {pair.militaryUsage}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 2. GAP-FILL TAB */}
      {activeTab === 'gap_fill' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {currentLevelData.gapFillQuestions.map((q, idx) => {
              const isChecked = submittedAnswers[q.id];
              const selected = userAnswers[q.id];
              const isCorrect = selected?.trim().toLowerCase() === q.correctCollocate.trim().toLowerCase();

              return (
                <div
                  key={q.id}
                  className="bg-[#141d0e]/95 border border-[#3b4e28] rounded-2xl p-5 shadow-lg backdrop-blur-sm flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-[#314320] pb-2 mb-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#b8df47] font-bold">
                        Situación Operacional #{idx + 1}
                      </span>
                      <span className="text-xs font-mono text-[#8fa577]">
                        Nivel {levelNumber}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0c1208] border border-[#2b3a1a] text-xs sm:text-sm font-mono text-[#d4e5be] leading-relaxed mb-4">
                      {q.sentenceWithBlank}
                    </div>

                    {/* Options list */}
                    <div className="space-y-2">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = selected === opt;
                        let optStyle = 'bg-[#182310] text-[#c0d4ad] border-[#2e401d] hover:bg-[#202d15]';

                        if (isSelected && !isChecked) {
                          optStyle = 'bg-[#2b3d19] text-[#b8df47] border-[#7ea830] ring-1 ring-[#7ea830]/40';
                        } else if (isChecked) {
                          if (opt.toLowerCase() === q.correctCollocate.toLowerCase()) {
                            optStyle = 'bg-[#1b3d16] text-[#6ee7b7] border-[#10b981] font-semibold';
                          } else if (isSelected && !isCorrect) {
                            optStyle = 'bg-[#3b1717] text-[#fca5a5] border-[#ef4444]';
                          } else {
                            optStyle = 'bg-[#131b0e] text-[#6b7c5b] border-[#222e16] opacity-60';
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            disabled={isChecked}
                            onClick={() => handleSelectOption(q.id, opt)}
                            className={`w-full text-left p-2.5 rounded-lg border text-xs font-mono transition-all flex items-center justify-between cursor-pointer ${optStyle}`}
                          >
                            <span>{opt}</span>
                            {isChecked && opt.toLowerCase() === q.correctCollocate.toLowerCase() && (
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            )}
                            {isChecked && isSelected && !isCorrect && (
                              <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {isChecked && (
                      <div className={`mt-3 p-3 rounded-lg text-xs leading-relaxed border animate-in fade-in duration-200 ${
                        isCorrect ? 'bg-[#132612] text-[#a7f3d0] border-[#10b981]/30' : 'bg-[#291414] text-[#fecaca] border-[#ef4444]/30'
                      }`}>
                        <div className="font-bold flex items-center space-x-1.5 mb-1">
                          {isCorrect ? <CheckCircle className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          <span>{isCorrect ? '¡Colocación Correcta!' : 'Colocación Incorrecta'}</span>
                        </div>
                        <div>{q.explanation}</div>
                      </div>
                    )}
                  </div>

                  {/* Action */}
                  <div className="pt-3 border-t border-[#2e401d]">
                    {!isChecked ? (
                      <button
                        onClick={() => handleCheckGapFill(q.id, q.correctCollocate)}
                        disabled={!selected}
                        className="w-full py-2 rounded-xl bg-[#688a28] hover:bg-[#7da72f] disabled:opacity-40 disabled:cursor-not-allowed text-[#0f150a] font-bold text-xs font-tactical shadow-md transition-all cursor-pointer"
                      >
                        Verificar Colocación
                      </button>
                    ) : (
                      <button
                        onClick={() => handleResetGapFill(q.id)}
                        className="w-full py-2 rounded-xl bg-[#233116] hover:bg-[#2c3d1b] text-[#cadbb8] border border-[#445b2b] text-xs font-semibold font-tactical flex items-center justify-center space-x-2 transition-all cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reintentar</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. GLOSSARY TAB */}
      {activeTab === 'glossary' && (
        <div className="bg-[#141d0e]/95 border border-[#3b4e28] rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center space-x-2 border-b border-[#314320] pb-3 mb-4">
            <Bookmark className="w-4 h-4 text-[#b8df47]" />
            <h3 className="text-sm font-bold font-stencil text-white tracking-wide uppercase">
              Repertorio Reglamentario de Colocaciones • Nivel {levelNumber}
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#2e401d] text-[#b8df47] font-mono uppercase text-[11px]">
                  <th className="py-2.5 px-3">Colocación en Inglés</th>
                  <th className="py-2.5 px-3">Equivalencia Castrense</th>
                  <th className="py-2.5 px-3">Contexto y Empleo Doctrinal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#223116] font-mono">
                {currentLevelData.pairs.map((pair, pIdx) => (
                  <tr key={pIdx} className="hover:bg-[#192411] transition-colors">
                    <td className="py-3 px-3 font-bold text-white whitespace-nowrap">
                      {pair.verb} {pair.collocate}
                    </td>
                    <td className="py-3 px-3 text-[#cce0b8]">
                      {pair.spanish}
                    </td>
                    <td className="py-3 px-3 text-[#9eb288] text-[11px]">
                      {pair.militaryUsage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
