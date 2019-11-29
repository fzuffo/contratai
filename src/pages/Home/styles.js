import styled from 'styled-components';
import homeBanner from '~/assets/homeBanner.png';
import leftArrow from '~/assets/leftArrow.png';
import rightArrow from '~/assets/rightArrow.png';

export const Container = styled.div`
  background-color: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;

  /* ============section banner================== */
  #banner {
    display: flex;
    background: url(${homeBanner}) no-repeat;
    background-size: 100% auto;
    width: 100%;
    height: 100vh;
    max-height: 691px;
  }

  #find {
    display: flex;
    flex-direction: column;
    max-width: 499px;
    width: 100%;
    height: 255px;
    margin-top: 170px;
    margin-left: 93px;
  }

  #findTitle {
    color: #6592fe;
    font-size: 60px;
    font-weight: bold;
    line-height: 55px;
    margin-bottom: 18px;
  }

  #findSubtitle {
    color: #6592fe;
    font-size: 26px;
    font-weight: 500;
    line-height: 18px;
    margin-bottom: 20.86px;
  }
  #findInput {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 466.48px;
    height: 64.14px;
    background: #fff;
    border: 1px solid #109cf1;
    box-sizing: border-box;
    border-radius: 10px;

    input {
      width: 100%;
      margin-left: 7px;
      margin-right: 15px;
      border: none;
      font-size: 20px;
      line-height: 24px;
      color: #c2cfe0;

      ::placeholder {
        color: #c2cfe0;
      }
    }
  }

  #findInputIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }

  /* ============section services================== */

  #services {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  #servicesTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 341px;
    width: 100%;
    margin-right: 67px;
  }

  #title {
    font-weight: bold;
    font-size: 46px;
    line-height: 42px;
    text-align: right;
    color: #6592fe;
    padding-bottom: 8px;
  }

  #subtitle {
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    text-align: right;
    color: #6592fe;
  }

  #galleryServices {
    width: auto;
    height: 338px;
    margin-left: 6px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .effectStart {
      position: absolute;
      align-self: flex-start;
      z-index: 1;

      width: 149px;
      height: 335px;
      background: linear-gradient(
        90deg,
        #fcfcfc 37.83%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    .effectEnd {
      position: absolute;
      align-self: flex-end;
      z-index: 1;

      width: 149px;
      height: 335px;
      background: linear-gradient(
        270deg,
        #fcfcfc 37.83%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    #cardsScroll {
      z-index: 0;
      width: 945px;
      height: 335px;
      overflow-x: scroll;
      box-shadow: 0px 11px 35px rgba(0, 0, 0, 0.05);
      margin-left: 39px;
      margin-top: 22px;
      display: flex;
      flex-direction: row;

      .card-content {
        width: 232.52px;
        height: 282px;
        margin-left: 20px;
        background: #ffffff;
        box-shadow: 0px 11px 35px rgba(22, 85, 149, 0.38);
        border-radius: 10px;

        img {
          width: 233px;
          height: 167.08px;
          border-radius: 5px 5px 0px 0px;
        }
      }

      #cardDivDescriptions {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      #cardTitle {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;

        text-align: center;
        letter-spacing: 0.285714px;

        color: #2f80ed;
        border-radius: 10px;
      }

      #cardDescription {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 13px;

        text-align: center;
        letter-spacing: 0.285714px;

        color: #2f80ed;

        opacity: 0.85;
        border-radius: 10px;
      }

      #cardFromPrice {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 24px;

        text-align: center;
        letter-spacing: 0.285714px;

        color: #2f80ed;
        opacity: 0.75;
        border-radius: 10px;
      }

      #priceDiv {
        width: 92.57px;
        height: 24px;
        left: 90px;
        top: 270px;

        display: flex;
        justify-content: center;
        align-items: center;

        background: #36c3fe;
        border-radius: 5px;
      }

      #price {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;

        letter-spacing: -0.24px;

        color: #ffffff;

        border-radius: 5px;
      }
    }
  }
  /* ============section professionalStars================== */

  #professionalStars {
    width: 100%;
    height: 425px;
    background: rgba(54, 195, 254, 0.1);
  }

  #professionalStarsContent {
    display: flex;
    flex-direction: column;
    height: 100%;

    /* ---start--- classes from lib react infiniti carousel */
    .carousel-prev {
      margin-left: 80px;
    }
    .carousel-next {
      margin-right: 80px;
    }

    .carousel-prev:before {
      height: 40px;
      background: url(${leftArrow}) no-repeat;
    }
    .carousel-next:before {
      height: 40px;
      background: url(${rightArrow}) no-repeat;
    }
    /*  ---end--- classes from lib react infiniti carousel */
  }

  #professionalTitle {
    margin-top: 36px;
    font-weight: bold;
    font-style: normal;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #6592fe;
  }

  #professionalDiv {
    display: flex;
    max-width: 878px;
    margin: 38px auto 0 auto;
    height: 216px;
  }

  #professionalProfileDiv {
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 200px;
    height: 100%;

    img {
      width: 150px;
      height: 150px;
      border-radius: 100px;
    }

    #profissionalName {
      font-style: normal;
      font-weight: bold;
      font-size: 19px;
      line-height: 28px;
      text-align: center;

      color: #6592fe;
    }
  }

  #professionalLocation {
    display: flex;
    align-items: center;
    text-align: center;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 24px;
      width: 24px;

      svg {
        align-self: center;
        font-size: 20px;
        color: #6592fe;
      }
    }

    #profissionalCity {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #6592fe;

      margin-left: 5px;
    }
  }

  #professionalDescription {
    display: flex;
    flex-direction: column;
    max-width: 648px;
    width: 100%;

    margin-left: 30px;
  }

  #descriptionStars {
    display: flex;
    width: auto;
    height: 40px;

    .star {
      font-size: 33px;
      color: #cdbfff;
    }

    .star.check {
      color: #fcc400;
    }
  }

  #descriptionTitle {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;

    color: #6592fe;
  }

  #descriptionDescription {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;

    color: #6592fe;
  }

  /* ============section professionals================== */

  #professionals {
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: auto;
    background: #fff;
  }

  #professionalsTitle {
    max-width: 732px;
    margin-top: 80px;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    text-align: center;

    color: #6592fe;
  }

  #professionalsGallery {
    width: 100%;
    height: 205px;
    margin-top: 26px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #professionalsCardScroll {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 0;
    overflow-x: auto;
  }

  #professionalsEffectStart {
    position: absolute;
    align-self: flex-start;
    z-index: 3;

    width: 169px;
    height: 220px;
    background: linear-gradient(
      90deg,
      #ffffff 37.83%,
      rgba(255, 250, 250, 0) 100%
    );
  }

  #professionalsEffectEnd {
    position: absolute;
    align-self: flex-end;
    z-index: 3;

    width: 169px;
    height: 220px;
    background: linear-gradient(
      90deg,
      #ffffff 37.83%,
      rgba(255, 239, 239, 0) 100%
    );
    transform: rotate(180deg);
  }

  #professionalsCard-content {
    display: flex;
    flex-direction: column;

    width: 142px;
    height: 190px;
    margin-left: 20px;
  }

  #professionalImageDiv {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 142px;
    border-radius: 10px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
    position: relative;

    img {
      object-fit: cover;
      overflow: hidden;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      z-index: 0;
    }

    #profileJob {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: -3px;
      align-self: flex-end;

      background: #3b3db4;

      border-radius: 4px;
      width: 68px;
      height: 21px;

      position: absolute;
      z-index: 1;

      span {
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 20px;
        letter-spacing: -0.24px;

        color: #ffffff;
      }
    }
  }

  #professionalName {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 6px 0 5px 0;

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 20px;

      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.24px;

      color: #085380;
    }
  }

  #professionalDetails {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  #professionalRating {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 68px;
    height: 21px;
    background: #5c5dac;
    border-radius: 4px;
    margin-right: 4px;

    .star {
      margin: 0;
      font-size: 12px;
      color: #cdbfff;
    }

    .star.check {
      color: #f8e71c;
    }
  }

  #professionalPrice {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 68px;
    height: 21px;
    background: #3178c6;
    border-radius: 4px;

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 20px;

      display: flex;
      align-items: center;
      letter-spacing: -0.24px;

      color: #ffffff;
    }
  }

  /* ============section blog================== */

  #blog {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 664px;
    margin-top: 41px;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0.9)
      ),
      linear-gradient(103.7deg, #1682c5 20.1%, #91d5ff 80.74%);
  }

  #blogTitle {
    margin-top: 44px;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;

    color: #415b78;
  }

  #blogContent {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    height: 497px;
    margin: 23px 101px 0 101px;
  }

  #blogCard {
    display: flex;
    flex-direction: column;
    width: 390px;
    height: 497px;
  }

  #blogImgDiv {
    width: 100%;
    height: 274.3px;

    img {
      position: absolute;
      max-width: 100%;
      max-height: 100%;
      z-index: 0;
    }
  }

  #blogDateDiv {
    display: flex;
    flex-direction: column;
    position: relative;

    width: 85px;
    height: 83px;
    margin: 20px;

    z-index: 1;
  }

  #blogDate {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 57px;
    background: #36c3fe;

    span {
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;

      display: flex;
      align-items: center;
      text-align: center;

      color: #ffffff;
    }
  }

  #blogMonth {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 26px;
    background: #425b78;

    span {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 42px;

      display: flex;
      align-items: center;
      text-align: center;

      color: #ffffff;
    }
  }

  #blogDesc {
    display: flex;
    flex-direction: column;

    padding-left: 37px;
  }

  #blogDescTitle {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 42px;

    color: #001731;

    opacity: 0.85;
  }

  #blogDescStats {
    display: flex;
    max-width: 278px;
    justify-content: space-between;
    margin-top: 5px;
  }

  #blogVector {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin-right: 3px;
      max-width: 17px;
      max-height: 17px;
    }
  }

  #blogDescDetails {
    max-width: 302px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    margin-top: 6px;

    color: #001731;

    opacity: 0.85;
  }

  /* ============section app================== */

  #app {
    display: flex;
    width: 100%;
    height: 569px;

    background: linear-gradient(
        180deg,
        #rgba(0, 0, 0, 0.5) 0%,
        rgba(208, 224, 231, 0.5) 100%
      ),
      #d0e0e7;
  }

  #appContent {
    display: flex;
    justify-content: space-between;
  }

  #appInfo {
    display: flex;
    flex-direction: column;
    width: 603px;
    height: 427px;

    margin: 80px 93px;
  }

  #appQtd {
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;

    text-align: center;

    color: #6059f7;
  }

  #appDownloadText {
    margin-top: 19.12px;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;

    text-align: center;
    color: #6059f7;

    opacity: 0.5;
  }

  #appStores {
    align-self: center;
    margin-top: 49.3px;
    width: 267px;
    height: 166.03px;
  }
`;
