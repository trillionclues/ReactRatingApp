import React from 'react'
import illustration from '../images/illustration-thank-you.svg'

const Submit = (showRating) => {
  return (
    <>
      <div className='results'>
        <div className='success'>
          <img src={illustration} alt='' />
          <p className='selected-msg'>You selected 5 out of 5</p>
          <h1 className='thank-you'>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </>
  )
}

export default Submit
