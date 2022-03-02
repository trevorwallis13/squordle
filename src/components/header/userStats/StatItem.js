import React from 'react'

const StatItem = ({stat, label}) => {
  return (
    <div className="stat-item">
        <h4>{stat}</h4>
        <p>{label}</p>
    </div>
  )
}

export default StatItem