import React, { useContext } from 'react';
import styled from 'styled-components';
import { PokemonContext } from '../context/PokemonProvider';

const ControlPad = styled.div`
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #9c4488 !important;
  }
`;
const ImageContainer = styled.div`
  width: calc(100% - 48px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SliderBlock = styled.div`
  width: 100%;
  height: 334px;
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  box-shadow: 0px 3px 6px ${(props) => props.theme.primaryPalete[200]};
`;

const PokemonSlider = () => {
  const { prevPokemon, nextPokemon, activePokemonId } = useContext(
    PokemonContext
  );
  return (
    <SliderBlock>
      <ControlPad
        className="bg-primary"
        onClick={prevPokemon}
        data-testid="prev-button"
      >
        <i className="fas fa-chevron-left color-light"></i>
      </ControlPad>

      <ImageContainer>
        <img
          src={`https://www.cpokemon.com/pokes/dream-world/${activePokemonId}.svg`}
          width={250}
          height={250}
          alt={'d'}
          data-testid="pokemon-image"
        />
      </ImageContainer>

      <ControlPad
        className="bg-primary"
        onClick={nextPokemon}
        data-testid="next-button"
      >
        <i className="fas fa-chevron-right color-light"></i>
      </ControlPad>
    </SliderBlock>
  );
};
export default PokemonSlider;
