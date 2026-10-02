import { NatoAlphabetItem, MilitaryRadioProword, MilitaryRankEquivalence } from '../types';

export const NATO_PHONETIC_ALPHABET: NatoAlphabetItem[] = [
  { letter: 'A', codeWord: 'Alfa', pronunciation: 'AL-FAH', spanishPhonetic: 'Ál-fa', morseCode: '• —', exampleSentence: 'Alfa Team, hold perimeter position.' },
  { letter: 'B', codeWord: 'Bravo', pronunciation: 'BRAH-VOH', spanishPhonetic: 'Brá-vo', morseCode: '— • • •', exampleSentence: 'Bravo Company arriving at rally point.' },
  { letter: 'C', codeWord: 'Charlie', pronunciation: 'CHAR-LEE', spanishPhonetic: 'Chár-li', morseCode: '— • — •', exampleSentence: 'Checkpoint Charlie is secure.' },
  { letter: 'D', codeWord: 'Delta', pronunciation: 'DELL-TAH', spanishPhonetic: 'Dél-ta', morseCode: '— • •', exampleSentence: 'Delta Section standing by for orders.' },
  { letter: 'E', codeWord: 'Echo', pronunciation: 'ECK-OH', spanishPhonetic: 'Ék-o', morseCode: '•', exampleSentence: 'Echo Sector reporting clear visibility.' },
  { letter: 'F', codeWord: 'Foxtrot', pronunciation: 'FOKS-TROT', spanishPhonetic: 'Fóks-trot', morseCode: '• • — •', exampleSentence: 'Foxtrot formation on schedule.' },
  { letter: 'G', codeWord: 'Golf', pronunciation: 'GOLF', spanishPhonetic: 'Golf', morseCode: '— — •', exampleSentence: 'Grid reference Golf-Nine.' },
  { letter: 'H', codeWord: 'Hotel', pronunciation: 'HOH-TELL', spanishPhonetic: 'Jou-tél', morseCode: '• • • •', exampleSentence: 'Hotel compound recon completed.' },
  { letter: 'I', codeWord: 'India', pronunciation: 'IN-DEE-AH', spanishPhonetic: 'Ín-di-a', morseCode: '• •', exampleSentence: 'India unit maintaining radio silence.' },
  { letter: 'J', codeWord: 'Juliett', pronunciation: 'JEW-LEE-ETT', spanishPhonetic: 'Dzhú-li-et', morseCode: '• — — —', exampleSentence: 'Juliett patrol crossing the river.' },
  { letter: 'K', codeWord: 'Kilo', pronunciation: 'KEY-LOH', spanishPhonetic: 'Kí-lo', morseCode: '— • —', exampleSentence: 'Kilo two-five, acknowledge receipt.' },
  { letter: 'L', codeWord: 'Lima', pronunciation: 'LEE-MAH', spanishPhonetic: 'Lí-ma', morseCode: '• — • •', exampleSentence: 'Lima squad en route to headquarters.' },
  { letter: 'M', codeWord: 'Mike', pronunciation: 'MIKE', spanishPhonetic: 'Máik', morseCode: '— —', exampleSentence: 'Mike base camp establishing communications.' },
  { letter: 'N', codeWord: 'November', pronunciation: 'NO-VEM-BER', spanishPhonetic: 'Nou-vém-ber', morseCode: '— •', exampleSentence: 'November outpost reporting zero movement.' },
  { letter: 'O', codeWord: 'Oscar', pronunciation: 'OSS-CAH', spanishPhonetic: 'Ós-ka', morseCode: '— — —', exampleSentence: 'Oscar convoy moving through defile.' },
  { letter: 'P', codeWord: 'Papa', pronunciation: 'PAH-PAH', spanishPhonetic: 'Pa-pá', morseCode: '• — — •', exampleSentence: 'Papa patrol back inside friendly lines.' },
  { letter: 'Q', codeWord: 'Quebec', pronunciation: 'KEH-BECK', spanishPhonetic: 'Ke-bék', morseCode: '— — • —', exampleSentence: 'Quebec squad guarding ammunition depot.' },
  { letter: 'R', codeWord: 'Romeo', pronunciation: 'ROH-ME-OH', spanishPhonetic: 'Róu-mi-ou', morseCode: '• — •', exampleSentence: 'Romeo flight approaching landing zone.' },
  { letter: 'S', codeWord: 'Sierra', pronunciation: 'SEE-AIR-RAH', spanishPhonetic: 'Si-ér-ra', morseCode: '• • •', exampleSentence: 'Sierra base under heavy radar surveillance.' },
  { letter: 'T', codeWord: 'Tango', pronunciation: 'TANG-GO', spanishPhonetic: 'Táng-gou', morseCode: '—', exampleSentence: 'Tango target marked with smoke.' },
  { letter: 'U', codeWord: 'Uniform', pronunciation: 'YOU-NEE-FORM', spanishPhonetic: 'Iú-ni-form', morseCode: '• • —', exampleSentence: 'Uniform standards observed across all ranks.' },
  { letter: 'V', codeWord: 'Victor', pronunciation: 'VIK-TAH', spanishPhonetic: 'Vík-ta', morseCode: '• • • —', exampleSentence: 'Victor convoy departing forward operating base.' },
  { letter: 'W', codeWord: 'Whiskey', pronunciation: 'WISS-KEY', spanishPhonetic: 'Uís-ki', morseCode: '• — —', exampleSentence: 'Whiskey sector clear of hostile contact.' },
  { letter: 'X', codeWord: 'X-ray', pronunciation: 'ECKS-RAY', spanishPhonetic: 'Éks-rei', morseCode: '— • • —', exampleSentence: 'X-ray medical evacuation team airborne.' },
  { letter: 'Y', codeWord: 'Yankee', pronunciation: 'YANG-KEY', spanishPhonetic: 'Iáng-ki', morseCode: '— • — —', exampleSentence: 'Yankee outpost reporting cloud cover.' },
  { letter: 'Z', codeWord: 'Zulu', pronunciation: 'ZOO-LOO', spanishPhonetic: 'Zú-lu', morseCode: '— — • •', exampleSentence: 'Mission H-Hour set for 0600 Zulu time.' },
];

export const MILITARY_RADIO_PROWORDS: MilitaryRadioProword[] = [
  {
    word: 'ROGER',
    spanishPhonetic: 'Ródzher',
    meaning: 'I have received your last transmission satisfactorily.',
    spanishEquiv: 'Comprendido / Recibido',
    example: 'Sunray, this is Two-Zero. Roger your instructions, out.',
    note: 'Never combine "Roger" and "Wilco" (redundant).'
  },
  {
    word: 'WILCO',
    spanishPhonetic: 'Wíl-kou',
    meaning: 'Will Comply. I have received your message and will carry out the order.',
    spanishEquiv: 'Cumpliré / Procedo',
    example: 'Bravo One, proceed to Checkpoint Echo. — Wilco, out.'
  },
  {
    word: 'OVER',
    spanishPhonetic: 'Óu-ver',
    meaning: 'This is the end of my transmission to you and a response is necessary.',
    spanishEquiv: 'Cambio',
    example: 'Control, report current weather conditions at Landing Zone, over.'
  },
  {
    word: 'OUT',
    spanishPhonetic: 'Áut',
    meaning: 'This is the end of my transmission to you and no answer is required or expected.',
    spanishEquiv: 'Cambio y fuera / Terminado',
    example: 'All stations, maintain radio silence until 0500 hours. Control, out.',
    note: '"Over and out" is incorrect in British military protocol; you say either OVER or OUT, never both together.'
  },
  {
    word: 'SAY AGAIN',
    spanishPhonetic: 'Sei e-guén',
    meaning: 'Repeat your transmission (or specified part).',
    spanishEquiv: 'Repita / Repita su último mensaje',
    example: 'Sunray, say again grid coordinates, interference on channel, over.',
    note: 'NEVER say "Repeat" over military radio (in artillery, "Repeat" means "fire another salvo of shells"!).'
  },
  {
    word: 'WAIT OUT',
    spanishPhonetic: 'Uéit áut',
    meaning: 'I must pause for longer than a few seconds and will call you back when ready.',
    spanishEquiv: 'Espere, llamo luego / Corto temporalmente',
    example: 'Two-Zero, checking ammunition count with Quartermaster. Wait out.'
  },
  {
    word: 'CORRECTION',
    spanishPhonetic: 'Ko-rék-shon',
    meaning: 'An error has been made in this transmission. Transmission continues after the last correct word.',
    spanishEquiv: 'Corrección',
    example: 'Convoy arrives at 1400 hours, correction, 1500 hours, over.'
  },
  {
    word: 'I SPELL',
    spanishPhonetic: 'Ai spel',
    meaning: 'I shall spell the next word using the NATO phonetic alphabet.',
    spanishEquiv: 'Deletreo',
    example: 'Hostile vessel name is FALCON. I spell: Foxtrot, Alfa, Lima, Charlie, Oscar, November.'
  },
  {
    word: 'FIGURES',
    spanishPhonetic: 'Fíg-yars',
    meaning: 'Numerals follow immediately.',
    spanishEquiv: 'Números',
    example: 'Casualties: figures, two wounded, zero fatal, over.'
  },
  {
    word: 'SITREP',
    spanishPhonetic: 'Sít-rep',
    meaning: 'Situation Report. A concise update on tactical and logistical status.',
    spanishEquiv: 'Informe de Situación (SITREP)',
    example: 'Sierra Base, send SITREP on perimeter defenses, over.'
  },
  {
    word: 'SUNRAY',
    spanishPhonetic: 'Sán-rei',
    meaning: 'British Army appointment title for the Commanding Officer or Platoon Commander.',
    spanishEquiv: 'Comandante / Jefe de Unidad',
    example: 'Is Sunray on net? Sunray is mobile, over.'
  },
  {
    word: 'GRID',
    spanishPhonetic: 'Grid',
    meaning: 'Followed by military map coordinates.',
    spanishEquiv: 'Coordenadas de cuadrícula',
    example: 'Enemy patrol spotted at Grid 458 921, over.'
  }
];

export const MILITARY_RANKS_EQUIVALENCE: MilitaryRankEquivalence[] = [
  // Generales
  {
    argentinaRank: 'Teniente General',
    britishArmyRank: 'General / Field Marshal',
    natoCode: 'OF-9 / OF-10',
    category: 'Oficiales Generales',
    description: 'Máxima jerarquía del Ejército Argentino (Jefe del Estado Mayor General).'
  },
  {
    argentinaRank: 'General de División',
    britishArmyRank: 'Lieutenant General',
    natoCode: 'OF-8',
    category: 'Oficiales Generales',
    description: 'Comandante de Cuerpos o Divisiones de Ejército.'
  },
  {
    argentinaRank: 'General de Brigada',
    britishArmyRank: 'Major General',
    natoCode: 'OF-7',
    category: 'Oficiales Generales',
    description: 'Comandante de Brigada (En UK equivale a Major General; Brigadier en UK es OF-6).'
  },
  {
    argentinaRank: 'Coronel Mayor',
    britishArmyRank: 'Brigadier',
    natoCode: 'OF-6',
    category: 'Oficiales Superiores',
    description: 'Distinción honorífica o rango de 1 estrella.'
  },
  // Oficiales Superiores / Jefes
  {
    argentinaRank: 'Coronel',
    britishArmyRank: 'Colonel',
    natoCode: 'OF-5',
    category: 'Oficiales Superiores',
    description: 'Jefe de Regimiento o Estado Mayor de Brigada.'
  },
  {
    argentinaRank: 'Teniente Coronel',
    britishArmyRank: 'Lieutenant Colonel',
    natoCode: 'OF-4',
    category: 'Oficiales Jefes',
    description: 'Segundo Jefe de Regimiento o Jefe de Batallón.'
  },
  {
    argentinaRank: 'Mayor',
    britishArmyRank: 'Major',
    natoCode: 'OF-3',
    category: 'Oficiales Jefes',
    description: 'Comandante de Subunidad independiente o Compañía en Ejército Británico.'
  },
  // Oficiales Subalternos
  {
    argentinaRank: 'Capitán',
    britishArmyRank: 'Captain',
    natoCode: 'OF-2',
    category: 'Oficiales Subalternos',
    description: 'Jefe de Compañía o Escuadrón (Second-in-command en UK).'
  },
  {
    argentinaRank: 'Teniente Primero',
    britishArmyRank: 'Lieutenant',
    natoCode: 'OF-1',
    category: 'Oficiales Subalternos',
    description: 'Oficial con mando de sección o puesto de plana mayor.'
  },
  {
    argentinaRank: 'Teniente',
    britishArmyRank: 'Lieutenant',
    natoCode: 'OF-1',
    category: 'Oficiales Subalternos',
    description: 'Oficial al mando de una sección (Platoon Commander).'
  },
  {
    argentinaRank: 'Subteniente',
    britishArmyRank: 'Second Lieutenant',
    natoCode: 'OF-1',
    category: 'Oficiales Subalternos',
    description: 'Primer grado de oficial egresado del Colegio Militar de la Nación.'
  },
  // Suboficiales
  {
    argentinaRank: 'Suboficial Mayor',
    britishArmyRank: 'Warrant Officer Class 1 (WO1 / RSM)',
    natoCode: 'OR-9',
    category: 'Suboficiales',
    description: 'Regimental Sergeant Major (RSM) en el regimiento británico.'
  },
  {
    argentinaRank: 'Suboficial Principal',
    britishArmyRank: 'Warrant Officer Class 2 (WO2 / CSM)',
    natoCode: 'OR-8',
    category: 'Suboficiales',
    description: 'Company Sergeant Major (CSM) en el ámbito británico.'
  },
  {
    argentinaRank: 'Sargento Ayudante',
    britishArmyRank: 'Staff Sergeant / Colour Sergeant',
    natoCode: 'OR-7',
    category: 'Suboficiales',
    description: 'Colour Sergeant es el término en la infantería del British Army.'
  },
  {
    argentinaRank: 'Sargento Primero',
    britishArmyRank: 'Sergeant',
    natoCode: 'OR-6',
    category: 'Suboficiales',
    description: 'Suboficial a cargo de sección o apoyo táctico.'
  },
  {
    argentinaRank: 'Sargento',
    britishArmyRank: 'Sergeant',
    natoCode: 'OR-5',
    category: 'Suboficiales',
    description: 'Jefe de grupo de combate (Section Commander).'
  },
  {
    argentinaRank: 'Cabo Primero',
    britishArmyRank: 'Corporal',
    natoCode: 'OR-4',
    category: 'Suboficiales',
    description: 'Segundo Jefe de Grupo o Sección.'
  },
  {
    argentinaRank: 'Cabo',
    britishArmyRank: 'Lance Corporal',
    natoCode: 'OR-3',
    category: 'Suboficiales',
    description: 'Comandante de equipo de fuego (Fireteam Leader en UK).'
  },
  // Tropa
  {
    argentinaRank: 'Soldado Voluntario de 1ra / 2da',
    britishArmyRank: 'Private (Trooper / Gunner / Sapper)',
    natoCode: 'OR-1 / OR-2',
    category: 'Tropa',
    description: 'En el British Army, recibe títulos según el arma: Trooper (Caballería), Gunner (Artillería), Sapper (Ingenieros).'
  }
];

export const BRITISH_MILITARY_TERMS = [
  {
    britishTerm: 'Barracks',
    usEquivalent: 'Base / Quarters',
    spanish: 'Cuartel / Cuarteles',
    context: 'The regiment is stationed at Catterick Barracks in North Yorkshire.'
  },
  {
    britishTerm: 'Platoon Commander',
    usEquivalent: 'Platoon Leader',
    spanish: 'Jefe de Sección',
    context: 'The Platoon Commander issued the patrol briefing at 0630 hours.'
  },
  {
    britishTerm: 'Section',
    usEquivalent: 'Squad',
    spanish: 'Grupo de combate (8-10 soldados)',
    context: 'The Section Commander ordered Alpha Fireteam to provide covering fire.'
  },
  {
    britishTerm: 'Colour Sergeant',
    usEquivalent: 'Staff Sergeant (Infantry)',
    spanish: 'Sargento Ayudante (en Infantería)',
    context: 'In British infantry regiments, OR-7 is always called Colour Sergeant.'
  },
  {
    britishTerm: 'Officers\' Mess / Sergeants\' Mess',
    usEquivalent: 'Officer Club / Dining Facility',
    spanish: 'Casino de Oficiales / Casino de Suboficiales',
    context: 'Dinner will be served in the Officers\' Mess at 1930 sharp.'
  },
  {
    britishTerm: 'Armour',
    usEquivalent: 'Armor',
    spanish: 'Blindados / Carros de combate',
    context: 'Notice British spelling with -our (Armour, Harbour, Behaviour).'
  },
  {
    britishTerm: 'Kit',
    usEquivalent: 'Gear / Equipment',
    spanish: 'Equipo individual / Correaje / Uniforme',
    context: 'All soldiers must carry full combat kit during the 15-mile ruck march.'
  },
  {
    britishTerm: 'Stand-to',
    usEquivalent: 'Alert position',
    spanish: 'Alerta de combate / Puesto de guardia al amanecer',
    context: 'The company entered full stand-to thirty minutes prior to dawn.'
  }
];
