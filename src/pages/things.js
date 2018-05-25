import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';


import { ArticleCard } from '../components';


// Styled components
const ProductsList = styled.ul`
  list-style-type: none;
`;
const ProductItem = styled.li`
  margin: 0;
  padding: 0;
`;
const StyledH2 = styled.h2`
  margin: 0;
`;
const StyledH4 = styled.h4`
  margin-bottom: 10px;
`;
const ProductPostsContainer = styled.div`
  margin-top: 2em;
`;
const ArticleCardContainer = styled.div`
  margin-right: 15px;
`;
const ProductDesc = styled.p`
  max-width: 40em;
`;
const RelatedArticlesList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  &>li {
    display: inline;
    margin-right: 1em;
  }
`;


export default function Things({ data }) {
  const siteTitle = get(data, 'site.siteMetadata.title');
  const products = get(data, 'site.siteMetadata.productData');
  const { edges: posts } = data.allMarkdownRemark;

  const productList = products &&
    (<ProductsList>
      {products.map((product, idx) => (
        <ProductItem key={idx}>
          <StyledH2>{product.name}</StyledH2>
          <ProductDesc>{product.description}</ProductDesc>
          <a href={product.url} title={product.name} target="_blank">Link</a>
          <ProductPostsContainer>
            <StyledH4>Read More About {product.name}</StyledH4>
            <RelatedArticlesList>
            {posts
              .filter(({ node: post}) => post.frontmatter.tags.some(tag => product.tags.includes(tag)))
              .map(({ node: post}) => (
                <li key={post.id}>
                  <ArticleCard post={post} size="small" />
                </li>))}
            </RelatedArticlesList>
          </ProductPostsContainer>
        </ProductItem>
      ))}
    </ProductsList>);

  return (
    <div>
      <Helmet title={siteTitle} />
      <section>
        {productList}
      </section>
    </div>
  );
};

Things.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query ThingsQuery {
    site {
      siteMetadata {
        title
        productData {
          name
          description
          url
          tags
        }
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
            title
            type
            tags
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 150) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }    
  }
`;
