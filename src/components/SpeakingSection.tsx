import React, { useState, useEffect, useRef } from 'react';
import { LevelSyllabus } from '../types';
import { speakBritishText, stopSpeaking } from '../utils/audio';
import { compareSpeechToModel, SpeechComparisonResult } from '../utils/speechComparison';
import { SpeechComparisonCard } from './SpeechComparisonCard';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  Square, 
  RotateCcw, 
  CheckCircle, 
  Award, 
  Sparkles, 
  Play, 
  Radio,
  Edit3,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DailyOperationalHeader } from './DailyOperationalHeader';
import { getDailyOperationalPractice } from '../data/dailyOperationalPracticeData';

interface SpeakingSectionProps {
  level: LevelSyllabus;
  onRecordScore: (exerciseId: string, scorePercentage: number) => void;
  audioRate: number;
  selectedDay?: number;
  onSelectDay?: (day: number) => void;
  onOpenDaySelector?: () => void;
}

export const SpeakingSection: React.FC<SpeakingSectionProps> = ({
  level,
  onRecordScore,
  audioRate,
  selectedDay = 1,
  onSelectDay,
  onOpenDaySelector
}) => {
  // Load progressive daily operational practice
  const practice = getDailyOperationalPractice(level.levelNumber, selectedDay, 'speaking');

  const [isPlayingModel, setIsPlayingModel] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [transcript, setTranscript] = useState<string>('');
  const [isEditingTranscript, setIsEditingTranscript] = useState(false);
  const [recognitionSupported, setRecognitionSupported] = useState(false);
  const [recError, setRecError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);
  const [showComparison, setShowComparison] = useState<boolean>(false);

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        setRecognitionSupported(true);
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-GB';

        recognition.onresult = (event: any) => {
          let currentTranscript = '';
          for (let i = 0; i < event.results.length; i++) {
            currentTranscript += event.results[i][0].transcript + ' ';
          }
          setTranscript(currentTranscript.trim());
        };

        recognition.onerror = (event: any) => {
          console.warn('Speech recognition event:', event.error);
          if (event.error !== 'no-speech') {
            setRecError(`Micrófono: ${event.error}`);
          }
        };

        recognition.onend = () => {
          setIsRecording(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

  // Timer for recording
  useEffect(() => {
    let interval: any = null;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingSeconds(sec => sec + 1);
      }, 1000);
    } else {
      setRecordingSeconds(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  // Reset when day or level changes
  useEffect(() => {
    stopSpeaking();
    setIsPlayingModel(false);
    setIsRecording(false);
    setTranscript('');
    setIsEditingTranscript(false);
    setHasCompleted(false);
    setShowComparison(false);
    setRecError(null);
  }, [selectedDay, level.levelNumber]);

  const handleStartRecording = () => {
    setRecError(null);
    setTranscript('');
    setShowComparison(false);

    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
        setIsRecording(true);
      } catch (err: any) {
        console.warn('Error starting speech recognition:', err);
        setIsRecording(true);
      }
    } else {
      setIsRecording(true);
    }
  };

  const handleStopRecording = () => {
    if (recognitionRef.current && isRecording) {
      try {
        recognitionRef.current.stop();
      } catch (err) {
        // Ignored
      }
    }
    setIsRecording(false);
    setShowComparison(true);
  };

  const handlePlayModel = () => {
    if (isPlayingModel) {
      stopSpeaking();
      setIsPlayingModel(false);
      return;
    }

    setIsPlayingModel(true);
    speakBritishText(practice.speaking.modelResponse, {
      rate: practice.recommendedAudioRate || audioRate || 0.95,
      isRadio: true,
      onEnd: () => setIsPlayingModel(false)
    });
  };

  const handleResetRecording = () => {
    setTranscript('');
    setShowComparison(false);
    setIsRecording(false);
    setIsEditingTranscript(false);
    stopSpeaking();
    setIsPlayingModel(false);
  };

  const comparisonResult: SpeechComparisonResult | null = transcript.trim()
    ? compareSpeechToModel(transcript, practice.speaking.modelResponse, practice.speaking.requiredProwords)
    : null;

  const handleCompleteTask = () => {
    setHasCompleted(true);
    const score = comparisonResult ? comparisonResult.similarityScore : 85;
    onRecordScore(`day-${selectedDay}-speaking`, score);

    try {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
    } catch {
      // Ignored
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="space-y-6">
      {/* Daily Header with Day Navigation & Pedagogical Briefing */}
      <DailyOperationalHeader
        practice={practice}
        onSelectDay={onSelectDay}
        onOpenDaySelector={onOpenDaySelector}
        audioRate={audioRate}
      />

      {/* Speaking Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Briefing Scenario & Proword Guidelines */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#141d0e]/95 border border-[#2e401d] rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#233116]">
              <div className="flex items-center space-x-2">
                <Radio className="w-4 h-4 text-[#7ea830]" />
                <h4 className="font-tactical font-bold text-sm text-[#f2f7ec]">
                  Briefing Oral de Radiotelefonía
                </h4>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#0c1208] border border-[#1e2a14] text-[11px] font-mono text-[#b8df47]">
                Duración: {practice.speaking.recommendedDuration}
              </span>
            </div>

            {/* Title */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#7ea830] uppercase font-bold">
                Misión Oral del Día {selectedDay}
              </span>
              <h3 className="text-base font-bold text-[#f2f7ec] font-tactical">
                {practice.speaking.title}
              </h3>
            </div>

            {/* Scenario */}
            <div className="p-3.5 rounded-xl bg-[#0c1208] border border-[#233116] text-xs text-[#cadbb8] leading-relaxed">
              <span className="font-bold text-[#b8df47] block mb-1">Escenario Operacional:</span>
              {practice.speaking.scenario}
            </div>

            {/* Prowords & Pronunciation Tips */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#7ea830] uppercase font-bold">
                Prowords y Reglas de Pronunciación:
              </span>
              <div className="space-y-1.5">
                {practice.speaking.pronunciationTips.map((tip, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-[#0e160a] border border-[#1d2713] text-xs text-[#cadbb8] flex items-start space-x-2">
                    <span className="text-[#7ea830] font-bold">•</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phonetic Target Note */}
            <div className="p-2.5 rounded-lg bg-[#16200f] border border-[#2d3e1b] text-xs font-mono text-[#b8df47]">
              {practice.speaking.phoneticTargetNotes}
            </div>
          </div>
        </div>

        {/* Right Column: Microphone Recording & Model Response */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#141d0e]/95 border border-[#2e401d] rounded-2xl p-5 shadow-xl space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-[#233116]">
              <span className="text-xs font-mono font-bold text-[#cadbb8] uppercase">
                CONSOLA DE TRANSMISIÓN ORAL (DÍA {selectedDay})
              </span>
              {isRecording && (
                <div className="flex items-center space-x-2 px-2.5 py-0.5 rounded bg-red-950 border border-red-700 text-red-300 text-xs font-mono animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span>REC {formatTime(recordingSeconds)}</span>
                </div>
              )}
            </div>

            {/* Recording Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {!isRecording ? (
                <button
                  onClick={handleStartRecording}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#435e23] hover:bg-[#52722b] text-[#f2f7ec] font-bold text-xs font-tactical shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2 border border-[#6b8b3e]"
                >
                  <Mic className="w-4 h-4" />
                  <span>Iniciar Grabación de Transmisión</span>
                </button>
              ) : (
                <button
                  onClick={handleStopRecording}
                  className="flex-1 py-3 px-4 rounded-xl bg-red-700 hover:bg-red-600 text-white font-bold text-xs font-tactical shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2 animate-pulse"
                >
                  <MicOff className="w-4 h-4" />
                  <span>Finalizar y Procesar Audio ({formatTime(recordingSeconds)})</span>
                </button>
              )}

              {/* Model Audio Playback Button */}
              <button
                onClick={handlePlayModel}
                className={`py-3 px-4 rounded-xl text-xs font-tactical font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                  isPlayingModel
                    ? 'bg-amber-600 hover:bg-amber-500 text-white'
                    : 'bg-[#1e2a14] hover:bg-[#28391b] text-[#cadbb8] border border-[#374c22]'
                }`}
              >
                {isPlayingModel ? <Square className="w-4 h-4 fill-current" /> : <Volume2 className="w-4 h-4" />}
                <span>{isPlayingModel ? 'Pausar' : 'Escuchar Modelo Británico'}</span>
              </button>
            </div>

            {/* Live Transcript Box */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#7ea830] uppercase font-bold">
                  Transcripción de tu Transmisión:
                </span>
                {transcript && !isRecording && (
                  <button
                    onClick={() => setIsEditingTranscript(!isEditingTranscript)}
                    className="text-[10px] font-mono text-[#8ea375] hover:text-[#b8df47] flex items-center space-x-1 cursor-pointer"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>{isEditingTranscript ? 'Bloquear' : 'Ajustar texto si hubo ruido'}</span>
                  </button>
                )}
              </div>

              {isEditingTranscript ? (
                <textarea
                  value={transcript}
                  onChange={e => setTranscript(e.target.value)}
                  rows={4}
                  className="w-full p-3 rounded-xl bg-[#0c1208] border border-[#7ea830] text-xs font-mono text-[#e3f4b8] outline-none"
                />
              ) : (
                <div className="p-3.5 rounded-xl bg-[#0c1208] border border-[#233116] min-h-[70px] text-xs font-mono text-[#cadbb8] leading-relaxed">
                  {transcript || (
                    <span className="text-[#4b5d3a] italic">
                      {isRecording 
                        ? 'Habla con claridad en inglés hacia tu micrófono...' 
                        : 'Presiona "Iniciar Grabación" para emitir el mensaje por radio.'}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Speech Comparison Card against official model */}
            {showComparison && transcript.trim() && (
              <SpeechComparisonCard
                comparison={compareSpeechToModel(
                  transcript,
                  practice.speaking.modelResponse,
                  practice.speaking.requiredProwords
                )}
                userTranscript={transcript}
                modelResponse={practice.speaking.modelResponse}
                scenarioTitle={practice.speaking.title}
                levelNumber={level.levelNumber}
                onResetRecording={handleResetRecording}
              />
            )}

            {/* Model Response Box */}
            <div className="p-4 rounded-xl bg-[#0c1208] border border-[#233116] space-y-2">
              <span className="text-[10px] font-mono text-[#7ea830] uppercase font-bold block">
                Respuesta Modelo Oficial (STANAG 6001):
              </span>
              <div className="text-xs font-mono text-[#b8df47] bg-[#10170a] p-3 rounded-lg border border-[#1b2512] leading-relaxed">
                {practice.speaking.modelResponse}
              </div>
            </div>

            {/* Complete Task Button */}
            <div className="pt-2">
              <button
                onClick={handleCompleteTask}
                className="w-full py-2.5 rounded-xl bg-[#435e23] hover:bg-[#52722b] text-[#f2f7ec] font-bold text-xs font-tactical shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2 border border-[#6b8b3e]"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Registrar Práctica Oral Completada (Día {selectedDay})</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
