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
              Hello! I’m Angela, a Computer Science student exploring how design, interactivity, and code can come together to create meaningful experiences. I enjoy building interactive projects with React and JavaScript, experimenting with modeling and problem-solving in Python, and drawing on my background in C++ for strong fundamentals in algorithms.
            </p>

            <h3>Projects</h3>
            <ul>
              <li>
                 <a
                    href="https://github.com/shadowstar654/my-portfolio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                 >
                    Portfolio Site
                 </a>
              </li>
              <li>
                 <a
                    href="https://github.com/shadowstar654/Client-Server-Chat-Model"
                    target="_blank"
                    rel="noopener noreferrer"
                 >
                    Client-Server-Chat Model
                 </a>
              </li>
              <li>
                 <a 
                    href="https://github.com/shadowstar654/Dementia-Prediction-Model"
                    target="_blank"
                    rel="noopener noreferrer"
                 >
                    Dementia-Prediction-Model
                 </a>
              </li>
              <li>
                 <a
                    href="https://github.com/shadowstar654/Building-A-Router-and-Dive-Into-TCP"
                    target="_blank"
                    rel="noopener noreferrer"
                 >
                    Building-A-Router-and-Dive-Into-TCP
                 </a>
              </li>
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
                    Hi I’m Angela! <span className="cursor">▌</span>
                    <div className="click-hint">Click on the screen to continue</div>
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

