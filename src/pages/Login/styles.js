import styled from 'styled-components';

export const Container = styled.div`
  background: #2d7db7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 608px;
  margin: 10px 167px;


  background: #fff;
  border-radius: 20px;

  img {
    display: flex
    width: auto;
    height: 100%;
  }

  div {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    border: 1px solid red;


    div.inputMain {
      display: flex;
      flex-direction: column;
      border: 1px solid green;

    }

    label {
      font-size: 19px;
      letter-spacing: -0.1;
      color: #154176;
      font-weight: 500;
    }

  div.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55.95px;
    height: 100%;
  }



    div.inputDiv {
    display: flex;
    align-items: center;

    max-width: 406.91px;
    width: 100%;
    height: 49.36px;
    border: 2px solid #BDB8EC;
    box-sizing: border-box;
    border-radius: 5px;

    input {
      border: none;

    }

  }

  }


`;
