import React from 'react';

const Filters = (props) => {
  const handleChange = (ev) => {
    props.handleFilter(ev.target.value);
  };

  return (
    <form>
      <label className='form__label display-block' htmlFor='name'>
        Busca un personaje:
      </label>
      <input
        className='form__input-text'
        type='text'
        name='name'
        id='name'
        onChange={handleChange}
      />
    </form>
  );
};

export default Filters;
