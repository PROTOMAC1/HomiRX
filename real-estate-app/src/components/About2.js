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
  const leftBtn = document.getElementsByClassName('.last-about-card-left-btn');
  const rightBtn = document.getElementsByClassName('.last-about-card-right-btn');

  const cardsToShow = 3;
  let idx = 0;
  let interval;

  const cardWidth = cards[0].offsetWidth + 63; // 63px gap from CSS

  function slide() {
    idx = (idx + 1) % (cards.length - cardsToShow + 1);
    updateSlider();
  }

  function updateSlider() {
    track.style.transform = `translateX(-${idx * cardWidth}px)`;
  }

  function startSlider() {
    interval = setInterval(slide, 3000);
  }

  function stopSlider() {
    clearInterval(interval);
  }

  leftBtn.onclick = () => {
    idx = (idx - 1 + (cards.length - cardsToShow + 1)) % (cards.length - cardsToShow + 1);
    updateSlider();
    stopSlider();
    startSlider();
  };

  rightBtn.onclick = () => {
    idx = (idx + 1) % (cards.length - cardsToShow + 1);
    updateSlider();
    stopSlider();
    startSlider();
  };

  track.addEventListener('mouseenter', stopSlider);
  track.addEventListener('mouseleave', startSlider);

  startSlider();

  return () => {
    stopSlider();
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


// const data = [
//     {
//         img: Image1,
//         autherimg: Authoruser,
//         starraiting: FaStar,
//         raitingnumerical: `5.0`,
//         raitingnumericaluser: `(1)`,
//         heading: `Nova Quincy Apartment`,
//         locationsymboll: FaLocationDot,
//         locationaddress: `18 Broklyn Street, New York`,
//         paragraph: `It is a long established fact that a reader will be distracted the readable content.`,
//         iconone: `1860 sqft`,
//         icontwo: `Bed 6`,
//         iconthree: `Bath 6`,
//         bottomprice: `$1800`,
//         bottombtnicon: FaHouseUser,
//         bottombtn: `Details`,
//     },
//     {
//         img: Image2,
//         autherimg: Authoruser,
//         starraiting: FaStar,
//         raitingnumerical: `5.0`,
//         raitingnumericaluser: `(1)`,
//         heading: `West Squaer Apartments`,
//         locationsymboll: FaLocationDot,
//         locationaddress: `18 Broklyn Street, New York`,
//         paragraph: `It is a long established fact that a reader will be distracted the readable content.`,
//         iconone: `1860 sqft`,
//         icontwo: `Bed 6`,
//         iconthree: `Bath 6`,
//         bottomprice: `$1800`,
//         bottombtnicon: FaHouseUser,
//         bottombtn: `Details`,
//     }    ,
//     {
//         img: Image3,
//         autherimg: Authoruser,
//         starraiting: FaStar,
//         raitingnumerical: `4.0`,
//         raitingnumericaluser: `(1)`,
//         heading: `Peninsula Apartments`,
//         locationsymboll: FaLocationDot,
//         locationaddress: `18 Broklyn Street, New York`,
//         paragraph: `It is a long established fact that a reader will be distracted the readable content.`,
//         iconone: `1860 sqft`,
//         icontwo: `Bed 6`,
//         iconthree: `Bath 6`,
//         bottomprice: `$1800`,
//         bottombtnicon: FaHouseUser,
//         bottombtn: `Details`,
//     }  ,
//     {
//         img: Image4,
//         autherimg: Authoruser,
//         starraiting: FaStar,
//         raitingnumerical: `5.0`,
//         raitingnumericaluser: `(1)`,
//         heading: `West Squaer Apartments`,
//         locationsymboll: FaLocationDot,
//         locationaddress: `18 Broklyn Street, New York`,
//         paragraph: `It is a long established fact that a reader will be distracted the readable content.`,
//         iconone: `1860 sqft`,
//         icontwo: `Bed 6`,
//         iconthree: `Bath 6`,
//         bottomprice: `$1800`,
//         bottombtnicon: FaHouseUser,
//         bottombtn: `Details`,
//     }      ,
//     {
//         img: Image5,
//         autherimg: Authoruser,
//         starraiting: FaStar,
//         raitingnumerical: `5.0`,
//         raitingnumericaluser: `(1)`,
//         heading: `West Squaer Apartments`,
//         locationsymboll: FaLocationDot,
//         locationaddress: `18 Broklyn Street, New York`,
//         paragraph: `It is a long established fact that a reader will be distracted the readable content.`,
//         iconone: `1860 sqft`,
//         icontwo: `Bed 6`,
//         iconthree: `Bath 6`,
//         bottomprice: `$1800`,
//         bottombtnicon: FaHouseUser,
//         bottombtn: `Details`,
//     }    

// ];

export default About2