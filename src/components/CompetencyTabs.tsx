import React from 'react';
import { 
  Headphones, 
  BookOpen, 
  PenTool, 
  Mic, 
  Sparkles, 
  Calendar,
  Award
} from 'lucide-react';

export type MainTabType = 
  | 'daily120'
  | 'listening'
  | 'reading'
  | 'useOfLanguage'
  | 'writing'
  | 'speaking'
  | 'syllabus'
  | 'finalExam';

interface CompetencyTabsProps {
  currentTab: MainTabType;
  onSelectTab: (tab: MainTabType) => void;
  selectedDay: number;
  onOpenDaySelector: () => void;
  listeningCount: number;
  readingCount: number;
  useOfLangCount: number;
  writingCount: number;
  speakingCount: number;
  completedDaysCount?: number;
  isExamPassed?: boolean;
  isLevelQualified?: boolean;
}

export const CompetencyTabs: React.FC<CompetencyTabsProps> = ({
  currentTab,
  onSelectTab,
  selectedDay,
  onOpenDaySelector,
  listeningCount,
  readingCount,
  useOfLangCount,
  writingCount,
  speakingCount,
  completedDaysCount = 0,
  isExamPassed = false,
  isLevelQualified = false
}) => {
  const competencyTabs = [
    {
      id: 'listening' as MainTabType,
      label: 'Comprensión Auditiva',
      shortLabel: 'Auditiva',
      icon: Headphones,
      color: 'text-sky-400'
    },
    {
      id: 'reading' as MainTabType,
      label: 'Comprensión Escrita',
      shortLabel: 'Escrita',
      icon: BookOpen,
      color: 'text-emerald-400'
    },
    {
      id: 'useOfLanguage' as MainTabType,
      label: 'Uso de la Lengua',
      shortLabel: 'Uso Lengua',
      icon: Sparkles,
      color: 'text-amber-400'
    },
    {
      id: 'writing' as MainTabType,
      label: 'Expresión Escrita',
      shortLabel: 'Escrita',
      icon: PenTool,
      color: 'text-purple-400'
    },
    {
      id: 'speaking' as MainTabType,
      label: 'Expresión Oral',
      shortLabel: 'Oral',
      icon: Mic,
      color: 'text-rose-400'
    }
  ];

  return (
    <nav 
      aria-label="Navegación de competencias" 
      className="bg-[var(--header-bg)] border-b border-white/10 sticky top-14 sm:top-16 z-30 shadow-sm"
    >
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 flex items-center justify-start gap-1 sm:gap-1.5 py-2 overflow-x-auto no-scrollbar">
        {/* Competencies Tabs: Listening, Reading, Use of Lang, Writing, Speaking */}
        {competencyTabs.map((tab) => {
          const isActive = currentTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectTab(tab.id)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md whitespace-nowrap transition-all duration-150 cursor-pointer ${
                isActive
                  ? 'bg-white text-slate-900 font-bold shadow-sm ring-1 ring-black/5 text-[12pt]'
                  : 'bg-[var(--header-surface)] text-slate-200 hover:bg-[#203a5e] hover:text-white border border-white/5 font-medium text-[11pt]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-900' : 'text-slate-300'}`} />
              <span className="hidden md:inline text-[11pt]">{tab.label}</span>
              <span className="inline md:hidden text-[10pt]">{tab.shortLabel}</span>
            </button>
          );
        })}

        {/* Official Level Final Exam & Military Decoration (Post 120 Days / 5 Áreas IESE) */}
        <button
          type="button"
          onClick={() => onSelectTab('finalExam')}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md whitespace-nowrap transition-all duration-150 cursor-pointer ${
            currentTab === 'finalExam'
              ? 'bg-white text-slate-900 font-bold shadow-sm ring-1 ring-black/5 text-[12pt]'
              : isExamPassed
              ? 'bg-emerald-900/60 text-emerald-200 hover:bg-emerald-900 hover:text-white border border-emerald-500/30 font-medium text-[11pt]'
              : 'bg-[var(--header-surface)] text-slate-200 hover:bg-[#203a5e] hover:text-white border border-white/5 font-medium text-[11pt]'
          }`}
          title="Examen Final de Nivel STANAG 6001 y Medallero de Condecoración Militar"
        >
          <Award className={`w-3.5 h-3.5 ${currentTab === 'finalExam' ? 'text-slate-900' : isExamPassed ? 'text-emerald-300' : 'text-slate-300'}`} />
          <span className="hidden lg:inline text-[11pt]">Examen & Condecoración</span>
          <span className="inline lg:hidden text-[10pt]">Examen & Medalla</span>
          {isExamPassed ? (
            <span className="text-[8pt] font-mono px-1.5 py-0.2 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-600 font-bold">
              Condecorado
            </span>
          ) : isLevelQualified ? (
            <span className="text-[8pt] font-mono px-1.5 py-0.2 rounded-full bg-[var(--accent-primary)] text-white font-bold">
              Habilitado
            </span>
          ) : (
            <span className="text-[8pt] font-mono px-1.5 py-0.2 rounded-full bg-[#0a1524] text-slate-300 border border-white/10">
              Medalla
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};
