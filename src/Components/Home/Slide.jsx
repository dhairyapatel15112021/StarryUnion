import React from 'react';
import './Slide.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
export const Slide = () => {
    const options = {
        type: 'fade',
        rewind:true,
        gap: '1rem',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        pagination: false,
        speed:3500,
      };
      return (
        <div>
          <Splide aria-label="MyImages" options={options} className='slide_component'>
            <SplideSlide>
              <div className='slide_images slide_1'></div>
            </SplideSlide>
            <SplideSlide>
              <div className='slide_images slide_2'></div>
            </SplideSlide>
            <SplideSlide>
              <div className='slide_images slide_3'></div>
            </SplideSlide>
          </Splide>
        </div>
      )
}
