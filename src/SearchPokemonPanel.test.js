import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchPokemonPanel from './SearchPokemonPanel';
import { PokemonContext } from './context/PokemonProvider';
import { mock_pokemon_data } from './mockdata';
describe('<SearchPokemonPanel/>', () => {
  test('Renders without crashing', () => {
    render(
      <PokemonContext.Provider value={{ pokemons: mock_pokemon_data }}>
        <SearchPokemonPanel />
      </PokemonContext.Provider>
    );
    expect(
      screen.getByText('Welcome to the Pokémon administrative panel')
    ).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });
  test('Filter by pokemon name', () => {
    render(
      <PokemonContext.Provider value={{ pokemons: mock_pokemon_data }}>
        <SearchPokemonPanel />
      </PokemonContext.Provider>
    );
    fireEvent.change(
      screen.getByTestId('search-input', {
        target: {
          value: 'charmander',
        },
      })
    );
    expect(screen.getByText('#003')).toBeInTheDocument();
  });
  test('Filter by pokemon type', () => {
    render(
      <PokemonContext.Provider value={{ pokemons: mock_pokemon_data }}>
        <SearchPokemonPanel />
      </PokemonContext.Provider>
    );
    fireEvent.change(
      screen.getByTestId('search-input', {
        target: {
          value: ':grass',
        },
      })
    );
    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('ivysaur')).toBeInTheDocument();
    expect(screen.getByText('venusaur')).toBeInTheDocument();
  });
});
