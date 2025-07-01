import React, { useState, useEffect } from 'react';
import './App.css';
import IntegrationsSlide from './IntegrationsSlide';
import RoadmapSlide from './RoadmapSlide';

// PUBLIC_INTERFACE
function App() {
  /**
   * Root app, controls theme and shows either the integrations or roadmap slide.
   */
  const [theme, setTheme] = useState('light');
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [<IntegrationsSlide />, <RoadmapSlide />];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const goToSlide = (index) => setSlideIndex(index);

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: "100vh" }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <div className="slide-switcher">
          <button className={`slide-btn${slideIndex === 0 ? " selected" : ""}`} onClick={() => goToSlide(0)}>Integrations</button>
          <button className={`slide-btn${slideIndex === 1 ? " selected" : ""}`} onClick={() => goToSlide(1)}>Roadmap</button>
        </div>
        <div className="ppt-slide-frame">
          {slides[slideIndex]}
        </div>
      </header>
    </div>
  );
}

export default App;
