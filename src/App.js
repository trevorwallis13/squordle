import { useState, useEffect, useRef } from 'react'
import server from './api/server'
import pokeAPI from './api/pokeAPI'
import Keyboard from './components/Keyboard'
import GuessGrid from './components/GuessGrid'
import useKeyPress from './hooks/useKeyPress'

const App = () => {
  
  const [ pokemon, setPokemon ] = useState('')
  const [ currGuess, setCurrGuess ] = useState('')
  const [ guessList, setGuessList ] = useState([])
  
  const enterRef = useRef()

  console.log(currGuess)
  console.log(guessList)

  const addToCurrGuess = (letter) => {
    if(currGuess.length >= 12) return
    setCurrGuess(current => current + letter)
  }
  const handleKeyClick = (e) => {
    addToCurrGuess(e.target.dataset.key)
  }

  const handleSubmit = () => {
    const guessListCopy = Array.from(guessList)
    guessListCopy.push(currGuess)
    enterRef.current.focus()
    enterRef.current.blur()
    setGuessList(guessListCopy)
    setCurrGuess('')
  }

  const handleDelete = () => {
    setCurrGuess(current => current.slice(0, -1))
  }

  const handleKeyDown = (key) => {
    if(key === 'ENTER') {
      handleSubmit()
    }
    if(key === 'DELETE' || key === 'BACKSPACE') {
      handleDelete()
    }
    if(key.match(/^[A-Z]$/)) {
      addToCurrGuess(key)
    }
    return
  }

  const fetchPokemon = async () => {
    const idxRes = await server.get('/index/')
    const monRes = await pokeAPI.get(`/pokemon/${idxRes.data}`)
    setPokemon(monRes.data)
  }

  useKeyPress(handleKeyDown)

  return (
    <div className="App" tabIndex='-1'>
      <GuessGrid currGuess={currGuess} guessList={guessList}/>
      <Keyboard 
       handleSubmit={handleSubmit}
       handleDelete={handleDelete}
       handleKeyClick={handleKeyClick}
       enterRef={enterRef}
       />
    </div>
  );
}

export default App;
