import styled from 'styled-components';

import backgroundHeader from '~/assets/blogHeaderBackground.png';

export const Container = styled.div`
  width: 100%;
  /* margin-top: -5px; */
  /* border: 1px solid #d33; */
  /* position: absolute;
  z-index: 0; */


  #background{
    display: flex;
    align-items: center;
    padding-left: 30px;


    background: url('${backgroundHeader}') no-repeat ;
     opacity:0.95;
    width: 100%;
    height: 117px;

    background-size: 1440px 122px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    svg{
      font-size: 36px;
      color: #fff;
      font-weight: bold

    }
    span {
      margin-left: 10px;
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;

      display: flex;
      align-items: center;

      color: #FFFFFF;

    }
  }
`;
