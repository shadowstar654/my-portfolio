import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [zoomed, setZoomed] = useState(false);
  const [activeRepo, setActiveRepo] = useState(null);
  const [repoReadme, setRepoReadme] = useState("Click a project to view details.");

  // Fetch GitHub README when activeRepo changes
  useEffect(() => {
    if (activeRepo) {
      fetch(`https://api.github.com/repos/${activeRepo}/readme`, {
        headers: { Accept: "application/vnd.github.v3.html" },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load");
          return res.text();
        })
        .then(setRepoReadme)
        .catch(() => setRepoReadme("Error loading repo content."));
    }
  }, [activeRepo]);

  return (
    <div className="scene">
      {/* ===== ABOUT SCREEN PANEL ===== */}
      {zoomed && (
        <div className="about-panel">
          <div className="about-content">
            {!activeRepo ? (
              <>
                <h2>About Me</h2>
                <p>
                  Hello! I’m Angela, a Computer Science student exploring how
                  design, interactivity, and code can come together to create
                  meaningful experiences. I enjoy building interactive projects
                  with React and JavaScript, experimenting with modeling and
                  problem-solving in Python, and drawing on my background in C++
                  for strong fundamentals in algorithms.
                </p>

                <h3>Projects</h3>
                <ul className="projects-list">
                  <li onClick={() => setActiveRepo("shadowstar654/my-portfolio")}>
                    Portfolio Site
                  </li>
                  <li
                    onClick={() =>
                      setActiveRepo("shadowstar654/Client-Server-Chat-Model")
                    }
                  >
                    Client-Server-Chat Model
                  </li>
                  <li
                    onClick={() =>
                      setActiveRepo("shadowstar654/Dementia-Prediction-Model")
                    }
                  >
                    Dementia Prediction Model
                  </li>
                  <li
                    onClick={() =>
                      setActiveRepo(
                        "shadowstar654/Building-A-Router-and-Dive-Into-TCP"
                      )
                    }
                  >
                    Building a Router & Dive Into TCP
                  </li>
                </ul>

                <h3>Skills</h3>
                <ul>
                  <li>React & JavaScript</li>
                  <li>Three.js</li>
                  <li>C++ & C</li>
                  <li>Python</li>
                </ul>
              </>
            ) : (
              <>
                <h2>{activeRepo}</h2>
                <div
                  className="readme"
                  dangerouslySetInnerHTML={{ __html: repoReadme }}
                />
                <div className="repo-actions">
                  <a
                    href={`https://github.com/${activeRepo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    🚀 Press here to go to GitHub
                  </a>
                </div>
                <button className="back-btn" onClick={() => setActiveRepo(null)}>
                  ◀ Back to Projects
                </button>
              </>
            )}

            <button
              className="back-btn"
              onClick={() => {
                setActiveRepo(null);
                setZoomed(false);
              }}
            >
              ◀ Back
            </button>
          </div>
        </div>
      )}

      {/* ===== COMPUTER SETUP ===== */}
      {!zoomed && (
        <>
          <div className="computer">
            {/* ===== MONITOR ===== */}
            <div className="monitor">
              <div className="face front">
                <div className="screen" onClick={() => setZoomed(true)}>
                  <div className="screen-link">
                    Hi I’m Angela <span className="cursor">▌</span>
                    <div className="click-hint">
                      Click on the screen to continue
                    </div>
                  </div>
                </div>
              </div>
              <div className="face back"></div>
              <div className="face right"></div>
              <div className="face left"></div>
              <div className="face top"></div>
              <div className="face bottom"></div>
            </div>

            {/* ===== NECK ===== */}
            <div className="neck">
              <div className="face front"></div>
              <div className="face back"></div>
              <div className="face right"></div>
              <div className="face left"></div>
              <div className="face top"></div>
              <div className="face bottom"></div>
            </div>

            {/* ===== KEYBOARD ===== */}
            <div className="keyboard">
              <div className="kb-face top">
                <div className="keys">
                  {Array.from({ length: 4 }).map((_, r) => (
                    <div className="row" key={r}>
                      {Array.from({ length: 12 }).map((_, c) => (
                        <div className="key" key={c}></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ===== DESK ===== */}
          <div className="desk"></div>
        </>
      )}
    </div>
  );
}

export default App;

