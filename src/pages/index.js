import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { ArticleCard } from '../components';
import media from '../utils/mediaQueryTemplates';


// Styled components
const StyledWall = styled.div`
  /* Center content on xsmall devices */
  display: grid;
  max-width: 1200px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  padding: 1em;
  margin: 0 1em;

  ${media.xsmall`
    padding: 0;
    grid-template-columns: 1fr 1fr 1fr;
  `}

  ${media.small`
    padding: 0;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1em;
  `}

  ${media.medium`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2em;
  `}
`;


export default function BlogIndex({ data, location }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout location={location}>
      <StyledWall>
        {posts.map(({ node: post}) => (<ArticleCard key={post.id} post={post} />))}
      </StyledWall>
    </Layout>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {
        frontmatter: { draft: { eq: false } }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            authors
            date(formatString: "MMM DD, YYYY")
            title
            type
            featuredImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
