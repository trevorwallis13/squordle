import React from 'react'
import GuessTile from './GuessTile'
import { maxWordLength } from '../config'

const GuessRow = ({currGuess, guessList, classNames, rowIndex, showWarning}) => {

   const getTileVals = () => {
       if (rowIndex === guessList.length) {
           return currGuess.split('')
       }

       if (rowIndex < guessList.length) {
           return guessList[rowIndex].split('')
       }

       return ''
   }

   const isCurrentRow = rowIndex === guessList.length
   const isPreviousRow = rowIndex === guessList.length - 1
   const tileVals = getTileVals()
   const tileClassNames = rowIndex < guessList.length ? classNames[rowIndex] : ''
   
    let tiles = []

    for(let i = 0; i<maxWordLength; i++) {
        tiles.push(<GuessTile key={i+1} index={i+1} tileVal={tileVals[i]} tileClassName={tileClassNames[i]} isCurrentRow={isCurrentRow} isPreviousRow={isPreviousRow} showWarning={showWarning}/>)
    }

    return (
        <div className="guess-row">
            {tiles}
        </div>
    )
}

export default GuessRow