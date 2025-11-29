import React from 'react';

const DayDetail = ({ day, onBack }) => {
    return (
        <div className="day-detail-container">
            <button className="back-button" onClick={onBack}>
                ← Wróć
            </button>

            <div className={`detail-header ${day.color}`}>
                <h1 className="detail-title">{day.name}</h1>
                <p className="detail-subtitle">{day.description}</p>
            </div>

            <div className="detail-content">
                <section className="detail-section">
                    <h2>Historia i Etymologia</h2>
                    <p>{day.etymology}</p>
                </section>

                <section className="detail-section">
                    <h2>Ciekawostki</h2>
                    <ul className="trivia-list">
                        {day.trivia.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className="detail-section famous-people-section">
                    <h2>Sławne osoby urodzone w ten dzień</h2>
                    <div className="famous-grid">
                        {day.famousPeople.map((person, index) => (
                            <div key={index} className="famous-card">
                                <div className="famous-name">{person.name}</div>
                                <div className="famous-role">{person.role}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DayDetail;
