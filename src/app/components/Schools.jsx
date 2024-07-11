
import React from 'react';
import Image from 'next/image';
import './Schools.css';

const School = ({ title, backgroundImage, description, buttonLabel, buttonLink }) => {
  return (
   <div className="school-container" style={{ backgroundImage: `url('https://www.jeduka.com/storage/newsletter/1692877601_List-of-Top-Universities-in-UK.png')` }}>
      <div className="school-content">
        <h2>Explore Schools</h2>
        <p>{description}</p>
        <a href={buttonLink} className="school-button">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default School;
