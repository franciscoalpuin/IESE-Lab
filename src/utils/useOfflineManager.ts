import { useState, useEffect, useCallback } from 'react';
import {
  getStoredManifest,
  downloadLevelForOffline,
  removeOfflineLevel,
  clearAllOfflineLevels,
  getStorageQuotaEstimate,
  OfflineLevelMetadata
} from './offlineStorage';
import { IESE_LEVELS } from '../data/levelsData';

const SIMULATED_OFFLINE_KEY = 'iese_simulated_offline_mode';

export function useOfflineManager() {
  const [isOnline, setIsOnline] = useState<boolean>(() => {
    return typeof navigator !== 'undefined' ? navigator.onLine : true;
  });

  const [isSimulatedOffline, setIsSimulatedOffline] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem(SIMULATED_OFFLINE_KEY) === 'true';
      } catch {
        return false;
      }
    }
    return false;
  });

  const [manifest, setManifest] = useState<Record<number, OfflineLevelMetadata>>(() => getStoredManifest());
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadingLevel, setDownloadingLevel] = useState<number | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const [downloadStep, setDownloadStep] = useState<string>('');
  const [storageInfo, setStorageInfo] = useState<{ usedKb: number; quotaKb: number; percentage: number }>({
    usedKb: 0,
    quotaKb: 50000,
    percentage: 0
  });

  const refreshManifestAndStorage = useCallback(async () => {
    setManifest(getStoredManifest());
    const quota = await getStorageQuotaEstimate();
    setStorageInfo(quota);
  }, []);

  // Listen to browser network changes & custom offline update events
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    const handleOfflineUpdated = () => refreshManifestAndStorage();

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('iese-offline-updated', handleOfflineUpdated);

    refreshManifestAndStorage();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('iese-offline-updated', handleOfflineUpdated);
    };
  }, [refreshManifestAndStorage]);

  const toggleSimulatedOffline = useCallback(() => {
    setIsSimulatedOffline((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(SIMULATED_OFFLINE_KEY, String(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const downloadLevel = useCallback(async (levelNumber: number) => {
    if (isDownloading) return;
    setIsDownloading(true);
    setDownloadingLevel(levelNumber);
    setDownloadProgress(0);
    setDownloadStep(`Iniciando descarga de Nivel ${levelNumber}...`);

    try {
      await downloadLevelForOffline(levelNumber, (progress, step) => {
        setDownloadProgress(progress);
        setDownloadStep(step);
      });
      await refreshManifestAndStorage();
    } catch (err) {
      console.error('Error downloading level for offline:', err);
      setDownloadStep(`Error al descargar Nivel ${levelNumber}`);
    } finally {
      setIsDownloading(false);
      setDownloadingLevel(null);
    }
  }, [isDownloading, refreshManifestAndStorage]);

  const downloadAllLevels = useCallback(async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    setDownloadProgress(0);

    try {
      const total = IESE_LEVELS.length;
      for (let i = 0; i < total; i++) {
        const level = IESE_LEVELS[i];
        setDownloadingLevel(level.levelNumber);
        setDownloadStep(`Descargando Nivel ${level.levelNumber} (${i + 1}/${total})...`);
        
        await downloadLevelForOffline(level.levelNumber, (prog, step) => {
          // Weighted progress across all 6 levels
          const overallProgress = Math.round((i / total) * 100 + (prog / total));
          setDownloadProgress(overallProgress);
          setDownloadStep(`[Nivel ${level.levelNumber}/6] ${step}`);
        });
      }
      await refreshManifestAndStorage();
      setDownloadStep('¡Los 6 Niveles del IESE han sido guardados para modo offline!');
      setDownloadProgress(100);
    } catch (err) {
      console.error('Error downloading all levels:', err);
      setDownloadStep('Ocurrió un inconveniente al descargar algunos niveles.');
    } finally {
      setIsDownloading(false);
      setDownloadingLevel(null);
    }
  }, [isDownloading, refreshManifestAndStorage]);

  const removeLevel = useCallback(async (levelNumber: number) => {
    await removeOfflineLevel(levelNumber);
    await refreshManifestAndStorage();
  }, [refreshManifestAndStorage]);

  const clearAll = useCallback(async () => {
    await clearAllOfflineLevels();
    await refreshManifestAndStorage();
  }, [refreshManifestAndStorage]);

  const isLevelDownloaded = useCallback((levelNumber: number): boolean => {
    return Boolean(manifest[levelNumber]);
  }, [manifest]);

  const effectiveOffline = !isOnline || isSimulatedOffline;

  return {
    isOnline,
    isSimulatedOffline,
    effectiveOffline,
    toggleSimulatedOffline,
    manifest,
    isDownloading,
    downloadingLevel,
    downloadProgress,
    downloadStep,
    storageInfo,
    downloadLevel,
    downloadAllLevels,
    removeLevel,
    clearAll,
    isLevelDownloaded,
    downloadedCount: Object.keys(manifest).length,
    totalLevelsCount: IESE_LEVELS.length
  };
}
