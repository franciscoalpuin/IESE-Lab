import React, { useState } from 'react';
import { LevelSyllabus, UserProgress } from '../types';
import { OfficialListeningExam } from './OfficialListeningExam';
import { OfficialReadingExam } from './OfficialReadingExam';
import { OfficialUseOfLanguageExam } from './OfficialUseOfLanguageExam';
import { OfficialWritingExam } from './OfficialWritingExam';
import { OfficialSpeakingExam } from './OfficialSpeakingExam';
import { 
  Award, 
  Shield, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Headphones, 
  BookOpen, 
  Sparkles, 
  PenTool, 
  Mic, 
  ChevronRight, 
  Printer, 
  RotateCcw, 
  FastForward, 
  Calendar, 
  FileCheck,
  Check,
  XCircle,
  ExternalLink,
  ArrowLeft
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MilitaryMedalDisplay } from './MilitaryMedalDisplay';
import { IronCrossMedal, getMedalModelInfo } from './IronCrossMedal';

export type ExamAreaKey = 'overview' | 'listening' | 'reading' | 'useOfLanguage' | 'writing' | 'speaking' | 'diploma';

interface LevelFinalExamProps {
  level: LevelSyllabus;
  progress: UserProgress;
  onRecordScore: (exerciseId: string, scorePercentage: number) => void;
  onPassExam: (levelNumber: number) => void;
  onRevokeExam?: (levelNumber: number) => void;
  onSelectLevel?: (levelNumber: number) => void;
  audioRate?: number;
  onNavigateTo120Days?: () => void;
}

export const LevelFinalExam: React.FC<LevelFinalExamProps> = ({
  level,
  progress,
  onRecordScore,
  onPassExam,
  onRevokeExam,
  onSelectLevel,
  audioRate = 0.95,
  onNavigateTo120Days
}) => {
  const [activeArea, setActiveArea] = useState<ExamAreaKey>('overview');
  const [studentName, setStudentName] = useState<string>(() => {
    return localStorage.getItem('iese_student_name') || 'Capitán / Teniente / Suboficial';
  });
  const [studentUnit, setStudentUnit] = useState<string>(() => {
    return localStorage.getItem('iese_student_unit') || 'Comando de Adiestramiento y Alistamiento del Ejército';
  });
  const [isEditingStudent, setIsEditingStudent] = useState<boolean>(false);

  // 120 Days completion status
  const completedDaysCount = progress.completedDays?.[level.levelNumber]?.length || 0;
  const is120DaysCompleted = completedDaysCount >= 120;
  const isExamPassed = !!progress.levelExamPassed?.[level.levelNumber];

  // Scores retrieved from progress
  const listeningScore = progress.scores[`official-listening-exam-l${level.levelNumber}`] ?? progress.scores[`exam-listening-l${level.levelNumber}`];
  const readingScore = progress.scores[`exam-reading-l${level.levelNumber}`];
  const useOfLangScore = progress.scores[`exam-uol-l${level.levelNumber}`];
  const writingScore = progress.scores[`exam-writing-l${level.levelNumber}`];
  const speakingScore = progress.scores[`official-speaking-l${level.levelNumber}`];

  const hasScore = (score: number | undefined): score is number => score !== undefined && score !== null;

  const evaluatedAreasCount = [
    hasScore(listeningScore),
    hasScore(readingScore),
    hasScore(useOfLangScore),
    hasScore(writingScore),
    hasScore(speakingScore)
  ].filter(Boolean).length;

  const validScores = [listeningScore, readingScore, useOfLangScore, writingScore, speakingScore].filter(hasScore);
  const averageScore = validScores.length > 0 
    ? Math.round(validScores.reduce((acc, curr) => acc + curr, 0) / validScores.length)
    : 0;

  const allFiveCompleted = evaluatedAreasCount === 5;
  const meetsPassingStandard = allFiveCompleted && averageScore >= 70 && validScores.every(s => s >= 60);

  // NATO STANAG 6001 Standardized Language Profile (SLP)
  const getSlpProfile = (lvl: number) => {
    switch (lvl) {
      case 1: return { code: 'SLP 1111', levelName: 'Supervivencia / Elemental (A1+)', natoDesc: 'NATO STANAG 6001 Level 1' };
      case 2: return { code: 'SLP 2222', levelName: 'Funcional / Pre-Intermedio (A2)', natoDesc: 'NATO STANAG 6001 Level 2' };
      case 3: return { code: 'SLP 2+2+2+2', levelName: 'Funcional Avanzado (A2+)', natoDesc: 'NATO STANAG 6001 Level 2+' };
      case 4: return { code: 'SLP 3333', levelName: 'Profesional Operacional (B1)', natoDesc: 'NATO STANAG 6001 Level 3' };
      case 5: return { code: 'SLP 3+3+3+3', levelName: 'Profesional Superior (B1+)', natoDesc: 'NATO STANAG 6001 Level 3+' };
      case 6: return { code: 'SLP 4444', levelName: 'Estratégico / Estado Mayor (B2)', natoDesc: 'NATO STANAG 6001 Level 4' };
      default: return { code: 'SLP 1111', levelName: 'Elemental', natoDesc: 'NATO STANAG 6001' };
    }
  };

  const slpInfo = getSlpProfile(level.levelNumber);

  // Local wrapper for onRecordScore
  const handleRecordSubScore = (id: string, pct: number) => {
    onRecordScore(id, pct);
  };

  // Fast-forward / Simulation for testing all 5 areas
  const handleSimulatePassAll = () => {
    onRecordScore(`official-listening-exam-l${level.levelNumber}`, 85);
    onRecordScore(`exam-reading-l${level.levelNumber}`, 90);
    onRecordScore(`exam-uol-l${level.levelNumber}`, 80);
    onRecordScore(`exam-writing-l${level.levelNumber}`, 85);
    onRecordScore(`official-speaking-l${level.levelNumber}`, 88);
    onPassExam(level.levelNumber);
    try {
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.5 } });
    } catch {
      // Ignored
    }
    setActiveArea('diploma');
  };

  const handleOfficialPassCertification = () => {
    onPassExam(level.levelNumber);
    try {
      confetti({ particleCount: 90, spread: 100, origin: { y: 0.5 } });
    } catch {
      // Ignored
    }
    setActiveArea('diploma');
  };

  const handleSaveStudentInfo = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('iese_student_name', studentName);
    localStorage.setItem('iese_student_unit', studentUnit);
    setIsEditingStudent(false);
  };

  const examAreas = [
    {
      id: 'listening' as ExamAreaKey,
      part: 'Parte 1',
      title: 'Comprensión Auditiva (Listening)',
      desc: 'Diálogos tácticos de puesto de mando, instrucciones de radio, briefings operacionales y notas de vuelo.',
      icon: Headphones,
      score: listeningScore,
      exerciseId: `official-listening-exam-l${level.levelNumber}`,
      standardMin: 60,
      time: '15-20 min'
    },
    {
      id: 'reading' as ExamAreaKey,
      part: 'Parte 2',
      title: 'Comprensión Lectora (Reading)',
      desc: 'Informes de patrulla SITREP, manuales doctrinales, directivas de ejercicio y comunicados de base.',
      icon: BookOpen,
      score: readingScore,
      exerciseId: `exam-reading-l${level.levelNumber}`,
      standardMin: 60,
      time: '20-30 min'
    },
    {
      id: 'useOfLanguage' as ExamAreaKey,
      part: 'Parte 3',
      title: 'Uso de la Lengua (Use of Language)',
      desc: 'Gramática aplicada STANAG, vocabulario técnico OTAN, corrección de errores sintácticos y colocaciones militares.',
      icon: Sparkles,
      score: useOfLangScore,
      exerciseId: `exam-uol-l${level.levelNumber}`,
      standardMin: 60,
      time: '20-25 min'
    },
    {
      id: 'writing' as ExamAreaKey,
      part: 'Parte 4',
      title: 'Expresión Escrita (Writing)',
      desc: 'Redacción formal de parte militar de incidentes, memorándums de estado mayor y directivas tácticas.',
      icon: PenTool,
      score: writingScore,
      exerciseId: `exam-writing-l${level.levelNumber}`,
      standardMin: 60,
      time: '30-40 min'
    },
    {
      id: 'speaking' as ExamAreaKey,
      part: 'Parte 5',
      title: 'Expresión Oral (Speaking)',
      desc: 'Briefing oral ante el tribunal examinador, deletreo fonético OTAN, radiotelefonía y entrevista táctica.',
      icon: Mic,
      score: speakingScore,
      exerciseId: `official-speaking-l${level.levelNumber}`,
      standardMin: 60,
      time: '15-20 min'
    }
  ];

  return (
    <div className="space-y-6 w-full max-w-[1720px] mx-auto">
      {/* Institutional Exam Header */}
      <div className="bg-[var(--surface-base)] border border-[var(--border-subtle)] rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0 shadow-inner">
              <Award className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--accent-primary)]" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                <span className="text-[10px] sm:text-xs font-mono px-2.5 py-0.5 rounded-full bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] uppercase">
                  Escuela de Idiomas del Ejército (IESE)
                </span>
                <span className="text-[10px] sm:text-xs font-stencil font-bold px-2 py-0.5 rounded bg-[var(--accent-primary)] text-[#12160f]">
                  {slpInfo.code}
                </span>
                {isExamPassed ? (
                  <span className="text-[10px] sm:text-xs font-bold font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-600/50 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    CERTIFICADO HOMOLOGADO
                  </span>
                ) : is120DaysCompleted ? (
                  <span className="text-[10px] sm:text-xs font-bold font-mono px-2 py-0.5 rounded bg-[var(--surface-elevated)] text-[var(--accent-primary)] border border-[var(--border-subtle)] flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    120 DÍAS COMPLETADOS • HABILITADO
                  </span>
                ) : (
                  <span className="text-[10px] sm:text-xs font-bold font-mono px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-600/50 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {completedDaysCount}/120 DÍAS COMPLETADOS
                  </span>
                )}
              </div>

              <h1 className="text-xl sm:text-2xl font-stencil font-bold text-[var(--text-primary)] tracking-wide">
                Examen Final de Nivel {level.levelNumber} ({level.cefr})
              </h1>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-3xl">
                Evaluación integral reglamentaria obligatoria según el programa del IESE y norma STANAG 6001. Consta de <strong>las 2 comprensiones</strong> (Auditiva y Lectora), <strong>las 2 expresiones</strong> (Escrita y Oral) y el <strong>Uso de la Lengua</strong>.
              </p>
            </div>
          </div>

          {/* Quick Status Pill / Action */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-[var(--border-subtle)]">
            <div className="text-left lg:text-right font-mono text-xs text-[var(--text-secondary)]">
              <div>Estado de Evaluación: <strong className="text-[var(--text-primary)]">{evaluatedAreasCount} de 5 áreas</strong></div>
              <div>Promedio General: <strong className={averageScore >= 70 ? 'text-emerald-400 font-bold' : 'text-amber-300 font-bold'}>{averageScore}%</strong> (Mín. 70%)</div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setActiveArea('diploma')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center space-x-1.5 transition-colors cursor-pointer ${
                  isExamPassed
                    ? 'bg-emerald-900/60 text-emerald-200 border border-emerald-600 hover:bg-emerald-900'
                    : 'bg-[var(--surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
                title="Ver Condecoración Oficial y Medallero Militar"
              >
                <Award className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                <span>{isExamPassed ? 'Ver Condecoración Oficial' : 'Acta de Condecoración'}</span>
              </button>

              <button
                type="button"
                onClick={handleSimulatePassAll}
                className="px-2.5 py-1.5 rounded-lg bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                title="Simular calificación aprobatoria en las 5 áreas para otorgar la condecoración militar"
              >
                <FastForward className="w-3 h-3 inline mr-1" />
                Simular 5 Áreas
              </button>

              {isExamPassed && onRevokeExam && (
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm(`¿Deseas desmarcar la condecoración y devolver el examen del Nivel ${level.levelNumber} a estado pendiente?`)) {
                      onRevokeExam(level.levelNumber);
                      setActiveArea('overview');
                    }
                  }}
                  className="px-2.5 py-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 border border-red-700/60 text-[10px] font-mono text-red-200 transition-colors cursor-pointer flex items-center space-x-1"
                  title="Quitar condecoración obtenida durante la prueba y volver el examen al estado pendiente"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Quitar Medalla (Pendiente)</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 120 Days Requisite Warning / Info Banner */}
        {!is120DaysCompleted && (
          <div className="mt-4 p-3 rounded-xl bg-amber-950/30 border border-amber-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2.5 text-amber-200">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong>Aviso Reglamentario IESE:</strong> El examen final formal se rinde tras completar las 120 jornadas lectivas (actualmente: {completedDaysCount}/120 días). Puede rendir este modelo preparatorio en modo ensayo o completar sus días de instrucción militar.
              </span>
            </div>
            {onNavigateTo120Days && (
              <button
                type="button"
                onClick={onNavigateTo120Days}
                className="px-3 py-1 rounded bg-amber-900/60 hover:bg-amber-800 text-amber-100 font-mono text-[11px] whitespace-nowrap transition-colors cursor-pointer self-end sm:self-auto"
              >
                Ir a Plan 120 Días
              </button>
            )}
          </div>
        )}
      </div>

      {/* Navigation Sub-Tabs across the 5 Areas + Overview + Diploma */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        <button
          type="button"
          onClick={() => setActiveArea('overview')}
          className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-medium font-tactical whitespace-nowrap transition-colors cursor-pointer ${
            activeArea === 'overview'
              ? 'bg-[var(--surface-elevated)] text-[var(--text-primary)] border-b-2 border-[var(--accent-primary)] font-bold'
              : 'bg-[var(--surface-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
          }`}
        >
          <FileCheck className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
          <span>Resumen de Examen</span>
        </button>

        {examAreas.map(area => {
          const Icon = area.icon;
          const isActive = activeArea === area.id;
          const passed = hasScore(area.score) && area.score >= area.standardMin;

          return (
            <button
              key={area.id}
              type="button"
              onClick={() => setActiveArea(area.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-medium font-tactical whitespace-nowrap transition-colors cursor-pointer ${
                isActive
                  ? 'bg-[var(--surface-elevated)] text-[var(--text-primary)] border-b-2 border-[var(--accent-primary)] font-bold'
                  : 'bg-[var(--surface-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[var(--accent-primary)]' : 'text-[var(--text-muted)]'}`} />
              <span>{area.part}</span>
              {hasScore(area.score) ? (
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full font-bold ${
                  passed ? 'bg-emerald-950 text-emerald-300 border border-emerald-600' : 'bg-rose-950 text-rose-300 border border-rose-600'
                }`}>
                  {area.score}%
                </span>
              ) : (
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-[var(--surface-elevated)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                  Pendiente
                </span>
              )}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => setActiveArea('diploma')}
          className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-medium font-tactical whitespace-nowrap transition-colors cursor-pointer ${
            activeArea === 'diploma'
              ? 'bg-[var(--surface-elevated)] text-[var(--text-primary)] border-b-2 border-[var(--accent-primary)] font-bold'
              : isExamPassed
              ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-600/60 hover:bg-emerald-900/60'
              : 'bg-[var(--surface-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
          }`}
        >
          <Award className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
          <span>Condecoración (Medallas)</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* VISTA 1: RESUMEN Y CUADRO DE CALIFICACIONES (OVERVIEW) */}
      {/* ========================================================================= */}
      {activeArea === 'overview' && (
        <div className="space-y-6">
          {/* 5 Evaluated Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {examAreas.map((area, idx) => {
              const Icon = area.icon;
              const passed = hasScore(area.score) && area.score >= area.standardMin;

              return (
                <div
                  key={area.id}
                  className="p-5 rounded-2xl bg-[var(--surface-base)] border border-[var(--border-subtle)] hover:border-[var(--text-secondary)] transition-all flex flex-col justify-between space-y-4 shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="p-2 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--accent-primary)]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold">
                          {area.part}
                        </span>
                      </div>

                      <div className="flex items-center space-x-1.5">
                        <Clock className="w-3 h-3 text-[var(--text-muted)]" />
                        <span className="text-[11px] font-mono text-[var(--text-muted)]">{area.time}</span>
                      </div>
                    </div>

                    <h3 className="text-sm font-semibold text-[var(--text-primary)] font-tactical">
                      {area.title}
                    </h3>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {area.desc}
                    </p>
                  </div>

                  {/* Score & Launch Button */}
                  <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">Calificación:</span>
                      {hasScore(area.score) ? (
                        <div className="flex items-center space-x-1.5 mt-0.5">
                          {passed ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <XCircle className="w-3.5 h-3.5 text-rose-400" />
                          )}
                          <span className={`text-xs font-mono font-bold ${passed ? 'text-emerald-300' : 'text-rose-300'}`}>
                            {area.score}% {passed ? '(Aprobado)' : '(No alcanzado)'}
                          </span>
                        </div>
                      ) : (
                        <span className="text-xs font-mono text-[var(--text-muted)]">Pendiente de evaluación</span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area.id)}
                      className="px-3 py-1.5 rounded-lg bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] border border-[var(--border-subtle)] flex items-center space-x-1 transition-colors cursor-pointer"
                    >
                      <span>{hasScore(area.score) ? 'Repetir' : 'Iniciar'}</span>
                      <ChevronRight className="w-3 h-3 text-[var(--accent-primary)]" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Sixth Card: Final Certification Summary */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[var(--surface-base)] to-[var(--surface-elevated)] border border-[var(--accent-primary)]/40 flex flex-col justify-between space-y-4 shadow-md">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[var(--accent-primary)]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold">
                    Homologación STANAG 6001
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-[var(--text-primary)] font-tactical">
                  Dictamen Final de la Mesa Examinadora
                </h3>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Para otorgar la acreditación STANAG 6001 {slpInfo.code} se requiere un mínimo de 60% en cada una de las 5 áreas y un promedio general no inferior al 70%.
                </p>

                <div className="p-3 rounded-xl bg-[var(--surface-base)] border border-[var(--border-subtle)] space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Áreas rendidas:</span>
                    <span className="text-[var(--text-primary)] font-bold">{evaluatedAreasCount} / 5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Promedio general:</span>
                    <span className={`font-bold ${averageScore >= 70 ? 'text-emerald-400' : 'text-amber-300'}`}>{averageScore}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Estado IESE:</span>
                    <span className={`font-bold ${meetsPassingStandard || isExamPassed ? 'text-emerald-400' : 'text-amber-300'}`}>
                      {meetsPassingStandard || isExamPassed ? 'APTO PARA CERTIFICACIÓN' : 'INCOMPLETO / PENDIENTE'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                {meetsPassingStandard || isExamPassed ? (
                  <button
                    type="button"
                    onClick={handleOfficialPassCertification}
                    className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#6e8f2a] to-[#9ac63b] hover:from-[#7ea330] hover:to-[#abd942] text-black font-stencil font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md cursor-pointer"
                  >
                    <Award className="w-4 h-4 text-black" />
                    <span>Conferir Condecoración Oficial (Cruz de Hierro)</span>
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setActiveArea('listening')}
                      className="w-full py-2 px-3 rounded-xl bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] text-[var(--text-primary)] font-mono text-xs border border-[var(--border-subtle)] flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <span>Iniciar Parte 1 (Comprensión Auditiva)</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveArea('diploma')}
                      className="w-full mt-2 py-2 px-3 rounded-xl bg-[var(--surface-base)] hover:bg-[var(--surface-elevated)] text-[var(--accent-primary)] font-tactical font-semibold text-xs border border-[var(--border-subtle)] flex items-center justify-center space-x-1.5 cursor-pointer transition-colors"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>Ver Medallero Oficial & Estuche de Condecoración</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Guidelines and Regulations Note */}
          <div className="p-4 rounded-xl bg-[var(--surface-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] space-y-2">
            <div className="flex items-center space-x-2 text-[var(--accent-primary)] font-bold font-mono">
              <Shield className="w-4 h-4" />
              <span>Reglamento de Condecoraciones y Evaluación IESE (Resolución DGI 2026/04):</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 font-mono text-[11px] text-[var(--text-secondary)]">
              <li>
                <strong>Validez Institucional:</strong> La aprobación de este examen final certifica el nivel STANAG 6001 {slpInfo.code} para legajos personales, comisiones en el exterior, misiones de paz de Naciones Unidas y vacantes para cursos superiores de Estado Mayor.
              </li>
              <li>
                <strong>Estructura de Evaluación:</strong> Cada módulo contiene consignas auténticas calibradas al estándar OTAN correspondientes al Nivel {level.levelNumber} ({level.cefr}).
              </li>
              <li>
                <strong>Condecoración y Medalla:</strong> Al superar las 5 áreas se confiere la condecoración militar (Cruz de Hierro germana con cinta argentina celeste y blanca) y su correspondiente pasador de gala de uniforme.
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VISTA 2: PARTE 1 - COMPRENSIÓN AUDITIVA */}
      {/* ========================================================================= */}
      {activeArea === 'listening' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--surface-base)] border border-[var(--border-subtle)]">
            <button
              type="button"
              onClick={() => setActiveArea('overview')}
              className="flex items-center space-x-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>Volver al Cuadro General</span>
            </button>

            <div className="text-xs font-mono text-[var(--accent-primary)] font-bold">
              Parte 1 de 5: Comprensión Auditiva
            </div>

            <button
              type="button"
              onClick={() => setActiveArea('reading')}
              className="flex items-center space-x-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <span>Ir a Parte 2 (Lectora)</span>
              <ChevronRight className="w-4 h-4 text-[var(--accent-primary)]" />
            </button>
          </div>

          <OfficialListeningExam
            levelNumber={level.levelNumber}
            onRecordScore={handleRecordSubScore}
            audioRate={audioRate}
          />
        </div>
      )}

      {/* ========================================================================= */}
      {/* VISTA 3: PARTE 2 - COMPRENSIÓN LECTORA */}
      {/* ========================================================================= */}
      {activeArea === 'reading' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--surface-base)] border border-[var(--border-subtle)]">
            <button
              type="button"
              onClick={() => setActiveArea('listening')}
              className="flex items-center space-x-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>Anterior: Parte 1 (Auditiva)</span>
            </button>

            <div className="text-xs font-mono text-[var(--accent-primary)] font-bold">
              Parte 2 de 5: Comprensión Lectora
            </div>

            <button
              type="button"
              onClick={() => setActiveArea('useOfLanguage')}
              className="flex items-center space-x-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <span>Ir a Parte 3 (Uso de Lengua)</span>
              <ChevronRight className="w-4 h-4 text-[var(--accent-primary)]" />
            </button>
          </div>

          <OfficialReadingExam
            levelNumber={level.levelNumber}
            onRecordScore={handleRecordSubScore}
          />
        </div>
      )}

      {/* ========================================================================= */}
      {/* VISTA 4: PARTE 3 - USO DE LA LENGUA */}
      {/* ========================================================================= */}
      {activeArea === 'useOfLanguage' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--surface-base)] border border-[var(--border-subtle)]">
            <button
              type="button"
              onClick={() => setActiveArea('reading')}
              className="flex items-center space-x-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>Anterior: Parte 2 (Lectora)</span>
            </button>

            <div className="text-xs font-mono text-[var(--accent-primary)] font-bold">
              Parte 3 de 5: Uso de la Lengua
            </div>

            <button
              type="button"
              onClick={() => setActiveArea('writing')}
              className="flex items-center space-x-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <span>Ir a Parte 4 (Escrita)</span>
              <ChevronRight className="w-4 h-4 text-[var(--accent-primary)]" />
            </button>
          </div>

          <OfficialUseOfLanguageExam
            levelNumber={level.levelNumber}
            onRecordScore={handleRecordSubScore}
          />
        </div>
      )}

      {/* ========================================================================= */}
      {/* VISTA 5: PARTE 4 - EXPRESIÓN ESCRITA */}
      {/* ========================================================================= */}
      {activeArea === 'writing' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--surface-base)] border border-[var(--border-subtle)]">
            <button
              type="button"
              onClick={() => setActiveArea('useOfLanguage')}
              className="flex items-center space-x-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>Anterior: Parte 3 (Uso de Lengua)</span>
            </button>

            <div className="text-xs font-mono text-[var(--accent-primary)] font-bold">
              Parte 4 de 5: Expresión Escrita
            </div>

            <button
              type="button"
              onClick={() => setActiveArea('speaking')}
              className="flex items-center space-x-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <span>Ir a Parte 5 (Oral)</span>
              <ChevronRight className="w-4 h-4 text-[var(--accent-primary)]" />
            </button>
          </div>

          <OfficialWritingExam
            levelNumber={level.levelNumber}
            onRecordScore={handleRecordSubScore}
          />
        </div>
      )}

      {/* ========================================================================= */}
      {/* VISTA 6: PARTE 5 - EXPRESIÓN ORAL */}
      {/* ========================================================================= */}
      {activeArea === 'speaking' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--surface-base)] border border-[var(--border-subtle)]">
            <button
              type="button"
              onClick={() => setActiveArea('writing')}
              className="flex items-center space-x-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>Anterior: Parte 4 (Escrita)</span>
            </button>

            <div className="text-xs font-mono text-[var(--accent-primary)] font-bold">
              Parte 5 de 5: Expresión Oral
            </div>

            <button
              type="button"
              onClick={() => setActiveArea('diploma')}
              className="flex items-center space-x-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <span>Ver Condecoración & Medalla</span>
              <ChevronRight className="w-4 h-4 text-[var(--accent-primary)]" />
            </button>
          </div>

          <OfficialSpeakingExam
            levelNumber={level.levelNumber}
            audioRate={audioRate}
            onRecordScore={handleRecordSubScore}
          />
        </div>
      )}

      {/* ========================================================================= */}
      {/* VISTA 7: CONDECORACIÓN MILITAR OFICIAL & MEDALLERO (CRUZ DE HIERRO) */}
      {/* ========================================================================= */}
      {activeArea === 'diploma' && (
        <div className="space-y-6">
          {/* Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-[var(--surface-base)] border border-[var(--border-subtle)]">
            <button
              type="button"
              onClick={() => setActiveArea('overview')}
              className="flex items-center space-x-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>Volver a Módulos de Examen</span>
            </button>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setIsEditingStudent(!isEditingStudent)}
                className="px-3 py-1.5 rounded-lg bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
              >
                {isEditingStudent ? 'Cerrar Edición' : 'Editar Datos del Postulante'}
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="px-3 py-1.5 rounded-lg bg-[var(--surface-elevated)] hover:bg-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] border border-[var(--border-subtle)] flex items-center space-x-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                <span>Imprimir Condecoración</span>
              </button>

              {isExamPassed && onRevokeExam && (
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm(`¿Deseas desmarcar la condecoración de prueba del Nivel ${level.levelNumber} y volver a estado pendiente?`)) {
                      onRevokeExam(level.levelNumber);
                      setActiveArea('overview');
                    }
                  }}
                  className="px-3 py-1.5 rounded-lg bg-red-950/70 hover:bg-red-900 border border-red-700/60 text-xs font-mono text-red-200 transition-colors cursor-pointer flex items-center space-x-1"
                  title="Quitar condecoración obtenida en modo prueba"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Quitar Medalla de Prueba</span>
                </button>
              )}

              {(!isExamPassed && meetsPassingStandard) && (
                <button
                  type="button"
                  onClick={handleOfficialPassCertification}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#6e8f2a] to-[#9ac63b] text-black font-stencil font-bold text-xs flex items-center space-x-1 shadow-md cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5 text-black" />
                  <span>Homologar Aprobación</span>
                </button>
              )}
            </div>
          </div>

          {/* Student Editor Form */}
          {isEditingStudent && (
            <form onSubmit={handleSaveStudentInfo} className="p-4 rounded-xl bg-[var(--surface-base)] border border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-[11px] font-mono text-[var(--text-secondary)] mb-1">
                  Grado y Nombre del Postulante:
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-mono text-xs focus:outline-none focus:border-[var(--accent-primary)]"
                  placeholder="Ej: Capitán Martín Fierro"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-[var(--text-secondary)] mb-1">
                  Unidad / Destino Militar:
                </label>
                <input
                  type="text"
                  value={studentUnit}
                  onChange={(e) => setStudentUnit(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-mono text-xs focus:outline-none focus:border-[var(--accent-primary)]"
                  placeholder="Ej: Regimiento de Infantería 1 Patricios"
                />
              </div>
              <div className="sm:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[var(--accent-primary)] text-black font-stencil font-bold text-xs cursor-pointer"
                >
                  Guardar Datos de Condecoración
                </button>
              </div>
            </form>
          )}

          {/* Military Medal Display Component with Velvet Presentation Case, Official Decree, and Full 6-Model Medal Case */}
          <MilitaryMedalDisplay
            level={level}
            studentName={studentName}
            studentUnit={studentUnit}
            isExamPassed={isExamPassed || meetsPassingStandard}
            averageScore={averageScore}
            scores={{
              listening: listeningScore,
              reading: readingScore,
              useOfLanguage: useOfLangScore,
              writing: writingScore,
              speaking: speakingScore
            }}
            onSelectLevel={onSelectLevel}
            onEditStudent={() => setIsEditingStudent(true)}
            onCondecorate={() => {
              if (!isExamPassed && meetsPassingStandard) {
                onPassExam(level.levelNumber);
              }
            }}
          />
        </div>
      )}
    </div>
  );
};
