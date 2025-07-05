import React from 'react'
import './EventPage.css'
import Navbar from '../../../components/Navbar'
import Hiddenimg from '../../Hiddenpage'
import Footer from '../../../components/Footer'

export default function EventPage() {
  return (
    <>
        <Navbar />
        <Hiddenimg />
        <section className='eventpagemain'>
          <div className='event-grid'>
            {/* Event Card 1 */}
            <div className='event-card'>
              <img src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' alt='Architecture Club meetup' />
              <div className='event-date-badge'><span>11</span><br/>DEC</div>
              <div className='event-card-info'>
                <div className='event-card-meta'>⏰ December 11 @ 8:00 am</div>
                <div className='event-card-title'>Architecture Club meetup</div>
              </div>
            </div>
            {/* Event Card 2 */}
            <div className='event-card'>
              <img src='https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80' alt='Architecture Week' />
              <div className='event-date-badge'><span>11</span><br/>DEC</div>
              <div className='event-card-info'>
                <div className='event-card-meta'>⏰ December 11 @ 8:00 am</div>
                <div className='event-card-title'>Architecture Week</div>
              </div>
            </div>
            {/* Event Card 3 */}
            <div className='event-card'>
              <img src='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80' alt='Festival of Architecture and Interior' />
              <div className='event-date-badge'><span>11</span><br/>DEC</div>
              <div className='event-card-info'>
                <div className='event-card-meta'>⏰ December 11 @ 8:00 am</div>
                <div className='event-card-title'>Festival of Architecture and Interior</div>
              </div>
            </div>
            {/* Event Card 4 */}
            <div className='event-card'>
              <img src='https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=400&q=80' alt='Designing Club Culture' />
              <div className='event-date-badge'><span>11</span><br/>DEC</div>
              <div className='event-card-info'>
                <div className='event-card-meta'>⏰ December 11 @ 8:00 am</div>
                <div className='event-card-title'>Designing Club Culture</div>
              </div>
            </div>
            {/* Event Card 5 */}
            <div className='event-card'>
              <img src='https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80' alt='Nairobi Design Week' />
              <div className='event-date-badge'><span>11</span><br/>DEC</div>
              <div className='event-card-info'>
                <div className='event-card-meta'>⏰ December 11 @ 8:00 am</div>
                <div className='event-card-title'>Nairobi Design Week</div>
              </div>
            </div>
            {/* Event Card 6 */}
            <div className='event-card'>
              <img src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' alt='International Architecture 2025' />
              <div className='event-date-badge'><span>11</span><br/>DEC</div>
              <div className='event-card-info'>
                <div className='event-card-meta'>⏰ December 11 @ 8:00 am</div>
                <div className='event-card-title'>International Architecture 2025</div>
              </div>
            </div>
          </div>
        </section>
        <section className='eventpagefooter'>
            <Footer />
        </section>
    </>
  )
}
