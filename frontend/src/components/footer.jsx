import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import logo from "/assets/logo.png";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
  FaXTwitter,
  FaArrowRightLong,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container arima">
        <div className="footer-section head-footer">
          <img src={logo} alt="Logo" className="logo" />
          <div className="footer-heading-main">Master Skills with AI-Powered Precision</div>
          <Link to="/signin" className="animated-btn">
            Join Now <FaArrowRightLong />
          </Link>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Pages</h3>
          <ul className="footer-links">
            <li>
              <Link to="/" className="underline-animation">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="underline-animation">
                Services
              </Link>
            </li>
            <li>
              <Link to="/faq" className="underline-animation">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="underline-animation">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li>
              <Link to="/about" className="underline-animation">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/support" className="underline-animation">
                Support
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="underline-animation">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="underline-animation">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3 className="footer-heading">Get in Touch</h3>
          <a href="tel:+919898057571" className="footer-info">
            <FaPhone />
            <span className="underline-animation">+91 98980 57571</span>
          </a>
          <a href="mailto:help.lecturax@gmail.com" className="footer-info">
            <FaEnvelope /> <span className="underline-animation">help.lecturax@gmail.com</span>
          </a>
          {/* Social Links */}
          <div className="social-icons">
            <a href="https://x.com/" target="_blank">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://discord.com/" target="_blank">
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="footer-copyright montserrat">
          © 2024 LecturaX Technologies Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
