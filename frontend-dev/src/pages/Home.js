import React, { useState, useEffect } from 'react';
import { productAPI } from '../services/api';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadProducts();
    loadCategories();
  }, [selectedCategory, page]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const params = { page, limit: 12 };
      if (selectedCategory !== 'all') {
        params.category = selectedCategory;
      }
      const res = await productAPI.getProducts(params);
      setProducts(res.data.products || []);
    } catch (error) {
      console.error('Failed to load products:', error);
      alert('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const loadCategories = async () => {
    try {
      const res = await productAPI.getCategories();
      setCategories(res.data.categories || []);
    } catch (error) {
      console.error('Failed to load categories:', error);
    }
  };

  return (
    <div className="container">
      <h1 style={{ marginBottom: '20px' }}>Our Products</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setSelectedCategory('all')}
          className={selectedCategory === 'all' ? 'btn btn-primary' : 'btn btn-secondary'}
          style={{ marginRight: '10px' }}
        >
          All
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? 'btn btn-primary' : 'btn btn-secondary'}
            style={{ marginRight: '10px', marginBottom: '10px' }}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : products.length === 0 ? (
        <div className="text-center">No products found</div>
      ) : (
        <>
          <div className="grid">
            {products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
            <button 
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="btn btn-secondary"
            >
              Previous
            </button>
            <span style={{ padding: '10px' }}>Page {page}</span>
            <button 
              onClick={() => setPage(p => p + 1)}
              className="btn btn-secondary"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

