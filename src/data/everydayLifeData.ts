// =========================================================================
// DATA: INGLÉS DESDE CERO - TEMAS DE LA VIDA DIARIA SEGÚN PROGRAMA IESE
// Abecedario normal (A-Z), Números 1-100, Sumar y Restar, Horario Civil y Militar,
// Deportes (Play/Go/Do), Pasatiempos, Rutina Diaria, Familia, Comida, Clima
// =========================================================================

export interface AlphabetLetter {
  letter: string;
  soundIpa: string;
  spanishPhonetic: string;
  rhymeGroup: 'ei' | 'ii' | 'e' | 'ai' | 'ou' | 'uu' | 'ar';
  exampleWord: string;
  exampleTranslation: string;
  spellingTip: string;
}

export const ENGLISH_ALPHABET_AZ: AlphabetLetter[] = [
  { letter: 'A', soundIpa: '/eɪ/', spanishPhonetic: 'éi', rhymeGroup: 'ei', exampleWord: 'Apple / Army', exampleTranslation: 'Manzana / Ejército', spellingTip: 'Rima con H, J, K ("éi", "éich", "dshéi", "kéi")' },
  { letter: 'B', soundIpa: '/biː/', spanishPhonetic: 'bi', rhymeGroup: 'ii', exampleWord: 'Barracks / Book', exampleTranslation: 'Cuartel / Libro', spellingTip: 'Rima con C, D, E, G, P, T, V' },
  { letter: 'C', soundIpa: '/siː/', spanishPhonetic: 'si', rhymeGroup: 'ii', exampleWord: 'Captain / Car', exampleTranslation: 'Capitán / Auto', spellingTip: 'Pronuncia "si" suave' },
  { letter: 'D', soundIpa: '/diː/', spanishPhonetic: 'di', rhymeGroup: 'ii', exampleWord: 'Daily / Door', exampleTranslation: 'Diario / Puerta', spellingTip: 'Lengua detrás de los dientes superiores' },
  { letter: 'E', soundIpa: '/iː/', spanishPhonetic: 'i', rhymeGroup: 'ii', exampleWord: 'Exercise / Email', exampleTranslation: 'Ejercicio / Correo', spellingTip: 'En inglés la letra E suena como la "i" en español' },
  { letter: 'F', soundIpa: '/ef/', spanishPhonetic: 'ef', rhymeGroup: 'e', exampleWord: 'Family / Football', exampleTranslation: 'Familia / Fútbol', spellingTip: 'Rima con L, M, N, S, X' },
  { letter: 'G', soundIpa: '/dʒiː/', spanishPhonetic: 'dshi', rhymeGroup: 'ii', exampleWord: 'Guard / Gym', exampleTranslation: 'Guardia / Gimnasio', spellingTip: 'Sonido suave "dsh" como en "jeans"' },
  { letter: 'H', soundIpa: '/eɪtʃ/', spanishPhonetic: 'éich', rhymeGroup: 'ei', exampleWord: 'Hospital / Hobby', exampleTranslation: 'Hospital / Pasatiempo', spellingTip: '¡Atención! La letra H se llama "éich"' },
  { letter: 'I', soundIpa: '/aɪ/', spanishPhonetic: 'ái', rhymeGroup: 'ai', exampleWord: 'Infantry / Ice cream', exampleTranslation: 'Infantería / Helado', spellingTip: 'La letra I suena "ái", rima con Y ("uái")' },
  { letter: 'J', soundIpa: '/dʒeɪ/', spanishPhonetic: 'dshéi', rhymeGroup: 'ei', exampleWord: 'Jacket / Judo', exampleTranslation: 'Campera / Judo', spellingTip: 'Rima con A, H, K' },
  { letter: 'K', soundIpa: '/keɪ/', spanishPhonetic: 'kéi', rhymeGroup: 'ei', exampleWord: 'Kitchen / Key', exampleTranslation: 'Cocina / Llave', spellingTip: 'Rima con A ("éi")' },
  { letter: 'L', soundIpa: '/el/', spanishPhonetic: 'el', rhymeGroup: 'e', exampleWord: 'Lieutenant / Lunch', exampleTranslation: 'Teniente / Almuerzo', spellingTip: 'Sonido breve "el"' },
  { letter: 'M', soundIpa: '/em/', spanishPhonetic: 'em', rhymeGroup: 'e', exampleWord: 'Morning / Mess', exampleTranslation: 'Mañana / Comedor militar', spellingTip: 'Cierra los labios al final "em"' },
  { letter: 'N', soundIpa: '/en/', spanishPhonetic: 'en', rhymeGroup: 'e', exampleWord: 'Number / Night', exampleTranslation: 'Número / Noche', spellingTip: 'Lengua al paladar "en"' },
  { letter: 'O', soundIpa: '/əʊ/', spanishPhonetic: 'óu', rhymeGroup: 'ou', exampleWord: 'Officer / Orange', exampleTranslation: 'Oficial / Naranja', spellingTip: 'Diptongo cerrado "óu"' },
  { letter: 'P', soundIpa: '/piː/', spanishPhonetic: 'pi', rhymeGroup: 'ii', exampleWord: 'Platoon / Pastime', exampleTranslation: 'Pelotón / Pasatiempo', spellingTip: 'Explosión de aire con los labios' },
  { letter: 'Q', soundIpa: '/kjuː/', spanishPhonetic: 'kiú', rhymeGroup: 'uu', exampleWord: 'Quartermaster / Quick', exampleTranslation: 'Intendente / Rápido', spellingTip: 'Suena "kiú", rima con U ("iú")' },
  { letter: 'R', soundIpa: '/ɑː/', spanishPhonetic: 'ar', rhymeGroup: 'ar', exampleWord: 'Routine / Rifle', exampleTranslation: 'Rutina / Fusil', spellingTip: 'En acento británico suena "aa" abierta' },
  { letter: 'S', soundIpa: '/es/', spanishPhonetic: 'es', rhymeGroup: 'e', exampleWord: 'Sergeant / Sport', exampleTranslation: 'Sargento / Deporte', spellingTip: 'Comienza con vocal "es"' },
  { letter: 'T', soundIpa: '/tiː/', spanishPhonetic: 'ti', rhymeGroup: 'ii', exampleWord: 'Training / Time', exampleTranslation: 'Adiestramiento / Tiempo', spellingTip: 'Rima con B, C, D, P, V' },
  { letter: 'U', soundIpa: '/juː/', spanishPhonetic: 'iú', rhymeGroup: 'uu', exampleWord: 'Uniform / Unit', exampleTranslation: 'Uniforme / Unidad', spellingTip: 'Suena "iú"' },
  { letter: 'V', soundIpa: '/viː/', spanishPhonetic: 'vi (labiodental)', rhymeGroup: 'ii', exampleWord: 'Vehicle / Volleyball', exampleTranslation: 'Vehículo / Vóleibol', spellingTip: 'Dientes superiores rozando el labio inferior' },
  { letter: 'W', soundIpa: '/ˈdʌb.əl.juː/', spanishPhonetic: 'dábl-iu', rhymeGroup: 'uu', exampleWord: 'Weather / Weapon', exampleTranslation: 'Clima / Arma', spellingTip: 'Literalmente "doble u"' },
  { letter: 'X', soundIpa: '/eks/', spanishPhonetic: 'eks', rhymeGroup: 'e', exampleWord: 'X-ray', exampleTranslation: 'Rayos X', spellingTip: 'Suena "eks"' },
  { letter: 'Y', soundIpa: '/waɪ/', spanishPhonetic: 'uái', rhymeGroup: 'ai', exampleWord: 'Yesterday / Yoga', exampleTranslation: 'Ayer / Yoga', spellingTip: 'Rima con I ("ái")' },
  { letter: 'Z', soundIpa: '/zed/', spanishPhonetic: 'zed', rhymeGroup: 'e', exampleWord: 'Zero / Zulu', exampleTranslation: 'Cero / Zulú', spellingTip: 'En inglés británico se dice "ZED", no "zee"' }
];

export interface NumberEntry {
  number: number;
  word: string;
  ipa: string;
  spanishPhonetic: string;
  note?: string;
}

export const NUMBERS_1_TO_20: NumberEntry[] = [
  { number: 0, word: 'zero', ipa: '/ˈzɪə.rəʊ/', spanishPhonetic: 'zí-rou', note: 'También se dice "oh" en números de teléfono o códigos' },
  { number: 1, word: 'one', ipa: '/wʌn/', spanishPhonetic: 'uán' },
  { number: 2, word: 'two', ipa: '/tuː/', spanishPhonetic: 'tu' },
  { number: 3, word: 'three', ipa: '/θriː/', spanishPhonetic: 'zri', note: 'Sonido /θ/ sacando la punta de la lengua entre los dientes' },
  { number: 4, word: 'four', ipa: '/fɔː/', spanishPhonetic: 'for' },
  { number: 5, word: 'five', ipa: '/faɪv/', spanishPhonetic: 'fáiv', note: 'Termina en /v/ labiodental' },
  { number: 6, word: 'six', ipa: '/sɪks/', spanishPhonetic: 'siks' },
  { number: 7, word: 'seven', ipa: '/ˈsev.ən/', spanishPhonetic: 'sé-ven' },
  { number: 8, word: 'eight', ipa: '/eɪt/', spanishPhonetic: 'éit' },
  { number: 9, word: 'nine', ipa: '/naɪn/', spanishPhonetic: 'náin' },
  { number: 10, word: 'ten', ipa: '/ten/', spanishPhonetic: 'ten' },
  { number: 11, word: 'eleven', ipa: '/ɪˈlev.ən/', spanishPhonetic: 'i-lé-ven' },
  { number: 12, word: 'twelve', ipa: '/twelv/', spanishPhonetic: 'tuélv' },
  { number: 13, word: 'thirteen', ipa: '/ˌθɜːˈtiːn/', spanishPhonetic: 'zer-TÍN', note: '¡Acento al final! (-TEEN)' },
  { number: 14, word: 'fourteen', ipa: '/ˌfɔːˈtiːn/', spanishPhonetic: 'for-TÍN', note: '¡Acento al final! (-TEEN)' },
  { number: 15, word: 'fifteen', ipa: '/ˌfɪfˈtiːn/', spanishPhonetic: 'fif-TÍN', note: 'Cambia a "fif-", ¡no "fiveteen"!' },
  { number: 16, word: 'sixteen', ipa: '/ˌsɪkˈstiːn/', spanishPhonetic: 'siks-TÍN', note: '¡Acento al final! (-TEEN)' },
  { number: 17, word: 'seventeen', ipa: '/ˌsev.ənˈtiːn/', spanishPhonetic: 'se-ven-TÍN', note: '¡Acento al final! (-TEEN)' },
  { number: 18, word: 'eighteen', ipa: '/ˌeɪˈtiːn/', spanishPhonetic: 'ei-TÍN', note: '¡Acento al final! (-TEEN)' },
  { number: 19, word: 'nineteen', ipa: '/ˌnaɪnˈtiːn/', spanishPhonetic: 'nain-TÍN', note: '¡Acento al final! (-TEEN)' },
  { number: 20, word: 'twenty', ipa: '/ˈtwen.ti/', spanishPhonetic: 'TUÉN-ti', note: '¡Acento al principio! (-TY)' }
];

export const NUMBERS_TENS: NumberEntry[] = [
  { number: 20, word: 'twenty', ipa: '/ˈtwen.ti/', spanishPhonetic: 'TUÉN-ti' },
  { number: 30, word: 'thirty', ipa: '/ˈθɜː.ti/', spanishPhonetic: 'ZÉR-ti', note: 'Contraste: 13 (zer-TÍN) vs 30 (ZÉR-ti)' },
  { number: 40, word: 'forty', ipa: '/ˈfɔː.ti/', spanishPhonetic: 'FÓR-ti', note: '¡Se escribe forty (sin "u"), no "fourty"!' },
  { number: 50, word: 'fifty', ipa: '/ˈfɪf.ti/', spanishPhonetic: 'FÍF-ti', note: 'Contraste: 15 (fif-TÍN) vs 50 (FÍF-ti)' },
  { number: 60, word: 'sixty', ipa: '/ˈsɪk.sti/', spanishPhonetic: 'SÍKS-ti' },
  { number: 70, word: 'seventy', ipa: '/ˈsev.ən.ti/', spanishPhonetic: 'SÉ-ven-ti' },
  { number: 80, word: 'eighty', ipa: '/ˈeɪ.ti/', spanishPhonetic: 'ÉI-ti' },
  { number: 90, word: 'ninety', ipa: '/ˈnaɪn.ti/', spanishPhonetic: 'NÁIN-ti' },
  { number: 100, word: 'one hundred', ipa: '/wʌn ˈhʌn.drəd/', spanishPhonetic: 'uán JÁN-dred' }
];

export interface MathOperationRule {
  symbol: string;
  name: string;
  englishVerbs: string[];
  spokenWords: string[];
  exampleFormula: string;
  spokenExample: string;
  translation: string;
  tacticalDailyApplication: string;
}

export const BASIC_MATH_OPERATIONS: MathOperationRule[] = [
  {
    symbol: '+',
    name: 'Suma (Addition)',
    englishVerbs: ['to add', 'to sum'],
    spokenWords: ['plus', 'and', 'added to'],
    exampleFormula: '7 + 5 = 12',
    spokenExample: 'Seven plus five equals twelve. (o: Seven and five is twelve)',
    translation: 'Siete más cinco es igual a doce.',
    tacticalDailyApplication: 'Contar refuerzos, raciones y horas de guardia acumuladas.'
  },
  {
    symbol: '-',
    name: 'Resta (Subtraction)',
    englishVerbs: ['to subtract', 'to take away'],
    spokenWords: ['minus', 'take away', 'less'],
    exampleFormula: '20 - 8 = 12',
    spokenExample: 'Twenty minus eight equals twelve. (o: Twenty take away eight is twelve)',
    translation: 'Veinte menos ocho es igual a doce.',
    tacticalDailyApplication: 'Calcular bajas, consumo de munición y saldo en compras o cambio.'
  },
  {
    symbol: '×',
    name: 'Multiplicación (Multiplication)',
    englishVerbs: ['to multiply'],
    spokenWords: ['times', 'multiplied by'],
    exampleFormula: '4 × 6 = 24',
    spokenExample: 'Four times six is twenty-four. (o: Four multiplied by six equals twenty-four)',
    translation: 'Cuatro por seis es veinticuatro.',
    tacticalDailyApplication: 'Calcular efectivos por pelotón (ej. 3 secciones de 8 soldados).'
  },
  {
    symbol: '÷',
    name: 'División (Division)',
    englishVerbs: ['to divide'],
    spokenWords: ['divided by'],
    exampleFormula: '30 ÷ 3 = 10',
    spokenExample: 'Thirty divided by three equals ten.',
    translation: 'Treinta dividido tres es igual a diez.',
    tacticalDailyApplication: 'Repartir suministros, raciones o turnos de centinela.'
  },
  {
    symbol: '=',
    name: 'Igual (Equals)',
    englishVerbs: ['to equal'],
    spokenWords: ['equals', 'is', 'makes'],
    exampleFormula: '10 + 10 = 20',
    spokenExample: 'Ten plus ten equals twenty. (o: Ten plus ten is twenty / makes twenty)',
    translation: 'Diez más diez es igual a veinte.',
    tacticalDailyApplication: 'Expresar resultados matemáticos y balances exactos.'
  }
];

export interface TimeComparison {
  analogueCivil: string;
  digitalCivil: string;
  military24h: string;
  civilianPronunciation: string;
  militaryPronunciation: string;
  contextUsage: string;
}

export const TIME_CIVILIAN_VS_MILITARY: TimeComparison[] = [
  {
    analogueCivil: 'Seven o\'clock in the morning',
    digitalCivil: '7:00 AM',
    military24h: '0700 hrs',
    civilianPronunciation: 'Seven o\'clock a.m.',
    militaryPronunciation: 'Zero-seven-hundred hours',
    contextUsage: 'Despertador matutino y pase de lista'
  },
  {
    analogueCivil: 'Half past seven in the morning',
    digitalCivil: '7:30 AM',
    military24h: '0730 hrs',
    civilianPronunciation: 'Half past seven in the morning',
    militaryPronunciation: 'Zero-seven-thirty hours',
    contextUsage: 'Inicio del desayuno y adiestramiento físico (PT)'
  },
  {
    analogueCivil: 'Quarter past eight in the morning',
    digitalCivil: '8:15 AM',
    military24h: '0815 hrs',
    civilianPronunciation: 'Quarter past eight',
    militaryPronunciation: 'Zero-eight-fifteen hours',
    contextUsage: 'Apertura de oficinas y formación de guardia'
  },
  {
    analogueCivil: 'Ten to ten in the morning',
    digitalCivil: '9:50 AM',
    military24h: '0950 hrs',
    civilianPronunciation: 'Ten to ten in the morning',
    militaryPronunciation: 'Zero-nine-fifty hours',
    contextUsage: 'Reunión previa a la inspección'
  },
  {
    analogueCivil: 'Twelve o\'clock / Midday / Noon',
    digitalCivil: '12:00 PM',
    military24h: '1200 hrs',
    civilianPronunciation: 'Midday / Twelve noon',
    militaryPronunciation: 'Twelve-hundred hours',
    contextUsage: 'Almuerzo en el comedor'
  },
  {
    analogueCivil: 'Quarter past two in the afternoon',
    digitalCivil: '2:15 PM',
    military24h: '1415 hrs',
    civilianPronunciation: 'Quarter past two in the afternoon',
    militaryPronunciation: 'Fourteen-fifteen hours',
    contextUsage: 'Salida de patrulla o instrucción teórica'
  },
  {
    analogueCivil: 'Half past four in the afternoon',
    digitalCivil: '4:30 PM',
    military24h: '1630 hrs',
    civilianPronunciation: 'Half past four in the afternoon',
    militaryPronunciation: 'Sixteen-thirty hours',
    contextUsage: 'Fin de la jornada administrativa y deportes'
  },
  {
    analogueCivil: 'Quarter to six in the evening',
    digitalCivil: '5:45 PM',
    military24h: '1745 hrs',
    civilianPronunciation: 'Quarter to six in the evening',
    militaryPronunciation: 'Seventeen-forty-five hours',
    contextUsage: 'Relevo del puesto de guardia nocturna'
  },
  {
    analogueCivil: 'Eight o\'clock in the evening',
    digitalCivil: '8:00 PM',
    military24h: '2000 hrs',
    civilianPronunciation: 'Eight o\'clock in the evening / 8 p.m.',
    militaryPronunciation: 'Twenty-hundred hours',
    contextUsage: 'Cena y tiempo libre en el casino'
  },
  {
    analogueCivil: 'Ten o\'clock at night',
    digitalCivil: '10:00 PM',
    military24h: '2200 hrs',
    civilianPronunciation: 'Ten o\'clock at night',
    militaryPronunciation: 'Twenty-two-hundred hours',
    contextUsage: 'Toque de silencio (Lights out)'
  }
];

export interface SportActivity {
  name: string;
  spanish: string;
  category: 'play' | 'go' | 'do';
  reasonRule: string;
  exampleSentence: string;
  spanishTranslation: string;
}

export const SPORTS_ACTIVITIES: SportActivity[] = [
  { name: 'Football (Soccer)', spanish: 'Fútbol', category: 'play', reasonRule: 'Se usa PLAY porque es deporte con pelota y en equipo competitivo.', exampleSentence: 'We play football every Wednesday afternoon on the sports field.', spanishTranslation: 'Jugamos al fútbol todos los miércoles por la tarde en el campo de deportes.' },
  { name: 'Basketball', spanish: 'Básquetbol', category: 'play', reasonRule: 'Se usa PLAY por ser deporte de pelota y cancha.', exampleSentence: 'Soldiers play basketball in the gymnasium.', spanishTranslation: 'Los soldados juegan al básquetbol en el gimnasio.' },
  { name: 'Tennis', spanish: 'Tenis', category: 'play', reasonRule: 'Se usa PLAY porque tiene pelota, red y juego reglamentado.', exampleSentence: 'Captain Miller plays tennis at the officers\' club.', spanishTranslation: 'El Capitán Miller juega al tenis en el club de oficiales.' },
  { name: 'Rugby', spanish: 'Rugby', category: 'play', reasonRule: 'Se usa PLAY con pelota ovalada y equipos.', exampleSentence: 'The regiment plays rugby against the naval team.', spanishTranslation: 'El regimiento juega al rugby contra el equipo de la marina.' },
  { name: 'Volleyball', spanish: 'Vóleibol', category: 'play', reasonRule: 'Se usa PLAY con balón y equipos.', exampleSentence: 'In the summer, they play volleyball outdoors.', spanishTranslation: 'En el verano juegan al vóleibol al aire libre.' },
  { name: 'Chess', spanish: 'Ajedrez', category: 'play', reasonRule: 'Se usa PLAY para juegos de mesa reglamentados y competitivos.', exampleSentence: 'I like playing chess with my father on weekends.', spanishTranslation: 'Me gusta jugar al ajedrez con mi padre los fines de semana.' },
  
  { name: 'Swimming', spanish: 'Natación', category: 'go', reasonRule: 'Se usa GO porque la actividad termina en -ING y requiere desplazarse.', exampleSentence: 'Our section goes swimming twice a week in the base pool.', spanishTranslation: 'Nuestra sección va a nadar dos veces por semana en la piscina de la base.' },
  { name: 'Running / Jogging', spanish: 'Correr / Trote', category: 'go', reasonRule: 'Se usa GO porque termina en -ING.', exampleSentence: 'I go running every morning at 0630 hours.', spanishTranslation: 'Salgo a correr todas las mañanas a las 06:30.' },
  { name: 'Cycling', spanish: 'Ciclismo', category: 'go', reasonRule: 'Se usa GO con deportes en -ING.', exampleSentence: 'They go cycling in the countryside during their time off.', spanishTranslation: 'Ellos andan en bicicleta por el campo durante su tiempo libre.' },
  { name: 'Hiking', spanish: 'Senderismo / Caminatas', category: 'go', reasonRule: 'Se usa GO con actividades de desplazamiento en -ING.', exampleSentence: 'We go hiking in the mountains on Sundays.', spanishTranslation: 'Hacemos senderismo en las montañas los domingos.' },
  
  { name: 'Physical Training (PT)', spanish: 'Adiestramiento Físico', category: 'do', reasonRule: 'Se usa DO para ejercicios físicos, acondicionamiento y gimnasia.', exampleSentence: 'All personnel do physical training (PT) from 0730 to 0830.', spanishTranslation: 'Todo el personal hace adiestramiento físico (PT) de 07:30 a 08:30.' },
  { name: 'Judo', spanish: 'Judo', category: 'do', reasonRule: 'Se usa DO para artes marciales y deportes de combate sin pelota.', exampleSentence: 'Sergeant Gomez does judo and holds a black belt.', spanishTranslation: 'El Sargento Gómez hace judo y tiene cinturón negro.' },
  { name: 'Karate', spanish: 'Karate', category: 'do', reasonRule: 'Se usa DO para artes marciales.', exampleSentence: 'Many recruits do karate for self-defence training.', spanishTranslation: 'Muchos reclutas practican karate para defensa personal.' },
  { name: 'Gymnastics / Calisthenics', spanish: 'Gimnasia / Calistenia', category: 'do', reasonRule: 'Se usa DO para ejercicios corporales individuales.', exampleSentence: 'We do gymnastics and push-ups to build upper-body strength.', spanishTranslation: 'Hacemos gimnasia y flexiones de brazos para ganar fuerza en el torso.' },
  { name: 'Yoga', spanish: 'Yoga', category: 'do', reasonRule: 'Se usa DO para disciplinas de flexibilidad y respiración.', exampleSentence: 'She does yoga to relax after work.', spanishTranslation: 'Ella hace yoga para relajarse después del trabajo.' }
];

export interface HobbyPastime {
  name: string;
  spanish: string;
  expression: string;
  audioText: string;
  translation: string;
}

export const HOBBIES_PASTIMES: HobbyPastime[] = [
  { name: 'Reading books', spanish: 'Leer libros', expression: 'I like reading historical novels and military magazines.', audioText: 'I like reading historical novels and military magazines.', translation: 'Me gusta leer novelas históricas y revistas militares.' },
  { name: 'Listening to music', spanish: 'Escuchar música', expression: 'He loves listening to rock music and podcasts.', audioText: 'He loves listening to rock music and podcasts.', translation: 'A él le encanta escuchar música rock y podcasts.' },
  { name: 'Watching movies / TV series', spanish: 'Ver películas y series', expression: 'We enjoy watching action movies at the cinema on Saturday night.', audioText: 'We enjoy watching action movies at the cinema on Saturday night.', translation: 'Disfrutamos viendo películas de acción en el cine el sábado a la noche.' },
  { name: 'Playing guitar / piano', spanish: 'Tocar la guitarra / piano', expression: 'Lieutenant Silva plays guitar in his free time.', audioText: 'Lieutenant Silva plays guitar in his free time.', translation: 'El Teniente Silva toca la guitarra en su tiempo libre.' },
  { name: 'Photography', spanish: 'Fotografía', expression: 'My hobby is photography; I take photos of landscapes.', audioText: 'My hobby is photography; I take photos of landscapes.', translation: 'Mi pasatiempo es la fotografía; tomo fotos de paisajes.' },
  { name: 'Cooking', spanish: 'Cocinar', expression: 'I enjoy cooking traditional Argentine barbecue for my colleagues.', audioText: 'I enjoy cooking traditional Argentine barbecue for my colleagues.', translation: 'Disfruto cocinando asado tradicional argentino para mis colegas.' },
  { name: 'Gardening', spanish: 'Jardinería', expression: 'My mother loves gardening and planting flowers.', audioText: 'My mother loves gardening and planting flowers.', translation: 'A mi madre le encanta la jardinería y plantar flores.' },
  { name: 'Playing video games', spanish: 'Jugar videojuegos', expression: 'Corporal Davis likes playing simulation video games.', audioText: 'Corporal Davis likes playing simulation video games.', translation: 'Al Cabo Davis le gusta jugar videojuegos de simulación.' },
  { name: 'Travelling', spanish: 'Viajar y conocer lugares', expression: 'We prefer travelling to the mountains in the summer.', audioText: 'We prefer travelling to the mountains in the summer.', translation: 'Preferimos viajar a las montañas en el verano.' }
];
