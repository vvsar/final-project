import React from 'react';
import './Buttons.css';

function TCLinkButton() {
  return (
    <a href="https://training.ru/">
      <button className="tc-btn">
        <img className="logo-img" src="images/epam-logo.svg" alt="EPAM logo" />
        <img className="logo-img" src="images/training-center-logo.svg" alt="Training center logo" />
      </button>
    </a>
  )
}

export default TCLinkButton;