import React from 'react'
import "./portfolio.css"

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src='https://cdn.dribbble.com/userupload/4287710/file/original-de0625d45a8714324d218a0ac2025721.png?compress=1&resize=1504x1128' alt=''/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className='portfolio__item-cta'>
        <a href='https://github.com' className='btn' target='_blank'>Github</a>
        <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src='https://cdn.dribbble.com/userupload/4445400/file/original-825730e95430d21f32747ab581a59a9e.jpg?compress=1&resize=1504x1128' alt=''/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className='portfolio__item-cta'>
        <a href='https://github.com' className='btn' target='_blank'>Github</a>
        <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src='https://cdn.dribbble.com/userupload/4244147/file/original-9dc0bd65acf7116936129f746636852e.png?compress=1&resize=1504x1128' alt=''/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className='portfolio__item-cta'>
        <a href='https://github.com' className='btn' target='_blank'>Github</a>
        <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src='https://cdn.dribbble.com/userupload/4116687/file/original-001792041c3bf1caad6a5b6c5e7c51cf.jpg?compress=1&resize=1504x1128' alt=''/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className='portfolio__item-cta'>
        <a href='https://github.com' className='btn' target='_blank'>Github</a>
        <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src='https://cdn.dribbble.com/userupload/3958664/file/original-6b493195642c1b9fe8bdb4c22de11f6a.jpg?compress=1&resize=1504x1128' alt=''/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className='portfolio__item-cta'>
        <a href='https://github.com' className='btn' target='_blank'>Github</a>
        <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src='https://cdn.dribbble.com/userupload/4287641/file/original-ab4d340cfd337232b98628a63b7e4b5d.png?compress=1&resize=1504x1128' alt=''/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className='portfolio__item-cta'>
        <a href='https://github.com' className='btn' target='_blank'>Github</a>
        <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
      </div>
    </section>
  )
}

export default Portfolio