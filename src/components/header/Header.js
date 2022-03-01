import { useState } from 'react'
import logo from '../../images/squordle-logo.png'
import Nav from './Nav'
import Pokedex from './pokedex/Pokedex'
import UserStats from './UserStats'

const Header = ({userPokedex}) => {

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
    }

    const showUserStats = () => {
      setUserStatsIsVisible(curr => !curr)
    }

    console.log(pokedexIsVisible)
  return (
    <header className="main-header">
        <img src={logo} alt="squordle logo" className="logo"/>
        <button onClick={showNav}>Menu</button>
        <Nav navIsVisible={navIsVisible} showPokedex={showPokedex} showUserStats={showUserStats}/>
        <Pokedex userPokedex={userPokedex} pokedexIsVisible={pokedexIsVisible} showPokedex={showPokedex}/>
        <UserStats userStatsIsVisible={userStatsIsVisible} showUserStats={showUserStats} />
    </header>
  )
}

export default Header