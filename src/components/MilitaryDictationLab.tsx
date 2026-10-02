import React, { useState } from 'react';
import { MilitaryDictationItem } from '../types';
import { MILITARY_DICTATION_DATA } from '../data/dictationData';
import { speakBritishText, stopSpeaking, soundEffects } from '../utils/audio';
import { Play, Square, RotateCcw, CheckCircle, XCircle, Sparkles, Lightbulb, Radio, HelpCircle, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MilitaryDictationLabProps {
  levelNumber: number;
  audioRate: number;
  onRecordScore?: (id: string, score: number) => void;
}

export const MilitaryDictationLab: React.FC<MilitaryDictationLabProps> = ({
  levelNumber,
  audioRate: globalAudioRate,
  onRecordScore
}) => {
  const levelDictations = MILITARY_DICTATION_DATA.filter(d => d.levelNumber === levelNumber);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [userText, setUserText] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [radioEffect, setRadioEffect] = useState(true);
  const [speedPreset, setSpeedPreset] = useState<number>(globalAudioRate || 0.95);
  const [showHint, setShowHint] = useState(false);
  const [hasEvaluated, setHasEvaluated] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<{
    score: number;
    wordAccuracy: number;
    missingKeywords: string[];
    wordDiff: { word: string; status: 'correct' | 'incorrect' | 'missing' }[];
  } | null>(null);

  const currentDictation = levelDictations[selectedIdx] || levelDictations[0];

  if (!currentDictation) {
    return (
      <div className="bg-[#141d0e] border border-[#2e401d] rounded-2xl p-6 text-center text-[#9eb288]">
        No hay dictados interactivos para este nivel.
      </div>
    );
  }

  const handlePlayAudio = () => {
    if (isPlaying) {
      stopSpeaking();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    speakBritishText(currentDictation.audioText, {
      rate: speedPreset,
      isRadio: radioEffect,
      onEnd: () => setIsPlaying(false)
    });
  };

  const handleStopAudio = () => {
    stopSpeaking();
    setIsPlaying(false);
  };

  const cleanPunctuation = (str: string) =>
    str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, '').toLowerCase().trim();

  const handleEvaluate = () => {
    if (!userText.trim()) return;

    const originalText = currentDictation.audioText.trim();
    const originalWords = originalText.split(/\s+/);
    const userWords = userText.trim().split(/\s+/);

    const originalCleanWords = originalWords.map(cleanPunctuation);
    const userCleanWords = userWords.map(cleanPunctuation);

    // Calculate word accuracy
    let correctWordCount = 0;
    const diffTokens: { word: string; status: 'correct' | 'incorrect' | 'missing' }[] = [];

    originalWords.forEach((origWord, idx) => {
      const origClean = cleanPunctuation(origWord);
      const userWord = userWords[idx];
      const userClean = userWord ? cleanPunctuation(userWord) : '';

      if (userClean === origClean) {
        correctWordCount++;
        diffTokens.push({ word: origWord, status: 'correct' });
      } else if (userWord) {
        diffTokens.push({ word: userWord, status: 'incorrect' });
      } else {
        diffTokens.push({ word: origWord, status: 'missing' });
      }
    });

    // Check required keywords
    const missingKeys = currentDictation.keywords.filter(kw => {
      const kwClean = cleanPunctuation(kw);
      return !userCleanWords.some(w => w.includes(kwClean) || kwClean.includes(w));
    });

    const wordAccuracy = Math.round((correctWordCount / originalWords.length) * 100);
    // Weighted score considering keywords
    const keywordPenalty = missingKeys.length * 10;
    const finalScore = Math.max(0, Math.min(100, wordAccuracy - keywordPenalty));

    setEvaluationResult({
      score: finalScore,
      wordAccuracy,
      missingKeywords: missingKeys,
      wordDiff: diffTokens
    });
    setHasEvaluated(true);

    if (finalScore >= 70) {
      soundEffects.playSuccessChime();
      try {
        confetti({ particleCount: 35, spread: 60, origin: { y: 0.75 } });
      } catch {
        // Ignored
      }
    }

    if (onRecordScore) {
      onRecordScore(`dict-${currentDictation.id}`, finalScore);
    }
  };

  const handleReset = () => {
    setUserText('');
    setHasEvaluated(false);
    setEvaluationResult(null);
    setShowHint(false);
  };

  const handleSelectDictation = (idx: number) => {
    handleStopAudio();
    setSelectedIdx(idx);
    handleReset();
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#141d0e] via-[#1a2612] to-[#141d0e] border border-[#3b4e28] rounded-2xl p-5 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="bg-[#b8df47] text-[#11170b] text-[10px] font-bold font-stencil px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Dictado Táctico • Nivel {levelNumber}
              </span>
              <span className="text-xs font-mono text-[#8fa577]">
                Listen & Type • Estándar NATO STANAG 6001
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold font-stencil text-white tracking-wide uppercase mt-1">
              Laboratorio de Dictados Militares Interactivos
            </h2>
            <p className="text-xs text-[#a8bc94] mt-1 max-w-2xl">
              Escucha transmisiones radiales y órdenes de operaciones en acento británico militar y transcribe con precisión ortográfica y táctica.
            </p>
          </div>

          <div className="bg-[#0e1509] border border-[#2c3d1b] rounded-xl px-4 py-2 text-right">
            <span className="text-[10px] font-mono text-[#788e63] uppercase block">Dificultad</span>
            <span className="text-xs font-mono font-bold text-[#b8df47]">
              {currentDictation.difficulty}
            </span>
          </div>
        </div>
      </div>

      {/* Dictation Tabs */}
      {levelDictations.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2 no-scrollbar">
          {levelDictations.map((dict, idx) => (
            <button
              key={dict.id}
              onClick={() => handleSelectDictation(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer font-tactical ${
                selectedIdx === idx
                  ? 'bg-[#293d18] text-[#b8df47] border border-[#7ea830] shadow-md ring-1 ring-[#7ea830]/40'
                  : 'bg-[#141c0e] text-[#9eb288] border border-[#2e3e1d] hover:bg-[#1b2512]'
              }`}
            >
              Dictado #{idx + 1}: {dict.title}
            </button>
          ))}
        </div>
      )}

      {/* Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Tactical Radio Audio Player */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-[#141d0e]/95 border border-[#3b4e28] rounded-2xl p-6 shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-[#314320] pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <Radio className="w-4 h-4 text-[#b8df47]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#b8df47] font-bold">
                  {currentDictation.context}
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#8fa577]">
                Dictado #{selectedIdx + 1}
              </span>
            </div>

            <h3 className="text-sm sm:text-base font-bold font-stencil text-white tracking-wide uppercase mb-4">
              {currentDictation.title}
            </h3>

            {/* Audio Unit */}
            <div className="bg-[#0e1509] border border-[#2e401d] rounded-xl p-5 space-y-4 shadow-inner">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${isPlaying ? 'bg-[#b8df47] animate-ping' : 'bg-[#4b6131]'}`} />
                  <span className="text-xs font-mono text-[#a8bc94] uppercase tracking-wider">
                    {isPlaying ? 'Canal Transmitiendo...' : 'Frecuencia en Espera'}
                  </span>
                </div>

                <button
                  onClick={() => setRadioEffect(!radioEffect)}
                  className={`text-[10px] font-mono px-2 py-1 rounded border transition-colors cursor-pointer ${
                    radioEffect
                      ? 'bg-[#293d18] text-[#b8df47] border-[#7ea830]'
                      : 'bg-[#182210] text-[#788e63] border-[#2c3d1b]'
                  }`}
                  title="Filtro estática militar VHF"
                >
                  Filtro VHF: {radioEffect ? 'ON' : 'OFF'}
                </button>
              </div>

              {/* Speed Buttons Presets */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-mono text-[#788e63]">Velocidad de reproducción:</span>
                <div className="flex space-x-1.5">
                  {[
                    { rate: 0.8, label: '0.8x (Lento)' },
                    { rate: 1.0, label: '1.0x (Normal)' },
                    { rate: 1.2, label: '1.2x (Rápido)' }
                  ].map(preset => (
                    <button
                      key={preset.rate}
                      onClick={() => setSpeedPreset(preset.rate)}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${
                        speedPreset === preset.rate
                          ? 'bg-[#b8df47] text-[#12180c] font-bold'
                          : 'bg-[#1a2512] text-[#8fa776] hover:bg-[#253617]'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Play / Pause button */}
              <div className="flex items-center justify-center space-x-3 py-3">
                <button
                  onClick={handlePlayAudio}
                  className={`flex items-center space-x-3 px-6 py-3.5 rounded-xl font-bold font-tactical text-sm tracking-wide transition-all shadow-lg cursor-pointer ${
                    isPlaying
                      ? 'bg-[#982c2c] hover:bg-[#b03434] text-white border border-[#dc2626]'
                      : 'bg-[#688a28] hover:bg-[#7da72f] text-[#0f150a] border border-[#a2cb3c]'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Square className="w-4 h-4 fill-current" />
                      <span>Detener Transmisión</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Escuchar Dictado Militar ({speedPreset}x)</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Hint Box */}
            <div className="mt-4 pt-3 border-t border-[#2a3a19]">
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center space-x-1.5 text-xs text-[#b8df47] hover:underline cursor-pointer font-mono"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>{showHint ? 'Ocultar Pista Táctica' : 'Solicitar Pista Táctica / Vocabulario Clave'}</span>
              </button>

              {showHint && (
                <div className="mt-2.5 p-3 rounded-xl bg-[#0c1208] border border-[#2b3a1a] text-xs text-[#cadbb8] space-y-2 animate-in fade-in duration-200">
                  <p><strong>Pista:</strong> {currentDictation.hint}</p>
                  <div>
                    <span className="text-[10px] font-mono text-[#8fa577] uppercase block">Términos Clave Requeridos:</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {currentDictation.keywords.map((kw, kIdx) => (
                        <span key={kIdx} className="bg-[#1e2a14] text-[#b8df47] font-mono text-[10px] px-2 py-0.5 rounded border border-[#394d23]">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: User Typing & Evaluation */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-[#141d0e]/95 border border-[#3b4e28] rounded-2xl p-6 shadow-xl backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#314320] pb-3 mb-4">
                <h3 className="text-sm font-bold font-stencil text-[#b8df47] tracking-wider uppercase flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Área de Transcripción del Operador</span>
                </h3>
                {hasEvaluated && evaluationResult && (
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    evaluationResult.score >= 70 ? 'bg-[#10b981]/20 text-[#6ee7b7]' : 'bg-[#ef4444]/20 text-[#fca5a5]'
                  }`}>
                    {evaluationResult.score}% Precisión
                  </span>
                )}
              </div>

              <p className="text-xs text-[#a8bc94] mb-3">
                Escribe en inglés la transmisión que escuchas. Respeta la puntuación militar y los nombres propios o siglas.
              </p>

              <textarea
                value={userText}
                onChange={(e) => setUserText(e.target.value)}
                placeholder="Transcribe aquí el audio militar transmitido..."
                disabled={hasEvaluated}
                rows={4}
                className="w-full p-3.5 rounded-xl bg-[#0c1208] border border-[#2e401d] text-xs sm:text-sm font-mono text-white placeholder-[#5a6e46] focus:outline-none focus:border-[#7ea830] focus:ring-1 focus:ring-[#7ea830] transition-all resize-none"
              />

              {/* Evaluation Results Box */}
              {hasEvaluated && evaluationResult && (
                <div className="mt-4 space-y-3 animate-in fade-in duration-200">
                  <div className={`p-4 rounded-xl border text-xs leading-relaxed ${
                    evaluationResult.score >= 70
                      ? 'bg-[#132612] text-[#a7f3d0] border-[#10b981]/40'
                      : 'bg-[#291414] text-[#fecaca] border-[#ef4444]/40'
                  }`}>
                    <div className="font-bold flex items-center space-x-2 mb-1.5">
                      {evaluationResult.score >= 70 ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span>¡Transcripción Militar Aprobada ({evaluationResult.score}%)!</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-rose-400" />
                          <span>Transcripción Incompleta o con Errores ({evaluationResult.score}%)</span>
                        </>
                      )}
                    </div>

                    {evaluationResult.missingKeywords.length > 0 && (
                      <div className="mt-1 text-[11px] text-[#fca5a5]">
                        Términos tácticos omitidos o mal escritos:{' '}
                        <strong>{evaluationResult.missingKeywords.join(', ')}</strong>
                      </div>
                    )}
                  </div>

                  {/* Word-by-word diff vs original */}
                  <div className="p-3.5 rounded-xl bg-[#0a0f06] border border-[#2b3a1a] text-xs font-mono space-y-2">
                    <div className="text-[10px] text-[#b8df47] uppercase font-bold tracking-wider">
                      Texto Oficial Transmitido:
                    </div>
                    <p className="text-white leading-relaxed">
                      "{currentDictation.audioText}"
                    </p>

                    <div className="text-[10px] text-[#8fa577] uppercase font-bold tracking-wider pt-2 border-t border-[#1e2a14]">
                      Traducción Operacional:
                    </div>
                    <p className="text-[#a8bc94] italic text-[11px]">
                      {currentDictation.spanishTranslation}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="pt-4 mt-4 border-t border-[#2a3a19] flex items-center space-x-3">
              {!hasEvaluated ? (
                <button
                  onClick={handleEvaluate}
                  disabled={!userText.trim()}
                  className="w-full py-2.5 rounded-xl bg-[#688a28] hover:bg-[#7da72f] disabled:opacity-40 disabled:cursor-not-allowed text-[#0f150a] font-bold text-xs font-tactical shadow-md transition-all cursor-pointer"
                >
                  Verificar Dictado
                </button>
              ) : (
                <button
                  onClick={handleReset}
                  className="w-full py-2.5 rounded-xl bg-[#233116] hover:bg-[#2c3d1b] text-[#cadbb8] border border-[#445b2b] text-xs font-semibold font-tactical flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reintentar Dictado</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
