import React, { useEffect, useState } from 'react';
import {
  FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram,
  FaPinterestP, FaHouseUser, FaUserCircle, FaShoppingCart,
  FaSearch, FaBars, FaChevronDown, FaChevronUp
} from 'react-icons/fa';
import './Navbar.css';
import Logo from "./Images/logo.png";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
  const topBar = document.getElementById('topBar');
  const mainNav = document.getElementById('mainNav');

  if (!topBar || !mainNav) return;

  const topBarHeight = topBar.offsetHeight;

  const handleScroll = () => {
    if (window.scrollY === 0) {
      topBar.style.top = '0px';
      mainNav.style.top = `${topBarHeight}px`;
    } else {
      topBar.style.top = `-${topBarHeight}px`;
      mainNav.style.top = '0px';
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  useEffect(() => {
    document.body.style.overflow = menuActive ? 'hidden' : 'auto';
  }, [menuActive]);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="navbar">
      <div className="top-bar" id="topBar">
        <div className="top-bar-left">
          <button><FaEnvelope /> contact@example.com</button>
          <button><FaPhone /> +92 (880) 68396</button>
        </div>
        <div className="top-bar-right">
          <span className="auth"><FaUserCircle /> <button>Sign in</button> or <button className="top-right-btn">Register</button></span>
          <button><FaFacebookF /></button>
          <button><FaTwitter /></button>
          <button><FaInstagram /></button>
          <button><FaPinterestP /></button>
        </div>
      </div>
      <div className="main-nav" id="mainNav">
        <div className="logo"
          style={{
            backgroundImage: `url(${Logo})`
          }}
        ></div>
        <button 
          className="hamburger" 
          onClick={() => setMenuActive(!menuActive)} 
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>
        <ul className={`menu ${menuActive ? 'active' : ''}`}>
          <li className="dropdown" onClick={() => toggleDropdown(0)}>
            Home 
            <span className="arrow">
              {activeDropdown === 0 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            <ul className={`dropdown-menu ${activeDropdown === 0 ? 'active' : ''}`}>
              <li>Home 1</li>
              <li>Home 2</li>
              <li>Home 3</li>
              <li>Home 4</li>
            </ul>
          </li>
          <li className="dropdown" onClick={() => toggleDropdown(1)}>
            Properties 
            <span className="arrow">
              {activeDropdown === 1 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            <ul className={`dropdown-menu ${activeDropdown === 1 ? 'active' : ''}`}>
              <li>Properties</li>
              <li>Properties - Grid View</li>
              <li>Properties - List View</li>
              <li>Properties - Map View</li>
              <li>Property Detail</li>
              <li>Property Detail</li>
              <li>All Category</li>
              <li>All Locations</li>
            </ul>
          </li>
          <li className="dropdown" onClick={() => toggleDropdown(2)}>
            Agents 
            <span className="arrow">
              {activeDropdown === 2 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            <ul className={`dropdown-menu ${activeDropdown === 2 ? 'active' : ''}`}>
              <li>Members</li>
              <li>Agents Pages</li>
              <li>Agent Profile</li>
            </ul>
          </li>
          <li className="dropdown" onClick={() => toggleDropdown(3)}>
            Pages 
            <span className="arrow">
              {activeDropdown === 3 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            <ul className={`dropdown-menu ${activeDropdown === 3 ? 'active' : ''}`}>
              <li>About</li>
              <li>How It Works</li>
              <li>Portfolio</li>
              <li>Shop Page</li>
              <li>Events Page</li>
              <li>Testimonial</li>
              <li>Our Partner</li>
              <li>404 Page</li>
            </ul>
          </li>
          <li className="dropdown" onClick={() => toggleDropdown(4)}>
            News 
            <span className="arrow">
              {activeDropdown === 4 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            <ul className={`dropdown-menu ${activeDropdown === 4 ? 'active' : ''}`}>
              <li>News 01</li>
              <li>News 02</li>
              <li>News 03</li>
            </ul>
          </li>
          <li>Contact</li>
        </ul>
        <div className={`right-btn ${menuActive ? 'active' : ''}`}>
          <button className="cart-btn"><FaShoppingCart /></button>
          <button className="sea-btn"><FaSearch /></button>
          <button className="add-btn"><FaHouseUser /> Add Properties</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;