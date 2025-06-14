import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>ABOUT</h4>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>HELP</h4>
          <ul>
            <li><a href="/payements">Payments</a></li>
            <li><a href="/shipping">Shipping</a></li>
            <li><a href="/cancellation-and-returns">Cancellation & Returns</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>CONSUMER POLICY</h4>
          <ul>
            <li><a href="/cancellation-and-returns">Cancellation & Returns</a></li>
            <li><a href="/terms-of-use">Terms Of Use</a></li>
            <li><a href="/security">Security</a></li>
            <li><a href="/privacy">Privacy</a></li>
          </ul>
        </div>
        <div className="footer-section address">
          <p><strong>Mail Us:</strong><br />
            Technologia Internet Private Limited,<br />
            Buildings Nakuru, Nairobi &<br />
            Embassy  Village,<br />
            Outer Ring Road, Kenya ,<br />
            Nakuru, 20100,<br />
            Nairobi, Kenya
          </p>
          <p><strong>Registered Office Address:</strong><br />
            Technologia Internet Private Limited,<br />
            Buildings Nakuru, Nairobi &<br />
            Embassy  Village,<br />
            Outer Ring Road, Kenya ,<br />
            Nakuru, 20100,<br />
            Nairobi, Kenya<br />
            Telephone: <span className="highlight">+254 (0) 748 660 944</span>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <span>© 2025 Technologia.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
