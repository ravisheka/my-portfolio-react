import React from 'react'
import "./About.css"
import ME from '../../assets/ravi8.jpeg'
import{ FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
function About() {
  return (
    <section id='about'>
     <h5>Get to know</h5>
     <h2>About Me</h2>
     <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt='' style={{height:"19rem",width:"17rem"}}/>
        </div>
      </div>
      <div className='about__content'>
      <div className='about__cards'>
        <article className='about__card'>
        <FaAward className='about__icon'/>
         <h5>Experience</h5>
         <small>6+ month Working</small>
        </article>
        <article className='about__card'>
        <FiUsers className='about__icon'/>
         <h5>Client</h5>
         <small>10+ IND</small>
        </article>
        <article className='about__card'>
        <VscFolderLibrary className='about__icon'/>
         <h5>Projects</h5>
         <small>10+ Completed</small>
        </article>
      </div>
      <p>Hi everyone, I am a web front-end developer,. I recently try my  best to improve my skills on web front-end.
          My favorite thing is to observe others' portfolio.I can provide clean code and pixel.
                   I also make the website more interactive with web animations.I can provide clean code .
                   .A responsive design make your website accessible to all users,regardless of their device.
                   </p>
       <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
     </div>
    </section>
  )
}

export default About
