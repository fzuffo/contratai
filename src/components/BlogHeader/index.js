import React from 'react';

import { IoMdArrowBack } from 'react-icons/io';
import { Container } from './styles';

export default function BlogHeader() {
  return (
    <Container>
      <div id="background">
        <IoMdArrowBack />
        <span>BLOG</span>
      </div>
    </Container>
  );
}
