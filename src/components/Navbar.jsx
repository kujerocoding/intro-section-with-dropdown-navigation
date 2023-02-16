import React, { useState } from 'react'

const Navbar = (props) => {
    const [isListOpen, setIsListOpen] = useState(false)

    function toggleList(){
        setIsListOpen(prevState => !prevState)
    }

  return (
    <nav>
      <img className="icon--menu--close" src="./src/assets/images/icon-close-menu.svg" alt="X icon" onClick={props.handleClick}/>
      <ul className='nav--lists'>
        <li className='nav--features' onClick={toggleList}>Features<span className={isListOpen ? 'icon--arrow--up' : 'icon--arrow--down'}></span></li>
           {isListOpen && <ul className='features--lists'>
                <li>Todo List</li>
                <li>Calendar</li>
                <li>Reminders</li>
                <li>Planning</li>
            </ul>}
        <li>Company</li>
            {/* <ul>
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
            </ul> */}
        <li>Careers</li>
        <li>About</li>
      </ul>
      <button className='btn--login'>Login</button>
      <button className='btn--register'>Register</button>
    </nav>
  )
}

export default Navbar
