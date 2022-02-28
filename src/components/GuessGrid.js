import React from 'react'
import GuessRow from './GuessRow';

const maxWordLength = 12;
const numberOfGuesses = 6;

const GuessGrid = ({currGuess, guessList, classNames, showWarning}) => {
  const rows = []

  for(let i = 0; i<numberOfGuesses; i++) {
    rows.push(<GuessRow key={i+1} rowIndex={i} currGuess={currGuess} guessList={guessList} classNames={classNames} showWarning={showWarning}/>)
  }

  return (
    <div className="guess-grid">
      <div className={`error-message ${showWarning ? 'show-error' : ''}`}>
        {showWarning ? `${currGuess} is not a pokemon!` : ''}
      </div>
       {rows}
    </div>
  )
}

export default GuessGrid