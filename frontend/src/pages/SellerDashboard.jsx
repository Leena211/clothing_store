import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SellerDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    const role = localStorage.getItem('role');
    if (!userData || role !== 'seller') {
      navigate('/');
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  const stats = [
    { label: 'Total Revenue', value: '₹2,45,678', letter: 'R' },
    { label: 'Active Orders', value: '47', letter: 'O' },
    { label: 'Products Listed', value: '124', letter: 'P' },
    { label: 'Customer Rating', value: '4.8★', letter: 'S' }
  ];

  const products = [
    { id: 1, name: 'Floral Summer Dress', price: 6999, stock: 15, orders: 23, image: 'https://images.unsplash.com/photo-1594633312681-960f461b8948?w=300&h=400&fit=crop' },
    { id: 2, name: 'Classic White Shirt', price: 4599, stock: 32, orders: 45, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop' },
    { id: 3, name: 'Leather Handbag', price: 9999, stock: 8, orders: 12, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop' },
    { id: 4, name: 'Running Sneakers', price: 6299, stock: 25, orders: 34, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop' }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pinterest-aqua/20 via-pinterest-cream/15 to-pinterest-blush/20"></div>
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-pinterest-grey/30 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/dashboard-seller" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-pinterest-aqua to-pinterest-cream rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-pinterest-text font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-light bg-gradient-to-r from-pinterest-aqua via-pinterest-cream to-pinterest-blush bg-clip-text text-transparent">
                FashionHub
              </span>
            </a>

            {/* Nav Items */}
            <div className="flex items-center space-x-6">
              <a href="/dashboard-seller" className="group relative p-2 rounded-full hover:bg-pinterest-cream/50 transition-all duration-300">
                <span className="text-lg text-pinterest-text">D</span>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-pinterest-text opacity-0 group-hover:opacity-100 transition-opacity duration-300">Dashboard</span>
              </a>
              <a href="/products" className="group relative p-2 rounded-full hover:bg-pinterest-cream/50 transition-all duration-300">
                <span className="text-lg text-pinterest-text">P</span>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-pinterest-text opacity-0 group-hover:opacity-100 transition-opacity duration-300">Products</span>
              </a>
              <a href="/orders" className="group relative p-2 rounded-full hover:bg-pinterest-cream/50 transition-all duration-300">
                <span className="text-lg text-pinterest-text">O</span>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-pinterest-text opacity-0 group-hover:opacity-100 transition-opacity duration-300">Orders</span>
              </a>
              <a href="/analytics" className="group relative p-2 rounded-full hover:bg-pinterest-cream/50 transition-all duration-300">
                <span className="text-lg text-pinterest-text">A</span>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-pinterest-text opacity-0 group-hover:opacity-100 transition-opacity duration-300">Analytics</span>
              </a>
              <a href="/" className="group relative p-2 rounded-full hover:bg-pinterest-cream/50 transition-all duration-300">
                <span className="text-lg text-pinterest-text">L</span>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-pinterest-text opacity-0 group-hover:opacity-100 transition-opacity duration-300">Logout</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-12 animate-fade-in">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-premium p-10 border border-pinterest-grey/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-4xl font-light text-pinterest-text mb-3">
                  Seller Dashboard
                </h1>
                <p className="text-xl text-pinterest-text/70 font-light">
                  Manage your boutique and track your performance
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <button className="px-8 py-4 bg-gradient-to-r from-pinterest-aqua to-pinterest-cream text-pinterest-text rounded-full font-light hover:shadow-premium transform hover:scale-105 transition-all duration-500">
                  Add New Product
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-soft hover:shadow-premium transition-all duration-700 p-8 border border-pinterest-grey/20 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pinterest-aqua to-pinterest-cream rounded-full flex items-center justify-center">
                  <span className="text-lg text-pinterest-text font-light">{stat.letter}</span>
                </div>
                <span className="text-3xl font-light text-pinterest-aqua">→</span>
              </div>
              <p className="text-3xl font-light text-pinterest-text mb-2">{stat.value}</p>
              <p className="text-pinterest-text/70 font-light">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Products Table */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-premium p-10 border border-pinterest-grey/20 animate-slide-up">
          <h2 className="text-2xl font-medium text-pinterest-text mb-8">Your Products</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-pinterest-grey/30">
                  <th className="text-left py-4 px-4 text-pinterest-text font-light">Product</th>
                  <th className="text-left py-4 px-4 text-pinterest-text font-light">Price</th>
                  <th className="text-left py-4 px-4 text-pinterest-text font-light">Stock</th>
                  <th className="text-left py-4 px-4 text-pinterest-text font-light">Orders</th>
                  <th className="text-left py-4 px-4 text-pinterest-text font-light">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-pinterest-grey/20 hover:bg-pinterest-cream/30 transition-colors duration-300">
                    <td className="py-6 px-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 rounded-2xl object-cover"
                        />
                        <div>
                          <p className="text-pinterest-text font-medium">{product.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-4 text-pinterest-text font-light">₹{product.price.toLocaleString('en-IN')}</td>
                    <td className="py-6 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-light ${
                        product.stock > 20 
                          ? 'bg-pinterest-aqua/20 text-pinterest-aqua' 
                          : 'bg-pinterest-blush/20 text-pinterest-blush'
                      }`}>
                        {product.stock} units
                      </span>
                    </td>
                    <td className="py-6 px-4 text-pinterest-text font-light">{product.orders}</td>
                    <td className="py-6 px-4">
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 bg-pinterest-aqua/20 text-pinterest-aqua rounded-full font-light hover:bg-pinterest-aqua/30 transition-colors duration-300">
                          Edit
                        </button>
                        <button className="px-4 py-2 bg-pinterest-blush/20 text-pinterest-blush rounded-full font-light hover:bg-pinterest-blush/30 transition-colors duration-300">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;