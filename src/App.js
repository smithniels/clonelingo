// TODO: make text colors change depending on correct-ness
// --> scribbles <---
/*
Adding onClick event for answers where if the {option.isCorrect}
 then do greenCorrect function 
 else redIncorrect function
    */
// TODO: make the aesthetics "better"
// TODO: randomize question answers
// TODO: add in a progress bar
// TODO: add hover  --> color change for answers or add in a border (black?) while answers are bing hovered

// investigate consulting contracts with vacations days
import React, { useState } from 'react';
import './App.css';
import RandArray from './components/Randomizer.js';

function App() {
    // Properties
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isActive, setIsActive] = useState(false);

    // // Helper functions
    // function timeout(delay: number) {
    //     console.log('timeout?');
    //     return new Promise((res) => setTimeout(res, delay));
    // }
    // handleClick
    const handleClick = () => {
        // 👇️ toggle
        setIsActive((current) => !current);
        // 👇️ or set to true
        setIsActive(true);
    };

    /* A possible answer was clicked */
    const optionClicked = (isCorrect) => {
        // change color (at some point this will work...)
        if (isCorrect) {
            console.log('correct!');
        } else {
            console.log('incorrect!');
        }
        // Increment the score
        if (isCorrect) {
            setScore(score + 1);
        }
        // if question # is greater than # of Questions showResults
        if (currentQuestion + 1 < RandArray.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
        // timeout(10000);
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
                <div className="final-results">
                    <h1>Final Results</h1>
                    <h2>Score: {score}</h2>
                    <h2>
                        {score} out of {RandArray.length} correct - (
                        {((score / RandArray.length) * 100).toFixed(1)}
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
                        {RandArray.length}
                    </h2>
                    <h3 className="question-text">
                        {RandArray[currentQuestion].text}
                    </h3>

                    {/* List of possible answers  */}
                    <ul>
                        {RandArray[currentQuestion].options.map((option) => {
                            return (
                                <li
                                    key={option.id}
                                    onClick={() => {
                                        optionClicked(option.isCorrect);
                                        !isActive;
                                        handleClick(); //
                                    }}
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

//
