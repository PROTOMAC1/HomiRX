import React, { useEffect } from 'react';
import { FaArrowRight, FaHouseUser } from 'react-icons/fa';
import './About.css'

const About = () => {
  useEffect(() => {
    const textElement = document.querySelector('.circletext p');
    if (textElement) {
      const text = textElement.innerText;
      textElement.innerHTML = text
        .split('')
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 5.85}deg); display:inline-block;">${char}</span>`
        )
        .join('');
    }
  }, []);

  return (
    <div className='about'>
      <div className='left-content'>
        <div className="circle">
          <div className="circletext">
            <p> - PLAY INTRO VIDEO - PLAY INTRO VIDEO </p>
          </div>
          <button className="play-button1">▶</button>
        </div>
        <div className='grid-background'></div>
        <div class="masked-image"></div>
      </div>
      <div className='right-content'>
        <p className='heading1'>About Company</p>
        <p className='heading2'>Welcome To Properties</p>
        <p className='para'>It is a long established fact that a reader will be distracted the readable content 
          of a page when looking at layout the point of using lorem the is Ipsum less normal 
          distribution of letters.</p>
        <div className='about-right-flex'>
          <ul className='table'>
            <li><FaArrowRight className='bullet' />Proactively pontificate client</li>
            <li><FaArrowRight className='bullet' />Is there a waiting list for desired</li>
            <li><FaArrowRight className='bullet' />Immediate 24/ 7 Emergency</li>
          </ul>
          <div className='about-right-circle1'>
            <p className='about-right-heading1'>30k+</p>
            <p className='about-right-contect1'>Satisficed</p>
            <p className='about-right-contect3'>Client</p>
          </div>
          <div className='about-right-circle2'>
            <p className='about-right-heading2'>700+</p>
            <p className='about-right-contect2'>House</p>
          </div>
        </div>
        <button className='about-btn'><FaHouseUser /> Explor More</button>
      </div>
    </div>
  )
}

export default About