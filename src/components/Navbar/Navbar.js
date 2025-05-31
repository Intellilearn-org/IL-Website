// src/components/Navbar/Navbar.js
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Link as ScrollLink } from 'react-scroll';
import logoSrc from '../../assets/images/logo.png';
import { hackathonBannerHeight } from '../HackathonBanner/HackathonBanner';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbarHeightPixels = 70; 
  const totalFixedHeaderHeight = parseInt(hackathonBannerHeight, 10) + navbarHeightPixels;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > parseInt(hackathonBannerHeight, 10));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
     setIsMobileMenuOpen(false);
  }

  const scrollProps = {
    spy: true,
    smooth: true,
    offset: -totalFixedHeaderHeight,
    duration: 500,
    onClick: closeMobileMenu
  };

  return (
    <nav 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      style={{ top: hackathonBannerHeight }}
    >
      <div className={`container ${styles.navbarContainer}`}>
        <ScrollLink 
          to="hero"
          spy={true}
          smooth={true}
          offset={-totalFixedHeaderHeight}
          duration={500}
          className={styles.logo}
          onClick={closeMobileMenu}
        >
          <img src={logoSrc} alt="IntelliLearn Logo" className={styles.logoImage} />
          IntelliLearn
        </ScrollLink>

        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
          <ScrollLink to="features" {...scrollProps} activeClass={styles.activeLink}>Features</ScrollLink>
          <ScrollLink to="how-it-works" {...scrollProps} activeClass={styles.activeLink}>How It Works</ScrollLink> 
          <ScrollLink to="technology" {...scrollProps} activeClass={styles.activeLink}>Technology</ScrollLink>
          <ScrollLink to="vision" {...scrollProps} activeClass={styles.activeLink}>Vision</ScrollLink>
          {/* <ScrollLink to="investors" {...scrollProps} activeClass={styles.activeLink}>Investors</ScrollLink> */}
          
          {/* --- NEW PLAY GAMES BUTTON --- */}
          <a
            href="https://intelli-learn-c8ln.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.playButton}
            onClick={closeMobileMenu} // Close mobile menu on click
          >
            Play Games
          </a>
        </div>

        <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;