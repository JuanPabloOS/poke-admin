import React, { useContext } from 'react';
import styled from 'styled-components';
import { MovesContext } from '../context/MovesProvider';
const Card = styled.div`
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  justify-content: space-between;
  transition: all 0.2s ease-out;
  background-color: ${(props) =>
    props.active ? props.theme.cardHoverColor : 'none'};

  &:hover {
    background-color: ${(props) => props.theme.cardHoverColor};
    cursor: pointer;
    box-shadow: 2px 2px 0px ${(props) => props.theme.softBg};
  }
`;

const StyledSpan = styled.span`
  display: block;
  color: ${(props) => props.theme.neutroTextColor};
`;

const ItemCard = ({ id, name }) => {
  const { activeMoveId, changeActiveMoveId } = useContext(MovesContext);
  return (
    <Card active={id === activeMoveId} onClick={() => changeActiveMoveId(id)}>
      <div>
        <StyledSpan>{name}</StyledSpan>
      </div>
    </Card>
  );
};

export default ItemCard;
