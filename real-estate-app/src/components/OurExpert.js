import React, { useRef } from 'react'
import './OurExpert.css';
import { FaHouseUser } from 'react-icons/fa6';
import Team1 from './Images/Team-Images/team-1.jpg'
import Team2 from './Images/Team-Images/team-2.jpg'
import Team3 from './Images/Team-Images/team-3.jpg'
import Team4 from './Images/Team-Images/team-4.jpg'
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const OurExpert = () => {
  const scrollRef = React.useRef(null);
  const isInView = useInView(scrollRef, {once: true});


  const scrollAmount = 430; // 410 card + 20 gap

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const TeamsData = [
    {
      img: Team1,
      name: 'Savannah Nguyen',
      phno: '(0123) 456 789'
    },
    {
      img: Team2,
      name: 'Annette Black',
      phno: '(0123) 456 789'
    },
    {
      img: Team3,
      name: 'Kathryn Murphy',
      phno: '(0123) 456 789'
    },
    {
      img: Team4,
      name: 'David Hardson',
      phno: '(0123) 456 789'
    },
    {
      img: Team1,
      name: 'Fred Andrew',
      phno: '(0123) 456 789'
    }
  ];

  return (
    <div className='teams-body'>
      <div className='teams-page'>
        <div className='teams-headings'>
          <motion.p ref={scrollRef}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className='teams-headings-sub-heading'>Our Expert</motion.p>
          <div className='teams-headings-main'>
            <motion.span ref={scrollRef}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className='teams-headings-main-heading'>Meet Our Real Estate Team</motion.span>
            <motion.button ref={scrollRef}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className='teams-headings-main-btn'><FaHouseUser /> <Link to="/members" className='link-btn-ourexpert'>View All Members</Link></motion.button>
          </div>
        </div>
        <motion.div ref={scrollRef}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className='teams-cards-view'>
          {TeamsData.map((Teams, index) =>(
            <div key={index} className='Teams-crads'>
              <div className='teams-cards-img'>
                <img src={Teams.img} alt={`Teams ${index + 1}`} />
              </div>
              <div className='teams-contents'>
                <p className='teams-name'>{Teams.name}</p>
                <p className='teams-phonenumbers'>Call: <span>{Teams.phno}</span></p>
              </div>
            </div>
          ))}
        </motion.div>
        <div className='teams-btn'>
          <div className='teams-btn-left' onClick={scrollLeft}>&#11160;</div>
          <div className='teams-btn-right' onClick={scrollRight}>&#11162;</div>
        </div>
      </div>
    </div>
  )
}

export default OurExpert