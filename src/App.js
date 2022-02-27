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
  
  const enterRef = useRef()

  const checkGuess = () => {
    if(currGuess === pokemon.name.toUpperCase()) {
      setIsActive(false)
      console.log(`${currGuess} is correct!`)
    } else {
      const guessLetters = currGuess.split('')

      const validityClasses = guessLetters.map((letter, i) => {
        const correctLetters = pokemon.name.toUpperCase().split('')

        if (letter === correctLetters[i]) {
          return 'correct'
        }

        if (correctLetters.indexOf(letter) === -1) {
          return 'wrong'
        }

        return 'wrong-spot'
      })

      console.log(validityClasses)
    }
  }

  const addToCurrGuess = (letter) => {
    if(currGuess.length >= 12 || !isActive) return
    setCurrGuess(current => current + letter)
  }
  const handleKeyClick = (e) => {
    addToCurrGuess(e.target.dataset.key)
  }

  const handleSubmit = () => {
    checkGuess()
    if (!isActive) return
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
