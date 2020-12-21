import React, { createContext, useState, useEffect } from 'react';
import { ITEMS } from '../data/items';

export const ItemsContext = createContext(createContext);

const ItemsProvider = ({ children }) => {
  const [items] = useState(ITEMS);
  const [activeItemId, setActiveItemId] = useState(1);
  const [activeItem, setActiveItem] = useState(null);

  function changeActiveItemId(id) {
    setActiveItemId(id);
  }
  useEffect(() => {
    let cp = items.find((item) => item.id === activeItemId);
    setActiveItem(cp);
  }, [activeItemId, items]);
  return (
    <ItemsContext.Provider
      value={{
        items,
        changeActiveItemId,
        activeItem,
        activeItemId,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
export default ItemsProvider;
