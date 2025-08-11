import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import logo from "/assets/logo.png";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();
  const { user, signout, isLoading } = useAuth();

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle signout
  const handleSignout = useCallback(async () => {
    try {
      await signout();
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Signout error:", error);
    }
  }, [signout]);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (Math.abs(currentScrollY - lastScrollY) < 10) return;

    if (currentScrollY < lastScrollY || currentScrollY < 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    let timeoutId;

    const throttledScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 16);
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".navbar")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Navigation items array for better maintainability
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/pricing", label: "Pricing" },
    { path: "/about", label: "About Us" },
    { path: "/support", label: "Support" },
  ];

  return (
    <>
      <nav className={`navbar ${isVisible ? "navbar-visible" : "navbar-hidden"}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo" aria-label="LecturaX Home">
            <img src={logo} alt="LecturaX Logo" className="logo" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className={`navbar-links ${isVisible ? "nav-visible" : "nav-hidden"}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link underline-animation ${
                  location.pathname === item.path ? "active" : ""
                }`}
                aria-current={location.pathname === item.path ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Links */}
          <div className={`navbar-links-m ${isOpen ? "active" : ""}`}>
            {navItems.map((item) => (
              <Link
                key={`mobile-${item.path}`}
                to={item.path}
                className={`nav-link underline-animation ${
                  location.pathname === item.path ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={location.pathname === item.path ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-options">
            {/* Auth Buttons */}
            {!isLoading && !user && (
              <Link to="/signup" className="animated-btn" aria-label="Create Account">
                Create Account
              </Link>
            )}

            {!isLoading && user && (
              <>
                <Link to="/dashboard" className="animated-btn" aria-label="Go to Dashboard">
                  Dashboard
                </Link>
                <button
                  onClick={handleSignout}
                  className="animated-btn signout-btn"
                  aria-label="Signout"
                >
                  Signout
                </button>
              </>
            )}

            {/* Loading state */}
            {isLoading && (
              <div className="auth-loading" aria-label="Loading authentication status">
                <div className="loading-spinner"></div>
              </div>
            )}

            {/* Hamburger Menu Button for Mobile */}
            <div className="menu-toggle">
              <button
                onClick={toggleMenu}
                className="menu-button"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
              >
                {isOpen ? <IoClose /> : <HiMenuAlt4 />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
