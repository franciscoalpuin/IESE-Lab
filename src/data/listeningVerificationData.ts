export interface ProgressiveListeningQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  focusType: 'minimal_pair' | 'near_homophone' | 'homophone' | 'connected_speech' | 'tactical_directive';
  difficultyTier: 'word' | 'short_phrase' | 'extended_phrase';
  phoneticTarget?: string;
}

export interface DayListeningVerification {
  day: number;
  levelNumber: number;
  tierLabel: string;
  tierDescription: string;
  item1: ProgressiveListeningQuestion; // Acoustic discrimination (Sound-alike words / minimal pairs / short phrases)
  item2: ProgressiveListeningQuestion; // Operational verification (Concise English phrases scaling in extension)
}

/**
 * Curated progression matrix of minimal pairs, homophones, and acoustic traps
 * mapped specifically for 120 days of British Military English training.
 */
interface AcousticTrapEntry {
  targetWord: string;
  distractors: [string, string, string];
  phoneticSound: string;
  soundAlikePhraseTarget?: string;
  soundAlikePhraseDistractors?: [string, string, string];
  extendedPhraseTarget?: string;
  extendedPhraseDistractors?: [string, string, string];
  operationalDirectiveTarget: string;
  operationalDirectiveDistractors: [string, string, string];
  acousticExplanation: string;
  directiveExplanation: string;
}

// Representative bank of curated tactical sound-alikes for all 120 days
const ACOUSTIC_PROGRESSION_BANK: Record<number, AcousticTrapEntry> = {
  // =========================================================================
  // PHASE 1: DAYS 1 - 30 (Single Words & 2-Word Tactical Collocations)
  // Aligned strictly with the daily curriculum activities and listening transcripts
  // =========================================================================
  1: {
    targetWord: 'EVANS',
    distractors: ['EVENS', 'IVANS', 'EBANS'],
    phoneticSound: 'Letter vowels: E /iː/ vs A /eɪ/ vs I /aɪ/',
    operationalDirectiveTarget: 'Spell surname aloud letter by letter',
    operationalDirectiveDistractors: [
      'Show military ID card in silence',
      'Sign the visitor book without speaking',
      'Call senior duty officer immediately'
    ],
    acousticExplanation: 'Acoustic cue: Captain Evans explicitly spells: E-V-A-N-S. Distinguish /e/ from /ɪ/ and /v/ from /b/.',
    directiveExplanation: 'Tactical directive: Reception protocols require officers to spell their surname letter by letter.'
  },
  2: {
    targetWord: 'Fifteen',
    distractors: ['Fifty', 'Fourteen', 'Thirteen'],
    phoneticSound: 'Suffix stress: /ˌfɪfˈtiːn/ vs /ˈfɪf.ti/ (-teen vs -ty)',
    operationalDirectiveTarget: 'Confirm fifteen medical kits remain in inventory',
    operationalDirectiveDistractors: [
      'Count fifty ammunition crates in warehouse',
      'Report eighteen trucks ready for convoy',
      'Request fourteen replacement radios'
    ],
    acousticExplanation: 'Acoustic distinction: Numbers ending in -teen carry primary stress on the final syllable /ˌfɪfˈtiːn/, distinct from /ˈfɪf.ti/.',
    directiveExplanation: 'Tactical directive: The inventory check calculates: 18 - 3 = 15 kits remaining.'
  },
  3: {
    targetWord: 'Forty',
    distractors: ['Fourteen', 'Fifty', 'Four'],
    phoneticSound: 'Initial stress: /ˈfɔː.ti/ vs /ˌfɔːˈtiːn/ (Initial vs final stress)',
    operationalDirectiveTarget: 'Confirm backpack price is forty pounds (£40)',
    operationalDirectiveDistractors: [
      'Purchase boots for fourteen pounds',
      'Withdraw fifty pounds from cashier',
      'Request four discount coupons'
    ],
    acousticExplanation: 'Acoustic distinction: "Forty" /ˈfɔː.ti/ has strong initial syllable stress, unlike "fourteen" /ˌfɔːˈtiːn/.',
    directiveExplanation: 'Tactical directive: The store clerk quotes the price of the heavy military backpack at exactly £40.'
  },
  4: {
    targetWord: 'Ground',
    distractors: ['Round', 'Bound', 'Sound'],
    phoneticSound: 'Consonant cluster /ɡr/ vs single onset /r/',
    operationalDirectiveTarget: 'Locate security office on the ground floor',
    operationalDirectiveDistractors: [
      'Search administrative files on the first floor',
      'Report to commanding officer on second floor',
      'Inspect underground armory in basement'
    ],
    acousticExplanation: 'Acoustic distinction: Consonant cluster /ɡr/ in "ground" with diphthong /aʊ/.',
    directiveExplanation: 'Tactical directive: Sentry directs visitor to the security office situated on the ground floor.'
  },
  5: {
    targetWord: 'Thirty',
    distractors: ['Thirteen', 'Dirty', 'Thirdly'],
    phoneticSound: 'Stress and vowel: /ˈθɜː.ti/ vs /ˌθɜːˈtiːn/',
    operationalDirectiveTarget: 'Assemble for physical training at 0630 hours',
    operationalDirectiveDistractors: [
      'Dismiss platoon for breakfast at 0613 hours',
      'Begin weapon inspection at 0700 hours',
      'Conduct barracks cleanup at 0830 hours'
    ],
    acousticExplanation: 'Acoustic distinction: Half past six is transmitted as 0630 ("zero-six-thirty"), stressing the first syllable /ˈθɜː.ti/.',
    directiveExplanation: 'Tactical directive: Morning physical training on the sports ground commences promptly at half past six (0630).'
  },
  6: {
    targetWord: 'Father',
    distractors: ['Brother', 'Feather', 'Further'],
    phoneticSound: 'Voiced dental fricative /ð/ in /ˈfɑː.ðər/ vs /ˈbrʌð.ər/',
    operationalDirectiveTarget: 'Identify father Robert with short grey hair',
    operationalDirectiveDistractors: [
      'Introduce brother Martin from logistics',
      'Contact mother working at civil hospital',
      'Search for missing cousin in base'
    ],
    acousticExplanation: 'Acoustic distinction: "Father" /ˈfɑː.ðər/ features broad back vowel /ɑː/, distinct from short /ʌ/ in "brother".',
    directiveExplanation: 'Tactical directive: The officer points to the family photograph: "The tall man on the left is my father, Robert".'
  },
  7: {
    targetWord: 'Always',
    distractors: ['All ways', 'Almost', 'Away'],
    phoneticSound: 'Diphthong and lateral /ɔːl.weɪz/ vs /ˈɔːl.məʊst/',
    operationalDirectiveTarget: 'Confirm weekday 30-minute morning run at 0600',
    operationalDirectiveDistractors: [
      'Cancel Monday office hours and stay in barracks',
      'Order hot dinner in dining hall at noon',
      'Drive into city at zero-seven-hundred'
    ],
    acousticExplanation: 'Acoustic distinction: Frequency adverb "always" /ˈɔːl.weɪz/ features long open-mid /ɔː/ followed by lateral /l/.',
    directiveExplanation: 'Tactical directive: Captain Alvarez confirms weekday routine: "I always go for a thirty-minute run, then I shower and have a light breakfast".'
  },
  8: {
    targetWord: 'Football',
    distractors: ['Footstep', 'Foothold', 'Footprint'],
    phoneticSound: 'Compound stress and vowel /ʊ/ in /ˈfʊt.bɔːl/',
    operationalDirectiveTarget: 'Schedule football or basketball on outdoor courts Monday and Wednesday',
    operationalDirectiveDistractors: [
      'Send recruits swimming in the lake on Friday',
      'Cancel Tuesday battalion run along river road',
      'Relocate Gym Two karate sessions to parade ground'
    ],
    acousticExplanation: 'Acoustic distinction: Compound word "football" /ˈfʊt.bɔːl/ features short high-back /ʊ/ and long /ɔː/.',
    directiveExplanation: 'Tactical directive: Sports schedule assigns football and basketball on outdoor courts for Monday and Wednesday afternoons.'
  },
  9: {
    targetWord: 'Cooking',
    distractors: ['Looking', 'Booking', 'Hooking'],
    phoneticSound: 'Velar plosive /k/ and short /ʊ/ in /ˈkʊk.ɪŋ/',
    operationalDirectiveTarget: 'Confirm Lieutenant Rossi enjoys cooking meals and hates staying indoors',
    operationalDirectiveDistractors: [
      'Order Lieutenant Rossi to stay indoors all weekend',
      'Prohibit off-duty personnel from listening to music',
      'Cancel Sunday cycling activities across the region'
    ],
    acousticExplanation: 'Acoustic distinction: Velar plosive /k/ onset and coda in "cooking" /ˈkʊk.ɪŋ/ vs lateral /l/ in "looking".',
    directiveExplanation: 'Tactical directive: Lieutenant Rossi confirms off-duty preferences: "I really enjoy cooking traditional Argentine meals... However, I hate staying indoors all weekend".'
  },
  10: {
    targetWord: 'Chicken',
    distractors: ['Kitchen', 'Thicken', 'Check-in'],
    phoneticSound: 'Affricate /tʃ/ vs velar /k/ and short /ɪ/ in /ˈtʃɪk.ɪn/',
    operationalDirectiveTarget: 'Order vegetable soup, roast chicken with potatoes, and tap water',
    operationalDirectiveDistractors: [
      'Request grilled beef steak with french fries and beer',
      'Reserve private dining room for twenty officers',
      'Cancel dinner order due to kitchen emergency'
    ],
    acousticExplanation: 'Acoustic distinction: Initial voiceless postalveolar affricate /tʃ/ in "chicken" /ˈtʃɪk.ɪn/ vs /ˈkɪtʃ.ən/ (kitchen).',
    directiveExplanation: 'Tactical directive: The customer orders: vegetable soup for starter, roast chicken with potatoes for main course, and tap water to drink.'
  },
  11: {
    targetWord: 'Rain',
    distractors: ['Train', 'Drain', 'Grain'],
    phoneticSound: 'Single approximant /r/ vs clusters /tr/, /dr/, /ɡr/',
    operationalDirectiveTarget: 'Expect heavy rain, strong winds, and wear waterproof jackets',
    operationalDirectiveDistractors: [
      'Board logistics train at ten o\'clock',
      'Clear storm drainage channels around camp',
      'Inspect stored emergency grain reserves'
    ],
    acousticExplanation: 'Acoustic distinction: Single approximant /r/ with diphthong /eɪ/ in /reɪn/, distinct from cluster /treɪn/.',
    directiveExplanation: 'Tactical directive: Weather forecast warns of heavy rain and wind; waterproof jackets and boots required.'
  },
  12: {
    targetWord: 'Straight',
    distractors: ['Strait', 'Street', 'State'],
    phoneticSound: 'Triple cluster /str/ and diphthong /eɪ/ in /streɪt/',
    operationalDirectiveTarget: 'Walk straight ahead and turn left at traffic lights',
    operationalDirectiveDistractors: [
      'Cross maritime strait by ferry boat',
      'Wait for taxi on central high street',
      'Report directly to state ministry building'
    ],
    acousticExplanation: 'Acoustic distinction: Triple consonant cluster /str/ followed by diphthong /eɪ/ and voiceless /t/.',
    directiveExplanation: 'Tactical directive: Directions to the train station instruct the traveler to walk straight, then turn left onto Victoria Road.'
  },
  13: {
    targetWord: 'Wardrobe',
    distractors: ['War-robe', 'Ward-room', 'Board-room'],
    phoneticSound: 'Compound stress and /w/ in /ˈwɔː.drəʊb/',
    operationalDirectiveTarget: 'Store gear inside room wardrobe and keep clean',
    operationalDirectiveDistractors: [
      'Assemble officers in naval wardroom',
      'Convene inquiry inside brigade boardroom',
      'Leave personal gear in common hallway'
    ],
    acousticExplanation: 'Acoustic distinction: Bilabial /w/ and alveolar plosive /d/ in /ˈwɔː.drəʊb/.',
    directiveExplanation: 'Tactical directive: Quarters allocation briefs Lieutenant on single bed, desk, and wardrobe in room 204.'
  },
  14: {
    targetWord: 'Platform',
    distractors: ['Plant-form', 'Perform', 'Plat-farm'],
    phoneticSound: 'Consonant cluster /pl/ and /t/ in /ˈplæt.fɔːm/',
    operationalDirectiveTarget: 'Depart on 10:40 train from Platform 4',
    operationalDirectiveDistractors: [
      'Perform vehicle technical inspection',
      'Purchase tickets at agricultural farm',
      'Board emergency flight from airfield'
    ],
    acousticExplanation: 'Acoustic distinction: Short /æ/ in "plat-" followed by labiodental /f/ in "-form".',
    directiveExplanation: 'Tactical directive: Train ticket to Birmingham (£22.50) departs from Platform 4 at 1040 hours.'
  },
  15: {
    targetWord: 'Message',
    distractors: ['Massage', 'Passage', 'Method'],
    phoneticSound: 'Initial stress /ˈmes.ɪdʒ/ vs second stress /məˈsɑːʒ/',
    operationalDirectiveTarget: 'Take phone message for Major Davis at firing range',
    operationalDirectiveDistractors: [
      'Report to medical officer for massage therapy',
      'Guard subterranean passage beneath headquarters',
      'Apply standard ballistic calculation method'
    ],
    acousticExplanation: 'Acoustic distinction: Short vowel /e/ and affricate /dʒ/ in /ˈmes.ɪdʒ/, contrasting with /məˈsɑːʒ/.',
    directiveExplanation: 'Tactical directive: Captain Torres requests a return call at extension 512 regarding morning convoy transport.'
  },
  16: {
    targetWord: 'Advance',
    distractors: ['Advise', 'Admit', 'Afford'],
    phoneticSound: 'Voiceless alveolar affricate /ns/ in /ədˈvɑːns/',
    operationalDirectiveTarget: 'Advance to checkpoint and present military ID',
    operationalDirectiveDistractors: [
      'Advise convoy commander of roadblock',
      'Admit unauthorized civilian visitors',
      'Afford passage without credential verification'
    ],
    acousticExplanation: 'Acoustic distinction: Unstressed schwa /əd-/ followed by /vɑːns/.',
    directiveExplanation: 'Tactical directive: Main gate sentry orders approaching personnel to advance one at a time with ID cards.'
  },
  17: {
    targetWord: 'Coordinates',
    distractors: ['Subordinates', 'Correlates', 'Ordinates'],
    phoneticSound: 'Diphthong /ɔː/ and /ɪ/ in /kəʊˈɔː.dɪ.nəts/',
    operationalDirectiveTarget: 'Confirm Rally Point Grid 452 681',
    operationalDirectiveDistractors: [
      'Dismiss tactical staff subordinates',
      'Correlate radar sensor telemetry',
      'Abandon designated rally position'
    ],
    acousticExplanation: 'Acoustic distinction: Prefix /kəʊ-/ followed by root /ˈɔː.dɪ.nət/.',
    directiveExplanation: 'Tactical directive: Sunray transmits and confirms new Rally Point coordinates: Grid four-five-two, six-eight-one.'
  },
  18: {
    targetWord: 'Collision',
    distractors: ['Collusion', 'Condition', 'Collection'],
    phoneticSound: 'Postalveolar /ʒ/ and stress in /kəˈlɪʒ.ən/',
    operationalDirectiveTarget: 'Report motor collision on Route 4 requiring MEDEVAC for two personnel',
    operationalDirectiveDistractors: [
      'Report political collusion during tactical movement',
      'Check atmospheric condition of vehicle convoy',
      'Inspect fuel tank collection along main highway'
    ],
    acousticExplanation: 'Acoustic distinction: Postalveolar fricative /ʒ/ in "collision" /kəˈlɪʒ.ən/ contrasting with /luː/ in "collusion".',
    directiveExplanation: 'Tactical directive: Convoy Escort Bravo reports motor collision on Route 4 with two personnel needing evacuation (wrist fracture and minor shock).'
  },
  19: {
    targetWord: 'Battalion',
    distractors: ['Medallion', 'Rebellion', 'Italian'],
    phoneticSound: 'Short /æ/ and palatal /j/ in /bəˈtæl.jən/',
    operationalDirectiveTarget: 'Report to Major Evans, Battalion S-3 operations',
    operationalDirectiveDistractors: [
      'Award commemorative service medallion',
      'Suppress local civil militia rebellion',
      'Translate foreign Italian military documents'
    ],
    acousticExplanation: 'Acoustic distinction: Bilabial /b/ and stressed second syllable /-ˈtæl.jən/.',
    directiveExplanation: 'Tactical directive: Major Evans briefs on Charlie Company organization: 3 rifle platoons and 1 heavy weapons platoon.'
  },
  20: {
    targetWord: 'Perimeter',
    distractors: ['Parameter', 'Pyrometer', 'Diameter'],
    phoneticSound: 'Aspirated /p/ and unstressed schwas in /pəˈrɪm.ɪ.tər/',
    operationalDirectiveTarget: 'Confirm perimeter secure with zero casualties',
    operationalDirectiveDistractors: [
      'Adjust ballistic tracking parameter',
      'Measure exhaust temperature with pyrometer',
      'Calculate crater impact diameter'
    ],
    acousticExplanation: 'Acoustic distinction: Stress on second syllable /pəˈrɪm.ɪ.tər/ vs initial stress in /ˈpær.əˌmiː.tər/.',
    directiveExplanation: 'Tactical directive: Outpost Four hourly SITREP reports: perimeter 100% secure, radar operational, zero casualties.'
  },

  // =========================================================================
  // PHASE 2: DAYS 31 - 60 (Short Phrases: 2 to 4 Words with Near-Homophones)
  // Focus: Connected speech, sound-alikes embedded in tactical commands
  // =========================================================================
  31: {
    targetWord: 'Hold the line',
    distractors: ['Cold the mine', 'Fold the line', 'Hold the pine'],
    phoneticSound: 'Consonant onset contrast: /h/ vs /k/ vs /f/',
    soundAlikePhraseTarget: 'Hold the line',
    soundAlikePhraseDistractors: ['Cold the mine', 'Fold the line', 'Hold the pine'],
    operationalDirectiveTarget: 'Maintain defensive forward line',
    operationalDirectiveDistractors: [
      'Detonate cold explosive mine',
      'Fold tactical command tents',
      'Climb tall pine trees'
    ],
    acousticExplanation: 'Acoustic distinction: Glottal onset /h/ in "Hold" distinguishes from voiceless velar /k/ in "Cold".',
    directiveExplanation: 'Tactical directive: Troops are ordered to hold defensive positions without falling back.'
  },
  32: {
    targetWord: 'Clear the sector',
    distractors: ['Clear the vector', 'Clean the sector', 'Clear the specter'],
    phoneticSound: 'Phonemic substitution: /s/ in sector vs /v/ in vector',
    soundAlikePhraseTarget: 'Clear the sector',
    soundAlikePhraseDistractors: ['Clear the vector', 'Clean the sector', 'Clear the specter'],
    operationalDirectiveTarget: 'Declare sector free of threats',
    operationalDirectiveDistractors: [
      'Compute aircraft climb vector',
      'Mop and sweep barracks floor',
      'Report sighting of phantom ghost'
    ],
    acousticExplanation: 'Acoustic distinction: The alveolar sibilant /s/ in "sector" contrasts with labiodental /v/ in "vector".',
    directiveExplanation: 'Tactical directive: Reconnaissance squads declare Sector Bravo sanitized of hostiles.'
  },
  33: {
    targetWord: 'Check tactical radar',
    distractors: ['Track tactical ladder', 'Check tactical rider', 'Track tactical radar'],
    phoneticSound: '/tʃek/ vs /træk/ & /ˈreɪ.dɑː/ vs /ˈlæd.ə/',
    soundAlikePhraseTarget: 'Check tactical radar',
    soundAlikePhraseDistractors: ['Track tactical ladder', 'Check tactical rider', 'Track tactical radar'],
    operationalDirectiveTarget: 'Verify operational radar display',
    operationalDirectiveDistractors: [
      'Scale mobile assault ladder',
      'Escort motorcycle courier rider',
      'Disable air defense system'
    ],
    acousticExplanation: 'Acoustic distinction: Affricate /tʃ/ in "check" contrasts with consonant cluster /tr/ in "track".',
    directiveExplanation: 'Tactical directive: Air watch personnel inspect radar screen for unidentified transponders.'
  },
  34: {
    targetWord: 'Board naval ship',
    distractors: ['Board naval sheep', 'Bored naval ship', 'Board naval slip'],
    phoneticSound: '/ɪ/ vs /iː/ in rapid connected speech',
    soundAlikePhraseTarget: 'Board naval ship',
    soundAlikePhraseDistractors: ['Board naval sheep', 'Bored naval ship', 'Board naval slip'],
    operationalDirectiveTarget: 'Embark inspection team on vessel',
    operationalDirectiveDistractors: [
      'Herd sheep onto pasture',
      'Enter dry dock slipway',
      'Disembark landing craft crew'
    ],
    acousticExplanation: 'Acoustic distinction: Short /ɪ/ in "ship" must not be lengthened into tense /iː/ ("sheep").',
    directiveExplanation: 'Tactical directive: Joint boarding party mounts the intercepted naval vessel.'
  },
  35: {
    targetWord: 'Report to base',
    distractors: ['Repeat to base', 'Report to vase', 'Repair the base'],
    phoneticSound: '/rɪˈpɔːt/ vs /rɪˈpiːt/ and /b/ vs /v/',
    soundAlikePhraseTarget: 'Report to base',
    soundAlikePhraseDistractors: ['Repeat to base', 'Report to vase', 'Repair the base'],
    operationalDirectiveTarget: 'Return immediately to headquarters',
    operationalDirectiveDistractors: [
      'Rebroadcast radio transmission twice',
      'Deliver decorative pottery vase',
      'Begin concrete masonry repairs'
    ],
    acousticExplanation: 'Acoustic distinction: Proword "Report" (/ɔː/) vs NATO repetition proword "Repeat" (/iː/).',
    directiveExplanation: 'Tactical directive: Recon units are summoned back to Main Operating Base.'
  },
  36: {
    targetWord: 'Cease active fire',
    distractors: ['Freeze active fire', 'Seize active flyer', 'Cease action fire'],
    phoneticSound: '/siːs/ vs /friːz/ vs /siːz/',
    soundAlikePhraseTarget: 'Cease active fire',
    soundAlikePhraseDistractors: ['Freeze active fire', 'Seize active flyer', 'Cease action fire'],
    operationalDirectiveTarget: 'Halt all weapons discharge',
    operationalDirectiveDistractors: [
      'Freeze combat operations in winter',
      'Confiscate enemy propaganda flyer',
      'Resume continuous artillery barrage'
    ],
    acousticExplanation: 'Acoustic distinction: Voiceless ending /siːs/ contrasts with voiced /z/ in "seize" and labiodental cluster /fr/ in "freeze".',
    directiveExplanation: 'Tactical directive: All batteries halt fire immediately upon command.'
  },

  // =========================================================================
  // PHASE 3: DAYS 61 - 90 (Tactical Clauses: 3 to 5 Words with Homophones)
  // Focus: Homophones (route/root, site/sight), weak forms, liaison
  // =========================================================================
  61: {
    targetWord: 'Confirm primary supply route',
    distractors: [
      'Confirm primary supply root',
      'Conform primary supply route',
      'Confirm primary supply rout'
    ],
    phoneticSound: 'Homophone ambiguity: route /ruːt/ vs root /ruːt/ vs rout /raʊt/',
    soundAlikePhraseTarget: 'Confirm primary supply route',
    soundAlikePhraseDistractors: [
      'Confirm primary supply root',
      'Conform primary supply route',
      'Confirm primary supply rout'
    ],
    operationalDirectiveTarget: 'Acknowledge designated logistics corridor',
    operationalDirectiveDistractors: [
      'Excavate underground tree roots',
      'Order sudden chaotic military rout',
      'Divert convoy into minefield'
    ],
    acousticExplanation: 'Acoustic distinction: British military English pronounces "route" as /ruːt/, matching "root" in sound but requiring contextual parsing.',
    directiveExplanation: 'Tactical directive: Quartermaster staff validates Main Supply Route (MSR) status.'
  },
  62: {
    targetWord: 'Secure observation post site',
    distractors: [
      'Secure observation post sight',
      'Secure observation post cite',
      'Secure observation post side'
    ],
    phoneticSound: 'Homophones /saɪt/ (site / sight / cite) vs /saɪd/ (side)',
    soundAlikePhraseTarget: 'Secure observation post site',
    soundAlikePhraseDistractors: [
      'Secure observation post sight',
      'Secure observation post cite',
      'Secure observation post side'
    ],
    operationalDirectiveTarget: 'Establish control over vantage point',
    operationalDirectiveDistractors: [
      'Clean sniper optic glass lenses',
      'Reference military criminal code cite',
      'Guard right side of roadway'
    ],
    acousticExplanation: 'Acoustic distinction: Voiceless /t/ in "site/sight" contrasts with voiced stop /d/ in "side".',
    directiveExplanation: 'Tactical directive: Forward scouts fortify the Observation Post (OP) location.'
  },
  63: {
    targetWord: 'Deploy unmanned aerial vehicle',
    distractors: [
      'Delay unmanned aerial vehicle',
      'Deploy manned aerial vehicle',
      'Deploy unnamed aerial vehicle'
    ],
    phoneticSound: '/dɪˈplɔɪ/ vs /dɪˈleɪ/ and /ʌnˈmænd/ vs /mænd/',
    soundAlikePhraseTarget: 'Deploy unmanned aerial vehicle',
    soundAlikePhraseDistractors: [
      'Delay unmanned aerial vehicle',
      'Deploy manned aerial vehicle',
      'Deploy unnamed aerial vehicle'
    ],
    operationalDirectiveTarget: 'Launch tactical surveillance drone',
    operationalDirectiveDistractors: [
      'Postpone drone flight operations',
      'Pilot crewed reconnaissance airplane',
      'Scrap unlabelled training aircraft'
    ],
    acousticExplanation: 'Acoustic distinction: Diphthong /ɔɪ/ in "deploy" vs /eɪ/ in "delay", plus prefix /ʌn-/ distinction.',
    directiveExplanation: 'Tactical directive: UAV operators launch tactical aerial sensor over target area.'
  },
  64: {
    targetWord: 'Cease all mortar fire',
    distractors: [
      'Seize all mortar flyers',
      'Freeze all motor fire',
      'Cease all motor fire'
    ],
    phoneticSound: 'Vowel quality: mortar /ˈmɔː.tə/ vs motor /ˈməʊ.tə/',
    soundAlikePhraseTarget: 'Cease all mortar fire',
    soundAlikePhraseDistractors: [
      'Seize all mortar flyers',
      'Freeze all motor fire',
      'Cease all motor fire'
    ],
    operationalDirectiveTarget: 'Halt indirect artillery bombardment',
    operationalDirectiveDistractors: [
      'Confiscate paper leaflet flyers',
      'Extinguish vehicle engine fire',
      'Accelerate motorized truck convoy'
    ],
    acousticExplanation: 'Acoustic distinction: Long back vowel /ɔː/ in "mortar" vs diphthong /əʊ/ in "motor".',
    directiveExplanation: 'Tactical directive: Forward observers call for immediate check-fire on mortar pit.'
  },

  // =========================================================================
  // PHASE 4: DAYS 91 - 120 (Advanced Operational Clauses: 5 to 7 Words)
  // Focus: Subtle acoustic traps, homophones (personnel/personal), rapid NATO syntax
  // =========================================================================
  91: {
    targetWord: 'Ensure all operational personnel wear armour',
    distractors: [
      'Ensure all operational personal wear armour',
      'Insure all operational personnel wear armour',
      'Ensure all operational personnel swear armour'
    ],
    phoneticSound: 'Near-homophone /ˌpɜː.sənˈel/ vs /ˈpɜː.sən.əl/',
    soundAlikePhraseTarget: 'Ensure all operational personnel wear armour',
    soundAlikePhraseDistractors: [
      'Ensure all operational personal wear armour',
      'Insure all operational personnel wear armour',
      'Ensure all operational personnel swear armour'
    ],
    operationalDirectiveTarget: 'Mandate protective ballistic gear for troops',
    operationalDirectiveDistractors: [
      'Disclose private medical files of troops',
      'Purchase commercial insurance policies',
      'Recite ceremonial military loyalty oaths'
    ],
    acousticExplanation: 'Acoustic distinction: "Personnel" stresses the final syllable /ˌpɜː.sənˈel/, while "personal" stresses the first /ˈpɜː.sən.əl/.',
    directiveExplanation: 'Tactical directive: Force protection standard requires mandatory body armor in sector.'
  },
  92: {
    targetWord: 'Coordinate bilateral confidence-building measures at border',
    distractors: [
      'Coordinate bilateral confidential building measures at border',
      'Coordinate multilateral confidence-building trailers at border',
      'Terminate bilateral confidence-building measures at border'
    ],
    phoneticSound: 'Adjective phonetic boundary: /ˌkɒn.fɪˈden.ʃəl/ vs /ˈkɒn.fɪ.dəns/',
    soundAlikePhraseTarget: 'Coordinate bilateral confidence-building measures at border',
    soundAlikePhraseDistractors: [
      'Coordinate bilateral confidential building measures at border',
      'Coordinate multilateral confidence-building trailers at border',
      'Terminate bilateral confidence-building measures at border'
    ],
    operationalDirectiveTarget: 'Execute mutual transparency military protocols',
    operationalDirectiveDistractors: [
      'Construct classified intelligence bunker facilities',
      'Park modular command trailers along river',
      'Repudiate formal diplomatic peace treaties'
    ],
    acousticExplanation: 'Acoustic distinction: "Confidence-building" /ˈkɒn.fɪ.dəns/ vs "confidential" /ˌkɒn.fɪˈden.ʃəl/.',
    directiveExplanation: 'Tactical directive: CBMs foster de-escalation between opposing border commands.'
  },
  93: {
    targetWord: 'Implement dual-sensor verification mechanism across line',
    distractors: [
      'Implement dual-censor verification mechanism across line',
      'Implement dual-sensor diversification mechanism across line',
      'Suspend dual-sensor verification mechanism across line'
    ],
    phoneticSound: 'Homophone: sensor /ˈsen.sə/ vs censor /ˈsen.sə/',
    soundAlikePhraseTarget: 'Implement dual-sensor verification mechanism across line',
    soundAlikePhraseDistractors: [
      'Implement dual-censor verification mechanism across line',
      'Implement dual-sensor diversification mechanism across line',
      'Suspend dual-sensor verification mechanism across line'
    ],
    operationalDirectiveTarget: 'Deploy redundant electro-optical monitoring systems',
    operationalDirectiveDistractors: [
      'Appoint military press media censors',
      'Diversify financial garrison investments',
      'Deactivate forward infrared boundary cameras'
    ],
    acousticExplanation: 'Acoustic distinction: "Sensor" and "censor" are exact homophones /ˈsen.sə/; context establishes electronic target acquisition.',
    directiveExplanation: 'Tactical directive: Redundant laser and thermal sensors prevent false target designations.'
  },
  94: {
    targetWord: 'Withdraw all heavy artillery thirty kilometres',
    distractors: [
      'Withdraw all heavy artillery thirteen kilometres',
      'Advance all heavy artillery thirty kilometres',
      'Withdraw all heavy battery thirty kilometres'
    ],
    phoneticSound: 'Number acoustic confusion: thirty /ˈθɜː.ti/ vs thirteen /ˌθɜːˈtiːn/',
    soundAlikePhraseTarget: 'Withdraw all heavy artillery thirty kilometres',
    soundAlikePhraseDistractors: [
      'Withdraw all heavy artillery thirteen kilometres',
      'Advance all heavy artillery thirty kilometres',
      'Withdraw all heavy battery thirty kilometres'
    ],
    operationalDirectiveTarget: 'Pull back long-range guns behind line',
    operationalDirectiveDistractors: [
      'Pull back long-range guns thirteen kilometres',
      'Push heavy howitzers toward border perimeter',
      'Decommission vehicle electrical battery systems'
    ],
    acousticExplanation: 'Acoustic distinction: Stress on first syllable /ˈθɜː.ti/ (30) vs stress on suffix /ˌθɜːˈtiːn/ (13) with long tense vowel.',
    directiveExplanation: 'Tactical directive: Armistice annex requires artillery with range >20km to withdraw 30km.'
  }
};

/**
 * Procedural progressive generation fallback for any day (1 to 120) and level (1 to 6)
 */
export function getListeningVerificationForDay(
  levelNumber: number,
  dayNumber: number,
  transmissionScript?: string,
  transmissionTitle?: string,
  archetypeQuestion?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }
): DayListeningVerification {
  const safeDay = Math.max(1, Math.min(120, dayNumber || 1));
  const safeLevel = Math.max(1, Math.min(6, levelNumber || 1));

  // Determine Progression Tier based on Day and Level
  // Tier 1 (Level 1 / Days 1-30): Single words / 2-word tactical items (minimal pairs & sound-alikes)
  // Tier 2 (Level 2 / Days 31-60): 2 to 4 words (near-homophones in tactical commands)
  // Tier 3 (Level 3-4 / Days 61-90): 3 to 5 words (homophones, connected speech, liaison)
  // Tier 4 (Level 5-6 / Days 91-120): 5 to 7 words (advanced NATO phrasing, acoustic traps, weak forms)
  let tier: 1 | 2 | 3 | 4 = 1;
  if (safeDay > 90 || safeLevel >= 5) {
    tier = 4;
  } else if (safeDay > 60 || safeLevel >= 3) {
    tier = 3;
  } else if (safeDay > 30 || safeLevel >= 2) {
    tier = 2;
  }

  let tierLabel = 'Tier 1: Foundational Acoustic Discrimination';
  let tierDescription = 'Single words and minimal pair contrasts';
  if (tier === 2) {
    tierLabel = 'Tier 2: Short Tactical Phrase Discrimination';
    tierDescription = '2 to 4 words with near-homophones and connected speech';
  } else if (tier === 3) {
    tierLabel = 'Tier 3: Tactical Clause & Homophone Analysis';
    tierDescription = '3 to 5 words testing homophones and weak forms';
  } else if (tier === 4) {
    tierLabel = 'Tier 4: Advanced NATO Auditory Precision';
    tierDescription = '5 to 7 words with rapid military cadence and acoustic traps';
  }

  const scriptLower = (transmissionScript || '').toLowerCase();

  // 1. If an archetype question exists from the curriculum, ALWAYS prioritize it for Item 2
  let customItem2: ProgressiveListeningQuestion | undefined;
  if (archetypeQuestion && archetypeQuestion.question && archetypeQuestion.options?.length >= 2) {
    customItem2 = {
      question: archetypeQuestion.question,
      options: archetypeQuestion.options,
      correctIndex: archetypeQuestion.correctIndex ?? 0,
      explanation: archetypeQuestion.explanation || 'Respuesta verificada en base a la transmisión oficial.',
      focusType: 'tactical_directive',
      difficultyTier: tier === 1 ? 'word' : tier === 2 ? 'short_phrase' : 'extended_phrase'
    };
  }

  // 2. Check if curated progression bank matches this day and its script
  const curated = ACOUSTIC_PROGRESSION_BANK[safeDay];
  const isCuratedCoherent = curated && (!transmissionScript || scriptLower.includes(curated.targetWord.toLowerCase()));

  if (isCuratedCoherent && curated) {
    let item1Options: string[] = [];
    let item1Question = `[Day ${safeDay} • Acoustic Discrimination]: Which target word was transmitted on the radio frequency?`;
    let item1Explanation = curated.acousticExplanation;

    if (tier === 1) {
      item1Options = [curated.targetWord, ...curated.distractors];
      item1Question = `[Day ${safeDay} • Acoustic Discrimination]: Which exact word was spoken in the radio transmission?`;
    } else if (tier === 2 && curated.soundAlikePhraseTarget && curated.soundAlikePhraseDistractors) {
      item1Options = [curated.soundAlikePhraseTarget, ...curated.soundAlikePhraseDistractors];
      item1Question = `[Day ${safeDay} • Phrase Discrimination]: Which exact tactical command was transmitted?`;
    } else if (tier >= 3 && curated.soundAlikePhraseTarget && curated.soundAlikePhraseDistractors) {
      item1Options = [curated.soundAlikePhraseTarget, ...curated.soundAlikePhraseDistractors];
      item1Question = `[Day ${safeDay} • Auditory Verification]: Which precise tactical statement was heard on the radio net?`;
    } else {
      item1Options = [curated.targetWord, ...curated.distractors];
    }

    const defaultItem2Options = [curated.operationalDirectiveTarget, ...curated.operationalDirectiveDistractors];

    return {
      day: safeDay,
      levelNumber: safeLevel,
      tierLabel,
      tierDescription,
      item1: {
        question: item1Question,
        options: item1Options,
        correctIndex: 0,
        explanation: item1Explanation,
        focusType: tier === 1 ? 'minimal_pair' : tier === 2 ? 'near_homophone' : 'homophone',
        difficultyTier: tier === 1 ? 'word' : tier === 2 ? 'short_phrase' : 'extended_phrase',
        phoneticTarget: curated.phoneticSound
      },
      item2: customItem2 || {
        question: `[Day ${safeDay} • Operational Verification]: What is the primary directive confirmed in this transmission?`,
        options: defaultItem2Options,
        correctIndex: 0,
        explanation: curated.directiveExplanation,
        focusType: 'tactical_directive',
        difficultyTier: tier === 1 ? 'word' : tier === 2 ? 'short_phrase' : 'extended_phrase'
      }
    };
  }

  // 3. Dynamic Script-Grounded Extraction:
  // Identify an acoustic target that is physically spoken inside the transmission script
  const KNOWN_ACOUSTIC_DICTIONARY: Record<string, { distractors: [string, string, string]; phonetic: string; explanation: string }> = {
    'checkpoint': { distractors: ['choke point', 'track point', 'check point'], phonetic: '/tʃek/ vs /tʃəʊk/', explanation: 'Short front vowel /e/ vs diphthong /əʊ/.' },
    'patrol': { distractors: ['petrol', 'portal', 'control'], phonetic: '/pəˈtrəʊl/ vs /ˈpet.rəl/', explanation: 'Unstressed schwa /pə-/ vs stressed /ˈpet-/.' },
    'sector': { distractors: ['vector', 'factor', 'specter'], phonetic: '/ˈsek.tə/ vs /ˈvek.tə/', explanation: 'Voiceless alveolar /s/ vs voiced labiodental /v/.' },
    'silence': { distractors: ['sirens', 'science', 'salience'], phonetic: '/ˈsaɪ.ləns/ vs /ˈsaɪə.rənz/', explanation: 'Lateral /l/ vs rhotic /r/ in the second syllable.' },
    'route': { distractors: ['root', 'rout', 'rowed'], phonetic: '/ruːt/ vs /raʊt/', explanation: 'Monophthong /uː/ vs diphthong /aʊ/.' },
    'artillery': { distractors: ['battery', 'armory', 'auxiliary'], phonetic: '/ɑːˈtɪl.ər.i/ vs /ˈbæt.ər.i/', explanation: 'Initial vowel and stress cadence.' },
    'observation': { distractors: ['reservation', 'preservation', 'operation'], phonetic: '/ˌɒb.zəˈveɪ.ʃən/ vs /ˌrez.əˈveɪ.ʃən/', explanation: 'Initial bilabial /b/ vs rhotic /r/.' },
    'cease': { distractors: ['seize', 'freeze', 'lease'], phonetic: '/siːs/ vs /siːz/', explanation: 'Voiceless alveolar coda /s/ vs voiced /z/.' },
    'weather': { distractors: ['whether', 'feather', 'leather'], phonetic: '/ˈweð.ər/ vs /ˈfeð.ər/', explanation: 'Approximant /w/ vs labiodental /f/.' },
    'rain': { distractors: ['train', 'drain', 'grain'], phonetic: '/reɪn/ vs /treɪn/', explanation: 'Single approximant /r/ vs consonant clusters.' },
    'fog': { distractors: ['frog', 'bog', 'fox'], phonetic: '/fɒɡ/ vs /frɒɡ/', explanation: 'Single consonant /f/ vs cluster /fr/.' },
    'cold': { distractors: ['hold', 'gold', 'fold'], phonetic: '/kəʊld/ vs /həʊld/', explanation: 'Velar plosive /k/ vs glottal fricative /h/.' },
    'wind': { distractors: ['wing', 'win', 'windy'], phonetic: '/wɪnd/ vs /wɪŋ/', explanation: 'Alveolar stop /d/ coda vs velar nasal /ŋ/.' },
    'straight': { distractors: ['strait', 'street', 'state'], phonetic: '/streɪt/ vs /striːt/', explanation: 'Diphthong /eɪ/ vs tense monophthong /iː/.' },
    'left': { distractors: ['lift', 'loft', 'leaf'], phonetic: '/left/ vs /lɪft/', explanation: 'Short front vowel /e/ vs short /ɪ/.' },
    'right': { distractors: ['write', 'ride', 'ripe'], phonetic: '/raɪt/ vs /raɪd/', explanation: 'Voiceless alveolar stop /t/ vs voiced /d/.' },
    'station': { distractors: ['stay-on', 'state-ion', 'section'], phonetic: '/ˈsteɪ.ʃən/ vs /ˈsek.ʃən/', explanation: 'Sibilant fricative /ʃ/ vs velar plosive /k/.' },
    'ticket': { distractors: ['thicket', 'cricket', 'pocket'], phonetic: '/ˈtɪk.ɪt/ vs /ˈθɪk.ɪt/', explanation: 'Alveolar stop /t/ vs voiceless dental /θ/.' },
    'platform': { distractors: ['plant-form', 'perform', 'plat-farm'], phonetic: '/ˈplæt.fɔːm/', explanation: 'Short /æ/ and consonant cluster /pl/.' },
    'convoy': { distractors: ['envoy', 'condor', 'cowboy'], phonetic: '/ˈkɒn.vɔɪ/ vs /ˈen.vɔɪ/', explanation: 'Velar /k/ vs front vowel /e/.' },
    'vehicle': { distractors: ['vessel', 'visible', 'vertical'], phonetic: '/ˈviː.ɪ.kəl/', explanation: 'Voiced labiodental /v/ and silent /h/.' },
    'driver': { distractors: ['diver', 'dryer', 'divider'], phonetic: '/ˈdraɪ.vər/ vs /ˈdaɪ.vər/', explanation: 'Consonant cluster /dr/ vs single /d/.' },
    'officer': { distractors: ['office', 'official', 'off-shore'], phonetic: '/ˈɒf.ɪ.sər/', explanation: 'Agent noun suffix /-ər/ vs noun /-ɪs/.' },
    'sergeant': { distractors: ['surgeon', 'servant', 'surface'], phonetic: '/ˈsɑː.dʒənt/ vs /ˈsɜː.dʒən/', explanation: 'Open back vowel /ɑː/ vs open-mid /ɜː/.' },
    'major': { distractors: ['mayor', 'maker', 'manner'], phonetic: '/ˈmeɪ.dʒər/ vs /ˈmeər/', explanation: 'Affricate /dʒ/ vs approximant /j/.' },
    'captain': { distractors: ['caption', 'cabin', 'capital'], phonetic: '/ˈkæp.tɪn/ vs /ˈkæp.ʃən/', explanation: 'Alveolar stop /t/ vs sibilant /ʃ/.' },
    'lieutenant': { distractors: ['left-tenant', 'line-tenant', 'light-tenant'], phonetic: '/lefˈten.ənt/', explanation: 'British military pronunciation /lefˈten.ənt/ with /f/.' },
    'hospital': { distractors: ['hostel', 'hostile', 'hospitality'], phonetic: '/ˈhɒs.pɪ.təl/', explanation: 'Aspirated glottal /h/ and three short syllables.' },
    'corridor': { distractors: ['coroner', 'courier', 'collector'], phonetic: '/ˈkɒr.ɪ.dɔː/', explanation: 'Short open /ɒ/ with postalveolar /r/.' },
    'quarters': { distractors: ['corners', 'quarrels', 'waters'], phonetic: '/ˈkwɔː.təz/ vs /ˈkɔː.nəz/', explanation: 'Labial-velar cluster /kw/ vs single /k/.' },
    'rations': { distractors: ['radios', 'regions', 'reasons'], phonetic: '/ˈræʃ.ənz/ vs /ˈreɪ.di.əʊz/', explanation: 'Short front /æ/ and sibilant /ʃ/.' },
    'medical': { distractors: ['musical', 'mechanical', 'radical'], phonetic: '/ˈmed.ɪ.kəl/', explanation: 'Short front vowel /e/ in initial syllable.' },
    'evacuation': { distractors: ['evaluation', 'escalation', 'excavation'], phonetic: '/ɪˌvæk.juˈeɪ.ʃən/', explanation: 'Voiced labiodental /v/ and velar /k/.' },
    'ammunition': { distractors: ['emission', 'admission', 'ignition'], phonetic: '/ˌæm.jəˈnɪʃ.ən/', explanation: 'Initial short /æ/ and bilabial /m/.' },
    'coordinates': { distractors: ['subordinates', 'correlates', 'ordinates'], phonetic: '/kəʊˈɔː.dɪ.nəts/', explanation: 'Prefix /kəʊ-/ and root /ɔː.dɪ.nət/.' },
    'clear': { distractors: ['clean', 'cheer', 'clearing'], phonetic: '/klɪə/ vs /kliːn/', explanation: 'Centring diphthong /ɪə/ vs tense vowel /iː/.' }
  };

  // Find the first dictionary word present in the script
  let matchingWord: string | undefined;
  for (const dictWord of Object.keys(KNOWN_ACOUSTIC_DICTIONARY)) {
    if (scriptLower.includes(dictWord)) {
      matchingWord = dictWord;
      break;
    }
  }

  let targetWord = 'Control';
  let distractors: string[] = ['Patrol', 'Console', 'Prowl'];
  let phoneticTarget = '/kənˈtrəʊl/ vs /pəˈtrəʊl/';
  let acousticExplanation = 'Acoustic contrast between velar plosive /k/ and bilabial /p/.';

  if (matchingWord && KNOWN_ACOUSTIC_DICTIONARY[matchingWord]) {
    const entry = KNOWN_ACOUSTIC_DICTIONARY[matchingWord];
    // Capitalize target word
    targetWord = matchingWord.charAt(0).toUpperCase() + matchingWord.slice(1);
    distractors = entry.distractors.map(d => d.charAt(0).toUpperCase() + d.slice(1));
    phoneticTarget = entry.phonetic;
    acousticExplanation = `Acoustic discrimination: The transmission specifically articulates "${targetWord}". ${entry.explanation}`;
  } else if (transmissionScript) {
    // Extract a prominent word of 5+ letters from script
    const scriptWords = transmissionScript.replace(/[^a-zA-Z\s]/g, '').split(/\s+/).filter(w => w.length >= 4 && w.length <= 12);
    if (scriptWords.length > 0) {
      targetWord = scriptWords[0].charAt(0).toUpperCase() + scriptWords[0].slice(1).toLowerCase();
      distractors = [`Non-${targetWord.toLowerCase()}`, `Sub-${targetWord.toLowerCase()}`, `Over-${targetWord.toLowerCase()}`];
      phoneticTarget = `Phonetic articulation of "${targetWord}"`;
      acousticExplanation = `Acoustic verification: The word "${targetWord}" was transmitted over the radio frequency.`;
    }
  }

  const fallbackDirectiveOptions = [
    `Confirm status and acknowledge transmission regarding ${targetWord}`,
    'Cancel scheduled operations and withdraw to base',
    'Report immediate communications equipment failure',
    'Request secondary frequency reassignment'
  ];

  return {
    day: safeDay,
    levelNumber: safeLevel,
    tierLabel,
    tierDescription,
    item1: {
      question: `[Day ${safeDay} • Acoustic Discrimination]: Which target word was spoken in the radio transmission?`,
      options: [targetWord, ...distractors],
      correctIndex: 0,
      explanation: acousticExplanation,
      focusType: tier === 1 ? 'minimal_pair' : tier === 2 ? 'near_homophone' : 'homophone',
      difficultyTier: tier === 1 ? 'word' : tier === 2 ? 'short_phrase' : 'extended_phrase',
      phoneticTarget
    },
    item2: customItem2 || {
      question: `[Day ${safeDay} • Operational Verification]: What is the primary directive confirmed in this radio message?`,
      options: fallbackDirectiveOptions,
      correctIndex: 0,
      explanation: `Tactical requirement: The broadcast explicitly confirms directives regarding ${targetWord}.`,
      focusType: 'tactical_directive',
      difficultyTier: tier === 1 ? 'word' : tier === 2 ? 'short_phrase' : 'extended_phrase'
    }
  };
}

