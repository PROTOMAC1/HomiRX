import React, { useEffect } from 'react'
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
        <p className='bullet'>Proactively pontificate client</p>
        <p className='bullet'>Is there a waiting list for desired</p>
        <p className='bullet'>Immediate 24/ 7 Emergency</p>
      </div>
    </div>
  )
}

export default About