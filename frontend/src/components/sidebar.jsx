import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaBookOpen,
  FaQuestionCircle,
  FaClipboardList,
  FaCalendarAlt,
  FaVideo,
  FaHeadset,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "../styles/sidebar.css";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const sidebarItems = [
    {
      icon: <FaHome />,
      label: "Dashboard",
      path: "/dashboard",
      color: "#00b4db",
    },
    {
      icon: <FaChartLine />,
      label: "My Analytics",
      path: "/dashboard/analytics",
      color: "#f7b733",
    },
    {
      icon: <FaBookOpen />,
      label: "Courses",
      path: "/dashboard/courses",
      color: "#f05053",
    },
    {
      icon: <FaVideo />,
      label: "Live Classes",
      path: "/dashboard/classes",
      color: "#e53935",
    },
    {
      icon: <FaQuestionCircle />,
      label: "Doubt Solving",
      path: "/dashboard/doubt",
      color: "#4caf50",
    },
    {
      icon: <FaClipboardList />,
      label: "Tests & Results",
      path: "/dashboard/test",
      color: "#9c27b0",
    },
    {
      icon: <FaCalendarAlt />,
      label: "Time-Table",
      path: "/dashboard/timetable",
      color: "#ff9800",
    },
    {
      icon: <FaHeadset />,
      label: "Support",
      path: "/dashboard/support",
      color: "#2196f3",
    },
    {
      icon: <FaEnvelope />,
      label: "Contact",
      path: "/dashboard/contact",
      color: "#607d8b",
    },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

      <aside
        className={`modern-sidebar ${sidebarOpen ? "open" : ""} ${collapsed ? "collapsed" : ""}`}
      >
        {/* Header */}
        <div className="sidebar-header">
          <div className="logo-section">
            {!collapsed && (
              <>
                <div className="logo-icon">
                  <span>L</span>
                </div>
                <div className="logo-text">
                  <h3>LecturaX</h3>
                  <p>Learning Hub</p>
                </div>
              </>
            )}
          </div>

          {/* Collapse Toggle - Desktop Only */}
          <button
            className="collapse-btn desktop-only"
            onClick={toggleCollapse}
            title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <div className="nav-section">
            {!collapsed && <div className="nav-title">Main Menu</div>}
            <ul className="nav-list">
              {sidebarItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${isActive(item.path) ? "active" : ""}`}
                    onClick={() => window.innerWidth <= 768 && setSidebarOpen(false)}
                    title={collapsed ? item.label : ""}
                  >
                    <div
                      className="nav-icon"
                      style={{ color: isActive(item.path) ? item.color : "" }}
                    >
                      {item.icon}
                    </div>
                    {!collapsed && <span className="nav-label">{item.label}</span>}
                    {isActive(item.path) && (
                      <div className="active-indicator" style={{ backgroundColor: item.color }} />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
