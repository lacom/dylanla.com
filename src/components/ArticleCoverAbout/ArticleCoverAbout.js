import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';


// Styled components
const Container = styled.div`
  margin-top: 2em;
  background: #f1eee9;
  padding: 1em;
  color: #ababab;
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
        <div>
          <CoverImage fluid={img.childImageSharp.fluid} />
        </div>
        <div>
          <p>{text}</p>
        </div>
      </ContentContainer>
    </Container>
  );
}

ArticleCoverAbout.propTypes = {
  img: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};
