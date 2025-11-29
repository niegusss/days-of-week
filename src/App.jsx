import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Learning from './components/Learning';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFocusMode(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    let timer;
    if (isFocusMode) {
      timer = setInterval(() => setCurrentTime(new Date()), 60000);
    }
    return () => clearInterval(timer);
  }, [isFocusMode]);

  const toggleFocusMode = async () => {
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen();
      } catch (err) {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      }
    }
  };

  const getDayName = (date) => {
    return new Intl.DateTimeFormat('pl-PL', { weekday: 'long' }).format(date);
  };

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div className="app-container">
      {isFocusMode ? (
        <div className="focus-mode-overlay" onClick={toggleFocusMode}>
          <div className="focus-content">
            <h1 className="focus-day">{capitalize(getDayName(currentTime))}</h1>
            <p className="focus-hint">Kliknij, aby wyjść</p>
          </div>
        </div>
      ) : (
        <>
          <nav className="navbar">
            <div className="logo">Dni Tygodnia</div>
            <div className="nav-links">
              <button
                className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => setActiveTab('home')}
              >
                Strona Główna
              </button>
              <button
                className={`nav-btn ${activeTab === 'quiz' ? 'active' : ''}`}
                onClick={() => setActiveTab('quiz')}
              >
                Quiz
              </button>
              <button
                className={`nav-btn ${activeTab === 'learning' ? 'active' : ''}`}
                onClick={() => setActiveTab('learning')}
              >
                Nauka
              </button>
              <button
                className="nav-btn focus-btn"
                onClick={toggleFocusMode}
                title="Tryb Skupienia"
              >
                Focus Mode
              </button>
            </div>
          </nav>

          <main className="main-content">
            {activeTab === 'home' && <Home />}
            {activeTab === 'quiz' && <Quiz />}
            {activeTab === 'learning' && <Learning />}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
