import React from 'react';
import styled from 'styled-components';

// box-sizing: border-box;
// float: left;
// height: 100%;
// min-width: 340px;
// position: relative;
// width: 340px;
const Panel = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  z-index: 99;
  color: ${(props) => props.theme.neutroTextColor};
  background-color: ${(props) => props.theme.primaryBg};
  transition: box-shadow 300ms ease-in 0s;
  width: 340px;
`;
const SideContainer = ({ children }) => {
  return (
    <Panel className="side-panel">
      <div
        style={{
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
        }}
      >
        {children}
      </div>
    </Panel>
  );
};

export default SideContainer;
