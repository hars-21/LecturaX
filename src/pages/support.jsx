// components/Support.js
import React from "react";
import "../styles/support.css";
import { FaPhoneAlt, FaEnvelope, FaQuestionCircle } from "react-icons/fa";

const Support = () => {
  return (
    <div className="support-container m-container">
      {/* Contact Section */}
      <section className="contact-section">
        <h1 className="support-title">Support & Contact</h1>
        <p className="support-description">
          We're here to help! If you have any questions, issues, or need
          assistance, please reach out using one of the methods below.
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <p>
              Phone: <a href="tel:+123456789">+1 (234) 567-890</a>
            </p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>
              Email:{" "}
              <a href="mailto:help.lecturax@gmail.com">
                help.lecturax@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-item">
          <FaQuestionCircle className="faq-icon" />
          <div>
            <h3 className="faq-question">How do I reset my password?</h3>
            <p className="faq-answer">
              Go to your profile settings, select "Change Password," and follow
              the instructions.
            </p>
          </div>
        </div>
        <div className="faq-item">
          <FaQuestionCircle className="faq-icon" />
          <div>
            <h3 className="faq-question">
              How can I contact customer support?
            </h3>
            <p className="faq-answer">
              You can contact us via phone or email as listed above. Our team is
              here to assist you.
            </p>
          </div>
        </div>
        {/* Add more FAQ items as needed */}
      </section>
    </div>
  );
};

export default Support;
