// src/sections/HowItWorks/HowItWorks.js
import React from 'react';
import styles from './HowItWorks.module.css';
import screenshotQuiz from '../../assets/images/question.png';
import screenshotGameplay from '../../assets/images/game.png';
import screenshotExplanation from '../../assets/images/explanation.png';
import { FaQuestion, FaCrosshairs, FaCheckCircle, FaCube } from 'react-icons/fa'; // Example icons

const HowItWorks = () => {
  return (
    <section id="how-it-works" className={`${styles.howItWorksSection} dark-section`}> {/* Add ID and dark class */}
      <div className={`container`}>
        <h2 className={styles.sectionTitle}>Experience Adaptive Learning Like Never Before</h2>
        <div className={styles.stepsGrid}>
          {/* Step 1 */}
          <div className={styles.stepCard}>
            <div className={styles.stepIcon}><FaQuestion /></div>
            <div className={styles.stepContent}>
              <h3>1. AI-Driven Questions</h3>
              <p>Start each round with a multiple-choice question dynamically generated by our LLM, tailored to your learning pace.</p>
            </div>
             <img src={screenshotQuiz} alt="Quiz Question Example" className={styles.stepImage} />
          </div>

          {/* Step 2 */}
          <div className={styles.stepCard}>
            <div className={styles.stepIcon}><FaCrosshairs /></div>
            <div className={styles.stepContent}>
              <h3>2. Gamified Challenge</h3>
              <p>Enter the archery game where each enemy represents an answer. Aim and shoot the correct target to succeed!</p>
            </div>
            <img src={screenshotGameplay} alt="Archery Gameplay Example" className={styles.stepImage} />
          </div>

          {/* Step 3 */}
          <div className={styles.stepCard}>
            <div className={styles.stepIcon}><FaCheckCircle /></div>
            <div className={styles.stepContent}>
              <h3>3. Instant Feedback & Rewards</h3>
              <p>Receive immediate results, explanations for reinforcement, and earn rewards (XP, badges) for your performance.</p>
            </div>
             <img src={screenshotExplanation} alt="Round Explanation Example" className={styles.stepImage} />
          </div>

          {/* Step 4 */}
          <div className={styles.stepCard}>
             <div className={styles.stepIcon}><FaCube /></div>
            <div className={styles.stepContent}>
              <h3>4. Secure Progress on EduChain</h3>
              <p>Your achievements and credentials are securely recorded on the EduChain blockchain, ensuring verifiable and portable learning records.</p>
               {/* Placeholder or generic graphic for blockchain step */}
               <div className={styles.blockchainPlaceholder}>EduChain Integration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;