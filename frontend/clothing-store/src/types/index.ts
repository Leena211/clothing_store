// Product type
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  colors?: string[];
  sizes?: string[];
}

// Category type
export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

// Cart item type
export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

// Order type
export interface Order {
  id: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: Array<{
    product: Product;
    quantity: number;
    size?: string;
    color?: string;
  }>;
  total: number;
  shippingAddress: {
    fullName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: string;
}

// User type
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  orders: string[]; // Array of order IDs
  wishlist: string[]; // Array of product IDs
}

// Auth context type
export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Omit<User, 'id' | 'orders' | 'wishlist'> & { password: string }) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
}

// Cart context type
export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, size?: string, color?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  totalPrice: number;
}
