import React from 'react';
// import ReactDOM from 'react-dom';
import './Header.css';
import TogglePageButton from './Buttons/TogglePageButton.js';
import NewGameButton from './Buttons/NewGameButton.js';
import TCLinkButton from './Buttons/TCLinkButton.js';

function Header() {
  return (
    <header className="header">
      <div className="title"><h1>pok&eacute;dex</h1></div>
      <h2 className="caught-title">caught pok&eacute;mon page</h2>
      <nav className="menu">
        <TogglePageButton />
        <NewGameButton />
        <TCLinkButton />
      </nav>
    </header>
  );
}

export default Header;
