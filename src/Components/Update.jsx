import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const Update = () => {
    const { id } = useParams();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:8000/user/'+id)
        .then((res)=>res.json())
        .then((data)=>{
            setUsername(data.username);
            setEmail(data.email);
            setName(data.name);
            setMobile(data.mobile);
        }).catch((err)=>{
            console.log(err);
        })
    },[id])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data={username,email,name,mobile};
        fetch('http://localhost:8000/user/'+id,{
            method:'PUT',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }).then((res)=>{
            setUsername(res.username)
            setEmail(res.email)
            setName(res.name)
            setMobile(res.mobile)
            Swal.fire("","data updated successfully","success");
            navigate('/admin')
        }).catch((err)=>{
            console.log(err);
        })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-custom-1 p-6">
            <div className="bg-custom-4 p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-4">Update data</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-custom-2"
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-custom-2"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-custom-2"
                            id="username"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Mobile
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline bg-custom-2"
                            id="text"
                            type="text"
                            placeholder="Mobile"
                            value={mobile}
                            onChange={(e)=>setMobile(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-custom-3 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
