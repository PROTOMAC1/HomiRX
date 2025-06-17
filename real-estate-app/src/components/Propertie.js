import React, { useState } from 'react';
import Propertieimg1 from './Images/Properties1.jpg';
import Propertieimg2 from './Images/Properties2.jpg';
import Propertieimg3 from './Images/Properties3.jpg';
import Propertieimg4 from './Images/Properties4.jpg';
import Propertieimg5 from './Images/Properties5.jpg';
import Propertieimg6 from './Images/Properties6.jpg';
import './Propertie.css';

const images = [
  Propertieimg1,
  Propertieimg2,
  Propertieimg3,
  Propertieimg4,
  Propertieimg5,
  Propertieimg6,
];

const Propertie = () => {
  const [carouselItems, setCarouselItems] = useState(images);

  const handlePrevious = () => {
    const updated = [carouselItems[carouselItems.length - 1], ...carouselItems.slice(0, -1)];
    setCarouselItems(updated);
  };

  const handleNext = () => {
    const updated = [...carouselItems.slice(1), carouselItems[0]];
    setCarouselItems(updated);
  };

  return (
    <div className="body">
      <div className="gallery">
        <div className="gallery-container">
          {carouselItems.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Property ${index + 1}`}
              className={`gallery-item gallery-item-${index + 1}`}
              data-index={index + 1}
            />
          ))}
        </div>
        <div className="gallery-controls">
          <button className="gallery-controls-previous" onClick={handlePrevious}>
            Previous
          </button>
          <button className="gallery-controls-next" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Propertie;
