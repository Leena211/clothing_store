import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Dummy cart data
  const cartItems = [
    {
      id: 1,
      name: 'Oversized Wool Blazer',
      price: 289.99,
      quantity: 1,
      size: 'M',
      color: 'Black',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=200&h=250&fit=crop'
    },
    {
      id: 2,
      name: 'Tailored Suit Pants',
      price: 159.99,
      quantity: 2,
      size: 'L',
      color: 'Navy',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop'
    },
    {
      id: 3,
      name: 'Silk Evening Dress',
      price: 349.99,
      quantity: 1,
      size: 'S',
      color: 'Champagne',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=250&fit=crop'
    }
  ];

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 300 ? 0 : 19.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-12">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-light tracking-wide text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link 
              to="/products" 
              className="inline-block bg-black text-white px-12 py-4 rounded-full font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-32 h-40 object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">{item.name}</h3>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p>Size: {item.size}</p>
                            <p>Color: {item.color}</p>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-900 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button className="px-3 py-2 hover:bg-gray-50 transition-colors">
                              -
                            </button>
                            <span className="px-4 py-2 font-medium">{item.quantity}</span>
                            <button className="px-3 py-2 hover:bg-gray-50 transition-colors">
                              +
                            </button>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-2xl font-light tracking-wide text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-500">${item.price} each</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-8">
                <h2 className="text-xl font-medium tracking-wide text-gray-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-medium tracking-wide text-gray-900">Total</span>
                      <span className="text-lg font-light tracking-wide text-gray-900">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {shipping > 0 && (
                  <div className="bg-black text-white rounded-lg p-4 mb-6">
                    <p className="text-sm">
                      Add ${(300 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  </div>
                )}

                <div className="space-y-3">
                  <button className="w-full bg-black text-white py-4 rounded-full font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300">
                    Proceed to Checkout
                  </button>
                  <Link 
                    to="/products" 
                    className="block w-full text-center bg-white text-black py-4 rounded-full font-medium tracking-wide border border-gray-300 hover:border-black transition-all duration-300"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Promo Code */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
                <h3 className="text-sm font-medium tracking-wide uppercase text-gray-900 mb-4">Promo Code</h3>
                <div className="flex space-x-2">
                  <input 
                    type="text" 
                    placeholder="Enter promo code"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-black text-sm"
                  />
                  <button className="bg-black text-white px-6 py-3 rounded-md font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300">
                    Apply
                  </button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>30-Day Returns</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Authentic Products</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
