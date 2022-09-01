import React, { useState } from 'react'
import { Attribution } from './components/Attribution'
import { Rating } from './components/Rating'
import { Submit } from './components/Submit'
import './style.css'
// import log from '../src/images/'

function App() {
  const [showThankYou, setShowThankYou] = useState(false)
  const [rating, setRating] = useState(null)

  return (
    <div className='container'>
      {showThankYou ? (
        <Submit rating={rating} />
      ) : (
        <Rating
          rating={rating}
          setRating={setRating}
          setShowThankYou={setShowThankYou}
        />
      )}
      <Attribution />
    </div>
  )
}

export default App
