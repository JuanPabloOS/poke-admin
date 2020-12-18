import styled from 'styled-components';
import { gray, pokemonColors, typeScale } from '../styles';

const OptionTypeButton = styled.button`
  background-color: ${(props) =>
    props.type === 'None' ? 'grey' : pokemonColors[props.type]};
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  color: ${gray[100]};
  height: 3em;
  font-size: ${typeScale['header5']};
  margin: 0 0.5em 0.5em 0;
  padding-left: 1em;
  padding-right: 1em;
  text-align: center;
  outline: none;
  opacity: 0.9;
  width: fit-content;
  &:focus {
    opacity: 1;
    outline: none;
  }
  &:hover {
    opacity: 1;
    transform: translateY(-1px);
  }
  &:active {
    opacity: 1;
    transform: translate(0);
  }
`;

export default OptionTypeButton;
