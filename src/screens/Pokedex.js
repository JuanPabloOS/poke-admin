import React from 'react';

import SearchPokemonPanel from '../SearchPokemonPanel';

import AdminPanel from '../AdminPanel';
import ScreenContainer from './ScreenContainer';
const Pokedex = () => {
  return (
    <ScreenContainer>
      <SearchPokemonPanel />
      <AdminPanel />
    </ScreenContainer>
  );
};

export default Pokedex;
