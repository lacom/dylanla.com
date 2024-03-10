import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import config from '../../config';
import { scale } from '../../utils/typography';
import media from '../../utils/mediaQueryTemplates';


// Styled components
const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height 50px;
  z-index: 9999;
  border-bottom: 1px solid black;
  background-color: #fffdf9;

  ${media.xsmall`
    justify-content: flex-start;
    height: 75px;    
    border: none;
  `}
`;

export default function Header({ location, pageTitle }) {

  return (
    <StaticQuery
      query={graphql`
        query HeaderQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Helmet>
            <title>{pageTitle ? `${pageTitle} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title}</title>
          </Helmet>
          <StyledHeader>
            <Link
              style={{
                ...scale(0.4),
                display: "inline-block",
                marginTop: 0,
                boxShadow: "none",
                textDecoration: "none",
                color: "inherit",
              }}
              to={"/"}
            >{config.title}
            </Link>
          </StyledHeader>
        </>
      )}
    />
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
  pageTitle: PropTypes.string,
};
