import { useState, useEffect, useRef } from 'react'
import server from './api/server'
import pokeAPI from './api/pokeAPI'
import Keyboard from './components/Keyboard'
import GuessGrid from './components/GuessGrid'
import useKeyPress from './hooks/useKeyPress'

const App = () => {
  
  const [ pokemon, setPokemon ] = useState({
    id: 7,
    name: "Squirtle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"
  })
  const [ currGuess, setCurrGuess ] = useState('')
  const [ guessList, setGuessList ] = useState([])
  const [ isActive, setIsActive ] = useState(true)
  const [ classNames, setClassNames ] = useState([])
  
  const enterRef = useRef()

  const getGuessClassNames = () => {
    return currGuess.split('').map((letter, i) => {
      const match = pokemon.name.toUpperCase().split('')
      if (letter === match[i]) return 'correct'
      if (match.indexOf(letter) === -1) return 'wrong'
      return 'wrong-spot'
    })
  }

  const isCorrectGuess = () => {
    if(currGuess === pokemon.name.toUpperCase()) {
      setIsActive(false)
    } 
  }

  const removeFocus = () => {
    enterRef.current.focus()
    enterRef.current.blur()
  }

  const addToCurrGuess = (letter) => {
    if(currGuess.length >= 12 || !isActive) return
    setCurrGuess(current => current + letter)
  }
  const handleKeyClick = (e) => {
    addToCurrGuess(e.target.dataset.key)
  }

  const handleSubmit = () => {
    if (!isActive) return

    removeFocus()
    isCorrectGuess()

    const classNamesCopy = Array.from(classNames)
    const guessListCopy = Array.from(guessList)

    classNamesCopy.push(getGuessClassNames())
    guessListCopy.push(currGuess)
 
    setClassNames(classNamesCopy)
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
    <div className="App">
      <GuessGrid 
        currGuess={currGuess} 
        guessList={guessList}
        classNames={classNames}
      />
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
