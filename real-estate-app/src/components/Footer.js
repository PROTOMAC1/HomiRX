import React from 'react'
import './Footer.css';
import Footerlogo from './Images/logo.png';
import { FaLocationDot, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';
import gallery1 from './Images/Gallery/gallery-1.jpg'
import gallery2 from './Images/Gallery/gallery-2.jpg'
import gallery3 from './Images/Gallery/gallery-3.jpg'
import gallery4 from './Images/Gallery/gallery-4.jpg'
import gallery5 from './Images/Gallery/gallery-5.jpg'
import gallery6 from './Images/Gallery/gallery-5.jpg'

function Footer() {
    const Galleryimages = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6
    ];
    
  return (
    <div className='footer'>
        <div className='footer-upper-space'></div>
        <div className='footer-upper'>
            <div className='footer-address'>
                <div className='icon-border'>
                    <span><FaLocationDot /></span>
                </div>
                <div className='margin-minus-footer-upper'>
                    <p>Address</p>
                    <h1>6391 Elgin St, Delaware</h1>
                </div>
            </div>
            <div className='footer-email'>
                <div className='icon-border'>
                    <span><FaEnvelope /></span>
                </div>
                <div className='margin-minus-footer-upper'>
                    <p>Send Email</p>
                    <h1>contact@example.com</h1>
                </div>
            </div>
            <div className='footer-phone'>
                <div className='icon-border'>
                    <span><FaPhone /></span>
                </div>
                <div className='margin-minus-footer-upper'>
                    <p>Call Emergency</p>
                    <h1>+88 0123 654 99</h1>
                </div>
            </div>
        </div>
        <div className='footer-middle'>
            <div className='footer-middle-1'>
                <div className='footer-logo' style={{backgroundImage: `url(${Footerlogo})`}}></div>
                <p>Nullam interdum libero vitae pretium aliquam donec nibh purus laoreet in ullamcorper vel malesuada sit amet enim.</p>
                <div>
                    <span>Follow on</span>
                    <span><FaFacebook /></span>
                    <span><FaTwitter /></span>
                    <span><FaLinkedinIn /></span>
                    <span><FaInstagram /></span>
                </div>
            </div>
            <div className='footer-middle-2'>
                <h2>Quick Link</h2>
                <div></div>
                <p>Startup Business</p>
                <p>Financial Advice</p>
                <p>Management</p>
                <p>Business Advice</p>
                <p>Strategy Services</p>
            </div>
            <div className='footer-middle-3'>
                <h2>Discover</h2>
                <div></div>
                <p>About</p>
                <p>Our Team</p>
                <p>Testimonials</p>
                <p>Gallery</p>
                <p>Contact</p>
            </div>
            <div className='footer-middle-4'>
                <h2>Gallery</h2>
                <div></div>
                <div className='gallery-img-box'>
                    {Galleryimages.map((gimg, index) => (
                        <div key={index}>
                            <img src={gimg} alt={`img ${index + 1}`}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className='footer-below'>
            <div className='footer-below-left'><p>© 2024 Copyrights by AjinkyaSasne. All Rights Reserved</p></div>
            <div className='footer-below-right'>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer