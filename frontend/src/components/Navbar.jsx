import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaShoppingBag, FaHeart, FaUser, FaBox, FaBars, FaTimes, FaHome, FaTags, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to products page with search query
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Left Section - Back Button and Logo */}
          <div className="flex items-center">
            {/* Back Button */}
            <button
              onClick={() => navigate('/home')}
              className="mr-4 p-2 rounded-2xl text-gray-600 hover:text-[#1E1E1E] hover:bg-gray-100 transition-all duration-300"
              title="Back to Home"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            
            {/* Logo */}
            <Link to="/home" className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#8EF4C8] to-[#77D7FF] rounded-2xl flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-xl font-bold text-white">F</span>
              </div>
              <span className="text-2xl font-semibold bg-gradient-to-r from-[#1E1E1E] via-[#2D2D2D] to-[#1E1E1E] bg-clip-text text-transparent group-hover:from-[#8EF4C8] group-hover:to-[#77D7FF] transition-all duration-300">
                FashionHub
              </span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-12">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products, brands, and more..."
                  className="w-full px-5 py-3 pl-12 pr-4 text-[#1E1E1E] bg-gray-50/80 border border-gray-200/50 rounded-2xl focus:outline-none focus:border-[#8EF4C8] focus:bg-white focus:shadow-lg transition-all duration-300 placeholder-gray-500"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[#8EF4C8] transition-colors duration-300" />
              </div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/home"
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 ${
                isActive('/home')
                  ? 'bg-gradient-to-r from-[#8EF4C8]/20 to-[#77D7FF]/20 text-[#1E1E1E] shadow-md'
                  : 'text-gray-600 hover:text-[#1E1E1E] hover:bg-gray-50'
              }`}
            >
              <FaHome className="text-base" />
              <span>Home</span>
            </Link>
            <Link
              to="/products"
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 ${
                isActive('/products')
                  ? 'bg-gradient-to-r from-[#8EF4C8]/20 to-[#77D7FF]/20 text-[#1E1E1E] shadow-md'
                  : 'text-gray-600 hover:text-[#1E1E1E] hover:bg-gray-50'
              }`}
            >
              <FaTags className="text-base" />
              <span>Categories</span>
            </Link>
            <Link
              to="/cart"
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 ${
                isActive('/cart')
                  ? 'bg-gradient-to-r from-[#8EF4C8]/20 to-[#77D7FF]/20 text-[#1E1E1E] shadow-md'
                  : 'text-gray-600 hover:text-[#1E1E1E] hover:bg-gray-50'
              }`}
            >
              <FaShoppingBag className="text-base" />
              <span>Cart</span>
            </Link>
            <Link
              to="/wishlist"
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 ${
                isActive('/wishlist')
                  ? 'bg-gradient-to-r from-[#8EF4C8]/20 to-[#77D7FF]/20 text-[#1E1E1E] shadow-md'
                  : 'text-gray-600 hover:text-[#1E1E1E] hover:bg-gray-50'
              }`}
            >
              <FaHeart className="text-base" />
              <span>Wishlist</span>
            </Link>
            <Link
              to="/my-orders"
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 ${
                isActive('/my-orders')
                  ? 'bg-gradient-to-r from-[#8EF4C8]/20 to-[#77D7FF]/20 text-[#1E1E1E] shadow-md'
                  : 'text-gray-600 hover:text-[#1E1E1E] hover:bg-gray-50'
              }`}
            >
              <FaBox className="text-base" />
              <span>Track Order</span>
            </Link>
            <Link
              to="/account"
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 ${
                isActive('/account')
                  ? 'bg-gradient-to-r from-[#8EF4C8]/20 to-[#77D7FF]/20 text-[#1E1E1E] shadow-md'
                  : 'text-gray-600 hover:text-[#1E1E1E] hover:bg-gray-50'
              }`}
            >
              <FaUser className="text-base" />
              <span>My Account</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#1E1E1E] hover:text-[#8EF4C8] p-2 transition-colors duration-300"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100/50">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {/* Mobile Search Bar */}
              <div className="pb-4">
                <form onSubmit={handleSearch} className="w-full">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for products..."
                      className="w-full px-4 py-3 pl-12 pr-4 text-[#1E1E1E] bg-gray-50/80 border border-gray-200/50 rounded-2xl focus:outline-none focus:border-[#8EF4C8] focus:bg-white transition-all duration-300 placeholder-gray-500"
                    />
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </form>
              </div>
              
              {/* Mobile Back Button */}
              <button
                onClick={() => navigate('/home')}
                className="flex items-center space-x-3 px-4 py-3 rounded-2xl text-base font-medium text-gray-600 hover:text-[#1E1E1E] hover:bg-gray-100 w-full text-left transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to Home</span>
              </button>
              
              <Link
                to="/home"
                className={`flex items-center space-x-3 px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 ${
                  isActive('/home')
                    ? 'bg-gradient-to-r from-[#8EF4C8]/20 to-[#77D7FF]/20 text-[#1E1E1E] shadow-md'
                    : 'text-gray-600 hover:text-[#1E1E1E] hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaHome className="text-base" />
                <span>Home</span>
              </Link>
              <Link
                to="/products"
                className={`flex items-center space-x-3 px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 ${
                  isActive('/products')
                    ? 'bg-gradient-to-r from-[#8EF4C8]/20 to-[#77D7FF]/20 text-[#1E1E1E] shadow-md'
                    : 'text-gray-600 hover:text-[#1E1E1E] hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaTags className="text-base" />
                <span>Categories</span>
              </Link>
              <Link
                to="/cart"
                className={`flex items-center space-x-3 px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 ${
                  isActive('/cart')
                    ? 'bg-gradient-to-r from-[#8EF4C8]/20 to-[#77D7FF]/20 text-[#1E1E1E] shadow-md'
                    : 'text-gray-600 hover:text-[#1E1E1E] hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaShoppingBag className="text-base" />
                <span>Cart</span>
              </Link>
              <Link
                to="/wishlist"
                className={`flex items-center space-x-3 px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 ${
                  isActive('/wishlist')
                    ? 'bg-gradient-to-r from-[#8EF4C8]/20 to-[#77D7FF]/20 text-[#1E1E1E] shadow-md'
                    : 'text-gray-600 hover:text-[#1E1E1E] hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaHeart className="text-base" />
                <span>Wishlist</span>
              </Link>
              <Link
                to="/my-orders"
                className={`flex items-center space-x-3 px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 ${
                  isActive('/my-orders')
                    ? 'bg-gradient-to-r from-[#8EF4C8]/20 to-[#77D7FF]/20 text-[#1E1E1E] shadow-md'
                    : 'text-gray-600 hover:text-[#1E1E1E] hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaBox className="text-base" />
                <span>Track Order</span>
              </Link>
              <Link
                to="/account"
                className={`flex items-center space-x-3 px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 ${
                  isActive('/account')
                    ? 'bg-gradient-to-r from-[#8EF4C8]/20 to-[#77D7FF]/20 text-[#1E1E1E] shadow-md'
                    : 'text-gray-600 hover:text-[#1E1E1E] hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUser className="text-base" />
                <span>My Account</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 px-4 py-3 rounded-2xl text-base font-medium text-red-500 hover:text-red-600 hover:bg-red-50 w-full text-left transition-all duration-300"
              >
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
