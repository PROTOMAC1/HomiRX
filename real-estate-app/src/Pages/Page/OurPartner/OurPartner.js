import React from 'react'
import './OurPartner.css'
import Navbar from '../../../components/Navbar'
import Hiddenpage from '../../Hiddenpage'
import Footer from '../../../components/Footer'

export default function OurPartner() {
  return (
    <div>
        <Navbar />
        <Hiddenpage />
        <section className='ourpartnerfooter'>
            <Footer />
        </section>
    </div>
  )
}
