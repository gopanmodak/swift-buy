import React from "react";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate =useNavigate()
    const handleOnLogin = () =>{
        navigate("/login")
    }
  return (
    // Full width fixed navbar
    <div className="fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-md">
      
      {/* Inner container */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between items-center p-4">
        
        <div>
          <img src={logo} alt="logo" className="max-w-40 rounded-md mb-3 lg:mb-0" />
        </div>

        <div className="flex gap-4 mb-3 lg:mb-0">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/deals">Deals</NavLink>
          <NavLink to="/new-arrivals">New Arrivals</NavLink>
          <NavLink to="/products">Products</NavLink>
        </div>

        <button className="btn btn-primary" onClick={handleOnLogin}>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
