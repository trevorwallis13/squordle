import React from 'react'
import { FiDelete } from 'react-icons/fi'
import { IconContext } from 'react-icons'


const Keyboard = ({handleKeyClick, handleDelete, handleSubmit, focusRef}) => {

  return (
    <IconContext.Provider value={{ size: "clamp(1em, 5vw, 1.5em"}}>
      <div className="keyboard">
        <button className="key" onClick={handleKeyClick} data-key="Q">Q</button>
        <button className="key" onClick={handleKeyClick} data-key="W">W</button>
        <button className="key" onClick={handleKeyClick} data-key="E">E</button>
        <button className="key" onClick={handleKeyClick} data-key="R">R</button>
        <button className="key" onClick={handleKeyClick} data-key="T">T</button>
        <button className="key" onClick={handleKeyClick} data-key="Y">Y</button>
        <button className="key" onClick={handleKeyClick} data-key="U">U</button>
        <button className="key" onClick={handleKeyClick} data-key="I">I</button>
        <button className="key" onClick={handleKeyClick} data-key="O">O</button>
        <button className="key" onClick={handleKeyClick} data-key="P">P</button>
        <div ref={focusRef} className="space"></div>
        <button className="key" onClick={handleKeyClick} data-key="A">A</button>
        <button className="key" onClick={handleKeyClick} data-key="S">S</button>
        <button className="key" onClick={handleKeyClick} data-key="D">D</button>
        <button className="key" onClick={handleKeyClick} data-key="F">F</button>
        <button className="key" onClick={handleKeyClick} data-key="G">G</button>
        <button className="key" onClick={handleKeyClick} data-key="H">H</button>
        <button className="key" onClick={handleKeyClick} data-key="J">J</button>
        <button className="key" onClick={handleKeyClick} data-key="K">K</button>
        <button className="key" onClick={handleKeyClick} data-key="L">L</button>
        <div className="space"></div>
        <button className="key wide enter-key" onClick={handleSubmit} data-enter>Enter</button>
        <button className="key" onClick={handleKeyClick} data-key="Z">Z</button>
        <button className="key" onClick={handleKeyClick} data-key="X">X</button>
        <button className="key" onClick={handleKeyClick} data-key="C">C</button>
        <button className="key" onClick={handleKeyClick} data-key="V">V</button>
        <button className="key" onClick={handleKeyClick} data-key="B">B</button>
        <button className="key" onClick={handleKeyClick} data-key="N">N</button>
        <button className="key" onClick={handleKeyClick} data-key="M">M</button>
        <button  className="key wide" onClick={handleDelete} data-delete><FiDelete /></button>
      </div>
    </IconContext.Provider>
  )
}

export default Keyboard