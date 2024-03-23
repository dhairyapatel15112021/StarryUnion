import React, { useContext, useEffect} from 'react';
import './PhotoModal.css';
import { photoContext } from './Photos';
export const PhotoModal = () => {
  const { photoImage, setphotoModal } = useContext(photoContext);
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);
  const modalCloseHandler = () => {
    document.body.classList.remove('modal-open');
    setphotoModal(false);
  }
  return (
    <div className='modal'>
      <img src={photoImage} alt='personal_photo' className='images' />
      <button onClick={modalCloseHandler} className='cancle_Photo'><i class="fa-solid fa-xmark"></i></button>
    </div>

  )
}
