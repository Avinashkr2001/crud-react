import React, { useRef, useState } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";

export const Create = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('123345');
    const navigate = useNavigate();
    const modelRef = useRef();

    const closeModel = (e) => {
        if (modelRef.current === e.target) {
            onClose();
        }
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        const data = { username, email, name, mobile, 'password':password };
        try {
            const response = await fetch('http://localhost:8000/user');
            const result = await response.json();
            const user = result.find((user) => user.email === email || user.username === username);
            if (user) {
                toast.error("Username or Email already exists");
            } else {
                fetch("http://localhost:8000/user", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                }).then((result) => {
                    Swal.fire("Saved", "User added successfully", "success");
                    onClose(); // Fixed typo here
                    navigate('/admin', { state: { data: data } })
                }).catch((err) => {
                    console.log(err);
                    Swal.fire("", "Something went wrong", "error");
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="overlay" ref={modelRef} onClick={closeModel}>
            <div>
                <button className="close" onClick={onClose}><ImCross size={20} className="close-btn-crt" /></button>
                <div className="popup">
                    <div className="popup__content">
                        <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Add a new Data</h2>
                        <form action="" onSubmit={handleAdd} className="create-form">
                            <div className="form-group1">
                                <label htmlFor="Username:"></label>
                                <input className="create-input1" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                                <label htmlFor="Name:"></label>
                                <input className="create-input1" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="form-group2">
                                <label htmlFor="Email:"></label>
                                <input className="create-input2" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                                <label htmlFor="Mobile:"></label>
                                <input className="create-input2" type="text" placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
                            </div>
                            <input className="create-btn" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
