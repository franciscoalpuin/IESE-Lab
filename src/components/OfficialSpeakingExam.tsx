import React, { useState, useEffect, useRef } from 'react';
import { SPEAKING_EXAM_MODELS, SpeakingExamModel } from '../data/speakingExamModels';
import { speakBritishText, stopSpeaking } from '../utils/audio';
import { compareSpeechToModel } from '../utils/speechComparison';
import { SpeechComparisonCard } from './SpeechComparisonCard';
import {
  Clock,
  Mic,
  MicOff,
  Volume2,
  Square,
  Play,
  CheckCircle,
  RotateCcw,
  Users,
  User,
  ShieldCheck,
  Award,
  Sparkles,
  Info,
  ChevronRight,
  MessageSquare,
  Compass,
  FileText,
  AlertCircle,
  Layers,
  MapPin,
  Calendar,
  CloudSun,
  Coins,
  Smile,
  Umbrella,
  Camera,
  BookOpen,
  Backpack,
  Map,
  Radio,
  Sliders,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface OfficialSpeakingExamProps {
  levelNumber: number;
  audioRate?: number;
  onRecordScore: (exerciseId: string, scorePercentage: number) => void;
}

export const OfficialSpeakingExam: React.FC<OfficialSpeakingExamProps> = ({
  levelNumber,
  audioRate = 0.95,
  onRecordScore
}) => {
  const model: SpeakingExamModel = SPEAKING_EXAM_MODELS[levelNumber] || SPEAKING_EXAM_MODELS[1];

  // Control number & student role
  const [controlNumber, setControlNumber] = useState(`EA-IESE-SPK-N${model.levelRoman}-2026-084`);
  const [selectedRole, setSelectedRole] = useState<'A' | 'B' | 'Both'>('A');
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  // Timer
  const [timerSeconds, setTimerSeconds] = useState(model.timeAllowedMinutes * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Audio Playback
  const [playingAudioKey, setPlayingAudioKey] = useState<string | null>(null);

  // Speech Recognition
  const [isRecording, setIsRecording] = useState(false);
  const [activeRecordingKey, setActiveRecordingKey] = useState<string | null>(null);
  const activeRecordingKeyRef = useRef<string | null>(null);
  const [transcripts, setTranscripts] = useState<Record<string, string>>({});
  const recognitionRef = useRef<any>(null);

  // Rubric Scores (5 criteria x 4 pts = 20 pts)
  const [rubricScores, setRubricScores] = useState<number[]>([4, 4, 4, 4, 4]);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);

  // Mind map selected node for Levels 5 & 6
  const [selectedMindMapNode, setSelectedMindMapNode] = useState<string>(() => {
    return model.part3Interaction.mindMapOptions?.branches[0]?.id || 'destination';
  });

  useEffect(() => {
    if (model.part3Interaction.mindMapOptions?.branches?.length) {
      setSelectedMindMapNode(model.part3Interaction.mindMapOptions.branches[0].id);
    }
  }, [model.levelNumber]);

  // Selected items for Level 4 simulation
  const [selectedItemsL4, setSelectedItemsL4] = useState<string[]>(['coat', 'umbrella', 'backpack']);

  // Monologue Model Response reveal
  const [showMonologueModel, setShowMonologueModel] = useState(false);

  // Dialogue active turn in Part 3
  const [activeDialogueIndex, setActiveDialogueIndex] = useState<number>(0);

  // Timer countdown
  useEffect(() => {
    setTimerSeconds(model.timeAllowedMinutes * 60);
    setIsTimerRunning(false);
    stopSpeaking();
    setScoreSubmitted(false);
  }, [levelNumber, model.timeAllowedMinutes]);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTimerRunning) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  // Speech Recognition Setup
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recog = new SpeechRecognition();
        recog.continuous = true;
        recog.interimResults = true;
        recog.lang = 'en-GB';

        recog.onresult = (event: any) => {
          let str = '';
          for (let i = 0; i < event.results.length; i++) {
            str += event.results[i][0].transcript + ' ';
          }
          const currentKey = activeRecordingKeyRef.current;
          if (currentKey) {
            setTranscripts(prev => ({ ...prev, [currentKey]: str.trim() }));
          }
        };

        recog.onerror = () => {
          setIsRecording(false);
          setActiveRecordingKey(null);
          activeRecordingKeyRef.current = null;
        };

        recog.onend = () => {
          setIsRecording(false);
          setActiveRecordingKey(null);
          activeRecordingKeyRef.current = null;
        };

        recognitionRef.current = recog;
      }
    }
    return () => {
      stopSpeaking();
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  // Timer helpers
  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayVoice = (key: string, text: string) => {
    if (playingAudioKey === key) {
      stopSpeaking();
      setPlayingAudioKey(null);
      return;
    }
    stopSpeaking();
    setPlayingAudioKey(key);
    speakBritishText(text, {
      rate: 0.95,
      onEnd: () => setPlayingAudioKey(null)
    });
  };

  const handleToggleRecord = (key: string) => {
    if (!recognitionRef.current) return;

    if (isRecording && activeRecordingKey === key) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
      setIsRecording(false);
      setActiveRecordingKey(null);
      activeRecordingKeyRef.current = null;
    } else {
      stopSpeaking();
      setPlayingAudioKey(null);
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
      activeRecordingKeyRef.current = key;
      setActiveRecordingKey(key);
      try {
        recognitionRef.current.start();
        setIsRecording(true);
      } catch {
        // Already active
      }
    }
  };

  // Toggle item selection for Level 4
  const toggleItemL4 = (id: string) => {
    setSelectedItemsL4(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  // Rubric calculation
  const totalScorePoints = rubricScores.reduce((acc, curr) => acc + curr, 0);
  const totalScorePercent = Math.round((totalScorePoints / 20) * 100);

  const handleSaveEvaluationScore = () => {
    onRecordScore(`official-speaking-l${model.levelNumber}`, totalScorePercent);
    setScoreSubmitted(true);
    try {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
  };

  // Filter questions based on selected role
  const displayedQuestions = [
    ...(selectedRole === 'A' || selectedRole === 'Both' ? model.part1Interview.questionsA : []),
    ...(selectedRole === 'B' || selectedRole === 'Both' ? model.part1Interview.questionsB : [])
  ];

  // Monologue tasks
  const displayedMonologueTasks = model.part2Monologue.tasks.filter(t =>
    selectedRole === 'Both' ? true : t.student === selectedRole
  );

  return (
    <div className="space-y-6">
      {/* =================================================================== */}
      {/* 1. MILITARY EXAM HEADER                                            */}
      {/* =================================================================== */}
      <div className="bg-[#151f10] border-2 border-[#4b6630] rounded-2xl p-5 shadow-2xl space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#344722] pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2a3c1a] to-[#121a0c] border border-[#7ea830] flex items-center justify-center text-[#c5f057] shadow-inner font-bold text-lg font-tactical">
              IESE
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[11px] uppercase tracking-widest text-[#9ebb73] font-tactical font-semibold">
                  Escuela de Idiomas del Ejército • IESE
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#293d18] text-[#bbf348] border border-[#557827]">
                  STANAG 6001
                </span>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-[#f0f9e8] tracking-wide font-tactical">
                Modelo Oficial de Examen – Nivel {model.levelRoman}
              </h1>
              <p className="text-xs text-[#9eb586]">
                {model.partTitle} • <strong>LEVEL {model.levelNumber} – PART 5: SPEAKING</strong> (Interlocutor & Assessor)
              </p>
            </div>
          </div>

          {/* Right: Points badge & Control Number */}
          <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-3">
            <div className="flex items-center space-x-2 bg-[#0d1509] px-3 py-1.5 rounded-lg border border-[#3b5025]">
              <span className="text-[10px] text-[#8ea375] font-tactical uppercase">Nro. De Control:</span>
              <input
                type="text"
                value={controlNumber}
                onChange={(e) => setControlNumber(e.target.value)}
                className="bg-transparent text-xs text-[#d8f58b] font-mono font-bold focus:outline-none w-36 border-b border-[#5e7e34]"
              />
            </div>
            <div className="flex items-center space-x-2">
              <div className="border border-[#7ea830] bg-[#233514] px-4 py-1.5 rounded-lg text-center shadow-md">
                <span className="text-[10px] uppercase text-[#a9cf67] block font-tactical">Puntaje Oficial</span>
                <span className="text-lg font-black text-[#e4ff88] font-tactical">20 pts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action toolbar: Role selection, Countdown timer, Step Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          {/* Role selector */}
          <div className="flex items-center space-x-1 bg-[#0f170b] p-1 rounded-xl border border-[#2b3c1b]">
            <span className="text-[11px] font-tactical text-[#8aa56e] px-2 flex items-center space-x-1">
              <User className="w-3.5 h-3.5" />
              <span>Rol:</span>
            </span>
            {(['A', 'B', 'Both'] as const).map(role => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold font-tactical transition-all cursor-pointer ${
                  selectedRole === role
                    ? 'bg-[#374f20] text-[#ddff73] border border-[#7ea830] shadow'
                    : 'text-[#8da771] hover:text-[#c4e398] hover:bg-[#182312]'
                }`}
              >
                {role === 'Both' ? 'Ambos (A & B)' : `Student ${role}`}
              </button>
            ))}
          </div>

          {/* Exam Timer */}
          <div className="flex items-center space-x-2 bg-[#0c1408] border border-[#3b5027] px-3 py-1.5 rounded-xl shadow-inner">
            <Clock className={`w-4 h-4 ${timerSeconds < 180 ? 'text-amber-400 animate-pulse' : 'text-[#a2cb54]'}`} />
            <span className="text-xs text-[#8aa56e] font-tactical hidden sm:inline">Tiempo oficial:</span>
            <span className={`text-base font-mono font-bold tracking-wider ${timerSeconds < 180 ? 'text-amber-400' : 'text-[#ddff75]'}`}>
              {formatTime(timerSeconds)}
            </span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="text-[10px] uppercase tracking-wider font-tactical px-2 py-0.5 rounded bg-[#2b3d1b] hover:bg-[#3d5626] text-[#ccf56f] border border-[#527329] cursor-pointer"
            >
              {isTimerRunning ? 'Pausar' : 'Iniciar'}
            </button>
            <button
              onClick={() => {
                setIsTimerRunning(false);
                setTimerSeconds(model.timeAllowedMinutes * 60);
              }}
              title="Reiniciar cronómetro"
              className="p-1 text-[#839e65] hover:text-[#d3f587] cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Step tabs */}
          <div className="flex items-center space-x-1 bg-[#0f170b] p-1 rounded-xl border border-[#2b3c1b]">
            <button
              onClick={() => { setActiveStep(1); stopSpeaking(); }}
              className={`px-3 py-1 rounded-lg text-xs font-tactical font-semibold cursor-pointer transition-all ${
                activeStep === 1
                  ? 'bg-[#2b4017] text-[#ddff73] border border-[#6b922a]'
                  : 'text-[#86a16c] hover:text-[#c7e997]'
              }`}
            >
              1. Interview (3-5m)
            </button>
            <button
              onClick={() => { setActiveStep(2); stopSpeaking(); }}
              className={`px-3 py-1 rounded-lg text-xs font-tactical font-semibold cursor-pointer transition-all ${
                activeStep === 2
                  ? 'bg-[#2b4017] text-[#ddff73] border border-[#6b922a]'
                  : 'text-[#86a16c] hover:text-[#c7e997]'
              }`}
            >
              2. Monologue / Photo (5m)
            </button>
            <button
              onClick={() => { setActiveStep(3); stopSpeaking(); }}
              className={`px-3 py-1 rounded-lg text-xs font-tactical font-semibold cursor-pointer transition-all ${
                activeStep === 3
                  ? 'bg-[#2b4017] text-[#ddff73] border border-[#6b922a]'
                  : 'text-[#86a16c] hover:text-[#c7e997]'
              }`}
            >
              3. Interaction / Mind Map
            </button>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* STEP 1: GUIDED INTERVIEW                                           */}
      {/* =================================================================== */}
      {activeStep === 1 && (
        <div className="space-y-6">
          <div className="bg-[#141d0e]/95 border border-[#3b4e28] rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex items-start justify-between border-b border-[#2e401d] pb-3">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 text-[10px] font-tactical uppercase font-bold bg-[#293d18] text-[#b8df47] rounded border border-[#527328]">
                    Fase A • Guided Interview
                  </span>
                  <span className="text-xs text-[#8aa56f]">{model.part1Interview.duration}</span>
                </div>
                <h2 className="text-lg font-bold text-[#eef8e0] font-tactical mt-1">
                  {model.part1Interview.title}
                </h2>
                <p className="text-xs text-[#9eb786] mt-0.5">
                  {model.part1Interview.instructions}
                </p>
              </div>
              <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1 bg-[#10170a] rounded-lg border border-[#32451f] text-xs text-[#94b074]">
                <Users className="w-3.5 h-3.5 text-[#a8d356]" />
                <span>Interlocutor & Candidates</span>
              </div>
            </div>

            {/* Questions Container */}
            <div className="space-y-4 pt-2">
              {displayedQuestions.map((q, idx) => {
                const isPlaying = playingAudioKey === `q-${q.id}`;
                const isModelPlaying = playingAudioKey === `model-${q.id}`;
                const isRec = isRecording && activeRecordingKey === `rec-${q.id}`;
                const transcriptText = transcripts[`rec-${q.id}`];

                return (
                  <div
                    key={q.id}
                    className="bg-[#0e160a] border border-[#2c3d1b] rounded-xl p-4 shadow space-y-3 hover:border-[#48632c] transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-start space-x-2">
                        <span className="px-2 py-0.5 text-[10px] font-bold font-tactical rounded bg-[#223314] text-[#b4df4d] border border-[#435e23] shrink-0 mt-0.5">
                          Student {q.student} • Q{idx + 1}
                        </span>
                        <p className="text-sm font-semibold text-[#eef6e4]">
                          {q.question}
                        </p>
                      </div>

                      {/* Audio Examiner trigger & Record student */}
                      <div className="flex items-center space-x-2 shrink-0 self-end sm:self-auto">
                        <button
                          onClick={() => handlePlayVoice(`q-${q.id}`, q.audioPromptText)}
                          className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-tactical transition-all cursor-pointer ${
                            isPlaying
                              ? 'bg-amber-600/30 text-amber-300 border border-amber-500'
                              : 'bg-[#223315] hover:bg-[#31481e] text-[#c4eb6e] border border-[#4d6b2b]'
                          }`}
                        >
                          {isPlaying ? <Square className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                          <span>{isPlaying ? 'Detener' : 'Escuchar Examinador'}</span>
                        </button>

                        <button
                          onClick={() => handleToggleRecord(`rec-${q.id}`)}
                          className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-tactical transition-all cursor-pointer ${
                            isRec
                              ? 'bg-red-600/40 text-red-300 border border-red-500 animate-pulse'
                              : 'bg-[#1a2511] hover:bg-[#27381a] text-[#a5c777] border border-[#394f24]'
                          }`}
                        >
                          {isRec ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                          <span>{isRec ? 'Grabando...' : 'Grabar Respuesta'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Candidate Transcript Output if recorded */}
                    {transcriptText && (
                      <div className="space-y-2">
                        <div className="bg-[#121c0c] border border-[#394f24] rounded-lg p-2.5 text-xs text-[#cfec91]">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-[10px] text-[#7d9b5c] uppercase font-tactical font-bold flex items-center space-x-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#829961] inline-block" />
                              <span>Tu Transcripción Reconocida:</span>
                            </span>
                            <span className="text-[10px] text-[#6d8258] font-mono">
                              {transcriptText.split(' ').filter(Boolean).length} palabras
                            </span>
                          </div>
                          “{transcriptText}”
                        </div>

                        {/* Speech vs Model comparison */}
                        <SpeechComparisonCard
                          comparison={compareSpeechToModel(
                            transcriptText,
                            q.modelAnswer,
                            q.usefulVocabulary
                          )}
                          userTranscript={transcriptText}
                          modelResponse={q.modelAnswer}
                          audioRate={0.9}
                          onResetRecording={() => {
                            setTranscripts(prev => {
                              const copy = { ...prev };
                              delete copy[`rec-${q.id}`];
                              return copy;
                            });
                          }}
                        />
                      </div>
                    )}

                    {/* Model Answer Drawer */}
                    <div className="bg-[#151f11] border border-[#2b3a1c] rounded-lg p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-tactical font-bold text-[#8ba56d] flex items-center space-x-1">
                          <Sparkles className="w-3 h-3 text-[#afd752]" />
                          <span>Respuesta Modelo Oficial (STANAG Level {model.levelRoman})</span>
                        </span>
                        <button
                          onClick={() => handlePlayVoice(`model-${q.id}`, q.modelAnswer)}
                          className="text-[11px] text-[#afd752] hover:text-[#d3f582] flex items-center space-x-1 font-tactical cursor-pointer"
                        >
                          {isModelPlaying ? <Square className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                          <span>{isModelPlaying ? 'Parar' : 'Escuchar Modelo'}</span>
                        </button>
                      </div>
                      <p className="text-xs text-[#cce5a6] leading-relaxed italic">
                        "{q.modelAnswer}"
                      </p>

                      {/* Vocabulary Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {q.usefulVocabulary.map((v, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[10px] font-tactical bg-[#1c2914] text-[#a3c965] border border-[#3b5226]"
                          >
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next step button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => { setActiveStep(2); stopSpeaking(); }}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold font-tactical bg-[#324b1a] hover:bg-[#436423] text-[#ddff78] border border-[#6b922a] shadow cursor-pointer transition-all"
              >
                <span>Avanzar a Paso 2 (Monologue / Photo)</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* STEP 2: MONOLOGUE / PHOTOGRAPH DESCRIPTION / LONG TURN             */}
      {/* =================================================================== */}
      {activeStep === 2 && (
        <div className="space-y-6">
          <div className="bg-[#141d0e]/95 border border-[#3b4e28] rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex items-start justify-between border-b border-[#2e401d] pb-3">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 text-[10px] font-tactical uppercase font-bold bg-[#293d18] text-[#b8df47] rounded border border-[#527328]">
                    Fase B • Long Individual Turn
                  </span>
                  <span className="text-xs text-[#8aa56f]">{model.part2Monologue.duration}</span>
                </div>
                <h2 className="text-lg font-bold text-[#eef8e0] font-tactical mt-1">
                  {model.part2Monologue.title}
                </h2>
                <p className="text-xs text-[#9eb786] mt-0.5">
                  {model.part2Monologue.instructions}
                </p>
              </div>
              <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1 bg-[#10170a] rounded-lg border border-[#32451f] text-xs text-[#94b074]">
                <Clock className="w-3.5 h-3.5 text-[#a8d356]" />
                <span>3 - 4 min sin interrupciones</span>
              </div>
            </div>

            {/* Render Monologue Tasks */}
            <div className="grid grid-cols-1 gap-6 pt-2">
              {displayedMonologueTasks.map((task, idx) => {
                const isPlaying = playingAudioKey === `mono-${task.student}`;
                const isRec = isRecording && activeRecordingKey === `mono-rec-${task.student}`;
                const transcriptText = transcripts[`mono-rec-${task.student}`];

                return (
                  <div
                    key={idx}
                    className="bg-[#0e160a] border-2 border-[#364b22] rounded-xl p-5 shadow-lg space-y-4"
                  >
                    {/* Header of Task Card */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#283818] pb-3">
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-1 text-xs font-bold font-tactical bg-[#283d16] text-[#ccf85d] border border-[#5b802a] rounded-lg">
                          Candidate {task.student} Prompt Card
                        </span>
                        <h3 className="text-sm font-bold text-[#f0f8e5] font-tactical">
                          {task.cardTitle}
                        </h3>
                      </div>

                      {/* Monologue Audio controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handlePlayVoice(`mono-${task.student}`, task.modelResponse)}
                          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-tactical cursor-pointer transition-all ${
                            isPlaying
                              ? 'bg-amber-600/30 text-amber-300 border border-amber-500'
                              : 'bg-[#223414] hover:bg-[#314a1e] text-[#cbf46e] border border-[#4a6b28]'
                          }`}
                        >
                          {isPlaying ? <Square className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                          <span>{isPlaying ? 'Detener' : 'Escuchar Modelo Completo'}</span>
                        </button>

                        <button
                          onClick={() => handleToggleRecord(`mono-rec-${task.student}`)}
                          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-tactical cursor-pointer transition-all ${
                            isRec
                              ? 'bg-red-600/40 text-red-300 border border-red-500 animate-pulse'
                              : 'bg-[#182410] hover:bg-[#253719] text-[#a4c776] border border-[#384e24]'
                          }`}
                        >
                          {isRec ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                          <span>{isRec ? 'Grabando...' : 'Grabar Mi Monólogo'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Central Prompt */}
                    <div className="bg-[#141e0f] border border-[#3b5025] rounded-xl p-4">
                      <p className="text-sm font-semibold text-[#e1f5c6]">
                        {task.prompt}
                      </p>

                      {/* Visual items grid if present */}
                      {task.visualItems && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 mt-3 pt-3 border-t border-[#293a19]">
                          {task.visualItems.map((item, i) => (
                            <div
                              key={i}
                              className="bg-[#0b1307] border border-[#33461f] rounded-lg p-2.5 text-center flex flex-col items-center justify-center space-y-1 shadow-inner"
                            >
                              <div className="w-8 h-8 rounded-full bg-[#1e2d12] flex items-center justify-center text-[#c2ec68] font-bold text-xs">
                                #{i + 1}
                              </div>
                              <span className="text-[11px] font-tactical font-medium text-[#cce8a3]">
                                {item.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Bullet points guiding questions */}
                      <div className="mt-3 space-y-1.5">
                        <span className="text-[10px] uppercase tracking-wider text-[#86a269] font-tactical font-bold block">
                          Puntos Guía a Cubrir Obligatoriamente:
                        </span>
                        <ul className="space-y-1 text-xs text-[#bad79a]">
                          {task.bulletPoints.map((bp, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <span className="text-[#a5d24e] font-bold">•</span>
                              <span>{bp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Candidate transcript live & comparison */}
                    {transcriptText && (
                      <div className="space-y-3">
                        <div className="bg-[#121c0c] border border-[#374e22] rounded-xl p-3 text-xs text-[#e2f0d4] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-[#a7bd84] uppercase font-tactical font-bold flex items-center space-x-1.5">
                              <span className="w-2 h-2 rounded-full bg-[#829961] inline-block" />
                              <span>Transcripción de tu Monólogo:</span>
                            </span>
                            <span className="text-[10px] text-[#6d8258] font-mono">
                              {transcriptText.split(' ').filter(Boolean).length} palabras
                            </span>
                          </div>
                          <p className="leading-relaxed font-mono pt-1 text-[#d8e8c8]">“{transcriptText}”</p>
                        </div>

                        {/* Automatic Speech vs Model Comparison Card */}
                        <SpeechComparisonCard
                          comparison={compareSpeechToModel(
                            transcriptText,
                            task.modelResponse,
                            task.usefulPhrases.slice(0, 4)
                          )}
                          userTranscript={transcriptText}
                          modelResponse={task.modelResponse}
                          audioRate={0.9}
                          onResetRecording={() => {
                            setTranscripts(prev => {
                              const copy = { ...prev };
                              delete copy[`mono-rec-${task.student}`];
                              return copy;
                            });
                          }}
                        />
                      </div>
                    )}

                    {/* Useful Phrases */}
                    <div className="space-y-2">
                      <span className="text-[11px] uppercase tracking-wider text-[#8da86e] font-tactical font-bold block">
                        Conectores Tácticos y Fórmulas Recomendadas:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {task.usefulPhrases.map((phrase, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs rounded-lg bg-[#182412] text-[#c6ed74] border border-[#384f23] font-tactical"
                          >
                            {phrase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Toggle Model Response */}
                    <div className="border-t border-[#263717] pt-3">
                      <button
                        onClick={() => setShowMonologueModel(!showMonologueModel)}
                        className="text-xs font-tactical font-semibold text-[#bce75d] hover:text-[#dcf88a] flex items-center space-x-1.5 cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{showMonologueModel ? 'Ocultar Transcripción de Referencia' : 'Ver Transcripción Modelo de Referencia'}</span>
                      </button>

                      {showMonologueModel && (
                        <div className="mt-2.5 p-4 bg-[#11190c] border border-[#374c24] rounded-xl text-xs text-[#cfeaa4] leading-relaxed space-y-2">
                          <p className="italic">"{task.modelResponse}"</p>
                          <div className="text-[11px] text-[#88a36b] pt-1 border-t border-[#253516]">
                            * Este modelo cumple con la extensión y riqueza léxica requerida para la calificación máxima STANAG 6001.
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next step button */}
            <div className="pt-2 flex justify-between">
              <button
                onClick={() => { setActiveStep(1); stopSpeaking(); }}
                className="px-4 py-2 rounded-xl text-xs font-bold font-tactical bg-[#182312] text-[#9db784] border border-[#334620] hover:bg-[#233319] cursor-pointer"
              >
                ← Volver a Entrevista
              </button>
              <button
                onClick={() => { setActiveStep(3); stopSpeaking(); }}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold font-tactical bg-[#324b1a] hover:bg-[#436423] text-[#ddff78] border border-[#6b922a] shadow cursor-pointer transition-all"
              >
                <span>Avanzar a Interacción / Roleplay</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* STEP 3: INTERACTION / ROLEPLAY / MIND MAP                           */}
      {/* =================================================================== */}
      {activeStep === 3 && (
        <div className="space-y-6">
          <div className="bg-[#141d0e]/95 border border-[#3b4e28] rounded-2xl p-6 shadow-xl space-y-5">
            <div className="flex items-start justify-between border-b border-[#2e401d] pb-3">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 text-[10px] font-tactical uppercase font-bold bg-[#293d18] text-[#b8df47] rounded border border-[#527328]">
                    Fase C • {model.part3Interaction.type === 'roleplay' ? 'Role Play' : model.part3Interaction.type === 'collaborative_task' ? 'Collaborative Task' : 'Simulated Situation'}
                  </span>
                  <span className="text-xs text-[#8aa56f]">{model.part3Interaction.durationMinutes} minutos</span>
                </div>
                <h2 className="text-lg font-bold text-[#eef8e0] font-tactical mt-1">
                  {model.part3Interaction.title}
                </h2>
                <p className="text-xs text-[#9eb786] mt-0.5">
                  {model.part3Interaction.scenarioDescription}
                </p>
              </div>
              <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1 bg-[#10170a] rounded-lg border border-[#32451f] text-xs text-[#94b074]">
                <Users className="w-3.5 h-3.5 text-[#a8d356]" />
                <span>Interacción entre pares</span>
              </div>
            </div>

            {/* Sub-layout: Prompt Cards for Student A & B */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Student A Role */}
              <div className="bg-[#0e160a] border border-[#3b5025] rounded-xl p-4 space-y-3">
                <div className="flex items-center space-x-2 border-b border-[#273718] pb-2">
                  <span className="px-2 py-0.5 text-xs font-bold font-tactical rounded bg-[#243714] text-[#c3ee5f] border border-[#496626]">
                    Student A
                  </span>
                  <h4 className="text-sm font-bold text-[#eaf5dd] font-tactical">
                    {model.part3Interaction.studentARole.title}
                  </h4>
                </div>
                <div className="space-y-1.5 text-xs text-[#b0cca0]">
                  <span className="text-[10px] uppercase font-tactical font-bold text-[#7d9b5c] block">
                    Instrucciones:
                  </span>
                  <ul className="space-y-1">
                    {model.part3Interaction.studentARole.instructions.map((inst, i) => (
                      <li key={i} className="flex items-start space-x-1.5">
                        <span className="text-[#a4d24f] font-bold">›</span>
                        <span>{inst}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#131d0d] rounded-lg p-2.5 border border-[#2b3b1c] space-y-1.5">
                  <span className="text-[10px] uppercase font-tactical font-bold text-[#8ba56d] block">
                    Useful Language:
                  </span>
                  <div className="space-y-1 text-xs text-[#ceeaa0] italic">
                    {model.part3Interaction.studentARole.usefulLanguage.map((lang, i) => (
                      <div key={i}>• "{lang}"</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Student B Role */}
              <div className="bg-[#0e160a] border border-[#3b5025] rounded-xl p-4 space-y-3">
                <div className="flex items-center space-x-2 border-b border-[#273718] pb-2">
                  <span className="px-2 py-0.5 text-xs font-bold font-tactical rounded bg-[#243714] text-[#c3ee5f] border border-[#496626]">
                    Student B
                  </span>
                  <h4 className="text-sm font-bold text-[#eaf5dd] font-tactical">
                    {model.part3Interaction.studentBRole.title}
                  </h4>
                </div>
                <div className="space-y-1.5 text-xs text-[#b0cca0]">
                  <span className="text-[10px] uppercase font-tactical font-bold text-[#7d9b5c] block">
                    Instrucciones:
                  </span>
                  <ul className="space-y-1">
                    {model.part3Interaction.studentBRole.instructions.map((inst, i) => (
                      <li key={i} className="flex items-start space-x-1.5">
                        <span className="text-[#a4d24f] font-bold">›</span>
                        <span>{inst}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#131d0d] rounded-lg p-2.5 border border-[#2b3b1c] space-y-1.5">
                  <span className="text-[10px] uppercase font-tactical font-bold text-[#8ba56d] block">
                    Useful Language:
                  </span>
                  <div className="space-y-1 text-xs text-[#ceeaa0] italic">
                    {model.part3Interaction.studentBRole.usefulLanguage.map((lang, i) => (
                      <div key={i}>• "{lang}"</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SPECIAL COMPONENT FOR LEVEL 4: 8-Item Visual Selection Board */}
            {model.part3Interaction.itemImages && (
              <div className="bg-[#0f170b] border border-[#334620] rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-[#263717] pb-2">
                  <span className="text-xs font-bold font-tactical text-[#d2f778] uppercase flex items-center space-x-1.5">
                    <Layers className="w-4 h-4 text-[#a7d452]" />
                    <span>Elementos Visuales para Discutir (6 Meses en Inglaterra)</span>
                  </span>
                  <span className="text-[11px] text-[#8ea870]">
                    Seleccionados para consenso: {selectedItemsL4.length} de 8
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {model.part3Interaction.itemImages.map(item => {
                    const isSelected = selectedItemsL4.includes(item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleItemL4(item.id)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                          isSelected
                            ? 'bg-[#223514] border-[#7ba72f] shadow-md ring-1 ring-[#7ba72f]/40'
                            : 'bg-[#121b0d] border-[#29391a] hover:bg-[#1a2614]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-tactical uppercase px-1.5 py-0.5 rounded bg-[#0b1207] text-[#9cb97d]">
                            {item.category}
                          </span>
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                            isSelected ? 'bg-[#7ba72f] border-[#9fd342] text-black' : 'border-[#43592a]'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-[#e4f6cb] font-tactical">{item.name}</h5>
                          <p className="text-[11px] text-[#94ad78] mt-1 leading-snug">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* SPECIAL COMPONENT FOR LEVELS 5 & 6: Interactive Mind Map Visualizer */}
            {model.part3Interaction.mindMapOptions && (
              <div className="bg-[#0b1307] border-2 border-[#3c5324] rounded-2xl p-5 shadow-2xl space-y-4">
                <div className="text-center space-y-1">
                  <span className="text-[10px] font-tactical font-bold uppercase tracking-wider text-[#97bb6e] bg-[#1a2712] px-3 py-1 rounded-full border border-[#435d27]">
                    Diagrama Oficial de Discusión • STANAG 6001 Level {model.levelRoman}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-[#e8f8ce] font-tactical">
                    "{model.part3Interaction.mindMapOptions.centralPrompt}"
                  </h3>
                </div>

                {/* The 5 Connected Nodes */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
                  {model.part3Interaction.mindMapOptions.branches.map(branch => {
                    const isSelected = selectedMindMapNode === branch.id;
                    return (
                      <button
                        key={branch.id}
                        onClick={() => setSelectedMindMapNode(branch.id)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between space-y-2 ${
                          isSelected
                            ? 'bg-[#293d18] border-[#89ba34] shadow-lg ring-2 ring-[#89ba34]/50 scale-[1.03]'
                            : 'bg-[#131d0e] border-[#2f421d] hover:bg-[#1a2813]'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-full bg-[#1e2e13] border border-[#527428] flex items-center justify-center text-[#c8f26a]">
                          {(branch.id.includes('dest') || branch.id === 'destination') && <MapPin className="w-4 h-4" />}
                          {(branch.id.includes('budget')) && <Coins className="w-4 h-4" />}
                          {(branch.id.includes('act') || branch.id === 'activities') && <Smile className="w-4 h-4" />}
                          {(branch.id.includes('trans') || branch.id === 'transport') && <Compass className="w-4 h-4" />}
                          {(branch.id.includes('weath') || branch.id === 'weather') && <CloudSun className="w-4 h-4" />}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#e1f5c6] font-tactical block">
                            {branch.label}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Node Details Drawer */}
                {(() => {
                  const node = model.part3Interaction.mindMapOptions?.branches.find(b => b.id === selectedMindMapNode);
                  if (!node) return null;
                  return (
                    <div className="bg-[#121c0c] border border-[#3d5327] rounded-xl p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold font-tactical text-[#d2f778] uppercase flex items-center space-x-1.5">
                          <Sliders className="w-4 h-4 text-[#a7d452]" />
                          <span>Factor Clave: {node.label}</span>
                        </h4>
                        <span className="text-[10px] text-[#86a566]">Criterio de Evaluación</span>
                      </div>
                      <p className="text-xs text-[#c4e09f] leading-relaxed">
                        {node.details}
                      </p>
                      <div className="space-y-1 pt-1 border-t border-[#273819]">
                        <span className="text-[10px] font-tactical text-[#8aa86a] uppercase font-bold block">
                          Argumentos Tácticos Sugeridos:
                        </span>
                        {node.suggestedArguments.map((arg, i) => (
                          <p key={i} className="text-xs text-[#d8f5a2] italic">
                            › “{arg}”
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Interactive Turn-by-Turn Dialogue Simulator */}
            <div className="bg-[#0e160a] border border-[#32451f] rounded-xl p-4 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#253617] pb-2">
                <span className="text-xs font-bold font-tactical text-[#d0f675] uppercase flex items-center space-x-1.5">
                  <MessageSquare className="w-4 h-4 text-[#a2cb52]" />
                  <span>Simulador de Diálogo Modelo (Interacción Fluida)</span>
                </span>
                <span className="text-[11px] text-[#8ea670]">
                  Turno {activeDialogueIndex + 1} de {model.part3Interaction.sampleDialogue.length}
                </span>
              </div>

              {/* Dialogue Transcript Stream */}
              <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                {model.part3Interaction.sampleDialogue.map((turn, i) => {
                  const isTurnActive = activeDialogueIndex === i;
                  const isTurnPlaying = playingAudioKey === `turn-${i}`;
                  return (
                    <React.Fragment key={i}>
                      <div
                        onClick={() => setActiveDialogueIndex(i)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                          isTurnActive
                            ? 'bg-[#1e2e13] border-[#6b942a] shadow'
                            : 'bg-[#11190c] border-[#263717] opacity-80 hover:opacity-100'
                        }`}
                      >
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-tactical ${
                            turn.role === 'studentA'
                              ? 'bg-[#293d18] text-[#c7f465] border border-[#527429]'
                              : 'bg-[#1b2f33] text-[#71e8df] border border-[#2b595e]'
                          }`}>
                            {turn.speaker}
                          </span>
                        </div>
                        <p className="text-xs text-[#e1f5c6] leading-relaxed">
                          "{turn.text}"
                        </p>
                      </div>

                      <div className="flex items-center space-x-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggleRecord(`dialogue-rec-${i}`);
                          }}
                          className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                            isRecording && activeRecordingKey === `dialogue-rec-${i}`
                              ? 'bg-red-600/40 text-red-300 border-red-500 animate-pulse'
                              : 'bg-[#182611] hover:bg-[#25391a] text-[#a7bd84] border-[#384e24]'
                          }`}
                          title="Grabar réplica para este turno"
                        >
                          {isRecording && activeRecordingKey === `dialogue-rec-${i}` ? (
                            <MicOff className="w-3.5 h-3.5" />
                          ) : (
                            <Mic className="w-3.5 h-3.5" />
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlayVoice(`turn-${i}`, turn.text);
                          }}
                          className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                            isTurnPlaying
                              ? 'bg-amber-600/40 text-amber-300 border-amber-500'
                              : 'bg-[#223315] hover:bg-[#324b1f] text-[#c2ec68] border-[#466526]'
                          }`}
                          title="Escuchar locución de referencia"
                        >
                          {isTurnPlaying ? <Square className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    {/* Transcripción y Comparativa para este turno de diálogo */}
                    {transcripts[`dialogue-rec-${i}`] && (
                      <div className="mt-2 mb-1">
                        <SpeechComparisonCard
                          comparison={compareSpeechToModel(
                            transcripts[`dialogue-rec-${i}`],
                            turn.text
                          )}
                          userTranscript={transcripts[`dialogue-rec-${i}`]}
                          modelResponse={turn.text}
                          audioRate={0.9}
                          onResetRecording={() => {
                            setTranscripts(prev => {
                              const copy = { ...prev };
                              delete copy[`dialogue-rec-${i}`];
                              return copy;
                            });
                          }}
                        />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
              </div>

              {/* Consensus Prompt */}
              {model.part3Interaction.consensusPrompt && (
                <div className="bg-[#15210e] border border-[#3b5224] rounded-lg p-3 text-xs text-[#c9eb92] flex items-center space-x-2">
                  <Award className="w-4 h-4 text-[#a9d752] shrink-0" />
                  <span>
                    <strong>Objetivo de Consenso:</strong> {model.part3Interaction.consensusPrompt}
                  </span>
                </div>
              )}
            </div>

            {/* Back button */}
            <div className="pt-2 flex justify-start">
              <button
                onClick={() => { setActiveStep(2); stopSpeaking(); }}
                className="px-4 py-2 rounded-xl text-xs font-bold font-tactical bg-[#182312] text-[#9db784] border border-[#334620] hover:bg-[#233319] cursor-pointer"
              >
                ← Volver a Monólogo / Fotos
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 4. STANAG 6001 OFFICIAL RUBRIC & EVALUATION SCOREBOARD               */}
      {/* =================================================================== */}
      <div className="bg-[#131d0e] border-2 border-[#415928] rounded-2xl p-6 shadow-2xl space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2d3f1c] pb-3">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-[#b2dd4f]" />
            <div>
              <h3 className="text-base font-bold text-[#eff8e3] font-tactical">
                Rúbrica de Evaluación STANAG 6001 (Speaking Component: 20 pts)
              </h3>
              <p className="text-xs text-[#9bb382]">
                5 descriptores analíticos oficiales de la IESE (Escala 0 a 4 puntos cada uno)
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 self-end sm:self-auto">
            <div className="text-right">
              <span className="text-[10px] uppercase font-tactical text-[#8da670] block">Puntaje Total</span>
              <span className="text-xl font-black text-[#ddff73] font-tactical">
                {totalScorePoints} / 20 pts ({totalScorePercent}%)
              </span>
            </div>
          </div>
        </div>

        {/* 5 Descriptors Sliders / Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {model.stanagRubric.map((rubric, idx) => (
            <div
              key={idx}
              className="bg-[#0c1408] border border-[#2b3c1b] rounded-xl p-3.5 space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#e1f5c6] font-tactical">
                    {rubric.criterion}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#c7f465]">
                    {rubricScores[idx]} / {rubric.maxPoints} pts
                  </span>
                </div>
                <p className="text-[11px] text-[#93ae77] mt-1 leading-snug">
                  {rubric.description}
                </p>
              </div>

              {/* Point selector buttons (0 to 4) */}
              <div className="flex space-x-1 pt-2 border-t border-[#202d15]">
                {[0, 1, 2, 3, 4].map(pt => (
                  <button
                    key={pt}
                    onClick={() => {
                      const newScores = [...rubricScores];
                      newScores[idx] = pt;
                      setRubricScores(newScores);
                    }}
                    className={`flex-1 py-1 rounded text-xs font-tactical font-bold transition-all cursor-pointer ${
                      rubricScores[idx] === pt
                        ? 'bg-[#3b5422] text-[#ddff73] border border-[#7ba72f] shadow'
                        : 'bg-[#151f10] text-[#7d995c] hover:bg-[#202c17]'
                    }`}
                  >
                    {pt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Evaluation Submit action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <div className="text-xs text-[#9eb786] flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#a3d04e]" />
            <span>
              La calificación registrada actualizará tu promedio militar en el expediente de STANAG 6001.
            </span>
          </div>

          <button
            onClick={handleSaveEvaluationScore}
            disabled={scoreSubmitted}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold font-tactical uppercase tracking-wider transition-all shadow-lg cursor-pointer flex items-center justify-center space-x-2 ${
              scoreSubmitted
                ? 'bg-[#213115] text-[#90ba51] border border-[#486b25] cursor-default'
                : 'bg-gradient-to-r from-[#3e5e20] to-[#283e14] hover:from-[#4b7127] hover:to-[#314c18] text-[#ddff75] border border-[#7da830] shadow-[#7da830]/20'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>{scoreSubmitted ? '✓ Calificación Oficial Registrada' : 'Registrar Calificación Oficial (20 pts)'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
