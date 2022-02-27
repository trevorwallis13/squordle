import React from 'react'
import GuessRow from './GuessRow';

const maxWordLength = 12;
const numberOfGuesses = 6;

const GuessGrid = ({currGuess, guessList}) => {
  const rows = []

  for(let i = 0; i<numberOfGuesses; i++) {
    rows.push(<GuessRow key={i+1} index={i} currGuess={currGuess} guessList={guessList}/>)
  }

  return (
    <div className="guess-grid">
       {rows}
    </div>
  )
}

export default GuessGrid