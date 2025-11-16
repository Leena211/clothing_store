import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { orderAPI } from '../services/api';
import OrderTimeline from '../components/OrderTimeline';

const OrderTracking = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [tracking, setTracking] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadOrder();
    loadTracking();
  }, [id]);

  const loadOrder = async () => {
    try {
      const res = await orderAPI.getOrder(id);
      setOrder(res.data.order);
    } catch (error) {
      console.error('Failed to load order:', error);
      alert('Failed to load order');
      navigate('/');
    }
  };

  const loadTracking = async () => {
    try {
      setLoading(true);
      const res = await orderAPI.getOrderTracking(id);
      setTracking(res.data.order);
    } catch (error) {
      console.error('Failed to load tracking:', error);
      alert('Failed to load tracking information');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="container text-center">Loading...</div>;
  }

  if (!tracking || !order) {
    return <div className="container text-center">Order not found</div>;
  }

  return (
    <div className="container">
      <h1>Order Tracking</h1>
      <div className="card" style={{ marginTop: '20px' }}>
        <h2>Order #{order.orderNumber}</h2>
        <p><strong>Status:</strong> {order.orderStatus}</p>
        <p><strong>Total Amount:</strong> ₹{order.totalAmount}</p>
        <p><strong>Placed on:</strong> {new Date(order.createdAt).toLocaleString()}</p>
        {order.trackingNumber && (
          <p><strong>Tracking Number:</strong> {order.trackingNumber}</p>
        )}
        {order.estimatedDelivery && (
          <p><strong>Estimated Delivery:</strong> {new Date(order.estimatedDelivery).toLocaleString()}</p>
        )}
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <OrderTimeline 
          deliveryStatus={tracking.deliveryStatus}
          deliveryUpdates={tracking.deliveryUpdates}
        />
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <h2>Order Items</h2>
        {order.orderItems?.map((item, index) => (
          <div key={index} style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            padding: '15px 0',
            borderBottom: '1px solid #ddd'
          }}>
            <div>
              <h3>{item.name}</h3>
              <p style={{ color: '#666' }}>Size: {item.size} | Color: {item.color} | Qty: {item.quantity}</p>
            </div>
            <div style={{ fontWeight: 'bold' }}>₹{item.totalPrice}</div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <h2>Shipping Address</h2>
        {order.shippingAddress && (
          <p>
            {order.shippingAddress.street}<br />
            {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}<br />
            {order.shippingAddress.country}
          </p>
        )}
      </div>

      <button 
        onClick={() => navigate('/')} 
        className="btn btn-primary"
        style={{ marginTop: '20px' }}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderTracking;

