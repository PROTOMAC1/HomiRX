import React, { useEffect, useState } from 'react'
import { FaBuilding, FaLocationDot, FaHouseUser, FaStar } from 'react-icons/fa6';
import './About2.css';
import ApartmentsData from './Datas/ApartmentsData';
import Gdata from './Datas/GeneralData';
import Vdata from './Datas/VillaData';

function About2() {
  const [activeTab, setActiveTab] = useState('ApartmentsData');
  const [carouselItems, setCarouselItems] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('');

  const handleBtnClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    const categoryOptions = {
      ApartmentsData,
      Gdata,
      Vdata
    };
    setCarouselItems(categoryOptions[activeTab] || []);
  }, [activeTab]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('prev');
    
    setTimeout(() => {
      const updated = [carouselItems[carouselItems.length - 1], ...carouselItems.slice(0, -1)];
      setCarouselItems(updated);
      setIsAnimating(false);
      setDirection('');
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('next');
    
    setTimeout(() => {
      const updated = [...carouselItems.slice(1), carouselItems[0]];
      setCarouselItems(updated);
      setIsAnimating(false);
      setDirection('');
    }, 300);
  };

  return (
    <div className='last-about'>
      <div className='last-about-top-content'>
        <div className='last-about-top-left'>
          <p className='last-about-top-left-subheading'>Our Listing</p>
          <p className='last-about-top-left-heading'>Find Home Listing<br /> in Your Area</p>
        </div>
        <div className='last-about-top-right'>
          <button
            className={`last-about-btn ${activeTab === 'ApartmentsData' ? 'active' : ''}`}
            onClick={() => handleBtnClick('ApartmentsData')}
          >
            <FaBuilding />Apartments
          </button>
          <button
            className={`last-about-btn ${activeTab === 'Gdata' ? 'active' : ''}`}
            onClick={() => handleBtnClick('Gdata')}
          >
            <FaLocationDot />General
          </button>
          <button
            className={`last-about-btn ${activeTab === 'Vdata' ? 'active' : ''}`}
            onClick={() => handleBtnClick('Vdata')}
          >
            <FaHouseUser />Villa
          </button>
        </div>
      </div>
      <div className={`last-about-card-content ${isAnimating ? `animating-${direction}` : ''}`}>
        {carouselItems.slice(0, 3).map((item, index) => (
          <div key={index} className={`last-about-card last-about-card-${index + 1}`}>
            <div className='last-about-card-image'>
              <img src={item.img} alt={`property-${index}`} />
            </div>
            <div className='last-about-card-details'>
              <div className='author-profile'>
                <img src={item.autherimg} alt='author-user' />
              </div>
              <div className='last-about-card-words'>
                <div className='last-about-card-raiting-and-numerical'>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} style={{color: 'orange'}} />
                  ))}
                  <span style={{color: 'red'}}>5.0</span>
                  <span>(1)</span>
                </div>
                <p className='last-about-card-heading'>{item.heading || 'Nova Quincy Apartment'}</p>
                <p className='last-about-card-loaction'>
                  <FaLocationDot className="symbollo" style={{color: 'red'}} />
                  {item.locationaddress || '18 Broklyn Street, New York'}
                </p>
                <p className='last-about-card-paragraph'>
                  {item.paragraph || 'It is a long established fact that a reader will be distracted the readable content.'}
                </p>
                <div className='last-about-card-area-icon'>
                  <p className='last-about-card-icon-contents'>
                    {item.icononeimg ? <item.icononeimg /> : <FaBuilding />} {item.iconone || '1860 sqft'}
                  </p>
                  <p className='last-about-card-icon-contents'>
                    {item.icontwoimg ? <item.icontwoimg /> : <FaHouseUser />} {item.icontwo || '6'}
                  </p>
                  <p className='last-about-card-icon-contents'>
                    {item.iconthreeimg ? <item.iconthreeimg /> : <FaLocationDot />} {item.iconthree || '6'}
                  </p>
                </div>
              </div>
              <div className='last-about-card-bottom-margin'>
                <p className='last-about-card-bottom-price'>{item.bottomprice || '1800'}</p>
                <button className='last-about-bottom-btn'><FaHouseUser />Details</button>
              </div>
            </div>
          </div>
        ))}
        <div className='about2btns'>
          <button className='last-about-card-left-btn' onClick={handlePrevious}>&#11160;</button>
          <button className='last-about-card-right-btn' onClick={handleNext}>&#11162;</button>
        </div>
      </div>
    </div>
  )
}

export default About2