import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import CharacterList from './CharacterList.js';
import Filters from './Filters.js';
import CharacterDetail from './CharacterDetail';
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

  // console.log(filteredCharacters);

  const renderCharacterDetail = (props) => {
    console.log(props);
    return <CharacterDetail />;
  };

  return (
    <div className='App'>
      <Filters handleFilter={handleFilter} />
      <CharacterList characters={filteredCharacters} />
      <Switch>
        <Route
          path='/character/:characterName'
          render={renderCharacterDetail}
        />
      </Switch>
    </div>
  );
};

export default App;
