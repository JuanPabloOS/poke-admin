import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  background-color: ${(props) => props.theme.primaryBg};
  color: ${(props) => props.theme.neutroTextColor};
`;
const SideContainer = ({ children }) => {
  return (
    <Panel className="side-panel d-sm-none d-md-block h-100">{children}</Panel>
  );
};

export default SideContainer;
