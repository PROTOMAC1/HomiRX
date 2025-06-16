import React from 'react'
import Propertieimg1 from './Images/Properties1.jpg';
import Propertieimg2 from './Images/Properties2.jpg';
import Propertieimg3 from './Images/Properties3.jpg';
import Propertieimg4 from './Images/Properties4.jpg';
import Propertieimg5 from './Images/Properties5.jpg';
import Propertieimg6 from './Images/Properties6.jpg';
import './Propertie.css';

const Propertie = () => {
  return (
    <div className='body'>
      <div className='gallery'>
        <div className='gallery-container'>
          <img className='gallery-item gallery-item-1' src={Propertieimg1} data-index='1' />
          <img className='gallery-item gallery-item-2' src={Propertieimg2} data-index='2' />
          <img className='gallery-item gallery-item-3' src={Propertieimg3} data-index='3' />
          <img className='gallery-item gallery-item-4' src={Propertieimg4} data-index='4' />
          <img className='gallery-item gallery-item-5' src={Propertieimg5} data-index='5' />
          <img className='gallery-item gallery-item-6' src={Propertieimg6} data-index='6' />
        </div>
        <div className='gallery-controls'></div>
      </div>
    </div>
  )
}

export default Propertie