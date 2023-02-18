import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();
  const sendEmail = (e)=>{
    e.preventDefault();

    emailjs.sendForm('service_9dlotsj','template_qtnkdm9',form.current,'E5O5Xl4Z_u_Bm2KAu')
    e.target.reset();
    
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option' style={{width:"15rem"}}>
          <MdOutlineEmail className='contact__option-icon'/>
           <h4>Email</h4>
           <h5>ravishekharsingh32@gmail.com</h5>
           <a href='mailto:ravishekharsingh32@gmail.com' target='_blank'>send a message</a>
          </article>
          <article className='contact__option' style={{width:"15rem"}}>
          <RiMessengerLine className='contact__option-icon'/>
           <h4>Messenger</h4>
           <h5>Ravi Shekhar</h5>
           <a href='https://m.me/profile.php?id=100077170480908' target='_blank'>send a message</a>
          </article>
          <article className='contact__option' style={{width:"15rem"}}>
          <BsWhatsapp className='contact__option-icon'/>
           <h4>Whatsapp</h4>
           <h5>+918368822522</h5>
           <a href='https://api.whatsapp.com/send?phone+918368822522' target='_blank'>send a message</a>
          </article>
        </div>
        {/*End of contact options*/}
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact
