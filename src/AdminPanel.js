import React from 'react';

import PokemonInfo from './components/PokemonInfo';
import PokemonSlider from './components/PokemonSlider';

import PanelContainer from './components/PanelContainer';

const AdminPanel = () => {
  return (
    <PanelContainer>
      <PokemonSlider />
      <PokemonInfo />
    </PanelContainer>
  );
};

export default AdminPanel;
