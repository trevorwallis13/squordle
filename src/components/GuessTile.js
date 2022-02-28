import React from 'react'

const GuessTile = ({tileVal, tileClassName, isCurrentRow, showWarning}) => {

  return (
    <div className={`guess-tile ${tileClassName ? tileClassName : ''} ${isCurrentRow && showWarning && tileVal ? 'shake': ''}`}>
        {tileVal}
    </div>
  )
}

export default GuessTile