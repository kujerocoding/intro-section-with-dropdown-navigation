import React, { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'

const App = () => {

  return (
    <div className='app--container'>
      <Header/>
      <Main />
      <div className='attribution'>
            Challenge by <a href="https://www.frontendmentor.io/challenges" target="_blank">Frontend Mentor.</a> Coded by <a href='https://github.com/kujerocoding' target="_blank">kujerocoding</a>
      </div>
    </div>
  )
}

export default App
