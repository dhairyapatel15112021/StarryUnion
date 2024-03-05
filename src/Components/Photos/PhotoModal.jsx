import React, { useContext } from 'react';
import './PhotoModal.css';
import { photoContext } from './Photos';
export const PhotoModal = () => {
    const {photoImage,hideModal}=useContext(photoContext);
  return (
    <div>
        <img src={photoImage} alt='personal_photo' className='images'/>
        <button onClick={hideModal} className='cross' >cross</button>
    </div>
    
  )
}
