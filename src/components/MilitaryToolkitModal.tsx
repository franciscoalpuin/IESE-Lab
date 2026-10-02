import React, { useState } from 'react';
import { NATO_PHONETIC_ALPHABET, MILITARY_RADIO_PROWORDS, MILITARY_RANKS_EQUIVALENCE, BRITISH_MILITARY_TERMS } from '../data/militaryReference';
import { speakBritishText, stopSpeaking } from '../utils/audio';
import { getSpanishPhonetic } from '../utils/spanishPhonetics';
import { X, Volume2, Search, Radio, Shield, BookOpen, Sparkles, Filter } from 'lucide-react';

interface MilitaryToolkitModalProps {
  isOpen: boolean;
  onClose: () => void;
  audioRate: number;
}

export const MilitaryToolkitModal: React.FC<MilitaryToolkitModalProps> = ({
  isOpen,
  onClose,
  audioRate
}) => {
  const [activeTab, setActiveTab] = useState<'nato' | 'ranks' | 'prowords' | 'glossary'>('nato');
  const [spellerInput, setSpellerInput] = useState('IESE');
  const [playingItem, setPlayingItem] = useState<string | null>(null);
  const [rankCategoryFilter, setRankCategoryFilter] = useState<string>('all');

  if (!isOpen) return null;

  const handlePlayAudio = (id: string, text: string, isRadio: boolean = false) => {
    stopSpeaking();
    setPlayingItem(id);
    speakBritishText(text, {
      rate: audioRate,
      isRadio,
      onEnd: () => setPlayingItem(null)
    });
  };

  // Convert input string into NATO phonetic words
  const spelledWords = spellerInput
    .toUpperCase()
    .split('')
    .map(char => {
      const found = NATO_PHONETIC_ALPHABET.find(item => item.letter === char);
      return found ? found.codeWord : char;
    });

  const handlePlaySpelledAudio = () => {
    const textToSpeak = spelledWords.join(', ');
    handlePlayAudio('speller', textToSpeak, true);
  };

  const filteredRanks = rankCategoryFilter === 'all'
    ? MILITARY_RANKS_EQUIVALENCE
    : MILITARY_RANKS_EQUIVALENCE.filter(r => r.category === rankCategoryFilter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs">
      <div className="w-full max-w-4xl h-[90vh] bg-slate-100 border border-slate-300 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 font-tactical">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-300 bg-slate-200/90">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-300 flex items-center justify-center text-blue-950 shadow-2xs">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-stencil font-bold text-blue-950 text-base sm:text-lg tracking-wide">
                Manual de Referencia Militar Británico & OTAN
              </h2>
              <p className="text-xs text-blue-900">
                Herramientas operacionales del IESE para oficiales y suboficiales
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-blue-950 hover:bg-slate-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Subtabs */}
        <div className="flex space-x-1 sm:space-x-2 px-6 py-2.5 bg-slate-200/70 border-b border-slate-300 overflow-x-auto font-tactical">
          <button
            onClick={() => setActiveTab('nato')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'nato' ? 'bg-blue-900 text-white font-stencil shadow-xs' : 'text-blue-950 hover:text-blue-900 hover:bg-slate-300/70'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>Alfabeto Fonético OTAN (A-Z)</span>
          </button>

          <button
            onClick={() => setActiveTab('ranks')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'ranks' ? 'bg-blue-900 text-white font-stencil shadow-xs' : 'text-blue-950 hover:text-blue-900 hover:bg-slate-300/70'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Jerarquías Militares (EA vs UK)</span>
          </button>

          <button
            onClick={() => setActiveTab('prowords')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'prowords' ? 'bg-blue-900 text-white font-stencil shadow-xs' : 'text-blue-950 hover:text-blue-900 hover:bg-slate-300/70'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Prowords de Radio Militar</span>
          </button>

          <button
            onClick={() => setActiveTab('glossary')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'glossary' ? 'bg-blue-900 text-white font-stencil shadow-xs' : 'text-blue-950 hover:text-blue-900 hover:bg-slate-300/70'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Inglés Militar Británico vs EE.UU.</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-slate-100">
          
          {/* TAB 1: NATO PHONETIC ALPHABET */}
          {activeTab === 'nato' && (
            <div className="space-y-6">

              {/* TACTICAL CAMOUFLAGE ALPHABET POSTER */}
              <div className="p-6 rounded-2xl bg-white border border-slate-300 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
                  <div>
                    <h3 className="text-sm sm:text-base font-stencil font-bold text-blue-950 tracking-wider uppercase">
                      Mural Táctico A-Z • NATO Military Camouflage
                    </h3>
                    <p className="text-xs text-blue-900">
                      Haz clic en cualquier letra stencil para escuchar su pronunciación militar británica
                    </p>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-blue-950 border border-slate-300 font-bold">
                    STANAG 6001
                  </span>
                </div>

                {/* 5x5 Grid for A through Y */}
                <div className="grid grid-cols-5 gap-2 sm:gap-4 max-w-lg mx-auto py-2">
                  {NATO_PHONETIC_ALPHABET.slice(0, 25).map((item) => {
                    const isPlaying = playingItem === item.letter;
                    return (
                      <button
                        key={item.letter}
                        onClick={() => handlePlayAudio(item.letter, `${item.letter}. ${item.codeWord}. ${item.exampleSentence}`, true)}
                        className={`group relative p-2 sm:p-3 rounded-xl flex flex-col items-center justify-center transition-all duration-200 border cursor-pointer ${
                          isPlaying
                            ? 'bg-blue-900 text-white border-blue-950 scale-105 shadow-md'
                            : 'bg-slate-100 hover:bg-slate-200 border-slate-300 hover:border-slate-400'
                        }`}
                        title={`${item.letter} - ${item.codeWord} (${item.pronunciation})`}
                      >
                        <span className={`font-stencil text-3xl sm:text-4xl leading-none tracking-normal ${
                          isPlaying ? 'text-white' : 'text-blue-950'
                        }`}>
                          {item.letter}
                        </span>
                        <span className={`text-[10px] sm:text-xs font-mono font-bold mt-1 tracking-wider uppercase ${
                          isPlaying ? 'text-blue-100' : 'text-blue-900 group-hover:text-blue-950'
                        }`}>
                          {item.codeWord}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Row 6: Letter Z */}
                <div className="relative mt-3 pt-2 pb-2 flex items-center justify-center">
                  {(() => {
                    const zItem = NATO_PHONETIC_ALPHABET[25]; // Zulu
                    const isPlaying = playingItem === zItem.letter;
                    return (
                      <button
                        onClick={() => handlePlayAudio(zItem.letter, `${zItem.letter}. ${zItem.codeWord}. ${zItem.exampleSentence}`, true)}
                        className={`relative z-10 px-8 py-2 rounded-xl flex flex-col items-center justify-center transition-all duration-200 border cursor-pointer ${
                          isPlaying
                            ? 'bg-blue-900 text-white border-blue-950 scale-110 shadow-md ring-2 ring-blue-900'
                            : 'bg-slate-100 hover:bg-slate-200 border-slate-300 shadow-sm'
                        }`}
                        title={`${zItem.letter} - ${zItem.codeWord} (${zItem.pronunciation})`}
                      >
                        <span className={`font-stencil text-3xl sm:text-4xl leading-none ${
                          isPlaying ? 'text-white' : 'text-blue-950'
                        }`}>
                          {zItem.letter}
                        </span>
                        <span className={`text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase mt-1 ${
                          isPlaying ? 'text-blue-100' : 'text-blue-950'
                        }`}>
                          {zItem.codeWord}
                        </span>
                      </button>
                    );
                  })()}
                </div>
              </div>
              
              {/* Interactive Spelling Generator */}
              <div className="p-4 rounded-xl bg-slate-200/90 border border-slate-300 space-y-3">
                <h3 className="text-xs font-bold text-blue-950 uppercase tracking-wider font-stencil flex items-center space-x-1.5">
                  <Radio className="w-4 h-4 text-blue-900" />
                  <span>Simulador de Deletreo Táctico OTAN</span>
                </h3>
                <p className="text-xs text-blue-900">
                  Escribe cualquier indicativo, nombre, matrícula o acrónimo para ver su deletreo fonético y escucharlo con modulación militar británica.
                </p>

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={spellerInput}
                    onChange={(e) => setSpellerInput(e.target.value)}
                    maxLength={20}
                    placeholder="Ej: ALVAREZ, SITREP, TANK..."
                    className="px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-blue-950 font-mono text-sm uppercase tracking-wider focus:outline-hidden focus:border-blue-700 font-bold"
                  />
                  <button
                    onClick={handlePlaySpelledAudio}
                    className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-950 text-white font-stencil text-xs transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Transmitir en Alfabeto OTAN</span>
                  </button>
                </div>

                {spelledWords.length > 0 && (
                  <div className="p-3 rounded-lg bg-white border border-slate-300 flex flex-wrap gap-1.5 shadow-2xs">
                    {spelledWords.map((word, idx) => (
                      <span key={idx} className="text-xs font-mono font-bold px-2 py-1 rounded bg-slate-100 text-blue-950 border border-slate-300">
                        {word}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Complete Alphabet Detail List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {NATO_PHONETIC_ALPHABET.map((item) => {
                  const isPlaying = playingItem === item.letter;

                  return (
                    <div
                      key={item.letter}
                      className="p-3 rounded-xl bg-white border border-slate-300 hover:border-slate-400 transition-all flex items-center justify-between shadow-2xs"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-8 h-8 rounded-lg bg-slate-100 text-blue-950 font-stencil font-bold flex items-center justify-center text-sm border border-slate-300">
                          {item.letter}
                        </span>
                        <div>
                          <strong className="text-sm font-bold text-blue-950 font-mono block">
                            {item.codeWord}
                          </strong>
                          <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                            <span className="text-blue-900">
                              {item.pronunciation} • {item.morseCode}
                            </span>
                            {(item.spanishPhonetic || getSpanishPhonetic(item.codeWord)) && (
                              <span className="text-blue-950 bg-slate-100 px-1.5 py-0.2 rounded border border-slate-300 font-sans font-medium" title="Pronunciación en español">
                                Sonido: "{item.spanishPhonetic || getSpanishPhonetic(item.codeWord)}"
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handlePlayAudio(item.letter, `${item.letter}. ${item.codeWord}. ${item.exampleSentence}`, true)}
                        className={`p-2 rounded-lg border transition-all cursor-pointer ${
                          isPlaying
                            ? 'bg-blue-900 text-white border-blue-950 animate-pulse'
                            : 'bg-slate-100 hover:bg-slate-200 text-blue-950 border-slate-300'
                        }`}
                        title="Escuchar pronunciación"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* TAB 2: MILITARY RANKS EQUIVALENCE */}
          {activeTab === 'ranks' && (
            <div className="space-y-4">
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-1.5 pb-2 border-b border-slate-300">
                {['all', 'Oficiales Generales', 'Oficiales Superiores', 'Oficiales Jefes', 'Oficiales Subalternos', 'Suboficiales', 'Tropa'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setRankCategoryFilter(cat)}
                    className={`text-xs px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                      rankCategoryFilter === cat
                        ? 'bg-blue-900 text-white font-semibold'
                        : 'text-blue-950 hover:text-blue-900 bg-slate-200/80 hover:bg-slate-300'
                    }`}
                  >
                    {cat === 'all' ? 'Todas las Jerarquías' : cat}
                  </button>
                ))}
              </div>

              {/* Ranks Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-2xs">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-200/90 border-b border-slate-300 text-blue-950 uppercase font-stencil">
                    <tr>
                      <th className="p-3 font-semibold">Ejército Argentino (EA)</th>
                      <th className="p-3 font-semibold">British Army (UK)</th>
                      <th className="p-3 font-semibold">Código OTAN</th>
                      <th className="p-3 font-semibold">Audio UK</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-blue-950">
                    {filteredRanks.map((r, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-semibold text-blue-950">
                          {r.argentinaRank}
                          <span className="block text-[10px] text-blue-800 font-normal font-tactical">{r.category}</span>
                        </td>
                        <td className="p-3 font-semibold text-blue-950 font-mono">
                          {r.britishArmyRank}
                          <span className="block text-[10px] text-blue-800 font-sans">{r.description}</span>
                        </td>
                        <td className="p-3 font-mono font-bold text-blue-950">
                          {r.natoCode}
                        </td>
                        <td className="p-3">
                          <button
                            onClick={() => handlePlayAudio(`rank-${idx}`, `The British Army rank corresponding to ${r.argentinaRank} is ${r.britishArmyRank}. NATO code: ${r.natoCode}.`)}
                            className="p-1.5 rounded bg-slate-100 hover:bg-slate-200 text-blue-950 border border-slate-300 cursor-pointer"
                            title="Escuchar pronunciación británica"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: PROWORDS */}
          {activeTab === 'prowords' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-200/90 border border-slate-300 text-xs text-blue-950 leading-relaxed">
                <strong className="text-blue-950 font-semibold block mb-1 font-stencil">
                  Regla de Oro en Radio Militar Británica (Voice Procedure):
                </strong>
                Nunca utilices la palabra "Repeat" a menos que estés dando fuego de artillería pidiendo otra andanada de proyectiles; la palabra oficial de procedimiento es <strong>"SAY AGAIN"</strong>. Tampoco digas "Over and out" juntos: se dice <strong>"OVER"</strong> si esperas respuesta, o <strong>"OUT"</strong> si concluyes la transmisión.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {MILITARY_RADIO_PROWORDS.map((pw, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-300 space-y-2 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-stencil font-bold text-sm text-blue-950 px-2 py-0.5 rounded bg-slate-100 border border-slate-300">
                          {pw.word}
                        </span>
                        <span className="text-xs text-blue-900 font-medium">({pw.spanishEquiv})</span>
                        {(pw.spanishPhonetic || getSpanishPhonetic(pw.word)) && (
                          <span className="text-[10px] text-blue-950 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 font-mono" title="Pronunciación aproximada en español">
                            Sonido: "{pw.spanishPhonetic || getSpanishPhonetic(pw.word)}"
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => handlePlayAudio(`pw-${idx}`, `${pw.word}. Example: ${pw.example}`, true)}
                        className="p-1.5 rounded bg-slate-100 hover:bg-slate-200 text-blue-950 border border-slate-300 cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-xs text-blue-950 font-medium">
                      {pw.meaning}
                    </p>

                    <div className="text-[11px] font-mono text-blue-950 bg-slate-100 p-2 rounded border border-slate-200 font-medium">
                      {pw.example}
                    </div>

                    {pw.note && (
                      <p className="text-[10px] text-rose-800 italic font-medium">
                        {pw.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: GLOSSARY UK VS US */}
          {activeTab === 'glossary' && (
            <div className="space-y-4">
              <p className="text-xs text-blue-900">
                El IESE pone especial énfasis en el inglés militar británico reglamentario (British Army). A continuación, los contrastes más frecuentes frente al inglés estadounidense:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {BRITISH_MILITARY_TERMS.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-300 space-y-2 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <div>
                        <strong className="text-sm font-bold text-blue-950 font-mono">
                          {item.britishTerm} (UK)
                        </strong>
                        <span className="text-xs text-blue-900 block font-medium">
                          vs {item.usEquivalent} (US)
                        </span>
                      </div>

                      <button
                        onClick={() => handlePlayAudio(`term-${idx}`, `${item.britishTerm}. ${item.context}`)}
                        className="p-1.5 rounded bg-slate-100 hover:bg-slate-200 text-blue-950 border border-slate-300 cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-xs text-blue-950">
                      <strong>Significado:</strong> {item.spanish}
                    </div>

                    <div className="text-[11px] font-mono text-blue-950 bg-slate-100 p-2 rounded border border-slate-200">
                      "{item.context}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
