import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { NewItem, Item } from './model';

interface MyDB extends DBSchema {
  items: {
    key: number;
    value: Item;
    valueWithoutKey: NewItem; 
  };
}

const dbPromise = openDB<MyDB>('my-database', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('items')) {
      db.createObjectStore('items', { keyPath: 'id', autoIncrement: true });
    }
  },
});

export const createItem = async (item: NewItem): Promise<void> => {
  const db = await dbPromise;
  const tx = db.transaction('items', 'readwrite');
  tx.store.add(item as any); 
  await tx.done;
};

export const getAllItems = async (): Promise<Item[]> => {
  const db = await dbPromise;
  return db.getAll('items');
};

export const getItemById = async (id: number): Promise<Item | undefined> => {
  const db = await dbPromise;
  return db.get('items', id);
};

export const updateItem = async (id: number, updatedItem: NewItem): Promise<void> => {
  const db = await dbPromise;
  const tx = db.transaction('items', 'readwrite');
  const store = tx.store;
  const item = await store.get(id);
  if (item) {
    const updated = { ...item, ...updatedItem };
    store.put(updated);
  }
  await tx.done;
};

export const deleteItem = async (id: number): Promise<void> => {
  const db = await dbPromise;
  const tx = db.transaction('items', 'readwrite');
  tx.store.delete(id);
  await tx.done;
};

export default dbPromise;
