import { useState } from "react";
import axios from "axios";
import "../styles/KeywordExtractor.css";

export default function KeywordExtractor() {
  const [inputText, setInputText] = useState("");
  const [keywords, setKeywords] = useState("");
  const [loading, setLoading] = useState(false);

  const handleExtractKeywords = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    setKeywords("");

    try {
      const res = await axios.post("http://localhost:5000/api/keyword-extractor", {
        text: inputText,
      });
      setKeywords(res.data.keywords);
    } catch (err) {
      console.error(err);
      setKeywords("Error: Unable to extract keywords.");
    }

    setLoading(false);
  };

  const parseKeywords = (keywordText) => {
    if (!keywordText || keywordText.includes("Error:")) return [];

    // Split by common delimiters and clean up
    return keywordText
      .split(/[,\n\r\-•]/)
      .map((keyword) => keyword.trim())
      .filter((keyword) => keyword.length > 0)
      .slice(0, 20); // Limit to 20 keywords for better display
  };

  return (
    <div className="keyword-extractor-container">
      <div className="keyword-extractor-card">
        <div className="keyword-extractor-header">
          <div className="header-icon">
            <svg className="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <line
                x1="7"
                y1="7"
                x2="7.01"
                y2="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
          <h2 className="keyword-extractor-title">AI Keyword Extractor</h2>
          <p className="keyword-extractor-subtitle">
            Extract meaningful keywords and key phrases from any text using AI
          </p>
        </div>

        <div className="input-section">
          <label className="input-label">Input Text</label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste your content here to discover the most important keywords and phrases..."
            className="keyword-extractor-textarea"
            rows={8}
          />
          <div className="character-count">
            {inputText.length} characters •{" "}
            {inputText.split(/\s+/).filter((word) => word.length > 0).length} words
          </div>
        </div>

        <button
          onClick={handleExtractKeywords}
          disabled={loading || !inputText.trim()}
          className={`keyword-extractor-btn ${loading ? "loading" : ""} ${!inputText.trim() ? "disabled" : ""}`}
        >
          <span className="btn-icon">
            {loading ? (
              <div className="loading-spinner"></div>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d="M21 21l-4.35-4.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            )}
          </span>
          <span className="btn-text">
            {loading ? "Extracting Keywords..." : "Extract Keywords"}
          </span>
        </button>

        {keywords && (
          <div className="keywords-section">
            <div className="keywords-header">
              <h3 className="keywords-title">🏷️ Extracted Keywords</h3>
              <div className="keywords-stats">
                {parseKeywords(keywords).length > 0
                  ? `${parseKeywords(keywords).length} keywords found`
                  : "Processing..."}
              </div>
            </div>

            {keywords.includes("Error:") ? (
              <div className="error-message">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <line
                    x1="15"
                    y1="9"
                    x2="9"
                    y2="15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <line
                    x1="9"
                    y1="9"
                    x2="15"
                    y2="15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span>{keywords}</span>
              </div>
            ) : parseKeywords(keywords).length > 0 ? (
              <>
                <div className="keywords-grid">
                  {parseKeywords(keywords).map((keyword, index) => (
                    <div
                      key={index}
                      className="keyword-tag"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <span className="keyword-text">{keyword}</span>
                      <button
                        className="copy-keyword-btn"
                        onClick={() => navigator.clipboard.writeText(keyword)}
                        title="Copy keyword"
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
                      </button>
                    </div>
                  ))}
                </div>
                <div className="keywords-actions">
                  <button
                    className="action-btn copy-all-btn"
                    onClick={() =>
                      navigator.clipboard.writeText(parseKeywords(keywords).join(", "))
                    }
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
                    Copy All Keywords
                  </button>
                  <button
                    className="action-btn refresh-btn"
                    onClick={handleExtractKeywords}
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
                    Re-extract
                  </button>
                  <button className="action-btn clear-btn" onClick={() => setKeywords("")}>
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
              </>
            ) : (
              <div className="raw-keywords">
                <p>{keywords}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
