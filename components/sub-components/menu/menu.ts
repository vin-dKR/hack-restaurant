export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'appetizer' | 'main' | 'dessert';
  isHot: boolean;
  isTrending: boolean;
  tags: string[];
  calories?: number;
  prepTime?: string;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface FilterOptions {
  priceRange: [number, number];
  tags: string[];
  categories: string[];
  dietary: string[];
} 