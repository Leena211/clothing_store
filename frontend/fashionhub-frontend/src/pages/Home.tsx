import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Categories from '../components/Categories/Categories';
import Footer from '../components/Footer/Footer';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Header />
            <Hero 
                title="Step Into Your Style" 
                subtitle="Where Fashion Finds You" 
            />
            <Categories />
            <Footer />
        </div>
    );
};

export default Home;