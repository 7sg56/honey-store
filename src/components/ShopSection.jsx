import React from 'react'

function ShopSection() {
  return (
    <section className="shop" id="shop">
      <div className="middle-text">
        <h4>Our Shop</h4>
        <h2>Lets Check Popular Products</h2>
      </div>
      <div className="shop-content">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="row">
            <img src={`/assets/p${item}.png`} />
            <h3>Blueberry Honey</h3>
            <p>It is a long established fact that a reader</p>
            <div className="in-text">
              <div className="price">
                <h6>$21.00</h6>
              </div>
              <div className="s-btnn">
                <a href="#">Order now</a>
              </div>
            </div>
            <div className="top-icon">
              <a href="#"><i className="bx bx-heart"></i></a>
            </div>
          </div>
        ))}
      </div>
      <div className="row-btn">
        <a href="#" className="btn">
          All Products <i className="bx bxs-right-arrow"></i>
        </a>
      </div>
    </section>
  )
}

export default ShopSection
