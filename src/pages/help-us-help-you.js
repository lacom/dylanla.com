import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';

import media from '../utils/mediaQueryTemplates';


// Styled components
const ContentContainer = styled.p`
  max-width: 50em;
`;
const ServiceList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  column-gap: 15px;
  overflow: auto;

  ${media.xsmall`
    columns: 180px auto;  
  `};

  &>li {
    display: inline-block;
    width: 100%;
    padding: 0;
    margin: 0;
    height: 60px; 
  }  
`;
const ToolsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  column-gap: 15px;
  overflow: auto;

  ${media.xsmall`
    columns: 180px auto;  
  `};

  &>li {
    display: inline-block;
    width: 100%;
    padding: 0;
    margin: 0;
    height: 60px;
  }
`;
const PageSection = styled.div`
  margin-top: 1em;
`;
const StyledH3 = styled.h3`
  margin: 0 0 10px 0;
`;


export default function HelpUsHelpYou({ data }) {
  const siteTitle = get(data, 'site.siteMetadata.title');
  const serviceData = get(data, 'site.siteMetadata.serviceData');

  const serviceList = serviceData.services &&
    (<ServiceList>
      {serviceData.services.map((serv, idx) => (
        <li key={idx}>
          <span>{serv.name}</span>
        </li>
      ))}
    </ServiceList>);

  const toolsList = serviceData.tools &&
    (<ToolsList>
      {serviceData.tools.map((tool, idx) => (
        <li key={idx}>
          <span>{tool.name}</span>
        </li>
      ))}
    </ToolsList>);    

  return (
    <div>
      <Helmet title={siteTitle} />
      <ContentContainer>
        <h1>Let's Move Business Forward.</h1>
        <p>We've refined our craft over the years in a handful of technical areas, using tried-and-true tools of the trade. Have a project in mind? <Link to="/contact" title="Contact">Let's talk</Link>.</p>
        <PageSection>
          <StyledH3>Services</StyledH3>
          {serviceList}
        </PageSection>
        <PageSection>
          <StyledH3>Tool Kit</StyledH3>
          {toolsList}
        </PageSection>
      </ContentContainer>
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
        serviceData {
          services {
            name
          }
          tools {
            name
          }
        }
      }
    }
  }
`;
