import React from 'react';
import Footer from './stateless/Footer';
import Header from './Header';

export const HomePage = () => {
    return (
        <div>
            <Header />
            <div className="section"></div>
            <Footer />
        </div>
    );
};

export default HomePage;
