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
import { driver } from "driver.js";
import "driver.js/dist/driver.css";


const driverObj = driver({
  showProgress: true,
  steps: [
    { element: '.caption', popover: { title: 'Animated Tour Example', description: 'Here is the code example showing animated tour. Let\'s walk you through it.', side: "left", align: 'start' } },
    { element: '.slide', popover: { title: 'Import the Library', description: 'It works the same in vanilla JavaScript as well as frameworks.', side: "bottom", align: 'start' } },
    { element: '.information', popover: { title: 'Importing CSS', description: 'Import the CSS which gives you the default styling for popover and overlay.', side: "bottom", align: 'start' } },
    // { element: 'code .line:nth-child(4) span:nth-child(7)', popover: { title: 'Create Driver', description: 'Simply call the driver function to create a driver.js instance', side: "left", align: 'start' } },
    // { element: 'code .line:nth-child(18)', popover: { title: 'Start Tour', description: 'Call the drive method to start the tour and your tour will be started.', side: "top", align: 'start' } },
    // { element: 'a[href="/docs/configuration"]', popover: { title: 'More Configuration', description: 'Look at this page for all the configuration options you can pass.', side: "right", align: 'start' } },
    { popover: { title: 'Happy Shopping', description: 'And that is all, go ahead and start adding tours to your applications.' } }
  ]
});

driverObj.drive();


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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login handleLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/sign" element={<Sign />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/products' element={<Products />} />
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
