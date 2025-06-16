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
    <div className='w-full Properties'>
        <div className='propertiescontent w-fit'>
            <h2>Our Property List</h2>
            <h1>Our Top Location For You Property</h1>
            <div className='PropertiesImageCard'>
                <div className='ImageCard' style={{backgroundImage: `url(${Propertieimg1})`}}>
                  <h1>Checking</h1>
                </div>
                <div className='ImageCard' style={{backgroundImage: `url(${Propertieimg2})`}}>
                  <h1>Checking</h1>
                </div>
                <div className='ImageCard' style={{backgroundImage: `url(${Propertieimg3})`}}>
                  <h1>Checking</h1>
                </div>
                <div className='ImageCard' style={{backgroundImage: `url(${Propertieimg4})`}}>
                  <h1>Checking</h1>
                </div>
                <div className='ImageCard' style={{backgroundImage: `url(${Propertieimg5})`}}>
                  <h1>Checking</h1>
                </div>
                <div className='ImageCard' style={{backgroundImage: `url(${Propertieimg6})`}}>
                  <h1>Checking</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Propertie