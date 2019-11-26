import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import logoContratai from '~/assets/logoContratai.png';
import headerBlog from '~/assets/headerBlog.png';
import headerDoubts from '~/assets/headerDoubts.png';
import headerServices from '~/assets/headerServices.png';

export default function Header() {
  return (
    <Container>
      <Content>
        <div>
          <Link to="/">
            <img src={logoContratai} alt="" />
          </Link>
        </div>
        <div id="menuHeader">
          <div>
            <img src={headerBlog} alt="" />
          </div>
          <div>
            <img id="imgDoubts" src={headerDoubts} alt="" />
          </div>
          <div>
            <img src={headerServices} alt="" />
          </div>
          <Link to="/login">
            <div id="loginBox"> ENTRAR</div>
          </Link>
        </div>
      </Content>
    </Container>
  );
}
