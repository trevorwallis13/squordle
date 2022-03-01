import React from 'react'
import {MdOutlineCatchingPokemon} from 'react-icons/md'
import {IoStatsChart} from 'react-icons/io5'

const Nav = ({navIsVisible, showPokedex, showUserStats}) => {
  return (
    <nav className={`main-nav menu-container ${navIsVisible ? 'show-item': ''}`}>
        <ul>
            <li onClick={showPokedex}><MdOutlineCatchingPokemon /> Pokedex</li>
            <li onClick={showUserStats}><IoStatsChart /> Stats</li>
        </ul>
    </nav>
  )
}

export default Nav