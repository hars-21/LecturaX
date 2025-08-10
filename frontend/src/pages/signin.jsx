import React, { useState } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaUser, FaLock } from "react-icons/fa";

const Signin = () => {
  const redirect = useNavigate();
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
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
    setLoginForm({
      username: "",
      password: "",
    });

    await axios
      .post("/api/signin", {
        ...loginForm,
      })
      .then((res) => {
        toast.success(res.data);
        redirect("/dashboard", { replace: true });
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  return (
    <section className="auth-section m-container">
      <div className="auth-container">
        <h1 className="auth-title">SignIn To Your Account</h1>
        <div className="form-wrapper">
          <form method="post" action="/signin">
            <div className="form-group">
              <label className="form-label" htmlFor="username">
                Username
              </label>
              <FaUser className="input-icon" />
              <input
                type="name"
                className="form-control"
                id="username"
                placeholder="username"
                name="username"
                value={loginForm.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <FaLock className="input-icon" />
              <span onClick={toggleVisibility} className="pswd-toggle">
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
              <input
                type={passwordVisible ? "text" : "password"}
                className="form-control"
                id="password"
                placeholder="••••••"
                name="password"
                value={loginForm.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="forgot-password-link">
              <Link to="/forgot-password" className="redirect-links">
                Forgot Password
              </Link>
            </div>
            <button type="submit" className="btn btn-submit" onClick={handleLogin}>
              Login
            </button>
          </form>
          <hr />
          <div className="additional-links">
            <div className="register-link">
              Don't have an account?{" "}
              <Link to="/signup" className="redirect-links">
                <b>SignUp</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
