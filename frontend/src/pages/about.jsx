// components/About.js
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container m-container">
      {/* About LecturaX Section */}
      <section className="about-section">
        <h1 className="about-title">What is LecturaX?</h1>
        <p className="about-description">
          LecturaX is an AI-powered e-learning platform designed to empower learners and trainers
          alike. With advanced tools and analytics, LecturaX provides a comprehensive environment
          focused on skill development and personalized growth. Our platform offers insights that
          help users track progress and achieve their educational goals efficiently.
        </p>
      </section>

      {/* Developer Showcase Card */}
      <div className="developer-card">
        <img src="https://via.placeholder.com/80" alt="Developer" className="developer-image" />
        <h2 className="developer-name">Your Name</h2>
        <p className="developer-description">
          Full Stack Developer & Open Source Contributor. Passionate about building efficient and
          user-friendly web applications.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={24} />
          </a>
          {/* Add more social icons as needed */}
        </div>
      </div>
    </div>
  );
};

export default About;
