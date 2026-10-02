import React, { useState, useMemo, useEffect } from 'react';
import {
  BookOpen,
  Search,
  X,
  Volume2,
  Copy,
  Check,
  Bookmark,
  Shuffle,
  Filter,
  ArrowLeftRight,
  Layers,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import {
  BILINGUAL_DICTIONARY,
  DICTIONARY_CATEGORIES,
  BilingualEntry
} from '../data/bilingualDictionaryData';
import { speakBilingualText, stopSpeaking } from '../utils/audio';

interface DictionaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSearch?: string;
}

const ITEMS_PER_BATCH = 40;

export const DictionaryModal: React.FC<DictionaryModalProps> = ({
  isOpen,
  onClose,
  initialSearch = ''
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [direction, setDirection] = useState<'all' | 'en-es' | 'es-en'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedLetter, setSelectedLetter] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_BATCH);
  const [slowAudio, setSlowAudio] = useState(false);
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('iese_dictionary_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [expandedEntryId, setExpandedEntryId] = useState<string | null>(null);

  // Sync initialSearch if prop changes
  useEffect(() => {
    if (initialSearch) {
      setSearchTerm(initialSearch);
    }
  }, [initialSearch]);

  // Reset pagination when filter or search changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_BATCH);
  }, [searchTerm, direction, selectedCategory, selectedLetter, showOnlyFavorites]);

  // Save favorites to localStorage
  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => {
      const next = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      try {
        localStorage.setItem('iese_dictionary_favorites', JSON.stringify(next));
      } catch {
        // local storage quota or disabled
      }
      return next;
    });
  };

  // Play audio
  const handlePlayAudio = (text: string, lang: 'en' | 'es', id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    stopSpeaking();
    setActiveAudioId(id + '-' + lang);
    speakBilingualText(text, lang, {
      rate: slowAudio ? 0.72 : (lang === 'en' ? 0.92 : 0.95),
      onEnd: () => setActiveAudioId(null)
    });
  };

  // Copy to clipboard
  const handleCopy = (text: string, id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  // Pick a random term
  const handleRandomTerm = () => {
    if (BILINGUAL_DICTIONARY.length === 0) return;
    const randomIndex = Math.floor(Math.random() * BILINGUAL_DICTIONARY.length);
    const item = BILINGUAL_DICTIONARY[randomIndex];
    setSearchTerm(item.en);
    setSelectedCategory('Todos');
    setSelectedLetter('');
    setShowOnlyFavorites(false);
    setExpandedEntryId(item.id);
  };

  // Alphabet letters available
  const letters = useMemo(() => {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }, []);

  // Filtered dictionary entries
  const filteredEntries = useMemo(() => {
    let list = BILINGUAL_DICTIONARY;

    if (showOnlyFavorites) {
      list = list.filter(item => favorites.includes(item.id));
    }

    if (selectedCategory !== 'Todos') {
      list = list.filter(item => item.category === selectedCategory);
    }

    if (selectedLetter) {
      const char = selectedLetter.toLowerCase();
      if (direction === 'es-en') {
        list = list.filter(item => item.es.toLowerCase().startsWith(char));
      } else {
        list = list.filter(item => item.en.toLowerCase().startsWith(char));
      }
    }

    const query = searchTerm.trim().toLowerCase();
    if (query) {
      if (direction === 'en-es') {
        list = list.filter(item =>
          item.en.toLowerCase().includes(query) ||
          item.definitionEs.toLowerCase().includes(query)
        );
      } else if (direction === 'es-en') {
        list = list.filter(item =>
          item.es.toLowerCase().includes(query) ||
          item.definitionEs.toLowerCase().includes(query)
        );
      } else {
        // Universal search
        list = list.filter(item =>
          item.en.toLowerCase().includes(query) ||
          item.es.toLowerCase().includes(query) ||
          item.definitionEs.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
        );
      }
    }

    return list;
  }, [searchTerm, direction, selectedCategory, selectedLetter, showOnlyFavorites, favorites]);

  const displayedEntries = useMemo(() => {
    return filteredEntries.slice(0, visibleCount);
  }, [filteredEntries, visibleCount]);

  if (!isOpen) return null;

  return (
    <div
      id="bilingual-dictionary-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[94vh] flex flex-col bg-[var(--surface-base)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl overflow-hidden font-tactical"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shadow-xs">
              <BookOpen className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="font-stencil font-bold text-base sm:text-lg text-[var(--text-primary)] tracking-wider uppercase">
                  Diccionario Bilingüe Militar
                </h2>
                <span className="hidden sm:inline-flex text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-bold">
                  +1.200 TÉRMINOS • STANAG 6001
                </span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Español ⇄ Inglés militar, táctico, logístico, balístico y vida de cuartel con audio y fonética
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Random term button */}
            <button
              id="dictionary-random-btn"
              onClick={handleRandomTerm}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-base)] hover:bg-[var(--surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-mono font-medium transition-colors cursor-pointer"
              title="Descubrir un término al azar"
            >
              <Shuffle className="w-3.5 h-3.5 text-amber-500" />
              <span className="hidden md:inline">Al azar</span>
            </button>

            {/* Slow speech toggle */}
            <button
              id="dictionary-voice-rate-btn"
              onClick={() => setSlowAudio(!slowAudio)}
              className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg border text-xs font-mono transition-colors cursor-pointer ${
                slowAudio
                  ? 'bg-amber-500 text-white font-bold border-amber-500'
                  : 'bg-[var(--surface-base)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border-[var(--border-subtle)]'
              }`}
              title="Alternar velocidad de voz para fonética lenta (0.7x)"
            >
              <span className="text-[11px]">Voz:</span>
              <span className="font-bold">{slowAudio ? '0.7x' : '1.0x'}</span>
            </button>

            {/* Close button */}
            <button
              id="dictionary-close-btn"
              onClick={() => {
                stopSpeaking();
                onClose();
              }}
              className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-base)] transition-colors cursor-pointer"
              title="Cerrar diccionario (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search & Mode Bar */}
        <div className="p-4 sm:px-6 bg-[var(--surface-base)] border-b border-[var(--border-subtle)] space-y-3">
          <div className="flex flex-col sm:flex-row gap-2.5">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <input
                id="dictionary-search-input"
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Buscar término en español, inglés o definición doctrinaria..."
                className="w-full pl-10 pr-9 py-2.5 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] rounded-xl text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                autoFocus
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Direction Selector */}
            <div className="flex rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] p-1 self-start sm:self-auto shrink-0">
              <button
                id="dictionary-dir-all-btn"
                onClick={() => setDirection('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                  direction === 'all'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Universal
              </button>
              <button
                id="dictionary-dir-enes-btn"
                onClick={() => setDirection('en-es')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center space-x-1 ${
                  direction === 'en-es'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <span>EN</span>
                <ArrowLeftRight className="w-3 h-3" />
                <span>ES</span>
              </button>
              <button
                id="dictionary-dir-esen-btn"
                onClick={() => setDirection('es-en')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center space-x-1 ${
                  direction === 'es-en'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <span>ES</span>
                <ArrowLeftRight className="w-3 h-3" />
                <span>EN</span>
              </button>
            </div>

            {/* Saved / Favorites filter */}
            <button
              id="dictionary-favorites-toggle"
              onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl border text-xs font-mono font-semibold transition-colors cursor-pointer shrink-0 ${
                showOnlyFavorites
                  ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/40'
                  : 'bg-[var(--surface-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border-[var(--border-subtle)]'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${showOnlyFavorites ? 'fill-current' : ''}`} />
              <span>Guardados ({favorites.length})</span>
            </button>
          </div>

          {/* Categories Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-thin">
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider flex items-center space-x-1 shrink-0 mr-1">
              <Filter className="w-3 h-3" />
              <span>Área:</span>
            </span>
            {DICTIONARY_CATEGORIES.map(cat => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedLetter('');
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    active
                      ? 'bg-amber-500 text-white font-semibold shadow-xs'
                      : 'bg-[var(--surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-amber-500/30'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Quick Alphabet Jump */}
          <div className="flex items-center space-x-1 overflow-x-auto pb-0.5 text-[11px] font-mono">
            <button
              onClick={() => setSelectedLetter('')}
              className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                selectedLetter === ''
                  ? 'bg-[var(--text-primary)] text-[var(--surface-base)] font-bold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              A-Z
            </button>
            {letters.map(char => {
              const active = selectedLetter === char;
              return (
                <button
                  key={char}
                  onClick={() => setSelectedLetter(char === selectedLetter ? '' : char)}
                  className={`w-5 h-5 flex items-center justify-center rounded cursor-pointer transition-colors ${
                    active
                      ? 'bg-amber-500 text-white font-bold'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]'
                  }`}
                >
                  {char}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Metadata Bar */}
        <div className="px-4 sm:px-6 py-2 bg-[var(--surface-elevated)]/60 border-b border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-[var(--text-primary)]">
              {filteredEntries.length}
            </span>
            <span>términos encontrados</span>
            {selectedCategory !== 'Todos' && (
              <span className="px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-sans font-medium text-[11px]">
                {selectedCategory}
              </span>
            )}
            {selectedLetter && (
              <span className="px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-sans font-medium text-[11px]">
                Letra {selectedLetter}
              </span>
            )}
          </div>
          <div className="text-[11px]">
            Mostrando {Math.min(visibleCount, filteredEntries.length)} de {filteredEntries.length}
          </div>
        </div>

        {/* Word Cards Grid / List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5 bg-[var(--surface-base)]/50">
          {displayedEntries.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mx-auto">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="font-stencil text-base text-[var(--text-primary)] tracking-wide uppercase">
                No se encontraron términos coincidentes
              </h3>
              <p className="text-xs text-[var(--text-muted)] max-w-md mx-auto">
                Intente buscar con otra palabra clave en inglés o español, o seleccione la categoría &apos;Todos&apos;.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Todos');
                  setSelectedLetter('');
                  setShowOnlyFavorites(false);
                }}
                className="px-3.5 py-1.5 rounded-lg bg-amber-500 text-white text-xs font-mono font-semibold cursor-pointer hover:bg-amber-600 transition-colors"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            displayedEntries.map(entry => {
              const isFav = favorites.includes(entry.id);
              const isExpanded = expandedEntryId === entry.id;

              return (
                <div
                  key={entry.id}
                  id={`dict-card-${entry.id}`}
                  onClick={() => setExpandedEntryId(isExpanded ? null : entry.id)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isExpanded
                      ? 'bg-[var(--surface-elevated)] border-amber-500/40 shadow-md ring-1 ring-amber-500/30'
                      : 'bg-[var(--surface-elevated)]/60 border-[var(--border-subtle)] hover:border-amber-500/30 hover:bg-[var(--surface-elevated)] shadow-xs'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
                    {/* Main Word & Translation */}
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-baseline gap-2">
                        {/* English Term */}
                        <span className="font-bold text-base sm:text-lg text-[var(--text-primary)] font-sans tracking-tight">
                          {entry.en}
                        </span>

                        {/* Phonetics */}
                        <span className="font-mono text-xs text-amber-600 dark:text-amber-400 font-medium">
                          {entry.phoneticEn}
                        </span>

                        {/* Part of Speech */}
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--surface-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                          {entry.partOfSpeech}
                        </span>

                        {/* Category badge */}
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                          {entry.category}
                        </span>
                      </div>

                      {/* Spanish Translation */}
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono text-[var(--text-muted)] uppercase">ES:</span>
                        <span className="font-semibold text-sm sm:text-base text-[var(--accent-primary)] font-sans">
                          {entry.es}
                        </span>
                        <span className="text-xs text-[var(--text-muted)] font-mono italic">
                          (suena: &ldquo;{entry.phoneticEs}&rdquo;)
                        </span>
                      </div>

                      {/* Definition */}
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {entry.definitionEs}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-1.5 self-end sm:self-start shrink-0 pt-1 sm:pt-0">
                      {/* Audio EN button */}
                      <button
                        id={`dict-audio-en-${entry.id}`}
                        onClick={e => handlePlayAudio(entry.en, 'en', entry.id, e)}
                        className={`p-2 rounded-lg border transition-all cursor-pointer flex items-center space-x-1 text-xs font-mono ${
                          activeAudioId === entry.id + '-en'
                            ? 'bg-amber-500 text-white border-amber-500 animate-pulse'
                            : 'bg-[var(--surface-base)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-amber-500/40'
                        }`}
                        title="Escuchar pronunciación británica (EN)"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span className="font-semibold">EN</span>
                      </button>

                      {/* Audio ES button */}
                      <button
                        id={`dict-audio-es-${entry.id}`}
                        onClick={e => handlePlayAudio(entry.es, 'es', entry.id, e)}
                        className={`p-2 rounded-lg border transition-all cursor-pointer flex items-center space-x-1 text-xs font-mono ${
                          activeAudioId === entry.id + '-es'
                            ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] animate-pulse'
                            : 'bg-[var(--surface-base)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[var(--border-focus)]'
                        }`}
                        title="Escuchar en español"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span className="font-semibold">ES</span>
                      </button>

                      {/* Copy button */}
                      <button
                        id={`dict-copy-${entry.id}`}
                        onClick={e => handleCopy(`${entry.en} - ${entry.es}`, entry.id, e)}
                        className="p-2 rounded-lg bg-[var(--surface-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-amber-500/40 transition-colors cursor-pointer"
                        title="Copiar término y traducción"
                      >
                        {copiedId === entry.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {/* Favorite button */}
                      <button
                        id={`dict-fav-${entry.id}`}
                        onClick={e => toggleFavorite(entry.id, e)}
                        className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                          isFav
                            ? 'bg-amber-500/10 text-amber-500 border-amber-500/30'
                            : 'bg-[var(--surface-base)] text-[var(--text-muted)] hover:text-amber-500 border-[var(--border-subtle)]'
                        }`}
                        title={isFav ? 'Eliminar de guardados' : 'Guardar término'}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isFav ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Expanded Operational Example Box */}
                  <div className="mt-3 pt-3 border-t border-[var(--border-subtle)] bg-[var(--surface-base)]/70 rounded-lg p-3 space-y-1.5 text-xs">
                    <div className="flex items-center space-x-1.5 text-[11px] font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      <span>Ejemplo Doctrinario / Contexto Operacional:</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-start space-x-2">
                        <span className="text-amber-500 font-mono font-bold shrink-0">• EN:</span>
                        <p className="text-[var(--text-primary)] font-medium italic">
                          &ldquo;{entry.exampleEn}&rdquo;
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-[var(--text-muted)] font-mono font-bold shrink-0">• ES:</span>
                        <p className="text-[var(--text-muted)]">
                          {entry.exampleEs}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {/* Load More Button */}
          {visibleCount < filteredEntries.length && (
            <div className="pt-2 text-center">
              <button
                id="dictionary-load-more-btn"
                onClick={() => setVisibleCount(prev => prev + ITEMS_PER_BATCH)}
                className="px-5 py-2 rounded-xl bg-[var(--surface-elevated)] hover:bg-[var(--surface-base)] border border-[var(--border-subtle)] hover:border-amber-500/40 text-xs font-mono font-semibold text-[var(--text-primary)] transition-all cursor-pointer shadow-xs inline-flex items-center space-x-2"
              >
                <span>Cargar más términos ({filteredEntries.length - visibleCount} restantes)</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-[var(--surface-elevated)] border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[var(--text-muted)]">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Base terminológica STANAG 6001 lista (1.268 términos verificados)</span>
          </div>
          <div className="flex items-center space-x-3 text-[11px]">
            <span>Atajo: Esc para cerrar</span>
            <span>•</span>
            <span>Síntesis de voz dual EN/ES activa</span>
          </div>
        </div>
      </div>
    </div>
  );
};
