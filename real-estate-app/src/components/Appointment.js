import React, { useRef } from 'react'
import './Appointment.css'
import { motion, useInView } from 'framer-motion'

function Appointment() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
  return (
    <div className='appointment-body'>
        <div className='appointment-page'>
            <motion.div ref={ref}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: 'easeOut' }}  className='appointment-page-left'>
                <div className='appointment-page-left-headings'>
                    <h5>Book Appointment</h5>
                    <h1>Send Message Anytime</h1>
                </div>
                <div className='appointment-page-left-form'>
                    <form>
                        <div className='form-row'>
                            <input type='text' placeholder='Full Name*' required />
                            <input type='email' placeholder='Gmail Address*' required/>
                        </div>
                        <select required>
                            <option value='' disabled selected>Select Real Estate</option>
                            <option value='real-estate-1'>Real Estate 1</option>
                            <option value='real-estate-2'>Real Estate 2</option>
                        </select>
                        <textarea placeholder='Your Message' required />
                        <div className='form-button-row'>
                            <button type='submit'>Submit Message</button>
                        </div>
                    </form>
                </div>
            </motion.div>
            <motion.div ref={ref}
                  initial={{ x: 100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: 'easeOut' }}  className='appointment-page-right'>
                <div className='appointment-page-right-card background-cover'>
                    <div className='appointment-card-content'>
                        <p>Address:</p>
                        <h1>6391 Elgin St. Celina.</h1>
                        <p>Post Code:</p>
                        <h1>14235</h1>
                        <button>Direction</button>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Appointment