import React, { useContext } from 'react';

import { dark, light } from '../styles';
import { ThemeModeContext } from '../context/ThemeContext';
import styled from 'styled-components';
const ScreenContainer = ({ children }) => {
  const { darkMode } = useContext(ThemeModeContext);
  const WrapperScreen = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex: 1 1 0%;
    cursor: text;
    background-color: ${darkMode ? dark[100] : light[100]};
    overflow-y: hidden;
  `;
  return <WrapperScreen>{children}</WrapperScreen>;
};

export default ScreenContainer;
