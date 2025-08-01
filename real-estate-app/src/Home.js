import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section2 from './components/Section2';
import About from './components/About';
import About1 from './components/About1';
import About2 from './components/About2';
import Propertie from './components/Propertie';
import OurExpert from './components/OurExpert';
import Bookproperties from './components/Bookproperties';
import Testimonial from './components/Testimonial';
import Appointment from './components/Appointment';
import Blog from './components/Blog';
import Footer from './components/Footer';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section2 />
      <About />
      <About1 />
      <About2 />
      <Propertie />
      <OurExpert />
      <Bookproperties />
      <Testimonial />
      <Appointment />
      <Blog />
      <Footer />
    </div>
  );
}

export default Home