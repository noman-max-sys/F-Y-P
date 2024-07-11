import React from 'react';
import './Facts.css';

const facts = [
  { icon: '🏛️', title: 'London', subtitle: 'Capital' },
  { icon: '🏫', title: '349', subtitle: 'Total Universities' },
  { icon: '📈', title: '£3.12 Trillion', subtitle: 'Total GDP' },
  { icon: '💷', title: 'Pound Sterling', subtitle: 'National Currency' },
  { icon: '🌍', title: '67.76 M', subtitle: 'Total Population' },
  { icon: '🎓', title: '559,825', subtitle: 'International Students' },
  { icon: '📚', title: 'English', subtitle: 'Language Spoken' },
  { icon: '☎️', title: '+44', subtitle: 'Country Code' },
];

function FactsAboutUK() {
  return (
    <div className="facts-container">
      <h2>Facts About UK</h2>
      <div className="facts-grid">
        {facts.map((fact, index) => (
          <div key={index} className="fact-card">
            <div className="fact-icon">{fact.icon}</div>
            <div className="fact-title">{fact.title}</div>
            <div className="fact-subtitle">{fact.subtitle}</div>
          </div>
        ))}
        <div className="fact-card profile-card">
          <img src="https://www.example.com/path_to_image.png" alt="Profile Assessment" />
          <div className="profile-title">Profile Assessment</div>
          <div className="fact-title">Know your chances to get in top UK Universities.</div>
          <button>Assess your profile</button>
        </div>
      </div>
    </div>
  );
}

export default FactsAboutUK;
