import { useState } from "react";
import { Outlet } from "react-router-dom";
import "../../styles/dashboardLayout.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/assets/logo.svg";
import Sidebar from "../sidebar";
import ProfileDropdown from "../profileDropdown";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-layout">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />

      {/* Main Content Area */}
      <div className={`main-layout ${!sidebarCollapsed ? "sidebar-expanded" : ""}`}>
        <header className="dashboard-header">
          <div className="header-left">
            <button className="menu-toggle" onClick={toggleSidebar}>
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className="header-logo">
              <img src={logo} alt="ThinkDock Logo" className="logo-img" />
              <span className="header-text">ThinkDock</span>
            </div>
          </div>

          <div className="header-right">
            {/* <Link to="/dashboard/notifications" className="notification-btn">
              <FaBell className="notification-icon" />
              <span className="notification-badge">3</span>
            </Link> */}

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
