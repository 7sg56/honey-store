import React from 'react'

function Header() {
  return (
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
  )
}

export default Header
