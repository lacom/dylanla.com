import React from 'react';
import Link from 'gatsby-link';

import config from '../../config';
import { rhythm, scale } from '../../utils/typography';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="content">
          <Link
            style={{
              ...scale(0.4),
              display: "inline-block",
              marginBottom: rhythm(0.3),
              marginTop: 0,
              boxShadow: "none",
              textDecoration: "none",
              color: "inherit",
            }}
            to={"/"}
          >
            {config.title}
          </Link>
          <ul className="header-nav">
            <li>
              <Link to="/about" title="About">About</Link>
            </li>
            <li>
              <Link to="/contact" title="Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
