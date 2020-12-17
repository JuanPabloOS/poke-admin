import React, { useContext } from 'react';

import { dark, light } from '../styles';
import { ThemeModeContext } from '../context/ThemeContext';

import { Row } from 'react-bootstrap';

const ScreenContainer = ({ children }) => {
  const { darkMode } = useContext(ThemeModeContext);

  return (
    <div
      className="p-absolute h-100 w-100"
      style={{
        backgroundColor: darkMode ? dark[100] : light[100],
      }}
    >
      <Row className="h-100 no-gutters">{children}</Row>
    </div>
  );
};

export default ScreenContainer;
