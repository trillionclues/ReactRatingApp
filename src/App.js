import React, { useState } from 'react'
import Rating from './components/Rating'
import Submit from './components/Submit'
import './style.css'

function App() {
  const [thankYou, setThankYou] = useState(false)
  const [showRating, setShowRating] = useState(null)
  return (
    <div className='container'>
      {thankYou ? (
        <Submit showRating={showRating} />
      ) : (
        <Rating
          showRating={showRating}
          setShowRating={setShowRating}
          setThankYou={setThankYou}
        />
      )}
    </div>
  )
}

export default App
