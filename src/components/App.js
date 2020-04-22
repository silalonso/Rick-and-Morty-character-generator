import React from 'react';
import '../stylesheets/App.scss';
import CharacterList from './CharacterList.js';
import Filters from './Filters.js';
import CharacterDetail from './CharacterDetail';

function App() {
  return (
    <div className='App'>
      <Filters />
      <CharacterList />
      <CharacterDetail />
    </div>
  );
}

export default App;
