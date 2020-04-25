import React from 'react';

const Filters = (props) => {
  const handleChange = (ev) => {
    props.handleFilter(ev.target.value);
  };

  return (
    <form>
      <label className='label' htmlFor='name'>
        Busca un personaje:
      </label>
      <input type='text' name='name' id='name' onChange={handleChange} />
    </form>
  );
};

export default Filters;
