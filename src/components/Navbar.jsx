import React, { useState } from 'react'

const Navbar = (props) => {
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)
    const [isCompanyOpen, setIsCompanyOpen] = useState(false)

    function toggleList(e){
        const id = e.target.id
        if (id === "company"){
            setIsCompanyOpen(prevState => !prevState)
        }else if(id === "features"){
            setIsFeaturesOpen(prevState => !prevState)
        }
    }

  return (
    <nav>
      <img className="icon--menu--close" src="./src/assets/images/icon-close-menu.svg" alt="X icon" onClick={props.handleClick}/>
      <ul className='nav--lists'>
        <li id="features" 
        className='nav--features' 
        onClick={toggleList}>
        Features
        <span className={isFeaturesOpen ? 'icon--arrow--up' : 'icon--arrow--down'}></span>
        </li>
           {isFeaturesOpen && <ul className='features--lists'>
                <li className='features--lists--todo'>Todo List</li>
                <li className='features--lists--calendar'>Calendar</li>
                <li className='features--lists--reminders'>Reminders</li>
                <li className='features--lists--planning'>Planning</li>
            </ul>}
        <li  id="company" 
        className='nav--company' 
        onClick={toggleList}>
        Company
        <span className={isCompanyOpen ? 'icon--arrow--up' : 'icon--arrow--down'}></span>
        </li>
             {isCompanyOpen && <ul className='company--lists'>
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
            </ul> }
        <li>Careers</li>
        <li>About</li>
      </ul>
      <button className='btn--login'>Login</button>
      <button className='btn--register'>Register</button>
    </nav>
  )
}

export default Navbar
