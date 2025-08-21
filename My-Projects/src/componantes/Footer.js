import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="section__container footer__container">
          <div className="footer__col">
            <div className="logo">
              <Link to="/">
                <img src='https://img.freepik.com/premium-photo/colorful-letter-black-background-with-colorful-letter_978914-26725.jpg?uid=R110548454&ga=GA1.1.1141462583.1754242011&semt=ais_hybrid&w=740&q=80' alt='' className='img-fluid border rounded-4' style={{ width: "60px" }} />

              </Link>
            </div>
            <p className="text-white mt-3 mb-2 ">
              Discover a world of comfort, luxury, and adventure as you explore
              our curated selection of hotels, making every moment of your getaway
              truly extraordinary.
            </p>
            <a href="https://wa.link/at5ion">
              <button className="btn btn-book-nav mt-3 mb-2">BOOK NOW</button>
            </a>
          </div>

          <div className="footer__col">
            <h4 className='footer-header'>QUICK LINKS</h4>
            <ul className="footer__links">
              <li><a href="#">Browse Destinations</a></li>
              <li><a href="#">Special Offers & Packages</a></li>
              <li><a href="#">Room Types & Amenities</a></li>
              <li><a href="#">Customer Reviews & Ratings</a></li>
              <li><a href="#">Travel Tips & Guides</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className='footer-header'>OUR SERVICES</h4>
            <ul className="footer__links">
              <li><a href="#">Concierge Assistance</a></li>
              <li><a href="#">Flexible Booking Options</a></li>
              <li><a href="#">Airport Transfers</a></li>
              <li><a href="#">Wellness & Recreation</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className='footer-header'>CONTACT US</h4>
            <ul className="footer__links">
              <li>
                <a href="https://maps.app.goo.gl/nNRTPknt2Fk4qrob6" target='_blank'>
                  Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
                </a>
              </li>
              <li><a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></li>
              <li><a href="tel:+919007062180">+91 9007062180</a></li>
            </ul>
            <div className="footer__socials">
              <a href="#"><img src="assets/facebook.png" alt="facebook" /></a>
              <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank" rel="noopener noreferrer">
                <img src="assets/instagram.png" alt="instagram" />
              </a>
              <a href="#"><img src="assets/youtube.png" alt="youtube" /></a>
              <a href="#"><img src="assets/twitter.png" alt="twitter" /></a>
            </div>
          </div>
        </div>
        <div className="hr-line">
          <hr />
        </div>

        <div className="footer__bar">
          Copyright © 2024 Kingsukh Guest House. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
