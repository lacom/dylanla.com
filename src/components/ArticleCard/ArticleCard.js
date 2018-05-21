import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled, { css } from 'styled-components';
import { readableColor, rgba } from 'polished';

import { rhythm, scale } from '../../utils/typography';
import media from '../../utils/mediaQueryTemplates';


// Styled components
const StyledArticle = styled.article`
  position: relative;
  margin-bottom: 15px;
  /* No cross browser 'break-inside' property being supported yet: */
  display: inline-block;
  background: black;
  max-height: 680px;
  overflow: hidden;
  transition: all .15s ease-in;

  /* Adjust for size of card */
  ${props => props.size === 'small' && `
    max-width: 150px;

    & h2 {
      font-size: 1em;
    }

    & a {
      padding: 0.6em;
    }
  `}

  &:hover {
    opacity: 0.85;
  }

  ${media.small`
    max-height: 580px;
  `}

  ${media.medium`
    max-height: 520px;
  `}

  ${media.large`
    max-height: 500px;
  `}    
`;
const ArticleCardLink = styled(Link)`
  display: block;
  text-decoration: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.5em;
`;
const ArticleImage = styled.img`
  width: 100%;
  opacity: 0.9;
  margin: 0;
  padding: 0;
  /* Fixes small margin at bottom of image */
  vertical-align: middle;
`;
const ArticleCardContent = styled.span`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const ArticleCardTitle = styled.h2`
  margin-bottom: auto;
  color: ${readableColor('#000')}
  font-size: 2.3em;
  line-height: 1.1em; 

  ${media.xsmall`
    font-size: 2.7em;
  `} 
  ${media.small`
    font-size: 2.1em;
  `}
`;
const ArticleCardMeta = styled.span`
  margin-top: auto;
  color: ${rgba(readableColor('#000'), 0.7)};

  ${props => props.size === 'small' && `
    display: none;
  `}
`;

export default class ArticleCard extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    size: PropTypes.oneOf(['small']),
  };

  render() {
    const { post, size } = this.props;
    const { slug } = post.fields;
    const { title, date, featuredImage } = post.frontmatter;

    return (
      <StyledArticle size={size}>
        {featuredImage && (<ArticleImage src={`${__PATH_PREFIX__}/images/${featuredImage}`} />)}
        <ArticleCardLink to={slug}>
          <ArticleCardContent>
            <ArticleCardTitle>{title}</ArticleCardTitle>
            <ArticleCardMeta size={size}>
              <span>{date}</span>
            </ArticleCardMeta>            
          </ArticleCardContent>
        </ArticleCardLink>
      </StyledArticle>
    );
  }
}
