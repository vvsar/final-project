import React from 'react';
import './PokemonList.css';

import LoadMoreButton from './LoadMoreButton/LoadMoreButton.js';

function PokemonList() {
  return (
    <main className="main">
      <div className="list">
        <p>Preparing...</p>
      </div>
      <div className="load-button-wrapper">
        <LoadMoreButton />
      </div>
    </main>
  );
}

export default PokemonList;