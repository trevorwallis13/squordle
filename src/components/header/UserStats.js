import React from 'react'

const UserStats = ({userStatsIsVisible, showUserStats}) => {

//   const pokedexList = userPokedex.map((pokemon, i) => {
//     return <PokedexItem key={i} pokemon={pokemon} count={i+1}/>
//   })

    
  return (
    <aside className={`user-stats right-container menu-container ${userStatsIsVisible ? 'show-item': ''}`}>
        <span onClick={showUserStats}>X</span>
    </aside>
  )
}

export default UserStats