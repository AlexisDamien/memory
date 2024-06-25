import { DBSchema } from "idb";

export interface Category {
  id?: number;
  name: string;
  description: string;
}

export interface Theme {
  id?: number;
  categoryId: number ;
  name: string;
  description: string;
}

export interface Card {
  id?: number;
  themeId: number ;
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
