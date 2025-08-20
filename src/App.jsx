import { useState } from "react";
import "./App.css";

function App() {
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="scene">
      {/* ===== ABOUT SCREEN PANEL ===== */}
      {zoomed && (
        <div className="about-panel">
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              Hello! I’m Angela, a software engineer passionate about React
              and interactive web experiences.
            </p>

            <h3>Projects</h3>
            <ul>
              <li>Portfolio site</li>
              <li>Game project</li>
              <li>Other apps</li>
            </ul>

            <h3>Skills</h3>
            <ul>
              <li>React</li>
              <li>Three.js</li>
              <li>JavaScript & C++</li>
            </ul>

            <button className="back-btn" onClick={() => setZoomed(false)}>
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
                    Hi I’m Angela<span className="cursor">▌</span>
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

