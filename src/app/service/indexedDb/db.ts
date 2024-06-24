import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface MyDB extends DBSchema {
  items: {
    key: number;
    value: { id?: number; name: string };
  };
}

const dbPromise = openDB<MyDB>('my-database', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('items')) {
      db.createObjectStore('items', { keyPath: 'id', autoIncrement: true });
    }
  },
});

export default dbPromise;
