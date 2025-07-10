import React from 'react'
import './About1.css';
import Secondaboutimg from './Images/second-about-img';
import { FaHouseUser } from 'react-icons/fa';

function About1() {
  return (
    <div className='second-about'>
        <div className='second-about-inner-page'>
          <div className='second-about-left-contect'>
              <p className='second-about-subheading'>Properties</p>
              <p className='second-about-heading'>Welcome To Our <span>Luxurious Properties</span> With All The Conveniences.</p>
              <button className='second-about-btn'><FaHouseUser />View Properties</button>
          </div>
          <div className='second-about-right-contect'>
            <img src={Secondaboutimg} />
          </div>
        </div>
    </div>
  )
}

export default About1