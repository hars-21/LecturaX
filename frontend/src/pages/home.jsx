import "../styles/home.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";
import summary from "/assets/summary.png";
import idea from "/assets/idea.png";
import keyword from "/assets/keyword.png";

// Feature Component
const Feature = ({ title, description, icon, direction, image }) => {
  return (
    <>
      <div className={`feature-item ${direction}`}>
        <motion.div
          initial={{ opacity: 0, x: direction === "reverse" ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="feature-about"
        >
          <div className="feature-icon">{icon}</div>
          <div className="feature-title gold arima">{title}</div>
          <div className="feature-desc">{description}</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: direction === "reverse" ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="feature-visual"
        >
          <div className="feature-demo">
            <div className="demo-placeholder">
              {image ? (
                <img src={image} alt={`${title} demo`} className="demo-image" />
              ) : (
                <span>Interactive Demo</span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

// Home Page Component
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="hero-head arima"
        >
          ThinkDock
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.9 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="hero-subhead"
        >
          Your quick-access AI desk — summarize, create, and explore in seconds.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="hero-cta"
        >
          <Link to="/dashboard" className="animated-btn">
            Get Started <FaArrowRightLong />
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-head">
          <span className="gold arima">Discover</span> ThinkDock's AI Tools
          <p className="features-subhead">
            Three powerful AI tools designed for instant productivity
          </p>
        </div>

        <div className="feature-container">
          <Feature
            title="AI Summarizer"
            description="Paste any text and get instant summaries in your preferred format. Choose from short, medium, or bullet-point summaries to fit your needs perfectly."
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10,9 9,9 8,9" />
              </svg>
            }
            direction="same"
            image={summary}
          />
          <Feature
            title="Idea Generator"
            description="Stuck on a topic? Simply enter your subject and get 3-5 unique, creative ideas instantly. Perfect for brainstorming, content creation, and problem-solving."
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21h6" />
                <path d="M12 17v4" />
                <circle cx="12" cy="9" r="7" />
              </svg>
            }
            direction="reverse"
            image={idea}
          />
          <Feature
            title="Keyword Extractor"
            description="Extract the most important keywords from any text instantly. Identify key terms, topics, and concepts to enhance your SEO, research, or content strategy."
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
            }
            direction="same"
            image={keyword}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="testimonial-intro">
          <div className="testimonial-caption">TESTIMONIALS</div>
          <div className="testimonial-title">
            Don't just take <span className="gold arima">our word</span> for it!
          </div>
          <div className="testimonial-subtitle">
            See what the community has to say about ThinkDock
          </div>
        </div>
        <div className="scroll-wrapper">
          <div className="testimonial-container">
            <div className="carousel-primary">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-header">
                      <div className="testimonial-avatar">{testimonial.avatar}</div>
                      <div className="testimonial-info">
                        <div className="testimonial-name">{testimonial.name}</div>
                        <div className="testimonial-role">{testimonial.role}</div>
                      </div>
                    </div>
                    <p className="testimonial-text">"{testimonial.testimonial}"</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-secondary">
              {testimonials.map((testimonial, index) => (
                <div key={`${testimonial.id}-2`} className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-header">
                      <div className="testimonial-avatar">{testimonial.avatar}</div>
                      <div className="testimonial-info">
                        <div className="testimonial-name">{testimonial.name}</div>
                        <div className="testimonial-role">{testimonial.role}</div>
                      </div>
                    </div>
                    <p className="testimonial-text">"{testimonial.testimonial}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
