import React from 'react';

import SearchPokemonPanel from '../SearchPokemonPanel';

import AdminPanel from '../AdminPanel';
import ScreenContainer from './ScreenContainer';
import PokemonProvider from '../context/PokemonProvider';
const Pokedex = () => {
  return (
    <PokemonProvider>
      <ScreenContainer>
        <SearchPokemonPanel />
        <AdminPanel />
      </ScreenContainer>
    </PokemonProvider>
  );
};

export default Pokedex;
