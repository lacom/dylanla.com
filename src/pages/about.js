import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

// Styled components
const ContentContainer = styled.div`
  max-width: 40em;
  padding: 0 1em;
`;

export default function About({ location }) {
  return (
    <Layout location={location}>
      <ContentContainer>
        <h1>About</h1>
        <section>
          <p>Dylan La Com is a software engineer, entrepreneur, inventor and tinkerer based in Los Angeles, California.</p>
          <p>Currently, Dylan is the tech lead at a retail technology company called <a href="https://www.shoptiques.com/" title="Shoptiques">Shoptiques</a>. Dylan is also the owner of a technology startup called <a href="https://lightninginabot.com" title="Lightning in a Bot">Lightning in a Bot</a>, which developed the Shoppy Bot product, a novel reporting software for ecommerce businesses.</p>
        </section>
        <section>
          <h3>Links</h3>
          <h5>Social</h5>
          <ul>
            <li><a href="https://twitter.com/dylanlacom">Twitter</a></li>
            <li><a href="https://github.com/lacom">Github</a></li>
          </ul>
          <h5>Other</h5>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=rBpaUICxEhk">Life is NOT a Journey - Alan Watts</a></li>
          </ul>
        </section>
        <section>
          <h3>About this website</h3>
          <p>This is a static website built with <a href="https://reactjs.org/" target="_blank" rel="noreferrer" title="React">React</a> and <a href="https://www.gatsbyjs.org/" target="_blank" rel="noreferrer" title="gatsbyjs">Gatsby JS</a>. It's served to you super fast via <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer" title="AWS">AWS</a>. The code for this site is open source and available on <a href="https://github.com/lightninginabot/liab_website" title="Github" target="_blank" rel="noreferrer">Github</a>.</p> 
        </section>
      </ContentContainer>
    </Layout>
  );
};
