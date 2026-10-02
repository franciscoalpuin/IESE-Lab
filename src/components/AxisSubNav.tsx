import React from 'react';
import { BookOpen, Layers, Award, FileCheck, CheckCircle2, Clock } from 'lucide-react';

export type AxisSubTab = 'theory' | 'practice' | 'evaluation';

interface AxisSubNavProps {
  activeTab: AxisSubTab;
  onChangeTab: (tab: AxisSubTab) => void;
  axisTitle: string;
  practiceCount?: number;
  hasEvaluationModel?: boolean;
  levelNumber: number;
}

export const AxisSubNav: React.FC<AxisSubNavProps> = ({
  activeTab,
  onChangeTab,
  axisTitle,
  practiceCount,
  hasEvaluationModel = false,
  levelNumber
}) => {
  return (
    <div className="bg-[#11180d]/95 p-2 rounded-2xl border border-[#374924] shadow-md backdrop-blur-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
      <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
        {/* Tab 1: Desarrollo Teórico */}
        <button
          id={`subnav-theory-${axisTitle.toLowerCase().replace(/\s+/g, '-')}`}
          onClick={() => onChangeTab('theory')}
          className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'theory'
              ? 'bg-[#293d18] text-[#b8df47] border border-[#7ea830] shadow-md ring-1 ring-[#7ea830]/40 font-stencil tracking-wide'
              : 'text-[#9eb288] hover:text-white hover:bg-[#1b2512]'
          }`}
        >
          <BookOpen className="w-4 h-4 text-[#b8df47]" />
          <span>1. Desarrollo Teórico</span>
        </button>

        {/* Tab 2: Desarrollo Práctico */}
        <button
          id={`subnav-practice-${axisTitle.toLowerCase().replace(/\s+/g, '-')}`}
          onClick={() => onChangeTab('practice')}
          className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'practice'
              ? 'bg-[#293d18] text-[#b8df47] border border-[#7ea830] shadow-md ring-1 ring-[#7ea830]/40 font-stencil tracking-wide'
              : 'text-[#9eb288] hover:text-white hover:bg-[#1b2512]'
          }`}
        >
          <Layers className="w-4 h-4 text-[#b8df47]" />
          <span>2. Desarrollo Práctico</span>
          {typeof practiceCount === 'number' && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1f2b15] text-[#b8df47] font-mono font-bold">
              {practiceCount}
            </span>
          )}
          <span className="hidden sm:inline-flex text-[9px] px-1.5 py-0.5 rounded bg-[#3b5124] text-[#d6ee9b] font-mono">
            1h/día • 120d
          </span>
        </button>

        {/* Tab 3: Evaluación */}
        <button
          id={`subnav-evaluation-${axisTitle.toLowerCase().replace(/\s+/g, '-')}`}
          onClick={() => onChangeTab('evaluation')}
          className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'evaluation'
              ? 'bg-[#293d18] text-[#b8df47] border border-[#7ea830] shadow-md ring-1 ring-[#7ea830]/40 font-stencil tracking-wide'
              : 'text-[#9eb288] hover:text-white hover:bg-[#1b2512]'
          }`}
        >
          <FileCheck className="w-4 h-4 text-[#b8df47]" />
          <span>3. Evaluación</span>
          {hasEvaluationModel ? (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#3b5124] text-[#e0f19c] font-mono font-bold">
              Oficial (20 pts)
            </span>
          ) : (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#212b17] text-[#869970] font-mono">
              Pendiente
            </span>
          )}
        </button>
      </div>

      <div className="text-[11px] font-mono text-[#8ea476] px-3 hidden sm:flex items-center space-x-2 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-[#8ea476]"></span>
        <span>Eje: {axisTitle} • Nivel {levelNumber}</span>
      </div>
    </div>
  );
};
