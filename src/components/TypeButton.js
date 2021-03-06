import React from 'react';
import styled from 'styled-components';
import { types } from '../data/types';
import { pokemonColors } from '../styles';

const StyledButton = styled.button`
  display: inline-block;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background: ${(props) => props.color};
  border-radius: 20px;
  border: none;
  height: 40px;
  justify-content: center;
  padding: 0.3rem;
  text-align: center;
  width: 200px;
  font-size: 18px;
  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translate(0);
  }
  &:focus {
    outline: none;
  }
`;
const TypeButton = ({ type, ...rest }) => {
  let color = 'rgba(255,255,255,0.7)';
  if (types.includes(type)) {
    color = pokemonColors[type];
  }

  return (
    <StyledButton color={color} {...rest}>
      {type !== '' ? type : 'Select a type'}
    </StyledButton>
  );
};

export default TypeButton;
