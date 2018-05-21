import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

export default function ClientsList({ clients }) {

  const clientItems = clients.map((client, idx) => (
    <ClientItem key={idx}>
      <a href={client.url} target="_blank" title={client.name}>
        <img src={`${__PATH_PREFIX__}/images/client_logos/formatted/${client.image}`} />
      </a>
    </ClientItem>
  ));

  return (
    <StyledList>
      {clientItems}
    </StyledList>
  );
}

ClientsList.propTypes = {
  clients: PropTypes.array.isRequired,
};