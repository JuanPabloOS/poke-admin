import styled from 'styled-components';
import { typeScale } from '../styles';

const TextSpan = styled.span`
  color: ${(props) => props.theme.neutroTextColor};
  font-size: ${(props) => typeScale['paragraph']};
`;
export default TextSpan;
