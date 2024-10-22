import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
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
          <img src="" alt="" />
          <div className="footer-heading-main">
            Master Skills with AI-Powered Precision.
          </div>
          <Link to="/signin" className="animated-btn footer-btn">
            Join Now <FaArrowRightLong />
          </Link>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Pages</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3 className="footer-heading">Get in Touch</h3>
          <a href="tel:+919898057571" className="footer-info">
            <FaPhone />
            <span>+91 98980 57571</span>
          </a>
          <a href="mailto:help.lecturax@gmail.com" className="footer-info">
            <FaEnvelope /> <span>help.lecturax@gmail.com</span>
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
