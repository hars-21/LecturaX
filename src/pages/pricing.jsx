import React from "react";
import "../styles/pricing.css";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="pricing-container m-container">
      {/* Pricing Title */}
      <h1 className="pricing-title">Our Pricing Plans</h1>
      <p className="pricing-description">
        Choose a plan that best fits your learning journey with LecturaX.
      </p>

      {/* Pricing Cards */}
      <div className="pricing-cards">
        {/* Standard Plan */}
        <div className="pricing-card">
          <h2 className="plan-title">Standard</h2>
          <p className="plan-price">Free</p>
          <ul className="plan-features">
            <li>Access to basic courses</li>
            <li>Community support</li>
            <li>Basic analytics</li>
          </ul>
          <Link to="/signin" className="try-button">
            Try Now
          </Link>
        </div>

        {/* Premium Plan */}
        <div className="pricing-card">
          <h2 className="plan-title">Premium</h2>
          <p className="plan-price">₹100/month</p>
          <ul className="plan-features">
            <li>All Standard features</li>
            <li>Priority support</li>
            <li>Advanced analytics</li>
            <li>Access to premium courses</li>
          </ul>
          <Link to="/signin" className="try-button">
            Try Now
          </Link>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card">
          <h2 className="plan-title">Enterprise</h2>
          <p className="plan-price">Contact Sales</p>
          <ul className="plan-features">
            <li>All Premium features</li>
            <li>Dedicated support</li>
            <li>Customizable learning paths</li>
            <li>Bulk user management</li>
          </ul>
          <Link to="/signin" className="try-button">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Terms of Use Section */}
      <section className="terms-section">
        <h2 className="terms-title">Terms of Use</h2>
        <p className="terms-description">
          By subscribing to our plans, you agree to our terms of service. All
          subscriptions renew automatically unless canceled before the next
          billing cycle. Refunds are not provided for partial months. Please
          contact support for further assistance.
        </p>
      </section>
    </div>
  );
};

export default Pricing;
