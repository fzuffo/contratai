import React from 'react';

import { Container, Content } from './styles';
import logoContratai from '~/assets/logoContratai.png';

export default function BottomBar() {
  return (
    <Container>
      <Content>
        <div>
          <div>
            <img src={logoContratai} alt="" />
          </div>
          <div>
            <span>
              Copyright © Contrata aí 2019. Todos os direitos reservados
            </span>
          </div>
        </div>

        <div id="helpBox">
          <span>Precisa de ajuda?</span>
        </div>
      </Content>
    </Container>
  );
}
