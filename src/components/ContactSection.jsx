import React from 'react'

function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <div className="contact-img">
          <div className="c-one">
            <img src="/assets/f1.png" />
          </div>
          <div className="c-one">
            <img src="/assets/f2.png" />
          </div>
        </div>
        <div className="contact-text">
          <h2>Contact Us</h2>
          <p>Over its history as a food, the main uses of honey are in cooking, baking, desserts, as a spread on bread, as an addition to various beverages such as tea, and as a sweetener in some commercial beverages</p>
          <div className="social">
            <a href="#" className="clr"><i className='bx bxl-instagram-alt'></i></a>
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-twitter'></i></a>
            <a href="#"><i className='bx bxl-github'></i></a>
            <a href="#"><i className='bx bxl-google'></i></a>
          </div>
        </div>
        <div className="details">
          <div className="main-d">
            <a href="#"><i className='bx bxs-location-plus'></i>Main street 65, ny, ny</a>
          </div>
          <div className="main-d">
            <a href="#"><i className='bx bx-mobile-alt'></i>(555) 111-345345</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
