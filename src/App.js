// TODO: make text colors change depending on correct-ness
// TODO: make the aesthetics "better"
// TODO: randomize question order
// TODO: randomize question answers
// TODO: probably should have question contained in a JSON (I think... Like that makes sense to me)

import React, { useState } from 'react';
import './App.css';
import Questions from './components/Questions.js';

function App() {
    // Properties
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    // Helper Functions

    /* */

    /* A possible answer was clicked */
    const optionClicked = (isCorrect) => {
        // Increment the score
        if (isCorrect) {
            setScore(score + 1);
        }
        // if question # is greater than # of Questions showResults
        if (currentQuestion + 1 < Questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    /* Resets the game back to default */

    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
    };

    return (
        <div className="App">
            <header>
                <h1>Danish | English Quiz</h1>
            </header>

            {/* RESULTS */}
            {showResults ? (
                /* 4. Final Results */
                <div className="final-results">
                    <h1>Final Results</h1>
                    <h2>Score: {score}</h2>
                    <h2>
                        {score} out of {Questions.length} correct - (
                        {((score / Questions.length) * 100).toFixed(1)}
                        %)
                    </h2>
                    <button onClick={() => restartGame()}>Restart game</button>
                </div>
            ) : (
                /* 5. Question Card  */
                <div className="question-card">
                    {/* Current Question  */}
                    <h2>
                        Question: {currentQuestion + 1} out of{' '}
                        {Questions.length}
                    </h2>
                    <h3 className="question-text">
                        {Questions[currentQuestion].text}
                    </h3>

                    {/* List of possible answers  */}
                    <ul>
                        {Questions[currentQuestion].options.map((option) => {
                            return (
                                <li
                                    key={option.id}
                                    onClick={() =>
                                        optionClicked(option.isCorrect)
                                    }
                                >
                                    {option.text}
                                </li>
                            );
                        })}
                    </ul>
                    <h2>Score: {score}</h2>
                </div>
            )}
        </div>
    );
}

export default App;
