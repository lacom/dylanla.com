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
  display: inline-block;
  margin-right: 15px;
`;
const ProductDesc = styled.p`
  max-width: 40em;
`;


export default function Things({ data }) {
  const siteTitle = get(data, 'site.siteMetadata.title');
  const products = get(data, 'site.siteMetadata.productData');
  const { edges: posts } = data.allMarkdownRemark;

  const productList = products &&
    (<ProductsList>
      {products.map((product, idx) => (
        <ProductItem key={idx}>
          <div className="item-header">
            <StyledH2>{product.name}</StyledH2>
          </div>
          <ProductDesc>{product.description}</ProductDesc>
          <a href={product.url} title={product.name} target="_blank">Link</a>
          <ProductPostsContainer>
            <StyledH4>Read More About {product.name}</StyledH4>
            {posts
              .filter(({ node: post}) => post.frontmatter.tags.some(tag => product.tags.includes(tag)))
              .map(({ node: post}) => (
                <ArticleCardContainer key={post.id}>
                  <ArticleCard post={post} size="small" />
                </ArticleCardContainer>
              ))}
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
            featuredImage
            title
            type
            tags
          }
        }
      }
    }    
  }
`;
