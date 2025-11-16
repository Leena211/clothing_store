import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cartAPI, authAPI } from '../services/api';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      authAPI.getMe()
        .then(res => setUser(res.data.user))
        .catch(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        });

      cartAPI.getCartCount()
        .then(res => setCartCount(res.data.count || 0))
        .catch(() => {});
    }
  }, []);

  const handleLogout = () => {
    authAPI.logout()
      .then(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setCartCount(0);
        navigate('/login');
      })
      .catch(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
      });
  };

  return (
    <header style={{ 
      backgroundColor: '#333', 
      color: 'white', 
      padding: '15px 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>
          Clothing Store
        </Link>
        <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          {user ? (
            <>
              <span>Hello, {user.name}</span>
              <Link to="/cart" style={{ color: 'white', textDecoration: 'none', position: 'relative' }}>
                Cart
                {cartCount > 0 && (
                  <span style={{
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    padding: '2px 6px',
                    fontSize: '12px',
                    marginLeft: '5px'
                  }}>
                    {cartCount}
                  </span>
                )}
              </Link>
              <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '5px 15px' }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
              <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

