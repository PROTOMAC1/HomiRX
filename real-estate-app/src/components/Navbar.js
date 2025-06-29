import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
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
  const menuRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          !event.target.closest('.hamburger')) {
        setMenuActive(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (index) => {
    if (window.innerWidth <= 928) {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  const handleMenuClick = (e) => {
    if (window.innerWidth <= 928) {
      e.stopPropagation();
    }
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    if (!menuActive) {
      setActiveDropdown(null);
    }
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
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>
        <ul 
          ref={menuRef}
          className={`menu ${menuActive ? 'active' : ''}`}
          onClick={handleMenuClick}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown" onClick={() => toggleDropdown(1)}>
            Properties 
            <span className="arrow">
              {activeDropdown === 1 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            <ul className={`dropdown-menu ${activeDropdown === 1 ? 'active' : ''}`}>
              <li>
                <Link to="/properties">Properties</Link>
              </li>
              <li>
                <Link to="/propertiesdetails">Property Detail</Link>
              </li>
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
              <li>Shop Page</li>
              <li>Events Page</li>
              <li>Testimonial</li>
              <li>Our Partner</li>
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