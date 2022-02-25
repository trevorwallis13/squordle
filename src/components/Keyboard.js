import React from 'react'
import { FiDelete } from 'react-icons/fi'
import { IconContext } from 'react-icons'


const Keyboard = () => {
  return (
    <IconContext.Provider value={{ size: "clamp(1em, 5vw, 1.5em"}}>
      <div className="keyboard">
        <button className="key" data-key="Q">Q</button>
        <button className="key" data-key="W">W</button>
        <button className="key" data-key="E">E</button>
        <button className="key" data-key="R">R</button>
        <button className="key" data-key="T">T</button>
        <button className="key" data-key="Y">Y</button>
        <button className="key" data-key="U">U</button>
        <button className="key" data-key="I">I</button>
        <button className="key" data-key="O">O</button>
        <button className="key" data-key="P">P</button>
        <div className="space"></div>
        <button className="key" data-key="A">A</button>
        <button className="key" data-key="S">S</button>
        <button className="key" data-key="D">D</button>
        <button className="key" data-key="F">F</button>
        <button className="key" data-key="G">G</button>
        <button className="key" data-key="H">H</button>
        <button className="key" data-key="J">J</button>
        <button className="key" data-key="K">K</button>
        <button className="key" data-key="L">L</button>
        <div className="space"></div>
        <button className="key wide enter-key" data-enter>Enter</button>
        <button className="key" data-key="Z">Z</button>
        <button className="key" data-key="X">X</button>
        <button className="key" data-key="C">C</button>
        <button className="key" data-key="V">V</button>
        <button className="key" data-key="B">B</button>
        <button className="key" data-key="N">N</button>
        <button className="key" data-key="M">M</button>
        <button className="key wide" data-delete><FiDelete /></button>
      </div>
    </IconContext.Provider>
  )
}

export default Keyboard