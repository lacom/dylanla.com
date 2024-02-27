import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { NavLinks } from '../../components';
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
const ResponsiveMenuTrigger = styled.div`
  width: 3em;
  position: absolute;
  right: 0;

  ${media.xsmall`
    display: none;
  `}  
`;
const StyledExpandIcon = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 2em;
  font-weight: 600;
  transition: all .15s ease-in;

  /* Remove gray highlight on touch-device tap */
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  ${props => props.$menuVisible ? 'transform: rotate(-45deg);' : ''}
`;

const ResponsiveMenu = styled.div`
  display: ${props => props.$visible ? 'block' : 'none'};
  position: fixed;
  margin-top: 50px;
  width: 100%;
  height: 100%;
  background: white;
  padding: 2em;
  z-index: 9999;

  ${media.xsmall`
    display: none;
  `}
`;

export default function Header({ location, pageTitle }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
            <ResponsiveMenuTrigger>
              <StyledExpandIcon
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                $menuVisible={showMobileMenu}
              >&#43;</StyledExpandIcon>
            </ResponsiveMenuTrigger>
          </StyledHeader>
          <ResponsiveMenu
            $visible={showMobileMenu}
          >
            <NavLinks />
          </ResponsiveMenu>
        </>
      )}
    />
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
  pageTitle: PropTypes.string,
};
