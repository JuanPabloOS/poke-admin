import React from 'react';
import { Modal } from 'react-bootstrap';
import { types } from '../data/types';
import { gray, pokemonColors, typeScale } from '../styles';
import styled from 'styled-components';
const TypeButton = styled.button`
  background-color: ${(props) => pokemonColors[props.type]};
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
const SelectType = ({ omit = '', show, handleSetType, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        {types.map((t) => (
          <TypeButton type={t} onClick={() => handleSetType(t)}>
            {t}
          </TypeButton>
        ))}
      </Modal.Body>
    </Modal>
  );
};

export default SelectType;
