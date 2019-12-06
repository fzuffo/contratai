import React from 'react';

import { MdSearch } from 'react-icons/md';
import { Container, Content } from './styles';

import Header from '~/components/Header';
import Bottom from '~/components/BottomBar';
import BlogHeader from '~/components/BlogHeader';

import blog1 from '~/assets/blog1.png';
import blogVectorAuthor from '~/assets/blogVectorAuthorBlue.svg';
import blogVectorService from '~/assets/blogVectorServiceBlue.svg';
import blogVectorComments from '~/assets/blogVectorCommentsBlue.svg';

export default function Blog() {
  return (
    <Container>
      <Header />
      <Content>
        <BlogHeader />

        <div id="contentDiv">
          <div id="postsContainer">
            {/* ==========NewPost======== */}
            <div id="blogCard">
              <div id="blogCardPhoto">
                <img src={blog1} alt="" />
              </div>
              <div id="blogCardContent">
                <strong id="blogTitle">Preparando o ambiente</strong>
                <div id="blogInfo">
                  <div>
                    <img src={blogVectorService} alt="" />
                    <span>Pintor</span>
                  </div>
                  <div>
                    <img src={blogVectorComments} alt="" />
                    <span>16</span>
                  </div>
                  <div>
                    <img src={blogVectorAuthor} alt="" />
                    <span>Felipe Antônio</span>
                  </div>
                </div>
                <span id="blogText">
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum
                  Nullam ultricies urna id ornare interdum. Maecenas ut suscipit
                  mauris, non sodales metus.
                </span>
                <div id="blogSeparator" />
                <div id="blogStatus">
                  <span>100 visualizações</span>
                  <div id="blogStatusSeparator" />
                  <span>Escrever comentário</span>
                </div>
              </div>
            </div>
            {/* ==========NewPost======== */}
            <div id="blogCard">
              <div id="blogCardPhoto">
                <img src={blog1} alt="" />
              </div>
              <div id="blogCardContent">
                <strong id="blogTitle">Preparando o ambiente</strong>
                <div id="blogInfo">
                  <div>
                    <img src={blogVectorService} alt="" />
                    <span>Pintor</span>
                  </div>
                  <div>
                    <img src={blogVectorComments} alt="" />
                    <span>16</span>
                  </div>
                  <div>
                    <img src={blogVectorAuthor} alt="" />
                    <span>Felipe Antônio</span>
                  </div>
                </div>
                <span id="blogText">
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum
                  Nullam ultricies urna id ornare interdum. Maecenas ut suscipit
                  mauris, non sodales metus.
                </span>
                <div id="blogSeparator" />
                <div id="blogStatus">
                  <span>100 visualizações</span>
                  <div id="blogStatusSeparator" />
                  <span>Escrever comentário</span>
                </div>
              </div>
            </div>
            {/* ==========NewPost======== */}
            <div id="blogCard">
              <div id="blogCardPhoto">
                <img src={blog1} alt="" />
              </div>
              <div id="blogCardContent">
                <strong id="blogTitle">Preparando o ambiente</strong>
                <div id="blogInfo">
                  <div>
                    <img src={blogVectorService} alt="" />
                    <span>Pintor</span>
                  </div>
                  <div>
                    <img src={blogVectorComments} alt="" />
                    <span>16</span>
                  </div>
                  <div>
                    <img src={blogVectorAuthor} alt="" />
                    <span>Felipe Antônio</span>
                  </div>
                </div>
                <span id="blogText">
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum
                  Nullam ultricies urna id ornare interdum. Maecenas ut suscipit
                  mauris, non sodales metus.
                </span>
                <div id="blogSeparator" />
                <div id="blogStatus">
                  <span>100 visualizações</span>
                  <div id="blogStatusSeparator" />
                  <span>Escrever comentário</span>
                </div>
              </div>
            </div>
            {/* ==========NewPost======== */}
            <div id="blogCard">
              <div id="blogCardPhoto">
                <img src={blog1} alt="" />
              </div>
              <div id="blogCardContent">
                <strong id="blogTitle">Preparando o ambiente</strong>
                <div id="blogInfo">
                  <div>
                    <img src={blogVectorService} alt="" />
                    <span>Pintor</span>
                  </div>
                  <div>
                    <img src={blogVectorComments} alt="" />
                    <span>16</span>
                  </div>
                  <div>
                    <img src={blogVectorAuthor} alt="" />
                    <span>Felipe Antônio</span>
                  </div>
                </div>
                <span id="blogText">
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum
                  Nullam ultricies urna id ornare interdum. Maecenas ut suscipit
                  mauris, non sodales metus.
                </span>
                <div id="blogSeparator" />
                <div id="blogStatus">
                  <span>100 visualizações</span>
                  <div id="blogStatusSeparator" />
                  <span>Escrever comentário</span>
                </div>
              </div>
            </div>
            {/* ==========NewPost======== */}
          </div>
          <div id="inputCategoriesContainer">
            <div id="inputSearch">
              <div id="inputSearchIcon">
                <MdSearch />
              </div>
              <input type="text" placeholder="Busque uma postagem..." />
            </div>
            <div id="categoriesDiv">
              <div id="categories">
                <ul>
                  <li>
                    <strong>Categorias</strong>
                  </li>
                  <li>
                    <div id="dots" />
                    <p> Acabamento</p>
                  </li>
                  <li>
                    <div id="dots" />
                    Área externa
                  </li>
                  <li>
                    <div id="dots" />
                    Elétrica
                  </li>
                  <li>
                    <div id="dots" />
                    Encanamento
                  </li>
                  <li>
                    <div id="dots" />
                    Pintura
                  </li>
                  <li>
                    <div id="dots" />
                    Passeio
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Bottom />
    </Container>
  );
}
