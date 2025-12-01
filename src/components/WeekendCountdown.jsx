import React, { useState, useEffect } from 'react';

const WeekendCountdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 5 = Friday

            // Target: Next Friday at 17:00 (5 PM)
            let target = new Date();
            target.setHours(17, 0, 0, 0);

            if (currentDay === 5 && now.getHours() >= 17) {
                // It's Friday after 17:00, target next Friday
                target.setDate(now.getDate() + 7);
            } else if (currentDay === 6) {
                // Saturday, target next Friday
                target.setDate(now.getDate() + 6);
            } else if (currentDay === 0) {
                // Sunday, target next Friday
                target.setDate(now.getDate() + 5);
            } else {
                // Mon-Fri (before 17:00), target this Friday
                target.setDate(now.getDate() + (5 - currentDay));
            }

            const difference = target - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                // It's the weekend!
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft(); // Initial call

        return () => clearInterval(timer);
    }, []);

    const isWeekend = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

    return (
        <div className="countdown-container animate-fade-in">
            <div className="card countdown-card animate-slide-up">
                <h2 className="section-title">Odliczanie do Weekendu 🚀</h2>

                {isWeekend ? (
                    <div className="weekend-message animate-slide-up">
                        <h1>JEST WEEKEND! 🎉</h1>
                        <p>Wyłącz komputer i idź się bawić!</p>
                    </div>
                ) : (
                    <div className="timer-grid">
                        <div className="timer-item">
                            <span className="timer-value">{timeLeft.days}</span>
                            <span className="timer-label">Dni</span>
                        </div>
                        <div className="timer-item">
                            <span className="timer-value">{timeLeft.hours}</span>
                            <span className="timer-label">Godzin</span>
                        </div>
                        <div className="timer-item">
                            <span className="timer-value">{timeLeft.minutes}</span>
                            <span className="timer-label">Minut</span>
                        </div>
                        <div className="timer-item">
                            <span className="timer-value">{timeLeft.seconds}</span>
                            <span className="timer-label">Sekund</span>
                        </div>
                    </div>
                )}

                <p className="countdown-footer">
                    (Cel: Piątek, 17:00)
                </p>
            </div>
        </div>
    );
};

export default WeekendCountdown;
