import React from 'react';
import { useParams } from 'react-router-dom';
import './Product.module.css';

const Product = () => {
    const { id } = useParams();

    // Sample product data (replace with actual data fetching logic)
    const product = {
        id: id,
        name: "Stylish Dress",
        description: "A classy and trendy dress that makes you feel confident.",
        price: "$49.99",
        imageUrl: "path/to/image.jpg", // Replace with actual image path
    };

    return (
        <div className="product-container">
            <div className="product-image">
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-details">
                <h1 className="product-title">{product.name}</h1>
                <p className="product-description">{product.description}</p>
                <span className="product-price">{product.price}</span>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;