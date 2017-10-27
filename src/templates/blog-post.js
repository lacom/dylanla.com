import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';

import { Header } from '../components';
import { rhythm, scale } from '../utils/typography';

export default function BlogPostTemplate({ data }) {
  const { markdownRemark: post } = data;
  const siteTitle = get(data, 'site.siteMetadata.title');

  return (
    <div
      style={{
        maxWidth: rhythm(26),
        padding: '1.5em 1em',
        margin: 'auto'
      }}
    >
      <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
      <h1 className="post-title">
        {post.frontmatter.title}
      </h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: "block",
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {post.frontmatter.date}
      </p>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
    </div>
  );
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        authors
      }
    }
  }
`;
