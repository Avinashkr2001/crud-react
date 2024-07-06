import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Profile.css';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const id = localStorage.getItem('login');
    const navigate=useNavigate();
    
    useEffect(() => {
        const fetchData = async () => {
            if(!id){
                navigate("/login")
            }else{
                try {
                    const response = await fetch("http://localhost:8000/user");
                    const json = await response.json();
                    const data = json.find(var1 => var1.id === id);
                    setUserData(data);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="profile-container">
            {userData && (
                <div className="profile-sidebar">
                    <div className="profile-picture">
                        <img src="https://via.placeholder.com/150" alt="User" />
                    </div>
                    <div></div>
                    <h2 className="profile-name">{userData.name}</h2>
                    <nav className="profile-nav">
                        <Link to="/profile" className="profile-nav-link">Profile</Link>
                        <Link to="/orders" className="profile-nav-link">Orders</Link>
                        <Link to="/settings" className="profile-nav-link">Settings</Link>
                    </nav>
                </div>
            )}
            <div className="profile-content">
                {userData && (
                    <>
                        <div className="profile-section">
                            <h2 className="profile-section-title">Profile Information</h2>
                            <div className="profile-info">
                                <p><strong>Name:</strong> {userData.name}</p>
                                <p><strong>Email:</strong> {userData.email}</p>
                                <p><strong>Phone:</strong> {userData.mobile}</p>
                                <p><strong>Address:</strong> {userData.address}</p>
                            </div>
                            <Link to="/updateprofile" className="btn">Edit Profile</Link>
                        </div>
                        <div className="profile-section">
                            <h2 className="profile-section-title">Recent Orders</h2>
                            <div className="profile-orders">
                                <div className="profile-order">
                                    <p><strong>Order #12345</strong></p>
                                    <p>Date: 2023-04-12</p>
                                    <p>Total: $150.00</p>
                                    <Link to="/order/12345" className="btn">View Order</Link>
                                </div>
                                <div className="profile-order">
                                    <p><strong>Order #12344</strong></p>
                                    <p>Date: 2023-04-10</p>
                                    <p>Total: $75.00</p>
                                    <Link to="/order/12344" className="btn">View Order</Link>
                                </div>
                            </div>
                        </div>
                        <div className="profile-section">
                            <h2 className="profile-section-title">Account Settings</h2>
                            <div className="profile-settings">
                                <p><Link to="/change-password" className="profile-settings-link">Change Password</Link></p>
                                <p><Link to="/manage-addresses" className="profile-settings-link">Manage Addresses</Link></p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Profile;
