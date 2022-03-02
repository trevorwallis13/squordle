import React from 'react'

const GuessNumberBar = ({guess, max, count}) => {
    const barColor = count === 0 ? "rgb(120, 124, 126)" : "rgb(1,95,98)"
    const barStyle = {
        width: `${count/max*100}%`,
        backgroundColor: `${barColor}`
    }
   

    return (
        <div className="guess-bar-row">
            <p className="guess-number">{guess}</p>
            <div className="bar-area" style={barStyle}>
               {count}
            </div>
        </div>
    )
}

export default GuessNumberBar