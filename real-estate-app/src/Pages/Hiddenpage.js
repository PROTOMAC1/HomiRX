import React, { useState, useEffect } from 'react'
import './Hiddenpage.css'
import Hiddenimg1 from '../components/Images/Properties1.jpg'
import Hiddenimg2 from '../components/Images/Properties2.jpg'
import Hiddenimg3 from '../components/Images/Properties3.jpg'
import Hiddenimg4 from '../components/Images/Properties4.jpg'
import Hiddenimg5 from '../components/Images/Properties5.jpg'
import Hiddenimg6 from '../components/Images/Properties6.jpg'

export default function Hiddenpage() {
    const Hiddenimg = [
        Hiddenimg1,
        Hiddenimg2,
        Hiddenimg3,
        Hiddenimg4,
        Hiddenimg5,
        Hiddenimg6
    ];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % Hiddenimg.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [Hiddenimg.length]);
    
  return (
    <div>
        <div className='propertiespagehidden'>
        <img src={Hiddenimg[current]} alt='hiddingimg' />
        <div className='overflow-hidden-img'>
          <h1>Future Dream Home</h1>
          <p>Providing the best Real Estate services</p>
        </div>
      </div>
    </div>
  )
}
