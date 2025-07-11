import React, { useRef } from 'react'
import './About1.css';
import Secondaboutimg from './Images/second-about-img';
import { motion, useInView } from 'framer-motion';
import { FaHouseUser } from 'react-icons/fa';

function About1() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  return (
    <div className='second-about'>
        <div className='second-about-inner-page'>
          <motion.div ref={ref}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: 'easeOut' }}  className='second-about-left-contect'>
              <p className='second-about-subheading'>Properties</p>
              <p className='second-about-heading'>Welcome To Our <span>Luxurious Properties</span> With All The Conveniences.</p>
              <button className='second-about-btn'><FaHouseUser />View Properties</button>
          </motion.div>
          <motion.div ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className='second-about-right-contect'>
            <img src={Secondaboutimg} />
          </motion.div>
        </div>
    </div>
  )
}

export default About1