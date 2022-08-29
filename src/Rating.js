import React, { useState } from 'react'

export const Rating = () => {
  const [rating, setRating] = useState(null)
  const [hoverFill, setHoverFill] = useState(null)

  return (
    <div className='rating-wrapper'>
      <div className='rating'>
        <div className='scores'>
          <h4>1</h4>
          <h4>2</h4>
          <h4>3</h4>
          <h4>4</h4>
          <h4>5</h4>
        </div>

        {[...Array(5)].map((_, index) => {
          const ratingValue = rating + 1

          return (
            <button
              key={index}
              onMouseEnter={() => setHoverFill(ratingValue)}
              onMouseLeave={() => setHoverFill(null)}
              onClick={() => setRating(ratingValue)}
            ></button>
          )
        })}
        <button type='submit' className='submit'>
          Submit
        </button>
      </div>
    </div>
  )
}
