// Tipos principais
export interface Restaurant {
  id: number;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  categories: string[];
  dishes: Dish[]; // Pratos principais
  recommendedBeverages?: Beverage[]; // Bebidas recomendadas
  recommendedDesserts?: Dessert[]; // Sobremesas recomendadas
}

export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  ingredients?: string[];
  reviews?: Review[];
  accompaniments?: DishAccompaniments;
  suggestedAddOns?: Dish[];
}

// Tipos de Bebidas e Sobremesas
export interface Beverage {
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface Dessert {
  name: string;
  price: number;
  description: string;
  image: string;
}

// Acompanhamentos dos pratos
export interface DishAccompaniments {
  free?: Accompaniment[];
  paid?: Accompaniment[];
}

export interface Accompaniment {
  id: number;
  name: string;
  price: number;
  image?: string; // Adicionado para suportar imagens
  emoji?: string; // Temporário para compatibilidade
  available?: boolean;
}

// Outras interfaces como Review e CartItem já existentes
export interface Review {
  author: string;
  rating: number;
  comment: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  note?: string;
  selectedAccompaniments?: {
    free: Accompaniment[];
    paid: Accompaniment[];
  };
}

export interface Category {
  id: number;
  name: string;
  image: string;
}
