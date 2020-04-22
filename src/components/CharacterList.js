import React from 'react';
import '../stylesheets/App.scss';
import CharacterCard from './CharacterCard.js';

function CharacterList() {
  return (
    <section>
      <ul className='cards'>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </ul>
    </section>
  );
}

export default CharacterList;
