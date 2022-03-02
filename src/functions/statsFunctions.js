import { numberOfGuesses } from '../config'

export const getCurrentStreak = (games) => {
    let streak = 0
    let i = games.length - 1;
    while(i >= 0 && games[i].guesses > 0) {
      streak ++ 
      i --
    }
    return streak
  }

export const getLongestStreak = (games) => {
    let longestStreak = 0
    let tempStreak = 0

    for(let i = 0; i<games.length; i++) {
    
    if(tempStreak > longestStreak) {
        longestStreak = tempStreak
    }
    
    if(games[i].guesses === 0) {
        tempStreak = 0
        continue
    }

    tempStreak ++
    }

    return longestStreak
}

export const getGuessDistribution = (games) => {
    const guesses = {}

    for(let i = 0; i <= numberOfGuesses; i++) {
        guesses[i] = 0
    }

    games.forEach(item => guesses[item.guesses]++)
    return guesses
}
