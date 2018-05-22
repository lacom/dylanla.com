import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { NewsletterSignup } from '../components';


// Styled components
const ContentContainer = styled.div`
  max-width: 40em;
  padding: 1.5em 0;
`;


export default function Subscribe({ data }) {
  const siteTitle = get(data, 'site.siteMetadata.title');

  return (
    <div>
      <Helmet title={siteTitle} />
      <ContentContainer>
        <h1>Newsletter</h1>
        <p>Stay up to date with articles and projects we publish by subscribing to our newsletter.</p>
        <NewsletterSignup />
      </ContentContainer>
    </div>
  );
};

Subscribe.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query SubscriberQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
