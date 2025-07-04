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
          <div>
            <div>
              <div className='agentsprofileimg'>
                <img src={Profile} alt='profile' />
              </div>
              <div>
                <p>Admin</p>
                <p>Member since 8 months ago</p>
              </div>
            </div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
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
