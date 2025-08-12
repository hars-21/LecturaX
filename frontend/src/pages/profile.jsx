import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import "../styles/profile.css";

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username,
    email: user?.email,
    phone: user?.phone,
    bio: user?.bio,
    location: user?.location,
    website: user?.website,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const res = await updateProfile(formData);
    if (res.success) {
      setFormData({
        username: res.user.username,
        email: res.user.email,
        phone: res.user.phone,
        bio: res.user.bio,
        location: res.user.location,
        website: res.user.website,
      });
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      username: user?.username,
      email: user?.email,
      phone: user?.phone,
      bio: user?.bio,
      location: user?.location,
      website: user?.website,
    });
    setIsEditing(false);
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-cover">
            <div className="cover-gradient"></div>
            <div className="profile-avatar-section">
              <div className="profile-avatar-large">{getInitials(formData.username)}</div>
              <div className="profile-header-info">
                <div>
                  <h1 className="profile-username">{formData.username}</h1>
                  <p className="profile-email-header">{formData.email}</p>
                </div>

                <button
                  className={`edit-profile-btn ${isEditing ? "editing" : ""}`}
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    {isEditing ? (
                      <path
                        d="M18 6L6 18M6 6l12 12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    ) : (
                      <path
                        d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    )}
                  </svg>
                  {isEditing ? "Cancel" : "Edit Profile"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="profile-content">
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="stat-label">Tools Used</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1.2K</span>
              <span className="stat-label">Words Processed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">48</span>
              <span className="stat-label">Ideas Generated</span>
            </div>
          </div>
          <div className="profile-form">
            <h2 className="section-title">Personal Information</h2>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`form-input ${!isEditing ? "disabled" : ""}`}
                  placeholder="Enter your username"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <polyline
                      points="22,6 12,13 2,6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`form-input ${!isEditing ? "disabled" : ""}`}
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`form-input ${!isEditing ? "disabled" : ""}`}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`form-input ${!isEditing ? "disabled" : ""}`}
                  placeholder="Enter your location"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`form-input ${!isEditing ? "disabled" : ""}`}
                  placeholder="Enter your website URL"
                />
              </div>

              <div className="form-group full-width">
                <label className="form-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <polyline
                      points="14,2 14,8 20,8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <line
                      x1="16"
                      y1="13"
                      x2="8"
                      y2="13"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <line
                      x1="16"
                      y1="17"
                      x2="8"
                      y2="17"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <polyline
                      points="10,9 9,9 8,9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`form-textarea ${!isEditing ? "disabled" : ""}`}
                  placeholder="Tell us about yourself..."
                  rows="4"
                />
              </div>
            </div>

            {isEditing && (
              <div className="form-actions">
                <button className="action-btn save-btn" onClick={handleSave}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <polyline
                      points="17,21 17,13 7,13 7,21"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <polyline
                      points="7,3 7,8 15,8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  Save Changes
                </button>
                <button className="action-btn cancel-btn" onClick={handleCancel}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line
                      x1="18"
                      y1="6"
                      x2="6"
                      y2="18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <line
                      x1="6"
                      y1="6"
                      x2="18"
                      y2="18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
