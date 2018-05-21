import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


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
const CoverImage = styled.img`
  width: 100px;
  height: 100%;
  vertical-align: middle;
  margin-right: 2em;
`;

export default function ArticleCoverAbout({ text, img }) {
  return (
    <Container>
      <h3>About the Cover</h3>
      <ContentContainer>
        <CoverImage src={`${__PATH_PREFIX__}/images/${img}`} />
        <p>{text}</p>
      </ContentContainer>
    </Container>
  );
}

ArticleCoverAbout.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
