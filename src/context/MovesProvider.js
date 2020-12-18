import React, { createContext, useState, useEffect } from 'react';
import { MOVES } from '../data/moves';

export const MovesContext = createContext();

const MovesProvider = ({ children }) => {
  const [moves] = useState(MOVES);
  const [activeMoveId, setActivMoveId] = useState(1);
  const [activeMove, setActiveMove] = useState(null);

  function changeActiveMoveId(id) {
    setActivMoveId(id);
  }
  useEffect(() => {
    let cm = moves.find((item) => item.id === activeMoveId);
    setActiveMove(cm);
  }, [activeMoveId, moves]);
  return (
    <MovesContext.Provider
      value={{
        moves,
        changeActiveMoveId,
        activeMove,
        activeMoveId,
      }}
    >
      {children}
    </MovesContext.Provider>
  );
};

export default MovesProvider;
