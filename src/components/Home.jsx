import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const getDayName = (date) => {
    return new Intl.DateTimeFormat('pl-PL', { weekday: 'long' }).format(date);
  };

  const getNextDayName = (date) => {
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    return getDayName(nextDay);
  };

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div className="home-container">
      <div className="card current-day-card">
        <h2>Dzisiaj jest</h2>
        <div className="day-display">{capitalize(getDayName(currentDate))}</div>
        <p className="date-display">
          {new Intl.DateTimeFormat('pl-PL', { dateStyle: 'full' }).format(currentDate)}
        </p>
      </div>

      <div className="card next-day-card">
        <h2>Jutro będzie</h2>
        <div className="day-display small">{capitalize(getNextDayName(currentDate))}</div>
      </div>
    </div>
  );
};

export default Home;
