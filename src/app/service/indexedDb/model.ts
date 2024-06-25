export interface NewItem {
    name: string,
    description: string,
  }
  
  export interface Item extends NewItem {
    id: number;
    
  }
  