import React from 'react'
import CTA from './CTA'
import "./header.css"
import ME from '../../assets/ravi6.jpeg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
   <header>
    <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Ravi Shekhar</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
            <img src={ME} alt='me' className='ravi' style={{width:"10rem",height:"12rem",padding:"5px",borderRadius:"10rem 10rem 0 0"}}/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header
