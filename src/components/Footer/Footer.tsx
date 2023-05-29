import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-bar d-f jc-sb">
        <div>
          <div><img src="images/footer-logo.png" alt="logo" /></div>
          <p className="footer-desc">
            Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.
            We provide relevant approaches to online learning, internships and employment in the largest companies in the country.
          </p>
          <div className="footer-social d-f">
            <div><img src="images/footer-social1.png" alt="footer-social1" /></div>
            <div><img src="images/footer-social2.png" alt="footer-social2" /></div>
            <div><img src="images/footer-social3.png" alt="footer-social3" /></div>
            <div><img src="images/footer-social4.png" alt="footer-social4" /></div>
            <div><img src="images/footer-social5.png" alt="footer-social5" /></div>
            <div><img src="images/footer-social6.png" alt="footer-social6" /></div>
          </div>
        </div>
        <div>
          <div className="footer-title">SITE MAP</div>
          <ul className="footer-list">
            <li className="footer-list-item"><Link to="about">About Us</Link></li>
            <li className="footer-list-item"><Link to="courses">Courses</Link></li>
            <li className="footer-list-item"><Link to="events">Events</Link></li>
            <li className="footer-list-item"><Link to="blog">Blog</Link></li>
            <li className="footer-list-item"><Link to="contacts">Contacts</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-title">COURSES</div>
          <ul className="footer-list">
            <li className="footer-list-item"><a href="">Marketing</a></li>
            <li className="footer-list-item"><a href="">Management</a></li>
            <li className="footer-list-item"><a href="">HR & Recruiting</a></li>
            <li className="footer-list-item"><a href="">Design</a></li>
            <li className="footer-list-item"><a href="">Development</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-title">CONTACT US</div>
          <div className="footer-phone">(405) 555-0128</div>
          <div className="footer-email">hello@createx.com</div>
        </div>
        <div>
          <div className="footer-title">SIGN UP TO OUR NEWSLETTER</div>
          <form action="" className="footer-fm d-f align-center">
            <input type="email" name='email' placeholder='Email address' />
            <button><img src="images/right.png" alt="right" /></button>
          </form>
          <div className="footer-subscribe">
            *Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.
          </div>
        </div>
      </div>
      <div className="footer-info d-f jc-sb">
        <div className="footer-rights">&copy; All rights reserved. Made with <img src="images/heart.png" alt="heart"/> by Createx Studio </div>
        <a href="" className="footer-top">Go to top</a>
      </div>
    </footer>
  )
}

export default Footer