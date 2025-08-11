import React, { useState } from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Implement actual password reset logic
      // For now, just simulate the request
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSubmitted(true);
      toast.success("Password reset instructions sent to your email!");
    } catch (error) {
      toast.error("Failed to send reset instructions. Please try again.");
      console.error("Reset password error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="auth-section">
        <div className="auth-container">
          <div className="auth-header">
            <h1 className="auth-title">Check Your Email</h1>
            <p className="auth-subtitle">
              We've sent password reset instructions to {email}
            </p>
          </div>

          <div className="form-wrapper">
            <div className="reset-success">
              <div className="success-icon">
                <FaEnvelope size={48} />
              </div>
              <p className="success-message">
                If an account with that email exists, you'll receive an email
                with instructions to reset your password.
              </p>
              <p className="success-note">
                Didn't receive the email? Check your spam folder or try again.
              </p>
            </div>

            <div className="auth-footer">
              <Link to="/signin" className="back-to-signin">
                <FaArrowLeft /> Back to Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="auth-section">
      <div className="auth-container">
        <div className="auth-header">
          <h1 className="auth-title">Reset Password</h1>
          <p className="auth-subtitle">
            Enter your email to receive reset instructions
          </p>
        </div>

        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email Address
              </label>
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email address"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading-spinner">Sending Instructions...</span>
              ) : (
                "Send Reset Instructions"
              )}
            </button>
          </form>

          <div className="auth-footer">
            <Link to="/signin" className="back-to-signin">
              <FaArrowLeft /> Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reset;
