import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram,
  FaPinterestP, FaHouseUser, FaUserCircle, FaShoppingCart,
  FaSearch, FaBars, FaChevronDown, FaChevronUp
} from 'react-icons/fa';
import './Navbar.css';
import { motion } from 'framer-motion';
import Logo from "./Images/logo.png";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <motion.div 
        className="top-bar" 
        id="topBar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>
      <motion.div 
        className="main-nav" 
        id="mainNav"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}  
      >
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
          <motion.li whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }} transition={{ duration: 0.4 }}>
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }} transition={{ duration: 0.4 }} className="dropdown" onClick={() => toggleDropdown(1)}>
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
              <li>
                <Link to="/allcategorys">All Category</Link>
              </li>
            </ul>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }} transition={{ duration: 0.4 }} className="dropdown" onClick={() => toggleDropdown(2)}>
            Agents 
            <span className="arrow">
              {activeDropdown === 2 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            <ul className={`dropdown-menu ${activeDropdown === 2 ? 'active' : ''}`}>
              <li>
                <Link to="/members">Members</Link>
              </li>
              <li>
                <Link to="/agentspages">Agents Pages</Link>
              </li>
              <li>
                <Link to="/agentsprofile">Agent Profile</Link>
              </li>
            </ul>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }} transition={{ duration: 0.4 }} className="dropdown" onClick={() => toggleDropdown(3)}>
            Pages 
            <span className="arrow">
              {activeDropdown === 3 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            <ul className={`dropdown-menu ${activeDropdown === 3 ? 'active' : ''}`}>
              <li>
                <Link to='/shoppage'>Shop Page</Link>
              </li>
              <li>
                <Link to='/eventpage'>Events Page</Link>
              </li>
              <li>
                <Link to="/pagepage">Testimonial</Link>
              </li>
              <li>
                <Link to='/ourpartner'>Our Partner</Link>
              </li>
            </ul>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }} transition={{ duration: 0.4 }}>
            <Link to='/contect'>Contact</Link>
          </motion.li>
        </ul>
        <div className={`right-btn ${menuActive ? 'active' : ''}`}>
          <motion.button className="cart-btn" whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }} transition={{ duration: 0.4 }}><FaShoppingCart /></motion.button>
          <motion.button className="sea-btn" whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }} transition={{ duration: 0.4 }}><FaSearch /></motion.button>
          <motion.button className="add-btn" whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }} transition={{ duration: 0.4 }}><FaHouseUser /> Add Properties</motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;