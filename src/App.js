// --> scribbles <---
// TODO: randomize question answers (probably create a new "words" JSON file)
// TODO: add in a progress bar

import React, { useState, useEffect } from 'react';
import './App.css';
import RandArray from './components/Randomizer.js';
import classNames from 'classnames';
<<<<<<< HEAD
<<<<<<< HEAD
// import 'bootstrap/dist/css/bootstrap.min.css';
// import styled from 'styled-components';
// import { ProgressBar, Button } from 'react-bootstrap';
=======
import 'bootstrap/dist/css/bootstrap.min.css';
// import ProgressBar from 'react-bootstrap/ProgressBar';
>>>>>>> parent of 8ac618d (setProgress and other rf)
=======
import 'bootstrap/dist/css/bootstrap.min.css';
// import ProgressBar from 'react-bootstrap/ProgressBar';
>>>>>>> parent of 8ac618d (setProgress and other rf)

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Helper functions
  const handleClick = () => {
    setIsActive(true);
  };

  const handleAnswer = (isCorrect, optionId) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setSelectedOption(optionId);
<<<<<<< HEAD
<<<<<<< HEAD
    setProgress(progress + 1);
=======
=======
>>>>>>> parent of 8ac618d (setProgress and other rf)
    // Wait for 1 second
>>>>>>> parent of 8ac618d (setProgress and other rf)
    setTimeout(() => {
      if (currentQuestion + 1 < RandArray.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
      setSelectedOption(null);
      setIsActive(false);
    }, 1000);
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

<<<<<<< HEAD
<<<<<<< HEAD
  // const StyledButton = styled(Button)`
  //   font-size: 1em;
  //   margin: 1em;
  //   padding: 0.25em 1em;
  //   border: 2px solid palevioletred;
  //   border-radius: 3px;
  // `;

  // reset
=======
>>>>>>> parent of 8ac618d (setProgress and other rf)
  useEffect(() => {
    if (selectedOption !== null) {
      setTimeout(() => {
        setSelectedOption(null);
        setIsActive(false);
      }, 1000);
    }
  }, [selectedOption]);

=======
>>>>>>> parent of 8ac618d (setProgress and other rf)
  useEffect(() => {
    if (selectedOption !== null) {
      setTimeout(() => {
        setSelectedOption(null);
        setIsActive(false);
      }, 1000);
    }
  }, [selectedOption]);

  useEffect(() => {
    if (selectedOption !== null) {
      setTimeout(() => {
        setSelectedOption(null);
        setIsActive(false);
      }, 1000);
    }
  }, [selectedOption]);

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
              const classes = classNames({
                'selected-option': option.id === selectedOption,
                'correct-option': isActive && option.isCorrect,
                'incorrect-option': isActive && !option.isCorrect,
              });
              return (
                <li
                  key={option.id}
                  className={classes}
                  onClick={() => {
                    handleAnswer(option.isCorrect, option.id);
                    handleClick();
                  }}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
<<<<<<< HEAD
<<<<<<< HEAD
          {/* <StyledButton>text</StyledButton> */}
          {/* <div className='progressBar'>
            {' '}
            <ProgressBar></ProgressBar>
          </div>
          <span>{progress}</span> */}
=======
          {/* {ProgressBar} */}
>>>>>>> parent of 8ac618d (setProgress and other rf)
=======
          {/* {ProgressBar} */}
>>>>>>> parent of 8ac618d (setProgress and other rf)
          <h2>Score: {score}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
