import React from 'react';
import styled from 'styled-components';

import { ContactForm } from '../components';
import Layout from '../components/Layout';

const ContentContainer = styled.div`
  max-width: 40em;
  padding: 0 1em;
`;

export default function Contact({ location }) {
  return (
    <Layout location={location}>
      <ContentContainer>
        <h1>Get in touch</h1>
        <section>
          DM me on X/Twitter <a title="@dylanlacom" href="https://twitter.com/dylanlacom">@dylanlacom</a> or email fullname at gmail dot com.
        </section>
      </ContentContainer>
    </Layout>
  );
};
