import React from 'react'
import './AgentsProfile.css'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Hiddenpage from '../../Hiddenpage'
import About2 from '../../../components/About2'
import Profile from '../../../components/Images/profile.jpg'

export default function AgentsProfile() {
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
            <div className='agentsprofilecontect'>
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
            </div>
            <div className='agentsprofilesideabout'>
              <h3>About</h3>
              <p>Nullam quis ante tiam sit amet orci eget eros faucibus tincidunt. Donec quam felis ultricies nec pellentesque eu pretium quis, sem.</p>
            </div>
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
