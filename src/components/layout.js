import React from 'react';
import PropTypes from 'prop-types';
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
  position: relative;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 2em;

  ${media.small`
    padding-top: 35px;
  `}
`;

export default function Layout({ children, location, pageTitle }) {
  return (
    <StyledLayoutContainer>
      <Header location={location} pageTitle={pageTitle} />
      <StyledContentLayout>
        <Sidebar />
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
