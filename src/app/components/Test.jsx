// components/TestComponent.js
import React from 'react';
import Image from 'next/image';
import './Test.css';

const TestComponent = () => {
  return (
    <div className="test-component">
      <div className="content">
        <h3>VALUE FOR VISA COACHING</h3>
        <h1>Benefits Of Visa Online Coaching & Preparation</h1>
        <div className="coaching-grid">
          <div className="coaching-item">
            <h4>TOEFL</h4>
            <p>Scoring parameters in each of the modules.</p>
          </div>
          <div className="coaching-item">
            <h4>PTE Coaching</h4>
            <p>We provide PTE online coaching classes.</p>
          </div>
          <div className="coaching-item">
            <h4>IELTS Coaching</h4>
            <p>Scoring method the band of 0-9.</p>
          </div>
          <div className="coaching-item">
            <h4>GMAT</h4>
            <p>Master in management or business-oriented studies.</p>
          </div>
        </div>
      </div>
      <div className="image-container">
        <Image
          src="https://miro.medium.com/v2/resize:fit:1200/1*soGQNoqEROdtF79SrMDXbw.png"
          alt="Students"
          width={500}
          height={300}
          layout="responsive"
        />
        <div className="image-overlay">
          <h3>Coaching Test Preparation Series</h3>
          <p>Free Guide To A Top Line Band Score!</p>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
