import React, { PureComponent } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { NavLinks } from '../../components';
import config from '../../config';
import { rhythm, scale } from '../../utils/typography';
import media from '../../utils/mediaQueryTemplates';


// Styled components
const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #FFF;
  height 50px;
  z-index: 9999;

  ${media.xsmall`
    width: 300px;
    align-items: flex-end;
    justify-content: flex-start;
    padding-left: 4em;
    height: 75px;    
  `}
  ${media.small`
    width: 400px;
  `}  
`;
const ResponsiveMenuTrigger = styled.div`
  width: 12%;
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

  ${props => props.menuVisible && 'transform: rotate(-45deg);'}
`;
const ResponsiveMenu = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
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

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { showMobileMenu: false };
  }

  toggleMobileMenu = (e) => {
    e.preventDefault();
    const { showMobileMenu } = this.state;
    this.setState({ showMobileMenu: !showMobileMenu });
  }

  render () {
    return (
      <div>
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
              onClick={this.toggleMobileMenu}
              menuVisible={this.state.showMobileMenu}
            >&#43;</StyledExpandIcon>
          </ResponsiveMenuTrigger>
        </StyledHeader>
        <ResponsiveMenu visible={this.state.showMobileMenu}>
          <NavLinks />
        </ResponsiveMenu>
      </div>
    );
  }
}
