export interface FoodItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Burger Combo",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?ixlib=rb-4.0.3",
    description: "Juicy beef burger with fries and drink"
  },
  {
    id: 2,
    name: "Chicken Wings", 
    price: 10.99,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3",
    description: "Crispy wings with special sauce"
  },
  {
    id: 3,
    name: "Burger Combo Deluxe",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3",
    description: "Double patty burger with premium sides"
  },
  {
    id: 4,
    name: "French Fries",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3",
    description: "Crispy golden fries"
  },
  {
    id: 5,
    name: "Chicken Sandwich",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3",
    description: "Crispy chicken sandwich with lettuce"
  },
  {
    id: 6,
    name: "Milkshake",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3",
    description: "Creamy vanilla milkshake"
  }
]; 