import React from 'react';
import './Header.css';
import logo from '../assets/images/logos/logo.png';
import AudioController from './AudioController';
import { Link } from 'react-router-dom';

const Header = ({ onCategorySelect }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Alienhill" className="logo" />
        </Link>
      </div>

      <nav className="nav">
        <ul>
          <li onClick={() => onCategorySelect('fashion')}>FASHION</li>
          <li onClick={() => onCategorySelect('apparels')}>APPARELS</li>
        </ul>
      </nav>

      <div className="header-actions">
        <AudioController />
      </div>
    </header>
  );
};

export default Header;
