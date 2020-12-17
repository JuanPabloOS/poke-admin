import React, { useContext } from 'react';
import PokemonCard from './components/PokemonCard';
import styled from 'styled-components';
import { PokemonContext } from './context/PokemonProvider';
import SideContainer from './components/SideContainer';

const TopSide = styled.div`
  height: 150px;
  box-sizing: border-box;
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.primaryBg};
`;

const MiddleSide = styled.div`
  max-height: calc(100% - 220px);
  min-height: calc(100% - 220px);
  overflow-y: scroll;
  background-color: ${(props) => props.theme.primaryBg};
`;

const SearchPanel = () => {
  const { pokemons } = useContext(PokemonContext);
  return (
    <SideContainer>
      <TopSide>
        <div className="py-2 d-flex flex-column">
          <p className="text-primary st-8">
            Welcome to the Pokémon administrative panel
          </p>
          <input
            type="text"
            placeholder="Search"
            className="customSearchInput"
          />
        </div>
      </TopSide>
      <MiddleSide>
        {pokemons.map((p) => (
          <PokemonCard
            id={p.id}
            name={p.name}
            types={p.types}
            key={`pokemon-element-#00-${p.id}`}
          />
        ))}
      </MiddleSide>
    </SideContainer>
  );
};

export default SearchPanel;
