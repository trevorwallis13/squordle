import {useState} from 'react'
import logo from '../../images/squordle-logo.png'
import Nav from './Nav'
import HelpModal from './HelpModal'
import Pokedex from './pokedex/Pokedex'
import UserStats from './userStats/UserStats'
import { FiMenu } from 'react-icons/fi'
import { FaRegQuestionCircle } from 'react-icons/fa'

const Header = ({userPokedex, userStats, handlePlayAgain, navIsVisible, pokedexIsVisible, userStatsIsVisible, showNav, showPokedex, showUserStats}) => {

  const [showHelpModal, setShowHelpModal] = useState(true)

  return (
    <header className="main-header">
        <button className="help-button" onClick={() => setShowHelpModal(true)}><FaRegQuestionCircle /></button>
        <img src={logo} alt="squordle logo" className="logo"/>
        <button onClick={showNav} className="menu-button"><FiMenu /></button>
        <HelpModal showHelpModal={showHelpModal} setShowHelpModal={setShowHelpModal} />
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