import React from 'react';

import SearchPanel from '../SearchPokemonPanel';

import AdminPanel from '../AdminPanel';
import ScreenContainer from './ScreenContainer';
const Pokedex = () => {
  return (
    <ScreenContainer>
      <SearchPanel />
      <AdminPanel />
    </ScreenContainer>
  );
};

export default Pokedex;
