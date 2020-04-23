import React from 'react';
import '../stylesheets/App.scss';

function CharacterCard(props) {
  return (
    <li className='card'>
      <img
        className='card__img'
        src={props.character.image}
        alt={`Imagen de ${props.character.name}`}
      />
      <h4 className='card__title'>{props.character.name}</h4>
      <p className='card__description'>{props.character.specie}</p>
    </li>
  );
}

export default CharacterCard;
