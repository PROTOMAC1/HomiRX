import React, { useRef } from 'react'
import './AgentsPages.css'
import Navbar from '../../../components/Navbar'
import About from '../../../components/About'
import Footer from '../../../components/Footer'
import agentprofile from './profileagent.jpg'
import Hiddenpage from '../../Hiddenpage'
import { motion, useInView } from 'framer-motion'

export default function AgentsPages() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
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
            <motion.p ref={ref}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: 'easeOut' }} className='agentsabovesubheading'>Our Expert</motion.p>
            <motion.p className='agentsaboveheading'>Meet All Our Agencies</motion.p>
          </div>
          <motion.div ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className='agentsbelow'>
            {AgentCard.map((agents, index)=>(
              <div key={index} className='agentcard'>
                <div className='agentcardimg'><img src={agents.img} alt={`agents-${index+1}`} /></div>
                <h1 className='agentcardgmail'>{agents.gmail}</h1>
                <button className='agentcardbtn'>View All Listings</button>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <About />
      <section className='agentspagesfooter'>
        <Footer />
      </section>
    </div>
  )
}
