import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Footer, Sidebar } from '../components';
import media from '../utils/mediaQueryTemplates';

// Import styles
import '../utils/typography';
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
  position: relative;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 2em;

  ${media.xsmall`
    padding-left: 300px;
  `}

  ${media.small`
    padding-top: 35px;
  `}
`;

export default function Layout({ children, location, pageTitle }) {
  return (
    <StyledLayoutContainer>
      <StyledContentLayout>
        <Sidebar location={location} pageTitle={pageTitle} />
        <StyledContent>
          {children}
        </StyledContent>
      </StyledContentLayout>
      <Footer />
    </StyledLayoutContainer>
  );
};

Layout.propTypes = {
  location: PropTypes.object.isRequired,
};
