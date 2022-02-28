import React from 'react'
import {MdOutlineCatchingPokemon} from 'react-icons/md'
import {IoStatsChart} from 'react-icons/io5'

const Nav = ({isVisible}) => {
  return (
    <nav className={`main-nav ${isVisible ? 'show-nav': ''}`}>
        <ul>
            <li><a href="#"><MdOutlineCatchingPokemon /> Pokedex</a></li>
            <li><a href="#"><IoStatsChart /> Stats</a></li>
        </ul>
    </nav>
  )
}

export default Nav