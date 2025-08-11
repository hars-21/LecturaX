import { useState } from "react";
import "../styles/profile.css";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleSignout = () => {
    console.log("User signed out");
  };

  return (
    <div>
      <div className="profile-dropdown" onClick={toggleDropdown}>
        <div className="profile-avatar">
          {/* <span>{username ? username.charAt(0).toUpperCase() : "U"}</span> */}
        </div>
        <div className="profile-info">
          {/* <span className="profile-name">{username || "User"}</span>
          <span className="profile-role">{role || "Student"}</span> */}
        </div>

        <div className={`profile-menu ${dropdown ? "expand" : ""}`}>
          <Link to="/dashboard/profile" className="profile-option">
            <span>👤</span> View Profile
          </Link>
          <Link to="/dashboard/profile" className="profile-option">
            <span>✏️</span> Edit Profile
          </Link>
          <Link to="/dashboard/settings" className="profile-option">
            <span>🔐</span> Change Password
          </Link>
          <hr className="menu-divider" />
          <button className="profile-option logout-btn" onClick={handleSignout}>
            <span>🚪</span> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
