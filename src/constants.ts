import { Product, Category, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'OVERSIZED T-SHIRT',
    price: 29.99,
    category: 'STREETWEAR',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
    isNew: true
  },
  {
    id: '2',
    name: 'PREMIUM HOODIE',
    price: 59.99,
    category: 'STREETWEAR',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=800&auto=format&fit=crop',
    isNew: true
  },
  {
    id: '3',
    name: 'ESSENTIAL TEE',
    price: 19.99,
    category: 'BASICS',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop',
    isSale: true,
    salePrice: 24.99
  },
  {
    id: '4',
    name: 'HALF ZIP SWEATSHIRT',
    price: 39.99,
    category: 'OUTERWEAR',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1611312449412-6ce97de284d9?q=80&w=800&auto=format&fit=crop',
    isSale: true,
    salePrice: 49.99
  },
  {
    id: '5',
    name: 'CARGO PANTS',
    price: 49.99,
    category: 'BOTTOMS',
    image: 'https://images.unsplash.com/photo-1624371414361-e6e8ea02c1e2?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1517441162446-7c603fd64efd?q=80&w=800&auto=format&fit=crop',
    isNew: true
  },
  {
    id: '6',
    name: 'DENIM JACKET',
    price: 54.99,
    category: 'OUTERWEAR',
    image: 'https://images.unsplash.com/photo-1576872405352-c90f89bc1426?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?q=80&w=800&auto=format&fit=crop',
    isSale: true,
    salePrice: 69.99
  }
];

export const CATEGORIES: Category[] = [
  {
    id: 'new-in',
    name: 'New In',
    image: 'https://images.unsplash.com/photo-1516257984877-a03aae3ac081?q=80&w=1000&auto=format&fit=crop',
    count: '42 items'
  },
  {
    id: 'best-sellers',
    name: 'Best Sellers',
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1000&auto=format&fit=crop',
    count: '18 items'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1509112756314-34a0badb29d4?q=80&w=1000&auto=format&fit=crop',
    count: '24 items'
  },
  {
    id: 'outerwear',
    name: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1000&auto=format&fit=crop',
    count: '12 items'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'James Harrison',
    role: 'Creative Director',
    content: "The quality of craftsmanship at TREND is unparalleled. Each piece feels like an investment in timeless style.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Alexander Sterling',
    role: 'Architect',
    content: "Minimalism done right. The fit and fabric choices represent exactly what the modern man needs today.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop'
  }
];
