import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="column">
          <a href="">
            <img src="https://www.proclassconsultants.com/images/logo-img.png" alt="Company Logo" width="50" />
          </a>
          <h3>
            WE ARE Here to Serve<br />
            <span className="footer-heading-span">Pro Class</span>
          </h3>
          <p>
            Shaping Your <br />
            Career For Brighter Future
          </p>
        </div>
        <div className="column">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Imigration</a></li>
            <li><a href="#">Study Visa</a></li>
            <li><a href="#">Language Tests</a></li>
            <li><a href="#">Micro services</a></li>
          </ul>
        </div>
       
        <div className="column">
          <h3>Study Abroad</h3>
          <ul>
            <li><a href="#">USA</a></li>
            <li><a href="#">UK</a></li>
            <li><a href="#">Canada</a></li>
            <li><a href="#">Australia</a></li>
          </ul>
        </div>
        <div className="column">
          <h3>Contact Us</h3>
          <p><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;MODEL TOWN LAHORE</p>
          <p><i className="fas fa-phone-alt"></i>&nbsp;&nbsp;03061564265</p>
          <p><i className="fas fa-envelope"></i>&nbsp;&nbsp;proclassconsultant@gmail.com</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-square"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-whatsapp-square"></i></a>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>
          &copy; 2024 Your Company. All rights reserved || Developed by PRO CLASS TEAM
        </p>
      </div>
    </footer>
  );
};

export default Footer;
