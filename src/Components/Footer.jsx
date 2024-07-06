import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../Css/Footer.css';

const Footer = () => {
    return (
        <footer className="bg-[#B5C18E] text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h5 className="text-xl font-bold mb-2">E-Commerce</h5>
                        <p className="text-sm">
                            Your one-stop shop for all your needs. Quality products at the best prices.
                        </p>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h5 className="text-xl font-bold mb-2">Quick Links</h5>
                        <ul>
                            <li className="mb-2">
                                <Link to="/" className="hover:underline">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/products" className="hover:underline">Products</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/contact" className="hover:underline">Contact</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/cart" className="hover:underline">Cart</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h5 className="text-xl font-bold mb-2">Follow Us</h5>
                        <div className="flex space-x-4">
                            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-2xl hover:text-gray-300" />
                            </Link>
                            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-2xl hover:text-gray-300" />
                            </Link>
                            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-2xl hover:text-gray-300" />
                            </Link>
                            <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl hover:text-gray-300" />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h5 className="text-xl font-bold mb-2">Contact Us</h5>
                        <p className="text-sm">
                            123 E-Commerce St.<br />
                            Shopping City, SC 12345<br />
                            Email: support@ecommerce.com<br />
                            Phone: (123) 456-7890
                        </p>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm">
                    &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
