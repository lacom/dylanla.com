import React from 'react';
import styled from 'styled-components';

// Styled components
const StyledButton = styled.button`
  background-color: #F2F28A;
  color: black;
  padding: 0.4rem 1rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
`;


export default function Button(props) {
  return (<StyledButton {...props} />);
};
