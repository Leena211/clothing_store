import React from 'react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    image: string;
    title: string;
    price: string;
    onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, onAddToCart }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.price}>{price}</p>
            <button className={styles.button} onClick={onAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;