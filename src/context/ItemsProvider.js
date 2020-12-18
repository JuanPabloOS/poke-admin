import React, { createContext, useState, useEffect } from 'react';
import { ITEMS } from '../data/items';

export const ItemsContext = createContext(createContext);

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(ITEMS);
  const [activeItemId, setActiveItemId] = useState(1);
  const [activeItem, setActiveItem] = useState(null);

  function nextItem() {
    setActiveItemId((currentId) => {
      if (currentId + 1 > items.length) {
        return 1;
      }
      return currentId + 1;
    });
  }
  function prevItem() {
    setActiveItemId((currentId) => {
      if (currentId - 1 < 1) {
        return items.length;
      }
      return currentId - 1;
    });
  }
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
        nextItem,
        prevItem,
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
