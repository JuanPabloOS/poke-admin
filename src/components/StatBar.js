import React from 'react';
import styled from 'styled-components';
import TextSpan from './TextSpan';

const BackgroundBar = styled.span`
  height: 1em;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 1px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.borderColor};
`;

const Bar = styled.span`
  height: 100%;
  width: ${(props) => props.percentage};
  background-color: ${(props) => props.color};
  display: block;
`;

const StatContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const StatBar = ({ label, stat, color = 'green' }) => {
  if (stat === undefined) {
    throw 'stat is not defined';
  }
  let percentage = (stat * 100) / 255;
  return (
    <StatContainer>
      <TextSpan>{label}</TextSpan>
      <BackgroundBar>
        <Bar percentage={percentage + '%'} color={color} />
      </BackgroundBar>
    </StatContainer>
  );
};

export default StatBar;
