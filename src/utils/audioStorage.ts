/**
 * IndexedDB storage for real audio files (MP3, WAV, M4A, OGG)
 * Allows users to upload official audio recordings and keep them permanently in browser storage.
 */

const DB_NAME = 'IESE_Listening_Audio_DB';
const DB_VERSION = 1;
const STORE_NAME = 'audio_files';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported in this environment'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveAudioFile(level: number, exerciseNum: number, file: File | Blob): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const key = `l${level}-ex${exerciseNum}`;

    const record = {
      id: key,
      level,
      exerciseNum,
      name: (file as File).name || `Exercise_${exerciseNum}_audio.mp3`,
      type: file.type || 'audio/mpeg',
      blob: file,
      updatedAt: Date.now()
    };

    const putRequest = store.put(record);
    putRequest.onsuccess = () => resolve();
    putRequest.onerror = () => reject(putRequest.error);
  });
}

export async function getAudioFile(level: number, exerciseNum: number): Promise<{ url: string; name: string } | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const key = `l${level}-ex${exerciseNum}`;

      const getRequest = store.get(key);
      getRequest.onsuccess = () => {
        const result = getRequest.result;
        if (result && result.blob) {
          const url = URL.createObjectURL(result.blob);
          resolve({ url, name: result.name });
        } else {
          resolve(null);
        }
      };
      getRequest.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function deleteAudioFile(level: number, exerciseNum: number): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const key = `l${level}-ex${exerciseNum}`;
      const delRequest = store.delete(key);
      delRequest.onsuccess = () => resolve();
      delRequest.onerror = () => reject(delRequest.error);
    });
  } catch {
    // ignore
  }
}
