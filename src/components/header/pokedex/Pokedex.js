import React from 'react'
import PokedexItem from './PokedexItem'

const Pokedex = ({userPokedex, pokedexIsVisible, showPokedex}) => {

  console.log(userPokedex)

  const pokedexList = userPokedex.map((pokemon, i) => {
    return <PokedexItem key={i} pokemon={pokemon} count={i+1}/>
  })

    
  return (
    <aside className={`pokedex right-container menu-container ${pokedexIsVisible ? 'show-item': ''}`}>
        <span onClick={showPokedex}>X</span>
        {pokedexList}
    </aside>
  )
}

export default Pokedex