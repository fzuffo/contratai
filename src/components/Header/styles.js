import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background-color: #6592fe;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 10;
`;

export const Content = styled.div`
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;

  #menuHeader {
    display: flex;
    align-items: center;
    margin: 0;
    height: 60px;

    #imgDoubts {
      margin-left: 37px;
    }

    img {
      margin-left: 57px;
    }
  }

  #loginBox {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 174px;
    height: 60px;
    margin-left: 21px;

    background-color: #8c61ff;
    color: #fff;
    font-weight: bold;
    font-size: 16px;

    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.22);
  }
`;
