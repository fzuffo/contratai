import React from 'react';

import { MdSearch, MdLocationOn, MdStar } from 'react-icons/md';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import Header from '~/components/Header';
import BottomBar from '~/components/BottomBar';

import services1 from '~/assets/services1.png';
import profissionalProfilePic from '~/assets/profissionalProfilePic.png';
import profissionalProfilePic2 from '~/assets/profissionalProfilePic2.png';
import blog1 from '~/assets/blog1.png';

import { Container, Content } from './styles';

export default function Home() {
  // function handleFind() {}

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

        <section id="professionalStars">
          <div id="professionalGallery">
            <span id="professionalTitle">
              Os nossos profissionais são 5 estrelhas
            </span>
            <div id="galleryControl">
              <div className="chevronAngle">
                <FaAngleLeft size={40} color="#6592FE" />
              </div>

              <div id="professionalDiv">
                <div id="professionalProfileDiv">
                  <img src={profissionalProfilePic} alt="" />
                  <span id="profissionalName">Marcela Frias</span>
                  <div id="professionalLocation">
                    <div>
                      <MdLocationOn />
                    </div>
                    <span id="profissionalCity">Araraquara,SP</span>
                  </div>
                </div>

                <div id="professionalDescription">
                  <div id="descriptionStars">
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                  </div>
                  <span id="descriptionTitle">Titulo</span>
                  <span id="descriptionDescription">
                    Depoimento sobre o curso em questao, lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum
                    lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum{' '}
                  </span>
                </div>
              </div>
              <div className="chevronAngle">
                <FaAngleRight size={40} color="#6592FE" />
              </div>
            </div>
            <span id="ellipseControl"> o o o o </span>
            {/* ----> create slider https://www.w3schools.com/howto/howto_js_slideshow.asp */}
          </div>
        </section>

        <section id="professionals">
          <span id="professionalsTitle">
            Os mais variados <strong>profissionais</strong> já estão prontos
            para te ajudar
          </span>
          <div id="professionalsGallery">
            <div id="professionalsCardScroll">
              <div id="professionalsEffectStart" />

              <div id="professionalsCard-content">
                <div id="professionalImageDiv">
                  <img src={profissionalProfilePic2} alt="" />

                  <div id="profileJob">
                    <span>Mecânica</span>
                  </div>
                </div>
                <div id="professionalName">
                  <span>Felipe Tavares</span>
                </div>
                <div id="professionalDetails">
                  <div id="professionalRating">
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star">
                      <MdStar />
                    </span>
                  </div>
                  <div id="professionalPrice">
                    <span>R$ 10 / hora</span>
                  </div>
                </div>
              </div>
              <div id="professionalsCard-content">
                <div id="professionalImageDiv">
                  <img src={profissionalProfilePic2} alt="" />

                  <div id="profileJob">
                    <span>Mecânica</span>
                  </div>
                </div>
                <div id="professionalName">
                  <span>Felipe Tavares</span>
                </div>
                <div id="professionalDetails">
                  <div id="professionalRating">
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star">
                      <MdStar />
                    </span>
                  </div>
                  <div id="professionalPrice">
                    <span>R$ 10 / hora</span>
                  </div>
                </div>
              </div>
              <div id="professionalsCard-content">
                <div id="professionalImageDiv">
                  <img src={profissionalProfilePic2} alt="" />

                  <div id="profileJob">
                    <span>Mecânica</span>
                  </div>
                </div>
                <div id="professionalName">
                  <span>Felipe Tavares</span>
                </div>
                <div id="professionalDetails">
                  <div id="professionalRating">
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star">
                      <MdStar />
                    </span>
                  </div>
                  <div id="professionalPrice">
                    <span>R$ 10 / hora</span>
                  </div>
                </div>
              </div>

              <div id="professionalsCard-content">
                <div id="professionalImageDiv">
                  <img src={profissionalProfilePic2} alt="" />

                  <div id="profileJob">
                    <span>Mecânica</span>
                  </div>
                </div>
                <div id="professionalName">
                  <span>Felipe Tavares</span>
                </div>
                <div id="professionalDetails">
                  <div id="professionalRating">
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star">
                      <MdStar />
                    </span>
                  </div>
                  <div id="professionalPrice">
                    <span>R$ 10 / hora</span>
                  </div>
                </div>
              </div>

              <div id="professionalsCard-content">
                <div id="professionalImageDiv">
                  <img src={profissionalProfilePic2} alt="" />

                  <div id="profileJob">
                    <span>Mecânica</span>
                  </div>
                </div>
                <div id="professionalName">
                  <span>Felipe Tavares</span>
                </div>
                <div id="professionalDetails">
                  <div id="professionalRating">
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star">
                      <MdStar />
                    </span>
                  </div>
                  <div id="professionalPrice">
                    <span>R$ 10 / hora</span>
                  </div>
                </div>
              </div>

              <div id="professionalsCard-content">
                <div id="professionalImageDiv">
                  <img src={profissionalProfilePic2} alt="" />

                  <div id="profileJob">
                    <span>Mecânica</span>
                  </div>
                </div>
                <div id="professionalName">
                  <span>Felipe Tavares</span>
                </div>
                <div id="professionalDetails">
                  <div id="professionalRating">
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star">
                      <MdStar />
                    </span>
                  </div>
                  <div id="professionalPrice">
                    <span>R$ 10 / hora</span>
                  </div>
                </div>
              </div>

              <div id="professionalsCard-content">
                <div id="professionalImageDiv">
                  <img src={profissionalProfilePic2} alt="" />

                  <div id="profileJob">
                    <span>Mecânica</span>
                  </div>
                </div>
                <div id="professionalName">
                  <span>Felipe Tavares</span>
                </div>
                <div id="professionalDetails">
                  <div id="professionalRating">
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star">
                      <MdStar />
                    </span>
                  </div>
                  <div id="professionalPrice">
                    <span>R$ 10 / hora</span>
                  </div>
                </div>
              </div>

              <div id="professionalsCard-content">
                <div id="professionalImageDiv">
                  <img src={profissionalProfilePic2} alt="" />

                  <div id="profileJob">
                    <span>Mecânica</span>
                  </div>
                </div>
                <div id="professionalName">
                  <span>Felipe Tavares</span>
                </div>
                <div id="professionalDetails">
                  <div id="professionalRating">
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star">
                      <MdStar />
                    </span>
                  </div>
                  <div id="professionalPrice">
                    <span>R$ 10 / hora</span>
                  </div>
                </div>
              </div>

              <div id="professionalsCard-content">
                <div id="professionalImageDiv">
                  <img src={profissionalProfilePic2} alt="" />

                  <div id="profileJob">
                    <span>Mecânica</span>
                  </div>
                </div>
                <div id="professionalName">
                  <span>Felipe Tavares</span>
                </div>
                <div id="professionalDetails">
                  <div id="professionalRating">
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star">
                      <MdStar />
                    </span>
                  </div>
                  <div id="professionalPrice">
                    <span>R$ 10 / hora</span>
                  </div>
                </div>
              </div>

              <div id="professionalsCard-content">
                <div id="professionalImageDiv">
                  <img src={profissionalProfilePic2} alt="" />

                  <div id="profileJob">
                    <span>Mecânica</span>
                  </div>
                </div>
                <div id="professionalName">
                  <span>Felipe Tavares</span>
                </div>
                <div id="professionalDetails">
                  <div id="professionalRating">
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star check">
                      <MdStar />
                    </span>
                    <span className="star">
                      <MdStar />
                    </span>
                  </div>
                  <div id="professionalPrice">
                    <span>R$ 10 / hora</span>
                  </div>
                </div>
              </div>
            </div>
            <div id="professionalsEffectEnd" />
          </div>
        </section>

        <section id="blog">
          <span id="blogTitle">BLOG</span>
          <div id="blogContent">
            <div id="blogCard">
              <div id="blogImgDiv">
                <img src={blog1} alt="" />
              </div>
              <div id="blogDescriptions">
                <span id="blogDescriptionsTitle">Preparando o Ambiente</span>
                <div id="blogDescriptionsStats">por felipe pintor 16</div>
                <div id="blogDescriptionsDetails">
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum
                  Nullam ultricies urna id ornare interdum. Maecenas ut suscipit
                  mauris, non sodales metus
                </div>
              </div>
            </div>
          </div>
        </section>
      </Content>
      <BottomBar />
    </Container>
  );
}
