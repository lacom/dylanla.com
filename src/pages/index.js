import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import { Header, ArticleCard } from '../components';
import { rhythm } from '../utils/typography';


function getArticleCards(posts) {
  return posts.map(({ node: post}) => (<ArticleCard key={post.id} post={post} />));
}

export default function BlogIndex({ data }) {
  const siteTitle = get(data, 'site.siteMetadata.title');
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      <Helmet title={siteTitle} />
      {/*<div className="home-masthead">
        <h1>Advanced technical solutions for forward-thinking retail businesses</h1>
      </div>*/}
      <h3 className="section-header">Latest</h3>
      <div className="home-articles">
        <div className="article-cards">
          {getArticleCards(posts)}
        </div>
      </div>
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
          frontmatter {
            title
            authors
            type
            date(formatString: "MMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
