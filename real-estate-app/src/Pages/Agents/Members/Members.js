import React, { useRef, useState, useEffect } from 'react'
import './Members.css'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import OurExpert from '../../../components/OurExpert'
import MembersBgimg from './bg-11.jpg'
import { FaHouseUser, FaPlay } from 'react-icons/fa6'
import ManagementDatas from './BoardOfDirectors'
import CommitteeData from './CommitteeOfHPL'
import Hiddenpage from '../../Hiddenpage'
import { motion, useInView } from 'framer-motion'


export default function Members() {
  const [showVideo, setShowVideo] = useState(false);
  const openVideo = () => {
    setShowVideo(true);
  }

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const [activeTab, setActiveTab] = useState('ManagementDatas');
  const [optionData, setOptionData] = useState([]);

  const handleBtnClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    const tabOption = {
      ManagementDatas,
      CommitteeData
    };
    setOptionData(tabOption[activeTab] || []);
  }, [activeTab]);
  
  return (
    <div className='memberspage'>
      <Navbar />
      <Hiddenpage />
      <section className='managements'>
        <div className='mamagementsview'>
          <div className='managementcontent'>
            <div onClick={() => handleBtnClick('ManagementDatas')} className={`managementbtn ${activeTab === 'ManagementDatas' ? 'active' : ''}`}>Board of Directors</div>
            <div onClick={() => handleBtnClick('CommitteeData')} className={`managementbtn ${activeTab === 'CommitteeData' ? 'active' : ''}`}>Committees of HPL</div>
          </div>
          <div className='managementmain'>
            {optionData.map((groupData, groupIndex) => (
              <div key={groupIndex} className='managementcardgroup'>
                {groupData.data.map((item, index) => (
                  <div key={index} className='managementcard'>
                    <h1 className='managementcardname'>{item.name}</h1>
                    <p className='managementcarddec'>{item.dec}</p>
                    <div className='managementcardimages'>
                      <img src={item.img} alt={`profile-${index+1}`} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='memberspageabout'>
        <div className='memberspagecontent'>
          <motion.div ref={ref}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: 'easeOut' }} className='memberspageleft'>
            <div className='memberspageleftcontent'>
              <p className='abus'>About Us</p>
              <h1>Let's Find The Right Selling Option For You</h1>
              <p className='abcont'>It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the 
                point of using lorem the is Ipsum less normal distribution of letters.</p>
              <button><FaHouseUser /> Explore More</button>
            </div>
          </motion.div>
          <motion.div ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className='memberspageright'>
            <div className='memberspagerightvdo'>
              <img src={MembersBgimg} alt='membersbgimg' />
              <button onClick={openVideo}><FaPlay /></button>
            </div>
          </motion.div>
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
