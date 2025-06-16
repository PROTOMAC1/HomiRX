import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section2 from './components/Section2';
import About from './components/About';
import About1 from './components/About1';
import About2 from './components/About2';
import Propertie from './components/Propertie';

function App() {
  return (
    <div className="App">
      <section className="Home">
        <Navbar />
        <Hero />
        <Section2 />
      </section>
      <section className="About">
        <About />
        <About1 />
        <About2 />
      </section>
      <section className='Propertie'>
        <Propertie />
      </section>
    </div>
  );
}

export default App;
