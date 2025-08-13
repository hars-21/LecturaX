import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLightbulb,
  FaSearch,
  FaChartLine,
  FaClock,
  FaFire,
  FaUser,
  FaQuestionCircle,
} from "react-icons/fa";
import "../styles/dashboard.css";

function Dashboard() {
  const [usage, setUsage] = useState({
    summarizer: { count: 0, lastUsed: null },
    ideaGenerator: { count: 0, lastUsed: null },
    keywordExtractor: { count: 0, lastUsed: null },
  });

  const [todayStats, setTodayStats] = useState({
    totalUsage: 0,
    timeSpent: 0,
    streak: 1,
  });

  // Load usage data from localStorage
  useEffect(() => {
    const savedUsage = localStorage.getItem("thinkdockUsage");
    const savedStats = localStorage.getItem("thinkdockStats");

    if (savedUsage) {
      setUsage(JSON.parse(savedUsage));
    }

    if (savedStats) {
      setTodayStats(JSON.parse(savedStats));
    }
  }, []);

  // Get greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  // Calculate total usage
  const totalUsage =
    usage.summarizer.count + usage.ideaGenerator.count + usage.keywordExtractor.count;

  // Tool cards data
  const tools = [
    {
      id: "summarizer",
      title: "AI Summarizer",
      description: "Transform lengthy text into concise summaries",
      icon: FaCode,
      link: "/dashboard/ai-summarizer",
      count: usage.summarizer.count,
      gradient: "from-blue-500 to-blue-700",
    },
    {
      id: "ideaGenerator",
      title: "Idea Generator",
      description: "Spark creativity with AI-generated ideas",
      icon: FaLightbulb,
      link: "/dashboard/idea-generator",
      count: usage.ideaGenerator.count,
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      id: "keywordExtractor",
      title: "Keyword Extractor",
      description: "Extract key terms from any text",
      icon: FaSearch,
      link: "/dashboard/keyword-extractor",
      count: usage.keywordExtractor.count,
      gradient: "from-green-500 to-green-700",
    },
  ];

  // Quick actions
  const quickActions = [
    {
      title: "Analytics",
      description: "View your usage statistics",
      icon: FaChartLine,
      link: "/dashboard/analytics",
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Profile",
      description: "Manage your account settings",
      icon: FaUser,
      link: "/dashboard/profile",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: "Support",
      description: "Get help and assistance",
      icon: FaQuestionCircle,
      link: "/dashboard/support",
      color: "from-pink-500 to-pink-700",
    },
  ];

  return (
    <main className="main-content">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="dashboard-welcome"
      >
        <div className="welcome-content">
          <h1 className="welcome-title">
            {getGreeting()}! Welcome to <span className="brand-highlight">ThinkDock</span>
          </h1>
          <p className="welcome-subtitle">
            Your AI-powered productivity hub is ready. Choose a tool to get started.
          </p>
        </div>
      </motion.div>

      {/* Analytics Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="analytics-section"
      >
        <h2 className="section-title">Today's Activity</h2>
        <div className="analytics-grid">
          <div className="analytics-card">
            <div className="analytics-icon">
              <FaFire />
            </div>
            <div className="analytics-content">
              <span className="analytics-number">{totalUsage}</span>
              <span className="analytics-label">Tools Used</span>
            </div>
          </div>
          <div className="analytics-card">
            <div className="analytics-icon">
              <FaClock />
            </div>
            <div className="analytics-content">
              <span className="analytics-number">{todayStats.timeSpent}m</span>
              <span className="analytics-label">Time Saved</span>
            </div>
          </div>
          <div className="analytics-card">
            <div className="analytics-icon">
              <FaChartLine />
            </div>
            <div className="analytics-content">
              <span className="analytics-number">{todayStats.streak}</span>
              <span className="analytics-label">Day Streak</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* AI Tools Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="tools-section"
      >
        <h2 className="section-title">AI Tools</h2>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="tools-card"
            >
              <Link to={tool.link} className="tools-link">
                <div className="tools-icon-wrapper">
                  <tool.icon />
                </div>
                <div className="tools-content">
                  <h3 className="tools-title">{tool.title}</h3>
                  <p className="tools-description">{tool.description}</p>
                  <div className="tools-stats">
                    <span className="usage-count">Used {tool.count} times</span>
                  </div>
                </div>
                <div className="tools-arrow">→</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="quick-actions-section"
      >
        <h2 className="section-title">Quick Actions</h2>
        <div className="grid-container">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="card action-card"
            >
              <Link to={action.link} className="card-link">
                <div className="card-icon">
                  <action.icon />
                </div>
                <div className="card-content">
                  <h3>{action.title}</h3>
                  <p>{action.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}

export default Dashboard;
