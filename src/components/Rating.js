import React, { useState } from 'react'
import { Content } from './Content'
import starLogo from '../images/icon-star.svg'
import altschoolLogo from '../images/download.svg'

export const Rating = ({ rating, setRating, setShowThankYou }) => {
  const [activeRating, setActiveRating] = useState({
    oneStar: false,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false,
  })

  const handleSubmit = () => {
    if (!rating) return

    setShowThankYou(true)
  }

  return (
    <main>
      <div className='icon'>
        <div className='staricon'>
          <img src={starLogo} alt='icon star' />
        </div>
        <img className='altschool' src={altschoolLogo} alt='icon star' />
      </div>
      <Content />
      <form className='scores' onSubmit={handleSubmit}>
        <button
          type='button'
          value={1}
          name='rate'
          className={activeRating.oneStar ? 'button active' : 'button'}
          onClick={() => {
            setActiveRating({
              oneStar: true,
              twoStars: false,
              threeStars: false,
              fourStars: false,
              fiveStars: false,
            })
            setRating(1)
          }}
        >
          1
        </button>
        <button
          type='button'
          value={2}
          name='rate'
          className={activeRating.twoStars ? 'button active' : 'button'}
          onClick={() => {
            setActiveRating({
              oneStar: false,
              twoStars: true,
              threeStars: false,
              fourStars: false,
              fiveStars: false,
            })
            setRating(2)
          }}
        >
          2
        </button>
        <button
          type='button'
          value={3}
          name='rate'
          className={activeRating.threeStars ? 'button active' : 'button'}
          onClick={() => {
            setActiveRating({
              oneStar: false,
              twoStars: false,
              threeStars: true,
              fourStars: false,
              fiveStars: false,
            })
            setRating(3)
          }}
        >
          3
        </button>
        <button
          type='button'
          value={4}
          name='rate'
          className={activeRating.fourStars ? 'button active' : 'button'}
          onClick={() => {
            setActiveRating({
              oneStar: false,
              twoStars: false,
              threeStars: false,
              fourStars: true,
              fiveStars: false,
            })
            setRating(4)
          }}
        >
          4
        </button>
        <button
          type='button'
          value={5}
          name='rate'
          className={activeRating.fiveStars ? 'button active' : 'button'}
          onClick={() => {
            setActiveRating({
              oneStar: false,
              twoStars: false,
              threeStars: false,
              fourStars: false,
              fiveStars: true,
            })
            setRating(5)
          }}
        >
          5
        </button>
      </form>
      <button id='submit' type='submit' onClick={handleSubmit}>
        Submit
      </button>
    </main>
  )
}
