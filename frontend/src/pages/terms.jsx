// components/PrivacyTerms.js
import React from "react";
import "../styles/privacy-terms.css";

const Terms = () => {
  return (
    <div className="pt-container m-container">
      <h1 className="pt-title">Terms of Service</h1>

      {/* Privacy Policy Section */}
      <section className="pt-section">
        <h2 className="pt-heading">Privacy Policy</h2>
        <p className="pt-desc">
          At LecturaX, we are committed to protecting your personal information. This privacy policy
          outlines the types of data we collect, how we use it, and the steps we take to ensure it
          remains secure.
        </p>

        <h3 className="pt-subhead">1. Data Collection</h3>
        <p className="pt-desc">
          We collect personal information, such as name, email, and payment details, to manage
          accounts and provide support. Usage data, including session length and activity, may be
          collected to improve user experience and platform performance.
        </p>

        <h3 className="pt-subhead">2. Data Usage</h3>
        <p className="pt-desc">
          Collected data helps us personalize your experience, support technical issues, and enhance
          platform services. We do not sell or share your data with third parties unless required by
          law.
        </p>

        <h3 className="pt-subhead">3. Security</h3>
        <p className="pt-desc">
          We use encryption and secure storage to protect your data. However, no online platform is
          completely secure, and we cannot guarantee total data security. Users should exercise
          caution and report suspicious activity to our support team.
        </p>
      </section>

      {/* Terms of Service Section */}
      <section className="pt-section">
        <h2 className="pt-heading">Terms of Service</h2>

        <h3 className="pt-subhead">1. Acceptance of Terms</h3>
        <p className="pt-desc">
          By using LecturaX, you agree to comply with these Terms of Service. LecturaX reserves the
          right to update these terms at any time, with notice provided via the website or email.
        </p>

        <h3 className="pt-subhead">2. Payment and Pricing</h3>
        <p className="pt-desc">
          LecturaX offers both free and paid plans. Payments for paid plans are due monthly.
          Subscriptions automatically renew unless canceled before the next billing date. We reserve
          the right to change pricing with 30 days' notice.
        </p>

        <h3 className="pt-subhead">3. Contact</h3>
        <p className="pt-desc">
          For support or questions, contact us at{" "}
          <a href="mailto:support@lecturax.com" className="pt-link">
            support@lecturax.com
          </a>{" "}
          or call +1 (234) 567-890. Our team is available during standard business hours.
        </p>

        <h3 className="pt-subhead">4. Terms of Use</h3>
        <p className="pt-desc">
          Users are responsible for maintaining account security and for all activities on their
          account. Access to and use of our services must align with our policies. Misuse, illegal
          activities, and attempts to interfere with our services are strictly prohibited.
        </p>

        <h3 className="pt-subhead">5. Violations and Penalties</h3>
        <p className="pt-desc">
          Violations of our terms, including unauthorized use, may result in suspension or
          termination of your account. Serious offenses could lead to legal action. We reserve the
          right to assess penalties at our discretion.
        </p>

        <h3 className="pt-subhead">6. Refund Policy</h3>
        <p className="pt-desc">
          All payments are final, and refunds are not provided for partial months of service.
          Contact support for concerns about billing errors or to discuss any extenuating
          circumstances.
        </p>

        <h3 className="pt-subhead">7. Liability</h3>
        <p className="pt-desc">
          LecturaX is not liable for losses resulting from unauthorized access to your account, loss
          of data, or any damages that result from the use of our services.
        </p>

        <h3 className="pt-subhead">8. Changes to Services</h3>
        <p className="pt-desc">
          We may update our services periodically, including adding or removing features. We aim to
          communicate significant changes in advance, though some updates may be made without
          notice.
        </p>
      </section>
    </div>
  );
};

export default Terms;
