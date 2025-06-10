import React from 'react'
import { FaBuilding, FaLocationDot, FaHouseUser } from 'react-icons/fa6';
import Image1 from './Images/last-about-image1.jpg';
import Image2 from './Images/last-about-image2.jpg';
import Image3 from './Images/last-about-image3.jpg';
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
      <div className='last-about-card-content'>
        <div className='last-about-card'>
          <div className='last-about-card-image'><img src={Image1} alt='image1'/></div>
          <div className='last-about-card-details'>
            <div className='author-profile'></div>
            <div className='last-about-card-words'>
              <div className='last-about-card-raitings'></div>
              <p className='last-about-card-raiting-numerical'></p>
              <p className='last-about-card-heading'></p>
              <p className='last-about-card-loaction'></p>
              <p className='last-about-card-paragraph'></p>
              <div className='last-about-card-area-icon'>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className='last-about-card-bottom-margin'>
              <p className='last-about-card-bottom-price'></p>
              <button className='last-about-bottom-btn'></button>
            </div>
          </div>
        </div>
        <div className='last-about-card'>
          <div className='last-about-card-image'><img src={Image2} alt='image2'/></div>
          <div className='last-about-card-details'>
            <div className='author-profile'></div>
            <div className='last-about-card-words'>
              <div className='last-about-card-raitings'></div>
              <p className='last-about-card-raiting-numerical'></p>
              <p className='last-about-card-heading'></p>
              <p className='last-about-card-loaction'></p>
              <p className='last-about-card-paragraph'></p>
              <div className='last-about-card-area-icon'>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className='last-about-card-bottom-margin'>
              <p className='last-about-card-bottom-price'></p>
              <button className='last-about-bottom-btn'></button>
            </div>
          </div>
        </div>
        <div className='last-about-card'>
          <div className='last-about-card-image'><img src={Image3} alt='image3'/></div>
          <div className='last-about-card-details'>
            <div className='author-profile'></div>
            <div className='last-about-card-words'>
              <div className='last-about-card-raitings'></div>
              <p className='last-about-card-raiting-numerical'></p>
              <p className='last-about-card-heading'></p>
              <p className='last-about-card-loaction'></p>
              <p className='last-about-card-paragraph'></p>
              <div className='last-about-card-area-icon'>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className='last-about-card-bottom-margin'>
              <p className='last-about-card-bottom-price'></p>
              <button className='last-about-bottom-btn'></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About2