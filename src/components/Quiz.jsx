
import React, { useState } from 'react';

const questions = [
    {
        question: "Jeśli dzisiaj jest poniedziałek, jaki dzień będzie pojutrze?",
        options: ["Wtorek", "Środa", "Czwartek", "Piątek"],
        answer: "Środa"
    },
    {
        question: "Jaki dzień tygodnia jest po sobocie?",
        options: ["Piątek", "Niedziela", "Poniedziałek", "Wtorek"],
        answer: "Niedziela"
    },
    {
        question: "Ile dni ma tydzień?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "Jaki dzień jest przed piątkiem?",
        options: ["Środa", "Czwartek", "Sobota", "Niedziela"],
        answer: "Czwartek"
    },
    {
        question: "Jeśli wczoraj była niedziela, jaki dzień jest dzisiaj?",
        options: ["Sobota", "Poniedziałek", "Wtorek", "Środa"],
        answer: "Poniedziałek"
    },
    {
        question: "Który dzień jest uważany za środek tygodnia roboczego?",
        options: ["Wtorek", "Środa", "Czwartek", "Piątek"],
        answer: "Środa"
    },
    {
        question: "Jaki dzień następuje po wtorku?",
        options: ["Poniedziałek", "Środa", "Czwartek", "Piątek"],
        answer: "Środa"
    },
    {
        question: "Ile dni roboczych ma typowy tydzień?",
        options: ["4", "5", "6", "7"],
        answer: "5"
    },
    {
        question: "Jaki dzień jest przed niedzielą?",
        options: ["Piątek", "Sobota", "Poniedziałek", "Wtorek"],
        answer: "Sobota"
    },
    {
        question: "Jeśli pojutrze będzie piątek, jaki dzień jest dzisiaj?",
        options: ["Wtorek", "Środa", "Czwartek", "Sobota"],
        answer: "Środa"
    }
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const handleAnswerOptionClick = (option) => {
        if (selectedOption) return; // Prevent multiple clicks

        setSelectedOption(option);
        const correct = option === questions[currentQuestion].answer;
        setIsCorrect(correct);

        if (correct) {
            setScore(score + 1);
        }

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedOption(null);
                setIsCorrect(null);
            } else {
                setShowScore(true);
            }
        }, 1500);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedOption(null);
        setIsCorrect(null);
    };

    const getScoreMessage = () => {
        const percentage = (score / questions.length) * 100;
        if (percentage === 100) return "Perfekcyjnie! Znasz dni tygodnia śpiewająco!";
        if (percentage >= 80) return "Świetna robota! Bardzo dobry wynik.";
        if (percentage >= 50) return "Nieźle, ale możesz jeszcze trochę poćwiczyć.";
        return "Musisz jeszcze trochę poćwiczyć dni tygodnia.";
    };

    return (
        <div className="quiz-container animate-fade-in">
            {showScore ? (
                <div className="score-section card animate-slide-up">
                    <h2>Koniec Quizu!</h2>
                    <p>Twój wynik to {score} z {questions.length}</p>
                    <p className="score-message">{getScoreMessage()}</p>
                    <button onClick={resetQuiz} className="reset-button">Zagraj ponownie</button>
                </div>
            ) : (
                <div className="question-section card animate-slide-up">
                    <div className="question-count">
                        <span>Pytanie {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className="question-text">{questions[currentQuestion].question}</div>
                    <div className="answer-section">
                        {questions[currentQuestion].options.map((option) => {
                            let buttonClass = "answer-button";
                            if (selectedOption === option) {
                                buttonClass += isCorrect ? " correct" : " incorrect";
                            } else if (selectedOption && option === questions[currentQuestion].answer) {
                                buttonClass += " correct"; // Show correct answer if wrong one selected
                            }

                            return (
                                <button
                                    key={option}
                                    onClick={() => handleAnswerOptionClick(option)}
                                    className={buttonClass}
                                    disabled={selectedOption !== null}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
