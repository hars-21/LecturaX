import { useState } from "react";
import "../styles/IdeaGenerator.css";
import { apiRequest } from "../services/api";

export default function IdeaGenerator() {
  const [topic, setTopic] = useState("");
  const [ideas, setIdeas] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateIdeas = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setIdeas("");

    try {
      const res = await apiRequest.post("/generateIdeas", {
        topic,
      });
      setIdeas(res.ideas);
    } catch (err) {
      console.error(err);
      setIdeas("Error: Unable to generate ideas.");
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading && topic.trim()) {
      handleGenerateIdeas();
    }
  };

  return (
    <div className="idea-generator-container">
      <div className="idea-generator-card">
        <div className="idea-generator-header">
          <div className="header-icon">
            <svg className="bulb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 21h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M12 17v4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <circle
                cx="12"
                cy="9"
                r="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
          <h2 className="idea-generator-title">AI Idea Generator</h2>
          <p className="idea-generator-subtitle">
            Unleash creativity with AI-powered brainstorming for any topic
          </p>
        </div>

        <div className="input-section">
          <label className="input-label">Topic or Problem</label>
          <div className="input-wrapper">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your topic, problem, or challenge to explore..."
              className="idea-generator-input"
            />
            <div className="input-indicator"></div>
          </div>
          <div className="input-hint">Press Enter or click generate to spark new ideas</div>
        </div>

        <button
          onClick={handleGenerateIdeas}
          disabled={loading || !topic.trim()}
          className={`idea-generator-btn ${loading ? "loading" : ""} ${!topic.trim() ? "disabled" : ""}`}
        >
          <span className="btn-icon">
            {loading ? (
              <div className="loading-spinner"></div>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            )}
          </span>
          <span className="btn-text">{loading ? "Generating Ideas..." : "Generate Ideas"}</span>
        </button>

        {ideas && (
          <div className="ideas-section">
            <div className="ideas-header">
              <h3 className="ideas-title">💡 Generated Ideas</h3>
              <div className="ideas-controls">
                <button
                  className="control-btn refresh-btn"
                  onClick={handleGenerateIdeas}
                  disabled={loading}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline
                      points="23 4 23 10 17 10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <polyline
                      points="1 20 1 14 7 14"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  Refresh
                </button>
                <button
                  className="control-btn copy-btn"
                  onClick={() => navigator.clipboard.writeText(ideas)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  Copy
                </button>
                <button className="control-btn clear-btn" onClick={() => setIdeas("")}>
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
                  Clear
                </button>
              </div>
            </div>
            <div className="ideas-content">
              <div className="ideas-text">{ideas}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
