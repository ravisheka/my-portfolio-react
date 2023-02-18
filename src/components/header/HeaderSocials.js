import React from 'react'
import {BsLinkedin,BsGithub,BsDribbble} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/ravishekhar-singh-b64640191' target="_blank"><BsLinkedin/></a>
      <a href='https://github.com/ravisheka' target="_blank"><BsGithub/></a>
      <a href='https://dribble.com' target="_blank"><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocials