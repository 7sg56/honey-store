import React from 'react'

function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/assets/about.png" />
      </div>
      <div className="about-text">
        <h2>
          Living well begins <br />
          with eating well
        </h2>
        <p>
          Over its history as a food, the main uses of honey are in cooking,
          baking, desserts, as a spread on bread, as an addition to various
          beverages such as tea, and as a sweetener in some commercial
          beverages.<br />
          <br />Due to its energy density, honey is an important food for
          virtually all hunter-gatherer cultures in warm climates, with the
          Hadza people ranking honey as their favorite food.
        </p>
        <a href="#" className="btn">
          Explore Story <i className="bx bxs-right-arrow"></i>
        </a>
      </div>
    </section>
  )
}

export default AboutSection
