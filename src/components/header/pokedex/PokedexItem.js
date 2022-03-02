import React from 'react'

const PokedexItem = ({pokemon}) => {

  return (
    <div className="pokedex-item">
        <img src={pokemon.img} alt={pokemon.name} />
        <h4>{pokemon.name}</h4>
        <p>{`x ${pokemon.count}`}</p>
    </div>
  )
}

export default PokedexItem