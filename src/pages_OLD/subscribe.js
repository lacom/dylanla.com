import React from 'react';
import PropTypes from 'prop-types';
import { path } from 'ramda';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { NewsletterSignup } from '../components';
import Layout from '../components/Layout';
import config from '../config';


// Styled components
const ContentContainer = styled.div`
  max-width: 40em;
  padding: 1.5em 0;
`;


export default function Subscribe({ data, location }) {
  const siteTitle = path(['site', 'siteMetadata', 'title'], data);

  return (
    <Layout location={location}>
      <Helmet title={siteTitle} />
      <ContentContainer>
        <h1>Newsletter</h1>
        <p>{config.newsletterSignupMessage}</p>
        <NewsletterSignup />
      </ContentContainer>
    </Layout>
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
