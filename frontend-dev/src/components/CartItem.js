import React from 'react';
import { cartAPI } from '../services/api';

const CartItem = ({ item, onUpdate, onRemove }) => {
  const handleQuantityChange = async (newQuantity) => {
    if (newQuantity < 1 || newQuantity > 10) return;
    try {
      await cartAPI.updateCartItem(item._id, { quantity: newQuantity });
      onUpdate();
    } catch (error) {
      alert('Failed to update cart item');
    }
  };

  const handleRemove = async () => {
    if (window.confirm('Remove this item from cart?')) {
      try {
        await cartAPI.removeFromCart(item._id);
        onRemove();
      } catch (error) {
        alert('Failed to remove item');
      }
    }
  };

  return (
    <div className="card" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <img 
        src={item.image || 'https://via.placeholder.com/100'} 
        alt={item.name}
        style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }}
      />
      <div style={{ flex: 1 }}>
        <h3>{item.name}</h3>
        <p>Size: {item.size} | Color: {item.color}</p>
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#007bff' }}>
          ₹{item.price} × {item.quantity} = ₹{item.totalPrice}
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button onClick={() => handleQuantityChange(item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleQuantityChange(item.quantity + 1)}>+</button>
        </div>
        <button onClick={handleRemove} className="btn btn-danger" style={{ padding: '5px 15px' }}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

