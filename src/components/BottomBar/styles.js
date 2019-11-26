import styled from 'styled-components';

export const Container = styled.div`
  height: 94px;
  background-color: #6592fe;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 29px 0 42px;
  max-width: 1440px;
  height: 94px;

  div {
    display: flex;
    align-items: center;
  }

  span {
    font-size: 20px;
    font-style: normal;
    color: #fff;
    opacity: 0.75;
    margin-left: 15px;
  }

  #helpBox {
    display: flex;
    justify-content: center;
    width: 245px;
    height: 51px;
    border: 2px solid #fff;
    box-sizing: border-box;
    border-radius: 5px;

    span {
      font-size: 20px;
      color: #fff;
      opacity: 1;
    }
  }
`;
