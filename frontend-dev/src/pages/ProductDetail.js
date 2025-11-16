import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productAPI, cartAPI } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      setLoading(true);
      const res = await productAPI.getProduct(id);
      setProduct(res.data.product);
      if (res.data.product.sizes && res.data.product.sizes.length > 0) {
        setSelectedSize(res.data.product.sizes[0].size);
      }
      if (res.data.product.colors && res.data.product.colors.length > 0) {
        setSelectedColor(res.data.product.colors[0]);
      }
    } catch (error) {
      console.error('Failed to load product:', error);
      alert('Failed to load product');
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }

    try {
      await cartAPI.addToCart({
        productId: id,
        size: selectedSize,
        color: selectedColor,
        quantity
      });
      alert('Added to cart!');
      navigate('/cart');
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to add to cart');
    }
  };

  if (loading) {
    return <div className="container text-center">Loading...</div>;
  }

  if (!product) {
    return <div className="container text-center">Product not found</div>;
  }

  const availableSizes = product.sizes?.filter(s => s.stock > 0) || [];
  const imageUrl = product.images && product.images.length > 0 
    ? product.images[0].url 
    : 'https://via.placeholder.com/400';

  return (
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '20px' }}>
        <div>
          <img 
            src={imageUrl}
            alt={product.name}
            style={{ width: '100%', borderRadius: '8px' }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400';
            }}
          />
        </div>
        <div>
          <h1>{product.name}</h1>
          <div style={{ margin: '20px 0' }}>
            <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#007bff' }}>
              ₹{product.price}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <>
                <span style={{ textDecoration: 'line-through', color: '#999', marginLeft: '10px' }}>
                  ₹{product.originalPrice}
                </span>
                <span style={{ color: '#28a745', marginLeft: '10px' }}>
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              </>
            )}
          </div>
          {product.rating > 0 && (
            <div style={{ marginBottom: '20px' }}>
              ⭐ {product.rating.toFixed(1)} ({product.numReviews || 0} reviews)
            </div>
          )}
          <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>{product.description}</p>
          
          <div className="form-group">
            <label>Size</label>
            <select 
              value={selectedSize} 
              onChange={(e) => setSelectedSize(e.target.value)}
              disabled={availableSizes.length === 0}
            >
              {availableSizes.map(size => (
                <option key={size.size} value={size.size}>
                  {size.size} (Stock: {size.stock})
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Color</label>
            <select 
              value={selectedColor} 
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              {product.colors?.map(color => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input 
              type="number" 
              min="1" 
              max="10" 
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            />
          </div>

          <button 
            onClick={handleAddToCart}
            disabled={!product.inStock || availableSizes.length === 0}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '20px' }}
          >
            {product.inStock && availableSizes.length > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

