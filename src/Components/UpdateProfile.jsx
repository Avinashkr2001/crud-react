import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProfile = () => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const id = localStorage.getItem('login');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (!id) {
                navigate("/login");
            } else {
                try {
                    const response = await fetch("http://localhost:8000/user");
                    const json = await response.json();
                    const data = json.find(user => user.id === id);
                    if (data) {
                        setUsername(data.username);
                        setName(data.name);
                        setEmail(data.email);
                        setMobile(data.mobile);
                        setPassword(data.password);
                        setAddress(data.address);
                        setProfileImage(data.profileImage);
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };
        fetchData();
    }, [id, navigate]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to update it',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!',
        }).then((result) => {
            if (result.isConfirmed) {
                const data={username,name,email,mobile,address,password,'profileImage':profileImage}
                fetch(`http://localhost:8000/user/${id}`, {
        
                    method: 'PUT',
                    headers:{'content-type':'application/json'},
                    body: JSON.stringify(data)
                }).then((response) => {
                    if (response.ok) {
                        Swal.fire('', "Updated successfully", "success");
                        navigate('/profile');
                    } else {
                        Swal.fire('', "Something went wrong", "error");
                    }
                });
            }
        });
    };
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold mb-6">Update Profile</h2>
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Edit Profile</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2 font-semibold">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={e=>setName(e.target.value)}
                            required
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 font-semibold">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                            required
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            readOnly
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="mobile" className="mb-2 font-semibold">Phone:</label>
                        <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            value={mobile}
                            onChange={e=>setMobile(e.target.value)}
                            required
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="address" className="mb-2 font-semibold">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={address}
                            onChange={e=>setAddress(e.target.value)}
                            required
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="profileImage" className="mb-2 font-semibold">Profile Image:</label>
                        <input
                            type="file"
                            id="profileImage"
                            name="profileImage"
                            onChange={e=>setProfileImage(e.target.files[0])}
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};
export default UpdateProfile;
