import React from 'react';
import { fireEvent, render, screen, WithPokemons } from '../test-utils';
import SearchPokemonPanel from './SearchPokemonPanel';

describe('<SearchPokemonPanel/>', () => {
  test('Renders without crashing', () => {
    render(
      <WithPokemons>
        <SearchPokemonPanel />
      </WithPokemons>
    );
    expect(
      screen.getByText('Welcome to the Pokémon administrative panel')
    ).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });
  test('Filter by pokemon name', () => {
    render(
      <WithPokemons>
        <SearchPokemonPanel />
      </WithPokemons>
    );
    fireEvent.change(
      screen.getByTestId('search-input', {
        target: {
          value: 'charmander',
        },
      })
    );
    expect(screen.getByText('charmander')).toBeInTheDocument();
  });
  test('Filter by pokemon type', () => {
    render(
      <WithPokemons>
        <SearchPokemonPanel />
      </WithPokemons>
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
