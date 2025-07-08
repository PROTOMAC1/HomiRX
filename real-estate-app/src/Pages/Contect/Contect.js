import React from "react";
import "./Contect.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaLocationDot, FaEnvelope, FaPhone, FaClock } from "react-icons/fa6";

export default function Contect() {
  const contectCard = [
    {
      icon: <FaLocationDot />,
      heading: "Our Address",
      label: "4517 Washington Ave. Manchester, Kentucky 39495",
    },
    {
      icon: <FaEnvelope />,
      heading: "info@example.com",
      label: "Email us anythime for any kind of querry.",
    },
    {
      icon: <FaPhone />,
      heading: "Hot: (123) 208 666",
      label: "24/7/365 priority Live Chat and ticketing support.",
    },
    {
      icon: <FaClock />,
      heading: "Opening Hour",
      label: (
        <>
          Sunday-Fri: 9 AM - 6 PM <br />
          Saturday: 9 AM - 4PM
        </>
      ),
    },
  ];
  return (
    <div className="contect">
      <Navbar />
      <section className="contect-map-api">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12922.674582990245!2d-86.78513825499746!3d32.99910269247921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888ed2fcbc02f4df%3A0xe19b6392126146c7!2sWessington%2C%20AL%2035040%2C%20USA!5e1!3m2!1sen!2sin!4v1751958586793!5m2!1sen!2sin"
            width="99.7%"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section className="contect-middle">
        <div className="contect-middle-lol">
          {contectCard.map((item, index) => (
            <div className="contect-middle-card" key={index}>
              <div className="contect-middle-icon-bg">
                <span className="contect-middle-icon">{item.icon}</span>
              </div>
              <h1>{item.heading}</h1>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="contect-appointment">
        <div className="contect-appointment-formwrap">
          <div className="contect-appointment-page-left-headings">
            <div className="contect-appointment-subhead">Book Appointment</div>
            <div className="contect-appointment-mainhead">Send Message Anytime</div>
          </div>
          <form className="contect-appointment-form">
            <div className="contect-form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="text" placeholder="Phone Number" required />
            </div>
            <div className="contect-form-row">
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Subject" required />
            </div>
            <textarea placeholder="Write a Message" required />
            <div className="contect-form-button-row">
              <button type="submit">Send a Message</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
