import React from 'react'
import Hiddenimg from '../../components/Images/Properties4.jpg'
import Navbar from '../../components/Navbar'
import Hiddenpage from '../Hiddenpage'
import Prof from './prof.jpg'
import { FaStar } from "react-icons/fa"
import './Pagepage.css'
import Footer from '../../components/Footer'

export default function Pagepage() {
  return (
    <div>
        <Navbar />
        <Hiddenpage />
        <section>
            
            <div className='header'>
              <div className='testimonials-page'>
                <p>
                  Testimonials
                </p>
                <h1>
                  What Our Clients Say?
                </h1>
              </div>
              <div className='cards-div'>
                <div className='cards'>
                  <div className='item'>
                    <div className='item-content'>
                      <div className='testimonials-img'><img src={Prof} alt="" /></div>
                      <div className='testimonials-info'>
                        <p>Christine Eve</p>
                        <p>Founder & CEO</p>
                        <div>
                          <FaStar style={{color: 'orange'}} />
                          <FaStar style={{color: 'orange'}} />
                          <FaStar style={{color: 'orange'}} />
                          <FaStar style={{color: 'orange'}} />
                          <FaStar style={{color: 'orange'}} />
                        </div>
                      </div>
                    </div>
                    <div className='testimonial-text'>
                      Duis rhoncus orci utedn metus rhoncus, non is dictum purus bibendum. Suspendisse id orci sit amet justo interdum hendrerit sagittis.
                    </div>
                  </div>
                  <div className='item'>
                    <div className='item-content'>
                      <div className='testimonials-img'><img src={Prof} alt="" /></div>
                      <div className='testimonials-info'>
                        <p>Christine Eve</p>
                        <p>Founder & CEO</p>
                        <div>
                          <FaStar style={{color: 'orange'}} />
                          <FaStar style={{color: 'orange'}} />
                          <FaStar style={{color: 'orange'}} />
                          <FaStar style={{color: 'orange'}} />
                          <FaStar style={{color: 'orange'}} />
                        </div>
                      </div>
                    </div>
                    <div className='testimonial-text'>
                      Duis rhoncus orci utedn metus rhoncus, non is dictum purus bibendum. Suspendisse id orci sit amet justo interdum hendrerit sagittis.
                    </div>
                  </div>
                  <div className='item'>
                    <div className='item-content'>
                      <div className='testimonials-img'><img src={Prof} alt="" /></div>
                      <div className='testimonials-info'>
                        <p>Christine Eve</p>
                        <p>Founder & CEO</p>
                        <div>
                          <FaStar style={{color: 'orange'}} />
                          <FaStar style={{color: 'orange'}} />
                          <FaStar style={{color: 'orange'}} />
                          <FaStar style={{color: 'orange'}} />
                          <FaStar style={{color: 'orange'}} />
                        </div>
                      </div>
                    </div>
                    <div className='testimonial-text'>
                      Duis rhoncus orci utedn metus rhoncus, non is dictum purus bibendum. Suspendisse id orci sit amet justo interdum hendrerit sagittis.
                    </div>
                  </div>
                  <div className='item'>
                    <div className='item-content'>
                      <div className='testimonials-img'><img src={Prof} alt="" /></div>
                      <div className='testimonials-info'>
                        <p>Christine Eve</p>
                        <p>Founder & CEO</p>
                        <div>
                          <FaStar style={{color: 'orange'}} />
                          <FaStar style={{color: 'orange'}} />
                          <FaStar style={{color: 'orange'}} />
                          <FaStar style={{color: 'orange'}} />
                          <FaStar style={{color: 'orange'}} />
                        </div>
                      </div>
                    </div>
                    <div className='testimonial-text'>
                      Duis rhoncus orci utedn metus rhoncus, non is dictum purus bibendum. Suspendisse id orci sit amet justo interdum hendrerit sagittis.
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section className='pagepagefooter'>
            <Footer />
        </section>
    </div>
  )
}
