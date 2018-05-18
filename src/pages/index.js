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
  const products = get(data, 'site.siteMetadata.productData');
  const services = get(data, 'site.siteMetadata.serviceData');
  const { edges: posts } = data.allMarkdownRemark;

  const productList = products
    ? (<ul className="product-list">
        {products.map((product, idx) => (
          <li key={idx}>
            <div className="item-header">
              <a href={product.url} title={product.name}>
                <h4>{product.name}</h4>
              </a>
              <span className="meta-header">
                {product.releaseDate ? `Released ${product.releaseDate}` : null}
              </span>
            </div>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>)
    : null;

  const serviceList = services
    ? (<ul className="service-list">
        {services.map((service, idx) => (
          <li key={idx}>
            <div className="item-header">
              <h4>{service.name}</h4>
            </div>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>)
    : null;

  return (
    <div>
      <Helmet title={siteTitle} />
      <div className="masthead">
        <h2 className="about-subheading">We build technology for the retail industry.</h2>
      </div>
      <section className="split-content">
        <div className="products">
          <h3 className="section-title">Products</h3>
          {productList}
        </div>
        <div className="services">
          <h3 className="section-title">Services</h3>
          {serviceList}
        </div>
      </section>
      <section>
        <h3 className="section-header">Latest</h3>
        <div className="home-articles">
          <div className="article-cards">
            {getArticleCards(posts)}
          </div>
        </div>
      </section>
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
        productData {
          name
          description
          url
          image
          releaseDate
        }
        serviceData {
          name
          description
          url
          image
          subServices {
            name
          }
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            authors
            date(formatString: "MMM DD, YYYY")
            featuredImage
            path
            title
            type
          }
        }
      }
    }
  }
`;
