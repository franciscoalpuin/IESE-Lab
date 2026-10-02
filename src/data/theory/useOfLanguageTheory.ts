import { AxisTheoryModule } from '../../types';
import { useOfLanguageLevel1 } from './useOfLanguageLevel1';
import { useOfLanguageLevel2 } from './useOfLanguageLevel2';
import { useOfLanguageLevel3 } from './useOfLanguageLevel3';

export const useOfLanguageTheoryLevels: Record<number, AxisTheoryModule> = {
  1: useOfLanguageLevel1,
  2: useOfLanguageLevel2,
  3: useOfLanguageLevel3,
  4: {
    axis: 'useOfLanguage',
    levelNumber: 4,
    overview: 'Dominio del Pasado Perfecto, Oraciones Subordinadas Relativas, Voz Pasiva Impersonal de Estado Mayor, Modales en Pasado y Formación de Palabras.',
    vocabulary: [
      {
        theme: 'Prefijos y Sufijos de Formación de Palabras Militares',
        description: 'Familias de palabras para expandir la precisión técnica en exámenes STANAG.',
        words: [
          { term: 'Deploy -> Deployment', ipa: '/dɪˈplɔɪmənt/', partOfSpeech: 'sustantivo derivado', translation: 'Despliegue de tropas', example: 'Rapid deployment brigades were mobilized within six hours.', tacticalTip: 'Sufijo -ment que transforma verbos de acción en sustantivos.' },
          { term: 'Fortify -> Fortification', ipa: '/ˌfɔːtɪfɪˈkeɪʃn/', partOfSpeech: 'sustantivo derivado', translation: 'Fortificación / obra defensiva', example: 'Field fortifications shielded personnel from artillery shrapnel.', tacticalTip: 'Sufijo -ation que denota obras construidas.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'La Pasiva Impersonal de Estado Mayor para Partes Objetivos (Impersonal Passive)',
        structureFormula: 'It is / was + Participio de Percepción (reported / confirmed / believed) + That + Cláusula Completa',
        orderElements: [
          { position: 1, element: 'Sujeto Formal It', function: 'Despersonaliza el enunciado', example: 'It' },
          { position: 2, element: 'to be + Participio', function: 'Indica la fuente de inteligencia', example: 'is confirmed / was reported' },
          { position: 3, element: 'Nexo that', function: 'Introduce los hechos', example: 'that' },
          { position: 4, element: 'Hecho Fáctico', function: 'Situación constatada', example: 'the bridge remains impassable for tracked vehicles.' }
        ],
        explanation: 'Estructura doctrinal indispensable en informes oficiales donde la fuente institucional prima sobre opiniones individuales.',
        examples: [
          { english: 'It was confirmed that hostile reconnaissance units had withdrawn.', spanish: 'Se confirmó que las unidades de reconocimiento hostiles se habían replegado.' }
        ],
        commonMistakes: [
          { incorrect: 'Is reported that...', correct: 'It is reported that...', reason: 'El sujeto formal "It" es obligatorio en inglés.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'La Oclusiva Glotal /ʔ/ y el Vínculo Consonántico en Discursos Rápidos',
        soundIpa: '/ʔ/ Glottal stop',
        description: 'Sonido producido al cortar el aire momentáneamente con la glotis.',
        articulatoryGuide: 'En dialectos británicos y habla castrense coloquial, la /t/ intervocálica o final suele articularse como oclusión glotal.',
        rules: [
          'En el estándar oficial militar británico (RP) se recomienda mantener la /t/ nítida y audible ante tribunales.'
        ],
        practiceWords: [
          { word: 'battalion', ipa: '/bəˈtæliən/', stressPattern: 'bat-TAL-ion', translation: 'batallón' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Formulación de Hipótesis y Conclusiones de Estado Mayor',
        situation: 'Redacción o debate de una apreciación de situación (Estimate of the Situation).',
        phrases: [
          { english: 'Taking all operational variables into consideration, Course of Action A presents minimal exposure to hostile fire.', spanish: 'Tomando en consideración todas las variables operacionales, el Curso de Acción A presenta una exposición mínima al fuego hostil.', usageNote: 'Fórmula de recomendación doctrinal.', register: 'Formal / Táctico' }
        ]
      }
    ]
  },
  5: {
    axis: 'useOfLanguage',
    levelNumber: 5,
    overview: 'Dominio de la Inversión Estilística, Condicionales Mixtos, Subordinación Concesiva Avanzada, y Vocabulario Diplomático-Militar de Alta Fidelidad.',
    vocabulary: [
      {
        theme: 'Léxico de Alianzas, Tratados y Cooperación Internacional',
        description: 'Términos para exámenes de alta competencia y misiones de paz de la ONU.',
        words: [
          { term: 'Memorandum of Understanding (MOU)', ipa: '/ˌmeməˈrændəm əv ˌʌndəˈstændɪŋ/', partOfSpeech: 'sustantivo', translation: 'Memorándum de entendimiento', example: 'Both defense ministries concluded an MOU regarding intelligence sharing.', tacticalTip: 'Instrumento bilateral que define acuerdos marco de cooperación.' },
          { term: 'Peacekeeping mandate', ipa: '/ˈpiːskiːpɪŋ ˈmændeɪt/', partOfSpeech: 'sustantivo', translation: 'Mandato de mantenimiento de la paz (Capítulo VI/VII)', example: 'The battalion operates under a strict Chapter VII peacekeeping mandate.', tacticalTip: 'Habilitación del Consejo de Seguridad de la ONU.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'Condicionales Mixtos en Evaluaciones Estratégicas Retrospectivas (Mixed Conditionals)',
        structureFormula: 'If + Past Perfect (Condición pasada no ocurrida), Sujeto + Would + Verbo Base (Resultado actual)',
        orderElements: [
          { position: 1, element: 'Condición en Pasado', function: 'Hecho pasado hipotético', example: 'If the treaty had been ratified last year' },
          { position: 2, element: 'Sujeto', function: 'Fuerza involucrada', example: 'our logistics division' },
          { position: 3, element: 'Would + Verbo Base', function: 'Situación actual presente consecuente', example: 'would possess full equipment interoperability today.' }
        ],
        explanation: 'Combina una hipótesis en el pasado con su impacto en el tiempo presente real.',
        examples: [
          { english: 'If we had modernized the radar grid in 2024, our airspace would be fully protected today.', spanish: 'Si hubiéramos modernizado la red de radares en 2024, nuestro espacio aéreo estaría completamente protegido hoy.' }
        ],
        commonMistakes: [
          { incorrect: 'If we would have modernized..., our airspace was...', correct: 'If we had modernized..., our airspace would be...', reason: 'Respeta la regla: Had + PP en la condición, Would + base en el resultado presente.' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'El Ritmo y la Fonética de Discurso en Exposiciones Doctrinales',
        soundIpa: '/ˈrɪðm əv diːˈkɔːs/',
        description: 'Dominio de la cadencia, pausas oratorias y colocación precisa del acento enfático.',
        articulatoryGuide: 'Articular con apoyo diafragmático firme, evitando muletillas sonoras ("uh", "um") reemplazándolas por pausas silenciosas.',
        rules: [
          'Pausas estratégicas antes de palabras clave transmiten autoridad y dominio conceptual.',
          'La articulación de consonantes finales debe ser absoluta.'
        ],
        practiceWords: [
          { word: 'sovereignty', ipa: '/ˈsɒvrənti/', stressPattern: 'SOV-ereign-ty', translation: 'soberanía' },
          { word: 'bilateral', ipa: '/ˌbaɪˈlætrəl/', stressPattern: 'bi-LAT-er-al', translation: 'bilateral' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Negociación y Búsqueda de Consenso en Comités Militares',
        situation: 'Debate en un Estado Mayor combinado sobre asignación de recursos.',
        phrases: [
          { english: 'We propose an incremental compromise whereby phase one begins under existing budget allocations.', spanish: 'Proponemos un compromiso gradual por el cual la fase uno comience bajo las asignaciones presupuestarias existentes.', usageNote: 'Fórmula de concertación diplomática de alto impacto.', register: 'Diplomático' }
        ]
      }
    ]
  },
  6: {
    axis: 'useOfLanguage',
    levelNumber: 6,
    overview: 'Dominio absoluto de la estilística formal, inversión avanzada, subjuntivo de Estado Mayor, estructuras de énfasis (Cleft sentences) y prosa doctrinal sofisticada.',
    vocabulary: [
      {
        theme: 'Conceptos Filosóficos y Prospectiva de Defensa Nacional',
        description: 'Terminología para papers doctrinales del Colegio Militar y Escuela Superior de Guerra.',
        words: [
          { term: 'Force multiplier', ipa: '/fɔːs ˈmʌltɪplaɪə/', partOfSpeech: 'sustantivo', translation: 'Multiplicador de fuerzas', example: 'Superior electronic warfare capability served as a decisive force multiplier.', tacticalTip: 'Capacidad que incrementa exponencialmente la eficacia combativa.' },
          { term: 'Center of gravity (COG)', ipa: '/ˈsentə əv ˈɡrævəti/', partOfSpeech: 'sustantivo', translation: 'Centro de gravedad clauswitziano', example: 'Neutralising the command network strikes at the adversary\'s center of gravity.', tacticalTip: 'Concepto clave de Carl von Clausewitz: el núcleo del poder combativo enemigo.' }
        ]
      }
    ],
    grammar: [
      {
        title: 'Oraciones Escindidas para Énfasis Táctico (Cleft Sentences: It is... that / What...)',
        structureFormula: 'It is / was + Elemento Enfatizado + That / Who + Resto de la Oración (O BIEN: What + Sujeto + Verbo + is/was + Elemento Enfatizado)',
        orderElements: [
          { position: 1, element: 'Fórmula Escindida', function: 'Introduce el foco de atención', example: 'It was / What' },
          { position: 2, element: 'Elemento Focalizado', function: 'Variable decisiva destacada', example: 'the rapid deployment of engineers / the commander emphasized' },
          { position: 3, element: 'Nexo Relativo', function: 'Enlace', example: 'that / was' },
          { position: 4, element: 'Conclusión', function: 'Efecto conseguido', example: 'saved the brigade from encirclement / absolute logistical discipline.' }
        ],
        explanation: 'Permiten enfocar con absoluta precisión el factor determinante de una operación militar.',
        examples: [
          { english: 'It was the breakdown in communication that caused the tactical setback.', spanish: 'Fue la ruptura en las comunicaciones lo que causó el revés táctico (énfasis en la causa).' }
        ],
        commonMistakes: [
          { incorrect: 'Was the breakdown that caused...', correct: 'It was the breakdown that caused...', reason: 'La estructura de It-cleft exige imperativamente el pronombre "It".' }
        ]
      }
    ],
    phonetics: [
      {
        title: 'Precisión Fonética y Registro Culto en Conferencias Magistrales',
        soundIpa: '/ˈelvɪkeɪʃn/',
        description: 'Dicción británica culta (Received Pronunciation) adecuada a simposios de defensa internacional.',
        articulatoryGuide: 'Vocales puras sin nasalizaciones indebidas. Proyección vocal nítida y dicción consonántica terminal completa.',
        rules: [
          'Evitar vocales parásitas iniciales al pronunciar palabras con "s" líquida: "strategy" es /ˈstrætədʒi/, nunca /esˈtrætədʒi/.'
        ],
        practiceWords: [
          { word: 'strategy', ipa: '/ˈstrætədʒi/', stressPattern: 'STRAT-e-gy', translation: 'estrategia' },
          { word: 'multilateral', ipa: '/ˌmʌltiˈlætrəl/', stressPattern: 'mul-ti-LAT-er-al', translation: 'multilateral' }
        ]
      }
    ],
    usefulPhrases: [
      {
        communicativeFunction: 'Definición de Doctrina Estratégica en Publicaciones Oficiales',
        situation: 'Prólogo de manual doctrinal o directiva presidencial de política de defensa.',
        phrases: [
          { english: 'National sovereignty rests inextricably upon our capacity to deter aggression across land, sea, air, and cyber domains.', spanish: 'La soberanía nacional descansa de manera indisoluble sobre nuestra capacidad de disuadir la agresión en los dominios terrestre, marítimo, aéreo y cibernético.', usageNote: 'Máximo registro de prosa institucional militar.', register: 'Formal / Táctico' }
        ]
      }
    ]
  }
};
