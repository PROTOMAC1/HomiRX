import React, { useEffect, useState } from 'react'
import { FaBuilding, FaLocationDot, FaHouseUser } from 'react-icons/fa6';
import './About2.css';
import data from './Datas/ApartmentsData';

function About2() {
  const [activeTab, setActiveTab] = useState('Apartment');

  const handleBtnClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
  const track = document.querySelector('.last-about-card-content');
  const cards = document.querySelectorAll('.last-about-card');
  const leftBtn = document.querySelector('.last-about-card-left-btn');
  const rightBtn = document.querySelector('.last-about-card-right-btn');

  if (!track || cards.length === 0) return;

  const cardsToShow = 3;
  let idx = 0;
  let interval;
  const cardWidth = cards[0].offsetWidth + 63;

  function updateSlider() {
    track.style.transform = `translateX(-${idx * cardWidth}px)`;
  }

  function slide() {
    idx = (idx + 1) % (cards.length - cardsToShow + 1);
    updateSlider();
  }

  function startSlider() {
    interval = setInterval(slide, 3000);
  }

  function stopSlider() {
    clearInterval(interval);
  }

  leftBtn.addEventListener('click', () => {
    idx = (idx - 1 + (cards.length - cardsToShow + 1)) % (cards.length - cardsToShow + 1);
    updateSlider();
    stopSlider();
    startSlider();
  });

  rightBtn.addEventListener('click', () => {
    idx = (idx + 1) % (cards.length - cardsToShow + 1);
    updateSlider();
    stopSlider();
    startSlider();
  });

  track.addEventListener('mouseenter', stopSlider);
  track.addEventListener('mouseleave', startSlider);

  startSlider();

  return () => {
    stopSlider();
    leftBtn.removeEventListener('click', updateSlider);
    rightBtn.removeEventListener('click', updateSlider);
    track.removeEventListener('mouseenter', stopSlider);
    track.removeEventListener('mouseleave', startSlider);
  };
}, []);

  return (
    <div className='last-about'>
      <div className='last-about-top-content'>
        <div className='last-about-top-left'>
          <p className='last-about-top-left-subheading'>Our Listing</p>
          <p className='last-about-top-left-heading'>Find Home Listing<br /> in Your Area</p>
        </div>
        <div className='last-about-top-right'>
          <button
            className={`last-about-btn ${activeTab === 'Apartment' ? 'active' : ''}`}
              onClick={() => handleBtnClick('Apartment')}
          >
              <FaBuilding />Apartments
          </button>
          <button
            className={`last-about-btn ${activeTab === 'General' ? 'active' : ''}`}
            onClick={() => handleBtnClick('General')}
          >
            <FaLocationDot />General
          </button>
          <button
            className={`last-about-btn ${activeTab === 'Villa' ? 'active' : ''}`}
            onClick={() => handleBtnClick('Villa')}
          >
            <FaHouseUser />Villa
          </button>
        </div>
      </div>
      <div className='last-about-card-content'>
        {data.map((d) => 
          <div className='last-about-card'>
          <div className='last-about-card-image'><img src={d.img} alt='image1'/></div>
            <div className='last-about-card-details'>
              <div className='author-profile'><img src={d.autherimg} alt='author-user' /></div>
              <div className='last-about-card-words'>
                <div className='last-about-card-raiting-and-numerical'>
                    <d.starraiting style={{color: 'orange'}}/><d.starraiting style={{color: 'orange'}}/>
                    <d.starraiting style={{color: 'orange'}}/><d.starraiting style={{color: 'orange'}}/>
                    <d.starraiting style={{color: 'orange'}}/><span style={{color: 'red'}}>5.0</span><span>(1)</span>
                </div>
                <p className='last-about-card-heading'>Nova Quincy Apartment</p>
                <p className='last-about-card-loaction'><FaLocationDot className="symbollo" style={{color: 'red'}} />18 Broklyn Street, New York</p>
                <p className='last-about-card-paragraph'>It is a long established fact that a reader will be distracted the readable content.</p>
                <div className='last-about-card-area-icon'>
                  <p>1860 sqft</p>
                  <p>Bed 6</p>
                  <p>Bath 6</p>
                </div>
              </div>
              <div className='last-about-card-bottom-margin'>
                <p className='last-about-card-bottom-price'>$1800</p>
                <button className='last-about-bottom-btn'><FaHouseUser />Details</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <button className='last-about-card-left-btn'>&#11160;</button>
      <button className='last-about-card-right-btn'>&#11162;</button>
    </div>
  )
}

export default About2