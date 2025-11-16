import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartAPI } from '../services/api';
import CartItem from '../components/CartItem';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      setLoading(true);
      const res = await cartAPI.getCart();
      setCart(res.data.cart);
    } catch (error) {
      console.error('Failed to load cart:', error);
      alert('Failed to load cart');
    } finally {
      setLoading(false);
    }
  };

  const handleCheckout = () => {
    if (!cart || cart.items.length === 0) {
      alert('Cart is empty');
      return;
    }
    navigate('/checkout');
  };

  if (loading) {
    return <div className="container text-center">Loading...</div>;
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="container text-center">
        <h1>Your Cart is Empty</h1>
        <button onClick={() => navigate('/')} className="btn btn-primary mt-20">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginTop: '20px' }}>
        <div>
          {cart.items.map(item => (
            <CartItem 
              key={item._id} 
              item={item}
              onUpdate={loadCart}
              onRemove={loadCart}
            />
          ))}
        </div>
        <div className="card" style={{ height: 'fit-content', position: 'sticky', top: '100px' }}>
          <h2>Order Summary</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <span>Items ({cart.totalItems})</span>
            <span>₹{cart.totalAmount}</span>
          </div>
          <hr style={{ margin: '20px 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: 'bold' }}>
            <span>Total</span>
            <span>₹{cart.totalAmount}</span>
          </div>
          <button 
            onClick={handleCheckout}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '20px' }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

