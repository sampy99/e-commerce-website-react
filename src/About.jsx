import React from 'react'
import aboutimg from './Assets/A11.png';
import steve from './Assets/A12.jpg'
import steve1 from './Assets/A13.jpg'
import steve2 from './Assets/A14.png'
import './About.css'

export const About = () => {
  return(
  <div className='about'>
    <img src={ aboutimg } alt='about image' />
    <h1>About Us</h1>

    <div className='ceo'>
      <h2>Apple Inc. / Founders</h2>
      
        <div className='ceo1'>
    <div>
     <img src={steve} />
    </div>
    <div className='ceo1description'>
     <h3>Steve Jobs</h3>
     <p>American Businessman</p>
    </div>
        </div>

       <div className='ceo2'>
     <div>
      <img src={steve1} />
     </div>
     <div className='ceo2description'>
     <h3>Steve Wozniak</h3>
     <p>Technology Entreprenur</p>
     </div>
        </div>

        <div className='ceo3'>
     <div>
      <img src={steve2} />
     </div>
     <div className='ceo3description'>
     <h3>Ronald Wayne</h3>
     <p>Business Executive</p>
     </div>
        </div>

    </div>
  </div>
  )  
}
