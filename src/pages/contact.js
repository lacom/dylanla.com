import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { ContactForm } from '../components';
import config from '../config';
import mapImageSrc from '../images/map.png';

const ContentContainer = styled.div`
  max-width: 40em;
  padding: 1.5em 0;
`;

export default function Contact({ data }) {
  const siteTitle = get(data, 'site.siteMetadata.title');

  return (
    <div>
      <Helmet title={`${siteTitle} | Contact`} />
      <ContentContainer>
        <h1>Hello friend.</h1>
        <section>
          <h3>Get in touch...</h3>
          <address>
            Email: <a href={`mailto:${config.contactEmail}?subject=Hi`}>{config.contactEmail}</a><br />
            Phone: +1 213 357-2045
          </address>
        </section>        
        <section>
          <h3>Or leave us a message...</h3>
          <ContactForm />
        </section>
        <section>
          <h3>Or come say hi...</h3>
          <address>
            201 S. Santa Fe Ave.<br />
            Suite #102<br />
            Los Angeles, CA 90012
          </address>
          <a href="https://www.google.com/maps/place/201+S+Santa+Fe+Ave,+Los+Angeles,+CA+90012/data=!4m2!3m1!1s0x80c2c63eee80aa4f:0xdf404f872993ee1f?sa=X&ved=0ahUKEwiJwYWL0pPbAhVY3GMKHf4-B-4Q8gEIJjAA" target="_blank" title="This is us">
          <img src={mapImageSrc} />
          </a>
        </section>
      </ContentContainer>
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
