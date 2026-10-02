/**
 * Translation and Military/General Dictionary Engine
 * Supports bidirectional translation (ES <-> EN),
 * detailed definitions, phonetic transcriptions, grammatical categories,
 * military context (STANAG 6001 / NATO), example sentences, and audio pronunciation.
 */

export interface DictionaryEntry {
  en: string;
  es: string;
  partOfSpeech: string;
  phoneticEn?: string;
  phoneticEs?: string;
  definitionEs: string;
  definitionEn: string;
  militaryContext?: string;
  examples?: Array<{
    en: string;
    es: string;
  }>;
  synonymsEn?: string[];
  synonymsEs?: string[];
}

export interface TranslationResult {
  sourceText: string;
  translatedText: string;
  fromLang: 'es' | 'en';
  toLang: 'es' | 'en';
  phonetic?: string;
  exactEntry?: DictionaryEntry;
  keyWordsEntries: DictionaryEntry[];
  isSentence: boolean;
  provider: 'dictionary' | 'neural-api' | 'hybrid';
}

/**
 * Curated bilingual military and general vocabulary base
 */
export const MILITARY_DICTIONARY: DictionaryEntry[] = [
  {
    en: 'briefing',
    es: 'reunión informativa / sesión preparatoria operacional',
    partOfSpeech: 'noun (sustantivo militar)',
    phoneticEn: '/ˈbriːfɪŋ/',
    definitionEs: 'Sesión informativa estructurada en la que se transmiten órdenes, la situación táctica, la misión y los procedimientos operativos a una unidad antes o después de una misión.',
    definitionEn: 'A structured meeting for giving detailed operational information, mission orders, or instructions prior to military deployment.',
    militaryContext: 'Formato estándar OTAN de 5 puntos: SMEAC (Situation, Mission, Execution, Administration, Command).',
    examples: [
      {
        en: 'The company commander delivered the operational briefing at 0700 hours.',
        es: 'El jefe de compañía impartió el briefing operacional a las 0700 horas.'
      },
      {
        en: 'Every pilot must attend the pre-flight intelligence briefing.',
        es: 'Cada piloto debe asistir al briefing de inteligencia previo al vuelo.'
      }
    ],
    synonymsEn: ['debrief', 'instructions', 'operational summary'],
    synonymsEs: ['sesión informativa', 'instrucciones previas', 'informe preparatorio']
  },
  {
    en: 'patrol',
    es: 'patrulla / patrullaje',
    partOfSpeech: 'noun & verb (sustantivo y verbo)',
    phoneticEn: '/pəˈtrəʊl/',
    definitionEs: 'Destacamento de tropas asignado para vigilar, explorar, recopilar información o proteger una zona determinada.',
    definitionEn: 'A detachment of troops sent out for reconnaissance, security, or to protect a specific geographical sector.',
    militaryContext: 'Misión esencial de infantería: patrullas de combate (combat patrols) y patrullas de reconocimiento (reconnaissance patrols).',
    examples: [
      {
        en: 'Number One Section will conduct a foot patrol along the northern ridge.',
        es: 'La Sección Número Uno realizará una patrulla a pie a lo largo de la cresta norte.'
      },
      {
        en: 'Sentries patrol the base perimeter continuously during the night.',
        es: 'Los centinelas patrullan el perímetro de la base continuamente durante la noche.'
      }
    ],
    synonymsEn: ['reconnaissance', 'scouting', 'surveillance team'],
    synonymsEs: ['destacamento de guardia', 'ronda de vigilancia', 'reconocimiento']
  },
  {
    en: 'posting',
    es: 'destino militar / pase a nueva unidad o guarnición',
    partOfSpeech: 'noun (sustantivo militar)',
    phoneticEn: '/ˈpəʊstɪŋ/',
    definitionEs: 'Asignación u orden oficial que destina a un oficial o suboficial a servir en una nueva base, cuartel o misión en el extranjero.',
    definitionEn: 'An official assignment or transfer of military personnel to a specific unit, garrison, or overseas location.',
    militaryContext: 'Término estándar en el Ejército Británico y OTAN para lo que en el Ejército Argentino se denomina "pase de destino" o "cambio de guarnición".',
    examples: [
      {
        en: 'Captain Ramirez received his new posting to the mountain infantry brigade.',
        es: 'El Capitán Ramírez recibió su nuevo destino en la brigada de infantería de montaña.'
      },
      {
        en: 'Regular postings every three years require high family resilience.',
        es: 'Los cambios regulares de destino cada tres años exigen una gran resiliencia familiar.'
      }
    ],
    synonymsEn: ['assignment', 'relocation', 'deployment'],
    synonymsEs: ['cambio de destino', 'traslado de guarnición', 'pase']
  },
  {
    en: 'muster',
    es: 'revista de tropas / concentración del personal',
    partOfSpeech: 'noun & verb (sustantivo y verbo militar)',
    phoneticEn: '/ˈmʌstə(r)/',
    definitionEs: 'Reunión formal o formación del personal militar para pasar lista, inspeccionar equipo o impartir órdenes.',
    definitionEn: 'An assembly or parade of military personnel for inspection, roll call, or preparation for operational duties.',
    militaryContext: 'Muster parade / morning muster: formación militar matutina obligatoria en cuarteles de la Commonwealth y OTAN.',
    examples: [
      {
        en: 'All troops must attend the morning muster parade at 0600 hours sharp.',
        es: 'Todas las tropas deben presentarse a la formación de lista a las 0600 horas en punto.'
      },
      {
        en: 'The sergeant ordered the squad to muster by the vehicle depot.',
        es: 'El sargento ordenó al pelotón concentrarse junto al depósito de vehículos.'
      }
    ],
    synonymsEn: ['assembly', 'roll call', 'inspection parade'],
    synonymsEs: ['formación de lista', 'llamado a filas', 'concentración']
  },
  {
    en: 'cease fire',
    es: 'alto el fuego / cese el fuego',
    partOfSpeech: 'military order / noun (orden táctica / sustantivo)',
    phoneticEn: '/ˌsiːs ˈfaɪə(r)/',
    definitionEs: 'Orden táctica inmediata para suspender todo disparo o acción bélica ofensiva.',
    definitionEn: 'An immediate tactical command to stop shooting or hostile military operations.',
    militaryContext: 'Proword de combate y protocolo de seguridad absoluto en campos de tiro y zonas de conflicto.',
    examples: [
      {
        en: 'Cease fire immediately! Check your weapons and stand fast.',
        es: '¡Alto el fuego de inmediato! Verifiquen sus armas y permanezcan en posición.'
      },
      {
        en: 'Both factions signed a temporary ceasefire to permit civilian evacuation.',
        es: 'Ambas facciones firmaron un alto el fuego temporal para permitir la evacuación de civiles.'
      }
    ],
    synonymsEn: ['truce', 'armistice', 'stand down'],
    synonymsEs: ['alto al fuego', 'tregua', 'suspensión de hostilidades']
  },
  {
    en: 'overwatch',
    es: 'apoyo de fuegos y vigilancia / posición de cobertura',
    partOfSpeech: 'noun & military tactic (táctica militar)',
    phoneticEn: '/ˈəʊvəwɒtʃ/',
    definitionEs: 'Táctica en la que una subunidad apoya a otra que avanza, proporcionando observación continua y fuego de cobertura desde una posición ventajosa.',
    definitionEn: 'A tactical military technique where one military unit provides protective fire and observation for another unit moving forward.',
    militaryContext: 'Doctrina de infantería mecanizada y asalto: "Number Two Section provides overwatch from Hill 24".',
    examples: [
      {
        en: 'The snipers provided overwatch while the patrol cleared the compound.',
        es: 'Los tiradores especiales proporcionaron vigilancia y cobertura mientras la patrulla despejaba el recinto.'
      }
    ]
  },
  {
    en: 'casualty',
    es: 'baja (muerto, herido o enfermo en acto de servicio)',
    partOfSpeech: 'noun (sustantivo militar)',
    phoneticEn: '/ˈkæʒuəlti/',
    definitionEs: 'Cualquier miembro de las fuerzas armadas que deja de estar disponible para el combate por muerte, herida, enfermedad, captura o extravío.',
    definitionEn: 'A person killed or injured in a war, operational mission, or field accident.',
    militaryContext: 'Clave en informes médicos MIST: Casualty Evacuation (CASEVAC) y Medical Evacuation (MEDEVAC).',
    examples: [
      {
        en: 'Medics treated two casualties and prepared them for air evacuation.',
        es: 'Los enfermeros atendieron a dos bajas y las prepararon para evacuación aérea.'
      }
    ],
    synonymsEn: ['wounded', 'fatality', 'loss'],
    synonymsEs: ['baja de combate', 'herido', 'afectado']
  },
  {
    en: 'reconnaissance',
    es: 'reconocimiento / exploración militar',
    partOfSpeech: 'noun (sustantivo militar)',
    phoneticEn: '/rɪˈkɒnɪsəns/',
    definitionEs: 'Misión exploratoria realizada para obtener información visual o técnica sobre el enemigo, el terreno o las condiciones meteorológicas.',
    definitionEn: 'A mission undertaken to obtain visual observation or other detection methods about the activities and resources of an enemy.',
    militaryContext: 'Abreviado frecuentemente como "recon" (EE.UU.) o "recce" (Reino Unido / Commonwealth).',
    examples: [
      {
        en: 'A recce patrol was deployed ahead of the main battle group.',
        es: 'Una patrulla de reconocimiento fue desplegada por delante del grupo de combate principal.'
      }
    ]
  },
  {
    en: 'roger',
    es: 'entendido / recibido (proword de radio)',
    partOfSpeech: 'proword (procedimiento de radiotelefonía militar)',
    phoneticEn: '/ˈrɒdʒə(r)/',
    definitionEs: 'Proword de radiotelefonía que confirma haber recibido y entendido el último mensaje transmitido por completo.',
    definitionEn: 'A procedure word used in radio communication meaning "I have received and understood all of your last transmission".',
    militaryContext: 'ESTRICTO STANAG 6001: "Roger" significa únicamente "comprendido". Para decir "cumpliré la orden", debe utilizarse "Wilco" (Will Comply).',
    examples: [
      {
        en: 'Roger that, Control. Advancing to Checkpoint Bravo now. Out.',
        es: 'Entendido, Control. Avanzando hacia el Puesto de Control Bravo ahora. Fin de transmisión.'
      }
    ]
  },
  {
    en: 'wilco',
    es: 'comprendido y cumpliré (proword de radio)',
    partOfSpeech: 'proword (procedimiento de radiotelefonía militar)',
    phoneticEn: '/ˈwɪlkəʊ/',
    definitionEs: 'Abreviatura de "Will Comply". Indica que la orden recibida fue comprendida y será ejecutada fielmente.',
    definitionEn: 'A radio proword abbreviation for "Will Comply", meaning "I have understood your message and will carry out your order".',
    militaryContext: 'Nunca debe decirse "Roger Wilco", ya que "Wilco" ya incluye a "Roger" implícitamente.',
    examples: [
      {
        en: 'Wilco. Dispatching medical team immediately.',
        es: 'Comprendido y en cumplimiento. Despachando equipo médico de inmediato.'
      }
    ]
  },
  {
    en: 'stand down',
    es: 'pasar a descanso / bajar el nivel de alerta',
    partOfSpeech: 'phrasal verb & order (verbo frasal y orden)',
    phoneticEn: '/stænd daʊn/',
    definitionEs: 'Cesar el estado de alerta o de guardia activa; desmovilizar tropas temporalmente para descanso o repliegue.',
    definitionEn: 'To relax from a state of readiness or duty; to withdraw or cease an alert state.',
    militaryContext: 'Orden de repliegue de puestos de combate o puestos de tiro.',
    examples: [
      {
        en: 'The guard detachment was ordered to stand down at sunset.',
        es: 'Se ordenó a la guardia pasar a descanso al atardecer.'
      }
    ]
  },
  {
    en: 'sitrep',
    es: 'informe de situación (SITREP)',
    partOfSpeech: 'noun (acrónimo militar)',
    phoneticEn: '/ˈsɪtrɛp/',
    definitionEs: 'Acrónimo de Situation Report. Informe periódico emitido por un comandante para resumir el estado táctico y operativo.',
    definitionEn: 'Acronym for Situation Report. A regular operational report detailing the current tactical situation.',
    militaryContext: 'Procedimiento estándar en OTAN y Naciones Unidas para transmisión radial cada hora o tras contacto.',
    examples: [
      {
        en: 'Send your Sitrep immediately upon arriving at the bridge.',
        es: 'Envíe su informe de situación inmediatamente al llegar al puente.'
      }
    ]
  },
  {
    en: 'convoy',
    es: 'convoy / columna de marcha',
    partOfSpeech: 'noun (sustantivo militar)',
    phoneticEn: '/ˈkɒnvɔɪ/',
    definitionEs: 'Grupo de vehículos terrestres o buques militares que se desplazan juntos con escolta armada y protección mutua.',
    definitionEn: 'A group of military vehicles or ships travelling together with armed escort for mutual support and defence.',
    militaryContext: 'Operaciones de sostenimiento logístico y misiones de paz (UN Convoy Security).',
    examples: [
      {
        en: 'The humanitarian food convoy reached the refugee camp without incident.',
        es: 'El convoy humanitario de alimentos llegó al campamento de refugiados sin incidentes.'
      }
    ]
  },
  {
    en: 'checkpoint',
    es: 'puesto de control / puesto de guardia',
    partOfSpeech: 'noun (sustantivo militar)',
    phoneticEn: '/ˈtʃɛkpɔɪnt/',
    definitionEs: 'Barrera u obstáculo militar tripulado para verificar credenciales, inspeccionar vehículos y controlar el tráfico.',
    definitionEn: 'A barrier or post where vehicles and pedestrians are stopped for identification and security inspection.',
    militaryContext: 'Común en misiones de paz de la ONU: Checkpoint Bravo, Vehicle Checkpoint (VCP).',
    examples: [
      {
        en: 'All civilian transport must halt at Checkpoint Three for inspection.',
        es: 'Todo transporte civil debe detenerse en el Puesto de Control Tres para inspección.'
      }
    ]
  },
  {
    en: 'ammunition',
    es: 'munición / pertrechos bélicos',
    partOfSpeech: 'noun (sustantivo militar)',
    phoneticEn: '/ˌæmjuˈnɪʃn/',
    definitionEs: 'Suministro de proyectiles, cartuchos, granadas o explosivos utilizados por las armas de fuego y artillería.',
    definitionEn: 'A supply of bullets, shells, missiles or other projectiles fired from weapons.',
    militaryContext: 'Abreviado con frecuencia en comunicaciones tácticas como "ammo".',
    examples: [
      {
        en: 'Ensure each soldier carries a basic load of ammunition before departure.',
        es: 'Asegúrese de que cada soldado porte su dotación básica de munición antes de la partida.'
      }
    ]
  },
  {
    en: 'perimeter',
    es: 'perímetro / límite de seguridad de la base',
    partOfSpeech: 'noun (sustantivo)',
    phoneticEn: '/pəˈrɪmɪtə(r)/',
    definitionEs: 'Límite o línea perimétrica exterior que rodea un campamento, base o posición defensiva.',
    definitionEn: 'The continuous line forming the boundary of a military camp, base, or defended area.',
    militaryContext: 'Perimeter defence / perimeter wire / perimeter security.',
    examples: [
      {
        en: 'Thermal cameras detected movement beyond the northern perimeter fence.',
        es: 'Las cámaras térmicas detectaron movimiento más allá del cerco perimetral norte.'
      }
    ]
  },
  {
    en: 'salute',
    es: 'saludo militar / rendir honores',
    partOfSpeech: 'noun & verb (sustantivo y verbo)',
    phoneticEn: '/səˈluːt/',
    definitionEs: 'Gesto formal de respeto hacia oficiales superiores o la bandera nacional, llevando la mano derecha a la visera o boina.',
    definitionEn: 'A formal military gesture of respect made towards superior officers or national colours.',
    militaryContext: 'Costumbre británica: se saluda sólo con prenda de cabeza puesta ("with headdress on") y con la palma mirando hacia adelante.',
    examples: [
      {
        en: 'The recruit snapped a crisp salute to the inspecting Brigadier.',
        es: 'El recluta ejecutó un enérgico saludo militar al Brigadier inspector.'
      }
    ]
  },
  {
    en: 'triage',
    es: 'triaje / clasificación de heridos',
    partOfSpeech: 'noun (término médico militar)',
    phoneticEn: '/ˈtriːɑːʒ/',
    definitionEs: 'Proceso de evaluación y categorización de heridos en combate según la gravedad de sus lesiones para priorizar el tratamiento médico.',
    definitionEn: 'The medical screening and sorting of casualties into priority categories for treatment according to urgency.',
    militaryContext: 'Protocolo táctico TCCC (Tactical Combat Casualty Care): Triage Tagging (Immediate, Delayed, Minimal, Expectant).',
    examples: [
      {
        en: 'Combat medics conducted rapid triage at the casualty collection point.',
        es: 'Los enfermeros de combate realizaron un triaje rápido en el puesto de socorro.'
      }
    ]
  },
  {
    en: 'headquarters',
    es: 'cuartel general / comando central',
    partOfSpeech: 'noun (sustantivo)',
    phoneticEn: '/ˌhɛdˈkwɔːtəz/',
    definitionEs: 'Lugar físico o estado mayor desde donde un comandante militar dirige las operaciones de una fuerza o unidad.',
    definitionEn: 'The centre of operations and administration from which a military commander exercises command.',
    militaryContext: 'Comúnmente abreviado como HQ (Forward HQ, Brigade HQ).',
    examples: [
      {
        en: 'Brigade Headquarters dispatched an urgent encrypted courier.',
        es: 'El Cuartel General de Brigada despachó un enlace urgente con mensajes cifrados.'
      }
    ]
  },
  {
    en: 'platoon',
    es: 'sección (infantería británica/OTAN) / pelotón',
    partOfSpeech: 'noun (unidad táctica militar)',
    phoneticEn: '/pləˈtuːn/',
    definitionEs: 'Subunidad militar compuesta generalmente por tres secciones o grupos (unos 30 a 40 soldados), comandada por un Teniente.',
    definitionEn: 'A military unit composed of two to four squads or sections (typically 30–40 soldiers), commanded by a Lieutenant.',
    militaryContext: 'En el Ejército Británico, un Platoon equivale doctrinariamente a la "Sección" del Ejército Argentino.',
    examples: [
      {
        en: 'The rifle platoon established an ambush along the supply route.',
        es: 'La sección de tiradores estableció una emboscada a lo largo de la ruta de abastecimiento.'
      }
    ]
  },
  {
    en: 'battalion',
    es: 'batallón / unidad táctica fundamental',
    partOfSpeech: 'noun (unidad militar)',
    phoneticEn: '/bəˈtæliən/',
    definitionEs: 'Unidad militar compuesta por varias compañías (500 a 1000 efectivos), normalmente al mando de un Teniente Coronel.',
    definitionEn: 'A military unit comprising several companies, typically commanded by a Lieutenant Colonel.',
    militaryContext: 'Batallón de Infantería / Batallón de Ingenieros / Batallón Logístico.',
    examples: [
      {
        en: 'The peacekeeping battalion deployed to Cyprus for a six-month tour.',
        es: 'El batallón de cascos azules se desplegó en Chipre para una misión de seis meses.'
      }
    ]
  },
  {
    en: 'logistics',
    es: 'logística militar / abastecimiento y transporte',
    partOfSpeech: 'noun (rama del servicio militar)',
    phoneticEn: '/ləˈdʒɪstɪks/',
    definitionEs: 'Disciplina militar que planifica y ejecuta el movimiento, suministro, municionamiento, mantenimiento y sanidad de las tropas.',
    definitionEn: 'The discipline of planning and carrying out the movement, supply, and maintenance of military forces.',
    militaryContext: 'Pilar fundamental de la preparación para el combate (STANAG 6001 Nivel 2 y 3).',
    examples: [
      {
        en: 'Good logistics win campaigns before the first shot is fired.',
        es: 'Una buena logística gana campañas antes de que se dispare el primer tiro.'
      }
    ]
  },
  {
    en: 'garrison',
    es: 'guarnición militar / cuartel permanente',
    partOfSpeech: 'noun & verb (sustantivo y verbo)',
    phoneticEn: '/ˈɡærɪsn/',
    definitionEs: 'Conjunto de tropas acantonadas permanentemente en una plaza, base o localidad para su custodia o adiestramiento.',
    definitionEn: 'A permanent military installation or the troops stationed in a fortress or town to defend it.',
    militaryContext: 'Life in garrison vs. field maneuvers (vida de guarnición vs. maniobras de campaña).',
    examples: [
      {
        en: 'Catterick is the largest military garrison in the British Army.',
        es: 'Catterick es la guarnición militar más grande del Ejército Británico.'
      }
    ]
  },
  {
    en: 'fire at will',
    es: 'fuego a discreción',
    partOfSpeech: 'tactical order (orden táctica)',
    phoneticEn: '/faɪər æt wɪl/',
    definitionEs: 'Orden que autoriza a los combatientes a disparar a blancos individuales a su propio criterio y ritmo, sin esperar una orden colectiva.',
    definitionEn: 'A command permitting soldiers to fire at targets independently and at their own discretion.',
    militaryContext: 'Reglas de empeñamiento (ROE) en defensa perimétrica.',
    examples: [
      {
        en: 'Enemy in sight across the valley! Fire at will!',
        es: '¡Enemigo a la vista a través del valle! ¡Fuego a discreción!'
      }
    ]
  },
  {
    en: 'say again',
    es: 'repita su mensaje (proword de radio)',
    partOfSpeech: 'proword (radiotelefonía militar)',
    phoneticEn: '/seɪ əˈɡɛn/',
    definitionEs: 'Proword de radio obligatorio en lugar de la palabra común "repeat" (que en artillería significa "repetir el fuego de artillería").',
    definitionEn: 'Standard radio procedure word meaning "repeat your last message". "Repeat" is never used because in artillery it means "fire again".',
    militaryContext: 'PROHIBIDO decir "repeat" en la radio para pedir que repitan una frase.',
    examples: [
      {
        en: 'Weak signal, say again your coordinates. Over.',
        es: 'Señal débil, repita sus coordenadas. Cambio.'
      }
    ]
  },
  {
    en: 'rules of engagement',
    es: 'reglas de empeñamiento (ROE)',
    partOfSpeech: 'military doctrine (doctrina operacional)',
    phoneticEn: '/ruːlz ɒv ɪnˈɡeɪdʒmənt/',
    definitionEs: 'Directivas emitidas por la autoridad militar competente que delimitan las circunstancias y el grado de fuerza armada que puede emplearse.',
    definitionEn: 'Directives issued by military authority defining the circumstances, conditions, and degree of force that may be applied.',
    militaryContext: 'Crucial en misiones de paz de la ONU bajo Capítulo VI o VII.',
    examples: [
      {
        en: 'Under current rules of engagement, weapons may only be used in self-defence.',
        es: 'Bajo las actuales reglas de empeñamiento, las armas sólo pueden emplearse en legítima defensa.'
      }
    ]
  },
  {
    en: 'radio silence',
    es: 'silencio de radio / disciplina de transmisiones',
    partOfSpeech: 'military protocol (protocolo táctico)',
    phoneticEn: '/ˈreɪdiəʊ ˈsaɪləns/',
    definitionEs: 'Orden que prohíbe todas las transmisiones de radio para evitar la detección electrónica o interferencias por parte del enemigo.',
    definitionEn: 'A condition where all radio transmission stations cease broadcasting to prevent enemy electronic interception.',
    militaryContext: 'Vital durante aproximaciones nocturnas o inserción de comandos.',
    examples: [
      {
        en: 'Maintain strict radio silence until the assault team reaches the objective.',
        es: 'Mantengan estricto silencio de radio hasta que el equipo de asalto alcance el objetivo.'
      }
    ]
  },
  {
    en: 'armour',
    es: 'vehículos blindados / coraza / arma de caballería blindada',
    partOfSpeech: 'noun (sustantivo militar)',
    phoneticEn: '/ˈɑːmə(r)/',
    definitionEs: 'Vehículos de combate protegidos con blindaje (tanques, transportes orugas) o la fuerza blindada en su conjunto.',
    definitionEn: 'Combat vehicles protected by heavy metal plating (tanks, APCs), or the armoured branch of an army.',
    militaryContext: 'British spelling: Armour (US spelling: Armor). Armoured infantry / Armoured cavalry.',
    examples: [
      {
        en: 'Heavy armour was deployed to secure the western crossroads.',
        es: 'Se desplegaron blindados pesados para asegurar la encrucijada occidental.'
      }
    ]
  },
  {
    en: 'camouflage',
    es: 'camuflaje / enmascaramiento militar',
    partOfSpeech: 'noun & verb (sustantivo y verbo)',
    phoneticEn: '/ˈkæməflɑːʒ/',
    definitionEs: 'Técnica de disimulo visual mediante pinturas, redes o vegetación para ocultar personal y equipo militar al ojo enemigo.',
    definitionEn: 'The disguising of military personnel, equipment, and installations by painting or covering them to blend in with surroundings.',
    militaryContext: 'Término estándar para uniformes de combate (Camouflage uniform) y disciplina de enmascaramiento.',
    examples: [
      {
        en: 'Soldiers applied camouflage cream to their faces before the night patrol.',
        es: 'Los soldados se aplicaron crema de camuflaje en el rostro antes de la patrulla nocturna.'
      }
    ]
  },
  {
    en: 'liaison officer',
    es: 'oficial de enlace',
    partOfSpeech: 'military rank / appointment (función militar)',
    phoneticEn: '/liˈeɪzn ˈɒfɪsə(r)/',
    definitionEs: 'Oficial asignado para coordinar actividades y mantener comunicaciones directas entre dos fuerzas o ejércitos aliados.',
    definitionEn: 'An officer who coordinates activities and maintains communication between two distinct military commands or allied forces.',
    militaryContext: 'Rol clave en cuarteles de la ONU y coaliciones multinacionales (LNO).',
    examples: [
      {
        en: 'Captain Evans serves as the military liaison officer to the local civilian police.',
        es: 'El Capitán Evans se desempeña como oficial de enlace militar con la policía civil local.'
      }
    ]
  },
  {
    en: 'peacekeeping',
    es: 'mantenimiento de la paz / misiones de cascos azules',
    partOfSpeech: 'noun & adjective (sustantivo y adjetivo)',
    phoneticEn: '/ˈpiːskiːpɪŋ/',
    definitionEs: 'Operaciones militares multinacionales bajo mandato de la ONU para supervisar altos el fuego y proteger a poblaciones civiles.',
    definitionEn: 'The active maintenance of a truce between nations or factions, especially by an international military force.',
    militaryContext: 'Compromiso internacional del Ejército Argentino (UNFICYP Chipre, MINUSTAH, etc.).',
    examples: [
      {
        en: 'Argentina has a proud history of contribution to United Nations peacekeeping operations.',
        es: 'Argentina tiene una destacada trayectoria de contribución a las operaciones de paz de las Naciones Unidas.'
      }
    ]
  },
  {
    en: 'drills',
    es: 'orden cerrado / ejercicios prácticos de instrucción militar',
    partOfSpeech: 'noun plural (instrucción militar)',
    phoneticEn: '/drɪlz/',
    definitionEs: 'Entrenamiento repetitivo de movimientos de marcha o procedimientos de armas para inculcar disciplina e instinto táctico.',
    definitionEn: 'Repetitive training exercises in marching, handling weapons, or emergency procedures.',
    militaryContext: 'Foot drill (orden cerrado a pie), weapons drill (ejercicios de tiro y arme/desarme).',
    examples: [
      {
        en: 'Daily foot drill instils discipline, precision, and unit cohesion.',
        es: 'El orden cerrado diario inculca disciplina, precisión y cohesión en la unidad.'
      }
    ]
  },
  {
    en: 'mess',
    es: 'casino de oficiales o suboficiales / comedor militar',
    partOfSpeech: 'noun (instalación militar)',
    phoneticEn: '/mɛs/',
    definitionEs: 'Instalación social en una base militar donde los oficiales o suboficiales comen, se reúnen y descansan.',
    definitionEn: 'A building or room on a military base where service personnel eat, socialize, and relax.',
    militaryContext: 'Officers\' Mess (Casino de Oficiales), Sergeants\' Mess (Casino de Suboficiales).',
    examples: [
      {
        en: 'Formal regimental dinners take place in the Officers\' Mess.',
        es: 'Las cenas de gala del regimiento se llevan a cabo en el Casino de Oficiales.'
      }
    ]
  }
];

/**
 * Common phrase mappings for real-time translation & recognition
 */
const COMMON_PHRASES: Record<string, { en: string; es: string; definitionEs?: string }> = {
  'buenos dias': { en: 'Good morning', es: 'Buenos días' },
  'buenas tardes': { en: 'Good afternoon', es: 'Buenas tardes' },
  'buenas noches': { en: 'Good evening / Good night', es: 'Buenas noches' },
  'a sus ordenes': { en: 'At your orders, Sir / Ma\'am', es: 'A sus órdenes' },
  'a la orden': { en: 'At your service / Yes, Sir', es: 'A la orden' },
  'entendido': { en: 'Understood / Roger that', es: 'Entendido' },
  'comprendido': { en: 'Roger / Copy that', es: 'Comprendido' },
  'cumplire la orden': { en: 'Wilco (Will comply)', es: 'Cumpliré la orden' },
  'cese el fuego': { en: 'Cease fire', es: 'Cese el fuego' },
  'alto el fuego': { en: 'Cease fire', es: 'Alto el fuego' },
  'fuego a discrecion': { en: 'Fire at will', es: 'Fuego a discreción' },
  'proceder con precaucion': { en: 'Proceed with caution', es: 'Proceder con precaución' },
  'solicito confirmacion': { en: 'Request confirmation', es: 'Solicito confirmación' },
  'repita su mensaje': { en: 'Say again your last message', es: 'Repita su mensaje' },
  'cambio de destino': { en: 'Change of station / Military posting', es: 'Cambio de destino' },
  'mision de paz': { en: 'Peacekeeping mission', es: 'Misión de paz' },
  'evacuacion medica': { en: 'Medical evacuation (MEDEVAC)', es: 'Evacuación médica' },
  'puesto de control': { en: 'Checkpoint', es: 'Puesto de control' },
  'silencio de radio': { en: 'Radio silence', es: 'Silencio de radio' },
  'oficial de enlace': { en: 'Liaison officer', es: 'Oficial de enlace' },
  'cuartel general': { en: 'Headquarters (HQ)', es: 'Cuartel general' },
  'informe de situacion': { en: 'Situation report (SITREP)', es: 'Informe de situación' },
  'orden de operaciones': { en: 'Operations order (OPORD)', es: 'Orden de operaciones' },
  'reglas de empenamiento': { en: 'Rules of engagement (ROE)', es: 'Reglas de empeñamiento' },
  'patrulla a pie': { en: 'Foot patrol', es: 'Patrulla a pie' },
  'primeros auxilios': { en: 'First aid', es: 'Primeros auxilios' },
  'como esta usted': { en: 'How are you?', es: '¿Cómo está usted?' },
  'gracias': { en: 'Thank you very much', es: 'Muchas gracias' },
  'de nada': { en: 'You are welcome', es: 'De nada' }
};

/**
 * Normalizes text for index lookups (removes punctuation, accents, lowercase)
 */
function normalizeKey(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[¿?¡!.,;:"'()\[\]]/g, '')
    .trim();
}

/**
 * Searches the military and general dictionary for exact or closest matches
 */
export function findDictionaryEntry(term: string, lang: 'es' | 'en'): DictionaryEntry | undefined {
  const norm = normalizeKey(term);
  if (!norm) return undefined;

  return MILITARY_DICTIONARY.find(entry => {
    if (lang === 'en') {
      const entryEnNorm = normalizeKey(entry.en);
      if (entryEnNorm === norm) return true;
      if (entry.synonymsEn?.some(s => normalizeKey(s) === norm)) return true;
    } else {
      const entryEsNorm = normalizeKey(entry.es);
      if (entryEsNorm.includes(norm) || norm.includes(entryEsNorm)) return true;
      if (entry.synonymsEs?.some(s => normalizeKey(s) === norm)) return true;
    }
    return false;
  });
}

/**
 * Extracts key vocabulary words from a full sentence to provide rich definitions
 */
export function extractKeyWordsFromSentence(sentence: string): DictionaryEntry[] {
  const words = sentence.toLowerCase().split(/\s+/).map(w => normalizeKey(w)).filter(w => w.length > 3);
  const matched: DictionaryEntry[] = [];
  const seenEn = new Set<string>();

  for (const word of words) {
    for (const entry of MILITARY_DICTIONARY) {
      const enNorm = normalizeKey(entry.en);
      const esNorm = normalizeKey(entry.es);
      if ((enNorm.includes(word) || esNorm.includes(word)) && !seenEn.has(entry.en)) {
        seenEn.add(entry.en);
        matched.push(entry);
        if (matched.length >= 4) break;
      }
    }
    if (matched.length >= 4) break;
  }

  return matched;
}

/**
 * Translates text via MyMemory Public API with high reliability and timeout
 */
async function fetchOnlineTranslation(
  text: string,
  fromLang: 'es' | 'en',
  toLang: 'es' | 'en'
): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2800);

    const langpair = `${fromLang}|${toLang}`;
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.trim())}&langpair=${langpair}`;

    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!res.ok) return null;
    const data = await res.json();

    if (data && data.responseData && data.responseData.translatedText) {
      const result = data.responseData.translatedText;
      // Filter out automated spam or warning messages
      if (!result.includes('MYMEMORY WARNING') && !result.includes('QUERY LENGTH LIMIT EXCEEDED')) {
        return result;
      }
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Core Translation and Definition Engine
 */
export async function translateAndDefine(
  sourceText: string,
  fromLang: 'es' | 'en',
  toLang: 'es' | 'en'
): Promise<TranslationResult> {
  const trimmed = sourceText.trim();
  const normalized = normalizeKey(trimmed);

  if (!trimmed) {
    return {
      sourceText: '',
      translatedText: '',
      fromLang,
      toLang,
      keyWordsEntries: [],
      isSentence: false,
      provider: 'dictionary'
    };
  }

  const isSentence = trimmed.includes(' ') || trimmed.length > 25;

  // 1. Check exact common phrase mapping
  if (COMMON_PHRASES[normalized]) {
    const phrase = COMMON_PHRASES[normalized];
    const translatedText = fromLang === 'es' ? phrase.en : phrase.es;
    const exactEntry = findDictionaryEntry(fromLang === 'es' ? phrase.en : phrase.es, toLang);
    return {
      sourceText: trimmed,
      translatedText,
      fromLang,
      toLang,
      exactEntry,
      phonetic: exactEntry?.phoneticEn,
      keyWordsEntries: exactEntry ? [exactEntry] : [],
      isSentence,
      provider: 'dictionary'
    };
  }

  // 2. Check exact military/general dictionary entry
  const exactEntry = findDictionaryEntry(trimmed, fromLang);
  if (exactEntry && !isSentence) {
    const translatedText = fromLang === 'es' ? exactEntry.en : exactEntry.es.split(' / ')[0];
    return {
      sourceText: trimmed,
      translatedText,
      fromLang,
      toLang,
      phonetic: exactEntry.phoneticEn,
      exactEntry,
      keyWordsEntries: [exactEntry],
      isSentence: false,
      provider: 'dictionary'
    };
  }

  // 3. If online translation is available (for phrases, complex sentences, or unlisted terms)
  let onlineResult: string | null = null;
  try {
    onlineResult = await fetchOnlineTranslation(trimmed, fromLang, toLang);
  } catch {
    onlineResult = null;
  }

  if (onlineResult) {
    const keyWordsEntries = extractKeyWordsFromSentence(trimmed + ' ' + onlineResult);
    const firstMatchingEntry = exactEntry || findDictionaryEntry(trimmed, fromLang) || findDictionaryEntry(onlineResult, toLang);

    return {
      sourceText: trimmed,
      translatedText: onlineResult,
      fromLang,
      toLang,
      phonetic: firstMatchingEntry?.phoneticEn,
      exactEntry: firstMatchingEntry,
      keyWordsEntries,
      isSentence,
      provider: 'neural-api'
    };
  }

  // 4. Offline Fallback: word-by-word / partial dictionary synthesis
  if (isSentence) {
    const tokens = trimmed.split(/(\s+|[.,;!?]+)/);
    const translatedTokens = tokens.map(token => {
      const norm = normalizeKey(token);
      if (!norm) return token;
      const found = findDictionaryEntry(norm, fromLang);
      if (found) {
        return fromLang === 'es' ? found.en : found.es.split(' / ')[0];
      }
      return token;
    });

    const translatedText = translatedTokens.join('');
    const keyWordsEntries = extractKeyWordsFromSentence(trimmed);

    return {
      sourceText: trimmed,
      translatedText: translatedText !== trimmed ? translatedText : `[Traducción offline]: ${trimmed}`,
      fromLang,
      toLang,
      keyWordsEntries,
      isSentence: true,
      provider: 'hybrid'
    };
  }

  // Single word not found
  return {
    sourceText: trimmed,
    translatedText: fromLang === 'es' ? `[No se halló traducción directa para: "${trimmed}"]` : `[Direct translation not found for: "${trimmed}"]`,
    fromLang,
    toLang,
    keyWordsEntries: [],
    isSentence: false,
    provider: 'dictionary'
  };
}
