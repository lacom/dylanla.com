import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { ClientsList } from '../components';

// Styled components
const ContentContainer = styled.div`
  max-width: 40em;
  padding: 1.5em 0;
`;

export default function About({ data }) {
  const siteTitle = get(data, 'site.siteMetadata.title');
  const clients = get(data, 'site.siteMetadata.clients');

  return (
    <div>
      <Helmet title={siteTitle} />
      <ContentContainer>
        <h1>Lightning in a Bot is a technology business located in lovely Los Angeles, California.</h1>
        <section>
          <p>Co-founders Dylan La Com and Carl Mueller started Lightning in a Bot in 2016 driven by the mission of using cutting-edge technology to help small businesses work smarter and be more productive.</p>
          <p>We believe technology should help people make more impactful contributions to the things that matter in their lives.</p>
          <p>We serve clients in a variety of industries, but our specialty is in technology solutions for retail businesses.</p>
        </section>
        <section>
          <p>Some of our wonderful clients include:</p>
          <ClientsList clients={clients} />
        </section>
        <section>
          <h3>About this website</h3>
          <p>This is a static website built with <a href="https://reactjs.org/" target="_blank" title="React">React</a> and <a href="https://www.gatsbyjs.org/" target="_blank" title="gatsbyjs">Gatsby JS</a>. It's served to you blazingly fast via <a href="https://aws.amazon.com/" target="_blank" title="AWS">AWS</a>. The code for this site is open source and available on <a href="https://github.com/lightninginabot/liab_website" title="Github" target="_blank">Github</a>.</p> 
        </section>
      </ContentContainer>
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
        clients {
          name
          image
          url
        }
      }
    }
  }
`;
