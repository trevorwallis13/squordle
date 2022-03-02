import { useState } from 'react'
import logo from '../../images/squordle-logo.png'
import Nav from './Nav'
import Pokedex from './pokedex/Pokedex'
import UserStats from './userStats/UserStats'

const Header = ({userPokedex, userStats, handlePlayAgain}) => {

    const [navIsVisible, setNavIsVisible] = useState(false)
    const [pokedexIsVisible, setPokedexIsVisible] = useState(false)
    const [userStatsIsVisible, setUserStatsIsVisible] = useState(false)

    const showNav = () => {
        setNavIsVisible(curr => !curr);
        setPokedexIsVisible(false)
        setUserStatsIsVisible(false)
    }

    const showPokedex = () => {
      setPokedexIsVisible(curr => !curr)
      setNavIsVisible(curr => !curr)
    }

    const showUserStats = () => {
      setUserStatsIsVisible(curr => !curr)
      setNavIsVisible(curr => !curr)
    }

  return (
    <header className="main-header">
        <img src={logo} alt="squordle logo" className="logo"/>
        <button onClick={showNav}>Menu</button>
        <Nav 
          navIsVisible={navIsVisible} 
          showPokedex={showPokedex} 
          showUserStats={showUserStats} 
          handlePlayAgain={handlePlayAgain}
        />
        <Pokedex 
          userPokedex={userPokedex} 
          pokedexIsVisible={pokedexIsVisible} 
          showPokedex={showPokedex}
        />
        <UserStats 
          userStatsIsVisible={userStatsIsVisible}
          showUserStats={showUserStats} 
          userStats={userStats} 
        />
    </header>
  )
}

export default Header