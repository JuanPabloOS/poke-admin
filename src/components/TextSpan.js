import styled from 'styled-components';

const TextSpan = styled.span`
  color: ${(props) => props.theme.neutroTextColor};
  font-size: clamp(0.9rem, 2vw, 1rem);
`;
export default TextSpan;
