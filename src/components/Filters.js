import React from 'react';

const Filters = () => {
  return (
    <>
      <label className='form__label display-block' htmlFor='name'>
        Filtrar por nombre:
      </label>
      <input className='form__input-text' type='text' name='name' id='name' />
    </>
  );
};

export default Filters;
