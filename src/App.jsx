import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Learning from './components/Learning';
import Calculator from './components/Calculator';
import ExcuseGenerator from './components/ExcuseGenerator';
import PersonalityQuiz from './components/PersonalityQuiz';
import RobotDays from './components/RobotDays';
import WeekendCountdown from './components/WeekendCountdown';

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
                className={`nav-btn ${activeTab === 'calculator' ? 'active' : ''}`}
                onClick={() => setActiveTab('calculator')}
              >
                Kalkulator
              </button>
              <button
                className={`nav-btn ${activeTab === 'excuses' ? 'active' : ''}`}
                onClick={() => setActiveTab('excuses')}
              >
                Wymówki
              </button>
              <button
                className={`nav-btn ${activeTab === 'personality' ? 'active' : ''}`}
                onClick={() => setActiveTab('personality')}
              >
                Quiz Osobowości
              </button>
              <button
                className={`nav-btn ${activeTab === 'robot' ? 'active' : ''}`}
                onClick={() => setActiveTab('robot')}
              >
                Robot
              </button>
              <button
                className={`nav-btn ${activeTab === 'countdown' ? 'active' : ''}`}
                onClick={() => setActiveTab('countdown')}
              >
                Odliczanie
              </button>
              <button
                className="nav-btn focus-btn icon-btn"
                onClick={toggleFocusMode}
                title="Tryb Skupienia"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                </svg>
              </button>
            </div>
          </nav>

          <main className="main-content">
            {activeTab === 'home' && <Home />}
            {activeTab === 'quiz' && <Quiz />}
            {activeTab === 'learning' && <Learning />}
            {activeTab === 'calculator' && <Calculator />}
            {activeTab === 'excuses' && <ExcuseGenerator />}
            {activeTab === 'personality' && <PersonalityQuiz />}
            {activeTab === 'robot' && <RobotDays />}
            {activeTab === 'countdown' && <WeekendCountdown />}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
