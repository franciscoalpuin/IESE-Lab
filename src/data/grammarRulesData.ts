// =========================================================================
// DATA: ENGLISH GRAMMAR RULES (GUÍA COMPLETA DE REGLAS GRAMATICALES)
// Del documento oficial "English Grammar Rules" (Parts of Speech, Sentence Structure,
// Punctuation, Common Errors) con Traducción al Español, Pronunciación Estilo Español
// y Ejemplos de Audio.
// =========================================================================

export interface GrammarExample {
  english: string;
  spanish: string;
  spanishPhonetic: string; // Pronunciación aproximada en español
  contextNote?: string;
}

export interface GrammarSubtopic {
  id: string;
  number: string;
  titleEnglish: string;
  titleSpanish: string;
  ruleExplanationEnglish: string;
  ruleExplanationSpanish: string;
  badge?: string;
  examples: GrammarExample[];
}

export interface GrammarSection {
  id: string;
  sectionNumber: string;
  titleEnglish: string;
  titleSpanish: string;
  descriptionSpanish: string;
  subtopics: GrammarSubtopic[];
}

// =========================================================================
// TABLA INTEGRAL DE LOS 12 TIEMPOS VERBALES EN INGLÉS
// Con Fórmulas (Afirmativa, Negativa, Pregunta), Pronunciación Fonética en Español,
// Traducción, Palabras Clave y Botones de Audio.
// =========================================================================

export interface VerbTenseExample {
  type: 'affirmative' | 'negative' | 'question';
  typeLabel: string;
  english: string;
  spanish: string;
  spanishPhonetic: string;
}

export interface VerbTenseItem {
  id: string;
  number: number;
  nameEnglish: string;
  nameSpanish: string;
  period: 'present' | 'past' | 'future';
  periodLabel: string;
  aspect: 'simple' | 'continuous' | 'perfect' | 'perfect-continuous';
  aspectLabel: string;
  formula: string;
  useExplanation: string;
  signalWords: string[];
  examples: VerbTenseExample[];
}

export const VERB_TENSES_TABLE_DATA: VerbTenseItem[] = [
  // 1. PRESENT SIMPLE
  {
    id: 'present-simple',
    number: 1,
    nameEnglish: 'Present Simple',
    nameSpanish: 'Presente Simple',
    period: 'present',
    periodLabel: 'Presente',
    aspect: 'simple',
    aspectLabel: 'Simple',
    formula: 'Sujeto + Verbo base (+ -s/-es en he/she/it) | Neg: do/does not + V | Preg: Do/Does + S + V?',
    useExplanation: 'Expresa hábitos, rutinas diarias, verdades generales, hechos científicos o permanentes.',
    signalWords: ['always', 'usually', 'often', 'every day', 'sometimes', 'never', 'on Mondays'],
    examples: [
      {
        type: 'affirmative',
        typeLabel: 'Afirmativa',
        english: 'The soldiers train every morning.',
        spanish: 'Los soldados entrenan todas las mañanas.',
        spanishPhonetic: 'de sóul-dshers tréin év-ri mór-ning'
      },
      {
        type: 'negative',
        typeLabel: 'Negativa',
        english: 'He does not leave his post.',
        spanish: 'Él no abandona su puesto de guardia.',
        spanishPhonetic: 'ji daz not liiv jis poust'
      },
      {
        type: 'question',
        typeLabel: 'Pregunta',
        english: 'Do you understand the order?',
        spanish: '¿Entiendes la orden?',
        spanishPhonetic: 'du iu an-der-stánd de ór-der'
      }
    ]
  },

  // 2. PRESENT CONTINUOUS
  {
    id: 'present-continuous',
    number: 2,
    nameEnglish: 'Present Continuous',
    nameSpanish: 'Presente Continuo',
    period: 'present',
    periodLabel: 'Presente',
    aspect: 'continuous',
    aspectLabel: 'Continuo',
    formula: 'Sujeto + am/is/are + Verbo con -ing | Neg: am/is/are + not + V-ing | Preg: Am/Is/Are + S + V-ing?',
    useExplanation: 'Acciones que transcurren en este preciso instante, situaciones temporales o planes futuros ya coordinados.',
    signalWords: ['now', 'right now', 'at the moment', 'currently', 'look!', 'listen!'],
    examples: [
      {
        type: 'affirmative',
        typeLabel: 'Afirmativa',
        english: 'The captain is briefing the patrol right now.',
        spanish: 'El capitán está instruyendo a la patrulla en este momento.',
        spanishPhonetic: 'de cáp-tin iz bríi-fing de pa-tróul ráit náu'
      },
      {
        type: 'negative',
        typeLabel: 'Negativa',
        english: 'We are not wasting time on this mission.',
        spanish: 'No estamos perdiendo el tiempo en esta misión.',
        spanishPhonetic: 'ui ar not uéis-ting táim on dis mí-shon'
      },
      {
        type: 'question',
        typeLabel: 'Pregunta',
        english: 'Are they repairing the communications radio?',
        spanish: '¿Están ellos reparando la radio de comunicaciones?',
        spanishPhonetic: 'ar déi ri-pér-ing de co-miu-ni-kéi-shons réi-di-ou'
      }
    ]
  },

  // 3. PRESENT PERFECT
  {
    id: 'present-perfect',
    number: 3,
    nameEnglish: 'Present Perfect',
    nameSpanish: 'Presente Perfecto',
    period: 'present',
    periodLabel: 'Presente',
    aspect: 'perfect',
    aspectLabel: 'Perfecto',
    formula: 'Sujeto + have/has + Participio Pasado (V3) | Neg: have/has not + V3 | Preg: Have/Has + S + V3?',
    useExplanation: 'Acción realizada en el pasado sin fecha fija pero con resultado e impacto directo en el presente.',
    signalWords: ['already', 'yet', 'just', 'ever', 'never', 'since', 'for', 'recently'],
    examples: [
      {
        type: 'affirmative',
        typeLabel: 'Afirmativa',
        english: 'The squad has secured the perimeter.',
        spanish: 'La escuadra ha asegurado el perímetro.',
        spanishPhonetic: 'de scuád jaz si-kiúerd de pe-rí-mi-ter'
      },
      {
        type: 'negative',
        typeLabel: 'Negativa',
        english: 'I have not received the official report yet.',
        spanish: 'Aún no he recibido el informe oficial.',
        spanishPhonetic: 'ái jav not ri-síivd di o-fí-shal ri-pórt iet'
      },
      {
        type: 'question',
        typeLabel: 'Pregunta',
        english: 'Have you ever operated this tactical vehicle?',
        spanish: '¿Alguna vez has conducido este vehículo táctico?',
        spanishPhonetic: 'jav iu é-ver ó-pe-rei-ted dis tác-ti-cal ví-i-kl'
      }
    ]
  },

  // 4. PRESENT PERFECT CONTINUOUS
  {
    id: 'present-perfect-continuous',
    number: 4,
    nameEnglish: 'Present Perfect Continuous',
    nameSpanish: 'Presente Perfecto Continuo',
    period: 'present',
    periodLabel: 'Presente',
    aspect: 'perfect-continuous',
    aspectLabel: 'Perfecto Continuo',
    formula: 'Sujeto + have/has been + Verbo con -ing | Neg: have/has not been + V-ing | Preg: Have/Has + S + been + V-ing?',
    useExplanation: 'Acción que comenzó en el pasado y continúa sin interrupción en el presente (énfasis en la duración acumulada).',
    signalWords: ['for two hours', 'since 0600', 'all day', 'lately', 'how long...?'],
    examples: [
      {
        type: 'affirmative',
        typeLabel: 'Afirmativa',
        english: 'She has been studying the military map for two hours.',
        spanish: 'Ella ha estado estudiando el mapa militar durante dos horas.',
        spanishPhonetic: 'shi jaz biin stá-di-ing de mí-li-ta-ri map for tu áuers'
      },
      {
        type: 'negative',
        typeLabel: 'Negativa',
        english: 'They have not been sleeping well this week.',
        spanish: 'Ellos no han estado durmiendo bien esta semana.',
        spanishPhonetic: 'déi jav not biin slíi-ping uél dis uíik'
      },
      {
        type: 'question',
        typeLabel: 'Pregunta',
        english: 'How long have you been waiting at checkpoint alpha?',
        spanish: '¿Cuánto tiempo has estado esperando en el punto de control alfa?',
        spanishPhonetic: 'jáu long jav iu biin uéi-ting at chék-point ál-fa'
      }
    ]
  },

  // 5. PAST SIMPLE
  {
    id: 'past-simple',
    number: 5,
    nameEnglish: 'Past Simple',
    nameSpanish: 'Pasado Simple',
    period: 'past',
    periodLabel: 'Pasado',
    aspect: 'simple',
    aspectLabel: 'Simple',
    formula: 'Sujeto + Verbo en Pasado (-ed o irregular) | Neg: did not + V base | Preg: Did + S + V base?',
    useExplanation: 'Acción terminada en un momento concreto y cerrado del pasado.',
    signalWords: ['yesterday', 'last week', 'in 2022', 'two days ago', 'at that moment'],
    examples: [
      {
        type: 'affirmative',
        typeLabel: 'Afirmativa',
        english: 'The convoy arrived safely yesterday.',
        spanish: 'El convoy llegó a salvo ayer.',
        spanishPhonetic: 'de cón-voi a-ráivd séif-li iés-ter-dei'
      },
      {
        type: 'negative',
        typeLabel: 'Negativa',
        english: 'The sergeant did not see the danger signal.',
        spanish: 'El sargento no vio la señal de peligro.',
        spanishPhonetic: 'de sár-dtshent did not sii de déin-dtsher síg-nal'
      },
      {
        type: 'question',
        typeLabel: 'Pregunta',
        english: 'Did you complete the equipment inspection?',
        spanish: '¿Completaste la inspección de equipo?',
        spanishPhonetic: 'did iu com-plíit di i-cuíp-ment in-spéc-shon'
      }
    ]
  },

  // 6. PAST CONTINUOUS
  {
    id: 'past-continuous',
    number: 6,
    nameEnglish: 'Past Continuous',
    nameSpanish: 'Pasado Continuo',
    period: 'past',
    periodLabel: 'Pasado',
    aspect: 'continuous',
    aspectLabel: 'Continuo',
    formula: 'Sujeto + was/were + Verbo con -ing | Neg: was/were not + V-ing | Preg: Was/Were + S + V-ing?',
    useExplanation: 'Acción en progreso en un momento concreto del pasado, o que servía de fondo cuando otra acción la interrumpió.',
    signalWords: ['while', 'when', 'at 10 PM yesterday', 'all night', 'as'],
    examples: [
      {
        type: 'affirmative',
        typeLabel: 'Afirmativa',
        english: 'The guards were watching the perimeter when it started to rain.',
        spanish: 'Los guardias estaban vigilando el perímetro cuando comenzó a llover.',
        spanishPhonetic: 'de gards uer uó-ching de pe-rí-mi-ter uén it stár-ted tu réin'
      },
      {
        type: 'negative',
        typeLabel: 'Negativa',
        english: 'He was not wearing his protective helmet during the exercise.',
        spanish: 'Él no llevaba puesto su casco de protección durante el ejercicio.',
        spanishPhonetic: 'ji uoz not uér-ing jis pro-téc-tiv jél-met diú-ring di ék-ser-sais'
      },
      {
        type: 'question',
        typeLabel: 'Pregunta',
        english: 'Were you patrolling the northern sector at midnight?',
        spanish: '¿Estabas patrullando el sector norte a medianoche?',
        spanishPhonetic: 'uer iu pa-tróul-ing de nór-dern séc-tor at míd-nait'
      }
    ]
  },

  // 7. PAST PERFECT
  {
    id: 'past-perfect',
    number: 7,
    nameEnglish: 'Past Perfect',
    nameSpanish: 'Pasado Perfecto',
    period: 'past',
    periodLabel: 'Pasado',
    aspect: 'perfect',
    aspectLabel: 'Perfecto',
    formula: 'Sujeto + had + Participio Pasado (V3) | Neg: had not + V3 | Preg: Had + S + V3?',
    useExplanation: 'Acción que ocurrió con anterioridad a otro suceso en el pasado ("el pasado del pasado").',
    signalWords: ['before', 'after', 'already', 'by the time', 'until then'],
    examples: [
      {
        type: 'affirmative',
        typeLabel: 'Afirmativa',
        english: 'The commander had left before the heavy storm started.',
        spanish: 'El comandante se había marchado antes de que comenzara la fuerte tormenta.',
        spanishPhonetic: 'de com-mán-der jad left bi-fór de jé-vi storm stár-ted'
      },
      {
        type: 'negative',
        typeLabel: 'Negativa',
        english: 'They had not received reinforcements before the encounter.',
        spanish: 'Ellos no habían recibido refuerzos antes del encuentro.',
        spanishPhonetic: 'déi jad not ri-síivd rii-in-fórs-ments bi-fór di en-cáun-ter'
      },
      {
        type: 'question',
        typeLabel: 'Pregunta',
        english: 'Had you checked the fuel reserves before departure?',
        spanish: '¿Habías verificado las reservas de combustible antes de la partida?',
        spanishPhonetic: 'jad iu chect de fiú-el ri-sérvs bi-fór di-pár-chur'
      }
    ]
  },

  // 8. PAST PERFECT CONTINUOUS
  {
    id: 'past-perfect-continuous',
    number: 8,
    nameEnglish: 'Past Perfect Continuous',
    nameSpanish: 'Pasado Perfecto Continuo',
    period: 'past',
    periodLabel: 'Pasado',
    aspect: 'perfect-continuous',
    aspectLabel: 'Perfecto Continuo',
    formula: 'Sujeto + had been + Verbo con -ing | Neg: had not been + V-ing | Preg: Had + S + been + V-ing?',
    useExplanation: 'Acción prolongada en el pasado que se estuvo desarrollando continuamente hasta que ocurrió otro hecho pasado.',
    signalWords: ['for hours before', 'since dawn until then', 'had been doing when'],
    examples: [
      {
        type: 'affirmative',
        typeLabel: 'Afirmativa',
        english: 'The pilot had been flying for six hours before landing.',
        spanish: 'El piloto había estado volando durante seis horas antes de aterrizar.',
        spanishPhonetic: 'de pái-lot jad biin flái-ing for siks áuers bi-fór lán-ding'
      },
      {
        type: 'negative',
        typeLabel: 'Negativa',
        english: 'The troop had not been resting when the siren sounded.',
        spanish: 'La tropa no había estado descansando cuando sonó la sirena.',
        spanishPhonetic: 'de truup jad not biin rés-ting uén de sái-ren sáun-ded'
      },
      {
        type: 'question',
        typeLabel: 'Pregunta',
        english: 'How long had they been marching before the first rest stop?',
        spanish: '¿Cuánto tiempo habían estado marchando antes de la primera parada de descanso?',
        spanishPhonetic: 'jáu long jad déi biin már-ching bi-fór de férst rest stop'
      }
    ]
  },

  // 9. FUTURE SIMPLE
  {
    id: 'future-simple',
    number: 9,
    nameEnglish: 'Future Simple (Will / Going to)',
    nameSpanish: 'Futuro Simple',
    period: 'future',
    periodLabel: 'Futuro',
    aspect: 'simple',
    aspectLabel: 'Simple',
    formula: 'Sujeto + will + V base  (o Sujeto + am/is/are going to + V base) | Neg: will not (won\'t) + V | Preg: Will + S + V?',
    useExplanation: 'Decisiones espontáneas, promesas, predicciones (will); intenciones planeadas o evidencia inminente (going to).',
    signalWords: ['tomorrow', 'next week', 'soon', 'in the future', 'probably'],
    examples: [
      {
        type: 'affirmative',
        typeLabel: 'Afirmativa',
        english: 'We will defend our position with honor.',
        spanish: 'Defenderemos nuestra posición con honor.',
        spanishPhonetic: 'ui uíl di-fénd áuer po-sí-shon uiz ó-nor'
      },
      {
        type: 'negative',
        typeLabel: 'Negativa',
        english: 'The unit will not abandon the wounded soldier.',
        spanish: 'La unidad no abandonará al soldado herido.',
        spanishPhonetic: 'de iú-nit uíl not a-bán-don de uúun-ded sóul-dsher'
      },
      {
        type: 'question',
        typeLabel: 'Pregunta',
        english: 'Will you attend the strategy briefing tomorrow morning?',
        spanish: '¿Asistirás a la reunión informativa de estrategia mañana por la mañana?',
        spanishPhonetic: 'uíl iu a-ténd de strá-te-dshi bríi-fing tu-mó-rou mór-ning'
      }
    ]
  },

  // 10. FUTURE CONTINUOUS
  {
    id: 'future-continuous',
    number: 10,
    nameEnglish: 'Future Continuous',
    nameSpanish: 'Futuro Continuo',
    period: 'future',
    periodLabel: 'Futuro',
    aspect: 'continuous',
    aspectLabel: 'Continuo',
    formula: 'Sujeto + will be + Verbo con -ing | Neg: will not be + V-ing | Preg: Will + S + be + V-ing?',
    useExplanation: 'Acción que estará en pleno desarrollo en un momento específico en el futuro.',
    signalWords: ['at this time tomorrow', 'this time next week', 'at 0800 tomorrow'],
    examples: [
      {
        type: 'affirmative',
        typeLabel: 'Afirmativa',
        english: 'At 0800 hours tomorrow, we will be flying over the sector.',
        spanish: 'A las 08:00 horas de mañana, estaremos volando sobre el sector.',
        spanishPhonetic: 'at ou-éit-ján-dred áuers tu-mó-rou, ui uíl bi flái-ing óu-ver de séc-tor'
      },
      {
        type: 'negative',
        typeLabel: 'Negativa',
        english: 'The team will not be operating in the dark tonight.',
        spanish: 'El equipo no estará operando en la oscuridad esta noche.',
        spanishPhonetic: 'de tiim uíl not bi ó-pe-rei-ting in de dark tu-náit'
      },
      {
        type: 'question',
        typeLabel: 'Pregunta',
        english: 'Will the officers be inspecting the barracks at noon?',
        spanish: '¿Estarán los oficiales inspeccionando los cuarteles al mediodía?',
        spanishPhonetic: 'uíl di ó-fi-sers bi in-spéc-ting de bá-racks at nuun'
      }
    ]
  },

  // 11. FUTURE PERFECT
  {
    id: 'future-perfect',
    number: 11,
    nameEnglish: 'Future Perfect',
    nameSpanish: 'Futuro Perfecto',
    period: 'future',
    periodLabel: 'Futuro',
    aspect: 'perfect',
    aspectLabel: 'Perfecto',
    formula: 'Sujeto + will have + Participio Pasado (V3) | Neg: will not have + V3 | Preg: Will + S + have + V3?',
    useExplanation: 'Acción que habrá concluido con éxito antes de un plazo o fecha límite en el futuro.',
    signalWords: ['by next Friday', 'by the end of the year', 'by tomorrow noon', 'in ten days'],
    examples: [
      {
        type: 'affirmative',
        typeLabel: 'Afirmativa',
        english: 'By next Friday, the recruits will have completed their field exam.',
        spanish: 'Para el próximo viernes, los reclutas habrán completado su examen de campo.',
        spanishPhonetic: 'bái nekst frái-dei, de ri-crúts uíl jav com-plíi-ted déir fiild eg-zám'
      },
      {
        type: 'negative',
        typeLabel: 'Negativa',
        english: 'The convoy will not have reached the base by midday.',
        spanish: 'El convoy no habrá llegado a la base para el mediodía.',
        spanishPhonetic: 'de cón-voi uíl not jav riicht de béis bái míd-dei'
      },
      {
        type: 'question',
        typeLabel: 'Pregunta',
        english: 'Will you have finished the technical repair by tomorrow?',
        spanish: '¿Habrás terminado la reparación técnica para mañana?',
        spanishPhonetic: 'uíl iu jav fí-nisht de téc-ni-cal ri-pér bái tu-mó-rou'
      }
    ]
  },

  // 12. FUTURE PERFECT CONTINUOUS
  {
    id: 'future-perfect-continuous',
    number: 12,
    nameEnglish: 'Future Perfect Continuous',
    nameSpanish: 'Futuro Perfecto Continuo',
    period: 'future',
    periodLabel: 'Futuro',
    aspect: 'perfect-continuous',
    aspectLabel: 'Perfecto Continuo',
    formula: 'Sujeto + will have been + Verbo con -ing | Neg: will not have been + V-ing | Preg: Will + S + have been + V-ing?',
    useExplanation: 'Expresa la duración ininterrumpida que una acción habrá alcanzado al llegar a un momento futuro fijado.',
    signalWords: ['by next month for... years', 'by 2028 for a decade', 'by the time...'],
    examples: [
      {
        type: 'affirmative',
        typeLabel: 'Afirmativa',
        english: 'By December, he will have been serving in the army for ten years.',
        spanish: 'Para diciembre, él habrá estado sirviendo en el ejército durante diez años.',
        spanishPhonetic: 'bái di-sém-ber, ji uíl jav biin sér-ving in di ár-mi for ten íars'
      },
      {
        type: 'negative',
        typeLabel: 'Negativa',
        english: 'They will not have been training long enough to attempt the jump.',
        spanish: 'No habrán estado entrenando el tiempo suficiente para intentar el salto.',
        spanishPhonetic: 'déi uíl not jav biin tréi-ning long i-náf tu a-témpt de dshamp'
      },
      {
        type: 'question',
        typeLabel: 'Pregunta',
        english: 'Will she have been working with the UN mission for three years by next July?',
        spanish: '¿Habrá estado ella trabajando con la misión de la ONU durante tres años para el próximo julio?',
        spanishPhonetic: 'uíl shi jav biin uór-king uiz de iu-én mí-shon for zri íars bái nekst dshu-lái'
      }
    ]
  }
];

export const GRAMMAR_RULES_DATA: GrammarSection[] = [
  // =========================================================================
  // SECCIÓN 1: PARTS OF SPEECH (PARTES DE LA ORACIÓN)
  // =========================================================================
  {
    id: 'parts-of-speech',
    sectionNumber: '1',
    titleEnglish: 'Parts of Speech',
    titleSpanish: 'Partes de la Oración',
    descriptionSpanish: 'Explican cómo se utiliza cada palabra dentro de una oración en inglés. Son las 8 partes fundamentales del idioma.',
    subtopics: [
      {
        id: '1.1-nouns',
        number: '1.1',
        titleEnglish: 'Nouns',
        titleSpanish: 'Sustantivos',
        ruleExplanationEnglish: 'Nouns name a person, place, thing, or idea. They are classified into common, proper, concrete, abstract, countable, and uncountable nouns.',
        ruleExplanationSpanish: 'Los sustantivos nombran personas, lugares, cosas o ideas. Se clasifican en comunes, propios, concretos, abstractos, contables e incontables.',
        badge: 'Sustantivos',
        examples: [
          {
            english: 'teacher',
            spanish: 'profesor / maestro (Sustantivo común)',
            spanishPhonetic: 'tí-cher',
            contextNote: 'Common Noun: nombre general de personas, lugares o cosas'
          },
          {
            english: 'city',
            spanish: 'ciudad (Sustantivo común)',
            spanishPhonetic: 'sí-ti',
            contextNote: 'Common Noun'
          },
          {
            english: 'car',
            spanish: 'auto / coche (Sustantivo común)',
            spanishPhonetic: 'car',
            contextNote: 'Common Noun'
          },
          {
            english: 'Mr. Smith',
            spanish: 'Señor Smith (Sustantivo propio)',
            spanishPhonetic: 'mís-ter smiz',
            contextNote: 'Proper Noun: nombre específico con mayúscula'
          },
          {
            english: 'New York',
            spanish: 'Nueva York (Sustantivo propio)',
            spanishPhonetic: 'niu iork',
            contextNote: 'Proper Noun: nombre propio geográfico'
          },
          {
            english: 'Toyota',
            spanish: 'Toyota (Sustantivo propio)',
            spanishPhonetic: 'to-ió-ta',
            contextNote: 'Proper Noun: marca comercial'
          },
          {
            english: 'apple, dog, building',
            spanish: 'manzana, perro, edificio (Sustantivos concretos)',
            spanishPhonetic: 'á-pl, dog, bíl-ding',
            contextNote: 'Concrete Nouns: objetos físicos que se pueden ver, tocar o medir'
          },
          {
            english: 'love, freedom, knowledge',
            spanish: 'amor, libertad, conocimiento (Sustantivos abstractos)',
            spanishPhonetic: 'lav, frí-dom, nó-lids',
            contextNote: 'Abstract Nouns: conceptos o sentimientos intangibles'
          },
          {
            english: 'book, cat, idea',
            spanish: 'libro, gato, idea (Sustantivos contables)',
            spanishPhonetic: 'buk, cat, ai-día',
            contextNote: 'Countable Nouns: se pueden contar y pluralizar (books, cats, ideas)'
          },
          {
            english: 'water, air, information',
            spanish: 'agua, aire, información (Sustantivos incontables)',
            spanishPhonetic: 'uó-ter, er, in-for-méi-shon',
            contextNote: 'Uncountable Nouns: no se cuentan individualmente; no llevan "s" final'
          }
        ]
      },
      {
        id: '1.2-pronouns',
        number: '1.2',
        titleEnglish: 'Pronouns',
        titleSpanish: 'Pronombres',
        ruleExplanationEnglish: 'Pronouns replace nouns to avoid unnecessary repetition (personal, possessive, reflexive, demonstrative, interrogative, relative, indefinite).',
        ruleExplanationSpanish: 'Los pronombres reemplazan al sustantivo para no repetirlo constantemente (personales, posesivos, reflexivos, demostrativos, etc.).',
        badge: 'Pronombres',
        examples: [
          {
            english: 'I, you, he, she, it, we, they',
            spanish: 'Yo, tú/usted, él, ella, ello/eso, nosotros, ellos (Pronombres personales sujeto)',
            spanishPhonetic: 'ái, iu, ji, shi, it, ui, déi',
            contextNote: 'Subject Pronouns: realizan la acción del verbo como sujeto principal'
          },
          {
            english: 'me, you, him, her, it, us, them',
            spanish: 'me/a mí, te/a ti, le/a él, la/a ella, lo/a ello, nos/a nosotros, los/les/a ellos (Pronombres objeto)',
            spanishPhonetic: 'mi, iu, jim, jer, it, as, dem',
            contextNote: 'Object Pronouns: reciben la acción directa del verbo o siguen a preposiciones'
          },
          {
            english: 'I work, he works, we work (Present Simple)',
            spanish: 'Yo trabajo, él trabaja, nosotros trabajamos (Uso en Presente Simple: ¡He/She/It agrega -s!)',
            spanishPhonetic: 'ái uerk, ji uerks, ui uerk',
            contextNote: 'Concordancia en Presente Simple: la 3ª persona singular toma -s o -es'
          },
          {
            english: 'I was on duty, they were on duty (Past Simple)',
            spanish: 'Yo estuve de guardia, ellos estuvieron de guardia (Uso en Pasado To Be: Was vs Were)',
            spanishPhonetic: 'ái uós on diú-ti, déi uér on diú-ti',
            contextNote: 'Concordancia en Pasado To Be: I/He/She/It usa WAS, You/We/They usa WERE'
          },
          {
            english: 'He has arrived, we have arrived (Present Perfect)',
            spanish: 'Él ha llegado, nosotros hemos llegado (Uso en Presente Perfecto: Has vs Have)',
            spanishPhonetic: 'ji jas a-ráivd, ui jav a-ráivd',
            contextNote: 'Concordancia en Presente Perfecto: He/She/It usa HAS, los demás pronombres usan HAVE'
          },
          {
            english: 'I will report, she will report (Future Simple)',
            spanish: 'Yo informaré, ella informará (Uso en Futuro Simple: WILL es invariable para todos)',
            spanishPhonetic: 'ái uil ri-pórt, shi uil ri-pórt',
            contextNote: 'Concordancia en Futuro Will: forma auxiliar idéntica para todos los pronombres'
          },
          {
            english: 'mine, yours, his, hers, ours, theirs',
            spanish: 'mío, tuyo/suyo, de él, de ella, nuestro, de ellos (Pronombres posesivos)',
            spanishPhonetic: 'máin, iors, jis, jers, áuers, déirs',
            contextNote: 'Possessive Pronouns: demuestran posesión sin repetir el objeto'
          },
          {
            english: 'myself, yourself, himself, herself, itself, ourselves, yourselves, themselves',
            spanish: 'a mí mismo, a ti mismo, a sí mismo, a nosotros mismos, a ellos mismos (Reflexivos)',
            spanishPhonetic: 'mai-sélf, ior-sélf, jim-sélf, jer-sélf, it-sélf, auer-sélvs, ior-sélvs, dem-sélvs',
            contextNote: 'Reflexive Pronouns: la acción recae sobre el mismo sujeto'
          },
          {
            english: 'this, that, these, those',
            spanish: 'este/esto, ese/aquel, estos, esos/aquellos (Pronombres demostrativos)',
            spanishPhonetic: 'dis, dat, diis, dous',
            contextNote: 'Demonstrative Pronouns: señalan elementos cercanos o lejanos'
          },
          {
            english: 'who, whom, whose, which, what',
            spanish: 'quién, a quién, de quién, cuál, qué (Pronombres interrogativos)',
            spanishPhonetic: 'ju, jum, jus, uích, uát',
            contextNote: 'Interrogative Pronouns: usados para formular preguntas'
          },
          {
            english: 'who, whom, whose, which, that',
            spanish: 'quien, a quien, cuyo, el cual, que (Pronombres relativos)',
            spanishPhonetic: 'ju, jum, jus, uích, dat',
            contextNote: 'Relative Pronouns: introducen oraciones relativas o explicativas'
          },
          {
            english: 'someone, anything, everyone, nothing',
            spanish: 'alguien, cualquier cosa/algo, todos, nada (Pronombres indefinidos)',
            spanishPhonetic: 'sám-uan, é-ni-zing, év-ri-uan, ná-zing',
            contextNote: 'Indefinite Pronouns: aluden a personas o cosas no especificadas'
          }
        ]
      },
      {
        id: '1.3-verbs',
        number: '1.3',
        titleEnglish: 'Verbs',
        titleSpanish: 'Verbos',
        ruleExplanationEnglish: 'Verbs express physical/mental action or a state of being. Essential core of every sentence, categorized into action, linking, and helping verbs.',
        ruleExplanationSpanish: 'Los verbos muestran acción física/mental o un estado de ser. Son el núcleo esencial de la oración (acción, copulativos y auxiliares).',
        badge: 'Verbos',
        examples: [
          {
            english: 'run, jump, think, imagine',
            spanish: 'correr, saltar, pensar, imaginar (Verbos de acción)',
            spanishPhonetic: 'ran, dshamp, zink, i-má-dshin',
            contextNote: 'Action Verbs: indican acciones físicas o procesos mentales'
          },
          {
            english: 'am, is, are, was, were, seem, become',
            spanish: 'soy/estoy, es/está, son/están, era/estaba, eran/estaban, parecer, convertirse en',
            spanishPhonetic: 'am, iz, ar, uoz, uer, siim, bi-cám',
            contextNote: 'Linking Verbs: conectan el sujeto con una cualidad o estado (copulativos)'
          },
          {
            english: 'have, has, had, do, does, did, will, shall, would, should, can, could, may, might, must',
            spanish: 'haber/hacer y auxiliares modales para tiempos verbales',
            spanishPhonetic: 'jav, jaz, jad, du, daz, did, uíl, shal, uud, shud, can, cud, méi, máit, mast',
            contextNote: 'Helping / Auxiliary Verbs: auxilian al verbo principal extendiendo su significado'
          }
        ]
      },
      {
        id: '1.4-adjectives',
        number: '1.4',
        titleEnglish: 'Adjectives',
        titleSpanish: 'Adjetivos',
        ruleExplanationEnglish: 'Adjectives describe or qualify nouns or pronouns, providing qualities, sizes, quantities, and comparisons.',
        ruleExplanationSpanish: 'Los adjetivos describen y califican a un sustantivo o pronombre, brindando información sobre calidad, cantidad, demostración o grado.',
        badge: 'Adjetivos',
        examples: [
          {
            english: 'happy, blue, large',
            spanish: 'feliz, azul, grande (Adjetivos descriptivos)',
            spanishPhonetic: 'já-pi, blu, lardsh',
            contextNote: 'Descriptive Adjectives: cualidades físicas o emocionales'
          },
          {
            english: 'some, many, few',
            spanish: 'algunos, muchos, pocos (Adjetivos cuantitativos)',
            spanishPhonetic: 'sam, mé-ni, fiú',
            contextNote: 'Quantitative Adjectives: indican cantidad aproximada'
          },
          {
            english: 'this, that, these, those',
            spanish: 'este, ese/aquel, estos, esos/aquellos (Demostrativos)',
            spanishPhonetic: 'dis, dat, diis, dous',
            contextNote: 'Demonstrative Adjectives: señalan directamente al sustantivo'
          },
          {
            english: 'my, your, his, her, its, our, their',
            spanish: 'mi, tu, su (de él), su (de ella), su (cosa), nuestro, su (de ellos)',
            spanishPhonetic: 'mái, ior, jis, jer, its, áuer, déir',
            contextNote: 'Possessive Adjectives: determinan posesión antes del sustantivo'
          },
          {
            english: 'which, what, whose',
            spanish: 'cuál, qué, de quién (Adjetivos interrogativos)',
            spanishPhonetic: 'uích, uát, jus',
            contextNote: 'Interrogative Adjectives: modifican sustantivos en preguntas'
          },
          {
            english: 'taller, smarter, faster',
            spanish: 'más alto, más inteligente, más rápido (Comparativos)',
            spanishPhonetic: 'tó-ler, smár-ter, fás-ter',
            contextNote: 'Comparative Adjectives: comparan dos personas, cosas o estados'
          },
          {
            english: 'tallest, smartest, fastest',
            spanish: 'el más alto, el más inteligente, el más rápido (Superlativos)',
            spanishPhonetic: 'tó-lest, smár-test, fás-test',
            contextNote: 'Superlative Adjectives: indican el grado extremo o superior'
          }
        ]
      },
      {
        id: '1.5-adverbs',
        number: '1.5',
        titleEnglish: 'Adverbs',
        titleSpanish: 'Adverbios',
        ruleExplanationEnglish: 'Adverbs describe a verb, adjective, or another adverb. They indicate how, when, where, how often, or to what extent an action happens.',
        ruleExplanationSpanish: 'Los adverbios modifican verbos, adjetivos u otros adverbios. Indican modo, tiempo, lugar, frecuencia o grado de la acción.',
        badge: 'Adverbios',
        examples: [
          {
            english: 'quickly, slowly, carefully',
            spanish: 'rápidamente, lentamente, cuidadosamente (Adverbios de modo)',
            spanishPhonetic: 'cuík-li, slóu-li, kér-ful-li',
            contextNote: 'Adverbs of Manner: explican de qué manera se ejecuta la acción'
          },
          {
            english: 'now, later, yesterday',
            spanish: 'ahora, más tarde, ayer (Adverbios de tiempo)',
            spanishPhonetic: 'náu, léi-ter, iés-ter-dei',
            contextNote: 'Adverbs of Time: indican el momento temporal de la acción'
          },
          {
            english: 'here, there, everywhere',
            spanish: 'aquí, allí, en todas partes (Adverbios de lugar)',
            spanishPhonetic: 'jíar, der, év-ri-uer',
            contextNote: 'Adverbs of Place: señalan la ubicación donde ocurre'
          },
          {
            english: 'always, often, rarely',
            spanish: 'siempre, a menudo, rara vez (Adverbios de frecuencia)',
            spanishPhonetic: 'ól-ueiz, ó-fen, rér-li',
            contextNote: 'Adverbs of Frequency: indican con qué periodicidad sucede'
          },
          {
            english: 'very, quite, almost',
            spanish: 'muy, bastante, casi (Adverbios de grado)',
            spanishPhonetic: 'vé-ri, cuáit, ól-moust',
            contextNote: 'Adverbs of Degree: intensifican o miden la magnitud'
          }
        ]
      },
      {
        id: '1.6-prepositions',
        number: '1.6',
        titleEnglish: 'Prepositions',
        titleSpanish: 'Preposiciones',
        ruleExplanationEnglish: 'Prepositions express spatial, temporal, or logical relationships between a noun/pronoun and other elements in the sentence.',
        ruleExplanationSpanish: 'Las preposiciones muestran la relación espacial, temporal o de dirección entre un sustantivo y el resto de la frase.',
        badge: 'Preposiciones',
        examples: [
          {
            english: 'in, on, at, by, for, with, under, over, between, among, during, before, after',
            spanish: 'en, sobre, en (lugar/hora), por/junto a, para/por, con, debajo, encima, entre dos, entre varios, durante, antes, después',
            spanishPhonetic: 'in, on, at, bái, for, uiz, án-der, óu-ver, bi-tuíin, a-máng, diú-ring, bi-fór, áf-ter',
            contextNote: 'Prepositions: fundamentales para situar en espacio y tiempo'
          },
          {
            english: 'in the house',
            spanish: 'en la casa (Ubicación / Lugar)',
            spanishPhonetic: 'in de jáus',
            contextNote: 'Indica localización en un espacio cerrado'
          },
          {
            english: 'at 5 o’clock',
            spanish: 'a las cinco en punto (Tiempo / Hora exacta)',
            spanishPhonetic: 'at fáiv o-clók',
            contextNote: 'At se utiliza con horas y momentos específicos'
          },
          {
            english: 'to the store',
            spanish: 'a la tienda / hacia la tienda (Dirección / Movimiento)',
            spanishPhonetic: 'tu de stor',
            contextNote: 'To indica movimiento hacia un destino'
          }
        ]
      },
      {
        id: '1.7-conjunctions',
        number: '1.7',
        titleEnglish: 'Conjunctions',
        titleSpanish: 'Conjunciones',
        ruleExplanationEnglish: 'Conjunctions join words, phrases, or clauses. Divided into coordinating, subordinating, and correlative conjunctions.',
        ruleExplanationSpanish: 'Las conjunciones unen palabras, frases o cláusulas (coordinantes, subordinantes y correlativas).',
        badge: 'Conjunciones',
        examples: [
          {
            english: 'and, but, or, nor, for, so, yet',
            spanish: 'y, pero, o, ni, porque/pues, así que/por lo tanto, aún así (Coordinantes)',
            spanishPhonetic: 'and, bat, or, nor, for, sóu, iet',
            contextNote: 'Coordinating (FANBOYS): unen elementos de igual jerarquía sintáctica'
          },
          {
            english: 'because, although, since, unless, while, after, before, when',
            spanish: 'porque, aunque, dado que/desde, a menos que, mientras, después, antes, cuando (Subordinantes)',
            spanishPhonetic: 'bi-cós, ol-dóu, sins, an-lés, uáil, áf-ter, bi-fór, uén',
            contextNote: 'Subordinating: unen una cláusula dependiente a una cláusula principal'
          },
          {
            english: 'either…or, neither…nor, both…and, not only…but also',
            spanish: 'o bien... o, ni... ni, tanto... como, no sólo... sino también (Correlativas)',
            spanishPhonetic: 'ái-der... or, nái-der... nor, bouz... and, not óun-li... bat ól-sou',
            contextNote: 'Correlative: pares coordinados de conjunciones que actúan juntas'
          }
        ]
      },
      {
        id: '1.8-interjections',
        number: '1.8',
        titleEnglish: 'Interjections',
        titleSpanish: 'Interjecciones',
        ruleExplanationEnglish: 'Interjections express sudden bursts of emotion, surprise, or physical reaction. Typically followed by an exclamation mark.',
        ruleExplanationSpanish: 'Las interjecciones expresan emociones súbitas, sorpresas o dolor repentino. Suelen llevar signo de exclamación.',
        badge: 'Interjecciones',
        examples: [
          {
            english: 'oh, wow, ouch, hey, alas, bravo',
            spanish: '¡oh!, ¡guau!, ¡ay!, ¡ey / hola!, ¡ay de mí / por desgracia!, ¡bravo!',
            spanishPhonetic: 'óu, uáu, áuch, jéi, a-lás, brá-vou',
            contextNote: 'Interjections: palabras independientes que transmiten emoción instantánea'
          }
        ]
      },
      {
        id: '1.9-determiners',
        number: '1.9',
        titleEnglish: 'Determiners',
        titleSpanish: 'Determinantes',
        ruleExplanationEnglish: 'Determiners precede nouns to establish quantity, proximity, definiteness, or ownership (articles, demonstratives, quantifiers, possessives, numbers).',
        ruleExplanationSpanish: 'Los determinantes van antes del sustantivo fijando si es conocido, su cantidad o su posesión.',
        badge: 'Determinantes',
        examples: [
          {
            english: 'a, an, the',
            spanish: 'un, una, el/la/los/las (Artículos)',
            spanishPhonetic: 'ei / a, an, de',
            contextNote: 'Articles: determinan si el sustantivo es específico o general'
          },
          {
            english: 'this, that, these, those',
            spanish: 'este, ese, estos, esos (Demostrativos)',
            spanishPhonetic: 'dis, dat, diis, dous',
            contextNote: 'Demonstratives: indican cercanía o lejanía física/temporal'
          },
          {
            english: 'some, many, few, several',
            spanish: 'algunos, muchos, pocos, varios (Cuantificadores)',
            spanishPhonetic: 'sam, mé-ni, fiú, sé-ve-ral',
            contextNote: 'Quantifiers: especifican cantidades indefinidas'
          },
          {
            english: 'my, your, his, her, its, our, their',
            spanish: 'mi, tu, su, su, su, nuestro, su (Posesivos)',
            spanishPhonetic: 'mái, ior, jis, jer, its, áuer, déir',
            contextNote: 'Possessives: determinantes de pertenencia'
          },
          {
            english: 'one, two, three',
            spanish: 'uno, dos, tres (Números cardinales)',
            spanishPhonetic: 'uán, tu, zri',
            contextNote: 'Numbers: determinantes numéricos exactos'
          }
        ]
      },
      {
        id: '1.10-modal-verbs',
        number: '1.10',
        titleEnglish: 'Modal Verbs',
        titleSpanish: 'Verbos Modales',
        ruleExplanationEnglish: 'Auxiliary verbs that express necessity, possibility, permission, or ability. Followed by bare infinitive without "to", never adding "s" in third person.',
        ruleExplanationSpanish: 'Verbos auxiliares de necesidad, posibilidad, permiso o capacidad. Se usan con la base del verbo y no cambian con el sujeto (no llevan -s).',
        badge: 'Modales',
        examples: [
          {
            english: 'can, could, may, might, must, shall, should, will, would',
            spanish: 'poder, podría/pudo, poder (permiso/posibilidad), podría, deber (obligación), deber/hará, debería, querer/futuro, condicional',
            spanishPhonetic: 'can, cud, méi, máit, mast, shal, shud, uíl, uud',
            contextNote: 'Modals: can (capacidad), must (deber moral o militar), should (consejo)'
          },
          {
            english: 'He can swim very well.',
            spanish: 'Él puede nadar muy bien.',
            spanishPhonetic: 'ji can suím vé-ri uél',
            contextNote: 'Regla: "can" no lleva -s (nunca "he cans") y el verbo siguiente va en forma base'
          },
          {
            english: 'You must wear your uniform.',
            spanish: 'Debes vestir tu uniforme.',
            spanishPhonetic: 'iu mast uér ior iú-ni-form',
            contextNote: 'Must expresa una obligación estricta o reglamentaria'
          }
        ]
      },
      {
        id: '1.11-gerunds-and-infinitives',
        number: '1.11',
        titleEnglish: 'Gerunds and Infinitives',
        titleSpanish: 'Gerundios e Infinitivos',
        ruleExplanationEnglish: 'Verb forms functioning as nouns. Gerunds take -ing. Infinitives take "to + base verb". Certain verbs alter meaning depending on choice.',
        ruleExplanationSpanish: 'Formas verbales con función de sustantivo. Gerundio (-ing) e Infinitivo (to + verbo). Algunos verbos cambian de significado según cuál se elija.',
        badge: 'Verbales',
        examples: [
          {
            english: 'Swimming is fun.',
            spanish: 'Nadar es divertido. (Gerundio como sujeto de la oración)',
            spanishPhonetic: 'suí-ming iz fan',
            contextNote: 'En inglés, el sujeto de una acción general se escribe en gerundio (-ing)'
          },
          {
            english: 'He enjoys reading.',
            spanish: 'Él disfruta leer / la lectura. (Gerundio tras el verbo enjoy)',
            spanishPhonetic: 'ji en-dshóis rí-ding',
            contextNote: 'Verbos como enjoy, avoid, suggest siempre van seguidos de gerundio'
          },
          {
            english: 'To swim is fun.',
            spanish: 'Nadar es divertido. (Infinitivo con "to")',
            spanishPhonetic: 'tu suím iz fan',
            contextNote: 'Uso del infinitivo como sustantivo formal'
          },
          {
            english: 'He wants to read.',
            spanish: 'Él quiere leer. (Infinitivo tras el verbo want)',
            spanishPhonetic: 'ji uónts tu riid',
            contextNote: 'Verbos como want, hope, decide, plan exigen infinitivo con "to"'
          },
          {
            english: 'She stopped smoking.',
            spanish: 'Ella dejó de fumar. (Abandonó el hábito de fumar)',
            spanishPhonetic: 'shi stopt smóu-king',
            contextNote: 'Stop + Gerundio = cesar o abandonar una actividad previa'
          },
          {
            english: 'She stopped to smoke.',
            spanish: 'Ella se detuvo para fumar. (Hizo una pausa con ese fin)',
            spanishPhonetic: 'shi stopt tu smóuk',
            contextNote: 'Stop + Infinitivo = interrumpir lo que se hacía para realizar otra acción'
          }
        ]
      },
      {
        id: '1.12-articles',
        number: '1.12',
        titleEnglish: 'Articles',
        titleSpanish: 'Artículos',
        ruleExplanationEnglish: 'Define a noun as specific (Definite: "The") or unspecific (Indefinite: "A" / "An"). Use "a" before consonant sounds and "an" before vowel sounds.',
        ruleExplanationSpanish: 'Definen si el sustantivo es específico ("The") o inespecífico ("A" / "An"). Se usa "a" ante sonido consonántico y "an" ante sonido vocálico.',
        badge: 'Artículos',
        examples: [
          {
            english: 'The cat on the roof.',
            spanish: 'El gato sobre el techo. (Artículo definido: sabemos de qué gato se trata)',
            spanishPhonetic: 'de cat on de ruf',
            contextNote: 'The: artículo determinado único para masculino, femenino, singular y plural'
          },
          {
            english: 'A cat on a roof.',
            spanish: 'Un gato sobre un techo. (Artículo indefinido general)',
            spanishPhonetic: 'a cat on a ruf',
            contextNote: 'A: se usa ante sonido de consonante (/k/ en cat)'
          },
          {
            english: 'An apple on the table.',
            spanish: 'Una manzana sobre la mesa.',
            spanishPhonetic: 'an á-pl on de téi-bl',
            contextNote: 'An: se utiliza ante sonido de vocal inicial (/æ/ en apple)'
          },
          {
            english: 'A university.',
            spanish: 'Una universidad. (Sonido semivocal /j/ tipo "iu")',
            spanishPhonetic: 'a iu-ni-vér-si-ti',
            contextNote: '¡Atención! University suena /juː/, es sonido consonántico, por eso lleva "a"'
          },
          {
            english: 'An hour.',
            spanish: 'Una hora. (La "h" es muda, suena vocal /aʊər/)',
            spanishPhonetic: 'an áuer',
            contextNote: '¡Regla de oro! En "hour" la h no suena; empieza con vocal, por eso lleva "an"'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SECCIÓN 2: SENTENCE STRUCTURE (ESTRUCTURA DE LA ORACIÓN)
  // =========================================================================
  {
    id: 'sentence-structure',
    sectionNumber: '2',
    titleEnglish: 'Sentence Structure',
    titleSpanish: 'Estructura de la Oración',
    descriptionSpanish: 'Reglas fundamentales para la construcción de oraciones comprensibles, con sujeto, predicado, objetos, tiempos, cláusulas y concordancia.',
    subtopics: [
      {
        id: '2.1-subject-predicate',
        number: '2.1',
        titleEnglish: 'Subject and Predicate',
        titleSpanish: 'Sujeto y Predicado',
        ruleExplanationEnglish: 'A sentence is composed of a subject (who or what the sentence is about) and a predicate (what is said about the subject).',
        ruleExplanationSpanish: 'Una oración completa se compone de sujeto (de quién se habla) y predicado (lo que se dice sobre dicho sujeto).',
        badge: 'Fundamento',
        examples: [
          {
            english: 'The cat is sleeping.',
            spanish: 'El gato está durmiendo.',
            spanishPhonetic: 'de cat iz slí-ping',
            contextNote: '"The cat" = Subject (Sujeto). "is sleeping" = Predicate (Predicado).'
          }
        ]
      },
      {
        id: '2.2-objects',
        number: '2.2',
        titleEnglish: 'Objects',
        titleSpanish: 'Objetos (Directo, Indirecto y de Preposición)',
        ruleExplanationEnglish: 'Words that receive the action of the verb. Direct object receives action directly, indirect object shows to/for whom, and object of preposition follows a preposition.',
        ruleExplanationSpanish: 'Reciben la acción del verbo. Objeto directo (qué), indirecto (a quién/para quién) y objeto de preposición.',
        badge: 'Objetos',
        examples: [
          {
            english: 'She reads books.',
            spanish: 'Ella lee libros. (Objeto directo: ¿Qué lee? -> Libros)',
            spanishPhonetic: 'shi rids bucs',
            contextNote: 'Direct Object: recibe la acción de forma directa'
          },
          {
            english: 'He gave her a gift.',
            spanish: 'Él le dio a ella un regalo. ("Her" es objeto indirecto; "gift" es directo)',
            spanishPhonetic: 'ji gueiv jer a gift',
            contextNote: 'Indirect Object: persona que recibe el beneficio del acto'
          },
          {
            english: 'She is at the park.',
            spanish: 'Ella está en el parque. ("The park" es objeto de la preposición "at")',
            spanishPhonetic: 'shi iz at de park',
            contextNote: 'Object of Preposition: término que completa la frase preposicional'
          }
        ]
      },
      {
        id: '2.3-clauses',
        number: '2.3',
        titleEnglish: 'Clauses',
        titleSpanish: 'Cláusulas (Independientes y Dependientes)',
        ruleExplanationEnglish: 'Groups of words containing a subject and predicate. Independent clauses stand alone as complete sentences; dependent clauses require an independent clause.',
        ruleExplanationSpanish: 'Grupos de palabras con sujeto y predicado. Las independientes tienen sentido propio; las dependientes (subordinadas) necesitan la oración principal.',
        badge: 'Cláusulas',
        examples: [
          {
            english: 'She enjoys reading.',
            spanish: 'Ella disfruta leer. (Cláusula independiente: sentido completo)',
            spanishPhonetic: 'shi en-dshóis rí-ding',
            contextNote: 'Independent Clause: puede sostenerse por sí sola como oración'
          },
          {
            english: 'Although she was tired.',
            spanish: 'Aunque ella estaba cansada... (Cláusula dependiente incompleta)',
            spanishPhonetic: 'ol-dóu shi uoz tái-erd',
            contextNote: 'Dependent Clause: inicia con conjunción subordinante y requiere complemento'
          }
        ]
      },
      {
        id: '2.4-phrases',
        number: '2.4',
        titleEnglish: 'Phrases',
        titleSpanish: 'Frases / Sintagmas',
        ruleExplanationEnglish: 'Groups of words working together that do not contain both a subject and predicate (noun, verb, adjective, adverb, prepositional phrases).',
        ruleExplanationSpanish: 'Conjunto de palabras coordinadas que no tienen a la vez sujeto y predicado completo, pero aportan información esencial.',
        badge: 'Frases',
        examples: [
          {
            english: 'The quick brown fox.',
            spanish: 'El veloz zorro marrón. (Frase nominal / Noun phrase)',
            spanishPhonetic: 'de cuík bráun foks',
            contextNote: 'Noun Phrase: actúa conjuntamente como un núcleo sustantivo'
          },
          {
            english: 'will be running',
            spanish: 'estará corriendo (Frase verbal / Verb phrase)',
            spanishPhonetic: 'uíl bi rá-ning',
            contextNote: 'Verb Phrase: combinación de verbo principal con sus auxiliares'
          },
          {
            english: 'very happy with the results',
            spanish: 'muy feliz con los resultados (Frase adjetiva / Adjective phrase)',
            spanishPhonetic: 'vé-ri já-pi uiz de ri-sálts',
            contextNote: 'Adjective Phrase: grupo de palabras que califican al sustantivo'
          },
          {
            english: 'very quickly',
            spanish: 'muy rápidamente (Frase adverbial / Adverb phrase)',
            spanishPhonetic: 'vé-ri cuík-li',
            contextNote: 'Adverb Phrase: grupo que funciona modificando una acción o cualidad'
          },
          {
            english: 'after the meal',
            spanish: 'después de la comida (Frase preposicional / Prepositional phrase)',
            spanishPhonetic: 'áf-ter de míil',
            contextNote: 'Prepositional Phrase: encabeza con preposición e indica contexto circunstancial'
          }
        ]
      },
      {
        id: '2.5-types-of-sentences',
        number: '2.5',
        titleEnglish: 'Types of Sentences',
        titleSpanish: 'Tipos de Oraciones',
        ruleExplanationEnglish: 'Sentences are classified by purpose: declarative (statement), interrogative (question), imperative (command), and exclamatory (strong emotion).',
        ruleExplanationSpanish: 'Se clasifican según su intención: enunciativas (afirman), interrogativas (preguntan), imperativas (órdenes o pedidos) y exclamativas (emoción).',
        badge: 'Oraciones',
        examples: [
          {
            english: 'The sky is blue.',
            spanish: 'El cielo es azul. (Enunciativa / Declarative)',
            spanishPhonetic: 'de scái iz blu',
            contextNote: 'Declarative: emite una afirmación o hecho'
          },
          {
            english: 'Is the sky blue?',
            spanish: '¿Es el cielo azul? (Interrogativa / Interrogative)',
            spanishPhonetic: 'iz de scái blu',
            contextNote: 'Interrogative: formula una pregunta con inversión verbo-sujeto'
          },
          {
            english: 'Close the door.',
            spanish: 'Cierra la puerta. (Imperativa / Imperative)',
            spanishPhonetic: 'clóus de dor',
            contextNote: 'Imperative: da una orden directa; el sujeto "you" se omite'
          },
          {
            english: 'What a beautiful sky!',
            spanish: '¡Qué hermoso cielo! (Exclamativa / Exclamatory)',
            spanishPhonetic: 'uát a biú-ti-ful scái',
            contextNote: 'Exclamatory: expresa sorpresa, emoción o admiración viva'
          }
        ]
      },
      {
        id: '2.6-voice',
        number: '2.6',
        titleEnglish: 'Voice (Active vs. Passive)',
        titleSpanish: 'Voz (Activa vs. Pasiva)',
        ruleExplanationEnglish: 'Active voice focuses on the subject performing the action. Passive voice focuses on the subject receiving the action (Verb TO BE + Past Participle).',
        ruleExplanationSpanish: 'Voz activa: el sujeto realiza la acción. Voz pasiva: el sujeto recibe la acción del verbo (se prefiere la activa en la redacción formal por su claridad).',
        badge: 'Voz Verbal',
        examples: [
          {
            english: 'The cat chased the mouse.',
            spanish: 'El gato persiguió al ratón. (Voz activa)',
            spanishPhonetic: 'de cat chéist de máus',
            contextNote: 'Active Voice: el sujeto "the cat" ejecuta directamente el verbo'
          },
          {
            english: 'The mouse was chased by the cat.',
            spanish: 'El ratón fue perseguido por el gato. (Voz pasiva)',
            spanishPhonetic: 'de máus uoz chéist bái de cat',
            contextNote: 'Passive Voice: "the mouse" recibe la acción efectuada "by the cat"'
          }
        ]
      },
      {
        id: '2.7-mood',
        number: '2.7',
        titleEnglish: 'Mood',
        titleSpanish: 'Modo Gramatical',
        ruleExplanationEnglish: 'Expresses speaker attitude toward the verb action: Indicative (factual/questions), Imperative (commands/requests), Subjunctive (hypothetical/contrary to fact).',
        ruleExplanationSpanish: 'Refleja la actitud del hablante: Indicativo (hechos/preguntas), Imperativo (mandatos/instrucciones), Subjuntivo (deseos o hipótesis irreales).',
        badge: 'Modos',
        examples: [
          {
            english: 'She is reading. / Is she reading?',
            spanish: 'Ella está leyendo. / ¿Está ella leyendo? (Modo Indicativo)',
            spanishPhonetic: 'shi iz rí-ding / iz shi rí-ding',
            contextNote: 'Indicative Mood: enuncia un hecho real o consulta una certeza'
          },
          {
            english: 'Read the book.',
            spanish: 'Lee el libro. (Modo Imperativo)',
            spanishPhonetic: 'riid de buk',
            contextNote: 'Imperative Mood: emite una orden directa o petición'
          },
          {
            english: 'If I were you, I would read more.',
            spanish: 'Si yo fuera tú, leería más. (Modo Subjuntivo hipotético)',
            spanishPhonetic: 'if ái uer iu, ái uud riid mor',
            contextNote: 'Subjunctive Mood: situación contrafáctica; usa "were" con "I" (If I were...)'
          }
        ]
      },
      {
        id: '2.8-tenses',
        number: '2.8',
        titleEnglish: 'Tenses and Aspects',
        titleSpanish: 'Tiempos y Aspectos Verbales',
        ruleExplanationEnglish: '3 main tenses (Present, Past, Future) across 4 aspects (Simple, Continuous, Perfect, Perfect Continuous), forming the 12 English verb forms.',
        ruleExplanationSpanish: 'Los 3 tiempos (Presente, Pasado, Futuro) combinados con los 4 aspectos (Simple, Continuo, Perfecto y Perfecto Continuo) forman las 12 estructuras del inglés.',
        badge: '12 Tiempos',
        examples: [
          {
            english: 'She reads.',
            spanish: 'Ella lee. (Presente Simple)',
            spanishPhonetic: 'shi rids',
            contextNote: 'Simple Present: hábitos o verdades generales'
          },
          {
            english: 'She is reading.',
            spanish: 'Ella está leyendo. (Presente Continuo)',
            spanishPhonetic: 'shi iz rí-ding',
            contextNote: 'Present Continuous: acción que transcurre ahora mismo'
          },
          {
            english: 'She has read.',
            spanish: 'Ella ha leído. (Presente Perfecto)',
            spanishPhonetic: 'shi jaz red',
            contextNote: 'Present Perfect: acción pasada con impacto o vigencia presente ("read" suena "red")'
          },
          {
            english: 'She has been reading.',
            spanish: 'Ella ha estado leyendo. (Presente Perfecto Continuo)',
            spanishPhonetic: 'shi jaz biin rí-ding',
            contextNote: 'Present Perfect Continuous: acción iniciada en el pasado que sigue en curso'
          },
          {
            english: 'She read.',
            spanish: 'Ella leyó. (Pasado Simple - pronunciado /red/)',
            spanishPhonetic: 'shi red',
            contextNote: 'Simple Past: el pasado del verbo read se pronuncia idéntico al color rojo ("red")'
          },
          {
            english: 'She was reading.',
            spanish: 'Ella estaba leyendo. (Pasado Continuo)',
            spanishPhonetic: 'shi uoz rí-ding',
            contextNote: 'Past Continuous: acción en desarrollo en un punto del pasado'
          },
          {
            english: 'She had read.',
            spanish: 'Ella había leído. (Pasado Perfecto)',
            spanishPhonetic: 'shi jad red',
            contextNote: 'Past Perfect: acción anterior a otro evento del pasado'
          },
          {
            english: 'She had been reading.',
            spanish: 'Ella había estado leyendo. (Pasado Perfecto Continuo)',
            spanishPhonetic: 'shi jad biin rí-ding',
            contextNote: 'Past Perfect Continuous: duración prolongada antes de un hecho pasado'
          },
          {
            english: 'She will read.',
            spanish: 'Ella leerá. (Futuro Simple)',
            spanishPhonetic: 'shi uíl riid',
            contextNote: 'Simple Future: predicciones o decisiones espontáneas'
          },
          {
            english: 'She will be reading.',
            spanish: 'Ella estará leyendo. (Futuro Continuo)',
            spanishPhonetic: 'shi uíl bi rí-ding',
            contextNote: 'Future Continuous: acción en curso en un momento futuro'
          },
          {
            english: 'She will have read.',
            spanish: 'Ella habrá leído. (Futuro Perfecto)',
            spanishPhonetic: 'shi uíl jav red',
            contextNote: 'Future Perfect: hecho que habrá finalizado antes de un plazo'
          },
          {
            english: 'She will have been reading.',
            spanish: 'Ella habrá estado leyendo. (Futuro Perfecto Continuo)',
            spanishPhonetic: 'shi uíl jav biin rí-ding',
            contextNote: 'Future Perfect Continuous: duración acumulada hasta un momento futuro'
          }
        ]
      },
      {
        id: '2.9-conditionals',
        number: '2.9',
        titleEnglish: 'Conditionals (Zero, 1st, 2nd, 3rd)',
        titleSpanish: 'Oraciones Condicionales (Cero, 1°, 2° y 3°)',
        ruleExplanationEnglish: 'Express factual implications or hypothetical situations across 4 patterns: Zero (truth), First (real/possible), Second (unreal present), Third (unreal past).',
        ruleExplanationSpanish: 'Expresan condiciones y consecuencias: Cero (leyes naturales), Primero (real y probable), Segundo (hipotético presente) y Tercero (imposible en el pasado).',
        badge: 'Condicionales',
        examples: [
          {
            english: 'If you heat water, it boils.',
            spanish: 'Si calientas agua, hierve. (Zero Conditional)',
            spanishPhonetic: 'if iu jiit uó-ter, it bóils',
            contextNote: 'Zero Conditional: verdades universales, científicas o leyes de la naturaleza'
          },
          {
            english: 'If it rains, we will stay indoors.',
            spanish: 'Si llueve, nos quedaremos bajo techo. (First Conditional)',
            spanishPhonetic: 'if it réins, ui uíl stéi in-dóors',
            contextNote: 'First Conditional: situación real y posible a futuro (If + Presente, will + verbo)'
          },
          {
            english: 'If I had a million dollars, I would travel the world.',
            spanish: 'Si tuviera un millón de dólares, viajaría por el mundo. (Second Conditional)',
            spanishPhonetic: 'if ái jad a mí-lion dó-lars, ái uud trá-vel de uorld',
            contextNote: 'Second Conditional: hipótesis irreal presente/futura (If + Pasado, would + verbo)'
          },
          {
            english: 'If I had known, I would have acted differently.',
            spanish: 'Si lo hubiera sabido, habría actuado de forma diferente. (Third Conditional)',
            spanishPhonetic: 'if ái jad nóun, ái uud jav ác-ted dí-fe-rent-li',
            contextNote: 'Third Conditional: lamento o hipótesis sobre el pasado (If + Past Perfect, would have + participio)'
          }
        ]
      },
      {
        id: '2.10-reported-speech',
        number: '2.10',
        titleEnglish: 'Reported Speech',
        titleSpanish: 'Estilo Indirecto (Reported Speech)',
        ruleExplanationEnglish: 'Relays what someone said without direct quoting. Requires tense shifts (backshift: present to past), pronoun changes, and time expression changes.',
        ruleExplanationSpanish: 'Transmite lo que otra persona dijo sin citar textualmente. Requiere retroceso de tiempos verbales, ajuste de pronombres y expresiones temporales.',
        badge: 'Discurso Indirecto',
        examples: [
          {
            english: 'He said, “I am going to the store.”',
            spanish: 'Él dijo: "Voy a la tienda." (Discurso Directo)',
            spanishPhonetic: 'ji sed, ái am góu-ing tu de stor',
            contextNote: 'Direct Speech: cita textual entre comillas'
          },
          {
            english: 'He said that he was going to the store.',
            spanish: 'Él dijo que iba a la tienda. (Discurso Indirecto)',
            spanishPhonetic: 'ji sed dat ji uoz góu-ing tu de stor',
            contextNote: 'Reported Speech: "am" pasa a "was" y el pronombre "I" pasa a "he"'
          }
        ]
      },
      {
        id: '2.11-sentence-fragments-and-run-ons',
        number: '2.11',
        titleEnglish: 'Sentence Fragments and Run-ons',
        titleSpanish: 'Fragmentos de Oración y Oraciones Pegadas',
        ruleExplanationEnglish: 'Avoid fragments (incomplete clauses lacking subject/verb) and run-ons (clauses improperly joined without punctuation/conjunctions).',
        ruleExplanationSpanish: 'Errores graves de sintaxis: fragmentos incompletos que carecen de sujeto/verbo, y oraciones continuas pegadas sin signos de puntuación.',
        badge: 'Sintaxis',
        examples: [
          {
            english: 'Because I was tired.',
            spanish: 'Porque estaba cansado. (Fragmento incorrecto por sí solo)',
            spanishPhonetic: 'bi-cós ái uoz tái-erd',
            contextNote: 'Sentence Fragment: falta la cláusula principal con la consecuencia'
          },
          {
            english: 'I love to write it is my favorite hobby.',
            spanish: 'Me encanta escribir es mi pasatiempo favorito. (Oración pegada incorrecta / Run-on)',
            spanishPhonetic: 'ái lav tu ráit it iz mái féi-vo-rit jó-bi',
            contextNote: 'Run-on Sentence: deben separarse con punto o punto y coma: "I love to write; it is my favorite hobby."'
          }
        ]
      },
      {
        id: '2.12-subject-verb-agreement',
        number: '2.12',
        titleEnglish: 'Subject-Verb Agreement',
        titleSpanish: 'Concordancia entre Sujeto y Verbo',
        ruleExplanationEnglish: 'Subjects and verbs must agree in number: singular subjects take singular verbs, plural take plural verbs, and compound subjects with "and" take plural.',
        ruleExplanationSpanish: 'Sujeto y verbo deben coincidir en número. Los pronombres indefinidos (everyone, someone) suelen exigir verbo singular.',
        badge: 'Concordancia',
        examples: [
          {
            english: 'The cat runs.',
            spanish: 'El gato corre. (Sujeto singular -> verbo con -s)',
            spanishPhonetic: 'de cat rans',
            contextNote: 'Singular Subject: en 3° persona singular el verbo añade -s'
          },
          {
            english: 'The cats run.',
            spanish: 'Los gatos corren. (Sujeto plural -> verbo sin -s)',
            spanishPhonetic: 'de cats ran',
            contextNote: 'Plural Subject: el verbo mantiene su forma base'
          },
          {
            english: 'Everyone is happy.',
            spanish: 'Todos están felices / Todo el mundo está feliz.',
            spanishPhonetic: 'év-ri-uan iz já-pi',
            contextNote: '¡Regla clave! "Everyone" y "Someone" concuerdan con verbo singular "is", no con "are"'
          },
          {
            english: 'The dog and the cat are playing.',
            spanish: 'El perro y el gato están jugando. (Sujeto compuesto)',
            spanishPhonetic: 'de dog end de cat ar pléi-ing',
            contextNote: 'Compound Subject con "and" conforma un sujeto plural que lleva "are"'
          }
        ]
      },
      {
        id: '2.13-modifiers',
        number: '2.13',
        titleEnglish: 'Modifiers (Misplaced and Dangling)',
        titleSpanish: 'Modificadores (Fuera de Lugar y Colgantes)',
        ruleExplanationEnglish: 'Modifiers provide extra details. Proper placement next to the word they modify is critical to prevent comical or confusing ambiguities.',
        ruleExplanationSpanish: 'Palabras o frases que modifican a otra. Deben colocarse justo junto a la palabra correcta para evitar confusiones absurdas.',
        badge: 'Modificadores',
        examples: [
          {
            english: 'The blue sky.',
            spanish: 'El cielo azul. (Adjetivo colocado correctamente antes del sustantivo)',
            spanishPhonetic: 'de blu scái',
            contextNote: 'En inglés el adjetivo precede al sustantivo'
          },
          {
            english: 'She runs quickly.',
            spanish: 'Ella corre rápidamente. (Adverbio de modo)',
            spanishPhonetic: 'shi rans cuík-li',
            contextNote: 'Modifica al verbo "runs"'
          },
          {
            english: 'She almost drove her kids to school every day.',
            spanish: 'Ella casi llevaba en auto a sus hijos a la escuela todos los días. (Modificador descolocado)',
            spanishPhonetic: 'shi ól-moust dróuv jer kids tu scuul év-ri déi',
            contextNote: 'Misplaced Modifier: da a entender que casi arrancaba el auto pero no lo hacía, en vez de "almost every day"'
          },
          {
            english: 'Running to catch the bus, the rain started pouring.',
            spanish: 'Corriendo para alcanzar el autobús, la lluvia empezó a caer a cántaros. (Modificador colgante)',
            spanishPhonetic: 'rá-ning tu catch de bas, de réin stár-ted pó-ring',
            contextNote: 'Dangling Modifier: gramaticalmente parece que la lluvia corría tras el autobús'
          }
        ]
      },
      {
        id: '2.14-parallelism',
        number: '2.14',
        titleEnglish: 'Parallelism',
        titleSpanish: 'Paralelismo Sintáctico',
        ruleExplanationEnglish: 'Using the same grammatical structure for similar elements in a series or list to ensure stylistic balance, clarity, and rhythm.',
        ruleExplanationSpanish: 'Mantener la misma forma gramatical en elementos de una lista o serie coordinada (todos gerundios o todos infinitivos).',
        badge: 'Paralelismo',
        examples: [
          {
            english: 'She likes hiking, to swim, and biking.',
            spanish: 'A ella le gusta el senderismo, nadar y andar en bicicleta. (Incorrecto: mezcla gerundio e infinitivo)',
            spanishPhonetic: 'shi láics jái-king, tu suím, end bái-king',
            contextNote: 'Incorrect: no hay armonía estructural entre "hiking", "to swim" y "biking"'
          },
          {
            english: 'She likes hiking, swimming, and biking.',
            spanish: 'A ella le gusta hacer senderismo, nadar y andar en bicicleta. (Correcto: todos en -ing)',
            spanishPhonetic: 'shi láics jái-king, suí-ming, end bái-king',
            contextNote: 'Correct: paralelismo perfecto con terminaciones -ing'
          },
          {
            english: 'The manager was responsible for writing reports, overseeing projects, and supervising the team.',
            spanish: 'El gerente era responsable de redactar informes, supervisar proyectos y dirigir el equipo. (Correcto)',
            spanishPhonetic: 'de má-na-dser uoz ri-spón-si-bl for rái-ting ri-pórts, óu-ver-si-ing pró-dsects, end su-per-vái-sing de tiim',
            contextNote: 'Correct: todas las responsabilidades coordinadas usan la estructura gerundio + sustantivo'
          }
        ]
      },
      {
        id: '2.15-relative-clauses',
        number: '2.15',
        titleEnglish: 'Relative Clauses',
        titleSpanish: 'Oraciones Relativas (Especificativas y Explicativas)',
        ruleExplanationEnglish: 'Provide extra details about a noun. Defining clauses provide essential info without commas; non-defining clauses provide supplementary info set off by commas.',
        ruleExplanationSpanish: 'Añaden información sobre un sustantivo con pronombres relativos. Las definitorias son esenciales sin comas; las no definitorias van entre comas.',
        badge: 'Cláusulas Relativas',
        examples: [
          {
            english: 'The book that I borrowed was excellent.',
            spanish: 'El libro que tomé prestado fue excelente. (Defining: especifica cuál libro)',
            spanishPhonetic: 'de buk dat ái bó-roud uoz ék-se-lent',
            contextNote: 'Defining Relative Clause: no lleva comas porque identifica al sustantivo exacto'
          },
          {
            english: 'My brother, who lives in New York, is visiting.',
            spanish: 'Mi hermano, que vive en Nueva York, está de visita. (Non-defining: dato extra entre comas)',
            spanishPhonetic: 'mái brá-der, ju livs in niu iork, iz ví-si-ting',
            contextNote: 'Non-defining Relative Clause: se encierra entre comas porque sólo agrega información adicional'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SECCIÓN 3: PUNCTUATION (SIGNOS DE PUNTUACIÓN)
  // =========================================================================
  {
    id: 'punctuation',
    sectionNumber: '3',
    titleEnglish: 'Punctuation Marks',
    titleSpanish: 'Signos de Puntuación',
    descriptionSpanish: 'Aportan claridad al significado, pausado y entonación de las oraciones en inglés, con reglas de uso precisas.',
    subtopics: [
      {
        id: '3.1-period',
        number: '3.1',
        titleEnglish: 'Period / Full Stop (.)',
        titleSpanish: 'Punto (.)',
        ruleExplanationEnglish: 'Indicates the end of a declarative sentence or mild imperative command.',
        ruleExplanationSpanish: 'Marca el final de una oración enunciativa o de una orden moderada.',
        badge: 'Punto',
        examples: [
          {
            english: 'She went to the store.',
            spanish: 'Ella fue a la tienda.',
            spanishPhonetic: 'shi uent tu de stor',
            contextNote: 'Period (.): cierra la declaración completa'
          }
        ]
      },
      {
        id: '3.2-comma',
        number: '3.2',
        titleEnglish: 'Comma (,)',
        titleSpanish: 'Coma (,)',
        ruleExplanationEnglish: 'Indicates a pause, separates list items, connects compound sentences with conjunctions, and sets off non-essential elements.',
        ruleExplanationSpanish: 'Indica pausas breves, separa elementos en listas, precede conjunciones en oraciones compuestas y aísla frases accesorias.',
        badge: 'Coma',
        examples: [
          {
            english: 'I bought apples, oranges, and bananas.',
            spanish: 'Compré manzanas, naranjas y plátanos. (Lista de elementos)',
            spanishPhonetic: 'ái bot á-pls, ó-ran-dshis, end ba-ná-nas',
            contextNote: 'Oxford Comma: coma previa a "and" en enumeraciones'
          },
          {
            english: 'She was tired, but she finished her work.',
            spanish: 'Ella estaba cansada, pero terminó su trabajo. (Antes de conjunción)',
            spanishPhonetic: 'shi uoz tái-erd, bat shi fí-nisht jer uork',
            contextNote: 'Coma antes de "but" uniendo dos oraciones completas'
          },
          {
            english: 'After the meeting, we went to lunch.',
            spanish: 'Después de la reunión, fuimos a almorzar. (Tras elemento introductorio)',
            spanishPhonetic: 'áf-ter de míi-ting, ui uent tu lanch',
            contextNote: 'Separa la frase circunstancial inicial'
          },
          {
            english: 'My brother, who lives in New York, is visiting.',
            spanish: 'Mi hermano, que vive en Nueva York, está de visita.',
            spanishPhonetic: 'mái brá-der, ju livs in niu iork, iz ví-si-ting',
            contextNote: 'Encierra datos no esenciales'
          }
        ]
      },
      {
        id: '3.3-semicolon',
        number: '3.3',
        titleEnglish: 'Semicolon (;)',
        titleSpanish: 'Punto y Coma (;)',
        ruleExplanationEnglish: 'Connects independent clauses closely linked in thought without coordinating conjunctions, or separates complex items containing commas.',
        ruleExplanationSpanish: 'Conecta oraciones independientes íntimamente ligadas en pensamiento sin conjunción, o separa elementos complejos de una lista que ya tienen comas.',
        badge: 'Punto y Coma',
        examples: [
          {
            english: 'She loves reading; her favorite genre is science fiction.',
            spanish: 'A ella le encanta leer; su género favorito es la ciencia ficción.',
            spanishPhonetic: 'shi lavs rí-ding; jer féi-vo-rit dshán-re iz sái-ens fík-shon',
            contextNote: 'Semicolon: une dos oraciones vinculadas sin usar "and"'
          },
          {
            english: 'We visited Paris, France; Rome, Italy; and Berlin, Germany.',
            spanish: 'Visitamos París, Francia; Roma, Italia; y Berlín, Alemania.',
            spanishPhonetic: 'ui ví-si-ted pá-ris, frans; róum, í-ta-li; end ber-lín, dshér-ma-ni',
            contextNote: 'Separa ciudades y países que ya llevan comas internas'
          }
        ]
      },
      {
        id: '3.4-colon',
        number: '3.4',
        titleEnglish: 'Colon (:)',
        titleSpanish: 'Dos Puntos (:)',
        ruleExplanationEnglish: 'Used to introduce a list, a direct quote, a formal explanation, or to emphasize a concluding point.',
        ruleExplanationSpanish: 'Introduce una enumeración, una cita textual formal, una explicación o un punto de énfasis.',
        badge: 'Dos Puntos',
        examples: [
          {
            english: 'She brought three things: a book, a pen, and a notebook.',
            spanish: 'Ella trajo tres cosas: un libro, una lapicera y un cuaderno.',
            spanishPhonetic: 'shi brot zri zings: a buk, a pen, end a nóut-buk',
            contextNote: 'Colon antes de enumerar elementos anticipados'
          },
          {
            english: 'Remember the saying: “Practice makes perfect.”',
            spanish: 'Recuerda el refrán: "La práctica hace al maestro."',
            spanishPhonetic: 'ri-mém-ber de séi-ing: prác-tis méics pér-fect',
            contextNote: 'Introduce una máxima o dicho célebre'
          }
        ]
      },
      {
        id: '3.5-quotation-marks',
        number: '3.5',
        titleEnglish: 'Quotation Marks (“ ”)',
        titleSpanish: 'Comillas (“ ”)',
        ruleExplanationEnglish: 'Enclose direct speech, exact citations, or titles of short works like poems and articles.',
        ruleExplanationSpanish: 'Encierran palabras textuales, discursos directos o títulos de artículos y poemas breves.',
        badge: 'Comillas',
        examples: [
          {
            english: 'She said, “I will be there soon.”',
            spanish: 'Ella dijo: "Estaré allí pronto."',
            spanishPhonetic: 'shi sed, ái uíl bi der suun',
            contextNote: 'Quotation marks: encierran la declaración textual'
          },
          {
            english: 'Have you read “The Road Not Taken” by Robert Frost?',
            spanish: '¿Has leído "The Road Not Taken" de Robert Frost?',
            spanishPhonetic: 'jav iu red de róud not téi-ken bái ró-bert frost',
            contextNote: 'Título de poema destacado entre comillas'
          }
        ]
      },
      {
        id: '3.6-apostrophe',
        number: '3.6',
        titleEnglish: 'Apostrophe (‘ / ’)',
        titleSpanish: 'Apóstrofo (‘)',
        ruleExplanationEnglish: 'Indicates possession (e.g. cat\'s toy) or contraction where letters/numbers are omitted (e.g. don\'t).',
        ruleExplanationSpanish: 'Indica posesión del sustantivo (cat\'s) o contracciones donde se suprimen letras (don\'t).',
        badge: 'Apóstrofo',
        examples: [
          {
            english: 'The cat’s toy.',
            spanish: 'El juguete del gato. (Posesión genitiva)',
            spanishPhonetic: 'de cats tói',
            contextNote: 'Apostrophe \'s indica pertenencia del gato'
          },
          {
            english: 'Do not becomes don’t.',
            spanish: 'Do not se convierte en don\'t. (Contracción)',
            spanishPhonetic: 'du not bi-cáms dóunt',
            contextNote: 'Contraction: el apóstrofo sustituye la letra "o" omitida'
          }
        ]
      },
      {
        id: '3.7-question-mark',
        number: '3.7',
        titleEnglish: 'Question Mark (?)',
        titleSpanish: 'Signo de Interrogación (?)',
        ruleExplanationEnglish: 'Used strictly at the end of an interrogative sentence in English. In English, there is NO opening question mark (¿).',
        ruleExplanationSpanish: 'Se coloca únicamente al final de la oración interrogativa. ¡En inglés NO existe el signo de apertura (¿)!',
        badge: 'Interrogación',
        examples: [
          {
            english: 'Are you coming to the party?',
            spanish: '¿Vienes a la fiesta?',
            spanishPhonetic: 'ar iu cá-ming tu de pár-ti',
            contextNote: 'Regla: sólo se pone el signo (?) de cierre al final'
          }
        ]
      },
      {
        id: '3.8-exclamation-mark',
        number: '3.8',
        titleEnglish: 'Exclamation Mark (!)',
        titleSpanish: 'Signo de Exclamación (!)',
        ruleExplanationEnglish: 'Placed at the end to express strong emotion, warning, command, or surprise. In English, there is NO opening mark (¡).',
        ruleExplanationSpanish: 'Se coloca al final para transmitir sorpresa, alarma o vehemencia. En inglés NO se usa el signo de apertura (¡).',
        badge: 'Exclamación',
        examples: [
          {
            english: 'Watch out!',
            spanish: '¡Cuidado! / ¡Atento!',
            spanishPhonetic: 'uátch áut',
            contextNote: 'Exclamation mark (!) únicamente de cierre al final'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SECCIÓN 4: COMMON ERRORS (ERRORES COMUNES EN INGLÉS)
  // =========================================================================
  {
    id: 'common-errors',
    sectionNumber: '4',
    titleEnglish: 'Common Errors & Pitfalls',
    titleSpanish: 'Errores Gramaticales Comunes y Confusiones',
    descriptionSpanish: 'Pares de palabras homófonas o de ortografía parecida que generan errores recurrentes, con su regla mnemotécnica y pronunciación exacta.',
    subtopics: [
      {
        id: '4.1-its-vs-its',
        number: '4.1',
        titleEnglish: 'Its vs. It’s',
        titleSpanish: 'Its (Posesivo) vs. It’s (Contracción de "It is")',
        ruleExplanationEnglish: '“Its” is the possessive pronoun (no apostrophe). “It’s” is the contraction for “it is” or “it has”.',
        ruleExplanationSpanish: '"Its" sin apóstrofo es el adjetivo posesivo ("su"). "It’s" con apóstrofo es la contracción obligatoria de "it is" ("es" o "está").',
        badge: 'Its / It’s',
        examples: [
          {
            english: 'The dog wagged its tail.',
            spanish: 'El perro movió su cola. (Posesivo sin apóstrofo)',
            spanishPhonetic: 'de dog uagd its téil',
            contextNote: 'Usa "its" porque se refiere a la cola del perro'
          },
          {
            english: 'It’s going to rain.',
            spanish: 'Va a llover / Está por llover. (Contracción de "It is")',
            spanishPhonetic: 'its góu-ing tu réin',
            contextNote: 'Prueba infalible: si puedes sustituirlo por "it is", lleva apóstrofo (it\'s)'
          }
        ]
      },
      {
        id: '4.2-there-their-theyre',
        number: '4.2',
        titleEnglish: 'There vs. Their vs. They’re',
        titleSpanish: 'There (Lugar) vs. Their (Posesivo) vs. They’re (Ellos son/están)',
        ruleExplanationEnglish: '“There” refers to a place or existence. “Their” is possessive (belonging to them). “They’re” is the contraction of “they are”.',
        ruleExplanationSpanish: '"There" indica lugar ("allí") o existencia ("there is"). "Their" indica posesión ("su/sus de ellos"). "They’re" significa "ellos son o están".',
        badge: 'Trío Clave',
        examples: [
          {
            english: 'The book is over there.',
            spanish: 'El libro está por allí. (Ubicación física / lugar)',
            spanishPhonetic: 'de buk iz óu-ver der',
            contextNote: 'There = lugar (apunta hacia allá)'
          },
          {
            english: 'Their house is big.',
            spanish: 'La casa de ellos es grande. (Posesivo de ellos)',
            spanishPhonetic: 'der jáus iz big',
            contextNote: 'Their = pertenencia de un grupo de personas'
          },
          {
            english: 'They’re going to the park.',
            spanish: 'Ellos están yendo al parque. (Contracción de "They are")',
            spanishPhonetic: 'der góu-ing tu de park',
            contextNote: 'They’re = ellos son o ellos están'
          }
        ]
      },
      {
        id: '4.3-your-vs-youre',
        number: '4.3',
        titleEnglish: 'Your vs. You’re',
        titleSpanish: 'Your (Tu/Tuyo) vs. You’re (Tú eres/estás)',
        ruleExplanationEnglish: '“Your” is possessive indicating something belongs to you. “You’re” is the contraction of “you are”.',
        ruleExplanationSpanish: '"Your" es posesivo ("tu auto"). "You’re" es la contracción de "you are" ("tú eres" o "tú estás").',
        badge: 'Your / You’re',
        examples: [
          {
            english: 'Is this your car?',
            spanish: '¿Es este tu auto? (Posesión)',
            spanishPhonetic: 'iz dis ior car',
            contextNote: 'Your acompaña al sustantivo que te pertenece'
          },
          {
            english: 'You’re very kind.',
            spanish: 'Tú eres muy amable. (Contracción de "You are")',
            spanishPhonetic: 'ior vé-ri cáind',
            contextNote: 'Prueba: si puedes decir "you are", escribe "you\'re"'
          }
        ]
      },
      {
        id: '4.4-to-too-two',
        number: '4.4',
        titleEnglish: 'To vs. Too vs. Two',
        titleSpanish: 'To (Preposición) vs. Too (También/Demasiado) vs. Two (Número 2)',
        ruleExplanationEnglish: '“To” is a preposition or infinitive marker. “Too” means “also” or “excessively”. “Two” is the numeral 2.',
        ruleExplanationSpanish: '"To" es preposición o marcador de infinitivo. "Too" con doble "o" significa "también" o "demasiado". "Two" es el número dos.',
        badge: 'To / Too / Two',
        examples: [
          {
            english: 'I’m going to the store.',
            spanish: 'Voy a la tienda. (Preposición de dirección)',
            spanishPhonetic: 'áim góu-ing tu de stor',
            contextNote: 'To = hacia / a'
          },
          {
            english: 'She was too tired.',
            spanish: 'Ella estaba demasiado cansada. (Intensificador de exceso)',
            spanishPhonetic: 'shi uoz tu tái-erd',
            contextNote: 'Too = en exceso / demasiado'
          },
          {
            english: 'I have two cats.',
            spanish: 'Tengo dos gatos. (Número cardinal 2)',
            spanishPhonetic: 'ái jav tu cats',
            contextNote: 'Two = la cifra 2'
          }
        ]
      },
      {
        id: '4.5-affect-vs-effect',
        number: '4.5',
        titleEnglish: 'Affect vs. Effect',
        titleSpanish: 'Affect (Verbo: Afectar) vs. Effect (Sustantivo: Efecto)',
        ruleExplanationEnglish: '“Affect” is almost always a verb meaning to influence. “Effect” is almost always a noun meaning the result or outcome.',
        ruleExplanationSpanish: '"Affect" con "A" es el verbo (afectar o influir). "Effect" con "E" es el sustantivo (el resultado o efecto producido).',
        badge: 'Affect / Effect',
        examples: [
          {
            english: 'The weather will affect our plans.',
            spanish: 'El clima afectará nuestros planes. (Verbo de acción)',
            spanishPhonetic: 'de ué-der uíl a-féct áuer plans',
            contextNote: 'Affect = acción de influenciar'
          },
          {
            english: 'The effect of the new law was significant.',
            spanish: 'El efecto de la nueva ley fue significativo. (Sustantivo resultado)',
            spanishPhonetic: 'de i-féct ov de niu lo uoz sig-ní-fi-cant',
            contextNote: 'The effect = el impacto o consecuencia (sustantivo)'
          }
        ]
      },
      {
        id: '4.6-then-vs-than',
        number: '4.6',
        titleEnglish: 'Then vs. Than',
        titleSpanish: 'Then (Tiempo: Luego/Entonces) vs. Than (Comparación: Que)',
        ruleExplanationEnglish: '“Then” is used for time sequence or consequence. “Than” is used strictly for comparisons.',
        ruleExplanationSpanish: '"Then" (con e) indica tiempo ("luego", "después"). "Than" (con a) se usa exclusivamente para comparar ("más que").',
        badge: 'Then / Than',
        examples: [
          {
            english: 'We will go shopping, then we will eat.',
            spanish: 'Iremos de compras, luego comeremos. (Secuencia temporal)',
            spanishPhonetic: 'ui uíl góu shó-ping, den ui uíl iit',
            contextNote: 'Then = en ese momento o a continuación'
          },
          {
            english: 'She is taller than her brother.',
            spanish: 'Ella es más alta que su hermano. (Comparación)',
            spanishPhonetic: 'shi iz tó-ler dan jer brá-der',
            contextNote: 'Than = conector de comparación (más/menos ... que)'
          }
        ]
      },
      {
        id: '4.7-who-vs-whom',
        number: '4.7',
        titleEnglish: 'Who vs. Whom',
        titleSpanish: 'Who (Sujeto: Quién) vs. Whom (Objeto: A quién)',
        ruleExplanationEnglish: '“Who” serves as the subject of the clause (he/she/they). “Whom” serves as the grammatical object (him/her/them).',
        ruleExplanationSpanish: '"Who" funciona como sujeto que hace la acción (reemplazable por He/She). "Whom" es el objeto que recibe la acción (reemplazable por Him/Her).',
        badge: 'Who / Whom',
        examples: [
          {
            english: 'Who is coming to the party?',
            spanish: '¿Quién viene a la fiesta? (Sujeto de la acción de venir)',
            spanishPhonetic: 'ju iz cá-ming tu de pár-ti',
            contextNote: 'Respuesta tipo: "He is coming" -> corresponde WHO'
          },
          {
            english: 'Whom did you invite?',
            spanish: '¿A quién invitaste? (Objeto que recibe la invitación)',
            spanishPhonetic: 'jum did iu in-váit',
            contextNote: 'Respuesta tipo: "I invited him" -> corresponde WHOM'
          }
        ]
      },
      {
        id: '4.8-fewer-vs-less',
        number: '4.8',
        titleEnglish: 'Fewer vs. Less',
        titleSpanish: 'Fewer (Para cosas contables) vs. Less (Para incontables)',
        ruleExplanationEnglish: '“Fewer” is used with plural countable items. “Less” is used with singular mass or uncountable nouns.',
        ruleExplanationSpanish: '"Fewer" se usa con sustantivos que se pueden contar individualmente (manzanas, soldados). "Less" se usa con incontables (agua, tiempo, dinero).',
        badge: 'Fewer / Less',
        examples: [
          {
            english: 'There are fewer apples in the basket.',
            spanish: 'Hay menos manzanas en la canasta. (Contable en plural: apples)',
            spanishPhonetic: 'der ar fiú-er á-pls in de bás-ket',
            contextNote: 'Fewer con sustantivos con "s" contables'
          },
          {
            english: 'There is less water in the bottle.',
            spanish: 'Hay menos agua en la botella. (Incontable: water)',
            spanishPhonetic: 'der iz les uó-ter in de bó-tl',
            contextNote: 'Less con líquidos, masas y conceptos sin plural'
          }
        ]
      },
      {
        id: '4.9-me-vs-i',
        number: '4.9',
        titleEnglish: 'Me vs. I',
        titleSpanish: 'I (Sujeto: Yo) vs. Me (Objeto: A mí / Me)',
        ruleExplanationEnglish: 'Use “I” as the grammatical subject performing the verb. Use “me” as the object receiving the action or following a preposition.',
        ruleExplanationSpanish: 'Usa "I" cuando ejecutas la acción. Usa "me" cuando recibes la acción o va detrás de una preposición (for me, to me).',
        badge: 'Me / I',
        examples: [
          {
            english: 'John and I went to the store.',
            spanish: 'John y yo fuimos a la tienda. (Sujetos de la acción)',
            spanishPhonetic: 'dshon end ái uent tu de stor',
            contextNote: 'Prueba: quita a John; dices "I went to the store", nunca "Me went"'
          },
          {
            english: 'The gift was for John and me.',
            spanish: 'El regalo era para John y para mí. (Objeto tras la preposición "for")',
            spanishPhonetic: 'de gift uoz for dshon end mi',
            contextNote: 'Prueba: quita a John; dices "for me", nunca "for I"'
          }
        ]
      },
      {
        id: '4.10-who-vs-that',
        number: '4.10',
        titleEnglish: 'Who vs. That',
        titleSpanish: 'Who (Para personas) vs. That (Para cosas y animales)',
        ruleExplanationEnglish: 'Use “who” when referring to human beings. Use “that” when referring to objects, concepts, or things.',
        ruleExplanationSpanish: 'Usa "who" cuando te refieres a seres humanos o personas con nombre. Usa "that" cuando te refieres a cosas, animales u objetos inanimados.',
        badge: 'Who / That',
        examples: [
          {
            english: 'The person who called me.',
            spanish: 'La persona que me llamó. (Ser humano -> who)',
            spanishPhonetic: 'de pér-son ju cold mi',
            contextNote: 'Para personas se debe priorizar "who"'
          },
          {
            english: 'The book that I read.',
            spanish: 'El libro que leí. (Objeto inanimado -> that)',
            spanishPhonetic: 'de buk dat ái red',
            contextNote: 'Para libros, autos u objetos se utiliza "that"'
          }
        ]
      }
    ]
  }
];
