import React, { useState } from 'react';
import { SentenceScrambleItem } from '../types';
import { SENTENCE_SCRAMBLER_DATA } from '../data/sentenceScramblerData';
import { speakBritishText, soundEffects } from '../utils/audio';
import { Puzzle, CheckCircle, XCircle, RotateCcw, Volume2, Sparkles, HelpCircle, ArrowRight, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';

interface TacticalSentenceScramblerProps {
  levelNumber: number;
  onRecordScore?: (id: string, score: number) => void;
}

export const TacticalSentenceScrambler: React.FC<TacticalSentenceScramblerProps> = ({
  levelNumber,
  onRecordScore
}) => {
  const levelSentences = SENTENCE_SCRAMBLER_DATA.filter(s => s.levelNumber === levelNumber);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const currentScramble = levelSentences[selectedIdx] || levelSentences[0];

  // Construction state
  const [placedTokens, setPlacedTokens] = useState<string[]>([]);
  const [availableTokens, setAvailableTokens] = useState<string[]>(() => {
    return currentScramble ? [...currentScramble.scrambledTokens] : [];
  });
  const [isEvaluated, setIsEvaluated] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  if (!currentScramble) {
    return (
      <div className="bg-[#141d0e] border border-[#2e401d] rounded-2xl p-6 text-center text-[#9eb288]">
        No hay ejercicios de sintaxis militar configurados para este nivel.
      </div>
    );
  }

  const handleSelectExercise = (idx: number) => {
    setSelectedIdx(idx);
    const ex = levelSentences[idx];
    setPlacedTokens([]);
    setAvailableTokens(ex ? [...ex.scrambledTokens] : []);
    setIsEvaluated(false);
    setIsCorrect(false);
  };

  const handlePlaceToken = (token: string, tokenIndex: number) => {
    if (isEvaluated) return;
    setPlacedTokens([...placedTokens, token]);
    const updated = [...availableTokens];
    updated.splice(tokenIndex, 1);
    setAvailableTokens(updated);
  };

  const handleRemoveToken = (tokenIndex: number) => {
    if (isEvaluated) return;
    const removedToken = placedTokens[tokenIndex];
    const updatedPlaced = [...placedTokens];
    updatedPlaced.splice(tokenIndex, 1);
    setPlacedTokens(updatedPlaced);
    setAvailableTokens([...availableTokens, removedToken]);
  };

  const handleReset = () => {
    setPlacedTokens([]);
    setAvailableTokens([...currentScramble.scrambledTokens]);
    setIsEvaluated(false);
    setIsCorrect(false);
  };

  const handleCheckSentence = () => {
    const assembled = placedTokens.join(' ').trim();
    // Normalize spaces before punctuation
    const normalizedAssembled = assembled.replace(/\s+([.,!?;:])/g, '$1');
    const normalizedTarget = currentScramble.correctSentence.trim().replace(/\s+([.,!?;:])/g, '$1');

    const correct = normalizedAssembled.toLowerCase() === normalizedTarget.toLowerCase();
    setIsCorrect(correct);
    setIsEvaluated(true);

    if (correct) {
      soundEffects.playSuccessChime();
      try {
        confetti({ particleCount: 35, spread: 60, origin: { y: 0.7 } });
      } catch {
        // Ignored
      }
      if (onRecordScore) {
        onRecordScore(`scramble-${currentScramble.id}`, 100);
      }
    } else {
      if (onRecordScore) {
        onRecordScore(`scramble-${currentScramble.id}`, 0);
      }
    }
  };

  const handlePlayAudio = (sentence: string) => {
    speakBritishText(sentence, { rate: 0.93 });
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#141d0e] via-[#1a2612] to-[#141d0e] border border-[#3b4e28] rounded-2xl p-5 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="bg-[#b8df47] text-[#11170b] text-[10px] font-bold font-stencil px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Sintaxis Castrense • Nivel {levelNumber}
              </span>
              <span className="text-xs font-mono text-[#8fa577]">
                Sentence Scrambler (ManyThings & A4ESL)
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold font-stencil text-white tracking-wide uppercase mt-1">
              Reordenamiento Sintáctico de Oraciones Tácticas
            </h2>
            <p className="text-xs text-[#a8bc94] mt-1 max-w-2xl">
              Organiza las piezas verbales y nominales para ensamblar directivas de combate, reglamentos y reportes de situación con la estructura gramatical reglamentaria británica.
            </p>
          </div>

          <div className="bg-[#0e1509] border border-[#2c3d1b] rounded-xl px-4 py-2 text-right">
            <span className="text-[10px] font-mono text-[#788e63] uppercase block">Enfoque Gramatical</span>
            <span className="text-xs font-mono font-bold text-[#b8df47]">
              {currentScramble.grammarFocus}
            </span>
          </div>
        </div>
      </div>

      {/* Exercises Tabs */}
      {levelSentences.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2 no-scrollbar">
          {levelSentences.map((scramble, idx) => (
            <button
              key={scramble.id}
              onClick={() => handleSelectExercise(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer font-tactical ${
                selectedIdx === idx
                  ? 'bg-[#293d18] text-[#b8df47] border border-[#7ea830] shadow-md ring-1 ring-[#7ea830]/40'
                  : 'bg-[#141c0e] text-[#9eb288] border border-[#2e3e1d] hover:bg-[#1b2512]'
              }`}
            >
              Misión #{idx + 1}: {scramble.title}
            </button>
          ))}
        </div>
      )}

      {/* Main Assembly Workspace */}
      <div className="bg-[#141d0e]/95 border border-[#3b4e28] rounded-2xl p-6 shadow-xl backdrop-blur-sm space-y-6">
        <div className="flex items-center justify-between border-b border-[#314320] pb-3">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-[#b8df47]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#b8df47] font-bold">
              {currentScramble.context}
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#8fa577]">
            {placedTokens.length} / {currentScramble.scrambledTokens.length} bloques colocados
          </span>
        </div>

        <div>
          <h3 className="text-base font-bold font-stencil text-white tracking-wide uppercase mb-1">
            {currentScramble.title}
          </h3>
          <p className="text-xs text-[#a8bc94]">
            Haz clic en los bloques inferiores para posicionarlos en la línea de ensamble sintáctico. Si te equivocas, haz clic sobre la ficha colocada para devolverla al depósito.
          </p>
        </div>

        {/* Construction Line (Where clicked tokens go) */}
        <div className="space-y-2">
          <span className="text-[10px] font-mono uppercase text-[#788e63] font-bold">Línea de Ensamble Sintáctico:</span>
          <div className="min-h-[70px] p-4 rounded-xl bg-[#0c1208] border-2 border-dashed border-[#2f421f] flex flex-wrap items-center gap-2 transition-all">
            {placedTokens.length === 0 ? (
              <span className="text-xs text-[#526442] italic font-mono">
                Haz clic en las fichas de abajo para formar la directiva militar en orden gramatical...
              </span>
            ) : (
              placedTokens.map((token, tIdx) => (
                <button
                  key={`placed-${tIdx}`}
                  disabled={isEvaluated}
                  onClick={() => handleRemoveToken(tIdx)}
                  className="px-3.5 py-2 rounded-lg bg-[#273817] hover:bg-[#32491d] text-[#e8f7d0] border border-[#527027] text-xs sm:text-sm font-mono font-medium shadow-sm transition-all cursor-pointer flex items-center space-x-1.5 group"
                  title="Haz clic para quitar de la oración"
                >
                  <span>{token}</span>
                  {!isEvaluated && (
                    <span className="text-[10px] text-[#8fa776] group-hover:text-rose-400">×</span>
                  )}
                </button>
              ))
            )}
          </div>
        </div>

        {/* Available Tokens Depot */}
        <div className="space-y-2">
          <span className="text-[10px] font-mono uppercase text-[#788e63] font-bold">Fichas Disponibles para Ubicar:</span>
          <div className="p-4 rounded-xl bg-[#11180c] border border-[#263517] flex flex-wrap gap-2.5 min-h-[60px] items-center">
            {availableTokens.length === 0 ? (
              <span className="text-xs text-[#788e63] font-mono">
                ¡Todas las fichas han sido ubicadas en la línea de ensamble!
              </span>
            ) : (
              availableTokens.map((token, aIdx) => (
                <button
                  key={`avail-${aIdx}`}
                  disabled={isEvaluated}
                  onClick={() => handlePlaceToken(token, aIdx)}
                  className="px-3.5 py-2 rounded-lg bg-[#1a2512] hover:bg-[#253518] text-[#b8df47] hover:text-white border border-[#3b5025] hover:border-[#7ea830] text-xs sm:text-sm font-mono font-semibold shadow transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  {token}
                </button>
              ))
            )}
          </div>
        </div>

        {/* Evaluation Feedback */}
        {isEvaluated && (
          <div className={`p-4 rounded-xl border text-xs leading-relaxed animate-in fade-in duration-200 ${
            isCorrect
              ? 'bg-[#132612] text-[#a7f3d0] border-[#10b981]/40'
              : 'bg-[#291414] text-[#fecaca] border-[#ef4444]/40'
          }`}>
            <div className="font-bold flex items-center space-x-2 mb-1.5">
              {isCorrect ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>¡Orden Sintáctico Militar Correcto!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-400" />
                  <span>Secuencia Sintáctica Incorrecta</span>
                </>
              )}
            </div>

            <p className="mb-2">
              <strong>Oración Reglamentaria:</strong> "{currentScramble.correctSentence}"
            </p>

            <div className="text-[11px] text-[#b8df47] mb-2">
              <strong>Traducción:</strong> {currentScramble.translation}
            </div>

            <div className="mt-3 p-3 rounded-lg bg-[#0c1208]/60 border border-[#2b3a1a] text-white">
              <span className="font-bold text-[#b8df47] block mb-1">Fundamento Doctrinario y Gramatical:</span>
              {currentScramble.tacticalTip}
            </div>

            {/* Audio Button */}
            <div className="mt-3 pt-2 border-t border-[#1e2a14]">
              <button
                onClick={() => handlePlayAudio(currentScramble.correctSentence)}
                className="py-1.5 px-3 rounded-lg bg-[#202d15] hover:bg-[#2b3e1b] text-[#b8df47] text-xs font-mono inline-flex items-center space-x-2 transition-colors cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Escuchar Oración Completa con Pronunciación RP</span>
              </button>
            </div>
          </div>
        )}

        {/* Actions Controls */}
        <div className="pt-4 border-t border-[#2e401d] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1b2512] hover:bg-[#243318] text-[#cadbb8] border border-[#3b4e28] text-xs font-semibold font-tactical flex items-center justify-center space-x-2 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Limpiar y Reiniciar Fichas</span>
          </button>

          {!isEvaluated ? (
            <button
              onClick={handleCheckSentence}
              disabled={availableTokens.length > 0}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#688a28] hover:bg-[#7da72f] disabled:opacity-40 disabled:cursor-not-allowed text-[#0f150a] font-bold text-xs font-tactical shadow-md transition-all cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Verificar Estructura Sintáctica</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => handleSelectExercise((selectedIdx + 1) % levelSentences.length)}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#293d18] hover:bg-[#344e1e] text-[#b8df47] border border-[#7ea830] text-xs font-semibold font-tactical flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <span>Siguiente Ejercicio Sintáctico →</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
