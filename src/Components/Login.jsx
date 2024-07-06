import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login({ handleLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8000/user');
            const data = await res.json();
            const user = data.find(var1 => var1.username === username && var1.password === password);
            if (user) {
                localStorage.setItem('login', user.id);
                handleLogin();
                navigate('/');
            } else {
                toast.error("Invalid user credentials");
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-custom-1 p-2">
            <div className="bg-custom-4 p-4 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-custom-2"
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-custom-2"
                            id="password"
                            type="password"
                            placeholder="******************"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <p className="text-right">
                            <Link to="/forgot-password" className="inline-block align-baseline font-bold text-sm text-custom-3 hover:text-gray-700">
                                Forgot Password?
                            </Link>
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-custom-3 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-600 text-sm mt-4">
                    Don't have an account?{' '}
                    <Link to="/sign" className="font-bold text-custom-3 hover:text-gray-700">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
