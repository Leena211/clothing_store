import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <a href="/about" className={styles.link}>About Us</a>
                    <a href="/contact" className={styles.link}>Contact</a>
                    <a href="/privacy" className={styles.link}>Privacy Policy</a>
                    <a href="/terms" className={styles.link}>Terms of Service</a>
                </div>
                <div className={styles.socials}>
                    <a href="https://facebook.com" className={styles.socialLink}>Facebook</a>
                    <a href="https://instagram.com" className={styles.socialLink}>Instagram</a>
                    <a href="https://twitter.com" className={styles.socialLink}>Twitter</a>
                </div>
                <p className={styles.copy}>© 2023 FashionHub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;