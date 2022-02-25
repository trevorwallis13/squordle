import React from 'react'
import GuessTile from './GuessTile'

const maxWordLength = 12;
const numberOfGuesses = 6;

const GuessGrid = () => {

  const tiles = [];

  for (let i = 1; i<=maxWordLength * numberOfGuesses; i++) {
    tiles.push(<GuessTile key={i} />)
  }

  return (
    <div className="guess-grid">
        {tiles}
    </div>
  )
}

export default GuessGrid