import React, { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="app-container">
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
        </div>
      </nav>

      <main className="main-content">
        {activeTab === 'home' ? <Home /> : <Quiz />}
      </main>
    </div>
  );
}

export default App;
