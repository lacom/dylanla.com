import React from 'react';
import styled from 'styled-components';

import { NavLinks } from '../../components';
import media from '../../utils/mediaQueryTemplates';


// Styled components
const StyledSidebar = styled.div`
  display: none;
  
  ${media.xsmall`
    display: block;
    width: 300px;
    margin-top: 75px;
    flex-shrink: 0;
    float: left;
    padding: 1em 0 1em 4em;
  `} 
`;
const StyledNav = styled.nav`
  position: fixed;
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <StyledNav>
        <NavLinks />
      </StyledNav>
    </StyledSidebar>
  );
}
