export interface Product {
  id: string;
  name: string;
  category: 'furniture' | 'lighting' | 'textiles' | 'wallcoverings' | 'flooring' | 'accessories' | 'paint';
  description: string;
  price: number;
  brand: string;
  image: string;
  images?: string[];
  inStock: boolean;
  specifications?: {
    material?: string;
    dimensions?: string;
    color?: string;
    finish?: string;
    [key: string]: string | undefined;
  };
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
