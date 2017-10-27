import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { Footer, Header } from '../components';
import '../css/main.css';

export default function Template({ children }) {
  return (
    <div>
      <Header />
      <section>
        <div className="container">
          {children()}
        </div>
      </section>
      <Footer />
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.func
};
