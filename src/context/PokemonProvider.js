import { createContext, useState, useEffect } from 'react';
import { POKEMONS_DATA } from '../data/pokemons';

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [activePokemonId, setActivePokemonId] = useState(1);
  const [activePokemon, setActivePokemon] = useState(null);
  const [pokemons, setPokemons] = useState(POKEMONS_DATA);
  function nextPokemon() {
    setActivePokemonId((currentId) => {
      if (currentId + 1 > pokemons.length) {
        return 1;
      }
      return currentId + 1;
    });
  }
  function prevPokemon() {
    setActivePokemonId((currentId) => {
      if (currentId - 1 < 1) {
        return pokemons.length;
      }
      return currentId - 1;
    });
  }
  function changeActivePokemonId(id) {
    setActivePokemonId(id);
  }
  function editActivePokemon({
    name,
    height,
    weight,
    fstType,
    sndType,
    hp,
    attack,
    defense,
    spAttack,
    spDefense,
    speed,
  }) {
    let types = [
      {
        slot: 1,
        name: fstType,
      },
    ];
    if (sndType !== '') {
      types.push({ slot: 2, name: sndType });
    }
    let stats = [
      {
        name: 'hp',
        base_stat: hp,
        effort: 0,
      },

      {
        name: 'attack',
        base_stat: attack,
        effort: 0,
      },

      {
        name: 'defense',
        base_stat: defense,
        effort: 0,
      },

      {
        name: 'special-attack',
        base_stat: spAttack,
        effort: 1,
      },

      {
        name: 'special-defense',
        base_stat: spDefense,
        effort: 0,
      },

      {
        name: 'speed',
        base_stat: speed,
        effort: 0,
      },
    ];

    setActivePokemon((data) => ({
      ...data,
      name,
      height,
      weight,
      stats,
      types,
    }));

    setPokemons((data) =>
      data.map((p) => {
        if (p.id === activePokemonId) {
          return {
            id: activePokemonId,
            name,
            height,
            weight,
            stats,
            types,
          };
        } else {
          return p;
        }
      })
    );
  }
  function addPokemon({
    name,
    height,
    weight,
    fstType,
    sndType,
    hp,
    attack,
    defense,
    spAttack,
    spDefense,
    speed,
  }) {
    let types = [
      {
        slot: 1,
        name: fstType,
      },
    ];
    if (sndType !== '') {
      types.push({ slot: 2, name: sndType });
    }
    let stats = [
      {
        name: 'hp',
        base_stat: hp,
        effort: 0,
      },

      {
        name: 'attack',
        base_stat: attack,
        effort: 0,
      },

      {
        name: 'defense',
        base_stat: defense,
        effort: 0,
      },

      {
        name: 'special-attack',
        base_stat: spAttack,
        effort: 1,
      },

      {
        name: 'special-defense',
        base_stat: spDefense,
        effort: 0,
      },

      {
        name: 'speed',
        base_stat: speed,
        effort: 0,
      },
    ];
    setPokemons((data) => [
      ...data,
      {
        id: pokemons.length + 1,
        name,
        height,
        weight,
        types,
        stats,
      },
    ]);
  }
  useEffect(() => {
    let cp = pokemons.find((p) => p.id === activePokemonId);
    setActivePokemon(cp);
  }, [activePokemonId, pokemons]);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        activePokemonId,
        activePokemon,
        nextPokemon,
        prevPokemon,
        changeActivePokemonId,
        editActivePokemon,
        addPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
