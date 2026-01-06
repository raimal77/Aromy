
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  notes: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export type Page = 'home' | 'shop' | 'about' | 'collections' | 'contact';
