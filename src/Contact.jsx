import React from 'react'
import contactimg from './Assets/A10.jpg';
import './Contact.css'

export const Contact = () => {
  return (
  <div className='contact'>
    <img src={contactimg} alt='contact image'/>
    <h1> Apple Support</h1>
    <div className='contact1'>
      <h2>How would you like to get help? </h2>
      <div><p>Choose the option that is most convenient for you.</p></div>
    </div>
  </div>

  ) 
}
