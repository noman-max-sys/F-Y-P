import React from 'react';
import './Mainpage.css';

function Mainpage() {
  return (
    <div className="mainpage-container">
      <div className="hero-banner">
        <nav className="hero-nav">
          <div className="logo"></div>
          <div className="nav-links">
            <a href="#students">Students</a>
            <a href="#partners">Recruitment Partners</a>
            <a href="#schools">Schools</a>
          </div>
          <div className="auth-links">
            
          </div>
        </nav>
        <div className="banner-content">
          <h1>We Are on a Mission to Educate the World</h1>
          <div className="cta-buttons">
            <button>I am a student exploring studying abroad</button>
            <button>I am a recruitment partner</button>
            <button>I work at a school</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;