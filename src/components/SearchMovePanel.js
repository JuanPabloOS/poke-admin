import React, { useContext, useState } from 'react';
import SideContainer from './SideContainer';
import MoveCard from './MoveCard';
import { MovesContext } from '../context/MovesProvider';
import StyledSearchInput from '../components/SearchInput';
import styled from 'styled-components';

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
const SearchMovePanel = () => {
  const { moves } = useContext(MovesContext);
  const [searchText, setSearchText] = useState('');
  function renderMovesList() {
    if (searchText !== '') {
      return moves
        .filter((i) => i.name.startsWith(searchText))
        .map((move, index) => (
          <MoveCard
            key={`move-${move.name}-${index}`}
            id={move.id}
            name={move.name}
          />
        ));
    }
    return moves.map((move, index) => (
      <MoveCard
        key={`move-${move.name}-${index}`}
        id={move.id}
        name={move.name}
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
      <MiddleSide>{renderMovesList()}</MiddleSide>
    </SideContainer>
  );
};
export default SearchMovePanel;
