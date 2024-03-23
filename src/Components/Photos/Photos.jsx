import React, { createContext, useState } from 'react';
import './Photos.css';
import { data } from './Data.js';
import { PhotoModal } from './PhotoModal.jsx';
export const photoContext = createContext();
export const Photos = () => {
  const [photoModal, setphotoModal] = useState(false);
  const [photoImage, setphotoImage] = useState(null);
  const showModal = (photo) => {
    setphotoImage(photo)
    setphotoModal(true);
  }
  return (
    <div className='photos'>
      <div className='gallery background' data-aos="fade-up" data-aos-duration="800">GALLERY</div>
      <div className='heart background' data-aos="fade-up" data-aos-duration="800">
        -
        <div className='loveHeart2'></div>
        -
      </div>
      <div className='text background' data-aos="fade-up" data-aos-duration="800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis
      </div>
      <div className='galleryPhotos'>
        {
          data.map((item, index) => {
            return (
              <div data-aos="fade-zoom-in" data-aos-duration="500" className='individualPhotosDiv background'>
                <img src={item} alt='gallery photos' key={index} className='individualPhotos'></img>
                <div onClick={() => showModal(item)}><i className="fa-solid fa-magnifying-glass-plus individualPhotosIcon"></i></div>
              </div>
            )
          })
        }
        {
          photoModal &&
            <photoContext.Provider value={{photoImage,setphotoModal}}>
              <PhotoModal/>
            </photoContext.Provider>
        }
      </div>
      <div className='footer background'></div>
      <div className='footerContent background'>
        <div className='heart heart2' data-aos="fade-up" data-aos-duration="800">
          -
          <div className='loveHeart2'></div>
          -
        </div>
        <div className='coupleText2' data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        GERRARD & DIANNE
        </div>
      </div>
    </div>
  )
}
