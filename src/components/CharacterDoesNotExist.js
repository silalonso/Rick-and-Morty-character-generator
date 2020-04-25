import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/App.scss';

const CharacterDoesNotExist = () => {
  return (
    <div>
      <Link to='/'>
        <button className='btn'>volver al listado</button>
      </Link>
      <h1>Lo siento, no existe personaje con ese nombre</h1>
    </div>
  );
};

export default CharacterDoesNotExist;
