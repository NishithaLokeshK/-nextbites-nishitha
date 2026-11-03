export type Recipe = {
  id: number;
  title: string;
  cuisine: string;
  minutes: number;
  description: string;
  image: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Creamy Pasta",
    cuisine: "Italian",
    minutes: 25,
    description: "Delicious creamy pasta with cheese.",
    image: "🍝",
  },
  {
    id: 2,
    title: "Veggie Pizza",
    cuisine: "Italian",
    minutes: 30,
    description: "Fresh vegetables with melted cheese.",
    image: "🍕",
  },
  {
    id: 3,
    title: "Classic Burger",
    cuisine: "American",
    minutes: 20,
    description: "Juicy burger with fresh vegetables.",
    image: "🍔",
  },
  {
    id: 4,
    title: "Fresh Salad",
    cuisine: "Healthy",
    minutes: 15,
    description: "Healthy salad with fresh ingredients.",
    image: "🥗",
  },
];