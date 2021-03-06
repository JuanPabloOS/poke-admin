import React, { useContext, useState } from 'react';
import PokemonCard from './components/PokemonCard';
import styled from 'styled-components';
import { PokemonContext } from './context/PokemonProvider';
import SideContainer from './components/SideContainer';
import StyledSearchInput from './components/SearchInput';
const TopSide = styled.div`
  height: 150px;
  box-sizing: border-box;
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.primaryBg};
`;

const MiddleSide = styled.div`
  height: calc(100% - 150px);
  overflow-y: scroll;
  background-color: ${(props) => props.theme.primaryBg};
`;

const SearchPokemonPanel = () => {
  const { pokemons } = useContext(PokemonContext);
  const [searchText, setSearchText] = useState('');

  function typesContainsType(types, type) {
    for (let i = 0; i < types.length; i++) {
      if (types[i].name === type) {
        return true;
      }
    }
    return false;
  }
  function renderPokemonList() {
    if (searchText.startsWith(':')) {
      let type = searchText.split(':')[1];

      return pokemons
        .filter((pokemon) => typesContainsType(pokemon.types, type))
        .map((p) => (
          <PokemonCard
            id={p.id}
            name={p.name}
            types={p.types}
            key={`pokemon-element-#00-${p.id}`}
          />
        ));
    } else if (searchText.startsWith('#')) {
      let idRequired = parseInt(searchText.split('#')[1], 10);
      return pokemons
        .filter((pokemon) => pokemon.id === idRequired)
        .map((p) => (
          <PokemonCard
            id={p.id}
            name={p.name}
            types={p.types}
            key={`pokemon-element-#00-${p.id}`}
          />
        ));
    }
    if (searchText !== '') {
      return pokemons
        .filter((p) => p.name.startsWith(searchText))
        .map((p) => (
          <PokemonCard
            id={p.id}
            name={p.name}
            types={p.types}
            key={`pokemon-element-#00-${p.id}`}
          />
        ));
    }
    return pokemons.map((p) => (
      <PokemonCard
        id={p.id}
        name={p.name}
        types={p.types}
        key={`pokemon-element-#00-${p.id}`}
      />
    ));
  }

  return (
    <SideContainer>
      <TopSide>
        <div className="py-2 d-flex flex-column">
          <p className="text-primary st-8">
            Welcome to the Pokémon administrative panel
          </p>
          <StyledSearchInput
            type="text"
            placeholder="Search"
            className="customSearchInput"
            data-testid="search-input"
            value={searchText}
            onChange={({ target }) => setSearchText(target.value)}
          />
        </div>
      </TopSide>
      <MiddleSide>{renderPokemonList()}</MiddleSide>
    </SideContainer>
  );
};

export default SearchPokemonPanel;
