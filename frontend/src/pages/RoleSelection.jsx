import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaStore } from 'react-icons/fa';

const RoleSelection = () => {
  const navigate = useNavigate();

  const selectRole = (role) => {
    localStorage.setItem('role', role);
    if (role === 'customer') {
      navigate('/login-customer');
    } else if (role === 'seller') {
      navigate('/login-seller');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-4">
            Welcome to <span className="font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">FashionHub</span>
          </h1>
          <p className="text-lg text-gray-600">Choose your journey with us</p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Customer Card */}
          <div
            onClick={() => selectRole('customer')}
            className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
          >
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-purple-100 hover:border-purple-300 transition-all duration-500">
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Icon */}
                <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaUser className="text-4xl text-purple-500" />
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-light text-gray-800">Customer</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Shop the latest trends, discover unique styles, and enjoy a personalized shopping experience
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 text-left w-full">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Browse exclusive collections</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Personalized recommendations</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Easy returns & exchanges</span>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Continue as Customer
                </button>
              </div>
            </div>
          </div>

          {/* Seller Card */}
          <div
            onClick={() => selectRole('seller')}
            className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
          >
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-500">
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Icon */}
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaStore className="text-4xl text-blue-500" />
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-light text-gray-800">Seller</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Showcase your products, manage orders, and grow your business with our platform
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 text-left w-full">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Easy product management</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Real-time order tracking</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Analytics & insights</span>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full bg-gradient-to-r from-blue-400 to-cyan-400 text-white py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Continue as Seller
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            Already have an account? 
            <button 
              onClick={() => navigate('/login-customer')}
              className="ml-2 text-purple-500 hover:text-purple-700 font-medium"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
