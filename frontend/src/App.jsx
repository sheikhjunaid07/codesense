import { useState } from "react";
import Editor from "react-simple-code-editor";
import hljs from "highlight.js";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.min.css";
import axios from "axios";
import "./App.css";

// CJS interop fix for react-simple-code-editor
const CodeEditor = Editor.default ?? Editor;

function autoHighlight(code) {
  return hljs.highlightAuto(code).value;
}

function App() {
  const [review, setReview] = useState(``);
  const [code, setCode] = useState(` function sum() {\n  return 1 + 1\n}`);

  async function reviewCode() {
    const response = await axios.post(
      "https://code-reviewer-gzgu.onrender.com/ai/get-review",
      {
        code,
      },
    );
    setReview(response.data);
  }

  return (
    <div className="app-wrapper">
      <header className="navbar">
        <span className="logo">CodeSense</span>
      </header>
      <main>
        <div className="left">
          <div className="code">
            <CodeEditor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={autoHighlight}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                minHeight: "100%",
                width: "100%",
                color: "#abb2bf",
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </div>
  );
}

export default App;
