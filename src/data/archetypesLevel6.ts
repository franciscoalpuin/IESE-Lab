import { ArchetypeExerciseData } from './daily120PlanData';

export const LEVEL_6_ARCHETYPES: ArchetypeExerciseData[] = [
  // L6-1: Directiva Estratégica del Comandante & Cleft Sentences
  {
    title: 'Directiva Estratégica del Comandante & Oraciones Hendidas (Cleft Sentences)',
    theme: 'Planeamiento Estratégico de Defensa Nacional y Énfasis Retórico en Estado Mayor Conjunto',
    objective: 'Interpretar y formular la Directiva Estratégica del Comandante a nivel Teatro de Operaciones, articular el Estado Final Deseado (Strategic End State) y dominar oraciones hendidas ("What the Joint Force requires is...") y recursos de atenuación retórica.',
    vocabulary: [
      { term: 'Commander\'s Strategic Directive', translation: 'Directiva Estratégica del Comandante', ipa: '/kəˈmɑːn.dəz strəˈtiː.dʒɪk dɪˈrek.tɪv/', spanishPhonetic: 'ko-mán-derz stra-tíi-dshik di-rék-tiv', example: 'The Strategic Directive establishes national defense posture across all warfighting domains.' },
      { term: 'Strategic End State', translation: 'Estado Final Deseado Estratégico', ipa: '/strəˈtiː.dʒɪk end steɪt/', spanishPhonetic: 'stra-tíi-dshik end steit', example: 'Our strategic end state is the restoration of territorial sovereignty and maritime access.' },
      { term: 'Deterrence posture', translation: 'Postura de disuasión creíble', ipa: '/dɪˈter.əns ˈpɒs.tʃər/', spanishPhonetic: 'di-té-rens pós-cher', example: 'Maintaining a credible deterrence posture prevents regional escalation.' },
      { term: 'Multi-domain operations (MDO)', translation: 'Operaciones multi-dominio (Tierra, Mar, Aire, Ciber, Espacio)', ipa: '/ˈmʌl.ti dəˈmeɪn ˌɒp.ərˈeɪ.ʃənz/', spanishPhonetic: 'mál-ti do-méin o-pe-réi-shonz', example: 'Contemporary defense requires multi-domain operations synchronization.' },
      { term: 'What the Joint Force needs is...', translation: 'Lo que la Fuerza Conjunta necesita es... (Cleft)', ipa: '/wɒt ðə dʒɔɪnt fɔːs niːdz ɪz/', spanishPhonetic: 'uót de dshoint fors niidz is', example: 'What the Joint Force needs is integrated real-time space situational awareness.' }
    ],
    grammar: {
      title: 'Cleft Sentences (Wh-clefts & It-clefts) & Diplomatic Hedging',
      formula: 'Wh-cleft: What [Subject] + [Verb] + is/was + [Complement] | It-cleft: It is/was [Element] that [Clause]',
      rule: 'Para enfocar y resaltar prioridades estratégicas críticas en briefings de alto nivel: "What the General Staff must recognize is the fragility of our southern logistical hub", "It was the rapid cyber disruption that neutralized adversary radar tracking". Atenuación diplomática (hedging): "It would appear prudent to recommend...", "Evidence suggests that...".',
      tacticalTip: 'Las oraciones hendidas transforman una afirmación estándar en una declaración doctrinal de alto impacto retórico.'
    },
    phonetics: {
      targetSound: 'Vocálico /iː/ en Strategic, Directive y /ɜː/ en Deterrence',
      articulatoryTip: 'En "strategic" el acento cae en la segunda sílaba: /strəˈtiː.dʒɪk/. En "deterrence" cuida la vocal central /dɪˈter.əns/.',
      spanishPhonetic: 'stra-tíi-dshik, di-té-rens',
      practiceWords: [
        { word: 'Strategic', spanishPhonetic: 'stra-tíi-dshik', translation: 'estratégico' },
        { word: 'Deterrence', spanishPhonetic: 'di-té-rens', translation: 'disuasión' },
        { word: 'Sovereignty', spanishPhonetic: 'só-ve-rin-ti', translation: 'soberanía' }
      ]
    },
    usefulPhrase: {
      phrase: 'Supreme Allied Commander: What this joint strategic directive demands is unyielding multi-domain synchronization, ensuring that our naval, air, land, and cyber capabilities converge simultaneously to deter any aggression against allied sovereign airspace.',
      translation: 'Comandante Supremo Aliado: Lo que esta directiva estratégica conjunta exige es una sincronización multi-dominio inquebrantable, asegurando que nuestras capacidades navales, aéreas, terrestres y cibernéticas converjan simultáneamente para disuadir cualquier agresión contra el espacio aéreo soberano aliado.',
      spanishPhonetic: 'Su-príim Á-laid Ko-mán-der: Uót dis dshoint stra-tíi-dshik di-rék-tiv di-mándz is an-yíil-ding mál-ti do-méin sin-kro-nai-zéi-shon, en-shú-ring dat áuer néi-val, er, land, and sái-ber kei-pa-bí-li-tiz kon-vérdsh si-mul-téi-nios-li tu di-tér é-ni a-gré-shon a-géinst á-laid só-ve-rin ér-speis.',
      tacticalUsage: 'Discurso de inauguración en conferencias del Estado Mayor Conjunto y cumbres de defensa STANAG 6001.'
    },
    listening: {
      title: 'Discurso Estratégico del Jefe del Estado Mayor Conjunto ante el Consejo de Defensa',
      script: 'Members of the Defense Council: In evaluating our geopolitical posture, what we must unequivocally grasp is that conventional deterrence alone no longer guarantees territorial integrity. Hybrid threats, electromagnetic disruption, and cognitive influence campaigns now precede physical incursions. It was precisely our vulnerability in the cyber domain that allowed the adversary to corrupt the national maritime surveillance feed during last month\'s exercises. Therefore, my Strategic Directive outlines three non-negotiable imperatives: First, the establishment of a Joint Multi-Domain Operations Center. Second, the hardening of critical logistical corridors. Third, an increased intelligence-sharing architecture with regional partners. Evidence strongly suggests that without these structural reforms, our defensive response time will remain catastrophically degraded. Thank you for your attention.',
      question: {
        question: 'What vulnerability specifically compromised the maritime surveillance feed during the previous exercises?',
        options: [
          'Vulnerability in the cyber domain that corrupted the data feed',
          'A shortage of diesel fuel for patrol corvettes',
          'Dense fog preventing coastal visual observation',
          'A mutiny among civilian harbor pilots'
        ],
        correctIndex: 0,
        explanation: 'The Chief of Staff states: "It was precisely our vulnerability in the cyber domain that allowed the adversary to corrupt the national maritime surveillance feed".'
      }
    },
    reading: {
      title: 'Publicación de Doctrina Conjunta: Diseño de Campaña y Estado Final Deseado',
      snippet: 'Operational art is the cognitive linkage between tactical engagements and the achievement of strategic objectives. The foundational element of campaign design is the Strategic End State: the set of desired political and military conditions that must exist when operations conclude. What commanders must avoid is formulating tactical plans in a strategic vacuum. Without a clearly defined end state, military victories in tactical battles risk generating protracted, indecisive conflicts that exhaust national defense resources.',
      question: {
        question: 'According to joint doctrine, what is the definition of the Strategic End State?',
        options: [
          'The set of desired political and military conditions that must exist when operations conclude',
          'The total number of ammunition crates consumed in combat',
          'The date on which the commander retires from service',
          'The budget allocated for peacetime parade ceremonies'
        ],
        correctIndex: 0,
        explanation: 'The publication specifies: "Strategic End State: the set of desired political and military conditions that must exist when operations conclude".'
      }
    },
    useOfLanguage: {
      title: 'Construcción de Cleft Sentences para Énfasis Estratégico',
      prompt: 'Transforma la afirmación estándar en una oración hendida con Wh-cleft doctrinal:',
      question: {
        question: '"Standard statement: The Theater Commander prioritized real-time satellite imagery over ground reconnaissance." — Choose the equivalent cleft sentence:',
        options: [
          'What the Theater Commander prioritized was real-time satellite imagery over ground reconnaissance.',
          'It was prioritized real-time satellite imagery by the Theater Commander over ground reconnaissance.',
          'Which the Theater Commander prioritized real-time satellite imagery.',
          'Real-time satellite imagery what the Theater Commander was prioritizing.'
        ],
        correctIndex: 0,
        explanation: 'The Wh-cleft formula is: What + [Subject] + [Verb] + was + [Object/Complement]. Option A is grammatically and stylistically correct.'
      }
    },
    writing: {
      title: 'Redacción de la Declaración de Estado Final Estratégico (Strategic End State)',
      scenario: 'Redacta un párrafo formal de 50 palabras para la Directiva del Comandante definiendo el Estado Final Deseado para la Operación Escudo Soberano, empleando una oración hendida de alto nivel.',
      targetWordCount: '45-60 palabras',
      requiredElements: ['Definición del End State político-militar', 'Restauración del orden y fronteras', 'Uso de Cleft Sentence ("What the Coalition seeks...")', 'Firma oficial del Comandante Estratégico'],
      modelAnswer: 'STRATEGIC DIRECTIVE 01/26: What the Coalition seeks to achieve is the complete restoration of international borders and the dismantling of hostile asymmetric missile emplacements. Strategic End State is realized when civilian administration is reinstated, freedom of maritime navigation is permanently secured, and adversary offensive capabilities are demonstrably neutralized. General V. Sterling, Strategic Commander.'
    },
    speaking: {
      title: 'Alocución Estratégica ante el Comité de Estado Mayor Conjunto',
      scenario: 'Pronuncia la apertura de tu exposición estratégica ante el Estado Mayor empleando una cleft sentence y modulación diplomática.',
      recommendedDuration: '30 segundos',
      pronunciationTips: ['Elocución solemne, tono grave y controlado.', 'Pausa dramática tras "What we must achieve is...".'],
      modelResponse: 'General Officers, distinguished colleagues: What our armed forces require at this historic juncture is not merely tactical courage, but absolute multi-domain interoperability. It is through joint synergy across land, air, sea, and cyber that our deterrence posture will endure. Let us proceed to the campaign design.'
    }
  },

  // L6-2: Negociación de Crisis Internacional y Mediación de Alto el Fuego
  {
    title: 'Negociación de Crisis Internacional, Mediación & Acuerdos de Alto el Fuego',
    theme: 'Diplomacia Militar de Defensa, Mediación de Armisticios y Concesiones Condicionadas',
    objective: 'Mediar disputas territoriales entre facciones beligerantes, negociar cláusulas técnicas de alto el fuego (Ceasefire Agreements) y dominar fórmulas diplomáticas avanzadas de concesión y mitigación.',
    vocabulary: [
      { term: 'Ceasefire Agreement', translation: 'Acuerdo de alto el fuego / Cese de hostilidades', ipa: '/ˈsiːs.faɪər əˈɡriː.mənt/', spanishPhonetic: 'siis-fáier a-gríi-ment', example: 'Both delegations signed the interim ceasefire agreement in Geneva.' },
      { term: 'Demilitarized Zone (DMZ)', translation: 'Zona desmilitarizada', ipa: '/diːˈmɪl.ɪ.tər.aɪzd zəʊn/', spanishPhonetic: 'dii-mí-li-ter-aizd zoun', example: 'Heavy artillery must be withdrawn fifty kilometers from the DMZ.' },
      { term: 'Tripartite commission', translation: 'Comisión tripartita de supervisión', ipa: '/traɪˈpɑː.taɪt kəˈmɪʃ.ən/', spanishPhonetic: 'trai-pár-tait ko-mí-shon', example: 'A tripartite commission will investigate alleged armistice violations.' },
      { term: 'Confidence-building measures (CBM)', translation: 'Medidas de fomento de la confianza', ipa: '/ˈkɒn.fɪ.dəns ˈbɪl.dɪŋ ˈmeʒ.əz/', spanishPhonetic: 'kón-fi-dens bíl-ding mé-shorz', example: 'Joint demining patrols serve as vital confidence-building measures.' },
      { term: 'Provided that / On condition that', translation: 'Siempre y cuando / A condición de que', ipa: '/prəˈvaɪ.dɪd ðæt/', spanishPhonetic: 'pro-vái-ded dat', example: 'Forces will withdraw provided that international monitors verify the corridor.' }
    ],
    grammar: {
      title: 'Diplomatic Concessions (Provided that, Notwithstanding, Insofar as)',
      formula: '[Proposal] + provided that / on condition that + [Condition] | Notwithstanding + [Noun/Fact], [Clause]',
      rule: 'Para redactar y mediar tratados de paz con rigor jurídico y diplomático: "The Armed Forces are prepared to cease all air reconnaissance over the northern valley, provided that the opposing faction disarms their surface-to-air battery at Grid 442 901", "Notwithstanding recent skirmishes along the border, both delegations have agreed to exchange captured medical personnel unconditionally".',
      tacticalTip: 'Usa "provided that" o "on the strict condition that" para delimitar concesiones condicionadas irrenunciables.'
    },
    phonetics: {
      targetSound: 'Sonido /aɪ/ en Tripartite, Provided y /ʒ/ en Measures',
      articulatoryTip: 'En "tripartite" la primera y última sílaba llevan diptongo /aɪ/: /traɪˈpɑː.taɪt/. En "measures" cuida el sonido /ʒ/ como en "vision".',
      spanishPhonetic: 'trai-pár-tait, mé-shorz',
      practiceWords: [
        { word: 'Tripartite', spanishPhonetic: 'trai-pár-tait', translation: 'tripartito' },
        { word: 'Measures', spanishPhonetic: 'mé-shorz', translation: 'medidas' },
        { word: 'Mediation', spanishPhonetic: 'mi-di-éi-shon', translation: 'mediación' }
      ]
    },
    usefulPhrase: {
      phrase: 'Chief Military Negotiator: We are prepared to recommend an immediate forty-eight-hour humanitarian pause, provided that both military commands guarantee unrestricted access for Red Cross convoys along the designated central corridor.',
      translation: 'Jefe Negociador Militar: Estamos preparados para recomendar una pausa humanitaria inmediata de cuarenta y ocho horas, siempre y cuando ambos mandos militares garanticen el acceso irrestricto para los convoyes de la Cruz Roja a lo largo del corredor central designado.',
      spanishPhonetic: 'Tshiif Mí-li-ter-i Ne-góu-shieit-or: Ui ar pri-pérd tu re-ko-ménd an i-mí-diet for-ti-eit-áuer jiu-ma-ni-té-rian poz, pro-vái-ded dat bout mí-li-ter-i ko-mándz ga-ran-tíi an-re-strík-ted ák-ses for Red Kros kón-voiz a-lóng de dé-sig-nei-ted sén-tral kó-ri-dor.',
      tacticalUsage: 'Negociación formal de corredores humanitarios y treguas tácticas en cumbres internacionales de paz.'
    },
    listening: {
      title: 'Sesión Plenaria de Negociación de Alto el Fuego en Ginebra',
      script: 'Distinguished military delegates: We have reached a pivotal moment in our mediation talks. Notwithstanding the tragic skirmish reported at the western border yesterday, both delegations have expressed a shared determination to prevent widespread conflict. The proposed ceasefire draft stipulating Article 4 provides that all heavy artillery, mortar batteries, and rocket launchers with a range exceeding twenty kilometers must be pulled back thirty kilometers behind the current line of contact. Furthermore, independent United Nations observation teams will be deployed with unmanned aerial systems to verify compliance continuously. If both delegations sign this annex today, the ceasefire will enter into formal legal effect precisely at midnight. General Morales, does your delegation accept the verification mechanism stipulated in Article 4? — Mr. Mediator, my delegation accepts Article 4, provided that aerial drone flight plans are submitted to our joint coordination cell twenty-four hours in advance. — Acknowledged. We will insert that clarifying clause.',
      question: {
        question: 'Under what specific condition does General Morales\' delegation accept the Article 4 verification mechanism?',
        options: [
          'Provided that aerial drone flight plans are submitted to the joint coordination cell 24 hours in advance',
          'Only if all UN observers leave the country immediately',
          'Provided that heavy artillery remains on the front line',
          'On condition that the media broadcasts the surrender live'
        ],
        correctIndex: 0,
        explanation: 'General Morales explicitly states: "my delegation accepts Article 4, provided that aerial drone flight plans are submitted to our joint coordination cell twenty-four hours in advance".'
      }
    },
    reading: {
      title: 'Tratado Doctrinal de Paz: Medidas de Fomento de la Confianza (CBM) y Desmilitarización',
      snippet: 'Confidence-Building Measures (CBMs) are vital procedural instruments designed to reduce mutual suspicion between belligerent armed forces during armistice negotiations. Effective military CBMs include the establishment of direct communication hotlines between opposing operational commanders, prior notification of troop movements or live-fire training exercises, reciprocal visits to military garrisons by defense attachés, and the phased withdrawal of offensive armor from border buffer sectors. Crucially, CBMs succeed only insofar as both parties demonstrate transparency and permit rigorous third-party verification.',
      question: {
        question: 'What is a concrete example of an effective military Confidence-Building Measure (CBM)?',
        options: [
          'Direct communication hotlines between opposing commanders and prior notification of exercises',
          'Unilateral jamming of civilian communications',
          'Secret deployment of minefields near schools',
          'Canceling all diplomatic dialogue permanently'
        ],
        correctIndex: 0,
        explanation: 'The text details: "Effective military CBMs include the establishment of direct communication hotlines between opposing operational commanders, prior notification of troop movements...".'
      }
    },
    useOfLanguage: {
      title: 'Conectores Diplomáticos de Concesión Condicionada',
      prompt: 'Completa la cláusula del borrador de armisticio con el conector diplomático adecuado:',
      question: {
        question: '"Both belligerent forces agree to disengage from the disputed ridge, ______ international observers establish permanent monitoring posts within forty-eight hours."',
        options: [
          'provided that',
          'despite that',
          'unless that',
          'in spite of'
        ],
        correctIndex: 0,
        explanation: '"Provided that" introduces a necessary condition ("on the condition that") for the agreement to disengage.'
      }
    },
    writing: {
      title: 'Redacción de Cláusula de Retiro de Armamento Pesado en Acuerdo de Paz',
      scenario: 'Redacta el Artículo 3 de un acuerdo de alto el fuego estableciendo el retiro de tanques y artillería pesada a 25 km de la línea de demarcación en un plazo de 72 horas, condicionado a la verificación de la ONU.',
      targetWordCount: '45-60 palabras',
      requiredElements: ['Plazo temporal (72 hours)', 'Distancia de repliegue (25 kilometers)', 'Condición de verificación ("provided that")', 'Fórmula legal de alto nivel'],
      modelAnswer: 'ARTICLE 3 (HEAVY WEAPONS WITHDRAWAL): Both parties shall complete the withdrawal of all main battle tanks, heavy artillery, and surface-to-surface missile systems to a minimum distance of 25 kilometers from the Demarcation Line within 72 hours of signature, provided that United Nations monitors certify the safe decommissioning of forward ammunition caches.'
    },
    speaking: {
      title: 'Intervención Diplomática de Cierre en Conferencia de Mediación',
      scenario: 'Formula una propuesta de compromiso ante los mediadores internacionales expresando disposición a acordar una tregua bajo condiciones de verificación objetivas.',
      recommendedDuration: '30 segundos',
      pronunciationTips: ['Tono sereno, equilibrado y con alta dignidad de representación nacional.', 'Articula "provided that" con claridad.'],
      modelResponse: 'Mr. Mediator, esteemed delegates: My government remains resolutely committed to a peaceful resolution. We are prepared to cease all military movements along the southern sector immediately, provided that an impartial monitoring commission oversees the withdrawal without delay. We await your concurrence.'
    }
  }
];
