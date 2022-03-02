import React, { useMemo } from 'react'
import StatItem from './StatItem'
import GuessNumberBar from './GuessNumberBar'
import { getLongestStreak, getCurrentStreak, getGuessDistribution } from '../../../functions/statsFunctions'

const UserStats = ({userStatsIsVisible, showUserStats, userStats}) => {

  useMemo(() => console.log(getGuessDistribution(userStats)), [userStats])

  const gamesPlayed = userStats.length
  const totalWins = userStats.filter(item => item.guesses > 0).length
  // const winRate = (totalWins / gamesPlayed * 100).toFixed(1)
  const currentStreak = getCurrentStreak(userStats)
  const longestStreak = getLongestStreak(userStats)
  const guessDistribution = getGuessDistribution(userStats)
  const maxGuessTotal = Math.max(...Object.values(guessDistribution))

  const numberBars = Object.entries(guessDistribution).map((number, i) => {
    return <GuessNumberBar key={i} guess={number[0]} max={maxGuessTotal} count={number[1]} />
  })
    
  return (
    <aside className={`user-stats right-container menu-container ${userStatsIsVisible ? 'show-item': ''}`}>
        <span onClick={showUserStats} className="exit-button">X</span>
        <div className="total-stats-container">
          <StatItem stat={gamesPlayed} label={'Played'} />
          <StatItem stat={totalWins} label={'Wins'} />
          <StatItem stat={currentStreak} label={'Current Streak'} />
          <StatItem stat={longestStreak} label={'Max Streak'} />
        </div>
        <div className="guess-bar-chart">
          {numberBars}
        </div>
    </aside>
  )
}

export default UserStats