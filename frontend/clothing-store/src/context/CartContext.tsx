import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem, CartContextType } from '../types';

// Create the context with default values
const CartContext = createContext<CartContextType | undefined>(undefined);

// Helper function to calculate total price
const calculateTotalPrice = (items: CartItem[]): number => {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [itemCount, setItemCount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setItems(parsedCart);
      updateCartTotals(parsedCart);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('cart', JSON.stringify(items));
    } else {
      localStorage.removeItem('cart');
    }
    updateCartTotals(items);
  }, [items]);

  const updateCartTotals = (cartItems: CartItem[]) => {
    setItemCount(cartItems.reduce((count, item) => count + item.quantity, 0));
    setTotalPrice(calculateTotalPrice(cartItems));
  };

  const addToCart = (product: Product, quantity: number = 1, size?: string, color?: string) => {
    setItems(prevItems => {
      // Check if the product is already in the cart with the same size and color
      const existingItemIndex = prevItems.findIndex(
        item => 
          item.id === product.id && 
          item.selectedSize === size && 
          item.selectedColor === color
      );

      if (existingItemIndex >= 0) {
        // If item exists, update the quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        return updatedItems;
      } else {
        // If item doesn't exist, add it to the cart
        const newItem: CartItem = {
          ...product,
          quantity,
          selectedSize: size,
          selectedColor: color
        };
        return [...prevItems, newItem];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setItemCount(0);
    setTotalPrice(0);
    localStorage.removeItem('cart');
  };

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    itemCount,
    totalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
