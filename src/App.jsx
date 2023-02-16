import React, { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'
import Navbar from './components/Navbar'

const App = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  function handleMenuClick(){
    setIsMenuOpen(prevState => !prevState)
  }
  
  return (
    <div className='app--container'>
      <Header handleClick={handleMenuClick}/>
      {isMenuOpen && <Navbar handleClick={handleMenuClick}/>}
      <Main />
    </div>
  )
}

export default App
