import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);

  // Dummy product data
  const product = {
    id: parseInt(id),
    name: 'Oversized Wool Blazer',
    price: 289.99,
    originalPrice: 349.99,
    description: 'Crafted from premium wool blend, this oversized blazer features a modern silhouette with notched lapels and structured shoulders. A versatile piece that effortlessly transitions from professional settings to evening occasions.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=1000&fit=crop',
    category: 'Women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Camel', 'Navy', 'Gray'],
    inStock: true,
    rating: 4.8,
    reviews: 128,
    features: [
      '70% Wool, 30% Polyester',
      'Dry clean only',
      'Made in Italy',
      'Model is 5\'9" wearing size S'
    ]
  };

  const relatedProducts = [
    { id: 2, name: 'Tailored Suit Pants', price: 159.99, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop', badge: 'NEW' },
    { id: 3, name: 'Silk Evening Dress', price: 349.99, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop', badge: 'LIMITED' },
    { id: 4, name: 'Cashmere Sweater', price: 119.99, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop', badge: null },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link to="/" className="text-gray-500 hover:text-gray-900">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/products" className="text-gray-500 hover:text-gray-900">Products</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-50 rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                  <img 
                    src={product.image} 
                    alt={`${product.name} ${i}`} 
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <span className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</span>
              <h1 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mt-2 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? 'text-black' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
              </div>

              <div className="flex items-baseline space-x-3 mb-8">
                <span className="text-3xl font-light tracking-wide text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <span className="text-sm text-red-600 font-medium">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium tracking-wide uppercase">Size</h3>
                <Link to="/size-guide" className="text-gray-600 hover:text-gray-900 transition-colors">Size Guide</Link>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border rounded-md font-medium tracking-wide transition-all duration-300 ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium tracking-wide uppercase mb-4">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-md font-medium tracking-wide transition-all duration-300 ${
                      selectedColor === color
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-black'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium tracking-wide uppercase mb-4">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 py-3 font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-black text-white py-4 rounded-full font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300">
                Add to Cart
              </button>
              <button className="w-full bg-white text-black py-4 rounded-full font-medium tracking-wide border border-gray-300 hover:border-black transition-all duration-300">
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-8 space-y-3">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  {feature}
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="border-t border-gray-200 pt-8">
              <div className="grid grid-cols-2 gap-8 text-sm">
                <div>
                  <Link to="/shipping-returns" className="text-gray-600 hover:text-black underline">Free Shipping & Returns</Link>
                </div>
                <div>
                  <Link to="/returns" className="text-gray-600 hover:text-black underline">30-Day Return Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-light tracking-wide text-gray-900 mb-8">Complete the Look</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group">
                <div className="relative overflow-hidden bg-gray-50 rounded-lg">
                  <Link to={`/product/${relatedProduct.id}`}>
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {relatedProduct.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-white text-black px-3 py-1 text-xs font-medium tracking-wide rounded-full">
                          {relatedProduct.badge}
                        </span>
                      </div>
                    )}
                  </Link>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900">{relatedProduct.name}</h3>
                  <p className="text-xl font-light tracking-wide text-gray-900">${relatedProduct.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
