import React from 'react';
import Gallery from './Gallery';
import GallerySlider from './GallerySlider';

function Home() {
  return (
    <>
      {/* <section className="section__container booking__container">
        <div className="booking__form">
          <div className="input__group input__btn">
            <a href="https://wa.link/at5ion">
              <button className="btn">BOOK NOW</button>
            </a>
          </div>
        </div>
      </section> */}

      <section className="section__container about__container" id="about">
        <div className="about__image">
          <img src="assets/out.jpg" alt="about" />
        </div>
        <div className="about__content">
          <p className="section__subheader">ABOUT US</p>
          <h2 className="section__header">The Best Holidays Start Here!</h2>
          <p className="section__description fs-6">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill,
            Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat
            Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your
            ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the
            hidden gems of Purulia, creating memories that linger long after your stay. <br />
          </p>
          <div className="contact-card">
            <h4>
              <span>📍</span>
              <a href="https://maps.app.goo.gl/nNRTPknt2Fk4qrob6" target='_blank'>
                <b className='des'>Address:</b> Beside Barshal Water Tank, Manpur, Barhanti,  West &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Bengal 723156 .
              </a>
            </h4>
            <h4>
              <span>📞</span>
              <a href="tel:+919007062180">
                <b className='des'>Contact us:</b>   +91 9007062180
              </a>
            </h4>

          </div>
          <div className="about__btn mb-5 mt-1">
            <a href="https://wa.link/at5ion">
              <button className="btn btn-book-nav">BOOK NOW</button>
            </a>
          </div>



        </div>
      </section>



      <section className="section__container room__container" id="rooms">
        <p className="section__subheader">OUR LIVING ROOM</p>
        <h2 className="section__header">The Most Memorable Rest Time Starts Here.</h2>
        <div className="container py-5">
          <div className="row g-4">

            <div className="col-md-4">
              <div className="card room-card">
                <img src="assets/large.jpg" className="card-img-top" alt="Room 1" />
                <div className="card-body">
                  <h5 className="room-title">Spacious Serenity Suite</h5>
                  <p>Indulge in luxury and ample space where tranquility meets elegance.</p>
                  <p className="price">Starting from <span>Rs. 1500/night</span></p>
                  <button className="book-btn">BOOK NOW</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card room-card">
                <img src="assets/small.jpg" className="card-img-top" alt="Room 2" />
                <div className="card-body">
                  <h5 className="room-title">Cozy Comfort Room</h5>
                  <p>Perfect for couples, offering warmth and relaxation with modern amenities.</p>
                  <p className="price">Starting from <span>Rs. 1200/night</span></p>
                  <button className="book-btn">BOOK NOW</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card room-card">
                <img src="assets/large.jpg" className="card-img-top" alt="Room 3" />
                <div className="card-body">
                  <h5 className="room-title">Luxury Family Suite</h5>
                  <p>Spacious enough for the whole family, combining comfort and elegance.</p>
                  <p className="price">Starting from <span>Rs. 2000/night</span></p>
                  <button className="book-btn">BOOK NOW</button>
                </div>
              </div>
            </div>

          </div>
        </div>


      </section>






      <section id="service">

        <div className="container services-section">
          <div className="row align-items-center g-4">
            <div className="col-md-7 services-image">
              <img src="../assets/palash.webp" alt="Services" />
            </div>

            <div className="col-md-4 services-content  ms-md-5">
              <h6>Services</h6>
              <h2>Strive Only For The Best.</h2>

              <div className="service-item">
                <span></span> High Class Security
              </div>
              <div className="service-item">
                <span></span> 24 Hours Room Service
              </div>
              <div className="service-item">
                <span></span> Restaurant
              </div>
              <div className="service-item">
                <span></span> Tourist Guide Support
              </div>
            </div>
          </div>
        </div>
      </section>






      {/* <section className="service" id="service">
        <div className="section__container service__container">
          <div className="service__content">
            <p className="section__subheader">SERVICES</p>
            <h2 className="section__header">Strive Only For The Best.</h2>
            <ul className="service__list">
              <li><span><i className="ri-shield-star-line"></i></span>High Class Security</li>
              <li><span><i className="ri-24-hours-line"></i></span>24 Hours Room Service</li>
              <li><span><i className="ri-restaurant-2-fill"></i></span>Restaurant</li>
              <li><span><i className="ri-map-2-line"></i></span>Tourist Guide Support</li>
            </ul>
          </div>
        </div>
      </section> */}

      <section className="section__container banner__container">
        <div className="banner__content">
          <div className="banner__card">
            <h4>100+</h4>
            <p>Bookings Completed</p>
          </div>
          <div className="banner__card">
            <h4>150+</h4>
            <p>Happy Customers</p>
          </div>
        </div>
      </section>






      <section>
        <GallerySlider />
      </section>






      {/* <section id="gallary">
        <div className="about__content">
          <p className="section__subheader" style={{ textAlign: "center" }}>GALLARY</p>
        </div>
        <br />
        <div className="container11">
          {["out.jpg", "ayodhya.webp", "large.jpg", "palash.webp", "small.jpg", "baranti.webp", "recep.jpg", "flower.jpg", "room1.jpg", "mithonDam.webp"].map((img, index) => (
            <div key={index} className={`box11 ${String.fromCharCode(97 + index)}`}>
              <img src={`assets/${img}`} alt="" />
            </div>
          ))}
        </div>
      </section> */}

      <section id="contact" className="section1">
        <div className="container1">
          <div className="contactInfo1">
            <div>
              <h2>Contact Info</h2>
              <ul className="info">
                <li>
                  <span><img src="images/location.png" alt="" /></span>
                  <span>Beside Barshal Water Tank,<br />Manpur, Barhanti,<br />West Bengal 723156</span>
                </li>
                <li>
                  <span><img src="images/mail.png" alt="" /></span>
                  <span><a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></span>
                </li>
                <li>
                  <span><img src="images/call.png" alt="" /></span>
                  <span><a href="tel:+919007062180"> +91 9007062180 </a></span>
                </li>
              </ul>
            </div>
            <ul className="sci">
              <li><a href="#"><img src="images/1.png" alt="" /></a></li>
              <li><a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank" rel="noopener noreferrer"><img src="images/3.png" alt="" /></a></li>
              <li><a href="#"><img src="images/2.png" alt="" /></a></li>
              <li><a href="#"><img src="images/5.png" alt="" /></a></li>
            </ul>
          </div>
          <div className="contactForm1">
            <h2>Send a Message</h2>
            <div className="formBox1">
              <div className="inputBox1 w50">
                <input type="text" required />
                <span>First Name</span>
              </div>
              <div className="inputBox1 w50">
                <input type="text" required />
                <span>Last Name</span>
              </div>
              <div className="inputBox1 w50">
                <input type="email" required />
                <span>Email Address</span>
              </div>
              <div className="inputBox1 w50">
                <input type="text" required />
                <span>Mobile Number</span>
              </div>
              <div className="inputBox1 w100">
                <textarea required></textarea>
                <span>Write your message here...</span>
              </div>
              <div className="inputBox1 w100">
                <input type="submit" value="Send" />
              </div>
            </div>
          </div>
        </div>
      </section>



    

      <section class="map-section">
        <div class="container-fluid p-0">
          <div class="map-container mt-4 mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14626.006982706758!2d86.85979!3d23.586332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1755627208756!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>





    </>
  );
}

export default Home;
