import React from 'react'

const Header = (props) => {
  return (
    <header>
        <img src="../src/assets/images/logo.svg" alt="Snap logo" />
        <img className="icon--menu" src="../src/assets/images/icon-menu.svg" alt="Hamburger menu" onClick={props.handleClick} />
    </header>
  )
}

export default Header
