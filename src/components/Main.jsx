import React from 'react'

const Main = () => {
  return (
    <div className='main--container'>
        <img src="./src/assets/images/image-hero-mobile.png" alt="Man holding a laptop" />
        <div className='main--text--container'>
            <h1>Make remote work</h1>
            <p>Get your team in sync, no matter your locations. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button>Learn more</button>
        </div>
      <div className='main--client--container'>
        <img className='client--icons ' src="./src/assets/images/client-databiz.svg" alt="Databiz logo" />
        <img className='client--icons audiophile--icon' src="./src/assets/images/client-audiophile.svg" alt="Audiophile logo" />
        <img className='client--icons ' src="./src/assets/images/client-meet.svg" alt="Meet logo" />
        <img className='client--icons ' src="./src/assets/images/client-maker.svg" alt="Maker logo" />
      </div>
    </div>
  )
}

export default Main
