import { useState, useEffect, useRef, useMemo } from 'react'
import server from './api/server'
import pokeAPI from './api/pokeAPI'
import { list } from './api/list'
import Keyboard from './components/Keyboard'
import GuessGrid from './components/GuessGrid'
import useKeyPress from './hooks/useKeyPress'
import ResultModal from './components/ResultModal'
import { numberOfGuesses } from './config'
import Header from './components/header/Header'

const dictionary = list.map(mon => mon.name.toUpperCase())

const App = () => {

  // STATE MANAGEMENT 
  
  const [pokemon, setPokemon] = useState(list[7])
  const [currGuess, setCurrGuess] = useState('')
  const [guessList, setGuessList] = useState([])
  const [isActive, setIsActive] = useState(true)
  const [classNames, setClassNames] = useState([])
  const [showWarning, setShowWarning] = useState(false)
  const [gameStatus, setGameStatus] = useState('playing')
  const [showModal, setShowModal] = useState(false)
  const [pokedex, setPokedex] = useState(JSON.parse(localStorage.getItem('pokedex')) || [])
  const [userStats, setUserStats] = useState(JSON.parse(localStorage.getItem('userStats')) || [])

  useMemo(() => {
    if(guessList.length === numberOfGuesses && guessList[guessList.length-1] !== pokemon.name.toUpperCase()) {
      setGameStatus('lost')
      setIsActive(false)
      setShowModal(true)
      setUserStats(current => [...current, {pokemon: pokemon.name, guesses: 0}])
    }
  },[guessList, pokemon])

  // LOGGERS

  useMemo(() => console.log(guessList), [guessList])
  useMemo(() => console.log(gameStatus), [gameStatus])
  useMemo(() => console.log(userStats), [userStats])
  
  // REFS

  const focusRef = useRef()

  // BOOLEAN FUNCTIONS

  const isValidGuess = () => {
   return dictionary.indexOf(currGuess) !== -1 
  }

  const isCorrectGuess = () => {
    if(currGuess === pokemon.name.toUpperCase()) {
      setGameStatus('won')
      setShowModal(true)
      setIsActive(false)
      setPokedex(current => [...current, pokemon])
      setUserStats(current => [...current, {pokemon: pokemon.name, guesses: guessList.length + 1}])
    } 
  }

  // EVENT HANDLING HELPER FUNCTIONS

  const getGuessClassNames = () => {
    return currGuess.split('').map((letter, i) => {
      const match = pokemon.name.toUpperCase().split('')
      if (letter === match[i]) return 'correct'
      if (match.indexOf(letter) === -1) return 'wrong'
      return 'wrong-spot'
    })
  }

  const removeFocus = () => {
    focusRef.current.focus()
    focusRef.current.blur()
  }

  const addToCurrGuess = (letter) => {
    if(currGuess.length >= 12 || !isActive) return
    setCurrGuess(current => current + letter)
  }

  // EVENT HANDLERS

  const handleKeyClick = (e) => {
    addToCurrGuess(e.target.dataset.key)
  }

  const handleSubmit = () => {
    removeFocus()

    if (!isActive) return

    if(isValidGuess()) {

      isCorrectGuess()
  
      const classNamesCopy = Array.from(classNames)
      const guessListCopy = Array.from(guessList)
  
      classNamesCopy.push(getGuessClassNames())
      guessListCopy.push(currGuess)
   
      setClassNames(classNamesCopy)
      setGuessList(guessListCopy)
      setCurrGuess('')
    } else {
      setShowWarning(true)
      setTimeout(() => {setShowWarning(false)}, 1500)
    }
  }

  const handleDelete = () => {
    setCurrGuess(current => current.slice(0, -1))
  }

  useKeyPress((key) => {
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
  })

  const fetchPokemon = async () => {
    const idxRes = await server.get('/index/')
    const monRes = await pokeAPI.get(`/pokemon/${idxRes.data}`)
    setPokemon(monRes.data)
  }

  useEffect(() => {
    localStorage.setItem('pokedex', JSON.stringify(pokedex))
  }, [pokedex])

  useEffect(() => {
    localStorage.setItem('userStats', JSON.stringify(userStats))
  }, [userStats])

  return (
    <div className="App">
      <Header />
      <GuessGrid 
        currGuess={currGuess} 
        guessList={guessList}
        classNames={classNames}
        showWarning={showWarning}
      />
      <ResultModal showModal={showModal} setShowModal={setShowModal} pokemon={pokemon} gameStatus={gameStatus}/>
      <Keyboard 
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        handleKeyClick={handleKeyClick}
        focusRef={focusRef}
       />
    </div>
  );
}

export default App;