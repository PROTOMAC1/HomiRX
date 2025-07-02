import React from 'react'
import './AllCategorys.css'
import Navbar from '../../components/Navbar'
import About from '../../components/About'
import Footer from '../../components/Footer'

export default function AllCategorys() {
  return (
    <div className='allcategorybody'>
        <Navbar />
        <div className='allcategoryhidden'></div>
        <section className='allcategorymain'>
            <div className='allcategorymainsubname'>
                <p>Facilities</p>
                <h1>Top Categories</h1>
                <div className='allcategorybtn'>
                    <button>All</button>
                    <button>Apartment</button>
                    <button>General</button>
                    <button>Villa</button>
                </div>
                <div>
                    
                </div>
            </div>
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
