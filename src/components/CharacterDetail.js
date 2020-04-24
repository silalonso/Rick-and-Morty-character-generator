import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  console.log(props);
  if (props.character === undefined) {
    return (
      <div className='detail'>
        <div className='detail__dialog'>
          <div className='detail__content'>
            <header className='detail__header'>
              <h2 className='detail__title'>usuario no encontrado</h2>
              <span className='detail__close icon fas fa-times'>
                <Link to='/'>
                  <button>volver al listado</button>
                </Link>
                <p>Lo siento, no hay personaje con ese nombre</p>
              </span>
            </header>

            {/* <section>
              <img
                className='card_img'
                src={props.character.image}
                alt={props.character.name}
              />
              <ul className='ml-1 mt-1'>
                <li>especie:{props.character.specie}</li>
                <li>Planeta de origen:{props.character.planet}</li>
                <li>Aparece en x episodios</li>
                <li> estatus: vivo o muerto</li>
              </ul>
            </section> */}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='detail'>
        <div className='detail__dialog'>
          <div className='detail__content'>
            <header className='detail__header'>
              <h2 className='detail__title'>{props.character.name}</h2>
              <span className='detail__close icon fas fa-times'>
                <Link to='/'>
                  <button>volver al listado</button>
                </Link>
              </span>
            </header>
            <section>
              <img
                className='card_img'
                src={props.character.image}
                alt={props.character.name}
              />
              <ul className='ml-1 mt-1'>
                <li>especie:{props.character.specie}</li>
                <li>Planeta de origen:{props.character.planet}</li>
                <li>Aparece en x episodios</li>
                <li> estatus: vivo o muerto</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }
};

export default CharacterDetail;
