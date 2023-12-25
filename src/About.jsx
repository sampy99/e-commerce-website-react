import React from 'react'
import aboutimg from './Assets/A11.png';
import './About.css'

export const About = () => {
  return(
  <div className='about'>
    <img src={ aboutimg } alt='about image' />
    <h1>About Us</h1>
  </div>
  )  
}
