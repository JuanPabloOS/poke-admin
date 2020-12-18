import React from 'react';
import SearchItemPanel from '../components/SearchItemPanel';
import ScreenContainer from './ScreenContainer';

import ItemsProvider from '../context/ItemsProvider';
import ItemInfo from '../components/ItemInfo';
const Items = () => {
  return (
    <ItemsProvider>
      <ScreenContainer>
        <SearchItemPanel />
        <ItemInfo />
      </ScreenContainer>
    </ItemsProvider>
  );
};

export default Items;
