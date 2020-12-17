import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import { ThemeModeContext } from '../context/ThemeContext';

const Padding = styled.div`
  padding: 2rem;
  box-sizing: border-box;
  width: calc(100% - 340px);
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PanelContainer = ({ children }) => {
  const { darkMode } = useContext(ThemeModeContext);
  return (
    <Padding>
      <Col className={darkMode ? 'bg-dark' : 'bg-gray'}>{children}</Col>
    </Padding>
  );
};

export default PanelContainer;
