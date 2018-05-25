import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import find from 'lodash/find';

import media from '../../utils/mediaQueryTemplates';


// Styled components
const StyledList = styled.ul`
  list-style-type: none;
  margin: 2em 0;
  padding: 0;
  overflow: auto;
  columns: 2;
  column-gap: 15px;

  ${media.xsmall`
    columns: 110px auto;  
  `};
`;
const ClientItem = styled.li`
  display: inline-block;
  padding: 0 1em;
  margin: 0;
  width: 110px;
  flex-shrink: 0;
  height: 80px;
`;
const ClientLogo = styled(Img)`

`;

export default function ClientsList({ clients, images }) {

  const clientItems = clients.map((client, idx) => {
    const image = find(images, ['node.childImageSharp.sizes.originalName', client.image]);

    return (
      <ClientItem key={idx}>
        <a href={client.url} target="_blank" title={client.name}>
          {image && (<ClientLogo sizes={image.node.childImageSharp.sizes} />)}
        </a>
      </ClientItem>
    );
  });

  return (
    <StyledList>
      {clientItems}
    </StyledList>
  );
}

ClientsList.propTypes = {
  clients: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
};