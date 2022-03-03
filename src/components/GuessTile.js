import React from 'react'

const GuessTile = ({tileVal, tileClassName, isCurrentRow, isPreviousRow, showWarning, index}) => {

  
  return (
    <div className={`guess-tile ${tileClassName ? tileClassName : ''} ${isPreviousRow && tileVal ? 'flip' : ''} ${isCurrentRow && showWarning && tileVal ? 'shake': ''}`}>
        {tileVal}
    </div>
  )
}

export default GuessTile