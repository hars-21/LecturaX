import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaLightbulb,
  FaHeadset,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "../styles/sidebar.css";
import { TbTextRecognition } from "react-icons/tb";
import { LuReceiptText } from "react-icons/lu";

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
      icon: <LuReceiptText />,
      label: "AI Summarizer",
      path: "/dashboard/ai-summarizer",
      color: "#f7b733",
    },
    {
      icon: <FaLightbulb />,
      label: "Idea Generator",
      path: "/dashboard/idea-generator",
      color: "#f05053",
    },
    {
      icon: <TbTextRecognition />,
      label: "Keyword Extractor",
      path: "/dashboard/keyword-extractor",
      color: "#e53935",
    },
    {
      icon: <FaHeadset />,
      label: "Support",
      path: "/support",
      color: "#2196f3",
    },
    {
      icon: <FaEnvelope />,
      label: "Contact",
      path: "/contact",
      color: "#9c27b0",
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
                  <p>The AI Toolkit</p>
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
