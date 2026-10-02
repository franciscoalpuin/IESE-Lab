import { CollocationExerciseItem } from '../types';

export const MILITARY_COLLOCATIONS_DATA: CollocationExerciseItem[] = [
  // =========================================================================
  // LEVEL 1 (A1+)
  // =========================================================================
  {
    id: 'colloc-l1',
    levelNumber: 1,
    title: 'Órdenes de Cuartel y Colocaciones de Rutina Militar',
    category: 'command_collocations',
    instruction: 'Empareja los verbos castrenses con sus complementos tácticos y luego completa las oraciones operacionales.',
    pairs: [
      {
        id: 'cp-l1-1',
        verb: 'stand at',
        collocate: 'attention',
        spanish: 'estar en posición de firmes',
        militaryUsage: 'Comando reglamentario cuando un superior ingresa al recinto o durante la formación.'
      },
      {
        id: 'cp-l1-2',
        verb: 'carry out',
        collocate: 'orders',
        spanish: 'cumplir / ejecutar órdenes',
        militaryUsage: 'El principio básico de disciplina castrense en el Ejército Británico y la OTAN.'
      },
      {
        id: 'cp-l1-3',
        verb: 'put on',
        collocate: 'the uniform',
        spanish: 'ponerse el uniforme reglamentario',
        militaryUsage: 'Vestir el uniforme de combate (CS95 / MTP) o de gala.'
      },
      {
        id: 'cp-l1-4',
        verb: 'report for',
        collocate: 'duty',
        spanish: 'presentarse al servicio / a la guardia',
        militaryUsage: 'Presentarse puntualmente ante el oficial de servicio en la guardia de prevención.'
      }
    ],
    gapFillQuestions: [
      {
        id: 'gf-l1-1',
        sentenceWithBlank: 'When the Commanding Officer enters the briefing room, all soldiers must stand at ______.',
        correctCollocate: 'attention',
        options: ['attention', 'silence', 'formation', 'orders'],
        explanation: '"Stand at attention" es la colocación militar fija para "ponerse en posición de firmes".'
      },
      {
        id: 'gf-l1-2',
        sentenceWithBlank: 'Corporal Jenkins, you must ______ your orders without hesitation.',
        correctCollocate: 'carry out',
        options: ['carry out', 'make out', 'take up', 'put down'],
        explanation: '"Carry out orders" es el phrasal verb militar por excelencia para "cumplir órdenes".'
      },
      {
        id: 'gf-l1-3',
        sentenceWithBlank: 'Every morning at zero-six-thirty hours, the guard detachment must report for ______.',
        correctCollocate: 'duty',
        options: ['duty', 'parade', 'barracks', 'patrol'],
        explanation: '"Report for duty" significa presentarse formalmente para iniciar el turno de servicio.'
      }
    ]
  },

  // =========================================================================
  // LEVEL 2 (A2)
  // =========================================================================
  {
    id: 'colloc-l2',
    levelNumber: 2,
    title: 'Operaciones de Campaña y Mantenimiento de Material',
    category: 'operational_verbs',
    instruction: 'Relaciona las colocaciones de despliegue en el terreno y resolución de incidentes mecánicos.',
    pairs: [
      {
        id: 'cp-l2-1',
        verb: 'set up',
        collocate: 'a bivouac camp',
        spanish: 'establecer un vivac / campamento provisorio',
        militaryUsage: 'Montar tiendas y puestos de guardia perimetrales durante una marcha táctica.'
      },
      {
        id: 'cp-l2-2',
        verb: 'break down',
        collocate: 'on the convoy route',
        spanish: 'averiarse / sufrir una falla mecánica',
        militaryUsage: 'Detención imprevista de un vehículo de transporte de tropas en marcha de columna.'
      },
      {
        id: 'cp-l2-3',
        verb: 'conduct',
        collocate: 'a foot patrol',
        spanish: 'realizar una patrulla a pie',
        militaryUsage: 'Recorrido de vigilancia e infiltración silenciosa en zonas urbanas o boscosas.'
      },
      {
        id: 'cp-l2-4',
        verb: 'hold',
        collocate: 'a tactical briefing',
        spanish: 'brindar una reunión informativa táctica',
        militaryUsage: 'Exposición de la misión por parte del jefe de sección antes de iniciar la marcha.'
      }
    ],
    gapFillQuestions: [
      {
        id: 'gf-l2-1',
        sentenceWithBlank: 'If an armored truck ______ on the road, the recovery team will tow it to safety.',
        correctCollocate: 'breaks down',
        options: ['breaks down', 'sets off', 'falls out', 'gives in'],
        explanation: '"Break down" describe una avería de un vehículo militar durante la marcha.'
      },
      {
        id: 'gf-l2-2',
        sentenceWithBlank: 'The infantry section will ______ a foot patrol along the river perimeter.',
        correctCollocate: 'conduct',
        options: ['conduct', 'make', 'drive', 'operate'],
        explanation: 'En inglés militar británico se dice "conduct a patrol" o "carry out a patrol", nunca "make a patrol".'
      },
      {
        id: 'gf-l2-3',
        sentenceWithBlank: 'Before dusk, the platoon must ______ a secure bivouac camp in the forest.',
        correctCollocate: 'set up',
        options: ['set up', 'break in', 'take down', 'pull out'],
        explanation: '"Set up a camp" significa montar o establecer las instalaciones provisionales de campaña.'
      }
    ]
  },

  // =========================================================================
  // LEVEL 3 (A2+)
  // =========================================================================
  {
    id: 'colloc-l3',
    levelNumber: 3,
    title: 'Contacto Hostil, Apoyo de Fuego y Repliegue Táctico',
    category: 'phrasal_verbs',
    instruction: 'Domina los verbos preposicionales y colocaciones de combate y maniobra táctica.',
    pairs: [
      {
        id: 'cp-l3-1',
        verb: 'call in',
        collocate: 'close air support',
        spanish: 'solicitar apoyo aéreo cercano',
        militaryUsage: 'Transmitir por radio coordenadas para que helicópteros o cazas ataquen blancos hostiles.'
      },
      {
        id: 'cp-l3-2',
        verb: 'fall back to',
        collocate: 'secondary defensive positions',
        spanish: 'replegarse a posiciones defensivas secundarias',
        militaryUsage: 'Retroceso táctico ordenado bajo fuego sin romper la cohesión de la unidad.'
      },
      {
        id: 'cp-l3-3',
        verb: 'run out of',
        collocate: 'small arms ammunition',
        spanish: 'quedarse sin munición de armas portátiles',
        militaryUsage: 'Agotamiento crítico de cartuchos 5.56mm o 7.62mm en el combate.'
      },
      {
        id: 'cp-l3-4',
        verb: 'secure',
        collocate: 'the landing zone (LZ)',
        spanish: 'asegurar la zona de aterrizaje de helicópteros',
        militaryUsage: 'Garantizar que el terreno esté despejado de fuego hostil para el descenso aeromóvil.'
      }
    ],
    gapFillQuestions: [
      {
        id: 'gf-l3-1',
        sentenceWithBlank: 'Under heavy enemy mortar bombardment, the captain ordered the platoon to ______ secondary positions.',
        correctCollocate: 'fall back to',
        options: ['fall back to', 'call in for', 'run out of', 'give up on'],
        explanation: '"Fall back to" es el término reglamentario británico para efectuar un repliegue táctico ordenado.'
      },
      {
        id: 'gf-l3-2',
        sentenceWithBlank: 'The Forward Air Controller must immediately ______ close air support on the ridge.',
        correctCollocate: 'call in',
        options: ['call in', 'look up', 'bring about', 'take over'],
        explanation: '"Call in support / artillery / airstrikes" es la colocación militar exacta para solicitar apoyos de fuego.'
      },
      {
        id: 'gf-l3-3',
        sentenceWithBlank: 'Before the Medevac helicopter touches down, riflemen must completely ______ the landing zone.',
        correctCollocate: 'secure',
        options: ['secure', 'catch', 'occupy', 'close'],
        explanation: '"Secure the landing zone" significa batir el perímetro para permitir la maniobra de aterrizaje con seguridad.'
      }
    ]
  },

  // =========================================================================
  // LEVEL 4 (B1)
  // =========================================================================
  {
    id: 'colloc-l4',
    levelNumber: 4,
    title: 'Procedimientos Operativos de Combate y Misiones de Paz',
    category: 'operational_verbs',
    instruction: 'Analiza colocaciones de armas combinadas y normas de comportamiento militar formal.',
    pairs: [
      {
        id: 'cp-l4-1',
        verb: 'lay down',
        collocate: 'suppressive fire',
        spanish: 'hacer fuego de saturación / supresión',
        militaryUsage: 'Fuego continuo de ametralladoras para fijar al enemigo e impedir su puntería.'
      },
      {
        id: 'cp-l4-2',
        verb: 'draw up',
        collocate: 'an operational battle plan',
        spanish: 'redactar / confeccionar un plan de operaciones',
        militaryUsage: 'Labor del Estado Mayor para estructurar el plan de maniobra táctico.'
      },
      {
        id: 'cp-l4-3',
        verb: 'stand down',
        collocate: 'from high combat readiness',
        spanish: 'pasar a situación de descanso / reducir el nivel de alerta',
        militaryUsage: 'Cese de la alerta máxima tras superarse la contingencia o incidente.'
      },
      {
        id: 'cp-l4-4',
        verb: 'maintain',
        collocate: 'radio silence',
        spanish: 'mantener silencio de radio',
        militaryUsage: 'Prohibición absoluta de transmisiones electromagnéticas para evitar triangulación por goniometría.'
      }
    ],
    gapFillQuestions: [
      {
        id: 'gf-l4-1',
        sentenceWithBlank: 'To allow the extraction team to rescue the pilot, the machine gun team must ______ suppressive fire.',
        correctCollocate: 'lay down',
        options: ['lay down', 'make up', 'put off', 'turn around'],
        explanation: '"Lay down suppressive fire" es la colocación doctrinal OTAN para ejecutar fuego de supresión.'
      },
      {
        id: 'gf-l4-2',
        sentenceWithBlank: 'To prevent hostile direction-finding sensors from locating our headquarters, all units must ______ radio silence.',
        correctCollocate: 'maintain',
        options: ['maintain', 'hold on', 'carry out', 'produce'],
        explanation: '"Maintain radio silence" es la colocación militar precisa (no se utiliza "keep" ni "do").'
      },
      {
        id: 'gf-l4-3',
        sentenceWithBlank: 'The operations officer was instructed to ______ a comprehensive emergency evacuation scheme.',
        correctCollocate: 'draw up',
        options: ['draw up', 'take out', 'fall behind', 'blow up'],
        explanation: '"Draw up a plan / report / treaty" significa confeccionar formalmente un documento militar.'
      }
    ]
  },

  // =========================================================================
  // LEVEL 5 (B1+)
  // =========================================================================
  {
    id: 'colloc-l5',
    levelNumber: 5,
    title: 'Planeamiento Estratégico, Inteligencia y Mando Conjunto',
    category: 'tactical_nouns',
    instruction: 'Ejercita colocaciones avanzadas de doctrina militar, contrainteligencia y Estado Mayor.',
    pairs: [
      {
        id: 'cp-l5-1',
        verb: 'step up',
        collocate: 'counter-reconnaissance measures',
        spanish: 'intensificar las medidas de contrarreconocimiento',
        militaryUsage: 'Incrementar la vigilancia para frustrar infiltraciones de exploradores enemigos.'
      },
      {
        id: 'cp-l5-2',
        verb: 'rule out',
        collocate: 'hostile electronic interception',
        spanish: 'descartar la interceptación electrónica hostil',
        militaryUsage: 'Apreciación de inteligencia militar confirmando la inviolabilidad del enlace criptográfico.'
      },
      {
        id: 'cp-l5-3',
        verb: 'phase out',
        collocate: 'obsolete military hardware',
        spanish: 'retirar gradualmente de servicio material bélico obsoleto',
        militaryUsage: 'Plan de modernización de armamentos y equipos en el Ejército Argentino.'
      },
      {
        id: 'cp-l5-4',
        verb: 'bring about',
        collocate: 'a decisive tactical breakthrough',
        spanish: 'provocar / lograr una ruptura táctica decisiva',
        militaryUsage: 'Penetración contundente del dispositivo defensivo adversario.'
      }
    ],
    gapFillQuestions: [
      {
        id: 'gf-l5-1',
        sentenceWithBlank: 'Intelligence analysts cannot ______ the possibility of an armed sabotage attempt on the radar station.',
        correctCollocate: 'rule out',
        options: ['rule out', 'step up', 'bring about', 'phase out'],
        explanation: '"Rule out" significa descartar una posibilidad tras el análisis analítico de inteligencia.'
      },
      {
        id: 'gf-l5-2',
        sentenceWithBlank: 'The Ministry of Defence announced a multi-year program to ______ legacy tracked vehicles.',
        correctCollocate: 'phase out',
        options: ['phase out', 'drop in', 'pass off', 'run down'],
        explanation: '"Phase out" se refiere al retiro programado y gradual de equipamiento o sistemas de armas.'
      },
      {
        id: 'gf-l5-3',
        sentenceWithBlank: 'Following the perimeter incident, the base commander decided to ______ security patrols around the ammunition dump.',
        correctCollocate: 'step up',
        options: ['step up', 'fall out', 'clear off', 'wear out'],
        explanation: '"Step up measures / patrols / security" significa redoblar o incrementar la intensidad.'
      }
    ]
  },

  // =========================================================================
  // LEVEL 6 (B2)
  // =========================================================================
  {
    id: 'colloc-l6',
    levelNumber: 6,
    title: 'Diplomacia de Defensa, Tratados y Conducción Operacional Superior',
    category: 'command_collocations',
    instruction: 'Perfecciona colocaciones de alta diplomacia castrense, tratados y doctrina militar superior.',
    pairs: [
      {
        id: 'cp-l6-1',
        verb: 'hammer out',
        collocate: 'a bilateral defense agreement',
        spanish: 'alcanzar / forjar laboriosamente un acuerdo bilateral de defensa',
        militaryUsage: 'Negociaciones diplomático-militares intensivas entre Estados Mayores.'
      },
      {
        id: 'cp-l6-2',
        verb: 'exercise',
        collocate: 'supreme operational command',
        spanish: 'ejercer el comando operacional superior',
        militaryUsage: 'Conducción y control directo de un teatro de operaciones conjuntas.'
      },
      {
        id: 'cp-l6-3',
        verb: 'ratify',
        collocate: 'a mutual assistance treaty',
        spanish: 'ratificar un tratado de asistencia mutua',
        militaryUsage: 'Aprobación jurídica vinculante de convenios de defensa internacional.'
      },
      {
        id: 'cp-l6-4',
        verb: 'iron out',
        collocate: 'multinational interoperability friction',
        spanish: 'limar asperezas / resolver discrepancias de interoperabilidad',
        militaryUsage: 'Armonizar procedimientos doctrinales y técnicos entre fuerzas armadas aliadas.'
      }
    ],
    gapFillQuestions: [
      {
        id: 'gf-l6-1',
        sentenceWithBlank: 'After three weeks of arduous diplomatic deliberations, the generals managed to ______ a historic peace accord.',
        correctCollocate: 'hammer out',
        options: ['hammer out', 'strike on', 'set upon', 'break away'],
        explanation: '"Hammer out an agreement / accord" describe el proceso de forjar con tesón un acuerdo complejo.'
      },
      {
        id: 'gf-l6-2',
        sentenceWithBlank: 'The Chief of the Joint Staff is constitutionally mandated to ______ supreme command over deployed task forces.',
        correctCollocate: 'exercise',
        options: ['exercise', 'practice', 'execute', 'conduct'],
        explanation: 'En inglés formal militar la colocación consagrada es "exercise command" (ejercer el mando).'
      },
      {
        id: 'gf-l6-3',
        sentenceWithBlank: 'Staff liaison officers held joint symposiums to ______ doctrine discrepancies prior to the multinational field exercise.',
        correctCollocate: 'iron out',
        options: ['iron out', 'cut off', 'call away', 'stand down'],
        explanation: '"Iron out differences / discrepancies / issues" significa resolver y allanar divergencias operacionales.'
      }
    ]
  }
];
