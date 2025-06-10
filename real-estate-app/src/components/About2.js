import React from 'react'
import { FaBuilding, FaLocationDot, FaHouseUser } from 'react-icons/fa6';
import './About2.css';

function About2() {
  return (
    <div className='last-about'>
      <div className='last-about-top-content'>
        <div className='last-about-top-left'>
          <p className='last-about-top-left-subheading'>Our Listing</p>
          <p className='last-about-top-left-heading'>Find Home Listing<br /> in Your Area</p>
        </div>
        <div className='last-about-top-right'>
          <button className='last-about-btn'><FaBuilding />Apartments</button>
          <button className='last-about-btn'><FaLocationDot />General</button>
          <button className='last-about-btn'><FaHouseUser />Villa</button>
        </div>
      </div>
      <div className='last-about-card'>
        <div className='last-about-card-image'>ada</div>
        <div className='last-about-card-content'></div>
      </div>
    </div>
  )
}

export default About2