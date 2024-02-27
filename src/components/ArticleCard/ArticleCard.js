import React from 'react';
import { flushSync } from 'react-dom';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import { readableColor, rgba } from 'polished';
import { GatsbyImage } from "gatsby-plugin-image"

import media from '../../utils/mediaQueryTemplates';


// Styled components
const StyledArticle = styled.article`
  position: relative;
  margin-bottom: 10px;
  /* No cross browser 'break-inside' property being supported yet: */
  display: inline-block;
  background: black;
  width: 100%;
  max-height: 680px;
  overflow: hidden;
  transition: all .15s ease-in;
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.4);
  border-radius: 5px;

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
const ArticleCardLink = styled.a`
  display: block;
  height: 100%;
  text-decoration: none;
  border-radius: 5px;
  outline: none;
  border: none;
  text-align: left;
  cursor: pointer;
`;
const ArticleImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  opacity: 0.9;
  margin: 0;
  padding: 0;
  /* Fixes small margin at bottom of image */
  vertical-align: middle;
  object-fit: cover;
`;
const ArticleCardContent = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0.7em 0.7em 0.3em;
  display: flex;
  flex-direction: column;
  height: 100%;

  ${media.small`
    padding: 1.5em 1.5em 0.6em;
  `}  
`;
const ArticleCardTitle = styled.h2`
  margin-bottom: auto;
  color: ${readableColor('#000')};
  font-size: 0.95em;
  line-height: 1.54;
  word-wrap: normal;
 
  ${media.xsmall`
    font-size: 0.9em;
  `}

  ${media.small`
    font-size: 1.1em;
    padding-top: 0;
  `}
`;
const ArticleCardMeta = styled.span`
  margin-top: auto;
  font-size: 0.9em;
  color: ${rgba(readableColor('#000'), 0.7)};

  ${props => props.size === 'small' && `
    display: none;
  `}
`;

export default function ArticleCard({ post, size }) {
  const { slug } = post.fields;
  const { title, date, featuredImage } = post.frontmatter;

  async function navigateToPage(slug) {
    // Fallback for browsers that don't support this API:
    if (!document.startViewTransition) {
      navigate(slug);
      return;
    }

    // Add view transition name to element
    // coverImgRef.current.style.viewTransitionName = 'article-cover';

    // Navigate with transition
    document.startViewTransition(() => {
      flushSync(() => {
        navigate(slug);
      });
    });
  }

  return (
    <StyledArticle
      size={size}
    >
      <ArticleCardLink
        to={slug}
        onClick={(event) => {
          event.preventDefault();
          navigateToPage(slug);
        }}
      >
        {featuredImage && (
          <ArticleImage
            image={featuredImage.childImageSharp.gatsbyImageData}
            alt={title}
          />
        )}
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

ArticleCard.propTypes = {
  post: PropTypes.object.isRequired,
  size: PropTypes.string,
};
