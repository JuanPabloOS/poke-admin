import styled from 'styled-components';

const StyledSearchInput = styled.input`
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.borderColor};
  height: 38px;
  background-color: ${(props) => props.theme.primaryBg};
  font-style: italic;
  color: ${(props) => props.theme.neutroTextColor};
  outline: none;
  padding-left: 15px;
`;

export default StyledSearchInput;
