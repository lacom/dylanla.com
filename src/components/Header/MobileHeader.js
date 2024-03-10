import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { NavLinks } from '../../components';
import config from '../../config';
import { scale } from '../../utils/typography';
import media from '../../utils/mediaQueryTemplates';


// Styled components
const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 50px;
  padding-left: 1em;
  z-index: 9999;
  border-bottom: 1px solid black;
  background-color: #fffdf9;

  ${media.xsmall`
    display: none;
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
  ${props => props.$menuVisible ? 'color: red' : ''}
`;

const ResponsiveMenu = styled.div`
  display: ${props => props.$visible ? 'block' : 'none'};
  position: fixed;
  margin-top: 50px;
  width: 100%;
  height: 100%;
  background: white;
  padding: 1em;
  z-index: 9999;
  opacity: 0.97;

  ${media.xsmall`
    display: none;
  `}
`;

export default function MobileHeader() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
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
  );
}

