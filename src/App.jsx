import React, { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'
import Navbar from './components/Navbar'

const App = () => {

  
  return (
    <div className='app--container'>
      <Header />
      <Navbar />
      <Main />
    </div>
  )
}

export default App
