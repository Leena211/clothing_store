import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingBag, FaTrash, FaStar, FaRegStar } from 'react-icons/fa';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Silk Evening Dress',
      price: 299,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop',
      category: 'Dresses',
      rating: 4.5,
      color: 'Midnight Blue',
      size: 'M'
    },
    {
      id: 2,
      name: 'Cashmere Blend Sweater',
      price: 189,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop',
      category: 'Knitwear',
      rating: 4.8,
      color: 'Cream',
      size: 'L'
    },
    {
      id: 3,
      name: 'Leather Crossbody Bag',
      price: 159,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop',
      category: 'Accessories',
      rating: 4.7,
      color: 'Tan',
      size: 'One Size'
    }
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const addToCart = (item) => {
    // Add to cart logic here
    console.log('Added to cart:', item.name);
    removeFromWishlist(item.id);
  };

  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400 text-xs" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-yellow-400 text-xs opacity-50" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300 text-xs" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light tracking-wide text-gray-900 mb-4">My Wishlist</h1>
          <p className="text-gray-600">Items you've saved for later</p>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <FaHeart className="text-4xl text-gray-400" />
            </div>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Start adding items you love to your wishlist</p>
            <Link 
              to="/products"
              className="inline-block px-8 py-3 bg-black text-white rounded-full font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Wishlist Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {wishlistItems.map((item) => (
                <div key={item.id} className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Link to={`/product/${item.id}`}>
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </Link>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors duration-300"
                    >
                      <FaTrash className="text-gray-600 hover:text-red-500 transition-colors duration-300" />
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">{item.category}</p>
                      <Link to={`/product/${item.id}`}>
                        <h3 className="text-lg font-medium text-gray-900 hover:text-black transition-colors duration-300 mb-2">
                          {item.name}
                        </h3>
                      </Link>
                      <div className="flex items-center mb-2">
                        <div className="flex items-center mr-2">
                          {renderRating(item.rating)}
                        </div>
                        <span className="text-xs text-gray-600">({item.rating})</span>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>Color: <span className="font-medium">{item.color}</span></p>
                        <p>Size: <span className="font-medium">{item.size}</span></p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-2xl font-light tracking-wide text-gray-900">${item.price}</p>
                    </div>
                    
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full bg-black text-white py-3 rounded-full font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <FaShoppingBag className="text-sm" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="text-center space-y-4">
              <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full font-medium tracking-wide hover:border-black hover:text-black transition-all duration-300">
                Clear Wishlist
              </button>
              <div className="text-gray-600">
                <p>Continue shopping for more amazing items</p>
                <Link 
                  to="/products"
                  className="inline-block mt-2 text-black hover:underline font-medium"
                >
                  Browse Products →
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
