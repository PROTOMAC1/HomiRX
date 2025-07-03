import React from 'react'
import './AgentsPages.css'
import Navbar from '../../../components/Navbar'
import Hiddenimg from '../../../components/Images/Properties4.jpg'
import About from '../../../components/About'
import Footer from '../../../components/Footer'

export default function AgentsPages() {
  return (
    <div>
      <Navbar />
      <div className='propertiespagehidden'>
        <img src={Hiddenimg} alt='hiddingimg' />
        <div className='overflow-hidden-img'>
          <h1>Future Dream Home</h1>
          <p>Providing the best Real Estate services</p>
        </div>
      </div>
      <section className='agentspagesfooter'>
        <Footer />
      </section>
    </div>
  )
}
