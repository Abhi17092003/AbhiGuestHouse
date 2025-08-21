import React from 'react'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <>

      <header className="header">
        <nav id='navbar-header' className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              <img src='https://img.freepik.com/premium-photo/colorful-letter-black-background-with-colorful-letter_978914-26725.jpg?uid=R110548454&ga=GA1.1.1141462583.1754242011&semt=ais_hybrid&w=740&q=80' alt='' className='img-fluid border rounded-4' style={{ width: "60px" }} />


            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul id='gap-nav' className="navbar-nav me-auto d-flex justify-center mx-auto gap-4">

                <li><a className="nav-link active" href="#home">Home</a></li>
                <li><a className="nav-link" href="#about">About</a></li>
                <li><a className="nav-link" href="#service">Services</a></li>
                <li><a className="nav-link" href="#rooms">Rooms</a></li>
                <li><a className="nav-link" href="#gallary">Gallary</a></li>
                <li><a className="nav-link" href="#contact">Contact</a></li>

              </ul>


              <a href="https://wa.link/at5ion">
                <button className="btn btn-book-nav">BOOK NOW</button>
              </a>
            </div>
          </div>
        </nav>


        <div className="section__container header__container" id="home">
          <p>Simple - Unique - Friendly</p>
          <h1>Make Yourself At Home<br />In Our <span>Guest House</span>.</h1>
        </div>

      </header>







      {/* <header className="header">
    <nav>
      <div className="nav__bar">
        <div className="logo">
          <a href="https://wa.link/at5ion"><span style={{color: "aliceblue"}}>Kingsukh Guest House</span></a>
        </div>

        <div className="nav__menu__btn" id="menu-btn">
          <i className="ri-menu-line"></i>
        </div>
      </div>
      <ul className="nav__links" id="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#rooms">Rooms</a></li>
        <li><a href="#gallary">Gallary</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
      <a href="https://wa.link/at5ion">
        <button className="btn nav__btn">BOOK NOW</button>
      </a>
    </nav>
    <div className="section__container header__container" id="home">
      <p>Simple - Unique - Friendly</p>
      <h1>Make Yourself At Home<br />In Our <span>Guest House</span>.</h1>
    </div>
  </header> */}
    </>
  )
}

export default Header
