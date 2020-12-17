import React, { useContext } from 'react';
import styled from 'styled-components';
import { PokemonContext } from '../context/PokemonProvider';

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
const ImgContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
`;
const StyledSpan = styled.span`
  display: block;
  color: ${(props) => props.theme.neutroTextColor};
`;

const PokemonCard = ({ id, name, types = [] }) => {
  const { activePokemonId, changeActivePokemonId } = useContext(PokemonContext);
  let formatId = '#000';
  if (id < 9) {
    formatId = `#00${id}`;
  } else if (id < 100) {
    formatId = `#0${id}`;
  } else {
    formatId = `#${id}`;
  }
  return (
    <Card
      active={id === activePokemonId}
      onClick={() => changeActivePokemonId(id)}
    >
      <div>
        <StyledSpan>{formatId}</StyledSpan>
        <StyledSpan>{name}</StyledSpan>
        <StyledSpan>{types.map((t) => t.name)}</StyledSpan>
      </div>
      <ImgContainer>
        <img
          src={`https://www.cpokemon.com/pokes/dream-world/${id}.svg`}
          width={50}
          height={50}
          alt={'d'}
        />
      </ImgContainer>
    </Card>
  );
};

export default PokemonCard;
