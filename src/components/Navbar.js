import React, { useState } from 'react';
/* import '../styles/modernNavbar.css'; */
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="modern-navbar">
      <div className="nav-logo">
        <h1>Logo</h1>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {['Work', 'About', 'Playground', 'Resource'].map((text, i) => (
          <li key={i}>
            <a href="#">
              <span className="roller">{text}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-icons">
        <button className="icon-button" title="Search">
          <FiSearch />
        </button>
        <button className="icon-button" title="Cart">
          <FiShoppingCart />
        </button>
        <button className="icon-button" title="Profile">
          <FiUser />
        </button>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
    </nav>
  );
};

export default Navbar;
