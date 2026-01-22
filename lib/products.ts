import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Luxury Velvet Sofa',
    category: 'furniture',
    description: 'Premium velvet upholstery sofa with solid wood frame. Perfect for modern luxury interiors.',
    price: 374850,
    brand: 'Eterna Collection',
    image: '/products/sofa-velvet.jpg',
    inStock: true,
    specifications: {
      material: 'Velvet, Solid Wood',
      dimensions: '220cm W x 90cm D x 85cm H',
      color: 'Deep Navy',
      finish: 'Matte Gold Legs'
    },
    featured: true
  },
  {
    id: '2',
    name: 'Crystal Chandelier',
    category: 'lighting',
    description: 'Stunning crystal chandelier with brass finish. Adds elegance to any space.',
    price: 284850,
    brand: 'Lumiere Designs',
    image: '/products/chandelier.jpg',
    inStock: true,
    specifications: {
      material: 'Crystal, Brass',
      dimensions: '80cm Diameter',
      finish: 'Antique Brass'
    },
    featured: true
  },
  {
    id: '3',
    name: 'Italian Marble Coffee Table',
    category: 'furniture',
    description: 'Handcrafted coffee table featuring premium Italian marble and brass accents.',
    price: 239850,
    brand: 'Eterna Collection',
    image: '/products/coffee-table.jpg',
    inStock: true,
    specifications: {
      material: 'Italian Marble, Brass',
      dimensions: '120cm W x 60cm D x 45cm H',
      color: 'White Carrara',
      finish: 'Polished'
    },
    featured: true
  },
  {
    id: '4',
    name: 'Designer Pendant Lights - Set of 3',
    category: 'lighting',
    description: 'Modern pendant lights with geometric design. Perfect for kitchen islands or dining areas.',
    price: 119850,
    brand: 'Modern Light Co.',
    image: '/products/pendants.jpg',
    inStock: true,
    specifications: {
      material: 'Glass, Matte Black Metal',
      dimensions: '30cm Diameter each',
      finish: 'Matte Black'
    }
  },
  {
    id: '5',
    name: 'Silk Decorative Pillows - Set of 4',
    category: 'textiles',
    description: 'Luxurious silk pillows with intricate embroidery. Adds texture and elegance.',
    price: 44850,
    brand: 'Textile Arts',
    image: '/products/pillows.jpg',
    inStock: true,
    specifications: {
      material: '100% Silk',
      dimensions: '50cm x 50cm',
      color: 'Gold/Cream'
    }
  },
  {
    id: '6',
    name: 'Textured Wallpaper Collection',
    category: 'wallcoverings',
    description: 'Premium textured wallpaper with metallic accents. Sold per roll.',
    price: 28350,
    brand: 'Wallcraft',
    image: '/products/wallpaper.jpg',
    inStock: true,
    specifications: {
      material: 'Vinyl with Metallic Finish',
      dimensions: '10m x 0.53m per roll',
      color: 'Silver/Grey',
      finish: 'Textured Metallic'
    }
  },
  {
    id: '7',
    name: 'European Oak Hardwood Flooring',
    category: 'flooring',
    description: 'Premium European oak hardwood flooring with natural oil finish. Price per sq meter.',
    price: 22350,
    brand: 'TimberPro',
    image: '/products/flooring.jpg',
    inStock: true,
    specifications: {
      material: 'European Oak',
      dimensions: '190mm W x 15mm thick',
      color: 'Natural Oak',
      finish: 'Natural Oil'
    },
    featured: true
  },
  {
    id: '8',
    name: 'Gold Framed Mirror',
    category: 'accessories',
    description: 'Large decorative mirror with ornate gold frame. Statement piece for any room.',
    price: 134850,
    brand: 'Eterna Collection',
    image: '/products/mirror.jpg',
    inStock: true,
    specifications: {
      material: 'Glass, Wood Frame',
      dimensions: '120cm W x 180cm H',
      finish: 'Gold Leaf'
    }
  },
  {
    id: '9',
    name: 'Premium Interior Paint',
    category: 'paint',
    description: 'High-quality, low-VOC interior paint. Excellent coverage and durability.',
    price: 11850,
    brand: 'ColorPro',
    image: '/products/paint.jpg',
    inStock: true,
    specifications: {
      material: 'Low-VOC Acrylic',
      dimensions: '5L per can',
      color: 'Warm White',
      finish: 'Matte'
    }
  },
  {
    id: '10',
    name: 'Luxury Area Rug',
    category: 'textiles',
    description: 'Hand-tufted wool rug with modern geometric pattern. Adds warmth and style.',
    price: 194850,
    brand: 'Textile Arts',
    image: '/products/rug.jpg',
    inStock: true,
    specifications: {
      material: '100% Wool',
      dimensions: '200cm x 300cm',
      color: 'Multi-toned Grey',
      finish: 'Hand-tufted'
    },
    featured: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
