import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Upload, 
  Trash2, 
  FastForward, 
  Rewind, 
  Music, 
  Radio, 
  CheckCircle2, 
  AlertCircle,
  Headphones,
  Sparkles,
  Clock,
  User,
  Users,
  Volume1
} from 'lucide-react';
import { getAudioFile, saveAudioFile, deleteAudioFile } from '../utils/audioStorage';
import { 
  speakBritishDialogue, 
  stopSpeaking, 
  soundEffects, 
  ParsedDialogueLine,
  parseDialogueScript 
} from '../utils/audio';

interface AudioExamPlayerProps {
  levelNumber: number;
  exerciseNumber: number;
  title: string;
  transcriptText: string;
  playMode: 'single' | 'double';
  audioRate: number;
}

export const AudioExamPlayer: React.FC<AudioExamPlayerProps> = ({
  levelNumber,
  exerciseNumber,
  title,
  transcriptText,
  playMode,
  audioRate
}) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioFileName, setAudioFileName] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [volume, setVolume] = useState(1.0);
  const [isMuted, setIsMuted] = useState(false);
  const [hearingCount, setHearingCount] = useState<number>(1);
  const [countdownPause, setCountdownPause] = useState<number | null>(null);
  const [isSyntheticPlaying, setIsSyntheticPlaying] = useState(false);
  const [activeTurn, setActiveTurn] = useState<ParsedDialogueLine | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const countdownIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load custom audio from IndexedDB or standard /audio/l{level}-ex{num}.mp3 on mount or prop change
  useEffect(() => {
    let isMounted = true;
    stopPlayback();

    const loadAudio = async () => {
      // 1. Try IndexedDB
      const saved = await getAudioFile(levelNumber, exerciseNumber);
      if (saved && isMounted) {
        setAudioUrl(saved.url);
        setAudioFileName(saved.name);
        return;
      }

      // 2. Try default static path /audio/l{level}-ex{num}.mp3
      const defaultPath = `/audio/l${levelNumber}-ex${exerciseNumber}.mp3`;
      try {
        const res = await fetch(defaultPath, { method: 'HEAD' });
        const contentType = res.headers.get('content-type') || '';
        // CRITICAL: In Single Page Apps (SPA), missing files return 200 with index.html (text/html).
        // We must strictly reject text/html and only accept genuine audio/octet-stream content types.
        const isRealAudio = res.ok && 
          !contentType.toLowerCase().includes('text/html') && 
          (contentType.toLowerCase().includes('audio') || contentType.toLowerCase().includes('octet-stream'));

        if (isRealAudio && isMounted) {
          setAudioUrl(defaultPath);
          setAudioFileName(`l${levelNumber}-ex${exerciseNumber}.mp3 (Grabación Oficial)`);
        } else if (isMounted) {
          setAudioUrl(null);
          setAudioFileName(null);
        }
      } catch {
        if (isMounted) {
          setAudioUrl(null);
          setAudioFileName(null);
        }
      }
    };

    loadAudio();

    return () => {
      isMounted = false;
      stopPlayback();
    };
  }, [levelNumber, exerciseNumber]);

  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    stopSpeaking();
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
      countdownIntervalRef.current = null;
    }
    setIsPlaying(false);
    setIsSyntheticPlaying(false);
    setActiveTurn(null);
    setCountdownPause(null);
    setHearingCount(1);
    setCurrentTime(0);
  };

  const handleFileUpload = async (file: File) => {
    if (!file || !file.type.startsWith('audio/')) {
      setUploadError('Por favor selecciona un archivo de audio válido (.mp3, .wav, .m4a, .ogg)');
      setTimeout(() => setUploadError(null), 4000);
      return;
    }
    setUploadError(null);

    try {
      await saveAudioFile(levelNumber, exerciseNumber, file);
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
      setAudioFileName(file.name);
      stopPlayback();
    } catch {
      // Fallback to in-memory URL
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
      setAudioFileName(file.name);
    }
  };

  const handleDeleteAudio = async () => {
    stopPlayback();
    await deleteAudioFile(levelNumber, exerciseNumber);
    setAudioUrl(null);
    setAudioFileName(null);
  };

  // Handle Real Audio Play / Pause
  const togglePlayRealAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      stopSpeaking();
      setIsSyntheticPlaying(false);
      setActiveTurn(null);
      if (countdownPause !== null) {
        if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
        setCountdownPause(null);
      }
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.warn('Audio playback error (source missing or unsupported):', err);
        setIsPlaying(false);
        setAudioUrl(null);
        setAudioFileName(null);
      });
    }
  };

  const handleAudioEnded = () => {
    if (playMode === 'double' && hearingCount === 1) {
      setIsPlaying(false);
      let count = 10;
      setCountdownPause(count);

      countdownIntervalRef.current = setInterval(() => {
        count -= 1;
        if (count <= 0) {
          if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
          countdownIntervalRef.current = null;
          setCountdownPause(null);
          setHearingCount(2);

          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().then(() => setIsPlaying(true));
          }
        } else {
          setCountdownPause(count);
        }
      }, 1000);
    } else {
      setIsPlaying(false);
      setHearingCount(1);
    }
  };

  const handleTimeSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const skipSeconds = (seconds: number) => {
    if (!audioRef.current) return;
    const newTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + seconds));
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleRateChange = (newRate: number) => {
    setPlaybackRate(newRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = newRate;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    setIsMuted(val === 0);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume || 1;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  // Multi-character assisted dialogue speech
  const handleToggleSynthetic = () => {
    if (isSyntheticPlaying) {
      stopPlayback();
      return;
    }

    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }

    setIsSyntheticPlaying(true);
    setHearingCount(1);

    const startPass = (hearingNum: number) => {
      setHearingCount(hearingNum);

      speakBritishDialogue(transcriptText, {
        rate: audioRate,
        onLineStart: (_idx, line) => {
          setActiveTurn(line);
        },
        onEnd: () => {
          if (playMode === 'double' && hearingNum === 1) {
            setActiveTurn(null);
            setCountdownPause(10);
            let c = 10;
            const timer = setInterval(() => {
              c -= 1;
              if (c <= 0) {
                clearInterval(timer);
                setCountdownPause(null);
                startPass(2);
              } else {
                setCountdownPause(c);
              }
            }, 1000);
          } else {
            setIsSyntheticPlaying(false);
            setActiveTurn(null);
            setHearingCount(1);
          }
        }
      });
    };

    startPass(1);
  };

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-[#0c1208] border border-[#2f421f] rounded-xl p-4 sm:p-5 space-y-4 shadow-lg">
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleFileUpload(e.target.files[0]);
          }
        }} 
        accept="audio/*" 
        className="hidden" 
      />

      {/* Header with Title and Current State */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#243317] pb-3">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-[#1f2e13] text-[#b8df47] border border-[#3e5624]">
            <Music className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8ea478]">
                Ejercicio {exerciseNumber}
              </span>
              {audioUrl ? (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#273d15] text-[#b8df47] border border-[#537728]">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Archivo de Audio Real
                </span>
              ) : (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#1e2f17] text-[#b8df47] border border-[#3b5523]">
                  <Users className="w-3 h-3 mr-1" /> Voz Asistida Multi-Personaje (Sin nombres)
                </span>
              )}
            </div>
            <h3 className="text-sm sm:text-base font-bold font-stencil text-white tracking-wide uppercase">
              {title}
            </h3>
          </div>
        </div>

        {/* Upload Audio Button */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#223315] hover:bg-[#2d441c] text-[#b8df47] border border-[#486629] text-xs font-tactical font-semibold transition-all cursor-pointer shadow-sm"
            title="Cargar archivo MP3 o WAV de tu computadora para este ejercicio"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>{audioUrl ? 'Cambiar Audio (.mp3)' : 'Cargar Audio (.mp3)'}</span>
          </button>

          {audioUrl && (
            <button
              onClick={handleDeleteAudio}
              className="p-1.5 rounded-xl bg-[#2a1313] hover:bg-[#3d1a1a] text-rose-300 border border-rose-900/40 text-xs cursor-pointer transition-colors"
              title="Eliminar audio cargado"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Hidden native HTML5 Audio element */}
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          onTimeUpdate={() => {
            if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
          }}
          onLoadedMetadata={() => {
            if (audioRef.current) setDuration(audioRef.current.duration);
          }}
          onEnded={handleAudioEnded}
          onError={(e) => {
            console.warn('Error loading audio file:', audioUrl, e);
            setAudioUrl(null);
            setAudioFileName(null);
            setIsPlaying(false);
          }}
        />
      )}

      {/* ========================================================================= */}
      {/* 1. CASO CON AUDIO REAL CARGADO                                            */}
      {/* ========================================================================= */}
      {audioUrl ? (
        <div className="bg-[#121c0b] border border-[#2b3d1b] rounded-xl p-4 space-y-4">
          
          {/* File information bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#a4b88f] gap-2 pb-2 border-b border-[#202f14]">
            <div className="flex items-center space-x-2 truncate">
              <Headphones className="w-3.5 h-3.5 text-[#b8df47] shrink-0" />
              <span className="truncate font-mono font-medium text-white">{audioFileName}</span>
            </div>
            <div className="flex items-center space-x-3 text-[11px] font-mono">
              <span className="text-[#8ea478]">
                Modo: <strong className="text-[#b8df47]">{playMode === 'double' ? '2 Audiciones (STANAG)' : '1 Audición'}</strong>
              </span>
              {playMode === 'double' && (
                <span className="px-2 py-0.5 rounded bg-[#1e2e13] text-[#b8df47] border border-[#3b5522]">
                  Audición {hearingCount} de 2
                </span>
              )}
            </div>
          </div>

          {/* Countdown pause banner between auditions */}
          {countdownPause !== null && (
            <div className="p-3 bg-[#2b2512] border border-amber-600/50 rounded-xl flex items-center justify-between text-xs text-amber-200 animate-pulse">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="font-bold font-stencil">
                  Intervalo oficial de revisión: 2.ª audición en {countdownPause} segundos...
                </span>
              </div>
              <button
                onClick={() => {
                  if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
                  setCountdownPause(null);
                  setHearingCount(2);
                  if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play().then(() => setIsPlaying(true));
                  }
                }}
                className="underline text-xs text-amber-300 hover:text-white cursor-pointer"
              >
                Reproducir ahora
              </button>
            </div>
          )}

          {/* Scrubber Progress Bar */}
          <div className="space-y-1.5">
            <input
              type="range"
              min={0}
              max={duration || 100}
              step={0.1}
              value={currentTime}
              onChange={handleTimeSeek}
              className="w-full h-2 bg-[#1b2612] rounded-lg appearance-none cursor-pointer accent-[#8eb935]"
            />
            <div className="flex justify-between text-[11px] font-mono text-[#8fa577]">
              <span>{formatSeconds(currentTime)}</span>
              <span>{formatSeconds(duration)}</span>
            </div>
          </div>

          {/* Main Controls Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            
            {/* Play/Pause & Skip Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => skipSeconds(-5)}
                className="p-2 rounded-xl bg-[#1a2612] hover:bg-[#233318] text-[#b8df47] border border-[#344a1e] transition-colors cursor-pointer"
                title="Retroceder 5 segundos"
              >
                <Rewind className="w-4 h-4" />
              </button>

              <button
                onClick={togglePlayRealAudio}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold font-stencil uppercase tracking-wide transition-all shadow-md cursor-pointer ${
                  isPlaying
                    ? 'bg-[#982c2c] hover:bg-[#b03434] text-white border border-[#dc2626]'
                    : 'bg-[#688a28] hover:bg-[#7da72f] text-[#0f150a] border border-[#a2cb3c]'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Pausar</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>{currentTime > 0 ? 'Continuar' : 'Reproducir Audio'}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => skipSeconds(5)}
                className="p-2 rounded-xl bg-[#1a2612] hover:bg-[#233318] text-[#b8df47] border border-[#344a1e] transition-colors cursor-pointer"
                title="Adelantar 5 segundos"
              >
                <FastForward className="w-4 h-4" />
              </button>

              <button
                onClick={stopPlayback}
                className="p-2 rounded-xl bg-[#1a2612] hover:bg-[#233318] text-[#8ea478] hover:text-[#d6e7c1] border border-[#344a1e] transition-colors cursor-pointer"
                title="Reiniciar reproducción"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Speed & Volume Controls */}
            <div className="flex items-center space-x-3 text-xs">
              
              {/* Playback rate */}
              <div className="flex items-center space-x-1 bg-[#16200f] border border-[#2e401d] rounded-lg p-1">
                {[0.8, 1.0, 1.2].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => handleRateChange(rate)}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all cursor-pointer ${
                      playbackRate === rate
                        ? 'bg-[#2b3e1a] text-[#b8df47] font-bold'
                        : 'text-[#7e9368] hover:text-white'
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>

              {/* Volume */}
              <div className="hidden sm:flex items-center space-x-1.5 text-[#8fa577]">
                <button onClick={toggleMute} className="cursor-pointer hover:text-[#b8df47]">
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-rose-400" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1.5 bg-[#1b2612] rounded-lg appearance-none cursor-pointer accent-[#8eb935]"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* 2. VOZ ASISTIDA MULTI-PERSONAJE (SIN NOMBRES)                             */
        /* ========================================================================= */
        <div className="p-4 sm:p-5 rounded-xl border border-[#395021] bg-[#10170a] space-y-4">
          
          {/* Status & Rules Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-[#1f2d14] text-xs">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded-lg bg-[#1f2e13] text-[#b8df47]">
                <Radio className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white uppercase font-stencil tracking-wide">
                  Voz Asistida Multi-Personaje
                </span>
                <span className="text-[#8ea478] ml-2 font-mono text-[11px] hidden sm:inline">
                  (Distingue Femenino ♀ / Masculino ♂ • Nombres no pronunciados)
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-[11px] font-mono">
              <span className="px-2 py-0.5 rounded bg-[#1b2811] text-[#b8df47] border border-[#344b1e]">
                Modo: {playMode === 'double' ? '2 Audiciones' : '1 Audición'}
              </span>
              {isSyntheticPlaying && playMode === 'double' && (
                <span className="px-2 py-0.5 rounded bg-[#273917] text-[#b8df47] font-bold border border-[#527329] animate-pulse">
                  Audición {hearingCount} de 2
                </span>
              )}
            </div>
          </div>

          {/* Countdown pause banner in double mode */}
          {countdownPause !== null && (
            <div className="p-3 bg-[#2b2512] border border-amber-600/50 rounded-xl flex items-center justify-between text-xs text-amber-200 animate-pulse">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="font-bold font-stencil">
                  Pausa intermedia de 10 seg (Revise sus respuestas)... 2.ª audición en {countdownPause}s
                </span>
              </div>
              <button
                onClick={() => {
                  if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
                  setCountdownPause(null);
                  handleToggleSynthetic();
                }}
                className="underline text-xs text-amber-300 hover:text-white cursor-pointer"
              >
                Continuar ya
              </button>
            </div>
          )}

          {/* Active Speaking Turn Highlight Banner */}
          {isSyntheticPlaying && activeTurn && (
            <div className="p-3.5 rounded-xl border transition-all bg-[#0a0f07] border-[#395021] space-y-2 animate-fadeIn">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  {activeTurn.gender === 'female' ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-pink-950/70 text-pink-300 border border-pink-700/50">
                      ♀ Voz Femenina {activeTurn.speakerName && `(${activeTurn.speakerName})`}
                    </span>
                  ) : activeTurn.gender === 'male' ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-sky-950/70 text-sky-300 border border-sky-700/50">
                      ♂ Voz Masculina {activeTurn.speakerName && `(${activeTurn.speakerName})`}
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#1e2e13] text-[#b8df47] border border-[#3b5522]">
                      🎙️ Narrador / Locutor
                    </span>
                  )}
                  <span className="text-[11px] font-mono text-[#768a62] hidden sm:inline">
                    Nombre excluido del habla
                  </span>
                </div>

                <div className="flex items-center space-x-1.5 text-[11px] font-mono text-[#8ea478]">
                  <Volume1 className="w-3.5 h-3.5 animate-ping text-[#b8df47]" />
                  <span>Hablando en vivo...</span>
                </div>
              </div>

              {/* Spoken Text (What the character says) */}
              <div className="text-sm font-medium text-white italic pl-2 border-l-2 border-[#7ea830] py-0.5">
                "{activeTurn.cleanText}"
              </div>
            </div>
          )}

          {/* Action Buttons: Play/Stop Assisted Voice or Upload MP3 */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex items-center space-x-2.5">
              <button
                onClick={handleToggleSynthetic}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold font-stencil uppercase tracking-wide transition-all shadow-md cursor-pointer ${
                  isSyntheticPlaying
                    ? 'bg-[#982c2c] hover:bg-[#b03434] text-white border border-[#dc2626]'
                    : 'bg-[#688a28] hover:bg-[#7da72f] text-[#0f150a] border border-[#a2cb3c]'
                }`}
              >
                {isSyntheticPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Detener Voz Asistida</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Reproducir con Voz Asistida</span>
                  </>
                )}
              </button>

              {isSyntheticPlaying && (
                <button
                  onClick={stopPlayback}
                  className="p-2.5 rounded-xl bg-[#1a2612] hover:bg-[#233318] text-[#8ea478] hover:text-[#d6e7c1] border border-[#344a1e] transition-colors cursor-pointer"
                  title="Reiniciar diálogo"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Upload MP3 Option */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-[#141c0e] hover:bg-[#1b2512] text-[#8ea478] hover:text-[#d6e7c1] border border-[#2e401d] text-xs font-tactical transition-all cursor-pointer"
              title="¿Tienes el archivo MP3 original? Puedes cargarlo aquí"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>O cargar archivo .mp3 original</span>
            </button>
          </div>

          {uploadError && (
            <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-700/60 text-red-200 text-xs font-tactical animate-in fade-in">
              {uploadError}
            </div>
          )}

          <div className="text-[11px] text-[#71855d] font-mono pt-1">
            Regla activa: El motor omite etiquetas como <strong className="text-[#a6c757]">"Luis:"</strong> o <strong className="text-[#a6c757]">"Woman:"</strong> y reproduce directamente las frases asignando voces y tonos diferenciados según el género.
          </div>
        </div>
      )}
    </div>
  );
};
