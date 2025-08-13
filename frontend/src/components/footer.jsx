import "../styles/footer.css";
import { Link } from "react-router-dom";
import logo from "/assets/logo.svg";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaArrowRightLong,
  FaGithub,
  FaCode,
  FaLightbulb,
  FaGlobe,
  FaReact,
} from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section head-footer">
          <div className="footer-brand">
            <img src={logo} alt="ThinkDock Logo" className="logo" />
            <h2 className="brand-name arima">ThinkDock</h2>
          </div>
          <div className="footer-heading-main">
            Your quick-access AI desk — summarize, create, and explore in seconds.
          </div>
          <Link to="/dashboard" className="animated-btn">
            Get Started <FaArrowRightLong />
          </Link>
        </div>

        {/* AI Tools */}
        <div className="footer-section">
          <h3 className="footer-heading">AI Tools</h3>
          <ul className="footer-links">
            <li>
              <Link to="/dashboard" className="tool-link">
                <FaCode className="tool-icon" />
                <span className="underline-animation">AI Summarizer</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="tool-link">
                <FaLightbulb className="tool-icon" />
                <span className="underline-animation">Idea Generator</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="tool-link">
                <FaSearch className="tool-icon" />
                <span className="underline-animation">Keyword Extractor</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Project Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Project</h3>
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
          <h3 className="footer-heading">Connect</h3>
          <a href="mailto:help.lecturax@gmail.com" className="footer-info">
            <FaEnvelope />
            <span className="underline-animation">help.lecturax@gmail.com</span>
          </a>
          <a
            href="https://github.com/hars-21/ThinkDock"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-info"
          >
            <FaGithub />
            <span className="underline-animation">GitHub Repository</span>
          </a>

          {/* Social Links */}
          <div className="social-icons">
            <a
              href="https://github.com/hars-21"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/harshil-sync/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://harshilgupta.xyz"
              target="_blank"
              rel="noopener noreferrer"
              title="Website"
            >
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="footer-copyright montserrat">
          © 2025 ThinkDock. Built with <FaReact className="react-icon" /> by Harshil Gupta. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
