import React, { useRef, useState } from 'react'
import Navbar from '../../../components/Navbar'
import About from '../../../components/About'
import Footer from '../../../components/Footer'
import './PropertiesPage.css'
import ApartmentsData from '../../../components/Datas/ApartmentsData'
import Gdata from '../../../components/Datas/GeneralData'
import Vdata from '../../../components/Datas/VillaData'
import Hiddenpage from '../../Hiddenpage'
import { motion, useInView } from 'framer-motion'

export default function PropertiesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const [selectedCategory, setSelectedCategory] = useState('Apartment')

  return (
    <div className='propertiespagebody'>
        <Navbar />
        <Hiddenpage />
        <div className='propertiespagemaincontent'>
            <div className='propertiespagebox'>
              <div className='propertiespageipperbox'>
                <motion.div ref={ref}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className='propertiespagebtn'>
                  {['Apartment', 'General', 'Villa'].map((cat) => (
                    <button
                      key={cat}
                      className={selectedCategory === cat ? 'selected-category-btn' : ''}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </motion.div>
                <motion.div ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className='propertiespagesearchbar'>
                  <div className='searchbarcontent'><span>Keywoard</span><h4>Looking for?</h4></div>
                  <div className='searchbarcontent'><span>Category</span><h4>Select Category</h4></div>
                  <div className='searchbarcontent'><span>Loaction</span><h4>Location</h4></div>
                  <div className='searchbarlogo'>More</div>
                </motion.div>
                <motion.div ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className='propertiespagesorting'>
                  <button>Sort By</button>
                </motion.div>
              </div>
              <motion.div ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className='propertiespagebelowbox'>
                {(
                  selectedCategory === 'Apartment' ? ApartmentsData :
                  selectedCategory === 'General' ? Gdata :
                  selectedCategory === 'Villa' ? Vdata : []
                ).slice(0, 6).map((item, idx) => (
                  <div key={idx} className='property-card'>
                    <img src={item.img} alt={item.heading} className='property-card-img' />
                    <div className='property-card-content'>
                      <h3>{item.heading}</h3>
                      <p>{item.locationaddress}</p>
                      <p>{item.paragraph}</p>
                      <div className='property-card-details'>
                        <span>{item.iconone}</span>
                        <span>{item.icontwo}</span>
                        <span>{item.iconthree}</span>
                      </div>
                      <div className='property-card-bottom'>
                        <span>{item.bottomprice}</span>
                        <button>{item.bottombtn}</button>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
        </div>
        <div className='propertiespageabout'>
          <About />
        </div>
        <div className='propertiespagefooter'>
          <Footer />
        </div>
    </div>
  )
}
