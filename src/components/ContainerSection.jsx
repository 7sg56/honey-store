import React from 'react'

function ContainerSection() {
  return (
    <section className="container">
      <div className="container-box">
        <img src="/assets/c1.png" />
        <h3>10:30 am - 8:00 pm</h3>
        <a href="#">Working Hours</a>
      </div>
      <div className="container-box">
        <img src="/assets/c2.png" />
        <h3>Honey Springs 555</h3>
        <a href="#">Get Directions</a>
      </div>
      <div className="container-box">
        <img src="/assets/c3.png" />
        <h3>(555) 111-345345</h3>
        <a href="#">Call Us Now</a>
      </div>
    </section>
  )
}

export default ContainerSection
