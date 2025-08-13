import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaUserShield, FaEnvelope } from "react-icons/fa";
import "../styles/privacy-terms.css";

const Privacy = () => {
  return (
    <div className="pt-container">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-hero"
      >
        <h1 className="pt-title">
          <span className="gold arima">ThinkDock</span> Privacy Policy
        </h1>
        <p className="pt-subtitle">
          Your privacy matters. Learn how we protect your data and outline our terms of service.
        </p>
      </motion.section>

      {/* Privacy Policy Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pt-section"
      >
        <div className="section-header">
          <div className="section-icon">
            <FaShieldAlt />
          </div>
          <h2 className="pt-heading">Privacy Policy</h2>
        </div>

        <div className="pt-content">
          <p className="pt-desc pt-intro">
            At ThinkDock, we are committed to protecting your privacy and ensuring transparency in
            how we handle your data. This privacy policy outlines our practices for collecting,
            using, and protecting your information when you use our AI-powered productivity tools.
          </p>

          <div className="policy-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="policy-card"
            >
              <div className="policy-icon">
                <FaUserShield />
              </div>
              <h3 className="pt-subhead">1. Data We Don't Collect</h3>
              <p className="pt-desc">
                <strong>ThinkDock operates on a privacy-first principle.</strong> We do not store
                your text inputs, AI-generated outputs, or any content you process through our
                tools. Your data is processed in real-time and immediately discarded after
                generating results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="policy-card"
            >
              <div className="policy-icon">
                <FaLock />
              </div>
              <h3 className="pt-subhead">2. Technical Data</h3>
              <p className="pt-desc">
                We may collect minimal technical data such as browser type, device information, and
                usage patterns to improve our services. This data is anonymized and cannot be linked
                to individual users.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="policy-card"
            >
              <div className="policy-icon">
                <FaShieldAlt />
              </div>
              <h3 className="pt-subhead">3. Security Measures</h3>
              <p className="pt-desc">
                All communications with ThinkDock are encrypted using industry-standard HTTPS
                protocols. We implement robust security measures to protect against unauthorized
                access and ensure your privacy.
              </p>
            </motion.div>
          </div>

          <div className="privacy-highlights">
            <h3 className="pt-subhead">Our Privacy Commitments</h3>
            <ul className="privacy-list">
              <li>✓ No storage of your input text or generated content</li>
              <li>✓ No tracking or profiling of users</li>
              <li>✓ No sharing of data with third parties</li>
              <li>✓ No advertising or data monetization</li>
              <li>✓ Open-source transparency</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="pt-contact-section"
      >
        <div className="support-card">
          <div className="contact-icon-wrapper" style={{ margin: "0 auto 1.5rem auto" }}>
            <FaEnvelope />
          </div>
          <h3 className="pt-subhead">Questions or Concerns?</h3>
          <p className="pt-desc">
            If you have any questions about our privacy policy or terms of service, please don't
            hesitate to reach out.
          </p>
          <a href="mailto:help.lecturax@gmail.com" className="pt-link contact-email">
            help.lecturax@gmail.com
          </a>
        </div>
      </motion.section>

      {/* Last Updated */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="pt-updated"
      >
        <p>Last updated: August 13, 2025</p>
      </motion.div>
    </div>
  );
};

export default Privacy;
