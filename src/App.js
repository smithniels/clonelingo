// TODO: make text colors change depending on correct-ness
// --> scribbles <---
/*
Adding onClick event for answers where if the {option.isCorrect}
 then do greenCorrect function 
 else redIncorrect function
    */
// TODO: randomize question answers (probably create a new "words" JSON file)
// TODO: add in a progress bar
// TODO: add hover  --> color change for answers or add in a border (black?) while answers are bing hovered

// investigate consulting contracts with vacations days
import React, { useState } from 'react';
import './App.css';
import RandArray from './components/Randomizer.js';
import classNames from 'classnames';

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // // Helper functions
  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);
    // console.log('handleClick');
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
    // Increment score
    if (isCorrect) {
      setScore(score + 1);
    }
    // if question # is greater than # of Questions showResults
    if (currentQuestion + 1 < RandArray.length) {
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
    <div className='App'>
      <header>
        <h1>Danish | English Quiz</h1>
      </header>
      {showResults ? (
        <div className='final-results'>
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
        <div className='question-card'>
          <h2>
            Question: {currentQuestion + 1} out of {RandArray.length}
          </h2>
          <h3 className={classNames('question-text')}>
            {RandArray[currentQuestion].text}
          </h3>

          <ul>
            {RandArray[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  // className={classNames('question-card', {{
                  //     isCorrect:  {success},
                  //     !isCorrect: {unsuccess}
                  // }})} // no idea
                  //   style={{ backgroundColor }}
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
