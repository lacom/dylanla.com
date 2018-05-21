// See: https://www.styled-components.com/docs/advanced#media-templates
import { css } from 'styled-components';

const sizes = {
  large: '110em',
  medium: '90em',
  small: '70em',
  xsmall: '50em',
}

// Iterate through the sizes and create a media template
const mediaTemplates = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (min-width: ${sizes[label]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default mediaTemplates;
