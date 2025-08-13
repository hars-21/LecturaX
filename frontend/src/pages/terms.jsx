import { motion } from "framer-motion";
import { FaGavel, FaEnvelope } from "react-icons/fa";
import "../styles/privacy-terms.css";

const Terms = () => {
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
          <span className="gold arima">ThinkDock</span> Conditions
        </h1>
        <p className="pt-subtitle">
          Your privacy matters. Learn how we protect your data and outline our terms of service.
        </p>
      </motion.section>

      {/* Terms of Service Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="pt-section"
      >
        <div className="section-header">
          <div className="section-icon">
            <FaGavel />
          </div>
          <h2 className="pt-heading">Terms of Service</h2>
        </div>

        <div className="pt-content">
          <div className="terms-grid">
            <div className="terms-card">
              <h3 className="pt-subhead">1. Service Description</h3>
              <p className="pt-desc">
                ThinkDock provides free AI-powered tools for text summarization, idea generation,
                and keyword extraction. Our services are provided "as-is" and are designed to
                enhance your productivity and creativity.
              </p>
            </div>

            <div className="terms-card">
              <h3 className="pt-subhead">2. Acceptable Use</h3>
              <p className="pt-desc">
                Users must use ThinkDock responsibly and legally. Prohibited activities include
                generating harmful content, attempting to exploit our systems, or using our tools
                for illegal purposes. We reserve the right to limit access if terms are violated.
              </p>
            </div>

            <div className="terms-card">
              <h3 className="pt-subhead">3. Service Availability</h3>
              <p className="pt-desc">
                While we strive for 99% uptime, ThinkDock is provided free of charge and we cannot
                guarantee uninterrupted service. We may perform maintenance or updates that
                temporarily affect availability.
              </p>
            </div>

            <div className="terms-card">
              <h3 className="pt-subhead">4. Intellectual Property</h3>
              <p className="pt-desc">
                Content generated using ThinkDock belongs to you. We claim no ownership over your
                inputs or outputs. However, please respect intellectual property rights when using
                our tools with copyrighted material.
              </p>
            </div>

            <div className="terms-card">
              <h3 className="pt-subhead">5. Limitation of Liability</h3>
              <p className="pt-desc">
                ThinkDock is provided free of charge and without warranty. We are not liable for any
                losses, damages, or consequences resulting from the use of our services. Users
                assume full responsibility for how they use our tools and their outputs.
              </p>
            </div>

            <div className="terms-card">
              <h3 className="pt-subhead">6. Updates and Changes</h3>
              <p className="pt-desc">
                We may update our services, features, or these terms periodically. Significant
                changes will be communicated through our website. Continued use of ThinkDock
                constitutes acceptance of updated terms.
              </p>
            </div>
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

export default Terms;
