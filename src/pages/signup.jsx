import React, { useState } from "react";
import "../styles/login.css";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Signup = () => {
  const redirect = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    c_password: "",
  });
  const [role, setRole] = useState("student");

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

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setForm({
      username: "",
      email: "",
      password: "",
      c_password: "",
    });

    if (form.password !== form.c_password) {
      alert("Passwords do not match");
      return;
    }
    try {
      let res = await axios.post("/api/signup", {
        ...form,
        role,
        id: uuidv4(),
      });
      toast.success(res.data);
      redirect("/dashboard", { replace: true });
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <section className="auth-section">
      <div className="auth-container">
        <h1 className="auth-title">Create Your Account</h1>
        <div className="form-wrapper">
          <form method="post" action="/signup">
            <div className="role-container">
              <div className="tabs">
                <input
                  type="radio"
                  id="student"
                  name="tabs"
                  value={"student"}
                  checked={role === "student"}
                  onChange={handleRoleChange}
                />
                <label className="tab" htmlFor="student">
                  Student
                </label>
                <input
                  type="radio"
                  id="teacher"
                  name="tabs"
                  value={"teacher"}
                  checked={role === "teacher"}
                  onChange={handleRoleChange}
                />
                <label className="tab" htmlFor="teacher">
                  Teacher
                </label>
                <span className="glider"></span>
              </div>
            </div>
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
                value={form.username}
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email ID
              </label>
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="jane@doe.com"
                name="email"
                value={form.email}
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <FaLock className="input-icon" />
              <span onClick={togglePassword} className="pswd-toggle">
                {pswdVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
              <input
                type={pswdVisible ? "text" : "password"}
                className="form-control"
                id="password"
                placeholder="Password"
                name="password"
                value={form.password}
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="c_password">
                Confirm Password
              </label>
              <FaLock className="input-icon" />
              <span onClick={toggleConfirmPassword} className="pswd-toggle">
                {cPswdVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
              <input
                type={cPswdVisible ? "text" : "password"}
                className="form-control"
                id="password_confirm"
                placeholder="Re-enter your password"
                name="c_password"
                value={form.c_password}
                required={true}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-submit"
              onClick={handleSubmit}
            >
              Create Account
            </button>
          </form>
          <hr />
          <div className="additional-links">
            <div className="register-link">
              Already have an account?{" "}
              <Link to="/signin" className="redirect-links">
                <b>SignIn</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
