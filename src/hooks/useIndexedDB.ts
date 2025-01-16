import { useState, useEffect } from "react";

// Define types for the IndexedDB database and transaction results
interface IndexedDBService {
  setIndexedDB: <T>(key: string, value: T) => Promise<boolean>;
  getIndexedDB: <T>(key: string) => Promise<T | null>;
}

// Function to initialize the IndexedDB database
const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("myDatabase", 1);

    request.onerror = () => reject("Database error");

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBRequest).result;
      if (!db.objectStoreNames.contains("keyValueStore")) {
        db.createObjectStore("keyValueStore");
      }
    };

    request.onsuccess = (event) => resolve((event.target as IDBRequest).result);
  });
};

// Custom hook for IndexedDB operations
export const useIndexedDB = (): IndexedDBService => {
  const [db, setDb] = useState<IDBDatabase | null>(null);

  // Open the database once on mount
  useEffect(() => {
    openDB()
      .then((database) => {
        setDb(database);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Function to set a value in IndexedDB
  const setIndexedDB = <T>(key: string, value: T): Promise<boolean> => {
    if (db) {
      return new Promise((resolve, reject) => {
        const transaction = db.transaction("keyValueStore", "readwrite");
        const store = transaction.objectStore("keyValueStore");
        const request = store.put(value, key);

        request.onsuccess = () => resolve(true);
        request.onerror = () => reject("Failed to set value in IndexedDB");
      });
    } else {
      return Promise.reject("Database is not ready");
    }
  };

  // Function to get a value from IndexedDB
  const getIndexedDB = <T>(key: string): Promise<T | null> => {
    if (db) {
      return new Promise((resolve, reject) => {
        const transaction = db.transaction("keyValueStore", "readonly");
        const store = transaction.objectStore("keyValueStore");
        const request = store.get(key);

        request.onsuccess = (event) => {
          const result = (event.target as IDBRequest).result;
          resolve(result || null);
        };
        request.onerror = () => reject("Failed to get value from IndexedDB");
      });
    } else {
      return Promise.reject("Database is not ready");
    }
  };

  return { setIndexedDB, getIndexedDB };
};
