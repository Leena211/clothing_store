import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '../types';

// Create the context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data - in a real app, this would come from an API
const MOCK_USER: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  avatar: 'https://i.pravatar.cc/150?img=1',
  address: {
    street: '123 Fashion Street',
    city: 'Style City',
    state: 'Trend',
    zipCode: '10001',
    country: 'Fashionland'
  },
  orders: ['1', '2'],
  wishlist: ['1', '3', '5']
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Check if user is logged in on initial load
  useEffect(() => {
    // In a real app, you would check for an auth token in localStorage
    // and validate it with your backend
    const token = localStorage.getItem('authToken');
    
    if (token) {
      // Simulate API call to get user data
      setTimeout(() => {
        setUser(MOCK_USER);
        setLoading(false);
      }, 500);
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would validate credentials with your backend
      if (email === 'test@example.com' && password === 'password') {
        localStorage.setItem('authToken', 'dummy-token');
        setUser(MOCK_USER);
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: Omit<User, 'id' | 'orders' | 'wishlist'> & { password: string }) => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would send this data to your backend
      const newUser: User = {
        ...userData,
        id: Math.random().toString(36).substr(2, 9),
        orders: [],
        wishlist: []
      };
      
      localStorage.setItem('authToken', 'dummy-token');
      setUser(newUser);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    loading,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
