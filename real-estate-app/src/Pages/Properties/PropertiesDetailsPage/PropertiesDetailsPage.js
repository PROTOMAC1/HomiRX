import React, { useRef } from 'react'
import './PropertiesDetailsPage.css'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Hiddenpage from '../../Hiddenpage'
import About2 from '../../../components/About2'
import { FaHeart, FaLocationDot, FaShareFromSquare } from 'react-icons/fa6'
import { motion, useInView } from 'framer-motion'

export default function PropertiesDetailsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  return (
    <div>
        <Navbar />
        <Hiddenpage />
        <section className='propertiesdetailsmain'>
            <div className='propertiesdetailsheadings'>
                <motion.div ref={ref}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: 'easeOut' }}>
                  <h1>Elevation Small Apartments</h1>
                  <p style={{color: 'gray'}}><FaLocationDot style={{color: 'orangered'}} />18 Broklyn Street, New York</p>
                </motion.div>
                <motion.div className='propertiesdetailsheadingsbtn'>
                  <button><FaHeart /></button>
                  <button><FaShareFromSquare style={{color: 'rgb(221, 221, 221)'}} /> Share</button>
                  <button>Report</button>
                </motion.div>
            </div>
            <div className='propertiesdetailsbottemmain'>
              <div className='propertiesdetailsleft'>
                {/* Main Image */}
                <div className='property-main-image'>
                  <img src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' alt='Property' />
                </div>
                {/* Gallery */}
                <div className='property-gallery'>
                  <img src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80' alt='Gallery1' />
                  <img src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=200&q=80' alt='Gallery2' />
                  <img src='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=200&q=80' alt='Gallery3' />
                  <img src='https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=200&q=80' alt='Gallery4' />
                  <img src='https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=200&q=80' alt='Gallery5' />
                </div>
                {/* Tags */}
                <div className='property-tags'>
                  <span>For Rent</span>
                  <span>Apartment</span>
                  <span>Melbourne</span>
                </div>
                {/* Overview */}
                <div className='property-overview'>
                  <h3>Overview</h3>
                  <div className='overview-grid'>
                    <div><strong>Number ID</strong><br/>12345</div>
                    <div><strong>Type</strong><br/>Apartment</div>
                    <div><strong>Build Year</strong><br/>2020</div>
                    <div><strong>Bed</strong><br/>5</div>
                    <div><strong>Bath</strong><br/>2</div>
                    <div><strong>Size</strong><br/>1860 sqft</div>
                  </div>
                </div>
                {/* Description */}
                <div className='property-description-'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.</p>
                  <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</p>
                </div>
                {/* Features & Amenities */}
                <div className='property-features'>
                  <h3>Features & Amenities</h3>
                  <div className='features-list'>
                    <span>❄️ Air Conditioning</span>
                    <span>🧺 Washer and dryer</span>
                    <span>🏊 Swimming Pool</span>
                    <span>🏀 Basketball</span>
                    <span>🔒 24x7 Security</span>
                    <span>🌬️ Central Air</span>
                    <span>🎬 Media Room</span>
                    <span>🎲 Indoor Game</span>
                  </div>
                </div>
                {/* Location Map */}
                <div className='property-location'>
                  <h3>Location</h3>
                  <img src='https://maps.googleapis.com/maps/api/staticmap?center=Central+Park,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:C%7C40.785091,-73.968285&key=YOUR_API_KEY' alt='Map' style={{width:'100%',borderRadius:'1em'}} />
                  <div className='location-address'>18 Brooklyn Street, New York</div>
                </div>
                {/* Floor Plan */}
                <div className='property-floorplan'>
                  <h3>Floor Plan</h3>
                  <div className='floorplan-tabs'>
                    <button className='active'>First Floor</button>
                    <button>Second Floor</button>
                    <button>Third Floor</button>
                  </div>
                  <div className='floorplan-image'>
                    <img src='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80' alt='Floor Plan' />
                  </div>
                  <div className='floorplan-desc'>
                    <p>Consectetur adipiscing elit pellentesque sodales dictum tempus. Quisquemos augua vel venonatis neque potenti convallis nulla fringilla felis.</p>
                  </div>
                </div>
                {/* Reviews */}
                <div className='property-reviews'>
                  <h3>Review</h3>
                  <div className='review-summary'>
                    <span className='review-score'>4 ★</span>
                    <span>18 Reviews</span>
                    <button className='review-login'>Login To Write Your Review</button>
                  </div>
                  <div className='review-list'>
                    <div className='review-item'>
                      <div className='review-user'>
                        <img src='https://randomuser.me/api/portraits/men/32.jpg' alt='user' />
                        <div>
                          <div className='review-username'>admin</div>
                          <div className='review-date'>8 November, 2024</div>
                        </div>
                      </div>
                      <div className='review-text'>Decent place with great service staff but the hotel lacks charm and also they do not have proper security.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='propertiesdetailsright'>
                {/* Author Info */}
                <div className='property-author-card'>
                  <img src='https://randomuser.me/api/portraits/men/32.jpg' alt='author' className='author-img' />
                  <div className='author-info'>
                    <div className='author-name'>Admin</div>
                    <div className='author-member'>Member since 8 months ago</div>
                    <div className='author-contact'>
                      <div>📍 21 Monroe Ave, Rochester NY</div>
                      <div>📞 888 666 111</div>
                      <div>✉️ contact@example.com</div>
                      <div>🌐 http://example.com</div>
                    </div>
                    <div className='author-socials'>
                      <span>🌐</span>
                      <span>✖️</span>
                      <span>🔗</span>
                      <span>▶️</span>
                    </div>
                    <button className='author-profile-btn'>View Profile</button>
                  </div>
                </div>
                {/* Property Contact */}
                <div className='property-contact-card'>
                  <h4>Property Contact</h4>
                  <div><b>Address:</b> 18 Brooklyn Street, New York</div>
                  <div><b>Phone:</b> +84-666-888-99</div>
                  <div><b>Email:</b> contact@example.com</div>
                  <div><b>Website:</b> https://example.com</div>
                  <div className='property-contact-socials'>
                    <span>🌐</span>
                    <span>✖️</span>
                    <span>🔗</span>
                    <span>▶️</span>
                  </div>
                </div>
                {/* Contact Listing Owner */}
                <div className='property-contact-form'>
                  <h4>Contact Listing Owner</h4>
                  <form>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='Email' />
                    <textarea placeholder='Message'></textarea>
                    <button type='submit'>Submit Now</button>
                  </form>
                </div>
              </div>
            </div>
        </section>
        <section className='propertiesdetailsabout2'>
          <About2 />
        </section>
        <section className='propertiesdetailsfooter'>
            <Footer />
        </section>
    </div>
  )
}
