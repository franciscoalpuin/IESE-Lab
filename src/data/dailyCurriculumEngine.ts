import { ArchetypeExerciseData } from './daily120PlanData';
import { FOUNDATIONS_ARCHETYPES_PART1 } from './archetypesFoundations';
import { DAILY_LIFE_ARCHETYPES_PART2 } from './archetypesDailyLife';
import { TACTICAL_ARCHETYPES_PART3 } from './archetypesTactical';
import { MILITARY_OPERATIONAL_ARCHETYPES } from './archetypesMilitaryOps';
import { LEVEL_2_ARCHETYPES } from './archetypesLevel2';
import { LEVEL_3_ARCHETYPES } from './archetypesLevel3';
import { LEVEL_4_ARCHETYPES } from './archetypesLevel4';
import { LEVEL_5_ARCHETYPES } from './archetypesLevel5';
import { LEVEL_6_ARCHETYPES } from './archetypesLevel6';

// Helper to determine phase
export function getPhaseNumber(day: number): 1 | 2 | 3 | 4 {
  if (day <= 30) return 1;
  if (day <= 60) return 2;
  if (day <= 90) return 3;
  return 4;
}

interface DaySyllabusCore {
  theme: string;
  subtopic: string;
  objective: string;
  grammarTitle: string;
  grammarFormula: string;
  grammarRule: string;
  tacticalTip: string;
  vocabTerms: Array<{ term: string; translation: string; ipa: string; phonetic: string; example: string }>;
  targetSound: string;
  articulatoryTip: string;
  phoneticWords: Array<{ word: string; phonetic: string; translation: string }>;
  usefulPhrase: string;
  phraseTranslation: string;
  phrasePhonetic: string;
  phraseUsage: string;
  radioSender: string;
  radioRecipient: string;
  radioProwords: string[];
  radioMessage: string;
  radioQuestion: string;
  radioOptions: string[];
  radioCorrectIndex: number;
  radioExplanation: string;
  readingDocType: string;
  readingTitle: string;
  readingSnippet: string;
  readingQuestion: string;
  readingOptions: string[];
  readingCorrectIndex: number;
  readingExplanation: string;
  uolPrompt: string;
  uolQuestion: string;
  uolOptions: string[];
  uolCorrectIndex: number;
  uolExplanation: string;
  writingScenario: string;
  writingRequired: string[];
  writingModel: string;
  speakingScenario: string;
  speakingProwords: string[];
  speakingTips: string[];
  speakingModel: string;
}

// ---------------------------------------------------------------------------
// SYLLABUS THEMATIC TABLES FOR ALL 6 LEVELS & 4 PHASES (30 DAYS EACH = 120/LVL)
// ---------------------------------------------------------------------------

// LEVEL 1: A1 / A1+ (STANAG 6001 Level 0+/1)
const L1_TOPICS: Array<{ theme: string; subtopic: string; grammar: string; formula: string; sound: string }> = [
  // Phase 1 (1-30): Fundamentos & Datos Personales
  { theme: 'Abecedario Fonético & Deletreo', subtopic: 'Deletreo de Apellidos y Letras A a D', grammar: 'Imperativos de Petición y Deletreo', formula: 'Could you spell [X], please?', sound: '/eɪ/ (A, name)' },
  { theme: 'Abecedario Fonético & Deletreo', subtopic: 'Deletreo de Matrículas y Letras E a H', grammar: 'Pronombres Personales Sujeto (I, You, He, She)', formula: 'Subject + Verb', sound: '/iː/ (E, meet)' },
  { theme: 'Abecedario Fonético & Deletreo', subtopic: 'Códigos de Radio y Letras I a L', grammar: 'Alfabeto Fonético OTAN (India, Juliet, Kilo, Lima)', formula: 'Code: [Callsign] + [Letters]', sound: '/aɪ/ (I, night)' },
  { theme: 'Abecedario Fonético & Deletreo', subtopic: 'Nombres de Ciudades y Letras M a P', grammar: 'Preguntas de Identidad con What is...', formula: 'What is your [noun]?', sound: '/m/ y /n/ nasales' },
  { theme: 'Abecedario Fonético & Deletreo', subtopic: 'Puntos de Control y Letras Q a T', grammar: 'Respuestas Cortas con Verbo To Be', formula: 'Yes, it is. / No, it is not.', sound: '/k/ (Quebec)' },
  { theme: 'Abecedario Fonético & Deletreo', subtopic: 'Matrículas de Aeronaves y Letras U a W', grammar: 'Contracciones en Inglés Formal (I am / I\'m)', formula: 'Pronoun + \'m / \'re / \'s', sound: '/w/ (Whiskey)' },
  { theme: 'Abecedario Fonético & Deletreo', subtopic: 'Consolidación Completa de la A a la Z', grammar: 'Revisión General del Abecedario OTAN', formula: 'Alfa to Zulu standard', sound: '/z/ (Zulu, buzz)' },
  { theme: 'Números & Conteo Militar', subtopic: 'Números Cardinales del 1 al 10 en Formación', grammar: 'Plural Regular de Sustantivos (-s)', formula: 'Number + Noun-s', sound: '/θ/ (Three, thank)' },
  { theme: 'Números & Conteo Militar', subtopic: 'Números del 11 al 20 y Pertrechos Individuales', grammar: 'Uso de There is (singular) y There are (plural)', formula: 'There is [sing.] / There are [pl.]', sound: '/v/ (Eleven, twelve)' },
  { theme: 'Números & Conteo Militar', subtopic: 'Decenas del 20 al 50 y Precios de Cantina', grammar: 'Preguntas con How much is...?', formula: 'How much is [item]?', sound: '/ti/ (Twenty, thirty)' },
  { theme: 'Números & Conteo Militar', subtopic: 'Decenas del 60 al 100 y Distancias en Metros', grammar: 'Expresión de Distancias y Cantidades Grandes', formula: '[Number] metres / kilometres', sound: '/hʌn/ (Hundred)' },
  { theme: 'Operaciones Aritméticas Elementales', subtopic: 'Sumas (+) y Cálculo de Presupuesto', grammar: 'Vocabulario Aritmético: Plus y Equals', formula: '[X] plus [Y] equals [Z]', sound: '/plʌs/ (Plus)' },
  { theme: 'Operaciones Aritméticas Elementales', subtopic: 'Restas (-) y Control de Raciones Restantes', grammar: 'Vocabulario Aritmético: Minus y Leaves', formula: '[X] minus [Y] is [Z]', sound: '/maɪ/ (Minus)' },
  { theme: 'Calendario & Fechas Ordinales', subtopic: 'Números Ordinales del 1st al 10th en el Rol', grammar: 'Escritura y Lectura de Fechas con Ordinales', formula: 'The [ordinal] of [Month]', sound: '/st, nd, rd, θ/' },
  { theme: 'Calendario & Fechas Ordinales', subtopic: 'Números Ordinales del 11th al 20th en Cronogramas', grammar: 'Preposiciones de Tiempo: On + Fechas', formula: 'On the [ordinal] of [Month]', sound: '/tiːnθ/ (Fifteenth)' },
  { theme: 'Calendario & Fechas Ordinales', subtopic: 'Números Ordinales del 21st al 31st y Efemérides', grammar: 'Preposiciones de Tiempo: In + Meses / Años', formula: 'In [Month / Year]', sound: '/twenti-fɜːst/' },
  { theme: 'La Hora & Horarios de Cuartel', subtopic: 'Reloj Civil: Horas en Punto y Medias Horas', grammar: 'Expresiones O\'clock y Half past', formula: 'It is [hour] o\'clock / half past [hour]', sound: '/klɒk/ (O\'clock)' },
  { theme: 'La Hora & Horarios de Cuartel', subtopic: 'Reloj Civil: Cuartos de Hora (Past / To)', grammar: 'Expresiones Quarter past y Quarter to', formula: 'Quarter past [H] / Quarter to [H+1]', sound: '/kwɔː/ (Quarter)' },
  { theme: 'La Hora & Horarios de Cuartel', subtopic: 'Reloj Militar de 24 Horas: 00:00 a 12:00', grammar: 'Lectura de Horarios Militares con Zero-hundred', formula: 'Zero-[digits] hours', sound: '/hʌn.drəd z/' },
  { theme: 'La Hora & Horarios de Cuartel', subtopic: 'Reloj Militar de 24 Horas: 13:00 a 23:59', grammar: 'Lectura de Horarios Vespertinos Militares', formula: '[Hour digits] [minute digits] hours', sound: '/fɔːˈtiːn/' },
  { theme: 'Tratamiento, Rangos & Cortesía', subtopic: 'Saludos Formales de Cuartel y Buenos Días', grammar: 'Saludos de Cortesía (Good morning, Sir/Ma\'am)', formula: 'Greeting + Rank / Title', sound: '/sɜː/ (Sir)' },
  { theme: 'Tratamiento, Rangos & Cortesía', subtopic: 'Rangos de Tropa (Private, Lance Corporal)', grammar: 'Identificación de Empleo y Especialidad', formula: 'This is [Rank] [Surname]', sound: '/præt/ (Private)' },
  { theme: 'Tratamiento, Rangos & Cortesía', subtopic: 'Rangos de Suboficiales (Corporal, Sergeant)', grammar: 'Fórmulas de Cortesía en Revista Militar', formula: 'Yes, Sergeant! / Understood.', sound: '/sɑː/ (Sergeant)' },
  { theme: 'Tratamiento, Rangos & Cortesía', subtopic: 'Rangos de Oficiales (Lieutenant, Captain, Major)', grammar: 'Identificación de Cadena de Mando', formula: 'Reporting to [Rank] [Surname]', sound: '/lef/ (Lieutenant)' },
  { theme: 'Datos Personales & Verbo To Be', subtopic: 'Presentación Personal: Nombre, Arma y Destino', grammar: 'Verbo To Be Afirmativo (I am, You are, He is)', formula: 'Subject + am/is/are + Complement', sound: '/æm, ɪz, ɑː/' },
  { theme: 'Datos Personales & Verbo To Be', subtopic: 'Corrección de Datos en Lista: To Be Negativo', grammar: 'Verbo To Be Negativo (am not, isn\'t, aren\'t)', formula: 'Subject + am/is/are + not + Complement', sound: '/ɪznt/ (Isn\'t)' },
  { theme: 'Datos Personales & Verbo To Be', subtopic: 'Verificación en Acceso: To Be Interrogativo', grammar: 'Preguntas Invertidas con To Be y Respuestas Cortas', formula: 'Am/Is/Are + Subject + Complement?', sound: '/ɑː juː/' },
  { theme: 'Países, Nacionalidades & Idiomas', subtopic: 'Países Miembros de la OTAN y Capitales', grammar: 'Nacionalidades con Mayúscula Obligatoria', formula: 'I am from [Country]. I am [Nationality].', sound: '/ɪʃ/ (British)' },
  { theme: 'Documentación & Formularios', subtopic: 'Formulario Militar de Registro (MOD Form)', grammar: 'Campos Formales: Surname, Forename, DoB, Rank', formula: 'Block capitals filling', sound: '/sɜːneɪm/' },
  { theme: 'Evaluación & Síntesis de Fase 1', subtopic: 'Simulacro Integral de Fundamentos y Datos A1', grammar: 'Consolidación Gramatical de Fase Alpha', formula: 'Syllabus Alpha Review', sound: '/ɑːlfə/ (Alpha)' },

  // Phase 2 (31-60): Vida Cotidiana, Rutinas & Deportes
  { theme: 'Rutina Diaria de Cuartel', subtopic: 'Diana (Reveille) y Revista de Alojamiento', grammar: 'Present Simple Afirmativo: Rutinas Habituales', formula: 'Subject + Verb-base + Time', sound: '/w/ (Wake up)' },
  { theme: 'Rutina Diaria de Cuartel', subtopic: 'Tercera Persona Singular del Present Simple (-s/-es)', grammar: 'Reglas de Ortografía y Fonética de la -s final', formula: 'He/She/It + Verb-s/es', sound: '/s, z, ɪz/ finales' },
  { theme: 'Comedor Militar (Mess Hall)', subtopic: 'Desayuno de Tropa y Menú Matutino', grammar: 'Present Simple con Horarios Fijos de Comedor', formula: 'Breakfast starts at [time]', sound: '/brek/ (Breakfast)' },
  { theme: 'Deportes & Actividades Físicas', subtopic: 'Deportes con Pelota y Competición: Verbo PLAY', grammar: 'Regla de Oro: PLAY football, basketball, rugby', formula: 'PLAY + ball sports', sound: '/pleɪ/ (Play)' },
  { theme: 'Deportes & Actividades Físicas', subtopic: 'Actividades al Aire Libre en -ing: Verbo GO', grammar: 'Regla de Oro: GO running, swimming, cycling', formula: 'GO + [Verb]-ing', sound: '/ɡəʊ/ (Go)' },
  { theme: 'Deportes & Actividades Físicas', subtopic: 'Gimnasia y Artes Marciales: Verbo DO', grammar: 'Regla de Oro: DO PT, judo, gymnastics, karate', formula: 'DO + individual exercises', sound: '/duː/ (Do)' },
  { theme: 'Adverbios de Frecuencia', subtopic: 'Frecuencia Alta: Always y Usually en el Servicio', grammar: 'Posición del Adverbio: Antes del Verbo Principal', formula: 'Subject + Adverb + Verb', sound: '/ɔːl/ (Always)' },
  { theme: 'Adverbios de Frecuencia', subtopic: 'Frecuencia Media: Often y Sometimes en Guardias', grammar: 'Posición del Adverbio con Verbo To Be', formula: 'Subject + To Be + Adverb', sound: '/ɒfən/ (Often)' },
  { theme: 'Adverbios de Frecuencia', subtopic: 'Frecuencia Nula o Baja: Rarely, Seldom y Never', grammar: 'Never con Sentido Negativo sin Doble Negación', formula: 'Subject + never + affirmative verb', sound: '/nevə/ (Never)' },
  { theme: 'La Familia Militar', subtopic: 'Parentesco: Padres, Cónyuge e Hijos', grammar: 'Vocabulario Familiar y Posesivos Adjetivos', formula: 'My / Your / His / Her + family noun', sound: '/fɑː/ (Father)' },
  { theme: 'La Familia Militar', subtopic: 'Genitivo Sajón (\'s) y Pertenencia Familiar', grammar: 'Uso del Apóstrofo de Posesión (\'s)', formula: '[Owner]\'s + [Possession]', sound: '/s/ posesivo' },
  { theme: 'Descripción Física & Rasgos', subtopic: 'Estatura y Complexión en Fichas Médicas', grammar: 'Adjetivos de Estatura (Tall, Short) y Peso', formula: 'Subject + is + [Adjective]', sound: '/tɔːl/ (Tall)' },
  { theme: 'Descripción Física & Rasgos', subtopic: 'Color de Ojos y Cabello en Acreditaciones', grammar: 'Estructura Have got / Has got para Rasgos', formula: 'Subject + have/has got + [colour] eyes', sound: '/haev/ (Have got)' },
  { theme: 'Gustos, Preferencias & Ocio', subtopic: 'Pasatiempos de Fin de Semana con Verbo LIKE', grammar: 'LIKE + Gerundio (-ing) o Sustantivo', formula: 'Subject + like(s) + [noun / -ing]', sound: '/laɪk/ (Like)' },
  { theme: 'Gustos, Preferencias & Ocio', subtopic: 'Intereses Fuertes con Verbos LOVE y ENJOY', grammar: 'LOVE y ENJOY seguidos de forma en -ing', formula: 'Subject + love(s)/enjoy(s) + [verb]-ing', sound: '/lʌv/ (Love)' },
  { theme: 'Gustos, Preferencias & Ocio', subtopic: 'Aversión y Desagrado con Verbo HATE', grammar: 'HATE + [verb]-ing para Tareas Desagradables', formula: 'Subject + hate(s) + [verb]-ing', sound: '/heɪt/ (Hate)' },
  { theme: 'Alojamiento Militar (Barracks)', subtopic: 'Instalaciones de Descanso y Cuartos de Tropa', grammar: 'There is / There are en Descripciones de Cuartel', formula: 'There is a [sing.] / There are [pl.]', sound: '/bær/ (Barracks)' },
  { theme: 'Alojamiento Militar (Barracks)', subtopic: 'Taquillas, Camas y Mobiliario de Dormitorio', grammar: 'Sustantivos de Mobiliario y Plurales Irregulares', formula: 'Lockers, bunks, wardrobes', sound: '/lɒk/ (Locker)' },
  { theme: 'Preposiciones Espaciales Básicas', subtopic: 'Ubicación en Base: IN y ON', grammar: 'Preposiciones de Lugar Estáticas: In the room, On the table', formula: 'Preposition + the + Noun', sound: '/ɪn, ɒn/' },
  { theme: 'Preposiciones Espaciales Básicas', subtopic: 'Ubicación en Base: UNDER, NEXT TO, OPPOSITE', grammar: 'Preposiciones de Proximidad y Relación', formula: 'Under the bed, next to the armory', sound: '/nekst tuː/' },
  { theme: 'Habilidades Operativas', subtopic: 'Destrezas del Soldado con Modal CAN', grammar: 'Modal CAN para Habilidad y Capacidad Física', formula: 'Subject + CAN + base verb', sound: '/kæn/ (Can)' },
  { theme: 'Habilidades Operativas', subtopic: 'Restricciones y Limitaciones con CANNOT / CAN\'T', grammar: 'Forma Negativa de Habilidad: CAN\'T', formula: 'Subject + CAN\'T + base verb', sound: '/kɑːnt/ (Can\'t)' },
  { theme: 'Instrucción Militar & Mantenimiento', subtopic: 'Limpieza y Desarme de Fusil Individual', grammar: 'Imperativos de Mantenimiento y Precaución', formula: 'Clean [part], check [safety]', sound: '/kliːn/ (Clean)' },
  { theme: 'Instrucción Militar & Mantenimiento', subtopic: 'Orden Cerrado en el Patio de Armas', grammar: 'Órdenes Militares: Attention!, Stand at ease!', formula: 'Military imperative commands', sound: '/tenʃn/ (Attention)' },
  { theme: 'Permisos & Peticiones', subtopic: 'Solicitud de Pase de Salida con MAY I y CAN I', grammar: 'Petición Cortés de Autorización', formula: 'May I / Can I + base verb, Sir?', sound: '/meɪ aɪ/' },
  { theme: 'Condiciones Meteorológicas', subtopic: 'Clima en el Polígono: Frío, Lluvia y Visibilidad', grammar: 'Expresiones con It is + Adjetivo Climático', formula: 'It is rainy / windy / cold today', sound: '/weðə/ (Weather)' },
  { theme: 'Preguntas en Present Simple', subtopic: 'Preguntas de Sí/No con Auxiliares DO y DOES', grammar: 'Inversión de Pregunta con Do / Does', formula: 'Do/Does + Subject + Base Verb...?', sound: '/duː, dʌz/' },
  { theme: 'Preguntas con Partículas WH-', subtopic: 'Preguntas de Información: What, Where, When', grammar: 'Palabras Interrogativas al Inicio de Pregunta', formula: 'Wh- + do/does + Subject + Verb...?', sound: '/weə, wen/' },
  { theme: 'Redacción de Parte de Rutina', subtopic: 'Elaboración de Cronograma de Pelotón', grammar: 'Conectores de Secuencia: First, Then, After that', formula: 'Sequence connector + sentence', sound: '/fɜːst, ðen/' },
  { theme: 'Evaluación & Síntesis de Fase 2', subtopic: 'Simulacro Integral de Rutina y Vida de Cuartel', grammar: 'Consolidación de Present Simple y Deportes', formula: 'Syllabus Bravo Review', sound: '/brɑːvəʊ/' },

  // Phase 3 (61-90): Alimentación, Ropa, Ciudad & Logística
  { theme: 'Raciones & Alimentación de Campaña', subtopic: 'Raciones de Combate (MRE) y Menú Militar', grammar: 'Sustantivos Contables e Incontables en la Cocina', formula: 'Countable (rations) vs Uncountable (water)', sound: '/reɪʃnz/' },
  { theme: 'Raciones & Alimentación de Campaña', subtopic: 'Cuantificadores: SOME y ANY en Suministros', grammar: 'SOME en Afirmativas, ANY en Negativas e Interrogativas', formula: 'Some + plural/uncount, Any + neg/interrog', sound: '/sʌm, eni/' },
  { theme: 'Raciones & Alimentación de Campaña', subtopic: 'Preguntas de Cantidad: HOW MUCH y HOW MANY', grammar: 'HOW MUCH para Incontables, HOW MANY para Contables', formula: 'How much + uncount? / How many + plural?', sound: '/haʊ mʌtʃ/' },
  { theme: 'Uniforme & Equipo de Combate', subtopic: 'Uniforme de Campaña MTP y Ropa de Faena', grammar: 'Adjetivos Demostrativos: THIS y THAT', formula: 'This [near sing.] / That [far sing.]', sound: '/ðɪs, ðæt/' },
  { theme: 'Uniforme & Equipo de Combate', subtopic: 'Botas, Correajes y Casco de Protección', grammar: 'Adjetivos Demostrativos: THESE y THOSE', formula: 'These [near pl.] / Those [far pl.]', sound: '/ðiːz, ðəʊz/' },
  { theme: 'Uniforme & Equipo de Combate', subtopic: 'Talles, Medidas y Calce en Intendencia', grammar: 'Adjetivos de Tamaño (Small, Medium, Large)', formula: 'Size + noun (Size Large boots)', sound: '/lɑːdʒ/ (Large)' },
  { theme: 'Topografía & Puntos Cardinales', subtopic: 'Los Cuatro Puntos Cardinales y Orientación', grammar: 'Preposiciones con Puntos Cardinales (To the North)', formula: 'In the north / To the south', sound: '/nɔːθ/ (North)' },
  { theme: 'Direcciones Urbanas & Movilidad', subtopic: 'Instrucciones de Ruta: TURN LEFT y TURN RIGHT', grammar: 'Imperativos Direccionales para Vehículos', formula: 'Turn left/right at [landmark]', sound: '/tɜːn left/' },
  { theme: 'Direcciones Urbanas & Movilidad', subtopic: 'Instrucciones de Ruta: GO STRAIGHT AHEAD', grammar: 'Expresión de Continuidad Vial', formula: 'Go straight ahead for [X] metres', sound: '/streɪt/' },
  { theme: 'Direcciones Urbanas & Movilidad', subtopic: 'Ubicaciones Relativas: BETWEEN y OPPOSITE', grammar: 'Preposiciones de Posición en Planos Urbanos', formula: 'Between [A] and [B] / Opposite [C]', sound: '/bɪˈtwiːn/' },
  { theme: 'Transportes de Guarnición', subtopic: 'Autobuses, Trenes y Vehículos de Enlace', grammar: 'Preposiciones con Medios de Transporte (By bus, on foot)', formula: 'By + vehicle / On foot', sound: '/bʌs, treɪn/' },
  { theme: 'Economato & Transacciones Civiles', subtopic: 'Monedas (£, $, €) y Precios de Economato', grammar: 'Expresión de Precios en Libras y Peniques', formula: '[Pounds] pounds and [pence] pence', sound: '/paʊnd/' },
  { theme: 'Restaurante & Comidas Civiles', subtopic: 'Ordenar Alimentos con I WOULD LIKE', grammar: 'Fórmula de Cortesía I would like / I\'d like', formula: 'I would like + [food/drink], please', sound: '/wʊd laɪk/' },
  { theme: 'Restaurante & Comidas Civiles', subtopic: 'Solicitar la Cuenta y Pagar (Bill & Card)', grammar: 'Preguntas para Pagar: Can we have the bill?', formula: 'Can I have the bill, please?', sound: '/bɪl/ (Bill)' },
  { theme: 'Seguridad Vial de Convoy', subtopic: 'Normas Viales y Señalización de Tráfico Militar', grammar: 'Imperativos Negativos de Seguridad: DO NOT', formula: 'Do not overtake / Do not stop', sound: '/dəʊnt/' },
  { theme: 'Acciones en Progreso (Present Continuous)', subtopic: 'Acciones en el Momento del Reporte', grammar: 'Present Continuous Afirmativo: Be + Verb-ing', formula: 'Subject + am/is/are + Verb-ing', sound: '/ɪŋ/ final' },
  { theme: 'Acciones en Progreso (Present Continuous)', subtopic: 'Reporte Radial de Maniobra en Curso', grammar: 'Present Continuous en Mensajes Tácticos', formula: 'We are moving / Patrol is advancing', sound: '/muːvɪŋ/' },
  { theme: 'Contraste Gramatical Vital', subtopic: 'Present Simple (Rutina) vs Present Continuous (Ahora)', grammar: 'Diferenciación de Marcadores Temporales', formula: 'Every day (Simple) vs Right now (Continuous)', sound: '/naʊ/ (Now)' },
  { theme: 'Sanidad & Primeros Auxilios', subtopic: 'Botiquín Individual de Campaña (IFAK)', grammar: 'Sustantivos de Primeros Auxilios (Bandage, Tourniquet)', formula: 'Item + for + injury', sound: '/bæn/ (Bandage)' },
  { theme: 'Sanidad & Primeros Auxilios', subtopic: 'Partes del Cuerpo Humano y Lesiones Comunes', grammar: 'Vocabulario Anatómico Básico (Arm, Leg, Head)', formula: 'Injury in the [body part]', sound: '/hed, leɡ/' },
  { theme: 'Sanidad & Primeros Auxilios', subtopic: 'Reporte de Síntomas en Enfermería', grammar: 'Expresión I have got a [symptom / pain]', formula: 'I have got a headache / fever', sound: '/heɪk/ (Ache)' },
  { theme: 'Comunicaciones Telefónicas en Base', subtopic: 'Saludo Telefónico e Identificación de Oficina', grammar: 'Fórmulas Telefónicas: This is [Name] speaking', formula: 'Hello, this is [Name] from [Office]', sound: '/spiːk/ (Speaking)' },
  { theme: 'Comunicaciones Telefónicas en Base', subtopic: 'Transferencia de Llamadas: HOLD THE LINE', grammar: 'Fórmulas de Enlace Telefónico: Hold the line, please', formula: 'Hold on / I will put you through', sound: '/həʊld/' },
  { theme: 'Comunicaciones Telefónicas en Base', subtopic: 'Toma de Mensajes y Retorno de Llamada', grammar: 'Fórmulas: Can I take a message? / Call back', formula: 'Can I leave a message for [Person]?', sound: '/mesɪdʒ/' },
  { theme: 'Citas & Reuniones Militares', subtopic: 'Fijar Lugar, Fecha y Hora de Encuentro', grammar: 'Preposiciones Combinadas: At + hora, On + día, In + sala', formula: 'At 14:00 on Friday in Room B', sound: '/æt, ɒn, ɪn/' },
  { theme: 'Redacción Logística Breve', subtopic: 'Solicitud Formal de Pertrechos a Intendencia', grammar: 'Estructura de Requisición Formal Escrita', formula: 'Requisition memo format', sound: '/rek/ (Request)' },
  { theme: 'Consolidación de Vocabulario Logístico', subtopic: 'Emparejamiento de Ítems de Base y Depósito', grammar: 'Colocaciones Logísticas Estandarizadas', formula: 'Collocation pairs review', sound: '/stɔː/ (Store)' },
  { theme: 'Taller Auditivo de Enlace', subtopic: 'Comprensión de Avisos por Altavoz y Radio', grammar: 'Extracción de Información Clave en Anuncios', formula: 'Key information extraction', sound: '/əˈnaʊns/' },
  { theme: 'Taller de Lectura Doctrinal', subtopic: 'Lectura de Directivas de Base de 100 Palabras', grammar: 'Comprensión Lectora Literal y de Detalle', formula: 'Detail scanning techniques', sound: '/dɪˈrek/' },
  { theme: 'Evaluación & Síntesis de Fase 3', subtopic: 'Simulacro Integral de Logística y Tránsito A1', grammar: 'Consolidación Gramatical de Fase Charlie', formula: 'Syllabus Charlie Review', sound: '/tʃɑːli/ (Charlie)' },

  // Phase 4 (91-120): Puesto de Guardia & Simulación STANAG
  { theme: 'Puesto de Guardia & Seguridad Perimétrica', subtopic: 'Protocolos de Acceso en la Guardia (Guardhouse)', grammar: 'Obligación Reglamentaria con MUST', formula: 'Subject + MUST + base verb', sound: '/mʌst/ (Must)' },
  { theme: 'Puesto de Guardia & Seguridad Perimétrica', subtopic: 'El Desafío del Centinela: HALT! WHO GOES THERE?', grammar: 'Fórmulas de Interpelación de Guardia', formula: 'HALT! WHO GOES THERE? — FRIEND / VISITOR', sound: '/hɔːlt/ (Halt)' },
  { theme: 'Puesto de Guardia & Seguridad Perimétrica', subtopic: 'Contraseñas de Seguridad y Salvoconductos', grammar: 'Intercambio de Sign y Countersign', formula: 'Challenge -> Password -> Pass friend', sound: '/pɑːs/ (Pass)' },
  { theme: 'Puesto de Guardia & Seguridad Perimétrica', subtopic: 'Inspección de Tarjetas de Identidad Militar', grammar: 'Verificación de Vigencia: Expiry Date y Rank', formula: 'Show your ID card, please', sound: '/aɪˈdiː/' },
  { theme: 'Puesto de Guardia & Seguridad Perimétrica', subtopic: 'Libro de Guardia y Registro de Visitantes', grammar: 'Registro de Horas de Entrada y Salida (In / Out)', formula: 'Log entry: Time, Name, Reason', sound: '/lɒɡ/ (Logbook)' },
  { theme: 'Puesto de Guardia & Seguridad Perimétrica', subtopic: 'Inspección de Vehículos y Baúles en la Barrera', grammar: 'Instrucciones a Conductores con Imperativos', formula: 'Open the boot / Turn off the engine', sound: '/buːt/ (Boot)' },
  { theme: 'Reglas de Seguridad & Polígono', subtopic: 'Normas de Prohibición Estricta con MUST NOT', grammar: 'Diferencia Vital: MUST NOT (Prohibido) vs NEED NOT', formula: 'Subject + MUST NOT + base verb', sound: '/mʌsnt/ (Mustn\'t)' },
  { theme: 'Emergencias & Evacuación', subtopic: 'Alarma de Incendio y Rutas de Escape en Base', grammar: 'Imperativos de Emergencia: Do not panic, exit now', formula: 'Immediate command structure', sound: '/ˈfaɪə/ (Fire)' },
  { theme: 'Seguridad de Instalaciones', subtopic: 'Reporte de Bulto Sospechoso en el Alambrado', grammar: 'There is a suspicious package at [Location]', formula: 'There is / There was + noun phrase', sound: '/səˈspɪʃ/' },
  { theme: 'Patrullaje de Instalaciones', subtopic: 'Patrulla Perimétrica a Pie: Turno Nocturno', grammar: 'Obligaciones de Servicio con HAVE TO', formula: 'Subject + have/has to + base verb', sound: '/hæf tuː/' },
  { theme: 'Radiotelefonía Básica Militar', subtopic: 'Pro-words de Transmisión: THIS IS, OVER, OUT', grammar: 'Estructura Canónica de Transmisión Radial', formula: '[Recipient], this is [Sender]. [Message]. OVER.', sound: '/ˈəʊvə/ (Over)' },
  { theme: 'Radiotelefonía Básica Militar', subtopic: 'Pro-words de Confirmación: ROGER, WILCO, SAY AGAIN', grammar: 'Respuestas Operativas Estandarizadas', formula: 'ROGER (entendido), WILCO (cumpliré)', sound: '/ˈrɒdʒə/ (Roger)' },
  { theme: 'Códigos de Alerta & Estado', subtopic: 'Estado Operativo del Puesto: GREEN, AMBER, RED', grammar: 'Adjetivos Predicativos de Estado', formula: 'Perimeter status is GREEN / AMBER', sound: '/ɡriːn, red/' },
  { theme: 'Planes Futuros Inmediatos', subtopic: 'Planes de Unidad para Mañana con BE GOING TO', grammar: 'Futuro de Intención y Plan: Be going to + Verb', formula: 'Subject + am/is/are going to + verb', sound: '/ˈɡəʊɪŋ tuː/' },
  { theme: 'Planes Futuros Inmediatos', subtopic: 'Programación del Relevo de Guardia', grammar: 'Expresión de Planes Militares Programados', formula: 'Relief squad is going to arrive at [time]', sound: '/rɪˈliːf/ (Relief)' },
  { theme: 'Novedades del Pasado (To Be)', subtopic: 'Reporte de Turno Pasado: Afirmativo WAS y WERE', grammar: 'Pasado Simple del Verbo To Be', formula: 'I/He/She/It was, We/You/They were', sound: '/wɒz, wɜː/' },
  { theme: 'Novedades del Pasado (To Be)', subtopic: 'Ausencias y Negaciones: WAS NOT y WERE NOT', grammar: 'Formas Negativas de Pasado: Wasn\'t / Weren\'t', formula: 'Subject + was/were not + complement', sound: '/wɒznt, wɜːnt/' },
  { theme: 'Redacción del Libro de Novedades', subtopic: 'Entrada Formal en el Libro de Guardia (Logbook)', grammar: 'Registro Cronológico Conciso en Pasado', formula: 'Standard logbook entry syntax', sound: '/entri/ (Entry)' },
  { theme: 'Enlace con Fuerzas Aliadas', subtopic: 'Conversación de Bienvenida a Destacamento OTAN', grammar: 'Fórmulas Sociales de Enlace y Presentación', formula: 'Welcome to [Base]. On behalf of [Unit]...', sound: '/ˈwelkəm/' },
  { theme: 'Simulación STANAG 6001 Nivel 1', subtopic: 'Comprensión Auditiva 1: Mensajes VHF y Órdenes', grammar: 'Práctica con Acentos Militares Británicos', formula: 'STANAG 6001 Listening Standard L1', sound: '/ˈlɪs.nɪŋ/' },
  { theme: 'Simulación STANAG 6001 Nivel 1', subtopic: 'Comprensión Auditiva 2: Diálogos en Puesto de Control', grammar: 'Detección de Datos Específicos Bajo Ruido', formula: 'STANAG Audio extraction drill', sound: '/ˈdaɪəlɒɡ/' },
  { theme: 'Simulación STANAG 6001 Nivel 1', subtopic: 'Comprensión Lectora 1: Carteles y Directivas', grammar: 'Lectura de Rótulos y Avisos de Base', formula: 'STANAG 6001 Reading Standard L1', sound: '/ˈriːdɪŋ/' },
  { theme: 'Simulación STANAG 6001 Nivel 1', subtopic: 'Comprensión Lectora 2: Procedimiento Operativo Estándar', grammar: 'Extracción de Información Clave en SOP', formula: 'Standard Operating Procedure (SOP)', sound: '/es-əʊ-piː/' },
  { theme: 'Simulación STANAG 6001 Nivel 1', subtopic: 'Uso de la Lengua 1: Reactivos de Opción Múltiple', grammar: 'Precisión Gramatical y Léxica A1+', formula: 'Grammar multiple choice drills', sound: '/ˈɡræmə/' },
  { theme: 'Simulación STANAG 6001 Nivel 1', subtopic: 'Uso de la Lengua 2: Ordenamiento Sintáctico Militar', grammar: 'Estructuración Lógica de Frases Doctrinales', formula: 'Sentence scrambler consolidation', sound: '/ˈsentəns/' },
  { theme: 'Simulación STANAG 6001 Nivel 1', subtopic: 'Expresión Escrita: Redacción de Mensaje Táctico', grammar: 'Párrafo Formal de 40 a 60 Palabras', formula: 'Header + Situation + Action required', sound: '/ˈraɪtɪŋ/' },
  { theme: 'Simulación STANAG 6001 Nivel 1', subtopic: 'Expresión Oral: Entrevista de Identidad y Servicio', grammar: 'Fluidez y Pronunciación en Preguntas Personales', formula: 'STANAG Oral Interview standard', sound: '/ˈspiːkɪŋ/' },
  { theme: 'Laboratorio Fonético Final', subtopic: 'Dictado Operativo y Perfeccionamiento de Fonemas', grammar: 'Revisión de Pares Mínimos Críticos (/b/ vs /v/)', formula: 'Minimal pairs phonetic drills', sound: '/ˈdɪkteɪʃn/' },
  { theme: 'Examen Modelo Oficial Nivel 1', subtopic: 'Simulacro Completo de Certificación STANAG Nivel 1', grammar: 'Evaluación de las 5 Competencias Lingüísticas', formula: 'Full Mock SLP 1111 Exam', sound: '/ɪɡˈzæm/' },
  { theme: 'Graduación & Habilitación a Nivel 2', subtopic: 'Acreditación Oficial de Nivel 1 y Pase a Nivel 2', grammar: 'Consolidación Total del Programa A1 / A1+', formula: 'IESE Level 1 Certified', sound: '/səˈtɪfɪkeɪt/' }
];

// Helper to generate unique daily curriculum item
export function generateCurriculumDay(levelNumber: number, dayNumber: number): ArchetypeExerciseData {
  const safeDay = Math.max(1, Math.min(120, dayNumber || 1));
  const safeLevel = Math.max(1, Math.min(6, levelNumber || 1));
  const phaseNum = getPhaseNumber(safeDay);

  // Level 1 specific rich topics
  const l1Spec = L1_TOPICS[safeDay - 1];

  // Dynamic Level Progression Multipliers
  // Level 1: A1, Level 2: A2, Level 3: B1, Level 4: B2, Level 5: C1, Level 6: C2
  const levelNames = [
    '',
    'Nivel 1 (A1/A1+ • STANAG 0+/1)',
    'Nivel 2 (A2 • STANAG 1/1+)',
    'Nivel 3 (B1 • STANAG 2)',
    'Nivel 4 (B2 • STANAG 2+/3)',
    'Nivel 5 (C1 • STANAG 3/3+)',
    'Nivel 6 (C2 • STANAG 4)'
  ];

  // Derive unique tactical theme and subtopic according to level and phase
  let themeName = l1Spec.theme;
  let subtopicName = l1Spec.subtopic;
  let grammarTitle = l1Spec.grammar;
  let grammarFormula = l1Spec.formula;
  let targetSound = l1Spec.sound;

  if (safeLevel === 2) {
    // Level 2 (A2) Progression Themes
    if (phaseNum === 1) {
      themeName = 'Intendencia Militar, Uniformidad y Compras A2';
      subtopicName = `Día ${safeDay} • Requisición de Pertrechos, Talles MTP y Monedas (${safeDay}/30)`;
      grammarTitle = 'Demostrativos & Sustantivos Contables/Incontables';
      grammarFormula = 'This/That/These/Those + Requisition item';
      targetSound = '/ð/ vs /θ/ en demostrativos y números';
    } else if (phaseNum === 2) {
      themeName = 'Pasado Simple, Accidentes Viales y Atestados Policiales';
      subtopicName = `Día ${safeDay} • Verbos Regulares e Irregulares en Declaraciones de Policía Militar (${safeDay}/60)`;
      grammarTitle = 'Past Simple: Terminación -ed (/t/, /d/, /ɪd/) y Verbos Irregulares';
      grammarFormula = 'Subject + Verb-ed / Past-form + Time marker';
      targetSound = 'Pronunciación de -ed final (/t/ reported, /d/ arrived, /ɪd/ instructed)';
    } else if (phaseNum === 3) {
      themeName = 'Vehículos Blindados (APC/MBT) y Primeros Auxilios CAT';
      subtopicName = `Día ${safeDay} • Comparativos Técnicos y Aplicación de Torniquete Táctico (${safeDay}/90)`;
      grammarTitle = 'Comparativos (-er than / more than) y Superlativos';
      grammarFormula = '[Item A] is faster / more heavily armored than [Item B]';
      targetSound = '/ɜː/ (First, tourniquet) y /ə/ en sufijos comparativos';
    } else {
      themeName = 'Consolidación A2, Cadena de Mando y Simulación STANAG';
      subtopicName = `Día ${safeDay} • Briefing de Compañía y Examen Integral de Ascenso (${safeDay}/120)`;
      grammarTitle = 'Integración Sintáctica A2 & Conectores de Causa/Efecto';
      grammarFormula = 'Situation statement + because/therefore + Operational result';
      targetSound = 'Entonación descendente en órdenes militares formales';
    }
  } else if (safeLevel === 3) {
    // Level 3 (B1) Progression Themes
    if (phaseNum === 1) {
      themeName = 'Misiones de Paz de la ONU & Mandatos de Cascos Azules';
      subtopicName = `Día ${safeDay} • Zona de Amortiguación y Present Perfect con Already/Yet (${safeDay}/30)`;
      grammarTitle = 'Present Perfect Simple con Marcadores Temporales';
      grammarFormula = 'Subject + have/has + Past Participle + already/yet/just';
      targetSound = 'Contracciones de have/has: I\'ve, he\'s /v, z/';
    } else if (phaseNum === 2) {
      themeName = 'Puestos de Observación (OP) y Reglas de Empeñamiento (ROE)';
      subtopicName = `Día ${safeDay} • Escalada de Fuerza y Segundo Condicional Hipotético (${safeDay}/60)`;
      grammarTitle = 'Segundo Condicional Táctico (If + Past Simple, would + Verb)';
      grammarFormula = 'If hostile intent occurred, the sentry would challenge immediately';
      targetSound = 'Contracción de would: /d/ (We\'d challenge)';
    } else if (phaseNum === 3) {
      themeName = 'Contraste de Tiempos Verbales y Relaciones con la Prensa Civil';
      subtopicName = `Día ${safeDay} • Present Perfect vs Past Simple en Entrevistas de Medios (${safeDay}/90)`;
      grammarTitle = 'Contraste: Present Perfect (Experiencia/Reciente) vs Past Simple (Concluido)';
      grammarFormula = 'Since/For + Present Perfect vs Ago/In 2024 + Past Simple';
      targetSound = '/sɪns/ vs /fɔː/ y reducción vocálica';
    } else {
      themeName = 'Consolidación STANAG 6001 Nivel 2 y Resolución de Crisis';
      subtopicName = `Día ${safeDay} • Simulación Radial Bajo Fuego y Examen Profesional (${safeDay}/120)`;
      grammarTitle = 'Estructuras Complejas de Enlace y Cohesión Doctrinal';
      grammarFormula = 'Although/However/Furthermore + Tactical Assessment';
      targetSound = 'Cadencia radial formal de 120 palabras por minuto';
    }
  } else if (safeLevel >= 4) {
    // Levels 4, 5, 6 Advanced Strategic Themes
    const higherLvlText = safeLevel === 4 ? 'Intermedio Superior B2' : safeLevel === 5 ? 'Avanzado C1' : 'Maestría Doctrinal C2';
    themeName = `Doctrina Operativa Avanzada ${higherLvlText} (Fase ${phaseNum})`;
    subtopicName = `Día ${safeDay} • OPORD SMEAC, MEDEVAC y Coordinación de Estado Mayor Conjunto`;
    grammarTitle = safeLevel === 4 ? 'Oraciones Relativas y Voz Pasiva Operacional' : 'Inversión Estilística Formal & Subjuntivo Táctico';
    grammarFormula = safeLevel === 4 ? 'Passive: Subject + be + past participle + by agent' : 'Inversion: Under no circumstances shall units advance without authorization';
    targetSound = 'Acento received pronunciation (RP) británico militar de Estado Mayor';
  }

  // Calculate scaled word counts and target durations based on phase & level
  const baseWords = 35 + (safeLevel - 1) * 20 + phaseNum * 15 + (safeDay % 10) * 2;
  const maxWords = baseWords + 30;

  // Build unique vocabulary for the day
  const vocabList = [
    {
      term: `Doctrinal Term Alpha-${safeDay}`,
      translation: `Término Operacional ${safeDay}`,
      ipa: `/ˈtæktɪkəl ${safeDay}/`,
      spanishPhonetic: `tác-ti-cal dei ${safeDay}`,
      example: `Standard procedures for day ${safeDay} require immediate execution according to protocol.`
    },
    {
      term: `Standard Operating Procedure ${safeDay}`,
      translation: `Procedimiento Normalizado Día ${safeDay}`,
      ipa: `/ˈstændəd ˈɒpəreɪtɪŋ/`,
      spanishPhonetic: `stán-dard o-pe-réi-ting dei ${safeDay}`,
      example: `All personnel assigned to sector ${safeDay} must comply with SOP instructions.`
    },
    {
      term: `Grid Coordinate Reference ${safeDay}`,
      translation: `Coordenada de Cuadrícula ${safeDay}`,
      ipa: `/ɡrɪd kəʊˈɔːdɪnət/`,
      spanishPhonetic: `grid co-ór-di-neit ${safeDay}`,
      example: `Observation Post reports movement at grid coordinate zero-nine-${safeDay}.`
    },
    {
      term: `Status Code Green-${safeDay}`,
      translation: `Código de Situación Normal Día ${safeDay}`,
      ipa: `/ˈsteɪtəs kəʊd/`,
      spanishPhonetic: `stéi-tas coud grin ${safeDay}`,
      example: `Sector ${safeDay} perimeter report confirmed status green with zero breaches.`
    }
  ];

  // Specific Level 1 overrides for early days to guarantee authentic beginner basics
  if (safeLevel === 1 && safeDay <= 7) {
    vocabList[0] = { term: 'Alphabet', translation: 'Abecedario / Alfabeto', ipa: '/ˈælfəbet/', spanishPhonetic: 'ál-fa-bet', example: 'The English military alphabet has twenty-six letters.' };
    vocabList[1] = { term: 'Spell', translation: 'Deletrear', ipa: '/spel/', spanishPhonetic: 'spel', example: 'Could you spell your surname for the logbook, please?' };
    vocabList[2] = { term: 'Vowel', translation: 'Vocal', ipa: '/ˈvaʊəl/', spanishPhonetic: 'váu-el', example: 'The letter A is the first vowel in the alphabet.' };
    vocabList[3] = { term: 'Consonant', translation: 'Consonante', ipa: '/ˈkɒnsənənt/', spanishPhonetic: 'kón-so-nant', example: 'The letter B is a consonant in the NATO phonetic code.' };
  } else if (safeLevel === 1 && safeDay >= 8 && safeDay <= 13) {
    vocabList[0] = { term: 'Cardinal numbers', translation: 'Números cardinales', ipa: '/ˈkɑːdɪnəl/', spanishPhonetic: 'cár-di-nal nam-bers', example: 'Count the soldiers using cardinal numbers: one, two, three.' };
    vocabList[1] = { term: 'Plus', translation: 'Más (suma)', ipa: '/plʌs/', spanishPhonetic: 'plas', example: 'Ten plus five equals fifteen rations.' };
    vocabList[2] = { term: 'Minus', translation: 'Menos (resta)', ipa: '/ˈmaɪnəs/', spanishPhonetic: 'mái-nas', example: 'Twenty minus four leaves sixteen rifles in the armory.' };
    vocabList[3] = { term: 'Total amount', translation: 'Cantidad total', ipa: '/ˈtəʊtəl əˈmaʊnt/', spanishPhonetic: 'tóu-tal a-máunt', example: 'The total amount of ammunition received is fifty rounds.' };
  }

  // Context-aware radio VHF transmission script for listening based on daily topic and vocabulary
  const term1 = vocabList[0]?.term || 'operational sector';
  const term2 = vocabList[1]?.term || 'daily tasks';
  const term3 = vocabList[2]?.term || 'duty personnel';

  const radioTransmissionTitle = `Transmisión Radial VHF • Día ${safeDay}: ${subtopicName}`;
  const radioScript = `Control, this is Mobile Station Unit ${safeLevel}-${safeDay}. Operational update on ${subtopicName}: Our unit has verified ${term1} and confirmed status of ${term2}. All personnel comply with daily protocols for ${term3}. Visibility is clear, equipment is fully serviceable, and zero hostile activity is detected. Acknowledge transmission. Over.`;

  // Progressive short-phrase options in English coherent with daily topic
  const radioOptionsByPhase = safeLevel === 1 
    ? [
        `Verified ${term1} and confirmed status of ${term2}`,
        `Reported critical breakdown of ${term1}`,
        `Requested emergency evacuation from sector`,
        `Reported hostile ambush on unit`
      ]
    : safeLevel === 2
    ? [
        `Confirm verification of ${term1} and operational status of ${term2}`,
        `Report complete communications loss regarding ${term1}`,
        `Request immediate medical evacuation from position`,
        `Report unauthorized breach of secure perimeter`
      ]
    : safeLevel <= 4
    ? [
        `Confirm unit has verified ${term1} and status of ${term2} with zero hostile activity`,
        `Request urgent tactical reinforcement due to heavy incoming fire`,
        `Report complete equipment failure and communications breakdown`,
        `Order emergency tactical withdrawal of all patrol elements to headquarters`
      ]
    : [
        `Confirm unit has verified ${term1} and status of ${term2} with all equipment fully serviceable`,
        `Request urgent tactical close air support for heavily engaged reconnaissance unit`,
        `Report catastrophic breach of perimeter defenses and loss of grid position`,
        `Initiate unilateral armed interdiction without prior sector clearance`
      ];

  const radioQuestion = {
    question: `[Day ${safeDay} • VHF Verification]: What operational status does Station Unit ${safeLevel}-${safeDay} confirm regarding "${subtopicName}"?`,
    options: radioOptionsByPhase,
    correctIndex: 0,
    explanation: `In the transmission, Station Unit ${safeLevel}-${safeDay} confirms the verification of ${term1} and status of ${term2} with serviceable gear and zero hostile activity.`
  };

  // Context-aware reading text passage for the day
  const readingTitle = `Directiva Táctica STANAG • Día ${safeDay}: ${themeName}`;
  const readingSnippet = `STANDARD OPERATING DIRECTIVE ${safeLevel}-D${safeDay} (NATO UNCLASSIFIED):\nSubject: ${themeName} — ${subtopicName}.\nAll personnel assigned to operational duties during Phase ${phaseNum} must execute daily routines strictly adhering to SOP ${safeDay}. Verification of ${term1} and proper reporting of ${term2} are mandatory. Personnel must apply the doctrinal standard "${grammarTitle}" in formal reports. Directives issued by the Officer of the Day remain binding until formally superseded by written orders.`;

  const readingQuestion = {
    question: `[Day ${safeDay} • Tactical Directive]: According to the regulatory text for "${subtopicName}", what is the mandatory requirement for personnel?`,
    options: [
      `Strictly verify ${term1}, report ${term2} accurately, and adhere to "${grammarTitle}".`,
      `Modify orders individually according to personal judgment without authorization.`,
      `Abandon assigned duty sector without waiting for formal written orders.`,
      `Suspend all communications procedures during scheduled operational shifts.`
    ],
    correctIndex: 0,
    explanation: `The regulatory text for Day ${safeDay} specifies that personnel must strictly verify ${term1}, report ${term2}, and adhere to SOP directives.`
  };

  // Unique Use of Language question
  const uolPrompt = `Analiza la regla gramatical del Día ${safeDay} (${grammarTitle}) y selecciona la opción doctrinalmente correcta:`;
  const uolQuestion = {
    question: `Complete el enunciado operativo del Día ${safeDay} respetando la fórmula "${grammarFormula}":`,
    options: [
      `The detachment commander inspected checkpoint ${safeDay} in accordance with established regulations.`,
      `The detachment commander inspecting not checkpoint ${safeDay} yesterday.`,
      `Commander do not checks the checkpoint ${safeDay} tomorrow.`,
      `Detachment are inspect with errors in the logbook.`
    ],
    correctIndex: 0,
    explanation: `La opción correcta respeta la concordancia, tiempo verbal y orden sintáctico militar estandarizado correspondiente al Día ${safeDay}.`
  };

  // Unique Writing task
  const writingTask = {
    title: `Redacción Operacional Formal (Día ${safeDay} • ${themeName})`,
    scenario: `Redacta un mensaje militar formal dirigido al Comandante de la Guardia informando sobre el estado del puesto asignado en el Día ${safeDay}, el personal presente y el cumplimiento de las directivas de seguridad.`,
    targetWordCount: `${baseWords} - ${maxWords} palabras`,
    requiredElements: [
      `Encabezado formal (To / From / Subject / Date)`,
      `Mención explícita del puesto de control del Día ${safeDay}`,
      `Uso correcto de la fórmula gramatical: ${grammarFormula}`,
      `Cierre formal militar (Reported by: [Rank] [Surname])`
    ],
    modelAnswer: `TO: Officer of the Day\nFROM: Guard Unit ${safeLevel}-${safeDay}\nDATE: Day ${safeDay}\nSUBJECT: Daily Duty Report\n\nSir, I have the honour to report that Guard Post ${safeDay} is fully operational. All personnel are present and accounted for. Perimeter checks were conducted at zero-six-hundred and twelve-hundred hours with zero incidents. Communications with headquarters remain operational and all safety protocols have been strictly enforced.\n\nRespectfully submitted,\nSergeant J. Davis`
  };

  // Unique Speaking task
  const speakingPrompt = {
    title: `Radiotelefonía Militar & Fonética (Día ${safeDay} • ${subtopicName})`,
    scenario: `Simula una transmisión radial VHF al Centro de Operaciones Tácticas reportando la situación de tu sector en el Día ${safeDay}. Utiliza los prowords reglamentarios de la OTAN y mantén dicción clara con entonación británica.`,
    recommendedDuration: safeLevel <= 2 ? '45 segundos' : safeLevel <= 4 ? '60 segundos' : '90 segundos',
    pronunciationTips: [
      `Articula claramente el sonido objetivo del día: ${targetSound}.`,
      `Haz pausas de un segundo después de cada proword (THIS IS, OVER).`,
      `Pronuncia las letras y números con acentuación militar británica.`
    ],
    modelResponse: `Control, this is Observation Post ${safeDay}. SITREP: Sector is all clear, visibility ten kilometres, zero breaches detected on the wire. All sentries alert. Over.`
  };

  return {
    title: `${subtopicName}`,
    theme: `${themeName} (Fase ${phaseNum} • Nivel ${safeLevel})`,
    objective: `Dominar las competencias lingüísticas operacionales del Día ${safeDay} (${themeName}) conforme a la doctrina militar STANAG 6001.`,
    vocabulary: vocabList,
    grammar: {
      title: grammarTitle,
      formula: grammarFormula,
      rule: `En el Día ${safeDay} se entrena la estructura "${grammarTitle}". La fórmula reglamentaria es: ${grammarFormula}. Aplica estricta concordancia entre sujeto y verbo sin omisiones en registros formales.`,
      tacticalTip: `En las comunicaciones del Día ${safeDay}, la precisión léxica previene malentendidos críticos en la red radial militar.`
    },
    phonetics: {
      targetSound,
      articulatoryTip: `Enfoca la colocación de la lengua y los labios para el sonido ${targetSound}, distinguiéndolo de su contraparte en español.`,
      spanishPhonetic: `Aproximación fonética: ${targetSound}`,
      practiceWords: [
        { word: vocabList[0].term.split(' ')[0], spanishPhonetic: vocabList[0].spanishPhonetic.split(' ')[0], translation: vocabList[0].translation.split(' ')[0] },
        { word: vocabList[1].term.split(' ')[0], spanishPhonetic: vocabList[1].spanishPhonetic.split(' ')[0], translation: vocabList[1].translation.split(' ')[0] },
        { word: vocabList[2].term.split(' ')[0], spanishPhonetic: vocabList[2].spanishPhonetic.split(' ')[0], translation: vocabList[2].translation.split(' ')[0] }
      ]
    },
    usefulPhrase: {
      phrase: `All units acknowledge receipt of daily directive ${safeDay}. — Message received and understood.`,
      translation: `Todas las unidades confirmen recepción de la directiva diaria ${safeDay}. — Mensaje recibido y comprendido.`,
      spanishPhonetic: `Ol iúnits ak-nó-ledsh ri-sít of déi-li di-réc-tiv ${safeDay} — Mé-sadsh ri-sív-d and an-der-stúd.`,
      tacticalUsage: `Procedimiento de colación y confirmación en la red radial militar de la jornada.`
    },
    listening: {
      title: radioTransmissionTitle,
      script: radioScript,
      question: radioQuestion
    },
    reading: {
      title: readingTitle,
      snippet: readingSnippet,
      question: readingQuestion
    },
    useOfLanguage: {
      title: `Gramática Aplicada & Sintaxis Militar Día ${safeDay}`,
      prompt: uolPrompt,
      question: uolQuestion
    },
    writing: writingTask,
    speaking: speakingPrompt
  };
}

// Full 120 array generator per level with cache, respecting curated archetype datasets
const CURRICULUM_CACHE = new Map<string, ArchetypeExerciseData[]>();

export function getCuratedArchetypesForLevel(levelNumber: number): ArchetypeExerciseData[] {
  const safeLevel = Math.max(1, Math.min(6, levelNumber || 1));
  switch (safeLevel) {
    case 1:
      return [
        ...FOUNDATIONS_ARCHETYPES_PART1,
        ...DAILY_LIFE_ARCHETYPES_PART2,
        ...TACTICAL_ARCHETYPES_PART3,
        ...MILITARY_OPERATIONAL_ARCHETYPES
      ];
    case 2:
      return LEVEL_2_ARCHETYPES;
    case 3:
      return LEVEL_3_ARCHETYPES;
    case 4:
      return LEVEL_4_ARCHETYPES;
    case 5:
      return LEVEL_5_ARCHETYPES;
    case 6:
      return LEVEL_6_ARCHETYPES;
    default:
      return [
        ...FOUNDATIONS_ARCHETYPES_PART1,
        ...DAILY_LIFE_ARCHETYPES_PART2,
        ...TACTICAL_ARCHETYPES_PART3,
        ...MILITARY_OPERATIONAL_ARCHETYPES
      ];
  }
}

export function getAllArchetypesForLevel(levelNumber: number): ArchetypeExerciseData[] {
  const safeLevel = Math.max(1, Math.min(6, levelNumber || 1));
  const cacheKey = `level-${safeLevel}`;
  if (CURRICULUM_CACHE.has(cacheKey)) {
    return CURRICULUM_CACHE.get(cacheKey)!;
  }

  const curated = getCuratedArchetypesForLevel(safeLevel);
  const list: ArchetypeExerciseData[] = [];
  for (let day = 1; day <= 120; day++) {
    if (day <= curated.length && curated[day - 1]) {
      list.push(curated[day - 1]);
    } else {
      list.push(generateCurriculumDay(safeLevel, day));
    }
  }
  CURRICULUM_CACHE.set(cacheKey, list);
  return list;
}

export function getCurriculumForDayAndLevel(levelNumber: number, dayNumber: number): ArchetypeExerciseData {
  const safeDay = Math.max(1, Math.min(120, dayNumber || 1));
  const safeLevel = Math.max(1, Math.min(6, levelNumber || 1));
  const curated = getCuratedArchetypesForLevel(safeLevel);
  if (safeDay <= curated.length && curated[safeDay - 1]) {
    return curated[safeDay - 1];
  }
  return generateCurriculumDay(safeLevel, safeDay);
}
