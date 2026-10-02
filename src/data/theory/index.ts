import { CompetencyType, AxisTheoryModule } from '../../types';
import { listeningTheoryLevels } from './listeningTheory';
import { readingTheoryLevels } from './readingTheory';
import { useOfLanguageTheoryLevels } from './useOfLanguageTheory';
import { writingTheoryLevels } from './writingTheory';
import { speakingTheoryLevels } from './speakingTheory';

export const getAxisTheoryModule = (axis: CompetencyType, levelNumber: number): AxisTheoryModule => {
  const safeLevel = Math.min(Math.max(levelNumber, 1), 6);
  
  switch (axis) {
    case 'listening':
      return listeningTheoryLevels[safeLevel] || listeningTheoryLevels[1];
    case 'reading':
      return readingTheoryLevels[safeLevel] || readingTheoryLevels[1];
    case 'useOfLanguage':
      return useOfLanguageTheoryLevels[safeLevel] || useOfLanguageTheoryLevels[1];
    case 'writing':
      return writingTheoryLevels[safeLevel] || writingTheoryLevels[1];
    case 'speaking':
      return speakingTheoryLevels[safeLevel] || speakingTheoryLevels[1];
    default:
      return listeningTheoryLevels[1];
  }
};
