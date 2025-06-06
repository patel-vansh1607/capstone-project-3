import React, { useState } from 'react';
import '../styles/Navbar.css';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cart } = useCart();


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
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
        <li><a href="/"><span className="roller">Home</span></a></li>
        <li><a href="/products"><span className="roller">Products</span></a></li>
        <li><a href="/cart"><span className="roller">Cart</span></a></li>
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
        <Link to="/cart" className="icon-button cart-icon-wrapper" title="Cart">
          <FiShoppingCart />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>

        <button className="icon-button" title="Profile">
          <FiUser />
        </button>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
    </nav>
  );
};

export default Navbar;
