import React, { useRef } from 'react'
import Propertieimg1 from './Images/Properties1.jpg';
import Propertieimg2 from './Images/Properties2.jpg';
import Propertieimg3 from './Images/Properties3.jpg';
import Propertieimg4 from './Images/Properties4.jpg';
import Propertieimg5 from './Images/Properties5.jpg';
import Propertieimg6 from './Images/Properties6.jpg';
import { motion, useInView } from 'framer-motion';
import './Propertie.css';

const Propertie = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const propertiesData = [
    {
      img: Propertieimg1,
      name: "Luxury Villa",
      description: "Luxury Property With Convenience",
      properties: "13 properties"
    },
    {
      img: Propertieimg2,
      name: "Downtown Apartment",
      description: "Luxury Property With Convenience",
      properties: "8 properties"
    },
    {
      img: Propertieimg3,
      name: "Suburban House",
      description: "Luxury Property With Convenience",
      properties: "15 properties"
    },
    {
      img: Propertieimg4,
      name: "Beachfront Condo",
      description: "Luxury Property With Convenience",
      properties: "6 properties"
    },
    {
      img: Propertieimg5,
      name: "Mountain Retreat",
      description: "Luxury Property With Convenience",
      properties: "12 properties"
    },
    {
      img: Propertieimg6,
      name: "Urban Loft",
      description: "Luxury Property With Convenience",
      properties: "10 properties"
    }
  ];
  
  return (
    <div className='properties-1'>
      <div className='properties-1-headings'>
        <motion.p ref={ref}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: 'easeOut' }}  className='properties-1-h1'>Our Property List</motion.p>
        <motion.p ref={ref}
                  initial={{ x: 100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: 'easeOut' }}  className='properties-1-h2'>Our Top Location For You Property</motion.p>
      </div>
      <div className='properties-1-body'>
        <div className='properties-1-gallery'>
          {propertiesData.map((property, index) =>(
            <div key={index} className='properties-1-gallery-container'>
              <img src={property.img} alt={`Property ${index + 1}`} />
              <div className='property-overlay'>
                <button className='property-button'>&#8599;</button>
                <div className='property-info'>
                  <p className='property-count'>{property.properties}</p>
                  <h3 className='property-name'>{property.name}</h3>
                  <p className='property-description'>{property.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Propertie