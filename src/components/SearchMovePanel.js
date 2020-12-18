import React, { useContext } from 'react';
import SideContainer from './SideContainer';
import MoveCard from './MoveCard';
import { MovesContext } from '../context/MovesProvider';
import styled from 'styled-components';

const ItemsContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
`;
const SearchMovePanel = () => {
  const { moves } = useContext(MovesContext);
  return (
    <SideContainer>
      <ItemsContainer>
        {moves.map((move, index) => (
          <MoveCard
            key={`move-${move}-${index}`}
            id={move.id}
            name={move.name}
          />
        ))}
      </ItemsContainer>
    </SideContainer>
  );
};
export default SearchMovePanel;
