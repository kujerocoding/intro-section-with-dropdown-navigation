import React from 'react'

const Navbar = () => {
  return (
    <div>
      <img src="./src/assets/images/icon-close-menu.svg" alt="X icon" />
      <ul>
        <li>Features</li>
            <ul>
                <li>Todo List</li>
                <li>Calendar</li>
                <li>Reminders</li>
                <li>Planning</li>
            </ul>
        <li>Company</li>
            <ul>
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
            </ul>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <button>Login</button>
      <button>Register</button>
    </div>
  )
}

export default Navbar
