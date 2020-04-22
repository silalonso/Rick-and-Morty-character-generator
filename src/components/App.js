import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import CharacterList from './CharacterList.js';
import Filters from './Filters.js';
import CharacterDetail from './CharacterDetail';
import getDataFromApi from '../services/getDataFromApi.js';

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    // console.log('me estoy montando');
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  console.log(characters);
  return (
    <div className='App'>
      <Filters />
      <CharacterList characters={characters} />
      {/* <CharacterDetail /> */}
    </div>
  );
};

export default App;
