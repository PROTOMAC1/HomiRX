import React from 'react'
import Propertieimg1 from './Images/Properties1.jpg';
import Propertieimg2 from './Images/Properties2.jpg';
import Propertieimg3 from './Images/Properties3.jpg';
import Propertieimg4 from './Images/Properties4.jpg';
import Propertieimg5 from './Images/Properties5.jpg';
import Propertieimg6 from './Images/Properties6.jpg';
import './Propertie.css';

const Propertie = () => {
  const Imagestab = [
    Propertieimg1,
    Propertieimg2,
    Propertieimg3,
    Propertieimg4,
    Propertieimg5,
    Propertieimg6,
  ];
  
  return (
    <div className='properties-1'>
      <div className='properties-1-headings'>
        <p className='properties-1-h1'>Our Property List</p>
        <p className='properties-1-h2'>Our Top Location For You Property</p>
      </div>
      <div className='properties-1-body'>
        <div className='properties-1-gallery'>
          {Imagestab.map((img, index) =>(
            <div className='properties-1-gallery-container'>
              <img key={index} src={img} alt={`Property ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Propertie