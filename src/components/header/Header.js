import { useState } from 'react'
import logo from '../../images/squordle-logo.png'
import Nav from './Nav'

const Header = () => {

    const [isVisible, setIsVisible] = useState(false)

    const showMenu = () => {
        setIsVisible(curr => !curr);
    }

  return (
    <header className="main-header">
        <img src={logo} alt="squordle logo" className="logo"/>
        <button onClick={showMenu}>Menu</button>
        <Nav isVisible={isVisible}/>
    </header>
  )
}

export default Header