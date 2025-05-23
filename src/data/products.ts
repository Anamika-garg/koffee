export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  origin: string;
  roastLevel: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Bright and fruity with notes of citrus, berries, and floral undertones.",
    price: 16.99,
    image: "https://images.pexels.com/photos/2074122/pexels-photo-2074122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 4.8,
    reviewCount: 124,
    origin: "Ethiopia",
    roastLevel: "Light Roast",
    isNew: true
  },
  {
    id: 2,
    name: "Colombian Supremo",
    description: "Well-balanced with sweet caramel notes, medium body, and a smooth finish.",
    price: 14.99,
    image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 4.6,
    reviewCount: 98,
    origin: "Colombia",
    roastLevel: "Medium Roast"
  },
  {
    id: 4,
    name: "Guatemala Antigua",
    description: "Spicy and complex with chocolate notes and a velvety body.",
    price: 15.99,
    image: "https://images.pexels.com/photos/373888/pexels-photo-373888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 4.5,
    reviewCount: 76,
    origin: "Guatemala",
    roastLevel: "Medium Roast"
  },
  {
    id: 6,
    name: "House Blend",
    description: "Our signature blend with notes of chocolate, nuts, and caramel.",
    price: 13.99,
    image: "https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 4.6,
    reviewCount: 152,
    origin: "Multi-Origin",
    roastLevel: "Medium Roast"
  },
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Bright and fruity with notes of citrus, berries, and floral undertones.",
    price: 16.99,
    image: "https://images.pexels.com/photos/2074122/pexels-photo-2074122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 4.8,
    reviewCount: 124,
    origin: "Ethiopia",
    roastLevel: "Light Roast",
    isNew: true
  },
  {
    id: 2,
    name: "Colombian Supremo",
    description: "Well-balanced with sweet caramel notes, medium body, and a smooth finish.",
    price: 14.99,
    image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 4.6,
    reviewCount: 98,
    origin: "Colombia",
    roastLevel: "Medium Roast"
  },
];