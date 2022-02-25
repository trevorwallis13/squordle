import { useState, useEffect } from 'react'
import server from './api/server'
import pokeAPI from './api/pokeAPI'
import Keyboard from './components/Keyboard'
import GuessGrid from './components/GuessGrid'

const App = () => {
  
  const [ pokemon, setPokemon ] = useState('')

  const fetchPokemon = async () => {
    const idxRes = await server.get('/index/')
    const monRes = await pokeAPI.get(`/pokemon/${idxRes.data}`)
    setPokemon(monRes.data)
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

    console.log(pokemon)

  return (
    <div className="App">
      <GuessGrid />
      <Keyboard />
    </div>
  );
}

export default App;
