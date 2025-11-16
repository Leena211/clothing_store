import React, { useState } from 'react';
import { 
  FaHeart, 
  FaShoppingBag, 
  FaStar,
  FaTimes,
  FaSlidersH,
  FaSearch
} from 'react-icons/fa';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['All', 'Women', 'Men', 'Accessories', 'Shoes'];
  const colors = ['Black', 'White', 'Red', 'Blue', 'Green', 'Pink', 'Yellow', 'Gray'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  
  const products = [
    { id: 1, name: 'Oversized Wool Blazer', price: 15749, category: 'Women', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=500&fit=crop', badge: 'NEW', rating: 4.8, colors: ['Black', 'Gray'], sizes: ['S', 'M', 'L'] },
    { id: 2, name: 'Tailored Suit Pants', price: 11999, category: 'Men', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop', badge: 'HOT', rating: 4.6, colors: ['Black', 'Navy'], sizes: ['M', 'L', 'XL'] },
    { id: 3, name: 'Silk Evening Dress', price: 24999, category: 'Women', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop', badge: 'LIMITED', rating: 4.9, colors: ['Red', 'Black'], sizes: ['XS', 'S', 'M'] },
    { id: 4, name: 'Leather Biker Jacket', price: 32499, category: 'Men', image: 'https://images.unsplash.com/photo-1576871337626-960f461b8948?w=400&h=500&fit=crop', badge: '-20%', rating: 4.7, colors: ['Black', 'Brown'], sizes: ['M', 'L', 'XL', 'XXL'] },
    { id: 5, name: 'Designer Handbag', price: 18999, category: 'Accessories', image: 'https://images.unsplash.com/photo-1584917845444-30f25de5fc68?w=400&h=500&fit=crop', badge: 'NEW', rating: 4.5, colors: ['Black', 'Brown', 'White'], sizes: ['One Size'] },
    { id: 6, name: 'Classic Oxford Shoes', price: 12999, category: 'Shoes', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop', badge: null, rating: 4.4, colors: ['Black', 'Brown'], sizes: ['7', '8', '9', '10', '11'] },
    { id: 7, name: 'Cashmere Sweater', price: 11499, category: 'Women', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop', badge: null, rating: 4.8, colors: ['Gray', 'Cream', 'Pink'], sizes: ['XS', 'S', 'M', 'L'] },
    { id: 8, name: 'Minimal Watch', price: 8999, category: 'Accessories', image: 'https://images.unsplash.com/photo-1523170335258-f5ed142444b9?w=400&h=500&fit=crop', badge: 'SALE', rating: 4.3, colors: ['Black', 'Silver'], sizes: ['One Size'] },
    { id: 9, name: 'Wide Leg Trousers', price: 7469, category: 'Women', image: 'https://images.unsplash.com/photo-1594633312681-960f461b8948?w=400&h=500&fit=crop', badge: '-20%', rating: 4.7, colors: ['Black', 'White'], sizes: ['S', 'M', 'L'] },
    { id: 10, name: 'Denim Jacket', price: 12999, category: 'Men', image: 'https://images.unsplash.com/photo-1551698618-1dfe66d6d624?w=400&h=500&fit=crop', badge: null, rating: 4.6, colors: ['Blue', 'Black'], sizes: ['M', 'L', 'XL'] },
    { id: 11, name: 'Midi Skirt', price: 8999, category: 'Women', image: 'https://images.unsplash.com/photo-1594633312681-960f461b8948?w=400&h=500&fit=crop', badge: null, rating: 4.7, colors: ['Black', 'Red'], sizes: ['XS', 'S', 'M'] },
    { id: 12, name: 'Leather Boots', price: 15999, category: 'Shoes', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop', badge: null, rating: 4.9, colors: ['Black', 'Brown'], sizes: ['6', '7', '8', '9', '10'] },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesColor = selectedColors.length === 0 || product.colors.some(color => selectedColors.includes(color));
    const matchesSize = selectedSizes.length === 0 || product.sizes.some(size => selectedSizes.includes(size));
    const matchesSearch = searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesPrice && matchesColor && matchesSize && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'name': return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  const renderRating = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-2">
                Shop Collection
              </h1>
              <p className="text-gray-600">{sortedProducts.length} products found</p>
            </div>
            
            {/* Search Bar */}
            <div className="mt-4 md:mt-0 relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-medium mb-4">Categories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="mr-2"
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="font-medium mb-4">Price Range</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Colors */}
              <div className="mb-8">
                <h4 className="font-medium mb-4">Colors</h4>
                <div className="grid grid-cols-4 gap-2">
                  {colors.map(color => (
                    <button
                      key={color}
                      onClick={() => {
                        setSelectedColors(prev => 
                          prev.includes(color) 
                            ? prev.filter(c => c !== color)
                            : [...prev, color]
                        );
                      }}
                      className={`w-10 h-10 rounded-full border-2 ${
                        selectedColors.includes(color) ? 'border-black' : 'border-gray-300'
                      }`}
                      style={{ 
                        backgroundColor: color.toLowerCase(),
                        backgroundImage: color === 'White' ? 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)' : 'none',
                        backgroundSize: color === 'White' ? '10px 10px' : 'auto',
                        backgroundPosition: color === 'White' ? '0 0, 0 5px, 5px -5px, -5px 0px' : 'auto'
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-8">
                <h4 className="font-medium mb-4">Sizes</h4>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSizes(prev => 
                          prev.includes(size) 
                            ? prev.filter(s => s !== size)
                            : [...prev, size]
                        );
                      }}
                      className={`px-3 py-2 text-sm border rounded ${
                        selectedSizes.includes(size) 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setPriceRange([0, 50000]);
                  setSelectedColors([]);
                  setSelectedSizes([]);
                  setSearchQuery('');
                }}
                className="w-full py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and Filter Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full"
              >
                <FaSlidersH />
                <span>Filters</span>
              </button>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map(product => (
                  <div key={product.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden bg-gray-100 rounded-lg">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Badge */}
                      {product.badge && (
                        <div className="absolute top-3 left-3 px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                          {product.badge}
                        </div>
                      )}
                      
                      {/* Hover Actions */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center gap-3">
                        <button className="opacity-0 group-hover:opacity-100 bg-white text-black p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-100">
                          <FaShoppingBag />
                        </button>
                        <button className="opacity-0 group-hover:opacity-100 bg-white text-black p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-100">
                          <FaHeart />
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{product.name}</h3>
                      <p className="text-lg font-semibold text-gray-900 mt-1">₹{product.price}</p>
                      {renderRating(product.rating)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setPriceRange([0, 50000]);
                    setSelectedColors([]);
                    setSelectedSizes([]);
                    setSearchQuery('');
                  }}
                  className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
