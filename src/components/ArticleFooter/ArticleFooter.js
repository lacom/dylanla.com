import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import twitterLogoSrc from '../../images/twitter.svg';
import facebookLogoSrc from '../../images/facebook.svg';
import config from '../../config';
import { Link } from 'gatsby';


// Styled components
const StyledArticleFooter = styled.div`
  display: flex;
  color: #ababab;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;

  & a {
    color: #ababab;
    text-decoration: none;    
  }

  & a:hover {
    text-decoration: underline;
  }
`;
const FooterLeftContent = styled.div`
  flex: 1 0;
`;
const FooterRightContent = styled.div`
  flex: 1 0;
`;
const SocialShareLinksList = styled.ul`
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;

  &>li {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0 0 5px;
    padding: 0;
  }

  &>li>a {
    background-size: 20px;
    background-position-y: 2px;
    background-repeat: no-repeat;
    padding-left: 30px;
    display: block;
  }  
`;
const ContactLinkContainer = styled.div`
  color: #ababab;
  padding: 1em 0;
`;

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
      <div>
        <StyledArticleFooter>
          <FooterLeftContent>
            <span>{authors.join(', ')}</span>
          </FooterLeftContent>
          <FooterRightContent>
            <SocialShareLinksList>
              <li>
                <a
                  className="social-share-link-twitter"
                  href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${url}`}
                  onClick={this.handleTwitterClick}
                  style={{ backgroundImage: `url(${twitterLogoSrc})` }}
                >Tweet</a>
              </li>
              <li>
                <a
                  className="social-share-link-facebook"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                  onClick={this.handleFacebookClick}
                  style={{ backgroundImage: `url(${facebookLogoSrc})` }}
                >Share</a>
              </li>
            </SocialShareLinksList>
          </FooterRightContent>
        </StyledArticleFooter>
        <ContactLinkContainer>
          Have a comment? <Link to="/contact" title="Contact">Write me a message</Link>.
        </ContactLinkContainer>
      </div>
    );
  }
}
