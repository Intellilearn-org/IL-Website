// src/App.js (or .tsx)
import React from 'react';

import HackathonBanner from './components/HackathonBanner/HackathonBanner'; // Import the new banner
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Import your sections
import Hero from './sections/Hero/Hero';
import ProblemOpportunity from './sections/ProblemOpportunity/ProblemOpportunity';
import Features from './sections/Features/Features';
import HowItWorks from './sections/HowItWorks/HowItWorks';
import Technology from './sections/Technology/Technology';
import VisionFutureScope from './sections/VisionFutureScope/VisionFutureScope';
import Investor from './sections/Investor/Investor';
// import Contact from './sections/Contact/Contact'; // If you had a contact section

import './App.css';
import { hackathonBannerHeight } from './components/HackathonBanner/HackathonBanner'; // Import for padding calculation

function App() {
  // Get navbar height from CSS variables (default 70px)
  // You might need a more robust way to get this if it's dynamic
  const navbarHeightString = getComputedStyle(document.documentElement).getPropertyValue('--navbar-height').trim() || '70px';
  const navbarHeightPixels = parseInt(navbarHeightString, 10);
  
  const totalFixedHeaderHeight = parseInt(hackathonBannerHeight, 10) + navbarHeightPixels;

  return (
    <>
      <HackathonBanner /> {/* Render banner at the very top */}
      <Navbar />
      
      {/* Add padding-top to the main content area to prevent overlap */}
      <main style={{ paddingTop: `${totalFixedHeaderHeight}px` }}>
        <Hero />
        <ProblemOpportunity />
        <Features />
        <HowItWorks />
        <Technology />
        <VisionFutureScope />
        {/* <Investor /> */}
        {/* <Contact /> */}
      </main>
      
      <Footer />
    </>
  );
}

export default App;