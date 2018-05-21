import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { Footer, Header, Sidebar } from '../components';
import media from '../utils/mediaQueryTemplates';
import '../css/main.css';

// Styled components
const StyledLayoutContainer = styled.div`
  height: inherit;
`;
const StyledContentLayout = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 95vh;
`;
const StyledContent = styled.div`
  width: 100%;
  padding: 1em;
  margin-top: 50px;

  ${media.xsmall`
    margin-top: 0px;
    padding: 2em;
  `}
`;

export default function Template({ children }) {
  return (
    <StyledLayoutContainer>
      <Header />
      <StyledContentLayout>
        <Sidebar />
        <StyledContent>
          {children()}
        </StyledContent>
      </StyledContentLayout>
      <Footer />
    </StyledLayoutContainer>
  );
};

Template.propTypes = {
  children: PropTypes.func
};
