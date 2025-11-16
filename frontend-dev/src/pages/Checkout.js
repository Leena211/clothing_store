import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartAPI, orderAPI, authAPI } from '../services/api';

const Checkout = () => {
  const [cart, setCart] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    shippingAddress: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'India',
    },
    paymentInfo: {
      method: 'credit_card',
      transactionId: '',
    },
    notes: '',
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [cartRes, userRes] = await Promise.all([
        cartAPI.getCart(),
        authAPI.getMe()
      ]);
      setCart(cartRes.data.cart);
      setUser(userRes.data.user);
      if (userRes.data.user.address) {
        setFormData(prev => ({
          ...prev,
          shippingAddress: {
            ...prev.shippingAddress,
            ...userRes.data.user.address,
          }
        }));
      }
    } catch (error) {
      console.error('Failed to load data:', error);
      alert('Failed to load checkout data');
      navigate('/cart');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('shippingAddress.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        shippingAddress: {
          ...prev.shippingAddress,
          [field]: value
        }
      }));
    } else if (name.startsWith('paymentInfo.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        paymentInfo: {
          ...prev.paymentInfo,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.shippingAddress.street || !formData.shippingAddress.city) {
      alert('Please fill in all shipping address fields');
      return;
    }

    try {
      setProcessing(true);
      const orderData = {
        ...formData,
        paymentInfo: {
          ...formData.paymentInfo,
          transactionId: `TXN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        }
      };
      const res = await orderAPI.createOrder(orderData);
      alert('Order placed successfully!');
      navigate(`/orders/${res.data.order._id}/tracking`);
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to place order');
    } finally {
      setProcessing(false);
    }
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
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', marginTop: '20px' }}>
          <div>
            <h2>Shipping Address</h2>
            <div className="form-group">
              <label>Street Address</label>
              <input 
                type="text" 
                name="shippingAddress.street"
                value={formData.shippingAddress.street}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input 
                type="text" 
                name="shippingAddress.city"
                value={formData.shippingAddress.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <input 
                type="text" 
                name="shippingAddress.state"
                value={formData.shippingAddress.state}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Zip Code</label>
              <input 
                type="text" 
                name="shippingAddress.zipCode"
                value={formData.shippingAddress.zipCode}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input 
                type="text" 
                name="shippingAddress.country"
                value={formData.shippingAddress.country}
                onChange={handleInputChange}
                required
              />
            </div>

            <h2 style={{ marginTop: '30px' }}>Payment Information</h2>
            <div className="form-group">
              <label>Payment Method</label>
              <select 
                name="paymentInfo.method"
                value={formData.paymentInfo.method}
                onChange={handleInputChange}
              >
                <option value="credit_card">Credit Card</option>
                <option value="debit_card">Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash_on_delivery">Cash on Delivery</option>
                <option value="bank_transfer">Bank Transfer</option>
              </select>
            </div>

            <div className="form-group">
              <label>Notes (Optional)</label>
              <textarea 
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows="4"
              />
            </div>
          </div>

          <div>
            <div className="card">
              <h2>Order Summary</h2>
              <div style={{ marginTop: '20px' }}>
                {cart.items.map(item => (
                  <div key={item._id} style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #ddd' }}>
                    <div>{item.name}</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>
                      {item.size} | {item.color} × {item.quantity}
                    </div>
                    <div style={{ fontWeight: 'bold' }}>₹{item.totalPrice}</div>
                  </div>
                ))}
              </div>
              <hr style={{ margin: '20px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: 'bold' }}>
                <span>Total</span>
                <span>₹{cart.totalAmount}</span>
              </div>
              <button 
                type="submit"
                disabled={processing}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '20px' }}
              >
                {processing ? 'Processing...' : 'Place Order'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

