import React, { useState } from 'react';

const questions = [
    {
        question: "Jak reagujesz na budzik?",
        options: [
            { text: "Wstaję z energią!", points: 1 },
            { text: "Jeszcze 5 minut...", points: 2 },
            { text: "Rzucam nim o ścianę.", points: 3 },
            { text: "Jaki budzik? Śpię do 12.", points: 4 }
        ]
    },
    {
        question: "Twoje idealne popołudnie to:",
        options: [
            { text: "Praca i produktywność.", points: 1 },
            { text: "Kawa i plotki.", points: 2 },
            { text: "Netflix i pizza.", points: 3 },
            { text: "Impreza do rana!", points: 4 }
        ]
    },
    {
        question: "Jakie jest Twoje zwierzę duchowe?",
        options: [
            { text: "Mrówka (pracowita).", points: 1 },
            { text: "Kot (niezależny).", points: 2 },
            { text: "Leniwiec (zrelaksowany).", points: 3 },
            { text: "Sowa (imprezowa).", points: 4 }
        ]
    },
    {
        question: "Co myślisz o poniedziałkach?",
        options: [
            { text: "Nowy start!", points: 1 },
            { text: "Może być.", points: 2 },
            { text: "Dramat.", points: 3 },
            { text: "Co to jest poniedziałek?", points: 4 }
        ]
    },
    {
        question: "Twoja ulubiona pora dnia?",
        options: [
            { text: "Poranek.", points: 1 },
            { text: "Południe.", points: 2 },
            { text: "Wieczór.", points: 3 },
            { text: "Noc.", points: 4 }
        ]
    }
];

const results = {
    monday: {
        title: "Jesteś Ponurym Poniedziałkiem 🌧️",
        description: "Jesteś poważny, zorganizowany, ale czasem trochę marudny. Ludzie Cię szanują, ale boją się podejść bez kawy."
    },
    wednesday: {
        title: "Jesteś Szaloną Środą 🐪",
        description: "Jesteś w połowie drogi. Masz energię, ale też już trochę dość. Jesteś równowagą wszechświata."
    },
    friday: {
        title: "Jesteś Imprezowym Piątkiem 🎉",
        description: "Wszyscy Cię kochają! Przynosisz radość, ulgę i obietnicę dobrej zabawy. Jesteś duszą towarzystwa."
    },
    sunday: {
        title: "Jesteś Leniwą Niedzielą 🛋️",
        description: "Spokój, relaks i ładowanie baterii. Jesteś oazą spokoju w tym szalonym świecie. Nikt nie potrafi tak odpoczywać jak Ty."
    }
};

const PersonalityQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (points) => {
        const newScore = score + points;
        setScore(newScore);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const getResult = () => {
        // Max score = 5 * 4 = 20
        // Min score = 5 * 1 = 5
        if (score <= 8) return results.monday;
        if (score <= 12) return results.wednesday;
        if (score <= 16) return results.friday;
        return results.sunday;
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
    };

    const result = showResult ? getResult() : null;

    return (
        <div className="personality-quiz-container animate-fade-in">
            <div className="card quiz-card animate-slide-up">
                {!showResult ? (
                    <>
                        <h2 className="section-title">Jakim Dniem Tygodnia Jesteś? 🤔</h2>
                        <div className="quiz-progress">
                            Pytanie {currentQuestion + 1} z {questions.length}
                        </div>
                        <h3 className="quiz-question">{questions[currentQuestion].question}</h3>
                        <div className="quiz-options">
                            {questions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    className="quiz-option-btn"
                                    onClick={() => handleAnswer(option.points)}
                                >
                                    {option.text}
                                </button>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="quiz-result animate-slide-up">
                        <h2 className="result-title">{result.title}</h2>
                        <p className="result-description">{result.description}</p>
                        <button className="reset-button" onClick={resetQuiz}>
                            Sprawdź jeszcze raz 🔄
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PersonalityQuiz;
