// =========================================================================
// DATA: PRONOMBRES PERSONALES EN INGLÉS Y SU USO EN TODOS LOS TIEMPOS VERBALES
// Guía Doctrinal y Pedagógica Completa para el Laboratorio de Inglés (A1 - B2 STANAG 6001)
// Incluye: Pronombres Sujeto, Objeto, Posesivos, Reflexivos y Matriz Completa
// de Concordancia por Tiempos Verbales con Pronunciación Fonética y Ejemplos de Audio.
// =========================================================================

export interface PersonalPronounInfo {
  id: string;
  subject: string;
  subjectIpa: string;
  subjectPhonetic: string;
  person: '1st_singular' | '2nd_singular' | '3rd_singular_m' | '3rd_singular_f' | '3rd_singular_n' | '1st_plural' | '2nd_plural' | '3rd_plural';
  personLabel: string;
  spanishTranslation: string;
  object: string;
  objectPhonetic: string;
  objectTranslation: string;
  possessiveAdjective: string;
  possessiveAdjectivePhonetic: string;
  possessivePronoun: string;
  possessivePronounPhonetic: string;
  reflexive: string;
  reflexivePhonetic: string;
  usageNotes: string;
  commonMistakes: string;
}

export const PERSONAL_PRONOUNS_LIST: PersonalPronounInfo[] = [
  {
    id: 'pronoun-i',
    subject: 'I',
    subjectIpa: '/aɪ/',
    subjectPhonetic: 'ái',
    person: '1st_singular',
    personLabel: '1ª Persona Singular',
    spanishTranslation: 'Yo',
    object: 'me',
    objectPhonetic: 'mi',
    objectTranslation: 'me / a mí',
    possessiveAdjective: 'my',
    possessiveAdjectivePhonetic: 'mái',
    possessivePronoun: 'mine',
    possessivePronounPhonetic: 'máin',
    reflexive: 'myself',
    reflexivePhonetic: 'mai-sélf',
    usageNotes: 'Siempre se escribe en MAYÚSCULA en inglés, sin importar en qué parte de la oración se encuentre. En presente simple usa "am" (To Be) y verbos base sin -s. En pasado simple usa "was".',
    commonMistakes: 'Nunca escribir "i" en minúscula. No decir "Me went to the base" sino "I went to the base".'
  },
  {
    id: 'pronoun-you-sing',
    subject: 'You',
    subjectIpa: '/juː/',
    subjectPhonetic: 'iú',
    person: '2nd_singular',
    personLabel: '2ª Persona Singular (Tú / Vos / Usted)',
    spanishTranslation: 'Tú / Vos / Usted',
    object: 'you',
    objectPhonetic: 'iú',
    objectTranslation: 'te / a ti / a usted',
    possessiveAdjective: 'your',
    possessiveAdjectivePhonetic: 'iór',
    possessivePronoun: 'yours',
    possessivePronounPhonetic: 'iórs',
    reflexive: 'yourself',
    reflexivePhonetic: 'ior-sélf',
    usageNotes: 'Sirve tanto para el trato informal ("tú/vos") como formal ("usted"). Gramaticalmente siempre concuerda en plural: usa "are" (presente) y "were" (pasado).',
    commonMistakes: 'No usar "You was" (error grave en exámenes militares); siempre debe ser "You were".'
  },
  {
    id: 'pronoun-he',
    subject: 'He',
    subjectIpa: '/hiː/',
    subjectPhonetic: 'jí',
    person: '3rd_singular_m',
    personLabel: '3ª Persona Singular Masculino',
    spanishTranslation: 'Él',
    object: 'him',
    objectPhonetic: 'jim',
    objectTranslation: 'le / lo / a él',
    possessiveAdjective: 'his',
    possessiveAdjectivePhonetic: 'jis',
    possessivePronoun: 'his',
    possessivePronounPhonetic: 'jis',
    reflexive: 'himself',
    reflexivePhonetic: 'jim-sélf',
    usageNotes: 'Se usa para hombres o niños. En Presente Simple requiere "-s/-es" en el verbo afirmativo y el auxiliar "does/doesn\'t". Con To Be usa "is" (presente) y "was" (pasado). Con To Have usa "has".',
    commonMistakes: 'Omitir la "-s" en presente simple (*He work ❌ -> He works ✔️) o usar *He don\'t ❌ (lo correcto es He doesn\'t ✔️).'
  },
  {
    id: 'pronoun-she',
    subject: 'She',
    subjectIpa: '/ʃiː/',
    subjectPhonetic: 'shí',
    person: '3rd_singular_f',
    personLabel: '3ª Persona Singular Femenino',
    spanishTranslation: 'Ella',
    object: 'her',
    objectPhonetic: 'jer',
    objectTranslation: 'la / le / a ella',
    possessiveAdjective: 'her',
    possessiveAdjectivePhonetic: 'jer',
    possessivePronoun: 'hers',
    possessivePronounPhonetic: 'jers',
    reflexive: 'herself',
    reflexivePhonetic: 'jer-sélf',
    usageNotes: 'Se usa para mujeres o niñas. Mismas reglas de 3ª persona singular: agrega "-s/-es" en presente simple, usa "is/was" y "has/hasn\'t".',
    commonMistakes: 'Confundir el posesivo "her" (de ella) con "his" (de él). Recordar: "She wears her uniform".'
  },
  {
    id: 'pronoun-it',
    subject: 'It',
    subjectIpa: '/ɪt/',
    subjectPhonetic: 'it',
    person: '3rd_singular_n',
    personLabel: '3ª Persona Singular Neutro',
    spanishTranslation: 'Ello / Eso (Cosas, Animales, Clima, Hora)',
    object: 'it',
    objectPhonetic: 'it',
    objectTranslation: 'lo / la / le / a ello',
    possessiveAdjective: 'its',
    possessiveAdjectivePhonetic: 'its',
    possessivePronoun: 'its',
    possessivePronounPhonetic: 'its',
    reflexive: 'itself',
    reflexivePhonetic: 'it-sélf',
    usageNotes: 'Indispensable como pronombre sujeto impersonal en inglés (en español es tácito): "It is raining" (Llueve), "It is 0800 hours" (Son las 08:00). Mismas reglas de 3ª persona singular ("is/was", "has").',
    commonMistakes: 'Confundir "its" (posesivo sin apóstrofe: its engine) con "it\'s" (contracción de it is o it has). En inglés NO se puede omitir el sujeto (*Is raining ❌ -> It is raining ✔️).'
  },
  {
    id: 'pronoun-we',
    subject: 'We',
    subjectIpa: '/wiː/',
    subjectPhonetic: 'uí',
    person: '1st_plural',
    personLabel: '1ª Persona Plural',
    spanishTranslation: 'Nosotros / Nosotras',
    object: 'us',
    objectPhonetic: 'as',
    objectTranslation: 'nos / a nosotros',
    possessiveAdjective: 'our',
    possessiveAdjectivePhonetic: 'áuer',
    possessivePronoun: 'ours',
    possessivePronounPhonetic: 'áuers',
    reflexive: 'ourselves',
    reflexivePhonetic: 'auer-sélvs',
    usageNotes: 'Incluye al hablante y al menos otra persona. Concuerda con verbos plurales: "are" (presente), "were" (pasado), "have" (perfectos) y verbo base sin "-s" en presente simple.',
    commonMistakes: 'Confundir el objeto "us" con el adjetivo "our". "Give us the map" (Danos) vs "Our map" (Nuestro mapa).'
  },
  {
    id: 'pronoun-you-plur',
    subject: 'You (plural)',
    subjectIpa: '/juː/',
    subjectPhonetic: 'iú',
    person: '2nd_plural',
    personLabel: '2ª Persona Plural (Vosotros / Ustedes)',
    spanishTranslation: 'Vosotros / Ustedes',
    object: 'you',
    objectPhonetic: 'iú',
    objectTranslation: 'os / los / a ustedes',
    possessiveAdjective: 'your',
    possessiveAdjectivePhonetic: 'iór',
    possessivePronoun: 'yours',
    possessivePronounPhonetic: 'iórs',
    reflexive: 'yourselves',
    reflexivePhonetic: 'ior-sélvs',
    usageNotes: 'Forma idéntica al singular en sujeto y objeto, pero en reflexivo cambia a "yourselves" (plural). Concuerda siempre con "are" y "were".',
    commonMistakes: 'Escribir *yourself* cuando se dirige a un grupo o pelotón (debe ser "yourselves").'
  },
  {
    id: 'pronoun-they',
    subject: 'They',
    subjectIpa: '/ðeɪ/',
    subjectPhonetic: 'déi',
    person: '3rd_plural',
    personLabel: '3ª Persona Plural',
    spanishTranslation: 'Ellos / Ellas / Cosas en plural',
    object: 'them',
    objectPhonetic: 'dem',
    objectTranslation: 'los / las / les / a ellos',
    possessiveAdjective: 'their',
    possessiveAdjectivePhonetic: 'dér',
    possessivePronoun: 'theirs',
    possessivePronounPhonetic: 'dérs',
    reflexive: 'themselves',
    reflexivePhonetic: 'dem-sélvs',
    usageNotes: 'Se usa tanto para personas masculinas/femeninas en plural como para objetos o vehículos en plural ("The tanks? They are ready"). Concuerda con "are", "were", "have" y auxiliares plurales ("do / don\'t").',
    commonMistakes: 'Usar "they was" ❌ en vez de "they were" ✔️. Confundir "their" (posesivo), "there" (allí) y "they\'re" (ellos son/están).'
  }
];

// =========================================================================
// MATRIZ DE USO DE LOS PRONOMBRES EN TODOS LOS TIEMPOS VERBALES
// Cubre los 12 tiempos verbales de la gramática inglesa + Be Going To + Modales
// =========================================================================

export interface TensePronounBehavior {
  tenseId: string;
  tenseNameSpanish: string;
  tenseNameEnglish: string;
  timeCategory: 'present' | 'past' | 'future' | 'conditional';
  formulaSummary: string;
  pronounBehaviors: Array<{
    pronounGroup: string; // e.g. "I", "He / She / It", "You / We / They"
    pronounGroupLabel: string;
    auxiliaryAffirmative: string;
    auxiliaryNegative: string;
    verbForm: string;
    exampleAffirmative: {
      english: string;
      spanish: string;
      phonetic: string;
    };
    exampleNegative: {
      english: string;
      spanish: string;
      phonetic: string;
    };
    exampleQuestion: {
      english: string;
      spanish: string;
      phonetic: string;
    };
  }>;
  tacticalNote: string;
}

export const TENSES_PRONOUN_MATRIX: TensePronounBehavior[] = [
  // 1. PRESENTE SIMPLE (PRESENT SIMPLE)
  {
    tenseId: 'present-simple',
    tenseNameSpanish: 'Presente Simple',
    tenseNameEnglish: 'Present Simple',
    timeCategory: 'present',
    formulaSummary: 'Hábitos, rutinas diarias y hechos permanentes. ¡Cuidado crucial con la 3ª persona singular (he/she/it)!',
    tacticalNote: 'En el examen militar IESE, la concordancia de 3ª persona (-s/-es, does/doesn\'t) es el error penalizado más común.',
    pronounBehaviors: [
      {
        pronounGroup: 'I',
        pronounGroupLabel: '1ª Persona Singular (I)',
        auxiliaryAffirmative: '(Ninguno)',
        auxiliaryNegative: 'do not (don\'t)',
        verbForm: 'Verbo base (infinitive without to)',
        exampleAffirmative: {
          english: 'I report to the command post every morning at 0700.',
          spanish: 'Yo me presento en el puesto de mando cada mañana a las 0700.',
          phonetic: 'ái ri-pórt tu de ko-mánd poust év-ri mór-ning at sí-ro sé-ven ján-dred'
        },
        exampleNegative: {
          english: 'I do not leave the perimeter without authorization.',
          spanish: 'Yo no abandono el perímetro sin autorización.',
          phonetic: 'ái du not liiv de pe-rí-mi-ter ui-dáut o-zo-rai-zéi-shon'
        },
        exampleQuestion: {
          english: 'Do I have the correct radio frequency?',
          spanish: '¿Tengo la frecuencia de radio correcta?',
          phonetic: 'du ái jav de ko-rrékt réi-di-ou frí-kuen-si?'
        }
      },
      {
        pronounGroup: 'He / She / It',
        pronounGroupLabel: '3ª Persona Singular (He, She, It) — ¡REGLA DE ORO: +S / +ES!',
        auxiliaryAffirmative: '(Ninguno, pero verbo agrega -s / -es / -ies)',
        auxiliaryNegative: 'does not (doesn\'t) + verbo base',
        verbForm: 'Verbo con -s/-es (afirm.) / Verbo base sin -s (neg./preg.)',
        exampleAffirmative: {
          english: 'Captain Torres operates the communications radar.',
          spanish: 'El Capitán Torres opera el radar de comunicaciones.',
          phonetic: 'káp-tin tó-rres ó-pe-reits de ko-miu-ni-kéi-shons réi-dar'
        },
        exampleNegative: {
          english: 'She does not deviate from standard operating procedures.',
          spanish: 'Ella no se desvía de los procedimientos operativos estándar.',
          phonetic: 'shi das not dí-vi-eit from stán-dard ó-pe-rei-ting pro-sí-dchurs'
        },
        exampleQuestion: {
          english: 'Does the vehicle run on diesel fuel?',
          spanish: '¿El vehículo funciona con combustible diésel?',
          phonetic: 'das de ví-i-kl ran on dí-sl fiú-el?'
        }
      },
      {
        pronounGroup: 'You / We / They',
        pronounGroupLabel: 'Plurales y 2ª Persona (You, We, They)',
        auxiliaryAffirmative: '(Ninguno)',
        auxiliaryNegative: 'do not (don\'t)',
        verbForm: 'Verbo base (sin -s)',
        exampleAffirmative: {
          english: 'We patrol the eastern sector twice a day.',
          spanish: 'Nosotros patrullamos el sector oriental dos veces al día.',
          phonetic: 'ui pa-tróul de íis-tern sék-tor tuáis a déi'
        },
        exampleNegative: {
          english: 'They do not carry unauthorized electronic devices.',
          spanish: 'Ellos no portan dispositivos electrónicos no autorizados.',
          phonetic: 'déi du not ká-rri an-ó-zo-raist e-lek-tró-nik di-vái-sis'
        },
        exampleQuestion: {
          english: 'Do you understand the tactical order?',
          spanish: '¿Entiendes tú / Entienden ustedes la orden táctica?',
          phonetic: 'du iu an-der-stánd de ták-ti-kl ór-der?'
        }
      }
    ]
  },

  // 2. PRESENTE SIMPLE CON VERBO TO BE (AM / IS / ARE)
  {
    tenseId: 'present-to-be',
    tenseNameSpanish: 'Presente con Verbo TO BE (Ser / Estar)',
    tenseNameEnglish: 'Present Simple (Verb TO BE)',
    timeCategory: 'present',
    formulaSummary: 'Identidad, rango, estado, hora, clima o ubicación. Se divide en 3 formas exclusivas por pronombre: AM, IS, ARE.',
    tacticalNote: 'El verbo To Be es autosuficiente: no usa "do" ni "does" para preguntas o negaciones. Hace inversión directa.',
    pronounBehaviors: [
      {
        pronounGroup: 'I',
        pronounGroupLabel: '1ª Persona Singular: I AM (\'m)',
        auxiliaryAffirmative: 'am (\'m)',
        auxiliaryNegative: 'am not (\'m not)',
        verbForm: 'am / am not',
        exampleAffirmative: {
          english: 'I am on duty at Checkpoint Bravo.',
          spanish: 'Yo estoy de guardia en el Punto de Control Bravo.',
          phonetic: 'ái am on diú-ti at chék-point brá-vou'
        },
        exampleNegative: {
          english: 'I am not available for the night patrol.',
          spanish: 'Yo no estoy disponible para la patrulla nocturna.',
          phonetic: 'ái am not a-véi-la-bl for de náit pa-tróul'
        },
        exampleQuestion: {
          english: 'Am I authorized to enter this secure bunker?',
          spanish: '¿Estoy yo autorizado para entrar a este búnker seguro?',
          phonetic: 'am ái ó-zo-raist tu én-ter dis si-kiúr bán-ker?'
        }
      },
      {
        pronounGroup: 'He / She / It',
        pronounGroupLabel: '3ª Persona Singular: HE / SHE / IT IS (\'s)',
        auxiliaryAffirmative: 'is (\'s)',
        auxiliaryNegative: 'is not (isn\'t)',
        verbForm: 'is / isn\'t',
        exampleAffirmative: {
          english: 'He is the commanding officer of Alpha Platoon.',
          spanish: 'Él es el oficial al mando de la Sección Alfa.',
          phonetic: 'ji is de ko-mán-ding ó-fi-ser of ál-fa pla-túun'
        },
        exampleNegative: {
          english: 'The perimeter is not breached.',
          spanish: 'El perímetro no está comprometido.',
          phonetic: 'de pe-rí-mi-ter is not briícht'
        },
        exampleQuestion: {
          english: 'Is she ready for the inspection?',
          spanish: '¿Está ella lista para la revista militar?',
          phonetic: 'is shi ré-di for de in-spék-shon?'
        }
      },
      {
        pronounGroup: 'You / We / They',
        pronounGroupLabel: 'Plurales y 2ª Persona: YOU / WE / THEY ARE (\'re)',
        auxiliaryAffirmative: 'are (\'re)',
        auxiliaryNegative: 'are not (aren\'t)',
        verbForm: 'are / aren\'t',
        exampleAffirmative: {
          english: 'We are ready to deploy to the tactical assembly area.',
          spanish: 'Nosotros estamos listos para desplegarnos al área de reunión táctica.',
          phonetic: 'ui ar ré-di tu di-plói tu de ták-ti-kl a-sém-bli é-ri-a'
        },
        exampleNegative: {
          english: 'They are not in uniform today.',
          spanish: 'Ellos no están con uniforme hoy.',
          phonetic: 'déi ar not in iú-ni-form tu-déi'
        },
        exampleQuestion: {
          english: 'Are you stationed at the northern airfield?',
          spanish: '¿Estás tú / Están ustedes destinados en el aeródromo norte?',
          phonetic: 'ar iu stéi-shond at de nór-dern ér-fiild?'
        }
      }
    ]
  },

  // 3. PRESENTE CONTINUO (PRESENT CONTINUOUS)
  {
    tenseId: 'present-continuous',
    tenseNameSpanish: 'Presente Continuo',
    tenseNameEnglish: 'Present Continuous',
    timeCategory: 'present',
    formulaSummary: 'Sujeto + AM / IS / ARE + Verbo en -ING. Acciones que ocurren exactamente ahora o en curso.',
    tacticalNote: 'Crucial en transmisiones de radio de SITREP: describe qué está haciendo la tropa en tiempo real.',
    pronounBehaviors: [
      {
        pronounGroup: 'I',
        pronounGroupLabel: 'I AM + -ING',
        auxiliaryAffirmative: 'am (\'m)',
        auxiliaryNegative: 'am not',
        verbForm: 'am + Verbo-ing',
        exampleAffirmative: {
          english: 'I am transmitting coordinates to battalion headquarters.',
          spanish: 'Yo estoy transmitiendo coordenadas al cuartel de batallón.',
          phonetic: 'ái am trans-mí-ting kou-ór-di-neits tu ba-tá-li-on jed-kuór-ters'
        },
        exampleNegative: {
          english: 'I am not advancing without visual confirmation.',
          spanish: 'Yo no estoy avanzando sin confirmación visual.',
          phonetic: 'ái am not ad-ván-sing ui-dáut ví-zhu-al kon-fer-méi-shon'
        },
        exampleQuestion: {
          english: 'Am I reading the right grid coordinates?',
          spanish: '¿Estoy leyendo las coordenadas de cuadrícula correctas?',
          phonetic: 'am ái ríi-ding de ráit grid kou-ór-di-neits?'
        }
      },
      {
        pronounGroup: 'He / She / It',
        pronounGroupLabel: 'HE / SHE / IT IS + -ING',
        auxiliaryAffirmative: 'is (\'s)',
        auxiliaryNegative: 'is not (isn\'t)',
        verbForm: 'is + Verbo-ing',
        exampleAffirmative: {
          english: 'Sergeant Davis is inspecting the tactical vehicles.',
          spanish: 'El Sargento Davis está revistando los vehículos tácticos.',
          phonetic: 'sár-dchent déi-vis is in-spék-ting de ták-ti-kl ví-i-kls'
        },
        exampleNegative: {
          english: 'The convoy is not moving due to heavy fog.',
          spanish: 'El convoy no se está moviendo debido a la densa niebla.',
          phonetic: 'de kón-voi is not mú-ving diú tu jé-vi fog'
        },
        exampleQuestion: {
          english: 'Is she monitoring the radio network?',
          spanish: '¿Está ella monitoreando la red de radio?',
          phonetic: 'is shi mó-ni-to-ring de réi-di-ou nét-uerk?'
        }
      },
      {
        pronounGroup: 'You / We / They',
        pronounGroupLabel: 'YOU / WE / THEY ARE + -ING',
        auxiliaryAffirmative: 'are (\'re)',
        auxiliaryNegative: 'are not (aren\'t)',
        verbForm: 'are + Verbo-ing',
        exampleAffirmative: {
          english: 'We are securing the landing zone for the helicopter.',
          spanish: 'Nosotros estamos asegurando la zona de aterrizaje para el helicóptero.',
          phonetic: 'ui ar si-kiú-ring de lán-ding zoun for de jé-li-kop-ter'
        },
        exampleNegative: {
          english: 'They are not retreating from their defensive positions.',
          spanish: 'Ellos no están replegándose de sus posiciones defensivas.',
          phonetic: 'déi ar not ri-tríi-ting from dér di-fén-siv po-sí-shons'
        },
        exampleQuestion: {
          english: 'Are you approaching the designated checkpoint?',
          spanish: '¿Te estás aproximando al punto de control designado?',
          phonetic: 'ar iu a-próu-ching de dé-sig-nei-tid chék-point?'
        }
      }
    ]
  },

  // 4. PASADO SIMPLE (PAST SIMPLE - REGULARES / IRREGULARES)
  {
    tenseId: 'past-simple-action',
    tenseNameSpanish: 'Pasado Simple (Verbos de Acción)',
    tenseNameEnglish: 'Past Simple (Action Verbs)',
    timeCategory: 'past',
    formulaSummary: 'Acciones finalizadas en un momento específico del pasado. ¡Todos los pronombres usan la MISMA forma de verbo y el auxiliar DID!',
    tacticalNote: 'En afirmativo el verbo cambia a pasado (worked, went). En negativo y pregunta vuelve obligatoriamente a forma base porque "did" ya marca el pasado.',
    pronounBehaviors: [
      {
        pronounGroup: 'All Pronouns (I, You, He, She, It, We, They)',
        pronounGroupLabel: 'TODOS los Pronombres (Forma Invariable en Acción)',
        auxiliaryAffirmative: '(Ninguno, verbo en pasado: -ed o irregular)',
        auxiliaryNegative: 'did not (didn\'t) + verbo base',
        verbForm: 'Verbo en pasado (afirm.) / Verbo base (neg./preg.)',
        exampleAffirmative: {
          english: 'He completed the tactical road march yesterday.',
          spanish: 'Él completó la marcha táctica ayer.',
          phonetic: 'ji kom-plíi-tid de ták-ti-kl roud march iés-ter-dei'
        },
        exampleNegative: {
          english: 'We did not identify any enemy presence in the valley.',
          spanish: 'Nosotros no identificamos presencia enemiga en el valle.',
          phonetic: 'ui did not ai-dén-ti-fai é-ni é-ne-mi pré-sens in de vá-li'
        },
        exampleQuestion: {
          english: 'Did they acknowledge receipt of the order?',
          spanish: '¿Acusaron recibo ellos de la orden?',
          phonetic: 'did déi ak-nó-lids ri-síit of de ór-der?'
        }
      }
    ]
  },

  // 5. PASADO SIMPLE CON VERBO TO BE (WAS / WERE)
  {
    tenseId: 'past-to-be',
    tenseNameSpanish: 'Pasado con Verbo TO BE (WAS / WERE)',
    tenseNameEnglish: 'Past Simple (Verb TO BE: Was / Were)',
    timeCategory: 'past',
    formulaSummary: '¡Atención crítica!: A diferencia de los verbos de acción, el To Be sí se divide en dos formas en pasado: WAS vs WERE.',
    tacticalNote: 'I / He / She / It usan WAS. You / We / They usan WERE. Jamás usar "did" con el verbo To Be en pasado.',
    pronounBehaviors: [
      {
        pronounGroup: 'I / He / She / It',
        pronounGroupLabel: 'Singulares: I, HE, SHE, IT -> WAS (wasn\'t)',
        auxiliaryAffirmative: 'was',
        auxiliaryNegative: 'was not (wasn\'t)',
        verbForm: 'was / wasn\'t',
        exampleAffirmative: {
          english: 'I was on guard duty last night from 0200 to 0600.',
          spanish: 'Yo estuve de servicio de guardia anoche de 0200 a 0600.',
          phonetic: 'ái uós on gard diú-ti last náit from sí-ro tuu ján-dred tu sí-ro siks ján-dred'
        },
        exampleNegative: {
          english: 'Major Davis was not present at the operational briefing.',
          spanish: 'El Mayor Davis no estuvo presente en la sesión informativa.',
          phonetic: 'méi-dchor déi-vis uós not pré-sent at de ó-pe-rei-sho-nl bríi-fing'
        },
        exampleQuestion: {
          english: 'Was the main access gate locked at 2200 hours?',
          spanish: '¿Estaba el portón principal cerrado a las 2200 horas?',
          phonetic: 'uós de méin ák-ses gueit lokt at tuén-ti tuu ján-dred áuers?'
        }
      },
      {
        pronounGroup: 'You / We / They',
        pronounGroupLabel: 'Plurales y 2ª Persona: YOU, WE, THEY -> WERE (weren\'t)',
        auxiliaryAffirmative: 'were',
        auxiliaryNegative: 'were not (weren\'t)',
        verbForm: 'were / weren\'t',
        exampleAffirmative: {
          english: 'We were in the briefing room when the siren sounded.',
          spanish: 'Nosotros estábamos en la sala de reuniones cuando sonó la sirena.',
          phonetic: 'ui uér in de bríi-fing ruum juén de sái-ren sáun-did'
        },
        exampleNegative: {
          english: 'They were not aware of the change in operational route.',
          spanish: 'Ellos no estaban al tanto del cambio en la ruta operativa.',
          phonetic: 'déi uér not a-uér of de chéinds in ó-pe-rei-sho-nl ruut'
        },
        exampleQuestion: {
          english: 'Were you deployed to the eastern sector last year?',
          spanish: '¿Estuviste tú / Estuvieron ustedes desplegados en el sector este el año pasado?',
          phonetic: 'uér iu di-plóid tu de íis-tern sék-tor last íir?'
        }
      }
    ]
  },

  // 6. PASADO CONTINUO (PAST CONTINUOUS)
  {
    tenseId: 'past-continuous',
    tenseNameSpanish: 'Pasado Continuo',
    tenseNameEnglish: 'Past Continuous',
    timeCategory: 'past',
    formulaSummary: 'Acción en progreso en el pasado interrumpida por otra: WAS / WERE + Verbo en -ING.',
    tacticalNote: 'Frecuente con "when" (pasado simple) y "while" (pasado continuo).',
    pronounBehaviors: [
      {
        pronounGroup: 'I / He / She / It',
        pronounGroupLabel: 'I, HE, SHE, IT -> WAS + -ING',
        auxiliaryAffirmative: 'was',
        auxiliaryNegative: 'was not (wasn\'t)',
        verbForm: 'was + Verbo-ing',
        exampleAffirmative: {
          english: 'She was monitoring radar signals when the alarm went off.',
          spanish: 'Ella estaba monitoreando señales de radar cuando saltó la alarma.',
          phonetic: 'shi uós mó-ni-to-ring réi-dar síg-nals juén de a-lárm uént of'
        },
        exampleNegative: {
          english: 'I was not driving the supply truck during the storm.',
          spanish: 'Yo no estaba conduciendo el camión de suministros durante la tormenta.',
          phonetic: 'ái uós not drái-ving de sa-plái trak diú-ring de storm'
        },
        exampleQuestion: {
          english: 'Was he wearing his protective body armour?',
          spanish: '¿Estaba él vistiendo su chaleco antibalas protector?',
          phonetic: 'uós ji ué-ring jis pro-ték-tiv bó-di ár-mor?'
        }
      },
      {
        pronounGroup: 'You / We / They',
        pronounGroupLabel: 'YOU, WE, THEY -> WERE + -ING',
        auxiliaryAffirmative: 'were',
        auxiliaryNegative: 'were not (weren\'t)',
        verbForm: 'were + Verbo-ing',
        exampleAffirmative: {
          english: 'We were conducting the patrol when we spotted the vehicle.',
          spanish: 'Nosotros estábamos realizando el patrullaje cuando divisamos el vehículo.',
          phonetic: 'ui uér kon-dák-ting de pa-tróul juén ui spó-tid de ví-i-kl'
        },
        exampleNegative: {
          english: 'They were not expecting reinforcements at that hour.',
          spanish: 'Ellos no estaban esperando refuerzos a esa hora.',
          phonetic: 'déi uér not eks-pék-ting rii-in-fórs-ments at dat áuer'
        },
        exampleQuestion: {
          english: 'Were you patrolling near the boundary fence?',
          spanish: '¿Estaban ustedes patrullando cerca de la cerca perimetral?',
          phonetic: 'uér iu pa-tróu-ling níir de báun-da-ri fens?'
        }
      }
    ]
  },

  // 7. PRESENTE PERFECTO (PRESENT PERFECT SIMPLE)
  {
    tenseId: 'present-perfect',
    tenseNameSpanish: 'Presente Perfecto',
    tenseNameEnglish: 'Present Perfect Simple',
    timeCategory: 'present',
    formulaSummary: 'Conexión entre pasado y presente: HAVE / HAS + Participio Pasado (-ed / 3ª columna).',
    tacticalNote: 'He / She / It usa HAS (hasn\'t). Todos los demás usan HAVE (haven\'t). Palabras clave: already, yet, just, ever, never, since, for.',
    pronounBehaviors: [
      {
        pronounGroup: 'I / You / We / They',
        pronounGroupLabel: 'I, YOU, WE, THEY -> HAVE (\'ve) / HAVEN\'T + Participio',
        auxiliaryAffirmative: 'have (\'ve)',
        auxiliaryNegative: 'have not (haven\'t)',
        verbForm: 'have + Participio Pasado',
        exampleAffirmative: {
          english: 'We have received the confirmed grid coordinates from headquarters.',
          spanish: 'Nosotros hemos recibido las coordenadas de cuadrícula confirmadas del cuartel.',
          phonetic: 'ui jav ri-síivd de kon-férmd grid kou-ór-di-neits from jed-kuór-ters'
        },
        exampleNegative: {
          english: 'I have not seen the classified intelligence report yet.',
          spanish: 'Yo no he visto el informe de inteligencia clasificado todavía.',
          phonetic: 'ái jav not siin de klá-si-faid in-té-li-dchens ri-pórt iét'
        },
        exampleQuestion: {
          english: 'Have you verified the radio batteries?',
          spanish: '¿Has verificado tú las baterías de la radio?',
          phonetic: 'jav iu vé-ri-faid de réi-di-ou bá-te-ris?'
        }
      },
      {
        pronounGroup: 'He / She / It',
        pronounGroupLabel: 'HE, SHE, IT -> HAS (\'s) / HASN\'T + Participio',
        auxiliaryAffirmative: 'has (\'s)',
        auxiliaryNegative: 'has not (hasn\'t)',
        verbForm: 'has + Participio Pasado',
        exampleAffirmative: {
          english: 'Captain Evans has already dispatched two reconnaissance teams.',
          spanish: 'El Capitán Evans ya ha despachado dos equipos de reconocimiento.',
          phonetic: 'káp-tin é-vans jas ol-ré-di dis-pácht tuu re-ko-náis-sns tíims'
        },
        exampleNegative: {
          english: 'She has not arrived at the rally point yet.',
          spanish: 'Ella no ha llegado al punto de reunión todavía.',
          phonetic: 'shi jas not a-ráivd at de rá-li point iét'
        },
        exampleQuestion: {
          english: 'Has the medevac helicopter landed?',
          spanish: '¿Ha aterrizado el helicóptero de evacuación médica?',
          phonetic: 'jas de mé-di-vak jé-li-kop-ter lán-did?'
        }
      }
    ]
  },

  // 8. PRESENTE PERFECTO CONTINUO (PRESENT PERFECT CONTINUOUS)
  {
    tenseId: 'present-perfect-continuous',
    tenseNameSpanish: 'Presente Perfecto Continuo',
    tenseNameEnglish: 'Present Perfect Continuous',
    timeCategory: 'present',
    formulaSummary: 'Acción que comenzó en el pasado y continúa sin interrupción: HAVE / HAS BEEN + Verbo en -ING.',
    tacticalNote: 'Enfatiza la duración de una misión en curso: "We have been monitoring for 5 hours".',
    pronounBehaviors: [
      {
        pronounGroup: 'I / You / We / They',
        pronounGroupLabel: 'I, YOU, WE, THEY -> HAVE BEEN + -ING',
        auxiliaryAffirmative: 'have been',
        auxiliaryNegative: 'have not been (haven\'t been)',
        verbForm: 'have been + Verbo-ing',
        exampleAffirmative: {
          english: 'They have been patrolling Route 4 since dawn.',
          spanish: 'Ellos han estado patrullando la Ruta 4 desde el amanecer.',
          phonetic: 'déi jav biin pa-tróu-ling ruut for sins don'
        },
        exampleNegative: {
          english: 'We have not been using unencrypted channels.',
          spanish: 'Nosotros no hemos estado usando canales sin encriptar.',
          phonetic: 'ui jav not biin iú-sing an-en-kríp-tid chá-nels'
        },
        exampleQuestion: {
          english: 'Have you been waiting for new orders?',
          spanish: '¿Han estado esperando nuevas órdenes?',
          phonetic: 'jav iu biin uéi-ting for niu ór-ders?'
        }
      },
      {
        pronounGroup: 'He / She / It',
        pronounGroupLabel: 'HE, SHE, IT -> HAS BEEN + -ING',
        auxiliaryAffirmative: 'has been',
        auxiliaryNegative: 'has not been (hasn\'t been)',
        verbForm: 'has been + Verbo-ing',
        exampleAffirmative: {
          english: 'The radio operator has been tracking the signal for two hours.',
          spanish: 'El operador de radio ha estado rastreando la señal durante dos horas.',
          phonetic: 'de réi-di-ou ó-pe-rei-tor jas biin trá-king de síg-nal for tuu áuers'
        },
        exampleNegative: {
          english: 'He has not been sleeping during his night shift.',
          spanish: 'Él no ha estado durmiendo durante su turno nocturno.',
          phonetic: 'ji jas not biin slíi-ping diú-ring jis náit shift'
        },
        exampleQuestion: {
          english: 'Has she been coordinating with the joint task force?',
          spanish: '¿Ha estado ella coordinando con la fuerza de tarea conjunta?',
          phonetic: 'jas shi biin kou-ór-di-nei-ting uid de dchoint task fors?'
        }
      }
    ]
  },

  // 9. PASADO PERFECTO (PAST PERFECT SIMPLE)
  {
    tenseId: 'past-perfect',
    tenseNameSpanish: 'Pasado Perfecto',
    tenseNameEnglish: 'Past Perfect Simple',
    timeCategory: 'past',
    formulaSummary: 'El "pasado del pasado": una acción que ocurrió ANTES que otra en el pasado. HAD + Participio Pasado.',
    tacticalNote: 'HAD es invariable para todos los pronombres (I had, he had, we had...).',
    pronounBehaviors: [
      {
        pronounGroup: 'All Pronouns (I, You, He, She, It, We, They)',
        pronounGroupLabel: 'TODOS los Pronombres: HAD (\'d) / HADN\'T + Participio',
        auxiliaryAffirmative: 'had (\'d)',
        auxiliaryNegative: 'had not (hadn\'t)',
        verbForm: 'had + Participio Pasado',
        exampleAffirmative: {
          english: 'The convoy had departed before the hostile fire started.',
          spanish: 'El convoy había partido antes de que comenzara el fuego hostil.',
          phonetic: 'de kón-voi jad di-pár-tid bi-fór de jós-tail fái-er stár-tid'
        },
        exampleNegative: {
          english: 'I had not received clearance before advancing.',
          spanish: 'Yo no había recibido autorización antes de avanzar.',
          phonetic: 'ái jad not ri-síivd klíi-rans bi-fór ad-ván-sing'
        },
        exampleQuestion: {
          english: 'Had they established radio contact before crossing the bridge?',
          spanish: '¿Habían establecido contacto de radio antes de cruzar el puente?',
          phonetic: 'jad déi e-stá-blisht réi-di-ou kón-takt bi-fór kró-sing de brids?'
        }
      }
    ]
  },

  // 10. FUTURO SIMPLE CON WILL (FUTURE SIMPLE - WILL)
  {
    tenseId: 'future-simple-will',
    tenseNameSpanish: 'Futuro Simple con WILL',
    tenseNameEnglish: 'Future Simple (Will)',
    timeCategory: 'future',
    formulaSummary: 'Decisiones espontáneas, promesas, predicciones u órdenes directas: WILL + Verbo Base.',
    tacticalNote: 'WILL es un modal auxiliar: es idéntico para TODOS los pronombres (I will, he will, they will). La negación es WON\'T.',
    pronounBehaviors: [
      {
        pronounGroup: 'All Pronouns (I, You, He, She, It, We, They)',
        pronounGroupLabel: 'TODOS los Pronombres: WILL (\'ll) / WON\'T + Verbo Base',
        auxiliaryAffirmative: 'will (\'ll)',
        auxiliaryNegative: 'will not (won\'t)',
        verbForm: 'will + Verbo base',
        exampleAffirmative: {
          english: 'We will maintain this perimeter until relieved by Bravo Platoon.',
          spanish: 'Nosotros mantendremos este perímetro hasta ser relevados por la Sección Bravo.',
          phonetic: 'ui uil mein-téin dis pe-rí-mi-ter an-tíl ri-líivd bai brá-vou pla-túun'
        },
        exampleNegative: {
          english: 'The commander will not compromise civilian safety.',
          spanish: 'El comandante no comprometerá la seguridad de los civiles.',
          phonetic: 'de ko-mán-der uil not kóm-pro-mais si-ví-li-an séif-ti'
        },
        exampleQuestion: {
          english: 'Will you transmit the emergency situation report immediately?',
          spanish: '¿Transmitirás tú / Transmitirán ustedes el informe de situación de emergencia inmediatamente?',
          phonetic: 'uil iu trans-mít de i-mér-dchen-si si-chu-éi-shon ri-pórt i-míi-diat-li?'
        }
      }
    ]
  },

  // 11. FUTURO CON BE GOING TO (FUTURE - BE GOING TO)
  {
    tenseId: 'future-going-to',
    tenseNameSpanish: 'Futuro con BE GOING TO (Planes e Intenciones)',
    tenseNameEnglish: 'Future (Be Going To)',
    timeCategory: 'future',
    formulaSummary: 'Planes programados, misiones agendadas o evidencias inmediatas: AM / IS / ARE + GOING TO + Verbo Base.',
    tacticalNote: 'La concordancia del pronombre recae en el verbo TO BE inicial (I am going to, he is going to, we are going to).',
    pronounBehaviors: [
      {
        pronounGroup: 'I',
        pronounGroupLabel: 'I AM GOING TO',
        auxiliaryAffirmative: 'am going to',
        auxiliaryNegative: 'am not going to',
        verbForm: 'am going to + Verbo base',
        exampleAffirmative: {
          english: 'I am going to attend the morning company briefing at 0730.',
          spanish: 'Yo voy a asistir a la reunión informativa de compañía a las 0730.',
          phonetic: 'ái am góu-ing tu a-ténd de mór-ning kóm-pa-ni bríi-fing at sí-ro sé-ven zér-ti'
        },
        exampleNegative: {
          english: 'I am not going to authorize vehicle movements after curfew.',
          spanish: 'Yo no voy a autorizar desplazamientos de vehículos después del toque de queda.',
          phonetic: 'ái am not góu-ing tu ó-zo-rais ví-i-kl múuv-ments áf-ter kér-fiu'
        },
        exampleQuestion: {
          english: 'Am I going to lead the reconnaissance team tomorrow?',
          spanish: '¿Voy yo a liderar el equipo de reconocimiento mañana?',
          phonetic: 'am ái góu-ing tu liid de re-ko-náis-sns tíim tu-mó-rou?'
        }
      },
      {
        pronounGroup: 'He / She / It',
        pronounGroupLabel: 'HE / SHE / IT IS GOING TO',
        auxiliaryAffirmative: 'is going to',
        auxiliaryNegative: 'is not going to (isn\'t going to)',
        verbForm: 'is going to + Verbo base',
        exampleAffirmative: {
          english: 'Major Alvarez is going to inspect the ammunition bunker.',
          spanish: 'El Mayor Álvarez va a inspeccionar el búnker de munición.',
          phonetic: 'méi-dchor ál-va-rez is góu-ing tu in-spékt de a-miu-ní-shon bán-ker'
        },
        exampleNegative: {
          english: 'The weather is not going to improve before nightfall.',
          spanish: 'El clima no va a mejorar antes de que anochezca.',
          phonetic: 'de ué-der is not góu-ing tu im-prúuv bi-fór náit-fol'
        },
        exampleQuestion: {
          english: 'Is she going to debrief the patrol leader?',
          spanish: '¿Va ella a interrogar al jefe de patrulla?',
          phonetic: 'is shi góu-ing tu dii-bríif de pa-tróul líi-der?'
        }
      },
      {
        pronounGroup: 'You / We / They',
        pronounGroupLabel: 'YOU / WE / THEY ARE GOING TO',
        auxiliaryAffirmative: 'are going to',
        auxiliaryNegative: 'are not going to (aren\'t going to)',
        verbForm: 'are going to + Verbo base',
        exampleAffirmative: {
          english: 'We are going to conduct live-fire exercises on Tuesday.',
          spanish: 'Nosotros vamos a realizar ejercicios con fuego real el martes.',
          phonetic: 'ui ar góu-ing tu kon-dákt láiv fái-er ék-ser-sai-sis on tiúus-dei'
        },
        exampleNegative: {
          english: 'They are not going to withdraw without explicit command authorization.',
          spanish: 'Ellos no van a replegarse sin autorización explícita del mando.',
          phonetic: 'déi ar not góu-ing tu uid-dró ui-dáut eks-plí-sit ko-mánd o-zo-rai-zéi-shon'
        },
        exampleQuestion: {
          english: 'Are you going to submit the casualty assessment report?',
          spanish: '¿Vas a presentar el informe de evaluación de bajas?',
          phonetic: 'ar iu góu-ing tu sab-mít de ká-zhu-al-ti a-sés-ment ri-pórt?'
        }
      }
    ]
  },

  // 12. CONDICIONAL SIMPLE CON WOULD (CONDITIONAL SIMPLE - WOULD)
  {
    tenseId: 'conditional-would',
    tenseNameSpanish: 'Condicional Simple (Would)',
    tenseNameEnglish: 'Conditional Simple (Would)',
    timeCategory: 'conditional',
    formulaSummary: 'Situaciones hipotéticas, peticiones corteses o resultados subordinados: WOULD (\'d) + Verbo Base.',
    tacticalNote: 'Invariable para todos los pronombres (I would, he would, they would). Negativo: WOULDN\'T.',
    pronounBehaviors: [
      {
        pronounGroup: 'All Pronouns (I, You, He, She, It, We, They)',
        pronounGroupLabel: 'TODOS los Pronombres: WOULD (\'d) / WOULDN\'T + Verbo Base',
        auxiliaryAffirmative: 'would (\'d)',
        auxiliaryNegative: 'would not (wouldn\'t)',
        verbForm: 'would + Verbo base',
        exampleAffirmative: {
          english: 'I would request air support if visibility permitted.',
          spanish: 'Yo solicitaría apoyo aéreo si la visibilidad lo permitiese.',
          phonetic: 'ái uud ri-kuést ér sa-pórt if vi-si-bí-li-ti per-mí-tid'
        },
        exampleNegative: {
          english: 'They would not cross the river without engineer reconnaissance.',
          spanish: 'Ellos no cruzarían el río sin reconocimiento de zapadores.',
          phonetic: 'déi uud not kros de rí-ver ui-dáut en-dchi-níir re-ko-náis-sns'
        },
        exampleQuestion: {
          english: 'Would you repeat the grid coordinates, please?',
          spanish: '¿Repetiría usted las coordenadas de cuadrícula, por favor?',
          phonetic: 'uud iu ri-píit de grid kou-ór-di-neits, pliiz?'
        }
      }
    ]
  }
];

// =========================================================================
// BANCO DE PREGUNTAS / QUIZ DE CONCORDANCIA DE PRONOMBRES Y TIEMPOS VERBALES
// =========================================================================

export interface PronounQuizQuestion {
  id: string;
  tenseName: string;
  targetPronoun: string;
  prompt: string;
  sentenceWithBlank: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  audioText: string;
}

export const PRONOUN_TENSE_QUIZ_QUESTIONS: PronounQuizQuestion[] = [
  {
    id: 'pt-q1',
    tenseName: 'Presente Simple (3ª Persona)',
    targetPronoun: 'He',
    prompt: 'Complete la oración con la forma verbal correcta para el pronombre "He" en Presente Simple:',
    sentenceWithBlank: 'Captain Miller [ _____ ] the morning security briefing every day at 0730.',
    options: ['conducts', 'conduct', 'conducting', 'conducted'],
    correctIndex: 0,
    explanation: 'En Presente Simple, la 3ª persona singular (he, she, it o un rango singular como Captain Miller) requiere la terminación "-s" o "-es" en la forma afirmativa.',
    audioText: 'Captain Miller conducts the morning security briefing every day at zero-seven-thirty.'
  },
  {
    id: 'pt-q2',
    tenseName: 'Presente Simple (Negativo)',
    targetPronoun: 'She',
    prompt: 'Elija el auxiliar negativo correcto para "She" en Presente Simple:',
    sentenceWithBlank: 'Lieutenant Vance [ _____ ] authorize night patrols without written orders.',
    options: ['does not', 'do not', 'is not', 'did not'],
    correctIndex: 0,
    explanation: 'En Presente Simple, los pronombres de 3ª persona singular (he, she, it) usan el auxiliar negativo "does not" (doesn\'t), seguido del verbo base.',
    audioText: 'Lieutenant Vance does not authorize night patrols without written orders.'
  },
  {
    id: 'pt-q3',
    tenseName: 'Pasado Simple (Verbo To Be)',
    targetPronoun: 'They',
    prompt: 'Complete con la forma correcta del verbo To Be en pasado para el pronombre "They":',
    sentenceWithBlank: 'Yesterday, [ _____ ] stationed at the northern airfield until dawn.',
    options: ['they were', 'they was', 'they did be', 'they are'],
    correctIndex: 0,
    explanation: 'En Pasado Simple del verbo To Be, los pronombres plurales (you, we, they) utilizan obligatoriamente "were". Decir *"they was"* es un error severo en STANAG 6001.',
    audioText: 'Yesterday, they were stationed at the northern airfield until dawn.'
  },
  {
    id: 'pt-q4',
    tenseName: 'Pasado Simple (Verbo To Be)',
    targetPronoun: 'I',
    prompt: 'Seleccione la forma correcta del verbo To Be en pasado para el pronombre "I":',
    sentenceWithBlank: '[ _____ ] on duty at Checkpoint Bravo during the storm.',
    options: ['I was', 'I were', 'I did was', 'I am'],
    correctIndex: 0,
    explanation: 'En Pasado Simple, el pronombre "I" (1ª persona singular) concuerda con "was", nunca con "were" en oraciones declarativas.',
    audioText: 'I was on duty at Checkpoint Bravo during the storm.'
  },
  {
    id: 'pt-q5',
    tenseName: 'Presente Perfecto',
    targetPronoun: 'We',
    prompt: 'Elija el auxiliar correcto de Presente Perfecto para "We":',
    sentenceWithBlank: 'We [ _____ ] confirmed receipt of the new tactical map.',
    options: ['have', 'has', 'had', 'are'],
    correctIndex: 0,
    explanation: 'Los pronombres I, You, We y They utilizan el auxiliar "have" en Presente Perfecto. "Has" se reserva exclusivamente para he, she e it.',
    audioText: 'We have confirmed receipt of the new tactical map.'
  },
  {
    id: 'pt-q6',
    tenseName: 'Presente Perfecto',
    targetPronoun: 'He',
    prompt: 'Elija el auxiliar correcto de Presente Perfecto para "He":',
    sentenceWithBlank: 'The patrol commander [ _____ ] already transmitted the situation report.',
    options: ['has', 'have', 'is', 'did'],
    correctIndex: 0,
    explanation: 'El sujeto "The patrol commander" equivale a "He", por lo que en Presente Perfecto requiere el auxiliar "has".',
    audioText: 'The patrol commander has already transmitted the situation report.'
  },
  {
    id: 'pt-q7',
    tenseName: 'Pronombre Objeto vs Sujeto',
    targetPronoun: 'He vs Him / I vs Me',
    prompt: 'Seleccione la opción correcta para completar la función de sujeto conjunto:',
    sentenceWithBlank: 'Yesterday, Major Davis and [ _____ ] inspected the ammunition bunker.',
    options: ['I', 'me', 'myself', 'mine'],
    correctIndex: 0,
    explanation: 'Al formar parte del sujeto compuesto que realiza la acción del verbo "inspected", debe usarse el pronombre sujeto "I" (nunca *"Major Davis and me"*).',
    audioText: 'Yesterday, Major Davis and I inspected the ammunition bunker.'
  },
  {
    id: 'pt-q8',
    tenseName: 'Futuro Be Going To',
    targetPronoun: 'They',
    prompt: 'Complete la estructura de futuro "Be Going To" para "They":',
    sentenceWithBlank: 'They [ _____ ] deploy the new radar station next Monday.',
    options: ['are going to', 'is going to', 'am going to', 'will going to'],
    correctIndex: 0,
    explanation: 'Con el pronombre plural "They", la estructura exige "are going to + verbo base".',
    audioText: 'They are going to deploy the new radar station next Monday.'
  },
  {
    id: 'pt-q9',
    tenseName: 'Pronombre Objeto',
    targetPronoun: 'Them',
    prompt: 'Elija el pronombre objeto correcto para reemplazar a "the enemy vehicles":',
    sentenceWithBlank: 'Our forward observation post spotted two unknown vehicles and tracked [ _____ ] for thirty minutes.',
    options: ['them', 'they', 'their', 'theirs'],
    correctIndex: 0,
    explanation: 'Al encontrarse después del verbo de acción "tracked" como objeto directo, se requiere el pronombre objeto plural "them".',
    audioText: 'Our forward observation post spotted two unknown vehicles and tracked them for thirty minutes.'
  },
  {
    id: 'pt-q10',
    tenseName: 'Adjetivo Posesivo Neutro',
    targetPronoun: 'Its',
    prompt: 'Elija la opción gramaticalmente correcta para el posesivo del pronombre neutro "It":',
    sentenceWithBlank: 'The patrol vehicle lost [ _____ ] communication antenna during the off-road movement.',
    options: ['its', 'it\'s', 'his', 'their'],
    correctIndex: 0,
    explanation: 'El adjetivo posesivo para objetos o vehículos es "its" (sin apóstrofe). "It\'s" con apóstrofe es exclusivamente la contracción de "it is" o "it has".',
    audioText: 'The patrol vehicle lost its communication antenna during the off-road movement.'
  }
];
