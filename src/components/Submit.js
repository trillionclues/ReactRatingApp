import React from 'react'
import illustration from '../images/illustration-thank-you.svg'

export const Submit = ({ rating }) => {
  return (
    <>
      <div className='results'>
        <div className='success'>
          <img src={illustration} alt='' />
          <p className='selected-msg'>You selected {rating} out of 5</p>
          <h1 className='thank-you'>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
          <button className='rate-again' id='submit' type='submit'>
            Rate Again
          </button>
        </div>
      </div>
    </>
  )
}

export default Submit
