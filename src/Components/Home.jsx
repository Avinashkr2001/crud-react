import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Home.css';

const Home = () => {
    return (
        <div>
            <div className="slider">
                <div className="slide">
                    <img src="https://via.placeholder.com/1200x500" alt="Slide 1" />
                    <div className="caption">
                        <h2>Welcome to Our E-Commerce Store</h2>
                        <p>Discover amazing products at unbeatable prices.</p>
                        <Link to="/products" className="btn">Shop Now</Link>
                    </div>
                </div>
                <div className="slide">
                    <img src="https://via.placeholder.com/1200x500" alt="Slide 2" />
                    <div className="caption">
                        <h2>Latest Collections</h2>
                        <p>Check out the latest additions to our store.</p>
                        <Link to="/products" className="btn">Explore</Link>
                    </div>
                </div>
                <div className="slide">
                    <img src="https://via.placeholder.com/1200x500" alt="Slide 3" />
                    <div className="caption">
                        <h2>Exclusive Deals</h2>
                        <p>Don't miss out on our special offers.</p>
                        <Link to="/products" className="btn">Get Deals</Link>
                    </div>
                </div>
            </div>
            <div className="information">
                <h2>About Us</h2>
                <p>Welcome to our e-commerce store. We offer a wide variety of products ranging from electronics to clothing. Our mission is to provide high-quality products at affordable prices. We believe in customer satisfaction and strive to offer the best shopping experience.</p>
                <p>We are constantly updating our inventory with the latest trends and products. Stay tuned for exciting offers and new arrivals. Thank you for choosing our store!</p>
            </div>
        </div>
    );
};

export default Home;
