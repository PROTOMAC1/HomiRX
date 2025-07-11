import React, { useRef } from 'react';
import './Section2.css';
import { FaWarehouse, FaBuilding, FaHouseUser } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const Platform = [
      {
        iborder: <FaBuilding className='ic-icon'/>,
        cname: 'Commercial',
        csubname: '6 Properties'
      },
      {
        iborder: <FaWarehouse className='ic-icon'/>,
        cname: 'Warehouse',
        csubname: '6 Properties'
      },
      {
        iborder: <FaHouseUser className='ic-icon'/>,
        cname: 'Villa',
        csubname: '6 Properties'
      }
  ];

  return (
      <div className="section2">
        <div className="section2-heading">
            <motion.h3 ref={ref}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: 'easeOut' }} >Property By Requirement</motion.h3>
            <motion.h1 ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}>Explore Apartment <span className="section2-heading-word">Types</span></motion.h1>
        </div>
        <motion.div ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className="section2-card">
            {Platform.map((cards, index) => (
              <div key={index} className="card-border">
                  <div className="platform">
                    <div className="icon-border">{cards.iborder}</div>
                    <div className="card-words">
                      <h4 className="card-name">{cards.cname}</h4>
                      <h4 className="card-subname">{cards.csubname}</h4>
                    </div>
                  </div>
              </div>
            ))}
        </motion.div>
      </div>
  );
};

export default Section2;
