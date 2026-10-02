import { AxisTheoryModule } from '../../types';

export const useOfLanguageLevel1: AxisTheoryModule = {
  axis: 'useOfLanguage',
  levelNumber: 1,
  overview: 'Programa Oficial STANAG 6001 Nivel 1 (Supervivencia / A1-A2): Verbo To Be y formulación de preguntas, Presente Simple con adverbios de frecuencia, Presente Continuo para acciones en desarrollo, Futuro con BE GOING TO, Pasado Simple de TO BE (was/were), Verbos Modales (can, could, have to, must, would), imperativos, pronombres personales y objeto, caso posesivo (\'s), preposiciones de tiempo y lugar, sustantivos contables/incontables, y vocabulario integral de guarnición y vida militar.',
  vocabulary: [
    {
      theme: 'Armas, Especialidades y Ocupaciones Militares (Military Branches & Roles)',
      description: 'Designaciones de las armas de combate, servicios de apoyo y funciones castrenses en guarnición.',
      words: [
        { term: 'Infantry', ipa: '/ˈɪnfəntri/', partOfSpeech: 'sustantivo', translation: 'Infantería', example: 'The infantry platoon advances across open ground.', tacticalTip: 'Fuerza básica de maniobra y combate a pie.' },
        { term: 'Cavalry', ipa: '/ˈkævəlri/', partOfSpeech: 'sustantivo', translation: 'Caballería / Blindados', example: 'Armoured cavalry units secure the flank of the advance.', tacticalTip: 'Comprende unidades de exploración mecanizada y tanques.' },
        { term: 'Artillery', ipa: '/ɑːˈtɪləri/', partOfSpeech: 'sustantivo', translation: 'Artillería', example: 'Field artillery provides indirect fire support.', tacticalTip: 'La primera sílaba tiene acento en /ɑːˈtɪ/.' },
        { term: 'Combat Engineers', ipa: '/ˈkɒmbæt ˌendʒɪˈnɪəz/', partOfSpeech: 'sustantivo plural', translation: 'Ingenieros de combate / Zapadores', example: 'Combat engineers breach obstacles and build bridges.', tacticalTip: 'Especialidad encargada de movilidad y contramovilidad.' },
        { term: 'Signals', ipa: '/ˈsɪɡnəlz/', partOfSpeech: 'sustantivo plural', translation: 'Comunicaciones / Transmisiones', example: 'The signals corps maintains tactical radio links.', tacticalTip: 'Cuerpo responsable del enlace radioeléctrico e informático.' },
        { term: 'Military Police (MP)', ipa: '/ˈmɪlɪtri pəˈliːs/', partOfSpeech: 'sustantivo', translation: 'Policía Militar', example: 'Military police control traffic at the main access gate.', tacticalTip: 'Control del orden interno, seguridad de instalaciones y tránsito militar.' }
      ]
    },
    {
      theme: 'Identificación Personal, Filiación y Rasgos Físicos (Physical Description & Features)',
      description: 'Léxico para la filiación, rasgos distintivos y descripción de personal en guardias y accesos.',
      words: [
        { term: 'Full name & Rank', ipa: '/fʊl neɪm ænd ræŋk/', partOfSpeech: 'frase sustantiva', translation: 'Nombre completo y grado / jerarquía militar', example: 'State your full name and rank at the guard post.', tacticalTip: 'Identificación obligatoria ante cualquier superior o guardia.' },
        { term: 'Height / Tall / Short', ipa: '/haɪt / tɔːl / ʃɔːt/', partOfSpeech: 'adjetivos/sustantivo', translation: 'Estatura / Alto / Bajo', example: 'The suspect is of medium height, approximately 1.75 metres.', tacticalTip: 'En partes descriptivos se combina estatura y contextura física.' },
        { term: 'Build / Slim / Broad-shouldered', ipa: '/bɪld / slɪm / ˌbrɔːd ˈʃəʊldəd/', partOfSpeech: 'adjetivos/sustantivo', translation: 'Contextura / Delgado / De hombros anchos (robusto)', example: 'The officer has an athletic, broad-shouldered build.', tacticalTip: 'Términos estándar en fichas de identificación personal.' },
        { term: 'Clean-shaven', ipa: '/ˌkliːn ˈʃeɪvn/', partOfSpeech: 'adjetivo', translation: 'Afeitado / Sin barba', example: 'Military regulations require all recruits to be clean-shaven.', tacticalTip: 'Norma de disciplina de presentación personal en cuartel.' },
        { term: 'Distinctive mark / Scar', ipa: '/dɪˈstɪŋktɪv mɑːk / skɑː/', partOfSpeech: 'sustantivo', translation: 'Marca distintiva / Cicatriz', example: 'He has a visible scar on his left cheek.', tacticalTip: 'Elemento clave en partes de reconocimiento de personas.' },
        { term: 'Dark / Fair hair', ipa: '/dɑːk / feə heə/', partOfSpeech: 'frase sustantiva', translation: 'Pelo oscuro / castaño vs rubio / claro', example: 'The soldier has short dark hair and brown eyes.', tacticalTip: 'En inglés el sustantivo "hair" es incontable (no lleva -s).' }
      ]
    },
    {
      theme: 'Rutina Diaria en la Guarnición (Daily Routine & Garrison Life)',
      description: 'Actividades programadas de la jornada militar desde la diana hasta el toque de silencio.',
      words: [
        { term: 'Reveille', ipa: '/rɪˈvæli/', partOfSpeech: 'sustantivo', translation: 'Diana (toque de diana / levantarse)', example: 'Reveille sounds at 0530 hours every weekday morning.', tacticalTip: 'Término militar tradicional para el despertar reglamentario.' },
        { term: 'Muster parade / Roll call', ipa: '/ˈmʌstə pəˈreɪd / rəʊl kɔːl/', partOfSpeech: 'sustantivo', translation: 'Formación de diana / Pase de lista', example: 'All platoons report for muster parade on the square.', tacticalTip: 'Verificación de presencia física de efectivos de servicio.' },
        { term: 'Physical Training (PT)', ipa: '/ˈfɪzɪkl ˈtreɪnɪŋ/', partOfSpeech: 'sustantivo', translation: 'Gimnasia militar / Entrenamiento físico', example: 'Company PT starts at 0630 hours sharp.', tacticalTip: 'Acrónimo PT de uso diario indispensable.' },
        { term: 'Weapon cleaning', ipa: '/ˈwepən ˈkliːnɪŋ/', partOfSpeech: 'sustantivo', translation: 'Limpieza y mantenimiento de armamento', example: 'Weapon cleaning follows the field firing exercise.', tacticalTip: 'La letra "a" en "weapon" suena como /e/ (/ˈwepən/).' },
        { term: 'Kit inspection', ipa: '/kɪt ɪnˈspekʃn/', partOfSpeech: 'sustantivo', translation: 'Revista de equipo y vestuario', example: 'The Sergeant Major conducts a kit inspection tomorrow.', tacticalTip: 'Revisión minuciosa de uniformes y pertrechos reglamentarios.' },
        { term: 'Retreat / Lights out', ipa: '/rɪˈtriːt / laɪts aʊt/', partOfSpeech: 'sustantivo', translation: 'Arreo de bandera / Toque de silencio', example: 'Lights out is enforced at 2200 hours in the barracks.', tacticalTip: 'Toque de silencio que señala el fin de las actividades diarias.' }
      ]
    },
    {
      theme: 'Medios de Transporte y Movilidad Táctica (Means of Transport & Mobility)',
      description: 'Vehículos terrestres, aéreos y fluviales para transporte de tropas y logística.',
      words: [
        { term: 'Troop carrier / 4x4 Truck', ipa: '/truːp ˈkæriə / trʌk/', partOfSpeech: 'sustantivo', translation: 'Transporte de tropas / Camión táctico', example: 'A troop carrier moves the squad to the training zone.', tacticalTip: 'Vehículo de transporte táctico estándar.' },
        { term: 'Armoured Personnel Carrier (APC)', ipa: '/ˌɑːməd ˌpɜːsəˈnel ˈkæriə/', partOfSpeech: 'sustantivo', translation: 'Vehículo blindado de transporte de personal (VCPC)', example: 'The APC protects soldiers against small-arms fire.', tacticalTip: 'Acrónimo fundamental en doctrina de combate mecanizado.' },
        { term: 'Utility helicopter', ipa: '/juːˈtɪləti ˈhelɪkɒptə/', partOfSpeech: 'sustantivo', translation: 'Helicóptero utilitario / de apoyo', example: 'The helicopter evacuates the simulated casualty to base.', tacticalTip: 'Medio de evacuación aeromédica (MEDEVAC) y enlace rápido.' },
        { term: 'Patrol craft', ipa: '/pəˈtrəʊl krɑːft/', partOfSpeech: 'sustantivo', translation: 'Lancha de patrulla / Embarcación táctica', example: 'Riverine patrol craft guard the northern border waterways.', tacticalTip: '"Craft" se utiliza tanto en singular como en plural sin -s.' }
      ]
    },
    {
      theme: 'Instalaciones de Cuartel y Espacios Operativos (Base Facilities & Housing)',
      description: 'Dependencias del regimiento y distribución de edificios en la guarnición.',
      words: [
        { term: 'Guardroom', ipa: '/ˈɡɑːdruːm/', partOfSpeech: 'sustantivo', translation: 'Cuerpo de guardia / Puesto de guardia principal', example: 'Report to the guardroom to register visitors.', tacticalTip: 'Edificio de la guardia de prevención donde se custodian las llaves y registros.' },
        { term: 'Sentry box', ipa: '/ˈsentri bɒks/', partOfSpeech: 'sustantivo', translation: 'Garita de centinela', example: 'The sentry remains inside the sentry box during heavy rain.', tacticalTip: 'Puesto individual fijo de vigilancia perimetral.' },
        { term: 'Headquarters (HQ)', ipa: '/ˌhedˈkwɔːtəz/', partOfSpeech: 'sustantivo', translation: 'Cuartel General / Jefatura de Unidad', example: 'The Colonel is working in the regimental headquarters.', tacticalTip: 'Siempre lleva la "s" final tanto en singular como en plural.' },
        { term: 'Dormitory / Barrack room', ipa: '/ˈdɔːmətri / ˈbærək ruːm/', partOfSpeech: 'sustantivo', translation: 'Dormitorio de soldados / Cuadra de alojamiento', example: 'Keep the barrack room orderly and clean at all times.', tacticalTip: 'Alojamiento colectivo de suboficiales y tropa.' },
        { term: 'Obstacle course', ipa: '/ˈɒbstəkl kɔːs/', partOfSpeech: 'sustantivo', translation: 'Pista de combate / Pista de obstáculos', example: 'The recruit platoon runs the obstacle course twice a week.', tacticalTip: 'Instalación de adiestramiento físico y de combate.' },
        { term: 'Armory / Arms room', ipa: '/ˈɑːməri / ɑːmz ruːm/', partOfSpeech: 'sustantivo', translation: 'Armería / Sala de armas', example: 'Weapons must be secured in the armory by 1800 hours.', tacticalTip: 'Depósito seguro de custodia de fusiles y pistolas.' }
      ]
    },
    {
      theme: 'Indumentaria, Equipo Individual y Clima (Uniform, Gear & Weather)',
      description: 'Prendas del uniforme de combate, equipo táctico individual y condiciones meteorológicas.',
      words: [
        { term: 'Combat dress / Fatigue uniform', ipa: '/ˈkɒmbæt dres / fəˈtiːɡ/', partOfSpeech: 'sustantivo', translation: 'Uniforme de combate / Faena militar', example: 'Soldiers must wear camouflage combat dress in the field.', tacticalTip: 'Equivalente militar británico a BDU (Battle Dress Uniform).' },
        { term: 'Webbing / Tactical vest', ipa: '/ˈwebɪŋ / ˈtæktɪkl vest/', partOfSpeech: 'sustantivo', translation: 'Correaje / Chaleco táctico portaequipo', example: 'Fasten your webbing securely before the march.', tacticalTip: 'Sistema de correas y cartucheras para portar munición y cantimplora.' },
        { term: 'Canteen / Water bottle', ipa: '/kænˈtiːn / ˈwɔːtə ˈbɒtl/', partOfSpeech: 'sustantivo', translation: 'Cantimplora militar', example: 'Fill your canteen with fresh potable water.', tacticalTip: 'En el ejército británico "canteen" también denomina al comedor.' },
        { term: 'Wet-weather gear / Poncho', ipa: '/wet ˈweðə ɡɪə / ˈpɒntʃəʊ/', partOfSpeech: 'sustantivo', translation: 'Equipo impermeable para lluvia / Poncho', example: 'Pack wet-weather gear; the weather forecast predicts heavy rain.', tacticalTip: 'Prendas indispensables en operaciones de campaña con lluvia.' },
        { term: 'Thermal undershirt', ipa: '/ˈθɜːml ˈʌndəʃɜːt/', partOfSpeech: 'sustantivo', translation: 'Camiseta térmica', example: 'Wear a thermal undershirt during cold winter night watches.', tacticalTip: 'Indumentaria de abrigo para centinelas en invierno.' },
        { term: 'Combat helmet', ipa: '/ˈkɒmbæt ˈhelmɪt/', partOfSpeech: 'sustantivo', translation: 'Casco de combate balístico', example: 'Helmets must be strapped tightly during live firing.', tacticalTip: 'Elemento fundamental del equipo de protección individual.' }
      ]
    },
    {
      theme: 'Casino de Oficiales, Restaurante y Raciones (Dining & Ration Packs)',
      description: 'Fórmulas y vocabulario para comer en el comedor militar, pedir en restaurantes y provisiones.',
      words: [
        { term: 'Officers\' Mess', ipa: '/ˈɒfɪsəz mes/', partOfSpeech: 'sustantivo', translation: 'Casino de Oficiales', example: 'Dinner in the Officers\' Mess begins at nineteen-thirty hours.', tacticalTip: 'Lugar de convivencia, comedor y actos sociales de oficiales.' },
        { term: '24-hour Ration pack', ipa: '/ˈreɪʃn pæk/', partOfSpeech: 'sustantivo', translation: 'Ración de combate para 24 horas', example: 'Each soldier carries two 24-hour ration packs.', tacticalTip: 'Pronunciación estándar británica /ˈreɪʃn/ o /ˈræʃn/.' },
        { term: 'Set menu / Course', ipa: '/set ˈmenjuː / kɔːs/', partOfSpeech: 'sustantivo', translation: 'Menú fijo / Plato o paso del almuerzo', example: 'The set menu includes a soup, main course and dessert.', tacticalTip: 'Vocabulario clave para comer en restaurantes de servicio completo.' },
        { term: 'Bill / Contactless payment', ipa: '/bɪl / ˈkɒntæktləs ˈpeɪmənt/', partOfSpeech: 'sustantivo', translation: 'La cuenta / Pago con tarjeta sin contacto', example: 'Could we have the bill, please? We can pay contactless.', tacticalTip: 'En Gran Bretaña se dice "bill", no "check" (US).' },
        { term: 'Still / Sparkling water', ipa: '/stɪl / ˈspɑːklɪŋ ˈwɔːtə/', partOfSpeech: 'sustantivo', translation: 'Agua mineral sin gas / con gas', example: 'Would you prefer still or sparkling water with dinner?', tacticalTip: 'Fórmula británica habitual en restaurantes y casinos.' }
      ]
    },
    {
      theme: 'Coordinación Telefónica y Citas Administrativas (Telephone Protocols)',
      description: 'Expresiones para comunicaciones oficiales por teléfono y agenda de reuniones.',
      words: [
        { term: 'Extension number', ipa: '/ɪkˈstenʃn ˈnʌmbə/', partOfSpeech: 'sustantivo', translation: 'Número de interno / Intendencia', example: 'Please dial extension four-three-one for the logistics office.', tacticalTip: 'Uso constante en centrales telefónicas de cuarteles.' },
        { term: 'Put through', ipa: '/pʊt θruː/', partOfSpeech: 'phrasal verb', translation: 'Comunicar / Transferir una llamada', example: 'Hold the line, Sir, I am putting you through to Captain Sterling.', tacticalTip: 'Frase obligatoria en atención de conmutadores telefónicos.' },
        { term: 'Leave a message', ipa: '/liːv ə ˈmesɪdʒ/', partOfSpeech: 'frase verbal', translation: 'Dejar un recado / mensaje', example: 'Major Evans is unavailable. Would you like to leave a message?', tacticalTip: 'Procedimiento estándar cuando el destinatario está en misión.' },
        { term: 'Reschedule / Postpone', ipa: '/ˌriːˈʃedjuːl / pəˈspəʊn/', partOfSpeech: 'verbos', translation: 'Reprogramar / Postergar una reunión', example: 'We need to reschedule the briefing to tomorrow morning.', tacticalTip: 'En inglés británico "schedule" se pronuncia con /ʃ/ inicial.' }
      ]
    },
    {
      theme: 'Phrasal Verbs Militares de Rutina y Guardia (Military Phrasal Verbs)',
      description: 'Verbos compuestos imprescindibles para la vida operacional del regimiento.',
      words: [
        { term: 'Fall in', ipa: '/fɔːl ɪn/', partOfSpeech: 'phrasal verb', translation: 'Formar en filas / tomar puesto en la formación', example: 'The platoon falls in on the parade ground at 0630 hours.', tacticalTip: 'Voz de mando tradicional británica para formar la tropa.' },
        { term: 'Fall out', ipa: '/fɔːl aʊt/', partOfSpeech: 'phrasal verb', translation: 'Romper filas / desconcentrarse', example: 'Platoon, fall out!', tacticalTip: 'Orden para disolver la formación de desfile o revista.' },
        { term: 'Stand down', ipa: '/stænd daʊn/', partOfSpeech: 'phrasal verb', translation: 'Suspender el estado de alerta / salir de guardia', example: 'Sentries may stand down after relief arrives.', tacticalTip: 'Cese del estado de guardia activa.' },
        { term: 'Carry out', ipa: '/ˈkæri aʊt/', partOfSpeech: 'phrasal verb', translation: 'Llevar a cabo / ejecutar (una orden o patrulla)', example: 'Soldiers carried out the night reconnaissance mission.', tacticalTip: 'Equivalente formal militar a "execute" o "perform".' },
        { term: 'Hold on', ipa: '/həʊld ɒn/', partOfSpeech: 'phrasal verb', translation: 'Aguardar en línea / Mantener la posición', example: 'Hold on a second while I verify your access clearance.', tacticalTip: 'Uso frecuente tanto en telefonía como en control de accesos.' }
      ]
    },
    {
      theme: 'Rangos Militares y Cadena de Mando Inicial (Military Ranks)',
      description: 'Designaciones jerárquicas fundamentales en los ejércitos británico y argentino.',
      words: [
        { term: 'Private (Pte)', ipa: '/ˈpraɪvət/', partOfSpeech: 'sustantivo', translation: 'Soldado raso / Voluntario', example: 'Private Gomez is on sentry duty at Gate 2.', tacticalTip: 'Rango básico de la tropa combatiente.' },
        { term: 'Corporal (Cpl)', ipa: '/ˈkɔːpərəl/', partOfSpeech: 'sustantivo', translation: 'Cabo', example: 'The Corporal leads the second fire team.', tacticalTip: 'Suboficial subalterno jefe de grupo o equipo de tiro.' },
        { term: 'Sergeant (Sgt)', ipa: '/ˈsɑːdʒənt/', partOfSpeech: 'sustantivo', translation: 'Sargento', example: 'Sergeant Miller inspects all weapons before firing drills.', tacticalTip: 'La pronunciación empieza con el sonido /sɑː/.' },
        { term: 'Lieutenant (Lt)', ipa: '/lefˈtenənt/', partOfSpeech: 'sustantivo', translation: 'Teniente', example: 'The Lieutenant briefs the platoon commander.', tacticalTip: 'En inglés británico se pronuncia con sonido "f": /lef-TEN-ənt/.' }
      ]
    }
  ],
  grammar: [
    {
      title: 'Presente Simple vs Presente Continuo: Hábitos vs Acciones en Desarrollo',
      structureFormula: 'Presente Simple: Suj + Adverbio + Verbo(s) | Continuo: Suj + am/is/are + Verbo-ing',
      orderElements: [
        { position: 1, element: 'Sujeto', function: 'Agente que realiza la acción', example: 'The sentry / The mechanics' },
        { position: 2, element: 'Adverbio / Auxiliar to be', function: 'Frecuencia en Simple (always/usually) o to be en Continuo (is/are)', example: 'always / are' },
        { position: 3, element: 'Verbo Principal', function: 'Forma base (-s en 3ra pers.) o Verbo terminado en -ing', example: 'checks / repairing' },
        { position: 4, element: 'Complemento y Expresión Temporal', function: 'Objeto de la acción y marcador temporal', example: 'IDs at the gate / vehicles right now.' }
      ],
      explanation: 'El Presente Simple describe rutinas habituales, reglamentos permanentes y hechos diarios (acompañado por adverbios como always, usually, sometimes, never antes del verbo principal). El Presente Continuo expresa exclusivamente lo que está ocurriendo en este instante (at the moment, right now) o situaciones temporales en desarrollo.',
      examples: [
        { english: 'Sergeant Ramos usually conducts the morning inspection, but today he is attending a staff conference.', spanish: 'El sargento Ramos normalmente realiza la inspección matutina, pero hoy está asistiendo a una reunión de estado mayor.', notes: 'Contraste entre rutina habitual (usually conducts) y acción en progreso temporal (is attending).' },
        { english: 'Look! The convoy is entering the perimeter right now.', spanish: '¡Miren! El convoy está ingresando al perímetro ahora mismo.', notes: 'Acción visible en desarrollo en el momento de hablar.' }
      ],
      commonMistakes: [
        { incorrect: 'He is usually coming early.', correct: 'He usually comes early.', reason: 'Los hábitos permanentes o rutinas no se expresan en presente continuo; se usa el Presente Simple.' },
        { incorrect: 'Soldiers clean weapons at the moment.', correct: 'Soldiers are cleaning weapons at the moment.', reason: 'Con marcadores inmediatos como "at the moment" o "now", es obligatorio el Presente Continuo (am/is/are + -ing).' }
      ]
    },
    {
      title: 'Futuro de Intención y Planes Previstos: BE GOING TO',
      structureFormula: 'Sujeto + am / is / are + GOING TO + Verbo en Forma Base + Complemento',
      orderElements: [
        { position: 1, element: 'Sujeto', function: 'Individuo o unidad militar que planea la acción', example: 'We / Captain Lewis' },
        { position: 2, element: 'Verbo to be auxiliar', function: 'Concordancia con el sujeto (am / is / are)', example: 'are / is' },
        { position: 3, element: 'Marcador de futuro', function: 'Fórmula fija obligatoria', example: 'going to' },
        { position: 4, element: 'Verbo Base + Objeto', function: 'Acción que se prevé ejecutar', example: 'deploy to Campo de Mayo next Monday.' }
      ],
      explanation: '"Be going to" se utiliza para planes decididos con anticipación, intenciones operacionales confirmadas y predicciones fundamentadas en evidencia presente. En preguntas, se invierte el orden: "Are you going to attend the briefing?".',
      examples: [
        { english: 'The battalion is going to conduct a live-fire exercise next month.', spanish: 'El batallón va a realizar un ejercicio de tiro real el próximo mes.', notes: 'Plan calendarizado y previsto en el plan anual de instrucción.' },
        { english: 'What are you going to do after lights out?', spanish: '¿Qué vas a hacer después del toque de silencio?', notes: 'Pregunta interrogativa con inversión de auxiliar.' }
      ],
      commonMistakes: [
        { incorrect: 'We going to inspect the hangar.', correct: 'We are going to inspect the hangar.', reason: 'Nunca debe omitirse el verbo auxiliar "to be" (are).' },
        { incorrect: 'He is going to testing the radios.', correct: 'He is going to test the radios.', reason: 'El verbo que sigue a "going to" debe estar en forma base infinitiva sin -ing.' }
      ]
    },
    {
      title: 'El Pasado Simple del Verbo TO BE: WAS y WERE',
      structureFormula: 'Afirmativo: Suj + was/were + Compl | Negativo: Suj + wasn\'t/weren\'t | Pregunta: Was/Were + Suj + Compl?',
      orderElements: [
        { position: 1, element: 'Sujeto o Was/Were', function: 'En afirmación: Sujeto | En pregunta: Was (I, he, she, it) o Were (you, we, they)', example: 'Were / The officers' },
        { position: 2, element: 'Verbo TO BE pasado o Sujeto', function: 'Concordancia obligatoria', example: 'you / were' },
        { position: 3, element: 'Ubicación / Estado Pasado', function: 'Complemento de tiempo o lugar', example: 'on sentry duty last night?' }
      ],
      explanation: 'Was se utiliza con los pronombres I, he, she, it y sustantivos singulares. Were se utiliza con you, we, they y sustantivos plurales. En preguntas, la inversión es obligatoria sin utilizar auxiliares "did".',
      examples: [
        { english: 'Lieutenant Gomez was at the checkpoint at zero-three-hundred hours.', spanish: 'El teniente Gómez estaba en el puesto de control a las 0300 horas.' },
        { english: 'The barracks were not secure until the guard arrived.', spanish: 'Las cuadras no estaban aseguradas hasta que llegó la guardia.' }
      ],
      commonMistakes: [
        { incorrect: 'Did you were at the meeting?', correct: 'Were you at the meeting?', reason: 'El verbo to be en pasado forma preguntas por inversión propia; nunca usa el auxiliar "did".' },
        { incorrect: 'We was on patrol yesterday.', correct: 'We were on patrol yesterday.', reason: 'El pronombre "we" exige siempre la forma plural "were".' }
      ]
    },
    {
      title: 'Diferenciación Estructural entre Verbos Modales: CAN, COULD, HAVE TO, MUST, WOULD',
      structureFormula: 'Sujeto + Modal (Can / Could / Have to / Must / Would) + Verbo Base + Complemento',
      orderElements: [
        { position: 1, element: 'Sujeto', function: 'Persona sobre quien recae la norma o habilidad', example: 'All drivers' },
        { position: 2, element: 'Verbo Modal', function: 'Nivel de deber, permiso, habilidad o cortesía', example: 'must / have to / can / would' },
        { position: 3, element: 'Verbo en Infinitivo (sin to)', function: 'Acción prescrita o requerida', example: 'carry / submit' },
        { position: 4, element: 'Objeto y Condición', function: 'Norma de cumplimiento reglamentario', example: 'a valid military driving permit at all times.' }
      ],
      explanation: 'En el marco militar: MUST expresa una orden directa e ineludible de la autoridad o prohibición estricta (MUST NOT). HAVE TO expresa una norma reglamentaria externa institucional; su negativo DON\'T HAVE TO indica falta de necesidad (no es obligatorio, pero no está prohibido). CAN expresa habilidad o permiso presente. COULD expresa una petición cortés de cortesía militar ("Could you..."). WOULD expresa ofrecimientos o deseos corteses ("Would you like...? / I would like...").',
      examples: [
        { english: 'You must not enter the ammunition store without an authorized escort.', spanish: 'No debe ingresar al polvorín sin escolta autorizada (prohibición categórica).' },
        { english: 'You don\'t have to wear dress uniform today; fatigue uniform is authorized.', spanish: 'No tiene que vestir uniforme de gala hoy; el uniforme de faena está autorizado (falta de necesidad).' },
        { english: 'Could you give me the coordinates for Rally Point Charlie, Sir?', spanish: '¿Podría darme las coordenadas para el Punto de Reunión Charlie, señor? (petición respetuosa).' }
      ],
      commonMistakes: [
        { incorrect: 'You must to wear a helmet.', correct: 'You must wear a helmet.', reason: 'Los modales puros (must, can, could, would) nunca van seguidos de la partícula "to".' },
        { incorrect: 'You don\'t have wear helmet.', correct: 'You don\'t have to wear a helmet.', reason: '"Have to" sí requiere obligatoriamente "to" antes del verbo principal.' },
        { incorrect: 'He musts report.', correct: 'He must report.', reason: 'Los verbos modales son invariables; nunca añaden -s ni -es en tercera persona.' }
      ]
    },
    {
      title: 'Pronombres Personales Objeto vs Posesivos vs Caso Posesivo (\'s)',
      structureFormula: 'Sujeto + Verbo + Pronombre Objeto (me/you/him/her/it/us/them) | Adjetivo Posesivo + Sustantivo',
      orderElements: [
        { position: 1, element: 'Sujeto', function: 'Emisor de la acción', example: 'The Sergeant Major' },
        { position: 2, element: 'Verbo transitivo', function: 'Acción orientada a un receptor', example: 'called' },
        { position: 3, element: 'Pronombre Objeto', function: 'Destinatario que recibe la acción', example: 'us (a nosotros) / him (a él)' },
        { position: 4, element: 'Complemento con Posesivo', function: 'Indica pertenencia de objetos o cargos', example: 'into his office to inspect our weapons.' }
      ],
      explanation: 'Los pronombres objeto (me, you, him, her, it, us, them) se usan tras verbos y preposiciones ("Report to him", "Come with us"). Los adjetivos posesivos (my, your, his, her, its, our, their) acompañan sustantivos ("our base"). El Genitivo Sajón (\'s) indica posesión en personas o rangos ("The Captain\'s vehicle", "The officers\' quarters").',
      examples: [
        { english: 'Captain Diaz ordered him to deliver the radio batteries to us.', spanish: 'El capitán Díaz le ordenó a él entregarnos las baterías de radio a nosotros.' },
        { english: 'This is the Company Commander\'s tactical map.', spanish: 'Este es el mapa táctico del Jefe de Compañía.' }
      ],
      commonMistakes: [
        { incorrect: 'Give the map to he.', correct: 'Give the map to him.', reason: 'Tras una preposición como "to", es obligatorio el pronombre objeto ("him"), nunca el sujeto ("he").' },
        { incorrect: 'The car of the Colonel.', correct: 'The Colonel\'s car.', reason: 'En inglés se prefiere el posesivo con apóstrofo \'s para personas y rangos militares.' }
      ]
    },
    {
      title: 'Imperativos, Direcciones y Preposiciones de Tiempo (AT, ON, IN) y Lugar',
      structureFormula: 'Tiempo: AT (hora/momento exacto) | ON (días/fechas) | IN (meses/años/períodos)',
      orderElements: [
        { position: 1, element: 'Actividad u orden', function: 'Acción programada', example: 'The tactical march begins' },
        { position: 2, element: 'Preposición temporal', function: 'AT / ON / IN según la precisión', example: 'at / on / in' },
        { position: 3, element: 'Referencia temporal', function: 'Hora exacta, día de la semana o mes', example: '0600 hours / on Tuesday morning / in November.' },
        { position: 4, element: 'Ubicación espacial', function: 'Preposiciones: opposite, between, next to, behind', example: 'opposite the parade ground.' }
      ],
      explanation: 'Regla nemotécnica temporal: AT para horas y puntos específicos (at 0800 hours, at noon, at night); ON para días concretos y fechas completas (on Monday, on 25th May); IN para períodos amplios, meses y años (in July, in 2026, in the morning). En el espacio: OPPOSITE (enfrente, cruzando la calle), NEXT TO (al lado de), BETWEEN (entre dos puntos), BEHIND (detrás de).',
      examples: [
        { english: 'The inspection takes place at 0730 hours on Thursday, in the motor pool.', spanish: 'La revista se lleva a cabo a las 0730 horas el jueves, en el parque de automotores.' },
        { english: 'The armory is located between the guardroom and Hangar 2.', spanish: 'La armería está ubicada entre el cuerpo de guardia y el Hangar 2.' }
      ],
      commonMistakes: [
        { incorrect: 'The briefing is in Monday.', correct: 'The briefing is on Monday.', reason: 'Con días de la semana la preposición obligatoria es siempre "on".' },
        { incorrect: 'Muster parade starts on 0600 hours.', correct: 'Muster parade starts at 0600 hours.', reason: 'Con horarios específicos se debe utilizar estrictamente la preposición "at".' }
      ]
    },
    {
      title: 'Verbo To Be y Formulación de Preguntas (Question Making)',
      structureFormula: 'Afirmativo: Suj + am/is/are + Compl | Interrogativo: (Wh-?) + Am/Is/Are + Suj + Compl?',
      orderElements: [
        { position: 1, element: 'Palabra interrogativa (opcional)', function: 'Información indagada (What, Where, Who, How)', example: 'Where' },
        { position: 2, element: 'Verbo To Be (Am / Is / Are)', function: 'Operador auxiliar invertido con el sujeto', example: 'is' },
        { position: 3, element: 'Sujeto', function: 'Persona o dependencia interrogada', example: 'the orderly sergeant' },
        { position: 4, element: 'Complemento', function: 'Ubicación o estado actual', example: 'stationed today?' }
      ],
      explanation: 'En las preguntas con el verbo to be NO se utiliza el auxiliar do/does. Se realiza una inversión directa anteponiendo am/is/are al sujeto.',
      examples: [
        { english: 'Are you the new liaison officer from Argentina?', spanish: '¿Es usted el nuevo oficial de enlace de Argentina?' },
        { english: 'Where is the battalion armory?', spanish: '¿Dónde está la armería del batallón?' }
      ],
      commonMistakes: [
        { incorrect: 'Do you are a corporal?', correct: 'Are you a corporal?', reason: 'El verbo to be no lleva auxiliar "do". Invierte directamente.' },
        { incorrect: 'Yes, I\'m.', correct: 'Yes, I am.', reason: 'En respuestas cortas afirmativas nunca se contrae el verbo to be.' }
      ]
    },
    {
      title: 'Sustantivos Contables/Incontables, Cuantificadores y There is / There are',
      structureFormula: 'Singular: There is a/an... | Plural: There are some... | Negativa/Pregunta: any',
      orderElements: [
        { position: 1, element: 'There is / There are', function: 'Expresión de existencia', example: 'There are' },
        { position: 2, element: 'Cuantificador', function: 'some / any / a lot of', example: 'some' },
        { position: 3, element: 'Sustantivo Contable / Incontable', function: 'Objeto descripto', example: 'spare radios' },
        { position: 4, element: 'Ubicación', function: 'Lugar donde se encuentran', example: 'in the communications office.' }
      ],
      explanation: '"There is" se usa con sustantivos singulares o incontables (water, equipment, ammunition, information). "There are" se usa con sustantivos plurales contables.',
      examples: [
        { english: 'Is there any potable water in the field canteen?', spanish: '¿Hay agua potable en la cantimplora de campaña?' },
        { english: 'There are forty recruits on the parade ground.', spanish: 'Hay cuarenta reclutas en la plaza de armas.' }
      ],
      commonMistakes: [
        { incorrect: 'There is three bedrooms.', correct: 'There are three bedrooms.', reason: 'Sujeto plural requiere "there are".' },
        { incorrect: 'Are there some questions?', correct: 'Are there any questions?', reason: 'En preguntas generales se emplea "any", no "some".' }
      ]
    }
  ],
  phonetics: [
    {
      title: 'La Pronunciación de la Terminación -ING: El Sonido Nasal Velar /ŋ/',
      soundIpa: '/ŋ/ (nasal velar)',
      description: 'La terminación -ing en Presente Continuo y sustantivos verbales se pronuncia con una vibración nasal velar, sin golpear una /g/ oclusiva.',
      articulatoryGuide: 'La parte posterior de la lengua sube y hace contacto con el paladar blando (velo), permitiendo que el aire salga únicamente por la nariz. No debe sonar como un golpe de "g" dura ni reducirse a una simple "n" (/ɪn/).',
      rules: [
        'Calling se pronuncia /ˈkɔːlɪŋ/, no /kɔːlɪn/ ni /kɔːlɪnɡ/.',
        'Training se pronuncia /ˈtreɪnɪŋ/.',
        'Inspection & Marching: la vibración continúa en la cavidad nasal suavemente.'
      ],
      practiceWords: [
        { word: 'briefing', ipa: '/ˈbriːfɪŋ/', stressPattern: 'BRIEF-ing', translation: 'reunión informativa' },
        { word: 'training', ipa: '/ˈtreɪnɪŋ/', stressPattern: 'TRAIN-ing', translation: 'instrucción / adiestramiento' },
        { word: 'cleaning', ipa: '/ˈkliːnɪŋ/', stressPattern: 'CLEAN-ing', translation: 'limpieza y mantenimiento' },
        { word: 'standing', ipa: '/ˈstændɪŋ/', stressPattern: 'STAND-ing', translation: 'de pie / estado de alerta' }
      ],
      minimalPairs: [
        { word1: 'thin', ipa1: '/θɪn/', meaning1: 'delgado (nasal alveolar)', word2: 'thing', ipa2: '/θɪŋ/', meaning2: 'cosa (nasal velar /ŋ/)' },
        { word1: 'sin', ipa1: '/sɪn/', meaning1: 'pecado', word2: 'sing', ipa2: '/sɪŋ/', meaning2: 'cantar (nasal /ŋ/)' },
        { word1: 'ran', ipa1: '/ræn/', meaning1: 'corrió', word2: 'rang', ipa2: '/ræŋ/', meaning2: 'sonó la alarma' }
      ]
    },
    {
      title: 'Las Tres Desinencias Fonéticas de la 3ra Persona y Plurales (-s / -es)',
      soundIpa: '/s/, /z/, /ɪz/',
      description: 'Regla de pronunciación sistemática para la terminación -s en verbos de Presente Simple y sustantivos plurales.',
      articulatoryGuide: 'Vibración de cuerdas vocales: /s/ es sorda (sin vibración), /z/ es sonora (zumbido), /ɪz/ agrega una sílaba completa tras sibilantes.',
      rules: [
        'Tras sonidos sordos (/p, t, k, f, θ/): se pronuncia /s/ (ej. halts /hɔːlts/, ranks /ræŋks/).',
        'Tras sonidos sonoros (vocales y /b, d, ɡ, v, m, n, l, r/): se pronuncia /z/ (ej. guards /ɡɑːdz/, cleans /kliːnz/).',
        'Tras sonidos sibilantes (/s, z, ʃ, tʃ, dʒ/): se pronuncia la sílaba /ɪz/ (ej. passes /ˈpɑːsɪz/, watches /ˈwɒtʃɪz/).'
      ],
      practiceWords: [
        { word: 'halts', ipa: '/hɔːlts/', stressPattern: 'halts (/s/)', translation: 'se detiene' },
        { word: 'orders', ipa: '/ˈɔːdəz/', stressPattern: 'OR-ders (/z/)', translation: 'órdenes' },
        { word: 'officers', ipa: '/ˈɒfɪsəz/', stressPattern: 'OF-fi-cers (/z/)', translation: 'oficiales' },
        { word: 'boxes', ipa: '/ˈbɒksɪz/', stressPattern: 'BOX-es (/ɪz/)', translation: 'cajas de munición' }
      ]
    },
    {
      title: 'Letras Mudas y Reducciones Tácticas en Vocabulario Militar',
      soundIpa: 'Letras Mudas: silent \'l\', \'k\', \'w\'',
      description: 'En inglés británico formal muchas consonantes históricas escritas no se articulan vocalmente.',
      articulatoryGuide: 'En palabras como "half", "could", "would", la "l" no debe pronunciarse nunca. En "knife", "know", la "k" es muda. En "sword", "write", la "w" no emite sonido.',
      rules: [
        'Half /hɑːf/: la "l" es totalmente muda (suena "jaf").',
        'Could /kʊd/ y Would /wʊd/: la "l" no se articula.',
        'Weapon /ˈwepən/: la letra "a" es muda, suena como /e/ breve.',
        'Sword /sɔːd/: la "w" no se pronuncia jamás.'
      ],
      practiceWords: [
        { word: 'half past', ipa: '/hɑːf pɑːst/', stressPattern: 'half PAST', translation: 'y media (horas)' },
        { word: 'could', ipa: '/kʊd/', stressPattern: 'could', translation: 'podría (petición cortés)' },
        { word: 'knife', ipa: '/naɪf/', stressPattern: 'knife', translation: 'cuchillo táctico / bayoneta' },
        { word: 'sword', ipa: '/sɔːd/', stressPattern: 'sword', translation: 'sable militar reglamentario' }
      ]
    },
    {
      title: 'El Alfabeto Fonético Militar OTAN y Deletreo (NATO Spelling)',
      soundIpa: 'Alfa, Bravo, Charlie... Zulu',
      description: 'Pronunciación estándar internacional de cada letra en transmisiones de radio.',
      articulatoryGuide: 'Articulación nítida y enfática de las palabras código para asegurar legibilidad sobre enlaces con estática.',
      rules: [
        'A: Alfa /ˈælfə/, B: Bravo /ˈbrɑːvəʊ/, C: Charlie /ˈtʃɑːli/, D: Delta /ˈdeltə/.',
        'E: Echo /ˈekəʊ/, F: Foxtrot /ˈfɒkstrɒt/, G: Golf /ɡɒlf/, H: Hotel /həʊˈtel/.',
        'I: India /ˈɪndiə/, J: Juliett /ˈdʒuːliˈet/, K: Kilo /ˈkiːləʊ/, L: Lima /ˈliːmə/.',
        'M: Mike /maɪk/, N: November /nəʊˈvembə/, O: Oscar /ˈɒskə/, P: Papa /pəˈpɑː/.',
        'Q: Quebec /kwɪˈbek/, R: Romeo /ˈrəʊmiəʊ/, S: Sierra /siˈerə/, T: Tango /ˈtæŋɡəʊ/.',
        'U: Uniform /ˈjuːnɪfɔːm/, V: Victor /ˈvɪktə/, W: Whiskey /ˈwɪski/, X: X-ray /ˈeksreɪ/, Y: Yankee /ˈjæŋki/, Z: Zulu /ˈzuːluː/.'
      ],
      practiceWords: [
        { word: 'SMITH', ipa: 'Sierra-Mike-India-Tango-Hotel', stressPattern: 'Spelling', translation: 'Apellido de ejemplo' },
        { word: 'BASE', ipa: 'Bravo-Alfa-Sierra-Echo', stressPattern: 'Spelling', translation: 'Base militar' }
      ]
    },
    {
      title: 'Pares Mínimos Cruciales para Discriminación Auditiva en STANAG Nivel 1',
      soundIpa: 'Contraste Vocálico y Consonántico',
      description: 'Discriminación acústica de pares fonéticos confusos que alteran el significado operativo de órdenes.',
      articulatoryGuide: 'Contrastar la longitud vocálica (vocales breves tensas vs vocales largas relajadas) y la posición labiodental.',
      rules: [
        'CAN vs CAN\'T: En inglés británico, "can" en oraciones afirmativas es débil /kən/, pero "can\'t" tiene una vocal posterior abierta larga /kɑːnt/.',
        'SHIP vs SHEEP: /ɪ/ breve vs /iː/ larga.',
        'WALK vs WORK: /wɔːk/ (vocal posterior abierta) vs /wɜːk/ (vocal central media er).'
      ],
      practiceWords: [
        { word: 'can\'t', ipa: '/kɑːnt/', stressPattern: 'CAN\'T', translation: 'no poder (vocal británica /ɑː/)' },
        { word: 'walk', ipa: '/wɔːk/', stressPattern: 'WALK', translation: 'marchar / caminar' },
        { word: 'work', ipa: '/wɜːk/', stressPattern: 'WORK', translation: 'trabajar / servicio' }
      ],
      minimalPairs: [
        { word1: 'can', ipa1: '/kæn/ o /kən/', meaning1: 'poder / capacidad', word2: 'can\'t', ipa2: '/kɑːnt/', meaning2: 'no poder / incapacidad' },
        { word1: 'ship', ipa1: '/ʃɪp/', meaning1: 'buque / navío de guerra', word2: 'sheep', ipa2: '/ʃiːp/', meaning2: 'oveja' },
        { word1: 'walk', ipa1: '/wɔːk/', meaning1: 'marchar / caminar', word2: 'work', ipa2: '/wɜːk/', meaning2: 'trabajar / cumplir servicio' },
        { word1: 'leave', ipa1: '/liːv/', meaning1: 'partir / salir de licencia', word2: 'live', ipa2: '/lɪv/', meaning2: 'vivir / residir' }
      ]
    },
    {
      title: 'Diferenciación de Números: -teen (/tiːn/) vs -ty (/ti/)',
      soundIpa: '/θɜːˈtiːn/ vs /ˈθɜːti/',
      description: 'Contraste acústico fundamental para evitar confusiones en horarios, efectivos y frecuencias de radio.',
      articulatoryGuide: 'Los números de 13 a 19 llevan acento tónico fuerte en la segunda sílaba (-TEEN /tiːn/ larga). Las decenas terminadas en -ty llevan acento en la primera sílaba (THIR-ty /ti/ breve).',
      rules: [
        '13 = thir-TEEN /θɜːˈtiːn/ vs 30 = THIR-ty /ˈθɜːti/.',
        '14 = four-TEEN /fɔːˈtiːn/ vs 40 = FOR-ty /ˈfɔːti/.',
        '15 = fif-TEEN /fɪfˈtiːn/ vs 50 = FIF-ty /ˈfɪfti/.',
        '18 = eigh-TEEN /eɪˈtiːn/ vs 80 = EIGH-ty /ˈeɪti/.'
      ],
      practiceWords: [
        { word: 'fourteen hundred hours', ipa: '/fɔːˈtiːn ˈhʌndrəd aʊəz/', stressPattern: '14:00 hrs', translation: 'catorce horas' },
        { word: 'forty soldiers', ipa: '/ˈfɔːti ˈsəʊldʒəz/', stressPattern: '40', translation: 'cuarenta soldados' }
      ]
    }
  ],
  usefulPhrases: [
    {
      communicativeFunction: 'Llamadas Telefónicas Oficiales y Coordinación de Citas',
      situation: 'Comunicación telefónica interna o externa en dependencias del cuartel.',
      phrases: [
        { english: 'Good morning, Headquarters Company. Corporal Alvarez speaking. How may I direct your call, Sir?', spanish: 'Buenos días, Compañía Comando. Habla el cabo Álvarez. ¿Con quién desea comunicarse, señor?', usageNote: 'Fórmula reglamentaria de contestación telefónica castrense.', register: 'Formal / Táctico' },
        { english: 'Hold the line, please. I am putting you through to the Operations Officer.', spanish: 'Aguarde en línea, por favor. Lo comunico con el Oficial de Operaciones.', usageNote: 'Transferencia de llamada a otra extensión.', register: 'Formal / Táctico' },
        { english: 'I am afraid Major Sterling is in a staff briefing. Would you like to leave a message?', spanish: 'Me temo que el mayor Sterling está en una reunión de estado mayor. ¿Desea dejar un recado?', usageNote: 'Respuesta protocolar ante la ausencia de un superior.', register: 'Formal / Táctico' },
        { english: 'Could we reschedule our meeting to Thursday at fourteen-thirty hours?', spanish: '¿Podríamos reprogramar nuestra reunión para el jueves a las 1430 horas?', usageNote: 'Coordinación formal de agenda.', register: 'Neutro' }
      ]
    },
    {
      communicativeFunction: 'En el Casino Militar, Restaurante o Bar: Pedidos y Cuentas',
      situation: 'Almorzar o cenar en el casino de oficiales o restaurante de la guarnición.',
      phrases: [
        { english: 'Excuse me, could we have the menu and the wine list, please?', spanish: 'Disculpe, ¿podría traernos la carta y la lista de vinos, por favor?', usageNote: 'Solicitud inicial al camarero.', register: 'Neutro' },
        { english: 'I would like the roast beef with vegetables, and still mineral water, please.', spanish: 'Quisiera el lomo asado con verduras y agua mineral sin gas, por favor.', usageNote: 'Elección de plato principal y bebida.', register: 'Neutro' },
        { english: 'Could we have the bill, please? Do you accept contactless cards?', spanish: '¿Nos trae la cuenta, por favor? ¿Aceptan pago sin contacto?', usageNote: 'Cierre del almuerzo y consulta de medio de pago.', register: 'Neutro' },
        { english: 'Keep the change, thank you very much.', spanish: 'Quédese con el cambio, muchas gracias.', usageNote: 'Fórmula de cortesía británica al dejar propina.', register: 'Neutro' }
      ]
    },
    {
      communicativeFunction: 'Formular, Aceptar o Declinar Invitaciones Oficiales y Sociales',
      situation: 'Interacción social protocolar entre camaradas u oficiales de enlace.',
      phrases: [
        { english: 'Would you like to join us for dinner at the Officers\' Mess this evening?', spanish: '¿Le gustaría acompañarnos a cenar en el Casino de Oficiales esta noche?', usageNote: 'Invitación formal respetuosa.', register: 'Formal / Táctico' },
        { english: 'Thank you very much. I would love to attend.', spanish: 'Muchas gracias. Me encantaría asistir.', usageNote: 'Aceptación cordial de invitación.', register: 'Formal / Táctico' },
        { english: 'I am very sorry, but I am afraid I have sentry duty tonight.', spanish: 'Lo lamento mucho, pero me temo que estoy de guardia de centinela esta noche.', usageNote: 'Declinación justificada con motivo de servicio.', register: 'Formal / Táctico' }
      ]
    },
    {
      communicativeFunction: 'Expresar Obligaciones, Prohibiciones y Normas de Seguridad',
      situation: 'Instrucción sobre medidas de seguridad en el polígono y cuartel.',
      phrases: [
        { english: 'All personnel have to wear ballistic helmets and eye protection in this sector.', spanish: 'Todo el personal debe usar casco balístico y protección ocular en este sector.', usageNote: 'Norma reglamentaria obligatoria (have to).', register: 'Formal / Táctico' },
        { english: 'You must not chamber a round until the firing officer gives the command.', spanish: 'No debe colocar cartucho en recámara hasta que el oficial de tiro dé la orden.', usageNote: 'Prohibición de seguridad perentoria (must not).', register: 'Formal / Táctico' },
        { english: 'You don\'t have to salute NCOs on the field obstacle course.', spanish: 'No es obligatorio saludar a los suboficiales en la pista de combate.', usageNote: 'Ausencia de obligación reglamentaria (don\'t have to).', register: 'Formal / Táctico' }
      ]
    },
    {
      communicativeFunction: 'Describir la Rutina Diaria y la Situación Operativa Actual',
      situation: 'Briefing oral sobre el cronograma diario y el estado de la unidad.',
      phrases: [
        { english: 'Our squad usually wakes up at zero-five-thirty hours for physical training.', spanish: 'Nuestro grupo normalmente se levanta a las 0530 horas para gimnasia militar.', usageNote: 'Descripción de rutina habitual con Presente Simple.', register: 'Formal / Táctico' },
        { english: 'Currently, the second platoon is conducting vehicle maintenance in the motor pool.', spanish: 'Actualmente, la segunda sección está realizando mantenimiento vehicular en el parque.', usageNote: 'Reporte de acción en desarrollo con Presente Continuo.', register: 'Formal / Táctico' },
        { english: 'Tomorrow morning we are going to inspect the perimeter security posts.', spanish: 'Mañana por la mañana vamos a inspeccionar los puestos de seguridad perimetral.', usageNote: 'Planes futuros previstos con "be going to".', register: 'Formal / Táctico' }
      ]
    },
    {
      communicativeFunction: 'Pedir y Conceder Permiso, Favores y Asistencia',
      situation: 'Trato formal con superiores y coordinación entre pares.',
      phrases: [
        { english: 'Could you please give me a hand with this communications antenna?', spanish: '¿Podría darme una mano con esta antena de comunicaciones, por favor?', usageNote: 'Solicitud cortés de ayuda técnica.', register: 'Neutro' },
        { english: 'May I enter the briefing room, Sir? — Yes, you may. Carry on.', spanish: '¿Puedo ingresar a la sala de conferencias, señor? — Sí, puede ingresar. Continúe.', usageNote: 'Fórmula reglamentaria de solicitud y concesión de permiso.', register: 'Formal / Táctico' },
        { english: 'I apologize for the delay, Captain. — No problem, take your seat.', spanish: 'Le pido disculpas por la demora, mi Capitán. — No hay problema, tome asiento.', usageNote: 'Disculpa protocolar y respuesta tranquilizadora.', register: 'Formal / Táctico' }
      ]
    },
    {
      communicativeFunction: 'Saludos, Presentaciones e Información Personal en Guarnición',
      situation: 'Llegada al cuartel militar, bienvenida y trato formal e informal.',
      phrases: [
        { english: 'Good morning, Sir. I am Lieutenant Garcia from the Argentine Army.', spanish: 'Buenos días, señor. Soy el teniente García del Ejército Argentino.', usageNote: 'Fórmula protocolar de presentación inicial.', register: 'Formal / Táctico' },
        { english: 'Pleased to meet you. This is Captain Henderson, our liaison officer.', spanish: 'Mucho gusto en conocerlo. Le presento al capitán Henderson, nuestro oficial de enlace.', usageNote: 'Presentación de terceros.', register: 'Formal / Táctico' }
      ]
    },
    {
      communicativeFunction: 'Solicitar y Dar Instrucciones para Llegar a un Lugar (Direcciones)',
      situation: 'Orientación geográfica dentro de la base y en zonas aledañas.',
      phrases: [
        { english: 'Go straight ahead for two hundred metres, then turn left opposite the armory.', spanish: 'Siga derecho doscientos metros, luego gire a la izquierda frente a la armería.', usageNote: 'Comandos de navegación con imperativos.', register: 'Formal / Táctico' },
        { english: 'The battalion headquarters is located next to the main parade ground.', spanish: 'La jefatura de batallón está ubicada junto a la plaza de armas principal.', usageNote: 'Localización espacial precisa.', register: 'Formal / Táctico' }
      ]
    }
  ]
};
