import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {toast} from 'react-toastify'
function Sign() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [name,setName]=useState('');
    const [mobile,setMoile]=useState('+91')
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            toast.warning("password is not matched")
        }else{
            try{
                let response=await fetch("http://localhost:8000/user");
                let data=await response.json();
                let user=data.find(user=>user.username===username || user.email===email);
                if(user){
                    toast.error("Username or Email already exists")
                }else{
                    let data={username,email,name,mobile,password};
                    fetch("http://localhost:8000/user",{
                        method:'POST',
                        headers:{'content-type':'application/json'},
                        body:JSON.stringify(data)
                    }).then((res)=>{
                        Swal.fire("Registered","user registered successfull",'success');
                        navigate('/login');
                    }).catch((err)=>{
                        console.log(err);
                    })
            
                }
            }catch(err){
                console.log(err);
            }
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-custom-1 p-6">
            <div className="bg-custom-4 p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
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
                            placeholder="Username"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline bg-custom-2"
                            id="password"
                            type="password"
                            placeholder="******************"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline bg-custom-2"
                            id="confirm-password"
                            type="password"
                            placeholder="******************"
                            value={password2}
                            onChange={(e)=>setPassword2(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-custom-3 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-600 text-sm mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="font-bold text-custom-3 hover:text-gray-700">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
}
export default Sign;
