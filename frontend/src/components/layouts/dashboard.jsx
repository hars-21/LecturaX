import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/dashboardLayout.css";
import { FaBell, FaBars, FaTimes } from "react-icons/fa";
import logo from "/assets/logo.png";
import Sidebar from "../sidebar";
import ProfileDropdown from "../profileDropdown";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content Area */}
      <div className={`main-layout ${sidebarOpen ? "sidebar-open" : ""}`}>
        <header className="dashboard-header">
          <div className="header-left">
            <button className="menu-toggle" onClick={toggleSidebar}>
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className="header-logo">
              <Link to="/dashboard">
                <img src={logo} alt="LecturaX Logo" className="logo-img" />
              </Link>
            </div>
          </div>

          <div className="header-right">
            <Link to="/dashboard/notifications" className="notification-btn">
              <FaBell className="notification-icon" />
              <span className="notification-badge">3</span>
            </Link>

            <ProfileDropdown />
          </div>
        </header>

        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
