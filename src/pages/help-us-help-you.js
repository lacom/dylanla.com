import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Helmet from 'react-helmet';


export default function HelpUsHelpYou({ data }) {
  const siteTitle = get(data, 'site.siteMetadata.title');
  const products = get(data, 'site.siteMetadata.productData');

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

  return (
    <div>
      <Helmet title={siteTitle} />
      <div className="masthead">
        <h2 className="about-subheading">We build technology for the retail industry.</h2>
      </div>
      <section className="about-page-split-content">
        <div className="about-page-products">
          <h3 className="section-title">Products</h3>
          {productList}
        </div>
        <div className="about-page-services">
          <h3 className="section-title">Services</h3>
        </div>
      </section>
    </div>
  );
};

HelpUsHelpYou.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query HelpUsHelpYouQuery {
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
      }
    }
  }
`;
