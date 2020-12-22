import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PokemonSlider from './PokemonSlider';

import { PokemonContext } from '../context/PokemonProvider';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles';

describe('<PokemonSlider/>', () => {
  const contextValue = {
    prevPokemon: jest.fn(),
    nextPokemon: jest.fn(),
    activePokemonId: 1,
  };

  test('Renders without crashing', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <PokemonContext.Provider value={contextValue}>
          <PokemonSlider />
        </PokemonContext.Provider>
      </ThemeProvider>
    );
    expect(getByTestId('pokemon-image')).toBeInTheDocument();
  });
  test('Calls prev and next pokemon', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <PokemonContext.Provider value={contextValue}>
          <PokemonSlider />
        </PokemonContext.Provider>
      </ThemeProvider>
    );
    fireEvent.click(getByTestId('prev-button'));
    expect(contextValue.prevPokemon).toHaveBeenCalledTimes(1);
    fireEvent.click(getByTestId('next-button'));
    expect(contextValue.nextPokemon).toHaveBeenCalledTimes(1);
  });
});
