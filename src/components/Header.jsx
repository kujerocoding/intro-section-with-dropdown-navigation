import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
  
    function handleMenuClick(){
        setIsMenuOpen(prevState => !prevState)
    }

  return (
    <header>
        <img src="../src/assets/images/logo.svg" alt="Snap logo" />
        <img className="icon--menu" src="../src/assets/images/icon-menu.svg" alt="Hamburger menu" onClick={handleMenuClick} />
        {isMenuOpen && <Navbar handleClick={handleMenuClick}/>}
    </header>
  )
}

export default Header
