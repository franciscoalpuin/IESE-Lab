/**
 * Audio synthesis and speech recognition utilities tailored for British Military English (IESE)
 */

class SoundEffects {
  private ctx: AudioContext | null = null;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Generates a tactical radio squelch/chirp sound (PTT button release / radio static burst)
   */
  playRadioBeep() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1050, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(750, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch {
      // Audio context might be restricted before user gesture
    }
  }

  playSuccessChime() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.2); // G5

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(now + 0.4);
    } catch {
      // Ignored
    }
  }

  /**
   * Generates a realistic telephone dual-tone ring cadence (440Hz + 480Hz)
   */
  playTelephoneRing(onComplete?: () => void) {
    try {
      this.initCtx();
      if (!this.ctx) {
        if (onComplete) onComplete();
        return;
      }
      const now = this.ctx.currentTime;
      
      const createRingPulse = (startTime: number, duration: number) => {
        if (!this.ctx) return;
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc1.type = 'sine';
        osc2.type = 'sine';
        osc1.frequency.setValueAtTime(440, startTime);
        osc2.frequency.setValueAtTime(480, startTime);

        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.linearRampToValueAtTime(0.12, startTime + 0.05);
        gain.gain.setValueAtTime(0.12, startTime + duration - 0.05);
        gain.gain.linearRampToValueAtTime(0.001, startTime + duration);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.ctx.destination);

        osc1.start(startTime);
        osc2.start(startTime);
        osc1.stop(startTime + duration);
        osc2.stop(startTime + duration);
      };

      // Ring pulse 1 (0.8s), pause (0.4s), ring pulse 2 (0.8s)
      createRingPulse(now + 0.1, 0.7);
      createRingPulse(now + 1.1, 0.7);

      if (onComplete) {
        setTimeout(onComplete, 2000);
      }
    } catch {
      if (onComplete) onComplete();
    }
  }

  /**
   * Generates a referee whistle sound
   */
  playRefereeWhistle(onComplete?: () => void) {
    try {
      this.initCtx();
      if (!this.ctx) {
        if (onComplete) onComplete();
        return;
      }
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(2600, now);
      osc.frequency.linearRampToValueAtTime(2800, now + 0.15);
      osc.frequency.linearRampToValueAtTime(2500, now + 0.35);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.4);

      if (onComplete) {
        setTimeout(onComplete, 450);
      }
    } catch {
      if (onComplete) onComplete();
    }
  }

  /**
   * Generates a sports stadium crowd cheering swell
   */
  playStadiumCheer(durationSeconds: number = 3.5, onComplete?: () => void) {
    try {
      this.initCtx();
      if (!this.ctx) {
        if (onComplete) onComplete();
        return;
      }
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * durationSeconds;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      // Pinkish noise for crowd roaring
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        data[i] = (b0 + b1 + b2) * 0.12;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(450, now);
      filter.Q.setValueAtTime(1.2, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.15, now + 0.8);
      gain.gain.setValueAtTime(0.15, now + durationSeconds - 1.0);
      gain.gain.linearRampToValueAtTime(0.001, now + durationSeconds);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
      noise.stop(now + durationSeconds);

      if (onComplete) {
        setTimeout(onComplete, durationSeconds * 1000);
      }
    } catch {
      if (onComplete) onComplete();
    }
  }
}

export const soundEffects = new SoundEffects();

export type SpeakerGender = 'male' | 'female' | 'narrator';

export interface ParsedDialogueLine {
  id: string;
  speakerName: string;
  gender: SpeakerGender;
  cleanText: string; // Text to speak WITHOUT speaker name like "Luis:"
  originalLine: string;
  sfxType?: 'telephone' | 'referee' | 'radio';
  pitch: number;
}

/**
 * Detects whether a speaker is female, male, or a neutral narrator/commentator.
 */
export function detectSpeakerGender(speakerName: string): SpeakerGender {
  const clean = speakerName.trim().toLowerCase();

  if (
    clean.includes('narrator') || 
    clean.includes('commentator') || 
    clean.includes('announcer') ||
    clean.includes('radio')
  ) {
    return 'narrator';
  }

  // Female tags and names
  const femaleList = [
    'woman', 'female', 'girl', 'mother', 'mom', 'lady', 'sister', 'daughter', 'wife', 'aunt',
    'carol', 'mary', 'susan', 'sarah', 'jane', 'anna', 'emma', 'lucy', 'alice', 'elena', 'maria',
    'laura', 'clara', 'patricia', 'linda', 'barbara', 'elizabeth', 'jennifer', 'jessica', 'karen',
    'nancy', 'lisa', 'betty', 'margaret', 'sandra', 'ashley', 'kimberly', 'emily', 'donna',
    'michelle', 'dorothy', 'amanda', 'melissa', 'deborah', 'stephanie', 'rebecca', 'sharon',
    'cynthia', 'kathleen', 'amy', 'shirley', 'angela', 'helen', 'brenda', 'pamela', 'nicole',
    'samantha', 'katherine', 'christine', 'debra', 'rachel', 'catherine', 'carolyn', 'janet',
    'ruth', 'heather', 'diane', 'virginia', 'julie', 'joyce', 'victoria', 'olivia', 'kelly',
    'christina', 'joan', 'evelyn', 'judith', 'megan', 'cheryl', 'andrea', 'hannah', 'martha',
    'jacqueline', 'frances', 'gloria', 'ann', 'teresa', 'kathryn', 'sara', 'janice', 'jean',
    'madison', 'doris', 'abigail', 'julia', 'judy', 'grace', 'denise', 'amber', 'marilyn',
    'beverly', 'danielle', 'theresa', 'sophia', 'marie', 'diana', 'brittany', 'natalie',
    'isabella', 'charlotte', 'zoe', 'chloe', 'eva', 'claire', 'valerie', 'rosa', 'ana', 'carmen'
  ];

  for (const f of femaleList) {
    const reg = new RegExp(`\\b${f}\\b`, 'i');
    if (reg.test(clean)) {
      return 'female';
    }
  }

  // Male tags and common names (Luis, Tim, Bill, John, Man, etc.)
  const maleList = [
    'man', 'male', 'boy', 'father', 'dad', 'gentleman', 'brother', 'son', 'husband', 'uncle',
    'luis', 'tim', 'bill', 'john', 'david', 'james', 'robert', 'michael', 'william', 'richard',
    'joseph', 'thomas', 'charles', 'christopher', 'daniel', 'matthew', 'anthony', 'donald',
    'mark', 'paul', 'steven', 'andrew', 'kenneth', 'joshua', 'kevin', 'brian', 'george',
    'edward', 'ronald', 'timothy', 'jason', 'jeffrey', 'ryan', 'jacob', 'gary', 'nicholas',
    'eric', 'jonathan', 'stephen', 'larry', 'justin', 'scott', 'brandon', 'frank', 'benjamin',
    'gregory', 'samuel', 'raymond', 'patrick', 'alexander', 'jack', 'dennis', 'jerry', 'tyler',
    'aaron', 'jose', 'henry', 'adam', 'douglas', 'nathan', 'peter', 'zachary', 'kyle',
    'walter', 'harold', 'jeremy', 'ethan', 'carl', 'keith', 'roger', 'gerald', 'christian',
    'terry', 'sean', 'arthur', 'austin', 'noah', 'lawrence', 'jesse', 'joe', 'bryan', 'billy',
    'jordan', 'albert', 'dylan', 'bruce', 'willie', 'gabriel', 'alan', 'juan', 'logan',
    'wayne', 'ralph', 'roy', 'eugene', 'randy', 'vincent', 'russell', 'louis', 'philip',
    'bobby', 'johnny', 'bradley', 'carlos', 'pedro', 'miguel', 'jorge', 'martin', 'jimmy'
  ];

  for (const m of maleList) {
    const reg = new RegExp(`\\b${m}\\b`, 'i');
    if (reg.test(clean)) {
      return 'male';
    }
  }

  return 'male';
}

/**
 * Finds the most suitable English voice for a specific gender in the user's browser.
 */
export function getBritishVoiceByGender(gender: SpeakerGender): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;

  const englishVoices = voices.filter(v => v.lang.toLowerCase().startsWith('en'));
  if (englishVoices.length === 0) return voices[0];

  const femaleMarkers = [
    'female', 'susan', 'hazel', 'victoria', 'samantha', 'karen', 'fiona', 
    'libby', 'sonia', 'catherina', 'stephanie', 'zoe', 'ava', 'allison', 
    'serena', 'helena', 'zira', 'jenny', 'amy', 'catherine'
  ];

  const maleMarkers = [
    'male', 'david', 'george', 'daniel', 'oliver', 'arthur', 'mark', 
    'guy', 'brian', 'james', 'richard', 'ryan', 'eric', 'thomas'
  ];

  if (gender === 'female') {
    // 1. UK female
    const ukFemale = englishVoices.find(v => 
      v.lang.toLowerCase().startsWith('en-gb') && 
      femaleMarkers.some(m => v.name.toLowerCase().includes(m))
    );
    if (ukFemale) return ukFemale;

    // 2. Any English female
    const anyFemale = englishVoices.find(v => 
      femaleMarkers.some(m => v.name.toLowerCase().includes(m))
    );
    if (anyFemale) return anyFemale;
  } else if (gender === 'male') {
    // 1. UK male
    const ukMale = englishVoices.find(v => 
      v.lang.toLowerCase().startsWith('en-gb') && 
      maleMarkers.some(m => v.name.toLowerCase().includes(m))
    );
    if (ukMale) return ukMale;

    // 2. Any English male
    const anyMale = englishVoices.find(v => 
      maleMarkers.some(m => v.name.toLowerCase().includes(m))
    );
    if (anyMale) return anyMale;
  }

  // Prefer UK RP voice as default fallback
  const ukDefault = englishVoices.find(v => v.lang.toLowerCase().startsWith('en-gb'));
  return ukDefault || englishVoices[0];
}

/**
 * Parses a script into structured dialogue lines:
 * - Identifies speaker and gender (male / female / narrator)
 * - STRIPS the speaker's name/label ("Luis:", "Tim:", "Bill:") so it is NOT pronounced
 * - Separates sound effect cues ([Telephone ringing], [Whistle], etc.)
 */
export function parseDialogueScript(rawScript: string): ParsedDialogueLine[] {
  const lines = rawScript.split('\n');
  const result: ParsedDialogueLine[] = [];

  let currentDialogueNum = 1;

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i].trim();
    if (!rawLine) continue;

    // Check for sound effect lines
    if (rawLine.startsWith('[') && rawLine.endsWith(']')) {
      const lower = rawLine.toLowerCase();
      let sfxType: 'telephone' | 'referee' | 'radio' = 'radio';
      if (lower.includes('telephone') || lower.includes('phone') || lower.includes('ring')) {
        sfxType = 'telephone';
      } else if (lower.includes('whistle') || lower.includes('stadium') || lower.includes('referee') || lower.includes('crowd')) {
        sfxType = 'referee';
      }

      result.push({
        id: `line-${i}`,
        speakerName: '',
        gender: 'narrator',
        cleanText: '',
        originalLine: rawLine,
        sfxType,
        pitch: 1.0
      });
      continue;
    }

    // Check for "Dialogue 1:", "Dialogue 2:" headings
    const dialogueHeadingMatch = rawLine.match(/^Dialogue\s+(\d+):?$/i);
    if (dialogueHeadingMatch) {
      currentDialogueNum = parseInt(dialogueHeadingMatch[1], 10);
      result.push({
        id: `line-${i}`,
        speakerName: 'Narrator',
        gender: 'narrator',
        cleanText: `Dialogue ${currentDialogueNum}.`,
        originalLine: rawLine,
        pitch: 1.05
      });
      continue;
    }

    // Match Speaker format: "Speaker Name: Text here"
    // e.g., "Luis: Hello there", "Tim: Of course.", "Woman: Can you answer that?", "Man 1: Where?"
    const speakerMatch = rawLine.match(/^([A-Za-z0-9\s]+):\s*(.*)$/);

    if (speakerMatch) {
      const speakerName = speakerMatch[1].trim();
      let spokenText = speakerMatch[2].trim();

      // Strip any bracketed sounds from inside spoken text
      spokenText = spokenText.replace(/\[.*?\]/g, ' ').replace(/\s+/g, ' ').trim();

      if (!spokenText) continue;

      const gender = detectSpeakerGender(speakerName);

      // Acoustic pitch modulation:
      // Female: higher pitch (1.22)
      // Male: deeper pitch (0.88)
      // Differentiate Man 1 (0.92) vs Man 2 (0.82) so two men don't sound identical
      let pitch = 1.0;
      if (gender === 'female') {
        pitch = 1.22;
      } else if (gender === 'male') {
        if (/2\b/i.test(speakerName)) {
          pitch = 0.82; // Deeper second male
        } else if (/1\b/i.test(speakerName)) {
          pitch = 0.93; // First male
        } else if (/bill/i.test(speakerName)) {
          pitch = 0.85; // Bill
        } else if (/tim/i.test(speakerName)) {
          pitch = 0.94; // Tim
        } else {
          pitch = 0.88;
        }
      } else {
        pitch = 1.02; // Narrator / commentator
      }

      result.push({
        id: `line-${i}`,
        speakerName,
        gender,
        cleanText: spokenText, // IMPORTANT: Speaker name "Luis:" is stripped out here!
        originalLine: rawLine,
        pitch
      });
    } else {
      // Line without speaker tag
      let clean = rawLine.replace(/\[.*?\]/g, ' ').replace(/\s+/g, ' ').trim();
      if (!clean) continue;

      result.push({
        id: `line-${i}`,
        speakerName: 'Narrator',
        gender: 'narrator',
        cleanText: clean,
        originalLine: rawLine,
        pitch: 1.0
      });
    }
  }

  return result;
}

let activeDialogueCancelled = false;

/**
 * Speaks an entire script line-by-line as a realistic multi-character conversation:
 * - Speaker names (e.g. "Luis:", "Tim:", "Bill:") are NEVER pronounced.
 * - Male characters use male voices / pitch (0.85 - 0.94).
 * - Female characters use female voices / pitch (1.22).
 * - Narrator uses clear presentation pitch (1.02).
 * - Inter-turn realistic conversational pauses (300ms).
 */
export function speakBritishDialogue(
  rawScript: string,
  options: {
    rate?: number;
    onLineStart?: (lineIndex: number, line: ParsedDialogueLine) => void;
    onEnd?: () => void;
  } = {}
) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;

  activeDialogueCancelled = false;
  window.speechSynthesis.cancel();

  const lines = parseDialogueScript(rawScript);
  if (lines.length === 0) {
    if (options.onEnd) options.onEnd();
    return;
  }

  let currentIndex = 0;

  const playNext = () => {
    if (activeDialogueCancelled) return;

    if (currentIndex >= lines.length) {
      if (options.onEnd) options.onEnd();
      return;
    }

    const currentLine = lines[currentIndex];

    // 1. Handle Sound Effects
    if (currentLine.sfxType === 'telephone') {
      soundEffects.playTelephoneRing(() => {
        if (activeDialogueCancelled) return;
        currentIndex++;
        setTimeout(playNext, 250);
      });
      return;
    }

    if (currentLine.sfxType === 'referee') {
      soundEffects.playRefereeWhistle(() => {
        if (activeDialogueCancelled) return;
        soundEffects.playStadiumCheer(2.5);
        currentIndex++;
        setTimeout(playNext, 600);
      });
      return;
    }

    // 2. Handle Dialogue Line (Clean text, without speaker name!)
    if (!currentLine.cleanText) {
      currentIndex++;
      playNext();
      return;
    }

    if (options.onLineStart) {
      options.onLineStart(currentIndex, currentLine);
    }

    const utterance = new SpeechSynthesisUtterance(currentLine.cleanText);
    utterance.lang = 'en-GB';
    utterance.rate = options.rate || (currentLine.gender === 'female' ? 0.98 : 0.95);
    utterance.pitch = currentLine.pitch;

    const voice = getBritishVoiceByGender(currentLine.gender);
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onend = () => {
      if (activeDialogueCancelled) return;
      currentIndex++;
      // Brief pause between speaker turns
      setTimeout(playNext, 350);
    };

    utterance.onerror = () => {
      if (activeDialogueCancelled) return;
      currentIndex++;
      setTimeout(playNext, 200);
    };

    window.speechSynthesis.speak(utterance);
  };

  playNext();
}

export function stopSpeaking() {
  activeDialogueCancelled = true;
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

export function getBritishVoice(): SpeechSynthesisVoice | null {
  return getBritishVoiceByGender('narrator');
}

export function speakBritishText(
  text: string,
  options: {
    rate?: number;
    pitch?: number;
    isRadio?: boolean;
    onEnd?: () => void;
  } = {}
) {
  speakBritishDialogue(text, options);
}

export function speakSingleBritishWord(
  word: string,
  options: {
    rate?: number;
    pitch?: number;
    onEnd?: () => void;
  } = {}
) {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    if (options.onEnd) options.onEnd();
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(word.trim());
  utterance.lang = 'en-GB';
  utterance.rate = options.rate || 0.88; // Slightly measured for phoneme clarity
  utterance.pitch = options.pitch || 1.0;

  const ukVoice = getBritishVoice();
  if (ukVoice) {
    utterance.voice = ukVoice;
  }

  utterance.onend = () => {
    if (options.onEnd) options.onEnd();
  };
  utterance.onerror = () => {
    if (options.onEnd) options.onEnd();
  };

  window.speechSynthesis.speak(utterance);
}

export function getSpanishVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  const esVoices = voices.filter(v => v.lang.toLowerCase().startsWith('es'));
  if (esVoices.length === 0) return null;

  // Prefer Spanish / Argentine / Latin American voice
  const arVoice = esVoices.find(v => v.lang.toLowerCase().includes('ar'));
  if (arVoice) return arVoice;
  const esEsVoice = esVoices.find(v => v.lang.toLowerCase().includes('es'));
  if (esEsVoice) return esEsVoice;
  return esVoices[0];
}

export function speakBilingualText(
  text: string,
  lang: 'en' | 'es',
  options: {
    rate?: number;
    pitch?: number;
    onStart?: () => void;
    onEnd?: () => void;
  } = {}
) {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    if (options.onEnd) options.onEnd();
    return;
  }

  const cleanText = text.replace(/\[.*?\]/g, '').trim();
  if (!cleanText) {
    if (options.onEnd) options.onEnd();
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = lang === 'en' ? 'en-GB' : 'es-ES';
  utterance.rate = options.rate || (lang === 'en' ? 0.92 : 0.95);
  utterance.pitch = options.pitch || 1.0;

  if (lang === 'en') {
    const ukVoice = getBritishVoice();
    if (ukVoice) utterance.voice = ukVoice;
  } else {
    const esVoice = getSpanishVoice();
    if (esVoice) utterance.voice = esVoice;
  }

  if (options.onStart) {
    utterance.onstart = () => {
      if (options.onStart) options.onStart();
    };
  }

  utterance.onend = () => {
    if (options.onEnd) options.onEnd();
  };

  utterance.onerror = () => {
    if (options.onEnd) options.onEnd();
  };

  window.speechSynthesis.speak(utterance);
}
