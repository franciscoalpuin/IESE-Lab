/**
 * Spanish Phonetic Transliteration Engine for British English
 * Permite a hispanohablantes leer la pronunciación aproximada en español natural.
 * Ejemplo: "Half" -> "Jaf", "Barracks" -> "Báraks", "Bite the bullet" -> "Bait de búlet"
 */

// Diccionario de excepciones y términos militares y de alta frecuencia
const SPECIAL_WORDS_MAP: Record<string, string> = {
  // Ejemplos directos pedidos por el usuario
  'half': 'jaf',
  'half past': 'jaf past',
  'past': 'past',
  'bullet': 'búlet',
  'bite': 'bait',
  'knife': 'naif',
  'knight': 'nait',
  'sword': 'sord',
  'corps': 'kor',
  'lieutenant': 'lefténant', // Pronunciación británica militar
  'sergeant': 'sárdzhent',
  'colonel': 'kérnel',
  'major': 'méidzor',
  'captain': 'káptin',
  'general': 'dzhéneral',
  'private': 'práivit',
  'platoon': 'platún',
  'section': 'sékshon',
  'squad': 'skuód',
  'company': 'kómpani',
  'battalion': 'batálion',
  'regiment': 'rédzhiment',
  'brigade': 'briguéid',
  'division': 'divízhon',
  'corpsman': 'kórman',
  'barracks': 'báraks',
  'parade': 'paréid',
  'ground': 'gráund',
  'checkpoint': 'chékpoint',
  'schedule': 'shédyul', // UK: /ˈʃedʒuːl/
  'roger': 'ródzher',
  'wilco': 'wílko',
  'over': 'óuver',
  'out': 'áut',
  'mayday': 'méidei',
  'sitrep': 'sít-rep',
  'sunray': 'sán-rei',
  'trench': 'trench',
  'trenches': 'trénchis',
  'radar': 'réidar',
  'ghillie': 'guíli',
  'suit': 'siut',
  'scuttlebutt': 'skátel-bat',
  'powder': 'páuder',
  'shot': 'shot',
  'across': 'akrós',
  'bow': 'báu',
  'colours': 'kálors',
  'colors': 'kálors',
  'loose': 'luus',
  'lips': 'lips',
  'sink': 'sink',
  'ships': 'ships',
  'point': 'point',
  'blank': 'blank',
  'range': 'réindzh',
  'lock': 'lok',
  'load': 'lóud',
  'flash': 'flash',
  'pan': 'pan',
  'brass': 'bras',
  'eleventh': 'ilévents',
  'hour': 'áuer',
  'hours': 'áuers',
  'bunker': 'bánker',
  'mentality': 'mentáliti',
  'chow': 'cháu',
  'dust': 'dast',
  'the': 'de',
  'a': 'e',
  'an': 'an',
  'to': 'tu',
  'of': 'ov',
  'in': 'in',
  'on': 'on',
  'at': 'at',
  'by': 'bai',
  'for': 'for',
  'with': 'widz',
  'and': 'and',
  'or': 'or',
  'not': 'not',
  'is': 'is',
  'are': 'ar',
  'was': 'wos',
  'were': 'wer',
  'be': 'bi',
  'been': 'bin',
  'have': 'jav',
  'has': 'jas',
  'had': 'jad',
  'do': 'du',
  'does': 'das',
  'did': 'did',
  'will': 'wil',
  'would': 'wud',
  'shall': 'shal',
  'should': 'shud',
  'can': 'kan',
  'could': 'kud',
  'may': 'mei',
  'might': 'mait',
  'must': 'mast',
  'one': 'wán',
  'two': 'tú',
  'three': 'zrrí',
  'four': 'fór',
  'five': 'fáiv',
  'six': 'síks',
  'seven': 'séven',
  'eight': 'éit',
  'nine': 'náin',
  'ten': 'ten',
  'zero': 'zírou',
  'hundred': 'jándred',
  'thousand': 'tzáusand',
  'reconnaissance': 'rikónisans',
  'surveillance': 'ser-véilans',
  'ammunition': 'amiuníshon',
  'artillery': 'artíleri',
  'infantry': 'ínfantri',
  'logistics': 'lodzhístiks',
  'weapon': 'wépon',
  'weapons': 'wépons',
  'target': 'tárguet',
  'targets': 'tárguets',
  'patrol': 'patróul',
  'patrols': 'patróuls',
  'briefing': 'bríifing',
  'debrief': 'dí-briif',
  'mission': 'míshon',
  'orders': 'órders',
  'order': 'órder',
  'command': 'kománd',
  'commander': 'kománder',
  'officer': 'ófiser',
  'officers': 'ófisers',
  'soldier': 'sóuldzer',
  'soldiers': 'sóuldzers',
  'vehicle': 'víikl',
  'vehicles': 'víikls',
  'convoy': 'kónvoi',
  'perimeter': 'perímiter',
  'boundary': 'báunderi',
  'coordinates': 'kou-órdinets',
  'casualty': 'kázhualti',
  'casualties': 'kázhualtis',
  'evacuation': 'evakiuéishon',
  'radio': 'réidiou',
  'silence': 'sáilens',
  'clear': 'klíar',
  'secure': 'sekiúr',
  'affirmative': 'aférmativ',
  'negative': 'négativ'
};

// Mapeo fonético de símbolos IPA hacia fonética legible en español
export function convertIpaToSpanishPhonetic(ipa: string): string {
  if (!ipa) return '';

  let clean = ipa
    .replace(/[\[\]\/\\]/g, '') // Quita barras y corchetes
    .replace(/ˈ/g, '·')          // Marca acento tónico principal
    .replace(/ˌ/g, '')           // Acento secundario
    .trim();

  // Reemplazos de diptongos y vocales largas
  const phonemeRules: Array<[RegExp, string]> = [
    [/tʃ/g, 'ch'],
    [/dʒ/g, 'dzh'],
    [/θ/g, 'z'],
    [/ð/g, 'd'],
    [/ʃ/g, 'sh'],
    [/ʒ/g, 'zh'],
    [/ŋ/g, 'ng'],
    [/j/g, 'y'],
    [/w/g, 'w'],
    [/iː/g, 'ii'],
    [/uː/g, 'uu'],
    [/ɔː/g, 'oo'],
    [/ɑː/g, 'aa'],
    [/ɜː/g, 'er'],
    [/eɪ/g, 'ei'],
    [/aɪ/g, 'ai'],
    [/ɔɪ/g, 'oi'],
    [/aʊ/g, 'au'],
    [/əʊ/g, 'ou'],
    [/oʊ/g, 'ou'],
    [/ɪə/g, 'ia'],
    [/eə/g, 'ea'],
    [/ʊə/g, 'ua'],
    [/æ/g, 'a'],
    [/ʌ/g, 'a'],
    [/ɒ/g, 'o'],
    [/ʊ/g, 'u'],
    [/ɪ/g, 'i'],
    [/e/g, 'e'],
    [/ə/g, 'e'],
    [/h/g, 'j']
  ];

  for (const [pattern, replacement] of phonemeRules) {
    clean = clean.replace(pattern, replacement);
  }

  // Quitar la marca de acento o convertir a mayúscula/tilde según corresponda
  clean = clean.replace(/·([a-záéíóú]+)/gi, (_match, syllable) => {
    return syllable;
  });

  return clean;
}

/**
 * Genera la lectura fonética en español para una palabra o frase en inglés.
 * Si existe en el diccionario exacto lo devuelve; si no, convierte palabra por palabra.
 */
export function getSpanishPhonetic(englishText: string, ipaHint?: string): string {
  if (!englishText) return '';

  const trimmed = englishText.trim();
  const lower = trimmed.toLowerCase();

  // 1. Coincidencia exacta en tabla directa
  if (SPECIAL_WORDS_MAP[lower]) {
    return capitalizeMatching(SPECIAL_WORDS_MAP[lower], trimmed);
  }

  // 2. Si viene acompañado de transcripción IPA precisa, usarla como base confiable
  if (ipaHint && ipaHint.length > 1) {
    const fromIpa = convertIpaToSpanishPhonetic(ipaHint);
    if (fromIpa) {
      return capitalizeMatching(fromIpa, trimmed);
    }
  }

  // 3. Procesar frase palabra por palabra
  const words = trimmed.split(/(\s+|[-–—,;:!?.()]+)/);
  const converted = words.map(chunk => {
    // Si es separador, conservarlo
    if (/^[\s\-–—,;:!?.()]+$/.test(chunk)) {
      return chunk;
    }

    const chunkLower = chunk.toLowerCase();
    if (SPECIAL_WORDS_MAP[chunkLower]) {
      return capitalizeMatching(SPECIAL_WORDS_MAP[chunkLower], chunk);
    }

    return transliterateSingleWordToSpanish(chunkLower);
  });

  return converted.join('');
}

/**
 * Reglas heurísticas de transliteración inglés -> español hablado
 */
function transliterateSingleWordToSpanish(word: string): string {
  if (!word) return '';

  // Casos mudos y combinaciones especiales comunes en inglés
  let s = word;

  // Letras mudas al inicio
  s = s.replace(/^kn/, 'n');   // knife -> naif, knight -> nait
  s = s.replace(/^wr/, 'r');   // write -> rait
  s = s.replace(/^ps/, 's');   // psychic -> saikik
  s = s.replace(/^wh/, 'w');   // what -> wat, when -> wen

  // Patrones con "half", "calm", "talk", etc. (l muda)
  s = s.replace(/alf\b/, 'af'); // half -> jaf (se completará con h->j abajo)
  s = s.replace(/alm\b/, 'am'); // calm -> kam
  s = s.replace(/alk\b/, 'ok'); // talk -> tok, walk -> wok

  // Terminaciones frecuentes
  s = s.replace(/tion\b/g, 'shon');
  s = s.replace(/sion\b/g, 'zhon');
  s = s.replace(/ture\b/g, 'cher');
  s = s.replace(/cious\b|tious\b/g, 'shas');
  s = s.replace(/ough\b/g, 'af');
  s = s.replace(/ight\b/g, 'ait');

  // Vocales dobles
  s = s.replace(/ee/g, 'i');
  s = s.replace(/ea/g, 'i');
  s = s.replace(/oo/g, 'u');
  s = s.replace(/ou/g, 'au');
  s = s.replace(/ow\b/g, 'ou');
  s = s.replace(/ai|ay/g, 'ei');
  s = s.replace(/oi|oy/g, 'oi');
  s = s.replace(/au|aw/g, 'o');

  // Consonantes
  s = s.replace(/ph/g, 'f');
  s = s.replace(/th/g, 'd');
  s = s.replace(/sh/g, 'sh');
  s = s.replace(/ch/g, 'ch');
  s = s.replace(/qu/g, 'kw');
  s = s.replace(/ck/g, 'k');
  s = s.replace(/c([eiyeí])/g, 's$1');
  s = s.replace(/c([aouáóú])/g, 'k$1');
  s = s.replace(/c$/g, 'k');
  s = s.replace(/h/g, 'j');
  s = s.replace(/j/g, 'dzh');
  s = s.replace(/y\b/g, 'i');

  // E muda final (ej: make -> meik, bite -> bait)
  if (s.endsWith('e') && s.length > 2 && !/[aeiouy]e$/.test(s)) {
    s = s.slice(0, -1);
  }

  return s;
}

function capitalizeMatching(target: string, original: string): string {
  if (!original || !target) return target;
  // Si todo el original está en mayúsculas (ej. "HALF")
  if (original === original.toUpperCase() && original.length > 1) {
    return target.toUpperCase();
  }
  // Si la primera letra es mayúscula
  if (original[0] === original[0].toUpperCase()) {
    return target.charAt(0).toUpperCase() + target.slice(1);
  }
  return target;
}
