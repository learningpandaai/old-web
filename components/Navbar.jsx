import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-header ${scrolled ? 'nav-scrolled' : ''}`}>
      <Link to="hero" smooth={true} duration={500} className="nav-logo">
        <span>LearningPanda</span>
      </Link>
      <div className="nav-links">
        <Link to="product" smooth={true} duration={500} className="nav-link">
          Product
        </Link>
        <Link to="how-it-works" smooth={true} duration={500} className="nav-link">
          How It Works
        </Link>
        <Link to="pricing" smooth={true} duration={500} className="nav-link">
          Pricing
        </Link>
        <Link to="about" smooth={true} duration={500} className="nav-link">
          About
        </Link>
        <Link to="faq" smooth={true} duration={500} className="nav-link">
          FAQ
        </Link>
        <Link to="contact" smooth={true} duration={500} className="nav-link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;