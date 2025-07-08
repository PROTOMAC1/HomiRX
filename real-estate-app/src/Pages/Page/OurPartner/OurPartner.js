import React from 'react'
import './OurPartner.css'
import { Link } from 'react-router-dom'
import Navbar from '../../../components/Navbar'
import Hiddenpage from '../../Hiddenpage'
import Footer from '../../../components/Footer'

export default function OurPartner() {
  const ourCard = [
    {
      logo: require('../../../components/Images/Brand-Images/brand-1.png'),
      name: 'CodeCanyon',
      description: 'Company Limited Liability Homirx Platform',
      details: 'Envato is proudly based in Melbourne, AU, but our people and community live and work from all over the world.',
      link: '#',
    },
    {
      logo: require('../../../components/Images/Brand-Images/brand-2.png'),
      name: '3DOcean',
      description: 'Company Limited Liability Homirx Platform',
      details: 'Envato is proudly based in Melbourne, AU, but our people and community live and work from all over the world.',
      link: '#',
    },
    {
      logo: require('../../../components/Images/Brand-Images/brand-3.png'),
      name: 'GraphicRiver',
      description: 'Company Limited Liability Homirx Platform',
      details: 'Envato is proudly based in Melbourne, AU, but our people and community live and work from all over the world.',
      link: '#',
    },
    {
      logo: require('../../../components/Images/Brand-Images/brand-4.png'),
      name: 'AudioJungle',
      description: 'Company Limited Liability Homirx Platform',
      details: 'Envato is proudly based in Melbourne, AU, but our people and community live and work from all over the world.',
      link: '#',
    },
  ];

  const sidebarMenu = [
    { label: 'Our Shop', to: '/shoppage' },
    { label: 'Events Page', to: '/eventpage' },
    { label: 'Our Partner', to: '/ourpartner' },
    { label: 'Contact', to: '/contact' }
  ];

  return (
    <div>
      <Navbar />
      <Hiddenpage />
      <section className='ourpartnermain'>
        <div className='ourpartner-flex'>
          <div className='ourpartnermaincontent'>
            {ourCard.map((partner, idx) => (
              <div className='partner-card' key={idx}>
                <div className='partner-logo'><img src={partner.logo} alt={partner.name} /></div>
                <div className='partner-title'>{partner.name}</div>
                <div className='partner-desc'>{partner.description}</div>
                <div className='partner-details'>{partner.details}</div>
                <a className='partner-link' href={partner.link}>Read More <span>&rarr;</span></a>
              </div>
            ))}
          </div>
          <div className='ourpartner-sidebar'>
            <div className='ourpartner-menu'>
              {sidebarMenu.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  className={`sidebar-menu-item${item.label === 'Our Partner' ? ' active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className='ourpartner-consult'>
              <div className='consult-title'>Get Free Consultations</div>
              <div className='consult-sub'>SPECIAL ADVISORS</div>
              <div className='consult-desc'>Quis autem vel eum iure repreh ende</div>
              <button className='consult-btn'>Get A Quote</button>
            </div>
          </div>
        </div>
      </section>
      <div className='ourpartner-story-section-styling'>
        <div className='ourpartner-story-section'>
          <div className='story-content'>
            <div className='story-left'>Your story starts from here<br /><span>Let's visit the best places</span></div>
            <button className='story-btn'>Make it Happen</button>
          </div>
        </div>
      </div>
      <section className='ourpartnerfooter'>
        <Footer />
      </section>
    </div>
  )
}
