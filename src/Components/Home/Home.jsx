import React,{useEffect} from 'react';
import { Slide } from './Slide';
import { Heading } from './Heading';
import { Personal } from './Personal';
import { Countdown } from './Countdown';
import { WeddingFunction } from './WeddingFunction';
import { ThankYou } from './ThankYou';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Home = () => {
  useEffect(()=>{
    AOS.init();
},[])
  return (
    <div className='home'>
      <Slide/>
      <Heading/>
      <Personal/>
      <Countdown/>
      <WeddingFunction/>
      <ThankYou/>
    </div>
  )
}
