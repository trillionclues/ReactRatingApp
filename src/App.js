import React from 'react'
import { Rating } from './Rating'
import './style.css'
import logo from './images/icon-star.svg'

function App() {
  return (
    <div className='container'>
      <main>
        <div className='icon'>
          <img src={logo} alt='icon star' />
        </div>

        <h3>How did we do?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur mas adipisicing elit. Labore
          non animi fugiat quam impedit aperiam!
        </p>
        <Rating />
      </main>
    </div>
  )
}

export default App
