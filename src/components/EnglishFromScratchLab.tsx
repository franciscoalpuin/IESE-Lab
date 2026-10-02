import React, { useState } from 'react';
import {
  ENGLISH_ALPHABET_AZ,
  NUMBERS_1_TO_20,
  NUMBERS_TENS,
  BASIC_MATH_OPERATIONS,
  TIME_CIVILIAN_VS_MILITARY,
  SPORTS_ACTIVITIES,
  HOBBIES_PASTIMES,
  AlphabetLetter,
  SportActivity
} from '../data/everydayLifeData';
import { speakBritishText, stopSpeaking } from '../utils/audio';
import { GrammarRulesLabView } from './GrammarRulesLabView';
import { PersonalPronounsLabView } from './PersonalPronounsLabView';
import { GrammarLab } from './GrammarLab';
import {
  X,
  Volume2,
  BookOpen,
  Calculator,
  Clock,
  Activity,
  Heart,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  ArrowRight,
  FileText,
  Users,
  Zap
} from 'lucide-react';

interface EnglishFromScratchLabProps {
  isOpen: boolean;
  onClose: () => void;
  audioRate: number;
}

export const EnglishFromScratchLab: React.FC<EnglishFromScratchLabProps> = ({
  isOpen,
  onClose,
  audioRate
}) => {
  const [activeTab, setActiveTab] = useState<'alphabet' | 'numbers' | 'time' | 'sports' | 'hobbies' | 'grammar' | 'pronouns' | 'grammar-lab'>('pronouns');
  const [playingId, setPlayingId] = useState<string | null>(null);

  // Alphabet Speller State
  const [spellerText, setSpellerText] = useState('FRANCISCO');
  const [selectedRhymeFilter, setSelectedRhymeFilter] = useState<string>('all');

  // Math Quiz State
  const [mathNum1, setMathNum1] = useState(12);
  const [mathNum2, setMathNum2] = useState(5);
  const [mathOp, setMathOp] = useState<'+' | '-'>('+');
  const [userMathAnswer, setUserMathAnswer] = useState('');
  const [mathFeedback, setMathFeedback] = useState<{ correct: boolean; text: string } | null>(null);

  // Sports Sorter Game State
  const [currentSportIndex, setCurrentSportIndex] = useState(0);
  const [sportsScore, setSportsScore] = useState(0);
  const [sportsAnswered, setSportsAnswered] = useState(0);
  const [sportsFeedback, setSportsFeedback] = useState<string | null>(null);

  if (!isOpen) return null;

  const playAudio = (id: string, text: string) => {
    stopSpeaking();
    setPlayingId(id);
    speakBritishText(text, {
      rate: audioRate,
      onEnd: () => setPlayingId(null)
    });
  };

  // Spell out text letter by letter
  const spelledLetters = spellerText.toUpperCase().split('').map(char => {
    const found = ENGLISH_ALPHABET_AZ.find(item => item.letter === char);
    return {
      char,
      letterObj: found
    };
  });

  const playSpelledSequence = () => {
    const speech = spelledLetters
      .map(item => item.letterObj ? item.char : item.char)
      .join(', ');
    playAudio('speller-seq', speech);
  };

  // Generate new math problem
  const generateNewMathProblem = () => {
    const isPlus = Math.random() > 0.4;
    const n1 = isPlus ? Math.floor(Math.random() * 30) + 1 : Math.floor(Math.random() * 40) + 15;
    const n2 = isPlus ? Math.floor(Math.random() * 20) + 1 : Math.floor(Math.random() * 14) + 1;
    setMathNum1(n1);
    setMathNum2(n2);
    setMathOp(isPlus ? '+' : '-');
    setUserMathAnswer('');
    setMathFeedback(null);
  };

  const verifyMathAnswer = () => {
    const expected = mathOp === '+' ? mathNum1 + mathNum2 : mathNum1 - mathNum2;
    const userVal = parseInt(userMathAnswer.trim(), 10);
    if (isNaN(userVal)) return;

    const opWord = mathOp === '+' ? 'plus' : 'minus';
    const spokenSentence = `${mathNum1} ${opWord} ${mathNum2} equals ${expected}.`;

    if (userVal === expected) {
      setMathFeedback({
        correct: true,
        text: `¡Correcto! ${spokenSentence}`
      });
      playAudio('math-correct', spokenSentence);
    } else {
      setMathFeedback({
        correct: false,
        text: `Incorrecto. ${spokenSentence} (Tu respuesta: ${userVal})`
      });
      playAudio('math-incorrect', spokenSentence);
    }
  };

  // Sports sorter answer handler
  const handleSportCategoryChoice = (chosenCat: 'play' | 'go' | 'do') => {
    const targetSport = SPORTS_ACTIVITIES[currentSportIndex];
    const isCorrect = chosenCat === targetSport.category;

    setSportsAnswered(prev => prev + 1);
    if (isCorrect) {
      setSportsScore(prev => prev + 1);
      setSportsFeedback(`¡Excelente! Con ${targetSport.name} se usa "${chosenCat.toUpperCase()}". ${targetSport.reasonRule}`);
      playAudio('sport-correct', targetSport.exampleSentence);
    } else {
      setSportsFeedback(`¡Atención! La colocación correcta es "${targetSport.category.toUpperCase()} ${targetSport.name}". ${targetSport.reasonRule}`);
      playAudio('sport-wrong', targetSport.exampleSentence);
    }
  };

  const nextSport = () => {
    setSportsFeedback(null);
    setCurrentSportIndex((prev) => (prev + 1) % SPORTS_ACTIVITIES.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-xs">
      <div className="w-full max-w-5xl h-[92vh] bg-slate-50 border border-slate-300 rounded-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-slate-300 bg-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center text-blue-950 shadow-xs">
              <BookOpen className="w-5 h-5 text-blue-900" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-stencil font-bold text-sm sm:text-base text-blue-950 uppercase tracking-wide">
                  Laboratorio de Inglés desde Cero (A1 Fundamentos)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-blue-950 border border-slate-300 font-bold">
                  Vida Cotidiana & Cuartel
                </span>
              </div>
              <p className="text-[11px] text-blue-900 font-medium">
                Programa Oficial del IESE • Abecedario, Números, Horas, Deportes, Pasatiempos y Reglas Gramaticales
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-300 border border-slate-300 text-blue-950 transition-colors cursor-pointer"
            title="Cerrar laboratorio"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-1.5 px-4 sm:px-6 py-2.5 bg-slate-200 border-b border-slate-300 overflow-x-auto">
          <button
            onClick={() => setActiveTab('pronouns')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-tactical transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'pronouns'
                ? 'bg-slate-100 text-blue-950 border-2 border-blue-900 shadow-sm font-bold'
                : 'text-blue-900 hover:text-blue-950 hover:bg-slate-100/70 border border-transparent font-medium'
            }`}
          >
            <Users className="w-3.5 h-3.5 text-blue-900" />
            <span className="font-bold">Pronombres Personales</span>
            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-950 font-bold border border-indigo-300">Todos los Tiempos</span>
          </button>

          <button
            onClick={() => setActiveTab('grammar-lab')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-tactical transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'grammar-lab'
                ? 'bg-slate-100 text-blue-950 border-2 border-[#6e8f2a] shadow-sm font-bold'
                : 'text-blue-900 hover:text-blue-950 hover:bg-slate-100/70 border border-transparent font-medium'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-[#6e8f2a]" />
            <span className="font-bold">Grammar Lab</span>
            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-950 font-bold border border-emerald-300">Práctica Dinámica</span>
          </button>

          <button
            onClick={() => setActiveTab('grammar')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-tactical transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'grammar'
                ? 'bg-slate-100 text-blue-950 border-2 border-blue-900 shadow-sm font-bold'
                : 'text-blue-900 hover:text-blue-950 hover:bg-slate-100/70 border border-transparent font-medium'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-blue-900" />
            <span className="font-bold">Reglas Gramaticales</span>
            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-blue-100 text-blue-950 font-bold border border-blue-300">35 Temas + Tiempos</span>
          </button>

          <button
            onClick={() => setActiveTab('alphabet')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-tactical transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'alphabet'
                ? 'bg-slate-100 text-blue-950 border-2 border-blue-900 shadow-sm font-bold'
                : 'text-blue-900 hover:text-blue-950 hover:bg-slate-100/70 border border-transparent font-medium'
            }`}
          >
            <span className="font-mono font-bold">A-Z</span>
            <span>Abecedario & Deletreo</span>
          </button>

          <button
            onClick={() => setActiveTab('numbers')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-tactical transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'numbers'
                ? 'bg-slate-100 text-blue-950 border-2 border-blue-900 shadow-sm font-bold'
                : 'text-blue-900 hover:text-blue-950 hover:bg-slate-100/70 border border-transparent font-medium'
            }`}
          >
            <Calculator className="w-3.5 h-3.5 text-blue-900" />
            <span>Números 1-100 & Sumar/Restar</span>
          </button>

          <button
            onClick={() => setActiveTab('time')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-tactical transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'time'
                ? 'bg-slate-100 text-blue-950 border-2 border-blue-900 shadow-sm font-bold'
                : 'text-blue-900 hover:text-blue-950 hover:bg-slate-100/70 border border-transparent font-medium'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-blue-900" />
            <span>Horario Civil vs Militar</span>
          </button>

          <button
            onClick={() => setActiveTab('sports')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-tactical transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'sports'
                ? 'bg-slate-100 text-blue-950 border-2 border-blue-900 shadow-sm font-bold'
                : 'text-blue-900 hover:text-blue-950 hover:bg-slate-100/70 border border-transparent font-medium'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-blue-900" />
            <span>Deportes (Play / Go / Do)</span>
          </button>

          <button
            onClick={() => setActiveTab('hobbies')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-tactical transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'hobbies'
                ? 'bg-slate-100 text-blue-950 border-2 border-blue-900 shadow-sm font-bold'
                : 'text-blue-900 hover:text-blue-950 hover:bg-slate-100/70 border border-transparent font-medium'
            }`}
          >
            <Heart className="w-3.5 h-3.5 text-blue-900" />
            <span>Pasatiempos & Rutina</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-100 space-y-6">

          {/* ============================================================= */}
          {/* TAB 1: EL ABECEDARIO NORMAL EN INGLÉS (A-Z) & DELETREO */}
          {/* ============================================================= */}
          {activeTab === 'alphabet' && (
            <div className="space-y-6">
              
              {/* Pedagogical Banner */}
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 shadow-sm">
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-blue-950 font-tactical">
                      El Abecedario Inglés Normal (A-Z) y Reglas de Pronunciación
                    </h3>
                    <p className="text-xs text-blue-900 mt-1 leading-relaxed">
                      El abecedario inglés cuenta con 26 letras. En la vida cotidiana y militar se utiliza permanentemente para deletrear nombres propios, apellidos, correos electrónicos y códigos de identificación.
                      Haz clic en cualquier letra para escuchar su pronunciación británica modelo y su guía fonética aproximada al español.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Name & Word Speller */}
              <div className="p-4 rounded-xl bg-slate-200/90 border border-slate-300 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider font-mono">
                      Simulador de Deletreo Personal (Spell Your Name)
                    </h4>
                    <p className="text-[11px] text-blue-900">
                      Escribe tu nombre, apellido o cualquier palabra y escúchala deletreada en inglés letra por letra.
                    </p>
                  </div>
                  <button
                    onClick={playSpelledSequence}
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-950 border border-blue-950 text-white text-xs font-medium transition-all shadow-xs cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Deletrear en Voz Alta</span>
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={spellerText}
                    onChange={(e) => setSpellerText(e.target.value.toUpperCase())}
                    placeholder="Escribe un nombre o palabra..."
                    maxLength={20}
                    className="flex-1 px-3 py-2 rounded-lg bg-white border border-slate-300 text-blue-950 font-mono text-sm tracking-wider uppercase focus:outline-hidden focus:border-blue-700 font-bold"
                  />
                  <button
                    onClick={() => setSpellerText('ARGENTINA')}
                    className="px-2.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[11px] text-blue-950 font-medium cursor-pointer"
                  >
                    Ejemplo: ARGENTINA
                  </button>
                  <button
                    onClick={() => setSpellerText('SMITH')}
                    className="px-2.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[11px] text-blue-950 font-medium cursor-pointer"
                  >
                    SMITH
                  </button>
                </div>

                {/* Spelled Letter Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {spelledLetters.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => item.letterObj && playAudio(`speller-card-${idx}`, item.letterObj.letter)}
                      className="px-2.5 py-2 rounded-lg bg-white border border-slate-300 flex flex-col items-center justify-center min-w-[50px] hover:border-blue-700 cursor-pointer transition-colors shadow-2xs"
                      title={item.letterObj ? `Pronunciación: ${item.letterObj.spanishPhonetic}` : undefined}
                    >
                      <span className="font-stencil text-base font-bold text-blue-950">{item.char}</span>
                      <span className="text-[10px] font-mono text-blue-800 font-semibold">
                        {item.letterObj ? item.letterObj.spanishPhonetic : '—'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 26 Letters Matrix */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider font-mono">
                    Matriz Completa de las 26 Letras del Abecedario
                  </h4>
                  <span className="text-[10px] font-mono text-blue-800 font-semibold">
                    Toca cualquier letra para escucharla
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-2.5">
                  {ENGLISH_ALPHABET_AZ.map((letter) => {
                    const isPlaying = playingId === `letter-${letter.letter}`;
                    return (
                      <button
                        key={letter.letter}
                        type="button"
                        onClick={() => playAudio(`letter-${letter.letter}`, letter.letter)}
                        className={`p-3 rounded-xl border text-left transition-all relative group cursor-pointer ${
                          isPlaying
                            ? 'bg-blue-50/70 border-2 border-blue-700 shadow-sm'
                            : 'bg-white hover:bg-slate-50 border-slate-300 hover:border-slate-400'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-stencil text-2xl font-bold text-blue-950 group-hover:scale-110 transition-transform">
                            {letter.letter}
                          </span>
                          <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'text-blue-900 animate-pulse' : 'text-blue-800'}`} />
                        </div>
                        
                        <div className="mt-1">
                          <div className="text-xs font-mono font-bold text-blue-950">
                            "{letter.spanishPhonetic}"
                          </div>
                          <div className="text-[10px] font-mono text-blue-800 font-medium">
                            {letter.soundIpa}
                          </div>
                        </div>

                        <div className="mt-2 pt-1.5 border-t border-slate-200 text-[9px] text-blue-900 font-medium truncate">
                          {letter.exampleWord}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

          {/* ============================================================= */}
          {/* TAB 2: NÚMEROS 1 AL 100 Y OPERACIONES MATEMÁTICAS */}
          {/* ============================================================= */}
          {activeTab === 'numbers' && (
            <div className="space-y-6">

              {/* Banner */}
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 shadow-sm">
                <div className="flex items-start space-x-3">
                  <Calculator className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-blue-950 font-tactical">
                      Números del 1 al 100 y Operaciones Matemáticas (+, -, ×, ÷, =)
                    </h3>
                    <p className="text-xs text-blue-900 mt-1 leading-relaxed">
                      En el estándar del IESE aprender a contar y operar numéricamente es prioritario para inventarios, efectivos, distancias, coordenadas, precios y horas.
                      Aprende la diferencia fonética crucial entre terminaciones en <strong>-TEEN</strong> (acento agudo al final) y <strong>-TY</strong> (acento grave al inicio).
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Math Operator Challenge */}
              <div className="p-4 rounded-xl bg-slate-200/90 border border-slate-300 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider font-mono flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-blue-900" />
                    <span>Desafío Interactivo de Sumar y Restar en Inglés</span>
                  </h4>
                  <button
                    onClick={generateNewMathProblem}
                    className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs text-blue-950 font-medium cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Nuevo Ejercicio</span>
                  </button>
                </div>

                <div className="p-4 rounded-lg bg-white border border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
                  <div className="flex items-center space-x-3">
                    <span className="font-stencil text-2xl sm:text-3xl font-bold text-blue-950">
                      {mathNum1} {mathOp} {mathNum2} = ?
                    </span>
                    <button
                      onClick={() => playAudio('math-prob', `${mathNum1} ${mathOp === '+' ? 'plus' : 'minus'} ${mathNum2}`)}
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-blue-950 cursor-pointer"
                      title="Escuchar en inglés"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center space-x-2 w-full sm:w-auto">
                    <input
                      type="number"
                      value={userMathAnswer}
                      onChange={(e) => setUserMathAnswer(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && verifyMathAnswer()}
                      placeholder="Resultado numérico..."
                      className="w-36 px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-blue-950 font-mono text-sm focus:outline-hidden focus:border-blue-700 font-bold"
                    />
                    <button
                      onClick={verifyMathAnswer}
                      className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-950 border border-blue-950 text-white text-xs font-bold font-tactical shadow-md cursor-pointer"
                    >
                      Verificar
                    </button>
                  </div>
                </div>

                {mathFeedback && (
                  <div className={`p-3 rounded-lg border flex items-center space-x-2.5 text-xs ${
                    mathFeedback.correct
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold'
                      : 'bg-rose-50 border-rose-300 text-rose-950 font-semibold'
                  }`}>
                    {mathFeedback.correct ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    )}
                    <span className="font-medium">{mathFeedback.text}</span>
                  </div>
                )}
              </div>

              {/* Math Operations Reference Table */}
              <div>
                <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider font-mono mb-2">
                  Reglas de Operaciones Matemáticas Básicas en Inglés
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {BASIC_MATH_OPERATIONS.map((op) => (
                    <div key={op.name} className="p-3 rounded-xl bg-white border border-slate-300 space-y-1.5 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="w-7 h-7 rounded-md bg-slate-100 border border-slate-300 flex items-center justify-center font-stencil text-lg font-bold text-blue-950">
                            {op.symbol}
                          </span>
                          <span className="text-xs font-bold text-blue-950">{op.name}</span>
                        </div>
                        <button
                          onClick={() => playAudio(`math-op-${op.symbol}`, op.spokenExample)}
                          className="p-1.5 rounded-md bg-slate-100 hover:bg-slate-200 border border-slate-300 text-blue-950 cursor-pointer"
                          title="Escuchar ejemplo"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] font-mono text-blue-950 bg-slate-100 px-2 py-1 rounded border border-slate-200 font-semibold">
                        {op.exampleFormula} → "{op.spokenExample}"
                      </div>
                      <div className="text-[10px] text-blue-900">
                        {op.translation}
                      </div>
                      <div className="text-[9px] text-blue-800 italic">
                        Aplicación: {op.tacticalDailyApplication}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Numbers 1 to 20 Grid */}
              <div>
                <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider font-mono mb-2">
                  Números del 0 al 20
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2">
                  {NUMBERS_1_TO_20.map((item) => (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => playAudio(`num-${item.number}`, item.word)}
                      className="p-2.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-left transition-all group cursor-pointer shadow-2xs hover:border-slate-400"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-stencil text-lg font-bold text-blue-950">{item.number}</span>
                        <Volume2 className="w-3 h-3 text-blue-800 group-hover:text-blue-950" />
                      </div>
                      <div className="text-xs font-bold text-blue-950 capitalize">{item.word}</div>
                      <div className="text-[10px] font-mono text-blue-800">"{item.spanishPhonetic}"</div>
                      {item.note && (
                        <div className="text-[9px] text-amber-900 mt-1 leading-tight font-medium">{item.note}</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* The Tens & -TEEN vs -TY Contrast */}
              <div className="p-4 rounded-xl bg-slate-200/90 border border-slate-300 space-y-3">
                <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider font-stencil">
                  Las Decenas (30 a 100) y el Contraste Vital "-TEEN" vs "-TY"
                </h4>
                <p className="text-xs text-blue-900">
                  En inglés británico el error más común es confundir <strong>13 (thirTEEN)</strong> con <strong>30 (THIRty)</strong>.
                  El sufijo <strong>-TEEN</strong> lleva la fuerza en la última sílaba, mientras que <strong>-TY</strong> lleva el acento en la primera.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {NUMBERS_TENS.map((item) => (
                    <div
                      key={item.number}
                      className="p-2.5 rounded-lg bg-white border border-slate-300 flex items-center justify-between shadow-2xs"
                    >
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-stencil text-base font-bold text-blue-950">{item.number}</span>
                          <span className="text-xs font-bold text-blue-950 capitalize">{item.word}</span>
                        </div>
                        <span className="text-[10px] font-mono text-blue-800">"{item.spanishPhonetic}"</span>
                      </div>
                      <button
                        onClick={() => playAudio(`ten-${item.number}`, item.word)}
                        className="p-1.5 rounded-md bg-slate-100 hover:bg-slate-200 border border-slate-300 text-blue-950 cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ============================================================= */}
          {/* TAB 3: HORARIO CIVIL VS HORARIO MILITAR */}
          {/* ============================================================= */}
          {activeTab === 'time' && (
            <div className="space-y-6">

              {/* Banner */}
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 shadow-sm">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-blue-950 font-tactical">
                      Horario Civil (12 Horas con AM/PM) vs Horario Militar (24 Horas)
                    </h3>
                    <p className="text-xs text-blue-900 mt-1 leading-relaxed">
                      El personal militar debe dominar con absoluta naturalidad tanto la forma civil británica (ej. <em>"half past seven"</em> para las 7:30, <em>"quarter to four"</em> para las 3:45) como la forma militar de 24 horas (ej. <em>"zero-seven-thirty hours"</em>, <em>"fifteen-forty-five hours"</em>).
                    </p>
                  </div>
                </div>
              </div>

              {/* Side-by-Side Comparison Table */}
              <div className="space-y-2.5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {TIME_CIVILIAN_VS_MILITARY.map((time, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-slate-300 space-y-2.5 hover:border-slate-400 transition-all shadow-2xs"
                    >
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <span className="text-xs font-bold text-blue-950 font-tactical">
                          {time.contextUsage}
                        </span>
                        <div className="flex items-center space-x-1.5">
                          <button
                            onClick={() => playAudio(`civ-${idx}`, time.civilianPronunciation)}
                            className="px-2 py-0.5 rounded bg-slate-100 border border-slate-300 text-[10px] text-blue-950 flex items-center space-x-1 hover:bg-slate-200 cursor-pointer font-medium"
                            title="Escuchar forma civil"
                          >
                            <Volume2 className="w-3 h-3 text-blue-900" />
                            <span>Civil</span>
                          </button>
                          <button
                            onClick={() => playAudio(`mil-${idx}`, time.militaryPronunciation)}
                            className="px-2 py-0.5 rounded bg-blue-900 border border-blue-950 text-[10px] text-white flex items-center space-x-1 hover:bg-blue-950 cursor-pointer font-medium"
                            title="Escuchar forma militar"
                          >
                            <Volume2 className="w-3 h-3" />
                            <span>Militar</span>
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {/* Civil Box */}
                        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                          <span className="text-[10px] font-mono text-blue-800 uppercase block font-semibold">Horario Civil (12h)</span>
                          <span className="font-bold text-blue-950 text-sm block mt-0.5">{time.digitalCivil}</span>
                          <span className="text-[11px] text-blue-900 italic block mt-0.5">"{time.civilianPronunciation}"</span>
                        </div>

                        {/* Military Box */}
                        <div className="p-2 rounded-lg bg-blue-50/70 border border-blue-300">
                          <span className="text-[10px] font-mono text-blue-900 uppercase block font-bold">Horario Militar (24h)</span>
                          <span className="font-stencil font-bold text-blue-950 text-sm block mt-0.5">{time.military24h}</span>
                          <span className="text-[11px] text-blue-950 font-mono block mt-0.5 font-medium">"{time.militaryPronunciation}"</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clock Rule Guide */}
              <div className="p-4 rounded-xl bg-slate-200/90 border border-slate-300 space-y-2">
                <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider font-mono">
                  Fórmulas Clave para Decir la Hora en Inglés
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-300 shadow-2xs">
                    <span className="text-blue-950 font-bold block">O'CLOCK (En punto)</span>
                    <span className="text-blue-900 text-[11px] block mt-1">It is eight o'clock (8:00). Se usa únicamente con horas exactas.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-slate-300 shadow-2xs">
                    <span className="text-blue-950 font-bold block">HALF PAST (Y media)</span>
                    <span className="text-blue-900 text-[11px] block mt-1">It is half past ten (10:30). Significa literalmente "media hora pasada".</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-slate-300 shadow-2xs">
                    <span className="text-blue-950 font-bold block">QUARTER PAST (Y cuarto)</span>
                    <span className="text-blue-900 text-[11px] block mt-1">It is quarter past two (2:15). Quince minutos pasadas las dos.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-slate-300 shadow-2xs">
                    <span className="text-blue-950 font-bold block">QUARTER TO (Menos cuarto)</span>
                    <span className="text-blue-900 text-[11px] block mt-1">It is quarter to five (4:45). Quince minutos para las cinco.</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ============================================================= */}
          {/* TAB 4: DEPORTES Y ACTIVIDAD FÍSICA (PLAY / GO / DO) */}
          {/* ============================================================= */}
          {activeTab === 'sports' && (
            <div className="space-y-6">

              {/* Banner */}
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 shadow-sm">
                <div className="flex items-start space-x-3">
                  <Activity className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-blue-950 font-tactical">
                      Deportes y Acondicionamiento Físico: Regla de Oro (PLAY, GO, DO)
                    </h3>
                    <p className="text-xs text-blue-900 mt-1 leading-relaxed">
                      En inglés no existe un solo verbo general para practicar deportes como en español. El estándar del IESE exige el uso riguroso de:
                      <strong> PLAY</strong> (deportes de equipo y con pelota), <strong>GO</strong> (actividades en movimiento terminadas en -ING) y <strong>DO</strong> (ejercicios físicos individuales, artes marciales y calistenia/PT).
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Sorter Quiz */}
              <div className="p-4 rounded-xl bg-slate-200/90 border border-slate-300 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider font-mono flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-blue-900" />
                    <span>Juego Táctico: ¿Qué Verbo se Usa con este Deporte?</span>
                  </h4>
                  <div className="text-xs font-mono font-bold text-blue-950">
                    Aciertos: {sportsScore} / {sportsAnswered}
                  </div>
                </div>

                {/* Target Sport Card */}
                {(() => {
                  const targetSport = SPORTS_ACTIVITIES[currentSportIndex];
                  return (
                    <div className="p-4 rounded-xl bg-white border border-slate-300 space-y-4 text-center shadow-2xs">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-blue-800 uppercase tracking-wider font-semibold">Actividad en desafío</span>
                        <h2 className="font-stencil text-2xl sm:text-3xl font-bold text-blue-950">
                          {targetSport.name}
                        </h2>
                        <span className="text-xs text-blue-900 font-medium">({targetSport.spanish})</span>
                      </div>

                      {/* 3 Buttons: PLAY, GO, DO */}
                      <div className="grid grid-cols-3 gap-3 max-w-md mx-auto pt-2">
                        <button
                          onClick={() => handleSportCategoryChoice('play')}
                          className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-900 hover:text-white border-2 border-slate-300 text-blue-950 font-stencil font-bold text-sm transition-all shadow-md hover:scale-105 cursor-pointer"
                        >
                          PLAY
                        </button>
                        <button
                          onClick={() => handleSportCategoryChoice('go')}
                          className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-900 hover:text-white border-2 border-slate-300 text-blue-950 font-stencil font-bold text-sm transition-all shadow-md hover:scale-105 cursor-pointer"
                        >
                          GO
                        </button>
                        <button
                          onClick={() => handleSportCategoryChoice('do')}
                          className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-900 hover:text-white border-2 border-slate-300 text-blue-950 font-stencil font-bold text-sm transition-all shadow-md hover:scale-105 cursor-pointer"
                        >
                          DO
                        </button>
                      </div>

                      {sportsFeedback && (
                        <div className="p-3 rounded-lg bg-slate-50 border border-slate-300 text-xs text-blue-950 space-y-2 text-left max-w-lg mx-auto">
                          <p className="font-semibold">{sportsFeedback}</p>
                          <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                            <button
                              onClick={() => playAudio('sport-ex', targetSport.exampleSentence)}
                              className="text-[11px] text-blue-900 font-semibold flex items-center space-x-1 hover:underline cursor-pointer"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                              <span>Escuchar oración modelo</span>
                            </button>
                            <button
                              onClick={nextSport}
                              className="px-3 py-1 rounded bg-blue-900 hover:bg-blue-950 text-white text-[11px] font-bold flex items-center space-x-1 cursor-pointer"
                            >
                              <span>Siguiente Deporte</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>

              {/* Complete Sports List Reference */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* PLAY Column */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-300 space-y-2 shadow-2xs">
                  <div className="flex items-center space-x-2 border-b border-slate-200 pb-2">
                    <span className="font-stencil font-bold text-sm text-blue-950">PLAY</span>
                    <span className="text-[10px] text-blue-800 font-semibold">(Pelota / Equipos)</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-blue-950">
                    {SPORTS_ACTIVITIES.filter(s => s.category === 'play').map(s => (
                      <li key={s.name} className="flex items-center justify-between p-1.5 rounded bg-slate-50 border border-slate-200">
                        <span className="font-medium">{s.name} ({s.spanish})</span>
                        <button
                          onClick={() => playAudio(`sport-${s.name}`, s.exampleSentence)}
                          className="p-1 rounded text-blue-800 hover:text-blue-950 cursor-pointer"
                        >
                          <Volume2 className="w-3 h-3" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GO Column */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-300 space-y-2 shadow-2xs">
                  <div className="flex items-center space-x-2 border-b border-slate-200 pb-2">
                    <span className="font-stencil font-bold text-sm text-blue-950">GO</span>
                    <span className="text-[10px] text-blue-800 font-semibold">(-ING / Desplazamiento)</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-blue-950">
                    {SPORTS_ACTIVITIES.filter(s => s.category === 'go').map(s => (
                      <li key={s.name} className="flex items-center justify-between p-1.5 rounded bg-slate-50 border border-slate-200">
                        <span className="font-medium">{s.name} ({s.spanish})</span>
                        <button
                          onClick={() => playAudio(`sport-${s.name}`, s.exampleSentence)}
                          className="p-1 rounded text-blue-800 hover:text-blue-950 cursor-pointer"
                        >
                          <Volume2 className="w-3 h-3" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* DO Column */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-300 space-y-2 shadow-2xs">
                  <div className="flex items-center space-x-2 border-b border-slate-200 pb-2">
                    <span className="font-stencil font-bold text-sm text-blue-950">DO</span>
                    <span className="text-[10px] text-blue-800 font-semibold">(Individual / PT / Artes Marciales)</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-blue-950">
                    {SPORTS_ACTIVITIES.filter(s => s.category === 'do').map(s => (
                      <li key={s.name} className="flex items-center justify-between p-1.5 rounded bg-slate-50 border border-slate-200">
                        <span className="font-medium">{s.name} ({s.spanish})</span>
                        <button
                          onClick={() => playAudio(`sport-${s.name}`, s.exampleSentence)}
                          className="p-1 rounded text-blue-800 hover:text-blue-950 cursor-pointer"
                        >
                          <Volume2 className="w-3 h-3" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          )}

          {/* ============================================================= */}
          {/* TAB 5: PASATIEMPOS, TIEMPO LIBRE Y RUTINA DIARIA */}
          {/* ============================================================= */}
          {activeTab === 'hobbies' && (
            <div className="space-y-6">

              {/* Banner */}
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 shadow-sm">
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-blue-950 font-tactical">
                      Pasatiempos, Actividades de Tiempo Libre y Gustos (LIKE / LOVE + -ING)
                    </h3>
                    <p className="text-xs text-blue-900 mt-1 leading-relaxed">
                      Para expresar gustos y pasatiempos, el estándar gramatical del IESE requiere el uso del gerundio (verbo terminado en -ING):
                      <em> "I like reading books"</em>, <em>"He enjoys playing guitar"</em>, <em>"We love travelling"</em>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hobbies Flashcards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {HOBBIES_PASTIMES.map((hobby) => (
                  <div
                    key={hobby.name}
                    className="p-3.5 rounded-xl bg-white border border-slate-300 space-y-2 hover:border-slate-400 transition-all flex flex-col justify-between shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-blue-950">{hobby.name}</span>
                        <button
                          onClick={() => playAudio(`hobby-${hobby.name}`, hobby.audioText)}
                          className="p-1 rounded text-blue-800 hover:text-blue-950 cursor-pointer"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-blue-800 block font-medium">({hobby.spanish})</span>

                      <p className="text-xs text-blue-950 mt-2 font-medium">
                        "{hobby.expression}"
                      </p>
                    </div>

                    <p className="text-[10px] text-blue-900 italic pt-1 border-t border-slate-200">
                      {hobby.translation}
                    </p>
                  </div>
                ))}
              </div>

              {/* Daily Routine Summary */}
              <div className="p-4 rounded-xl bg-slate-200/90 border border-slate-300 space-y-3">
                <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider font-mono">
                  Línea de Tiempo de la Rutina Diaria (Presente Simple)
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-300 shadow-2xs">
                    <span className="text-blue-950 font-mono font-bold text-[11px] block">06:00 (Reveille)</span>
                    <span className="font-bold text-blue-950 block mt-0.5">Wake up & Get up</span>
                    <span className="text-[10px] text-blue-800 block">Despertarse y levantarse</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white border border-slate-300 shadow-2xs">
                    <span className="text-blue-950 font-mono font-bold text-[11px] block">06:30</span>
                    <span className="font-bold text-blue-950 block mt-0.5">Shower & Have breakfast</span>
                    <span className="text-[10px] text-blue-800 block">Ducha y desayuno</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white border border-slate-300 shadow-2xs">
                    <span className="text-blue-950 font-mono font-bold text-[11px] block">07:30 - 12:30</span>
                    <span className="font-bold text-blue-950 block mt-0.5">Work / Military Training</span>
                    <span className="text-[10px] text-blue-800 block">Trabajo e instrucción</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white border border-slate-300 shadow-2xs">
                    <span className="text-blue-950 font-mono font-bold text-[11px] block">22:00 (Lights Out)</span>
                    <span className="font-bold text-blue-950 block mt-0.5">Go to bed & Sleep</span>
                    <span className="text-[10px] text-blue-800 block">Ir a dormir / silencio</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ============================================================= */}
          {/* TAB 0: PRONOMBRES PERSONALES Y CONCORDANCIA EN TODOS LOS TIEMPOS */}
          {/* ============================================================= */}
          {activeTab === 'pronouns' && (
            <PersonalPronounsLabView audioRate={audioRate} />
          )}

          {/* ============================================================= */}
          {/* TAB 0B: GRAMMAR LAB - GENERADOR DINÁMICO DE EJERCICIOS */}
          {/* ============================================================= */}
          {activeTab === 'grammar-lab' && (
            <div className="p-2 sm:p-4">
              <GrammarLab audioRate={audioRate} />
            </div>
          )}

          {/* ============================================================= */}
          {/* TAB 6: REGLAS GRAMATICALES (PDF OFICIAL - 35 MÓDULOS) */}
          {/* ============================================================= */}
          {activeTab === 'grammar' && (
            <GrammarRulesLabView audioRate={audioRate} />
          )}

        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-300 bg-slate-200 flex items-center justify-between text-xs text-blue-950 font-medium">
          <span>Escuela de Idiomas del Ejército (IESE) • Contenidos Progresivos Nivel A1</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-300 border border-slate-300 text-blue-950 font-bold font-tactical cursor-pointer transition-colors"
          >
            Entendido / Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
