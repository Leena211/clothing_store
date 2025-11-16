import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>FashionHub</h1>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link to="/" className={styles.navLink}>Home</Link>
                    </li>
                    <li>
                        <Link to="/categories" className={styles.navLink}>Categories</Link>
                    </li>
                    <li>
                        <Link to="/products" className={styles.navLink}>Products</Link>
                    </li>
                    <li>
                        <Link to="/about" className={styles.navLink}>About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={styles.navLink}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;