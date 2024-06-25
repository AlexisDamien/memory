import { openDB, DBSchema } from 'idb';

interface Category {
  id?: number;
  name: string;
  description: string;
}

interface Theme {
  id?: number;
  categoryId: number; // Added to link to category
  name: string;
  description: string;
}

interface Card {
  id?: number;
  themeId: number;
  question: string;
  answer: string;
}

interface MyDB extends DBSchema {
  categories: {
    key: number;
    value: Category;
  };
  themes: {
    key: number;
    value: Theme;
    indexes: { 'by-category': number };
  };
  cards: {
    key: number;
    value: Card;
    indexes: { 'by-theme': number };
  };
}

const dbPromise = openDB<MyDB>('my-database', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('categories')) {
      db.createObjectStore('categories', { keyPath: 'id', autoIncrement: true });
    }
    if (!db.objectStoreNames.contains('themes')) {
      const store = db.createObjectStore('themes', { keyPath: 'id', autoIncrement: true });
      store.createIndex('by-category', 'categoryId');
    }
    if (!db.objectStoreNames.contains('cards')) {
      const store = db.createObjectStore('cards', { keyPath: 'id', autoIncrement: true });
      store.createIndex('by-theme', 'themeId');
    }
  },
});

export const createTheme = async (theme: Omit<Theme, 'id'>): Promise<void> => {
  const db = await dbPromise;
  const tx = db.transaction('themes', 'readwrite');
  tx.store.add(theme as Theme);
  await tx.done;
};

export const getAllThemes = async (): Promise<Theme[]> => {
  const db = await dbPromise;
  return db.getAll('themes');
};

export const deleteTheme = async (id: number): Promise<void> => {
  const db = await dbPromise;
  const tx = db.transaction('themes', 'readwrite');
  tx.store.delete(id);
  await tx.done;
};

export const createCard = async (card: Omit<Card, 'id'>): Promise<void> => {
  const db = await dbPromise;
  const tx = db.transaction('cards', 'readwrite');
  tx.store.add(card as Card); 
  await tx.done;
};

export const getCardsByTheme = async (themeId: number): Promise<Card[]> => {
  const db = await dbPromise;
  const index = db.transaction('cards').store.index('by-theme');
  return index.getAll(themeId);
};

export const updateCard = async (id: number, updatedCard: Partial<Omit<Card, 'id' | 'themeId'>>): Promise<void> => {
  const db = await dbPromise;
  const tx = db.transaction('cards', 'readwrite');
  const store = tx.store;
  const card = await store.get(id);
  if (card) {
    const updated = { ...card, ...updatedCard };
    store.put(updated);
  }
  await tx.done;
};

export const deleteCard = async (id: number): Promise<void> => {
  const db = await dbPromise;
  const tx = db.transaction('cards', 'readwrite');
  tx.store.delete(id);
  await tx.done;
};

export const createCategory = async (category: Omit<Category, 'id'>): Promise<void> => {
  const db = await dbPromise;
  const tx = db.transaction('categories', 'readwrite');
  tx.store.add(category as Category);
  await tx.done;
};

export const getAllCategories = async (): Promise<Category[]> => {
  const db = await dbPromise;
  return db.getAll('categories');
};

export const updateCategory = async (id: number, updatedCategory: Partial<Omit<Category, 'id'>>): Promise<void> => {
  const db = await dbPromise;
  const tx = db.transaction('categories', 'readwrite');
  const store = tx.store;
  const category = await store.get(id);
  if (category) {
    const updated = { ...category, ...updatedCategory };
    store.put(updated);
  }
  await tx.done;
};

export const deleteCategory = async (id: number): Promise<void> => {
  const db = await dbPromise;
  const tx = db.transaction('categories', 'readwrite');
  tx.store.delete(id);
  await tx.done;
};

export default dbPromise;
