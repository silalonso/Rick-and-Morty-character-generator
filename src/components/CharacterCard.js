import React from 'react';
import '../stylesheets/App.scss';

function CharacterCard() {
  return (
    <li className='card'>
      <img
        className='card__img'
        src='http://randomuser.me/api/portraits/women/21.jpg'
        alt=''
      />
      <h4 className='card__title'>Julita Mínguez(nombre)</h4>
      <p className='card__description'>Especie</p>
    </li>
  );
}

export default CharacterCard;
