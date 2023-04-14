// TODO: make font better
// TODO: make text colors change depending on correct-ness
// TODO: make the aesthetics "better"
// TODO: randomize question order
// TODO: probably should have question contained in a JSON (I think... Like that makes sense to me)

import React, { useState } from 'react';
import './App.css';

function App() {
    // Properties
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] =
        useState(0);
    const [score, setScore] = useState(0);
    const questions = [
        {
            text: 'Section',
            options: [
                {
                    id: 0,
                    text: 'Anbegale',
                    isCorrect: false
                },
                {
                    id: 1,
                    text: 'Akmindelige',
                    isCorrect: false
                },
                {
                    id: 2,
                    text: 'Atten',
                    isCorrect: false
                },
                {
                    id: 3,
                    text: 'Afsnit',
                    isCorrect: true
                }
            ]
        },
        {
            text: 'Common',
            options: [
                {
                    id: 0,
                    text: 'Almindelige',
                    isCorrect: true
                },
                {
                    id: 1,
                    text: 'årsager',
                    isCorrect: false
                },
                {
                    id: 2,
                    text: 'Befarginer',
                    isCorrect: false
                },
                {
                    id: 3,
                    text: 'Bidrage',
                    isCorrect: false
                }
            ]
        },
        {
            text: 'Recommend',
            options: [
                {
                    id: 0,
                    text: 'Anbefale',
                    isCorrect: true
                },
                {
                    id: 1,
                    text: 'Ligner',
                    isCorrect: false
                },
                {
                    id: 2,
                    text: 'Kæmpestore',
                    isCorrect: false
                },
                {
                    id: 3,
                    text: 'Lidenskab',
                    isCorrect: false
                }
            ]
        },
        {
            text: 'Anxiety',
            options: [
                {
                    id: 0,
                    text: 'Dyb',
                    isCorrect: false
                },
                {
                    id: 1,
                    text: 'Angst',
                    isCorrect: true
                },
                {
                    id: 2,
                    text: 'Farlige',
                    isCorrect: false
                },
                {
                    id: 3,
                    text: 'Gennemgået',
                    isCorrect: false
                }
            ]
        },
        {
            text: 'Reason',
            options: [
                {
                    id: 0,
                    text: 'Ejer',
                    isCorrect: false
                },
                {
                    id: 1,
                    text: 'Årsager',
                    isCorrect: true
                },
                {
                    id: 2,
                    text: 'Helst',
                    isCorrect: true
                },
                {
                    id: 3,
                    text: 'Nulstilling',
                    isCorrect: false
                }
            ]
        },
        {
            text: 'at Deliver',
            options: [
                {
                    id: 0,
                    text: 'at Have',
                    isCorrect: false
                },
                {
                    id: 1,
                    text: 'to Aflevere',
                    isCorrect: true
                },
                {
                    id: 2,
                    text: 'to Svede',
                    isCorrect: false
                },
                {
                    id: 3,
                    text: 'at Håbe',
                    isCorrect: false
                }
            ]
        },
        {
            text: 'To Order',
            options: [
                {
                    id: 0,
                    text: 'At Bestille',
                    isCorrect: true
                },
                {
                    id: 1,
                    text: 'At Låne',
                    isCorrect: false
                },
                {
                    id: 2,
                    text: 'At Vide',
                    isCorrect: false
                },
                {
                    id: 3,
                    text: 'At Føde',
                    isCorrect: false
                }
            ]
        },
        {
            text: 'To Give Birth',
            options: [
                {
                    id: 0,
                    text: 'At Sidde',
                    isCorrect: false
                },
                {
                    id: 1,
                    text: 'At Gøre',
                    isCorrect: false
                },
                {
                    id: 2,
                    text: 'At Smutte',
                    isCorrect: false
                },
                {
                    id: 3,
                    text: 'At Føde',
                    isCorrect: true
                }
            ]
        },
        {
            text: 'Fears/Concerns',
            options: [
                {
                    id: 0,
                    text: 'Månedgange',
                    isCorrect: true
                },
                {
                    id: 1,
                    text: 'Nulstilling',
                    isCorrect: false
                },
                {
                    id: 2,
                    text: 'Befarginer',
                    isCorrect: true
                },
                {
                    id: 3,
                    text: 'Nysgerrig',
                    isCorrect: false
                }
            ]
        },
        {
            text: 'To Want',
            options: [
                {
                    id: 0,
                    text: 'At Slip',
                    isCorrect: false
                },
                {
                    id: 1,
                    text: 'At Huske',
                    isCorrect: false
                },
                {
                    id: 2,
                    text: 'At Ville',
                    isCorrect: true
                },
                {
                    id: 3,
                    text: 'At Gåre',
                    isCorrect: false
                }
            ]
        },
        {
            text: 'To Release',
            options: [
                {
                    id: 0,
                    text: 'At Slip',
                    isCorrect: true
                },
                {
                    id: 1,
                    text: 'At Sejle',
                    isCorrect: false
                },
                {
                    id: 2,
                    text: 'At Smutte',
                    isCorrect: false
                },
                {
                    id: 3,
                    text: 'At Nyde',
                    isCorrect: false
                }
            ]
        },
        {
            text: 'To Avoid',
            options: [
                {
                    id: 0,
                    text: 'At Undgår',
                    isCorrect: true
                },
                {
                    id: 1,
                    text: 'At Skrider',
                    isCorrect: false
                },
                {
                    id: 2,
                    text: 'At Synge',
                    isCorrect: false
                },
                {
                    id: 3,
                    text: 'At Opgave',
                    isCorrect: false
                }
            ]
        },
        {
            text: 'To Pretend',
            options: [
                {
                    id: 0,
                    text: 'At Gøre Op',
                    isCorrect: false
                },
                {
                    id: 1,
                    text: 'At Fordrage',
                    isCorrect: false
                },
                {
                    id: 2,
                    text: 'At Foregive',
                    isCorrect: true
                },
                {
                    id: 3,
                    text: 'Håbe',
                    isCorrect: false
                }
            ]
        },
        {
            text: 'To Feed',
            options: [
                {
                    id: 0,
                    text: 'At Opfodtre',
                    isCorrect: true
                },
                {
                    id: 1,
                    text: 'At Oversætte',
                    isCorrect: false
                },
                {
                    id: 2,
                    text: 'At Ligner', // that looks like
                    isCorrect: false
                },
                {
                    id: 3,
                    text: 'At Abandon',
                    isCorrect: false
                }
            ]
        },
        {
            text: 'To Impact',
            options: [
                {
                    id: 0,
                    text: 'At Påvirke',
                    isCorrect: true
                },
                {
                    id: 1,
                    text: 'Til Tørst', // to thirst
                    isCorrect: false
                },
                {
                    id: 2,
                    text: 'Til Sult', // to hunger
                    isCorrect: false
                },
                {
                    id: 3,
                    text: 'At Rådgive', //to advise
                    isCorrect: false
                }
            ]
        }
    ];

    // Helper Functions

    /* */

    /* A possible answer was clicked */
    const optionClicked = (isCorrect) => {
        // Increment the score
        if (isCorrect) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
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
            {/* 1. Header  */}
            <header>
                <h1>Danish | English Quiz</h1>
            </header>

            {/* 2. Current Score  */}

            {/* 3. Show results or show the question game  */}
            {showResults ? (
                /* 4. Final Results */
                <div className="final-results">
                    <h1>Final Results</h1>
                    <h2>Score: {score}</h2>
                    <h2>
                        {score} out of {questions.length}{' '}
                        correct - (
                        {(
                            (score / questions.length) *
                            100
                        ).toFixed(1)}
                        {/* toFixed is just rounding to a single decimal */}
                        %)
                    </h2>
                    <button onClick={() => restartGame()}>
                        Restart game
                    </button>
                </div>
            ) : (
                /* 5. Question Card  */
                <div className="question-card">
                    {/* Current Question  */}
                    <h2>
                        Question: {currentQuestion + 1} out
                        of {questions.length}
                    </h2>
                    <h3 className="question-text">
                        {questions[currentQuestion].text}
                    </h3>

                    {/* List of possible answers  */}
                    <ul>
                        {questions[
                            currentQuestion
                        ].options.map((option) => {
                            return (
                                <li
                                    key={option.id}
                                    onClick={() =>
                                        optionClicked(
                                            option.isCorrect
                                        )
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
