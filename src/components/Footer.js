import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>ABOUT</h4>
          <ul>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Flipkart Stories</a></li>
            <li><a href="/">Press</a></li>
            <li><a href="/">Corporate Information</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>GROUP COMPANIES</h4>
          <ul>
            <li><a href="/">Myntra</a></li>
            <li><a href="/">Cleartrip</a></li>
            <li><a href="/">Shopsy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>HELP</h4>
          <ul>
            <li><a href="/">Payments</a></li>
            <li><a href="/">Shipping</a></li>
            <li><a href="/">Cancellation & Returns</a></li>
            <li><a href="/">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>CONSUMER POLICY</h4>
          <ul>
            <li><a href="/">Cancellation & Returns</a></li>
            <li><a href="/">Terms Of Use</a></li>
            <li><a href="/">Security</a></li>
            <li><a href="/">Privacy</a></li>
            <li><a href="/">Sitemap</a></li>
            <li><a href="/">Grievance Redressal</a></li>
            <li><a href="/">EPR Compliance</a></li>
          </ul>
        </div>
        <div className="footer-section address">
          <p><strong>Mail Us:</strong><br />
            Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Outer Ring Road, Devarabeesanahalli Village,<br />
            Bengaluru, 560103,<br />
            Karnataka, India
          </p>
          <p><strong>Registered Office Address:</strong><br />
            Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Outer Ring Road, Devarabeesanahalli Village,<br />
            Bengaluru, 560103,<br />
            Karnataka, India<br />
            CIN: U51109KA2012PTC066107<br />
            Telephone: <span className="highlight">044-45614700 / 044-67415800</span>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <span>🚀 Become a Seller</span>
          <span>📣 Advertise</span>
          <span>🎁 Gift Cards</span>
          <span>❓ Help Center</span>
          <span>© 2025 Technologia.com</span>
        </div>
        <div className="footer-payments">
          <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
          <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" />
          <img src="https://img.icons8.com/color/48/000000/rupay.png" alt="RuPay" />
          {/* Add more icons as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
