import React from 'react'

function ReviewSection() {
  return (
    <section className="review" id="review">
      <div className="middle-text">
        <h4>Our Customer</h4>
        <h2>Client Review About Our Food</h2>
      </div>
      <div className="review-content">
        {[1, 2, 3].map((item) => (
          <div key={item} className="box">
            <p>The taste is still in my mouth and I can feel the depth of the taste of the every ingredients used in the food. I really loved it.</p>
            <div className="in-box">
              <div className="bx-img">
                <img src={`/assets/r${item}.jpg`} alt="" />
              </div>
              <div className="bx-text">
                <h4>John Karahan</h4>
                <h5>Food Vlogger</h5>
                <div className="ratings">
                  {[...Array(5)].map((_, i) => (
                    <a key={i} href="#"><i className="bx bxs-star"></i></a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ReviewSection
