import React from 'react'
import './footer.css'
import { FaFacebookF ,FaPhone} from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
//import {IoLogoTwitter} from 'react-icons/io'




function Footer() {
  return (
   <footer>
    <a href='#' className='footer__logo'>Ravi Shekhar</a>

    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className='footer__socials'>
      <a href='https://www.facebook.com/profile.php?id=100077170480908'><FaFacebookF/></a>
      <a href='https://www.instagram.com/invites/contact/?i=pmr726afhrp4&utm_content=nkojuoh'><FiInstagram/></a>
      <a href='tel:8368822522'><FaPhone/></a>
    </div>
   

   </footer>
  )
}

export default Footer
