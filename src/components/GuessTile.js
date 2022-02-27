import React from 'react'

const GuessTile = ({tileVal, tileClassName, id}) => {

  return (
    <div className={`guess-tile ${tileClassName}`}>
        {tileVal}
    </div>
  )
}

export default GuessTile