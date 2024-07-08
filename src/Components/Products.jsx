import React, { useEffect, useState } from 'react';
import '../Css/Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className='items-card'>
            {products.map((product, index) => (
                <div key={index} className="px-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl card-inner">
                    <div className='flex justify-center items-center w-full py-2'>
                        <div className='h-40 w-60 bg-white rounded-xl flex justify-center items-center'>
                            <img className="object-cover object-center w-full h-full" src={product.image} alt={product.title} />
                        </div>
                    </div>
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-800 text-center">{product.title}</h2>
                        <p className="mt-2 text-gray-600">{product.description}</p>
                        <p className="mt-2 text-gray-600 text-center">Price: ${product.price}</p> {/* Price section */}
                        <button className="mt-4 w-70 bg-blue-500 text-white rounded-md px-4 py-2 font-semibold hover:bg-blue-600">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
