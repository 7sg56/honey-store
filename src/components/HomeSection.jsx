import React from 'react'

function HomeSection() {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h1>
          Meet, <span>Eat &</span> <br />
          Enjoy the true <br />
          taste
        </h1>
        <a href="#" className="btn">
          Explore menu <i className="bx bxs-right-arrow"></i>
        </a>
        <a href="#" className="btn2">Order Now</a>
      </div>
      <div className="home-img">
        <img src="/assets/hero.png" alt="honey-image" />
      </div>
    </section>
  )
}

export default HomeSection
