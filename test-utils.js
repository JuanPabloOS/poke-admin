import React from 'react';
import { render } from '@testing-library/react';
import { ThemeModeContext } from './src/context/ThemeContext';
import { defaultTheme } from './src/styles';
import { ThemeProvider } from 'styled-components';
import { PokemonContext } from './src/context/PokemonProvider';
import { mock_pokemon_data } from './src/mockdata';

export const WithDefaultTheme = ({ children }) => {
  return (
    <ThemeModeContext.Provider value={{ darkMode: false }}>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
export const WithPokemons = ({ children }) => {
  return (
    <PokemonContext.Provider value={{ pokemons: mock_pokemon_data }}>
      {children}
    </PokemonContext.Provider>
  );
};
export const customRender = (ui, options) => {
  render(ui, { wrapper: WithDefaultTheme, ...options });
};

export * from '@testing-library/react';
