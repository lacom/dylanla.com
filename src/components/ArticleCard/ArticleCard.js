import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { rhythm, scale } from '../../utils/typography';

export default class ArticleCard extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  };

  render() {
    const { post } = this.props;
    const { title, date, path, featuredImage } = post.frontmatter;

    return (
      <article className="article-card">
        <Link
          className="article-card-anchor"
          to={path}
        >
          <span
            className="article-card-background"
            style={ featuredImage ? { backgroundImage: `url(${__PATH_PREFIX__}/images/${featuredImage})` } : {}}
          >
            <span className="article-card-sheen" />
          </span>
          <span className="article-card-inner">
            <h2 className="article-card-title">{title}</h2>
            <span className="article-card-meta">
              <span className="article-card-meta-date">{date}</span>
            </span>
          </span>
        </Link>
      </article>
    );
  }
}
