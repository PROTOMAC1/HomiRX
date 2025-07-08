import React from 'react'
import './OurExpert.css';
import { FaHouseUser } from 'react-icons/fa6';
import Team1 from './Images/Team-Images/team-1.jpg'
import Team2 from './Images/Team-Images/team-2.jpg'
import Team3 from './Images/Team-Images/team-3.jpg'
import Team4 from './Images/Team-Images/team-4.jpg'

const OurExpert = () => {

  const scrollRef = React.useRef(null);

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
          <p className='teams-headings-sub-heading'>Our Expert</p>
          <div className='teams-headings-main'>
            <span className='teams-headings-main-heading'>Meet Our Real Estate Team</span>
            <button className='teams-headings-main-btn'><FaHouseUser /> View All Members</button>
          </div>
        </div>
        <div className='teams-cards-view' ref={scrollRef}>
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
        </div>
        <div className='teams-btn'>
          <div className='teams-btn-left' onClick={scrollLeft}>&#11160;</div>
          <div className='teams-btn-right' onClick={scrollRight}>&#11162;</div>
        </div>
      </div>
    </div>
  )
}

export default OurExpert