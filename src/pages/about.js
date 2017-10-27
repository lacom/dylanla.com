import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Helmet from 'react-helmet';

export default function About({ data }) {
  const siteTitle = get(data, 'site.siteMetadata.title');

  return (
    <div>
      <Helmet title={siteTitle} />
      <p>About...</p>
    </div>
  );
};

About.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
