import React from 'react';

const Filters = (props) => {
  // console.log(props);
  const handleChange = (ev) => {
    // console.log(ev.type);
    props.handleFilter(ev.target.value);
  };

  return (
    <>
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
    </>
  );
};

export default Filters;
