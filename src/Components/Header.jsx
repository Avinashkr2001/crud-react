import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart, FaSearch, FaChevronDown } from 'react-icons/fa';

const Header = ({ isLoggedIn, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <nav className="bg-[#B5C18E] text-white font-calibri">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold">E-Commerce</Link>
            </div>
            <div className="hidden md:block ml-4">
              <div className="relative left-15">
                <input
                  type="text"
                  className="bg-white text-black rounded-full pl-10 pr-4 py-2 focus:outline-none"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <FaSearch className="absolute right-4 top-2.5 text-gray-500 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/products" className="hover:bg-gray-700 px-3 py-2 rounded-md text-md font-medium" onClick={handleClick}>Products</Link>
            <Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-md font-medium" onClick={handleClick}>Contact</Link>
            <Link to="/cart" className="hover:bg-gray-700 px-3 py-2 rounded-md text-md font-medium" onClick={handleClick}>
              <FaShoppingCart />
            </Link>
            {isLoggedIn ? (
              <div className="relative group">
                <div className="flex items-center px-5 py-4 rounded-md text-md font-medium cursor-pointer">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg" alt="Profile" />
                  </div>
                  <FaChevronDown className="ml-1" />
                </div>
                <div className="absolute right-0 top-14 mt-2 z-10 bg-[#B5C18E] border rounded-md shadow-lg px-4 hidden group-hover:block">
                  <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleClick}>
                    Profile
                  </Link>
                  <Link to="/orders" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleClick}>
                    Orders
                  </Link>
                  <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleLogoutClick}>
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="hover:bg-gray-700 px-3 py-2 rounded-md text-md font-medium" onClick={handleClick}>Login</Link>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes />  <FaBars />}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="relative">
            <input
              type="text"
              className="bg-white text-black rounded-full w-full pl-10 pr-4 py-2 focus:outline-none"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <FaSearch className="absolute right-2 top-2.5 text-gray-500" />
          </div>
          <Link to="/products" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={handleClick}>Products</Link>
          <Link to="/contact" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={handleClick}>Contact</Link>
          <Link to="/cart" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={handleClick}>
            <FaShoppingCart />
          </Link>
          {isLoggedIn ? (
            <>
              <div className="flex items-center px-3 py-2 rounded-md text-base font-medium">
                <Link to="/profile" className="w-10 h-10 rounded-full overflow-hidden" onClick={handleClick}>
                  <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg" alt="Profile" />
                </Link>
              </div>
              <Link to="/orders" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={handleClick}>Orders</Link>
              <button className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left" onClick={handleLogoutClick}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={handleClick}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Header;
