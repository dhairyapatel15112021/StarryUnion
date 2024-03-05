import React from 'react';
import './Heading.css';
export const Heading = () => {
    return (
        <div className='date' data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400">
            <div className='saveTheDate'>
                <div>Save</div>
                <div>The Date</div>
                <div className='time'> ‐ 30<div className='dot'></div>01<div className='dot'></div>21 ‐</div>
            </div>
            <div className='married'>
                *** WE ARE GETTING MARRIED ***
            </div>
            <div className='heart'>
                -
                <div className='loveHeart'></div>
                -
            </div>
        </div>
    )
}
