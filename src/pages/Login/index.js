import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdPerson, MdLock } from 'react-icons/md';

import Header from '~/components/Header';
import BottomBar from '~/components/BottomBar';

import loginImg from '~/assets/loginImg.png';

import { Container, Content } from './styles';

export default function Login() {
  function handleSubmit() {}

  return (
    <>
      <Header />
      <Container>
        <Content>
          <div className="contentLogin">
            <img src={loginImg} alt="" />
          </div>

          <div className="contentLogin">
            <Form onSubmit={handleSubmit}>
              <div className="inputMain">
                <label htmlFor="email">E-mail</label>

                <div className="inputDiv">
                  <div className="icon">
                    <MdPerson font-size={24} color="#bbb" />
                  </div>

                  <Input
                    name="email"
                    type="email"
                    placeholder="email@email.com"
                  />
                </div>
              </div>

              <div className="inputMain">
                <label htmlFor="password">Senha</label>

                <div className="inputDiv">
                  <div className="icon">
                    <MdLock font-size={24} color="#bbb" />
                  </div>

                  <Input name="password" type="password" />
                </div>
              </div>

              <div id="buttons">
                <button id="loginBtn">ENTRAR</button>
                <button id="facebookBtn">FACEBOOK</button>
                <button id="recoveryPassBtn">ESQUECI MINHA SENHA</button>
                <button id="signupBtn">
                  Ainda não é um de nós? <strong>Cadastre-se</strong>
                </button>
              </div>
            </Form>
          </div>
        </Content>
      </Container>
      <BottomBar />
    </>
  );
}
