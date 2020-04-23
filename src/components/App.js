import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import CharacterList from './CharacterList.js';
import Filters from './Filters.js';
// import CharacterDetail from './CharacterDetail';
import getDataFromApi from '../services/getDataFromApi.js';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setName] = useState('');
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  // console.log(characters);

  const handleFilter = (data) => {
    console.log('están escribiendo algo', data);
    setName(data);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  console.log(filteredCharacters);

  return (
    <div className='App'>
      <Filters handleFilter={handleFilter} />
      <CharacterList characters={filteredCharacters} />
      {/* <CharacterDetail /> */}
    </div>
  );
};

export default App;
