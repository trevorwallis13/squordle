import { useState } from 'react'
import logo from '../../images/squordle-logo.jpg'
import Nav from './Nav'

const Header = () => {

    const [isVisible, setIsVisible] = useState(false)

    const showMenu = () => {
        setIsVisible(curr => !curr);
    }

    console.log(isVisible)
  return (
    <header className="main-header">
        <img src={logo} alt="squordle logo" className="logo"/>
        <button onClick={showMenu}>Menu</button>
        <Nav isVisible={isVisible}/>
    </header>
  )
}

export default Header