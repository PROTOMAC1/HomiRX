import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import About from '../../../components/About'
import Footer from '../../../components/Footer'
import './PropertiesPage.css'
import ApartmentsData from '../../../components/Datas/ApartmentsData'
import Gdata from '../../../components/Datas/GeneralData'
import Vdata from '../../../components/Datas/VillaData'
import Hiddenimg from '../../../components/Images/Properties1.jpg'

export default function PropertiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Apartment')

  return (
    <div className='propertiespagebody'>
        <Navbar />
        <div className='propertiespagehidden'>
          <img src={Hiddenimg} alt='hiddingimg' />
          <div className='overflow-hidden-img'>
            <h1>Future Dream Home</h1>
            <p>Providing the best Real Estate services</p>
          </div>
        </div>
        <div className='propertiespagemaincontent'>
            <div className='propertiespagebox'>
              <div className='propertiespageipperbox'>
                <div className='propertiespagebtn'>
                  {['Apartment', 'General', 'Villa'].map((cat) => (
                    <button
                      key={cat}
                      className={selectedCategory === cat ? 'selected-category-btn' : ''}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <div className='propertiespagesearchbar'>
                  <div className='searchbarcontent'><span>Keywoard</span><h4>Looking for?</h4></div>
                  <div className='searchbarcontent'><span>Category</span><h4>Select Category</h4></div>
                  <div className='searchbarcontent'><span>Loaction</span><h4>Location</h4></div>
                  <div className='searchbarlogo'>More</div>
                </div>
                <div className='propertiespagesorting'>
                  <button>Sort By</button>
                </div>
              </div>
              <div className='propertiespagebelowbox'>
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
              </div>
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
