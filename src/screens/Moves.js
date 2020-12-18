import React from 'react';
import MoveInfo from '../components/MoveInfo';
import SearchMovePanel from '../components/SearchMovePanel';
import MovesProvider from '../context/MovesProvider';
import ScreenContainer from './ScreenContainer';

const Moves = () => {
  return (
    <MovesProvider>
      <ScreenContainer>
        <SearchMovePanel />
        <MoveInfo />
      </ScreenContainer>
    </MovesProvider>
  );
};

export default Moves;
