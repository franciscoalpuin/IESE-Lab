import React, { useState, useEffect, useRef } from 'react';
import {
  Languages,
  ArrowLeftRight,
  Volume2,
  VolumeX,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  BookOpen,
  Shield,
  Search,
  ExternalLink,
  X,
  Mic,
  Bookmark,
  ChevronRight,
  Gauge
} from 'lucide-react';
import {
  translateAndDefine,
  TranslationResult,
  DictionaryEntry,
  MILITARY_DICTIONARY
} from '../utils/translator';
import { speakBilingualText, stopSpeaking } from '../utils/audio';
import { getSpanishPhonetic } from '../utils/spanishPhonetics';

interface MilitaryTranslatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialText?: string;
  initialFromLang?: 'es' | 'en';
}

const PRESET_PHRASES: Array<{ label: string; text: string; from: 'es' | 'en' }> = [
  { label: 'Alto el fuego', text: 'Cease fire immediately!', from: 'en' },
  { label: 'Fuego a discreción', text: 'Fuego a discreción', from: 'es' },
  { label: 'Briefing operacional', text: 'Operational briefing', from: 'en' },
  { label: 'Destino militar', text: 'Military posting and relocation', from: 'en' },
  { label: 'Solicito evac. médica', text: 'Solicito evacuación médica urgente', from: 'es' },
  { label: 'Puesto de control', text: 'Vehicle checkpoint security', from: 'en' },
  { label: 'Entendido y cumpliré', text: 'Roger that, wilco', from: 'en' },
  { label: 'Repita su mensaje', text: 'Say again your last message', from: 'en' },
  { label: 'A sus órdenes', text: 'A sus órdenes, mi Capitán', from: 'es' },
  { label: 'Patrulla de reconocimiento', text: 'Reconnaissance foot patrol', from: 'en' }
];

export const MilitaryTranslatorModal: React.FC<MilitaryTranslatorModalProps> = ({
  isOpen,
  onClose,
  initialText = '',
  initialFromLang = 'es'
}) => {
  const [fromLang, setFromLang] = useState<'es' | 'en'>(initialFromLang);
  const [toLang, setToLang] = useState<'es' | 'en'>(initialFromLang === 'es' ? 'en' : 'es');
  const [inputText, setInputText] = useState<string>(initialText);
  const [result, setResult] = useState<TranslationResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isSpeakingSource, setIsSpeakingSource] = useState<boolean>(false);
  const [isSpeakingTarget, setIsSpeakingTarget] = useState<boolean>(false);
  const [slowAudio, setSlowAudio] = useState<boolean>(false);
  const [history, setHistory] = useState<Array<{ text: string; from: 'es' | 'en' }>>([]);
  const [selectedWordDetail, setSelectedWordDetail] = useState<DictionaryEntry | null>(null);

  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Synchronize initialText when modal opens
  useEffect(() => {
    if (initialText) {
      setInputText(initialText);
      const sourceLang: 'es' | 'en' = initialFromLang === 'en' ? 'en' : 'es';
      const targetLang: 'es' | 'en' = sourceLang === 'es' ? 'en' : 'es';
      setFromLang(sourceLang);
      setToLang(targetLang);
      handleTranslate(initialText, sourceLang, targetLang);
    }
  }, [initialText, initialFromLang, isOpen]);

  // Handle language swap
  const handleSwapLanguages = () => {
    stopSpeaking();
    setIsSpeakingSource(false);
    setIsSpeakingTarget(false);

    const newFrom = toLang;
    const newTo = fromLang;
    setFromLang(newFrom);
    setToLang(newTo);

    // Swap texts if result exists
    if (result && result.translatedText) {
      setInputText(result.translatedText);
      handleTranslate(result.translatedText, newFrom, newTo);
    } else if (inputText) {
      handleTranslate(inputText, newFrom, newTo);
    }
  };

  const handleTranslate = async (textToTranslate: string, from: 'es' | 'en', to: 'es' | 'en') => {
    if (!textToTranslate.trim()) {
      setResult(null);
      setSelectedWordDetail(null);
      return;
    }

    setIsLoading(true);
    try {
      const res = await translateAndDefine(textToTranslate, from, to);
      setResult(res);
      setSelectedWordDetail(res.exactEntry || (res.keyWordsEntries.length > 0 ? res.keyWordsEntries[0] : null));

      // Save to recent history if meaningful
      if (textToTranslate.trim().length > 2) {
        setHistory(prev => {
          const filtered = prev.filter(h => h.text.toLowerCase() !== textToTranslate.trim().toLowerCase());
          return [{ text: textToTranslate.trim(), from }, ...filtered].slice(0, 6);
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Text change with auto-debounce
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setInputText(val);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (!val.trim()) {
      setResult(null);
      setSelectedWordDetail(null);
      return;
    }

    debounceTimerRef.current = setTimeout(() => {
      handleTranslate(val, fromLang, toLang);
    }, 450);
  };

  // Copy result to clipboard
  const handleCopy = () => {
    if (!result?.translatedText) return;
    navigator.clipboard.writeText(result.translatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Audio speech for source text
  const handlePlaySource = () => {
    if (!inputText.trim()) return;
    if (isSpeakingSource) {
      stopSpeaking();
      setIsSpeakingSource(false);
      return;
    }

    stopSpeaking();
    setIsSpeakingSource(true);
    setIsSpeakingTarget(false);

    speakBilingualText(inputText, fromLang, {
      rate: slowAudio ? 0.72 : (fromLang === 'en' ? 0.92 : 0.95),
      onStart: () => setIsSpeakingSource(true),
      onEnd: () => setIsSpeakingSource(false)
    });
  };

  // Audio speech for target translated text
  const handlePlayTarget = (customText?: string, customLang?: 'es' | 'en') => {
    const textToSpeak = customText || result?.translatedText;
    const langToSpeak = customLang || toLang;
    if (!textToSpeak || !textToSpeak.trim()) return;

    if (isSpeakingTarget && !customText) {
      stopSpeaking();
      setIsSpeakingTarget(false);
      return;
    }

    stopSpeaking();
    setIsSpeakingTarget(true);
    setIsSpeakingSource(false);

    speakBilingualText(textToSpeak, langToSpeak, {
      rate: slowAudio ? 0.72 : (langToSpeak === 'en' ? 0.90 : 0.95),
      onStart: () => setIsSpeakingTarget(true),
      onEnd: () => setIsSpeakingTarget(false)
    });
  };

  if (!isOpen) return null;

  return (
    <div
      id="military-translator-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[var(--surface-base)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl overflow-hidden font-tactical"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Bar - Google Translate & STANAG Style */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--surface-base)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-primary)] shadow-xs">
              <Languages className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="font-stencil font-bold text-base sm:text-lg text-[var(--text-primary)] tracking-wider uppercase">
                  Traductor & Diccionario Táctico
                </h2>
                <span className="hidden sm:inline-flex text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-base)] text-[var(--accent-primary)] border border-[var(--border-subtle)] font-semibold">
                  ES ⇄ EN • STANAG 6001
                </span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Traducción bidireccional, definición doctrinaria, contexto militar y pronunciación por audio
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Slow Audio Toggle */}
            <button
              onClick={() => setSlowAudio(!slowAudio)}
              className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg border text-xs font-mono transition-colors cursor-pointer ${
                slowAudio
                  ? 'bg-[var(--accent-primary)] text-white font-bold border-[var(--accent-primary)]'
                  : 'bg-[var(--surface-base)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border-[var(--border-subtle)]'
              }`}
              title="Alternar pronunciación lenta para articulación fonética (0.7x)"
            >
              <Gauge className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Voz:</span>
              <span>{slowAudio ? '0.7x Lento' : '1.0x Normal'}</span>
            </button>

            <button
              onClick={() => {
                stopSpeaking();
                onClose();
              }}
              className="p-2 rounded-lg bg-[#1c2715] hover:bg-[#28391d] text-[#9eb486] hover:text-white border border-[#3e5326] transition-colors"
              aria-label="Cerrar traductor"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Translation Body Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">

          {/* Language Selector Bar (Google Translate UI Layout) */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-[#192413] border border-[#364922]">
            {/* From Language Tab */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button
                onClick={() => {
                  if (fromLang !== 'es') handleSwapLanguages();
                }}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  fromLang === 'es'
                    ? 'bg-[#2b3d1c] text-[#b8df47] shadow-sm border border-[#527230]'
                    : 'text-[#9eb486] hover:text-white hover:bg-[#202d17]'
                }`}
              >
                Español (ES)
              </button>
              <button
                onClick={() => {
                  if (fromLang !== 'en') handleSwapLanguages();
                }}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  fromLang === 'en'
                    ? 'bg-[#2b3d1c] text-[#b8df47] shadow-sm border border-[#527230]'
                    : 'text-[#9eb486] hover:text-white hover:bg-[#202d17]'
                }`}
              >
                Inglés Militar (EN)
              </button>
            </div>

            {/* Swap Button */}
            <button
              onClick={handleSwapLanguages}
              className="p-2 rounded-lg bg-[#202d16] hover:bg-[#2c3f1f] text-[#b8df47] hover:text-white border border-[#445f28] transition-transform active:scale-95 shadow-sm"
              title="Intercambiar idiomas (Español ⇄ Inglés)"
              aria-label="Intercambiar idiomas"
            >
              <ArrowLeftRight className="w-4 h-4" />
            </button>

            {/* To Language Tab */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button
                onClick={() => {
                  if (toLang !== 'en') handleSwapLanguages();
                }}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  toLang === 'en'
                    ? 'bg-[#2b3d1c] text-[#b8df47] shadow-sm border border-[#527230]'
                    : 'text-[#9eb486] hover:text-white hover:bg-[#202d17]'
                }`}
              >
                Inglés Británico (EN)
              </button>
              <button
                onClick={() => {
                  if (toLang !== 'es') handleSwapLanguages();
                }}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  toLang === 'es'
                    ? 'bg-[#2b3d1c] text-[#b8df47] shadow-sm border border-[#527230]'
                    : 'text-[#9eb486] hover:text-white hover:bg-[#202d17]'
                }`}
              >
                Español (ES)
              </button>
            </div>
          </div>

          {/* Dual Translation Cards (Google Translate Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Left Card: Source Input */}
            <div className="flex flex-col rounded-xl bg-[#172212] border border-[#384c24] p-4 focus-within:border-[#739b33] transition-all shadow-inner">
              <div className="flex items-center justify-between pb-2 border-b border-[#2b3a1a] mb-2 text-xs text-[#8ca177]">
                <span className="font-semibold uppercase tracking-wider font-tactical">
                  {fromLang === 'es' ? 'Texto en Español' : 'English Text'}
                </span>
                {inputText && (
                  <button
                    onClick={() => {
                      setInputText('');
                      setResult(null);
                      setSelectedWordDetail(null);
                      stopSpeaking();
                      setIsSpeakingSource(false);
                      setIsSpeakingTarget(false);
                    }}
                    className="p-1 rounded text-[#8ca177] hover:text-white hover:bg-[#233119]"
                    title="Borrar texto"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <textarea
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleTranslate(inputText, fromLang, toLang);
                  }
                }}
                placeholder={
                  fromLang === 'es'
                    ? 'Escribe una palabra, frase u orden táctica... (ej. "alto el fuego", "briefing", "reporte de situación")'
                    : 'Type a word, military term, or sentence... (e.g., "patrol", "overwatch", "request medical evacuation")'
                }
                rows={5}
                className="w-full bg-transparent resize-none text-base text-[#f0f6e8] placeholder-[#6f825c] focus:outline-none leading-relaxed font-sans"
              />

              {/* Bottom Actions for Source */}
              <div className="flex items-center justify-between pt-3 border-t border-[#263518] mt-auto">
                <div className="flex items-center space-x-1">
                  <button
                    onClick={handlePlaySource}
                    disabled={!inputText.trim()}
                    className={`p-2 rounded-lg border transition-colors ${
                      isSpeakingSource
                        ? 'bg-[#b8df47] text-[#12180c] border-[#b8df47] animate-pulse'
                        : 'bg-[#202d18] text-[#b8df47] hover:text-white border-[#3e5326] disabled:opacity-40 disabled:cursor-not-allowed'
                    }`}
                    title="Escuchar pronunciación del texto original"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-mono text-[#7b9167] pl-1">
                    {fromLang === 'es' ? 'Voz Español' : 'British Voice'}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono text-[#6c7f59]">
                    {inputText.length} caracteres
                  </span>
                  <button
                    onClick={() => handleTranslate(inputText, fromLang, toLang)}
                    disabled={!inputText.trim() || isLoading}
                    className="px-3.5 py-1.5 rounded-lg bg-[#30441d] hover:bg-[#3f5a27] text-[#b8df47] hover:text-white font-semibold text-xs border border-[#557633] transition-all disabled:opacity-40 flex items-center space-x-1.5"
                  >
                    {isLoading ? (
                      <span className="animate-spin text-xs">⟳</span>
                    ) : (
                      <Search className="w-3.5 h-3.5" />
                    )}
                    <span>Traducir</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Card: Translated Target Result */}
            <div className="flex flex-col rounded-xl bg-[#192414] border border-[#3e5327] p-4 shadow-inner relative">
              <div className="flex items-center justify-between pb-2 border-b border-[#2b3a1a] mb-2 text-xs text-[#8ca177]">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold uppercase tracking-wider text-[#b8df47] font-tactical">
                    {toLang === 'en' ? 'Traducción al Inglés' : 'Traducción al Español'}
                  </span>
                  {result && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#23331b] text-[#9eb486] border border-[#3f5829]">
                      {result.provider === 'dictionary' ? 'Glosario Oficial' : 'Traductor Neural'}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  {result?.phonetic && (
                    <span className="text-xs font-mono text-[#d3e89b] bg-[#23311a] px-2 py-0.5 rounded border border-[#435e27]" title="Transcripción IPA">
                      IPA: {result.phonetic}
                    </span>
                  )}
                  {toLang === 'en' && result?.translatedText && (
                    <span className="text-xs font-sans font-medium text-[#b8df47] bg-[#223318] px-2 py-0.5 rounded border border-[#3e5927]" title="Pronunciación aproximada en español">
                      Sonido: "{getSpanishPhonetic(result.translatedText, result.phonetic)}"
                    </span>
                  )}
                </div>
              </div>

              {/* Output Content */}
              <div className="flex-1 min-h-[7.5rem] flex flex-col justify-between">
                {isLoading ? (
                  <div className="flex items-center justify-center py-8 text-[#9eb486] space-x-2">
                    <span className="animate-spin text-lg">⟳</span>
                    <span className="text-sm font-mono">Traduciendo término...</span>
                  </div>
                ) : result?.translatedText ? (
                  <div className="space-y-2">
                    <p className="text-lg sm:text-xl font-medium text-[#f3f9eb] leading-relaxed select-all">
                      {result.translatedText}
                    </p>
                    {result.exactEntry?.partOfSpeech && (
                      <div className="inline-block text-[11px] font-mono text-[#b8df47] bg-[#202d17] px-2 py-0.5 rounded border border-[#3f5729]">
                        {result.exactEntry.partOfSpeech}
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-sm text-[#667854] italic pt-4">
                    La traducción aparecerá aquí automáticamente mientras escribes...
                  </p>
                )}
              </div>

              {/* Bottom Actions for Target */}
              <div className="flex items-center justify-between pt-3 border-t border-[#2a3a1d] mt-auto">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePlayTarget()}
                    disabled={!result?.translatedText}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
                      isSpeakingTarget
                        ? 'bg-[#b8df47] text-[#12180c] font-bold border-[#b8df47] animate-pulse'
                        : 'bg-[#223119] text-[#b8df47] hover:text-white border-[#45602a] disabled:opacity-40 disabled:cursor-not-allowed'
                    }`}
                    title="Escuchar audio de la traducción con voz británica o española"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span className="text-xs font-medium">
                      {toLang === 'en' ? 'Escuchar (UK)' : 'Escuchar (ES)'}
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      if (!result?.translatedText) return;
                      handlePlayTarget(result.translatedText, toLang);
                    }}
                    disabled={!result?.translatedText}
                    className="p-1.5 rounded-lg bg-[#1c2614] hover:bg-[#29391d] text-[#9eb486] hover:text-white border border-[#384c24] text-[11px] font-mono disabled:opacity-40"
                    title="Replay audio"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={handleCopy}
                    disabled={!result?.translatedText}
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#202e17] hover:bg-[#2d4020] text-[#9eb486] hover:text-white border border-[#3f5728] text-xs transition-colors disabled:opacity-40"
                    title="Copiar traducción al portapapeles"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#b8df47]" />
                        <span className="text-[#b8df47] font-semibold">¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Detailed Meaning & Military Definition Section */}
          {selectedWordDetail && (
            <div className="rounded-xl bg-[#162011] border border-[#3d5226] p-4 sm:p-5 space-y-4 animate-fade-in shadow-lg">
              <div className="flex items-center justify-between pb-3 border-b border-[#293819]">
                <div className="flex items-center space-x-2.5">
                  <BookOpen className="w-5 h-5 text-[#b8df47]" />
                  <div>
                    <h3 className="font-stencil text-sm sm:text-base font-bold text-[#b8df47] uppercase tracking-wider">
                      Significado & Contexto Doctrinal: {selectedWordDetail.en}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#9eb486] mt-0.5">
                      <span>{selectedWordDetail.partOfSpeech}</span>
                      {selectedWordDetail.phoneticEn && <span>• {selectedWordDetail.phoneticEn}</span>}
                      <span className="text-[#b8df47] bg-[#223318] px-1.5 py-0.2 rounded border border-[#3e5927] font-medium" title="Pronunciación aproximada en español">
                        Sonido: "{getSpanishPhonetic(selectedWordDetail.en, selectedWordDetail.phoneticEn)}"
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handlePlayTarget(selectedWordDetail.en, 'en')}
                  className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-[#233119] hover:bg-[#2e4121] text-[#b8df47] text-xs border border-[#445e28]"
                  title="Escuchar término en inglés británico"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Pronunciar</span>
                </button>
              </div>

              {/* Definitions in Spanish and English */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3 rounded-lg bg-[#1a2514] border border-[#354821]">
                  <span className="block text-[11px] font-bold text-[#b8df47] uppercase tracking-wider mb-1">
                    Definición en Español
                  </span>
                  <p className="text-[#e2ebd3] leading-relaxed">
                    {selectedWordDetail.definitionEs}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#1a2514] border border-[#354821]">
                  <span className="block text-[11px] font-bold text-[#b8df47] uppercase tracking-wider mb-1">
                    English Definition
                  </span>
                  <p className="text-[#e2ebd3] leading-relaxed">
                    {selectedWordDetail.definitionEn}
                  </p>
                </div>
              </div>

              {/* Military & STANAG Context (if present) */}
              {selectedWordDetail.militaryContext && (
                <div className="flex items-start space-x-2.5 p-3 rounded-lg bg-[#1d2b15] border border-[#47632a] text-xs">
                  <Shield className="w-4 h-4 text-[#b8df47] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#b8df47] font-tactical uppercase tracking-wider block mb-0.5">
                      Contexto Militar Operativo (STANAG 6001 / OTAN):
                    </strong>
                    <span className="text-[#d7e6c4] leading-relaxed">
                      {selectedWordDetail.militaryContext}
                    </span>
                  </div>
                </div>
              )}

              {/* Example Sentences */}
              {selectedWordDetail.examples && selectedWordDetail.examples.length > 0 && (
                <div className="space-y-2 pt-1">
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#9eb486] font-tactical">
                    Oraciones de Ejemplo Bilingües:
                  </span>
                  <div className="space-y-2">
                    {selectedWordDetail.examples.map((ex, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-[#1a2514] border border-[#33441f] text-xs"
                      >
                        <div className="space-y-0.5 pr-2">
                          <p className="text-[#f1f8e9] font-medium">"{ex.en}"</p>
                          <p className="text-[#9eb486] italic">"{ex.es}"</p>
                        </div>
                        <button
                          onClick={() => handlePlayTarget(ex.en, 'en')}
                          className="p-1.5 rounded bg-[#223018] hover:bg-[#2d4020] text-[#b8df47] border border-[#3e5427] shrink-0"
                          title="Escuchar oración completa con acento británico"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Breakdown of Key Terms in Sentences */}
          {result && result.keyWordsEntries.length > 1 && (
            <div className="rounded-xl bg-[#151f10] border border-[#344621] p-4 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#b8df47] uppercase font-tactical">
                <Sparkles className="w-4 h-4" />
                <span>Palabras y conceptos clave identificados en la oración:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {result.keyWordsEntries.map((kw, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedWordDetail(kw)}
                    className={`text-left p-2.5 rounded-lg border transition-all ${
                      selectedWordDetail?.en === kw.en
                        ? 'bg-[#293a1c] border-[#b8df47] text-[#f2fcdb]'
                        : 'bg-[#1a2613] hover:bg-[#223319] border-[#384c24] text-[#c9d8b7]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-[#b8df47]">{kw.en}</span>
                      <ChevronRight className="w-3 h-3 text-[#7b9067]" />
                    </div>
                    <p className="text-[11px] text-[#9eb486] truncate mt-0.5">{kw.es}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Presets / Frases Tácticas para Probar con 1 Clic */}
          <div className="space-y-2.5 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9eb486] font-tactical flex items-center space-x-1.5">
                <Bookmark className="w-3.5 h-3.5 text-[#b8df47]" />
                <span>Frases y órdenes frecuentes para practicar:</span>
              </span>
              <span className="text-[10px] text-[#71855e] font-mono">
                Haz clic para traducir y escuchar
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {PRESET_PHRASES.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setInputText(p.text);
                    setFromLang(p.from);
                    setToLang(p.from === 'es' ? 'en' : 'es');
                    handleTranslate(p.text, p.from, p.from === 'es' ? 'en' : 'es');
                  }}
                  className="px-2.5 py-1 rounded-lg bg-[#1a2513] hover:bg-[#28381c] border border-[#384c24] hover:border-[#527030] text-xs text-[#d3e3be] hover:text-[#f4fde6] transition-colors"
                >
                  <span className="font-mono text-[#b8df47] text-[10px] mr-1.5">
                    [{p.from.toUpperCase()}]
                  </span>
                  <span>{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Search History */}
          {history.length > 0 && (
            <div className="pt-2 border-t border-[#263519] flex items-center space-x-2 text-xs text-[#8da277]">
              <span className="text-[11px] font-mono text-[#6c805a]">Recientes:</span>
              <div className="flex flex-wrap gap-1.5">
                {history.map((h, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setInputText(h.text);
                      setFromLang(h.from);
                      setToLang(h.from === 'es' ? 'en' : 'es');
                      handleTranslate(h.text, h.from, h.from === 'es' ? 'en' : 'es');
                    }}
                    className="px-2 py-0.5 rounded bg-[#172011] hover:bg-[#212f17] text-[11px] text-[#a6bca0] hover:text-white border border-[#31421f]"
                  >
                    {h.text}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-[#2a381c] bg-[#141d0f] flex items-center justify-between text-xs text-[#8ba075]">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#b8df47]"></span>
            <span>Motor Bilingüe IESE • Acorde al perfil lingüístico STANAG 6001</span>
          </div>

          <button
            onClick={() => {
              stopSpeaking();
              onClose();
            }}
            className="px-4 py-1.5 rounded-lg bg-[#24331a] hover:bg-[#324724] text-[#e0ecd2] hover:text-white border border-[#435e29] font-medium transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
