import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';


// Styled components
const StyledNavLink = styled(Link)`
  display: block;
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 0.85rem;
  padding: 0.5em 0;
  transition: all .15s ease-in;

  &:active,
  &:focus,
  &:visited {
    color: rgba(0, 0, 0, 0.6);
  }

  &:hover {
    color: rgba(0, 0, 0, 1);    
  }
`;

export default function NavLinks() {
  return (
    <span>
      <StyledNavLink to="/things" title="We hope you like!">things we made</StyledNavLink>
      <StyledNavLink to="/help-us-help-you" title="We would like to help you out!">what we can do for you</StyledNavLink>
      <StyledNavLink to="/about" title="About">about</StyledNavLink>
      <StyledNavLink to="/contact" title="Contact">contact</StyledNavLink>
    </span>
  );
}