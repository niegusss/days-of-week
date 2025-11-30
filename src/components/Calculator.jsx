import React, { useState } from 'react';

const Calculator = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');

    const calculateDay = (dateString) => {
        if (!dateString) {
            setDayOfWeek('');
            return;
        }
        const date = new Date(dateString);
        const options = { weekday: 'long' };
        const dayName = new Intl.DateTimeFormat('pl-PL', options).format(date);
        setDayOfWeek(dayName.charAt(0).toUpperCase() + dayName.slice(1));
    };

    const handleDateChange = (e) => {
        const date = e.target.value;
        setSelectedDate(date);
        calculateDay(date);
    };

    return (
        <div className="calculator-container animate-fade-in">
            <div className="card calculator-card animate-slide-up">
                <h2 className="section-title">Kalkulator Dni Tygodnia</h2>
                <p className="calculator-description">
                    Wybierz datę, aby sprawdzić, jaki to był (lub będzie) dzień tygodnia.
                </p>

                <div className="input-group">
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="date-input"
                    />
                </div>

                {dayOfWeek && (
                    <div className="result-display animate-slide-up">
                        <p className="result-label">To jest:</p>
                        <div className="result-day">{dayOfWeek}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calculator;
