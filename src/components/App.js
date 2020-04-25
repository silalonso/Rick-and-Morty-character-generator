import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import Header from './Header.js';
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
    const characterName = props.match.params.characterName;
    // console.log(props.match.params.characterName, characters);
    const clickedCharacter = characters.find((character) => {
      return character.name === characterName;
    });
    console.log(clickedCharacter);
    return <CharacterDetail character={clickedCharacter} />;
  };
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Filters handleFilter={handleFilter} />
          <CharacterList characters={filteredCharacters} />
        </Route>
        <Route
          exact
          path='/character/:characterName'
          render={renderCharacterDetail}
        />
      </Switch>
    </div>
  );
};

export default App;
