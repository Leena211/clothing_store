import React from 'react';
import './Category.module.css';

const Category = () => {
    return (
        <div className="category-container">
            <h1 className="category-title">Explore Our Categories</h1>
            <div className="category-grid">
                {/* Example category cards */}
                <div className="category-card">
                    <h2>Women</h2>
                </div>
                <div className="category-card">
                    <h2>Men</h2>
                </div>
                <div className="category-card">
                    <h2>Kids</h2>
                </div>
                <div className="category-card">
                    <h2>Accessories</h2>
                </div>
            </div>
        </div>
    );
};

export default Category;