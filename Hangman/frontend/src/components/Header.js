import React from 'react';

// Header component
const Header = () => (
  <header>
    <img src="/assets/images/logo.svg" alt="Hangman Logo" className="logo" />
    <button className="menu-button" aria-label="Open menu">
      <img src="/assets/images/icon-menu.svg" alt="Menu Icon" />
    </button>
  </header>
);

export default Header;
