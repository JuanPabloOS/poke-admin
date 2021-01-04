import React, { useContext } from 'react';
import styled from 'styled-components';
import { ItemsContext } from '../context/ItemsProvider';
const Card = styled.div`
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  justify-content: space-between;
  transition: all 0.2s ease-out;
  background-color: ${(props) =>
    props.active ? props.theme.cardHoverColor : 'none'};
  width: 100%;
  &:hover {
    background-color: ${(props) => props.theme.cardHoverColor};
    cursor: pointer;
    box-shadow: 2px 2px 0px ${(props) => props.theme.softBg};
  }
`;
const ImgContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
`;
const StyledSpan = styled.span`
  display: block;
  color: ${(props) => props.theme.neutroTextColor};
`;

const ItemCard = ({ id, name, imgUrl }) => {
  const { activeItemId, changeActiveItemId } = useContext(ItemsContext);
  return (
    <Card active={id === activeItemId} onClick={() => changeActiveItemId(id)}>
      <div>
        <StyledSpan>{name}</StyledSpan>
      </div>
      <ImgContainer>
        <img src={imgUrl} width={50} height={50} alt={''} />
      </ImgContainer>
    </Card>
  );
};

export default ItemCard;
