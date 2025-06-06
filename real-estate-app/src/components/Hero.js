import React, { useState, useEffect } from 'react';
import './Hero.css';

const images = [
  require('./Images/house-1867187.jpg'),
  require('./Images/house2.jpg'),
  require('./Images/house3.jpg'),
  require('./Images/house4.jpg'),
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState('General'); // Track active tab

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handler for tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const categoryOptions = {
    General: ['Party Center', 'Place', 'Restaurant', 'Shopping'],
    Villa: ['For Rent', 'For Sale'],
    Apartment: ['For Rent', 'for sale']
  };

  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          borderRadius: '25px',
          transition: 'background-image 1s ease-in-out',
        }}
      >
        <div className="hero-overlay">
          <h1>Let’s Find Your <br />Dream House.</h1>
          <div className="rotating-circle">
            <div className="circle-text">
              · PLAY INTRO VIDEO · PLAY INTRO VIDEO · PLAY ·
            </div>
            <button className="play-button">▶</button>
          </div>

          {/* Tabs with active class toggle */}
          <div className="tabs">
            <button
              className={`blurred ${activeTab === 'General' ? 'active' : ''}`}
              onClick={() => handleTabClick('General')}
            >
              General
            </button>
            <button
              className={`blurred ${activeTab === 'Villa' ? 'active' : ''}`}
              onClick={() => handleTabClick('Villa')}
            >
              Villa
            </button>
            <button
              className={`blurred ${activeTab === 'Apartment' ? 'active' : ''}`}
              onClick={() => handleTabClick('Apartment')}
            >
              Apartment
            </button>
          </div>

          <div className="search-bar blurred">
            <div className="filters">
              <input type="text" placeholder="Looking For?" />
              <select>
                <option className="search-option">Select Category</option>
                {categoryOptions[activeTab].map((option, index) => (
                  <option key={index} className="search-option">{option}</option>
                ))}
              </select>
              <input type="text" placeholder="Location" />
              <button className="search-btn">Search</button>
            </div>
            <div className="filters"></div>
          </div>

          <div className="tabs-buttons">
            <button className="commercial">Commercial →</button>
            <button className="villa">Villa →</button>
            <button className="sales">Sales →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
