import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';


// Styled components
const Container = styled.div`
  margin-top: 2em;
  background: #f7f7f7;
  padding: 1em;
  color: #c1c1c1;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const CoverImage = styled(Img)`
  width: 100px;
  height: 100%;
  vertical-align: middle;
  margin: 0 2em 0 0;
`;

export default function ArticleCoverAbout({ text, img }) {
  return (
    <Container>
      <h3>About the Cover</h3>
      <ContentContainer>
        <CoverImage sizes={img.childImageSharp.sizes} />
        <p>{text}</p>
      </ContentContainer>
    </Container>
  );
}

ArticleCoverAbout.propTypes = {
  img: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};
