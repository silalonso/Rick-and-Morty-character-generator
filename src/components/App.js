import React, { useEffect } from 'react';
import '../stylesheets/App.scss';
import CharacterList from './CharacterList.js';
import Filters from './Filters.js';
import CharacterDetail from './CharacterDetail';
import getDataFromApi from '../services/getDataFromApi.js';

function App() {
  useEffect(() => {
    console.log('me estoy montando');
    getDataFromApi().then((data) => {
      console.log(data);
    });
  });
  return (
    <div className='App'>
      <Filters />
      <CharacterList />
      <CharacterDetail />
    </div>
  );
}

export default App;
