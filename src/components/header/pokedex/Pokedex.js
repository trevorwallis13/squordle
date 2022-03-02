import React from 'react'
import PokedexItem from './PokedexItem'

const Pokedex = ({userPokedex, pokedexIsVisible, showPokedex}) => {


  const getCount = (arr) => {
    const count = {}
    arr.forEach(item => count[item.name] ? count[item.name]++ : count[item.name] = 1)
    return count
  }
  
  const filterAndAddCount = (arr) => {
    
    const counts = getCount(arr)
    const filteredList = arr.filter((item, index, array) => index === array.map(obj => obj.name).indexOf(item.name))
    
    filteredList.forEach(pokemon => pokemon.count = counts[pokemon.name])

    return filteredList
  }

  const pokedexList = filterAndAddCount(userPokedex).map((pokemon, i) => {
    return <PokedexItem key={i} pokemon={pokemon}/>
  })

    
  return (
    <aside className={`pokedex right-container menu-container ${pokedexIsVisible ? 'show-item': ''}`}>
        <span onClick={showPokedex} className="exit-button">X</span>
        {pokedexList}
    </aside>
  )
}

export default Pokedex