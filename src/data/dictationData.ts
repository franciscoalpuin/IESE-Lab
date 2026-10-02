import { MilitaryDictationItem } from '../types';

export const MILITARY_DICTATION_DATA: MilitaryDictationItem[] = [
  // =========================================================================
  // LEVEL 1 (A1+)
  // =========================================================================
  {
    id: 'dict-l1-1',
    levelNumber: 1,
    title: 'Pase de Lista e Inspección de Equipo Matutino',
    context: 'Orden del Sargento en la Plaza de Armas',
    audioText: 'Attention on deck. All soldiers fall in at zero-seven-hundred hours for morning inspection.',
    difficulty: 'Basic',
    keywords: ['Attention', 'soldiers', 'inspection', 'zero-seven-hundred'],
    hint: 'Comienza con la orden de atención tradicional del Ejército Británico e indica la hora militar.',
    spanishTranslation: 'Atención en cubierta. Todos los soldados fórmense a las 07:00 horas para la inspección matutina.',
    prowordsIncluded: ['Attention']
  },
  {
    id: 'dict-l1-2',
    levelNumber: 1,
    title: 'Verificación Radial con Código OTAN',
    context: 'Comprobación de enlace de radio VHF de patrulla',
    audioText: 'Sierra One, this is Bravo Two. Radio check, do you read me? Over.',
    difficulty: 'Basic',
    keywords: ['Sierra One', 'Bravo Two', 'Radio check', 'Over'],
    hint: 'Incluye distintivos de llamada del alfabeto fonético OTAN y el proword reglamentario "Over".',
    spanishTranslation: 'Sierra Uno, aquí Bravo Dos. Prueba de radio, ¿me recibe? Cambio.',
    prowordsIncluded: ['THIS IS', 'OVER']
  },

  // =========================================================================
  // LEVEL 2 (A2)
  // =========================================================================
  {
    id: 'dict-l2-1',
    levelNumber: 2,
    title: 'Despacho de Convoy de Abastecimiento de Combustible',
    context: 'Instrucción logística en base militar de despliegue',
    audioText: 'The logistics convoy must depart the fuel depot at zero-nine-thirty hours and follow Route Alpha.',
    difficulty: 'Intermediate',
    keywords: ['logistics', 'convoy', 'fuel depot', 'depart', 'Route Alpha'],
    hint: 'Describe la partida obligatoria del convoy de combustible con indicación de horario y ruta.',
    spanishTranslation: 'El convoy logístico debe partir del depósito de combustible a las 09:30 horas y seguir la Ruta Alfa.',
    prowordsIncluded: ['Route Alpha']
  },
  {
    id: 'dict-l2-2',
    levelNumber: 2,
    title: 'Reporte de Novedades Médicas en el Puesto de Socorro',
    context: 'Comunicación telefónica del Oficial de Sanidad Militar',
    audioText: 'Two soldiers suffered minor injuries during field training and are currently resting at the medical station.',
    difficulty: 'Intermediate',
    keywords: ['suffered', 'injuries', 'training', 'resting', 'medical station'],
    hint: 'Usa el pasado simple para describir heridos leves durante el adiestramiento.',
    spanishTranslation: 'Dos soldados sufrieron heridas menores durante el adiestramiento en el terreno y actualmente descansan en el puesto médico.'
  },

  // =========================================================================
  // LEVEL 3 (A2+)
  // =========================================================================
  {
    id: 'dict-l3-1',
    levelNumber: 3,
    title: 'Reporte Táctico de Patrulla Adelantada (SITREP)',
    context: 'Transmisión radial táctica desde el Puesto de Observación',
    audioText: 'Sunray, this is Patrol Delta. We have reached checkpoint Charlie without hostile contact. Requesting permission to push forward. Over.',
    difficulty: 'Intermediate',
    keywords: ['Sunray', 'Patrol Delta', 'checkpoint Charlie', 'hostile contact', 'permission', 'Over'],
    hint: 'Usa el apodo reglamentario "Sunray" (designación británica para el Comandante) y el proword "Over".',
    spanishTranslation: 'Comandante, aquí Patrulla Delta. Hemos alcanzado el puesto de control Charlie sin contacto hostil. Solicitamos permiso para avanzar. Cambio.',
    prowordsIncluded: ['SUNRAY', 'THIS IS', 'OVER']
  },
  {
    id: 'dict-l3-2',
    levelNumber: 3,
    title: 'Meteorología y Condiciones para Aterrizaje Aeromóvil',
    context: 'Mensaje de radio para helicóptero de rescate',
    audioText: 'Landing Zone Falcon is secure. Visibility is ten kilometers, winds are north-northwest at eight knots.',
    difficulty: 'Intermediate',
    keywords: ['Landing Zone Falcon', 'secure', 'Visibility', 'kilometers', 'winds', 'knots'],
    hint: 'Reporte meteorológico estandarizado para helipuerto militar en nudos y kilómetros.',
    spanishTranslation: 'La Zona de Aterrizaje Falcón está asegurada. La visibilidad es de diez kilómetros, vientos del nor-noroeste a ocho nudos.'
  },

  // =========================================================================
  // LEVEL 4 (B1)
  // =========================================================================
  {
    id: 'dict-l4-1',
    levelNumber: 4,
    title: 'Directiva Operacional de Cascos Azules de la ONU',
    context: 'Instrucción formal de Reglas de Empeñamiento (ROE)',
    audioText: 'Peacekeeping personnel are strictly instructed to maintain operational restraint and employ lethal force only in self-defense.',
    difficulty: 'Advanced',
    keywords: ['Peacekeeping', 'strictly instructed', 'operational restraint', 'lethal force', 'self-defense'],
    hint: 'Frase doctrinal formal que combina voz pasiva y lenguaje legal militar de misiones de paz.',
    spanishTranslation: 'El personal de mantenimiento de la paz tiene instrucciones estrictas de mantener moderación operativa y emplear fuerza letal únicamente en legítima defensa.'
  },
  {
    id: 'dict-l4-2',
    levelNumber: 4,
    title: 'Solicitud Táctica de Evacuación Médica Aeromóvil (MEDEVAC)',
    context: 'Mensaje urgente de evacuación en formato de 9 líneas',
    audioText: 'Urgent Medevac request for two litter casualties at grid coordinate four-six-eight two-one-zero. LZ marked with red smoke. Out.',
    difficulty: 'Advanced',
    keywords: ['Urgent Medevac', 'litter casualties', 'grid coordinate', 'red smoke', 'Out'],
    hint: 'Transmisión estandarizada de evacuación médica especificando tipo de heridos (litter casualties) y coordenadas.',
    spanishTranslation: 'Solicitud urgente de evacuación aeromédica para dos heridos en camilla en coordenada de cuadrícula 468 210. Zona de aterrizaje marcada con humo rojo. Fuera.',
    prowordsIncluded: ['OUT']
  },

  // =========================================================================
  // LEVEL 5 (B1+)
  // =========================================================================
  {
    id: 'dict-l5-1',
    levelNumber: 5,
    title: 'Apreciación de Inteligencia sobre Guerra Electrónica',
    context: 'Briefing del Oficial G-2 en el Estado Mayor Conjunto',
    audioText: 'Electronic warfare reconnaissance indicates significant tactical jamming across VHF frequencies, disrupting satellite telemetry and command coordination.',
    difficulty: 'Advanced',
    keywords: ['Electronic warfare', 'reconnaissance', 'tactical jamming', 'disrupting', 'telemetry', 'coordination'],
    hint: 'Reporte técnico militar con vocabulario avanzado de interferencia electrónica y enlace de datos.',
    spanishTranslation: 'El reconocimiento de guerra electrónica indica interferencia táctica significativa en las frecuencias VHF, perturbando la telemetría satelital y la coordinación del comando.'
  },
  {
    id: 'dict-l5-2',
    levelNumber: 5,
    title: 'Disposición Doctrinal para Reagrupamiento de Fuerzas',
    context: 'Fragmento de Orden de Operaciones de Brigada Blindada',
    audioText: 'The reinforced mechanised battlegroup shall disengage from primary defensive positions and consolidate at assembly area Victor prior to dusk.',
    difficulty: 'Advanced',
    keywords: ['reinforced', 'mechanised battlegroup', 'shall disengage', 'defensive positions', 'consolidate', 'assembly area'],
    hint: 'Uso del modal formal "shall" para órdenes operativas mandatarias y terminología de repliegue organizado.',
    spanishTranslation: 'El grupo de combate mecanizado reforzado se desenganchará de las posiciones defensivas primarias y se consolidará en la zona de reunión Víctor antes del anochecer.'
  },

  // =========================================================================
  // LEVEL 6 (B2)
  // =========================================================================
  {
    id: 'dict-l6-1',
    levelNumber: 6,
    title: 'Directiva Estratégica de Interoperabilidad Combinada',
    context: 'Documento doctrinario del Estado Mayor General de las Fuerzas Armadas',
    audioText: 'Interoperability among multinational task forces necessitates stringent adherence to standardized communication protocols and mutual logistical support frameworks.',
    difficulty: 'Master',
    keywords: ['Interoperability', 'multinational task forces', 'necessitates', 'stringent adherence', 'standardized', 'protocols', 'frameworks'],
    hint: 'Texto doctrinal de alto registro con sustantivos abstractos y léxico formal de Estado Mayor Conjunto.',
    spanishTranslation: 'La interoperabilidad entre fuerzas de tarea multinacionales exige una rigurosa adhesión a protocolos de comunicación estandarizados y marcos de apoyo logístico mutuo.'
  },
  {
    id: 'dict-l6-2',
    levelNumber: 6,
    title: 'Declaración Ministerial sobre Acuerdos de Desarme y Paz',
    context: 'Comunicado de prensa del Agregado de Defensa en la Embajada',
    audioText: 'Both signatory delegations reiterated their unwavering commitment to verifying compliance with demilitarized buffer zones and exchanging aerial reconnaissance data.',
    difficulty: 'Master',
    keywords: ['signatory delegations', 'unwavering commitment', 'verifying compliance', 'demilitarized buffer zones', 'aerial reconnaissance'],
    hint: 'Léxico diplomático-militar con colocaciones formales (unwavering commitment, buffer zones, verifying compliance).',
    spanishTranslation: 'Ambas delegaciones signatarias reiteraron su inquebrantable compromiso de verificar el cumplimiento de las zonas de amortiguamiento desmilitarizadas e intercambiar datos de reconocimiento aéreo.'
  }
];
