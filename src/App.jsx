import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import HomeSection from './components/HomeSection'
import ContainerSection from './components/ContainerSection'
import AboutSection from './components/AboutSection'
import ShopSection from './components/ShopSection'
import ReviewSection from './components/ReviewSection'
import ContactSection from './components/ContactSection'

function App() {
  useEffect(() => {
    const header = document.querySelector("header");
    const handleScroll = () => {
      if (header) header.classList.toggle("sticky", window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);

    const menu = document.querySelector('#menu-icon');
    const navlist = document.querySelector('.navlist');
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

    if (window.ScrollReveal) {
      const sr = window.ScrollReveal({
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
      <Header />
      <HomeSection />
      <ContainerSection />
      <AboutSection />
      <ShopSection />
      <ReviewSection />
      <ContactSection />
    </div>
  )
}

export default App
