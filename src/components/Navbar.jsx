import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <img className="icon--menu--close" src="./src/assets/images/icon-close-menu.svg" alt="X icon" />
      <ul className='nav--lists'>
        <li>Features</li>
            {/* <ul>
                <li>Todo List</li>
                <li>Calendar</li>
                <li>Reminders</li>
                <li>Planning</li>
            </ul> */}
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
