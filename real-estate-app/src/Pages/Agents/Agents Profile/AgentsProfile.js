import React, { useRef } from 'react'
import './AgentsProfile.css'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Hiddenpage from '../../Hiddenpage'
import About2 from '../../../components/About2'
import Profile from '../../../components/Images/profile.jpg'
import { motion, useInView } from 'framer-motion'

export default function AgentsProfile() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  return (
    <div>
      <Navbar />
      <Hiddenpage />
      <section className='agentsprofilemain'>
        <div className='agentsprofilecontent'>
          <div className='agentsprofileadmin'>
            <div className='agentsprofileadminleft'>
              <div className='agentsprofileimg'>
                <img src={Profile} alt='profile' />
              </div>
              <div className='agentsprofileadmintext'>
                <p>Admin</p>
                <p>Member since 8 months ago</p>
              </div>
            </div>
            <div className='agentsprofileadminright'></div>
          </div>
          <div className='agentsprofilecontectandabout'>
            <motion.div ref={ref}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: 'easeOut' }} className='agentsprofilecontect'>
              <h3>Contact Info</h3>
              <div className='agentsprofilecontect-details'>
                <div><span role="img" aria-label="location">📍</span> 21 Monroe Ave, Rochester NY</div>
                <div><span role="img" aria-label="phone">📞</span> 888 666 111</div>
                <div><span role="img" aria-label="email">✉️</span> contact@example.com</div>
                <div><span role="img" aria-label="website">🌐</span> http://example.com</div>
              </div>
              <div className='agentsprofilecontect-socials'>
                <span>🌐</span>
                <span>✖️</span>
                <span>🔗</span>
                <span>▶️</span>
              </div>
            </motion.div>
            <motion.div ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className='agentsprofilesideabout'>
              <h3>About</h3>
              <p>Nullam quis ante tiam sit amet orci eget eros faucibus tincidunt. Donec quam felis ultricies nec pellentesque eu pretium quis, sem.</p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className='agentsprofileabout'>
        <About2 />
      </section>
      <section className='agentsprofilefooter'>
        <Footer />
      </section>
    </div>
  )
}
