import React, { useState } from 'react';
import {
  PERSONAL_PRONOUNS_LIST,
  TENSES_PRONOUN_MATRIX,
  PRONOUN_TENSE_QUIZ_QUESTIONS,
  PersonalPronounInfo,
  TensePronounBehavior,
  PronounQuizQuestion
} from '../data/pronounsTensesData';
import { speakBritishText, stopSpeaking } from '../utils/audio';
import {
  Volume2,
  Play,
  Square,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BookOpen,
  Layers,
  HelpCircle,
  ChevronRight,
  RotateCcw,
  Search,
  Filter,
  Check
} from 'lucide-react';

interface PersonalPronounsLabViewProps {
  audioRate: number;
}

export const PersonalPronounsLabView: React.FC<PersonalPronounsLabViewProps> = ({ audioRate }) => {
  const [subTab, setSubTab] = useState<'matrix' | 'declension' | 'pitfalls' | 'quiz'>('matrix');
  const [selectedTenseId, setSelectedTenseId] = useState<string>('present-simple');
  const [selectedPronounFilter, setSelectedPronounFilter] = useState<string>('all');
  const [playingKey, setPlayingKey] = useState<string | null>(null);

  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [completedQuestions, setCompletedQuestions] = useState<Record<string, boolean>>({});

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

  const currentTense = TENSES_PRONOUN_MATRIX.find(t => t.tenseId === selectedTenseId) || TENSES_PRONOUN_MATRIX[0];

  // Filter pronoun behaviors if specific filter is set
  const filteredBehaviors = currentTense.pronounBehaviors.filter(b => {
    if (selectedPronounFilter === 'all') return true;
    if (selectedPronounFilter === 'I') return b.pronounGroup.includes('I') || b.pronounGroup.includes('All');
    if (selectedPronounFilter === '3rd') return b.pronounGroup.includes('He') || b.pronounGroup.includes('She') || b.pronounGroup.includes('All');
    if (selectedPronounFilter === 'plural') return b.pronounGroup.includes('We') || b.pronounGroup.includes('They') || b.pronounGroup.includes('You') || b.pronounGroup.includes('All');
    return true;
  });

  // Quiz handlers
  const currentQuizItem = PRONOUN_TENSE_QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectQuizOption = (idx: number) => {
    if (quizSubmitted) return;
    setSelectedAnswer(idx);
  };

  const handleCheckQuizAnswer = () => {
    if (selectedAnswer === null || quizSubmitted) return;
    setQuizSubmitted(true);
    const isCorrect = selectedAnswer === currentQuizItem.correctIndex;
    if (isCorrect) {
      setQuizScore(prev => prev + 1);
      setCompletedQuestions(prev => ({ ...prev, [currentQuizItem.id]: true }));
      handlePlayAudio(`quiz-right-${currentQuizItem.id}`, currentQuizItem.audioText);
    } else {
      handlePlayAudio(`quiz-wrong-${currentQuizItem.id}`, currentQuizItem.audioText);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setQuizSubmitted(false);
    setCurrentQuestionIndex(prev => (prev + 1) % PRONOUN_TENSE_QUIZ_QUESTIONS.length);
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setQuizSubmitted(false);
    setQuizScore(0);
    setCompletedQuestions({});
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white border border-blue-800/40 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center space-x-3.5">
          <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-200 shrink-0 shadow-inner">
            <BookOpen className="w-6 h-6 text-blue-300" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-base sm:text-lg font-bold tracking-tight text-white">
                Pronombres Personales & Concordancia en Todos los Tiempos
              </h2>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/30 text-blue-200 border border-blue-400/30">
                12 Tiempos + Modal
              </span>
            </div>
            <p className="text-xs sm:text-sm text-blue-200/90 mt-0.5">
              Guía completa: pronombres sujeto, objeto, posesivos, reflexivos y su comportamiento exacto en cada tiempo verbal con audio británico y fonética española.
            </p>
          </div>
        </div>

        {/* Global Quick Action Buttons */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => handlePlayAudio('pronouns-all-subjects', 'I, you, he, she, it, we, they')}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
            title="Escuchar todos los pronombres sujeto"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Escuchar Sujetos (A-Z)</span>
          </button>
        </div>
      </div>

      {/* Sub-Navigation Buttons */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-200/80 rounded-xl border border-slate-300">
        <button
          onClick={() => setSubTab('matrix')}
          className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            subTab === 'matrix'
              ? 'bg-slate-50 text-blue-950 shadow-sm border border-slate-300'
              : 'text-blue-900 hover:text-blue-950 hover:bg-slate-100/60'
          }`}
        >
          <Layers className="w-4 h-4 text-blue-800" />
          <span>Matriz por Tiempos Verbales (12 Tiempos)</span>
        </button>

        <button
          onClick={() => setSubTab('declension')}
          className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            subTab === 'declension'
              ? 'bg-slate-50 text-blue-950 shadow-sm border border-slate-300'
              : 'text-blue-900 hover:text-blue-950 hover:bg-slate-100/60'
          }`}
        >
          <BookOpen className="w-4 h-4 text-blue-800" />
          <span>Tabla Completa de Pronombres (Sujeto / Objeto / Posesivo / Reflexivo)</span>
        </button>

        <button
          onClick={() => setSubTab('pitfalls')}
          className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            subTab === 'pitfalls'
              ? 'bg-slate-50 text-blue-950 shadow-sm border border-slate-300'
              : 'text-blue-900 hover:text-blue-950 hover:bg-slate-100/60'
          }`}
        >
          <AlertTriangle className="w-4 h-4 text-amber-600" />
          <span>Puntos Críticos & Errores Frecuentes IESE</span>
        </button>

        <button
          onClick={() => setSubTab('quiz')}
          className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            subTab === 'quiz'
              ? 'bg-slate-50 text-blue-950 shadow-sm border border-slate-300'
              : 'text-blue-900 hover:text-blue-950 hover:bg-slate-100/60'
          }`}
        >
          <Sparkles className="w-4 h-4 text-purple-700" />
          <span>Entrenador Práctico / Quiz ({PRONOUN_TENSE_QUIZ_QUESTIONS.length} Desafíos)</span>
        </button>
      </div>

      {/* ================================================================= */}
      {/* SUBTAB 1: MATRIZ POR TIEMPOS VERBALES                             */}
      {/* ================================================================= */}
      {subTab === 'matrix' && (
        <div className="space-y-5">
          {/* Tense Selector Chips */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-300 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
              <span className="text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center space-x-1.5">
                <span>Seleccionar Tiempo Verbal:</span>
                <span className="text-blue-800 font-mono">({TENSES_PRONOUN_MATRIX.length} disponibles)</span>
              </span>

              {/* Quick Pronoun Filter */}
              <div className="flex items-center space-x-1.5 text-xs">
                <span className="text-slate-500 font-medium">Filtrar pronombres:</span>
                <select
                  value={selectedPronounFilter}
                  onChange={(e) => setSelectedPronounFilter(e.target.value)}
                  className="px-2 py-1 rounded bg-slate-100 border border-slate-300 text-xs font-semibold text-blue-950 focus:outline-hidden"
                >
                  <option value="all">Todos los Pronombres</option>
                  <option value="I">Solo "I" (1ª Singular)</option>
                  <option value="3rd">3ª Persona (He / She / It)</option>
                  <option value="plural">Plurales (We / They / You)</option>
                </select>
              </div>
            </div>

            {/* Chips Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {TENSES_PRONOUN_MATRIX.map((t) => {
                const isSelected = t.tenseId === selectedTenseId;
                return (
                  <button
                    key={t.tenseId}
                    onClick={() => setSelectedTenseId(t.tenseId)}
                    className={`px-2.5 py-2 rounded-lg text-left transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-blue-900 text-white border-blue-900 shadow-sm font-bold ring-2 ring-blue-300'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200 font-medium'
                    }`}
                  >
                    <div className="text-[11px] leading-tight truncate">{t.tenseNameSpanish}</div>
                    <div className={`text-[10px] font-mono leading-tight truncate mt-0.5 ${isSelected ? 'text-blue-200' : 'text-slate-500'}`}>
                      {t.tenseNameEnglish}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Tense Showcase Header */}
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-blue-950 flex items-center space-x-2">
                  <span>{currentTense.tenseNameSpanish}</span>
                  <span className="text-xs font-mono font-normal text-blue-800">({currentTense.tenseNameEnglish})</span>
                </h3>
                <p className="text-xs text-blue-900 mt-0.5">
                  {currentTense.formulaSummary}
                </p>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <span className="px-2 py-1 rounded bg-blue-100 text-blue-950 border border-blue-300 text-[10px] font-mono font-bold uppercase">
                  {currentTense.timeCategory}
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start space-x-2">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span><strong>Aviso Doctrinal / Táctico:</strong> {currentTense.tacticalNote}</span>
            </div>
          </div>

          {/* Pronoun Behaviors Cards */}
          <div className="grid grid-cols-1 gap-4">
            {filteredBehaviors.map((behavior, bIdx) => {
              const cardKey = `${currentTense.tenseId}-b-${bIdx}`;
              return (
                <div
                  key={cardKey}
                  className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-300 shadow-xs space-y-4 hover:border-blue-400 transition-all"
                >
                  {/* Card Title & Auxiliary Indicators */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <div className="flex items-center space-x-2.5">
                      <span className="w-8 h-8 rounded-lg bg-blue-900 text-white font-mono font-bold text-sm flex items-center justify-center shadow-xs">
                        {behavior.pronounGroup.split('/')[0].trim().substring(0, 3)}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-blue-950">
                          {behavior.pronounGroupLabel}
                        </h4>
                        <div className="text-[11px] text-slate-600 font-mono">
                          Grupo: {behavior.pronounGroup}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-950 border border-emerald-300 font-semibold">
                        Afirmativo: {behavior.auxiliaryAffirmative}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-950 border border-rose-300 font-semibold">
                        Negativo: {behavior.auxiliaryNegative}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-950 border border-blue-300 font-semibold">
                        Forma verbal: {behavior.verbForm}
                      </span>
                    </div>
                  </div>

                  {/* 3 Core Sentences (Affirmative, Negative, Question) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    
                    {/* Affirmative */}
                    <div className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-200 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-emerald-900 uppercase tracking-wider flex items-center space-x-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                          <span>Afirmativa (+)</span>
                        </span>
                        <button
                          onClick={() => handlePlayAudio(`${cardKey}-aff`, behavior.exampleAffirmative.english)}
                          className="p-1 rounded bg-emerald-100 hover:bg-emerald-200 text-emerald-900 transition-colors cursor-pointer"
                          title="Escuchar pronunciación británica"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs font-semibold text-slate-900 leading-snug">
                        "{behavior.exampleAffirmative.english}"
                      </p>
                      <p className="text-[11px] text-slate-600">
                        {behavior.exampleAffirmative.spanish}
                      </p>
                      <p className="text-[10px] font-mono text-emerald-800">
                        🗣️ [{behavior.exampleAffirmative.phonetic}]
                      </p>
                    </div>

                    {/* Negative */}
                    <div className="p-3 rounded-lg bg-rose-50/50 border border-rose-200 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-rose-900 uppercase tracking-wider flex items-center space-x-1">
                          <XCircle className="w-3 h-3 text-rose-700" />
                          <span>Negativa (-)</span>
                        </span>
                        <button
                          onClick={() => handlePlayAudio(`${cardKey}-neg`, behavior.exampleNegative.english)}
                          className="p-1 rounded bg-rose-100 hover:bg-rose-200 text-rose-900 transition-colors cursor-pointer"
                          title="Escuchar pronunciación británica"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs font-semibold text-slate-900 leading-snug">
                        "{behavior.exampleNegative.english}"
                      </p>
                      <p className="text-[11px] text-slate-600">
                        {behavior.exampleNegative.spanish}
                      </p>
                      <p className="text-[10px] font-mono text-rose-800">
                        🗣️ [{behavior.exampleNegative.phonetic}]
                      </p>
                    </div>

                    {/* Question */}
                    <div className="p-3 rounded-lg bg-blue-50/50 border border-blue-200 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-blue-900 uppercase tracking-wider flex items-center space-x-1">
                          <HelpCircle className="w-3 h-3 text-blue-700" />
                          <span>Pregunta (?)</span>
                        </span>
                        <button
                          onClick={() => handlePlayAudio(`${cardKey}-q`, behavior.exampleQuestion.english)}
                          className="p-1 rounded bg-blue-100 hover:bg-blue-200 text-blue-900 transition-colors cursor-pointer"
                          title="Escuchar pronunciación británica"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs font-semibold text-slate-900 leading-snug">
                        "{behavior.exampleQuestion.english}"
                      </p>
                      <p className="text-[11px] text-slate-600">
                        {behavior.exampleQuestion.spanish}
                      </p>
                      <p className="text-[10px] font-mono text-blue-800">
                        🗣️ [{behavior.exampleQuestion.phonetic}]
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* SUBTAB 2: TABLA COMPLETA DE DECLINACIÓN DE PRONOMBRES             */}
      {/* ================================================================= */}
      {subTab === 'declension' && (
        <div className="space-y-4">
          <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 flex items-start space-x-2.5">
            <BookOpen className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
            <div>
              <strong>Regla Doctrinal de Funciones Gramaticales:</strong>
              <ul className="list-disc list-inside mt-1 space-y-0.5 text-[11px] text-blue-900">
                <li><strong>Pronombres Sujeto:</strong> Realizan la acción del verbo principal (van antes del verbo: <em>"I call", "She patrols"</em>).</li>
                <li><strong>Pronombres Objeto:</strong> Reciben la acción del verbo o siguen a una preposición (<em>"Listen to me", "He saw them"</em>).</li>
                <li><strong>Adjetivos Posesivos:</strong> Acompañan OBLIGATORIAMENTE a un sustantivo (<em>"my rifle", "their base"</em>).</li>
                <li><strong>Pronombres Posesivos:</strong> Reemplazan al sustantivo y van solos (<em>"This map is mine", "The victory is ours"</em>).</li>
                <li><strong>Pronombres Reflexivos:</strong> La acción recae sobre el mismo sujeto que la ejecuta (<em>"He protected himself"</em>).</li>
              </ul>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-300 shadow-xs bg-slate-50">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-200/90 text-blue-950 border-b border-slate-300 font-bold">
                  <th className="p-3">Persona Gramatical</th>
                  <th className="p-3">Sujeto (Subject)</th>
                  <th className="p-3">Objeto (Object)</th>
                  <th className="p-3">Adj. Posesivo (+ Sust.)</th>
                  <th className="p-3">Pron. Posesivo (Solo)</th>
                  <th className="p-3">Reflexivo (Self)</th>
                  <th className="p-3 text-center">Audio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {PERSONAL_PRONOUNS_LIST.map((p) => {
                  return (
                    <tr key={p.id} className="hover:bg-slate-100/80 transition-colors">
                      <td className="p-3 font-semibold text-slate-800 whitespace-nowrap">
                        <div>{p.personLabel}</div>
                        <div className="text-[10px] text-slate-500 font-normal">{p.spanishTranslation}</div>
                      </td>
                      <td className="p-3 font-mono font-bold text-blue-900">
                        <div>{p.subject}</div>
                        <div className="text-[10px] text-slate-500 font-normal">🗣️ [{p.subjectPhonetic}]</div>
                      </td>
                      <td className="p-3 font-mono text-slate-800">
                        <div>{p.object}</div>
                        <div className="text-[10px] text-slate-500 font-normal">🗣️ [{p.objectPhonetic}] ({p.objectTranslation})</div>
                      </td>
                      <td className="p-3 font-mono text-slate-800">
                        <div>{p.possessiveAdjective}</div>
                        <div className="text-[10px] text-slate-500 font-normal">🗣️ [{p.possessiveAdjectivePhonetic}]</div>
                      </td>
                      <td className="p-3 font-mono text-slate-800">
                        <div>{p.possessivePronoun}</div>
                        <div className="text-[10px] text-slate-500 font-normal">🗣️ [{p.possessivePronounPhonetic}]</div>
                      </td>
                      <td className="p-3 font-mono text-slate-800">
                        <div>{p.reflexive}</div>
                        <div className="text-[10px] text-slate-500 font-normal">🗣️ [{p.reflexivePhonetic}]</div>
                      </td>
                      <td className="p-3 text-center">
                        <button
                          onClick={() => handlePlayAudio(p.id, `${p.subject}, ${p.object}, ${p.possessiveAdjective}, ${p.possessivePronoun}, ${p.reflexive}`)}
                          className="p-1.5 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-950 transition-colors cursor-pointer"
                          title={`Escuchar declinación completa de ${p.subject}`}
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Detailed Cards by Pronoun */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {PERSONAL_PRONOUNS_LIST.map((p) => (
              <div key={`notes-${p.id}`} className="p-3.5 rounded-xl bg-slate-50 border border-slate-300 space-y-1.5 text-xs">
                <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                  <span className="font-bold text-blue-950 flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded bg-blue-900 text-white font-mono">{p.subject}</span>
                    <span>{p.personLabel}</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">{p.spanishTranslation}</span>
                </div>
                <p className="text-slate-700 leading-relaxed text-[11px]">
                  <strong>Uso estándar:</strong> {p.usageNotes}
                </p>
                <p className="text-rose-900 leading-relaxed text-[11px] bg-rose-50/70 p-2 rounded border border-rose-200">
                  <strong>⚠️ Error común:</strong> {p.commonMistakes}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* SUBTAB 3: PUNTOS CRÍTICOS & ERRORES FRECUENTES                     */}
      {/* ================================================================= */}
      {subTab === 'pitfalls' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-1">
            <h3 className="text-sm font-bold text-amber-950 flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>Los 5 Errores Más Severos de Pronombres en Exámenes Militares</span>
            </h3>
            <p className="text-xs text-amber-900">
              Estos errores causan descalificación o pérdida inmediata de puntos en pruebas de redacción y comprensión STANAG 6001.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Pitfall 1 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-300 space-y-2 text-xs">
              <div className="font-bold text-blue-950 flex items-center justify-between">
                <span>1. "He don't" vs "He doesn't"</span>
                <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 font-mono text-[10px] font-bold">Presente Simple</span>
              </div>
              <div className="space-y-1 bg-rose-50 p-2.5 rounded border border-rose-200 text-rose-900">
                <div>❌ <em>"Captain Davis don't know the radio frequency."</em> (Incorrecto)</div>
              </div>
              <div className="space-y-1 bg-emerald-50 p-2.5 rounded border border-emerald-200 text-emerald-950">
                <div>✔️ <em>"Captain Davis doesn't know the radio frequency."</em> (Correcto)</div>
              </div>
              <p className="text-slate-600 text-[11px]">
                En 3ª persona singular (he, she, it), el auxiliar negativo en presente simple es siempre <strong>DOES NOT (doesn't)</strong>, jamás "don't".
              </p>
            </div>

            {/* Pitfall 2 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-300 space-y-2 text-xs">
              <div className="font-bold text-blue-950 flex items-center justify-between">
                <span>2. "They was" vs "They were"</span>
                <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 font-mono text-[10px] font-bold">Pasado To Be</span>
              </div>
              <div className="space-y-1 bg-rose-50 p-2.5 rounded border border-rose-200 text-rose-900">
                <div>❌ <em>"The soldiers was at Checkpoint Bravo yesterday."</em> (Incorrecto)</div>
              </div>
              <div className="space-y-1 bg-emerald-50 p-2.5 rounded border border-emerald-200 text-emerald-950">
                <div>✔️ <em>"The soldiers were at Checkpoint Bravo yesterday."</em> (Correcto)</div>
              </div>
              <p className="text-slate-600 text-[11px]">
                Los pronombres plurales (we, you, they) toman obligatoriamente <strong>WERE</strong> en pasado. "Was" es exclusivo de I, he, she e it.
              </p>
            </div>

            {/* Pitfall 3 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-300 space-y-2 text-xs">
              <div className="font-bold text-blue-950 flex items-center justify-between">
                <span>3. "Me and Major Davis went" vs "Major Davis and I went"</span>
                <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 font-mono text-[10px] font-bold">Sujeto vs Objeto</span>
              </div>
              <div className="space-y-1 bg-rose-50 p-2.5 rounded border border-rose-200 text-rose-900">
                <div>❌ <em>"Me and the lieutenant completed the patrol."</em> (Incorrecto)</div>
              </div>
              <div className="space-y-1 bg-emerald-50 p-2.5 rounded border border-emerald-200 text-emerald-950">
                <div>✔️ <em>"The lieutenant and I completed the patrol."</em> (Correcto)</div>
              </div>
              <p className="text-slate-600 text-[11px]">
                "Me" es pronombre objeto (recibe la acción). Para sujetos que ejecutan la acción se debe usar "I", y por cortesía formal militar se coloca la otra persona primero.
              </p>
            </div>

            {/* Pitfall 4 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-300 space-y-2 text-xs">
              <div className="font-bold text-blue-950 flex items-center justify-between">
                <span>4. "Its" (posesivo) vs "It's" (it is / it has)</span>
                <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 font-mono text-[10px] font-bold">Ortografía & Posesivos</span>
              </div>
              <div className="space-y-1 bg-rose-50 p-2.5 rounded border border-rose-200 text-rose-900">
                <div>❌ <em>"The patrol tank lost it's antenna in the forest."</em> (Incorrecto)</div>
              </div>
              <div className="space-y-1 bg-emerald-50 p-2.5 rounded border border-emerald-200 text-emerald-950">
                <div>✔️ <em>"The patrol tank lost its antenna in the forest."</em> (Correcto)</div>
              </div>
              <p className="text-slate-600 text-[11px]">
                Los pronombres posesivos nunca llevan apóstrofe (<em>its, hers, theirs, ours</em>). "It's" significa <em>"It is"</em> o <em>"It has"</em>.
              </p>
            </div>

            {/* Pitfall 5 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-300 space-y-2 text-xs md:col-span-2">
              <div className="font-bold text-blue-950 flex items-center justify-between">
                <span>5. "She have arrived" vs "She has arrived"</span>
                <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 font-mono text-[10px] font-bold">Presente Perfecto</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="bg-rose-50 p-2.5 rounded border border-rose-200 text-rose-900">
                  <div>❌ <em>"The medical officer have arrived at the airfield."</em></div>
                </div>
                <div className="bg-emerald-50 p-2.5 rounded border border-emerald-200 text-emerald-950">
                  <div>✔️ <em>"The medical officer has arrived at the airfield."</em></div>
                </div>
              </div>
              <p className="text-slate-600 text-[11px]">
                En Presente Perfecto y Presente Perfecto Continuo, la 3ª persona singular (he, she, it) utiliza obligatoriamente el auxiliar <strong>HAS</strong> (hasn't).
              </p>
            </div>

          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* SUBTAB 4: ENTRENADOR PRÁCTICO / QUIZ DE PRONOMBRES & TIEMPOS       */}
      {/* ================================================================= */}
      {subTab === 'quiz' && (
        <div className="space-y-5">
          {/* Quiz Stats Bar */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-300 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-300 flex items-center justify-center text-purple-900 font-bold font-mono">
                {currentQuestionIndex + 1}/{PRONOUN_TENSE_QUIZ_QUESTIONS.length}
              </div>
              <div>
                <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider">
                  Desafío: {currentQuizItem.tenseName}
                </h4>
                <div className="text-[11px] text-slate-500 font-medium">
                  Objetivo: Concordancia de "{currentQuizItem.targetPronoun}"
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-950 font-bold border border-blue-300">
                Puntaje: {quizScore} / {PRONOUN_TENSE_QUIZ_QUESTIONS.length}
              </span>
              <button
                onClick={handleResetQuiz}
                className="flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-200 hover:bg-slate-300 text-slate-800 transition-colors cursor-pointer"
                title="Reiniciar cuestionario"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar</span>
              </button>
            </div>
          </div>

          {/* Current Question Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-300 shadow-sm space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wide">
                Instrucción:
              </span>
              <p className="text-sm sm:text-base font-semibold text-slate-900">
                {currentQuizItem.prompt}
              </p>
              
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-sm sm:text-base font-mono font-bold text-blue-950">
                "{currentQuizItem.sentenceWithBlank}"
              </div>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentQuizItem.options.map((option, oIdx) => {
                const isSelected = selectedAnswer === oIdx;
                const isCorrect = oIdx === currentQuizItem.correctIndex;
                let btnStyle = 'bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-300';

                if (isSelected && !quizSubmitted) {
                  btnStyle = 'bg-blue-900 text-white border-blue-900 ring-2 ring-blue-400 font-bold';
                } else if (quizSubmitted) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-600 text-white border-emerald-700 font-bold shadow-xs';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-rose-600 text-white border-rose-700 font-bold line-through';
                  } else {
                    btnStyle = 'bg-slate-100 text-slate-400 border-slate-200 opacity-60';
                  }
                }

                return (
                  <button
                    key={`opt-${oIdx}`}
                    onClick={() => handleSelectQuizOption(oIdx)}
                    disabled={quizSubmitted}
                    className={`p-3 rounded-xl text-left text-xs sm:text-sm font-mono transition-all cursor-pointer border flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {quizSubmitted && isCorrect && <Check className="w-4 h-4 text-white" />}
                    {quizSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-white" />}
                  </button>
                );
              })}
            </div>

            {/* Feedback & Actions */}
            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                {!quizSubmitted ? (
                  <button
                    onClick={handleCheckQuizAnswer}
                    disabled={selectedAnswer === null}
                    className="px-5 py-2 rounded-xl bg-blue-950 hover:bg-blue-900 text-white text-xs sm:text-sm font-bold shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Verificar Respuesta
                  </button>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                        selectedAnswer === currentQuizItem.correctIndex
                          ? 'bg-emerald-100 text-emerald-950 border border-emerald-300'
                          : 'bg-rose-100 text-rose-950 border border-rose-300'
                      }`}>
                        {selectedAnswer === currentQuizItem.correctIndex ? '¡Excelente! Respuesta Correcta' : 'Incorrecto'}
                      </span>
                      <button
                        onClick={() => handlePlayAudio(`quiz-full-${currentQuizItem.id}`, currentQuizItem.audioText)}
                        className="flex items-center space-x-1 px-2.5 py-1 rounded bg-blue-100 hover:bg-blue-200 text-blue-950 text-xs font-semibold transition-colors cursor-pointer"
                        title="Escuchar oración completa correcta"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Escuchar Oración Completa</span>
                      </button>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      💡 <strong>Explicación:</strong> {currentQuizItem.explanation}
                    </p>
                  </div>
                )}
              </div>

              {quizSubmitted && (
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center space-x-1.5 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer shrink-0"
                >
                  <span>Siguiente Pregunta</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
