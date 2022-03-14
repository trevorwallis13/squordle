import React from 'react'
import { FiDelete } from 'react-icons/fi'
import { IconContext } from 'react-icons'


const Keyboard = ({handleKeyClick, handleDelete, handleSubmit, focusRef, keyClasses}) => {
  return (
    <IconContext.Provider value={{ size: "clamp(1em, 5vw, 1.5em"}}>
      <div className="keyboard">
        <button className={`key ${keyClasses.Q}`} onClick={handleKeyClick} data-key="Q">Q</button>
        <button className={`key ${keyClasses.W}`} onClick={handleKeyClick} data-key="W">W</button>
        <button className={`key ${keyClasses.E}`} onClick={handleKeyClick} data-key="E">E</button>
        <button className={`key ${keyClasses.R}`} onClick={handleKeyClick} data-key="R">R</button>
        <button className={`key ${keyClasses.T}`} onClick={handleKeyClick} data-key="T">T</button>
        <button className={`key ${keyClasses.Y}`} onClick={handleKeyClick} data-key="Y">Y</button>
        <button className={`key ${keyClasses.U}`} onClick={handleKeyClick} data-key="U">U</button>
        <button className={`key ${keyClasses.I}`} onClick={handleKeyClick} data-key="I">I</button>
        <button className={`key ${keyClasses.O}`} onClick={handleKeyClick} data-key="O">O</button>
        <button className={`key ${keyClasses.P}`} onClick={handleKeyClick} data-key="P">P</button>
        <div ref={focusRef} className="space"></div>
        <button className={`key ${keyClasses.A}`} onClick={handleKeyClick} data-key="A">A</button>
        <button className={`key ${keyClasses.S}`} onClick={handleKeyClick} data-key="S">S</button>
        <button className={`key ${keyClasses.D}`} onClick={handleKeyClick} data-key="D">D</button>
        <button className={`key ${keyClasses.F}`} onClick={handleKeyClick} data-key="F">F</button>
        <button className={`key ${keyClasses.G}`} onClick={handleKeyClick} data-key="G">G</button>
        <button className={`key ${keyClasses.H}`} onClick={handleKeyClick} data-key="H">H</button>
        <button className={`key ${keyClasses.J}`} onClick={handleKeyClick} data-key="J">J</button>
        <button className={`key ${keyClasses.K}`} onClick={handleKeyClick} data-key="K">K</button>
        <button className={`key ${keyClasses.L}`} onClick={handleKeyClick} data-key="L">L</button>
        <div className="space"></div>
        <button className="key wide enter-key" onClick={handleSubmit} data-enter>Enter</button>
        <button className={`key ${keyClasses.Z}`} onClick={handleKeyClick} data-key="Z">Z</button>
        <button className={`key ${keyClasses.X}`} onClick={handleKeyClick} data-key="X">X</button>
        <button className={`key ${keyClasses.C}`} onClick={handleKeyClick} data-key="C">C</button>
        <button className={`key ${keyClasses.V}`} onClick={handleKeyClick} data-key="V">V</button>
        <button className={`key ${keyClasses.B}`} onClick={handleKeyClick} data-key="B">B</button>
        <button className={`key ${keyClasses.N}`} onClick={handleKeyClick} data-key="N">N</button>
        <button className={`key ${keyClasses.M}`} onClick={handleKeyClick} data-key="M">M</button>
        <button  className="key wide" onClick={handleDelete} data-delete><FiDelete /></button>
      </div>
    </IconContext.Provider>
  )
}

export default Keyboard