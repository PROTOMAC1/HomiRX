import React from 'react'
import './PropertiesDetailsPage.css'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Hiddenimg from '../../../components/Images/Properties5.jpg'
import { FaHeart, FaLocationDot, FaShareFromSquare } from 'react-icons/fa6'

export default function PropertiesDetailsPage() {
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
        <section className='propertiesdetailsmain'>
            <div className='propertiesdetailsheadings'>
                <div>
                  <h1>Elevation Small Apartments</h1>
                  <p style={{color: 'gray'}}><FaLocationDot style={{color: 'orangered'}} />18 Broklyn Street, New York</p>
                </div>
                <div className='propertiesdetailsheadingsbtn'>
                  <button><FaHeart /></button>
                  <button><FaShareFromSquare style={{color: 'rgb(221, 221, 221)'}} /> Share</button>
                  <button>Report</button>
                </div>
            </div>
            <div className='propertiesdetailsbottemmain'>
              <div className='propertiesdetailsleft'></div>
              <div className='propertiesdetailsright'></div>
            </div>
        </section>
        <section className='propertiesdetailsfooter'>
            <Footer />
        </section>
    </div>
  )
}
