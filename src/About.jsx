import React from 'react'
import aboutimg from './Assets/A11.png';
import steve from './Assets/A12.jpg'
import './About.css'

export const About = () => {
  return(
  <div className='about'>
    <img src={ aboutimg } alt='about image' />
    <h1>About Us</h1>
    <div className='ceo'>
     <h2>Apple Inc. / Founders</h2>
     <img src={steve} />
    </div>
  </div>
  )  
}
