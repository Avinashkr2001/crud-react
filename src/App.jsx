import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Sign from "./Components/Sign";
import AdminLogin from "./Components/AdminLogin";
import { Admin } from "./Components/Admin";
import Profile from "./Components/Profile";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Update from "./Components/Update";
import UpdateProfile from "./Components/UpdateProfile";
import Products from "./Components/Products";



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('login');
  };
  
  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/login" element={<Login handleLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/sign" element={<Sign />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/products' element={<Products />}/>    
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path='/updateprofile' element={<UpdateProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
