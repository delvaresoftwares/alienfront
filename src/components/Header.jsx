import React from 'react';
import './Header.css';
import logo from '../assets/images/logos/logo.png';
import AudioController from './AudioController';
import { Link } from 'react-router-dom';

const Header = ({ onCategorySelect }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMobileSelect = (category) => {
    onCategorySelect(category);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Alienhill" className="logo" />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="nav desktop-nav">
        <ul>
          <li onClick={() => onCategorySelect('men')}>MEN</li>
          <li onClick={() => onCategorySelect('women')}>WOMEN</li>
          <li onClick={() => onCategorySelect('accessories')}>ACCESSORIES</li>
        </ul>
      </nav>

      <div className="header-actions">
        <AudioController />

        {/* Mobile Hamburger */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li onClick={() => handleMobileSelect('men')}>MEN</li>
          <li onClick={() => handleMobileSelect('women')}>WOMEN</li>
          <li onClick={() => handleMobileSelect('accessories')}>ACCESSORIES</li>
          <li onClick={() => setIsMenuOpen(false)} style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#666' }}>CLOSE</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
