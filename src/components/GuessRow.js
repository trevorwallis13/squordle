import React from 'react'
import GuessTile from './GuessTile'

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
   const tileVals = getTileVals()
   const tileClassNames = rowIndex < guessList.length ? classNames[rowIndex] : ''
   
    let tiles = []

    for(let i = 0; i<12; i++) {
        tiles.push(<GuessTile key={i+1} tileVal={tileVals[i]} tileClassName={tileClassNames[i]} isCurrentRow={isCurrentRow} showWarning={showWarning}/>)
    }

    return (
        <div className="guess-row">
            {tiles}
        </div>
    )
}

export default GuessRow