export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Portland, OR",
    rating: 5,
    text: "Brew Haven's Ethiopian Yirgacheffe is absolutely divine! The fruity notes and aroma make every morning special. Their commitment to sustainability is just the cherry on top!",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Marcus Chen",
    location: "Seattle, WA",
    rating: 5,
    text: "As a coffee connoisseur, I'm incredibly picky about my beans. Brew Haven's selection and quality consistently exceed my expectations. Their Sumatra is out of this world!",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Austin, TX",
    rating: 4,
    text: "I've been ordering Brew Haven's coffee for almost a year now. The flavors are exceptional, and their customer service is top-notch. Fast shipping every time!",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "David Park",
    location: "Chicago, IL",
    rating: 5,
    text: "The House Blend has become my daily ritual. Perfect balance, never bitter, and I love knowing that my purchase supports fair trade practices. Will be a customer for life!",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];