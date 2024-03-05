import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  let location = useLocation();
  const homeNavLinkRef = useRef();
  const photosNavLinkRef = useRef();

  useEffect(() => {
    if (location.pathname === "/") {
      homeNavLinkRef.current.classList.remove('Red');
      photosNavLinkRef.current.classList.remove('Red');
      photosNavLinkRef.current.classList.add('link');
      homeNavLinkRef.current.classList.add('link');
    } else if (location.pathname === "/photos") {
      homeNavLinkRef.current.classList.remove('link');
      photosNavLinkRef.current.classList.remove('link');
      homeNavLinkRef.current.classList.add('Red');
      photosNavLinkRef.current.classList.add('Red');
    }
  }, [location]);

  return (
    <div className='header'>
      <NavLink to="/" ref={homeNavLinkRef}>HOME</NavLink>
      <div className='dmImage'></div>
      <NavLink to="/photos" ref={photosNavLinkRef}>PHOTOS</NavLink>
    </div>
  )
}
