import React from 'react'
import './ThankYou.css'
export const ThankYou = () => {
  return (
    <>
    <div className='thankYouImage'>
    </div>
    <div className='thankYouContent'>
      <div className='saveTheDate countDown' data-aos="fade-up" data-aos-duration="800">
        <div>Thank</div>
        <div>You</div>
      </div>
      <div className='heart' data-aos="fade-up" data-aos-duration="800">
          -
            <div className='loveHeart'></div>
          -
      </div>
      <div className='coupleName' data-aos="fade-up" data-aos-duration="800">
      GERRARD & DIANNE
      </div>
    </div>
    </>
  )
}
