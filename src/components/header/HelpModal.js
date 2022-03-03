import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import GuessRow from '../GuessRow'

const HelpModal = ({showHelpModal, setShowHelpModal}) => {
    const exampleGuessList = ['PIKACHU', 'CHARMANDER', 'SQUIRTLE', 'BULBASAUR']
    const exampleClasses = [['correct'], ['', '', 'wrong-spot'],['', '', '', '', 'wrong']]

    const handleCloseHelpModal = () => {
        setShowHelpModal(false)
    }
  return (
    <Modal
      show={showHelpModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="how-to-modal"
    >
      <Modal.Header closeButton onClick={handleCloseHelpModal}>
        <Modal.Title id="contained-modal-title-vcenter" className="how-to-title">
          How to Play
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
            Find the pokemon in 8 guesses!
        </p>
        <p>
            After every guess, the color of the tiles will change to show how close your guess was. 
        </p>
        <hr />
        <div className="help-example-section">
            <h4>Examples</h4>
            <GuessRow rowIndex={0} currGuess='PIKACHU' guessList={exampleGuessList} classNames={exampleClasses}/>
            <p>The letter <strong>P</strong> is in the word and in the correct spot</p>
            <GuessRow rowIndex={1} currGuess='CHARMANDER' guessList={exampleGuessList} classNames={exampleClasses}/>
            <p>The letter <strong>A</strong> is in the word and in the wrong spot</p>
            <GuessRow rowIndex={2} currGuess='SQUIRTLE' guessList={exampleGuessList} classNames={exampleClasses}/>
            <p>The letter <strong>R</strong> is not in the word</p>
        </div>
        <hr />
        <p>Press <strong>Play Again!</strong> to try to guess 'em all!</p>
      </Modal.Body>
    </Modal>
  )
}

export default HelpModal