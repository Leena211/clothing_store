import React from 'react';
import { Link } from 'react-router-dom';
import { productAPI } from '../services/api';

const ProductCard = ({ product }) => {
  const imageUrl = product.images && product.images.length > 0 
    ? product.images[0].url 
    : '/placeholder.jpg';

  return (
    <div className="card" style={{ 
      display: 'flex', 
      flexDirection: 'column',
      transition: 'transform 0.2s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img 
          src={imageUrl} 
          alt={product.name}
          style={{ 
            width: '100%', 
            height: '250px', 
            objectFit: 'cover',
            borderRadius: '4px',
            marginBottom: '10px'
          }}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/250';
          }}
        />
        <h3 style={{ marginBottom: '10px', color: '#333' }}>{product.name}</h3>
        <p style={{ color: '#666', marginBottom: '10px', fontSize: '14px' }}>
          {product.description?.substring(0, 100)}...
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#007bff' }}>
            ₹{product.price}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>
              ₹{product.originalPrice}
            </span>
          )}
        </div>
        {product.rating > 0 && (
          <div style={{ marginTop: '10px' }}>
            ⭐ {product.rating.toFixed(1)} ({product.numReviews || 0} reviews)
          </div>
        )}
        {!product.inStock && (
          <div style={{ marginTop: '10px', color: '#dc3545', fontWeight: 'bold' }}>
            Out of Stock
          </div>
        )}
      </Link>
    </div>
  );
};

export default ProductCard;

