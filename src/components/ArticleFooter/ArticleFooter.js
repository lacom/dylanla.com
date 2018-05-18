import React, { Component } from 'react';
import PropTypes from 'prop-types';

import twitterLogoSrc from '../../images/twitter.svg';
import facebookLogoSrc from '../../images/facebook.svg';
import config from '../../config';

export default class ArticleFooter extends Component {
  static propTypes = {
    authors: PropTypes.array.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  handleTwitterClick = (e) => {
    e.preventDefault();
    window.open(e.target.href, 'twitter-share', 'width=550,height=235');
    return false;
  };

  handleFacebookClick = (e) => {
    e.preventDefault();
    window.open(this.href, 'facebook-share','width=580,height=296');
    return false;
  };

  render() {
    const { authors, path, title } = this.props;
    const encodedTitle = encodeURIComponent(title);
    const url = `${config.url}${path}`;

    return (
      <div className="article-footer">
        <div>
          <span>By {authors.join(', ')}</span>
        </div>
        <ul className="social-share-links">
          <li>
            <a
              className="social-share-link-twitter"
              href={`https://twitter.com/intent/tweet?text=${encodedTitle}&amp;url=${url}`}
              onClick={this.handleTwitterClick}
              style={{ backgroundImage: `url(${twitterLogoSrc})` }}
            >
              Tweet
            </a>
          </li>
          <li>
            <a
              className="social-share-link-facebook"
              href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
              onClick={this.handleFacebookClick}
              style={{ backgroundImage: `url(${facebookLogoSrc})` }}
            >
              Share
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
