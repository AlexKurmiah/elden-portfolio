import { useState, useEffect } from "react";
import "./loadingscreen.css";

export default function LoadingScreen({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 2500);
    const timer2 = setTimeout(() => onComplete(), 3500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="loading-content">
        <h1 className="loading-name">Alex Kurmiah</h1>
        <p className="loading-subtitle">Tarnished Developer</p>
        <div className="loading-bar-container">
          <div className="loading-bar" />
        </div>
      </div>
    </div>
  );
}