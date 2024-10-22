import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/navbar.css";
import logo from "/assets/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    setIsVisible(true);

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="">
            <img src={logo} alt="Logo" className="logo" />
          </Link>

          {/* Navigation Links */}
          <div
            className={`navbar-links ${isOpen ? "active" : ""} ${
              isVisible ? "nav-visible" : "nav-hidden"
            }`}
          >
            <Link to="/" className="nav-link underline-animation">
              Home
            </Link>
            <Link to="/pricing" className="nav-link underline-animation">
              Pricing
            </Link>
            <Link to="/about" className="nav-link underline-animation">
              About Us
            </Link>
            <Link to="/support" className="nav-link underline-animation">
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
              {isOpen ? <IoClose /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
