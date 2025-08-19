import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const App = () => {
  const [zoomedIn, setZoomedIn] = useState(false);

  return (
    <div className="app">
      {!zoomedIn ? (
        <motion.div
          className="retro-computer"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1,y: [0, -10, 0], // 👈 floating motion
            rotateY: [0, 2, -2, 0]  }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setZoomedIn(true)}
        >
          {/* Monitor cube */}
          <div className="monitor">
            <div className = "monitor-front">
               <div className="screen">
                  <h1 className="name-text">Hi, I am Angela 👋</h1>
               </div>
            </div>
          <div className="monitor-back"></div>
          <div className="monitor-left"></div>
          <div className="monitor-right"></div>
          <div className="monitor-top"></div>
          <div className="monitor-bottom"></div>
          </div>
          {/* Base */}
          <div className="base" />

          {/* Optional keyboard */}
          <div className="keyboard" />
          <div className="desk"></div>   {/* new desk */}
        </motion.div>
      ) : (
        <motion.div
          className="retro-block"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="screen-inner">
            <h1>About Me</h1>
            <p>
              Hello! I’m Angela, a software engineer passionate about React and
              interactive web experiences.
            </p>

            <h2>Projects</h2>
            <ul>
              <li>Portfolio site</li>
              <li>Game project</li>
              <li>Other apps</li>
            </ul>

            <h2>Skills</h2>
            <ul>
              <li>React</li>
              <li>Three.js</li>
              <li>JavaScript & C++</li>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default App;

