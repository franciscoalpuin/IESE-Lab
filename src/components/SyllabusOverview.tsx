import React, { useState } from 'react';
import { LevelSyllabus } from '../types';
import { Award, Clock, Compass, FileCheck, BookCheck, ShieldAlert, Sparkles, Layers, MessageSquare, BookOpen, Headphones, PenTool, Mic, CheckCircle2, RefreshCw, ChevronRight, ArrowLeft } from 'lucide-react';

interface SyllabusOverviewProps {
  level: LevelSyllabus;
  onNavigateTab: (tab: any) => void;
  onClose?: () => void;
  isCurrentLevelDownloaded?: boolean;
  onOpenOfflineModal?: () => void;
  onDownloadLevel?: () => void;
  isDownloading?: boolean;
}

export const SyllabusOverview: React.FC<SyllabusOverviewProps> = ({
  level,
  onNavigateTab,
  onClose,
  isCurrentLevelDownloaded = false,
  onOpenOfflineModal,
  onDownloadLevel,
  isDownloading = false
}) => {
  const [showAllCompetencies, setShowAllCompetencies] = useState(false);
  const [showAllSpeechActs, setShowAllSpeechActs] = useState(false);

  const displayedCompetencies = showAllCompetencies 
    ? level.thematicCompetencies 
    : level.thematicCompetencies.slice(0, 10);

  const displayedSpeechActs = showAllSpeechActs 
    ? level.speechActs 
    : level.speechActs.slice(0, 8);

  return (
    <div className="space-y-6">
      
      {/* Hero Card with Level Facts */}
      <div className="rounded-2xl camo-card-elevated p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-[#b8df47]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center space-x-3">
            {onClose && (
              <button
                type="button"
                id="close-syllabus-back-btn"
                onClick={onClose}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#283918] hover:bg-[#344b20] text-[#b8df47] hover:text-[#d4f866] border border-[#5a7c33] font-stencil text-xs font-bold transition-colors cursor-pointer shadow-xs"
                title="Volver a la vista de estudio anterior"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Volver</span>
              </button>
            )}
            <span className="px-3 py-1 rounded-lg bg-[#283918] text-[#b8df47] font-bold font-stencil text-sm border border-[#5a7c33] tracking-wide">
              NIVEL {level.levelNumber} OFICIAL
            </span>
            <span className="px-3 py-1 rounded-lg bg-[#1a2512] text-[#d6ee9b] font-bold font-mono text-sm border border-[#3e5326]">
              Equivalencia MCER: {level.cefr}
            </span>
          </div>

          <div className="flex items-center space-x-4 text-xs font-mono text-[#9bb084]">
            <div className="flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-[#b8df47]" />
              <span>Nivel: <strong className="text-[#f1fadb]">{level.clockHours}h reloj</strong> ({level.academicHours}h cátedra)</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1.5 border-l border-[#3a4d26] pl-4">
              <span>Acumulado: <strong className="text-[#b8df47]">{level.accumulatedClockHours}h reloj</strong> ({level.accumulatedAcademicHours}h)</span>
            </div>
          </div>
        </div>

        <h1 className="text-xl sm:text-2xl lg:text-3xl font-stencil font-bold text-[#f2fcdb] mb-3 tracking-wide">
          {level.name}
        </h1>

        <div className="rounded-xl bg-[#131b0e]/90 border border-[#3a4d26] p-4 mb-6">
          <h2 className="text-xs font-bold text-[#b8df47] uppercase tracking-wider mb-1 flex items-center space-x-1.5 font-stencil">
            <Award className="w-4 h-4 text-[#b8df47]" />
            <span>Objetivo General IESE</span>
          </h2>
          <p className="font-desc text-[#d8e5cb] leading-relaxed">
            {level.generalObjective}
          </p>
        </div>

        {/* 120-Day Daily Training Program Banner */}
        <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-[#1b2b11] via-[#213415] to-[#18260f] border border-[#52792c] shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start space-x-3">
            <div className="p-2.5 rounded-lg bg-[#2e4719] text-[#b8df47] border border-[#6b9d33]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-stencil text-xs font-bold text-[#b8df47] uppercase tracking-wider">
                  Régimen de Adiestramiento Diario IESE
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2e4719] text-[#d9efa1] border border-[#5a8729]">
                  1h por día • 120 días para ascenso
                </span>
              </div>
              <p className="text-xs text-[#d3e2c3] mt-1 font-tactical">
                Programa estructurado en 4 fases de 30 días con cronómetro táctico de 60 min (4 bloques de 15 min de comprensión, gramática, redacción y expresión oral).
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigateTab('daily120')}
            className="shrink-0 px-4 py-2 rounded-lg bg-[#b8df47] hover:bg-[#c9ef5a] text-[#12190c] font-stencil font-bold text-xs uppercase tracking-wider shadow-md transition-transform active:scale-95 cursor-pointer flex items-center space-x-1.5"
          >
            <span>Iniciar Plan 120 Días</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Launch Buttons into the 5 Evaluated Areas */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
          <button
            onClick={() => onNavigateTab('listening')}
            className="p-3 rounded-xl bg-[#1a2613] hover:bg-[#233319] border border-[#465e2e] text-left transition-all group"
          >
            <span className="text-[11px] font-stencil text-[#b8df47] block font-semibold">Área 1</span>
            <span className="text-xs sm:text-sm font-semibold text-[#e1ecd5] group-hover:text-white font-tactical">Comprensión Auditiva</span>
          </button>
          <button
            onClick={() => onNavigateTab('reading')}
            className="p-3 rounded-xl bg-[#1a2613] hover:bg-[#233319] border border-[#465e2e] text-left transition-all group"
          >
            <span className="text-[11px] font-stencil text-[#b8df47] block font-semibold">Área 2</span>
            <span className="text-xs sm:text-sm font-semibold text-[#e1ecd5] group-hover:text-white font-tactical">Comprensión Escrita</span>
          </button>
          <button
            onClick={() => onNavigateTab('useOfLanguage')}
            className="p-3 rounded-xl bg-[#1a2613] hover:bg-[#233319] border border-[#465e2e] text-left transition-all group"
          >
            <span className="text-[11px] font-stencil text-[#b8df47] block font-semibold">Área 3</span>
            <span className="text-xs sm:text-sm font-semibold text-[#e1ecd5] group-hover:text-white font-tactical">Uso de la Lengua</span>
          </button>
          <button
            onClick={() => onNavigateTab('writing')}
            className="p-3 rounded-xl bg-[#1a2613] hover:bg-[#233319] border border-[#465e2e] text-left transition-all group"
          >
            <span className="text-[11px] font-stencil text-[#b8df47] block font-semibold">Área 4</span>
            <span className="text-xs sm:text-sm font-semibold text-[#e1ecd5] group-hover:text-white font-tactical">Expresión Escrita</span>
          </button>
          <button
            onClick={() => onNavigateTab('speaking')}
            className="p-3 rounded-xl bg-[#1a2613] hover:bg-[#233319] border border-[#465e2e] text-left transition-all group col-span-2 sm:col-span-1"
          >
            <span className="text-[11px] font-stencil text-[#b8df47] block font-semibold">Área 5</span>
            <span className="text-xs sm:text-sm font-semibold text-[#e1ecd5] group-hover:text-white font-tactical">Expresión Oral</span>
          </button>
        </div>
      </div>

      {/* Program Grid: Competencies & Grammar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Competencias Temáticas y Comunicativas */}
        <div className="rounded-2xl camo-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#344621]">
              <div className="flex items-center space-x-2">
                <Compass className="w-5 h-5 text-[#b8df47]" />
                <h2 className="text-base font-bold text-[#f2fcdb] tracking-wide font-stencil">
                  Competencias Comunicativas Exigidas ({level.thematicCompetencies.length})
                </h2>
              </div>
            </div>
            <ul className="space-y-2 font-desc text-[#d4e1c7]">
              {displayedCompetencies.map((comp, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8df47] mt-2 shrink-0"></span>
                  <span>{comp}</span>
                </li>
              ))}
            </ul>
          </div>

          {level.thematicCompetencies.length > 10 && (
            <div className="mt-4 pt-3 border-t border-[#344621] flex justify-end">
              <button
                id="toggle-all-competencies-btn"
                data-expand-trigger="true"
                onClick={() => setShowAllCompetencies(!showAllCompetencies)}
                className="text-xs font-stencil text-[#ff8533] hover:text-[#ffaa66] px-2 py-1 rounded neon-orange-expand cursor-pointer"
              >
                {showAllCompetencies ? 'Ver menos competencias' : `Ver las ${level.thematicCompetencies.length} competencias completas`}
              </button>
            </div>
          )}

          {/* Enfoque Militar */}
          <div className="mt-5 pt-4 border-t border-[#344621]">
            <h3 className="text-xs font-bold text-[#b8df47] uppercase tracking-wider mb-2 flex items-center space-x-1.5 font-stencil">
              <ShieldAlert className="w-4 h-4 text-[#b8df47]" />
              <span>Contenidos Militares Específicos</span>
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {level.militarySpecificTopics.map((mil, idx) => (
                <span key={idx} className="font-desc px-2.5 py-1 rounded-md bg-[#233118] border border-[#455b2e] text-[#d6eb9a] font-medium">
                  {mil}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contenidos Morfosintácticos y Gramática */}
        <div className="rounded-2xl camo-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-[#344621]">
              <BookCheck className="w-5 h-5 text-[#b8df47]" />
              <h2 className="text-base font-bold text-[#f2fcdb] tracking-wide font-stencil">
                Contenidos Morfosintácticos y Gramática ({level.grammaticalContents.length})
              </h2>
            </div>
            <ul className="space-y-2 font-desc text-[#d4e1c7]">
              {level.grammaticalContents.map((gram, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8df47] mt-2 shrink-0"></span>
                  <span>{gram}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actos del Habla */}
          <div className="mt-5 pt-4 border-t border-[#344621]">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-[#b8df47] uppercase tracking-wider flex items-center space-x-1.5 font-stencil">
                <Sparkles className="w-4 h-4 text-[#b8df47]" />
                <span>Actos del Habla ({level.speechActs.length})</span>
              </h3>
              {level.speechActs.length > 8 && (
                <button
                  id="toggle-all-speech-acts-btn"
                  data-expand-trigger="true"
                  onClick={() => setShowAllSpeechActs(!showAllSpeechActs)}
                  className="text-xs font-stencil text-[#ff8533] hover:text-[#ffaa66] px-2 py-0.5 rounded neon-orange-expand cursor-pointer"
                >
                  {showAllSpeechActs ? 'Menos' : 'Ver todos'}
                </button>
              )}
            </div>
            <ul className="space-y-1.5 font-desc text-[#d4e1c7]">
              {displayedSpeechActs.map((act, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-[#b8df47] font-mono text-[11px]">›</span>
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Functions & Vocabulary Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Funciones Comunicativas Clave */}
        {level.functions && (
          <div className="rounded-2xl camo-card p-6">
            <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-[#344621]">
              <MessageSquare className="w-5 h-5 text-[#b8df47]" />
              <h2 className="text-base font-bold text-[#f2fcdb] tracking-wide font-stencil">
                Funciones Comunicativas Clave (Functions)
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {level.functions.map((func, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#1c2914] border border-[#445b2b]">
                  <span className="text-[11px] font-stencil text-[#b8df47] block mb-1">Función 0{idx + 1}</span>
                  <p className="font-desc text-[#e0ecdc]">{func}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vocabulario y Campos Semánticos */}
        <div className="rounded-2xl camo-card p-6">
          <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-[#344621]">
            <Layers className="w-5 h-5 text-[#b8df47]" />
            <h2 className="text-base font-bold text-[#f2fcdb] tracking-wide font-stencil">
              Campos Semánticos y Vocabulario ({level.vocabularyTopics.length})
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 max-h-72 overflow-y-auto pr-1">
            {level.vocabularyTopics.map((topic, idx) => (
              <span key={idx} className="font-desc px-3 py-1.5 rounded-lg bg-[#202d17] border border-[#3e5326] text-[#d6ee9b] leading-tight">
                {topic}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Phrasal Verbs Oficiales si están definidos */}
      {level.phrasalVerbs && level.phrasalVerbs.length > 0 && (
        <div className="rounded-2xl camo-card p-6">
          <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-[#344621]">
            <Sparkles className="w-5 h-5 text-[#b8df47]" />
            <h2 className="text-base font-bold text-[#f2fcdb] tracking-wide font-stencil">
              Phrasal Verbs Exigidos del Nivel ({level.phrasalVerbs.length})
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-80 overflow-y-auto pr-1">
            {level.phrasalVerbs.map((pv, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-[#1a2512] border border-[#3e5326] text-xs font-desc text-[#d6ee9b]">
                <strong className="text-[#b8df47] font-mono block">{pv.split(' (')[0]}</strong>
                {pv.includes(' (') && (
                  <span className="text-[#a4b890] text-[11px]">({pv.split(' (')[1]}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Macro-Habilidades Oficiales (Comprensión y Expresión) */}
      {(level.writtenComprehensionSkills || level.oralComprehensionSkills) && (
        <div className="rounded-2xl camo-card p-6">
          <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-[#344621]">
            <Award className="w-5 h-5 text-[#b8df47]" />
            <h2 className="text-base font-bold text-[#f2fcdb] tracking-wide font-stencil">
              Estándares de las Macro-Habilidades Oficiales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Comprensión Escrita */}
            {level.writtenComprehensionSkills && (
              <div className="p-4 rounded-xl bg-[#162010] border border-[#384a24]">
                <div className="flex items-center space-x-2 mb-2.5 text-[#b8df47]">
                  <BookOpen className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-wider font-stencil">Comprensión Escrita (Reading)</h3>
                </div>
                <ul className="space-y-1.5 font-desc text-[#d4e1c7]">
                  {level.writtenComprehensionSkills.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5">
                      <span className="text-[#b8df47] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Expresión Escrita */}
            {level.writtenExpressionSkills && (
              <div className="p-4 rounded-xl bg-[#162010] border border-[#384a24]">
                <div className="flex items-center space-x-2 mb-2.5 text-[#b8df47]">
                  <PenTool className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-wider font-stencil">Expresión Escrita (Writing)</h3>
                </div>
                <ul className="space-y-1.5 font-desc text-[#d4e1c7]">
                  {level.writtenExpressionSkills.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5">
                      <span className="text-[#b8df47] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Comprensión Oral */}
            {level.oralComprehensionSkills && (
              <div className="p-4 rounded-xl bg-[#162010] border border-[#384a24]">
                <div className="flex items-center space-x-2 mb-2.5 text-[#b8df47]">
                  <Headphones className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-wider font-stencil">Comprensión Oral (Listening)</h3>
                </div>
                <ul className="space-y-1.5 font-desc text-[#d4e1c7]">
                  {level.oralComprehensionSkills.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5">
                      <span className="text-[#b8df47] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Expresión Oral */}
            {level.oralExpressionSkills && (
              <div className="p-4 rounded-xl bg-[#162010] border border-[#384a24]">
                <div className="flex items-center space-x-2 mb-2.5 text-[#b8df47]">
                  <Mic className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-wider font-stencil">Expresión Oral (Speaking)</h3>
                </div>
                <ul className="space-y-1.5 font-desc text-[#d4e1c7]">
                  {level.oralExpressionSkills.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5">
                      <span className="text-[#b8df47] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Reflexión Intercultural y Bibliografía Oficial */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl camo-card p-5">
          <h3 className="text-xs font-bold text-[#b8df47] uppercase tracking-wider mb-3 font-stencil">
            Reflexión Intercultural (Argentina vs Mundo Angloparlante)
          </h3>
          <ul className="space-y-2 font-desc text-[#d4e1c7]">
            {level.culturalReflection.map((ref, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-[#b8df47] font-bold">•</span>
                <span>{ref}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl camo-card p-5">
          <h3 className="text-xs font-bold text-[#b8df47] uppercase tracking-wider mb-3 font-stencil">
            Bibliografía Oficial IESE & Referencias
          </h3>
          <div className="space-y-2 font-desc text-[#d4e1c7]">
            <p className="flex items-center space-x-2">
              <FileCheck className="w-4 h-4 text-[#b8df47] shrink-0" />
              <span>Material Base: <strong>English File (Oxford University Press / Language Hub)</strong></span>
            </p>
            <p className="flex items-center space-x-2">
              <FileCheck className="w-4 h-4 text-[#b8df47] shrink-0" />
              <span>Gramática: <strong>Essential Grammar in Use (Raymond Murphy, Cambridge)</strong></span>
            </p>
            <p className="flex items-center space-x-2">
              <FileCheck className="w-4 h-4 text-[#b8df47] shrink-0" />
              <span>Estándares OTAN: <strong>STANAG 6001 Military Language Proficiency</strong></span>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
