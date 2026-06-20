import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [dream, setDream] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeDream = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:5000/analyze",
        {
          dream: dream,
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Backend not connected");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="container">
        <h1>🌙 DreamMind AI</h1>

        <p className="subtitle">
          AI-Powered Dream Analysis & Mental Wellness Companion
        </p>

        <textarea
          rows="8"
          placeholder="Describe your dream here..."
          value={dream}
          onChange={(e) => setDream(e.target.value)}
        />

        <button onClick={analyzeDream}>
          {loading ? "Analyzing..." : "Analyze Dream"}
        </button>

        {result && (
          <div className="result">
            <h2>🧠 Emotion</h2>
            <p>{result.emotion}</p>

            <h2>✨ Interpretation</h2>
            <p>{result.interpretation}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
