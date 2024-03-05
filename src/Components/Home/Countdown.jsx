import React from 'react';
import './Countdown.css';
export const Countdown = () => {
  return (
    <>
    <div className='countDownImage'></div>
    <div className='countDownContent'>
       <div className='married location' data-aos="fade-up" data-aos-duration="600">
      *** AT FOXEGAN HOTEL & RESTAURANT, LOS ANGELES ***
      </div>
      <div className='saveTheDate countDown' data-aos="fade-up" data-aos-duration="600">
        <div>Counting</div>
        <div>Down</div>
      </div>
      <div className='heart' data-aos="fade-up" data-aos-duration="600">
          -
            <div className='loveHeart'></div>
          -
      </div>
      <div className='countDownTime' data-aos="fade-up" data-aos-duration="600">
        <div>0 W</div>
        <div>0 D</div>
        <div>0 h</div>
        <div>0 m</div>
        <div>0 s</div>
      </div>
    </div>
    </>
  )
}
