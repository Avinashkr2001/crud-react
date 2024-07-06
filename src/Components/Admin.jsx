import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { BsDatabaseAdd } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import "../Css/Admin.css"
import { Create } from "./Create";
export const Admin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [create, setCreate] = useState(false);
    const [data, setData] = useState([]);
    const admin = localStorage.getItem('admin')
    useEffect(() => {
        if (!admin) {
            Swal.fire("Error", "Please login as admin", "error");
            navigate('/adminlogin')
        } else {
            fetch("http://localhost:8000/user")
                .then(response => response.json())
                .then(data => {
                    setData(data);
                }).catch(err => {
                    console.log(err);
                    Swal.fire("Error", "something went wrong", "error");
                });
        }
    }, [location, navigate, location.admin])

    const handleUpdate = (id) => {
        navigate("/update/" + id)
    }
    const handleRemove = (id) => {
        Swal.fire({
            icon: "warning",
            title: "Are you sure!",
            text: "Do you want to remove it",
            showDenyButton: true,
            confirmButtonText: 'Yes Remove it',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8000/user/${id}`, {
                    method: "DELETE",
                }).then(res => res.json())
                    .then(data => {
                        setData(prevData => prevData.filter(item => item.id !== id));
                        Swal.fire("", "Data deleted successfully", "success")
                    }).catch(error => {
                        console.log(error);
                        Swal.fire("Error", "something went wrong", "error");
                    })
            }
        })
    }
    const handleLogout = () => {
        localStorage.removeItem('admin');
        navigate('/')
    }
    return (
        <div className="wrapper">
            <div className="admin-outer-data" style={{ padding: '30px', background: '#000000c4' }}>
                <div className="user-data">
                    <div className='ht-wt'>
                        <h1 className='heading' >User data</h1>
                        <div className='flex gap-10'>
                            <button className="button-add" onClick={() => setCreate(true)}>
                                <BsDatabaseAdd className='add-icon' /><span className='sp-cont'> Add Data</span>
                            </button>
                            <button
                                className="admin-logout-btn"
                                onClick={handleLogout}
                            >
                                
                                Logout<LuLogOut className='admin-logout-btn-icon'/>  
                            </button>
                        </div>

                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Name</th>
                                    <th>Mobile</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td data-label="Id">{item.id}</td>
                                        <td data-label="Username">{item.username}</td>
                                        <td data-label="Email">{item.email}</td>
                                        <td data-label="Name">{item.name}</td>
                                        <td data-label="Mobile">{item.mobile}</td>
                                        <td data-label="Action" >
                                            <div className="update-data-edit">
                                                <MdDelete className='delete' onClick={() => handleRemove(item.id)} />
                                                <CiEdit className='edit' onClick={() => handleUpdate(item.id)} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {create && <Create onClose={() => setCreate(false)} />}
            </div>
        </div>
    )
}