import React from 'react'
import './Members.css'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Hiddenimg from '../../../components/Images/Properties5.jpg'

export default function Members() {
  return (
    <div className='memberspage'>
      <Navbar />
      <div className='propertiespagehidden'>
        <img src={Hiddenimg} alt='hiddingimg' />
        <div className='overflow-hidden-img'>
          <h1>Future Dream Home</h1>
          <p>Providing the best Real Estate services</p>
        </div>
      </div>
      <div className='membersfooter'>
        <Footer />
      </div>
    </div>
  )
}
