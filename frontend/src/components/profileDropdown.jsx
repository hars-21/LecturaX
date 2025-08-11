import "../styles/profile.css";
import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FaUser, FaLock, FaPencilAlt } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { IoSettings } from "react-icons/io5";

const ProfileDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const { user, signout } = useAuth();

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  // Handle signout
  const handleSignout = useCallback(async () => {
    try {
      await signout();
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Signout error:", error);
    }
  }, [signout]);

  return (
    <div>
      <div className="profile-dropdown" onClick={toggleDropdown}>
        <div className="profile-avatar">
          <span>{user.username ? user.username.charAt(0).toUpperCase() : "U"}</span>
        </div>
        <div className="profile-info">
          <span className="profile-name">{user.username || "User"}</span>
          <span className="profile-email">{user.email}</span>
        </div>

        <div className={`profile-menu ${dropdown ? "expand" : ""}`}>
          <Link to="/dashboard/profile" className="profile-option">
            <FaUser className="profile-icon" />
            View Profile
          </Link>
          <Link to="/dashboard/profile" className="profile-option">
            <FaPencilAlt className="profile-icon" />
            Edit Profile
          </Link>
          <Link to="/dashboard/settings" className="profile-option">
            <FaLock className="profile-icon" />
            Change Password
          </Link>
          <hr className="menu-divider" />
          <Link to="/dashboard/settings" className="profile-option">
            <IoSettings className="profile-icon" />
            Settings
          </Link>
          <button
            className="profile-option logout-btn"
            onClick={handleSignout}
            aria-label="Signout"
          >
            <ImExit className="profile-icon" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
