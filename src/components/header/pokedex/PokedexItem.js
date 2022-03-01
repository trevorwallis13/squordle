import React from 'react'

const PokedexItem = ({pokemon, count}) => {

  return (
    <div className="pokedex-item">
        <img src={pokemon.img} alt={pokemon.name} />
        <h4>{pokemon.name}</h4>
        <p>{`x${count}`}</p>
    </div>
  )
}

export default PokedexItem