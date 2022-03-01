import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ResultModal = ({showModal, setShowModal, pokemon, gameStatus, handlePlayAgain}) => {
   
    const closeModal = () => {
        setShowModal(false)
    }

    const setMessage = () => {
        if(gameStatus === 'playing') return
        
        if(gameStatus === 'won') {
            return `You caught a wild ${pokemon.name}!`
        }

        return `Uh oh! Wild ${pokemon.name} got away!`
    }
    
  return (
    <Modal
    show={showModal}
    size="lg"
    centered
  >
    <Modal.Header closeButton onClick={closeModal}></Modal.Header>
    <Modal.Body>
      <h4>{setMessage()}</h4>
      <img className={gameStatus === 'lost' ? 'slide-away' : ''} src={pokemon.img} alt={`image of ${pokemon.name}`} /> 
    </Modal.Body>
    <Modal.Footer>
        <Button variant='outline-dark' onClick={handlePlayAgain}>Play again!</Button>
        <Button variant='outline-dark'>Pokedex</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default ResultModal