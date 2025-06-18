import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const header = document.querySelector("header");

    const handleScroll = () => {
      header.classList.toggle("sticky", window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');

    if (menu && navlist) {
      menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('open');
      };

      window.onscroll = () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
      }
    }

    // ScrollReveal animations
    if (typeof ScrollReveal !== 'undefined') {
      const sr = ScrollReveal({
        origin: 'top',
        distance: '45px',
        duration: 1500,
        reset: true
      });

      sr.reveal('.home-text', { delay: 200 });
      sr.reveal('.home-img', { delay: 300 });
      sr.reveal('.about-img', {});
      sr.reveal('.about-text', { delay: 200 });
      sr.reveal('.middle-text', {});
      sr.reveal('.row-btn,.shop-content', { delay: 200 });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header>
        <a href="#" className="logo"><i className="bx bxs-home"></i>Honey</a>

        <ul className="navlist">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About us</a></li>
          <li><a href="#shop">Our Shop</a></li>
          <li><a href="#review">Our Customer</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        <div className="nav-icons">
          <a href="#"><i className="bx bx-search"></i></a>
          <a href="#"><i className="bx bx-cart"></i></a>
          <div className="bx bx-menu" id="menu-icon"></div>
        </div>
      </header>

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
    </div>
  )
}

export default App
