import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  position: relative;
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;
  background: none;
  outline: none;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  color: ${(props) => props.theme.neutroTextColor};
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

const ActionIcon = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default ActionIcon;
