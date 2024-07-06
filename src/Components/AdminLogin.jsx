import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/admin");
            const data = await response.json();
            const admin = data.find(var1 => var1.username === username && var1.password === password)

            if (admin) {
                localStorage.setItem('admin','admin')
                navigate("/admin", { state: { admin: admin } })
                Swal.fire("success", "Admin logged successfully", "success")
            } else {
                Swal.fire("error", "Invalid username or password", "error")
            }
        } catch {
            Swal.fire("An error occured", "something went wrong", "error")
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-custom-1 p-6">
            <div className="bg-custom-4 p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
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
            </div>
        </div>
    );
}

export default AdminLogin;
