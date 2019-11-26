import styled from 'styled-components';
import homeBanner from '~/assets/homeBanner.png';

export const Container = styled.div`
  background-color: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin-left: 30px;

  /* ============section banner================== */
  #banner {
    display: flex;
    background: url(${homeBanner}) no-repeat center;
    background-size: auto auto;
    width: 100vw;
    height: 100vh;
    max-height: 691px;
  }

  #find {
    display: flex;
    flex-direction: column;
    width: 499px;
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
    max-width: 495px;
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
    width: 1009px;
    height: 338px;
    /* border: 1px solid #d3e; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .effectStart {
    position: absolute;
    align-self: flex-start;
    z-index: 1;

    width: 149px;
    height: 335px;
    background: linear-gradient(90deg, #FCFCFC 37.83%, rgba(255, 255, 255, 0) 100%);
  }

  .effectEnd {
    position: absolute;
    align-self: flex-end;
    z-index: 1;

    width: 149px;
    height: 335px;
    background: linear-gradient(270deg, #FCFCFC 37.83%, rgba(255, 255, 255, 0) 100%);
  }

  #cardsScroll {
    z-index: 0;
    width: 945px;
    height: 335px;
    overflow-x: scroll;
    box-shadow: 0px 11px 35px rgba(0, 0, 0, 0.05);
    margin-left: 39px;
    display: flex;
    flex-direction: row;

    .card-content {
      width: 232.52px;
      height: 282px;
      margin-left: 20px;
      background: #FFFFFF;
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

      color: #2F80ED;
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

      color: #2F80ED;

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

      color: #2F80ED;
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

      background: #36C3FE;
      border-radius: 5px;

    }

    #price {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;



      letter-spacing: -0.24px;

      color: #FFFFFF;

      border-radius: 5px;

    }
  }


`;
