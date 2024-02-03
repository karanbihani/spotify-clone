import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navigation from './Navigation'
import Library from './Library/Library'
import MainSection from './MainSection'

function App() {

  return (<div className='main-container'>
      <div className='main-top'> 
        <div className='main-left-top'>
          <Navigation/>
          <Library/>
        </div>
        <div className='main-right'>
          <MainSection/>
        </div>
      </div>
  </div>)
}

export default App
