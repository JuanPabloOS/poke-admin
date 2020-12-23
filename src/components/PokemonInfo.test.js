import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import PokemonInfo from './PokemonInfo';
import { PokemonContext } from '../context/PokemonProvider';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles';
import { bulbasaur } from '../mockdata';

describe('<PokemonInfo/>', () => {
  test('should render without crashing', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <PokemonContext.Provider
          value={{
            activePokemon: bulbasaur,
          }}
        >
          <PokemonInfo />
        </PokemonContext.Provider>
      </ThemeProvider>
    );
    expect(screen.getByText('#001 Bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('grass')).toBeInTheDocument();
    expect(screen.getByText('poison')).toBeInTheDocument();
  });
  test('should render the edit button', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <PokemonContext.Provider
          value={{
            activePokemon: bulbasaur,
          }}
        >
          <PokemonInfo />
        </PokemonContext.Provider>
      </ThemeProvider>
    );
    expect(screen.getByTestId('button-edit-pokemon')).toBeInTheDocument();
  });
  test('should render the modal to edit', async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <PokemonContext.Provider
          value={{
            activePokemon: bulbasaur,
          }}
        >
          <PokemonInfo />
        </PokemonContext.Provider>
      </ThemeProvider>
    );
    fireEvent.click(screen.getByTestId('button-edit-pokemon'));
    await waitFor(() => {
      expect(screen.getByText('Edit Pokémon')).toBeInTheDocument();
    });
  });
});
