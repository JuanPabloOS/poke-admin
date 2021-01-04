import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeModeContext } from '../context/ThemeContext';

// padding: 2rem;
// box-sizing: border-box;
// width: calc(100% - 340px);
// display: flex;
// flex-direction: column;
// min-width: 500px;
// float: left;
// position: relative;
const WrapperPanel = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100vh;
  max-height: 100%;
  width: 562px;
  align-items: center;
  padding: 1rem;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  flex-grow: 1;
  position: relative;
  overflow: auto;
  margin-right: 0px;
  margin-bottom: 0px;
  background-color: ${(props) => props.theme.primaryBg};
  padding: 1rem;
  width: 100%;
`;
const PanelContainer = ({ children }) => {
  const { darkMode } = useContext(ThemeModeContext);
  return (
    <WrapperPanel>
      <ContentWrapper>{children}</ContentWrapper>
    </WrapperPanel>
  );
};

export default PanelContainer;
