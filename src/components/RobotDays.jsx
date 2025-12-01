import React, { useState } from 'react';

const days = [
    { name: 'Poniedziałek', binary: '01010000', hex: '50' },
    { name: 'Wtorek', binary: '01010111', hex: '57' },
    { name: 'Środa', binary: '01010011', hex: '53' },
    { name: 'Czwartek', binary: '01000011', hex: '43' },
    { name: 'Piątek', binary: '01010000', hex: '50' },
    { name: 'Sobota', binary: '01010011', hex: '53' },
    { name: 'Niedziela', binary: '01001110', hex: '4E' }
];

const RobotDays = () => {
    const [mode, setMode] = useState('binary'); // 'binary' or 'hex'

    return (
        <div className="robot-container animate-fade-in">
            <div className="card robot-card animate-slide-up">
                <h2 className="section-title robot-title">Dni Tygodnia v2.0 🤖</h2>
                <p className="robot-description">
                    Naucz się mówić jak Twój toster.
                </p>

                <div className="mode-selector">
                    <button
                        className={`mode-btn ${mode === 'binary' ? 'active' : ''}`}
                        onClick={() => setMode('binary')}
                    >
                        0101 (Binarny)
                    </button>
                    <button
                        className={`mode-btn ${mode === 'hex' ? 'active' : ''}`}
                        onClick={() => setMode('hex')}
                    >
                        0xAF (Hex)
                    </button>
                </div>

                <div className="robot-grid">
                    {days.map((day, index) => (
                        <div key={index} className="robot-day-row" style={{ animationDelay: `${index * 0.1}s` }}>
                            <span className="human-day">{day.name}</span>
                            <span className="arrow">➜</span>
                            <span className={`robot-code ${mode}`}>
                                {mode === 'binary' ? day.binary : `0x${day.hex}`}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RobotDays;
