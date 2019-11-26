import React from 'react';

import { MdSearch } from 'react-icons/md';
import Header from '~/components/Header';
import BottomBar from '~/components/BottomBar';

import services1 from '~/assets/services1.png';

import { Container, Content } from './styles';

export default function Home() {
  function handleFind() {}

  return (
    <Container>
      <Header />
      <Content>
        <section id="banner">
          <div id="find">
            <span id="findTitle">Como vamos te ajudar hoje?</span>
            <span id="findSubtitle">Diga pra gente o que você precisa! :)</span>
            <div id="findInput">
              <div id="findInputIcon">
                <MdSearch size={24} color="#50A1FF" />
              </div>
              <input
                type="text"
                placeholder="Busque por um serviço ou profissional"
              />
            </div>
          </div>
        </section>
        <section id="services">
          <div id="galleryServices">
            <div className="effectStart" />
            <div id="cardsScroll">
              {/* Card */}
              <div className="card-content">
                <img src={services1} alt="" />
                <div id="cardDivDescriptions">
                  <span id="cardTitle">Pintores</span>
                  <span id="cardDescription">
                    Lorem ipsum morem a lastes lorem ipsum morem a lastes
                  </span>
                  <span id="cardFromPrice">a partir de</span>
                  <div id="priceDiv">
                    <span id="price">R$ 10 / hora</span>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="card-content">
                <img src={services1} alt="" />
                <div id="cardDivDescriptions">
                  <span id="cardTitle">Pintores</span>
                  <span id="cardDescription">
                    Lorem ipsum morem a lastes lorem ipsum morem a lastes
                  </span>
                  <span id="cardFromPrice">a partir de</span>
                  <div id="priceDiv">
                    <span id="price">R$ 10 / hora</span>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="card-content">
                <img src={services1} alt="" />
                <div id="cardDivDescriptions">
                  <span id="cardTitle">Pintores</span>
                  <span id="cardDescription">
                    Lorem ipsum morem a lastes lorem ipsum morem a lastes
                  </span>
                  <span id="cardFromPrice">a partir de</span>
                  <div id="priceDiv">
                    <span id="price">R$ 10 / hora</span>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="card-content">
                <img src={services1} alt="" />
                <div id="cardDivDescriptions">
                  <span id="cardTitle">Pintores</span>
                  <span id="cardDescription">
                    Lorem ipsum morem a lastes lorem ipsum morem a lastes
                  </span>
                  <span id="cardFromPrice">a partir de</span>
                  <div id="priceDiv">
                    <span id="price">R$ 10 / hora</span>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="card-content">
                <img src={services1} alt="" />
                <div id="cardDivDescriptions">
                  <span id="cardTitle">Pintores</span>
                  <span id="cardDescription">
                    Lorem ipsum morem a lastes lorem ipsum morem a lastes
                  </span>
                  <span id="cardFromPrice">a partir de</span>
                  <div id="priceDiv">
                    <span id="price">R$ 10 / hora</span>
                  </div>
                </div>
              </div>
              {/* Card */}
            </div>
            <div className="effectEnd" />
          </div>

          <div id="servicesTitle">
            <span id="title">Serviços</span>
            <span id="subtitle">
              Contrate o serviços que você precisa sem sair do seu orçamento!
            </span>
          </div>
        </section>
      </Content>
      <BottomBar />
    </Container>
  );
}
