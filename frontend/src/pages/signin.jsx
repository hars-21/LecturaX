import { useState } from "react";
import "../styles/login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaUser, FaLock } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";

const Signin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const [loginForm, setLoginForm] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const toggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginForm.usernameOrEmail.trim() || !loginForm.password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      // Pass the usernameOrEmail as username to the login function
      await signin(loginForm);

      // Get the intended destination or default to dashboard
      const from = location.state?.from?.pathname || "/dashboard";
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login error:", error);
    }

    // Reset form
    setLoginForm({
      usernameOrEmail: "",
      password: "",
    });
  };

  return (
    <section className="auth-section">
      <div className="auth-container">
        <div className="auth-header">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to continue your learning journey</p>
        </div>

        <div className="form-wrapper">
          <form onSubmit={handleLogin} className="auth-form">
            <div className="form-group">
              <label className="form-label" htmlFor="usernameOrEmail">
                Username or Email
              </label>
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  className="form-control"
                  id="usernameOrEmail"
                  placeholder="Enter username or email"
                  name="usernameOrEmail"
                  value={loginForm.usernameOrEmail}
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
                <span onClick={toggleVisibility} className="pswd-toggle">
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  name="password"
                  value={loginForm.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="forgot-password-wrapper">
              <Link to="/reset" className="forgot-password-link">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="btn btn-submit">
              {false ? <span className="loading-spinner">Signing In...</span> : "Sign In"}
            </button>
          </form>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <div className="auth-footer">
            <p className="auth-redirect">
              Don't have an account?{" "}
              <Link to="/signup" className="auth-link">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
