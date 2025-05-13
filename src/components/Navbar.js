import React, { useState } from 'react';
import '../styles/Navbar.css';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery); // Replace with navigation or API call
      // Example: navigate(`/search?query=${searchQuery}`);
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  return (
    <nav className="modern-navbar">
      <div className="nav-logo">
        <h1>technologia</h1>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="/home"><span className="roller">Home</span></a></li>
        <li><a href="/products"><span className="roller">Products</span></a></li>
        <li><a href="/playground"><span className="roller">Cart</span></a></li>
        <li><a href="/resources"><span className="roller">Checkout</span></a></li>
      </ul>

      <div className="nav-icons">
        <form onSubmit={handleSearchSubmit} className={`search-form ${searchOpen ? 'visible' : ''}`}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="search-input"
          />
        </form>
        <button className="icon-button" title="Search" onClick={() => setSearchOpen(!searchOpen)}>
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
