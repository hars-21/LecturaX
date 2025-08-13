import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaLightbulb,
  FaSearch,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/about.css";
import avatar from "/assets/avatar-github.jpeg";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="about-hero"
      >
        <div className="about-hero-content">
          <h1 className="about-title">
            About <span className="gold arima">ThinkDock</span>
          </h1>
          <p className="about-subtitle">
            Your quick-access AI desk — summarize, create, and explore in seconds.
          </p>
        </div>
      </motion.section>

      {/* About ThinkDock Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="about-section"
      >
        <div className="about-content">
          <h2 className="section-title">What is ThinkDock?</h2>
          <p className="about-description">
            ThinkDock is a revolutionary AI-powered productivity platform designed to streamline
            your workflow and enhance your creative process. With three powerful AI tools at your
            fingertips, ThinkDock transforms the way you work with text, ideas, and information.
            Whether you're a student, professional, researcher, or creative, ThinkDock provides
            instant AI assistance to help you achieve more in less time.
          </p>

          <div className="features-grid">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="feature-highlight"
            >
              <div className="feature-highlight-icon">
                <FaCode />
              </div>
              <h3>AI Summarizer</h3>
              <p>Transform lengthy text into concise, digestible summaries instantly</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="feature-highlight"
            >
              <div className="feature-highlight-icon">
                <FaLightbulb />
              </div>
              <h3>Idea Generator</h3>
              <p>Spark creativity with AI-generated ideas for any topic or project</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="feature-highlight"
            >
              <div className="feature-highlight-icon">
                <FaSearch />
              </div>
              <h3>Keyword Extractor</h3>
              <p>Extract key terms and concepts from any text for better insights</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Developer Showcase Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="developer-card"
      >
        <div className="developer-header">
          <img src={avatar} alt="Developer" className="developer-image" />
          <div className="developer-info">
            <h2 className="developer-name">Harshil Gupta</h2>
            <p className="developer-role">Full Stack Developer & AI Enthusiast</p>
          </div>
        </div>

        <p className="developer-description">
          Passionate about building innovative AI-powered applications that solve real-world
          problems. With expertise in modern web technologies and artificial intelligence, I'm
          dedicated to creating tools that enhance productivity and empower users to achieve their
          goals more efficiently.
        </p>

        <div className="developer-stats">
          <div className="stat-item">
            <span className="stat-number">4+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Open Source</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years</span>
          </div>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/hars-21"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/harshil-sync"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://harshilgupta.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title="Website"
          >
            <FaGlobe size={24} />
          </a>
          <a href="mailto:ace.harshil.1@gmail.com" className="social-icon" title="Email">
            <FaEnvelope size={24} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
