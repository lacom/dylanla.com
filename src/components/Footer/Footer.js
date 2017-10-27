import React from 'react';
import Link from 'gatsby-link';

import config from '../../config';
import { rhythm, scale } from '../../utils/typography';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="content">
          &copy; {config.title}
        </div>
      </div>
    </footer>
  );
}
