import React, { useState } from 'react'
import './Members.css'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import OurExpert from '../../../components/OurExpert'
import MembersBgimg from './bg-11.jpg'
import { FaHouseUser, FaPlay } from 'react-icons/fa6'
import Hiddenpage from '../../Hiddenpage'

export default function Members() {
  const [showVideo, setShowVideo] = useState(false);
  const openVideo = () => {
    setShowVideo(true);
  }
  
  return (
    <div className='memberspage'>
      <Navbar />
      <Hiddenpage />
      <OurExpert />
      <section className='memberspageabout'>
        <div className='memberspagecontent'>
          <div className='memberspageleft'>
            <div className='memberspageleftcontent'>
              <p className='abus'>About Us</p>
              <h1>Let's Find The Right Selling Option For You</h1>
              <p className='abcont'>It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the 
                point of using lorem the is Ipsum less normal distribution of letters.</p>
              <button><FaHouseUser /> Explore More</button>
            </div>
          </div>
          <div className='memberspageright'>
            <div className='memberspagerightvdo'>
              <img src={MembersBgimg} alt='membersbgimg' />
              <button onClick={openVideo}><FaPlay /></button>
            </div>
          </div>
        </div>
        { showVideo && (
          <div className="video-overlay" onClick={() => setShowVideo(false)}>
            <div className="videocontainer" onClick={e => e.stopPropagation()}>
              <iframe 
                width="100%" 
                height="415" 
                src="https://www.youtube.com/embed/QmfVLaBan5I?si=hs08WcSRB9J8Fw71" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen></iframe>
            </div>
          </div>
        )}
      </section>
      <section className='membersfooter'>
        <Footer />
      </section>
    </div>
  )
}
