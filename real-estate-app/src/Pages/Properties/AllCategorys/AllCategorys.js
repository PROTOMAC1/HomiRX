import React, { useRef, useState } from 'react'
import './AllCategorys.css'
import Navbar from '../../../components/Navbar'
import About from '../../../components/About'
import Footer from '../../../components/Footer'
import Apertment1 from '../../../components/Images/AllCategorys-Images/Apartment1.jpg'
import Apertment2 from '../../../components/Images/AllCategorys-Images/Apartment2.jpg'
import General1 from '../../../components/Images/AllCategorys-Images/General1.jpg'
import General2 from '../../../components/Images/AllCategorys-Images/General2.jpg'
import General3 from '../../../components/Images/AllCategorys-Images/General3.jpg'
import General4 from '../../../components/Images/AllCategorys-Images/General4.jpg'
import Hiddenpage from '../../Hiddenpage'
import { motion, useInView } from 'framer-motion'

export default function AllCategorys() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
    const Allcategory = [
        Apertment1,
        Apertment2,
        General1,
        General2,
        General3,
        General4
    ];
    const apartmentImages = [Apertment1, Apertment2];
    const generalImages = [General1, General2, General3, General4];
    const [selected, setSelected] = useState('All');

    return (
        <div className='allcategorybody'>
            <Navbar />
            <Hiddenpage />
            <section className='allcategorymain'>
                <div className='allcategorymainsubname'>
                    <motion.p ref={ref}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}>Facilities</motion.p>
                    <motion.h1 ref={ref}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}>Top Categories</motion.h1>
                    <motion.div ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className='allcategorybtn'>
                        {['All', 'Apartment', 'General', 'Villa'].map((cat) => (
                          <button
                            key={cat}
                            className={selected === cat ? 'allcategory-selected-btn' : ''}
                            onClick={() => setSelected(cat)}
                          >
                            {cat}
                          </button>
                        ))}
                    </motion.div>
                </div>
                <motion.div ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className='allcategory-image-grid'>
                  {selected === 'All' && (
                    Allcategory.map((img, idx) => (
                      <div key={idx} className='allcategory-image-item'>
                        <img src={img} alt={`category-${idx}`} />
                        <div className='allcategory-image-overlay'></div>
                        <div className='allcategory-image-text'>
                          {idx < 2 ? 'Apartment' : 'General'}
                        </div>
                      </div>
                    ))
                  )}
                  {selected === 'Apartment' && (
                    apartmentImages.map((img, idx)=> (
                      <div key={idx} className='allcategory-image-item'>
                        <img src={img} alt={`apartment-${idx}`} />
                        <div className='allcategory-image-overlay'></div>
                        <div className='allcategory-image-text'>Apartment</div>
                      </div>
                    ))
                  )}
                  {selected === 'General' && (
                    generalImages.map((img, idx)=> (
                      <div key={idx} className='allcategory-image-item'>
                        <img src={img} alt={`general-${idx}`} />
                        <div className='allcategory-image-overlay'></div>
                        <div className='allcategory-image-text'>General</div>
                      </div>
                    ))
                  )}
                  {selected === 'Villa' && (
                    apartmentImages.map((img, idx) => (
                      <div key={idx} className='allcategory-image-item'>
                        <img src={img} alt={`apartment-${idx}`} />
                        <div className='allcategory-image-overlay'></div>
                        <div className='allcategory-image-text'>Apartment</div>
                      </div>
                    ))
                  )}
                </motion.div>
            </section>
            <section className='allcategoryabout'>
                <About />
            </section>
            <section className='allcategoryfooter'>
                <Footer />
            </section>
        </div>
    )
}
