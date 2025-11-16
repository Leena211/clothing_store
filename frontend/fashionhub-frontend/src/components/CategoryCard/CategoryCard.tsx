import React from 'react';
import styles from './CategoryCard.module.css';

interface CategoryCardProps {
    title: string;
    imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageUrl }) => {
    return (
        <div className={styles.categoryCard}>
            <img src={imageUrl} alt={title} className={styles.categoryImage} />
            <h3 className={styles.categoryTitle}>{title}</h3>
        </div>
    );
};

export default CategoryCard;