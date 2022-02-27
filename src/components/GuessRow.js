import React from 'react'
import GuessTile from './GuessTile'

const GuessRow = ({currGuess, guessList, classNames, index}) => {

    // row index 0 for a fresh board will have a guessList length of 0
    //if row index === guesslist length, letters = current guess
    //if row index < guesslist length, letters = guessList[index]
    //if row index > guesslist length, letters = ''
   // if index < guessList.length

   const getTileVals = () => {
       if (index === guessList.length) {
           return currGuess.split('')
       }

       if (index < guessList.length) {
           return guessList[index].split('')
       }

       return ''
   }


   const tileVals = getTileVals()
   const tileClassNames = index < guessList.length ? classNames[index] : ''
   
    let tiles = []

    for(let i = 0; i<12; i++) {
        tiles.push(<GuessTile key={i+1} tileVal={tileVals[i]} tileClassName={tileClassNames[i]}/>)
    }

    return (
        <div className="guess-row">
            {tiles}
        </div>
    )
}

export default GuessRow