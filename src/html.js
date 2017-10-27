import React from 'react';
import PropTypes from 'prop-types';
import { TypographyStyle } from 'react-typography';
import 'typeface-montserrat';
import 'typeface-merriweather';

import typography from './utils/typography';

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

export default function HTML({ body, headComponents, postBodyComponents, }) {
  const css = process.env.NODE_ENV === 'production'
    ? (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: stylesStr }}
      />)
    : null;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        {headComponents}
        <TypographyStyle typography={typography} />
        {css}
      </head>
      <body>
        <div
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
};

HTML.propTypes = {
  body: PropTypes.string.isRequired,
  headComponents: PropTypes.array.isRequired,
  postBodyComponents: PropTypes.array.isRequired,
};
