import React, { useContext } from 'react';
import SideContainer from './SideContainer';
import ItemCard from './ItemCard';
import { ItemsContext } from '../context/ItemsProvider';
import styled from 'styled-components';

const ItemsContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
`;
const SearchItemPanel = () => {
  const { items } = useContext(ItemsContext);
  return (
    <SideContainer>
      <ItemsContainer>
        {items.map((item, index) => (
          <ItemCard
            key={`item-${item.name}-${index}`}
            id={item.id}
            name={item.name}
            imgUrl={item.imgUrl}
          />
        ))}
      </ItemsContainer>
    </SideContainer>
  );
};
export default SearchItemPanel;
