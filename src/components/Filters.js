import React from 'react';

const Filters = (props) => {
  const handleChange = (ev) => {
    // console.log(ev.target.id);
    props.handleFilter(ev.target.value, ev.target.id);
  };

  return (
    <form>
      <label className='label' htmlFor='name'>
        Busca un personaje:
      </label>
      <input type='text' name='name' id='name' onChange={handleChange} />

      <label className='label' htmlFor='type'>
        Busca un tipo:
      </label>
      <input type='text' name='type' id='type' onChange={handleChange} />
    </form>
  );
};

export default Filters;
