import React, { useRef } from 'react'
import LeftImage from './Images/Book-Images/book-image1.jpg'
import Christine from './Images/Testimonials-Images/testimonial-1.jpg'
import Kevin from './Images/Testimonials-Images/testimonial-2.jpg'
import Jessica from './Images/Testimonials-Images/testimonial-3.jpg'
import './Testimonial.css'
import { FaStar } from 'react-icons/fa6'
import { motion, useInView } from 'framer-motion'

function Testimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const cardData = [
    {
      img: Christine,
      name: 'Christine Eve',
      dez: 'Founder & CEO',
      icon: <FaStar />,
      para: 'Lorem ipsum is simply free text dolor not sit amet notted adipisicing elit sed do eiusmod incididunt labore et dolore text.'
    },
    {
      img: Kevin,
      name: 'Kevin Smith',
      dez: 'Company Founder',
      icon: <FaStar />,
      para: 'Lorem ipsum is simply free text dolor not sit amet notted adipisicing elit sed do eiusmod incididunt labore et dolore text.'
    },
    {
      img: Jessica,
      name: 'Jessica Brown',
      dez: 'Company Founder',
      icon: <FaStar />,
      para: 'Lorem ipsum is simply free text dolor not sit amet notted adipisicing elit sed do eiusmod incididunt labore et dolore text.'
    }
  ];

  const scrollRef = useRef(null);
  const cardCount = cardData.length;
  const visibleCards = 2;

  const handleScroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.offsetWidth / visibleCards;
    if (dir === 'left') {
      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth;
      } else {
        container.scrollLeft -= cardWidth;
      }
    } else {
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += cardWidth;
      }
    }
  };

  return (
    <div className='testimonials-body'>
        <div className='testimonials-splite-page'>
            <motion.div ref={ref}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: 'easeOut' }}  className='testimonials-left-page'><img className='testimonials-left-img' src={LeftImage} /></motion.div>
            <motion.div ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className='testimonials-right-page'>
              <div className='testimonials-right-page-headings'>
                <p>Testimonials</p>
                <h1>What Our Clients Say?</h1>
              </div>
              <div className='testimonials-right-page-cards' ref={scrollRef}>
                {cardData.map((card, index)=>(
                  <div key={index} className='testimonials-cards'>
                    <div className='testimonials-cards-data'>
                      <div className='testimonials-cards-inner'>
                        <img src={card.img} alt={`Testimonal ${index +1}`} />
                        <div>
                          <h1>{card.name}</h1>
                          <h6>{card.dez}</h6>
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} style={{color: 'orange'}} className='fastar'/>
                          ))}
                        </div>
                      </div>
                      <p>{card.para}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='testimonial-right-page-btn'>
                <button className='testimonials-right-page-cards-btn' onClick={()=>handleScroll('left')}>
                    &#11160;
                </button>
                <button className='testimonials-right-page-cards-btn' onClick={()=>handleScroll('right')}>
                    &#11162;
                </button>
              </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Testimonial