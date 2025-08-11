import React, { useState } from "react";
import "../styles/login.css";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { signup, isLoading } = useAuth();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [pswdVisible, setPswdVisible] = useState(false);
  const [cPswdVisible, setCPswdVisible] = useState(false);

  const togglePassword = () => {
    setPswdVisible(!pswdVisible);
  };

  const toggleConfirmPassword = () => {
    setCPswdVisible(!cPswdVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (
      !form.username.trim() ||
      !form.email.trim() ||
      !form.password.trim() ||
      !form.confirmPassword.trim()
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Validate username (alphanumeric and underscore only)
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    if (!usernameRegex.test(form.username)) {
      toast.error(
        "Username must be 3-20 characters and contain only letters, numbers, and underscores",
      );
      return;
    }

    try {
      const userData = {
        username: form.username,
        email: form.email,
        password: form.password,
        id: uuidv4(),
      };

      await signup(userData);
      navigate("/dashboard", { replace: true });
      toast.success("Account created successfully!");
    } catch (error) {
      // Error is handled by the auth context
      console.error("Signup error:", error);
    }

    // Reset form
    setForm({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <section className="auth-section">
      <div className="auth-container">
        <div className="auth-header">
          <h1 className="auth-title">Create Your Account</h1>
          <p className="auth-subtitle">
            Join LecturaX and start your learning journey
          </p>
        </div>

        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label className="form-label" htmlFor="username">
                Username
              </label>
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

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
                  placeholder="Enter your email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <span onClick={togglePassword} className="pswd-toggle">
                  {pswdVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
                <input
                  type={pswdVisible ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Create a password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <span onClick={toggleConfirmPassword} className="pswd-toggle">
                  {cPswdVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
                <input
                  type={cPswdVisible ? "text" : "password"}
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  name="confirmPassword"
                  value={form.confirmPassword}
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
                <span className="loading-spinner">Creating Account...</span>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <div className="auth-footer">
            <p className="auth-redirect">
              Already have an account?{" "}
              <Link to="/signin" className="auth-link">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
