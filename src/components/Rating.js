import React, { useState } from 'react'
import { Content } from './Content'
import logo from '../images/icon-star.svg'

const Rating = (showRating, setShowRating, setThankYou) => {
  const [rating, setRating] = useState({
    oneStar: false,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false,
  })

  const handleSubmit = () => {
    if (!showRating) {
      return
    }
    setThankYou(true)
  }

  return (
    <main>
      <div className='icon'>
        <img src={logo} alt='icon star' />
      </div>
      <Content />
      <form className='scores'>
        <button
          type='button'
          value={1}
          name='rate'
          className={rating.oneStar ? 'button active' : 'button'}
          onClick={() => {
            setRating({
              oneStar: true,
              twoStars: false,
              threeStars: false,
              fourStars: false,
              fiveStars: false,
            })
            setShowRating(1)
          }}
        >
          1
        </button>
        <button
          type='button'
          value={2}
          name='rate'
          className={rating.twoStars ? 'button active' : 'button'}
          onClick={() => {
            setRating({
              oneStar: false,
              twoStars: true,
              threeStars: false,
              fourStars: false,
              fiveStars: false,
            })
            setShowRating(2)
          }}
        >
          2
        </button>
        <button
          type='button'
          value={3}
          name='rate'
          className={rating.threeStars ? 'button active' : 'button'}
          onClick={() => {
            setRating({
              oneStar: false,
              twoStars: false,
              threeStars: true,
              fourStars: false,
              fiveStars: false,
            })
            setShowRating(3)
          }}
        >
          3
        </button>
        <button
          type='button'
          value={4}
          name='rate'
          className={rating.fourStars ? 'button active' : 'button'}
          onClick={() => {
            setRating({
              oneStar: false,
              twoStars: false,
              threeStars: false,
              fourStars: true,
              fiveStars: false,
            })
            setShowRating(4)
          }}
        >
          4
        </button>
        <button
          type='button'
          value={5}
          name='rate'
          className={rating.fiveStars ? 'button active' : 'button'}
          onClick={() => {
            setRating({
              oneStar: false,
              twoStars: false,
              threeStars: false,
              fourStars: false,
              fiveStars: true,
            })
            setShowRating(5)
          }}
        >
          5
        </button>
      </form>
      <button id='submit' onClick={handleSubmit}>
        Submit
      </button>
    </main>
  )
}

export default Rating
