import React from 'react'
import "./testimonial.css"
import ME from  '../../assets/RA12.jpeg'
import RAM from  '../../assets/RAVI13.jpeg'
import MENU from  '../../assets/ravi4.jpeg'
import MERU from  '../../assets/ravi6.jpeg'


function Testimonials() {
  return (
    <section id='testimonials'>
       <h5>Review from client</h5>
       <h2>Testimonials</h2>
       <div className='container testimonials__container'>
        <article className='testimonial'>
        <div className='client__avatar'>
          <img src={ME} alt=''/>
          </div>
          <h5 className='client__name'>Satish Singh</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, tempora. Ea adipisci dolores numquam 
            tempore nisi impedit, quibusdam harum suscipit perspiciatis corporis id, molestias dolor. Dolorum nihil veniam et natus?
          </small>
        </article>
        <article className='testimonial'>
        <div className='client__avatar'>
          <img src={RAM} alt=''/>
          </div>
          <h5 className='client__name'>Satish Singh</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur suscipit optio
             corrupti sed nostrum minima impedit tempore, esse, corporis quae, sequi officiis 
             repellendus possimus! Labore sed similique dolores id?
          </small>
        </article>
        <article className='testimonial'>
        <div className='client__avatar'>
          <img src={MENU} alt=''/>
          </div>
          <h5 className='client__name'>Satish Singh</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur suscipit optio
             corrupti sed nostrum minima impedit tempore, esse, corporis quae, sequi officiis 
             repellendus possimus! Labore sed similique dolores id?
          </small>
        </article>
        <article className='testimonial'>
        <div className='client__avatar'>
          <img src={MERU} alt=''/>
          </div>
          <h5 className='client__name'>Satish Singh</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur suscipit optio
             corrupti sed nostrum minima impedit tempore, esse, corporis quae, sequi officiis 
             repellendus possimus! Labore sed similique dolores id?
          </small>
        </article>
       </div>
    </section>
  )
}

export default Testimonials
