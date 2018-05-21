import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { Header, ArticleCard } from '../components';
import { rhythm } from '../utils/typography';
import media from '../utils/mediaQueryTemplates';


// Styled components
const StyledWall = styled.div`
  columns: 1;
  /* Center content on xsmall devices */
  display: flex;
  justify-content: center;  

  ${media.small`
    display: block;
    columns: 2;
    column-gap: 15px;    
  `}

  ${media.medium`
    columns: 3;
  `}

  ${media.large`
    columns: 4;
  `}
`;


export default function BlogIndex({ data }) {
  const siteTitle = get(data, 'site.siteMetadata.title');
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      <Helmet title={siteTitle} />
      <StyledWall>
        {posts.map(({ node: post}) => (<ArticleCard key={post.id} post={post} />))}
      </StyledWall>
    </div>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            authors
            date(formatString: "MMM DD, YYYY")
            featuredImage
            title
            type
          }
        }
      }
    }
  }
`;
