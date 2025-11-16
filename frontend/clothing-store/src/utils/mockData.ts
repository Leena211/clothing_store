import { Product, Category } from '../types';

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Women\'s Fashion',
    image: 'https://images.unsplash.com/photo-1485462537746-965f33f7b6f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    productCount: 42
  },
  {
    id: '2',
    name: 'Men\'s Fashion',
    image: 'https://images.unsplash.com/photo-1507680434564-9c4c2db4442b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    productCount: 35
  },
  {
    id: '3',
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55a2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    productCount: 28
  },
  {
    id: '4',
    name: 'Shoes',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    productCount: 31
  },
  {
    id: '5',
    name: 'Kids & Baby',
    image: 'https://images.unsplash.com/photo-1539109136884-43d0e9d63eee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    productCount: 24
  },
  {
    id: '6',
    name: 'Beauty & Health',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    productCount: 19
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Floral Summer Dress',
    price: 49.99,
    originalPrice: 69.99,
    discount: 29,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Women\'s Fashion',
    description: 'Beautiful floral summer dress made from breathable fabric. Perfect for warm weather and casual outings.',
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    colors: ['Pink', 'Blue', 'Yellow'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    price: 59.99,
    originalPrice: 79.99,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Men\'s Fashion',
    description: 'Classic slim fit jeans made from premium denim. Comfortable and stylish for any casual occasion.',
    rating: 4.2,
    reviewCount: 215,
    inStock: true,
    colors: ['Blue', 'Black', 'Light Blue'],
    sizes: ['28', '30', '32', '34', '36']
  },
  {
    id: '3',
    name: 'Leather Crossbody Bag',
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Accessories',
    description: 'Elegant leather crossbody bag with adjustable strap. Perfect for everyday use.',
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    colors: ['Brown', 'Black', 'Tan'],
    sizes: ['One Size']
  },
  {
    id: '4',
    name: 'Running Sneakers',
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Shoes',
    description: 'Lightweight running sneakers with cushioned soles for maximum comfort during workouts.',
    rating: 4.4,
    reviewCount: 156,
    inStock: true,
    colors: ['White/Red', 'Black/White', 'Blue/White'],
    sizes: ['7', '8', '9', '10', '11', '12']
  },
  {
    id: '5',
    name: 'Kids Cartoon T-Shirt',
    price: 19.99,
    originalPrice: 24.99,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Kids & Baby',
    description: 'Cute cartoon printed t-shirt for kids. Made from soft, breathable cotton.',
    rating: 4.6,
    reviewCount: 72,
    inStock: true,
    colors: ['White', 'Blue', 'Pink', 'Yellow'],
    sizes: ['2T', '3T', '4T', '5T', '6T']
  },
  {
    id: '6',
    name: 'Organic Face Cream',
    price: 29.99,
    originalPrice: 34.99,
    discount: 14,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13de241667?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Beauty & Health',
    description: 'Natural and organic face cream for all skin types. Hydrates and nourishes your skin.',
    rating: 4.3,
    reviewCount: 198,
    inStock: true,
    colors: [],
    sizes: ['50ml', '100ml', '200ml']
  },
  {
    id: '7',
    name: 'Denim Jacket',
    price: 69.99,
    originalPrice: 89.99,
    discount: 22,
    image: 'https://images.unsplash.com/photo-1551028719-00167d1e1b0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Women\'s Fashion',
    description: 'Classic denim jacket with a modern fit. Perfect for layering in any season.',
    rating: 4.5,
    reviewCount: 87,
    inStock: true,
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '8',
    name: 'Casual Button-Down Shirt',
    price: 44.99,
    originalPrice: 54.99,
    discount: 18,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Men\'s Fashion',
    description: 'Comfortable casual shirt with a regular fit. Made from breathable cotton fabric.',
    rating: 4.3,
    reviewCount: 134,
    inStock: true,
    colors: ['White', 'Blue', 'Pink', 'Lavender'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  }
];

// Function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return mockProducts.filter(product => product.category === category);
};

// Function to get a single product by ID
export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find(product => product.id === id);
};

// Function to get featured products
export const getFeaturedProducts = (count: number = 4): Product[] => {
  return [...mockProducts].sort(() => 0.5 - Math.random()).slice(0, count);
};
