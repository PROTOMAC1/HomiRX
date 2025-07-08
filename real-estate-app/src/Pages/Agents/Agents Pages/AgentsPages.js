import React from 'react'
import './AgentsPages.css'
import Navbar from '../../../components/Navbar'
import About from '../../../components/About'
import Footer from '../../../components/Footer'
import agentprofile from './profileagent.jpg'
import Hiddenpage from '../../Hiddenpage'

export default function AgentsPages() {
  const AgentCard = [
    {
      img: agentprofile,
      gmail: '11111',
      btnlink: '1111'
    },
    {
      img: agentprofile,
      gmail: 'abc@gmail.com',
      btnlink: '1211'
    },
    {
      img: agentprofile,
      gmail: 'xyz@gmail.com',
      btnlink: '1311'
    },
    {
      img: agentprofile,
      gmail: '11111',
      btnlink: '1111'
    },
    {
      img: agentprofile,
      gmail: '11111',
      btnlink: '1111'
    },
    {
      img: agentprofile,
      gmail: '11111',
      btnlink: '1111'
    }
  ]
  return (
    <div>
      <Navbar />
      <Hiddenpage />
      <section className='agents'>
        <div className='agentscontent'>
          <div className='agentsabove'>
            <p className='agentsabovesubheading'>Our Expert</p>
            <p className='agentsaboveheading'>Meet All Our Agencies</p>
          </div>
          <div className='agentsbelow'>
            {AgentCard.map((agents, index)=>(
              <div key={index} className='agentcard'>
                <div className='agentcardimg'><img src={agents.img} alt={`agents-${index+1}`} /></div>
                <h1 className='agentcardgmail'>{agents.gmail}</h1>
                <button className='agentcardbtn'>View All Listings</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <About />
      <section className='agentspagesfooter'>
        <Footer />
      </section>
    </div>
  )
}
