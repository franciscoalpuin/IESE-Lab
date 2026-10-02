import React, { useState } from 'react';
import { MinimalPairItem } from '../types';
import { MINIMAL_PAIRS_DATA } from '../data/minimalPairsData';
import { speakSingleBritishWord, speakBritishText, soundEffects } from '../utils/audio';
import { Volume2, Play, CheckCircle, XCircle, Sparkles, HelpCircle, Shield, RotateCcw, AlertTriangle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MinimalPairsEarTrainerProps {
  levelNumber: number;
  audioRate?: number;
  onRecordScore?: (id: string, score: number) => void;
}

export const MinimalPairsEarTrainer: React.FC<MinimalPairsEarTrainerProps> = ({
  levelNumber,
  audioRate = 0.95,
  onRecordScore
}) => {
  const levelPairs = MINIMAL_PAIRS_DATA.filter(p => p.levelNumber === levelNumber);
  const [selectedPairIndex, setSelectedPairIndex] = useState(0);

  // Blind test state
  const [testActive, setTestActive] = useState(false);
  const [targetWord, setTargetWord] = useState<'A' | 'B' | null>(null);
  const [hasPlayedBlindAudio, setHasPlayedBlindAudio] = useState(false);
  const [userSelection, setUserSelection] = useState<'A' | 'B' | null>(null);
  const [testResult, setTestResult] = useState<'correct' | 'incorrect' | null>(null);
  const [stats, setStats] = useState<{ attempts: number; correct: number }>({ attempts: 0, correct: 0 });

  const currentPair = levelPairs[selectedPairIndex] || levelPairs[0];

  if (!currentPair) {
    return (
      <div className="bg-[#141d0e] border border-[#2e401d] rounded-2xl p-6 text-center text-[#9eb288]">
        No hay pares mínimos configurados para este nivel.
      </div>
    );
  }

  const handlePlayWord = (word: string) => {
    speakSingleBritishWord(word);
  };

  const handlePlaySentence = (sentence: string) => {
    speakBritishText(sentence, { rate: 0.92 });
  };

  const startBlindTest = () => {
    // Choose randomly between A and B
    const randomTarget = Math.random() > 0.5 ? 'A' : 'B';
    setTargetWord(randomTarget);
    setUserSelection(null);
    setTestResult(null);
    setTestActive(true);
    setHasPlayedBlindAudio(true);

    const chosenWord = randomTarget === 'A' ? currentPair.wordA : currentPair.wordB;
    // Play blind audio
    speakSingleBritishWord(chosenWord, {
      onEnd: () => {
        // Ready for user choice
      }
    });
  };

  const handleReplayBlindAudio = () => {
    if (!targetWord) return;
    const chosenWord = targetWord === 'A' ? currentPair.wordA : currentPair.wordB;
    speakSingleBritishWord(chosenWord);
  };

  const handleChooseWord = (choice: 'A' | 'B') => {
    if (!testActive || userSelection !== null) return;

    setUserSelection(choice);
    const isCorrect = choice === targetWord;
    const newStats = {
      attempts: stats.attempts + 1,
      correct: stats.correct + (isCorrect ? 1 : 0)
    };
    setStats(newStats);

    if (isCorrect) {
      setTestResult('correct');
      soundEffects.playSuccessChime();
      try {
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
      } catch {
        // Ignored
      }
      if (onRecordScore) {
        onRecordScore(`mp-${currentPair.id}`, 100);
      }
    } else {
      setTestResult('incorrect');
      if (onRecordScore) {
        onRecordScore(`mp-${currentPair.id}`, 0);
      }
    }
  };

  const handleNextPair = () => {
    setTestActive(false);
    setTargetWord(null);
    setUserSelection(null);
    setTestResult(null);
    setSelectedPairIndex((prev) => (prev + 1) % levelPairs.length);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#141d0e] via-[#1a2612] to-[#141d0e] border border-[#3b4e28] rounded-2xl p-5 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="bg-[#b8df47] text-[#11170b] text-[10px] font-bold font-stencil px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Oído Táctico • Nivel {levelNumber}
              </span>
              <span className="text-xs font-mono text-[#8fa577]">
                Discriminación Fonética RP Británica
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold font-stencil text-white tracking-wide uppercase mt-1">
              Entrenador de Pares Mínimos Militares
            </h2>
            <p className="text-xs text-[#a8bc94] mt-1 max-w-2xl">
              Entrena la discriminación acústica de sonidos críticos en transmisiones radiales militares (inspirado en ManyThings & ESL Lab). Escucha la diferencia exacta entre vocales y consonantes que provocan malentendidos operacionales.
            </p>
          </div>

          <div className="flex items-center space-x-3 bg-[#0e1509] border border-[#2c3d1b] rounded-xl px-4 py-2 text-right">
            <div>
              <div className="text-[10px] font-mono text-[#788e63] uppercase">Aciertos Oído</div>
              <div className="text-sm font-mono font-bold text-[#b8df47]">
                {stats.correct} / {stats.attempts}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Level Pairs Selector Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-2 no-scrollbar">
        {levelPairs.map((pair, idx) => (
          <button
            key={pair.id}
            onClick={() => {
              setSelectedPairIndex(idx);
              setTestActive(false);
              setTargetWord(null);
              setUserSelection(null);
              setTestResult(null);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer font-tactical ${
              selectedPairIndex === idx
                ? 'bg-[#293d18] text-[#b8df47] border border-[#7ea830] shadow-md ring-1 ring-[#7ea830]/40'
                : 'bg-[#141c0e] text-[#9eb288] border border-[#2e3e1d] hover:bg-[#1b2512]'
            }`}
          >
            #{idx + 1}: {pair.wordA} / {pair.wordB}
          </button>
        ))}
      </div>

      {/* Main Interactive Comparison Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: The Contrast Cards */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#141d0e]/95 border border-[#3b4e28] rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#314320] pb-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#b8df47] font-bold">
                {currentPair.contrastTitle}
              </span>
              <span className="text-[11px] font-mono text-[#8fa577]">
                Par #{selectedPairIndex + 1} de {levelPairs.length}
              </span>
            </div>

            {/* Side by side comparison cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Word A */}
              <div className="bg-[#0e1509] border border-[#2e401d] rounded-xl p-4 flex flex-col justify-between hover:border-[#688a28] transition-all">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#8fa577] uppercase font-bold">Opción A</span>
                    <button
                      onClick={() => handlePlayWord(currentPair.wordA)}
                      className="p-1.5 rounded-lg bg-[#202d15] text-[#b8df47] hover:bg-[#2b3e1b] transition-colors cursor-pointer"
                      title="Pronunciar en acento británico"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-2xl font-bold font-stencil text-white tracking-wider my-2">
                    {currentPair.wordA}
                  </div>
                  <div className="text-xs font-mono text-[#9cc440] font-semibold mb-2">
                    {currentPair.ipaA}
                  </div>
                  <div className="text-xs text-[#cce0b8] font-tactical">
                    {currentPair.meaningA}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#233116]">
                  <div className="text-[10px] font-mono text-[#788e63] mb-1">En contexto militar:</div>
                  <p className="text-xs italic text-[#a3b890] mb-2 leading-relaxed">
                    "{currentPair.exampleSentenceA}"
                  </p>
                  <button
                    onClick={() => handlePlaySentence(currentPair.exampleSentenceA)}
                    className="w-full py-1.5 rounded-lg bg-[#182310] hover:bg-[#223117] text-[#b8df47] text-[11px] font-mono flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Escuchar Oración Completa</span>
                  </button>
                </div>
              </div>

              {/* Word B */}
              <div className="bg-[#0e1509] border border-[#2e401d] rounded-xl p-4 flex flex-col justify-between hover:border-[#688a28] transition-all">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#8fa577] uppercase font-bold">Opción B</span>
                    <button
                      onClick={() => handlePlayWord(currentPair.wordB)}
                      className="p-1.5 rounded-lg bg-[#202d15] text-[#b8df47] hover:bg-[#2b3e1b] transition-colors cursor-pointer"
                      title="Pronunciar en acento británico"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-2xl font-bold font-stencil text-white tracking-wider my-2">
                    {currentPair.wordB}
                  </div>
                  <div className="text-xs font-mono text-[#9cc440] font-semibold mb-2">
                    {currentPair.ipaB}
                  </div>
                  <div className="text-xs text-[#cce0b8] font-tactical">
                    {currentPair.meaningB}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#233116]">
                  <div className="text-[10px] font-mono text-[#788e63] mb-1">En contexto militar:</div>
                  <p className="text-xs italic text-[#a3b890] mb-2 leading-relaxed">
                    "{currentPair.exampleSentenceB}"
                  </p>
                  <button
                    onClick={() => handlePlaySentence(currentPair.exampleSentenceB)}
                    className="w-full py-1.5 rounded-lg bg-[#182310] hover:bg-[#223117] text-[#b8df47] text-[11px] font-mono flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Escuchar Oración Completa</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Tactical Operational Warning Box */}
            <div className="mt-5 p-4 rounded-xl bg-[#1d140e] border border-[#52321c] text-xs text-[#ebd5c5] leading-relaxed">
              <div className="flex items-center space-x-2 text-[#fb923c] font-bold font-stencil uppercase mb-1">
                <AlertTriangle className="w-4 h-4" />
                <span>Riesgo Operacional en Transmisiones Militares</span>
              </div>
              <p>{currentPair.tacticalNote}</p>
            </div>

            {/* Articulatory Guidance */}
            <div className="mt-3 p-4 rounded-xl bg-[#0c1208] border border-[#2b3a1a] text-xs text-[#b6caa2] leading-relaxed">
              <div className="text-[10px] text-[#b8df47] uppercase font-bold tracking-wider mb-1 flex items-center space-x-1.5">
                <Shield className="w-3.5 h-3.5" />
                <span>Técnica Articulada para Hispanohablantes:</span>
              </div>
              <p>{currentPair.articulatoryTip}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Blind Ear Test (Desafío Auditivo a Ciegas) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#141d0e]/95 border border-[#3b4e28] rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#314320] pb-3 mb-4">
                <h3 className="text-sm font-bold font-stencil text-[#b8df47] tracking-wider uppercase flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Desafío Auditivo a Ciegas</span>
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#253617] text-[#b8df47]">
                  Ear Test
                </span>
              </div>

              <p className="text-xs text-[#a8bc94] mb-4">
                El sistema reproducirá <strong>una de las dos palabras al azar</strong> sin mostrarte cuál es. Agudiza el oído táctico y selecciona la palabra correcta que acabas de percibir.
              </p>

              {!testActive ? (
                <div className="text-center py-6">
                  <button
                    onClick={startBlindTest}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#688a28] hover:bg-[#7da72f] text-[#0f150a] font-bold font-tactical text-sm tracking-wide shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Iniciar Test de Discriminación</span>
                  </button>
                  <p className="text-[11px] font-mono text-[#788e63] mt-2">
                    Acento oficial británico Received Pronunciation (RP)
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Replay Button */}
                  <div className="p-4 rounded-xl bg-[#0c1208] border border-[#2b3a1a] text-center space-y-3">
                    <span className="text-xs font-mono text-[#a8bc94] block">
                      ¿Cuál de las dos palabras escuchaste?
                    </span>
                    <button
                      onClick={handleReplayBlindAudio}
                      className="px-4 py-2 rounded-lg bg-[#202d15] hover:bg-[#2b3e1b] text-[#b8df47] text-xs font-mono font-bold inline-flex items-center space-x-2 transition-colors cursor-pointer border border-[#3b4e28]"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Volver a Escuchar Audio Secreto</span>
                    </button>
                  </div>

                  {/* Two Choices Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      disabled={userSelection !== null}
                      onClick={() => handleChooseWord('A')}
                      className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                        userSelection === null
                          ? 'bg-[#182310] hover:bg-[#223117] border-[#314320] text-white hover:border-[#b8df47]'
                          : userSelection === 'A'
                          ? testResult === 'correct'
                            ? 'bg-[#1b3d16] text-[#6ee7b7] border-[#10b981]'
                            : 'bg-[#3b1717] text-[#fca5a5] border-[#ef4444]'
                          : targetWord === 'A'
                          ? 'bg-[#1b3d16]/70 text-[#6ee7b7] border-[#10b981]'
                          : 'bg-[#12180c] opacity-40 border-[#233116]'
                      }`}
                    >
                      <div className="text-lg font-bold font-stencil">{currentPair.wordA}</div>
                      <div className="text-[11px] font-mono text-[#8fa577]">{currentPair.ipaA}</div>
                    </button>

                    <button
                      disabled={userSelection !== null}
                      onClick={() => handleChooseWord('B')}
                      className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                        userSelection === null
                          ? 'bg-[#182310] hover:bg-[#223117] border-[#314320] text-white hover:border-[#b8df47]'
                          : userSelection === 'B'
                          ? testResult === 'correct'
                            ? 'bg-[#1b3d16] text-[#6ee7b7] border-[#10b981]'
                            : 'bg-[#3b1717] text-[#fca5a5] border-[#ef4444]'
                          : targetWord === 'B'
                          ? 'bg-[#1b3d16]/70 text-[#6ee7b7] border-[#10b981]'
                          : 'bg-[#12180c] opacity-40 border-[#233116]'
                      }`}
                    >
                      <div className="text-lg font-bold font-stencil">{currentPair.wordB}</div>
                      <div className="text-[11px] font-mono text-[#8fa577]">{currentPair.ipaB}</div>
                    </button>
                  </div>

                  {/* Result Feedback Banner */}
                  {userSelection !== null && (
                    <div className={`p-4 rounded-xl border text-xs leading-relaxed animate-in fade-in duration-200 ${
                      testResult === 'correct'
                        ? 'bg-[#132612] text-[#a7f3d0] border-[#10b981]/40'
                        : 'bg-[#291414] text-[#fecaca] border-[#ef4444]/40'
                    }`}>
                      <div className="font-bold flex items-center space-x-2 mb-1">
                        {testResult === 'correct' ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                            <span>¡Excelente discriminación acústica!</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 text-rose-400" />
                            <span>Discriminación incorrecta</span>
                          </>
                        )}
                      </div>
                      <p>
                        La palabra emitida fue <strong>"{targetWord === 'A' ? currentPair.wordA : currentPair.wordB}"</strong> ({targetWord === 'A' ? currentPair.ipaA : currentPair.ipaB}).
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 mt-6 border-t border-[#2a3a19] flex items-center justify-between">
              {testActive && userSelection !== null ? (
                <button
                  onClick={startBlindTest}
                  className="w-full py-2.5 rounded-xl bg-[#293d18] hover:bg-[#344e1e] text-[#b8df47] border border-[#7ea830] text-xs font-semibold font-tactical flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Probar Otra Vez con Este Par</span>
                </button>
              ) : (
                <button
                  onClick={handleNextPair}
                  className="w-full py-2.5 rounded-xl bg-[#202d15] hover:bg-[#28381b] text-[#cadbb8] border border-[#3c5026] text-xs font-semibold font-tactical flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <span>Siguiente Par Mínimo →</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
