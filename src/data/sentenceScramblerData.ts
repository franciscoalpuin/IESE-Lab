import { SentenceScrambleItem } from '../types';

export const SENTENCE_SCRAMBLER_DATA: SentenceScrambleItem[] = [
  // =========================================================================
  // LEVEL 1 (A1+)
  // =========================================================================
  {
    id: 'scramble-l1-1',
    levelNumber: 1,
    title: 'Orden de Presentación y Desfile Matutino',
    context: 'Instrucción en la Plaza de Armas del Regimiento',
    grammarFocus: 'Imperative + Location + Time Adverbial',
    correctSentence: 'Fall in on the parade ground at zero-seven-hundred hours.',
    scrambledTokens: ['at', 'on', 'Fall in', 'zero-seven-hundred hours.', 'the parade ground'],
    translation: 'Fórmense en la plaza de armas a las 07:00 horas.',
    tacticalTip: 'En órdenes militares en inglés, la instrucción imperativa ("Fall in") encabeza la oración, seguida del lugar ("on the parade ground") y finalmente el horario ("at zero-seven-hundred hours").'
  },
  {
    id: 'scramble-l1-2',
    levelNumber: 1,
    title: 'Presentación Oficial de Jerarquía Militar',
    context: 'Recepción formal en el Casino de Oficiales',
    grammarFocus: 'Subject + Verb To Be + Military Rank + Prepositional Unit',
    correctSentence: 'Captain Davies is the executive officer of Company Bravo.',
    scrambledTokens: ['of', 'is', 'Captain Davies', 'Company Bravo.', 'the executive officer'],
    translation: 'El Capitán Davies es el segundo jefe de la Compañía Bravo.',
    tacticalTip: 'El rango precede directamente al apellido del oficial sin artículo ("Captain Davies", nunca "The Captain Davies").'
  },
  {
    id: 'scramble-l1-3',
    levelNumber: 1,
    title: 'Directiva de Seguridad en el Polígono de Tiro',
    context: 'Instrucciones del Oficial de Seguridad de Tiro',
    grammarFocus: 'Modal Verb "Must" + Bare Infinitive + Compound Noun',
    correctSentence: 'All recruits must wear protective ear defenders on the firing range.',
    scrambledTokens: ['on the firing range.', 'wear', 'must', 'protective ear defenders', 'All recruits'],
    translation: 'Todos los reclutas deben usar protectores auditivos en el polígono de tiro.',
    tacticalTip: '"Must" no lleva "to" en el infinitivo posterior ("must wear", no "must to wear"). El complemento de lugar suele ubicarse al final de la oración.'
  },

  // =========================================================================
  // LEVEL 2 (A2)
  // =========================================================================
  {
    id: 'scramble-l2-1',
    levelNumber: 2,
    title: 'Reporte de Movimiento y Ruta de Patrulla',
    context: 'Informe radial de patrulla de reconocimiento',
    grammarFocus: 'Past Simple + Movement Verb + Prepositional Path',
    correctSentence: 'The motorized patrol advanced across the northern sector yesterday afternoon.',
    scrambledTokens: ['yesterday afternoon.', 'advanced', 'across the northern sector', 'The motorized patrol'],
    translation: 'La patrulla motorizada avanzó a través del sector norte ayer por la tarde.',
    tacticalTip: 'En inglés militar, los complementos de tiempo ("yesterday afternoon") van al final o al inicio absoluto de la oración, pero nunca entre el verbo y el objeto.'
  },
  {
    id: 'scramble-l2-2',
    levelNumber: 2,
    title: 'Regulación sobre Documentación y Credenciales Militares',
    context: 'Control de acceso en el puesto de guardia perimetral',
    grammarFocus: 'Have to (Obligation) + Infinitive + Compound Direct Object',
    correctSentence: 'Visitors have to show their military identity cards at the main gate.',
    scrambledTokens: ['show', 'have to', 'their military identity cards', 'at the main gate.', 'Visitors'],
    translation: 'Los visitantes tienen que mostrar sus credenciales de identidad militar en la puerta principal.',
    tacticalTip: '"Have to" expresa obligación reglamentaria externa impuesta por las normas de la base militar.'
  },
  {
    id: 'scramble-l2-3',
    levelNumber: 2,
    title: 'Previsión de Abastecimiento de Combustible',
    context: 'Plan de reabastecimiento logístico en campaña',
    grammarFocus: 'Future with "Going to" + Action Verb + Frequency Indicator',
    correctSentence: 'The logistics battalion is going to resupply all forward checkpoints tomorrow.',
    scrambledTokens: ['is going to', 'all forward checkpoints', 'The logistics battalion', 'resupply', 'tomorrow.'],
    translation: 'El batallón de arsenales reabastecerá todos los puestos de control adelantados mañana.',
    tacticalTip: '"Be going to" se utiliza para operaciones programadas de antemano en el plan de operaciones.'
  },

  // =========================================================================
  // LEVEL 3 (A2+)
  // =========================================================================
  {
    id: 'scramble-l3-1',
    levelNumber: 3,
    title: 'Condición Táctica en Caso de Contacto Enemigo',
    context: 'Instrucción previa a patrulla de combate en territorio hostil',
    grammarFocus: 'First Conditional (If + Present Simple, Will + Bare Infinitive)',
    correctSentence: 'If the patrol encounters enemy resistance, the squad leader will request mortar support.',
    scrambledTokens: ['enemy resistance,', 'will request', 'If the patrol encounters', 'mortar support.', 'the squad leader'],
    translation: 'Si la patrulla encuentra resistencia enemiga, el jefe de grupo solicitará apoyo de morteros.',
    tacticalTip: 'En el primer condicional reglamentario, la cláusula condicional lleva Presente Simple ("encounters") y la consecuencia lleva "will" + verbo base.'
  },
  {
    id: 'scramble-l3-2',
    levelNumber: 3,
    title: 'Evaluación de Rendimiento de Vehículos Blindados',
    context: 'Informe técnico comparativo de tanques y transporte de tropas',
    grammarFocus: 'Comparative Adjective + Than + Prepositional Comparison',
    correctSentence: 'The new wheeled personnel carrier is significantly faster than the tracked tank.',
    scrambledTokens: ['significantly faster', 'The new wheeled personnel carrier', 'than', 'the tracked tank.', 'is'],
    translation: 'El nuevo transporte blindado a ruedas es significativamente más veloz que el tanque a orugas.',
    tacticalTip: 'Los adjetivos cortos forman el comparativo con sufijo -er ("faster"), y los adverbios de grado como "significantly" se posicionan antes del comparativo.'
  },
  {
    id: 'scramble-l3-3',
    levelNumber: 3,
    title: 'Debriefing de Misión Cumplida en Misión de Paz',
    context: 'Parte de situación tras completar vigilancia de cese al fuego',
    grammarFocus: 'Present Perfect + Completed Action + Target Location',
    correctSentence: 'Our peacekeepers have already established a secure perimeter around the refugee camp.',
    scrambledTokens: ['have already established', 'around the refugee camp.', 'Our peacekeepers', 'a secure perimeter'],
    translation: 'Nuestros cascos azules ya han establecido un perímetro seguro alrededor del campamento de refugiados.',
    tacticalTip: '"Already" se ubica típicamente entre el auxiliar "have" y el participio pasado "established".'
  },

  // =========================================================================
  // LEVEL 4 (B1)
  // =========================================================================
  {
    id: 'scramble-l4-1',
    levelNumber: 4,
    title: 'Procedimiento Operativo Normalizado (SOP) en Voz Pasiva',
    context: 'Reglamento doctrinario de la OTAN y Fuerzas de Paz de la ONU',
    grammarFocus: 'Passive Voice (Modal + Be + Past Participle) + Purpose Clause',
    correctSentence: 'All tactical radio frequencies must be encrypted to prevent hostile interception.',
    scrambledTokens: ['must be encrypted', 'to prevent', 'hostile interception.', 'All tactical radio frequencies'],
    translation: 'Todas las frecuencias de radio tácticas deben ser cifradas para prevenir la interceptación hostil.',
    tacticalTip: 'En manuales doctrinales militares, la voz pasiva ("must be encrypted") es la estructura predominante para enfocarse en la acción y no en el operador.'
  },
  {
    id: 'scramble-l4-2',
    levelNumber: 4,
    title: 'Hipótesis Operativa de Despliegue Aeromóvil',
    context: 'Apreciación de situación en el Puesto de Mando táctico',
    grammarFocus: 'Second Conditional (If + Past Simple, Would + Bare Infinitive)',
    correctSentence: 'If the landing zone were compromised, the helicopter detachment would divert to an alternate base.',
    scrambledTokens: ['the helicopter detachment', 'were compromised,', 'If the landing zone', 'to an alternate base.', 'would divert'],
    translation: 'Si la zona de aterrizaje estuviera comprometida, el destacamento de helicópteros se desviaría a una base alternativa.',
    tacticalTip: 'En el registro militar formal, se prefiere "were" para todas las personas en la cláusula condicional ("If the landing zone were compromised").'
  },
  {
    id: 'scramble-l4-3',
    levelNumber: 4,
    title: 'Transmisión de Orden Verbal en Discurso Indirecto',
    context: 'Informe del Oficial de Comunicaciones al Jefe de Operaciones',
    grammarFocus: 'Reported Speech + Reporting Verb + That Clause + Past Shift',
    correctSentence: 'The brigade commander ordered that all units maintain radio silence until dawn.',
    scrambledTokens: ['until dawn.', 'ordered that', 'maintain radio silence', 'all units', 'The brigade commander'],
    translation: 'El comandante de brigada ordenó que todas las unidades mantuvieran silencio de radio hasta el amanecer.',
    tacticalTip: 'Con verbos de mando como "order" o "demand", en inglés formal se emplea el subjuntivo mandatorio (verbo base "maintain").'
  },

  // =========================================================================
  // LEVEL 5 (B1+)
  // =========================================================================
  {
    id: 'scramble-l5-1',
    levelNumber: 5,
    title: 'Análisis Crítico Posterior a la Operación (AAR)',
    context: 'Lecciones aprendidas en ejercicio conjunto multinacional',
    grammarFocus: 'Third Conditional (If + Past Perfect, Would have + Past Participle)',
    correctSentence: 'If the forward observer had spotted the enemy artillery sooner, our battery would have neutralized the threat.',
    scrambledTokens: ['would have neutralized', 'the enemy artillery sooner,', 'If the forward observer', 'our battery', 'had spotted', 'the threat.'],
    translation: 'Si el observador adelantado hubiera divisado la artillería enemiga antes, nuestra batería habría neutralizado la amenaza.',
    tacticalTip: 'El tercer condicional es indispensable en briefings de Estado Mayor para analizar desenlaces contrafácticos en combates simulados o reales.'
  },
  {
    id: 'scramble-l5-2',
    levelNumber: 5,
    title: 'Directiva de Seguridad en Redes Clasificadas',
    context: 'Manual de Ciberdefensa y Guerra Electrónica',
    grammarFocus: 'Negative Adverbial Fronting with Auxiliary Inversion',
    correctSentence: 'Under no circumstances should classified operational maps be transmitted across unsecured public channels.',
    scrambledTokens: ['should classified operational maps', 'be transmitted', 'across unsecured public channels.', 'Under no circumstances'],
    translation: 'Bajo ninguna circunstancia se deben transmitir cartas operacionales clasificadas por canales públicos no seguros.',
    tacticalTip: 'Al iniciar con la frase negativa restrictiva "Under no circumstances", el sujeto y el auxiliar se invierten ("should classified maps be transmitted...").'
  },
  {
    id: 'scramble-l5-3',
    levelNumber: 5,
    title: 'Apreciación de Inteligencia Estratégica Regional',
    context: 'Informe de Estado Mayor Conjunto (EMCO)',
    grammarFocus: 'Complex Passive Construction with Reporting Verb + To Have Been',
    correctSentence: 'Hostile forces were believed to have crossed the international demilitarized demarcation zone before midnight.',
    scrambledTokens: ['to have crossed', 'were believed', 'before midnight.', 'Hostile forces', 'the international demilitarized demarcation zone'],
    translation: 'Se creía que fuerzas hostiles habían cruzado la zona de demarcación desmilitarizada internacional antes de la medianoche.',
    tacticalTip: 'La estructura de infinitivo perfecto pasivo ("were believed to have crossed") permite presentar información de inteligencia militar con rigor analítico sin afirmar hechos no corroborados.'
  },

  // =========================================================================
  // LEVEL 6 (B2)
  // =========================================================================
  {
    id: 'scramble-l6-1',
    levelNumber: 6,
    title: 'Énfasis Doctrinal en Doctrina de Mando y Control',
    context: 'Discurso de apertura en el Colegio Militar de la Nación / Staff College',
    grammarFocus: 'Inversion with "Seldom" + Auxiliary + Subject + Main Verb',
    correctSentence: 'Seldom have military commanders faced such intricate multidimensional operational environments during peacetime deployments.',
    scrambledTokens: ['faced such intricate', 'military commanders', 'Seldom have', 'during peacetime deployments.', 'multidimensional operational environments'],
    translation: 'Raras veces los comandantes militares han enfrentado entornos operacionales multidimensionales tan intrincados durante despliegues en tiempos de paz.',
    tacticalTip: 'La inversión con adverbios restrictivos ("Seldom", "Rarely", "Scarcely") es una marca distintiva de oratoria militar británica de alto nivel.'
  },
  {
    id: 'scramble-l6-2',
    levelNumber: 6,
    title: 'Cláusula de Participio en Directiva Estratégica',
    context: 'Resolución de Estado Mayor sobre Tratado de Defensa Mutua',
    grammarFocus: 'Participial Clause (Having + Past Participle) Expressing Cause/Sequence',
    correctSentence: 'Having evaluated all tactical vulnerabilities, the defense minister ratified the multinational interoperability agreement.',
    scrambledTokens: ['ratified the multinational interoperability agreement.', 'Having evaluated', 'the defense minister', 'all tactical vulnerabilities,'],
    translation: 'Habiendo evaluado todas las vulnerabilidades tácticas, el ministro de defensa ratificó el acuerdo de interoperabilidad multinacional.',
    tacticalTip: 'Las cláusulas de participio compuesto ("Having evaluated...") condensan información formal de Estado Mayor con máxima economía de palabras.'
  },
  {
    id: 'scramble-l6-3',
    levelNumber: 6,
    title: 'Condicional Mixto en Evaluación Post-Conflicto',
    context: 'Informe de Lecciones Aprendidas del Estado Mayor General',
    grammarFocus: 'Mixed Conditional (Past Condition with Present Impact)',
    correctSentence: 'Had the brigade not fortified the northern pass last winter, our current defensive perimeter would be indefensible today.',
    scrambledTokens: ['last winter,', 'the northern pass', 'Had the brigade not fortified', 'would be indefensible today.', 'our current defensive perimeter'],
    translation: 'Si la brigada no hubiera fortificado el paso norte el invierno pasado, nuestro perímetro defensivo actual sería indefendible hoy en día.',
    tacticalTip: '"Had the brigade not fortified..." es la inversión formal equivalente a "If the brigade had not fortified...", característica del estilo castrense de Estado Mayor.'
  }
];
