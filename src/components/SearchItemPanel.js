import React, { useContext, useState } from 'react';
import SideContainer from './SideContainer';
import ItemCard from './ItemCard';
import { ItemsContext } from '../context/ItemsProvider';
import styled from 'styled-components';
import StyledSearchInput from '../components/SearchInput';
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
const SearchItemPanel = () => {
  const [searchText, setSearchText] = useState('');
  const { items } = useContext(ItemsContext);

  function renderItemList() {
    if (searchText !== '') {
      return items
        .filter((i) => i.name.startsWith(searchText))
        .map((item) => (
          <ItemCard
            key={`item-${item.name}-${item.id}`}
            id={item.id}
            name={item.name}
            imgUrl={item.imgUrl}
          />
        ));
    }
    return items.map((item) => (
      <ItemCard
        key={`item-${item.name}-${item.id}`}
        id={item.id}
        name={item.name}
        imgUrl={item.imgUrl}
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
      <MiddleSide>{renderItemList()}</MiddleSide>
    </SideContainer>
  );
};
export default SearchItemPanel;
