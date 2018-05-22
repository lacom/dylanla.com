import React from 'react';
import styled from 'styled-components';

// Styled components
const StyledInput = styled.input`
  width: 100%;
  max-width: 40em;
  margin-bottom: 1em;
  padding: 0.5em;
  border: 1px solid black;
`;


export default function Input(props) {
  return (<StyledInput {...props} />);
};
