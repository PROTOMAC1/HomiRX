import React, { useRef } from 'react'
import './EventPage.css'
import Navbar from '../../../components/Navbar'
import Hiddenimg from '../../Hiddenpage'
import Footer from '../../../components/Footer'
import img1 from './photo1.jpg'
import img2 from './photo2.jpg'
import img3 from './photo3.jpg'
import img4 from './photo4.jpg'
import img5 from './photo5.jpg'
import img6 from './photo1.jpg'
import { motion, useInView } from 'framer-motion'

export default function EventPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const eventCard = [
    {
      img: img1,
      alt: 'Architecture Club meetup',
      dateBadge1: '11',
      dateBadge2: 'DEC',
      meta: '⏰ December 11 @ 8:00 am',
      title: 'Architecture Club meetup',
    },
    {
      img: img2,
      alt: 'Architecture Week',
      dateBadge1: '11',
      dateBadge2: 'DEC',
      meta: '⏰ December 11 @ 8:00 am',
      title: 'Architecture Week',
    },
    {
      img: img3,
      alt: 'Festival of Architecture and Interior',
      dateBadge1: '11',
      dateBadge2: 'DEC',
      meta: '⏰ December 11 @ 8:00 am',
      title: 'Festival of Architecture and Interior',
    },
    {
      img: img4,
      alt: 'Designing Club Culture',
      dateBadge1: '11',
      dateBadge2: 'DEC',
      meta: '⏰ December 11 @ 8:00 am',
      title: 'Designing Club Culture',
    },
    {
      img: img5,
      alt: 'Nairobi Design Week',
      dateBadge1: '11',
      dateBadge2: 'DEC',
      meta: '⏰ December 11 @ 8:00 am',
      title: 'Nairobi Design Week',
    },
    {
      img: img6,
      alt: 'International Architecture 2025',
      dateBadge1: '11',
      dateBadge2: 'DEC',
      meta: '⏰ December 11 @ 8:00 am',
      title: 'International Architecture 2025',
    },
  ]
  
  return (
    <>
        <Navbar />
        <Hiddenimg />
        <section className='eventpagemain'>
          <motion.div ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className='event-grid'>
            {eventCard.map((items, i) => (
              <div className='event-card' key={i}>
                <img src={items.img} alt={`images-${i+1}`} />
                <div className='event-date-badge'><span>{items.dateBadge1}</span><br/>{items.dateBadge2}</div>
                <div className='event-card-info'>
                  <div className='event-card-meta'>{items.meta}</div>
                  <div className='event-card-title'>{items.title}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </section>
        <section className='eventpagefooter'>
            <Footer />
        </section>
    </>
  )
}
