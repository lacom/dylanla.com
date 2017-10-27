import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import { ContactForm } from '../components';

export default function Contact({ data }) {
  const siteTitle = get(data, 'site.siteMetadata.title');

  return (
    <div>
      <Helmet title={`${siteTitle} | Contact`} />
      <ContactForm />
    </div>
  );
};

Contact.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
