import React from 'react';
import logo from '../images/Rick_and_Morty.png';

function Header() {
  return (
    <header className='Header'>
      <img
        className='Header__image'
        src={logo}
        alt='Rick and Morty'
        title='Rick and Morty'
      />
    </header>
  );
}

export default Header;
