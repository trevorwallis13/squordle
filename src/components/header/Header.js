
import logo from '../../images/squordle-logo.png'
import Nav from './Nav'
import Pokedex from './pokedex/Pokedex'
import UserStats from './userStats/UserStats'
import Button from 'react-bootstrap/Button'

const Header = ({userPokedex, userStats, handlePlayAgain, navIsVisible, pokedexIsVisible, userStatsIsVisible, showNav, showPokedex, showUserStats}) => {

  return (
    <header className="main-header">
        <img src={logo} alt="squordle logo" className="logo"/>
        <Button variant="outline-dark" onClick={showNav}>Menu</Button>
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