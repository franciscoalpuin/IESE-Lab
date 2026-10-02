/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { IESE_LEVELS } from './data/levelsData';
import { LevelSyllabus, UserProgress } from './types';
import { Navbar } from './components/Navbar';
import { ProgressIndicatorBar } from './components/ProgressIndicatorBar';
import { CompetencyTabs, MainTabType } from './components/CompetencyTabs';
import { SyllabusOverview } from './components/SyllabusOverview';
import { ListeningSection } from './components/ListeningSection';
import { ReadingSection } from './components/ReadingSection';
import { UseOfLanguageSection } from './components/UseOfLanguageSection';
import { WritingSection } from './components/WritingSection';
import { SpeakingSection } from './components/SpeakingSection';
import { MilitaryToolkitModal } from './components/MilitaryToolkitModal';
import { ProgressModal } from './components/ProgressModal';
import { StudyReminderToast } from './components/StudyReminderToast';
import { CalendarModal } from './components/CalendarModal';
import { MilitaryTranslatorModal } from './components/MilitaryTranslatorModal';
import { DictionaryModal } from './components/DictionaryModal';
import { DailyMilitaryDispatch } from './components/DailyMilitaryDispatch';
import { Daily120TrainingPlan } from './components/Daily120TrainingPlan';
import { DaySelectorModal } from './components/DaySelectorModal';
import { OfflineStatusBanner } from './components/OfflineStatusBanner';
import { EnglishFromScratchLab } from './components/EnglishFromScratchLab';
import { LevelFinalExam } from './components/LevelFinalExam';
import { SettingsModal } from './components/SettingsModal';
import { getActiveThemeId, applyTheme } from './data/themesData';
import { useOfflineManager } from './utils/useOfflineManager';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Shield, BookOpen, Radio, Award, Calendar, Languages, Settings } from 'lucide-react';

const STORAGE_KEY = 'iese_military_english_progress_v1';

export default function App() {
  const [currentLevel, setCurrentLevel] = useState<LevelSyllabus>(IESE_LEVELS[0]);
  const [currentTab, setCurrentTab] = useState<MainTabType>('listening');
  const [previousTab, setPreviousTab] = useState<MainTabType>('listening');
  const [audioRate, setAudioRate] = useState<number>(0.95);
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [isDaySelectorOpen, setIsDaySelectorOpen] = useState<boolean>(false);
  const [isToolkitOpen, setIsToolkitOpen] = useState<boolean>(false);
  const [isProgressOpen, setIsProgressOpen] = useState<boolean>(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [isTranslatorOpen, setIsTranslatorOpen] = useState<boolean>(false);
  const [isDictionaryOpen, setIsDictionaryOpen] = useState<boolean>(false);
  const [isOfflineOpen, setIsOfflineOpen] = useState<boolean>(false);
  const [isScratchLabOpen, setIsScratchLabOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [activeThemeId, setActiveThemeId] = useState<string>(getActiveThemeId);
  const [isToastDismissed, setIsToastDismissed] = useState<boolean>(false);

  // Apply active theme to document root
  useEffect(() => {
    applyTheme(activeThemeId);
  }, [activeThemeId]);

  // Offline manager hook
  const offline = useOfflineManager();

  // User persistent progress
  const [progress, setProgress] = useState<UserProgress>(() => {
    // 4 days ago initial timestamp so inactivity reminder is immediately testable
    const fourDaysAgoIso = new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString();

    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (!parsed.lastInteractionDate) {
            parsed.lastInteractionDate = fourDaysAgoIso;
          }
          return parsed;
        }
      } catch {
        // Fallback
      }
    }
    return {
      completedExerciseIds: [],
      scores: {},
      levelExamPassed: {},
      notes: {},
      lastLevel: 1,
      lastInteractionDate: fourDaysAgoIso
    };
  });

  // Restore last selected level
  useEffect(() => {
    if (progress.lastLevel && progress.lastLevel >= 1 && progress.lastLevel <= 6) {
      const found = IESE_LEVELS.find(l => l.levelNumber === progress.lastLevel);
      if (found) {
        setCurrentLevel(found);
      }
    }
  }, []);

  // Sync selectedDay to next incomplete day when level changes
  useEffect(() => {
    const completedForLevel = progress.completedDays?.[currentLevel.levelNumber] || [];
    for (let d = 1; d <= 120; d++) {
      if (!completedForLevel.includes(d)) {
        setSelectedDay(d);
        return;
      }
    }
    setSelectedDay(1);
  }, [currentLevel.levelNumber]);

  // Save progress
  const saveProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
    } catch {
      // Ignored
    }
  };

  const handleSelectLevel = (level: LevelSyllabus) => {
    setCurrentLevel(level);
    saveProgress({ ...progress, lastLevel: level.levelNumber });
  };

  const handleToggleSyllabus = () => {
    if (currentTab === 'syllabus') {
      setCurrentTab(previousTab === 'syllabus' ? 'listening' : previousTab);
    } else {
      setPreviousTab(currentTab);
      setCurrentTab('syllabus');
    }
  };

  const handleRecordScore = (exerciseId: string, scorePercentage: number) => {
    const updatedIds = progress.completedExerciseIds.includes(exerciseId)
      ? progress.completedExerciseIds
      : [...progress.completedExerciseIds, exerciseId];

    const nowIso = new Date().toISOString();
    const newProgress: UserProgress = {
      ...progress,
      completedExerciseIds: updatedIds,
      scores: {
        ...progress.scores,
        [exerciseId]: scorePercentage
      },
      lastInteractionDate: nowIso
    };
    saveProgress(newProgress);
  };

  const handlePassExam = (levelNumber: number) => {
    const nowIso = new Date().toISOString();
    const newProgress: UserProgress = {
      ...progress,
      levelExamPassed: {
        ...progress.levelExamPassed,
        [levelNumber]: true
      },
      lastInteractionDate: nowIso
    };
    saveProgress(newProgress);
  };

  const handleCompleteDay = (levelNumber: number, dayNumber: number, minutes: number = 60) => {
    const existingDays = progress.completedDays?.[levelNumber] || [];
    const updatedDays = existingDays.includes(dayNumber)
      ? existingDays
      : [...existingDays, dayNumber].sort((a, b) => a - b);

    const prevMinutes = progress.dailyTrainingMinutes?.[levelNumber] || 0;
    const nowIso = new Date().toISOString();

    const newProgress: UserProgress = {
      ...progress,
      completedDays: {
        ...(progress.completedDays || {}),
        [levelNumber]: updatedDays
      },
      dailyTrainingMinutes: {
        ...(progress.dailyTrainingMinutes || {}),
        [levelNumber]: existingDays.includes(dayNumber) ? prevMinutes : prevMinutes + minutes
      },
      currentDay: {
        ...(progress.currentDay || {}),
        [levelNumber]: Math.min(120, dayNumber + 1)
      },
      lastInteractionDate: nowIso
    };
    saveProgress(newProgress);
  };

  const handleFastForwardDays = (levelNumber: number, targetDays: number) => {
    const newDays = Array.from({ length: targetDays }, (_, i) => i + 1);
    const nowIso = new Date().toISOString();

    const newProgress: UserProgress = {
      ...progress,
      completedDays: {
        ...(progress.completedDays || {}),
        [levelNumber]: newDays
      },
      dailyTrainingMinutes: {
        ...(progress.dailyTrainingMinutes || {}),
        [levelNumber]: targetDays * 60
      },
      currentDay: {
        ...(progress.currentDay || {}),
        [levelNumber]: Math.min(120, targetDays + 1)
      },
      lastInteractionDate: nowIso
    };
    saveProgress(newProgress);
  };

  const handleResetDays = (levelNumber: number) => {
    const nowIso = new Date().toISOString();
    const newProgress: UserProgress = {
      ...progress,
      completedDays: {
        ...(progress.completedDays || {}),
        [levelNumber]: []
      },
      dailyTrainingMinutes: {
        ...(progress.dailyTrainingMinutes || {}),
        [levelNumber]: 0
      },
      currentDay: {
        ...(progress.currentDay || {}),
        [levelNumber]: 1
      },
      lastInteractionDate: nowIso
    };
    saveProgress(newProgress);
  };

  const handleResetProgress = () => {
    const fourDaysAgoIso = new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString();
    const fresh: UserProgress = {
      completedExerciseIds: [],
      scores: {},
      levelExamPassed: {},
      notes: {},
      lastLevel: 1,
      lastInteractionDate: fourDaysAgoIso
    };
    saveProgress(fresh);
    setCurrentLevel(IESE_LEVELS[0]);
    setIsProgressOpen(false);
    setIsToastDismissed(false);
  };

  const handleContinueStudyFromToast = () => {
    setIsToastDismissed(true);
    // If on syllabus overview, transition to the first practical skill section
    if (currentTab === 'syllabus') {
      setCurrentTab('useOfLanguage');
    }
  };

  const handleSimulateInactivity = () => {
    const fourDaysAgoIso = new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString();
    const updated: UserProgress = {
      ...progress,
      lastInteractionDate: fourDaysAgoIso
    };
    saveProgress(updated);
    setIsToastDismissed(false);
  };

  const handleSimulateRecentActivity = () => {
    const nowIso = new Date().toISOString();
    const updated: UserProgress = {
      ...progress,
      lastInteractionDate: nowIso
    };
    saveProgress(updated);
  };

  return (
    <div className="min-h-screen bg-transparent text-[var(--text-primary)] flex flex-col font-tactical selection:bg-[var(--accent-primary)]/30 selection:text-[var(--text-primary)]">
      
      {/* Master Top Header: Cuadrante Superior (IESE) + Cuadrante Central (Expresión del Día) + Cuadrante Inferior (Avance) sobre superficie plana sólida */}
      <header
        id="iese-master-header"
        className="sticky top-0 z-40 relative w-full border-b border-[var(--border-subtle)] bg-[var(--surface-base)]"
      >
        {/* Cuadrante 1: Superior (IESE, Escudo, Selector de Nivel, Controles y Herramientas) - z-30 para desplegables libres */}
        <div className="relative z-30 w-full">
          <Navbar
            levels={IESE_LEVELS}
            currentLevel={currentLevel}
            onSelectLevel={handleSelectLevel}
            onOpenSyllabus={handleToggleSyllabus}
            isSyllabusActive={currentTab === 'syllabus'}
            onOpenDictionary={() => setIsDictionaryOpen(true)}
            isDictionaryActive={isDictionaryOpen}
            onOpenToolkit={() => setIsToolkitOpen(true)}
            onOpenProgress={() => setIsProgressOpen(true)}
            onOpenCalendar={() => setIsCalendarOpen(true)}
            onOpenTranslator={() => setIsTranslatorOpen(true)}
            onOpenOffline={() => setIsOfflineOpen(true)}
            onOpenScratchLab={() => setIsScratchLabOpen(true)}
            onOpenSettings={() => setIsSettingsOpen(true)}
            activeThemeId={activeThemeId}
            onSelectTheme={(themeId) => setActiveThemeId(themeId)}
            isCurrentLevelDownloaded={offline.isLevelDownloaded(currentLevel.levelNumber)}
            downloadedLevelsMap={offline.manifest}
            isEffectiveOffline={offline.effectiveOffline}
            audioRate={audioRate}
            onChangeAudioRate={setAudioRate}
            completedCount={progress.completedExerciseIds.length}
          />
        </div>

        {/* Separador táctico divisorio entre cuadrante IESE y Expresión del Día */}
        <div className="relative z-20 border-t border-[var(--border-subtle)]" />

        {/* Cuadrante 2: Central (Expresión del Día con todo su contenido militar, orígenes, fonética y aplicación) */}
        <div className="relative z-20 w-full">
          <DailyMilitaryDispatch />
        </div>

        {/* Separador táctico divisorio entre Expresión del Día y Cuadrante de Avance */}
        <div className="relative z-10 border-t border-[var(--border-subtle)]" />

        {/* Cuadrante 3: Inferior (Avance Operativo, Nivel, Porcentaje, Micro-Indicadores y Accesos) */}
        <div className="relative z-10 w-full">
          <ProgressIndicatorBar
            currentLevel={currentLevel}
            levels={IESE_LEVELS}
            progress={progress}
            onSelectLevel={handleSelectLevel}
            onOpenProgress={() => setIsProgressOpen(true)}
            onNavigateTab={setCurrentTab}
            isCurrentLevelDownloaded={offline.isLevelDownloaded(currentLevel.levelNumber)}
            isDownloadingCurrentLevel={offline.isDownloading && offline.downloadingLevel === currentLevel.levelNumber}
            onDownloadCurrentLevel={() => offline.downloadLevel(currentLevel.levelNumber)}
            onOpenOfflineModal={() => setIsOfflineOpen(true)}
            selectedDay={selectedDay}
            onOpenDaySelector={() => setIsDaySelectorOpen(true)}
            onSelectDay={setSelectedDay}
          />
        </div>
      </header>

      {/* Offline Connectivity & Study Readiness Banner */}
      <OfflineStatusBanner
        isOnline={offline.isOnline}
        isSimulatedOffline={offline.isSimulatedOffline}
        currentLevel={currentLevel}
        isCurrentLevelDownloaded={offline.isLevelDownloaded(currentLevel.levelNumber)}
        onOpenDownloadManager={() => setIsOfflineOpen(true)}
        onToggleSimulatedOffline={offline.toggleSimulatedOffline}
      />

      {/* 5 Evaluated Areas + Syllabus + Exam Navigation Tabs */}
      <CompetencyTabs
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        selectedDay={selectedDay}
        onOpenDaySelector={() => setIsDaySelectorOpen(true)}
        listeningCount={currentLevel.listening.length}
        readingCount={currentLevel.reading.length}
        useOfLangCount={currentLevel.useOfLanguage.length}
        writingCount={currentLevel.writing.length}
        speakingCount={currentLevel.speaking.length}
        completedDaysCount={progress.completedDays?.[currentLevel.levelNumber]?.length || 0}
        isExamPassed={!!progress.levelExamPassed?.[currentLevel.levelNumber]}
        isLevelQualified={(progress.completedDays?.[currentLevel.levelNumber]?.length || 0) >= 120}
      />

      {/* Main Study Workspace */}
      <ErrorBoundary fallbackDayReset={() => setSelectedDay(1)}>
        <main className="flex-1 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 py-5 sm:py-6">
          {currentTab === 'daily120' && (
            <Daily120TrainingPlan
              level={currentLevel}
              progress={progress}
              onCompleteDay={handleCompleteDay}
              onFastForwardDays={handleFastForwardDays}
              onResetDays={handleResetDays}
              audioRate={audioRate}
              selectedDay={selectedDay}
              onSelectDay={setSelectedDay}
              onOpenDaySelector={() => setIsDaySelectorOpen(true)}
              onNavigateToExam={() => setCurrentTab('finalExam')}
            />
          )}

          {currentTab === 'finalExam' && (
            <LevelFinalExam
              level={currentLevel}
              progress={progress}
              onRecordScore={handleRecordScore}
              onPassExam={handlePassExam}
              onSelectLevel={(lvlNum) => {
                const found = IESE_LEVELS.find(l => l.levelNumber === lvlNum);
                if (found) handleSelectLevel(found);
              }}
              audioRate={audioRate}
              onNavigateTo120Days={() => setCurrentTab('daily120')}
            />
          )}

          {currentTab === 'syllabus' && (
            <SyllabusOverview
              level={currentLevel}
              onNavigateTab={setCurrentTab}
              onClose={handleToggleSyllabus}
              isCurrentLevelDownloaded={offline.isLevelDownloaded(currentLevel.levelNumber)}
              onOpenOfflineModal={() => setIsOfflineOpen(true)}
              onDownloadLevel={() => offline.downloadLevel(currentLevel.levelNumber)}
              isDownloading={offline.isDownloading && offline.downloadingLevel === currentLevel.levelNumber}
            />
          )}

          {currentTab === 'listening' && (
            <ListeningSection
              level={currentLevel}
              onRecordScore={handleRecordScore}
              audioRate={audioRate}
              selectedDay={selectedDay}
              onSelectDay={setSelectedDay}
              onOpenDaySelector={() => setIsDaySelectorOpen(true)}
            />
          )}

          {currentTab === 'reading' && (
            <ReadingSection
              level={currentLevel}
              onRecordScore={handleRecordScore}
              selectedDay={selectedDay}
              onSelectDay={setSelectedDay}
              onOpenDaySelector={() => setIsDaySelectorOpen(true)}
            />
          )}

          {currentTab === 'useOfLanguage' && (
            <UseOfLanguageSection
              level={currentLevel}
              onRecordScore={handleRecordScore}
              selectedDay={selectedDay}
              onSelectDay={setSelectedDay}
              onOpenDaySelector={() => setIsDaySelectorOpen(true)}
            />
          )}

          {currentTab === 'writing' && (
            <WritingSection
              level={currentLevel}
              onRecordScore={handleRecordScore}
              selectedDay={selectedDay}
              onSelectDay={setSelectedDay}
              onOpenDaySelector={() => setIsDaySelectorOpen(true)}
            />
          )}

          {currentTab === 'speaking' && (
            <SpeakingSection
              level={currentLevel}
              onRecordScore={handleRecordScore}
              audioRate={audioRate}
              selectedDay={selectedDay}
              onSelectDay={setSelectedDay}
              onOpenDaySelector={() => setIsDaySelectorOpen(true)}
            />
          )}
        </main>
      </ErrorBoundary>

      {/* Official Footer */}
      <footer className="border-t border-[var(--border-subtle)] bg-[var(--surface-base)] py-8 px-4 sm:px-8 lg:px-10 text-center text-xs text-[var(--text-secondary)]">
        <div className="w-full max-w-[1720px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-[var(--text-secondary)]">
            <Shield className="w-4 h-4 text-[var(--accent-primary)]" />
            <span className="font-stencil font-bold text-[var(--text-primary)]">
              IESE • Escuela de Idiomas del Ejército Argentino
            </span>
          </div>

          <div className="text-[var(--text-muted)] font-mono text-[11px]">
            Programa oficial de 6 niveles (A1+ a B2) • Estándar NATO STANAG 6001
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsToolkitOpen(true)}
              className="hover:text-[var(--accent-primary)] text-[var(--text-secondary)] transition-colors"
            >
              Alfabeto OTAN y Prowords
            </button>
            <span>•</span>
            <button
              onClick={() => setIsProgressOpen(true)}
              className="hover:text-[var(--accent-primary)] text-[var(--text-secondary)] transition-colors"
            >
              Mi Foja de Progreso
            </button>
            <span>•</span>
            <button
              onClick={() => setIsCalendarOpen(true)}
              className="hover:text-[var(--accent-primary)] text-[var(--text-secondary)] transition-colors flex items-center space-x-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Alarma Calendario</span>
            </button>
            <span>•</span>
            <button
              onClick={() => setIsTranslatorOpen(true)}
              className="hover:text-[var(--accent-primary)] text-[var(--text-secondary)] transition-colors flex items-center space-x-1"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>Traductor ES⇄EN</span>
            </button>
            <span>•</span>
            <button
              id="footer-open-settings-btn"
              onClick={() => setIsSettingsOpen(true)}
              className="hover:text-[var(--accent-primary)] text-[var(--text-secondary)] transition-colors flex items-center space-x-1"
              title="Configuración general y temas tácticos"
            >
              <Settings className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>Configuración y Temas</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Inactivity Notification Toast (Over 3 days without completing a lesson) */}
      {!isToastDismissed && (
        <StudyReminderToast
          lastInteractionDate={progress.lastInteractionDate}
          currentLevelNumber={currentLevel.levelNumber}
          currentLevelCefr={currentLevel.cefr}
          onContinueStudy={handleContinueStudyFromToast}
          onDismiss={() => setIsToastDismissed(true)}
          onSimulateActivity={handleSimulateRecentActivity}
          onOpenCalendar={() => setIsCalendarOpen(true)}
        />
      )}

      {/* Modals */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        activeThemeId={activeThemeId}
        onSelectTheme={(themeId) => setActiveThemeId(themeId)}
        audioRate={audioRate}
        onChangeAudioRate={setAudioRate}
        isOnline={offline.isOnline}
        isSimulatedOffline={offline.isSimulatedOffline}
        onToggleSimulatedOffline={offline.toggleSimulatedOffline}
        downloadedCount={offline.downloadedCount}
        totalLevels={6}
        onOpenDownloadManager={() => setIsOfflineOpen(true)}
        onOpenCalendar={() => setIsCalendarOpen(true)}
        progress={progress}
        onResetProgress={handleResetProgress}
        onSimulateInactivity={handleSimulateInactivity}
        onSimulateRecentActivity={handleSimulateRecentActivity}
        currentLevel={currentLevel}
      />

      <MilitaryTranslatorModal
        isOpen={isTranslatorOpen}
        onClose={() => setIsTranslatorOpen(false)}
      />

      <DictionaryModal
        isOpen={isDictionaryOpen}
        onClose={() => setIsDictionaryOpen(false)}
      />

      <EnglishFromScratchLab
        isOpen={isScratchLabOpen}
        onClose={() => setIsScratchLabOpen(false)}
        audioRate={audioRate}
      />

      <MilitaryToolkitModal
        isOpen={isToolkitOpen}
        onClose={() => setIsToolkitOpen(false)}
        audioRate={audioRate}
      />

      <ProgressModal
        isOpen={isProgressOpen}
        onClose={() => setIsProgressOpen(false)}
        progress={progress}
        levels={IESE_LEVELS}
        currentLevelNumber={currentLevel.levelNumber}
        onSelectLevel={handleSelectLevel}
        onResetProgress={handleResetProgress}
        onSimulateInactivity={handleSimulateInactivity}
        onSimulateRecentActivity={handleSimulateRecentActivity}
        onOpenCalendar={() => setIsCalendarOpen(true)}
        onNavigateToExam={(lvlNum) => {
          const targetLvl = IESE_LEVELS.find(l => l.levelNumber === lvlNum);
          if (targetLvl) {
            setCurrentLevel(targetLvl);
          }
          setCurrentTab('finalExam');
        }}
      />

      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        levelNumber={currentLevel.levelNumber}
        cefr={currentLevel.cefr}
      />

      <DaySelectorModal
        isOpen={isDaySelectorOpen}
        onClose={() => setIsDaySelectorOpen(false)}
        selectedDay={selectedDay}
        onSelectDay={(day) => {
          setSelectedDay(day);
        }}
        completedDays={progress.completedDays?.[currentLevel.levelNumber] || []}
        levelNumber={currentLevel.levelNumber}
        levelCefr={currentLevel.cefr}
        onOpenFullDayPlan={() => {
          setCurrentTab('daily120');
        }}
      />

    </div>
  );
}
