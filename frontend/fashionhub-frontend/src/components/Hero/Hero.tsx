import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
    return (
        <div className={styles.heroContainer}>
            <h1 className={styles.heroTitle}>Step Into Your Style</h1>
            <p className={styles.heroSubtitle}>Where Fashion Finds You</p>
            <button className={styles.heroButton}>Find Your Perfect Look</button>
        </div>
    );
};

export default Hero;