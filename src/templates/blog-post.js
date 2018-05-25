import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

import { ArticleCoverAbout, ArticleFooter } from '../components';
import { rhythm, scale } from '../utils/typography';


// Styled components
const ArticleContainer = styled.div`
  max-width: 40em;
  margin: 0 auto;
  padding: 1.5em 0;
`;
const PostTitle = styled.h1`
  font-size: 2em;
  line-height: 1.1em;
  margin-bottom: 1em;
`;
const ArticleEndHorizontalRule = styled.hr`
  margin-bottom: 1em;
`;
const PostDate = styled.p`
  font-size: 0.9em;
`;
const CoverImageContainer = styled.div`
  margin-bottom: 2em;
`;
const CoverImage = styled(Img)`
  display: block;
  margin: 0 auto;
  max-width: 100px;
`;
const PostContent = styled.div`

  & img {
    display: block;
    margin: 0 auto;
  }

  & blockquote {
    font-size: 0.9rem;
  }  
`;


export default function BlogPostTemplate({ data }) {
  const { markdownRemark: post } = data;
  const siteTitle = get(data, 'site.siteMetadata.title');

  return (
    <div>
      <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
      <ArticleContainer>
        <CoverImageContainer>
          <Link to="/">
            <CoverImage sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
          </Link>
        </CoverImageContainer>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDate>{post.frontmatter.date}</PostDate>
        <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        <ArticleEndHorizontalRule />
        <ArticleFooter
          authors={post.frontmatter.authors}
          path={post.fields.slug}
          title={post.frontmatter.title}
        />
        <ArticleCoverAbout
          text={post.frontmatter.coverDesc}
          img={post.frontmatter.featuredImage}
        />
      </ArticleContainer>
    </div>
  );
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        authors
        date(formatString: "MMMM DD, YYYY")
        title
        coverDesc
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 100) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
