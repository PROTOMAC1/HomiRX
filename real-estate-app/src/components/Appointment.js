import React from 'react'
import './Appointment.css'

function Appointment() {
  return (
    <div className='appointment-body'>
        <div className='appointment-page'>
            <div className='appointment-page-left'>
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
            </div>
            <div className='appointment-page-right'>
                <div className='appointment-page-right-card background-cover'>
                    <div className='appointment-card-content'>
                        <p>Address:</p>
                        <h1>6391 Elgin St. Celina.</h1>
                        <p>Post Code:</p>
                        <h1>14235</h1>
                        <button>Direction</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Appointment