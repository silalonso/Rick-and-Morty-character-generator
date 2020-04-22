import React from 'react';

const CharacterDetail = () => {
  return (
    <div className='detail'>
      <div className='detail__dialog'>
        <div className='detail__content'>
          <header className='detail__header'>
            <h2 className='detail__title'> Paquita Torres</h2>
            <span className='detail__close icon fas fa-times'></span>
          </header>
          <section>
            <img
              className='card_img'
              src='https://randomuser.me/api/portraits/women/23.jpg'
              alt=''
            />
            <ul className='ml-1 mt-1'>
              <li>especie: la suya</li>
              <li>Planeta de origen: Marte</li>
              <li>Aparece en x episodios</li>
              <li> estatus: vivo o muerto</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
