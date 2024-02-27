import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Header, NavLinks } from '../../components';
import media from '../../utils/mediaQueryTemplates';


// Styled components
const StyledSidebar = styled.div`
  display: none;
  
  ${media.xsmall`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 300px;
    flex-shrink: 0;
    float: left;
    padding: 1em 0 1em 4em;
    z-index: 1;
  `} 
`;
const StyledNav = styled.nav`
`;

export default function Sidebar({ location, pageTitle }) {
  return (
    <StyledSidebar>
      <Header location={location} pageTitle={pageTitle} />
      <StyledNav>
        <NavLinks />
      </StyledNav>
    </StyledSidebar>
  );
}

Sidebar.propTypes = {
  location: PropTypes.object.isRequired,
  pageTitle: PropTypes.string
};
