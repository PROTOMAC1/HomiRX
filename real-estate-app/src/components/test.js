import React, { useState, useEffect } from 'react'
import './test.css';
import './Hero.css';

const images = [
  require('./Images/house-1867187.jpg'),
  require('./Images/house2.jpg'),
  require('./Images/house3.jpg'),
  require('./Images/house4.jpg'),
];

function Test() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
      }, []);
      
  return (
    <div>
    <div className='test'
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          transition: 'background-image 1s ease-in-out',
        }}
    >
    </div>
    </div>
  )
}

export default Test