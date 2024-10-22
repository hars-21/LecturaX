import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/navbar.css";
import logo from "/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>

          {/* Navigation Links */}
          <div className={`navbar-links ${isOpen ? "active" : ""}`}>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/support" className="nav-link">
              Support
            </Link>
          </div>

          {/* Login Button */}
          <div className="navbar-login">
            <Link to="/signup" className="animated-btn">
              Create Account
            </Link>
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <div className="menu-toggle">
            <button onClick={toggleMenu} className="menu-button">
              {isOpen ? (
                <img src="/assets/close.svg" alt="Close" />
              ) : (
                <img src="/assets/menu.svg" alt="Menu" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
