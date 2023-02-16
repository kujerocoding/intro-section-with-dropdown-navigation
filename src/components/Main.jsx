import React from 'react'

const Main = () => {
  return (
    <div className='main--container'>
        <div className='main--img--container'>
        </div>
        <div className='main--text--container'>
            <h1>Make <span className='text--remotework'>remote work</span></h1>
            <p>Get your team in sync, no matter your locations. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button>Learn more</button>
            <div className='main--client--container'>
                <img className='client--icons ' src="./src/assets/images/client-databiz.svg" alt="Databiz logo" />
                <img className='client--icons audiophile--icon' src="./src/assets/images/client-audiophile.svg" alt="Audiophile logo" />
                <img className='client--icons ' src="./src/assets/images/client-meet.svg" alt="Meet logo" />
                <img className='client--icons ' src="./src/assets/images/client-maker.svg" alt="Maker logo" />
            </div>
        </div>
      
    </div>
  )
}

export default Main
