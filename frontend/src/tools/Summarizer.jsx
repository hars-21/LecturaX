import { useState } from "react";
import axios from "axios";
import "../styles/Summarizer.css";

export default function Summarizer() {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    setSummary("");

    try {
      const res = await axios.post("http://localhost:5000/api/summarize", {
        text: inputText,
      });
      setSummary(res.data.summary);
    } catch (err) {
      console.error(err);
      setSummary("Error: Unable to summarize.");
    }

    setLoading(false);
  };

  return (
    <div className="summarizer-container">
      <div className="summarizer-card">
        <div className="summarizer-header">
          <h2 className="summarizer-title">AI Summarizer</h2>
          <p className="summarizer-subtitle">
            Transform lengthy content into concise, intelligent summaries
          </p>
        </div>

        <div className="input-section">
          <label className="input-label">Input Text</label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste your text here and let AI create a comprehensive summary..."
            className="summarizer-textarea"
            rows={8}
          />
          <div className="character-count">{inputText.length} characters</div>
        </div>

        <button
          onClick={handleSummarize}
          disabled={loading || !inputText.trim()}
          className={`summarizer-btn ${loading ? "loading" : ""} ${!inputText.trim() ? "disabled" : ""}`}
        >
          <span className="btn-text">{loading ? "Generating Summary..." : "Summarize Text"}</span>
          {loading && <div className="loading-spinner"></div>}
        </button>

        {summary && (
          <div className="summary-section">
            <div className="summary-header">
              <h3 className="summary-title">Generated Summary</h3>
              <span className="summary-badge">AI Generated</span>
            </div>
            <div className="summary-content">
              <p>{summary}</p>
            </div>
            <div className="summary-actions">
              <button
                className="action-btn copy-btn"
                onClick={() => navigator.clipboard.writeText(summary)}
              >
                Copy Summary
              </button>
              <button className="action-btn clear-btn" onClick={() => setSummary("")}>
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
