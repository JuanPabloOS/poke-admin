import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  WithDefaultTheme,
} from '../../test-utils';
import PokemonInfo from './PokemonInfo';
import { PokemonContext } from '../context/PokemonProvider';
import { bulbasaur } from '../mockdata';

describe('<PokemonInfo/>', () => {
  test('should render without crashing', () => {
    render(
      <WithDefaultTheme>
        <PokemonContext.Provider
          value={{
            activePokemon: bulbasaur,
          }}
        >
          <PokemonInfo />
        </PokemonContext.Provider>
      </WithDefaultTheme>
    );
    expect(screen.getByText('#001 Bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('grass')).toBeInTheDocument();
    expect(screen.getByText('poison')).toBeInTheDocument();
  });
  test('should render the edit button', () => {
    render(
      <WithDefaultTheme>
        <PokemonContext.Provider
          value={{
            activePokemon: bulbasaur,
          }}
        >
          <PokemonInfo />
        </PokemonContext.Provider>
      </WithDefaultTheme>
    );
    expect(screen.getByTestId('button-edit-pokemon')).toBeInTheDocument();
  });
  test('should render the modal to edit with a populated form', async () => {
    render(
      <WithDefaultTheme>
        <PokemonContext.Provider
          value={{
            activePokemon: bulbasaur,
          }}
        >
          <PokemonInfo />
        </PokemonContext.Provider>
      </WithDefaultTheme>
    );
    expect(screen.queryByAltText('Edit Pokémon')).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('button-edit-pokemon'));
    await waitFor(() => {
      expect(screen.getByText('Edit Pokémon')).toBeInTheDocument();
    });
    expect(screen.getByRole('form')).toHaveFormValues({
      name: 'bulbasaur',
      height: 7,
      weight: 69,
      fstType: 'grass',
      sndType: 'poison',
      hp: 45,
      attack: 49,
      defense: 49,
      spAttack: 65,
      spDefense: 65,
      speed: 45,
    });
  });
});
