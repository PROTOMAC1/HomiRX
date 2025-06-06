import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section2 from './components/Section2';
import About from './components/About';

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
      </section>
    </div>
  );
}

export default App;
