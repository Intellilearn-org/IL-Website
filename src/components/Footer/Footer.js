// In your Footer component (e.g., src/components/Footer/Footer.js or Footer.tsx)
import styles from './Footer.module.css';
// If using an icon library, import icons here
import logoSrc from '../../assets/images/logo.png';
import { FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  const twitterProfileUrl = "https://twitter.com/Intellilearn_ec";
  const emailAddress = "intellilearn.games@gmail.com";
  const githubUrl = "https://github.com/Intellilearn-org";

  // Path to your logo image (adjust if it's imported from src/assets)
  const logoPath = "/logo.png"; // Assuming logo is in public folder

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerContent}>
          {/* If your footer logo is a link */}
          <a href="/" className={styles.logo}>
            <img src={logoSrc} alt="IntelliLearn Logo" className={styles.logoImage} />
            IntelliLearn
          </a>

          <p className={styles.copyright}>
            © {new Date().getFullYear()} IntelliLearn. All Rights Reserved.
          </p>

          {/* Social Media Links */}
          <div className={styles.socialIcons}>
            <a href={twitterProfileUrl} target="_blank" rel="noopener noreferrer" aria-label="IntelliLearn on X">
              {/* Replace with actual X/Twitter icon */}
              { <FaTwitter /> }
            </a>
            <a href={`mailto:${emailAddress}`} aria-label="Email IntelliLearn">
              {/* Replace with actual Email icon */}
              <FaEnvelope />
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="IntelliLearn on GitHub">
              {/* Replace with actual GitHub icon */}
              <FaGithub />
            </a>
          </div>

          {/* Footer Links like Privacy Policy, Terms of Service */}
          <div className={styles.footerLinks}>
            <a href="/privacy-policy">Privacy Policy</a>
            <span>|</span>
            <a href="/terms-of-service">Terms of Service</a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;