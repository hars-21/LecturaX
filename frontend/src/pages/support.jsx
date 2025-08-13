import "../styles/support.css";
import {
  FaEnvelope,
  FaQuestionCircle,
  FaDiscord,
  FaGithub,
  FaLightbulb,
  FaCog,
  FaUserShield,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Support = () => {
  const faqs = [
    {
      id: 1,
      question: "How do I use the AI Summarizer?",
      answer:
        "Simply paste your text into the input field, select your preferred summary type (short, medium, or bullet points), and click 'Generate Summary'. The AI will instantly create a concise summary for you.",
    },
    {
      id: 2,
      question: "What is the Idea Generator and how does it work?",
      answer:
        "The Idea Generator helps spark creativity by providing 3-5 unique ideas based on any topic you provide. Just enter your subject or theme, and our AI will generate creative suggestions to help with brainstorming.",
    },
    {
      id: 3,
      question: "How does the Keyword Extractor identify important terms?",
      answer:
        "Our Keyword Extractor uses advanced AI algorithms to analyze your text and identify the most relevant keywords and key phrases. It helps with SEO, content analysis, and understanding the main topics in your text.",
    },
    {
      id: 4,
      question: "Is ThinkDock free to use?",
      answer:
        "Yes! ThinkDock is completely free to use. All three AI tools are available without any subscription or payment requirements. We believe in making AI accessible to everyone.",
    },
    {
      id: 5,
      question: "Do you store my data or text inputs?",
      answer:
        "We prioritize your privacy. ThinkDock processes your text in real-time and doesn't store your input data on our servers. Your content remains private and secure.",
    },
    {
      id: 6,
      question: "Can I use ThinkDock for commercial purposes?",
      answer:
        "Absolutely! ThinkDock is perfect for both personal and commercial use. Whether you're a student, professional, researcher, or business owner, our tools are designed to enhance your productivity.",
    },
  ];

  return (
    <div className="support-container">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="support-hero"
      >
        <div className="support-hero-content">
          <h1 className="support-title">
            <span className="gold arima">ThinkDock</span> Support
          </h1>
          <p className="support-subtitle">Get help with your AI-powered productivity tools</p>
        </div>
      </motion.section>

      {/* Quick Help Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="quick-help-section"
      >
        <h2 className="section-title">Quick Help</h2>
        <div className="help-cards">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="help-card"
          >
            <div className="help-icon">
              <FaLightbulb />
            </div>
            <h3>Getting Started</h3>
            <p>Learn how to use ThinkDock's AI tools effectively</p>
            <div className="help-steps">
              <span>1. Choose your tool</span>
              <span>2. Input your content</span>
              <span>3. Get instant results</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="help-card"
          >
            <div className="help-icon">
              <FaCog />
            </div>
            <h3>Tips & Tricks</h3>
            <p>Maximize your productivity with these pro tips</p>
            <div className="help-tips">
              <span>• Use specific keywords for better results</span>
              <span>• Try different summary lengths</span>
              <span>• Combine tools for best workflow</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="help-card"
          >
            <div className="help-icon">
              <FaUserShield />
            </div>
            <h3>Privacy & Security</h3>
            <p>Your data is safe and never stored on our servers</p>
            <div className="help-features">
              <span>✓ Real-time processing</span>
              <span>✓ No data storage</span>
              <span>✓ Secure connections</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="contact-section"
      >
        <h2 className="section-title">Get in Touch</h2>
        <p className="support-description">
          Need help or have questions? We're here to assist you with any issues or feedback.
        </p>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="contact-card"
          >
            <div className="contact-icon-wrapper">
              <FaEnvelope className="contact-icon" />
            </div>
            <div className="contact-info">
              <h3>Email Support</h3>
              <p>Get help via email</p>
              <a href="mailto:help.lecturax@gmail.com" className="contact-link">
                help.lecturax@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="contact-card"
          >
            <div className="contact-icon-wrapper">
              <FaGithub className="contact-icon" />
            </div>
            <div className="contact-info">
              <h3>GitHub Issues</h3>
              <p>Report bugs or request features</p>
              <a
                href="https://github.com/hars-21/ThinkDock"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Open an Issue
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="contact-card"
          >
            <div className="contact-icon-wrapper">
              <FaDiscord className="contact-icon" />
            </div>
            <div className="contact-info">
              <h3>Community</h3>
              <p>Join our community for discussions</p>
              <a href="#" className="contact-link">
                Join Discord
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="faq-section"
      >
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="faq-item"
            >
              <div className="faq-icon-wrapper">
                <FaQuestionCircle className="faq-icon" />
              </div>
              <div className="faq-content">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Support;
