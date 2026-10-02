import React, { useState, useMemo } from 'react';
import { SpeechComparisonResult, compareSpeechToModel } from '../utils/speechComparison';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Sparkles, 
  BarChart2, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  BookOpen, 
  Volume2, 
  VolumeX, 
  RotateCcw 
} from 'lucide-react';
import { speakBritishText, stopSpeaking } from '../utils/audio';

interface SpeechComparisonCardProps {
  comparison?: SpeechComparisonResult;
  userTranscript: string;
  modelResponse: string;
  audioRate?: number;
  onResetRecording?: () => void;
  scenarioTitle?: string;
  levelNumber?: number;
}

export const SpeechComparisonCard: React.FC<SpeechComparisonCardProps> = ({
  comparison,
  userTranscript,
  modelResponse,
  audioRate = 0.9,
  onResetRecording
}) => {
  const [showDetailedWords, setShowDetailedWords] = useState(false);
  const [isPlayingModelSection, setIsPlayingModelSection] = useState(false);

  const effectiveComparison = useMemo(() => {
    if (comparison) return comparison;
    return compareSpeechToModel(userTranscript || '', modelResponse || '');
  }, [comparison, userTranscript, modelResponse]);

  const handleTogglePlayModel = () => {
    if (isPlayingModelSection) {
      stopSpeaking();
      setIsPlayingModelSection(false);
    } else {
      setIsPlayingModelSection(true);
      speakBritishText(modelResponse, {
        rate: audioRate,
        onEnd: () => setIsPlayingModelSection(false)
      });
    }
  };

  // Color badge according to score
  const getScoreColorBadge = (score: number) => {
    if (score >= 80) return 'text-[#b2cd88] bg-[#27381a] border-[#4f6b32]';
    if (score >= 60) return 'text-[#d6cd7e] bg-[#333116] border-[#696127]';
    return 'text-[#dca084] bg-[#361f18] border-[#713928]';
  };

  return (
    <div className="mt-4 rounded-xl border border-[#3b4e28] bg-[#11190c] p-4 sm:p-5 space-y-4 shadow-lg">
      {/* Header with similarity rating */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#293b1a] pb-3">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#202d15] border border-[#405429] flex items-center justify-center text-[#a7bd84]">
            <BarChart2 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#a7bd84]">
              Análisis Comparativo Textual (STANAG 6001)
            </h4>
            <p className="text-[11px] text-[#8ea476]">
              {effectiveComparison.overallFluencyEvaluation}
            </p>
          </div>
        </div>

        {/* Global Match Score */}
        <div className="flex items-center space-x-2">
          <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border ${getScoreColorBadge(effectiveComparison.similarityScore)}`}>
            Coincidencia: {effectiveComparison.similarityScore}%
          </span>
          {effectiveComparison.keyTermsMatched.length > 0 && (
            <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border ${getScoreColorBadge(effectiveComparison.keyTermsScore)}`}>
              Léxico Clave: {effectiveComparison.keyTermsScore}%
            </span>
          )}
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
        <div className="p-2 rounded-lg bg-[#0d1409] border border-[#233316]">
          <div className="text-[10px] uppercase font-mono text-[#7b8f67]">Palabras Emitidas</div>
          <div className="font-bold text-white font-mono mt-0.5">{effectiveComparison.userWordCount}</div>
        </div>
        <div className="p-2 rounded-lg bg-[#0d1409] border border-[#233316]">
          <div className="text-[10px] uppercase font-mono text-[#7b8f67]">Modelo Oficial</div>
          <div className="font-bold text-[#b4c896] font-mono mt-0.5">{effectiveComparison.modelWordCount}</div>
        </div>
        <div className="p-2 rounded-lg bg-[#0d1409] border border-[#233316]">
          <div className="text-[10px] uppercase font-mono text-[#7b8f67]">Términos Coincidentes</div>
          <div className="font-bold text-[#b2cd88] font-mono mt-0.5">{effectiveComparison.matchedWordCount}</div>
        </div>
        <div className="p-2 rounded-lg bg-[#0d1409] border border-[#233316]">
          <div className="text-[10px] uppercase font-mono text-[#7b8f67]">Cobertura Doctrinal</div>
          <div className="font-bold text-white font-mono mt-0.5">
            {effectiveComparison.keyTermsMatched.filter(k => k.found).length} / {effectiveComparison.keyTermsMatched.length}
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* User Transcription Column */}
        <div className="rounded-lg bg-[#0a1007] border border-[#263717] p-3 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#93a77b] font-semibold flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-[#829961]" />
              <span>Tu Transcripción Capturada:</span>
            </span>
            <span className="text-[10px] font-mono text-[#6d8258]">
              {effectiveComparison.userWordCount} palabras
            </span>
          </div>
          <p className="text-xs font-mono text-[#e5f0d8] leading-relaxed bg-[#111a0d]/60 p-2.5 rounded border border-[#1f2e14] min-h-[70px]">
            {userTranscript || <span className="text-[#647852] italic">Sin transcripción capturada.</span>}
          </p>
        </div>

        {/* Official Model Response Column */}
        <div className="rounded-lg bg-[#0a1007] border border-[#263717] p-3 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#a7bd84] font-semibold flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-[#a1b87a]" />
              <span>Respuesta Modelo de Referencia:</span>
            </span>
            <button
              type="button"
              onClick={handleTogglePlayModel}
              className="text-[10px] font-mono text-[#a7bd84] hover:text-[#d3e5b8] flex items-center space-x-1 px-1.5 py-0.5 rounded bg-[#182511] border border-[#324520] transition-colors"
            >
              {isPlayingModelSection ? (
                <>
                  <VolumeX className="w-3 h-3 text-red-400" />
                  <span>Detener</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3 h-3" />
                  <span>Escuchar</span>
                </>
              )}
            </button>
          </div>
          <p className="text-xs font-mono text-[#cadbb8] leading-relaxed bg-[#111a0d]/60 p-2.5 rounded border border-[#1f2e14] min-h-[70px]">
            "{modelResponse}"
          </p>
        </div>
      </div>

      {/* Target Key Vocabulary Chips */}
      {effectiveComparison.keyTermsMatched.length > 0 && (
        <div className="space-y-1.5 pt-1">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#8da075] flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5 text-[#a7bd84]" />
            <span>Verificación de Vocabulario Táctico Esperado:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {effectiveComparison.keyTermsMatched.map((termItem, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[11px] font-mono border ${
                  termItem.found
                    ? 'bg-[#1b2b13] text-[#bde089] border-[#446227]'
                    : 'bg-[#1e1713] text-[#a99484] border-[#3e2e22] opacity-75'
                }`}
              >
                {termItem.found ? (
                  <CheckCircle2 className="w-3 h-3 text-[#95be5d]" />
                ) : (
                  <XCircle className="w-3 h-3 text-[#b87661]" />
                )}
                <span>{termItem.term}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Evaluator Feedback Notes */}
      {effectiveComparison.feedbackNotes.length > 0 && (
        <div className="p-3 rounded-lg bg-[#141e0f] border border-[#2b3d1b] space-y-1.5">
          <div className="text-[10px] uppercase font-mono tracking-wider text-[#a7bd84] font-bold flex items-center space-x-1">
            <Award className="w-3.5 h-3.5" />
            <span>Observaciones del Evaluador Militar:</span>
          </div>
          <ul className="space-y-1 text-xs text-[#cadbb8]">
            {effectiveComparison.feedbackNotes.map((note, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-[#8ea476] font-bold">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Toggleable Word-by-Word Mapping */}
      <div>
        <button
          type="button"
          id="toggle-lexical-map-btn"
          data-expand-trigger="true"
          onClick={() => setShowDetailedWords(!showDetailedWords)}
          className="text-[11px] font-mono text-[#ff8533] hover:text-[#ffaa66] px-2 py-1 rounded flex items-center space-x-1.5 transition-colors neon-orange-expand"
        >
          {showDetailedWords ? <ChevronUp className="w-3.5 h-3.5 text-[#ff6a00]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#ff6a00]" />}
          <span>{showDetailedWords ? 'Ocultar mapa léxico palabra por palabra' : 'Ver mapa léxico palabra por palabra contra el modelo'}</span>
        </button>

        {showDetailedWords && (
          <div data-expanded-container="true" className="mt-2.5 p-3 rounded-lg bg-[#090e06] space-y-2 text-xs neon-orange-box">
            <div className="text-[10px] font-mono text-[#7b8f67] uppercase">
              Verde: palabras pronunciadas y capturadas presentes en el modelo | Gris: vocabulario del modelo aún no articulado
            </div>
            <div className="flex flex-wrap gap-1 leading-relaxed">
              {effectiveComparison.wordTokens.map((token, tIdx) => (
                <span
                  key={tIdx}
                  className={`px-1.5 py-0.5 rounded text-[11px] font-mono ${
                    token.status === 'matched'
                      ? 'bg-[#273d18] text-[#c9e89b] border border-[#486b2b]'
                      : 'bg-[#141b10] text-[#718063] border border-[#222e1a]'
                  }`}
                >
                  {token.word}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      {onResetRecording && (
        <div className="flex justify-end pt-1">
          <button
            type="button"
            onClick={onResetRecording}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#192412] hover:bg-[#25351a] text-[#a7bd84] border border-[#354722] text-xs font-mono transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Repetir Grabación</span>
          </button>
        </div>
      )}
    </div>
  );
};
