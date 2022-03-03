import React from 'react'
import {MdOutlineCatchingPokemon} from 'react-icons/md'
import {IoStatsChart} from 'react-icons/io5'
import {RiPlayLine} from 'react-icons/ri'

const Nav = ({navIsVisible, showPokedex, showUserStats, handlePlayAgain}) => {
  return (
    <nav className={`main-nav menu-container ${navIsVisible ? 'show-item': ''}`}>
        <ul>
            <li onClick={showPokedex}><MdOutlineCatchingPokemon /> Pokedex</li>
            <li onClick={showUserStats}><IoStatsChart /> Stats</li>
            <li onClick={handlePlayAgain}><RiPlayLine/>Play Again</li>
        </ul>
    </nav>
  )
}

export default Nav