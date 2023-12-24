import React from 'react'
import contactimg from './Assets/A10.jpg';
import './Contact.css'
import { Phone } from 'phosphor-react'
import { Envelope } from 'phosphor-react'

export const Contact = () => {
  return (
  <div className='contact'>
    <img src={contactimg} alt='contact image'/>
    <h1> Apple Support</h1>
    <div className='contact1'>
      <h2>How would you like to get help? </h2>
      <p>Choose the option that is most convenient for you.</p>
    </div>
    <div className='contactdetails'>
      <div className='contactdetails1'>
      <Phone size={40} />
      <h4>Phone</h4>
      <p>+81 444-555-100</p>
      <p>Wait time: One minute or less</p>
      </div>
      <div className='contactdetails2'>
      <Envelope size={40} />
      <h4>E-mail</h4>
      <p>applecare@appleio.com</p>
      <p>Ask questions & we'll reply by email</p>
      </div>
    </div>
  </div>

  ) 
}
