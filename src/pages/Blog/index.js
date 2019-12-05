import React from 'react';

import { Container, Content } from './styles';

import Header from '~/components/Header';
import Bottom from '~/components/BottomBar';
import BlogHeader from '~/components/BlogHeader';

export default function Blog() {
  return (
    <Container>
      <Header />
      <Content>
        <BlogHeader />

        <div id="contentDiv">
          <div id="postsContainer">

            <span>posts</span>
          </div>
          <div id="inputCategoriesContainer">
            <span>input</span>
          </div>
        </div>
      </Content>
      <Bottom />
    </Container>
  );
}
