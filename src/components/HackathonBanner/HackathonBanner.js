import React from 'react';
import styles from './HackathonBanner.module.css';

// --- IMPORTANT ---
// Adjust this value based on the final rendered height of your banner.
// Inspect in browser dev tools. (Padding top/bottom + text line height)
// For padding 12px top/bottom and font-size 0.9rem, ~40-45px is a good starting point.
const BANNER_ACTUAL_HEIGHT_PX = 42;
// --- IMPORTANT ---

export const hackathonBannerHeight = `${BANNER_ACTUAL_HEIGHT_PX}px`;

const HackathonBanner = () => {
  const articleUrl = "https://medium.com/edu-chain/semester-3-hackathon-winners-7d5905b1db14";

  return (
    <div className={styles.hackathonBanner} style={{ height: hackathonBannerHeight }}>
      <a href={articleUrl} target="_blank" rel="noopener noreferrer">
        <span className={styles.trophyIcon} role="img" aria-label="trophy">🏆</span>
        We Won! IntelliLearn is a winner at the Educhain Semester 3 Hackathon! Click to read more.
      </a>
    </div>
  );
};

export default HackathonBanner;