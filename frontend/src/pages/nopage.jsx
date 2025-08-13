import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/nopage.css";

export default function NoPage() {
  return (
    <div className="notFound">
      <div className="notFound-container">
        {/* Animated Background Elements */}
        <div className="floating-elements">
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-dot dot-3"></div>
          <div className="floating-dot dot-4"></div>
          <div className="floating-dot dot-5"></div>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="notFound-content"
        >
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="notFound-logo"
          >
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="not-logo-text">ThinkDock</span>
          </motion.div>

          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
            className="notFound-number"
          >
            <span className="number-4 first-4">4</span>
            <div className="number-0">
              <div className="zero-inner">
                <div className="zero-dot"></div>
              </div>
            </div>
            <span className="number-4 last-4">4</span>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="notFound-message"
          >
            <h2 className="error-title">Oops! Page Not Found</h2>
            <p className="error-description">
              It looks like the page you're looking for doesn't exist. But don't worry, our AI tools
              are still working perfectly!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="notFound-actions"
          >
            <Link to="/" className="action-btn primary-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9,22 9,12 15,12 15,22" />
              </svg>
              Back to Home
            </Link>
            <Link to="/dashboard" className="action-btn secondary-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
              Try AI Tools
            </Link>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="notFound-features"
          >
            <div className="feature-hint">
              <div className="hint-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 21h6" />
                  <path d="M12 17v4" />
                  <circle cx="12" cy="9" r="7" />
                </svg>
              </div>
              <span>While you're here, try our AI Summarizer</span>
            </div>
            <div className="feature-hint">
              <div className="hint-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
              </div>
              <span>Or extract keywords instantly</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
