import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Fashion Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat"></div>
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center animate-fade-in">
            {/* Hero Title */}
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              FashionHub
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 font-light mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Discover Premium Fashion Collections Curated Just For You
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
              <button className="group relative px-10 py-4 bg-gradient-to-r from-[#8EF4C8] to-[#77D7FF] text-white rounded-2xl font-medium shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10">Shop Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#77D7FF] to-[#8EF4C8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-10 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 text-[#1E1E1E] rounded-2xl font-medium shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white">
                View Collection
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">10K+</div>
                <div className="text-sm text-white/80">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">500+</div>
                <div className="text-sm text-white/80">Brands</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">50K+</div>
                <div className="text-sm text-white/80">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600/80 max-w-2xl mx-auto">
            Handpicked items from our premium collection
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
            <div className="h-80 bg-gradient-to-br from-[#8EF4C8]/20 to-[#77D7FF]/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/40"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-[#1E1E1E]">New</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-[#1E1E1E] mb-3">Classic White Shirt</h3>
              <p className="text-gray-600/80 mb-6 leading-relaxed">Premium cotton white shirt with modern fit</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-3xl font-bold text-[#1E1E1E]">$49.99</span>
                  <span className="text-sm text-gray-500 line-through ml-2">$79.99</span>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-[#8EF4C8] to-[#77D7FF] text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
            <div className="h-80 bg-gradient-to-br from-[#E3D7FF]/20 to-[#8EF4C8]/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/40"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-red-500">-30%</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-[#1E1E1E] mb-3">Blue Denim Jeans</h3>
              <p className="text-gray-600/80 mb-6 leading-relaxed">Classic fit denim jeans with premium fabric</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-3xl font-bold text-[#1E1E1E]">$79.99</span>
                  <span className="text-sm text-gray-500 line-through ml-2">$119.99</span>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-[#8EF4C8] to-[#77D7FF] text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
            <div className="h-80 bg-gradient-to-br from-[#AEEFFF]/20 to-[#E3D7FF]/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/40"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-[#1E1E1E]">Premium</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-[#1E1E1E] mb-3">Black Leather Jacket</h3>
              <p className="text-gray-600/80 mb-6 leading-relaxed">Genuine leather jacket with premium finish</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-3xl font-bold text-[#1E1E1E]">$199.99</span>
                  <span className="text-sm text-gray-500 line-through ml-2">$299.99</span>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-[#8EF4C8] to-[#77D7FF] text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gradient-to-br from-white/80 to-[#E3D7FF]/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600/80 max-w-2xl mx-auto">
              Explore our curated collections across different categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group relative h-64 bg-gradient-to-br from-[#8EF4C8]/30 to-[#77D7FF]/30 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-white/40 group-hover:bg-white/20 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl">👔</span>
                </div>
                <span className="text-lg font-semibold text-[#1E1E1E]">Men</span>
                <span className="text-sm text-gray-600 mt-1">250+ Items</span>
              </div>
            </div>
            
            <div className="group relative h-64 bg-gradient-to-br from-[#E3D7FF]/30 to-[#8EF4C8]/30 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-white/40 group-hover:bg-white/20 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl">👗</span>
                </div>
                <span className="text-lg font-semibold text-[#1E1E1E]">Women</span>
                <span className="text-sm text-gray-600 mt-1">400+ Items</span>
              </div>
            </div>
            
            <div className="group relative h-64 bg-gradient-to-br from-[#AEEFFF]/30 to-[#E3D7FF]/30 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-white/40 group-hover:bg-white/20 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl">👜</span>
                </div>
                <span className="text-lg font-semibold text-[#1E1E1E]">Accessories</span>
                <span className="text-sm text-gray-600 mt-1">150+ Items</span>
              </div>
            </div>
            
            <div className="group relative h-64 bg-gradient-to-br from-[#77D7FF]/30 to-[#AEEFFF]/30 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-white/40 group-hover:bg-white/20 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl">👟</span>
                </div>
                <span className="text-lg font-semibold text-[#1E1E1E]">Shoes</span>
                <span className="text-sm text-gray-600 mt-1">180+ Items</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#8EF4C8]/10 to-[#77D7FF]/10 rounded-3xl p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-4">
              Stay Updated with Latest Trends
            </h2>
            <p className="text-lg text-gray-600/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get exclusive offers, new product alerts, and fashion tips
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl text-[#1E1E1E] placeholder-gray-500 focus:outline-none focus:border-[#8EF4C8] focus:bg-white transition-all duration-300"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-[#8EF4C8] to-[#77D7FF] text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;