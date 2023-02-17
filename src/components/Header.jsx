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
        <Navbar handleClick={handleMenuClick} isMenuOpen={isMenuOpen}/>
        <img className="icon--menu" src="../src/assets/images/icon-menu.svg" alt="Hamburger menu" onClick={handleMenuClick} />
    </header>
  )
}

export default Header
