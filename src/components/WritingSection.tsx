import React, { useState, useEffect } from 'react';
import { LevelSyllabus } from '../types';
import { 
  PenTool, 
  CheckSquare, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Send, 
  Copy, 
  Check,
  RotateCcw,
  Target,
  FileCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DailyOperationalHeader } from './DailyOperationalHeader';
import { getDailyOperationalPractice } from '../data/dailyOperationalPracticeData';

interface WritingSectionProps {
  level: LevelSyllabus;
  onRecordScore: (exerciseId: string, scorePercentage: number) => void;
  selectedDay?: number;
  onSelectDay?: (day: number) => void;
  onOpenDaySelector?: () => void;
}

export const WritingSection: React.FC<WritingSectionProps> = ({
  level,
  onRecordScore,
  selectedDay = 1,
  onSelectDay,
  onOpenDaySelector
}) => {
  // Load progressive daily operational practice
  const practice = getDailyOperationalPractice(level.levelNumber, selectedDay, 'writing');

  const [userText, setUserText] = useState<string>('');
  const [showModelAnswer, setShowModelAnswer] = useState(false);
  const [copiedPhrase, setCopiedPhrase] = useState<string | null>(null);
  const [isEvaluated, setIsEvaluated] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  // Reset state when day or level changes
  useEffect(() => {
    setUserText('');
    setShowModelAnswer(false);
    setIsEvaluated(false);
    setCheckedItems({});
  }, [selectedDay, level.levelNumber]);

  const wordCount = userText.trim() === '' ? 0 : userText.trim().split(/\s+/).length;
  const isWordCountValid = wordCount >= practice.writing.targetMinWords;

  const handleInsertPhrase = (phrase: string) => {
    setUserText(prev => (prev ? `${prev} ${phrase} ` : `${phrase} `));
    setCopiedPhrase(phrase);
    setTimeout(() => setCopiedPhrase(null), 1500);
  };

  const handleToggleCheck = (index: number) => {
    setCheckedItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleEvaluate = () => {
    if (wordCount < 10) return;

    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    const totalRequired = practice.writing.requiredElements.length;
    const checklistScore = Math.round((checkedCount / Math.max(1, totalRequired)) * 50);

    let lengthScore = 20;
    if (wordCount >= practice.writing.targetMinWords && wordCount <= practice.writing.targetMaxWords * 1.25) {
      lengthScore = 50;
    } else if (wordCount >= practice.writing.targetMinWords * 0.7) {
      lengthScore = 35;
    }

    const finalScore = Math.min(100, checklistScore + lengthScore);
    setIsEvaluated(true);
    setShowModelAnswer(true);
    onRecordScore(`day-${selectedDay}-writing`, finalScore);

    if (finalScore >= 70) {
      try {
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
      } catch {
        // Ignored
      }
    }
  };

  const handleReset = () => {
    setUserText('');
    setShowModelAnswer(false);
    setIsEvaluated(false);
    setCheckedItems({});
  };

  return (
    <div className="space-y-6">
      {/* Daily Header with Day Navigation & Pedagogical Briefing */}
      <DailyOperationalHeader
        practice={practice}
        onSelectDay={onSelectDay}
        onOpenDaySelector={onOpenDaySelector}
      />

      {/* Writing Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Mission Scenario, Requirements & Connectors */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#141d0e]/95 border border-[#2e401d] rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#233116]">
              <div className="flex items-center space-x-2">
                <PenTool className="w-4 h-4 text-[#7ea830]" />
                <h4 className="font-tactical font-bold text-sm text-[#f2f7ec]">
                  Consigna de Redacción Táctica
                </h4>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#0c1208] border border-[#1e2a14] text-[11px] font-mono text-[#b8df47]">
                Meta: {practice.writing.targetWordCount}
              </span>
            </div>

            {/* Title */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#7ea830] uppercase font-bold">
                Misión del Día {selectedDay}
              </span>
              <h3 className="text-base font-bold text-[#f2f7ec] font-tactical">
                {practice.writing.title}
              </h3>
            </div>

            {/* Scenario Box */}
            <div className="p-3.5 rounded-xl bg-[#0c1208] border border-[#233116] text-xs text-[#cadbb8] leading-relaxed">
              <span className="font-bold text-[#b8df47] block mb-1">Escenario Operacional:</span>
              {practice.writing.scenario}
            </div>

            {/* Required Elements Checklist */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#7ea830] uppercase font-bold flex items-center space-x-1">
                <CheckSquare className="w-3.5 h-3.5" />
                <span>Elementos Doctrinales Requeridos:</span>
              </span>
              <div className="space-y-1.5">
                {practice.writing.requiredElements.map((el, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleToggleCheck(idx)}
                    className={`w-full p-2 rounded-lg text-xs border text-left flex items-start space-x-2 transition-all cursor-pointer ${
                      checkedItems[idx]
                        ? 'bg-[#1e2a14] border-[#4a652c] text-[#e3f4b8]'
                        : 'bg-[#0c1208] border-[#1b2512] text-[#8ea375] hover:border-[#2d3f1c]'
                    }`}
                  >
                    <div className={`w-3.5 h-3.5 mt-0.5 rounded flex items-center justify-center border ${
                      checkedItems[idx] ? 'bg-[#7ea830] border-[#7ea830] text-black' : 'border-[#3d5225]'
                    }`}>
                      {checkedItems[idx] && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                    <span className="flex-1">{el}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tactical Connectors Inserter */}
            <div className="space-y-2 pt-2 border-t border-[#1f2d15]">
              <span className="text-[10px] font-mono text-[#7ea830] uppercase font-bold">
                Conectores y Fórmulas Doctrinales Rápidas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {practice.writing.tacticalProwordsAndConnectors.map((connector, cIdx) => (
                  <button
                    key={cIdx}
                    onClick={() => handleInsertPhrase(connector)}
                    className="px-2 py-1 rounded bg-[#0c1208] hover:bg-[#1c2713] border border-[#202e14] hover:border-[#384e20] text-[11px] font-mono text-[#cadbb8] transition-all cursor-pointer flex items-center space-x-1"
                    title="Insertar en el texto"
                  >
                    <span>{connector}</span>
                    {copiedPhrase === connector ? (
                      <Check className="w-2.5 h-2.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-2.5 h-2.5 text-[#556947]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Textarea Editor & Model Answer */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#141d0e]/95 border border-[#2e401d] rounded-2xl p-5 shadow-xl space-y-4">
            {/* Editor Header with Live Word Count */}
            <div className="flex items-center justify-between pb-2 border-b border-[#233116]">
              <span className="text-xs font-mono font-bold text-[#cadbb8] uppercase">
                CAMPO DE TRANSMISIÓN ESCRITA (DÍA {selectedDay})
              </span>
              <div className="flex items-center space-x-2">
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                  isWordCountValid 
                    ? 'bg-emerald-950/70 border-emerald-700 text-emerald-300' 
                    : 'bg-[#182210] border-[#293b1a] text-[#8ea375]'
                }`}>
                  {wordCount} palabras {isWordCountValid ? '✓' : `(min ${practice.writing.targetMinWords})`}
                </span>
              </div>
            </div>

            {/* Textarea */}
            <textarea
              value={userText}
              onChange={e => setUserText(e.target.value)}
              placeholder={`Redacta aquí tu mensaje operacional formal para el Día ${selectedDay}...\nRespeta la consigna y los elementos requeridos.`}
              rows={9}
              className="w-full p-4 rounded-xl bg-[#0c1208] border border-[#233116] focus:border-[#7ea830] focus:ring-1 focus:ring-[#7ea830] text-xs sm:text-sm text-[#e3f4b8] font-mono placeholder-[#4c5f3b] outline-none transition-all leading-relaxed resize-y"
            />

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handleEvaluate}
                disabled={wordCount < 10}
                className="flex-1 py-3 px-4 rounded-xl bg-[#435e23] hover:bg-[#52722b] disabled:opacity-40 disabled:cursor-not-allowed text-[#f2f7ec] font-bold text-xs font-tactical shadow-lg transition-all cursor-pointer border border-[#6b8b3e] flex items-center justify-center space-x-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Evaluar Redacción Operacional</span>
              </button>

              <button
                onClick={handleReset}
                className="p-3 rounded-xl bg-[#1c2713] hover:bg-[#253617] text-[#cadbb8] border border-[#2e401d] transition-all cursor-pointer"
                title="Limpiar texto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Evaluation Results & Model Answer */}
            {isEvaluated && (
              <div className="space-y-3 pt-3 border-t border-[#1f2d15] animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#b8df47]">
                    <FileCheck className="w-4 h-4 text-[#7ea830]" />
                    <span>EVALUACIÓN STANAG REGISTRADA</span>
                  </div>
                  <button
                    onClick={() => setShowModelAnswer(!showModelAnswer)}
                    className="text-xs font-mono text-[#8ea375] hover:text-[#b8df47] flex items-center space-x-1 cursor-pointer"
                  >
                    {showModelAnswer ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{showModelAnswer ? 'Ocultar Modelo' : 'Ver Modelo Oficial'}</span>
                  </button>
                </div>

                {/* Model Answer Box */}
                {showModelAnswer && (
                  <div className="p-4 rounded-xl bg-[#0c1208] border border-[#233116] space-y-2">
                    <span className="text-[10px] font-mono text-[#7ea830] uppercase font-bold block">
                      Modelo Doctrinal de Referencia (STANAG 6001):
                    </span>
                    <div className="text-xs font-mono text-[#cadbb8] leading-relaxed whitespace-pre-wrap bg-[#10170a] p-3 rounded-lg border border-[#1c2713]">
                      {practice.writing.modelAnswer}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
