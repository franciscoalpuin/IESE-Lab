import React, { useState } from 'react';
import { LevelSyllabus } from '../types';
import { getAxisTheoryModule } from '../data/theory';
import { speakBritishText, stopSpeaking } from '../utils/audio';
import { getSpanishPhonetic } from '../utils/spanishPhonetics';
import { 
  BookOpen, 
  Headphones, 
  Sparkles, 
  PenTool, 
  Mic, 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  FileText, 
  AlertTriangle,
  Lightbulb,
  Volume2,
  VolumeX,
  Search,
  BookA,
  LayoutList,
  Quote,
  Layers,
  ArrowDownCircle,
  HelpCircle,
  BadgeCheck
} from 'lucide-react';

interface AxisTheoryViewProps {
  axis: 'listening' | 'reading' | 'useOfLanguage' | 'writing' | 'speaking';
  level: LevelSyllabus;
  onGoToPractice: () => void;
}

export const AxisTheoryView: React.FC<AxisTheoryViewProps> = ({
  axis,
  level,
  onGoToPractice
}) => {
  // 4 requested pillars + doctrine
  const [activeTab, setActiveTab] = useState<'vocabulary' | 'grammar' | 'phonetics' | 'phrases' | 'doctrine'>('vocabulary');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVocabTheme, setSelectedVocabTheme] = useState<string>('all');
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);

  const theoryModule = getAxisTheoryModule(axis, level.levelNumber);

  // Audio helper
  const handlePlayAudio = (text: string, id: string) => {
    if (playingAudioId === id) {
      stopSpeaking();
      setPlayingAudioId(null);
      return;
    }

    setPlayingAudioId(id);
    speakBritishText(text, {
      rate: 0.9,
      onEnd: () => setPlayingAudioId(null)
    });
  };

  // Specific content mapping by axis and level
  const getAxisInfo = () => {
    switch (axis) {
      case 'listening':
        return {
          title: 'Desarrollo Teórico – Comprensión Auditiva',
          subtitle: 'Listening Comprehension & Tactical Radio Discipline',
          icon: Headphones,
          color: 'text-sky-400',
          borderColor: 'border-sky-500/40',
          stanagDescriptor: level.levelNumber <= 2
            ? 'STANAG 6001 Nivel 1 (Supervivencia): Capaz de comprender anuncios sencillos, instrucciones orales directas, números, horarios y transmisiones de radio claras sin interferencia extrema.'
            : level.levelNumber <= 4
            ? 'STANAG 6001 Nivel 2 (Funcional): Capaz de comprender briefings militares cotidianos, instrucciones técnicas y radiotelefonía táctica con ruido ambiental o estática moderada.'
            : 'STANAG 6001 Nivel 3 (Profesional): Capaz de comprender discursos operacionales complejos, conferencias de Estado Mayor, debates doctrinales y transmisiones cifradas o de alta velocidad.',
          programFocus: [
            'Reconocimiento de intenciones del hablante en órdenes de cuartel y plaza de armas.',
            'Decodificación de transmisiones de radio con fraseología estándar OTAN/STANAG.',
            'Captura de coordenadas numéricas, designaciones alfanuméricas de unidades y horarios ZULU.',
            'Discriminación de acentos militares (británico estándar RP, escocés, estadounidense, acentos OTAN de tropas aliadas).'
          ],
          tacticalGuide: [
            {
              title: 'Protocolo de Fraseología Radial (Prowords)',
              detail: 'En el ámbito militar anglosajón, la precisión radioeléctrica salva vidas. Nunca se usan frases informales como "yes" o "repeat". Se emplean rigurosamente palabras de procedimiento autorizadas:',
              items: [
                'ROGER: He recibido toda tu última transmisión satisfactoriamente.',
                'WILCO: He comprendido tu orden y será cumplida (Will Comply). No se dice "Roger Wilco".',
                'SAY AGAIN: Solicita retransmisión de lo último emitido. La palabra "REPEAT" está prohibida en artillería (significa disparar otra salva con los mismos datos).',
                'OVER: Mi transmisión ha concluido y espero tu respuesta.',
                'OUT: Mi comunicación ha terminado, no se requiere respuesta.'
              ]
            },
            {
              title: 'Método de Doble Audición Reglamentaria',
              detail: 'El tribunal del IESE aplica el estándar STANAG de hasta 2 audiciones:',
              items: [
                'Paso 1 (Gist): La primera escucha debe dedicarse a captar el tipo de situación, quién emite y el objetivo global de la misión.',
                'Paso 2 (Scanning acústico): Identificar las palabras clave que responden al qué, quién, cuándo y dónde.',
                'Paso 3 (Verificación): Durante la segunda reproducción, contrastar los datos numéricos y confirmar la alternativa correcta.'
              ]
            }
          ]
        };

      case 'reading':
        return {
          title: 'Desarrollo Teórico – Comprensión Escrita',
          subtitle: 'Reading Comprehension & Tactical Document Analysis',
          icon: BookOpen,
          color: 'text-emerald-400',
          borderColor: 'border-emerald-500/40',
          stanagDescriptor: level.levelNumber <= 2
            ? 'STANAG 6001 Nivel 1: Capaz de leer avisos de cuartel, carteleras de servicio, señales tácticas, formularios de identidad y partes militares elementales con vocabulario predecible.'
            : level.levelNumber <= 4
            ? 'STANAG 6001 Nivel 2: Capaz de comprender órdenes preparatorias, SITREPs de rutina, manuales operativos breves y artículos de actualidad castrense.'
            : 'STANAG 6001 Nivel 3: Capaz de analizar órdenes de operaciones completas (OPORDs), análisis de inteligencia militar, directivas de ROE y manuales doctrinales avanzados.',
          programFocus: [
            'Análisis de tipos de texto oficiales: Daily Orders, Warning Orders, SITREPs, Notificaciones y Carteleras.',
            'Comprensión e identificación de acrónimos tácticos universales (FOB, HQ, COA, ROE, SOP, ETA, MEDEVAC).',
            'Deducción del significado de términos doctrinales a partir de claves contextuales.',
            'Diferenciación entre información explícita y deducciones implícitas (evaluación de ítems Verdadero / Falso con justificación).'
          ],
          tacticalGuide: [
            {
              title: 'Técnicas de Lectura Militar: Skimming & Scanning',
              detail: 'En operaciones, el tiempo de procesamiento es crítico. La lectura militar requiere alternar dos técnicas sistemáticas:',
              items: [
                'Skimming (Vuelo Rasante): Lectura veloz de títulos, encabezados de párrafos y primeras oraciones para determinar la naturaleza del documento.',
                'Scanning (Barrido Térmico): Localización dirigida de fechas, números de regimiento, coordenadas o términos específicos sin leer el texto completo.',
                'Lectura Minuciosa: Se reserva exclusivamente para los párrafos que contienen la respuesta a la pregunta del examen o la orden operativa.'
              ]
            }
          ]
        };

      case 'useOfLanguage':
        return {
          title: 'Desarrollo Teórico – Uso de la Lengua',
          subtitle: 'Grammar, Tactical Registers & Military Lexicon',
          icon: Sparkles,
          color: 'text-amber-400',
          borderColor: 'border-amber-500/40',
          stanagDescriptor: level.levelNumber <= 2
            ? 'Dominio de estructuras gramaticales de base: presente y pasado simple, imperativos para órdenes, pronombres, preposiciones y modales elementales de permiso y deber.'
            : level.levelNumber <= 4
            ? 'Dominio de la voz pasiva, tiempos compuestos (Present/Past Perfect), conectores de causa/efecto, phrasal verbs operativos y condicionales de hipótesis.'
            : 'Dominio de estructuras sintácticas avanzadas: inversión estilística, pasiva impersonal de Estado Mayor, subjuntivo de recomendación y oraciones subordinadas complejas.',
          programFocus: level.grammaticalContents,
          tacticalGuide: [
            {
              title: 'Gramática Aplicada a la Doctrina Militar',
              detail: 'En el inglés militar, cada estructura gramatical cumple una función de mando específica:',
              items: [
                'Imperativos: Empleados en órdenes verbales y directivas operativas ("Secure the perimeter", "Maintain radio silence").',
                'Modales de Obligación (MUST / SHALL): "Shall" en manuales militares impone una obligación reglamentaria estricta; "Should" denota recomendación o buena práctica.',
                'Voz Pasiva: Empleada en partes de guerra para mantener objetividad despersonalizada ("The bridge was destroyed at 0400 hours" en lugar de "We destroyed the bridge").',
                'Present Perfect: Empleado en reportes de estado operacional actual ("Unit 4 has reached checkpoint Charlie").'
              ]
            }
          ]
        };

      case 'writing':
        return {
          title: 'Desarrollo Teórico – Expresión Escrita',
          subtitle: 'Military Correspondence, SITREPs & Standard Operating Memos',
          icon: PenTool,
          color: 'text-purple-400',
          borderColor: 'border-purple-500/40',
          stanagDescriptor: level.levelNumber <= 2
            ? 'STANAG 6001 Nivel 1: Capaz de redactar fichas personales, notas breves de servicio, mensajes sencillos de cuartel y descripciones operacionales básicas con frases simples.'
            : level.levelNumber <= 4
            ? 'STANAG 6001 Nivel 2: Capaz de redactar memorándums formales, informes de incidentes (Incident Reports), partes de situación (SITREPs) y correos oficiales con coherencia y terminología precisa.'
            : 'STANAG 6001 Nivel 3: Capaz de redactar directivas de operaciones, análisis de alternativas tácticas, monografías doctrinales y correspondencia interinstitucional de alto nivel.',
          programFocus: [
            'Estructuración formal de documentos militares (From, To, Date, Subject, párrafos numerados).',
            'Las 4 C de la comunicación militar escrita: Claridad, Concisión, Cohesión y Corrección.',
            'Empleo estricto del registro militar formal (evitar coloquialismos, contracciones informales como "can\'t" o "don\'t" en textos oficiales).',
            'Precisión en el conteo de palabras y cumplimiento de rúbricas STANAG 6001.'
          ],
          tacticalGuide: [
            {
              title: 'Estructura Estándar del Memorándum Militar (NATO Standard)',
              detail: 'Todo escrito formal debe presentar el siguiente encabezado y disposición:',
              items: [
                'MEMORANDUM FOR: [Destinatario con Rango y Cargo]',
                'FROM: [Emisor con Rango y Cargo]',
                'DATE: [Formato militar DD MMM YYYY, ej: 14 OCT 2026]',
                'SUBJECT: [Título conciso en mayúsculas del asunto]',
                '1. SITUATION / PURPOSE: Primer párrafo numerado estableciendo el motivo.',
                '2. FACTS / DETAILS: Párrafo con los datos fácticos organizados de forma lógica.',
                '3. RECOMMENDATION / ACTION REQUIRED: Medidas concretas solicitadas.',
                'FIRMA: Nombre, Rango y Designación del Oficial.'
              ]
            }
          ]
        };

      case 'speaking':
        return {
          title: 'Desarrollo Teórico – Expresión Oral',
          subtitle: 'Operational Briefings, Oral Protocol & British Military Phonetics',
          icon: Mic,
          color: 'text-rose-400',
          borderColor: 'border-rose-500/40',
          stanagDescriptor: level.levelNumber <= 2
            ? 'STANAG 6001 Nivel 1: Capaz de presentarse formalmente, responder a preguntas de datos personales y militares de rutina, emitir órdenes breves y comunicarse en situaciones de supervivencia.'
            : level.levelNumber <= 4
            ? 'STANAG 6001 Nivel 2: Capaz de brindar un briefing operativo estructurado, describir incidentes en el terreno, justificar cursos de acción y mantener entrevistas formales con oficiales superiores.'
            : 'STANAG 6001 Nivel 3: Capaz de conducir negociaciones militares complejas, liderar debates doctrinales y participar fluidamente en estados mayores combinados multinacionales.',
          programFocus: [
            'Estructuración del Briefing Militar: Introducción, Desarrollo de Situación, Misión, Ejecución y Conclusión.',
            'Tratamiento jerárquico formal ("Sir", "Ma\'am", "Officers and NCOs").',
            'Pronunciación militar británica estándar (RP) y claridad fonética.',
            'Gestión de preguntas y respuestas ante un tribunal evaluador militar.'
          ],
          tacticalGuide: [
            {
              title: 'Protocolo de Presentación ante el Tribunal Militar',
              detail: 'Pasos para iniciar una prueba oral o briefing formal:',
              items: [
                '1. Entrada y Saludo Militar: Postura firme, contacto visual directo y fórmula de saludo ("Good morning, Sir / Good morning, Members of the Board").',
                '2. Identificación del Candidato: "I am Captain / Lieutenant [Apellido], from the Argentine Army, currently assigned to [Unidad]." ',
                '3. Declaración de Propósito: "Today I will brief you on [Tema de la orden o situación táctica]." ',
                '4. Cierre Formal: "This concludes my briefing, Sir. Are there any questions?"'
              ]
            }
          ]
        };
    }
  };

  const axisInfo = getAxisInfo();
  const Icon = axisInfo.icon;

  // Filtered vocabulary
  const vocabThemes = theoryModule.vocabulary.map(v => v.theme);
  const activeVocabGroups = selectedVocabTheme === 'all'
    ? theoryModule.vocabulary
    : theoryModule.vocabulary.filter(v => v.theme === selectedVocabTheme);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className={`rounded-2xl bg-[#141d0e]/95 border-2 ${axisInfo.borderColor} p-5 sm:p-7 shadow-xl backdrop-blur-sm`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#314320] pb-5">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#1d2913] border border-[#445b2a] flex items-center justify-center text-[#b8df47] shadow-inner">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-stencil uppercase tracking-widest text-[#8ea478]">
                Programa Oficial IESE • Nivel {level.levelNumber} ({level.cefr})
              </div>
              <h1 className="text-base sm:text-xl font-bold font-stencil text-white tracking-wide uppercase">
                {axisInfo.title}
              </h1>
              <div className={`text-xs ${axisInfo.color} font-mono mt-0.5`}>
                {axisInfo.subtitle}
              </div>
            </div>
          </div>

          <button
            onClick={onGoToPractice}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#688a28] hover:bg-[#7da72f] text-[#0f150a] font-bold text-xs font-tactical shadow-lg transition-all cursor-pointer shrink-0"
          >
            <span>Ir a la Práctica Guiada</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* STANAG Descriptor Banner */}
        <div className="mt-4 p-4 rounded-xl bg-[#0b1007]/90 border border-[#2b3a1a]">
          <div className="flex items-center space-x-2 text-[#b8df47] font-stencil text-xs uppercase mb-1.5">
            <Award className="w-4 h-4" />
            <span>Descriptor Oficial STANAG 6001 – Nivel {level.levelNumber}:</span>
          </div>
          <p className="font-desc text-[#d4e5be] leading-relaxed">
            {axisInfo.stanagDescriptor}
          </p>
        </div>

        {/* 4 Pillars Navigation Tabs (Vocabulario, Gramática, Fonética, Frases útiles + Doctrina) */}
        <div className="flex space-x-2 mt-5 border-b border-[#2d3e1c] pb-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('vocabulary')}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'vocabulary'
                ? 'bg-[#293d18] text-[#b8df47] border border-[#7ea830] shadow-sm'
                : 'text-[#9eb286] hover:text-white hover:bg-[#192412]'
            }`}
          >
            <BookA className="w-4 h-4 text-[#b8df47]" />
            <span>1. Vocabulario</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#182312] text-[#b8df47] border border-[#3e5326] font-mono">
              {theoryModule.vocabulary.reduce((acc, g) => acc + g.words.length, 0)}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('grammar')}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'grammar'
                ? 'bg-[#293d18] text-[#b8df47] border border-[#7ea830] shadow-sm'
                : 'text-[#9eb286] hover:text-white hover:bg-[#192412]'
            }`}
          >
            <LayoutList className="w-4 h-4 text-amber-400" />
            <span>2. Gramática</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#182312] text-amber-400 border border-[#484224] font-mono">
              {theoryModule.grammar.length} reglas
            </span>
          </button>

          <button
            onClick={() => setActiveTab('phonetics')}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'phonetics'
                ? 'bg-[#293d18] text-[#b8df47] border border-[#7ea830] shadow-sm'
                : 'text-[#9eb286] hover:text-white hover:bg-[#192412]'
            }`}
          >
            <Volume2 className="w-4 h-4 text-sky-400" />
            <span>3. Fonética</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#182312] text-sky-400 border border-[#244248] font-mono">
              IPA
            </span>
          </button>

          <button
            onClick={() => setActiveTab('phrases')}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'phrases'
                ? 'bg-[#293d18] text-[#b8df47] border border-[#7ea830] shadow-sm'
                : 'text-[#9eb286] hover:text-white hover:bg-[#192412]'
            }`}
          >
            <Quote className="w-4 h-4 text-emerald-400" />
            <span>4. Frases Útiles</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#182312] text-emerald-400 border border-[#264e2d] font-mono">
              {theoryModule.usefulPhrases.reduce((acc, g) => acc + g.phrases.length, 0)}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('doctrine')}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'doctrine'
                ? 'bg-[#293d18] text-[#b8df47] border border-[#7ea830] shadow-sm'
                : 'text-[#9eb286] hover:text-white hover:bg-[#192412]'
            }`}
          >
            <Shield className="w-4 h-4 text-[#8ea478]" />
            <span>Doctrina IESE</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: VOCABULARIO */}
        {/* Palabras agrupadas por temas y uso frecuente para resultados prácticos inmediatos */}
        {/* ========================================================================= */}
        {activeTab === 'vocabulary' && (
          <div className="mt-5 space-y-5 animate-in fade-in duration-200">
            
            {/* Context bar with theme filters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#0d1409] p-3.5 rounded-xl border border-[#2b3a1a]">
              <div className="flex items-center space-x-2">
                <BookA className="w-4 h-4 text-[#b8df47]" />
                <span className="text-xs font-stencil uppercase tracking-wider text-[#b8df47]">
                  Filtrar por Tema Operacional:
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setSelectedVocabTheme('all')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                    selectedVocabTheme === 'all'
                      ? 'bg-[#688a28] text-[#0f150a] font-bold'
                      : 'bg-[#182310] text-[#a4b88f] hover:bg-[#233116]'
                  }`}
                >
                  Todos los temas
                </button>
                {vocabThemes.map((th, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedVocabTheme(th)}
                    className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                      selectedVocabTheme === th
                        ? 'bg-[#688a28] text-[#0f150a] font-bold'
                        : 'bg-[#182310] text-[#a4b88f] hover:bg-[#233116]'
                    }`}
                  >
                    {th.split('(')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Vocabulary Groups */}
            <div className="space-y-5">
              {activeVocabGroups.map((group, gIdx) => (
                <div key={gIdx} className="p-4 sm:p-5 rounded-xl bg-[#0f170b] border border-[#2b3a1a] space-y-3">
                  <div className="border-b border-[#243316] pb-2">
                    <h3 className="text-xs sm:text-sm font-stencil uppercase tracking-wider text-[#b8df47] flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-[#b8df47]" />
                      <span>{group.theme}</span>
                    </h3>
                    <p className="font-desc text-[#9eb286] mt-0.5">
                      {group.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 pt-1">
                    {group.words.map((word, wIdx) => {
                      const audioId = `vocab-${gIdx}-${wIdx}`;
                      const isPlaying = playingAudioId === audioId;

                      return (
                        <div 
                          key={wIdx} 
                          className="p-3.5 rounded-lg bg-[#141e0f] border border-[#283918] hover:border-[#4d6b2b] transition-all space-y-2"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-bold text-white text-sm tracking-wide">
                                  {word.term}
                                </span>
                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1c2914] text-[#a4b88f] border border-[#324522]">
                                  {word.partOfSpeech}
                                </span>
                              </div>
                              <div className="flex flex-wrap items-center gap-1.5 text-xs mt-0.5">
                                <span className="font-mono text-[#a2cb3c]">
                                  {word.ipa}
                                </span>
                                {(word.spanishPhonetic || getSpanishPhonetic(word.term, word.ipa)) && (
                                  <span className="text-[11px] font-sans font-medium text-[#b8df47] bg-[#1e2a14] px-1.5 py-0.2 rounded border border-[#3b4e25]" title="Pronunciación aproximada en español">
                                    Sonido: "{word.spanishPhonetic || getSpanishPhonetic(word.term, word.ipa)}"
                                  </span>
                                )}
                              </div>
                            </div>

                            <button
                              onClick={() => handlePlayAudio(`${word.term}. ${word.example}`, audioId)}
                              className={`p-2 rounded-lg border transition-all cursor-pointer ${
                                isPlaying
                                  ? 'bg-[#b8df47] text-[#0f150a] border-[#b8df47]'
                                  : 'bg-[#1e2c14] text-[#b8df47] border-[#384c24] hover:bg-[#2b3d1c]'
                              }`}
                              title="Escuchar pronunciación británica"
                            >
                              {isPlaying ? <VolumeX className="w-4 h-4 animate-pulse" /> : <Volume2 className="w-4 h-4" />}
                            </button>
                          </div>

                          <div className="font-desc text-[#dbe7ce] font-medium">
                            <span className="text-[#8ea478] font-bold">Significado: </span>
                            {word.translation}
                          </div>

                          <div className="p-2 rounded bg-[#0b1107] border border-[#1f2b15] font-desc">
                            <div className="text-[#e2ecd5] italic">
                              "{word.example}"
                            </div>
                          </div>

                          {word.tacticalTip && (
                            <div className="font-desc text-[#9eb286] flex items-center space-x-1.5 pt-0.5">
                              <BadgeCheck className="w-3.5 h-3.5 text-[#88b030] shrink-0" />
                              <span>{word.tacticalTip}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: GRAMÁTICA */}
        {/* Reglas sobre la estructura de las oraciones y el orden de los elementos */}
        {/* ========================================================================= */}
        {activeTab === 'grammar' && (
          <div className="mt-5 space-y-5 animate-in fade-in duration-200">
            {theoryModule.grammar.map((rule, rIdx) => (
              <div key={rIdx} className="p-5 rounded-xl bg-[#0f170b] border border-[#2b3a1a] space-y-4">
                
                {/* Rule Title & Formula */}
                <div className="border-b border-[#243316] pb-3">
                  <h3 className="text-sm font-stencil uppercase tracking-wider text-amber-400 flex items-center space-x-2">
                    <LayoutList className="w-4 h-4" />
                    <span>{rule.title}</span>
                  </h3>
                  <div className="mt-2 p-3 rounded-lg bg-[#182310] border border-[#3e5326] font-mono text-xs text-[#b8df47] font-bold">
                    <span className="text-[#8ea478] font-sans block text-[10px] uppercase tracking-wider mb-1 font-normal">Fórmula Sintáctica:</span>
                    {rule.structureFormula}
                  </div>
                </div>

                {/* Orden Numérico de los Elementos */}
                <div>
                  <div className="text-xs font-stencil uppercase tracking-wider text-[#dce8ce] mb-2.5 flex items-center space-x-1.5">
                    <ArrowDownCircle className="w-4 h-4 text-[#88b030]" />
                    <span>Desglose Secuencial del Orden de Elementos:</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {rule.orderElements.map((el, elIdx) => (
                      <div key={elIdx} className="p-3 rounded-lg bg-[#141e0f] border border-[#2a3c1a] space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="w-5 h-5 rounded-full bg-[#243415] text-[#b8df47] text-[11px] font-bold flex items-center justify-center border border-[#4a642a]">
                            {el.position}
                          </span>
                          <span className="text-[10px] uppercase font-mono text-[#8ea478]">
                            Posición {el.position}
                          </span>
                        </div>
                        <div className="font-bold text-white text-xs pt-1">
                          {el.element}
                        </div>
                        <div className="text-[11px] text-[#9eb286] leading-tight">
                          {el.function}
                        </div>
                        <div className="text-[10px] font-mono text-[#b8df47] bg-[#0c1207] p-1.5 rounded border border-[#212d16] mt-1.5">
                          Ej: {el.example}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explicación Pedagógica */}
                <div className="p-3.5 rounded-lg bg-[#141e0f] border border-[#2a3c1a] font-desc text-[#cadbb8] leading-relaxed">
                  <span className="text-amber-400 font-bold block mb-1">Fundamento Doctrinal:</span>
                  {rule.explanation}
                </div>

                {/* Ejemplos Prácticos con Audio */}
                <div className="space-y-2">
                  <div className="text-xs font-stencil uppercase tracking-wider text-[#8ea478]">
                    Modelos de Uso en Contexto Real:
                  </div>
                  <div className="space-y-2">
                    {rule.examples.map((ex, exIdx) => {
                      const audioId = `gram-ex-${rIdx}-${exIdx}`;
                      const isPlaying = playingAudioId === audioId;

                      return (
                        <div 
                          key={exIdx} 
                          className="flex items-start justify-between gap-3 p-3 rounded-lg bg-[#0c1207] border border-[#233116]"
                        >
                          <div>
                            <div className="text-xs font-semibold text-white tracking-wide">
                              {ex.english}
                            </div>
                            <div className="font-desc text-[#9eb286] mt-0.5">
                              {ex.spanish}
                            </div>
                            {ex.notes && (
                              <div className="text-[10px] text-amber-300/80 font-mono mt-1">
                                ℹ {ex.notes}
                              </div>
                            )}
                          </div>

                          <button
                            onClick={() => handlePlayAudio(ex.english, audioId)}
                            className={`p-1.5 rounded-md border transition-all cursor-pointer shrink-0 ${
                              isPlaying
                                ? 'bg-[#b8df47] text-[#0f150a] border-[#b8df47]'
                                : 'bg-[#182411] text-[#b8df47] border-[#384c24] hover:bg-[#25361b]'
                            }`}
                            title="Escuchar oración modelo"
                          >
                            {isPlaying ? <VolumeX className="w-3.5 h-3.5 animate-pulse" /> : <Volume2 className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Errores Comunes a Evitar */}
                {rule.commonMistakes && rule.commonMistakes.length > 0 && (
                  <div className="p-3.5 rounded-lg bg-[#1f150a] border border-[#543b18] space-y-2">
                    <div className="text-xs font-stencil uppercase tracking-wider text-amber-400 flex items-center space-x-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                      <span>Errores Frecuentes a Evitar en Examen:</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      {rule.commonMistakes.map((mistake, mIdx) => (
                        <div key={mIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 rounded bg-[#130e06] border border-[#3f2c12]">
                          <div>
                            <span className="text-rose-400 font-bold">✗ Incorrecto: </span>
                            <span className="text-[#f1b3b3] line-through font-mono">{mistake.incorrect}</span>
                          </div>
                          <div>
                            <span className="text-emerald-400 font-bold">✓ Correcto: </span>
                            <span className="text-[#c7e9bc] font-mono font-semibold">{mistake.correct}</span>
                            <div className="font-desc text-[#d4af7e] mt-0.5">{mistake.reason}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: FONÉTICA */}
        {/* El estudio de los sonidos y la pronunciación correcta del idioma */}
        {/* ========================================================================= */}
        {activeTab === 'phonetics' && (
          <div className="mt-5 space-y-5 animate-in fade-in duration-200">
            {theoryModule.phonetics.map((guide, pIdx) => (
              <div key={pIdx} className="p-5 rounded-xl bg-[#0f170b] border border-[#2b3a1a] space-y-4">
                
                {/* Header with sound badge */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#243316] pb-3">
                  <div>
                    <h3 className="text-sm font-stencil uppercase tracking-wider text-sky-400 flex items-center space-x-2">
                      <Volume2 className="w-4 h-4" />
                      <span>{guide.title}</span>
                    </h3>
                    <p className="font-desc text-[#9eb286] mt-1">
                      {guide.description}
                    </p>
                  </div>

                  <div className="px-3 py-1.5 rounded-lg bg-[#15252b] border border-[#254f5c] text-sky-300 font-mono text-base font-bold shadow-inner">
                    {guide.soundIpa}
                  </div>
                </div>

                {/* Articulatory Guide */}
                <div className="p-3.5 rounded-lg bg-[#111e22] border border-[#224854] space-y-1">
                  <div className="text-xs font-stencil uppercase tracking-wider text-sky-400 flex items-center space-x-1.5">
                    <Mic className="w-3.5 h-3.5" />
                    <span>Guía de Articulación Física (Boca, Lengua y Cuerdas Vocales):</span>
                  </div>
                  <p className="font-desc text-[#c3dee6] leading-relaxed">
                    {guide.articulatoryGuide}
                  </p>
                </div>

                {/* Phonetic Rules */}
                <div className="space-y-1.5">
                  <div className="text-xs font-stencil uppercase tracking-wider text-[#8ea478]">
                    Reglas Fonéticas Sistemáticas:
                  </div>
                  <div className="space-y-1 bg-[#141e0f] p-3 rounded-lg border border-[#2b3c1b]">
                    {guide.rules.map((rule, rIdx) => (
                      <div key={rIdx} className="font-desc text-[#dce8ce] flex items-start space-x-2">
                        <span className="text-[#88b030] font-bold">›</span>
                        <span>{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Minimal Pairs (Contrastive pairs) */}
                {guide.minimalPairs && guide.minimalPairs.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-xs font-stencil uppercase tracking-wider text-[#b8df47] flex items-center space-x-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#b8df47]" />
                      <span>Pares Mínimos para Discriminación y Contraste Auditivo:</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {guide.minimalPairs.map((pair, mpIdx) => {
                        const audio1Id = `mp-1-${pIdx}-${mpIdx}`;
                        const audio2Id = `mp-2-${pIdx}-${mpIdx}`;

                        return (
                          <div key={mpIdx} className="p-3 rounded-lg bg-[#0d1409] border border-[#253616] space-y-2">
                            <div className="flex items-center justify-between border-b border-[#1e2c12] pb-1.5">
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => handlePlayAudio(pair.word1, audio1Id)}
                                  className={`p-1.5 rounded border text-xs cursor-pointer ${
                                    playingAudioId === audio1Id
                                      ? 'bg-[#b8df47] text-[#0f150a] border-[#b8df47]'
                                      : 'bg-[#1a2613] text-[#b8df47] border-[#384c24] hover:bg-[#25361b]'
                                  }`}
                                  title="Escuchar palabra 1"
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                                <div>
                                  <span className="font-bold text-white text-xs">{pair.word1}</span>
                                  <span className="text-[11px] font-mono text-[#b8df47] ml-1.5">{pair.ipa1}</span>
                                  <div className="font-desc text-[#9eb286]">{pair.meaning1}</div>
                                </div>
                              </div>

                              <span className="text-xs font-bold text-[#88b030]">vs</span>

                              <div className="flex items-center space-x-2">
                                <div>
                                  <span className="font-bold text-white text-xs">{pair.word2}</span>
                                  <span className="text-[11px] font-mono text-sky-400 ml-1.5">{pair.ipa2}</span>
                                  <div className="font-desc text-[#9eb286] text-right">{pair.meaning2}</div>
                                </div>
                                <button
                                  onClick={() => handlePlayAudio(pair.word2, audio2Id)}
                                  className={`p-1.5 rounded border text-xs cursor-pointer ${
                                    playingAudioId === audio2Id
                                      ? 'bg-sky-400 text-[#0f150a] border-sky-400'
                                      : 'bg-[#132226] text-sky-400 border-[#254f5c] hover:bg-[#1a3036]'
                                  }`}
                                  title="Escuchar palabra 2"
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Practice Words with Stress Pattern */}
                <div className="space-y-2">
                  <div className="text-xs font-stencil uppercase tracking-wider text-[#8ea478]">
                    Palabras Clave de Entrenamiento Silábico:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {guide.practiceWords.map((pw, pwIdx) => {
                      const audioId = `pw-${pIdx}-${pwIdx}`;
                      const isPlaying = playingAudioId === audioId;

                      return (
                        <div 
                          key={pwIdx} 
                          className="flex items-center justify-between p-2.5 rounded-lg bg-[#141e0f] border border-[#2b3c1b]"
                        >
                          <div>
                            <div className="font-bold text-white text-xs">{pw.word}</div>
                            <div className="text-[11px] font-mono text-sky-400">{pw.ipa}</div>
                            <div className="font-desc text-[#9eb286]">{pw.translation} • <span className="font-mono text-[#b8df47]">{pw.stressPattern}</span></div>
                          </div>

                          <button
                            onClick={() => handlePlayAudio(pw.word, audioId)}
                            className={`p-1.5 rounded-md border transition-all cursor-pointer ${
                              isPlaying
                                ? 'bg-sky-400 text-[#0f150a] border-sky-400'
                                : 'bg-[#1a2613] text-sky-400 border-[#2f494f] hover:bg-[#20343a]'
                            }`}
                            title="Escuchar palabra modelo"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: FRASES ÚTILES */}
        {/* Expresiones fijas para situaciones reales de comunicación */}
        {/* ========================================================================= */}
        {activeTab === 'phrases' && (
          <div className="mt-5 space-y-5 animate-in fade-in duration-200">
            {theoryModule.usefulPhrases.map((group, phIdx) => (
              <div key={phIdx} className="p-5 rounded-xl bg-[#0f170b] border border-[#2b3a1a] space-y-4">
                
                {/* Header */}
                <div className="border-b border-[#243316] pb-2.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-stencil uppercase tracking-wider text-emerald-400 flex items-center space-x-2">
                      <Quote className="w-4 h-4" />
                      <span>{group.communicativeFunction}</span>
                    </h3>
                  </div>
                  <div className="font-desc text-[#9eb286] mt-0.5">
                    <span className="font-bold text-[#b8df47]">Situación Real: </span>
                    {group.situation}
                  </div>
                </div>

                {/* Phrase list */}
                <div className="space-y-3">
                  {group.phrases.map((phrase, pIdx) => {
                    const audioId = `phr-${phIdx}-${pIdx}`;
                    const isPlaying = playingAudioId === audioId;

                    return (
                      <div 
                        key={pIdx} 
                        className="p-3.5 rounded-lg bg-[#141e0f] border border-[#283a19] hover:border-[#4c692d] transition-all space-y-2"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="font-bold text-white text-xs sm:text-sm tracking-wide">
                              "{phrase.english}"
                            </div>
                            <div className="font-desc text-[#a2cb3c] mt-0.5">
                              {phrase.spanish}
                            </div>
                          </div>

                          <div className="flex items-center space-x-2 shrink-0">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c2914] text-[#d6eb9a] border border-[#3e5326]">
                              {phrase.register}
                            </span>
                            <button
                              onClick={() => handlePlayAudio(phrase.english, audioId)}
                              className={`p-2 rounded-lg border transition-all cursor-pointer ${
                                isPlaying
                                  ? 'bg-[#b8df47] text-[#0f150a] border-[#b8df47]'
                                  : 'bg-[#1a2613] text-[#b8df47] border-[#384c24] hover:bg-[#25361b]'
                              }`}
                              title="Escuchar frase en inglés británico"
                            >
                              {isPlaying ? <VolumeX className="w-4 h-4 animate-pulse" /> : <Volume2 className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        <div className="p-2 rounded bg-[#0b1107] border border-[#1e2a14] font-desc text-[#cadbb8] flex items-center space-x-2">
                          <span className="text-[#88b030] font-bold">Nota de Empleo:</span>
                          <span>{phrase.usageNote}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: DOCTRINA IESE */}
        {/* Guías operativas, procedimientos militares y rúbrica oficial STANAG 6001 */}
        {/* ========================================================================= */}
        {activeTab === 'doctrine' && (
          <div className="mt-5 space-y-4 animate-in fade-in duration-200">
            {axisInfo.tacticalGuide.map((guide, gIdx) => (
              <div key={gIdx} className="p-5 rounded-xl bg-[#0f170b] border border-[#2b3a1a] space-y-3">
                <h3 className="text-sm font-stencil uppercase tracking-wider text-[#b8df47] flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>{guide.title}</span>
                </h3>
                <p className="font-desc text-[#c2d4ad] leading-relaxed">
                  {guide.detail}
                </p>
                <div className="space-y-1.5 bg-[#141e0f] p-3.5 rounded-lg border border-[#2e401d]">
                  {guide.items.map((it, itIdx) => (
                    <div key={itIdx} className="font-desc text-[#dce8ce] flex items-start space-x-2">
                      <span className="text-[#88b030] font-bold">›</span>
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="p-5 rounded-xl bg-[#0f170b] border border-[#2b3a1a] space-y-3">
              <h3 className="text-xs font-stencil uppercase tracking-wider text-[#b8df47] flex items-center space-x-1.5">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>Recomendaciones Metodológicas de la Cátedra IESE:</span>
              </h3>
              <p className="font-desc text-[#cbdcb5] leading-relaxed">
                El aprendizaje del inglés en el Ejército Argentino no persigue únicamente aprobar un examen de gramática, sino dotar al combatiente de interoperabilidad operacional real.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-[#141e0f] border border-[#2e401d]">
                  <div className="text-[#b8df47] font-bold font-stencil text-xs mb-1">1. Dominio Terminológico</div>
                  <div className="font-desc text-[#a4b88f]">Interioriza los acrónimos y rangos hasta responderlos sin vacilación.</div>
                </div>
                <div className="p-3 rounded-lg bg-[#141e0f] border border-[#2e401d]">
                  <div className="text-[#b8df47] font-bold font-stencil text-xs mb-1">2. Rigor Doctrinal</div>
                  <div className="font-desc text-[#a4b88f]">Usa siempre el registro formal castrense ("Sir", formatos numerados).</div>
                </div>
                <div className="p-3 rounded-lg bg-[#141e0f] border border-[#2e401d]">
                  <div className="text-[#b8df47] font-bold font-stencil text-xs mb-1">3. Gestión del Tiempo</div>
                  <div className="font-desc text-[#a4b88f]">Monitorea siempre el reloj y realiza autoevaluaciones periódicas.</div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
