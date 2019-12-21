import React from 'react';
import headerStyles from './header.module.css';

function Header() {
  return (
    <div className={headerStyles.header}>
        <h2 className={headerStyles.h2}>Pokedex</h2>
    </div>
  );
}

export default Header;
