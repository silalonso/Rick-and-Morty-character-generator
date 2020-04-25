import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  console.log(props);
  if (props.character === undefined) {
    return (
      <div className='detail'>
        <Link to='/'>
          <button>volver al listado</button>
        </Link>
        <p>Lo siento, no hay personaje con ese nombre</p>
      </div>
    );
  } else {
    return (
      <div className='background'>
        <div className='cards'>
          <div className='card_detail'>
            <img
              className='card_img'
              src={props.character.image}
              alt={props.character.name}
            />
            <section>
              <header className='card__header'>
                <h2 className='card__title'>{props.character.name}</h2>
                <span className='detail__close icon fas fa-times'>
                  <Link to='/'>
                    <button>volver al listado</button>
                  </Link>
                </span>
              </header>
              <ul className='card_content'>
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
