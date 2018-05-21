import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import config from '../../config';
import media from '../../utils/mediaQueryTemplates';


// Styled components
const StyledFooter = styled.footer`
  background: #f7f7f7;
  min-height: 5vh;
  color: #c1c1c1;
  padding: 1em 1em;
  font-size: 0.9rem;

  ${media.xsmall`
    padding: 1em 4em;
  `}
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        &copy; {config.title} Inc.
      </div>
    </StyledFooter>
  );
}
