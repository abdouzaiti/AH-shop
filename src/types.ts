export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  hoverImage: string;
  isNew?: boolean;
  isSale?: boolean;
  salePrice?: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}
