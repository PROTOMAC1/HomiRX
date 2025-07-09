import React, { useState, useEffect } from 'react'
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

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 750);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ width: '100%', backgroundColor: '#16243E', color: '#fff' }}>
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
                        <div className='footer-logo' style={{ backgroundImage: `url(${Footerlogo})` }}></div>
                        <p>Nullam interdum libero vitae pretium aliquam donec nibh purus laoreet in ullamcorper vel malesuada sit amet enim.</p>
                        <div className='follow-on'>
                            <span className='letter'>Follow on</span>
                            <span className='social-link'><FaFacebook /></span>
                            <span className='social-link'><FaTwitter /></span>
                            <span className='social-link'><FaLinkedinIn /></span>
                            <span className='social-link'><FaInstagram /></span>
                        </div>
                    </div>
                    <div className='footer-middle-2'>
                        <h2>Quick Link</h2>
                        <div className='bottom-line'></div>
                        <p><span className='symbol-color'>&#8811; </span>Startup Business</p>
                        <p><span className='symbol-color'>&#8811; </span>Financial Advice</p>
                        <p><span className='symbol-color'>&#8811; </span>Management</p>
                        <p><span className='symbol-color'>&#8811; </span>Business Advice</p>
                        <p><span className='symbol-color'>&#8811; </span>Strategy Services</p>
                    </div>
                    <div className='footer-middle-3'>
                        <h2>Discover</h2>
                        <div className='bottom-line'></div>
                        <p><span className='symbol-color'>&#8811; </span>About</p>
                        <p><span className='symbol-color'>&#8811; </span>Our Team</p>
                        <p><span className='symbol-color'>&#8811; </span>Testimonials</p>
                        <p><span className='symbol-color'>&#8811; </span>Gallery</p>
                        <p><span className='symbol-color'>&#8811; </span>Contact</p>
                    </div>
                    <div className='footer-middle-4'>
                        <h2>Gallery</h2>
                        <div className='bottom-line-4'></div>
                        <div className='gallery-img-box'>
                            {isMobile ? (
                                // Single column for mobile
                                <div className='gallery-column'>
                                    {Galleryimages.slice(0, 6).map((gimg, index) => (
                                        <div key={index} className='gallery-cell'>
                                            {gimg && (
                                                <img className='image-size' src={gimg} alt={`img ${index + 1}`} />
                                            )}
                                            <div className='overlay'></div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                // 3 columns for desktop
                                [0, 1, 2].map(col => (
                                    <div className='gallery-column' key={col}>
                                        {[0, 1].map(row => {
                                            const index = row * 3 + col;
                                            const gimg = Galleryimages.slice(0, 6)[index];
                                            return (
                                                <div key={row} className='gallery-cell'>
                                                    {gimg && (
                                                        <img className='image-size' src={gimg} alt={`img ${index + 1}`} />
                                                    )}
                                                    <div className='overlay'></div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                <div className='footer-below'>
                    <div className='footer-below-left'><p>© 2024 Copyrights by AjinkyaSasne. All Rights Reserved</p></div>
                    <div className='footer-below-right'><p>Terms & Conditions</p>&nbsp;<p>Privacy Policy</p></div>
                </div>
            </div>
        </div>
    )
}

export default Footer